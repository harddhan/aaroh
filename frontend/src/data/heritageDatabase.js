// ====================================================
// AAROH HISTORICAL GEOGRAPHY & CHRONOLOGY DATABASE
// Verified Primary Records, Coordinates & Cross-Relations
// ====================================================

export const PLACE_CATEGORIES = [
  'ALL',
  'BIRTH & EARLY LIFE',
  'EDUCATION',
  'POLITICAL LIFE',
  'SOCIAL MOVEMENTS',
  'LEGISLATIVE WORK',
  'CONSTITUTIONAL WORK',
  'PUBLICATIONS',
  'PERSONAL LIFE',
  'FINAL YEARS',
  'INTERNATIONAL EDUCATION',
]

export const TIMELINE_CATEGORIES = [
  'ALL',
  'LIFE',
  'EDUCATION',
  'WRITINGS',
  'SOCIAL MOVEMENTS',
  'POLITICAL LIFE',
  'LABOUR',
  'CONSTITUTION',
  'RELIGION',
  'LEGACY',
]

// ----------------------------------------------------
// VERIFIED HISTORICAL PLACES DATABASE
// ----------------------------------------------------
export const heritagePlaces = [
  {
    id: 'place-mhow',
    name: 'Mhow',
    fullName: 'Mhow (Dr. Ambedkar Nagar)',
    state: 'Madhya Pradesh',
    country: 'India',
    isInternational: false,
    coordinates: {
      lat: 22.5534,
      lng: 75.7648,
    },
    period: '1891–1894',
    categories: ['BIRTH & EARLY LIFE'],
    significance: 'Birthplace of Dr. B. R. Ambedkar',
    image: '/assets/archive/mhow-memorial.jpg',
    description:
      'Born on 14 April 1891 in the British military cantonment of Mhow (now officially Dr. Ambedkar Nagar). As the fourteenth child of Subedar Ramji Maloji Sakpal and Bhimbai, his early childhood roots in this cantonment environment instilled moral discipline and an enduring consciousness of caste inequalities.',
    relatedEvents: [
      {
        id: 'tl-1891',
        year: '1891',
        title: 'Birth in Mhow Cantonment',
        date: '14 April 1891',
      },
    ],
    relatedArtifacts: [
      {
        id: 'art-mhow-memorial',
        title: 'Birthplace Memorial Stupa & Archives',
        type: 'Monument',
        year: '1891',
        image: '/assets/archive/mhow-memorial.jpg',
      },
    ],
    sources: [
      'Government of Madhya Pradesh Heritage Gazette',
      'Dr. B. R. Ambedkar: Life and Mission (Dhananjay Keer, 1954)',
      'National Memorial Preservation Records, Dr. Ambedkar Nagar',
    ],
  },
  {
    id: 'place-satara',
    name: 'Satara',
    fullName: 'Satara (Camp School)',
    state: 'Maharashtra',
    country: 'India',
    isInternational: false,
    coordinates: {
      lat: 17.6805,
      lng: 73.9997,
    },
    period: '1896–1904',
    categories: ['BIRTH & EARLY LIFE', 'EDUCATION'],
    significance: 'Childhood Schooling & Name Bestowal',
    image: '/assets/archive/archive-library.jpg',
    description:
      'Following his mother’s passing, young Bhimrao moved to Satara with his father. Enrolled at Satara Government High School (Camp School) on 7 November 1900. Here, his benevolent teacher Krishnaji Keshav Ambedkar, admiring the boy’s diligence, recorded his own surname "Ambedkar" in the school register.',
    relatedEvents: [
      {
        id: 'tl-1900',
        year: '1900',
        title: 'Schooling & Surnaming at Satara',
        date: 'November 1900',
      },
    ],
    relatedArtifacts: [
      {
        id: 'art-satara-register',
        title: 'Satara High School General Register Entry No. 1914',
        type: 'Archival Document',
        year: '1900',
        image: '/assets/archive/archive-library.jpg',
      },
    ],
    sources: [
      'Satara Government High School Historic Registers',
      'Maharashtra State Archives: Dr. Ambedkar Source Material, Vol. 1',
    ],
  },
  {
    id: 'place-baroda',
    name: 'Baroda',
    fullName: 'Vadodara (Princely State of Baroda)',
    state: 'Gujarat',
    country: 'India',
    isInternational: false,
    coordinates: {
      lat: 22.3072,
      lng: 73.1812,
    },
    period: '1913, 1917',
    categories: ['EDUCATION', 'LEGISLATIVE WORK', 'PERSONAL LIFE'],
    significance: 'Gaekwad Scholarship & Resolving Untouchability',
    image: '/assets/archive/round-table-conference.png',
    description:
      'Maharaja Sayajirao Gaekwad III of Baroda sponsored Dr. Ambedkar’s collegiate and international studies. Returning in 1917 as Military Secretary to the Maharaja, Ambedkar faced severe humiliation when subaltern peons threw files onto his desk to avoid touching him and he was evicted from a Parsi inn due to caste orthodoxies, a pivotal experience recounted in his autobiographical notes "Waiting for a Visa".',
    relatedEvents: [
      {
        id: 'tl-1917',
        year: '1917',
        title: 'Return to Baroda & "Waiting for a Visa" Experiences',
        date: '1917',
      },
    ],
    relatedArtifacts: [
      {
        id: 'art-baroda-scholarship',
        title: 'Gaekwad State Educational Agreement Deed',
        type: 'State Charter',
        year: '1913',
        image: '/assets/archive/round-table-conference.png',
      },
    ],
    sources: [
      'Baroda State Gazette & Central Secretariat Archives',
      'Dr. B. R. Ambedkar, "Waiting for a Visa" (Columbia University manuscript)',
    ],
  },
  {
    id: 'place-mumbai',
    name: 'Mumbai',
    fullName: 'Mumbai (Elphinstone, Rajgriha & Chaitya Bhoomi)',
    state: 'Maharashtra',
    country: 'India',
    isInternational: false,
    coordinates: {
      lat: 18.9220,
      lng: 72.8347,
    },
    period: '1904–1956',
    categories: ['EDUCATION', 'POLITICAL LIFE', 'PUBLICATIONS', 'PERSONAL LIFE', 'FINAL YEARS'],
    significance: 'Intellectual Epicenter & Memorial Sanctuary',
    image: '/assets/archive/archive-library.jpg',
    description:
      'The central stage of Ambedkar’s life. Matriculated from Elphinstone High School and graduated from Elphinstone College. Built his legendary personal library "Rajgriha" in Dadar to house over 50,000 rare volumes. Founded Mooknayak (1920), Bahishkrit Hitakarini Sabha (1924), and Independent Labour Party (1936). Site of Chaitya Bhoomi memorial where millions pay homage.',
    relatedEvents: [
      { id: 'tl-1907', year: '1907', title: 'Matriculation & Felicitation in Bombay', date: '1907' },
      { id: 'tl-1920', year: '1920', title: 'Founding of Mooknayak Newspaper', date: '31 January 1920' },
      { id: 'tl-1924', year: '1924', title: 'Bahishkrit Hitakarini Sabha Founded at Damodar Hall', date: '20 July 1924' },
      { id: 'tl-1936', year: '1936', title: 'Independent Labour Party & "Annihilation of Caste"', date: '1936' },
      { id: 'tl-1956-chaitya', year: '1956', title: 'Mahaparinirvan & Final Rites at Dadar Chowpatty', date: '7 December 1956' },
    ],
    relatedArtifacts: [
      {
        id: 'art-mooknayak',
        title: 'Mooknayak Inaugural Front Page',
        type: 'Periodical',
        year: '1920',
        image: '/assets/archive/mooknayak.jpg',
      },
      {
        id: 'art-annihilation',
        title: 'Annihilation of Caste (First Edition)',
        type: 'Monograph',
        year: '1936',
        image: '/assets/archive/annihilation-of-caste.jpg',
      },
    ],
    sources: [
      'Dr. Babasaheb Ambedkar: Writings and Speeches (BAWS), Vols. 1–22',
      'Municipal Corporation of Greater Mumbai Archival Heritage Records',
    ],
  },
  {
    id: 'place-newyork',
    name: 'New York',
    fullName: 'New York (Columbia University)',
    state: 'New York',
    country: 'United States',
    isInternational: true,
    coordinates: {
      lat: 40.8075,
      lng: -73.9626,
    },
    period: '1913–1916',
    categories: ['INTERNATIONAL EDUCATION', 'EDUCATION'],
    significance: 'Advanced Rigorous Scholarship & Pragmatist Foundations',
    image: '/assets/archive/round-table-conference.png',
    description:
      'Arrived in New York in July 1913 on a Baroda State fellowship. Studied under philosopher John Dewey, economist Edwin Seligman, and sociologist Franklin Giddings at Columbia University. Earned his M.A. in 1915 and completed his doctoral dissertation "The National Dividend of India: A Historic and Analytical Study", later published as "The Evolution of Provincial Finance in British India".',
    relatedEvents: [
      {
        id: 'tl-1913',
        year: '1913',
        title: 'Columbia University Studies & Seminal Research',
        date: '1913–1916',
      },
    ],
    relatedArtifacts: [
      {
        id: 'art-columbia-dissertation',
        title: 'Evolution of Provincial Finance in British India (Ph.D. Thesis)',
        type: 'Dissertation',
        year: '1916',
        image: '/assets/archive/ambedkar-manuscript.png',
      },
    ],
    sources: [
      'Columbia University Rare Book & Manuscript Library Archives',
      'Columbia Alumni Register, 1913–1916',
    ],
  },
  {
    id: 'place-london',
    name: 'London',
    fullName: 'London (LSE, Gray’s Inn & Round Table Conferences)',
    state: 'England',
    country: 'United Kingdom',
    isInternational: true,
    coordinates: {
      lat: 51.5144,
      lng: -0.1166,
    },
    period: '1916, 1920–1923, 1930–1932',
    categories: ['INTERNATIONAL EDUCATION', 'LEGISLATIVE WORK', 'EDUCATION'],
    significance: 'Doctor of Science, Barrister-at-Law & Global Diplomacy',
    image: '/assets/archive/round-table-conference.png',
    description:
      'Enrolled at the London School of Economics and Gray’s Inn in 1916; returned in 1920 to complete his monumental thesis "The Problem of the Rupee: Its Origin and Its Solution", earning the prestigious Doctor of Science (D.Sc.). Called to the Bar in 1923. In 1930–1932, represented India’s depressed classes at the Round Table Conferences at St. James’s Palace, demanding universal franchise and sovereign representation.',
    relatedEvents: [
      { id: 'tl-1916', year: '1916', title: 'Admission to LSE & Gray’s Inn', date: '1916' },
      { id: 'tl-1923', year: '1923', title: 'Conferral of D.Sc. & Call to the Bar', date: '1923' },
      { id: 'tl-1930-london', year: '1930', title: 'First Round Table Conference Address', date: '12 November 1930' },
    ],
    relatedArtifacts: [
      {
        id: 'art-problem-rupee',
        title: 'The Problem of the Rupee: Its Origin and Its Solution',
        type: 'Published Treatise',
        year: '1923',
        image: '/assets/archive/round-table-conference.png',
      },
    ],
    sources: [
      'British Library India Office Records (IOR/L/PJ/9/34)',
      'London School of Economics Archives and Special Collections',
    ],
  },
  {
    id: 'place-kolhapur',
    name: 'Kolhapur',
    fullName: 'Kolhapur & Mangaon',
    state: 'Maharashtra',
    country: 'India',
    isInternational: false,
    coordinates: {
      lat: 16.7050,
      lng: 74.2433,
    },
    period: '1920',
    categories: ['SOCIAL MOVEMENTS', 'POLITICAL LIFE'],
    significance: 'Mangaon Conference & Alliance with Shahu Maharaj',
    image: '/assets/archive/bahishkrit-bharat.jpg',
    description:
      'On 21–22 March 1920, Dr. Ambedkar presided over the historic Mangaon Conference in Kolhapur princely state. Progressive monarch Chhatrapati Shahu Maharaj publicly declared before the assembly: "You have found your saviour in Ambedkar. A time will come when he will lead not only you, but the entire nation."',
    relatedEvents: [
      {
        id: 'tl-1920-mangaon',
        year: '1920',
        title: 'Mangaon Parishad with Chhatrapati Shahu Maharaj',
        date: '21 March 1920',
      },
    ],
    relatedArtifacts: [
      {
        id: 'art-mangaon-proceedings',
        title: 'Mangaon Parishad Resolution Papers',
        type: 'Assembly Record',
        year: '1920',
        image: '/assets/archive/bahishkrit-bharat.jpg',
      },
    ],
    sources: [
      'Kolhapur State Records & Shahu Chhatrapati Papers',
      'Keer, Dhananjay. Dr. Ambedkar: Life and Mission, Ch. 3',
    ],
  },
  {
    id: 'place-mahad',
    name: 'Mahad',
    fullName: 'Mahad (Chavdar Tale Reservoir)',
    state: 'Maharashtra',
    country: 'India',
    isInternational: false,
    coordinates: {
      lat: 18.0833,
      lng: 73.4167,
    },
    period: '1927',
    categories: ['SOCIAL MOVEMENTS'],
    significance: 'Water Satyagraha & Declaration of Fundamental Human Rights',
    image: '/assets/archive/mahad-tank.jpg',
    description:
      'On 20 March 1927, Dr. Ambedkar led thousands of satyagrahis to the public Chavdar water reservoir in Mahad, breaking centuries of customary caste exclusion. On 25 December 1927 at the second Mahad conference, he publicly burned the Manusmriti, declaring it the ideological root of graded inequality. Today 20 March is observed nationally as Social Empowerment Day.',
    relatedEvents: [
      { id: 'tl-1927-water', year: '1927', title: 'Chavdar Tale Water Liberation Satyagraha', date: '20 March 1927' },
      { id: 'tl-1927-manusmriti', year: '1927', title: 'Public Burning of Manusmriti at Mahad', date: '25 December 1927' },
    ],
    relatedArtifacts: [
      {
        id: 'art-mahad-photo',
        title: 'Historic Photograph: Drinking Water at Chavdar Tank',
        type: 'Archival Photograph',
        year: '1927',
        image: '/assets/archive/mahad-tank.jpg',
      },
    ],
    sources: [
      'Bahishkrit Bharat issues, March–December 1927',
      'Bombay High Court Mahad Tank Appeal Judgment (1937)',
    ],
  },
  {
    id: 'place-nashik',
    name: 'Nashik',
    fullName: 'Nashik & Yeola (Kalaram Satyagraha & Yeola Resolution)',
    state: 'Maharashtra',
    country: 'India',
    isInternational: false,
    coordinates: {
      lat: 19.9975,
      lng: 73.7898,
    },
    period: '1930–1935',
    categories: ['SOCIAL MOVEMENTS', 'RELIGION'],
    significance: 'Kalaram Temple Entry Movement & Yeola Pledge',
    image: '/assets/archive/bahishkrit-bharat.jpg',
    description:
      'On 2 March 1930, Dr. Ambedkar launched the peaceful Kalaram Temple entry satyagraha in Nashik, maintaining the non-violent struggle for five years to expose orthodox resistance. Concluding that social parity within orthodoxy was impossible, he delivered his thunderous declaration at the Yeola Conference on 13 October 1935: "I was born a Hindu, but I solemnly assure you I will not die a Hindu."',
    relatedEvents: [
      { id: 'tl-1930-kalaram', year: '1930', title: 'Kalaram Temple Entry Satyagraha Begins', date: '2 March 1930' },
      { id: 'tl-1935-yeola', year: '1935', title: 'The Historic Yeola Declaration', date: '13 October 1935' },
    ],
    relatedArtifacts: [
      {
        id: 'art-yeola-speech',
        title: 'Yeola Conference Presidential Address Notes',
        type: 'Speech Manuscript',
        year: '1935',
        image: '/assets/archive/ambedkar-manuscript.png',
      },
    ],
    sources: [
      'Janata periodical reports, October 1935',
      'Dr. Babasaheb Ambedkar Writings and Speeches, Vol. 17',
    ],
  },
  {
    id: 'place-pune',
    name: 'Pune',
    fullName: 'Pune (Yerwada Central Jail & Poona Pact)',
    state: 'Maharashtra',
    country: 'India',
    isInternational: false,
    coordinates: {
      lat: 18.5204,
      lng: 73.8567,
    },
    period: '1932',
    categories: ['POLITICAL LIFE', 'LEGISLATIVE WORK'],
    significance: 'The Poona Pact Accord & Legislative Reservation',
    image: '/assets/archive/ambedkar-manuscript.png',
    description:
      'Following the British Communal Award granting separate electorates to the Depressed Classes, Mahatma Gandhi undertook a fast unto death inside Yerwada Central Jail. To save Gandhi’s life while ensuring political survival for his people, Dr. Ambedkar negotiated the historic Poona Pact on 24 September 1932, securing 148 reserved seats in provincial assemblies (more than double the British award).',
    relatedEvents: [
      {
        id: 'tl-1932',
        year: '1932',
        title: 'The Poona Pact Signed at Yerwada Jail',
        date: '24 September 1932',
      },
    ],
    relatedArtifacts: [
      {
        id: 'art-poona-pact',
        title: 'Poona Pact Original Agreement Document',
        type: 'Historic Treaty',
        year: '1932',
        image: '/assets/archive/ambedkar-manuscript.png',
      },
    ],
    sources: [
      'National Archives of India, Home Department Political Files (1932)',
      'Government of India Act 1935 Schedules',
    ],
  },
  {
    id: 'place-delhi',
    name: 'New Delhi',
    fullName: 'New Delhi (Parliament, Constitution Hall & 26 Alipur Road)',
    state: 'National Capital Territory',
    country: 'India',
    isInternational: false,
    coordinates: {
      lat: 28.6139,
      lng: 77.2090,
    },
    period: '1942–1956',
    categories: ['CONSTITUTIONAL WORK', 'LEGISLATIVE WORK', 'FINAL YEARS'],
    significance: 'Architect of the Constitution of India & Law Minister',
    image: '/assets/archive/constitution-signing.jpg',
    description:
      'Appointed Member for Labour in the Viceroy’s Executive Council (1942–1946) where he established the 8-hour workday, tripartite labour conferences, and Central Water Commission. As Chairman of the Drafting Committee (1947–1950) in Constitution Hall, he guided the world’s most comprehensive constitution. Served as independent India’s first Law Minister, championing the Hindu Code Bill. Passed away at 26 Alipur Road on 6 December 1956.',
    relatedEvents: [
      { id: 'tl-1942', year: '1942', title: 'Induction as Labour Member in Viceroy’s Council', date: '20 July 1942' },
      { id: 'tl-1947', year: '1947', title: 'Appointed Chairman of the Drafting Committee', date: '29 August 1947' },
      { id: 'tl-1949', year: '1949', title: 'Constituent Assembly Adopts the Final Draft', date: '26 November 1949' },
      { id: 'tl-1950', year: '1950', title: 'Constitution of India Enters into Full Force', date: '26 January 1950' },
      { id: 'tl-1951', year: '1951', title: 'Resignation over Hindu Code Bill Equality Provisions', date: '27 September 1951' },
      { id: 'tl-1956-death', year: '1956', title: 'Mahaparinirvan at 26 Alipur Road', date: '6 December 1956' },
    ],
    relatedArtifacts: [
      {
        id: 'art-preamble',
        title: 'Original Illuminated Preamble to the Constitution',
        type: 'State Charter',
        year: '1950',
        image: '/assets/archive/constitution-preamble.jpg',
      },
      {
        id: 'art-signing',
        title: 'Dr. Ambedkar Signing the Constitution of India',
        type: 'Archival Photograph',
        year: '1950',
        image: '/assets/archive/constitution-signing.jpg',
      },
    ],
    sources: [
      'Constituent Assembly Debates (Official Report), Vols. I–XII',
      'Parliament of India Museum & Archives',
      'Ministry of Law & Justice Historical Records',
    ],
  },
  {
    id: 'place-nagpur',
    name: 'Nagpur',
    fullName: 'Nagpur (Deekshabhoomi)',
    state: 'Maharashtra',
    country: 'India',
    isInternational: false,
    coordinates: {
      lat: 21.1278,
      lng: 79.0664,
    },
    period: '1956',
    categories: ['RELIGION', 'FINAL YEARS'],
    significance: 'Historic Conversion to Buddhism (Dhamma Deeksha)',
    image: '/assets/archive/deekshabhoomi.jpg',
    description:
      'On the sacred festival of Ashoka Vijayadashami (14 October 1956), Dr. Ambedkar fulfilled his 1935 Yeola pledge by embracing Buddhism along with his wife Dr. Savita Ambedkar at Nagpur, administered the Three Refuges and Five Precepts by Mahasthavir Chandramani. Over 500,000 followers took the 22 Vows, staging the greatest non-violent mass religious conversion in modern history.',
    relatedEvents: [
      {
        id: 'tl-1956-conversion',
        year: '1956',
        title: 'Dhamma Deeksha at Deekshabhoomi, Nagpur',
        date: '14 October 1956',
      },
    ],
    relatedArtifacts: [
      {
        id: 'art-22-vows',
        title: 'The 22 Vows (Original Marathi Formulation)',
        type: 'Religious Code',
        year: '1956',
        image: '/assets/archive/deekshabhoomi.jpg',
      },
    ],
    sources: [
      'Dr. Ambedkar Smarak Samiti Official Deekshabhoomi Archives',
      'Dr. B. R. Ambedkar, "The Buddha and His Dhamma" (1957)',
    ],
  },
]

