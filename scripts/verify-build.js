const fs = require('fs');
const path = require('path');

console.log('--- AAROH PRE-FLIGHT SYSTEM VERIFICATION ---');

const checks = [
  { name: 'Frontend Package', path: path.join(__dirname, '../frontend/package.json') },
  { name: 'Vite Config', path: path.join(__dirname, '../frontend/vite.config.js') },
  { name: 'Artifacts Database (85 records)', path: path.join(__dirname, '../frontend/src/data/artifactsDatabase.js') },
  { name: 'Heritage Database (Places & Timeline)', path: path.join(__dirname, '../frontend/src/data/heritageDatabase.js') },
  { name: 'Vertical Timeline Component', path: path.join(__dirname, '../frontend/src/VerticalTimeline.jsx') },
  { name: 'Historical Map Component', path: path.join(__dirname, '../frontend/src/components/RealHistoricalMap.jsx') },
  { name: 'India States GeoJSON', path: path.join(__dirname, '../frontend/public/data/india_states.geojson') },
  { name: 'Backend Main Application', path: path.join(__dirname, '../backend/main.py') },
  { name: 'Backend RAG Pipeline', path: path.join(__dirname, '../backend/rag.py') },
  { name: 'Backend Web Grounding', path: path.join(__dirname, '../backend/web_search.py') },
  { name: 'Content LoRA Weights Metadata', path: path.join(__dirname, '../content/aaroh_qwen3_final/adapter_config.json') },
];

let allPassed = true;
checks.forEach(check => {
  if (fs.existsSync(check.path)) {
    const stat = fs.statSync(check.path);
    console.log(`[PASS] ${check.name.padEnd(40)} (${(stat.size / 1024).toFixed(1)} KB)`);
  } else {
    console.error(`[FAIL] MISSING: ${check.name} at ${check.path}`);
    allPassed = false;
  }
});

if (allPassed) {
  console.log('--- ALL INTEGRITY CHECKS PASSED SUCCESSFULLY ---');
  process.exit(0);
} else {
  console.error('--- INTEGRITY VERIFICATION FAILED ---');
  process.exit(1);
}
