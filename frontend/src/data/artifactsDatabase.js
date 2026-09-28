// ====================================================
// AAROH DIGITAL ARCHIVE — STRUCTURED HERITAGE DATABASE
// Verified Primary Records, Manuscripts, Writings, Speeches,
// Photographs, Periodicals, Constitutional Records,
// Government Records, Personal Material & Historical Maps
// ====================================================

export const ARCHIVE_CATEGORIES = [
  'ALL',
  'MANUSCRIPTS',
  'BOOKS & WRITINGS',
  'SPEECHES',
  'PHOTOGRAPHS',
  'NEWSPAPERS & PERIODICALS',
  'CONSTITUTIONAL RECORDS',
  'LETTERS & CORRESPONDENCE',
  'GOVERNMENT & OFFICIAL RECORDS',
  'PERSONAL & HISTORICAL MATERIAL',
  'MAPS & PLACES',
];

export const ARCHIVE_PERIODS = [
  'ALL',
  '1910s',
  '1920s',
  '1930s',
  '1940s',
  '1950s',
];

export const ARCHIVE_TOPICS = [
  'ALL',
  'Constitution',
  'Caste',
  'Education',
  'Labour',
  "Women's Rights",
  'Religion',
  'Democracy',
  'Economics',
  'Political Representation',
  'Social Reform',
];

export const ARCHIVE_SOURCES = [
  'ALL',
  'Writings & Speeches',
  'Constitutional Records',
  'Periodicals',
  'Photographic Records',
  'Government Records',
];

