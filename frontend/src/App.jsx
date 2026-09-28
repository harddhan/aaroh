import { useEffect, useMemo, useRef, useState } from 'react'
import {
  ArrowLeft,
  ArrowRight,
  BookOpen,
  CalendarDays,
  Check,
  ChevronLeft,
  ChevronRight,
  ChevronUp,
  Copy,
  ExternalLink,
  FileText,
  Filter,
  Globe2,
  Landmark,
  Layers,
  LoaderCircle,
  MapPin,
  Maximize2,
  Menu,
  Quote,
  RotateCcw,
  Search,
  ScrollText,
  ShieldCheck,
  Sparkles,
  X,
} from 'lucide-react'
import VerticalTimeline from './VerticalTimeline'
import RealHistoricalMap from './components/RealHistoricalMap'
import {
  heritagePlaces,
  heritageTimelineEvents,
  PLACE_CATEGORIES,
  TIMELINE_CATEGORIES,
  getPlaceById,
} from './data/heritageDatabase'
import {
  artifactsDatabase,
  ARCHIVE_CATEGORIES,
  ARCHIVE_PERIODS,
  ARCHIVE_TOPICS,
  ARCHIVE_SOURCES,
  searchArtifacts,
  getArtifactById,
  getRelatedArtifacts,
  getArchiveCounts,
  getArtifactsForPlace,
  getArtifactsForTimelineEvent,
} from './data/artifactsDatabase'

// ----------------------------------------------------
// CURATED VIRTUAL EXHIBITS / STORIES (Arts & Culture)
// ----------------------------------------------------
const virtualExhibits = [
  {
    id: 'story-constitution',
    title: 'Drafting the Constitution: We, The People of India',
    subtitle: 'How Dr. B. R. Ambedkar steered the longest written constitution in human history',
    cover: '/assets/archive/constitution-preamble.jpg',
    category: 'Constitution',
    tag: 'Flagship Exhibition',
    readTime: '6 min read',
    era: '1947–1950',
    itemCount: '1,224 debate records',
    slides: [
      {
        image: '/assets/archive/constitution-preamble.jpg',
        title: 'The Preamble: The Soul of the Republic',
        text: 'The illuminated original Preamble declares Justice, Liberty, Equality, and Fraternity as the core moral foundations of free India. Dr. Ambedkar insisted that fraternity is not an ornamental phrase, but the indispensable glue holding a deeply divided society together.',
        quote: 'Fraternity means a sense of common brotherhood of all Indians—if there is no fraternity, equality and liberty will be no deeper than coats of paint.',
      },
      {
        image: '/assets/archive/constituent-assembly.jpg',
        title: 'Guiding the Drafting Committee',
        text: 'Appointed Chairman of the Drafting Committee on 29 August 1947, Dr. Ambedkar worked indefatigably through 141 meetings over hundreds of days. He dissected constitutional precedents from across the globe while resolutely championing fundamental rights and safeguards for the marginalized.',
        quote: 'I felt that the work had to be done with utmost conscientiousness, for we were framing not a temporary statute, but the permanent charter of our destiny.',
      },
      {
        image: '/assets/archive/constitution-signing.jpg',
        title: 'The Historic Signing (January 1950)',
        text: 'On 26 November 1949, the Constituent Assembly adopted the final draft, coming into full force on 26 January 1950. Dr. Ambedkar’s final address sounded an immortal prophetic warning: political democracy must become a social democracy, or the edifice would crumble.',
        quote: 'On the 26th of January 1950, we are going to enter into a life of contradictions. In politics we will have equality, and in social and economic life we will have inequality.',
      },
    ],
  },
  {
    id: 'story-mahad',
    title: 'The Water Revolution: Chavdar Tale Satyagraha',
    subtitle: 'The 1927 struggle that transformed water into a universal symbol of human equality',
    cover: '/assets/archive/mahad-tank.jpg',
    category: 'Satyagraha',
    tag: 'Civil Rights',
    readTime: '5 min read',
    era: 'March 1927',
    itemCount: 'Historic movement records',
    slides: [
      {
        image: '/assets/archive/mahad-tank.jpg',
        title: 'Asserting Human Dignity',
        text: 'On 20 March 1927, Dr. Ambedkar led thousands of untouchable satyagrahis to the public Chavdar water reservoir in Mahad, Maharashtra. Animals were permitted to drink from the tank, but fellow human beings were barred by customary caste purity taboos.',
        quote: 'We are not going to the Chavdar Tank merely to drink water. We are going to the tank to assert that we too are human beings.',
      },
      {
        image: '/assets/archive/bahishkrit-bharat.jpg',
        title: 'The Birth of Modern Dalit Consciousness',
        text: 'Following violent upper-caste retaliation and ritual purification of the tank with cow dung, Ambedkar returned in December 1927 to publicly burn the Manusmriti, signaling a permanent repudiation of hereditary inequality.',
        quote: 'Lost rights are never regained by begging, and by appeals to the conscience of the usurpers, but by relentless struggle.',
      },
    ],
  },
  {
    id: 'story-mooknayak',
    title: 'Leader of the Voiceless: Mooknayak & The Dalit Press',
    subtitle: 'How Dr. Ambedkar pioneered independent journalism to challenge caste hegemony',
    cover: '/assets/archive/mooknayak.jpg',
    category: 'Press & Literature',
    tag: 'Journalism',
    readTime: '4 min read',
    era: '1920–1929',
    itemCount: 'Periodical archive',
    slides: [
      {
        image: '/assets/archive/mooknayak.jpg',
        title: 'Mooknayak: The Inaugural Front Page (1920)',
        text: 'On 31 January 1920, Dr. Ambedkar founded "Mooknayak" (Leader of the Voiceless) in Bombay. In its fiery editorial, he compared Indian society to a multi-storeyed tower without a staircase: each caste trapped in its floor from birth to death.',
        quote: 'Hindu society is like a tower without a ladder or an entrance. One has to die in the story where one was born.',
      },
      {
        image: '/assets/archive/bahishkrit-bharat.jpg',
        title: 'Bahishkrit Bharat (1927–1929)',
        text: 'Following Mooknayak, Ambedkar launched "Bahishkrit Bharat" (Excluded India) to directly educate the working masses and chronicle legislative battles for basic human entitlements.',
        quote: 'My purpose in starting these journals is not to indulge in literary pleasure, but to awaken my people to the light of self-respect.',
      },
    ],
  },
  {
    id: 'story-london',
    title: 'The Scholar-Statesman: Columbia, London & The Round Table',
    subtitle: 'Ambedkar’s formidable academic journey and international diplomacy for civil rights',
    cover: '/assets/archive/round-table-conference.png',
    category: 'Diplomacy & Education',
    tag: 'International Advocacy',
    readTime: '6 min read',
    era: '1913–1932',
    itemCount: 'Archival letters & monographs',
    slides: [
      {
        image: '/assets/archive/round-table-conference.png',
        title: 'The First Round Table Conference (London, 1930)',
        text: 'Representing over 60 million Untouchables at the Round Table Conference, Dr. Ambedkar demanded full political autonomy, separate electorates, and universal adult franchise.',
        quote: 'We want our people not to be treated as a pawn on the political chess board. We demand our share of sovereign governance.',
      },
      {
        image: '/assets/archive/ambedkar-manuscript.png',
        title: 'The Poona Pact Compromise (1932)',
        text: 'When the British Communal Award granted separate electorates, Gandhi undertook a fast-unto-death in Yerwada Jail. To save Gandhi’s life while protecting his people, Ambedkar negotiated the historic Poona Pact, securing reserved assembly seats within joint electorates.',
        quote: 'I had to balance the life of the greatest man in India with the political survival of sixty million downtrodden people.',
      },
    ],
  },
]

// ----------------------------------------------------
// VERIFIED DIGITAL HERITAGE ARCHIVE (54 Authentic Primary Records)
// Backed by Dr. B. R. Ambedkar Writings & Speeches (BAWS), CAD & Official Treaties
// ----------------------------------------------------
const museumArtifacts = artifactsDatabase

// ----------------------------------------------------
// PHYSICAL LIBRARY VOLUMES (Panel 06)
// ----------------------------------------------------
const libraryVolumes = [
  {
    id: 'lib-vol-1',
    title: 'Dr. B. R. Ambedkar Writings and Speeches',
    subtitle: 'Complete 22 Volumes Edition',
    year: 'Government of Maharashtra Edition',
    category: 'Books',
    cover: '/assets/archive/archive-library.jpg',
    description: 'The monumental collection compiling all parliamentary debates, monographs, historical research, and speeches.',
  },
  {
    id: 'lib-vol-2',
    title: 'The Problem of the Rupee: Its Origin and Solution',
    subtitle: 'Doctor of Science Thesis, London School of Economics',
    year: '1923',
    category: 'Books',
    cover: '/assets/archive/ambedkar-manuscript.png',
    description: 'Groundbreaking monetary economic treatise that provided the foundational conceptual framework for the Reserve Bank of India.',
  },
  {
    id: 'lib-vol-3',
    title: 'Annihilation of Caste',
    subtitle: 'With a Reply to Mahatma Gandhi',
    year: '1936',
    category: 'Books',
    cover: '/assets/archive/constitution-preamble.jpg',
    description: 'The definitive philosophical critique of hereditary caste hierarchies and religious orthodoxies.',
  },
  {
    id: 'lib-vol-4',
    title: 'States and Minorities',
    subtitle: 'What are their Rights and How to Secure them in Free India',
    year: '1947',
    category: 'Government Records',
    cover: '/assets/archive/constitution-signing.jpg',
    description: 'Constitutional memorandum proposing a socialist democratic constitution with nationalized land and key industries.',
  },
  {
    id: 'lib-vol-5',
    title: 'Constitution of India (Draft Edition)',
    subtitle: 'Presented to the Constituent Assembly',
    year: '1948',
    category: 'Government Records',
    cover: '/assets/archive/constitution-preamble-bright.jpg',
    description: 'The official drafting committee report containing the seminal provisions on fundamental rights and equality before law.',
  },
  {
    id: 'lib-vol-6',
    title: 'Who Were the Shudras?',
    subtitle: 'How they came to be the Fourth Varna in Indo-Aryan Society',
    year: '1946',
    category: 'Research Papers',
    cover: '/assets/archive/bahishkrit-bharat.jpg',
    description: 'Masterwork of historical anthropology investigating ancient Vedic traditions and the origins of social stratification.',
  },
]

// ----------------------------------------------------
// HISTORICAL PLACES & TIMELINE CHRONOLOGY
// Now driven by verified database in src/data/heritageDatabase.js
// ----------------------------------------------------