// ----------------------------------------------------
// HISTORICAL JOURNEY RELATIONSHIPS (Line Layers)
// ----------------------------------------------------
export const historicalJourneys = [
  {
    id: 'journey-education',
    title: 'Scholastic & International Journey',
    category: 'EDUCATION',
    color: '#123F6B',
    description: 'Path of formidable academic mastery across India, the United States, and Great Britain.',
    nodes: ['place-mhow', 'place-satara', 'place-baroda', 'place-mumbai', 'place-newyork', 'place-london', 'place-mumbai'],
  },
  {
    id: 'journey-movements',
    title: 'Civil Rights & Mass Satyagraha',
    category: 'SOCIAL MOVEMENTS',
    color: '#147C78',
    description: 'The geography of civic mobilization asserting public water rights, temple entry, and social dignity.',
    nodes: ['place-mumbai', 'place-kolhapur', 'place-mahad', 'place-nashik', 'place-pune'],
  },
  {
    id: 'journey-constitution',
    title: 'Constitutional Architecture & Sovereign Statecraft',
    category: 'CONSTITUTIONAL WORK',
    color: '#B88A3B',
    description: 'Steering the Constituent Assembly and founding the constitutional governance of free India.',
    nodes: ['place-mumbai', 'place-delhi'],
  },
  {
    id: 'journey-dhamma',
    title: 'The Great Dhamma Pilgrimage',
    category: 'RELIGION',
    color: '#B7793E',
    description: 'Fulfilling the historic vow of spiritual emancipation at Deekshabhoomi Nagpur.',
    nodes: ['place-delhi', 'place-nagpur', 'place-delhi', 'place-mumbai'],
  },
]