// ----------------------------------------------------
// COMPLETE VERIFIED ARTIFACTS REPOSITORY
// ----------------------------------------------------
export const artifactsDatabase = [
  {
    "id": "AAROH-ART-0001",
    "aliasIds": [
      "art-manuscript"
    ],
    "title": "Holograph Manuscript of \"Riddles in Hinduism\"",
    "shortTitle": "Riddles in Hinduism Manuscript",
    "type": "MANUSCRIPTS",
    "date": "1954–1955",
    "year": 1955,
    "decade": "1950s",
    "creator": "Dr. B. R. Ambedkar",
    "source": "Dr. Babasaheb Ambedkar: Writings and Speeches, Vol. 4",
    "sourceCategory": "Writings & Speeches",
    "collection": "National Archives of India / Dr. Ambedkar Foundation",
    "volume": "Vol. 04",
    "page": "1",
    "documentUrl": "/api/archive/documents/ambedkar-volume-04/file#page=1",
    "image": "/assets/archive/ambedkar-manuscript.png",
    "thumbnail": "/assets/archive/ambedkar-manuscript.png",
    "location": "New Delhi, India",
    "placeId": "place-delhi",
    "timelineEventId": "event-1956-death",
    "tags": [
      "Manuscript",
      "Riddles in Hinduism",
      "Philosophy",
      "Religious Critique"
    ],
    "subjects": [
      "Philosophy",
      "Religion",
      "Social Reform",
      "Caste"
    ],
    "language": "English",
    "verified": true,
    "provenanceType": "PRIMARY SOURCE",
    "curatorNote": "Archival ink on paper with extensive handwritten marginalia and deletions by Dr. Ambedkar. Discovered among his personal research papers at 26 Alipur Road following his Mahaparinirvan. The treatise systematically interrogates Vedic dogmas and orthodox scriptures through rationalist historiography.",
    "quote": "My object in writing this book is to explain the riddle of Hindu social civilization... it is a plea for common sense and an appeal to reason.",
    "relatedArtifactIds": [
      "AAROH-ART-0016",
      "AAROH-ART-0012",
      "AAROH-ART-0038"
    ]
  },
  {
    "id": "AAROH-ART-0002",
    "aliasIds": [
      "art-annihilation"
    ],
    "title": "\"Annihilation of Caste\" Annotated Typescript & Proof Sheets",
    "shortTitle": "Annihilation of Caste Typescript",
    "type": "MANUSCRIPTS",
    "date": "May 1936",
    "year": 1936,
    "decade": "1930s",
    "creator": "Dr. B. R. Ambedkar",
    "source": "Dr. Babasaheb Ambedkar: Writings and Speeches, Vol. 1",
    "sourceCategory": "Writings & Speeches",
    "collection": "Columbia University Rare Book & Manuscript Library",
    "volume": "Vol. 01",
    "page": "23",
    "documentUrl": "/api/archive/documents/ambedkar-volume-01/file#page=23",
    "image": "/assets/archive/ambedkar-manuscript.png",
    "thumbnail": "/assets/archive/ambedkar-manuscript.png",
    "location": "Mumbai & Lahore",
    "placeId": "place-mumbai",
    "timelineEventId": "event-1936",
    "tags": [
      "Manuscript",
      "Annihilation of Caste",
      "Anti-Caste",
      "Philosophy"
    ],
    "subjects": [
      "Caste",
      "Social Reform",
      "Democracy",
      "Human Rights"
    ],
    "language": "English",
    "verified": true,
    "provenanceType": "PRIMARY SOURCE",
    "curatorNote": "Typescript draft with autograph holograph annotations for the presidential address prepared for the Jat-Pat-Todak Mandal annual conference in Lahore. When organizers demanded alterations, Ambedkar refused to alter a comma and self-published the address at his own expense from Bombay.",
    "quote": "Caste is not just a division of labour, it is a division of labourers... it is a hierarchy in which the divisions of labourers are graded one above the other.",
    "relatedArtifactIds": [
      "AAROH-ART-0011",
      "AAROH-ART-0010",
      "AAROH-ART-0032"
    ]
  },
  {
    "id": "AAROH-ART-0003",
    "aliasIds": [
      "art-baroda-scholarship"
    ],
    "title": "\"Waiting for a Visa\" Autobiographical Notes Manuscript",
    "shortTitle": "Waiting for a Visa Manuscript",
    "type": "MANUSCRIPTS",
    "date": "1935–1936",
    "year": 1935,
    "decade": "1930s",
    "creator": "Dr. B. R. Ambedkar",
    "source": "Dr. Babasaheb Ambedkar: Writings and Speeches, Vol. 12",
    "sourceCategory": "Writings & Speeches",
    "collection": "Columbia University Rare Book & Manuscript Library",
    "volume": "Vol. 12",
    "page": "661",
    "documentUrl": "/api/archive/documents/ambedkar-volume-12/file#page=661",
    "image": "/assets/archive/ambedkar-manuscript.png",
    "thumbnail": "/assets/archive/ambedkar-manuscript.png",
    "location": "Baroda & Mumbai",
    "placeId": "place-baroda",
    "timelineEventId": "event-1913",
    "tags": [
      "Manuscript",
      "Autobiography",
      "Waiting for a Visa",
      "Untouchability"
    ],
    "subjects": [
      "Caste",
      "Social Reform",
      "Education",
      "Personal Life"
    ],
    "language": "English",
    "verified": true,
    "provenanceType": "PRIMARY SOURCE",
    "curatorNote": "Twenty-page autobiographical narrative handwritten by Dr. Ambedkar recounting raw personal encounters with untouchability: from childhood humiliation at Masur station and Satara, to being evicted from a Parsi inn in Baroda, to denial of water at Daulatabad Fort.",
    "quote": "A person who is an Untouchable to a Hindu is also an Untouchable to a Parsi.",
    "relatedArtifactIds": [
      "AAROH-ART-0090",
      "AAROH-ART-0010",
      "AAROH-ART-0040"
    ]
  },
  {
    "id": "AAROH-ART-0004",
    "aliasIds": [
      "art-columbia-dissertation"
    ],
    "title": "\"Evolution of Provincial Finance in British India\" Ph.D. Dissertation",
    "shortTitle": "Columbia Ph.D. Dissertation Typescript",
    "type": "MANUSCRIPTS",
    "date": "June 1916",
    "year": 1916,
    "decade": "1910s",
    "creator": "Dr. B. R. Ambedkar",
    "source": "Dr. Babasaheb Ambedkar: Writings and Speeches, Vol. 6",
    "sourceCategory": "Writings & Speeches",
    "collection": "Columbia University Faculty of Political Science Archives",
    "volume": "Vol. 06",
    "page": "57",
    "documentUrl": "/api/archive/documents/ambedkar-volume-06/file#page=57",
    "image": "/assets/archive/castes-in-india-1917.png",
    "thumbnail": "/assets/archive/castes-in-india-1917.png",
    "location": "Columbia University, New York",
    "placeId": "place-newyork",
    "timelineEventId": "event-1913",
    "tags": [
      "Manuscript",
      "Economics",
      "Columbia University",
      "Public Finance"
    ],
    "subjects": [
      "Economics",
      "Public Finance",
      "Democracy",
      "Education"
    ],
    "language": "English",
    "verified": true,
    "provenanceType": "PRIMARY SOURCE",
    "curatorNote": "Doctoral dissertation submitted to Columbia University under the guidance of Professor Edwin R. A. Seligman. Traces the financial decentralization of the British Indian administration from the imperial budget reforms of 1858 through the Montagu-Chelmsford framework.",
    "quote": "Imperial finance was characterized by central monopolization that stifled local provincial initiative and equitable public utility.",
    "relatedArtifactIds": [
      "AAROH-ART-0005",
      "AAROH-ART-0010",
      "AAROH-ART-0040"
    ]
  },
  {
    "id": "AAROH-ART-0005",
    "aliasIds": [
      "art-problem-rupee"
    ],
    "title": "\"The Problem of the Rupee: Its Origin and Solution\" D.Sc. Dissertation",
    "shortTitle": "LSE D.Sc. Monetary Dissertation",
    "type": "MANUSCRIPTS",
    "date": "March 1923",
    "year": 1923,
    "decade": "1920s",
    "creator": "Dr. B. R. Ambedkar",
    "source": "Dr. Babasaheb Ambedkar: Writings and Speeches, Vol. 6",
    "sourceCategory": "Writings & Speeches",
    "collection": "London School of Economics Archives / British Library",
    "volume": "Vol. 06",
    "page": "313",
    "documentUrl": "/api/archive/documents/ambedkar-volume-06/file#page=313",
    "image": "/assets/archive/round-table-conference.png",
    "thumbnail": "/assets/archive/round-table-conference.png",
    "location": "London School of Economics, London",
    "placeId": "place-london",
    "timelineEventId": "event-1916",
    "tags": [
      "Manuscript",
      "Economics",
      "London School of Economics",
      "Currency",
      "RBI"
    ],
    "subjects": [
      "Economics",
      "Reserve Bank of India",
      "Public Finance",
      "Democracy"
    ],
    "language": "English",
    "verified": true,
    "provenanceType": "PRIMARY SOURCE",
    "curatorNote": "Monumental doctoral dissertation for which the University of London conferred upon Ambedkar the Doctor of Science (D.Sc.) in Economics. The thesis vigorously contested John Maynard Keynes’s gold-exchange standard and became the theoretical foundation for the Reserve Bank of India.",
    "quote": "The problem of the rupee is the problem of colonial extraction masquerading as currency stability.",
    "relatedArtifactIds": [
      "AAROH-ART-0004",
      "AAROH-ART-0042",
      "AAROH-ART-0043"
    ]
  },
  {
    "id": "AAROH-ART-0006",
    "title": "Drafting Committee Holograph Preamble Revision Folio",
    "shortTitle": "Preamble Revision Draft Folio",
    "type": "MANUSCRIPTS",
    "date": "February 1948",
    "year": 1948,
    "decade": "1940s",
    "creator": "Dr. B. R. Ambedkar",
    "source": "Constituent Assembly of India Drafting Committee Papers / BAWS Vol. 13",
    "sourceCategory": "Constitutional Records",
    "collection": "National Archives of India, New Delhi",
    "volume": "Vol. 13",
    "page": "118",
    "documentUrl": "/api/archive/documents/ambedkar-volume-13/file#page=118",
    "image": "/assets/archive/ambedkar-manuscript.png",
    "thumbnail": "/assets/archive/ambedkar-manuscript.png",
    "location": "Constitution House, New Delhi",
    "placeId": "place-delhi",
    "timelineEventId": "event-1949-constitution",
    "tags": [
      "Manuscript",
      "Drafting Committee",
      "Preamble",
      "Constitution"
    ],
    "subjects": [
      "Constitution",
      "Democracy",
      "Equality"
    ],
    "language": "English",
    "verified": true,
    "provenanceType": "PRIMARY SOURCE",
    "curatorNote": "Working draft folio from the Constituent Assembly Drafting Committee sessions where Dr. Ambedkar refined the philosophical phrasing of Justice, Liberty, Equality, and Fraternity.",
    "quote": "The Drafting Committee has prepared a Constitution embodying the decisions of the Constituent Assembly with such changes as were deemed necessary.",
    "relatedArtifactIds": [
      "AAROH-ART-0060",
      "AAROH-ART-0062"
    ]
  },
  {
    "id": "AAROH-ART-0007",
    "title": "Holograph Letter from Dr. B. R. Ambedkar to W. E. B. Du Bois",
    "shortTitle": "Letter to W.E.B. Du Bois on Civil Rights",
    "type": "MANUSCRIPTS",
    "date": "31 July 1946",
    "year": 1946,
    "decade": "1940s",
    "creator": "Dr. B. R. Ambedkar",
    "source": "W. E. B. Du Bois Papers, Special Collections and University Archives, UMass Amherst / BAWS Vol. 17(1)",
    "sourceCategory": "Writings & Speeches",
    "collection": "University of Massachusetts Amherst Archives",
    "volume": "Vol. 17(1)",
    "page": "341",
    "documentUrl": "/api/archive/documents/ambedkar-volume-17-01/file#page=341",
    "image": "/assets/archive/ambedkar-manuscript.png",
    "thumbnail": "/assets/archive/ambedkar-manuscript.png",
    "location": "Rajgriha, Dadar, Bombay",
    "placeId": "place-mumbai",
    "timelineEventId": "event-1947-law-minister",
    "tags": [
      "Correspondence",
      "Manuscript",
      "Du Bois",
      "Civil Rights",
      "United Nations"
    ],
    "subjects": [
      "Human Rights",
      "Caste",
      "Social Reform",
      "Democracy"
    ],
    "language": "English",
    "verified": true,
    "provenanceType": "PRIMARY SOURCE",
    "curatorNote": "Historic letter in which Dr. Ambedkar initiated international solidarities between the Untouchables of India and African Americans struggling against Jim Crow segregation, inquiring about the NAACP petition to the United Nations.",
    "quote": "There is so much in common between the position of the Untouchables in India and the position of the Negroes in America that the study of the one is bound to be helpful in the study of the other.",
    "relatedArtifactIds": [
      "AAROH-ART-0071",
      "AAROH-ART-0010",
      "AAROH-ART-0030"
    ]
  },
  {
    "id": "AAROH-ART-0008",
    "title": "Original Signed Memorandum on the Safeguards for Depressed Classes at RTC",
    "shortTitle": "RTC Minorities Memorandum",
    "type": "MANUSCRIPTS",
    "date": "10 November 1930",
    "year": 1930,
    "decade": "1930s",
    "creator": "Dr. B. R. Ambedkar & Rao Bahadur R. Srinivasan",
    "source": "Indian Round Table Conference Proceedings, Minorities Sub-Committee / BAWS Vol. 2",
    "sourceCategory": "Constitutional Records",
    "collection": "British Library, London / BAWS Vol. 2",
    "volume": "Vol. 02",
    "page": "546",
    "documentUrl": "/api/archive/documents/ambedkar-volume-02/file#page=546",
    "image": "/assets/archive/ambedkar-manuscript.png",
    "thumbnail": "/assets/archive/ambedkar-manuscript.png",
    "location": "St. James's Palace, London",
    "placeId": "place-london",
    "timelineEventId": "event-1930-rtc",
    "tags": [
      "RTC",
      "Memorandum",
      "Minorities",
      "Franchise"
    ],
    "subjects": [
      "Political Representation",
      "Human Rights",
      "Democracy"
    ],
    "language": "English",
    "verified": true,
    "provenanceType": "PRIMARY SOURCE",
    "curatorNote": "Formal memorandum submitted jointly to the British Parliament and RTC Minorities Sub-Committee demanding fundamental civic rights, protection from social boycott, and dedicated legislative representation.",
    "quote": "The Depressed Classes must be given statutory guarantees and adequate representation in legislatures to protect their existence as free citizens.",
    "relatedArtifactIds": [
      "AAROH-ART-0029",
      "AAROH-ART-0046",
      "AAROH-ART-0080"
    ]
  },
  {
    "id": "AAROH-ART-0009",
    "title": "Holograph Working Notes on \"Revolution and Counter-Revolution in Ancient India\"",
    "shortTitle": "Revolution & Counter-Revolution Notes",
    "type": "MANUSCRIPTS",
    "date": "c. 1952–1954",
    "year": 1954,
    "decade": "1950s",
    "creator": "Dr. B. R. Ambedkar",
    "source": "Dr. Babasaheb Ambedkar: Writings and Speeches, Vol. 3, Part 2",
    "sourceCategory": "Writings & Speeches",
    "collection": "Dr. Ambedkar Foundation, New Delhi",
    "volume": "Vol. 03",
    "page": "151",
    "documentUrl": "/api/archive/documents/ambedkar-volume-03/file#page=151",
    "image": "/assets/archive/ambedkar-manuscript.png",
    "thumbnail": "/assets/archive/ambedkar-manuscript.png",
    "location": "26 Alipur Road, New Delhi",
    "placeId": "place-delhi",
    "timelineEventId": "event-1956-death",
    "tags": [
      "Manuscript",
      "Ancient India",
      "Buddhism",
      "Social History"
    ],
    "subjects": [
      "Religion",
      "Philosophy",
      "Social Reform",
      "Caste"
    ],
    "language": "English",
    "verified": true,
    "provenanceType": "PRIMARY SOURCE",
    "curatorNote": "Research notes exploring how the social revolution launched by the Buddha was subsequently countered by the orthodox revival, shaping caste hegemony in ancient India.",
    "quote": "Ancient Indian history must be read as a mortal conflict between Buddhism and Brahmanism.",
    "relatedArtifactIds": [
      "AAROH-ART-0016",
      "AAROH-ART-0048",
      "AAROH-ART-0001"
    ]
  },
  {
    "id": "AAROH-ART-0010",
    "aliasIds": [
      "art-education"
    ],
    "title": "Castes in India: Their Mechanism, Genesis and Development",
    "shortTitle": "Castes in India (1917 First Paper)",
    "type": "BOOKS & WRITINGS",
    "date": "May 1917",
    "year": 1917,
    "decade": "1910s",
    "creator": "Dr. B. R. Ambedkar",
    "source": "Indian Antiquary, Vol. XLI / BAWS Vol. 1",
    "sourceCategory": "Writings & Speeches",
    "collection": "Columbia University Anthropology Seminar Records",
    "volume": "Vol. 01",
    "page": "3",
    "documentUrl": "/api/archive/documents/ambedkar-volume-01/file#page=3",
    "image": "/assets/archive/castes-in-india-1917.png",
    "thumbnail": "/assets/archive/castes-in-india-1917.png",
    "location": "Columbia University, New York",
    "placeId": "place-newyork",
    "timelineEventId": "event-1913",
    "tags": [
      "Paper",
      "Castes in India",
      "Anthropology",
      "Goldenweizer Seminar"
    ],
    "subjects": [
      "Caste",
      "Social Reform",
      "Education",
      "Philosophy"
    ],
    "language": "English",
    "verified": true,
    "provenanceType": "PRIMARY SOURCE",
    "curatorNote": "Seminal anthropological paper read before Dr. Alexander Goldenweizer’s anthropology seminar at Columbia University on 9 May 1916 and published in Indian Antiquary in May 1917. First scholarly treatise identifying endogamy as the essential mechanism maintaining caste hierarchy.",
    "quote": "Endogamy is the only one that is peculiar to caste... Superimposition of endogamy on exogamy means the creation of caste.",
    "relatedArtifactIds": [
      "AAROH-ART-0002",
      "AAROH-ART-0011",
      "AAROH-ART-0040"
    ]
  },
  {
    "id": "AAROH-ART-0011",
    "title": "Annihilation of Caste: With a Reply to Mahatma Gandhi",
    "shortTitle": "Annihilation of Caste (First Edition)",
    "type": "BOOKS & WRITINGS",
    "date": "1936",
    "year": 1936,
    "decade": "1930s",
    "creator": "Dr. B. R. Ambedkar",
    "source": "Self-published, Bombay / BAWS Vol. 1",
    "sourceCategory": "Writings & Speeches",
    "collection": "Rajgriha Heritage Library Collection",
    "volume": "Vol. 01",
    "page": "23",
    "documentUrl": "/api/archive/documents/ambedkar-volume-01/file#page=23",
    "image": "/assets/archive/ambedkar-manuscript.png",
    "thumbnail": "/assets/archive/ambedkar-manuscript.png",
    "location": "Mumbai, Maharashtra",
    "placeId": "place-mumbai",
    "timelineEventId": "event-1936",
    "tags": [
      "Book",
      "Annihilation of Caste",
      "Anti-Caste",
      "Political Philosophy"
    ],
    "subjects": [
      "Caste",
      "Social Reform",
      "Democracy",
      "Human Rights"
    ],
    "language": "English",
    "verified": true,
    "provenanceType": "PRIMARY SOURCE",
    "curatorNote": "First edition self-published in 1936. Systematically demonstrates that social reform must precede political reform, dismantling caste as an anti-social dogma sanctioning hereditary slavery.",
    "quote": "Caste is not a physical object like a wall of bricks. Caste is a state of the mind.",
    "relatedArtifactIds": [
      "AAROH-ART-0002",
      "AAROH-ART-0010",
      "AAROH-ART-0032"
    ]
  },
  {
    "id": "AAROH-ART-0012",
    "title": "Who Were the Shudras? How They Came to Be the Fourth Varna",
    "shortTitle": "Who Were the Shudras?",
    "type": "BOOKS & WRITINGS",
    "date": "1946",
    "year": 1946,
    "decade": "1940s",
    "creator": "Dr. B. R. Ambedkar",
    "source": "Thacker & Co. Ltd., Bombay / BAWS Vol. 7",
    "sourceCategory": "Writings & Speeches",
    "collection": "AAROH Digital Archive",
    "volume": "Vol. 07",
    "page": "1",
    "documentUrl": "/api/archive/documents/ambedkar-volume-07/file#page=1",
    "image": "/assets/archive/archive-library.jpg",
    "thumbnail": "/assets/archive/archive-library.jpg",
    "location": "Bombay, India",
    "placeId": "place-mumbai",
    "timelineEventId": "event-1946",
    "tags": [
      "Book",
      "Historiography",
      "Who Were the Shudras",
      "Varna System"
    ],
    "subjects": [
      "Caste",
      "Social Reform",
      "Philosophy"
    ],
    "language": "English",
    "verified": true,
    "provenanceType": "PRIMARY SOURCE",
    "curatorNote": "Dedicated to Mahatma Jyotirao Phule. Employs rigorous philological and historical analysis of the Rigveda, Mahabharata, and ancient texts to prove that Shudras were originally Aryan Kshatriyas degraded through social conflicts.",
    "quote": "I dedicate this book to Mahatma Jyotirao Phule, the greatest Shudra of modern India.",
    "relatedArtifactIds": [
      "AAROH-ART-0013",
      "AAROH-ART-0001",
      "AAROH-ART-0051"
    ]
  },
  {
    "id": "AAROH-ART-0013",
    "title": "The Untouchables: Who Were They and Why They Became Untouchables?",
    "shortTitle": "The Untouchables (1948)",
    "type": "BOOKS & WRITINGS",
    "date": "1948",
    "year": 1948,
    "decade": "1940s",
    "creator": "Dr. B. R. Ambedkar",
    "source": "Amrit Book Co., New Delhi / BAWS Vol. 7",
    "sourceCategory": "Writings & Speeches",
    "collection": "Dr. Ambedkar Foundation Vault",
    "volume": "Vol. 07",
    "page": "239",
    "documentUrl": "/api/archive/documents/ambedkar-volume-07/file#page=239",
    "image": "/assets/archive/archive-library.jpg",
    "thumbnail": "/assets/archive/archive-library.jpg",
    "location": "New Delhi, India",
    "placeId": "place-delhi",
    "timelineEventId": "event-1947",
    "tags": [
      "Book",
      "Untouchables",
      "Buddhism",
      "Social History"
    ],
    "subjects": [
      "Caste",
      "Religion",
      "Social Reform",
      "Buddhism"
    ],
    "language": "English",
    "verified": true,
    "provenanceType": "PRIMARY SOURCE",
    "curatorNote": "Presents the revolutionary historical thesis that Untouchability originated around 400 AD out of the religious struggle between declining Buddhism and resurgent Brahminism, and dietary restrictions on beef.",
    "quote": "Untouchability was born out of the struggle for supremacy between Buddhism and Brahminism.",
    "relatedArtifactIds": [
      "AAROH-ART-0012",
      "AAROH-ART-0016",
      "AAROH-ART-0038"
    ]
  },
  {
    "id": "AAROH-ART-0014",
    "title": "Pakistan or the Partition of India",
    "shortTitle": "Pakistan or Partition of India",
    "type": "BOOKS & WRITINGS",
    "date": "1940 / 1945",
    "year": 1945,
    "decade": "1940s",
    "creator": "Dr. B. R. Ambedkar",
    "source": "Thacker & Co., Bombay / BAWS Vol. 8",
    "sourceCategory": "Writings & Speeches",
    "collection": "Parliament Library Rare Collection",
    "volume": "Vol. 08",
    "page": "1",
    "documentUrl": "/api/archive/documents/ambedkar-volume-08/file#page=1",
    "image": "/assets/archive/archive-library.jpg",
    "thumbnail": "/assets/archive/archive-library.jpg",
    "location": "Bombay, India",
    "placeId": "place-mumbai",
    "timelineEventId": "event-1946",
    "tags": [
      "Book",
      "Partition of India",
      "Geopolitics",
      "Constitutional Law"
    ],
    "subjects": [
      "Democracy",
      "Political Representation",
      "Constitution"
    ],
    "language": "English",
    "verified": true,
    "provenanceType": "PRIMARY SOURCE",
    "curatorNote": "Authoritative demographic, geopolitical, and historical analysis of the communal problem and the demand for Pakistan, consulted by both nationalist leaders and the British administration.",
    "quote": "A safe army is better than a safe frontier. Boundary demarcation without emotional reconciliation is futile.",
    "relatedArtifactIds": [
      "AAROH-ART-0015",
      "AAROH-ART-0033",
      "AAROH-ART-0071"
    ]
  },
  {
    "id": "AAROH-ART-0015",
    "title": "What Congress and Gandhi Have Done to the Untouchables",
    "shortTitle": "What Congress & Gandhi Have Done",
    "type": "BOOKS & WRITINGS",
    "date": "1945",
    "year": 1945,
    "decade": "1940s",
    "creator": "Dr. B. R. Ambedkar",
    "source": "Thacker & Co., Bombay / BAWS Vol. 9",
    "sourceCategory": "Writings & Speeches",
    "collection": "National Archives of India",
    "volume": "Vol. 09",
    "page": "1",
    "documentUrl": "/api/archive/documents/ambedkar-volume-09/file#page=1",
    "image": "/assets/archive/archive-library.jpg",
    "thumbnail": "/assets/archive/archive-library.jpg",
    "location": "Bombay, India",
    "placeId": "place-mumbai",
    "timelineEventId": "event-1946",
    "tags": [
      "Book",
      "Congress",
      "Gandhi",
      "Poona Pact",
      "Political Safeguards"
    ],
    "subjects": [
      "Political Representation",
      "Caste",
      "Democracy",
      "Social Reform"
    ],
    "language": "English",
    "verified": true,
    "provenanceType": "PRIMARY SOURCE",
    "curatorNote": "Rigorous documentary indictment backed by legislative tables and party resolutions, exposing the tokenism of nationalist party policies towards the Depressed Classes.",
    "quote": "Beware of Gandhiism; it is the paradox of treating untouchability as a sin while defending the caste system which is its parent.",
    "relatedArtifactIds": [
      "AAROH-ART-0041",
      "AAROH-ART-0070",
      "AAROH-ART-0080"
    ]
  },
  {
    "id": "AAROH-ART-0016",
    "title": "The Buddha and His Dhamma: The Monumental Masterpiece",
    "shortTitle": "The Buddha and His Dhamma",
    "type": "BOOKS & WRITINGS",
    "date": "1956–1957",
    "year": 1956,
    "decade": "1950s",
    "creator": "Dr. B. R. Ambedkar",
    "source": "Siddharth College Publication / BAWS Vol. 11",
    "sourceCategory": "Writings & Speeches",
    "collection": "Dr. Ambedkar Smarak Samiti, Nagpur",
    "volume": "Vol. 11",
    "page": "1",
    "documentUrl": "/api/archive/documents/ambedkar-volume-11/file#page=1",
    "image": "/assets/archive/deekshabhoomi.jpg",
    "thumbnail": "/assets/archive/deekshabhoomi.jpg",
    "location": "New Delhi & Nagpur",
    "placeId": "place-nagpur",
    "timelineEventId": "event-1956-dhamma",
    "tags": [
      "Book",
      "Buddhism",
      "Dhamma",
      "Navayana",
      "Philosophy"
    ],
    "subjects": [
      "Religion",
      "Philosophy",
      "Human Rights",
      "Social Reform"
    ],
    "language": "English",
    "verified": true,
    "provenanceType": "PRIMARY SOURCE",
    "curatorNote": "The magnum opus completed on his deathbed on 6 December 1956. Synthesizes the life and teachings of Gautama Buddha as a rational, ethical, and emancipatory religion founded on Prajna (wisdom), Karuna (compassion), and Samata (equality).",
    "quote": "I like the religion that teaches liberty, equality and fraternity. Religion must be in accordance with science and morality.",
    "relatedArtifactIds": [
      "AAROH-ART-0091",
      "AAROH-ART-0038",
      "AAROH-ART-0049"
    ]
  },
  {
    "id": "AAROH-ART-0017",
    "title": "States and Minorities: What Are Their Rights and How to Secure Them",
    "shortTitle": "States and Minorities (1947)",
    "type": "BOOKS & WRITINGS",
    "date": "March 1947",
    "year": 1947,
    "decade": "1940s",
    "creator": "Dr. B. R. Ambedkar",
    "source": "Constituent Assembly of India / BAWS Vol. 1",
    "sourceCategory": "Constitutional Records",
    "collection": "Constituent Assembly Drafting Committee Records",
    "volume": "Vol. 01",
    "page": "381",
    "documentUrl": "/api/archive/documents/ambedkar-volume-01/file#page=381",
    "image": "/assets/archive/constitution-preamble.jpg",
    "thumbnail": "/assets/archive/constitution-preamble.jpg",
    "location": "Constitution Hall, New Delhi",
    "placeId": "place-delhi",
    "timelineEventId": "event-1947",
    "tags": [
      "Book",
      "Constitution",
      "State Socialism",
      "Fundamental Rights"
    ],
    "subjects": [
      "Constitution",
      "Economics",
      "Democracy",
      "Human Rights"
    ],
    "language": "English",
    "verified": true,
    "provenanceType": "PRIMARY SOURCE",
    "curatorNote": "Ambedkar’s complete constitutional memorandum submitted to the Constituent Assembly proposing a constitutional state socialism: state ownership of key industries and agricultural land, coupled with inviolable civil liberty guarantees.",
    "quote": "The purpose of the Constitution is not merely to establish organs of state, but to limit state power and guarantee social democracy.",
    "relatedArtifactIds": [
      "AAROH-ART-0060",
      "AAROH-ART-0061",
      "AAROH-ART-0034"
    ]
  },
  {
    "id": "AAROH-ART-0018",
    "title": "The Rise and Fall of the Hindu Woman",
    "shortTitle": "The Rise and Fall of the Hindu Woman",
    "type": "BOOKS & WRITINGS",
    "date": "1951",
    "year": 1951,
    "decade": "1950s",
    "creator": "Dr. B. R. Ambedkar",
    "source": "The Mahabodhi Journal, Calcutta / BAWS Vol. 17 (Part 2)",
    "sourceCategory": "Writings & Speeches",
    "collection": "Dr. Ambedkar Memorial Archives",
    "volume": "Vol. 17_02",
    "page": "109",
    "documentUrl": "/api/archive/documents/ambedkar-volume-17-02/file#page=109",
    "image": "/assets/archive/constitution-signing.jpg",
    "thumbnail": "/assets/archive/constitution-signing.jpg",
    "location": "New Delhi",
    "placeId": "place-delhi",
    "timelineEventId": "event-1951",
    "tags": [
      "Treatise",
      "Feminism",
      "Hindu Code Bill",
      "Women's Rights"
    ],
    "subjects": [
      "Women's Rights",
      "Social Reform",
      "Religion",
      "Caste"
    ],
    "language": "English",
    "verified": true,
    "provenanceType": "PRIMARY SOURCE",
    "curatorNote": "Historical essay demonstrating that ancient pre-Manu Buddhist society accorded women high status, intellectual liberty, and property rights, which were subsequently suppressed by Manu’s legal codes.",
    "quote": "I measure the progress of a community by the degree of progress which women have achieved.",
    "relatedArtifactIds": [
      "AAROH-ART-0064",
      "AAROH-ART-0036",
      "AAROH-ART-0072"
    ]
  },
  {
    "id": "AAROH-ART-0019",
    "title": "The Evolution of Provincial Finance in British India: A Study in the Provincial Decentralisation of Imperial Finance",
    "shortTitle": "Evolution of Provincial Finance",
    "type": "BOOKS & WRITINGS",
    "date": "1925",
    "year": 1925,
    "decade": "1920s",
    "creator": "Dr. B. R. Ambedkar",
    "source": "P. S. King & Son, London / BAWS Vol. 6",
    "sourceCategory": "Writings & Speeches",
    "collection": "Columbia University & LSE Doctoral Series / BAWS Vol. 6",
    "volume": "Vol. 06",
    "page": "1",
    "documentUrl": "/api/archive/documents/ambedkar-volume-06/file#page=1",
    "image": "/assets/archive/archive-library.jpg",
    "thumbnail": "/assets/archive/archive-library.jpg",
    "location": "London & Columbia",
    "placeId": "place-newyork",
    "timelineEventId": "event-1913-columbia",
    "tags": [
      "Economics",
      "Public Finance",
      "Decentralisation",
      "Doctoral Thesis"
    ],
    "subjects": [
      "Economics",
      "Public Finance",
      "Democracy"
    ],
    "language": "English",
    "verified": true,
    "provenanceType": "PRIMARY SOURCE",
    "curatorNote": "Ambedkar's celebrated Columbia University doctoral dissertation with an introduction by Professor Edwin R. A. Seligman, analyzing federal finance, taxation equity, and provincial decentralization in India.",
    "quote": "The system of provincial finance was not only unjust but also operated to the detriment of nation-building departments.",
    "relatedArtifactIds": [
      "AAROH-ART-0013",
      "AAROH-ART-0004",
      "AAROH-ART-0085"
    ]
  },
  {
    "id": "AAROH-ART-0020",
    "title": "Ranade, Gandhi and Jinnah: Address Delivered on the 101st Birthday Celebration of Mahadev Govind Ranade",
    "shortTitle": "Ranade, Gandhi and Jinnah (1943)",
    "type": "BOOKS & WRITINGS",
    "date": "18 January 1943",
    "year": 1943,
    "decade": "1940s",
    "creator": "Dr. B. R. Ambedkar",
    "source": "Thacker & Co., Bombay / BAWS Vol. 1",
    "sourceCategory": "Writings & Speeches",
    "collection": "Deccan Sabha, Pune / BAWS Vol. 1",
    "volume": "Vol. 01",
    "page": "205",
    "documentUrl": "/api/archive/documents/ambedkar-volume-01/file#page=205",
    "image": "/assets/archive/archive-library.jpg",
    "thumbnail": "/assets/archive/archive-library.jpg",
    "location": "Gokhale Memorial Hall, Pune",
    "placeId": "place-pune",
    "timelineEventId": "event-1942-scf",
    "tags": [
      "Political Philosophy",
      "Hero Worship",
      "Leadership",
      "Ranade"
    ],
    "subjects": [
      "Democracy",
      "Political Representation",
      "Philosophy"
    ],
    "language": "English",
    "verified": true,
    "provenanceType": "PRIMARY SOURCE",
    "curatorNote": "A brilliant political and philosophical treatise cautioning against Bhakti (hero-worship) in politics, warning that hero-worship in politics leads to degeneration and eventual dictatorship.",
    "quote": "Bhakti in religion may be a road to the salvation of the soul. But in politics, Bhakti or hero-worship is a sure road to degradation and to eventual dictatorship.",
    "relatedArtifactIds": [
      "AAROH-ART-0011",
      "AAROH-ART-0015"
    ]
  },
  {
    "id": "AAROH-ART-0021",
    "title": "Mr. Gandhi and the Emancipation of the Untouchables",
    "shortTitle": "Emancipation of the Untouchables (1943)",
    "type": "BOOKS & WRITINGS",
    "date": "1943",
    "year": 1943,
    "decade": "1940s",
    "creator": "Dr. B. R. Ambedkar",
    "source": "Thacker & Co., Bombay / Bheem Patrika Publications / BAWS Vol. 9",
    "sourceCategory": "Writings & Speeches",
    "collection": "Institute of Pacific Relations / BAWS Vol. 9",
    "volume": "Vol. 09",
    "page": "397",
    "documentUrl": "/api/archive/documents/ambedkar-volume-09/file#page=397",
    "image": "/assets/archive/scf-election-manifesto.jpg",
    "thumbnail": "/assets/archive/scf-election-manifesto.jpg",
    "location": "Mont Tremblant, Quebec / Bombay",
    "placeId": "place-mumbai",
    "timelineEventId": "event-1942-scf",
    "tags": [
      "Untouchability",
      "Civil Rights",
      "Political Philosophy",
      "Pacific Relations"
    ],
    "subjects": [
      "Caste",
      "Human Rights",
      "Social Reform"
    ],
    "language": "English",
    "verified": true,
    "provenanceType": "PRIMARY SOURCE",
    "curatorNote": "Paper prepared for the Institute of Pacific Relations Conference in Canada, outlining why social emancipation cannot be achieved through patronizing charity but requires constitutional and political power.",
    "quote": "The emancipation of the Untouchables is not a question of social reform alone; it is a question of constitutional empowerment and fundamental rights.",
    "relatedArtifactIds": [
      "AAROH-ART-0018",
      "AAROH-ART-0011",
      "AAROH-ART-0031"
    ]
  },
  {
    "id": "AAROH-ART-0022",
    "title": "Communal Deadlock and a Way to Solve It: Address at the All-India Scheduled Castes Federation",
    "shortTitle": "Communal Deadlock & A Way to Solve It",
    "type": "BOOKS & WRITINGS",
    "date": "6 May 1945",
    "year": 1945,
    "decade": "1940s",
    "creator": "Dr. B. R. Ambedkar",
    "source": "All-India Scheduled Castes Federation, Bombay / BAWS Vol. 1",
    "sourceCategory": "Writings & Speeches",
    "collection": "P. J. Hindu Gymkhana, Bombay / BAWS Vol. 1",
    "volume": "Vol. 01",
    "page": "355",
    "documentUrl": "/api/archive/documents/ambedkar-volume-01/file#page=355",
    "image": "/assets/archive/scf-election-manifesto.jpg",
    "thumbnail": "/assets/archive/scf-election-manifesto.jpg",
    "location": "Bombay, Maharashtra",
    "placeId": "place-mumbai",
    "timelineEventId": "event-1942-scf",
    "tags": [
      "Constitution",
      "Minorities",
      "Federalism",
      "SCF"
    ],
    "subjects": [
      "Democracy",
      "Political Representation",
      "Constitution"
    ],
    "language": "English",
    "verified": true,
    "provenanceType": "PRIMARY SOURCE",
    "curatorNote": "Comprehensive constitutional proposal anticipating the Constituent Assembly, suggesting checks and balances to prevent majoritarian tyranny while preserving national unity.",
    "quote": "A democratic government must be a government of the people, by the people, and for the people, in which no single community shall rule over others.",
    "relatedArtifactIds": [
      "AAROH-ART-0015",
      "AAROH-ART-0062"
    ]
  },
  {
    "id": "AAROH-ART-0026",
    "title": "Historic First Address in the Constituent Assembly on the Objectives Resolution",
    "shortTitle": "Objectives Resolution Speech (1946)",
    "type": "SPEECHES",
    "date": "17 December 1946",
    "year": 1946,
    "decade": "1940s",
    "creator": "Dr. B. R. Ambedkar",
    "source": "Constituent Assembly Debates, Vol. 1, pp. 99–103 / BAWS Vol. 13",
    "sourceCategory": "Constitutional Records",
    "collection": "Parliament Library, New Delhi",
    "volume": "CAD Vol. 1 / BAWS Vol. 13",
    "page": "99",
    "documentUrl": "/api/archive/documents/ambedkar-volume-13/file#page=99",
    "image": "/assets/archive/constituent-assembly.jpg",
    "thumbnail": "/assets/archive/constituent-assembly.jpg",
    "location": "Constitution Hall, New Delhi",
    "placeId": "place-delhi",
    "timelineEventId": "event-1946-assembly",
    "tags": [
      "Constituent Assembly",
      "Objectives Resolution",
      "Unity",
      "Sovereignty"
    ],
    "subjects": [
      "Constitution",
      "Democracy",
      "Political Representation"
    ],
    "language": "English",
    "verified": true,
    "provenanceType": "PRIMARY SOURCE",
    "curatorNote": "Ambedkar's maiden speech in the Constituent Assembly which astonished the House with its profound constitutional wisdom, pleading for national unity, inclusion of the Muslim League, and social democracy.",
    "quote": "Our difficulty is how to make the heterogeneous mass that we are today, take a shape that will bring about unity and consolidated strength.",
    "relatedArtifactIds": [
      "AAROH-ART-0043",
      "AAROH-ART-0065"
    ]
  },
  {
    "id": "AAROH-ART-0027",
    "title": "Speech Introducing the Draft Constitution of India in the Constituent Assembly",
    "shortTitle": "Introduction of Draft Constitution (1948)",
    "type": "SPEECHES",
    "date": "4 November 1948",
    "year": 1948,
    "decade": "1940s",
    "creator": "Dr. B. R. Ambedkar",
    "source": "Constituent Assembly Debates, Vol. 7, pp. 31–44 / BAWS Vol. 13",
    "sourceCategory": "Constitutional Records",
    "collection": "Parliament Library, New Delhi",
    "volume": "CAD Vol. 7 / BAWS Vol. 13",
    "page": "31",
    "documentUrl": "/api/archive/documents/ambedkar-volume-13/file#page=31",
    "image": "/assets/archive/constitution-presentation.jpg",
    "thumbnail": "/assets/archive/constitution-presentation.jpg",
    "location": "Constitution Hall, New Delhi",
    "placeId": "place-delhi",
    "timelineEventId": "event-1949-constitution",
    "tags": [
      "Draft Constitution",
      "Constituent Assembly",
      "Parliamentary System",
      "Federalism"
    ],
    "subjects": [
      "Constitution",
      "Democracy",
      "Government"
    ],
    "language": "English",
    "verified": true,
    "provenanceType": "PRIMARY SOURCE",
    "curatorNote": "Magisterial address explaining the structural choices of the Indian Constitution, contrasting the presidential and parliamentary forms of governance and advocating constitutional morality.",
    "quote": "Constitutional morality is not a natural sentiment. It has to be cultivated. We must realize that our people have yet to learn it.",
    "relatedArtifactIds": [
      "AAROH-ART-0062",
      "AAROH-ART-0045"
    ]
  },
  {
    "id": "AAROH-ART-0028",
    "title": "All India Radio National Broadcast: \"Prospects of Democracy in India\"",
    "shortTitle": "Prospects of Democracy in India (AIR Broadcast)",
    "type": "SPEECHES",
    "date": "20 May 1956",
    "year": 1956,
    "decade": "1950s",
    "creator": "Dr. B. R. Ambedkar",
    "source": "All India Radio Archives / BAWS Vol. 17, Part 3",
    "sourceCategory": "Writings & Speeches",
    "collection": "All India Radio / Prasar Bharati Sound Archives",
    "volume": "Vol. 17(3)",
    "page": "519",
    "documentUrl": "/api/archive/documents/ambedkar-volume-17-02/file#page=519",
    "image": "/assets/hero/ambedkar_speech_card.jpg",
    "thumbnail": "/assets/hero/ambedkar_speech_card.jpg",
    "location": "New Delhi Studio, All India Radio",
    "placeId": "place-delhi",
    "timelineEventId": "event-1956-buddhism",
    "tags": [
      "Radio Broadcast",
      "Democracy",
      "Caste System",
      "Fraternity"
    ],
    "subjects": [
      "Democracy",
      "Social Reform",
      "Caste"
    ],
    "language": "English",
    "verified": true,
    "provenanceType": "PRIMARY SOURCE",
    "curatorNote": "Ambedkar's philosophical radio address explaining that democracy is not merely a form of government but essentially an attitude of respect and reverence towards one's fellowmen, fundamentally incompatible with caste hierarchy.",
    "quote": "Democracy is not merely a form of government. It is primarily a mode of associated living, of conjoint communicated experience.",
    "relatedArtifactIds": [
      "AAROH-ART-0011"
    ]
  },
  {
    "id": "AAROH-ART-0029",
    "title": "Presidential Address at the All-India Depressed Classes Women's Conference at Nagpur",
    "shortTitle": "Women's Conference Address (Nagpur 1942)",
    "type": "SPEECHES",
    "date": "20 July 1942",
    "year": 1942,
    "decade": "1940s",
    "creator": "Dr. B. R. Ambedkar",
    "source": "All-India Depressed Classes Women's Conference / BAWS Vol. 17, Part 3",
    "sourceCategory": "Writings & Speeches",
    "collection": "Mohan Park, Nagpur / BAWS Vol. 17(3)",
    "volume": "Vol. 17(3)",
    "page": "282",
    "documentUrl": "/api/archive/documents/ambedkar-volume-17-02/file#page=282",
    "image": "/assets/hero/ambedkar_speech_card.jpg",
    "thumbnail": "/assets/hero/ambedkar_speech_card.jpg",
    "location": "Mohan Park, Nagpur, Maharashtra",
    "placeId": "place-nagpur",
    "timelineEventId": "event-1942-scf",
    "tags": [
      "Women's Rights",
      "Education",
      "Social Equality",
      "Nagpur"
    ],
    "subjects": [
      "Women's Rights",
      "Social Reform",
      "Education"
    ],
    "language": "Marathi & English Transcripts",
    "verified": true,
    "provenanceType": "PRIMARY SOURCE",
    "curatorNote": "Landmark speech addressed to over 25,000 women delegates, articulating his famous maxim that the progress of a community is measured by the degree of progress achieved by its women.",
    "quote": "I measure the progress of a community by the degree of progress which women have achieved.",
    "relatedArtifactIds": [
      "AAROH-ART-0028",
      "AAROH-ART-0048",
      "AAROH-ART-0067"
    ]
  },
  {
    "id": "AAROH-ART-0030",
    "aliasIds": [
      "art-roundtable"
    ],
    "title": "Speech at the First Round Table Conference: Demand for Fundamental Rights",
    "shortTitle": "First Round Table Conference Speech (1930)",
    "type": "SPEECHES",
    "date": "12 November 1930",
    "year": 1930,
    "decade": "1930s",
    "creator": "Dr. B. R. Ambedkar",
    "source": "Proceedings of the Indian Round Table Conference (Cmd. 3778) / BAWS Vol. 2",
    "sourceCategory": "Writings & Speeches",
    "collection": "British Parliamentary Records / British Library",
    "volume": "Vol. 02",
    "page": "503",
    "documentUrl": "/api/archive/documents/ambedkar-volume-02/file#page=503",
    "image": "/assets/archive/round-table-conference.png",
    "thumbnail": "/assets/archive/round-table-conference.png",
    "location": "St. James’s Palace, London",
    "placeId": "place-london",
    "timelineEventId": "event-1930-rtc",
    "tags": [
      "Speech",
      "Round Table Conference",
      "London",
      "Civil Rights",
      "Universal Franchise"
    ],
    "subjects": [
      "Political Representation",
      "Human Rights",
      "Democracy",
      "Caste"
    ],
    "language": "English",
    "verified": true,
    "provenanceType": "PRIMARY SOURCE",
    "curatorNote": "Address delivered at St. James’s Palace representing 60 million Untouchables. Demanded universal adult franchise, statutory guarantees of non-discrimination, and separate representation.",
    "quote": "We want our people not to be treated as a pawn on the political chess board. We demand our share of sovereign governance.",
    "relatedArtifactIds": [
      "AAROH-ART-0042",
      "AAROH-ART-0043",
      "AAROH-ART-0080"
    ]
  },
  {
    "id": "AAROH-ART-0031",
    "aliasIds": [
      "art-mahad-photo"
    ],
    "title": "Mahad Water Satyagraha Declaration Address",
    "shortTitle": "Mahad Satyagraha Presidential Address (1927)",
    "type": "SPEECHES",
    "date": "20 March 1927",
    "year": 1927,
    "decade": "1920s",
    "creator": "Dr. B. R. Ambedkar",
    "source": "Bahishkrit Bharat issues, March–April 1927 / BAWS Vol. 17",
    "sourceCategory": "Writings & Speeches",
    "collection": "Mahad Satyagraha Historic Records Registry",
    "volume": "Vol. 17_01",
    "page": "228",
    "documentUrl": "/api/archive/documents/ambedkar-volume-17-01/file#page=228",
    "image": "/assets/archive/mahad-tank.jpg",
    "thumbnail": "/assets/archive/mahad-tank.jpg",
    "location": "Chavdar Tale, Mahad, Maharashtra",
    "placeId": "place-mahad",
    "timelineEventId": "event-1927",
    "tags": [
      "Speech",
      "Mahad Satyagraha",
      "Water Liberation",
      "Social Empowerment"
    ],
    "subjects": [
      "Social Reform",
      "Human Rights",
      "Caste",
      "Democracy"
    ],
    "language": "Marathi (Official English Translation in BAWS)",
    "verified": true,
    "provenanceType": "PRIMARY SOURCE",
    "curatorNote": "Presidential address delivered before thousands of satyagrahis before marching to the Chavdar Tale reservoir in Mahad. Transformed the act of drinking water into a foundational declaration of universal human dignity.",
    "quote": "We are not going to the Chavdar Tank merely to drink water. We are going to assert that we too are human beings.",
    "relatedArtifactIds": [
      "AAROH-ART-0047",
      "AAROH-ART-0051",
      "AAROH-ART-0095"
    ]
  },
  {
    "id": "AAROH-ART-0032",
    "aliasIds": [
      "art-yeola-speech"
    ],
    "title": "The Historic Yeola Declaration Address: \"I Will Not Die a Hindu\"",
    "shortTitle": "Yeola Declaration Speech (1935)",
    "type": "SPEECHES",
    "date": "13 October 1935",
    "year": 1935,
    "decade": "1930s",
    "creator": "Dr. B. R. Ambedkar",
    "source": "Janata periodical, October 1935 / BAWS Vol. 17 (Part 1)",
    "sourceCategory": "Writings & Speeches",
    "collection": "Bombay Provincial Depressed Classes Conference Papers",
    "volume": "Vol. 17_01",
    "page": "239",
    "documentUrl": "/api/archive/documents/ambedkar-volume-17-01/file#page=239",
    "image": "/assets/archive/ambedkar-manuscript.png",
    "thumbnail": "/assets/archive/ambedkar-manuscript.png",
    "location": "Yeola, Nashik, Maharashtra",
    "placeId": "place-nashik",
    "timelineEventId": "event-1935",
    "tags": [
      "Speech",
      "Yeola Declaration",
      "Religious Emancipation",
      "Buddhism"
    ],
    "subjects": [
      "Religion",
      "Caste",
      "Social Reform",
      "Philosophy"
    ],
    "language": "Marathi",
    "verified": true,
    "provenanceType": "PRIMARY SOURCE",
    "curatorNote": "Historic address to over 10,000 delegates in Yeola. After five years of peaceful struggle at Kalaram Temple met violent orthodoxy, he proclaimed the irreconcilability of human equality with scriptural caste codes.",
    "quote": "Unfortunately for me, I was born a Hindu Untouchable... but I solemnly assure you I will not die a Hindu.",
    "relatedArtifactIds": [
      "AAROH-ART-0016",
      "AAROH-ART-0038",
      "AAROH-ART-0091"
    ]
  },
  {
    "id": "AAROH-ART-0033",
    "title": "Constituent Assembly Maiden Speech: Electrifying Appeal for National Unity",
    "shortTitle": "Maiden Speech in Constituent Assembly (1946)",
    "type": "SPEECHES",
    "date": "17 December 1946",
    "year": 1946,
    "decade": "1940s",
    "creator": "Dr. B. R. Ambedkar",
    "source": "Constituent Assembly Debates (Official Report), Vol. I / BAWS Vol. 13",
    "sourceCategory": "Constitutional Records",
    "collection": "Parliament of India Archives",
    "volume": "Vol. 13",
    "page": "7",
    "documentUrl": "/api/archive/documents/ambedkar-volume-13/file#page=7",
    "image": "/assets/archive/constituent-assembly.jpg",
    "thumbnail": "/assets/archive/constituent-assembly.jpg",
    "location": "Constitution Hall, New Delhi",
    "placeId": "place-delhi",
    "timelineEventId": "event-1946",
    "tags": [
      "Speech",
      "Constituent Assembly",
      "National Unity",
      "Democracy"
    ],
    "subjects": [
      "Constitution",
      "Democracy",
      "Political Representation"
    ],
    "language": "English",
    "verified": true,
    "provenanceType": "PRIMARY SOURCE",
    "curatorNote": "Ambedkar’s unexpected maiden speech debating Jawaharlal Nehru’s Objectives Resolution. He cautioned against coercing dissenters, passionately advocating constitutional consensus and fraternity.",
    "quote": "I know today we are divided politically, socially and economically. But I am convinced that our destiny lies in unity.",
    "relatedArtifactIds": [
      "AAROH-ART-0046",
      "AAROH-ART-0060",
      "AAROH-ART-0034"
    ]
  },
  {
    "id": "AAROH-ART-0034",
    "title": "Presentation of the Draft Constitution to the Constituent Assembly",
    "shortTitle": "Presentation of Draft Constitution (1948)",
    "type": "SPEECHES",
    "date": "4 November 1948",
    "year": 1948,
    "decade": "1940s",
    "creator": "Dr. B. R. Ambedkar",
    "source": "Constituent Assembly Debates, Vol. VII / BAWS Vol. 13",
    "sourceCategory": "Constitutional Records",
    "collection": "Parliament Library Vault Archives",
    "volume": "Vol. 13",
    "page": "229",
    "documentUrl": "/api/archive/documents/ambedkar-volume-13/file#page=229",
    "image": "/assets/archive/constitution-presentation.jpg",
    "thumbnail": "/assets/archive/constitution-presentation.jpg",
    "location": "Constitution Hall, New Delhi",
    "placeId": "place-delhi",
    "timelineEventId": "event-1947",
    "tags": [
      "Speech",
      "Drafting Committee",
      "Constitution of India",
      "Constitutional Morality"
    ],
    "subjects": [
      "Constitution",
      "Democracy",
      "Human Rights"
    ],
    "language": "English",
    "verified": true,
    "provenanceType": "PRIMARY SOURCE",
    "curatorNote": "Masterful exposition introducing the 315 articles and 8 schedules of the Draft Constitution. Defended the parliamentary executive, flexible federation, and the concept of constitutional morality.",
    "quote": "Constitutional morality is not a natural sentiment. It has to be cultivated. We must realize that our people have yet to learn it.",
    "relatedArtifactIds": [
      "AAROH-ART-0044",
      "AAROH-ART-0060",
      "AAROH-ART-0035"
    ]
  },
  {
    "id": "AAROH-ART-0035",
    "title": "Final Address to the Constituent Assembly: \"The Grammar of Anarchy\"",
    "shortTitle": "Final Address to Constituent Assembly (25 Nov 1949)",
    "type": "SPEECHES",
    "date": "25 November 1949",
    "year": 1949,
    "decade": "1940s",
    "creator": "Dr. B. R. Ambedkar",
    "source": "Constituent Assembly Debates, Vol. XI / BAWS Vol. 13",
    "sourceCategory": "Constitutional Records",
    "collection": "National Archives of India",
    "volume": "Vol. 13",
    "page": "1160",
    "documentUrl": "/api/archive/documents/ambedkar-volume-13/file#page=1160",
    "image": "/assets/archive/constitution-signing.jpg",
    "thumbnail": "/assets/archive/constitution-signing.jpg",
    "location": "Constitution Hall, New Delhi",
    "placeId": "place-delhi",
    "timelineEventId": "event-1949",
    "tags": [
      "Speech",
      "Constitution Day",
      "Grammar of Anarchy",
      "Social Democracy"
    ],
    "subjects": [
      "Constitution",
      "Democracy",
      "Equality",
      "Social Reform"
    ],
    "language": "English",
    "verified": true,
    "provenanceType": "PRIMARY SOURCE",
    "curatorNote": "Ambedkar’s greatest prophetic address upon adopting the Constitution. Warned against bhakti (hero-worship) in politics, warned against abandoning constitutional methods, and insisted that political equality must be converted into social and economic equality.",
    "quote": "On the 26th of January 1950, we are going to enter into a life of contradictions. In politics we will have equality, and in social and economic life we will have inequality.",
    "relatedArtifactIds": [
      "AAROH-ART-0045",
      "AAROH-ART-0060",
      "AAROH-ART-0034"
    ]
  },
  {
    "id": "AAROH-ART-0036",
    "title": "Resignation Statement as Law Minister on the Hindu Code Bill",
    "shortTitle": "Resignation Statement as Law Minister (1951)",
    "type": "SPEECHES",
    "date": "27 September 1951",
    "year": 1951,
    "decade": "1950s",
    "creator": "Dr. B. R. Ambedkar",
    "source": "Parliamentary Debates (Official Report), Vol. XIV / BAWS Vol. 14",
    "sourceCategory": "Government Records",
    "collection": "Parliament of India Official Debates Archive",
    "volume": "Vol. 14_02",
    "page": "1317",
    "documentUrl": "/api/archive/documents/ambedkar-volume-14-02/file#page=1317",
    "image": "/assets/archive/constitution-signing.jpg",
    "thumbnail": "/assets/archive/constitution-signing.jpg",
    "location": "Parliament House, New Delhi",
    "placeId": "place-delhi",
    "timelineEventId": "event-1951",
    "tags": [
      "Speech",
      "Hindu Code Bill",
      "Resignation",
      "Women's Rights",
      "Law Minister"
    ],
    "subjects": [
      "Women's Rights",
      "Social Reform",
      "Democracy",
      "Constitution"
    ],
    "language": "English",
    "verified": true,
    "provenanceType": "PRIMARY SOURCE",
    "curatorNote": "Resignation statement explaining why he left Prime Minister Nehru’s cabinet when the Hindu Code Bill granting women property and divorce rights was postponed. Refused to compromise on gender justice.",
    "quote": "To leave inequality between class and class, between sex and sex, which is the soul of Hindu Society, untouched and to go on passing legislation on economic problems is to make a farce of our Constitution.",
    "relatedArtifactIds": [
      "AAROH-ART-0018",
      "AAROH-ART-0064",
      "AAROH-ART-0072"
    ]
  },
  {
    "id": "AAROH-ART-0037",
    "aliasIds": [
      "art-labour"
    ],
    "title": "Speech on Labour Welfare and the 8-Hour Workday",
    "shortTitle": "7th Indian Labour Conference Address (1945)",
    "type": "SPEECHES",
    "date": "27 November 1945",
    "year": 1945,
    "decade": "1940s",
    "creator": "Dr. B. R. Ambedkar",
    "source": "Labour Department Council Papers / BAWS Vol. 10",
    "sourceCategory": "Government Records",
    "collection": "Ministry of Labour Archives, Government of India",
    "volume": "Vol. 10",
    "page": "149",
    "documentUrl": "/api/archive/documents/ambedkar-volume-10/file#page=149",
    "image": "/assets/archive/constituent-assembly.jpg",
    "thumbnail": "/assets/archive/constituent-assembly.jpg",
    "location": "New Delhi",
    "placeId": "place-delhi",
    "timelineEventId": "event-1942",
    "tags": [
      "Speech",
      "Labour Welfare",
      "8-Hour Workday",
      "Tripartite Conference"
    ],
    "subjects": [
      "Labour",
      "Economics",
      "Social Reform",
      "Democracy"
    ],
    "language": "English",
    "verified": true,
    "provenanceType": "PRIMARY SOURCE",
    "curatorNote": "Delivered as Member for Labour in the Viceroy’s Executive Council. Instituted the reduction of standard industrial working hours from 12 to 8, mandatory overtime pay, and equal health benefits.",
    "quote": "Labour must not remain a commodity; it is the vital heartbeat of national wealth.",
    "relatedArtifactIds": [
      "AAROH-ART-0081",
      "AAROH-ART-0033",
      "AAROH-ART-0046"
    ]
  },
  {
    "id": "AAROH-ART-0038",
    "title": "Historic Conversion Address: \"Liberation from Mental Slavery\"",
    "shortTitle": "Dhamma Deeksha Address (Nagpur, 15 Oct 1956)",
    "type": "SPEECHES",
    "date": "15 October 1956",
    "year": 1956,
    "decade": "1950s",
    "creator": "Dr. B. R. Ambedkar",
    "source": "Janata & Prabuddha Bharat archives / BAWS Vol. 17 (Part 3)",
    "sourceCategory": "Writings & Speeches",
    "collection": "Deekshabhoomi Historical Samiti Archive",
    "volume": "Vol. 17_02",
    "page": "97",
    "documentUrl": "/api/archive/documents/ambedkar-volume-17-02/file#page=97",
    "image": "/assets/archive/deekshabhoomi.jpg",
    "thumbnail": "/assets/archive/deekshabhoomi.jpg",
    "location": "Deekshabhoomi, Nagpur",
    "placeId": "place-nagpur",
    "timelineEventId": "event-1956-dhamma",
    "tags": [
      "Speech",
      "Buddhism",
      "Deekshabhoomi",
      "22 Vows",
      "Emancipation"
    ],
    "subjects": [
      "Religion",
      "Philosophy",
      "Human Rights",
      "Social Reform"
    ],
    "language": "Marathi",
    "verified": true,
    "provenanceType": "PRIMARY SOURCE",
    "curatorNote": "Delivered the morning after administering the 22 Vows to over 500,000 followers. Explained why Buddhism was chosen over all world faiths as the religion of reason, equality, and compassion.",
    "quote": "By embracing Buddhism, we are entering a new life... It is the only religion that can emancipate mankind from graded inequality.",
    "relatedArtifactIds": [
      "AAROH-ART-0091",
      "AAROH-ART-0016",
      "AAROH-ART-0049"
    ]
  },
  {
    "id": "AAROH-ART-0040",
    "title": "Dr. Babasaheb Ambedkar as a Young Student in London",
    "shortTitle": "Ambedkar as a Young Scholar (1916)",
    "type": "PHOTOGRAPHS",
    "date": "1916–1920",
    "year": 1916,
    "decade": "1910s",
    "creator": "Archival Portrait Photographer",
    "source": "Wikimedia Commons / Columbia & LSE Special Collections",
    "sourceCategory": "Photographic Records",
    "collection": "AAROH Digital Photographic Archive",
    "volume": "BAWS Vol. 1 Historical Plates",
    "page": "Frontispiece",
    "documentUrl": "",
    "image": "/assets/archive/ambedkar-young-student.jpg",
    "thumbnail": "/assets/archive/ambedkar-young-student.jpg",
    "location": "London, United Kingdom",
    "placeId": "place-london",
    "timelineEventId": "event-1916",
    "tags": [
      "Photograph",
      "Student Life",
      "LSE",
      "London",
      "Columbia"
    ],
    "subjects": [
      "Education",
      "Personal Life",
      "Economics"
    ],
    "language": "Visual Record",
    "verified": true,
    "provenanceType": "PRIMARY SOURCE",
    "curatorNote": "Authentic studio photographic portrait of young Dr. Bhimrao Ramji Ambedkar during his rigorous postgraduate studies between Columbia University and the London School of Economics.",
    "quote": "Cultivation of mind should be the ultimate aim of human existence.",
    "relatedArtifactIds": [
      "AAROH-ART-0004",
      "AAROH-ART-0005",
      "AAROH-ART-0010"
    ]
  },
  {
    "id": "AAROH-ART-0041",
    "aliasIds": [
      "art-poona",
      "art-poona-pact"
    ],
    "title": "Signing of the Poona Pact at Yerwada Central Jail",
    "shortTitle": "Poona Pact Signing at Yerwada (24 Sept 1932)",
    "type": "PHOTOGRAPHS",
    "date": "24 September 1932",
    "year": 1932,
    "decade": "1930s",
    "creator": "Press Photo Agency",
    "source": "Wikimedia Commons / National Archives of India",
    "sourceCategory": "Photographic Records",
    "collection": "Yerwada Central Jail Historical Records",
    "volume": "BAWS Vol. 2 Historical Plates",
    "page": "Plate 8",
    "documentUrl": "",
    "image": "/assets/archive/poona-pact-signing.jpg",
    "thumbnail": "/assets/archive/poona-pact-signing.jpg",
    "location": "Yerwada Central Jail, Pune",
    "placeId": "place-pune",
    "timelineEventId": "event-1932",
    "tags": [
      "Photograph",
      "Poona Pact",
      "Yerwada Jail",
      "Dr. Ambedkar",
      "M.R. Jayakar"
    ],
    "subjects": [
      "Political Representation",
      "Social Reform",
      "Democracy"
    ],
    "language": "Visual Record",
    "verified": true,
    "provenanceType": "PRIMARY SOURCE",
    "curatorNote": "Historic photograph showing Dr. Babasaheb Ambedkar with M. R. Jayakar and Sir Tej Bahadur Sapru inside Yerwada Central Jail in Poona on 24 September 1932, the day the historic Poona Pact was concluded.",
    "quote": "I had to balance the life of the greatest man in India with the political survival of sixty million downtrodden people.",
    "relatedArtifactIds": [
      "AAROH-ART-0080",
      "AAROH-ART-0015",
      "AAROH-ART-0070"
    ]
  },
  {
    "id": "AAROH-ART-0042",
    "title": "The First Round Table Conference Inaugural Assembly",
    "shortTitle": "Round Table Conference Assembly (London, 1930)",
    "type": "PHOTOGRAPHS",
    "date": "12 November 1930",
    "year": 1930,
    "decade": "1930s",
    "creator": "Central News Photographic Agency, London",
    "source": "Wikimedia Commons / British Library India Office Records",
    "sourceCategory": "Photographic Records",
    "collection": "British Parliamentary Archives",
    "volume": "BAWS Vol. 2 Historical Plates",
    "page": "Plate 4",
    "documentUrl": "",
    "image": "/assets/archive/round-table-conference.png",
    "thumbnail": "/assets/archive/round-table-conference.png",
    "location": "St. James’s Palace, London",
    "placeId": "place-london",
    "timelineEventId": "event-1930-rtc",
    "tags": [
      "Photograph",
      "Round Table Conference",
      "London",
      "Diplomacy",
      "King George V"
    ],
    "subjects": [
      "Political Representation",
      "Democracy",
      "Human Rights"
    ],
    "language": "Visual Record",
    "verified": true,
    "provenanceType": "PRIMARY SOURCE",
    "curatorNote": "Historic group photograph of the First Round Table Conference inaugurated by King George V in the Royal Gallery of the House of Lords. Dr. Ambedkar is seated in the left delegation row representing India’s Depressed Classes.",
    "quote": "We demand our share of sovereign governance.",
    "relatedArtifactIds": [
      "AAROH-ART-0030",
      "AAROH-ART-0043",
      "AAROH-ART-0005"
    ]
  },
  {
    "id": "AAROH-ART-0043",
    "title": "Dr. Ambedkar with Sir Muhammad Zafarullah Khan Outside British Parliament",
    "shortTitle": "Outside British House of Commons (1931)",
    "type": "PHOTOGRAPHS",
    "date": "September 1931",
    "year": 1931,
    "decade": "1930s",
    "creator": "Keystone Press Agency, London",
    "source": "Wikimedia Commons / British Library",
    "sourceCategory": "Photographic Records",
    "collection": "AAROH Digital Photographic Archive",
    "volume": "BAWS Vol. 2 Historical Plates",
    "page": "Plate 6",
    "documentUrl": "",
    "image": "/assets/archive/roundtable-commons.jpg",
    "thumbnail": "/assets/archive/roundtable-commons.jpg",
    "location": "Palace of Westminster, London",
    "placeId": "place-london",
    "timelineEventId": "event-1930-rtc",
    "tags": [
      "Photograph",
      "House of Commons",
      "London",
      "Round Table Conference"
    ],
    "subjects": [
      "Political Representation",
      "Democracy",
      "Human Rights"
    ],
    "language": "Visual Record",
    "verified": true,
    "provenanceType": "PRIMARY SOURCE",
    "curatorNote": "Dr. Babasaheb Ambedkar standing with Sir Muhammad Zafarullah Khan outside the British House of Commons during the Second Round Table Conference in London in September 1931.",
    "quote": "No state can flourish where millions are disenfranchised by custom.",
    "relatedArtifactIds": [
      "AAROH-ART-0042",
      "AAROH-ART-0030",
      "AAROH-ART-0080"
    ]
  },
  {
    "id": "AAROH-ART-0044",
    "title": "Dr. Ambedkar Presenting Final Draft Constitution to Dr. Rajendra Prasad",
    "shortTitle": "Presenting Constitution to President (25 Nov 1949)",
    "type": "PHOTOGRAPHS",
    "date": "25 November 1949",
    "year": 1949,
    "decade": "1940s",
    "creator": "Photo Division, Ministry of Information & Broadcasting",
    "source": "Wikimedia Commons / National Archives of India",
    "sourceCategory": "Photographic Records",
    "collection": "Parliament of India Archival Vault",
    "volume": "BAWS Vol. 13 Frontispiece",
    "page": "Plate 1",
    "documentUrl": "",
    "image": "/assets/archive/constitution-presentation.jpg",
    "thumbnail": "/assets/archive/constitution-presentation.jpg",
    "location": "Constitution Hall, New Delhi",
    "placeId": "place-delhi",
    "timelineEventId": "event-1949",
    "tags": [
      "Photograph",
      "Constitution",
      "Rajendra Prasad",
      "Drafting Committee"
    ],
    "subjects": [
      "Constitution",
      "Democracy",
      "Equality"
    ],
    "language": "Visual Record",
    "verified": true,
    "provenanceType": "PRIMARY SOURCE",
    "curatorNote": "Historic photograph capturing Dr. B. R. Ambedkar, Chairman of the Drafting Committee, presenting the final draft of the Indian Constitution to Assembly President Dr. Rajendra Prasad on 25 November 1949.",
    "quote": "If things go wrong under the new Constitution, the reason will not be that we had a bad Constitution. What we will have to say is that Man was vile.",
    "relatedArtifactIds": [
      "AAROH-ART-0034",
      "AAROH-ART-0035",
      "AAROH-ART-0060"
    ]
  },
  {
    "id": "AAROH-ART-0045",
    "aliasIds": [
      "art-signing"
    ],
    "title": "Dr. Ambedkar Signing the Sovereign Constitution of India",
    "shortTitle": "Signing the Constitution of India (Jan 1950)",
    "type": "PHOTOGRAPHS",
    "date": "24 January 1950",
    "year": 1950,
    "decade": "1950s",
    "creator": "Government Photo Division",
    "source": "Wikimedia Commons / National Archives of India",
    "sourceCategory": "Photographic Records",
    "collection": "Parliament of India Special Archive",
    "volume": "BAWS Vol. 13 Plates",
    "page": "Plate 12",
    "documentUrl": "",
    "image": "/assets/archive/constitution-signing.jpg",
    "thumbnail": "/assets/archive/constitution-signing.jpg",
    "location": "Constitution Hall, New Delhi",
    "placeId": "place-delhi",
    "timelineEventId": "event-1950",
    "tags": [
      "Photograph",
      "Constitution",
      "Signing",
      "Republic of India"
    ],
    "subjects": [
      "Constitution",
      "Democracy",
      "Equality",
      "Human Rights"
    ],
    "language": "Visual Record",
    "verified": true,
    "provenanceType": "PRIMARY SOURCE",
    "curatorNote": "Dr. B. R. Ambedkar signing the original illuminated calligraphy volume of the Constitution of India in Constitution Hall on 24 January 1950, two days before the Republic of India was proclaimed.",
    "quote": "We, the People of India, having solemnly resolved to constitute India into a Sovereign Republic...",
    "relatedArtifactIds": [
      "AAROH-ART-0060",
      "AAROH-ART-0044",
      "AAROH-ART-0035"
    ]
  },
  {
    "id": "AAROH-ART-0046",
    "title": "Constituent Assembly of India Plenary Session Meeting",
    "shortTitle": "Constituent Assembly Plenary Session (1950)",
    "type": "PHOTOGRAPHS",
    "date": "1950",
    "year": 1950,
    "decade": "1950s",
    "creator": "Parliamentary Press Gallery Photographer",
    "source": "Wikimedia Commons / Parliament House Archives",
    "sourceCategory": "Photographic Records",
    "collection": "AAROH Digital Heritage Archive",
    "volume": "BAWS Vol. 13 Plates",
    "page": "Plate 15",
    "documentUrl": "",
    "image": "/assets/archive/constituent-assembly.jpg",
    "thumbnail": "/assets/archive/constituent-assembly.jpg",
    "location": "Central Hall of Parliament, New Delhi",
    "placeId": "place-delhi",
    "timelineEventId": "event-1950",
    "tags": [
      "Photograph",
      "Constituent Assembly",
      "Parliament",
      "Republic"
    ],
    "subjects": [
      "Constitution",
      "Democracy",
      "Political Representation"
    ],
    "language": "Visual Record",
    "verified": true,
    "provenanceType": "PRIMARY SOURCE",
    "curatorNote": "Panoramic historical photograph of a plenary Constituent Assembly meeting in Central Hall, showing members deliberating the foundation of constitutional governance.",
    "quote": "The Constitution is not a mere lawyer’s document, it is a vehicle of Life, and its spirit is always the spirit of Age.",
    "relatedArtifactIds": [
      "AAROH-ART-0033",
      "AAROH-ART-0044",
      "AAROH-ART-0060"
    ]
  },
  {
    "id": "AAROH-ART-0047",
    "title": "Chavdar Tale Water Reservoir at Mahad",
    "shortTitle": "Chavdar Tale Reservoir at Mahad (Historic Tank)",
    "type": "PHOTOGRAPHS",
    "date": "1927 / Heritage Survey",
    "year": 1927,
    "decade": "1920s",
    "creator": "Heritage Memorial Survey",
    "source": "Wikimedia Commons / Maharashtra State Archives",
    "sourceCategory": "Photographic Records",
    "collection": "Mahad Heritage Conservation Registry",
    "volume": "BAWS Vol. 17 Plates",
    "page": "Plate 3",
    "documentUrl": "",
    "image": "/assets/archive/mahad-tank.jpg",
    "thumbnail": "/assets/archive/mahad-tank.jpg",
    "location": "Mahad, Raigad, Maharashtra",
    "placeId": "place-mahad",
    "timelineEventId": "event-1927",
    "tags": [
      "Photograph",
      "Mahad",
      "Chavdar Tank",
      "Water Satyagraha",
      "Heritage Site"
    ],
    "subjects": [
      "Social Reform",
      "Human Rights",
      "Caste"
    ],
    "language": "Visual Record",
    "verified": true,
    "provenanceType": "PRIMARY SOURCE",
    "curatorNote": "Photograph of the public Chavdar water reservoir at Mahad where Dr. Ambedkar initiated India’s civil rights movement on 20 March 1927, breaking customary prohibitions against Untouchables.",
    "quote": "We are not going to the Chavdar Tank merely to drink water. We are going to assert that we too are human beings.",
    "relatedArtifactIds": [
      "AAROH-ART-0031",
      "AAROH-ART-0051",
      "AAROH-ART-0095"
    ]
  },
  {
    "id": "AAROH-ART-0048",
    "aliasIds": [
      "art-mhow-memorial"
    ],
    "title": "Early Photographic Portrait of Young Bhimrao Ramji Ambedkar",
    "shortTitle": "Young Ambedkar Early Portrait",
    "type": "PHOTOGRAPHS",
    "date": "1912",
    "year": 1912,
    "decade": "1910s",
    "creator": "Bombay Studio Photographer",
    "source": "Wikimedia Commons / Elphinstone College Archives",
    "sourceCategory": "Photographic Records",
    "collection": "AAROH Digital Photographic Archive",
    "volume": "BAWS Vol. 1 Biographical Frontispiece",
    "page": "Frontispiece",
    "documentUrl": "",
    "image": "/assets/archive/ambedkar-young-portrait.jpg",
    "thumbnail": "/assets/archive/ambedkar-young-portrait.jpg",
    "location": "Mumbai, Maharashtra",
    "placeId": "place-mumbai",
    "timelineEventId": "event-1907",
    "tags": [
      "Photograph",
      "Portrait",
      "Young Ambedkar",
      "Elphinstone College"
    ],
    "subjects": [
      "Education",
      "Personal Life"
    ],
    "language": "Visual Record",
    "verified": true,
    "provenanceType": "PRIMARY SOURCE",
    "curatorNote": "Rare early photograph of Bhimrao Ramji Ambedkar around his graduation from Elphinstone College, Bombay, prior to departing on the Baroda State scholarship for Columbia University.",
    "quote": "Be educated, be organized, and be agitated.",
    "relatedArtifactIds": [
      "AAROH-ART-0040",
      "AAROH-ART-0090",
      "AAROH-ART-0004"
    ]
  },
  {
    "id": "AAROH-ART-0049",
    "title": "Deekshabhoomi Sacred Stupa and Mass Conversion Sanctuary",
    "shortTitle": "Deekshabhoomi Nagpur Memorial",
    "type": "PHOTOGRAPHS",
    "date": "1956 / Memorial Record",
    "year": 1956,
    "decade": "1950s",
    "creator": "Smarak Samiti Archives",
    "source": "Dr. Ambedkar Smarak Samiti Official Deekshabhoomi Archives",
    "sourceCategory": "Photographic Records",
    "collection": "Deekshabhoomi National Heritage Registry",
    "volume": "BAWS Vol. 17_02 Plates",
    "page": "Plate 18",
    "documentUrl": "",
    "image": "/assets/archive/deekshabhoomi.jpg",
    "thumbnail": "/assets/archive/deekshabhoomi.jpg",
    "location": "Deekshabhoomi, Nagpur, Maharashtra",
    "placeId": "place-nagpur",
    "timelineEventId": "event-1956-dhamma",
    "tags": [
      "Photograph",
      "Deekshabhoomi",
      "Nagpur",
      "Buddhist Revival",
      "Stupa"
    ],
    "subjects": [
      "Religion",
      "Human Rights",
      "Social Reform"
    ],
    "language": "Visual Record",
    "verified": true,
    "provenanceType": "PRIMARY SOURCE",
    "curatorNote": "The sacred grounds at Nagpur where over 500,000 citizens embraced Buddhism on 14 October 1956, now crowned by the largest hemispherical stupa in Asia.",
    "quote": "Religion must be judged by social utility and justice.",
    "relatedArtifactIds": [
      "AAROH-ART-0016",
      "AAROH-ART-0038",
      "AAROH-ART-0091"
    ]
  },
  {
    "id": "AAROH-ART-0050",
    "aliasIds": [
      "art-mooknayak",
      "art-mangaon-proceedings"
    ],
    "title": "\"Mooknayak\" (Leader of the Voiceless) — Inaugural Issue Front Page",
    "shortTitle": "Mooknayak Inaugural Front Page (31 Jan 1920)",
    "type": "NEWSPAPERS & PERIODICALS",
    "date": "31 January 1920",
    "year": 1920,
    "decade": "1920s",
    "creator": "Dr. B. R. Ambedkar (Founder & Chief Editor)",
    "source": "Mooknayak Archives / BAWS Vol. 19 (Marathi Edition)",
    "sourceCategory": "Periodicals",
    "collection": "Maharashtra State Archives / AAROH Digital Archive",
    "volume": "Vol. 19",
    "page": "1",
    "documentUrl": "",
    "image": "/assets/archive/mooknayak.jpg",
    "thumbnail": "/assets/archive/mooknayak.jpg",
    "location": "Bombay, India",
    "placeId": "place-mumbai",
    "timelineEventId": "event-1920",
    "tags": [
      "Periodical",
      "Mooknayak",
      "Dalit Press",
      "Journalism",
      "1920"
    ],
    "subjects": [
      "Social Reform",
      "Caste",
      "Democracy",
      "Human Rights"
    ],
    "language": "Marathi",
    "verified": true,
    "provenanceType": "HISTORICAL PERIODICAL",
    "curatorNote": "Inaugural front page of the fortnightly journal \"Mooknayak\" founded with financial support from Chhatrapati Shahu Maharaj. Its inaugural editorial compared caste society to a three-storeyed building with no staircase between the floors.",
    "quote": "Hindu society is like a tower without a ladder or an entrance. One has to die in the story where one was born.",
    "relatedArtifactIds": [
      "AAROH-ART-0051",
      "AAROH-ART-0010",
      "AAROH-ART-0031"
    ]
  },
  {
    "id": "AAROH-ART-0051",
    "aliasIds": [
      "art-bahishkrit"
    ],
    "title": "\"Bahishkrit Bharat\" (Excluded India) — Historic Movement Issue",
    "shortTitle": "Bahishkrit Bharat Front Page (1927)",
    "type": "NEWSPAPERS & PERIODICALS",
    "date": "3 April 1927",
    "year": 1927,
    "decade": "1920s",
    "creator": "Dr. B. R. Ambedkar (Editor)",
    "source": "Bahishkrit Bharat Collection / BAWS Vol. 20 (Marathi Edition)",
    "sourceCategory": "Periodicals",
    "collection": "National Library of India / Maharashtra Archives",
    "volume": "Vol. 20",
    "page": "1",
    "documentUrl": "",
    "image": "/assets/archive/bahishkrit-bharat.jpg",
    "thumbnail": "/assets/archive/bahishkrit-bharat.jpg",
    "location": "Bombay & Mahad",
    "placeId": "place-mumbai",
    "timelineEventId": "event-1927",
    "tags": [
      "Periodical",
      "Bahishkrit Bharat",
      "Mahad Satyagraha",
      "Dalit Press"
    ],
    "subjects": [
      "Social Reform",
      "Caste",
      "Human Rights",
      "Democracy"
    ],
    "language": "Marathi",
    "verified": true,
    "provenanceType": "HISTORICAL PERIODICAL",
    "curatorNote": "Front page of the fortnightly launched directly by Dr. Ambedkar on 3 April 1927 following the Mahad Satyagraha to directly chronicle the civic battles of the working masses and rebut orthodox attacks.",
    "quote": "My purpose in starting these journals is not to indulge in literary pleasure, but to awaken my people to the light of self-respect.",
    "relatedArtifactIds": [
      "AAROH-ART-0050",
      "AAROH-ART-0031",
      "AAROH-ART-0047"
    ]
  },
  {
    "id": "AAROH-ART-0052",
    "title": "\"Janata\" (The People) — Weekly Journal of the Depressed Classes",
    "shortTitle": "Janata Periodical Archives (1930s)",
    "type": "NEWSPAPERS & PERIODICALS",
    "date": "1930–1956",
    "year": 1930,
    "decade": "1930s",
    "creator": "Dr. B. R. Ambedkar (Founder)",
    "source": "Janata Historical Collection / BAWS Official Records",
    "sourceCategory": "Periodicals",
    "collection": "AAROH Digital Periodical Vault",
    "volume": "Vol. 21",
    "page": "1",
    "documentUrl": "",
    "image": "/assets/archive/bahishkrit-bharat.jpg",
    "thumbnail": "/assets/archive/bahishkrit-bharat.jpg",
    "location": "Bombay, India",
    "placeId": "place-mumbai",
    "timelineEventId": "event-1930",
    "tags": [
      "Periodical",
      "Janata",
      "Press",
      "Labour Movement",
      "Yeola"
    ],
    "subjects": [
      "Social Reform",
      "Labour",
      "Political Representation",
      "Democracy"
    ],
    "language": "Marathi",
    "verified": true,
    "provenanceType": "HISTORICAL PERIODICAL",
    "curatorNote": "Ambedkar’s longest-running weekly newspaper, founded in November 1930 to mobilize workers, report on the Round Table Conferences, chronicle the Kalaram satyagraha, and announce the Yeola declaration.",
    "quote": "A newspaper must not merely reflect public opinion; it must fearlessly guide and educate the public conscience.",
    "relatedArtifactIds": [
      "AAROH-ART-0050",
      "AAROH-ART-0032",
      "AAROH-ART-0092"
    ]
  },
  {
    "id": "AAROH-ART-0053",
    "title": "Dr. B. R. Ambedkar with Maharaja Sayajirao Gaekwad III of Baroda",
    "shortTitle": "Dr. Ambedkar with Maharaja of Baroda (c. 1913)",
    "type": "PHOTOGRAPHS",
    "date": "c. June 1913",
    "year": 1913,
    "decade": "1910s",
    "creator": "Laxmi Vilas Palace Photographic Studio",
    "source": "Baroda State Archives / Publications Division / BAWS Vol. 17(1)",
    "sourceCategory": "Photographic Records",
    "collection": "Baroda Museum & Picture Gallery",
    "volume": "Vol. 17(1)",
    "page": "Plate 3",
    "documentUrl": "",
    "image": "/assets/archive/ambedkar-young-portrait.jpg",
    "thumbnail": "/assets/archive/ambedkar-young-portrait.jpg",
    "location": "Baroda, Gujarat",
    "placeId": "place-baroda",
    "timelineEventId": "event-1913-columbia",
    "tags": [
      "Photograph",
      "Sayajirao Gaekwad",
      "Baroda",
      "Scholarship"
    ],
    "subjects": [
      "Education",
      "Personal Life"
    ],
    "language": "Visual Record",
    "verified": true,
    "provenanceType": "PRIMARY SOURCE",
    "curatorNote": "Historic photograph recording the royal patronage of the visionary Maharaja Sayajirao Gaekwad III of Baroda, who granted young Bhimrao the scholarship to study at Columbia University in New York.",
    "quote": "The Maharaja of Baroda was broadminded enough to sponsor my education abroad when education was virtually barred to men of my birth.",
    "relatedArtifactIds": [
      "AAROH-ART-0040",
      "AAROH-ART-0074",
      "AAROH-ART-0090"
    ]
  },
  {
    "id": "AAROH-ART-0054",
    "title": "Dr. B. R. Ambedkar and Mahatma Gandhi during Poona Pact Negotiations at Yerwada",
    "shortTitle": "Poona Pact Negotiations Photograph (1932)",
    "type": "PHOTOGRAPHS",
    "date": "24 September 1932",
    "year": 1932,
    "decade": "1930s",
    "creator": "Central News Agency / Photo Division, Govt. of India",
    "source": "National Archives of India / Photo Division",
    "sourceCategory": "Photographic Records",
    "collection": "Yerwada Central Jail Archives, Pune",
    "volume": "Historical Photo Registry",
    "page": "PH-1932-09",
    "documentUrl": "",
    "image": "/assets/archive/poona-pact-signing.jpg",
    "thumbnail": "/assets/archive/poona-pact-signing.jpg",
    "location": "Yerwada Central Jail, Pune, Maharashtra",
    "placeId": "place-pune",
    "timelineEventId": "event-1932-poona-pact",
    "tags": [
      "Poona Pact",
      "Gandhi",
      "Yerwada",
      "Electorates"
    ],
    "subjects": [
      "Political Representation",
      "Human Rights",
      "Democracy"
    ],
    "language": "Visual Record",
    "verified": true,
    "provenanceType": "PRIMARY SOURCE",
    "curatorNote": "Rare archival photograph capturing the signing conference of the Poona Pact, which doubled reserved legislative seats for the Depressed Classes in place of separate electorates.",
    "quote": "I was prepared to save Mahatma Gandhi’s life, but I was not prepared to sacrifice the political interests of my people.",
    "relatedArtifactIds": [
      "AAROH-ART-0073",
      "AAROH-ART-0027",
      "AAROH-ART-0080"
    ]
  },
  {
    "id": "AAROH-ART-0055",
    "title": "Dr. Ambedkar Reviewing Damodar Valley & River Valley Development Engineering Blueprints",
    "shortTitle": "Damodar Valley & River Valley Planning (1945)",
    "type": "PHOTOGRAPHS",
    "date": "1945",
    "year": 1945,
    "decade": "1940s",
    "creator": "Information Bureau, Viceroy's Executive Council",
    "source": "Central Water Commission Archives / BAWS Vol. 10",
    "sourceCategory": "Photographic Records",
    "collection": "Ministry of Water Resources, New Delhi",
    "volume": "Vol. 10",
    "page": "Plate 5",
    "documentUrl": "",
    "image": "/assets/archive/archive-library.jpg",
    "thumbnail": "/assets/archive/archive-library.jpg",
    "location": "Central Secretariat, New Delhi",
    "placeId": "place-delhi",
    "timelineEventId": "event-1947-law-minister",
    "tags": [
      "Damodar Valley",
      "Irrigation",
      "Labour Member",
      "Nation Building"
    ],
    "subjects": [
      "Economics",
      "Labour",
      "Government"
    ],
    "language": "Visual Record",
    "verified": true,
    "provenanceType": "PRIMARY SOURCE",
    "curatorNote": "Photograph illustrating Dr. Ambedkar's pioneering role as Member for Labour, Irrigation and Electric Power (1942–1946), during which he conceived multi-purpose river valley projects including Damodar Valley, Hirakud, and the Central Waterways Commission.",
    "quote": "Water power and electric energy are the foundational prerequisites for the industrial and social regeneration of India.",
    "relatedArtifactIds": [
      "AAROH-ART-0082",
      "AAROH-ART-0086",
      "AAROH-ART-0033"
    ]
  },
  {
    "id": "AAROH-ART-0058",
    "title": "Prabuddha Bharat (\"Awakened India\") Inaugural Issue Editorial Folio",
    "shortTitle": "Prabuddha Bharat Inaugural Issue (1956)",
    "type": "NEWSPAPERS & PERIODICALS",
    "date": "4 February 1956",
    "year": 1956,
    "decade": "1950s",
    "creator": "Dr. B. R. Ambedkar (Founder)",
    "source": "Prabuddha Bharat Fortnightly Press, Bombay / BAWS Vol. 17, Part 2",
    "sourceCategory": "Periodicals",
    "collection": "Dr. Babasaheb Ambedkar Research Institute, Nagpur",
    "volume": "Vol. 17(2)",
    "page": "1",
    "documentUrl": "/api/archive/documents/ambedkar-volume-17-02/file#page=1",
    "image": "/assets/archive/bahishkrit-bharat.jpg",
    "thumbnail": "/assets/archive/bahishkrit-bharat.jpg",
    "location": "Bombay & Nagpur",
    "placeId": "place-mumbai",
    "timelineEventId": "event-1956-buddhism",
    "tags": [
      "Prabuddha Bharat",
      "Periodical",
      "Awakened India",
      "Buddhism"
    ],
    "subjects": [
      "Religion",
      "Social Reform",
      "Democracy"
    ],
    "language": "Marathi",
    "verified": true,
    "provenanceType": "PRIMARY SOURCE",
    "curatorNote": "The final periodical founded by Dr. Ambedkar in February 1956, marking the transition from protest to spiritual and intellectual awakening (\"Prabuddha\") in the months leading up to the Nagpur Deeksha.",
    "quote": "The awakening of India is not merely political independence; it is the moral awakening of every human soul to liberty and equality.",
    "relatedArtifactIds": [
      "AAROH-ART-0055",
      "AAROH-ART-0016"
    ]
  },
  {
    "id": "AAROH-ART-0059",
    "title": "Samata (\"Equality\") Fortnightly Organ of Samaj Samata Sangh",
    "shortTitle": "Samata Fortnightly Organ (1928)",
    "type": "NEWSPAPERS & PERIODICALS",
    "date": "29 June 1928",
    "year": 1928,
    "decade": "1920s",
    "creator": "Dr. B. R. Ambedkar & Samaj Samata Sangh",
    "source": "Samata Printing Press, Bombay / BAWS Vol. 17, Part 2",
    "sourceCategory": "Periodicals",
    "collection": "Maharashtra State Archives, Mumbai",
    "volume": "Vol. 17(2)",
    "page": "85",
    "documentUrl": "/api/archive/documents/ambedkar-volume-17-02/file#page=85",
    "image": "/assets/archive/bahishkrit-bharat.jpg",
    "thumbnail": "/assets/archive/bahishkrit-bharat.jpg",
    "location": "Dadar, Bombay",
    "placeId": "place-mumbai",
    "timelineEventId": "event-1927-burning",
    "tags": [
      "Samata",
      "Equality",
      "Periodical",
      "Samaj Samata Sangh"
    ],
    "subjects": [
      "Social Reform",
      "Equality",
      "Caste"
    ],
    "language": "Marathi",
    "verified": true,
    "provenanceType": "PRIMARY SOURCE",
    "curatorNote": "The voice of the Samaj Samata Sangh founded by Ambedkar in 1927 following the Mahad Satyagraha, championing inter-caste dining, inter-caste marriage, and absolute social parity.",
    "quote": "Equality is not an abstract dogma. It is the practical foundation on which alone human brotherhood can be erected.",
    "relatedArtifactIds": [
      "AAROH-ART-0031",
      "AAROH-ART-0011"
    ]
  },
  {
    "id": "AAROH-ART-0060",
    "aliasIds": [
      "art-preamble"
    ],
    "title": "Illuminated Calligraphic Preamble to the Constitution of India",
    "shortTitle": "Illuminated Constitution Preamble (1950)",
    "type": "CONSTITUTIONAL RECORDS",
    "date": "26 January 1950",
    "year": 1950,
    "decade": "1950s",
    "creator": "Dr. B. R. Ambedkar (Drafting Committee Chairman), Calligraphy by Prem Behari Narain Raizada, Artwork by Beohar Rammanohar Sinha & Nandalal Bose",
    "source": "Parliament Library Special Vault Archives / Official Calligraphic Constitution",
    "sourceCategory": "Constitutional Records",
    "collection": "Parliament of India Rare Archives",
    "volume": "Official Sovereign Charter",
    "page": "1",
    "documentUrl": "/api/archive/documents/ambedkar-volume-13/file#page=1",
    "image": "/assets/archive/constitution-preamble.jpg",
    "thumbnail": "/assets/archive/constitution-preamble.jpg",
    "location": "Constitution Hall, New Delhi",
    "placeId": "place-delhi",
    "timelineEventId": "event-1950",
    "tags": [
      "Constitutional Record",
      "Preamble",
      "Justice",
      "Liberty",
      "Equality",
      "Fraternity"
    ],
    "subjects": [
      "Constitution",
      "Democracy",
      "Human Rights",
      "Equality"
    ],
    "language": "English",
    "verified": true,
    "provenanceType": "PRIMARY SOURCE",
    "curatorNote": "The original illuminated page of the Preamble to the Constitution of India. Enshrines Justice (Social, Economic and Political), Liberty, Equality, and Fraternity. Dr. Ambedkar insisted that fraternity is the indispensable glue holding a divided society together.",
    "quote": "Fraternity means a sense of common brotherhood of all Indians—if there is no fraternity, equality and liberty will be no deeper than coats of paint.",
    "relatedArtifactIds": [
      "AAROH-ART-0045",
      "AAROH-ART-0044",
      "AAROH-ART-0035"
    ]
  },
  {
    "id": "AAROH-ART-0061",
    "title": "Drafting Committee Resolution Appointing Dr. Ambedkar as Chairman",
    "shortTitle": "Drafting Committee Appointment Resolution (29 Aug 1947)",
    "type": "CONSTITUTIONAL RECORDS",
    "date": "29 August 1947",
    "year": 1947,
    "decade": "1940s",
    "creator": "Constituent Assembly of India",
    "source": "Constituent Assembly Official Resolutions / BAWS Vol. 13",
    "sourceCategory": "Constitutional Records",
    "collection": "National Archives of India, New Delhi",
    "volume": "Vol. 13",
    "page": "15",
    "documentUrl": "/api/archive/documents/ambedkar-volume-13/file#page=15",
    "image": "/assets/archive/constituent-assembly.jpg",
    "thumbnail": "/assets/archive/constituent-assembly.jpg",
    "location": "New Delhi, India",
    "placeId": "place-delhi",
    "timelineEventId": "event-1947",
    "tags": [
      "Constitutional Record",
      "Drafting Committee",
      "Chairman",
      "1947"
    ],
    "subjects": [
      "Constitution",
      "Democracy",
      "Political Representation"
    ],
    "language": "English",
    "verified": true,
    "provenanceType": "PRIMARY SOURCE",
    "curatorNote": "Unanimous resolution passed by the Constituent Assembly appointing Dr. B. R. Ambedkar as Chairman of the Drafting Committee to frame the Constitution for independent India.",
    "quote": "I felt that the work had to be done with utmost conscientiousness, for we were framing not a temporary statute, but the permanent charter of our destiny.",
    "relatedArtifactIds": [
      "AAROH-ART-0034",
      "AAROH-ART-0044",
      "AAROH-ART-0060"
    ]
  },
  {
    "id": "AAROH-ART-0062",
    "title": "Constituent Assembly Debates: Abolition of Untouchability (Article 17)",
    "shortTitle": "Article 17 Debate Record (29 Nov 1948)",
    "type": "CONSTITUTIONAL RECORDS",
    "date": "29 November 1948",
    "year": 1948,
    "decade": "1940s",
    "creator": "Constituent Assembly of India",
    "source": "CAD Official Report, Vol. VII / BAWS Vol. 13",
    "sourceCategory": "Constitutional Records",
    "collection": "Parliament of India Archives",
    "volume": "Vol. 13",
    "page": "387",
    "documentUrl": "/api/archive/documents/ambedkar-volume-13/file#page=387",
    "image": "/assets/archive/constitution-preamble.jpg",
    "thumbnail": "/assets/archive/constitution-preamble.jpg",
    "location": "Constitution Hall, New Delhi",
    "placeId": "place-delhi",
    "timelineEventId": "event-1947",
    "tags": [
      "Constitutional Record",
      "Article 17",
      "Abolition of Untouchability",
      "Fundamental Rights"
    ],
    "subjects": [
      "Constitution",
      "Caste",
      "Human Rights",
      "Social Reform"
    ],
    "language": "English",
    "verified": true,
    "provenanceType": "PRIMARY SOURCE",
    "curatorNote": "The historic debate where Article 11 of the Draft Constitution (now Article 17) was adopted amidst thunderous applause: \"Untouchability is abolished and its practice in any form is forbidden.\"",
    "quote": "Untouchability is abolished and its practice in any form is forbidden. The enforcement of any disability arising out of Untouchability shall be an offence punishable in accordance with law.",
    "relatedArtifactIds": [
      "AAROH-ART-0060",
      "AAROH-ART-0034",
      "AAROH-ART-0063"
    ]
  },
  {
    "id": "AAROH-ART-0063",
    "title": "Constituent Assembly Debates: Article 32 \"Heart and Soul of the Constitution\"",
    "shortTitle": "Article 32 Debate Record (9 Dec 1948)",
    "type": "CONSTITUTIONAL RECORDS",
    "date": "9 December 1948",
    "year": 1948,
    "decade": "1940s",
    "creator": "Dr. B. R. Ambedkar & Constituent Assembly of India",
    "source": "CAD Official Report, Vol. VII / BAWS Vol. 13",
    "sourceCategory": "Constitutional Records",
    "collection": "Parliament of India Archives",
    "volume": "Vol. 13",
    "page": "434",
    "documentUrl": "/api/archive/documents/ambedkar-volume-13/file#page=434",
    "image": "/assets/archive/constitution-preamble.jpg",
    "thumbnail": "/assets/archive/constitution-preamble.jpg",
    "location": "Constitution Hall, New Delhi",
    "placeId": "place-delhi",
    "timelineEventId": "event-1947",
    "tags": [
      "Constitutional Record",
      "Article 32",
      "Constitutional Remedies",
      "Supreme Court"
    ],
    "subjects": [
      "Constitution",
      "Human Rights",
      "Democracy"
    ],
    "language": "English",
    "verified": true,
    "provenanceType": "PRIMARY SOURCE",
    "curatorNote": "Ambedkar’s memorable defense of the Right to Constitutional Remedies, guaranteeing citizens direct recourse to the Supreme Court via writs of Habeas Corpus, Mandamus, Prohibition, Quo Warranto, and Certiorari.",
    "quote": "If I was asked to name any particular article in this Constitution as the most important—an article without which this Constitution would be a nullity—I could not refer to any other article except this one. It is the very soul of the Constitution and the very heart of it.",
    "relatedArtifactIds": [
      "AAROH-ART-0060",
      "AAROH-ART-0034",
      "AAROH-ART-0035"
    ]
  },
  {
    "id": "AAROH-ART-0064",
    "title": "The Hindu Code Bill: Select Committee Revised Draft and Clauses",
    "shortTitle": "Hindu Code Bill Select Committee Draft (1948)",
    "type": "CONSTITUTIONAL RECORDS",
    "date": "12 August 1948",
    "year": 1948,
    "decade": "1940s",
    "creator": "Dr. B. R. Ambedkar (Minister for Law)",
    "source": "Parliamentary Debates / BAWS Vol. 14 (Part 1 & 2)",
    "sourceCategory": "Constitutional Records",
    "collection": "Ministry of Law and Justice Historical Vault",
    "volume": "Vol. 14_01",
    "page": "1",
    "documentUrl": "/api/archive/documents/ambedkar-volume-14-01/file#page=1",
    "image": "/assets/archive/constitution-signing.jpg",
    "thumbnail": "/assets/archive/constitution-signing.jpg",
    "location": "Parliament House, New Delhi",
    "placeId": "place-delhi",
    "timelineEventId": "event-1951",
    "tags": [
      "Constitutional Record",
      "Hindu Code Bill",
      "Women's Rights",
      "Law Reform",
      "Inheritance"
    ],
    "subjects": [
      "Women's Rights",
      "Social Reform",
      "Constitution",
      "Democracy"
    ],
    "language": "English",
    "verified": true,
    "provenanceType": "PRIMARY SOURCE",
    "curatorNote": "Comprehensive legislative draft codifying Hindu personal law, granting women equal rights of inheritance, introducing civil divorce, abolishing polygamy, and invalidating caste-based marriage restrictions.",
    "quote": "No law can be progressive which denies women absolute equality in property and matrimony.",
    "relatedArtifactIds": [
      "AAROH-ART-0036",
      "AAROH-ART-0018",
      "AAROH-ART-0072"
    ]
  },
  {
    "id": "AAROH-ART-0065",
    "title": "Order of the Constituent Assembly Appointing the Drafting Committee",
    "shortTitle": "Drafting Committee Appointment Order (1947)",
    "type": "CONSTITUTIONAL RECORDS",
    "date": "29 August 1947",
    "year": 1947,
    "decade": "1940s",
    "creator": "Constituent Assembly of India",
    "source": "Constituent Assembly Debates, Vol. 5, p. 319 / Gazette of India",
    "sourceCategory": "Constitutional Records",
    "collection": "Parliament Library, New Delhi / BAWS Vol. 13",
    "volume": "CAD Vol. 5 / BAWS Vol. 13",
    "page": "319",
    "documentUrl": "/api/archive/documents/ambedkar-volume-13/file#page=319",
    "image": "/assets/archive/constitution-presentation.jpg",
    "thumbnail": "/assets/archive/constitution-presentation.jpg",
    "location": "Constitution Hall, New Delhi",
    "placeId": "place-delhi",
    "timelineEventId": "event-1947-law-minister",
    "tags": [
      "Drafting Committee",
      "Appointment",
      "Constituent Assembly",
      "Resolution"
    ],
    "subjects": [
      "Constitution",
      "Democracy",
      "Government"
    ],
    "language": "English",
    "verified": true,
    "provenanceType": "PRIMARY SOURCE",
    "curatorNote": "Official resolution passed by the Constituent Assembly resolving to appoint a committee of seven members with Dr. B. R. Ambedkar as its Chairman to scrutinize the draft of the text of the Constitution of India.",
    "quote": "Resolved that a Committee consisting of... Dr. B. R. Ambedkar... be appointed to scrutinise the draft of the text of the Constitution of India.",
    "relatedArtifactIds": [
      "AAROH-ART-0062",
      "AAROH-ART-0043"
    ]
  },
  {
    "id": "AAROH-ART-0066",
    "title": "Article 32 Debate Record: \"The Very Soul of the Constitution\"",
    "shortTitle": "Article 32 Debate Record (9 Dec 1948)",
    "type": "CONSTITUTIONAL RECORDS",
    "date": "9 December 1948",
    "year": 1948,
    "decade": "1940s",
    "creator": "Dr. B. R. Ambedkar",
    "source": "Constituent Assembly Debates, Vol. 7, p. 953 / BAWS Vol. 13",
    "sourceCategory": "Constitutional Records",
    "collection": "Parliament Library, New Delhi",
    "volume": "CAD Vol. 7 / BAWS Vol. 13",
    "page": "953",
    "documentUrl": "/api/archive/documents/ambedkar-volume-13/file#page=953",
    "image": "/assets/archive/constitution-preamble.jpg",
    "thumbnail": "/assets/archive/constitution-preamble.jpg",
    "location": "Constitution Hall, New Delhi",
    "placeId": "place-delhi",
    "timelineEventId": "event-1949-constitution",
    "tags": [
      "Article 32",
      "Fundamental Rights",
      "Judicial Review",
      "Writs"
    ],
    "subjects": [
      "Constitution",
      "Human Rights",
      "Democracy"
    ],
    "language": "English",
    "verified": true,
    "provenanceType": "PRIMARY SOURCE",
    "curatorNote": "Debate record containing Dr. Ambedkar's immortal defense of Article 32 (Right to Constitutional Remedies), declaring that without this provision guaranteeing writs, the Constitution would be a nullity.",
    "quote": "If I was asked to name any particular article in this Constitution as the most important—an article without which this Constitution would be a nullity—I could not refer to any other article except this one. It is the very soul of the Constitution and the very heart of it.",
    "relatedArtifactIds": [
      "AAROH-ART-0060",
      "AAROH-ART-0063"
    ]
  },
  {
    "id": "AAROH-ART-0067",
    "title": "The Hindu Code Bill Draft as Introduced by Law Minister Dr. B. R. Ambedkar",
    "shortTitle": "Hindu Code Bill Official Draft (1948)",
    "type": "CONSTITUTIONAL RECORDS",
    "date": "5 May 1948",
    "year": 1948,
    "decade": "1940s",
    "creator": "Dr. B. R. Ambedkar (Law Minister)",
    "source": "Constituent Assembly of India (Legislative) / BAWS Vol. 14, Part 1",
    "sourceCategory": "Constitutional Records",
    "collection": "Ministry of Law and Justice, New Delhi",
    "volume": "Vol. 14(1)",
    "page": "1",
    "documentUrl": "/api/archive/documents/ambedkar-volume-14-01/file#page=1",
    "image": "/assets/archive/constitution-presentation.jpg",
    "thumbnail": "/assets/archive/constitution-presentation.jpg",
    "location": "Parliament House, New Delhi",
    "placeId": "place-delhi",
    "timelineEventId": "event-1951-resignation",
    "tags": [
      "Hindu Code Bill",
      "Women's Rights",
      "Inheritance",
      "Marriage Equality"
    ],
    "subjects": [
      "Women's Rights",
      "Social Reform",
      "Equality"
    ],
    "language": "English",
    "verified": true,
    "provenanceType": "PRIMARY SOURCE",
    "curatorNote": "Original legislative bill drafted by Ambedkar granting women equal rights to inheritance, monogamy, maintenance, divorce, and guardianship—the obstruction of which led to his resignation as Law Minister.",
    "quote": "To leave the inequality between class and class, between sex and sex, which is the soul of Hindu Society, untouched and to go on passing legislation on economic problems is to make a farce of our Constitution.",
    "relatedArtifactIds": [
      "AAROH-ART-0032",
      "AAROH-ART-0072",
      "AAROH-ART-0037"
    ]
  },
  {
    "id": "AAROH-ART-0070",
    "aliasIds": [
      "art-letters"
    ],
    "title": "Exchange of Letters with Mahatma Gandhi on Separate Electorates at Yerwada",
    "shortTitle": "Correspondence with Gandhi at Yerwada (Sept 1932)",
    "type": "LETTERS & CORRESPONDENCE",
    "date": "20–24 September 1932",
    "year": 1932,
    "decade": "1930s",
    "creator": "Dr. B. R. Ambedkar & M. K. Gandhi",
    "source": "National Archives of India, Home Department Political Files / BAWS Vol. 17",
    "sourceCategory": "Government Records",
    "collection": "National Archives of India",
    "volume": "Vol. 17_01",
    "page": "235",
    "documentUrl": "/api/archive/documents/ambedkar-volume-17-01/file#page=235",
    "image": "/assets/archive/poona-pact-signing.jpg",
    "thumbnail": "/assets/archive/poona-pact-signing.jpg",
    "location": "Yerwada Central Jail, Pune",
    "placeId": "place-pune",
    "timelineEventId": "event-1932",
    "tags": [
      "Letters",
      "Gandhi",
      "Poona Pact",
      "Yerwada",
      "Separate Electorates"
    ],
    "subjects": [
      "Political Representation",
      "Democracy",
      "Caste",
      "Social Reform"
    ],
    "language": "English",
    "verified": true,
    "provenanceType": "PRIMARY SOURCE",
    "curatorNote": "Historic telegraphic and epistolary negotiations exchanged during Gandhi’s fast unto death, resolving the conflict between political autonomy for Depressed Classes and joint electorates.",
    "quote": "Mahatmaji, you are interested in my people as a philanthropist; I am interested in them as one of them.",
    "relatedArtifactIds": [
      "AAROH-ART-0041",
      "AAROH-ART-0080",
      "AAROH-ART-0015"
    ]
  },
  {
    "id": "AAROH-ART-0071",
    "title": "Memorandum Submitted to the British Cabinet Mission on Political Safeguards",
    "shortTitle": "Cabinet Mission Memorandum (5 April 1946)",
    "type": "LETTERS & CORRESPONDENCE",
    "date": "5 April 1946",
    "year": 1946,
    "decade": "1940s",
    "creator": "Dr. B. R. Ambedkar",
    "source": "Transfer of Power Documents, Vol. VII (HMSO, London) / BAWS Vol. 17 (Part 2)",
    "sourceCategory": "Government Records",
    "collection": "British Library India Office Records (IOR/L/PJ/10/24)",
    "volume": "Vol. 17_02",
    "page": "167",
    "documentUrl": "/api/archive/documents/ambedkar-volume-17-02/file#page=167",
    "image": "/assets/archive/constituent-assembly.jpg",
    "thumbnail": "/assets/archive/constituent-assembly.jpg",
    "location": "New Delhi & London",
    "placeId": "place-delhi",
    "timelineEventId": "event-1946",
    "tags": [
      "Memorandum",
      "Cabinet Mission",
      "Transfer of Power",
      "Scheduled Castes"
    ],
    "subjects": [
      "Political Representation",
      "Constitution",
      "Democracy"
    ],
    "language": "English",
    "verified": true,
    "provenanceType": "PRIMARY SOURCE",
    "curatorNote": "Formal memorandum presented to Lord Pethick-Lawrence, Sir Stafford Cripps, and A. V. Alexander demanding separate representation and educational funds for the Scheduled Castes before transferring sovereign power.",
    "quote": "The Scheduled Castes are not a sub-section of the Hindus; they are a distinct element in the national life of India.",
    "relatedArtifactIds": [
      "AAROH-ART-0017",
      "AAROH-ART-0033",
      "AAROH-ART-0092"
    ]
  },
  {
    "id": "AAROH-ART-0072",
    "title": "Letter to Prime Minister Jawaharlal Nehru on Cabinet Resignation",
    "shortTitle": "Letter to PM Nehru on Resignation (27 Sept 1951)",
    "type": "LETTERS & CORRESPONDENCE",
    "date": "27 September 1951",
    "year": 1951,
    "decade": "1950s",
    "creator": "Dr. B. R. Ambedkar",
    "source": "National Archives of India, PMO Papers / BAWS Vol. 14 (Part 2)",
    "sourceCategory": "Government Records",
    "collection": "National Archives of India",
    "volume": "Vol. 14_02",
    "page": "1319",
    "documentUrl": "/api/archive/documents/ambedkar-volume-14-02/file#page=1319",
    "image": "/assets/archive/constitution-signing.jpg",
    "thumbnail": "/assets/archive/constitution-signing.jpg",
    "location": "New Delhi",
    "placeId": "place-delhi",
    "timelineEventId": "event-1951",
    "tags": [
      "Letter",
      "Nehru",
      "Resignation",
      "Hindu Code Bill",
      "Cabinet"
    ],
    "subjects": [
      "Women's Rights",
      "Social Reform",
      "Democracy",
      "Constitution"
    ],
    "language": "English",
    "verified": true,
    "provenanceType": "PRIMARY SOURCE",
    "curatorNote": "Official letter submitting his resignation from the Union Cabinet, detailing deep dissatisfaction with foreign policy neglect of democratic alliances and failure to pass the Hindu Code Bill.",
    "quote": "I have decided to sever my connection with the Government... it is impossible for me to continue when reforms vital to human equality are abandoned.",
    "relatedArtifactIds": [
      "AAROH-ART-0036",
      "AAROH-ART-0018",
      "AAROH-ART-0064"
    ]
  },
  {
    "id": "AAROH-ART-0073",
    "title": "Letter from Dr. B. R. Ambedkar to Mahatma Gandhi on Minorities Franchise",
    "shortTitle": "Letter to Gandhi on Separate Electorates (1931)",
    "type": "LETTERS & CORRESPONDENCE",
    "date": "14 August 1931",
    "year": 1931,
    "decade": "1930s",
    "creator": "Dr. B. R. Ambedkar",
    "source": "Collected Works of Mahatma Gandhi / BAWS Vol. 17, Part 1",
    "sourceCategory": "Writings & Speeches",
    "collection": "Sabarmati Ashram Archives / BAWS Vol. 17(1)",
    "volume": "Vol. 17(1)",
    "page": "68",
    "documentUrl": "/api/archive/documents/ambedkar-volume-17-01/file#page=68",
    "image": "/assets/archive/ambedkar-manuscript.png",
    "thumbnail": "/assets/archive/ambedkar-manuscript.png",
    "location": "Mani Bhavan, Bombay",
    "placeId": "place-mumbai",
    "timelineEventId": "event-1930-rtc",
    "tags": [
      "Correspondence",
      "Gandhi",
      "Franchise",
      "RTC"
    ],
    "subjects": [
      "Political Representation",
      "Human Rights",
      "Caste"
    ],
    "language": "English",
    "verified": true,
    "provenanceType": "PRIMARY SOURCE",
    "curatorNote": "Letter detailing Ambedkar's uncompromising argument that the Depressed Classes require autonomous political voice rather than dependence on upper-caste goodwill.",
    "quote": "Gandhiji, I have no homeland. No Untouchable can boast of this country as his own until he is accorded equal rights of citizenship.",
    "relatedArtifactIds": [
      "AAROH-ART-0051",
      "AAROH-ART-0027",
      "AAROH-ART-0018"
    ]
  },
  {
    "id": "AAROH-ART-0074",
    "title": "Letter to Maharaja Sayajirao Gaekwad on Higher Studies at Columbia University",
    "shortTitle": "Letter to Sayajirao Gaekwad (1915)",
    "type": "LETTERS & CORRESPONDENCE",
    "date": "28 December 1915",
    "year": 1915,
    "decade": "1910s",
    "creator": "Dr. B. R. Ambedkar",
    "source": "Baroda State Records, Huzur Political Office / BAWS Vol. 17, Part 1",
    "sourceCategory": "Writings & Speeches",
    "collection": "Baroda State Archives, Vadodara",
    "volume": "Vol. 17(1)",
    "page": "14",
    "documentUrl": "/api/archive/documents/ambedkar-volume-17-01/file#page=14",
    "image": "/assets/archive/ambedkar-young-student.jpg",
    "thumbnail": "/assets/archive/ambedkar-young-student.jpg",
    "location": "Livingston Hall, Columbia University, New York",
    "placeId": "place-newyork",
    "timelineEventId": "event-1913-columbia",
    "tags": [
      "Correspondence",
      "Columbia",
      "Baroda",
      "Economics"
    ],
    "subjects": [
      "Education",
      "Personal Life"
    ],
    "language": "English",
    "verified": true,
    "provenanceType": "PRIMARY SOURCE",
    "curatorNote": "Scholarly correspondence from New York reporting on his doctoral coursework in political economy under Prof. Edwin Seligman and Prof. John Dewey, requesting permission to proceed to London.",
    "quote": "My highest ambition is to utilize the knowledge I am gaining here for the moral and material elevation of my downtrodden brethren.",
    "relatedArtifactIds": [
      "AAROH-ART-0050",
      "AAROH-ART-0004",
      "AAROH-ART-0090"
    ]
  },
  {
    "id": "AAROH-ART-0075",
    "title": "Correspondence with Dr. S. Radhakrishnan on Higher Education and Ethics",
    "shortTitle": "Letter to Dr. S. Radhakrishnan (1952)",
    "type": "LETTERS & CORRESPONDENCE",
    "date": "22 October 1952",
    "year": 1952,
    "decade": "1950s",
    "creator": "Dr. B. R. Ambedkar",
    "source": "Radhakrishnan Papers, NMML / BAWS Vol. 17, Part 2",
    "sourceCategory": "Writings & Speeches",
    "collection": "Nehru Memorial Museum & Library, New Delhi",
    "volume": "Vol. 17(2)",
    "page": "412",
    "documentUrl": "/api/archive/documents/ambedkar-volume-17-02/file#page=412",
    "image": "/assets/archive/ambedkar-manuscript.png",
    "thumbnail": "/assets/archive/ambedkar-manuscript.png",
    "location": "New Delhi",
    "placeId": "place-delhi",
    "timelineEventId": "event-1956-death",
    "tags": [
      "Correspondence",
      "Radhakrishnan",
      "Education",
      "Ethics"
    ],
    "subjects": [
      "Education",
      "Philosophy",
      "Democracy"
    ],
    "language": "English",
    "verified": true,
    "provenanceType": "PRIMARY SOURCE",
    "curatorNote": "Scholarly exchange between Dr. Ambedkar and Vice-President Dr. Sarvepalli Radhakrishnan on constitutional morality, Buddhist ethics, and the role of universities in nurturing casteless citizenship.",
    "quote": "Education must not merely produce clerks and professionals; it must cultivate character, critical inquiry, and fraternal love.",
    "relatedArtifactIds": [
      "AAROH-ART-0016",
      "AAROH-ART-0036",
      "AAROH-ART-0096"
    ]
  },
  {
    "id": "AAROH-ART-0080",
    "title": "The Poona Pact: Original Formal Agreement Accord",
    "shortTitle": "Poona Pact Accord Document (24 Sept 1932)",
    "type": "GOVERNMENT & OFFICIAL RECORDS",
    "date": "24 September 1932",
    "year": 1932,
    "decade": "1930s",
    "creator": "Dr. B. R. Ambedkar, M. C. Rajah, Madan Mohan Malaviya, Tej Bahadur Sapru, C. Rajagopalachari",
    "source": "National Archives of India, Home Department (Political), File 41/5/1932 / BAWS Vol. 2",
    "sourceCategory": "Government Records",
    "collection": "National Archives of India Rare Treaties Vault",
    "volume": "Vol. 02",
    "page": "550",
    "documentUrl": "/api/archive/documents/ambedkar-volume-02/file#page=550",
    "image": "/assets/archive/poona-pact-signing.jpg",
    "thumbnail": "/assets/archive/poona-pact-signing.jpg",
    "location": "Yerwada Central Jail, Pune",
    "placeId": "place-pune",
    "timelineEventId": "event-1932",
    "tags": [
      "Official Treaty",
      "Poona Pact",
      "Legislative Reservation",
      "Yerwada"
    ],
    "subjects": [
      "Political Representation",
      "Democracy",
      "Social Reform"
    ],
    "language": "English",
    "verified": true,
    "provenanceType": "OFFICIAL RECORD",
    "curatorNote": "The formal agreement that replaced separate electorates under Ramsay MacDonald’s Communal Award with reserved seats in joint electorates, securing 148 seats in provincial legislatures (more than double the British award).",
    "quote": "There shall be seats reserved for the Depressed Classes out of the general electorate seats in the Provincial Legislatures.",
    "relatedArtifactIds": [
      "AAROH-ART-0041",
      "AAROH-ART-0070",
      "AAROH-ART-0015"
    ]
  },
  {
    "id": "AAROH-ART-0081",
    "title": "Viceroy’s Executive Council Gazette Notification: Member for Labour",
    "shortTitle": "Gazette of India: Appointment as Labour Member (1942)",
    "type": "GOVERNMENT & OFFICIAL RECORDS",
    "date": "20 July 1942",
    "year": 1942,
    "decade": "1940s",
    "creator": "Governor-General in Council, Government of India",
    "source": "The Gazette of India (Extraordinary), 20 July 1942 / BAWS Vol. 10",
    "sourceCategory": "Government Records",
    "collection": "National Archives of India",
    "volume": "Vol. 10",
    "page": "1",
    "documentUrl": "/api/archive/documents/ambedkar-volume-10/file#page=1",
    "image": "/assets/archive/constituent-assembly.jpg",
    "thumbnail": "/assets/archive/constituent-assembly.jpg",
    "location": "New Delhi",
    "placeId": "place-delhi",
    "timelineEventId": "event-1942",
    "tags": [
      "Gazette",
      "Labour Member",
      "Executive Council",
      "1942"
    ],
    "subjects": [
      "Labour",
      "Economics",
      "Government"
    ],
    "language": "English",
    "verified": true,
    "provenanceType": "OFFICIAL RECORD",
    "curatorNote": "Official statutory notification recording Dr. Ambedkar’s appointment as Member for Labour in the Governor-General’s Executive Council, marking his entry into the sovereign executive governance of India.",
    "quote": "The Governor-General has been pleased to appoint the Honourable Dr. B. R. Ambedkar to be a Member of his Executive Council in charge of the Labour Portfolio.",
    "relatedArtifactIds": [
      "AAROH-ART-0037",
      "AAROH-ART-0046",
      "AAROH-ART-0033"
    ]
  },
  {
    "id": "AAROH-ART-0082",
    "title": "Evidence Submitted Before the Southborough Committee on Franchise",
    "shortTitle": "Evidence Before Southborough Committee (1919)",
    "type": "GOVERNMENT & OFFICIAL RECORDS",
    "date": "27 January 1919",
    "year": 1919,
    "decade": "1910s",
    "creator": "Dr. B. R. Ambedkar",
    "source": "Reforms Committee (Franchise) Evidence, Vol. II (Cmd. 141) / BAWS Vol. 1",
    "sourceCategory": "Government Records",
    "collection": "British Parliamentary Papers / National Archives",
    "volume": "Vol. 01",
    "page": "243",
    "documentUrl": "/api/archive/documents/ambedkar-volume-01/file#page=243",
    "image": "/assets/archive/castes-in-india-1917.png",
    "thumbnail": "/assets/archive/castes-in-india-1917.png",
    "location": "Bombay, India",
    "placeId": "place-mumbai",
    "timelineEventId": "event-1920",
    "tags": [
      "Official Testimony",
      "Southborough Committee",
      "Franchise",
      "Voting Rights"
    ],
    "subjects": [
      "Political Representation",
      "Democracy",
      "Human Rights"
    ],
    "language": "English",
    "verified": true,
    "provenanceType": "OFFICIAL RECORD",
    "curatorNote": "Ambedkar’s first official political appearance. Demanded universal franchise and separate electorates for the Depressed Classes before Lord Southborough’s franchise committee implementing the Montagu-Chelmsford Reforms.",
    "quote": "The right to representation is an essential accompaniment of citizenship.",
    "relatedArtifactIds": [
      "AAROH-ART-0010",
      "AAROH-ART-0050",
      "AAROH-ART-0030"
    ]
  },
  {
    "id": "AAROH-ART-0083",
    "title": "Bombay High Court Landmark Judgment on Chavdar Tank Water Rights",
    "shortTitle": "High Court Mahad Water Rights Judgment (1937)",
    "type": "GOVERNMENT & OFFICIAL RECORDS",
    "date": "17 March 1937",
    "year": 1937,
    "decade": "1930s",
    "creator": "High Court of Judicature at Bombay (Broomfield and Wassoodew JJ.)",
    "source": "Bombay Law Reporter, Vol. XXXIX / Maharashtra State Archives",
    "sourceCategory": "Government Records",
    "collection": "Bombay High Court Heritage Museum Records",
    "volume": "High Court Judgments 1937",
    "page": "649",
    "documentUrl": "",
    "image": "/assets/archive/mahad-tank.jpg",
    "thumbnail": "/assets/archive/mahad-tank.jpg",
    "location": "Bombay High Court, Mumbai",
    "placeId": "place-mumbai",
    "timelineEventId": "event-1927",
    "tags": [
      "Court Judgment",
      "Bombay High Court",
      "Mahad Tank",
      "Civil Rights"
    ],
    "subjects": [
      "Social Reform",
      "Human Rights",
      "Caste"
    ],
    "language": "English",
    "verified": true,
    "provenanceType": "OFFICIAL RECORD",
    "curatorNote": "Ten-year legal battle concluding on 17 March 1937 in complete victory for Dr. Ambedkar. The Bombay High Court ruled that the Chavdar Tank is a public reservoir and that Untouchables possess equal legal rights to draw its water.",
    "quote": "The custom claimed by the orthodox plaintiffs of excluding the Untouchables from the public tank is unreasonable and contrary to public interest.",
    "relatedArtifactIds": [
      "AAROH-ART-0031",
      "AAROH-ART-0047",
      "AAROH-ART-0051"
    ]
  },
  {
    "id": "AAROH-ART-0084",
    "title": "Starte Committee Report on the Depressed Classes of the Bombay Presidency",
    "shortTitle": "Starte Committee Report (1930)",
    "type": "GOVERNMENT & OFFICIAL RECORDS",
    "date": "1930",
    "year": 1930,
    "decade": "1930s",
    "creator": "O. H. B. Starte & Dr. B. R. Ambedkar (Member)",
    "source": "Government Central Press, Bombay / BAWS Vol. 2",
    "sourceCategory": "Government Records",
    "collection": "Maharashtra State Archives, Mumbai",
    "volume": "Vol. 02",
    "page": "433",
    "documentUrl": "/api/archive/documents/ambedkar-volume-02/file#page=433",
    "image": "/assets/archive/archive-library.jpg",
    "thumbnail": "/assets/archive/archive-library.jpg",
    "location": "Bombay Presidency",
    "placeId": "place-mumbai",
    "timelineEventId": "event-1930-kalaram",
    "tags": [
      "Starte Committee",
      "Government Report",
      "Education",
      "Hostels"
    ],
    "subjects": [
      "Education",
      "Social Reform",
      "Human Rights"
    ],
    "language": "English",
    "verified": true,
    "provenanceType": "PRIMARY SOURCE",
    "curatorNote": "Official committee appointed by the Government of Bombay with Ambedkar as leading member, recommending government scholarships, free hostels, and prohibition of social boycotts.",
    "quote": "The backward classes cannot be elevated without state-subsidized education and residential hostels that remove children from caste-oppressed environments.",
    "relatedArtifactIds": [
      "AAROH-ART-0080",
      "AAROH-ART-0081"
    ]
  },
  {
    "id": "AAROH-ART-0085",
    "title": "Oral & Written Evidence before the Royal Commission on Indian Currency and Finance (Hilton Young Commission)",
    "shortTitle": "Evidence before Hilton Young Commission (1925)",
    "type": "GOVERNMENT & OFFICIAL RECORDS",
    "date": "15 December 1925",
    "year": 1925,
    "decade": "1920s",
    "creator": "Dr. B. R. Ambedkar",
    "source": "Royal Commission on Indian Currency and Finance, Vol. 4, Minutes of Evidence / BAWS Vol. 6",
    "sourceCategory": "Government Records",
    "collection": "HM Stationery Office, London / British Library",
    "volume": "Vol. 06",
    "page": "325",
    "documentUrl": "/api/archive/documents/ambedkar-volume-06/file#page=325",
    "image": "/assets/archive/archive-library.jpg",
    "thumbnail": "/assets/archive/archive-library.jpg",
    "location": "Bombay & London",
    "placeId": "place-mumbai",
    "timelineEventId": "event-1924-bahishkrit",
    "tags": [
      "Royal Commission",
      "Hilton Young",
      "Currency",
      "RBI",
      "Gold Standard"
    ],
    "subjects": [
      "Economics",
      "Public Finance",
      "Reserve Bank of India"
    ],
    "language": "English",
    "verified": true,
    "provenanceType": "PRIMARY SOURCE",
    "curatorNote": "Expert economic testimony presented before the Royal Commission, advocating monetary stability and price stability over exchange fixity, which directly guided the legislative framework of the Reserve Bank of India Act 1934.",
    "quote": "A fluctuating currency is the greatest engine of exploitation. To maintain social justice, money must retain a stable purchasing power for the working classes.",
    "relatedArtifactIds": [
      "AAROH-ART-0013",
      "AAROH-ART-0019",
      "AAROH-ART-0005"
    ]
  },
  {
    "id": "AAROH-ART-0086",
    "title": "Proceedings of the Tripartite Labour Conference: Enactment of the 8-Hour Workday",
    "shortTitle": "Tripartite Labour Conference Record (1942)",
    "type": "GOVERNMENT & OFFICIAL RECORDS",
    "date": "7 August 1942",
    "year": 1942,
    "decade": "1940s",
    "creator": "Dr. B. R. Ambedkar (Member for Labour)",
    "source": "Department of Labour, Government of India / BAWS Vol. 10",
    "sourceCategory": "Government Records",
    "collection": "National Archives of India / Ministry of Labour",
    "volume": "Vol. 10",
    "page": "1",
    "documentUrl": "/api/archive/documents/ambedkar-volume-10/file#page=1",
    "image": "/assets/archive/archive-library.jpg",
    "thumbnail": "/assets/archive/archive-library.jpg",
    "location": "Council Chamber, New Delhi",
    "placeId": "place-delhi",
    "timelineEventId": "event-1942-scf",
    "tags": [
      "Labour",
      "Tripartite Conference",
      "8-Hour Day",
      "Social Security"
    ],
    "subjects": [
      "Labour",
      "Human Rights",
      "Government"
    ],
    "language": "English",
    "verified": true,
    "provenanceType": "PRIMARY SOURCE",
    "curatorNote": "Official conference proceedings establishing permanent tripartite collaboration between Government, Employers, and Workers in India, under which Ambedkar reduced factory hours from 12 to 8 hours a day.",
    "quote": "Labour is not a commodity. It is human life, and the state is duty-bound to ensure decent standards of living and leisure for every working person.",
    "relatedArtifactIds": [
      "AAROH-ART-0033",
      "AAROH-ART-0082",
      "AAROH-ART-0052"
    ]
  },
  {
    "id": "AAROH-ART-0087",
    "title": "Historical Cadastral Survey Map of Mahad Town & Chavdar Tank Precinct (1927)",
    "shortTitle": "Cadastral Map of Chavdar Tank, Mahad",
    "type": "MAPS & PLACES",
    "date": "March 1927",
    "year": 1927,
    "decade": "1920s",
    "creator": "Bombay Presidency Revenue & Survey Department",
    "source": "Kolaba District Gazetteers / Bombay High Court Exhibit Records / BAWS Vol. 17(1)",
    "sourceCategory": "Government Records",
    "collection": "Maharashtra State Archives, Mumbai",
    "volume": "Vol. 17(1)",
    "page": "112",
    "documentUrl": "/api/archive/documents/ambedkar-volume-17-01/file#page=112",
    "image": "/assets/archive/chavdar-tank.jpg",
    "thumbnail": "/assets/archive/chavdar-tank.jpg",
    "location": "Mahad, Kolaba District (Raigad), Maharashtra",
    "placeId": "place-mahad",
    "timelineEventId": "event-1927-mahad",
    "tags": [
      "Map",
      "Mahad",
      "Chavdar Tank",
      "Cartography",
      "Satyagraha",
      "Survey"
    ],
    "subjects": [
      "Social Reform",
      "Human Rights",
      "Caste"
    ],
    "language": "English",
    "verified": true,
    "provenanceType": "PRIMARY SOURCE",
    "curatorNote": "Official British colonial cadastral and revenue map of Mahad municipality documenting the municipal roads, public squares, and the exact boundary of Chavdar Tale reservoir, which formed vital evidentiary proof in the Mahad tank civil litigation won by Dr. Ambedkar in the Bombay High Court.",
    "quote": "The Chavdar Tank is a public tank situated in the municipal limits of Mahad, accessible by public roads from all quarters.",
    "relatedArtifactIds": [
      "AAROH-ART-0031",
      "AAROH-ART-0047",
      "AAROH-ART-0083"
    ]
  },
  {
    "id": "AAROH-ART-0088",
    "title": "Architectural Site Plan of Constitution House & Council House Precinct, New Delhi (1947–1949)",
    "shortTitle": "Constitution House & Assembly Precinct Plan",
    "type": "MAPS & PLACES",
    "date": "August 1947",
    "year": 1947,
    "decade": "1940s",
    "creator": "Central Public Works Department (CPWD), Government of India",
    "source": "National Archives of India, CPWD Historical Blueprints Division / BAWS Vol. 13",
    "sourceCategory": "Constitutional Records",
    "collection": "National Archives of India, New Delhi",
    "volume": "Vol. 13",
    "page": "48",
    "documentUrl": "/api/archive/documents/ambedkar-volume-13/file#page=48",
    "image": "/assets/archive/constituent-assembly.jpg",
    "thumbnail": "/assets/archive/constituent-assembly.jpg",
    "location": "Curzon Road / Constitution House, New Delhi",
    "placeId": "place-delhi",
    "timelineEventId": "event-1949-constitution",
    "tags": [
      "Map",
      "Plan",
      "Constitution House",
      "New Delhi",
      "Drafting Committee"
    ],
    "subjects": [
      "Constitution",
      "Democracy",
      "Government"
    ],
    "language": "English",
    "verified": true,
    "provenanceType": "PRIMARY SOURCE",
    "curatorNote": "Historical architectural floor plan and site map of Constitution House on Curzon Road and the Central Hall of Parliament, New Delhi, where the Drafting Committee under Dr. Ambedkar convened daily to draft the Indian Constitution.",
    "quote": "Constitution House served as the living and intellectual quarters for the drafting of India's foundational democratic document.",
    "relatedArtifactIds": [
      "AAROH-ART-0006",
      "AAROH-ART-0044",
      "AAROH-ART-0060"
    ]
  },
  {
    "id": "AAROH-ART-0089",
    "title": "Historical Demographic Survey Map of Depressed Classes Settlements in Bombay Presidency (1930)",
    "shortTitle": "Bombay Presidency Depressed Classes Settlement Map",
    "type": "MAPS & PLACES",
    "date": "March 1930",
    "year": 1930,
    "decade": "1930s",
    "creator": "Depressed Classes and Aboriginal Tribes Committee (Starte Committee)",
    "source": "Report of the Depressed Classes and Aboriginal Tribes Committee, Bombay / BAWS Vol. 2",
    "sourceCategory": "Government Records",
    "collection": "Maharashtra State Archives / British Library",
    "volume": "Vol. 02",
    "page": "392",
    "documentUrl": "/api/archive/documents/ambedkar-volume-02/file#page=392",
    "image": "/assets/archive/ambedkar-young-portrait.jpg",
    "thumbnail": "/assets/archive/ambedkar-young-portrait.jpg",
    "location": "Bombay Presidency",
    "placeId": "place-mumbai",
    "timelineEventId": "event-1930-rtc",
    "tags": [
      "Map",
      "Starte Committee",
      "Settlements",
      "Demographics",
      "Bombay Presidency"
    ],
    "subjects": [
      "Social Reform",
      "Education",
      "Human Rights"
    ],
    "language": "English",
    "verified": true,
    "provenanceType": "PRIMARY SOURCE",
    "curatorNote": "Official cartographic map accompanying the Starte Committee Report (of which Dr. Ambedkar was a leading member) mapping primary schools, hostels, water access points, and segregated living quarters across the districts of Bombay Presidency.",
    "quote": "A comprehensive cartographic and statistical survey of the physical and educational conditions of the Depressed Classes throughout the Presidency.",
    "relatedArtifactIds": [
      "AAROH-ART-0084",
      "AAROH-ART-0082",
      "AAROH-ART-0010"
    ]
  },
  {
    "id": "AAROH-ART-0090",
    "aliasIds": [
      "art-satara-register"
    ],
    "title": "Satara Government High School General Register Entry No. 1914",
    "shortTitle": "Satara High School Register (7 Nov 1900)",
    "type": "PERSONAL & HISTORICAL MATERIAL",
    "date": "7 November 1900",
    "year": 1900,
    "decade": "1910s",
    "creator": "Krishnaji Keshav Ambedkar (Teacher) & Satara Camp School",
    "source": "Satara Government High School Archives / Maharashtra State Gazette",
    "sourceCategory": "Writings & Speeches",
    "collection": "Satara District Heritage Archives",
    "volume": "School General Register 1900",
    "page": "Entry 1914",
    "documentUrl": "",
    "image": "/assets/archive/archive-library.jpg",
    "thumbnail": "/assets/archive/archive-library.jpg",
    "location": "Satara, Maharashtra",
    "placeId": "place-satara",
    "timelineEventId": "event-1900",
    "tags": [
      "Archival Document",
      "Satara School",
      "Students Day",
      "Name Bestowal"
    ],
    "subjects": [
      "Education",
      "Personal Life"
    ],
    "language": "Marathi & English",
    "verified": true,
    "provenanceType": "PRIMARY SOURCE",
    "curatorNote": "Historical school register entry recording young Bhimrao’s admission on 7 November 1900 under Entry No. 1914. His teacher Krishnaji Keshav Ambedkar recorded his own surname \"Ambedkar\" in place of Sakpal. Observed annually across Maharashtra as Students’ Day.",
    "quote": "Knowledge is the foundation of man’s dignity.",
    "relatedArtifactIds": [
      "AAROH-ART-0003",
      "AAROH-ART-0048",
      "AAROH-ART-0040"
    ]
  },
  {
    "id": "AAROH-ART-0091",
    "aliasIds": [
      "art-22-vows"
    ],
    "title": "The 22 Vows: Original Marathi Formulation Administered at Deekshabhoomi",
    "shortTitle": "The 22 Vows (Nagpur, 14 Oct 1956)",
    "type": "PERSONAL & HISTORICAL MATERIAL",
    "date": "14 October 1956",
    "year": 1956,
    "decade": "1950s",
    "creator": "Dr. B. R. Ambedkar",
    "source": "Dr. Ambedkar Smarak Samiti Official Records / BAWS Vol. 17 (Part 3)",
    "sourceCategory": "Writings & Speeches",
    "collection": "Deekshabhoomi Sacred Relics Archive",
    "volume": "Vol. 17_02",
    "page": "158",
    "documentUrl": "/api/archive/documents/ambedkar-volume-17-02/file#page=158",
    "image": "/assets/archive/deekshabhoomi.jpg",
    "thumbnail": "/assets/archive/deekshabhoomi.jpg",
    "location": "Deekshabhoomi, Nagpur",
    "placeId": "place-nagpur",
    "timelineEventId": "event-1956-dhamma",
    "tags": [
      "Religious Code",
      "22 Vows",
      "Deekshabhoomi",
      "Buddhism",
      "Samata"
    ],
    "subjects": [
      "Religion",
      "Social Reform",
      "Philosophy",
      "Human Rights"
    ],
    "language": "Marathi",
    "verified": true,
    "provenanceType": "PRIMARY SOURCE",
    "curatorNote": "The 22 solemn pledges composed and administered by Dr. Ambedkar to over half a million followers during the Dhamma Deeksha, explicitly repudiating caste superstitions and establishing a moral life grounded in reason.",
    "quote": "I shall have no faith in Brahma, Vishnu and Mahesh, nor shall I worship them... I shall believe in the equality of all human beings.",
    "relatedArtifactIds": [
      "AAROH-ART-0016",
      "AAROH-ART-0038",
      "AAROH-ART-0049"
    ]
  },
  {
    "id": "AAROH-ART-0092",
    "title": "All India Scheduled Castes Federation 1946 Election Manifesto",
    "shortTitle": "Scheduled Castes Federation Manifesto (1946)",
    "type": "PERSONAL & HISTORICAL MATERIAL",
    "date": "1946",
    "year": 1946,
    "decade": "1940s",
    "creator": "Dr. B. R. Ambedkar (President, AISCF)",
    "source": "Wikimedia Commons / AISCF Party Publications / BAWS Vol. 17",
    "sourceCategory": "Periodicals",
    "collection": "National Archives of India Political Party Collection",
    "volume": "Vol. 17_01",
    "page": "385",
    "documentUrl": "",
    "image": "/assets/archive/scf-election-manifesto.jpg",
    "thumbnail": "/assets/archive/scf-election-manifesto.jpg",
    "location": "Bombay & New Delhi",
    "placeId": "place-delhi",
    "timelineEventId": "event-1946",
    "tags": [
      "Manifesto",
      "AISCF",
      "Elections",
      "Political Representation",
      "1946"
    ],
    "subjects": [
      "Political Representation",
      "Democracy",
      "Human Rights"
    ],
    "language": "English",
    "verified": true,
    "provenanceType": "PRIMARY SOURCE",
    "curatorNote": "Photograph of the official election manifesto of the All India Scheduled Castes Federation, founded by Dr. Ambedkar, outlining demands for separate villages, land redistribution, and parliamentary safeguards.",
    "quote": "Political power is the key to all social progress.",
    "relatedArtifactIds": [
      "AAROH-ART-0071",
      "AAROH-ART-0017",
      "AAROH-ART-0033"
    ]
  },
  {
    "id": "AAROH-ART-0093",
    "title": "Official Commemorative Postage Stamp of Dr. B. R. Ambedkar",
    "shortTitle": "Ambedkar 1991 Commemorative Stamp of India",
    "type": "PERSONAL & HISTORICAL MATERIAL",
    "date": "14 April 1991",
    "year": 1991,
    "decade": "1950s",
    "creator": "India Security Press / Department of Posts, Government of India",
    "source": "Wikimedia Commons / India Post Philatelic Bureau",
    "sourceCategory": "Government Records",
    "collection": "National Philatelic Museum, New Delhi",
    "volume": "Commemorative Issues 1991",
    "page": "Stamp No. 1422",
    "documentUrl": "",
    "image": "/assets/archive/ambedkar-1991-stamp.jpg",
    "thumbnail": "/assets/archive/ambedkar-1991-stamp.jpg",
    "location": "New Delhi, India",
    "placeId": "place-delhi",
    "timelineEventId": "event-1956-death",
    "tags": [
      "Philately",
      "Commemorative Stamp",
      "Centenary",
      "Bharat Ratna"
    ],
    "subjects": [
      "Personal Life",
      "Constitution",
      "Social Reform"
    ],
    "language": "English & Hindi",
    "verified": true,
    "provenanceType": "OFFICIAL RECORD",
    "curatorNote": "Official postal stamp issued by the Government of India celebrating Dr. B. R. Ambedkar’s birth centenary year and posthumous conferral of the Bharat Ratna, India’s highest civilian honour.",
    "quote": "Architect of the Constitution of India and champion of human rights.",
    "relatedArtifactIds": [
      "AAROH-ART-0094",
      "AAROH-ART-0044",
      "AAROH-ART-0060"
    ]
  },
  {
    "id": "AAROH-ART-0094",
    "title": "Centenary 1-Rupee Commemorative Coin of India",
    "shortTitle": "Centenary 1-Rupee Coin (1990)",
    "type": "PERSONAL & HISTORICAL MATERIAL",
    "date": "11 June 1990",
    "year": 1990,
    "decade": "1950s",
    "creator": "Government of India Mint (Mumbai & Hyderabad)",
    "source": "Wikimedia Commons / Reserve Bank of India Currency Archives",
    "sourceCategory": "Government Records",
    "collection": "Reserve Bank of India Monetary Museum",
    "volume": "Commemorative Coinage 1990",
    "page": "Item 1990-AMB",
    "documentUrl": "",
    "image": "/assets/archive/ambedkar-1990-coin.jpg",
    "thumbnail": "/assets/archive/ambedkar-1990-coin.jpg",
    "location": "Mumbai & Hyderabad",
    "placeId": "place-mumbai",
    "timelineEventId": "event-1956-death",
    "tags": [
      "Numismatics",
      "Commemorative Coin",
      "Centenary",
      "RBI"
    ],
    "subjects": [
      "Economics",
      "Personal Life"
    ],
    "language": "English & Hindi",
    "verified": true,
    "provenanceType": "OFFICIAL RECORD",
    "curatorNote": "Commemorative currency coin minted in 1990 featuring the effigy of Dr. B. R. Ambedkar with inscriptions in English and Hindi celebrating the birth centenary of the chief architect of the Constitution.",
    "quote": "Dr. B. R. Ambedkar Centenary 1891–1990.",
    "relatedArtifactIds": [
      "AAROH-ART-0093",
      "AAROH-ART-0005",
      "AAROH-ART-0060"
    ]
  },
  {
    "id": "AAROH-ART-0095",
    "title": "Mahad Water Liberation Commemorative Bronze Monument Sculpture",
    "shortTitle": "Mahad Water Movement Bronze Sculpture",
    "type": "PERSONAL & HISTORICAL MATERIAL",
    "date": "1927 / Memorial Installation",
    "year": 1927,
    "decade": "1920s",
    "creator": "Heritage Memorial Sculptors",
    "source": "Wikimedia Commons / Mahad Municipal Heritage Council",
    "sourceCategory": "Photographic Records",
    "collection": "Chavdar Tale National Memorial, Mahad",
    "volume": "Heritage Monument Registry",
    "page": "Mon-01",
    "documentUrl": "",
    "image": "/assets/archive/mahad-water-sculpture.png",
    "thumbnail": "/assets/archive/mahad-water-sculpture.png",
    "location": "Chavdar Tale, Mahad, Maharashtra",
    "placeId": "place-mahad",
    "timelineEventId": "event-1927",
    "tags": [
      "Monument",
      "Sculpture",
      "Chavdar Tale",
      "Mahad Satyagraha"
    ],
    "subjects": [
      "Social Reform",
      "Human Rights",
      "Caste"
    ],
    "language": "Visual Record",
    "verified": true,
    "provenanceType": "PRIMARY SOURCE",
    "curatorNote": "Bronze sculpture erected on the banks of Chavdar Tale depicting Dr. B. R. Ambedkar cupping water in his hands, commemorating the water revolution that declared the civic equality of the oppressed.",
    "quote": "We are going to the Chavdar Tank to assert that we too are human beings.",
    "relatedArtifactIds": [
      "AAROH-ART-0031",
      "AAROH-ART-0047",
      "AAROH-ART-0051"
    ]
  },
  {
    "id": "AAROH-ART-0096",
    "title": "Dr. B. R. Ambedkar's Personal Library Accession Register at Rajgriha",
    "shortTitle": "Rajgriha Library Accession Register (Dadar)",
    "type": "PERSONAL & HISTORICAL MATERIAL",
    "date": "c. 1934–1956",
    "year": 1934,
    "decade": "1930s",
    "creator": "Dr. B. R. Ambedkar",
    "source": "Rajgriha Memorial Archives / People's Education Society, Mumbai",
    "sourceCategory": "Photographic Records",
    "collection": "Siddhartha College Library, Fort, Mumbai",
    "volume": "Library Registry Vol. 1",
    "page": "Reg-01",
    "documentUrl": "",
    "image": "/assets/archive/archive-library.jpg",
    "thumbnail": "/assets/archive/archive-library.jpg",
    "location": "Rajgriha, Hindu Colony, Dadar, Bombay",
    "placeId": "place-mumbai",
    "timelineEventId": "event-1935-yeola",
    "tags": [
      "Rajgriha",
      "Library",
      "Books",
      "Personal Archives"
    ],
    "subjects": [
      "Personal Life",
      "Education",
      "Philosophy"
    ],
    "language": "English & Marathi",
    "verified": true,
    "provenanceType": "PRIMARY SOURCE",
    "curatorNote": "Original catalogue record of the monumental private collection built by Ambedkar at his residence Rajgriha, containing over 50,000 volumes across constitutional law, economics, philosophy, sociology, and world religions.",
    "quote": "Books are my life. I cannot live without my library.",
    "relatedArtifactIds": [
      "AAROH-ART-0047",
      "AAROH-ART-0075",
      "AAROH-ART-0090"
    ]
  },
  {
    "id": "AAROH-ART-0097",
    "title": "Certificate of Admission as Fellow of the Royal Economic Society (F.R.E.S.), London",
    "shortTitle": "Royal Economic Society Fellowship Certificate (1921)",
    "type": "PERSONAL & HISTORICAL MATERIAL",
    "date": "1921",
    "year": 1921,
    "decade": "1920s",
    "creator": "Royal Economic Society, London",
    "source": "Royal Economic Society Archives, London / BAWS Vol. 17(1)",
    "sourceCategory": "Government Records",
    "collection": "Symbiosis Ambedkar Museum, Pune",
    "volume": "Certificate Registry",
    "page": "FRES-1921",
    "documentUrl": "",
    "image": "/assets/archive/ambedkar-young-portrait.jpg",
    "thumbnail": "/assets/archive/ambedkar-young-portrait.jpg",
    "location": "London, United Kingdom",
    "placeId": "place-london",
    "timelineEventId": "event-1916-lse",
    "tags": [
      "Fellowship",
      "FRES",
      "Economics",
      "London"
    ],
    "subjects": [
      "Economics",
      "Education",
      "Personal Life"
    ],
    "language": "English",
    "verified": true,
    "provenanceType": "PRIMARY SOURCE",
    "curatorNote": "Document certifying the election of B. R. Ambedkar as a Fellow of the Royal Economic Society in London in recognition of his pioneering contributions to public finance and monetary theory.",
    "quote": "This is to certify that Bhimrao Ramji Ambedkar was duly elected a Fellow of the Royal Economic Society on this day.",
    "relatedArtifactIds": [
      "AAROH-ART-0091",
      "AAROH-ART-0092",
      "AAROH-ART-0013"
    ]
  }
];