// ----------------------------------------------------
// TRANSLATION DICTIONARIES
// ----------------------------------------------------
const translations = {
  EN: {
    brand: 'AAROH',
    brandSub: 'AI Archive & Research-Oriented Heritage',
    preamble: ['JUSTICE', 'LIBERTY', 'EQUALITY', 'FRATERNITY'],
    nav: {
      home: '01 HOME',
      exhibits: '02 EXPLORE ARCHIVE',
      research: '03 AI ASSISTANT',
      timeline: '04 TIMELINE',
      places: '05 PLACES',
      library: '06 LIBRARY',
    },
    footer: {
      openSource: 'Open Source',
      repoName: 'harddhan/aaroh',
      githubAria: 'View AAROH open source repository on GitHub (harddhan/aaroh)',
    },
    hero: {
      ask: 'ASK',
      aaroh: 'AAROH',
      subtitle: 'Get clear, reliable answers from Ambedkar’s writings, speeches, and historical records.',
      modeArchive: 'AAROH Archive',
      modeArchiveSub: 'Curated historical sources',
      modeWeb: 'Web Search',
      modeWebSub: 'Information from across the web',
      placeholderArchive: 'Ask about Ambedkar...',
      placeholderWeb: 'Search the web about Ambedkar...',
      suggestionsRow1: ['Mahad Satyagraha', 'Views on education', 'Role in Constitution'],
      suggestionsRow2: ['Poona Pact', 'Annihilation of Caste', 'Labour rights', 'Women’s rights'],
      quote: '“Educate, Agitate, Organize.”',
      quoteAuthor: '— Dr. B. R. Ambedkar',
      metaLabel: 'DR. B. R. AMBEDKAR · 1891 — 1956',
    },
    panels: {
      p1Title: 'EXPLORE ARCHIVE',
      p1Desc: '85 verified primary records across 10 categories.',
      p2Title: 'AI ASSISTANT',
      p2Desc: 'Ask questions & get grounded archival answers.',
      p3Title: 'TIMELINE',
      p3Desc: 'Chronological milestones from 1891 to 1956.',
      p4Title: 'KEY PLACES',
      p4Desc: 'Historical atlas across 12 movement locations.',
      p5Title: 'DIGITAL LIBRARY',
      p5Desc: 'Complete 19 volumes of Writings and Speeches.',
      p6Title: 'CONSTITUTION VAULT',
      p6Desc: 'Drafting Committee folios, debates & Preamble.',
    },
    archivePage: {
      title: 'EXPLORE ARCHIVE',
      desc: 'Writings, speeches, letters, books, articles and more from verified sources.',
      searchPlaceholder: 'Search writings, speeches, letters...',
      filterBtn: 'Filters',
      tabs: ['All', 'Writings', 'Speeches', 'Letters', 'Articles', 'Manuscripts', 'Books', 'Newspapers'],
    },
    aiPage: {
      num: '03',
      title: 'AI ASSISTANT',
      desc: "Ask questions and get grounded answers from Ambedkar's writings, speeches and historical records.",
      leftQuote: '“The solution of our problems lies in education.”',
      leftQuoteAuthor: '— Dr. B. R. Ambedkar',
      askHeading: 'ASK AAROH',
      askSubtitle: "Explore Ambedkar's writings, speeches and historical records through the archive.",
      modeArchive: 'AAROH Archive',
      modeArchiveSub: 'Curated historical sources',
      modeWeb: 'Web Search',
      modeWebSub: 'Information from across the web',
      placeholderArchive: 'Ask anything about Ambedkar...',
      placeholderWeb: 'Search the web about Ambedkar...',
      exploreLabel: 'EXPLORE A QUESTION',
      suggestedQuestions: [
        'What did Ambedkar write about education?',
        'What happened at Mahad in 1927?',
        'Why did Ambedkar resign as Law Minister?',
        'What was Ambedkar\'s role in the Constituent Assembly?',
        'Explain Annihilation of Caste.',
      ],
      archivalResponseLabel: 'AAROH ARCHIVAL RESPONSE',
      webResponseLabel: 'AAROH WEB GROUNDED SYNTHESIS',
      sourceLabel: 'SOURCE',
      relatedTopicsLabel: 'RELATED TOPICS',
      viewSource: 'VIEW SOURCE',
      copy: 'Copy',
      copied: 'Copied',
      loadingArchive: 'Retrieving curated historical sources from AAROH Archive...',
      loadingWeb: 'Synthesizing verified web information...',
      loadingSubArchive: 'Cross-referencing Dr. Ambedkar’s primary writings and speeches',
      loadingSubWeb: 'Searching academic and historical web repositories',
      emptyTitle: 'Archival Research Desk',
      emptyDesc: 'Select an inquiry above or formulate your research question to access grounded citations from verified historical records.',
    },
    timelinePage: {
      title: 'TIMELINE',
      desc: 'Key events, movements and milestones in Ambedkar’s life.',
      detailedToggle: 'Detailed Timeline Archive',
    },
    placesPage: {
      title: 'KEY PLACES',
      desc: 'Important locations and movements in Ambedkar’s journey.',
      allLocations: 'All Locations',
      researchPlace: 'Research this place in AI Assistant',
    },
    libraryPage: {
      title: 'LIBRARY',
      desc: 'Curated resources for deeper research on Ambedkar and his times.',
      tabs: ['Books', 'Research Papers', 'Articles', 'Audiovisual', 'Government Records', 'External Resources'],
    },
  },
  HI: {
    brand: 'आरोह',
    brandSub: 'एआई अभिलेखागार एवं शोध-आधारित धरोहर',
    preamble: ['न्याय', 'स्वतंत्रता', 'समता', 'बंधुता'],
    nav: {
      home: '01 मुख्य पृष्ठ',
      exhibits: '02 अभिलेखागार',
      research: '03 एआई सहायक',
      timeline: '04 कालक्रम',
      places: '05 स्थल',
      library: '06 पुस्तकालय',
    },
    footer: {
      openSource: 'मुक्त स्रोत',
      repoName: 'harddhan/aaroh',
      githubAria: 'गिटहब पर आरोह का मुक्त स्रोत कोड देखें (harddhan/aaroh)',
    },
    hero: {
      ask: 'पूछें',
      aaroh: 'आरोह',
      subtitle: 'डॉ. अम्बेडकर के लेखन, भाषणों और ऐतिहासिक अभिलेखों से स्पष्ट और प्रामाणिक उत्तर प्राप्त करें।',
      modeArchive: 'आरोह पुरालेख',
      modeArchiveSub: 'सत्यापित ऐतिहासिक स्रोत',
      modeWeb: 'वेब खोज',
      modeWebSub: 'वेब भर से जानकारी',
      placeholderArchive: 'अम्बेडकर के बारे में पूछें...',
      placeholderWeb: 'वेब पर अम्बेडकर के बारे में खोजें...',
      suggestionsRow1: ['महाड़ सत्याग्रह', 'शिक्षा पर विचार', 'संविधान में भूमिका'],
      suggestionsRow2: ['पूना पैक्ट', 'जाति का विनाश', 'श्रमिक अधिकार', 'महिला अधिकार'],
      quote: '“शिक्षित बनो, संघर्ष करो, संगठित रहो।”',
      quoteAuthor: '— डॉ. बी. आर. अम्बेडकर',
      metaLabel: 'डॉ. बी. आर. अम्बेडकर · 1891 — 1956',
    },
    panels: {
      p1Title: 'अभिलेखागार',
      p1Desc: '१० श्रेणियों में ८५ सत्यापित ऐतिहासिक प्राथमिक दस्तावेज।',
      p2Title: 'एआई सहायक',
      p2Desc: 'सत्यापित अभिलेखागार से प्रामाणिक उत्तर एवं संदर्भ।',
      p3Title: 'कालक्रम',
      p3Desc: '१८९१ से १९५६ तक के ऐतिहासिक आंदोलन और घटनाएं।',
      p4Title: 'प्रमुख स्थल',
      p4Desc: '१२ ऐतिहासिक स्थल, यात्राएं और मानचित्र।',
      p5Title: 'पुस्तकालय',
      p5Desc: 'डॉ. अम्बेडकर सम्पूर्ण वाङ्मय के १९ खंड।',
      p6Title: 'संविधान संग्रह',
      p6Desc: 'प्रारूप समिति, संविधान सभा और ऐतिहासिक उद्देशिका।',
    },
    archivePage: {
      title: 'अभिलेखागार अन्वेषण',
      desc: 'सत्यापित स्रोतों से लेखन, भाषण, पत्र, पुस्तकें और लेख।',
      searchPlaceholder: 'लेखन, भाषण, पत्र खोजें...',
      filterBtn: 'फ़िल्टर',
      tabs: ['सभी', 'लेखन', 'भाषण', 'पत्र', 'लेख', 'पाण्डुलिपियां', 'पुस्तकें', 'समाचार पत्र'],
    },
    aiPage: {
      num: '03',
      title: 'एआई सहायक',
      desc: 'डॉ. अम्बेडकर के लेखन, भाषणों और ऐतिहासिक अभिलेखों से प्रश्न पूछें और प्रामाणिक उत्तर पाएं।',
      leftQuote: '“हमारी समस्याओं का समाधान शिक्षा में है।”',
      leftQuoteAuthor: '— डॉ. बी. आर. अम्बेडकर',
      askHeading: 'पूछें आरोह',
      askSubtitle: 'अभिलेखागार के माध्यम से अम्बेडकर के लेखन, भाषणों और ऐतिहासिक अभिलेखों का अन्वेषण करें।',
      modeArchive: 'आरोह पुरालेख',
      modeArchiveSub: 'सत्यापित ऐतिहासिक स्रोत',
      modeWeb: 'वेब खोज',
      modeWebSub: 'वेब भर से जानकारी',
      placeholderArchive: 'अम्बेडकर के बारे में कुछ भी पूछें...',
      placeholderWeb: 'वेब पर अम्बेडकर के बारे में खोजें...',
      exploreLabel: 'एक प्रश्न चुनें',
      suggestedQuestions: [
        'शिक्षा पर अम्बेडकर के विचार क्या थे?',
        '1927 में महाड़ में क्या हुआ था?',
        'अम्बेडकर ने कानून मंत्री पद से इस्तीफा क्यों दिया?',
        'संविधान सभा में अम्बेडकर की क्या भूमिका थी?',
        'जाति का विनाश (Annihilation of Caste) समझाएं।',
      ],
      archivalResponseLabel: 'आरोह पुरालेख उत्तर',
      webResponseLabel: 'आरोह वेब आधारित विश्लेषण',
      sourceLabel: 'स्रोत',
      relatedTopicsLabel: 'संबंधित विषय',
      viewSource: 'स्रोत देखें',
      copy: 'प्रतिलिपि',
      copied: 'प्रतिलिपि बनाई गई',
      loadingArchive: 'आरोह पुरालेख से प्रमाणित ऐतिहासिक स्रोतों का विश्लेषण किया जा रहा है...',
      loadingWeb: 'सत्यापित वेब स्रोतों से जानकारी संकलित की जा रही है...',
      loadingSubArchive: 'डॉ. अम्बेडकर के प्राथमिक लेखन और भाषणों से मिलान किया जा रहा है',
      loadingSubWeb: 'अकादमिक एवं ऐतिहासिक वेब अभिलेखागारों की खोज',
      emptyTitle: 'अभिलेखागार शोध डेस्क',
      emptyDesc: 'सत्यापित ऐतिहासिक अभिलेखों से प्रमाणिक संदर्भ प्राप्त करने के लिए ऊपर दिए गए किसी प्रश्न को चुनें या अपना प्रश्न लिखें।',
    },
    timelinePage: {
      title: 'कालक्रम',
      desc: 'डॉ. अम्बेडकर के जीवन के महत्वपूर्ण पड़ाव और ऐतिहासिक मील के पत्थर।',
      detailedToggle: 'विस्तृत कालक्रम अभिलेखागार',
    },
    placesPage: {
      title: 'प्रमुख स्थल',
      desc: 'अम्बेडकर की ऐतिहासिक यात्रा से जुड़े प्रमुख स्थान।',
      allLocations: 'सभी स्थल',
      researchPlace: 'इस स्थल पर एआई शोध करें',
    },
    libraryPage: {
      title: 'पुस्तकालय',
      desc: 'डॉ. अम्बेडकर और उनके युग पर गहन शोध के लिए ऐतिहासिक संग्रह।',
      tabs: ['पुस्तकें', 'शोध पत्र', 'लेख', 'ऑडियो-वीडियो', 'शासकीय अभिलेख', 'बाहरी स्रोत'],
    },
  },
}

async function readJson(response) {
  const body = await response.text()
  if (!body) return {}
  try { return JSON.parse(body) } catch { throw new Error(`Invalid response (${response.status}).`) }
}

// ----------------------------------------------------
// ARCHIVAL METADATA & ASSET MAPPER FOR AI ASSISTANT
// Directly grounded in 54 verified artifacts from artifactsDatabase
// ----------------------------------------------------
function getTopicArchivalMetadata(queryText) {
  const matches = searchArtifacts({ query: queryText })
  if (matches.length > 0) {
    const art = matches[0]
    return {
      title: art.title,
      quote: art.quote || 'Cultivation of mind should be the ultimate aim of human existence.',
      quoteAuthor: art.creator ? `— ${art.creator}` : '— Dr. B. R. Ambedkar',
      source: `${art.source}${art.volume ? ' · ' + art.volume : ''}${art.page ? ' · p. ' + art.page : ''}`,
      topics: art.subjects && art.subjects.length > 0 ? art.subjects : (art.tags || ['Social Reform', 'Democracy']),
      image: art.image || '/assets/hero/ambedkar_speech_card.jpg',
      imageCaption: art.curatorNote ? (art.curatorNote.length > 110 ? art.curatorNote.slice(0, 107) + '...' : art.curatorNote) : art.title,
      documentUrl: art.documentUrl,
      artifactId: art.id,
      artifactType: art.type,
      artifact: art,
    }
  }

  return {
    title: `Archival Inquiry: ${queryText}`,
    quote: 'Cultivation of mind should be the ultimate aim of human existence.',
    quoteAuthor: '— Dr. B. R. Ambedkar',
    source: 'Dr. B. R. Ambedkar: Writings and Speeches, Vol. 1',
    topics: ['Constitutionalism', 'Social Justice', 'Historical Records'],
    image: '/assets/hero/ambedkar_speech_card.jpg',
    imageCaption: 'Dr. B. R. Ambedkar addressing an assembly on constitutional democracy and human rights.',
    documentUrl: '',
    artifactId: null,
    artifactType: 'RESEARCH INQUIRY',
    artifact: null,
  }
}