// ----------------------------------------------------
// EXPANDED CHRONOLOGICAL TIMELINE MILESTONES (Panel 03)
// ----------------------------------------------------
export const heritageTimelineEvents = [
  {
    id: 'event-1891',
    year: '1891',
    date: '14 April 1891',
    title: 'Birth in Mhow Cantonment',
    placeId: 'place-mhow',
    locationName: 'Mhow, Madhya Pradesh',
    category: 'LIFE',
    image: '/assets/archive/mhow-memorial.jpg',
    thumb: '/assets/archive/constituent-assembly.jpg',
    description:
      'Born Bhimrao Ramji Sakpal in the British military cantonment of Mhow. His father, Subedar Major Ramji Sakpal, was an instructor in the army and a devoted follower of Kabir, fostering in him an early devotion to moral rectitude and critical reflection.',
    takeaways: [
      'Fourteenth child of Ramji Sakpal and Bhimbai.',
      'Roots in the military cantonment culture provided early exposure to education despite caste barriers.',
    ],
    quote: 'Cultivation of mind should be the ultimate aim of human existence.',
    sources: ['Govt of Madhya Pradesh Gazettes', 'Keer: Life & Mission (1954)'],
  },
  {
    id: 'event-1900',
    year: '1900',
    date: '7 November 1900',
    title: 'Enrolment at Satara Camp School',
    placeId: 'place-satara',
    locationName: 'Satara, Maharashtra',
    category: 'EDUCATION',
    image: '/assets/archive/archive-library.jpg',
    thumb: '/assets/archive/archive-library.jpg',
    description:
      'Admitted to Satara Government High School. Despite being forced to sit on a separate gunny sack outside the classroom and being barred from touching school water, his scholastic aptitude drew the affection of his teacher Krishnaji Keshav Ambedkar, who changed his surname to "Ambedkar".',
    takeaways: [
      'Registered under entry number 1914 as Bhimrao Ramji Ambedkar.',
      '7 November is observed as "Students’ Day" across Maharashtra in honour of his enrolment.',
    ],
    quote: 'Knowledge is the foundation of man’s dignity.',
    sources: ['Satara High School Archives', 'BAWS Vol. 1'],
  },
  {
    id: 'event-1907',
    year: '1907',
    date: '1907–1912',
    title: 'Matriculation & Elphinstone College Graduation',
    placeId: 'place-mumbai',
    locationName: 'Mumbai, Maharashtra',
    category: 'EDUCATION',
    image: '/assets/archive/archive-library.jpg',
    thumb: '/assets/archive/ambedkar-manuscript.png',
    description:
      'Passed Bombay University matriculation examination from Elphinstone High School—a celebrated milestone among the depressed classes. Social reformer K. A. Keluskar presented him with a biography of the Buddha. Maharaja Sayajirao Gaekwad III granted him a stipend to complete his B.A. in 1912.',
    takeaways: [
      'First student from his community to graduate from Bombay University.',
      'Keluskar’s gift planted the lifelong philosophical seed of Buddhism.',
    ],
    quote: 'Be educated, be organized, and be agitated.',
    sources: ['Elphinstone College Archives', 'University of Mumbai Historical Rolls'],
  },
  {
    id: 'event-1913',
    year: '1913',
    date: 'July 1913 – June 1916',
    title: 'Studies at Columbia University, New York',
    placeId: 'place-newyork',
    locationName: 'New York, United States',
    category: 'EDUCATION',
    image: '/assets/archive/round-table-conference.png',
    thumb: '/assets/archive/archive-library.jpg',
    description:
      'Awarded a Gaekwad State scholarship to Columbia University. Immersed himself for up to 18 hours daily studying under John Dewey, Edwin Seligman, and James Harvey Robinson. Earned his M.A. in 1915 and completed his doctoral dissertation on provincial finance in British India.',
    takeaways: [
      'First Indian to earn a Ph.D. in Economics from Columbia University.',
      'John Dewey’s pragmatist philosophy profoundly shaped his conceptualization of social democracy.',
    ],
    quote: 'Men are mortal. So are ideas. An idea needs propagation as much as a plant needs watering.',
    sources: ['Columbia University Archives', 'Rare Book & Manuscript Library'],
  },
  {
    id: 'event-1916',
    year: '1916',
    date: '1916–1923',
    title: 'London School of Economics & Gray’s Inn Bar',
    placeId: 'place-london',
    locationName: 'London, United Kingdom',
    category: 'EDUCATION',
    image: '/assets/archive/round-table-conference.png',
    thumb: '/assets/archive/round-table-conference.png',
    description:
      'Admitted to Gray’s Inn to read for the Bar and enrolled at the London School of Economics. Researched at the British Museum. Completed his D.Sc. dissertation "The Problem of the Rupee", offering an incisive critique of the British colonial monetary system.',
    takeaways: [
      'Conferred Doctor of Science (D.Sc.) by University of London.',
      'Admitted to the English Bar as a Barrister-at-Law in 1923.',
    ],
    quote: 'The problem of the rupee is the problem of colonial extraction masquerading as currency stability.',
    sources: ['LSE Special Collections', 'Gray’s Inn Archives'],
  },
  {
    id: 'event-1920',
    year: '1920',
    date: '31 January 1920',
    title: 'Founding of "Mooknayak" & Mangaon Conference',
    placeId: 'place-mumbai',
    locationName: 'Mumbai & Kolhapur, Maharashtra',
    category: 'WRITINGS',
    image: '/assets/archive/mooknayak.jpg',
    thumb: '/assets/archive/mooknayak.jpg',
    description:
      'Launched the fortnightly journal "Mooknayak" (Leader of the Voiceless) with financial assistance from Chhatrapati Shahu Maharaj. In its first editorial, he compared caste society to a three-storeyed building with no staircase between the floors.',
    takeaways: [
      'Pioneered autonomous Dalit press in India.',
      'Chhatrapati Shahu Maharaj endorsed Ambedkar as the undisputed leader of the oppressed.',
    ],
    quote: 'A society without mobility is a cemetery of human potential.',
    sources: ['Mooknayak Archives (1920)', 'Shahu Chhatrapati Papers'],
  },
  {
    id: 'event-1924',
    year: '1924',
    date: '20 July 1924',
    title: 'Founding of Bahishkrit Hitakarini Sabha',
    placeId: 'place-mumbai',
    locationName: 'Mumbai, Maharashtra',
    category: 'SOCIAL MOVEMENTS',
    image: '/assets/archive/bahishkrit-bharat.jpg',
    thumb: '/assets/archive/bahishkrit-bharat.jpg',
    description:
      'Founded the Bahishkrit Hitakarini Sabha (Depressed Classes Welfare Association) at Damodar Hall, Parel. Adopted the immortal guiding motto: "Educate, Agitate, Organise" to uplift the marginalized through educational hostels, libraries, and industrial training.',
    takeaways: [
      'Established institutional self-reliance among working-class communities.',
      'Created free student hostels in Solapur and community study centres.',
    ],
    quote: 'Lost rights are never regained by begging, but by relentless struggle.',
    sources: ['Bombay High Court Charity Commissioner Rolls', 'BAWS Vol. 2'],
  },
  {
    id: 'event-1927',
    year: '1927',
    date: '20 March 1927',
    title: 'Chavdar Tale Water Satyagraha at Mahad',
    placeId: 'place-mahad',
    locationName: 'Mahad, Maharashtra',
    category: 'SOCIAL MOVEMENTS',
    image: '/assets/archive/mahad-tank.jpg',
    thumb: '/assets/archive/mahad-tank.jpg',
    description:
      'Led thousands of satyagrahis to the public Chavdar water reservoir in Mahad, Maharashtra. Animals were permitted to drink freely from the lake, yet human beings were barred by customary caste taboos. Ambedkar drank water from his cupped hands, initiating the modern Indian civil rights revolution.',
    takeaways: [
      'First collective mass struggle for basic civic entitlements in colonial India.',
      'Observed annually nationwide as Social Empowerment Day on 20 March.',
    ],
    quote: 'We are not going to the Chavdar Tank merely to drink water. We are going to assert that we too are human beings.',
    sources: ['Bahishkrit Bharat (April 1927)', 'Mahad Satyagraha Silver Jubilee Commemoration'],
  },
  {
    id: 'event-1927-dahan',
    year: '1927',
    date: '25 December 1927',
    title: 'Public Burning of the Manusmriti at Mahad',
    placeId: 'place-mahad',
    locationName: 'Mahad, Maharashtra',
    category: 'SOCIAL MOVEMENTS',
    image: '/assets/archive/mahad-tank.jpg',
    thumb: '/assets/archive/bahishkrit-bharat.jpg',
    description:
      'At the second conference in Mahad, following violent caste backlash and ritual purification of the reservoir with cow dung, Ambedkar took the radical decision to publicly cremate the ancient Manusmriti, repudiating hereditary untouchability and gender subjugation.',
    takeaways: [
      'Symbolic death of scriptural sanction for human degradation.',
      'Celebrated annually as Manusmriti Dahan Din (25 December).',
    ],
    quote: 'The bonfire of the Manusmriti was not a reckless act of defiance, but a deliberate proclamation that human dignity is inviolable.',
    sources: ['Keer: Dr. Ambedkar, Ch. 6', 'BAWS Vol. 17'],
  },
  {
    id: 'event-1930',
    year: '1930',
    date: '2 March 1930',
    title: 'Kalaram Temple Entry Satyagraha, Nashik',
    placeId: 'place-nashik',
    locationName: 'Nashik, Maharashtra',
    category: 'SOCIAL MOVEMENTS',
    image: '/assets/archive/bahishkrit-bharat.jpg',
    thumb: '/assets/archive/ambedkar-manuscript.png',
    description:
      'Organized a disciplined non-violent movement of 15,000 satyagrahis demanding the right to enter the Kalaram Temple in Nashik. Despite physical assaults by orthodoxy, the movement lasted five years, demonstrating to the world the moral bankruptcy of social exclusion.',
    takeaways: [
      'Exposed the contradictions of domestic social orthodoxy during the nationalist struggle.',
      'Reinforced Ambedkar’s conviction that legal and constitutional safeguards were paramount.',
    ],
    quote: 'Our fight is not for temples; it is for the awakening of human consciousness.',
    sources: ['Janata newspaper archives (1930–1935)', 'Nashik District Heritage Records'],
  },
  {
    id: 'event-1930-rtc',
    year: '1930',
    date: '1930–1932',
    title: 'The Round Table Conferences, London',
    placeId: 'place-london',
    locationName: 'London, United Kingdom',
    category: 'POLITICAL LIFE',
    image: '/assets/archive/round-table-conference.png',
    thumb: '/assets/archive/round-table-conference.png',
    description:
      'Represented the Depressed Classes at all three Round Table Conferences at St. James’s Palace, London. Stood firm for universal adult franchise, separate representation, and statutory civil rights guarantees, holding British statesmen and Indian delegates to international standards.',
    takeaways: [
      'Elevated the struggle of India’s marginalized onto the global diplomatic stage.',
      'Secured constitutional recognition for the Depressed Classes in the Communal Award.',
    ],
    quote: 'We want our people not to be treated as a pawn on the political chess board. We demand our share of sovereign governance.',
    sources: ['Proceedings of the Indian Round Table Conference (Cmd. 3778)', 'British Parliamentary Papers'],
  },
  {
    id: 'event-1932',
    year: '1932',
    date: '24 September 1932',
    title: 'The Historic Poona Pact Accord',
    placeId: 'place-pune',
    locationName: 'Pune, Maharashtra',
    category: 'POLITICAL LIFE',
    image: '/assets/archive/ambedkar-manuscript.png',
    thumb: '/assets/archive/round-table-conference.png',
    description:
      'When Mahatma Gandhi undertook a fast-unto-death in Yerwada Central Jail protesting separate electorates, Ambedkar faced immense national pressure. He negotiated the Poona Pact, relinquishing separate electorates in exchange for reserved assembly seats within joint electorates (securing 148 seats versus the British award of 71).',
    takeaways: [
      'Saved Mahatma Gandhi’s life while establishing the permanent framework of legislative reservation.',
      'Documented in historical political agreements signed at Yerwada.',
    ],
    quote: 'I had to balance the life of the greatest man in India with the political survival of sixty million downtrodden people.',
    sources: ['National Archives of India, Home Political (1932)', 'Yerwada Jail Official Records'],
  },
  {
    id: 'event-1935',
    year: '1935',
    date: '13 October 1935',
    title: 'The Historic Yeola Declaration',
    placeId: 'place-nashik',
    locationName: 'Yeola, Nashik, Maharashtra',
    category: 'RELIGION',
    image: '/assets/archive/ambedkar-manuscript.png',
    thumb: '/assets/archive/deekshabhoomi.jpg',
    description:
      'Addressing over 10,000 delegates at the Bombay Provincial Depressed Classes Conference in Yeola, Ambedkar delivered his epochal declaration repudiating Hindu caste identity: "Unfortunately for me, I was born a Hindu Untouchable... but I solemnly assure you I will not die a Hindu."',
    takeaways: [
      'Initiated his 21-year rigorous scholarly search for an egalitarian spiritual alternative.',
      'Led to extensive comparative theological study of Buddhism, Christianity, and Sikhism.',
    ],
    quote: 'Religion must be judged by social utility and justice. If it enforces graded inequality, it is an instrument of tyranny.',
    sources: ['Janata periodical (October 1935)', 'BAWS Vol. 17, Part 1'],
  },
  {
    id: 'event-1936',
    year: '1936',
    date: '1936',
    title: 'Independent Labour Party & "Annihilation of Caste"',
    placeId: 'place-mumbai',
    locationName: 'Mumbai, Maharashtra',
    category: 'POLITICAL LIFE',
    image: '/assets/archive/annihilation-of-caste.jpg',
    thumb: '/assets/archive/annihilation-of-caste.jpg',
    description:
      'Founded the Independent Labour Party (ILP) to represent workers, peasants, and the depressed classes. In the same year, composed "Annihilation of Caste"—originally prepared as an address for the Jat-Pat-Todak Mandal of Lahore, which rejected it for being too radical. The self-published book became one of the greatest philosophical texts of modern political thought.',
    takeaways: [
      'ILP won 14 of 17 contested seats in the 1937 Bombay Legislative Assembly elections.',
      'Annihilation of Caste systematically demonstrated that caste is not a division of labour, but a division of labourers.',
    ],
    quote: 'Caste is not a physical object like a wall of bricks. Caste is a state of the mind.',
    sources: ['Annihilation of Caste (1936 edition)', 'Bombay Legislative Assembly Official Debates'],
  },
  {
    id: 'event-1942',
    year: '1942',
    date: '20 July 1942',
    title: 'Member for Labour, Viceroy’s Executive Council',
    placeId: 'place-delhi',
    locationName: 'New Delhi',
    category: 'LABOUR',
    image: '/assets/archive/constitution-signing.jpg',
    thumb: '/assets/archive/constitution-signing.jpg',
    description:
      'Appointed Member for Labour in the Viceroy’s Executive Council during World War II. During his four-year tenure, he established the 8-hour workday (down from 12 hours), the tripartite Indian Labour Conference, national employment exchanges, maternity benefits, and the Central Waterways, Irrigation and Navigation Commission.',
    takeaways: [
      'Laid the foundations of modern Indian labour welfare and river valley projects like Damodar Valley.',
      'Transformed state obligations towards industrial working classes.',
    ],
    quote: 'Labour must not remain a commodity; it is the vital heartbeat of national wealth.',
    sources: ['Gazette of India, July 1942', 'Labour Department Council Papers'],
  },
  {
    id: 'event-1946',
    year: '1946',
    date: 'July 1946',
    title: 'Election to the Constituent Assembly',
    placeId: 'place-delhi',
    locationName: 'New Delhi',
    category: 'CONSTITUTION',
    image: '/assets/archive/constituent-assembly.jpg',
    thumb: '/assets/archive/constituent-assembly.jpg',
    description:
      'Elected to the Constituent Assembly from the Bengal legislative assembly with the support of Jogendra Nath Mandal. On 17 December 1946, delivered an electrifying maiden speech appealing for national unity, warning that "sovereignty without social justice is an empty vessel."',
    takeaways: [
      'Surpassed partisan divides to become the essential legal brain of the Assembly.',
      'Re-elected from Bombay following Partition.',
    ],
    quote: 'I know today we are divided politically, socially and economically. But I am convinced that our destiny lies in unity.',
    sources: ['Constituent Assembly Debates (CAD), Vol. 1', 'Parliament of India Archives'],
  },
  {
    id: 'event-1947',
    year: '1947',
    date: '29 August 1947',
    title: 'Appointed Chairman of the Drafting Committee',
    placeId: 'place-delhi',
    locationName: 'New Delhi',
    category: 'CONSTITUTION',
    image: '/assets/archive/constituent-assembly.jpg',
    thumb: '/assets/archive/constitution-signing.jpg',
    description:
      'Two weeks after Indian independence, the Constituent Assembly appointed Dr. Ambedkar Chairman of the Drafting Committee to frame the Constitution of free India. Guided the committee through 141 arduous sittings, examining constitutional provisions from the US, UK, Ireland, France, and Canada.',
    takeaways: [
      'Served simultaneously as independent India’s first Law Minister in Nehru’s cabinet.',
      'Personally drafted fundamental rights, directive principles, and independent judiciary safeguards.',
    ],
    quote: 'Constitutional morality is not a natural sentiment. It has to be cultivated.',
    sources: ['Constituent Assembly Resolution dated 29 August 1947', 'Shiva Rao: Framing of India’s Constitution'],
  },
  {
    id: 'event-1949',
    year: '1949',
    date: '26 November 1949',
    title: 'Adoption of the Constitution of India',
    placeId: 'place-delhi',
    locationName: 'New Delhi',
    category: 'CONSTITUTION',
    image: '/assets/archive/constitution-signing.jpg',
    thumb: '/assets/archive/constitution-preamble.jpg',
    description:
      'The Constituent Assembly adopted the final draft of the Constitution. In his immortal final address, Ambedkar warned of the contradictions ahead: "On the 26th of January 1950, we are going to enter into a life of contradictions. In politics we will have equality, and in social and economic life we will have inequality."',
    takeaways: [
      'Celebrated nationally as Constitution Day (Samvidhan Divas) on 26 November.',
      'Abolished untouchability (Article 17) and enshrined universal adult franchise.',
    ],
    quote: 'If things go wrong under the new Constitution, the reason will not be that we had a bad Constitution. What we will have to say is that Man was vile.',
    sources: ['CAD Vol. XI, 25 November 1949', 'Gazette of India Extraordinary (1949)'],
  },
  {
    id: 'event-1950',
    year: '1950',
    date: '26 January 1950',
    title: 'Constitution of India Enters into Full Force',
    placeId: 'place-delhi',
    locationName: 'New Delhi',
    category: 'CONSTITUTION',
    image: '/assets/archive/constitution-preamble.jpg',
    thumb: '/assets/archive/constitution-preamble.jpg',
    description:
      'India was proclaimed a Sovereign Democratic Republic as the Constitution came into effect. The calligraphic original, signed by Dr. Ambedkar and members of the Constituent Assembly, stands preserved in special helium-filled cases in the Parliament Library.',
    takeaways: [
      'Inauguration of the Republic of India.',
      'Longest written constitution in world history, establishing the rule of law.',
    ],
    quote: 'We, the People of India, having solemnly resolved to constitute India into a Sovereign Socialist Secular Democratic Republic...',
    sources: ['Parliament Library Special Vault Archives', 'Official Calligraphic Constitution of India'],
  },
  {
    id: 'event-1951',
    year: '1951',
    date: '27 September 1951',
    title: 'Resignation over the Hindu Code Bill',
    placeId: 'place-delhi',
    locationName: 'New Delhi',
    category: 'LEGISLATIVE WORK',
    image: '/assets/archive/constitution-signing.jpg',
    thumb: '/assets/archive/ambedkar-manuscript.png',
    description:
      'Resigned as Law Minister when the cabinet stalled the Hindu Code Bill—a comprehensive legal reform he drafted to grant Hindu women absolute property inheritance rights, monogamy mandates, and divorce rights. In his resignation statement, he declared women’s legal liberation non-negotiable.',
    takeaways: [
      'Pioneered feminist legal reform and codification of women’s civil rights in modern India.',
      'The reforms were later enacted in piecemeal legislation between 1955 and 1956.',
    ],
    quote: 'I measure the progress of a community by the degree of progress which women have achieved.',
    sources: ['Parliamentary Debates (27 September 1951)', 'BAWS Vol. 14'],
  },
  {
    id: 'event-1956-dhamma',
    year: '1956',
    date: '14 October 1956',
    title: 'Dhamma Deeksha at Deekshabhoomi, Nagpur',
    placeId: 'place-nagpur',
    locationName: 'Nagpur, Maharashtra',
    category: 'RELIGION',
    image: '/assets/archive/deekshabhoomi.jpg',
    thumb: '/assets/archive/deekshabhoomi.jpg',
    description:
      'On Ashoka Vijayadashami at Deekshabhoomi, Nagpur, Dr. Ambedkar and his wife Savita Ambedkar embraced Buddhism. In an unprecedented event, he administered the Three Refuges, Five Precepts, and his specially drafted 22 Vows to over 500,000 followers, reviving Buddhism in the land of its origin.',
    takeaways: [
      'Largest non-violent mass religious conversion in recorded human history.',
      'Re-anchored his people in reason, morality (sila), compassion (karuna), and wisdom (prajna).',
    ],
    quote: 'I like the religion that teaches liberty, equality and fraternity.',
    sources: ['Deekshabhoomi Historical Registers', 'Dr. B. R. Ambedkar: The Buddha and His Dhamma (1957)'],
  },
  {
    id: 'event-1956-death',
    year: '1956',
    date: '6 December 1956',
    title: 'Mahaparinirvan & Chaitya Bhoomi Memorial',
    placeId: 'place-delhi',
    locationName: 'New Delhi & Mumbai',
    category: 'LEGACY',
    image: '/assets/archive/deekshabhoomi.jpg',
    thumb: '/assets/archive/archive-library.jpg',
    description:
      'Passed away peacefully in his sleep at his residence at 26 Alipur Road, New Delhi, having just completed the final typed manuscript of "The Buddha and His Dhamma". His mortal remains were flown to Mumbai, where over half a million mourners gathered at Dadar Chowpatty (Chaitya Bhoomi) for his state funeral.',
    takeaways: [
      'National day of remembrance observed as Mahaparinirvan Din (6 December).',
      'Posthumously conferred the Bharat Ratna, India’s highest civilian honour, in 1990.',
    ],
    quote: 'My final words of advice to you are: Educate, Agitate and Organize; have faith in yourselves.',
    sources: ['Gazette of India (December 1956)', 'President of India Official Citations (1990)'],
  },
]

// ----------------------------------------------------
// HELPER QUERY FUNCTIONS
// ----------------------------------------------------
export function getPlaceById(id) {
  return heritagePlaces.find((p) => p.id === id) || heritagePlaces[0]
}

export function getEventsForPlace(placeId) {
  return heritageTimelineEvents.filter((ev) => ev.placeId === placeId)
}

export function getPlaceForEvent(eventId) {
  const ev = heritageTimelineEvents.find((e) => e.id === eventId)
  if (!ev) return heritagePlaces[0]
  return getPlaceById(ev.placeId)
}