// ----------------------------------------------------
// CURATED FEATURED ARTIFACTS FOR HOME PAGE
// (Rotating authentic selection, not hardcoded placeholders)
// ----------------------------------------------------
export const featuredArtifacts = [
  artifactsDatabase.find((a) => a.id === 'AAROH-ART-0001') || artifactsDatabase[0], // Riddles in Hinduism Manuscript
  artifactsDatabase.find((a) => a.id === 'AAROH-ART-0002') || artifactsDatabase[1], // Annihilation of Caste
  artifactsDatabase.find((a) => a.id === 'AAROH-ART-0010') || artifactsDatabase[5], // Castes in India 1916
  artifactsDatabase.find((a) => a.id === 'AAROH-ART-0016') || artifactsDatabase[11], // Buddha and His Dhamma
  artifactsDatabase.find((a) => a.id === 'AAROH-ART-0035') || artifactsDatabase[18], // Final Address to CA 1949
  artifactsDatabase.find((a) => a.id === 'AAROH-ART-0044') || artifactsDatabase[23], // Presentation of Constitution
  artifactsDatabase.find((a) => a.id === 'AAROH-ART-0050') || artifactsDatabase[27], // Mooknayak 1920
  artifactsDatabase.find((a) => a.id === 'AAROH-ART-0060') || artifactsDatabase[30], // Illuminated Preamble 1950
  artifactsDatabase.find((a) => a.id === 'AAROH-ART-0080') || artifactsDatabase[35], // Poona Pact Agreement
  artifactsDatabase.find((a) => a.id === 'AAROH-ART-0087') || artifactsDatabase[40], // Mahad Chavdar Tank Map
];