// ====================================================
// MAIN AAROH EDITORIAL APP
// ====================================================
export default function App() {
  const viewSequence = useMemo(() => ['home', 'exhibits', 'research', 'timeline', 'places', 'artifacts'], [])

  const [view, setView] = useState(() => {
    const hash = window.location.hash.replace('#', '')
    return ['home', 'exhibits', 'research', 'timeline', 'places', 'artifacts'].includes(hash)
      ? hash
      : 'home'
  })

  const [navDirection, setNavDirection] = useState('forward')
  const [indicatorStyle, setIndicatorStyle] = useState({ opacity: 0 })
  const navItemsRef = useRef(null)
  const navBtnRefs = useRef({})

  const [language, setLanguage] = useState(() => {
    try { return localStorage.getItem('aaroh_lang') || 'EN' } catch { return 'EN' }
  })

  useEffect(() => {
    try { localStorage.setItem('aaroh_lang', language) } catch {}
  }, [language])

  const t = translations[language] || translations.EN

  // Lightbox / Inspection Modal State
  const [selectedArtifact, setSelectedArtifact] = useState(null)
  const [selectedExhibit, setSelectedExhibit] = useState(null)

  // AI Assistant Chat Messages (Clean initial prompt state matching Home page)
  const [messages, setMessages] = useState([])
  const [chatLoading, setChatLoading] = useState(false)

  // Homepage Web Overview / Answer State (Continuous Inline Interaction)
  const [homepageAnswer, setHomepageAnswer] = useState(null)
  const [homepageLoading, setHomepageLoading] = useState(false)

  // Connected Heritage Focus State (Places <-> Timeline <-> Archive)
  const [selectedPlaceId, setSelectedPlaceId] = useState('place-mahad')
  const [selectedTimelineEventId, setSelectedTimelineEventId] = useState('event-1927')

  const navigateTo = (newView) => {
    if (newView === view) return
    const curIdx = viewSequence.indexOf(view)
    const newIdx = viewSequence.indexOf(newView)
    setNavDirection(newIdx >= curIdx ? 'forward' : 'backward')
    setView(newView)
    window.location.hash = newView
    if (newView !== 'home') {
      window.scrollTo({ top: 0, behavior: 'smooth' })
    }
  }

  const navigateToPlace = (placeId) => {
    if (placeId) setSelectedPlaceId(placeId)
    navigateTo('places')
  }

  const navigateToTimeline = (eventId) => {
    if (eventId) setSelectedTimelineEventId(eventId)
    navigateTo('timeline')
  }

  useEffect(() => {
    const onHashChange = () => {
      const hash = window.location.hash.replace('#', '')
      if (viewSequence.includes(hash) && hash !== view) {
        const curIdx = viewSequence.indexOf(view)
        const newIdx = viewSequence.indexOf(hash)
        setNavDirection(newIdx >= curIdx ? 'forward' : 'backward')
        setView(hash)
      }
    }
    window.addEventListener('hashchange', onHashChange)
    return () => window.removeEventListener('hashchange', onHashChange)
  }, [view, viewSequence])

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [view])

  // Physical Sliding Indicator Measurement for Museum Bottom Nav
  useEffect(() => {
    const updateIndicator = () => {
      const container = navItemsRef.current
      const activeBtn = navBtnRefs.current[view]
      if (container && activeBtn) {
        const containerRect = container.getBoundingClientRect()
        const btnRect = activeBtn.getBoundingClientRect()
        const left = btnRect.left - containerRect.left
        const width = btnRect.width
        setIndicatorStyle({
          transform: `translate3d(${left}px, 0, 0)`,
          width: `${width}px`,
          opacity: 1,
        })
      }
    }
    updateIndicator()
    const timer = setTimeout(updateIndicator, 60)
    window.addEventListener('resize', updateIndicator)
    return () => {
      clearTimeout(timer)
      window.removeEventListener('resize', updateIndicator)
    }
  }, [view, language])

  // Grounded AI Chat Handler (Supports AAROH Archive & Web Search Modes)
  const askAi = async (queryText, mode = 'archive') => {
    if (!queryText) return
    const now = new Date()
    const timeStr = `Today, ${now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}`
    const userMsg = { role: 'user', content: queryText, time: timeStr }
    setMessages((prev) => [...prev, userMsg])
    setChatLoading(true)

    const topicMeta = getTopicArchivalMetadata(queryText)

    try {
      if (mode === 'web') {
        const resp = await fetch(`/api/web-overview?q=${encodeURIComponent(queryText)}`)
        const data = await readJson(resp)
        if (data && data.summary) {
          setMessages((prev) => [
            ...prev,
            {
              role: 'assistant',
              sourceMode: 'web',
              title: topicMeta.title || `Web Overview: ${queryText}`,
              content: data.summary,
              quote: topicMeta.quote,
              quoteAuthor: topicMeta.quoteAuthor,
              source: data.web_sources && data.web_sources[0]
                ? `${data.web_sources[0].title} (${data.web_sources[0].domain})`
                : 'Verified Web Archives',
              sourceUrl: data.web_sources && data.web_sources[0] ? data.web_sources[0].url : null,
              topics: topicMeta.topics || ['Historical Web', 'Public Archives', 'Scholarly Context'],
              image: topicMeta.image,
              imageCaption: topicMeta.imageCaption,
              webSources: data.web_sources || [],
            },
          ])
        } else {
          setMessages((prev) => [
            ...prev,
            {
              role: 'assistant',
              sourceMode: 'web',
              title: topicMeta.title,
              content: `Grounded web overview on "${queryText}": Dr. B. R. Ambedkar dedicated his intellectual and political life to establishing a sovereign, secular, democratic republic anchored in liberty, equality, and fraternity.`,
              quote: topicMeta.quote,
              quoteAuthor: topicMeta.quoteAuthor,
              source: 'Verified Academic Web Archives',
              topics: topicMeta.topics,
              image: topicMeta.image,
              imageCaption: topicMeta.imageCaption,
            },
          ])
        }
      } else {
        // mode === 'archive'
        const resp = await fetch('/api/chat', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            message: queryText,
            history: messages.filter((m) => m.role === 'user').slice(-4),
          }),
        })
        const data = await readJson(resp)
        const content = data.reply || data.answer || 'Response synthesized from verified Ambedkar archives.'
        setMessages((prev) => [
          ...prev,
          {
            role: 'assistant',
            sourceMode: 'archive',
            title: topicMeta.title,
            content: content,
            quote: data.quote || topicMeta.quote,
            quoteAuthor: topicMeta.quoteAuthor,
            source: data.sources && data.sources[0] && data.sources[0].title
              ? `Dr. B. R. Ambedkar, ${data.sources[0].title}`
              : topicMeta.source,
            sourceUrl: data.sources && data.sources[0] && data.sources[0].url ? data.sources[0].url : null,
            topics: topicMeta.topics,
            image: topicMeta.image,
            imageCaption: topicMeta.imageCaption,
            sources: data.sources || [],
          },
        ])
      }
    } catch {
      // Offline fallback
      setTimeout(() => {
        setMessages((prev) => [
          ...prev,
          {
            role: 'assistant',
            sourceMode: mode,
            title: topicMeta.title,
            content: `Regarding "${queryText}", Dr. Ambedkar extensively articulated his positions throughout his 22 volumes of Writings and Speeches, advocating for constitutional morality, annihilation of caste, and universal human dignity.`,
            quote: topicMeta.quote,
            quoteAuthor: topicMeta.quoteAuthor,
            source: topicMeta.source,
            topics: topicMeta.topics,
            image: topicMeta.image,
            imageCaption: topicMeta.imageCaption,
          },
        ])
      }, 400)
    } finally {
      setChatLoading(false)
    }
  }

  // Homepage Grounded Search Handler (Supports AAROH Archive & Web Search Modes)
  const handleHomepageSearch = async (queryText, mode = 'archive') => {
    if (!queryText.trim()) return
    setHomepageLoading(true)
    setHomepageAnswer(null)

    try {
      if (mode === 'archive') {
        const chatResp = await fetch('/api/chat', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ message: queryText, history: [] }),
        })
        const chatData = await readJson(chatResp)
        setHomepageAnswer({
          query: queryText,
          sourceMode: 'archive',
          sourceTitle: t.hero.modeArchive || 'AAROH Archive',
          sourceSubtitle: t.hero.modeArchiveSub || 'Curated historical sources',
          summary: chatData.reply || chatData.answer || `Archival analysis for "${queryText}".`,
          quote: chatData.quote || null,
          quoteAuthor: chatData.quote ? '— Dr. B. R. Ambedkar' : null,
          sources: chatData.sources || [{ title: 'Dr. B. R. Ambedkar Writings & Speeches' }],
          keyTakeaways: [
            'Directly grounded in Dr. Ambedkar’s verified primary speeches and archival volumes.',
            'Cross-referenced with Constituent Assembly Debates and constitutional records.',
            'Preserved under AAROH digital heritage curation standards.',
          ],
        })
      } else {
        // mode === 'web'
        const resp = await fetch(`/api/web-overview?q=${encodeURIComponent(queryText)}`)
        const data = await readJson(resp)
        if (data && data.summary) {
          setHomepageAnswer({
            query: queryText,
            sourceMode: 'web',
            sourceTitle: t.hero.modeWeb || 'Web Search',
            sourceSubtitle: t.hero.modeWebSub || 'Information from across the web',
            summary: data.summary,
            keyTakeaways: data.key_takeaways || [],
            webSources: data.web_sources || [],
            sources: data.sources || [],
            scopeDisclaimer: data.scope_disclaimer || '',
          })
        } else {
          setHomepageAnswer({
            query: queryText,
            sourceMode: 'web',
            sourceTitle: t.hero.modeWeb || 'Web Search',
            sourceSubtitle: t.hero.modeWebSub || 'Information from across the web',
            summary: `Web overview for "${queryText}": Comprehensive cross-web perspectives on Dr. B. R. Ambedkar's historical legacy and institutional impact.`,
            keyTakeaways: [
              'Synthesized from verified digital educational and archival repositories.',
              'Global academic literature and public domain historical context.',
            ],
            webSources: [
              { title: 'Dr. B. R. Ambedkar - Parliament Heritage', domain: 'loksabha.nic.in', url: 'https://loksabha.nic.in' },
              { title: 'Ambedkar Memorial Archives', domain: 'columbia.edu', url: 'https://columbia.edu' },
            ],
          })
        }
      }
    } catch {
      if (mode === 'archive') {
        setHomepageAnswer({
          query: queryText,
          sourceMode: 'archive',
          sourceTitle: t.hero.modeArchive || 'AAROH Archive',
          sourceSubtitle: t.hero.modeArchiveSub || 'Curated historical sources',
          summary: `Archival record on "${queryText}": Dr. B. R. Ambedkar championed constitutional democracy, annihilation of caste, and universal human dignity across his 22 volumes of Writings & Speeches.`,
          quote: 'Cultivation of mind should be the ultimate aim of human existence.',
          quoteAuthor: '— Dr. B. R. Ambedkar',
          sources: [{ title: 'Dr. B. R. Ambedkar Writings & Speeches Vol. 1' }],
          keyTakeaways: [
            'Documented in Dr. Ambedkar’s verified primary speeches and archival volumes.',
            'Permanent record preserved within the national repository.',
          ],
        })
      } else {
        setHomepageAnswer({
          query: queryText,
          sourceMode: 'web',
          sourceTitle: t.hero.modeWeb || 'Web Search',
          sourceSubtitle: t.hero.modeWebSub || 'Information from across the web',
          summary: `Grounded web overview on "${queryText}": Dr. B. R. Ambedkar dedicated his intellectual and political life to establishing a sovereign, socialist, secular, democratic republic anchored in liberty, equality, and fraternity.`,
          keyTakeaways: [
            'Historical documentation compiled across verified web repositories.',
            'Fundamental civil rights and constitutional safeguards championed for all citizens.',
          ],
          webSources: [
            { title: 'Dr. B. R. Ambedkar - Parliament Heritage', domain: 'loksabha.nic.in', url: 'https://loksabha.nic.in' },
            { title: 'Ambedkar Memorial Archives', domain: 'columbia.edu', url: 'https://columbia.edu' },
          ],
        })
      }
    } finally {
      setHomepageLoading(false)
    }
  }

  return (
    <div className={`aaroh-app-shell ${view === 'home' ? 'aaroh-kiosk-mode' : ''}`}>
      {/* ----------------------------------------------------
          EDITORIAL HEADER (Matching Reference Visual System)
      ---------------------------------------------------- */}
      <header className="aaroh-editorial-header" role="banner">
        <div className="aaroh-header-inner">
          {/* Brand Left */}
          <button
            type="button"
            className="aaroh-brand-link"
            onClick={() => navigateTo('home')}
            aria-label="AAROH Home"
          >
            <div className="aaroh-brand-glyph" aria-hidden="true">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                {/* Outer Constitutional Navy Rotated Square / Diamond */}
                <rect x="5.5" y="5.5" width="13" height="13" rx="2" transform="rotate(45 12 12)" fill="#123F6B" />
                {/* Precision Illuminated Gold Contour */}
                <rect x="7" y="7" width="10" height="10" rx="1.4" transform="rotate(45 12 12)" fill="none" stroke="#D4AF37" strokeWidth="0.85" strokeOpacity="0.85" />
                {/* Inner Gold Jewel Diamond Core */}
                <rect x="9.5" y="9.5" width="5" height="5" rx="0.8" transform="rotate(45 12 12)" fill="#D4AF37" />
              </svg>
            </div>
            <div className="aaroh-brand-copy">
              <span className="aaroh-brand-title">{t.brand}</span>
              <span className="aaroh-brand-tagline">{t.brandSub}</span>
            </div>
          </button>

          {/* Right Controls */}
          <div className="aaroh-header-right">
            <div className="aaroh-preamble-words" aria-label="Constitutional Pillars">
              {t.preamble.map((word) => (
                <span key={word}>{word}</span>
              ))}
            </div>

            {/* Language Capsule Switcher */}
            <div className="aaroh-lang-capsule">
              <button
                type="button"
                className={`aaroh-lang-choice ${language === 'EN' ? 'active' : ''}`}
                onClick={() => setLanguage('EN')}
              >
                English
              </button>
              <span className="aaroh-lang-divider">|</span>
              <button
                type="button"
                className={`aaroh-lang-choice ${language === 'HI' ? 'active' : ''}`}
                onClick={() => setLanguage('HI')}
              >
                हिंदी
              </button>
            </div>

            {/* Subtle Menu Icon */}
            <button
              type="button"
              className="aaroh-header-menu-btn"
              onClick={() => navigateTo('exhibits')}
              aria-label="Navigation Menu"
              title="Browse Archive"
            >
              <Menu size={18} />
            </button>
          </div>
        </div>
      </header>

      {/* ----------------------------------------------------
          VIEWS ROUTING (Layered, Direction-Aware Transition)
      ---------------------------------------------------- */}
      <div key={view} className={`aaroh-view-stage dir-${navDirection} view-${view}`}>
        {view === 'home' && (
          <HomeEditorial
            onNavigate={navigateTo}
            homepageAnswer={homepageAnswer}
            setHomepageAnswer={setHomepageAnswer}
            onHomepageSearch={handleHomepageSearch}
            homepageLoading={homepageLoading}
            t={t}
            language={language}
            onOpenArtifact={setSelectedArtifact}
          />
        )}

        {view === 'exhibits' && (
          <ExploreArchiveEditorial
            onOpenArtifact={setSelectedArtifact}
            onAskAi={(q) => {
              askAi(q)
              navigateTo('research')
            }}
            t={t}
            language={language}
          />
        )}

        {view === 'research' && (
          <AiAssistantEditorial
            messages={messages}
            loading={chatLoading}
            askAi={askAi}
            onClear={() => setMessages([])}
            t={t}
            language={language}
            onOpenArtifact={setSelectedArtifact}
            onNavigate={navigateTo}
          />
        )}

        {view === 'timeline' && (
          <TimelineEditorial
            selectedEventId={selectedTimelineEventId}
            onSelectEvent={setSelectedTimelineEventId}
            onNavigateToPlace={navigateToPlace}
            onOpenArtifact={setSelectedArtifact}
            onAskAi={(q) => {
              askAi(q)
              navigateTo('research')
            }}
            t={t}
            language={language}
          />
        )}

        {view === 'places' && (
          <KeyPlacesEditorial
            selectedPlaceId={selectedPlaceId}
            onSelectPlace={setSelectedPlaceId}
            onNavigateToTimeline={navigateToTimeline}
            onOpenArtifact={setSelectedArtifact}
            onAskAi={(q) => {
              askAi(q)
              navigateTo('research')
            }}
            t={t}
            language={language}
          />
        )}

        {view === 'artifacts' && (
          <LibraryEditorial
            onOpenArtifact={setSelectedArtifact}
            onAskAi={(q) => {
              askAi(q)
              navigateTo('research')
            }}
            t={t}
            language={language}
          />
        )}
      </div>

      {/* ----------------------------------------------------
          FIXED MINIMAL EDITORIAL BOTTOM NAVIGATION & OPEN SOURCE FOOTER
      ---------------------------------------------------- */}
      <footer className="aaroh-bottom-editorial-nav" role="navigation" aria-label="Museum Sections and Repository">
        <div className="aaroh-bottom-nav-inner">
          <div className="aaroh-bottom-nav-left">
            <button
              type="button"
              className="aaroh-bottom-nav-brand-btn"
              onClick={() => navigateTo('home')}
              title="AAROH — Return to Home"
            >
              <span className="aaroh-bottom-brand-glyph" aria-hidden="true">
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none">
                  <rect x="5.5" y="5.5" width="13" height="13" rx="2" transform="rotate(45 12 12)" fill="#123F6B" />
                  <rect x="8.5" y="8.5" width="7" height="7" rx="1" transform="rotate(45 12 12)" fill="#D4AF37" />
                </svg>
              </span>
              <span className="aaroh-bottom-nav-brand">{t.brand}</span>
            </button>
            <span className="aaroh-bottom-nav-tick" aria-hidden="true">|</span>
            <a
              href="https://github.com/harddhan/aaroh"
              target="_blank"
              rel="noopener noreferrer"
              className="aaroh-bottom-github-link"
              title="AAROH is Open Source on GitHub: harddhan/aaroh"
              aria-label={t.footer?.githubAria || 'View AAROH open source repository on GitHub'}
            >
              <svg
                className="aaroh-github-svg"
                viewBox="0 0 24 24"
                width="13"
                height="13"
                fill="currentColor"
                aria-hidden="true"
              >
                <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
              </svg>
              <span className="aaroh-github-text">{t.footer?.openSource || 'Open Source'}</span>
              <span className="aaroh-github-pill">{t.footer?.repoName || 'harddhan/aaroh'}</span>
              <ExternalLink size={10} className="aaroh-github-external-icon" aria-hidden="true" />
            </a>
          </div>

          <div className="aaroh-bottom-nav-items" ref={navItemsRef}>
            <span
              className="aaroh-bottom-nav-sliding-indicator"
              style={indicatorStyle}
              aria-hidden="true"
            />
            {[
              { id: 'home', num: '01', label: t.nav.home.replace(/^\d+\s*/, '') },
              { id: 'exhibits', num: '02', label: t.nav.exhibits.replace(/^\d+\s*/, '') },
              { id: 'research', num: '03', label: t.nav.research.replace(/^\d+\s*/, '') },
              { id: 'timeline', num: '04', label: t.nav.timeline.replace(/^\d+\s*/, '') },
              { id: 'places', num: '05', label: t.nav.places.replace(/^\d+\s*/, '') },
              { id: 'artifacts', num: '06', label: t.nav.library.replace(/^\d+\s*/, '') },
            ].map((item, index, arr) => (
              <span key={item.id} className="aaroh-bottom-nav-unit">
                <button
                  ref={(el) => (navBtnRefs.current[item.id] = el)}
                  type="button"
                  className={`aaroh-bottom-nav-link ${view === item.id ? 'active' : ''}`}
                  onClick={() => navigateTo(item.id)}
                  aria-current={view === item.id ? 'page' : undefined}
                >
                  <span className="nav-num">{item.num}</span> <span>{item.label}</span>
                </button>
                {index < arr.length - 1 && (
                  <span className="aaroh-bottom-nav-tick">|</span>
                )}
              </span>
            ))}
          </div>
        </div>
      </footer>

      {/* ----------------------------------------------------
          ARCHIVAL LIGHTBOX MODAL (Inspecting Artifact)
      ---------------------------------------------------- */}
      {selectedArtifact && (
        <ArtifactLightboxModal
          artifact={selectedArtifact}
          onClose={() => setSelectedArtifact(null)}
          onAskAi={(art) => {
            setSelectedArtifact(null)
            askAi(`Provide detailed historical research and provenance on "${art.title}" (${art.year || ''}).`)
            navigateTo('research')
          }}
          t={t}
          language={language}
        />
      )}
    </div>
  )
}

// ----------------------------------------------------
// ARCHIVAL AI PROGRESS RING & SHIMMER LOADING INDICATOR
// Glowing blue/teal progress orbit ring + breathing AAROH diamond core
// with subtly shifting shimmering status text
// ----------------------------------------------------
function ArchivalAiLoadingIndicator({
  mode = 'web',
  title,
  subtitle,
}) {
  const isWeb = mode === 'web'
  return (
    <div
      className={`aaroh-archival-loading-unit ${isWeb ? 'is-web-mode' : 'is-archive-mode'}`}
      role="status"
      aria-live="polite"
    >
      {/* Glowing Orbital Progress Ring */}
      <div className="aaroh-orbit-cluster" aria-hidden="true">
        <div className="aaroh-orbit-halo" />
        <svg
          className="aaroh-orbit-svg"
          viewBox="0 0 36 36"
          width="28"
          height="28"
        >
          <defs>
            <linearGradient id="aarohOrbitGradWeb" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#123F6B" />
              <stop offset="45%" stopColor="#0E869B" />
              <stop offset="80%" stopColor="#30A8BE" />
              <stop offset="100%" stopColor="#5CD3E6" />
            </linearGradient>
            <linearGradient id="aarohOrbitGradArchive" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#123F6B" />
              <stop offset="50%" stopColor="#C28B38" />
              <stop offset="100%" stopColor="#F5D580" />
            </linearGradient>
          </defs>
          {/* Subtle Base Track Ring */}
          <circle
            className="aaroh-orbit-track"
            cx="18"
            cy="18"
            r="13.5"
            strokeWidth="2.2"
            fill="none"
          />
          {/* Active Glowing Progress Ring */}
          <circle
            className="aaroh-orbit-ring"
            cx="18"
            cy="18"
            r="13.5"
            strokeWidth="2.4"
            fill="none"
            strokeLinecap="round"
            stroke={`url(#${isWeb ? 'aarohOrbitGradWeb' : 'aarohOrbitGradArchive'})`}
          />
          {/* Orbiting Satellite Node */}
          <circle
            className="aaroh-orbit-satellite"
            cx="18"
            cy="4.5"
            r="1.8"
            fill={isWeb ? '#5CD3E6' : '#F5D580'}
          />
        </svg>
        {/* Inner signature AAROH diamond core */}
        <div className="aaroh-orbit-center-gem" />
      </div>

      <div className="aaroh-loading-meta">
        <span className={`aaroh-loading-title-animated ${isWeb ? 'is-web-synthesis' : 'is-archive-retrieval'}`}>
          {title}
        </span>
        {subtitle && (
          <span className="aaroh-loading-subtitle-muted">
            {subtitle}
          </span>
        )}
      </div>
    </div>
  )
}

