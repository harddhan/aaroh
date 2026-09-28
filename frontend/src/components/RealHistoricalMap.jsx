import { useEffect, useMemo, useRef, useState } from 'react'
import { geoMercator, geoPath, geoGraticule } from 'd3-geo'
import { Globe, Map, Navigation, Plus, Minus, RotateCcw, Compass, Sparkles, Layers } from 'lucide-react'
import { heritagePlaces, historicalJourneys } from '../data/heritageDatabase'

// Directional label offsets to prevent overlapping in dense clusters (e.g. Maharashtra)
const LABEL_OFFSETS = {
  'place-mumbai': { dx: -48, dy: -8 },
  'place-mahad': { dx: -50, dy: 16 },
  'place-satara': { dx: 46, dy: 14 },
  'place-pune': { dx: 46, dy: -6 },
  'place-nashik': { dx: -46, dy: -22 },
  'place-baroda': { dx: -46, dy: -10 },
  'place-mhow': { dx: 44, dy: -10 },
  'place-nagpur': { dx: 44, dy: 4 },
  'place-delhi': { dx: 0, dy: -18 },
  'place-kolhapur': { dx: -48, dy: 24 },
  'place-london': { dx: 0, dy: -18 },
  'place-newyork': { dx: 0, dy: -18 },
}

// SVG Virtual Coordinate Dimensions
const MAP_WIDTH = 700
const MAP_HEIGHT = 700