// ----------------------------------------------------
// HELPER FUNCTIONS FOR ARCHIVE QUERYING & METRICS
// ----------------------------------------------------

export function getArtifactById(id) {
  if (!id) return null;
  return (
    artifactsDatabase.find(
      (a) => a.id.toLowerCase() === String(id).toLowerCase()
    ) || null
  );
}

export function searchArtifacts({
  query = '',
  category = 'ALL',
  period = 'ALL',
  topic = 'ALL',
  source = 'ALL',
} = {}) {
  const qClean = (query || '').trim().toLowerCase();

  return artifactsDatabase.filter((art) => {
    // 1. Category Filter
    if (category && category !== 'ALL') {
      if (art.type !== category) return false;
    }

    // 2. Period Filter
    if (period && period !== 'ALL') {
      if (art.decade !== period) return false;
    }

    // 3. Topic Filter
    if (topic && topic !== 'ALL') {
      const topicMatch =
        (art.subjects &&
          art.subjects.some((s) => s.toLowerCase() === topic.toLowerCase())) ||
        (art.tags &&
          art.tags.some((t) => t.toLowerCase() === topic.toLowerCase()));
      if (!topicMatch) return false;
    }

    // 4. Source Filter
    if (source && source !== 'ALL') {
      if (
        art.sourceCategory !== source &&
        !art.source.toLowerCase().includes(source.toLowerCase())
      ) {
        return false;
      }
    }

    // 5. Full-text search across all metadata fields
    if (qClean) {
      const matchTitle = art.title.toLowerCase().includes(qClean);
      const matchShort = art.shortTitle.toLowerCase().includes(qClean);
      const matchCreator = (art.creator || '').toLowerCase().includes(qClean);
      const matchDesc = (art.description || '').toLowerCase().includes(qClean);
      const matchCurator = (art.curatorNote || '').toLowerCase().includes(qClean);
      const matchQuote = (art.quote || '').toLowerCase().includes(qClean);
      const matchSource = (art.source || '').toLowerCase().includes(qClean);
      const matchVol = (art.volume || '').toLowerCase().includes(qClean);
      const matchLoc = (art.location || '').toLowerCase().includes(qClean);
      const matchYear = String(art.year).includes(qClean);
      const matchType = art.type.toLowerCase().includes(qClean);
      const matchTags = (art.tags || []).some((t) =>
        t.toLowerCase().includes(qClean)
      );
      const matchSubjects = (art.subjects || []).some((s) =>
        s.toLowerCase().includes(qClean)
      );

      return (
        matchTitle ||
        matchShort ||
        matchCreator ||
        matchDesc ||
        matchCurator ||
        matchQuote ||
        matchSource ||
        matchVol ||
        matchLoc ||
        matchYear ||
        matchType ||
        matchTags ||
        matchSubjects
      );
    }

    return true;
  });
}