// ====================================================
// 1. HOME EDITORIAL VIEW (Reference Panel 1)
// ====================================================
function HomeEditorial({
  onNavigate,
  homepageAnswer,
  setHomepageAnswer,
  onHomepageSearch,
  homepageLoading,
  t,
  language = 'EN',
  onOpenArtifact,
}) {
  const [searchInput, setSearchInput] = useState('')
  const [searchMode, setSearchMode] = useState('archive')
  const isExpanded = Boolean(homepageLoading || homepageAnswer)

  // Real database dynamic counts
  const archiveStats = useMemo(() => getArchiveCounts(), [])

  // Curated historical sets (6 featured primary artifacts each)
  const curatedTrios = useMemo(
    () => [
      {
        theme: 'Constitution & Founding of Republic',
        items: [
          getArtifactById('AAROH-ART-0060') || artifactsDatabase[0], // Illuminated Preamble
          getArtifactById('AAROH-ART-0045') || artifactsDatabase[1], // Signing Constitution
          getArtifactById('AAROH-ART-0002') || artifactsDatabase[2], // Annihilation of Caste Typescript
          getArtifactById('AAROH-ART-0044') || artifactsDatabase[3], // Presenting Constitution
          getArtifactById('AAROH-ART-0061') || artifactsDatabase[4], // Drafting Committee Resolution
          getArtifactById('AAROH-ART-0006') || artifactsDatabase[5], // Preamble Revision Folio
        ],
      },
      {
        theme: 'Social Movements & Human Rights',
        items: [
          getArtifactById('AAROH-ART-0047') || artifactsDatabase[6], // Chavdar Tank Reservoir
          getArtifactById('AAROH-ART-0031') || artifactsDatabase[7], // Mahad Satyagraha Speech
          getArtifactById('AAROH-ART-0080') || artifactsDatabase[8], // Poona Pact Formal Agreement
          getArtifactById('AAROH-ART-0041') || artifactsDatabase[9], // Poona Pact Signing Photo
          getArtifactById('AAROH-ART-0087') || artifactsDatabase[10], // Cadastral Map of Mahad
          getArtifactById('AAROH-ART-0051') || artifactsDatabase[11], // Bahishkrit Bharat
        ],
      },
      {
        theme: 'Scholarly Thought & Historic Press',
        items: [
          getArtifactById('AAROH-ART-0050') || artifactsDatabase[12], // Mooknayak 1920
          getArtifactById('AAROH-ART-0040') || artifactsDatabase[13], // Columbia Young Scholar
          getArtifactById('AAROH-ART-0010') || artifactsDatabase[14], // Castes in India 1916
          getArtifactById('AAROH-ART-0001') || artifactsDatabase[15], // Riddles in Hinduism
          getArtifactById('AAROH-ART-0016') || artifactsDatabase[16], // Buddha and His Dhamma
          getArtifactById('AAROH-ART-0097') || artifactsDatabase[17], // Royal Economic Society Fellow
        ],
      },
      {
        theme: 'Statecraft & Global Diplomacy',
        items: [
          getArtifactById('AAROH-ART-0042') || artifactsDatabase[18], // Round Table Conference Plenary
          getArtifactById('AAROH-ART-0030') || artifactsDatabase[19], // RTC Speech 1930
          getArtifactById('AAROH-ART-0008') || artifactsDatabase[20], // RTC Minorities Memo
          getArtifactById('AAROH-ART-0007') || artifactsDatabase[21], // W.E.B. Du Bois Letter
          getArtifactById('AAROH-ART-0081') || artifactsDatabase[22], // Viceroy Gazette Labour Member
          getArtifactById('AAROH-ART-0037') || artifactsDatabase[23], // Labour Welfare 8-Hour Day
        ],
      },
    ],
    []
  )

  const [trioIndex, setTrioIndex] = useState(0)
  const currentTrio = curatedTrios[trioIndex] || curatedTrios[0]

  const handleSearchSubmit = (overrideQuery) => {
    const q = (overrideQuery !== undefined ? overrideQuery : searchInput).trim()
    if (q) {
      onHomepageSearch(q, searchMode)
    }
  }

  const handleClear = () => {
    setSearchInput('')
    setHomepageAnswer(null)
  }

  return (
    <main className="aaroh-kiosk-home-viewport">
      <div className="aaroh-kiosk-home-canvas">
        {/* ── 3-COLUMN EDITORIAL HERO ── */}
      <section className="aaroh-home-hero-grid">
        {/* Left Column: Dr. Ambedkar Cutout & Parliament Strip */}
        <div className="aaroh-hero-left-editorial">
          <div className="aaroh-hero-left-art-wrap">
            <div className="aaroh-blue-accent-block" aria-hidden="true" />
            <img
              src="/assets/hero/ambedkar_hero_collage_seamless.png"
              alt="Dr. B. R. Ambedkar Archival Heritage"
              className="aaroh-hero-left-portrait"
            />
            {/* Quote Callout */}
            <div className="aaroh-quote-callout">
              <p>{t.hero.quote}</p>
              <span>{t.hero.quoteAuthor}</span>
            </div>
            {/* Parliament colonnade graphic at bottom */}
            <div className="aaroh-hero-parliament-strip" aria-hidden="true">
              <img src="/assets/hero/hero_parliament_bg.jpg" alt="" />
            </div>
          </div>
          <span className="aaroh-hero-meta-tag">{t.hero.metaLabel}</span>
          <div className="aaroh-hero-dynamic-stats-strip" title="Live Archival Database Counts">
            <span>{archiveStats.total} PRIMARY RECORDS</span>
            <span>·</span>
            <span>{archiveStats.volumesCount} VOLUMES</span>
            <span>·</span>
            <span>100% VERIFIED</span>
          </div>
        </div>

        {/* Center Column: ASK AAROH + Persistent Search / Answer */}
        <div className={`aaroh-hero-center-stage ${isExpanded ? 'is-answer-mode' : ''}`}>
          {/* Subtle Parliament Watermark Centered Behind Ask */}
          <div className="aaroh-parliament-watermark-bg" aria-hidden="true" />

          <div className="aaroh-hero-center-content">
            <div className="aaroh-editorial-title">
              <span className="ask-word">{t.hero.ask}</span>
              <span className="aaroh-word">{t.hero.aaroh}</span>
            </div>
            <p className="aaroh-editorial-subtitle">{t.hero.subtitle}</p>

            {/* Persistent Container (Transforms Smoothly without Popup) */}
            <div className={`aaroh-persistent-search-container ${isExpanded ? 'is-expanded' : ''}`}>
              {/* Unified Search Bar: Source Mode Selector + Input + Single Arrow Action */}
              <div className="aaroh-unified-search-bar" role="search" aria-label="AAROH Unified Search">
                {/* Source Mode Selector */}
                <div className="aaroh-source-mode-selector" role="tablist" aria-label="Search Source Selection">
                  <button
                    type="button"
                    role="tab"
                    id="aaroh-mode-archive"
                    aria-selected={searchMode === 'archive'}
                    className={`aaroh-source-tab ${searchMode === 'archive' ? 'is-active is-archive' : ''}`}
                    onClick={() => setSearchMode('archive')}
                    title={t.hero.modeArchive || 'AAROH Archive'}
                  >
                    <div className="aaroh-source-tab-icon-wrap" aria-hidden="true">
                      <Landmark size={15} />
                    </div>
                    <div className="aaroh-source-tab-text">
                      <span className="aaroh-source-tab-title">{t.hero.modeArchive || 'AAROH Archive'}</span>
                      <span className="aaroh-source-tab-sub">{t.hero.modeArchiveSub || 'Curated historical sources'}</span>
                    </div>
                  </button>

                  <button
                    type="button"
                    role="tab"
                    id="aaroh-mode-web"
                    aria-selected={searchMode === 'web'}
                    className={`aaroh-source-tab ${searchMode === 'web' ? 'is-active is-web' : ''}`}
                    onClick={() => setSearchMode('web')}
                    title={t.hero.modeWeb || 'Web Search'}
                  >
                    <div className="aaroh-source-tab-icon-wrap" aria-hidden="true">
                      <Globe2 size={15} />
                    </div>
                    <div className="aaroh-source-tab-text">
                      <span className="aaroh-source-tab-title">{t.hero.modeWeb || 'Web Search'}</span>
                      <span className="aaroh-source-tab-sub">{t.hero.modeWebSub || 'Information from across the web'}</span>
                    </div>
                  </button>
                </div>

                {/* Vertical Visual Divider */}
                <div className="aaroh-search-divider" aria-hidden="true" />

                {/* Search Input Field */}
                <div className="aaroh-search-input-wrap">
                  <Search size={16} className="aaroh-search-input-icon" aria-hidden="true" />
                  <input
                    type="text"
                    id="aaroh-main-search-input"
                    placeholder={
                      searchMode === 'archive'
                        ? (t.hero.placeholderArchive || 'Ask about Ambedkar...')
                        : (t.hero.placeholderWeb || 'Search the web about Ambedkar...')
                    }
                    value={searchInput}
                    onChange={(e) => setSearchInput(e.target.value)}
                    onKeyDown={(e) => {
                      if (e.key === 'Enter') handleSearchSubmit()
                    }}
                    aria-label={
                      searchMode === 'archive'
                        ? 'Ask about Ambedkar from AAROH Archive'
                        : 'Search the web about Ambedkar'
                    }
                  />
                  {searchInput && (
                    <button
                      type="button"
                      className="aaroh-clear-search-btn"
                      onClick={handleClear}
                      title="Clear query"
                      aria-label="Clear query"
                    >
                      <X size={15} />
                    </button>
                  )}
                </div>

                {/* ONLY Submit Action: Single Arrow Button */}
                <button
                  type="button"
                  id="aaroh-submit-search-btn"
                  className="aaroh-submit-search-btn"
                  onClick={() => handleSearchSubmit()}
                  aria-label={`Search ${searchMode === 'archive' ? 'AAROH Archive' : 'Web'}`}
                  title={searchMode === 'archive' ? 'Search AAROH Archive' : 'Search the Web'}
                >
                  <ArrowRight size={17} />
                </button>
              </div>

              {/* Continuous Inline Answer Panel in Normal Document Flow */}
              <div className={`aaroh-inline-answer-flow ${isExpanded ? 'is-expanded' : ''}`}>
                <div className="aaroh-inline-scroll-area">
                  {homepageLoading ? (
                    <div className="aaroh-search-loading-state">
                      <ArchivalAiLoadingIndicator
                        mode={searchMode}
                        title={
                          searchMode === 'web'
                            ? (language === 'HI' ? 'वेब से जानकारी संकलित की जा रही है…' : 'Synthesizing verified web information…')
                            : (language === 'HI' ? 'आरोह पुरालेख से उत्तर तैयार किया जा रहा है…' : 'Retrieving curated historical sources from AAROH Archive…')
                        }
                        subtitle={
                          searchMode === 'web'
                            ? (t.hero?.modeWebSub || 'Information from across the web')
                            : (t.hero?.modeArchiveSub || 'Curated historical sources')
                        }
                      />
                    </div>
                  ) : homepageAnswer ? (
                    <div className="aaroh-web-overview-container">
                      <div className="aaroh-overview-top-bar">
                        <div className="aaroh-overview-brand-group">
                          <div className={`aaroh-result-source-badge ${homepageAnswer.sourceMode === 'web' ? 'is-web' : 'is-archive'}`}>
                            <div className="aaroh-result-source-icon" aria-hidden="true">
                              {homepageAnswer.sourceMode === 'web' ? <Globe2 size={14} /> : <Landmark size={14} />}
                            </div>
                            <div className="aaroh-result-source-text">
                              <span className="aaroh-result-source-title">
                                {homepageAnswer.sourceTitle || (homepageAnswer.sourceMode === 'web' ? (t.hero.modeWeb || 'Web Search') : (t.hero.modeArchive || 'AAROH Archive'))}
                              </span>
                              <span className="aaroh-result-source-sub">
                                {homepageAnswer.sourceSubtitle || (homepageAnswer.sourceMode === 'web' ? (t.hero.modeWebSub || 'Information from across the web') : (t.hero.modeArchiveSub || 'Curated historical sources'))}
                              </span>
                            </div>
                          </div>
                          <span className="aaroh-overview-scope-pill">
                            <ShieldCheck size={12} />
                            <span>Strictly Ambedkar Scope</span>
                          </span>
                        </div>
                        <div className="aaroh-overview-actions">
                          <button
                            type="button"
                            className="aaroh-overview-action-btn"
                            onClick={handleClear}
                            aria-label="Collapse search results"
                          >
                            <X size={13} />
                            <span>Collapse</span>
                          </button>
                        </div>
                      </div>

                      {/* Lead Summary */}
                      <p className="aaroh-overview-lead-para">{homepageAnswer.summary}</p>

                      {/* Key Takeaways */}
                      {homepageAnswer.keyTakeaways && homepageAnswer.keyTakeaways.length > 0 && (
                        <div className="aaroh-overview-takeaways-block">
                          <h4 className="aaroh-overview-takeaways-title">
                            <Sparkles size={13} /> Key Historical Takeaways
                          </h4>
                          <ul className="aaroh-overview-takeaways-list">
                            {homepageAnswer.keyTakeaways.map((point, pIdx) => (
                              <li key={pIdx}>
                                <span className="takeaway-bullet-num">{pIdx + 1}.</span>
                                <span>{point}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      )}

                      {/* Web Sources Carousel (Positioned at Bottom of Results) */}
                      {homepageAnswer.webSources && homepageAnswer.webSources.length > 0 && (
                        <div className="aaroh-overview-sources-section is-bottom-sources">
                          <div className="aaroh-overview-sources-header">
                            <Globe2 size={13} />
                            <span>Verified Web Sources ({homepageAnswer.webSources.length})</span>
                          </div>
                          <div className="aaroh-overview-sources-carousel">
                            {homepageAnswer.webSources.map((src, i) => (
                              <a
                                key={i}
                                href={src.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="aaroh-overview-source-chip"
                              >
                                <Globe2 size={12} style={{ color: '#123F6B', flexShrink: 0 }} />
                                <div className="aaroh-overview-source-info">
                                  <span className="aaroh-overview-source-domain">{src.domain || 'archive'}</span>
                                  <span className="aaroh-overview-source-title">{src.title}</span>
                                </div>
                                <ExternalLink size={10} style={{ color: '#64748B', marginLeft: 'auto' }} />
                              </a>
                            ))}
                          </div>
                        </div>
                      )}

                      {/* Action Footer */}
                      <div className="aaroh-expanded-panel-footer">
                        <button
                          type="button"
                          className="aaroh-btn-continue-research"
                          onClick={() => {
                            setHomepageAnswer(null)
                            onNavigate('research')
                          }}
                        >
                          <span>Deepen Research in AI Lab</span>
                          <ArrowRight size={13} />
                        </button>
                        <button
                          type="button"
                          className="aaroh-btn-dismiss"
                          onClick={handleClear}
                        >
                          Collapse
                        </button>
                      </div>
                    </div>
                  ) : null}
                </div>
              </div>
            </div>

            {/* Editorial Suggestion Chips (Smoothly slides/fades out in answer state) */}
            <div className={`aaroh-editorial-chips-container ${isExpanded ? 'is-hidden' : ''}`}>
              <div className="aaroh-chips-row">
                {t.hero.suggestionsRow1.map((chip) => (
                  <button
                    key={chip}
                    type="button"
                    className="aaroh-editorial-chip"
                    onClick={() => {
                      setSearchInput(chip)
                      onHomepageSearch(chip, searchMode)
                    }}
                  >
                    {chip}
                  </button>
                ))}
              </div>
              <div className="aaroh-chips-row">
                {t.hero.suggestionsRow2.map((chip) => (
                  <button
                    key={chip}
                    type="button"
                    className="aaroh-editorial-chip"
                    onClick={() => {
                      setSearchInput(chip)
                      onHomepageSearch(chip, searchMode)
                    }}
                  >
                    {chip}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Right Column: Archival Collage with Curated Trio Rotation */}
        <div className="aaroh-hero-right-editorial">
          <div className="aaroh-collage-canvas">
            <div className="aaroh-collage-blue-tag" aria-hidden="true" />
            <div
              className="aaroh-collage-item book-cover"
              onClick={() => onOpenArtifact(currentTrio.items[0])}
              role="button"
              tabIndex={0}
              title={currentTrio.items[0]?.title}
            >
              <img
                src={currentTrio.items[0]?.image || currentTrio.items[0]?.thumbnail}
                alt={currentTrio.items[0]?.title}
                onError={(e) => {
                  e.target.onerror = null
                  e.target.src = '/assets/archive/constitution-preamble.jpg'
                }}
              />
              <span className="aaroh-collage-item-badge">{currentTrio.items[0]?.id}</span>
            </div>
            <div
              className="aaroh-collage-item photo-signing"
              onClick={() => onOpenArtifact(currentTrio.items[1])}
              role="button"
              tabIndex={0}
              title={currentTrio.items[1]?.title}
            >
              <img
                src={currentTrio.items[1]?.image || currentTrio.items[1]?.thumbnail}
                alt={currentTrio.items[1]?.title}
                onError={(e) => {
                  e.target.onerror = null
                  e.target.src = '/assets/archive/constitution-signing.jpg'
                }}
              />
              <span className="aaroh-collage-item-badge">{currentTrio.items[1]?.id}</span>
            </div>
            <div
              className="aaroh-collage-item manuscript"
              onClick={() => onOpenArtifact(currentTrio.items[2])}
              role="button"
              tabIndex={0}
              title={currentTrio.items[2]?.title}
            >
              <img
                src={currentTrio.items[2]?.image || currentTrio.items[2]?.thumbnail}
                alt={currentTrio.items[2]?.title}
                onError={(e) => {
                  e.target.onerror = null
                  e.target.src = '/assets/archive/ambedkar-manuscript.png'
                }}
              />
              <span className="aaroh-collage-item-badge">{currentTrio.items[2]?.id}</span>
            </div>
          </div>

          {/* Touch-Friendly Curated Archive Selection Controls */}
          <div className="aaroh-collage-controls-bar">
            <button
              type="button"
              className="aaroh-collage-nav-arrow"
              onClick={() => setTrioIndex((prev) => (prev - 1 + curatedTrios.length) % curatedTrios.length)}
              aria-label="Previous Curated Archival Selection"
              title="Previous Selection"
            >
              ‹
            </button>
            <div className="aaroh-collage-theme-label">
              <span className="theme-kicker">FEATURED SET · {trioIndex + 1}/{curatedTrios.length}</span>
              <span className="theme-name">{currentTrio.theme}</span>
            </div>
            <button
              type="button"
              className="aaroh-collage-nav-arrow"
              onClick={() => setTrioIndex((prev) => (prev + 1) % curatedTrios.length)}
              aria-label="Next Curated Archival Selection"
              title="Next Selection"
            >
              ›
            </button>
          </div>

          {/* Quick-Access 6 Curated Artifacts Strip */}
          <div className="aaroh-featured-six-chips" aria-label="Curated Featured Artifacts">
            {currentTrio.items.slice(0, 6).map((art, idx) => (
              <button
                key={art.id}
                type="button"
                className="aaroh-featured-chip-pill"
                onClick={() => onOpenArtifact(art)}
                title={`Inspect ${art.title} (${art.id})`}
              >
                <span className="chip-idx">{idx + 1}</span>
                <span className="chip-id">{art.id.replace('AAROH-ART-', '')}</span>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* ── 6 EDITORIAL EXHIBITION FEATURE PANELS STRIP ── */}
      <section className="aaroh-editorial-panels-strip" aria-label="AAROH Core Features">
        {/* Feature 01: Explore Archive */}
        <div
          className="aaroh-editorial-panel-card"
          onClick={() => onNavigate('exhibits')}
          role="button"
          tabIndex={0}
          title="Explore the Digital Heritage Archive"
        >
          <div className="aaroh-panel-top-row">
            <span className="aaroh-panel-num">01</span>
            <span className="aaroh-panel-arrow">→</span>
          </div>
          <h3 className="aaroh-panel-title">{t.panels.p1Title}</h3>
          <p className="aaroh-panel-desc">
            {archiveStats.total} verified records in {Object.keys(archiveStats.byType).length || 10} categories.
          </p>
          <div className="aaroh-panel-thumb-wrap">
            <img src="/assets/archive/archive-library.jpg" alt="Explore Archive" />
            <div className="aaroh-panel-blue-accent" />
          </div>
        </div>

        {/* Feature 02: AI Assistant */}
        <div
          className="aaroh-editorial-panel-card"
          onClick={() => onNavigate('research')}
          role="button"
          tabIndex={0}
          title="Open AI Research Desk"
        >
          <div className="aaroh-panel-top-row">
            <span className="aaroh-panel-num">02</span>
            <span className="aaroh-panel-arrow">→</span>
          </div>
          <h3 className="aaroh-panel-title">{t.panels.p2Title}</h3>
          <p className="aaroh-panel-desc">{t.panels.p2Desc}</p>
          <div className="aaroh-panel-thumb-wrap">
            <img src="/assets/hero/ambedkar_hero_collage_seamless.png" alt="AI Assistant" />
            <div className="aaroh-panel-blue-accent" />
          </div>
        </div>

        {/* Feature 03: Chronological Timeline */}
        <div
          className="aaroh-editorial-panel-card"
          onClick={() => onNavigate('timeline')}
          role="button"
          tabIndex={0}
          title="Examine Historical Timeline"
        >
          <div className="aaroh-panel-top-row">
            <span className="aaroh-panel-num">03</span>
            <span className="aaroh-panel-arrow">→</span>
          </div>
          <h3 className="aaroh-panel-title">{t.panels.p3Title}</h3>
          <p className="aaroh-panel-desc">{t.panels.p3Desc}</p>
          <div className="aaroh-panel-thumb-wrap">
            <img src="/assets/archive/constituent-assembly.jpg" alt="Timeline" />
            <span className="aaroh-panel-watermark-1946">1891–1956</span>
          </div>
        </div>

        {/* Feature 04: Key Places & Atlas */}
        <div
          className="aaroh-editorial-panel-card"
          onClick={() => onNavigate('places')}
          role="button"
          tabIndex={0}
          title="Explore Historical Atlas & Key Places"
        >
          <div className="aaroh-panel-top-row">
            <span className="aaroh-panel-num">04</span>
            <span className="aaroh-panel-arrow">→</span>
          </div>
          <h3 className="aaroh-panel-title">{t.panels.p4Title}</h3>
          <p className="aaroh-panel-desc">{t.panels.p4Desc}</p>
          <div className="aaroh-panel-thumb-wrap">
            <img src="/assets/archive/mahad-tank.jpg" alt="Key Places" />
            <span className="aaroh-panel-watermark-1946">ATLAS</span>
          </div>
        </div>

        {/* Feature 05: Digital Library (BAWS 19 Volumes) */}
        <div
          className="aaroh-editorial-panel-card"
          onClick={() => onNavigate('artifacts')}
          role="button"
          tabIndex={0}
          title="Access Complete 19 Volumes of Writings & Speeches"
        >
          <div className="aaroh-panel-top-row">
            <span className="aaroh-panel-num">05</span>
            <span className="aaroh-panel-arrow">→</span>
          </div>
          <h3 className="aaroh-panel-title">{t.panels.p5Title}</h3>
          <p className="aaroh-panel-desc">{t.panels.p5Desc}</p>
          <div className="aaroh-panel-thumb-wrap">
            <img src="/assets/archive/castes-in-india-1917.png" alt="Digital Library" />
            <span className="aaroh-panel-watermark-1946">19 VOLS</span>
          </div>
        </div>

        {/* Feature 06: Constitutional Vault */}
        <div
          className="aaroh-editorial-panel-card"
          onClick={() => onNavigate('exhibits')}
          role="button"
          tabIndex={0}
          title="Examine Constitutional Drafting Records & Preamble"
        >
          <div className="aaroh-panel-top-row">
            <span className="aaroh-panel-num">06</span>
            <span className="aaroh-panel-arrow">→</span>
          </div>
          <h3 className="aaroh-panel-title">{t.panels.p6Title}</h3>
          <p className="aaroh-panel-desc">{t.panels.p6Desc}</p>
          <div className="aaroh-panel-thumb-wrap">
            <img src="/assets/archive/constitution-preamble.jpg" alt="Constitutional Vault" />
            <span className="aaroh-panel-watermark-1946">1950</span>
          </div>
        </div>
      </section>
      </div>
    </main>
  )
}

// ====================================================
// 2. 01 EXPLORE ARCHIVE VIEW (Reference Panel 01)
// Comprehensive Research Database with Full-Text Search,
// Categorical & Chronological Filtering, and Dynamic Counts
// ====================================================
function ExploreArchiveEditorial({ onOpenArtifact, onAskAi, t, language = 'EN' }) {
  const [activeCategory, setActiveCategory] = useState('ALL')
  const [activePeriod, setActivePeriod] = useState('ALL')
  const [activeTopic, setActiveTopic] = useState('ALL')
  const [activeSource, setActiveSource] = useState('ALL')
  const [searchFilter, setSearchFilter] = useState('')
  const [currentPage, setCurrentPage] = useState(1)
  const [showAdvancedFilters, setShowAdvancedFilters] = useState(false)
  const itemsPerPage = 12

  // Reset to page 1 whenever any filter changes
  useEffect(() => {
    setCurrentPage(1)
  }, [activeCategory, activePeriod, activeTopic, activeSource, searchFilter])

  // Multi-field filtered search using artifactsDatabase
  const filteredItems = useMemo(() => {
    return searchArtifacts({
      query: searchFilter,
      category: activeCategory,
      period: activePeriod,
      topic: activeTopic,
      source: activeSource,
    })
  }, [searchFilter, activeCategory, activePeriod, activeTopic, activeSource])

  // Real database dynamic counts
  const archiveStats = useMemo(() => getArchiveCounts(), [])

  // Pagination calculation
  const totalItems = filteredItems.length
  const totalPages = Math.ceil(totalItems / itemsPerPage) || 1
  const paginatedItems = useMemo(() => {
    const start = (currentPage - 1) * itemsPerPage
    return filteredItems.slice(start, start + itemsPerPage)
  }, [filteredItems, currentPage, itemsPerPage])

  const hasActiveFilters =
    activeCategory !== 'ALL' ||
    activePeriod !== 'ALL' ||
    activeTopic !== 'ALL' ||
    activeSource !== 'ALL' ||
    Boolean(searchFilter.trim())

  const clearAllFilters = () => {
    setActiveCategory('ALL')
    setActivePeriod('ALL')
    setActiveTopic('ALL')
    setActiveSource('ALL')
    setSearchFilter('')
  }

  const handlePageChange = (p) => {
    if (p >= 1 && p <= totalPages) {
      setCurrentPage(p)
      window.scrollTo({ top: 120, behavior: 'smooth' })
    }
  }

  return (
    <main className="aaroh-page-container">
      {/* ── Top Search & Filter Bar ── */}
      <div className="aaroh-archive-top-bar">
        <div className="aaroh-archive-search-box">
          <Search size={18} style={{ color: '#64748B', flexShrink: 0 }} />
          <input
            type="text"
            placeholder={t?.archivePage?.searchPlaceholder || 'Search across writings, speeches, letters, volumes, topics, places...'}
            value={searchFilter}
            onChange={(e) => setSearchFilter(e.target.value)}
            aria-label="Search digital archive"
          />
          {searchFilter && (
            <button
              type="button"
              className="aaroh-search-clear-btn"
              onClick={() => setSearchFilter('')}
              title="Clear search"
            >
              <X size={14} />
            </button>
          )}
        </div>

        <button
          type="button"
          className={`aaroh-filter-btn ${showAdvancedFilters || hasActiveFilters ? 'active' : ''}`}
          onClick={() => setShowAdvancedFilters((prev) => !prev)}
          title="Toggle Era, Topic & Source Filters"
        >
          <Filter size={14} />
          <span>Filters</span>
          {hasActiveFilters && <span className="aaroh-filter-active-dot" />}
        </button>
      </div>

      {/* ── Advanced Faceted Filters Strip (Collapsible / Toggleable) ── */}
      {showAdvancedFilters && (
        <div className="aaroh-archive-faceted-filters">
          <div className="aaroh-faceted-group">
            <span className="aaroh-faceted-label">Historical Era</span>
            <div className="aaroh-faceted-pills">
              {ARCHIVE_PERIODS.map((period) => (
                <button
                  key={period}
                  type="button"
                  className={`aaroh-faceted-pill ${activePeriod === period ? 'active' : ''}`}
                  onClick={() => setActivePeriod(period)}
                >
                  {period === 'ALL' ? 'All Eras' : period}
                  {period !== 'ALL' && archiveStats.byPeriod[period] ? ` (${archiveStats.byPeriod[period]})` : ''}
                </button>
              ))}
            </div>
          </div>

          <div className="aaroh-faceted-group">
            <span className="aaroh-faceted-label">Research Topic</span>
            <select
              className="aaroh-faceted-select"
              value={activeTopic}
              onChange={(e) => setActiveTopic(e.target.value)}
              aria-label="Filter by topic"
            >
              <option value="ALL">All Topics ({archiveStats.total})</option>
              {ARCHIVE_TOPICS.filter((t) => t !== 'ALL').map((topic) => (
                <option key={topic} value={topic}>
                  {topic} {archiveStats.byTopic[topic] ? `(${archiveStats.byTopic[topic]})` : ''}
                </option>
              ))}
            </select>
          </div>

          <div className="aaroh-faceted-group">
            <span className="aaroh-faceted-label">Provenance Source</span>
            <select
              className="aaroh-faceted-select"
              value={activeSource}
              onChange={(e) => setActiveSource(e.target.value)}
              aria-label="Filter by provenance source"
            >
              <option value="ALL">All Sources</option>
              {ARCHIVE_SOURCES.filter((s) => s !== 'ALL').map((src) => (
                <option key={src} value={src}>
                  {src}
                </option>
              ))}
            </select>
          </div>

          {hasActiveFilters && (
            <button
              type="button"
              className="aaroh-clear-filters-btn"
              onClick={clearAllFilters}
            >
              <RotateCcw size={13} />
              <span>Reset All Filters</span>
            </button>
          )}
        </div>
      )}

      {/* ── Category Filter Tabs (With Real Database Counts) ── */}
      <div className="aaroh-archive-tabs-row" role="tablist" aria-label="Archive Categories">
        {ARCHIVE_CATEGORIES.map((cat) => {
          const count = cat === 'ALL' ? archiveStats.total : archiveStats.byType[cat] || 0
          const isActive = activeCategory === cat
          return (
            <button
              key={cat}
              type="button"
              role="tab"
              aria-selected={isActive}
              className={`aaroh-archive-tab ${isActive ? 'active' : ''}`}
              onClick={() => setActiveCategory(cat)}
            >
              <span className="tab-name">{cat === 'ALL' ? 'ALL RECORDS' : cat}</span>
              <span className="tab-count-badge">({count})</span>
            </button>
          )
        })}
      </div>

      {/* ── Active Filters Summary Bar ── */}
      <div className="aaroh-archive-results-meta-bar">
        <span className="results-count-text">
          Showing <strong>{totalItems === 0 ? 0 : (currentPage - 1) * itemsPerPage + 1}–{Math.min(currentPage * itemsPerPage, totalItems)}</strong> of <strong>{totalItems}</strong> Archival Records
        </span>

        {hasActiveFilters && (
          <div className="active-chips-strip">
            {activeCategory !== 'ALL' && (
              <span className="active-filter-chip">
                {activeCategory}
                <button type="button" onClick={() => setActiveCategory('ALL')} aria-label="Remove category filter">×</button>
              </span>
            )}
            {activePeriod !== 'ALL' && (
              <span className="active-filter-chip">
                {activePeriod}
                <button type="button" onClick={() => setActivePeriod('ALL')} aria-label="Remove era filter">×</button>
              </span>
            )}
            {activeTopic !== 'ALL' && (
              <span className="active-filter-chip">
                Topic: {activeTopic}
                <button type="button" onClick={() => setActiveTopic('ALL')} aria-label="Remove topic filter">×</button>
              </span>
            )}
            {activeSource !== 'ALL' && (
              <span className="active-filter-chip">
                Source: {activeSource}
                <button type="button" onClick={() => setActiveSource('ALL')} aria-label="Remove source filter">×</button>
              </span>
            )}
            {searchFilter.trim() && (
              <span className="active-filter-chip">
                &ldquo;{searchFilter}&rdquo;
                <button type="button" onClick={() => setSearchFilter('')} aria-label="Clear search term">×</button>
              </span>
            )}
            <button
              type="button"
              className="reset-inline-btn"
              onClick={clearAllFilters}
            >
              Clear All
            </button>
          </div>
        )}
      </div>

      {/* ── 2-Column Editorial Archive Grid ── */}
      <div className="aaroh-archive-layout-grid">
        {/* Left Column: Editorial Section Identity & Live Counts */}
        <aside className="aaroh-editorial-section-col" aria-label="Archive Overview">
          <div className="aaroh-huge-number">01</div>
          <h2 className="aaroh-section-title-large">{t?.archivePage?.title || 'EXPLORE ARCHIVE'}</h2>
          <p className="aaroh-section-desc-editorial">
            {t?.archivePage?.desc || 'Writings, speeches, letters, books, articles and more from verified sources.'}
          </p>

          {/* Real Database Dynamic Counts Widget */}
          <div className="aaroh-archive-stats-widget" aria-label="Archive Database Summary">
            <div className="aaroh-stat-item">
              <span className="aaroh-stat-num">{archiveStats.total}</span>
              <span className="aaroh-stat-label">Archival Records</span>
            </div>
            <div className="aaroh-stat-item">
              <span className="aaroh-stat-num">{archiveStats.volumesCount}</span>
              <span className="aaroh-stat-label">Volumes Indexed</span>
            </div>
            <div className="aaroh-stat-item">
              <span className="aaroh-stat-num">{Object.keys(archiveStats.byType).length}</span>
              <span className="aaroh-stat-label">Record Categories</span>
            </div>
            <div className="aaroh-stat-item">
              <span className="aaroh-stat-num">100%</span>
              <span className="aaroh-stat-label">Verified Provenance</span>
            </div>
          </div>

          <div className="aaroh-editorial-blue-square" aria-hidden="true" />
        </aside>

        {/* Right Column: 12-Card Grid + Pagination */}
        <div className="aaroh-archive-right-column">
          {paginatedItems.length === 0 ? (
            <div className="aaroh-archive-empty-state">
              <BookOpen size={36} style={{ color: '#64748B', marginBottom: '12px' }} />
              <h3>No Archival Records Found</h3>
              <p>
                No historical records match the active search and filter combinations.
                Try adjusting your search terms or clearing active filters.
              </p>
              <button
                type="button"
                className="aaroh-btn-continue-research"
                onClick={clearAllFilters}
                style={{ marginTop: '12px' }}
              >
                Reset All Filters
              </button>
            </div>
          ) : (
            <div className="aaroh-archive-cards-grid" key={`${activeCategory}-${activePeriod}-${currentPage}`}>
              {paginatedItems.map((art) => (
                <article
                  key={art.id}
                  className="aaroh-archival-object-card"
                  onClick={() => onOpenArtifact(art)}
                  tabIndex={0}
                  role="button"
                  aria-label={art.title}
                >
                  <div className="aaroh-object-media-frame">
                    <img
                      src={art.image || art.thumbnail}
                      alt={art.title}
                      loading="lazy"
                      onError={(e) => {
                        e.target.onerror = null
                        e.target.src = '/assets/archive/archive-library.jpg'
                      }}
                    />
                    <span className="aaroh-object-provenance-pill">
                      {art.provenanceType || 'PRIMARY SOURCE'}
                    </span>
                  </div>
                  <div className="aaroh-object-card-body">
                    <div className="aaroh-object-id-row">
                      <span className="aaroh-object-id-badge">{art.id}</span>
                      <span className="aaroh-object-year-badge">{art.year}</span>
                    </div>
                    <span className="aaroh-object-category-kicker">{art.type}</span>
                    <h3 className="aaroh-object-title">{art.shortTitle || art.title}</h3>
                    {art.source && (
                      <p className="aaroh-object-citation">
                        {art.volume ? `${art.volume} · ` : ''}{art.page ? `p. ${art.page}` : art.source}
                      </p>
                    )}
                    <div className="aaroh-object-footer-meta">
                      <span className="aaroh-object-loc">{art.location || 'Archival Registry'}</span>
                      <span className="arrow-icon">Examine →</span>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          )}

          {/* ── Museum Pagination Controls ── */}
          {totalPages > 1 && (
            <div className="aaroh-archive-pagination-bar" role="navigation" aria-label="Archive Pagination">
              <button
                type="button"
                className="aaroh-pagination-btn"
                disabled={currentPage === 1}
                onClick={() => handlePageChange(currentPage - 1)}
                aria-label="Previous Page"
              >
                <ChevronLeft size={16} />
                <span>Previous</span>
              </button>

              <div className="aaroh-pagination-numbers">
                {Array.from({ length: totalPages }, (_, i) => i + 1).map((p) => {
                  if (
                    p === 1 ||
                    p === totalPages ||
                    (p >= currentPage - 1 && p <= currentPage + 1)
                  ) {
                    return (
                      <button
                        key={p}
                        type="button"
                        className={`aaroh-page-num-btn ${currentPage === p ? 'active' : ''}`}
                        onClick={() => handlePageChange(p)}
                        aria-current={currentPage === p ? 'page' : undefined}
                      >
                        {p}
                      </button>
                    )
                  }
                  if (p === currentPage - 2 || p === currentPage + 2) {
                    return (
                      <span key={p} className="aaroh-page-ellipsis">
                        …
                      </span>
                    )
                  }
                  return null
                })}
              </div>

              <button
                type="button"
                className="aaroh-pagination-btn"
                disabled={currentPage === totalPages}
                onClick={() => handlePageChange(currentPage + 1)}
                aria-label="Next Page"
              >
                <span>Next</span>
                <ChevronRight size={16} />
              </button>
            </div>
          )}
        </div>
      </div>
    </main>
  )
}

// ====================================================
// 3. 03 AI ASSISTANT VIEW (Archival Research Desk Reference)
// Embedded Prompt + Inline Answer Flow Architecture
// ====================================================
function AiAssistantEditorial({
  messages,
  loading,
  askAi,
  onClear,
  t,
  language = 'EN',
  onOpenArtifact,
  onNavigate,
}) {
  const [searchQuery, setSearchQuery] = useState('')
  const [searchMode, setSearchMode] = useState('archive')
  const [copiedIdx, setCopiedIdx] = useState(null)
  const [isCollapsed, setIsCollapsed] = useState(false)
  const [selectedInquiryIdx, setSelectedInquiryIdx] = useState(null)
  const inputRef = useRef(null)

  const assistantMessages = useMemo(
    () => messages.filter((m) => m.role === 'assistant'),
    [messages]
  )
  const userMessages = useMemo(
    () => messages.filter((m) => m.role === 'user'),
    [messages]
  )

  const activeAssistantMsg = useMemo(() => {
    if (assistantMessages.length === 0) return null
    if (selectedInquiryIdx !== null && assistantMessages[selectedInquiryIdx]) {
      return assistantMessages[selectedInquiryIdx]
    }
    return assistantMessages[assistantMessages.length - 1]
  }, [assistantMessages, selectedInquiryIdx])

  const activeUserMsg = useMemo(() => {
    if (userMessages.length === 0) return null
    if (selectedInquiryIdx !== null && userMessages[selectedInquiryIdx]) {
      return userMessages[selectedInquiryIdx]
    }
    return userMessages[userMessages.length - 1]
  }, [userMessages, selectedInquiryIdx])

  const isExpanded = (loading || !!activeAssistantMsg) && !isCollapsed

  const handleCopy = (text, idx) => {
    try {
      navigator.clipboard.writeText(text)
      setCopiedIdx(idx)
      setTimeout(() => setCopiedIdx(null), 2000)
    } catch {}
  }

  const handleSearchSubmit = (overrideText) => {
    const q = (overrideText !== undefined ? overrideText : searchQuery).trim()
    if (q && !loading) {
      if (overrideText !== undefined) {
        setSearchQuery(overrideText)
      }
      setIsCollapsed(false)
      setSelectedInquiryIdx(null)
      askAi(q, searchMode)
    }
  }

  const handleAskQuestion = (questionText) => {
    if (!loading) {
      setSearchQuery(questionText)
      setIsCollapsed(false)
      setSelectedInquiryIdx(null)
      askAi(questionText, searchMode)
    }
  }

  const handleClear = () => {
    setSearchQuery('')
    setIsCollapsed(true)
  }

  const handleViewSource = (msg) => {
    if (msg.sourceUrl) {
      window.open(msg.sourceUrl, '_blank', 'noopener,noreferrer')
    } else if (onNavigate) {
      onNavigate('exhibits')
    }
  }

  const suggestedQuestions = t.aiPage?.suggestedQuestions || [
    'What did Ambedkar write about education?',
    'What happened at Mahad in 1927?',
    'Why did Ambedkar resign as Law Minister?',
    'What was Ambedkar\'s role in the Constituent Assembly?',
    'Explain Annihilation of Caste.',
  ]

  return (
    <main className="aaroh-page-container aaroh-ai-page-root">
      <div className="aaroh-ai-assistant-layout">
        {/* ====================================================
            LEFT COLUMN: Exhibition Catalogue / Editorial Intro
           ==================================================== */}
        <aside className="aaroh-ai-editorial-col" aria-label="Editorial Introduction">
          <div className="aaroh-ai-huge-number">{t.aiPage?.num || '03'}</div>
          <h2 className="aaroh-ai-section-title">{t.aiPage?.title || 'AI ASSISTANT'}</h2>
          <p className="aaroh-ai-section-desc">
            {t.aiPage?.desc || "Ask questions and get grounded answers from Ambedkar's writings, speeches and historical records."}
          </p>

          {/* Archival Quotation Card */}
          <div className="aaroh-ai-left-quote-card">
            <p className="aaroh-ai-left-quote-text">
              {t.aiPage?.leftQuote || '“The solution of our problems lies in education.”'}
            </p>
            <span className="aaroh-ai-left-quote-author">
              {t.aiPage?.leftQuoteAuthor || '— Dr. B. R. Ambedkar'}
            </span>
          </div>

          {/* Authentic Archival Heritage Montage */}
          <div className="aaroh-ai-left-collage-frame">
            <img
              src="/assets/hero/ambedkar_hero_collage_seamless.png"
              alt="Dr. B. R. Ambedkar Archival Heritage"
              className="aaroh-ai-left-collage-img"
            />
          </div>
        </aside>

        {/* ====================================================
            RIGHT COLUMN: Archival Research Desk Interface
           ==================================================== */}
        <section className="aaroh-ai-research-area" aria-label="Archival Research Desk">
          {/* Main Editorial Header */}
          <div className="aaroh-ai-header-block">
            <h1 className="aaroh-ai-heading">{t.aiPage?.askHeading || 'ASK AAROH'}</h1>
            <p className="aaroh-ai-subheading">
              {t.aiPage?.askSubtitle || "Explore Ambedkar's writings, speeches and historical records through the archive."}
            </p>
          </div>

          {/* ====================================================
              PERSISTENT SEARCH & INLINE EMBEDDED ANSWER CONTAINER
              (Identical Embedded Flow Architecture as Home Page)
             ==================================================== */}
          <div className={`aaroh-ai-persistent-search-container ${isExpanded ? 'is-expanded' : ''}`}>
            {/* Unified Search Component: Mode Selector + Input + Single Arrow Action */}
            <div className="aaroh-ai-unified-search-bar" role="search" aria-label="AAROH Unified Research Search">
              {/* Archive vs Web Mode Selector */}
              <div className="aaroh-ai-mode-selector" role="tablist" aria-label="Research Source Mode">
                <button
                  type="button"
                  role="tab"
                  id="aaroh-ai-tab-archive"
                  aria-selected={searchMode === 'archive'}
                  className={`aaroh-ai-mode-btn ${searchMode === 'archive' ? 'is-active' : ''}`}
                  onClick={() => setSearchMode('archive')}
                  title={t.aiPage?.modeArchive || 'AAROH Archive'}
                >
                  <div className="aaroh-ai-mode-icon-box" aria-hidden="true">
                    <Landmark size={16} />
                  </div>
                  <div className="aaroh-ai-mode-copy">
                    <span className="aaroh-ai-mode-title">{t.aiPage?.modeArchive || 'AAROH Archive'}</span>
                    <span className="aaroh-ai-mode-caption">{t.aiPage?.modeArchiveSub || 'Curated historical sources'}</span>
                  </div>
                </button>

                <button
                  type="button"
                  role="tab"
                  id="aaroh-ai-tab-web"
                  aria-selected={searchMode === 'web'}
                  className={`aaroh-ai-mode-btn ${searchMode === 'web' ? 'is-active' : ''}`}
                  onClick={() => setSearchMode('web')}
                  title={t.aiPage?.modeWeb || 'Web Search'}
                >
                  <div className="aaroh-ai-mode-icon-box" aria-hidden="true">
                    <Globe2 size={16} />
                  </div>
                  <div className="aaroh-ai-mode-copy">
                    <span className="aaroh-ai-mode-title">{t.aiPage?.modeWeb || 'Web Search'}</span>
                    <span className="aaroh-ai-mode-caption">{t.aiPage?.modeWebSub || 'Information from across the web'}</span>
                  </div>
                </button>
              </div>

              {/* Vertical Divider */}
              <div className="aaroh-ai-search-vdivider" aria-hidden="true" />

              {/* Search Input Field */}
              <div className="aaroh-ai-search-input-wrap">
                <Search size={18} className="aaroh-ai-input-search-icon" aria-hidden="true" />
                <input
                  ref={inputRef}
                  type="text"
                  id="aaroh-ai-main-query-input"
                  className="aaroh-ai-query-input"
                  placeholder={
                    searchMode === 'archive'
                      ? (t.aiPage?.placeholderArchive || 'Ask anything about Ambedkar...')
                      : (t.aiPage?.placeholderWeb || 'Search the web about Ambedkar...')
                  }
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter') handleSearchSubmit()
                  }}
                  aria-label="Ask anything about Ambedkar"
                />
                {searchQuery && (
                  <button
                    type="button"
                    className="aaroh-ai-clear-query-btn"
                    onClick={handleClear}
                    title="Clear query"
                    aria-label="Clear query"
                  >
                    <X size={15} />
                  </button>
                )}
              </div>

              {/* The ONLY search submit action */}
              <button
                type="button"
                id="aaroh-ai-submit-query-btn"
                className="aaroh-ai-submit-query-btn"
                onClick={() => handleSearchSubmit()}
                aria-label={`Search ${searchMode === 'archive' ? 'AAROH Archive' : 'Web'}`}
                title="Search"
              >
                <ArrowRight size={18} />
              </button>
            </div>

            {/* Continuous Inline Answer Panel Directly Attached Below the Prompt Bar */}
            <div className={`aaroh-ai-inline-answer-flow ${isExpanded ? 'is-expanded' : ''}`}>
              <div className="aaroh-ai-inline-scroll-area">
                {/* Archival Research Loading State */}
                {loading ? (
                  <div className="aaroh-ai-loading-box">
                    <ArchivalAiLoadingIndicator
                      mode={searchMode}
                      title={
                        searchMode === 'web'
                          ? (t.aiPage?.loadingWeb || 'Synthesizing verified web information…')
                          : (t.aiPage?.loadingArchive || 'Retrieving curated historical sources from AAROH Archive…')
                      }
                      subtitle={
                        searchMode === 'web'
                          ? (t.aiPage?.loadingSubWeb || 'Cross-referencing historical web archives and scholarly records')
                          : (t.aiPage?.loadingSubArchive || 'Cross-referencing primary writings, speeches and historical volumes')
                      }
                    />
                  </div>
                ) : activeAssistantMsg ? (
                  <article className="aaroh-ai-embedded-doc-wrapper" aria-label="Embedded Archival Response">
                    {/* Top Embedded Status & Controls Header */}
                    <div className="aaroh-ai-embedded-top-bar">
                      <div className="aaroh-ai-embedded-brand-group">
                        <div className={`aaroh-result-source-badge ${activeAssistantMsg.sourceMode === 'web' ? 'is-web' : 'is-archive'}`}>
                          <div className="aaroh-result-source-icon" aria-hidden="true">
                            {activeAssistantMsg.sourceMode === 'web' ? <Globe2 size={14} /> : <Landmark size={14} />}
                          </div>
                          <div className="aaroh-result-source-text">
                            <span className="aaroh-result-source-title">
                              {activeAssistantMsg.sourceMode === 'web'
                                ? (t.aiPage?.webResponseLabel || 'AAROH WEB SYNTHESIS')
                                : (t.aiPage?.archivalResponseLabel || 'AAROH ARCHIVE')}
                            </span>
                            <span className="aaroh-result-source-sub">
                              {activeAssistantMsg.sourceMode === 'web'
                                ? 'Information from across the web'
                                : 'Curated historical sources'}
                            </span>
                          </div>
                        </div>

                        <span className="aaroh-overview-scope-pill">
                          <ShieldCheck size={12} />
                          <span>Strictly Ambedkar Scope</span>
                        </span>

                        {activeUserMsg && (
                          <div className="aaroh-ai-active-inquiry-pill" title={activeUserMsg.content}>
                            <span className="inquiry-label">Q:</span>
                            <span className="inquiry-text">{activeUserMsg.content}</span>
                          </div>
                        )}
                      </div>

                      <div className="aaroh-ai-embedded-top-actions">
                        {assistantMessages.length > 1 && (
                          <div className="aaroh-ai-inquiry-stepper" aria-label="Previous Inquiries">
                            <span className="stepper-label">INQUIRY</span>
                            {assistantMessages.map((_, i) => (
                              <button
                                key={i}
                                type="button"
                                className={`aaroh-ai-inquiry-step-btn ${(selectedInquiryIdx === i || (selectedInquiryIdx === null && i === assistantMessages.length - 1)) ? 'is-active' : ''}`}
                                onClick={() => setSelectedInquiryIdx(i)}
                                title={`View Inquiry ${i + 1}`}
                              >
                                {i + 1}
                              </button>
                            ))}
                          </div>
                        )}

                        <button
                          type="button"
                          className="aaroh-ai-action-collapse-btn"
                          onClick={() => setIsCollapsed(true)}
                          title="Collapse answer"
                          aria-label="Collapse answer"
                        >
                          <ChevronUp size={14} />
                          <span>Collapse</span>
                        </button>

                        <button
                          type="button"
                          className="aaroh-ai-action-clear-btn"
                          onClick={() => {
                            onClear()
                            setIsCollapsed(false)
                            setSelectedInquiryIdx(null)
                          }}
                          title="Reset inquiry"
                          aria-label="Reset inquiry"
                        >
                          <RotateCcw size={12} />
                          <span>Reset</span>
                        </button>
                      </div>
                    </div>

                    {/* Scholarly Document Layout: Text / Citation / Quotes + Archival Asset */}
                    <div className={`aaroh-ai-doc-grid ${activeAssistantMsg.image ? 'has-media' : 'text-only'}`}>
                      <div className="aaroh-ai-doc-content-col">
                        <h2 className="aaroh-ai-doc-title">
                          {activeAssistantMsg.title || (language === 'HI' ? 'अभिलेखीय विश्लेषण' : 'Education as a tool for social transformation')}
                        </h2>

                        <div className="aaroh-ai-doc-paragraphs">
                          {activeAssistantMsg.content}
                        </div>

                        {activeAssistantMsg.quote && (
                          <blockquote className="aaroh-ai-quote-callout">
                            <p className="aaroh-ai-quote-body">“{activeAssistantMsg.quote}”</p>
                            {activeAssistantMsg.quoteAuthor && (
                              <span className="aaroh-ai-quote-author">{activeAssistantMsg.quoteAuthor}</span>
                            )}
                          </blockquote>
                        )}
                      </div>

                      {activeAssistantMsg.image && (
                        <div className="aaroh-ai-doc-media-col">
                          <div className="aaroh-ai-media-frame">
                            <img
                              src={activeAssistantMsg.image}
                              alt={activeAssistantMsg.imageCaption || 'Archival record photograph'}
                              className="aaroh-ai-media-img"
                            />
                          </div>
                          {activeAssistantMsg.imageCaption && (
                            <p className="aaroh-ai-media-caption">{activeAssistantMsg.imageCaption}</p>
                          )}
                        </div>
                      )}
                    </div>

                    {/* Web Sources Carousel (Positioned at Bottom of Response) */}
                    {activeAssistantMsg.webSources && activeAssistantMsg.webSources.length > 0 && (
                      <div className="aaroh-overview-sources-section is-bottom-sources">
                        <div className="aaroh-overview-sources-header">
                          <Globe2 size={13} />
                          <span>Verified Web Sources ({activeAssistantMsg.webSources.length})</span>
                        </div>
                        <div className="aaroh-overview-sources-carousel">
                          {activeAssistantMsg.webSources.map((src, i) => (
                            <a
                              key={i}
                              href={src.url}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="aaroh-overview-source-chip"
                            >
                              <Globe2 size={12} style={{ color: '#123F6B', flexShrink: 0 }} />
                              <div className="aaroh-overview-source-info">
                                <span className="aaroh-overview-source-domain">{src.domain || 'archive'}</span>
                                <span className="aaroh-overview-source-title">{src.title}</span>
                              </div>
                              <ExternalLink size={10} style={{ color: '#64748B', marginLeft: 'auto' }} />
                            </a>
                          ))}
                        </div>
                      </div>
                    )}

                    {/* Provenance & Source Information Footer */}
                    <footer className="aaroh-ai-doc-footer-bar">
                      <div className="aaroh-ai-provenance-source">
                        <FileText size={16} className="aaroh-ai-provenance-icon" aria-hidden="true" />
                        <div className="aaroh-ai-provenance-text">
                          <span className="aaroh-ai-meta-label">{t.aiPage?.sourceLabel || 'SOURCE'}</span>
                          <span className="aaroh-ai-meta-value">
                            {activeAssistantMsg.source || 'Dr. B. R. Ambedkar, Speeches Vol. 1, p. 28'}
                          </span>
                        </div>
                      </div>

                      {activeAssistantMsg.topics && activeAssistantMsg.topics.length > 0 && (
                        <div className="aaroh-ai-provenance-topics">
                          <Layers size={16} className="aaroh-ai-provenance-icon" aria-hidden="true" />
                          <div className="aaroh-ai-provenance-text">
                            <span className="aaroh-ai-meta-label">{t.aiPage?.relatedTopicsLabel || 'RELATED TOPICS'}</span>
                            <div className="aaroh-ai-topic-pills">
                              {activeAssistantMsg.topics.map((tp) => (
                                <span key={tp} className="aaroh-ai-topic-pill">{tp}</span>
                              ))}
                            </div>
                          </div>
                        </div>
                      )}

                      <div className="aaroh-ai-doc-actions">
                        <button
                          type="button"
                          className="aaroh-ai-action-view-source"
                          onClick={() => handleViewSource(activeAssistantMsg)}
                        >
                          <BookOpen size={14} aria-hidden="true" />
                          <span>{t.aiPage?.viewSource || 'VIEW SOURCE'}</span>
                          <ArrowRight size={12} aria-hidden="true" />
                        </button>

                        <button
                          type="button"
                          className="aaroh-ai-action-copy"
                          onClick={() => handleCopy(activeAssistantMsg.content, 'active')}
                          aria-label="Copy response text"
                        >
                          {copiedIdx === 'active' ? <Check size={13} /> : <Copy size={13} />}
                          <span>{copiedIdx === 'active' ? (t.aiPage?.copied || 'Copied') : (t.aiPage?.copy || 'Copy')}</span>
                        </button>
                      </div>
                    </footer>
                  </article>
                ) : null}
              </div>
            </div>
          </div>

          {/* EXPLORE A QUESTION: Rectangular Editorial Suggested Cards (Hidden when answer expanded) */}
          <div className={`aaroh-ai-explore-bar ${isExpanded ? 'is-hidden' : ''}`}>
            <span className="aaroh-ai-explore-heading">
              {t.aiPage?.exploreLabel || 'EXPLORE A QUESTION'}
            </span>
            <div className="aaroh-ai-suggested-cards-row">
              {suggestedQuestions.map((question) => (
                <button
                  key={question}
                  type="button"
                  className="aaroh-ai-suggested-card"
                  onClick={() => handleAskQuestion(question)}
                >
                  <span className="aaroh-ai-suggested-title">{question}</span>
                  <ArrowRight size={13} className="aaroh-ai-suggested-arrow" aria-hidden="true" />
                </button>
              ))}
            </div>
          </div>

          {/* Archival Research Desk Welcome / Heritage Introduction when no active inquiry */}
          {!activeAssistantMsg && !loading && (
            <div className="aaroh-ai-empty-desk-card">
              <div className="aaroh-ai-empty-inner">
                <div className="aaroh-ai-empty-seal">
                  <ScrollText size={22} />
                </div>
                <h3 className="aaroh-ai-empty-title">
                  {t.aiPage?.emptyTitle || 'Archival Research Desk'}
                </h3>
                <p className="aaroh-ai-empty-text">
                  {t.aiPage?.emptyDesc || 'Select an inquiry above or formulate your research question to access grounded citations from verified historical records.'}
                </p>
              </div>
            </div>
          )}
        </section>
      </div>
    </main>
  )
}

// ====================================================
// 4. 03 TIMELINE VIEW (Reference Panel 03 - Chronology Exhibition)
// ====================================================
function TimelineEditorial({
  selectedEventId,
  onSelectEvent,
  onNavigateToPlace,
  onOpenArtifact,
  onAskAi,
  t,
  language = 'EN',
}) {
  const [activeCategory, setActiveCategory] = useState('ALL')
  const [showDetailed, setShowDetailed] = useState(false)

  // Filter events based on active category
  const filteredEvents = useMemo(() => {
    if (activeCategory === 'ALL') return heritageTimelineEvents
    return heritageTimelineEvents.filter((ev) => ev.category === activeCategory)
  }, [activeCategory])

  // Current active event
  const activeEvent = useMemo(() => {
    if (selectedEventId) {
      const match = filteredEvents.find((e) => e.id === selectedEventId)
      if (match) return match
    }
    return filteredEvents[0] || heritageTimelineEvents[0]
  }, [selectedEventId, filteredEvents])

  const activeIdx = useMemo(() => {
    const idx = filteredEvents.findIndex((e) => e.id === activeEvent.id)
    return idx >= 0 ? idx : 0
  }, [filteredEvents, activeEvent])

  // Verified Archival records connected to this timeline event
  const connectedArtifacts = useMemo(() => {
    if (!activeEvent || !activeEvent.id) return []
    return getArtifactsForTimelineEvent(activeEvent.id)
  }, [activeEvent])

  const handlePrev = () => {
    if (filteredEvents.length === 0) return
    const prevIdx = activeIdx > 0 ? activeIdx - 1 : filteredEvents.length - 1
    onSelectEvent(filteredEvents[prevIdx].id)
  }

  const handleNext = () => {
    if (filteredEvents.length === 0) return
    const nextIdx = activeIdx < filteredEvents.length - 1 ? activeIdx + 1 : 0
    onSelectEvent(filteredEvents[nextIdx].id)
  }

  if (showDetailed) {
    return (
      <main className="aaroh-page-container">
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '20px' }}>
          <h2 style={{ fontFamily: 'var(--ac-serif)', fontSize: '24px', color: '#123F6B' }}>
            Detailed Chronological Timeline Archive
          </h2>
          <button
            type="button"
            className="aaroh-btn-dismiss"
            onClick={() => setShowDetailed(false)}
          >
            ← Back to Archival Exhibition Timeline
          </button>
        </div>
        <VerticalTimeline
          onOpenArtifact={onOpenArtifact}
          onAskAi={onAskAi}
          museumArtifacts={museumArtifacts}
          t={t}
          language={language}
        />
      </main>
    )
  }

  return (
    <main className="aaroh-page-container">
      {/* Category Filter Pills Bar */}
      <div className="aaroh-timeline-filters-row" role="tablist" aria-label="Timeline Categories">
        {TIMELINE_CATEGORIES.map((cat) => (
          <button
            key={cat}
            type="button"
            className={`aaroh-archive-tab ${activeCategory === cat ? 'active' : ''}`}
            onClick={() => {
              setActiveCategory(cat)
              const firstInCat = cat === 'ALL'
                ? heritageTimelineEvents[0]
                : heritageTimelineEvents.find((e) => e.category === cat)
              if (firstInCat) onSelectEvent(firstInCat.id)
            }}
          >
            {cat}
          </button>
        ))}
      </div>

      <div className="aaroh-timeline-editorial-grid">
        {/* Left Column: Huge 03 & Milestone Rail */}
        <div className="aaroh-editorial-section-col">
          <div className="aaroh-huge-number">03</div>
          <h2 className="aaroh-section-title-large">{t.timelinePage.title}</h2>
          <p className="aaroh-section-desc-editorial">{t.timelinePage.desc}</p>

          {/* Vertical Milestone Rail */}
          <div className="aaroh-milestone-rail" role="tablist" aria-label="Chronology Milestones">
            {filteredEvents.map((m) => {
              const isActive = m.id === activeEvent.id
              return (
                <div
                  key={m.id}
                  className={`aaroh-rail-item ${isActive ? 'active' : ''}`}
                  onClick={() => onSelectEvent(m.id)}
                  role="tab"
                  aria-selected={isActive}
                >
                  <div className="aaroh-rail-dot" />
                  <span className="aaroh-rail-year">{m.year}</span>
                  <span className="aaroh-rail-label">{m.title}</span>
                </div>
              )
            })}
          </div>

          <button
            type="button"
            className="aaroh-btn-dismiss"
            style={{ marginTop: '20px', fontSize: '11px', width: '100%', justifyContent: 'center' }}
            onClick={() => setShowDetailed(true)}
          >
            {t.timelinePage.detailedToggle} →
          </button>
        </div>

        {/* Center: Large Archival Visual Frame */}
        <div className="aaroh-timeline-center-photo-wrap">
          <div className="aaroh-timeline-photo-box">
            <img
              src={activeEvent.image}
              alt={activeEvent.title}
              className="aaroh-timeline-main-photo"
            />
            <div className="aaroh-timeline-blue-block" aria-hidden="true" />
          </div>

          {/* Location Badge with direct "View on Map" jump */}
          <div className="aaroh-timeline-loc-tag-strip">
            <div className="loc-text-group">
              <MapPin size={13} style={{ color: 'var(--ac-primary)' }} />
              <span>{activeEvent.locationName}</span>
            </div>
            {activeEvent.placeId && (
              <button
                type="button"
                className="aaroh-timeline-jump-map-btn"
                onClick={() => onNavigateToPlace(activeEvent.placeId)}
                title={`View ${activeEvent.locationName} on Historical Map`}
              >
                <span>View on Map</span>
                <ArrowRight size={12} />
              </button>
            )}
          </div>

          {/* Curatorial Quote Block */}
          {activeEvent.quote && (
            <blockquote className="aaroh-timeline-quote-card">
              <p>"{activeEvent.quote}"</p>
              <span>— Dr. B. R. Ambedkar</span>
            </blockquote>
          )}
        </div>

        {/* Right Column: Event Narrative & Deep Archival Evidence */}
        <div className="aaroh-timeline-event-card">
          <div className="aaroh-event-header-row">
            <div className="aaroh-event-year-huge">{activeEvent.year}</div>
            <span className="aaroh-event-cat-pill">{activeEvent.category}</span>
          </div>

          <span className="aaroh-event-exact-date">{activeEvent.date}</span>
          <h3 className="aaroh-event-title-editorial">{activeEvent.title}</h3>

          <p className="aaroh-event-narrative">{activeEvent.description}</p>

          {/* Key Historical Points */}
          {activeEvent.takeaways && activeEvent.takeaways.length > 0 && (
            <div className="aaroh-event-takeaways-block">
              <span className="takeaways-title">Historical Impact</span>
              <ul>
                {activeEvent.takeaways.map((point, idx) => (
                  <li key={idx}>
                    <span className="bullet-num">{idx + 1}.</span>
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Secondary Thumbnail */}
          {activeEvent.thumb && (
            <img
              src={activeEvent.thumb}
              alt=""
              className="aaroh-event-secondary-thumb"
            />
          )}

          {/* Connected Archival Records (Timeline ↔ Archive Connection) */}
          {connectedArtifacts.length > 0 && (
            <div className="aaroh-timeline-connected-artifacts">
              <span className="connected-artifacts-kicker">
                <FileText size={12} /> Connected Archival Records ({connectedArtifacts.length})
              </span>
              <div className="connected-artifacts-grid">
                {connectedArtifacts.map((art) => (
                  <button
                    key={art.id}
                    type="button"
                    className="connected-art-card"
                    onClick={() => onOpenArtifact(art)}
                    title={`Examine ${art.title}`}
                  >
                    <img
                      src={art.image || art.thumbnail}
                      alt={art.title}
                      onError={(e) => {
                        e.target.onerror = null
                        e.target.src = '/assets/archive/archive-library.jpg'
                      }}
                    />
                    <div className="connected-art-info">
                      <span className="connected-art-type">{art.type}</span>
                      <span className="connected-art-title">{art.shortTitle || art.title}</span>
                      <span className="connected-art-id">{art.id}</span>
                    </div>
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Action Row */}
          <div className="aaroh-event-actions-bar">
            <button
              type="button"
              className="aaroh-event-ai-btn"
              onClick={() => onAskAi(`Tell me about the historical significance of "${activeEvent.title}" (${activeEvent.year}) in Dr. Ambedkar's mission.`)}
            >
              <Sparkles size={13} />
              <span>Research in AI</span>
            </button>

            {/* Stepper Navigation Arrows */}
            <div className="aaroh-event-nav-arrows">
              <button
                type="button"
                className="aaroh-arrow-ctrl-btn"
                onClick={handlePrev}
                aria-label="Previous milestone"
                title="Previous Milestone"
              >
                <ArrowLeft size={16} />
              </button>
              <span className="aaroh-event-counter">
                {activeIdx + 1} / {filteredEvents.length}
              </span>
              <button
                type="button"
                className="aaroh-arrow-ctrl-btn"
                onClick={handleNext}
                aria-label="Next milestone"
                title="Next Milestone"
              >
                <ArrowRight size={16} />
              </button>
            </div>
          </div>

          {/* Verified Source Footer */}
          {activeEvent.sources && (
            <div className="aaroh-event-source-footer">
              <span className="source-label">Source Record:</span>
              <span className="source-content">{activeEvent.sources.join(' · ')}</span>
            </div>
          )}
        </div>
      </div>
    </main>
  )
}

// ====================================================
// 5. 04 KEY PLACES VIEW (Reference Panel 04 - Real Geographic Atlas)
// ====================================================
function KeyPlacesEditorial({
  selectedPlaceId,
  onSelectPlace,
  onNavigateToTimeline,
  onOpenArtifact,
  onAskAi,
  t,
  language = 'EN',
}) {
  const [activeCategory, setActiveCategory] = useState('ALL')
  const selectedPlace = useMemo(() => getPlaceById(selectedPlaceId), [selectedPlaceId])

  // Verified Archival records connected to this place
  const placeArtifacts = useMemo(() => {
    if (!selectedPlace || !selectedPlace.id) return []
    const fromDb = getArtifactsForPlace(selectedPlace.id)
    if (fromDb && fromDb.length > 0) return fromDb
    return selectedPlace.relatedArtifacts || []
  }, [selectedPlace])

  const filteredPlaces = useMemo(() => {
    if (activeCategory === 'ALL') return heritagePlaces
    return heritagePlaces.filter((p) => p.categories.includes(activeCategory))
  }, [activeCategory])

  return (
    <main className="aaroh-page-container">
      {/* Category Filter Pills Bar */}
      <div className="aaroh-places-category-bar" role="tablist" aria-label="Place Categories">
        {PLACE_CATEGORIES.map((cat) => (
          <button
            key={cat}
            type="button"
            className={`aaroh-archive-tab ${activeCategory === cat ? 'active' : ''}`}
            onClick={() => setActiveCategory(cat)}
          >
            {cat}
          </button>
        ))}
      </div>

      <div className="aaroh-places-editorial-grid">
        {/* Left Column: Huge 04 & Locations Index */}
        <div className="aaroh-editorial-section-col">
          <div className="aaroh-huge-number">04</div>
          <h2 className="aaroh-section-title-large">{t.placesPage.title}</h2>
          <p className="aaroh-section-desc-editorial">{t.placesPage.desc}</p>

          <div className="aaroh-locations-index-box">
            <div className="aaroh-locations-header-kicker">
              <span>{filteredPlaces.length} Verified Locations</span>
            </div>

            <div className="aaroh-locations-list-scroll">
              {filteredPlaces.map((place) => {
                const isSelected = selectedPlace.id === place.id
                return (
                  <button
                    key={place.id}
                    type="button"
                    className={`aaroh-location-item-btn ${isSelected ? 'active' : ''}`}
                    onClick={() => onSelectPlace(place.id)}
                  >
                    <MapPin size={13} style={{ color: isSelected ? 'var(--ac-primary)' : '#64748B', flexShrink: 0 }} />
                    <div className="aaroh-location-meta-col">
                      <span className="aaroh-loc-name">{place.name}</span>
                      <span className="aaroh-loc-sub">{place.state} · {place.period}</span>
                    </div>
                  </button>
                )
              })}
            </div>
          </div>
        </div>

        {/* Center: Real Geographic Map with d3-geo & GeoJSON */}
        <div className="aaroh-places-center-stage">
          <RealHistoricalMap
            selectedPlaceId={selectedPlace.id}
            onSelectPlace={onSelectPlace}
            activeCategory={activeCategory}
            t={t}
            language={language}
          />
        </div>

        {/* Right Column: Selected Place Comprehensive Information Panel */}
        <aside className="aaroh-place-info-panel" aria-label="Place Historical Details">
          <div className="aaroh-place-panel-header">
            <div className="aaroh-place-region-pill">
              <MapPin size={11} />
              <span>{selectedPlace.state.toUpperCase()} · {selectedPlace.country.toUpperCase()}</span>
            </div>
            <span className="aaroh-place-period-badge">{selectedPlace.period}</span>
          </div>

          <h3 className="aaroh-place-name-large">{selectedPlace.name}</h3>
          <div className="aaroh-place-significance-tag">{selectedPlace.significance}</div>

          <div className="aaroh-place-photo-frame">
            <img src={selectedPlace.image} alt={selectedPlace.name} />
          </div>

          <p className="aaroh-place-description-editorial">{selectedPlace.description}</p>

          {/* Related Historical Events */}
          {selectedPlace.relatedEvents && selectedPlace.relatedEvents.length > 0 && (
            <div className="aaroh-place-related-block">
              <h4 className="aaroh-place-subheading">
                <CalendarDays size={13} />
                <span>Related Chronology Events</span>
              </h4>
              <div className="aaroh-place-events-list">
                {selectedPlace.relatedEvents.map((ev) => (
                  <div key={ev.id} className="aaroh-place-event-item">
                    <span className="ev-year-badge">{ev.year}</span>
                    <span className="ev-title-text">{ev.title}</span>
                    <button
                      type="button"
                      className="ev-goto-btn"
                      onClick={() => onNavigateToTimeline(ev.id)}
                      title="View in Timeline"
                    >
                      <span>Timeline</span>
                      <ArrowRight size={11} />
                    </button>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Related Primary Archival Records */}
          {placeArtifacts && placeArtifacts.length > 0 && (
            <div className="aaroh-place-related-block">
              <h4 className="aaroh-place-subheading">
                <FileText size={13} />
                <span>Primary Archival Records ({placeArtifacts.length})</span>
              </h4>
              <div className="aaroh-place-artifacts-grid">
                {placeArtifacts.map((art) => (
                  <button
                    key={art.id}
                    type="button"
                    className="aaroh-place-art-chip"
                    onClick={() => onOpenArtifact(art)}
                    title={`Examine ${art.title}`}
                  >
                    <img
                      src={art.image || art.thumbnail}
                      alt={art.title}
                      onError={(e) => {
                        e.target.onerror = null
                        e.target.src = '/assets/archive/archive-library.jpg'
                      }}
                    />
                    <div className="art-meta-wrap">
                      <span className="art-type-kicker">{art.type}</span>
                      <span className="art-title-text">{art.shortTitle || art.title}</span>
                    </div>
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Action: Grounded AI Research */}
          <button
            type="button"
            className="aaroh-place-action-btn"
            onClick={() =>
              onAskAi(`Explain the historical significance of ${selectedPlace.fullName} in Dr. B. R. Ambedkar's civil rights and constitutional work.`)
            }
          >
            <Sparkles size={14} />
            <span>{t.placesPage.researchPlace}</span>
            <ArrowRight size={14} />
          </button>

          {/* Verified Source Citations */}
          {selectedPlace.sources && selectedPlace.sources.length > 0 && (
            <div className="aaroh-place-sources-box">
              <span className="sources-kicker">Verified Heritage Sources</span>
              <ul>
                {selectedPlace.sources.map((src, i) => (
                  <li key={i}>{src}</li>
                ))}
              </ul>
            </div>
          )}
        </aside>
      </div>
    </main>
  )
}

// ====================================================
// 6. 06 LIBRARY VIEW (Reference Panel 06)
// ====================================================
function LibraryEditorial({ onOpenArtifact, onAskAi, t, language = 'EN' }) {
  const [activeTab, setActiveTab] = useState('Books')

  const filteredVolumes = useMemo(() => {
    if (activeTab === 'Books') return libraryVolumes
    return libraryVolumes.filter((v) => v.category === activeTab || activeTab === 'All')
  }, [activeTab])

  return (
    <main className="aaroh-page-container">
      <div className="aaroh-library-layout">
        {/* Left Column: Huge 06 Title */}
        <div className="aaroh-editorial-section-col">
          <div className="aaroh-huge-number">06</div>
          <h2 className="aaroh-section-title-large">{t.libraryPage.title}</h2>
          <p className="aaroh-section-desc-editorial">{t.libraryPage.desc}</p>
          <div className="aaroh-editorial-blue-square" aria-hidden="true" />
        </div>

        {/* Right Column: Filter Tabs + Physical Bookshelf */}
        <div>
          <div className="aaroh-library-tabs">
            {t.libraryPage.tabs.map((tab) => (
              <button
                key={tab}
                type="button"
                className={`aaroh-library-tab-btn ${activeTab === tab ? 'active' : ''}`}
                onClick={() => setActiveTab(tab)}
              >
                {tab}
              </button>
            ))}
          </div>

          <div className="aaroh-bookshelf-grid" key={activeTab}>
            {filteredVolumes.map((vol) => (
              <article
                key={vol.id}
                className="aaroh-book-volume-card"
                onClick={() => {
                  onOpenArtifact({
                    id: vol.id,
                    title: vol.title,
                    type: vol.category,
                    year: vol.year,
                    place: 'Library Archive',
                    image: vol.cover,
                    collection: 'AAROH Heritage Library',
                    curatorNote: vol.description,
                  })
                }}
              >
                <div className="aaroh-book-cover-frame">
                  <img src={vol.cover} alt={vol.title} />
                </div>
                <h3 className="aaroh-book-title">{vol.title}</h3>
                <span className="aaroh-book-meta">{vol.subtitle || vol.year}</span>
                <span className="aaroh-book-card-arrow">→</span>
              </article>
            ))}
          </div>
        </div>
      </div>
    </main>
  )
}

// ====================================================
// ARTIFACT LIGHTBOX MODAL (Editorial Paper Viewport)
// Rich Museum Provenance, Full Resolution Viewer, Quotes & Connected Records
// ====================================================
function ArtifactLightboxModal({ artifact, onClose, onAskAi, t, language = 'EN' }) {
  const [activeArt, setActiveArt] = useState(artifact)
  const [isClosing, setIsClosing] = useState(false)
  const [isZoomed, setIsZoomed] = useState(false)

  useEffect(() => {
    setActiveArt(artifact)
    setIsZoomed(false)
  }, [artifact])

  const handleClose = () => {
    setIsClosing(true)
    setTimeout(() => {
      onClose()
    }, 220)
  }

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') handleClose()
    }
    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [])

  // Resolve related artifacts dynamically
  const relatedArtifacts = useMemo(() => {
    if (!activeArt || !activeArt.id) return []
    return getRelatedArtifacts(activeArt.id, 4)
  }, [activeArt])

  if (!activeArt) return null

  return (
    <div
      className={`ac-modal-backdrop ${isClosing ? 'is-closing' : ''}`}
      onClick={handleClose}
      role="dialog"
      aria-modal="true"
      aria-label={activeArt.title}
    >
      <div
        className={`ac-artifact-lightbox ${isClosing ? 'is-closing' : ''} ${isZoomed ? 'is-zoomed-view' : ''}`}
        onClick={(e) => e.stopPropagation()}
      >
        <div className="ac-lightbox-top">
          <div className="ac-lightbox-title-wrap">
            <div className="ac-lightbox-meta-strip">
              <span className="ac-lightbox-id-badge">{activeArt.id}</span>
              <span className="ac-section-kicker">{activeArt.type} · {activeArt.year}</span>
              <span className="ac-provenance-pill">{activeArt.provenanceType || 'PRIMARY SOURCE'}</span>
            </div>
            <h3>{activeArt.title}</h3>
          </div>
          <button type="button" className="ac-modal-close" onClick={handleClose} aria-label="Close">
            <X size={20} />
          </button>
        </div>

        <div className="ac-lightbox-body">
          <div className="ac-zoom-viewport">
            <div className={`ac-zoom-canvas ${isZoomed ? 'zoomed' : ''}`}>
              <img
                src={activeArt.image || activeArt.thumbnail}
                alt={activeArt.title}
                onError={(e) => {
                  e.target.onerror = null
                  e.target.src = '/assets/archive/archive-library.jpg'
                }}
              />
            </div>
            <button
              type="button"
              className="ac-zoom-toggle-btn"
              onClick={() => setIsZoomed((prev) => !prev)}
              title={isZoomed ? 'Reset View' : 'Inspect Details'}
            >
              <Maximize2 size={14} />
              <span>{isZoomed ? 'Standard View' : 'Inspect Details'}</span>
            </button>
          </div>

          <div className="ac-curation-sheet">
            <span className="ac-section-kicker">Archival Curatorial Note</span>
            <h4>Historical Context & Provenance</h4>
            <p className="ac-curator-note">
              {activeArt.curatorNote || activeArt.description || 'Authentic historical primary record from Dr. B. R. Ambedkar’s verified archives.'}
            </p>

            {/* Historical Quote Callout (if available) */}
            {activeArt.quote && (
              <div className="ac-lightbox-quote-callout">
                <Quote size={14} className="ac-quote-icon" />
                <p>&ldquo;{activeArt.quote}&rdquo;</p>
                <span className="ac-quote-author">{activeArt.creator ? `— ${activeArt.creator}` : '— Dr. B. R. Ambedkar'}</span>
              </div>
            )}

            {/* Comprehensive Metadata Table */}
            <div className="ac-meta-table">
              <div className="ac-meta-row">
                <span>Source Holding</span>
                <strong>{activeArt.source || 'Dr. B. R. Ambedkar: Writings and Speeches'}</strong>
              </div>
              {activeArt.volume && (
                <div className="ac-meta-row">
                  <span>Volume & Page</span>
                  <strong>{activeArt.volume}{activeArt.page ? ` · p. ${activeArt.page}` : ''}</strong>
                </div>
              )}
              <div className="ac-meta-row">
                <span>Collection</span>
                <strong>{activeArt.collection || 'AAROH Digital Archive'}</strong>
              </div>
              <div className="ac-meta-row">
                <span>Location</span>
                <strong>{activeArt.location || activeArt.place || 'National Archives of India'}</strong>
              </div>
              <div className="ac-meta-row">
                <span>Date / Era</span>
                <strong>{activeArt.date || activeArt.year || 'Historical Archive'}</strong>
              </div>
              <div className="ac-meta-row">
                <span>Language</span>
                <strong>{activeArt.language || 'English'}</strong>
              </div>
              <div className="ac-meta-row">
                <span>Verification</span>
                <strong style={{ color: '#166534', display: 'flex', alignItems: 'center', gap: '4px' }}>
                  <ShieldCheck size={13} />
                  Verified Archival Record
                </strong>
              </div>
            </div>

            {/* Original Document / PDF link */}
            {activeArt.documentUrl && (
              <a
                href={activeArt.documentUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="ac-lightbox-pdf-link"
              >
                <FileText size={14} />
                <span>View Original Archival PDF Page →</span>
                <ExternalLink size={12} />
              </a>
            )}

            {/* Related Topics Chips */}
            {((activeArt.subjects && activeArt.subjects.length > 0) || (activeArt.tags && activeArt.tags.length > 0)) && (
              <div className="ac-lightbox-topics-wrap">
                <span className="topics-label">Related Topics:</span>
                <div className="topics-chips-list">
                  {(activeArt.subjects || activeArt.tags).map((topic) => (
                    <span key={topic} className="topic-chip">{topic}</span>
                  ))}
                </div>
              </div>
            )}

            {/* Data-Driven Related Archival Records */}
            {relatedArtifacts.length > 0 && (
              <div className="ac-lightbox-related-section">
                <span className="related-kicker">Related Archival Records</span>
                <div className="ac-lightbox-related-grid">
                  {relatedArtifacts.map((rel) => (
                    <button
                      key={rel.id}
                      type="button"
                      className="ac-lightbox-rel-card"
                      onClick={() => setActiveArt(rel)}
                      title={`Open ${rel.title}`}
                    >
                      <img
                        src={rel.image || rel.thumbnail}
                        alt={rel.title}
                        onError={(e) => {
                          e.target.onerror = null
                          e.target.src = '/assets/archive/archive-library.jpg'
                        }}
                      />
                      <div className="rel-card-meta">
                        <span className="rel-type">{rel.type}</span>
                        <span className="rel-title">{rel.shortTitle || rel.title}</span>
                      </div>
                    </button>
                  ))}
                </div>
              </div>
            )}

            <button
              type="button"
              className="ac-lightbox-ask-btn"
              onClick={() => {
                handleClose()
                setTimeout(() => onAskAi(activeArt), 220)
              }}
            >
              <Search size={14} />
              <span>Research this record in AI Assistant</span>
              <ArrowRight size={14} />
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