export default function RealHistoricalMap({
  selectedPlaceId,
  onSelectPlace,
  activeCategory = 'ALL',
  t,
  language = 'EN',
}) {
  const [mapMode, setMapMode] = useState('india') // 'india' | 'world'
  const [showJourneys, setShowJourneys] = useState(true)
  const [activeJourneyId, setActiveJourneyId] = useState('all')

  // GeoJSON data caches
  const [indiaStates, setIndiaStates] = useState(null)
  const [indiaOutline, setIndiaOutline] = useState(null)
  const [worldGeo, setWorldGeo] = useState(null)
  const [loading, setLoading] = useState(true)

  // Zoom & Pan state
  const [transform, setTransform] = useState({ k: 1, x: 0, y: 0 })
  const svgRef = useRef(null)
  const isDragging = useRef(false)
  const dragStart = useRef({ x: 0, y: 0 })

  // Auto-switch to World mode if an international place (New York, London) is selected
  useEffect(() => {
    const p = heritagePlaces.find((item) => item.id === selectedPlaceId)
    if (p && p.isInternational && mapMode !== 'world') {
      setMapMode('world')
    }
  }, [selectedPlaceId, mapMode])

  // Fetch verified local GeoJSON assets (Offline Museum Ready)
  useEffect(() => {
    let isMounted = true

    async function loadGeodata() {
      try {
        setLoading(true)
        const [statesRes, outlineRes, worldRes] = await Promise.all([
          fetch('/data/india_states.geojson'),
          fetch('/data/india_outline.geojson'),
          fetch('/data/world.geojson'),
        ])

        const statesJson = await statesRes.json()
        const outlineJson = await outlineRes.json()
        const worldJson = await worldRes.json()

        if (isMounted) {
          setIndiaStates(statesJson)
          setIndiaOutline(outlineJson)
          setWorldGeo(worldJson)
          setLoading(false)
        }
      } catch (err) {
        console.error('Failed to load local GeoJSON:', err)
        if (isMounted) setLoading(false)
      }
    }

    loadGeodata()
    return () => {
      isMounted = false
    }
  }, [])

  // Geographic Projections via d3-geo
  const projection = useMemo(() => {
    if (mapMode === 'india') {
      return geoMercator()
        .center([82.6, 22.8]) // Exact center of Republic of India
        .scale(1020)
        .translate([MAP_WIDTH / 2, MAP_HEIGHT / 2])
    } else {
      // Transatlantic & Indian Ocean World Overview (US -> UK -> India)
      return geoMercator()
        .center([14, 30])
        .scale(175)
        .translate([MAP_WIDTH / 2, MAP_HEIGHT / 2])
    }
  }, [mapMode])

  const pathGenerator = useMemo(() => {
    return geoPath().projection(projection)
  }, [projection])

  // Cartographic Graticule Coordinate Mesh (Latitude & Longitude)
  const graticulePath = useMemo(() => {
    try {
      const step = mapMode === 'india' ? [5, 5] : [15, 15]
      const graticule = geoGraticule().step(step)
      return pathGenerator(graticule())
    } catch {
      return null
    }
  }, [mapMode, pathGenerator])

  // Projected SVG Paths for Land & State Boundaries
  const mapPaths = useMemo(() => {
    if (mapMode === 'india') {
      const statePaths =
        indiaStates && indiaStates.features
          ? indiaStates.features
              .map((feat, idx) => {
                const d = pathGenerator(feat)
                if (!d || d.includes('-4324') || d.includes('2083.95')) return null
                return {
                  id: `${feat.properties?.name || 'state'}-${idx}`,
                  d,
                  name: feat.properties?.name || '',
                }
              })
              .filter(Boolean)
          : []

      const outlinePath = indiaOutline ? pathGenerator(indiaOutline) : null
      return { statePaths, outlinePath }
    } else {
      const countryPaths =
        worldGeo && worldGeo.features
          ? worldGeo.features
              .map((feat, idx) => {
                const d = pathGenerator(feat)
                if (!d || d.includes('-4324') || d.includes('2083.95')) return null
                return {
                  id: `${feat.properties?.name || 'country'}-${idx}`,
                  d,
                  name: feat.properties?.name || '',
                }
              })
              .filter(Boolean)
          : []
      return { countryPaths }
    }
  }, [mapMode, indiaStates, indiaOutline, worldGeo, pathGenerator])

  // Filtered Places based on category and map mode
  const visiblePlaces = useMemo(() => {
    return heritagePlaces.filter((p) => {
      if (mapMode === 'india' && p.isInternational) return false
      if (activeCategory !== 'ALL' && !p.categories.includes(activeCategory)) return false
      return true
    })
  }, [mapMode, activeCategory])

  // Projected Place Markers [x, y] coordinates
  const projectedMarkers = useMemo(() => {
    return visiblePlaces.map((p) => {
      const coords = [p.coordinates.lng, p.coordinates.lat]
      const [x, y] = projection(coords) || [-9999, -9999]
      return {
        ...p,
        svgX: x,
        svgY: y,
      }
    })
  }, [visiblePlaces, projection])

  // Historical Cartographic Water Labels (Arabian Sea, Bay of Bengal, Indian Ocean)
  const waterLabels = useMemo(() => {
    if (mapMode === 'india') {
      const arabian = projection([67.5, 17.0])
      const bengal = projection([89.8, 14.5])
      const indian = projection([78.5, 5.0])
      return [
        { name: 'ARABIAN SEA', x: arabian ? arabian[0] : 180, y: arabian ? arabian[1] : 450, rotate: -25 },
        { name: 'BAY OF BENGAL', x: bengal ? bengal[0] : 540, y: bengal ? bengal[1] : 460, rotate: 20 },
        { name: 'INDIAN OCEAN', x: indian ? indian[0] : 360, y: indian ? indian[1] : 640, rotate: 0 },
      ]
    } else {
      const atlantic = projection([-30, 28])
      const indian = projection([75, -5])
      return [
        { name: 'NORTH ATLANTIC OCEAN', x: atlantic ? atlantic[0] : 200, y: atlantic ? atlantic[1] : 300, rotate: -20 },
        { name: 'INDIAN OCEAN', x: indian ? indian[0] : 500, y: indian ? indian[1] : 450, rotate: 0 },
      ]
    }
  }, [mapMode, projection])

  // Historical Journey Curved Lines
  const journeyLines = useMemo(() => {
    if (!showJourneys) return []

    const journeysToRender =
      activeJourneyId === 'all'
        ? historicalJourneys
        : historicalJourneys.filter((j) => j.id === activeJourneyId)

    const lines = []

    journeysToRender.forEach((journey) => {
      for (let i = 0; i < journey.nodes.length - 1; i++) {
        const fromPlace = heritagePlaces.find((p) => p.id === journey.nodes[i])
        const toPlace = heritagePlaces.find((p) => p.id === journey.nodes[i + 1])

        if (!fromPlace || !toPlace) continue
        // In India mode, skip paths with international endpoints
        if (mapMode === 'india' && (fromPlace.isInternational || toPlace.isInternational)) {
          continue
        }

        const fromPt = projection([fromPlace.coordinates.lng, fromPlace.coordinates.lat])
        const toPt = projection([toPlace.coordinates.lng, toPlace.coordinates.lat])

        if (!fromPt || !toPt) continue

        const [x1, y1] = fromPt
        const [x2, y2] = toPt

        // Compute curved midpoint
        const dx = x2 - x1
        const dy = y2 - y1
        const dist = Math.sqrt(dx * dx + dy * dy)
        if (dist < 4) continue // Skip nearly identical points

        // Offset control point perpendicular to line for authentic atlas curvature
        const midX = (x1 + x2) / 2
        const midY = (y1 + y2) / 2
        const curvature = Math.min(28, dist * 0.18)
        const ctrlX = midX - (dy / dist) * curvature
        const ctrlY = midY + (dx / dist) * curvature

        lines.push({
          id: `${journey.id}-${fromPlace.id}-${toPlace.id}-${i}`,
          d: `M ${x1.toFixed(1)} ${y1.toFixed(1)} Q ${ctrlX.toFixed(1)} ${ctrlY.toFixed(1)} ${x2.toFixed(1)} ${y2.toFixed(1)}`,
          color: journey.color,
          title: journey.title,
          category: journey.category,
        })
      }
    })

    return lines
  }, [showJourneys, activeJourneyId, mapMode, projection])

  // Center on selected place when changed
  useEffect(() => {
    if (!selectedPlaceId) return
    const p = heritagePlaces.find((item) => item.id === selectedPlaceId)
    if (!p) return
    if (mapMode === 'india' && p.isInternational) return

    const pt = projection([p.coordinates.lng, p.coordinates.lat])
    if (!pt) return

    // Smoothly pan towards the marker without violent zooming
    const targetX = MAP_WIDTH / 2 - pt[0]
    const targetY = MAP_HEIGHT / 2 - pt[1]

    // Soft pan limit
    const boundedX = Math.max(-180, Math.min(180, targetX * 0.45))
    const boundedY = Math.max(-180, Math.min(180, targetY * 0.45))

    setTransform((prev) => ({
      ...prev,
      x: boundedX,
      y: boundedY,
    }))
  }, [selectedPlaceId, projection, mapMode])

  // Touch and Mouse Drag / Pan Handlers
  const handlePointerDown = (e) => {
    isDragging.current = true
    dragStart.current = {
      x: e.clientX - transform.x,
      y: e.clientY - transform.y,
    }
  }

  const handlePointerMove = (e) => {
    if (!isDragging.current) return
    const newX = e.clientX - dragStart.current.x
    const newY = e.clientY - dragStart.current.y
    // Limit pan bounds to prevent map from escaping canvas
    const maxPan = 320 * transform.k
    setTransform((prev) => ({
      ...prev,
      x: Math.max(-maxPan, Math.min(maxPan, newX)),
      y: Math.max(-maxPan, Math.min(maxPan, newY)),
    }))
  }

  const handlePointerUp = () => {
    isDragging.current = false
  }

  // Zoom Buttons
  const zoomIn = () => {
    setTransform((prev) => ({
      ...prev,
      k: Math.min(2.4, prev.k + 0.3),
    }))
  }

  const zoomOut = () => {
    setTransform((prev) => ({
      ...prev,
      k: Math.max(0.85, prev.k - 0.3),
    }))
  }

  const resetMap = () => {
    setTransform({ k: 1, x: 0, y: 0 })
  }

  return (
    <div className="aaroh-real-map-container" role="region" aria-label="Historical Geographic Map">
      {/* Top Map Toolbar: Mode Selector & Journey Layers */}
      <div className="aaroh-map-top-toolbar">
        <div className="aaroh-map-mode-pill-group">
          <button
            type="button"
            className={`aaroh-map-mode-btn ${mapMode === 'india' ? 'active' : ''}`}
            onClick={() => {
              setMapMode('india')
              resetMap()
            }}
          >
            <Map size={13} />
            <span>{language === 'HI' ? 'भारत एटलस' : 'India Atlas'}</span>
          </button>
          <button
            type="button"
            className={`aaroh-map-mode-btn ${mapMode === 'world' ? 'active' : ''}`}
            onClick={() => {
              setMapMode('world')
              resetMap()
            }}
          >
            <Globe size={13} />
            <span>{language === 'HI' ? 'वैश्विक यात्रा' : 'World Journey'}</span>
          </button>
        </div>

        {/* Journey Lines Toggle & Legend */}
        <div className="aaroh-journey-toggle-wrap">
          <button
            type="button"
            className={`aaroh-journey-pill-btn ${showJourneys ? 'active' : ''}`}
            onClick={() => setShowJourneys(!showJourneys)}
            title="Toggle historical relationship lines"
          >
            <Sparkles size={12} />
            <span>{language === 'HI' ? 'ऐतिहासिक मार्ग' : 'Journey Paths'}</span>
          </button>

          {showJourneys && (
            <select
              className="aaroh-journey-select"
              value={activeJourneyId}
              onChange={(e) => setActiveJourneyId(e.target.value)}
              aria-label="Filter journey paths"
            >
              <option value="all">All Paths (Chronology)</option>
              <option value="journey-education">Education (Mhow → LSE)</option>
              <option value="journey-movements">Civil Rights (Mahad / Nashik)</option>
              <option value="journey-constitution">Constitution (Delhi)</option>
              <option value="journey-dhamma">Dhamma (Nagpur)</option>
            </select>
          )}
        </div>
      </div>

      {/* Interactive SVG Canvas */}
      <div
        className="aaroh-map-interactive-viewport"
        onPointerDown={handlePointerDown}
        onPointerMove={handlePointerMove}
        onPointerUp={handlePointerUp}
        onPointerLeave={handlePointerUp}
      >
        {loading ? (
          <div className="aaroh-map-loading-state">
            <div className="aaroh-map-spinner" />
            <span>Rendering authentic historical geography...</span>
          </div>
        ) : (
          <svg
            ref={svgRef}
            viewBox={`0 0 ${MAP_WIDTH} ${MAP_HEIGHT}`}
            className="aaroh-authentic-svg-canvas"
            preserveAspectRatio="xMidYMid meet"
          >
            <defs>
              {/* Archival Maritime Ocean Gradient */}
              <radialGradient id="oceanGradient" cx="50%" cy="50%" r="75%">
                <stop offset="0%" stopColor="#DFEBF3" />
                <stop offset="55%" stopColor="#D0E3F0" />
                <stop offset="100%" stopColor="#BCD5E6" />
              </radialGradient>

              {/* Nautical Wave Ripple Pattern */}
              <pattern id="nauticalWaves" width="48" height="24" patternUnits="userSpaceOnUse" opacity="0.35">
                <path d="M 0 12 Q 12 6, 24 12 T 48 12" fill="none" stroke="#9BBECD" strokeWidth="0.8" strokeDasharray="3 3" />
              </pattern>

              {/* Coastal Land Depth Filter */}
              <filter id="coastalDepth" x="-10%" y="-10%" width="120%" height="120%">
                <feDropShadow dx="0" dy="2.5" stdDeviation="4.5" floodColor="#0E3352" floodOpacity="0.28" />
              </filter>

              {/* Marker Glow & Shadow */}
              <filter id="markerShadow" x="-20%" y="-20%" width="140%" height="140%">
                <feDropShadow dx="0" dy="2" stdDeviation="2.5" floodColor="#0D1720" floodOpacity="0.32" />
              </filter>
            </defs>

            {/* Archival Maritime Water Base (Oversized to guarantee continuous sea across aspect ratios) */}
            <rect x="-800" y="-800" width="2400" height="2400" fill="#D3E5F2" />
            <rect x="-800" y="-800" width="2400" height="2400" fill="url(#oceanGradient)" />
            <rect x="-800" y="-800" width="2400" height="2400" fill="url(#nauticalWaves)" pointerEvents="none" />

            {/* Cartographic Compass Rose */}
            <g transform="translate(630, 70)" opacity="0.65" pointerEvents="none">
              <circle r="22" fill="none" stroke="#719EB9" strokeWidth="1" strokeDasharray="2 3" />
              <line x1="0" y1="-26" x2="0" y2="26" stroke="#123F6B" strokeWidth="1.6" />
              <line x1="-26" y1="0" x2="26" y2="0" stroke="#719EB9" strokeWidth="1.2" />
              <text x="0" y="-29" textAnchor="middle" fontSize="9" fontWeight="800" fill="#123F6B">N</text>
            </g>

            {/* Transform Group (Zoom & Pan) */}
            <g transform={`translate(${transform.x}, ${transform.y}) scale(${transform.k})`}>
              {/* Cartographic Graticule Grid Lines */}
              {graticulePath && (
                <path
                  d={graticulePath}
                  fill="none"
                  className="aaroh-geo-graticule"
                />
              )}

              {/* Historical Cartographic Water Body Labels */}
              <g className="aaroh-water-labels" pointerEvents="none">
                {waterLabels.map((wl, idx) => (
                  <text
                    key={idx}
                    x={wl.x}
                    y={wl.y}
                    transform={wl.rotate ? `rotate(${wl.rotate}, ${wl.x}, ${wl.y})` : undefined}
                    textAnchor="middle"
                    className="aaroh-geo-water-label"
                  >
                    {wl.name}
                  </text>
                ))}
              </g>

              {/* ----------------------------------------------------
                  1. LAND MASS & BOUNDARIES (Real Geographic GeoJSON)
              ---------------------------------------------------- */}
              {mapMode === 'india' ? (
                <g className="aaroh-geo-india-group">
                  {/* High-visibility India Base Land Outline with coastal drop-shadow */}
                  {mapPaths.outlinePath && (
                    <path
                      d={mapPaths.outlinePath}
                      className="aaroh-geo-land-base"
                      filter="url(#coastalDepth)"
                    />
                  )}

                  {/* Real State Boundaries */}
                  {mapPaths.statePaths.map((state) => (
                    <path
                      key={state.id}
                      d={state.d}
                      className="aaroh-geo-state-boundary"
                    >
                      <title>{state.name}</title>
                    </path>
                  ))}
                </g>
              ) : (
                <g className="aaroh-geo-world-group">
                  {mapPaths.countryPaths?.map((country) => (
                    <path
                      key={country.id}
                      d={country.d}
                      className="aaroh-geo-country-boundary"
                      filter="url(#coastalDepth)"
                    >
                      <title>{country.name}</title>
                    </path>
                  ))}
                </g>
              )}

              {/* ----------------------------------------------------
                  2. HISTORICAL JOURNEY CURVED LINES
              ---------------------------------------------------- */}
              {journeyLines.map((line) => (
                <g key={line.id} className="aaroh-journey-path-group" pointerEvents="none">
                  {/* Outer subtle glow line */}
                  <path
                    d={line.d}
                    fill="none"
                    stroke="#FFFDF8"
                    strokeWidth="3.5"
                    strokeOpacity="0.85"
                    strokeLinecap="round"
                  />
                  {/* Primary archival relationship line */}
                  <path
                    d={line.d}
                    fill="none"
                    stroke={line.color}
                    strokeWidth="2"
                    strokeDasharray="4 3"
                    strokeLinecap="round"
                    className="aaroh-journey-dash-anim"
                  />
                </g>
              ))}

              {/* ----------------------------------------------------
                  3. HISTORICAL LOCATION PINS & MARKERS
              ---------------------------------------------------- */}
              {projectedMarkers.map((p) => {
                const isSelected = p.id === selectedPlaceId
                const offset = LABEL_OFFSETS[p.id] || { dx: 0, dy: isSelected ? -16 : -13 }
                return (
                  <g
                    key={p.id}
                    transform={`translate(${p.svgX}, ${p.svgY})`}
                    className={`aaroh-geo-marker-node ${isSelected ? 'is-selected' : ''}`}
                    onClick={(e) => {
                      e.stopPropagation()
                      onSelectPlace(p.id)
                    }}
                    role="button"
                    tabIndex={0}
                    aria-label={`${p.name}, ${p.state}`}
                  >
                    {/* Generous Touch Hitbox */}
                    <circle r="22" fill="transparent" cursor="pointer" />

                    {/* Selected Pulse Ring */}
                    {isSelected && (
                      <circle
                        r="16"
                        fill="none"
                        stroke="#B88A3B"
                        strokeWidth="2"
                        className="aaroh-marker-pulse-ring"
                      />
                    )}

                    {/* Outer Pin Halo */}
                    <circle
                      r={isSelected ? '9' : '6.5'}
                      fill={isSelected ? '#B88A3B' : '#FFFDF8'}
                      stroke={isSelected ? '#123F6B' : '#123F6B'}
                      strokeWidth={isSelected ? '2' : '1.5'}
                      filter="url(#markerShadow)"
                    />

                    {/* Center Core Dot */}
                    <circle
                      r={isSelected ? '4.5' : '3.5'}
                      fill={isSelected ? '#123F6B' : '#0B5C58'}
                    />

                    {/* Connecting Pointer Line for Offset Badges */}
                    {offset.dx !== 0 && (
                      <line
                        x1="0"
                        y1="0"
                        x2={offset.dx > 0 ? offset.dx - 38 : offset.dx + 38}
                        y2={offset.dy}
                        stroke={isSelected ? '#123F6B' : '#6A92AB'}
                        strokeWidth="1"
                        strokeDasharray="2 2"
                        opacity="0.8"
                        pointerEvents="none"
                      />
                    )}

                    {/* Location Label Badge with Cluster Offsets */}
                    <g
                      transform={`translate(${offset.dx}, ${offset.dy})`}
                      pointerEvents="none"
                      className="aaroh-marker-label-tag"
                    >
                      <rect
                        x="-38"
                        y="-10"
                        width="76"
                        height="16"
                        rx="3"
                        fill={isSelected ? '#123F6B' : 'rgba(255, 253, 248, 0.96)'}
                        stroke={isSelected ? '#B88A3B' : 'rgba(18, 63, 107, 0.35)'}
                        strokeWidth={isSelected ? '1.5' : '1'}
                      />
                      <text
                        x="0"
                        y="1"
                        textAnchor="middle"
                        dominantBaseline="middle"
                        fontSize="8.5"
                        fontWeight={isSelected ? '800' : '700'}
                        fill={isSelected ? '#FFFDF8' : '#123F6B'}
                        fontFamily="var(--ac-font)"
                        letterSpacing="0.04em"
                      >
                        {p.name.toUpperCase()}
                      </text>
                    </g>
                  </g>
                )
              })}
            </g>
          </svg>
        )}

        {/* Bottom Right Floating Zoom & Pan Controls */}
        <div className="aaroh-map-floating-controls" role="group" aria-label="Map Zoom and Navigation Controls">
          <button
            type="button"
            className="aaroh-map-ctrl-btn"
            onClick={zoomIn}
            aria-label="Zoom In"
            title="Zoom In"
          >
            <Plus size={16} />
          </button>
          <button
            type="button"
            className="aaroh-map-ctrl-btn"
            onClick={zoomOut}
            aria-label="Zoom Out"
            title="Zoom Out"
          >
            <Minus size={16} />
          </button>
          <button
            type="button"
            className="aaroh-map-ctrl-btn"
            onClick={resetMap}
            aria-label="Reset Map View"
            title="Reset to Initial View"
          >
            <RotateCcw size={14} />
          </button>
        </div>

        {/* Map Scale & Archival Citation Badge */}
        <div className="aaroh-map-cartography-stamp" aria-hidden="true">
          <span className="stamp-kicker">AAROH HISTORICAL GEOGRAPHY</span>
          <span className="stamp-sub">Accurate Boundaries & Primary Coordinates</span>
        </div>
      </div>
    </div>
  )
}