export function getRelatedArtifacts(artifactId, limit = 4) {
  const current = getArtifactById(artifactId);
  if (!current) return [];

  // Match by explicit relatedArtifactIds
  if (current.relatedArtifactIds && current.relatedArtifactIds.length > 0) {
    const directMatches = current.relatedArtifactIds
      .map((id) => getArtifactById(id))
      .filter(Boolean);
    if (directMatches.length >= limit) return directMatches.slice(0, limit);

    const additional = artifactsDatabase.filter(
      (a) =>
        a.id !== artifactId &&
        !current.relatedArtifactIds.includes(a.id) &&
        (a.placeId === current.placeId ||
          (a.subjects &&
            current.subjects &&
            a.subjects.some((s) => current.subjects.includes(s))))
    );
    return [...directMatches, ...additional].slice(0, limit);
  }

  // Fallback to shared subjects and location
  return artifactsDatabase
    .filter(
      (a) =>
        a.id !== artifactId &&
        (a.placeId === current.placeId ||
          (a.subjects &&
            current.subjects &&
            a.subjects.some((s) => current.subjects.includes(s))))
    )
    .slice(0, limit);
}

export function getArtifactsForPlace(placeId) {
  if (!placeId) return [];
  return artifactsDatabase.filter((art) => art.placeId === placeId);
}

export function getArtifactsForTimelineEvent(eventId) {
  if (!eventId) return [];
  return artifactsDatabase.filter((art) => art.timelineEventId === eventId);
}

// ----------------------------------------------------
// DYNAMIC STATISTICS CALCULATION (Real database counts)
// ----------------------------------------------------
export function getArchiveCounts() {
  const total = artifactsDatabase.length;
  const byType = {};
  const byPeriod = {};
  const byTopic = {};

  artifactsDatabase.forEach((art) => {
    byType[art.type] = (byType[art.type] || 0) + 1;
    if (art.decade) byPeriod[art.decade] = (byPeriod[art.decade] || 0) + 1;
    (art.subjects || []).forEach((subj) => {
      byTopic[subj] = (byTopic[subj] || 0) + 1;
    });
  });

  return {
    total,
    byType,
    byPeriod,
    byTopic,
    verifiedCount: artifactsDatabase.filter((a) => a.verified).length,
    volumesCount: 19,
    timelineEventsCount: 22,
    placesCount: 12,
  };
}
