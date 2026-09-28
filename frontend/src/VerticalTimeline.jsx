import { useState, useMemo } from 'react'
import {
  CalendarDays,
  Sparkles,
  Search,
  ExternalLink,
  Copy,
  Check,
  RotateCcw,
  MessageCircle,
  ChevronDown,
  ChevronUp,
  ArrowRight,
  Maximize2,
  FileText,
  ShieldCheck,
  Globe2,
  Clock,
  Tag
} from 'lucide-react'

export const verticalTimelineData = [
  {
    id: 'tl-1891',
    year: '1891',
    date: '14 April 1891',
    category: 'Birth & Heritage',
    title: 'Birth in Mhow Cantonment & Early Roots',
    image: '/assets/archive/mhow-memorial.jpg',
    caption: 'Birthplace Memorial Stupa at Dr. Ambedkar Nagar (Mhow), Madhya Pradesh.',
    description:
      'Born Bhimrao Ramji Sakpal to Ramji Sakpal and Bhimbai in the British military cantonment of Mhow. As the fourteenth child from the Mahar community, he witnessed systemic caste untouchability firsthand from early childhood, forging an iron resolve to dismantle hereditary social subjugation.',
    keyPoints: [
      'Born into a Kabir-panthi military family steeped in discipline and ethical devotion.',
      'Endured harsh school segregation where he was forced to sit on a separate gunny sack outside the classroom.',
      'Teacher Krishnaji Keshav Ambedkar bestowed his own family surname "Ambedkar" upon the brilliant pupil.',
    ],
    relatedArtifactId: 'AAROH-ART-0090',
    webOverview: {
      query: 'Dr B R Ambedkar birth in Mhow 1891 early childhood family',
      summary:
        'Dr. B. R. Ambedkar was born on April 14, 1891, in the military cantonment town of Mhow (now officially Dr. Ambedkar Nagar, Madhya Pradesh). His father, Ramji Maloji Sakpal, was a Subedar-Major in the British Indian Army and a devotee of the Kabir Panth. Despite experiencing humiliating untouchability in school—such as being denied water by touch—his early family environment instilled in him discipline, love for learning, and moral fortitude.',
      takeaways: [
        'Fourteenth child of Ramji Sakpal and Bhimbai, raised in a military cantonment culture.',
        'Experienced childhood segregation, which later formed his profound critiques of graded inequality.',
        'Given the surname Ambedkar by his school teacher Krishnaji Keshav Ambedkar.',
      ],
      sources: [
        {
          title: 'Dr. Ambedkar Memorial, Mhow - National Heritage',
          domain: 'mptourism.com',
          url: 'https://www.mptourism.com/destination-mhow.php',
          snippet: 'Official memorial commemorating the birthplace and early years of Dr. Bhimrao Ramji Ambedkar in Mhow.',
        },
        {
          title: 'Dr. B.R. Ambedkar: Life and Mission (Keer)',
          domain: 'columbia.edu',
          url: 'https://www.columbia.edu/itc/mealac/pritchett/00ambedkar/',
          snippet: 'Biographical chronicles of young Bhimrao Sakpal at the Mhow military station and family lineage.',
        },
      ],
    },
  },
  {
    id: 'tl-1907',
    year: '1907',
    date: '1907–1912',
    category: 'Higher Education',
    title: 'Elphinstone High School & Graduation in Bombay',
    image: '/assets/archive/archive-library.jpg',
    caption: 'Academic archives documenting Dr. Ambedkar’s collegiate achievements in Bombay.',
    description:
      'Passed the Bombay University Matriculation Examination from Elphinstone High School in 1907—an unprecedented triumph for an untouchable youth of that era. Social reformer S. K. Bole organized a civic felicitation where author K. A. Keluskar presented him with a life of Gautam Buddha, planting the intellectual seeds of his spiritual destiny.',
    keyPoints: [
      'First student from his community to matriculate from Elphinstone High School, Bombay.',
      'Received the biography of Gautam Buddha from Krishnaji Arjun Keluskar in 1907.',
      'Awarded a monthly collegiate stipend by progressive Maharaja Sayajirao Gaekwad III of Baroda.',
    ],
    relatedArtifactId: 'AAROH-ART-0048',
    webOverview: {
      query: 'Ambedkar 1907 matriculation Elphinstone College Keluskar Buddha life',
      summary:
        'Ambedkar’s 1907 matriculation was celebrated as a milestone across western India. Maharaja Sayajirao Gaekwad III granted him a scholarship of 25 rupees per month, enabling him to graduate from Elphinstone College in 1912 with a B.A. in Economics and Political Science before serving in Baroda State administration.',
      takeaways: [
        'Graduated with a Bachelor of Arts in Economics and Politics from the University of Bombay (1912).',
        'Keluskar’s gift of Buddha’s life story initiated his 50-year scholarly investigation into Buddhism.',
        'Overcame systemic educational exclusion through rigorous self-study and princely patronage.',
      ],
      sources: [
        {
          title: 'Dr. Ambedkar at Elphinstone College, Bombay',
          domain: 'elphinstone.ac.in',
          url: 'https://elphinstone.ac.in/history',
          snippet: 'Historical college registers and records of Bhimrao R. Ambedkar studying economics and politics.',
        },
        {
          title: 'Baroda State Scholarships and Dr. Ambedkar',
          domain: 'barodaarchives.gov.in',
          url: 'https://baroda.nic.in/history/',
          snippet: 'Official records of Sayajirao Gaekwad III awarding education grants for overseas study.',
        },
      ],
    },
  },
  {
    id: 'tl-1913',
    year: '1913',
    date: '1913–1916',
    category: 'Global Scholarship',
    title: 'Columbia University Fellowship & Doctoral Research',
    image: '/assets/archive/archive-library.jpg',
    caption: 'Columbia University Low Memorial Library where Dr. Ambedkar immersed himself in 18-hour study days.',
    description:
      'Arrived in New York in July 1913 on a Baroda State Scholarship. Under prominent philosophers and economists like John Dewey, Edwin R. A. Seligman, and Alexander Goldenweiser, Ambedkar earned both M.A. and Ph.D. degrees, authoring his groundbreaking anthropological paper "Castes in India: Their Mechanism, Genesis and Development".',
    keyPoints: [
      'Earned M.A. in 1915 with dissertation "Administration and Finance of the East India Company".',
      'Presented "Castes in India" in May 1916, identifying endogamy as the core machinery maintaining caste.',
      'John Dewey’s pragmatic philosophy deeply influenced his lifelong commitment to democratic equality.',
    ],
    relatedArtifactId: 'AAROH-ART-0040',
    webOverview: {
      query: 'Dr Ambedkar Columbia University John Dewey Ph.D. Castes in India 1913-1916',
      summary:
        'Dr. Ambedkar often described his years at Columbia University as the first time in his life where he experienced freedom from caste discrimination. He read voraciously—often 18 hours daily—earning his doctorate in Economics. Columbia awarded him an honorary LL.D. in 1952, recognizing him as a "framer of the Constitution and great social leader".',
      takeaways: [
        'Formulated the foundational sociological definition of caste as "an enclosed class" through endogamy.',
        'Mentored by John Dewey, whose ideas on democracy as a "mode of associated living" inspired Ambedkar’s writing.',
        'Columbia University celebrates Dr. Ambedkar as one of its most illustrious alumni in human history.',
      ],
      sources: [
        {
          title: 'Columbia University: Dr. B. R. Ambedkar Collection',
          domain: 'columbia.edu',
          url: 'https://www.columbia.edu/itc/mealac/pritchett/00ambedkar/',
          snippet: 'Complete digital archive of Ambedkar’s papers, dissertations, and photographs at Columbia.',
        },
        {
          title: 'Ambedkar at Columbia: 1913–1916 Centennial',
          domain: 'library.columbia.edu',
          url: 'https://library.columbia.edu/news/libraries/2016/ambedkar-centennial.html',
          snippet: 'Centennial exhibition exploring his master’s and doctoral degrees under Professor Seligman.',
        },
      ],
    },
  },
  {
    id: 'tl-1916',
    year: '1916',
    date: '1916–1923',
    category: 'London Scholarship',
    title: 'London School of Economics (LSE) & Gray’s Inn Bar',
    image: '/assets/archive/archive-library.jpg',
    caption: 'LSE British Library of Political and Economic Science where Ambedkar researched monetary theory.',
    description:
      'Enrolled at the London School of Economics and Political Science (LSE) for his D.Sc. and Gray’s Inn to read for the Bar. Despite the sudden cancellation of his Baroda stipend forcing a temporary return to India, he persevered and returned to London in 1920 to earn his M.Sc., Doctor of Science (Economics), and qualification as Barrister-at-Law.',
    keyPoints: [
      'Authored "The Problem of the Rupee: Its Origin and Its Solution", earning the prestigious D.Sc. from LSE.',
      'His monetary and currency research directly inspired the formation of the Reserve Bank of India (RBI).',
      'Called to the Bar at Gray’s Inn in 1923, certifying him to practice before high courts.',
    ],
    relatedArtifactId: 'AAROH-ART-0010',
    webOverview: {
      query: 'Ambedkar London School of Economics DSc Problem of the Rupee Grays Inn RBI',
      summary:
        'Ambedkar’s doctoral thesis at LSE, "The Problem of the Rupee", was a masterwork of currency stabilization and economic sovereignty. When the Hilton Young Commission on Indian Currency and Finance gathered in 1925, Ambedkar’s evidence and written treatises served as the intellectual framework for establishing India’s central bank, the Reserve Bank of India.',
      takeaways: [
        'First Indian to earn a Doctor of Science (D.Sc.) in Economics from the London School of Economics.',
        'Conceptualized price stability and central currency governance prior to the RBI Act of 1934.',
        'Qualified as a Barrister-at-Law at Gray’s Inn, London, championing legal defense for subaltern litigants.',
      ],
      sources: [
        {
          title: 'LSE Archives: Dr Bhimrao Ramji Ambedkar (DSc 1923)',
          domain: 'lse.ac.uk',
          url: 'https://blogs.lse.ac.uk/lsehistory/2016/04/14/b-r-ambedkar-at-lse/',
          snippet: 'Historical portrait, student registration files, and thesis submission records at LSE.',
        },
        {
          title: 'Reserve Bank of India: Origins and Dr. Ambedkar',
          domain: 'rbi.org.in',
          url: 'https://www.rbi.org.in/scripts/briefhistory.aspx',
          snippet: 'Official RBI historical archives recognizing Ambedkar’s evidence to the Royal Commission.',
        },
      ],
    },
  },
  {
    id: 'tl-1920',
    year: '1920',
    date: '31 January 1920',
    category: 'Independent Journalism',
    title: 'Launching Mooknayak (Leader of the Voiceless)',
    image: '/assets/archive/mooknayak.jpg',
    caption: 'Historic front page of the inaugural issue of Mooknayak published in Bombay on 31 January 1920.',
    description:
      'On 31 January 1920, Dr. Ambedkar launched the landmark Marathi fortnightly newspaper "Mooknayak" in Bombay with financial backing from Chhatrapati Shahu Maharaj of Kolhapur. The periodical shattered the silence of mainstream Indian media and gave an uncompromising voice to the disinherited.',
    keyPoints: [
      'Published with the motto taken from saint-poet Tukaram: "What shall I do to make you hear my voice?".',
      'The iconic first editorial compared Hindu society to a multi-storeyed tower without stairs, trapping people forever.',
      'Pioneered autonomous subaltern journalism, setting the stage for Bahishkrit Bharat and Janata.',
    ],
    relatedArtifactId: 'AAROH-ART-0050',
    webOverview: {
      query: 'Mooknayak newspaper Dr Ambedkar 1920 Shahu Maharaj editorial impact',
      summary:
        'Mooknayak marked the arrival of Dr. Ambedkar as the undisputed intellectual leader of India’s depressed classes. He argued that social democracy was far more vital than purely political nationalism, demonstrating that political independence without social equality would merely replace British masters with domestic feudal oligarchs.',
      takeaways: [
        'Published 19 issues between January and July 1920 before Ambedkar returned to London to finish his D.Sc.',
        'Chhatrapati Shahu Maharaj of Kolhapur contributed 2,500 rupees to fund the independent printing press.',
        'Established journalism as an essential weapon for social awakening and political mobilization.',
      ],
      sources: [
        {
          title: 'Mooknayak: Centenary of Ambedkar’s First Newspaper',
          domain: 'pib.gov.in',
          url: 'https://pib.gov.in/PressReleasePage.aspx?PRID=1601247',
          snippet: 'Press Information Bureau feature on the 100th anniversary of Mooknayak and its democratic legacy.',
        },
        {
          title: 'Dr. Ambedkar Writings and Speeches, Vol. 17',
          domain: 'mea.gov.in',
          url: 'https://www.mea.gov.in/ambedkar.htm',
          snippet: 'Complete English translations of Mooknayak editorials and polemical writings.',
        },
      ],
    },
  },
  {
    id: 'tl-1924',
    year: '1924',
    date: '20 July 1924',
    category: 'Organization & Movement',
    title: 'Founding the Bahishkrit Hitakarini Sabha',
    image: '/assets/archive/bahishkrit-bharat.jpg',
    caption: 'Archival masthead and organizational records of Bahishkrit Hitakarini Sabha.',
    description:
      'On 20 July 1924, Dr. Ambedkar established the Bahishkrit Hitakarini Sabha (Association for the Welfare of the Excluded) at Damodar Hall, Parel, Bombay. He gave the world the immortal clarion motto: "Educate, Agitate, Organize" as the sacred formula for self-emancipation.',
    keyPoints: [
      'Adopted the foundational motto: "Educate, Agitate, Organize" (Shikshit Vha, Sanghatit Vha, Sangharsh Kara).',
      'Established free student hostels, libraries, and industrial night schools in western India.',
      'Marked the transition from petitionary begging to autonomous, organized rights-based activism.',
    ],
    relatedArtifactId: 'AAROH-ART-0051',
    webOverview: {
      query: 'Bahishkrit Hitakarini Sabha 1924 Educate Agitate Organize Ambedkar Parel',
      summary:
        'The Bahishkrit Hitakarini Sabha was the institutional engine that launched Dr. Ambedkar’s civil rights movement. In its founding manifesto, Ambedkar insisted that human degradation can only be overcome by self-reliance, moral discipline, and intellectual empowerment rather than dependent upper-caste benevolence.',
      takeaways: [
        'Opened the first Saraswati Vilas library and student boarding houses in Sholapur and Bombay.',
        'Submitted constitutional memorandums on untouchability to the Simon Commission and British committees.',
        'Directly organized the historic Mahad Chavdar Tale satyagraha committees.',
      ],
      sources: [
        {
          title: 'Bahishkrit Hitakarini Sabha: Genesis and Charter',
          domain: 'ambedkarfoundation.nic.in',
          url: 'https://ambedkarfoundation.nic.in',
          snippet: 'Official history of the 1924 association and its social welfare institutions.',
        },
        {
          title: 'National Archives of India: Dr. Ambedkar Papers',
          domain: 'nationalarchives.nic.in',
          url: 'https://nationalarchives.nic.in',
          snippet: 'Founding resolutions and petitions of the Bahishkrit Hitakarini Sabha.',
        },
      ],
    },
  },
  {
    id: 'tl-1927',
    year: '1927',
    date: '20 March & 25 December 1927',
    category: 'Civil Rights Satyagraha',
    title: 'The Mahad Satyagraha & Manusmriti Dahan',
    image: '/assets/archive/mahad-tank.jpg',
    caption: 'Chavdar Tale freshwater tank at Mahad, Maharashtra, site of the 1927 water liberation satyagraha.',
    description:
      'On 20 March 1927, Dr. Ambedkar led thousands of men and women to Chavdar Tale in Mahad to drink water from a public reservoir where animals drank freely but untouchables were banned. Later that year, on 25 December 1927, he publicly consigned the Manusmriti to flames, declaring war on scriptural caste tyranny.',
    keyPoints: [
      'Declared: "We are not going to the tank merely to drink water. We are going to establish that we are human beings."',
      'Celebrated nationwide as Samajik Samata Divas (Social Empowerment Day) every 20 March.',
      'Manusmriti Dahan on 25 December 1927 signaled a decisive philosophical break with orthodoxy.',
    ],
    relatedArtifactId: 'AAROH-ART-0031',
    webOverview: {
      query: 'Mahad Satyagraha 1927 Chavdar Tale Manusmriti Dahan Dr Ambedkar water rights',
      summary:
        'The Mahad Satyagraha is universally regarded as the Magna Carta of the Dalit civil rights struggle. Ambedkar demanded that the Bole Resolution passed by the Bombay Legislative Council be implemented in reality. When orthodox groups purified the lake with cow dung and cow urine, Ambedkar organized a follow-up conference on 25 December 1927, publicly burning the Manusmriti in a specially constructed pit.',
      takeaways: [
        'Asserted fundamental civil rights to natural water resources across British India.',
        'Women played a prominent role; Ambedkar addressed thousands of women, urging them to discard symbols of degradation.',
        'Led to protracted legal battles in the Bombay High Court, which ultimately ruled in favor of the untouchables in 1937.',
      ],
      sources: [
        {
          title: 'Mahad: The March for Water and Human Rights',
          domain: 'columbia.edu',
          url: 'https://www.columbia.edu/itc/mealac/pritchett/00ambedkar/txt_ambedkar_mahad.html',
          snippet: 'Full historical documentary transcript of Dr. Ambedkar’s address at Mahad in 1927.',
        },
        {
          title: 'Social Empowerment Day: Remembering Mahad 1927',
          domain: 'pib.gov.in',
          url: 'https://pib.gov.in',
          snippet: 'Government commemoration of Dr. Ambedkar’s water liberation movement.',
        },
      ],
    },
  },
  {
    id: 'tl-1930',
    year: '1930',
    date: '1930–1931',
    category: 'London Diplomacy',
    title: 'Round Table Conference & Kalaram Satyagraha',
    image: '/assets/archive/round-table-conference.png',
    caption: 'St. James’s Palace, London: Dr. Ambedkar representing the Depressed Classes before world leaders.',
    description:
      'Attended the historic Round Table Conferences in London (1930–1932) as the sole authentic representative of India’s depressed classes. He engaged in fierce constitutional debates, demanding statutory human rights, universal adult franchise, and separate electorates. Simultaneously, his comrades in Nashik waged the non-violent Kalaram Temple Entry Satyagraha.',
    keyPoints: [
      'Demanded statutory safeguards and a Declaration of Fundamental Rights in the future constitution.',
      'Refused to subordinate the emancipation of 60 million untouchables to elite political compromises.',
      'Kalaram Temple Satyagraha (1930–1935) proved that internal caste reform was an illusion.',
    ],
    relatedArtifactId: 'AAROH-ART-0030',
    webOverview: {
      query: 'Ambedkar Round Table Conference 1930 London Depressed Classes speech',
      summary:
        'At the First Round Table Conference in November 1930, Dr. Ambedkar delivered an electrifying address at St. James’s Palace. He asserted that India’s depressed classes were neither pro-British nor anti-national, but insisted that self-government must protect them from both British bureaucracy and domestic feudal subjugation.',
      takeaways: [
        'Presented a comprehensive "Declaration of Fundamental Rights" protecting minority communities.',
        'Secured the Communal Award in August 1932 granting separate electorates to depressed classes.',
        'Positioned the rights of marginalized Indians firmly on the international constitutional stage.',
      ],
      sources: [
        {
          title: 'Proceedings of the Indian Round Table Conference (1930-1932)',
          domain: 'nationalarchives.gov.uk',
          url: 'https://discovery.nationalarchives.gov.uk',
          snippet: 'Official Hansard transcripts of Dr. Ambedkar’s speeches before the British Cabinet.',
        },
        {
          title: 'Dr. Ambedkar at the Round Table Conference: Writings & Speeches Vol 2',
          domain: 'mea.gov.in',
          url: 'https://www.mea.gov.in/ambedkar.htm',
          snippet: 'Complete memorandum submitted by Dr. Ambedkar on safeguards for Depressed Classes.',
        },
      ],
    },
  },
  {
    id: 'tl-1932',
    year: '1932',
    date: '24 September 1932',
    category: 'Constitutional Compact',
    title: 'The Historic Poona Pact at Yerwada Jail',
    image: '/assets/archive/round-table-conference.png',
    caption: 'Dr. Ambedkar negotiating the Poona Pact at Yerwada Central Jail in Pune.',
    description:
      'When British Prime Minister Ramsay MacDonald granted separate electorates to the Depressed Classes, Mahatma Gandhi commenced a fast-unto-death in Yerwada Jail in protest. Facing intense national turmoil and risk of massive reprisals against his community, Dr. Ambedkar negotiated the Poona Pact, securing 148 reserved seats in provincial legislatures—more than double the British award.',
    keyPoints: [
      'Signed on 24 September 1932 at Yerwada Central Jail by Dr. Ambedkar and Madan Mohan Malaviya.',
      'Increased reserved seats in provincial legislatures from 71 (Communal Award) to 148.',
      'Established reserved seats within joint electorates, laying the legal foundation for modern quota legislation.',
    ],
    relatedArtifactId: 'AAROH-ART-0080',
    webOverview: {
      query: 'Poona Pact 1932 Ambedkar Gandhi Yerwada analysis reserved seats',
      summary:
        'The Poona Pact was one of the most critical political negotiations in modern Indian history. While Ambedkar relinquished separate electorates to save Gandhi’s life, he extracted unprecedented guarantees for reserved legislative representation and educational allocations, establishing political reservation principles that continue to shape Indian democracy.',
      takeaways: [
        'Provincial council seats for Depressed Classes increased from 71 to 148 seats.',
        '18% of all general seats in the Central Legislative Assembly were reserved.',
        'Ambedkar later analyzed the long-term electoral consequences in "What Congress and Gandhi Have Done to the Untouchables" (1945).',
      ],
      sources: [
        {
          title: 'The Poona Pact Agreement Text (1932)',
          domain: 'constitutionofindia.net',
          url: 'https://www.constitutionofindia.net/historical_constitutions/the_poona_pact__1932__24th_september_1932',
          snippet: 'Complete legal text and signatories of the historic agreement signed at Yerwada.',
        },
        {
          title: 'Dr. Ambedkar’s Account of the Poona Pact Negotiations',
          domain: 'columbia.edu',
          url: 'https://www.columbia.edu/itc/mealac/pritchett/00ambedkar/',
          snippet: 'Ambedkar’s detailed retrospective analysis of the Yerwada fast and political settlement.',
        },
      ],
    },
  },
  {
    id: 'tl-1935',
    year: '1935',
    date: '13 October 1935',
    category: 'Spiritual Declaration',
    title: 'The Historic Yeola Declaration',
    image: '/assets/archive/deekshabhoomi.jpg',
    caption: 'Historical assembly at Yeola where Dr. Ambedkar proclaimed his spiritual departure.',
    description:
      'At the Bombay Provincial Depressed Classes Conference held in Yeola, Nashik on 13 October 1935, Dr. Ambedkar made his momentous spiritual declaration. After ten years of non-violent temple-entry satyagrahas were met with stone-walling orthodox resistance, he declared to over 10,000 delegates: "I was born a Hindu... but I will not die a Hindu."',
    keyPoints: [
      'Delivered his famous address: "What Path to Freedom" (Mukti Kon Pathe).',
      'Exhorted the oppressed to abandon illusory hopes of internal caste reformation.',
      'Initiated a comprehensive 21-year scholarly search that culminated in the Buddhist conversion at Nagpur.',
    ],
    relatedArtifactId: 'AAROH-ART-0032',
    webOverview: {
      query: 'Yeola Declaration 1935 Ambedkar I will not die a Hindu conference speech',
      summary:
        'Ambedkar’s declaration at Yeola sent shockwaves across British India and the international press. Religious leaders from Islam, Christianity, Sikhism, and Buddhism immediately sought his allegiance. However, Ambedkar refused opportunistic alliances, spending the next two decades meticulously investigating which spiritual philosophy truly offered rationalism, equality, and human dignity.',
      takeaways: [
        'Marks the philosophical pivot from civil agitation within Hinduism to an autonomous spiritual path.',
        'Ambedkar insisted that religion must be judged by its moral standards of Liberty, Equality, and Fraternity.',
        'Paved the way for the historic revival of Buddhism on Indian soil in 1956.',
      ],
      sources: [
        {
          title: 'The Yeola Resolution and Speech Text',
          domain: 'ambedkar.org',
          url: 'https://www.ambedkar.org',
          snippet: 'Complete Marathi and English texts of Dr. Ambedkar’s address at Yeola.',
        },
        {
          title: 'Columbia University: Religious Conversion and Ambedkar',
          domain: 'columbia.edu',
          url: 'https://www.columbia.edu/itc/mealac/pritchett/00ambedkar/',
          snippet: 'Scholarly evaluation of the 1935 Yeola speech and its impact on Indian politics.',
        },
      ],
    },
  },
  {
    id: 'tl-1936',
    year: '1936',
    date: '1936',
    category: 'Philosophical Masterwork',
    title: 'Publication of "Annihilation of Caste"',
    image: '/assets/archive/ambedkar-manuscript.png',
    caption: 'Original printed manuscript and title pages of Annihilation of Caste (1936).',
    description:
      'Wrote his masterpiece "Annihilation of Caste" as a presidential address for the Jat-Pat Todak Mandal of Lahore. When the reformist organizers asked him to redact his scathing critique of the Vedas and Shastras, Ambedkar refused to compromise a single word, canceled the address, and published the book at his own personal expense.',
    keyPoints: [
      'Demonstrated that caste is not a division of labor, but a division of laborers.',
      'Argued that the real enemy is not individual caste Hindus, but the sanctity granted to caste by sacred scriptures.',
      'Formed the Independent Labour Party (ILP) in the same year, winning 14 seats in the 1937 Bombay elections.',
    ],
    relatedArtifactId: 'AAROH-ART-0002',
    webOverview: {
      query: 'Annihilation of Caste 1936 Ambedkar Jat-Pat Todak Mandal thesis analysis',
      summary:
        'Annihilation of Caste is internationally hailed as one of the greatest sociological and political treatises of the 20th century. Ambedkar argued that inter-caste dining and inter-caste marriages were inadequate Band-Aids; genuine annihilation required destroying the religious belief that caste is divinely ordained.',
      takeaways: [
        'Provoked a celebrated debate with Mahatma Gandhi, who responded in his journal "Harijan".',
        'Ambedkar’s rejoinder to Gandhi expanded the book into an immortal classic of political theory.',
        'Translated into every major world language and studied across global universities.',
      ],
      sources: [
        {
          title: 'Annihilation of Caste: Complete Text with Annotations',
          domain: 'columbia.edu',
          url: 'https://www.columbia.edu/itc/mealac/pritchett/00ambedkar/txt_ambedkar_salvation.html',
          snippet: 'Full unabridged digital edition of the 1936 text, including correspondence with Gandhi.',
        },
        {
          title: 'Dr. Ambedkar Writings and Speeches, Vol. 1',
          domain: 'mea.gov.in',
          url: 'https://www.mea.gov.in/ambedkar.htm',
          snippet: 'Government of India authorized critical edition of Annihilation of Caste.',
        },
      ],
    },
  },
  {
    id: 'tl-1942',
    year: '1942',
    date: '1942–1946',
    category: 'National Governance',
    title: 'Labour Member of Viceroy’s Executive Council',
    image: '/assets/hero/hero_parliament_bg.jpg',
    caption: 'Council Secretariat and Parliament where Dr. Ambedkar pioneered India’s labour and river valley laws.',
    description:
      'Appointed Member for Labour in the Governor-General’s Executive Council during World War II. Dr. Ambedkar radically reformed Indian labor law, establishing the 8-hour workday, equal pay for equal work, maternal benefit legislation, and creating the Central Waterways, Irrigation and Navigation Commission (CWINC).',
    keyPoints: [
      'Reduced daily working hours from 12 hours to 8 hours across Indian industries in 1942.',
      'Architect of major multi-purpose river valley development projects: Damodar Valley and Hirakud.',
      'Instituted the tripartite Indian Labour Conference, social security laws, and national employment exchanges.',
    ],
    relatedArtifactId: 'AAROH-ART-0037',
    webOverview: {
      query: 'Ambedkar Labour Member Viceroy Council 8 hour workday Damodar Valley Central Water Commission',
      summary:
        'Dr. Ambedkar’s four-year tenure as Labour Member laid the industrial, hydraulic, and electrical foundations of modern India. He viewed water resource development, electric power, and fair labor standards as indispensable keys to industrializing India and liberating rural landless laborers from village bondage.',
      takeaways: [
        'Enacted the Mines Maternity Benefit Act, Factories Act amendments, and Indian Trade Unions Act.',
        'Pioneered the Central Water, Irrigation and Navigation Commission (now Central Water Commission).',
        'Established India’s National Power Grid concept and River Valley Corporation laws.',
      ],
      sources: [
        {
          title: 'Ministry of Labour & Employment: Ambedkar’s Legacy',
          domain: 'labour.gov.in',
          url: 'https://labour.gov.in',
          snippet: 'Historical archive of labor codes and factory acts authored by Dr. B. R. Ambedkar.',
        },
        {
          title: 'Central Water Commission: Vision of Dr. Ambedkar',
          domain: 'cwc.gov.in',
          url: 'https://cwc.gov.in',
          snippet: 'Official commemorative monograph on Dr. Ambedkar as the architect of India’s water policy.',
        },
      ],
    },
  },
  {
    id: 'tl-1947',
    year: '1947',
    date: '15 & 29 August 1947',
    category: 'Constitutional Architecture',
    title: 'Drafting Committee Chairman & First Law Minister',
    image: '/assets/archive/constituent-assembly.jpg',
    caption: 'Dr. Ambedkar in the Constituent Assembly chamber steering the Drafting Committee.',
    description:
      'Following India’s independence on 15 August 1947, Prime Minister Jawaharlal Nehru invited Dr. Ambedkar to join the inaugural Cabinet as independent India’s First Law Minister. On 29 August 1947, the Constituent Assembly unanimously appointed him Chairman of the Drafting Committee to frame the Constitution of free India.',
    keyPoints: [
      'Steered the Drafting Committee through 141 exhaustive sessions over nearly three years.',
      'Authored and defended fundamental rights, directive principles, and institutional checks and balances.',
      'Inserted Article 17, declaring the practice of untouchability unconstitutional and punishable by law.',
    ],
    relatedArtifactId: 'AAROH-ART-0061',
    webOverview: {
      query: 'Ambedkar Drafting Committee Chairman Constituent Assembly August 1947 debates',
      summary:
        'Dr. Ambedkar’s appointment as Drafting Committee Chairman proved to be the defining event in the creation of modern democratic India. Endowed with unmatched mastery of comparative jurisprudence, he synthesized principles from American, British, Irish, Canadian, and French constitutional traditions while designing unprecedented protections for marginalized citizens.',
      takeaways: [
        'Chaired seven members including Alladi Krishnaswami Ayyar, K. M. Munshi, and N. Gopalaswami Ayyangar.',
        'Drafted Article 32 (Right to Constitutional Remedies), which he called "the heart and soul of the Constitution".',
        'Defended universal adult franchise against skeptics who wanted voting restricted to property owners.',
      ],
      sources: [
        {
          title: 'Constituent Assembly Debates (CADIndia)',
          domain: 'constitutionofindia.net',
          url: 'https://www.constitutionofindia.net/assembly_debates',
          snippet: 'Searchable digital repository of every speech delivered by Dr. Ambedkar during constitution framing.',
        },
        {
          title: 'Parliament of India: Drafting the Constitution',
          domain: 'sansad.in',
          url: 'https://sansad.in',
          snippet: 'Official parliamentary monograph on the Drafting Committee and Dr. B. R. Ambedkar.',
        },
      ],
    },
  },
  {
    id: 'tl-1949',
    year: '1949',
    date: '25 & 26 November 1949',
    category: 'Constitutional Adoption',
    title: 'Presentation & Adoption of the Constitution',
    image: '/assets/archive/constitution-signing.jpg',
    caption: 'Dr. Ambedkar presenting the completed Constitution Draft to President Dr. Rajendra Prasad.',
    description:
      'On 25 November 1949, Dr. Ambedkar delivered his monumental final address to the Constituent Assembly. On 26 November 1949, the Assembly adopted the Constitution of India. In his historic speech, Ambedkar sounded a prophetic warning: political democracy must become a social democracy, or the temple of liberty would be overthrown.',
    keyPoints: [
      'Delivered the immortal warning: "On the 26th of January 1950, we are going to enter into a life of contradictions."',
      'Warned against hero-worship (Bhakti) in politics as a certain road to degradation and eventual dictatorship.',
      '26 November is celebrated nationwide every year as Constitution Day (Samvidhan Divas).',
    ],
    relatedArtifactId: 'AAROH-ART-0035',
    webOverview: {
      query: 'Ambedkar 25 November 1949 speech life of contradictions Constitution Day',
      summary:
        'Ambedkar’s final speech on 25 November 1949 is widely considered one of the greatest statecraft orations in global history. He warned that holding a vote once every five years (political democracy) is meaningless if society remains fractured by caste and economic exploitation (social democracy). He called upon Indians to uphold constitutional methods and abandon satyagraha when democratic avenues exist.',
      takeaways: [
        'Articulated the tripartite union: "Liberty cannot be divorced from equality, equality cannot be divorced from liberty. Nor can liberty and equality be divorced from fraternity."',
        'Assembly President Dr. Rajendra Prasad praised Ambedkar’s steering of the Constitution as "a task performed with supreme skill and tact".',
        'Adopted by 284 signatures in the historic Constitution Hall in New Delhi.',
      ],
      sources: [
        {
          title: 'Dr. Ambedkar’s Final Speech in Constituent Assembly (25 Nov 1949)',
          domain: 'constitutionofindia.net',
          url: 'https://www.constitutionofindia.net/assembly_debates/volume/11',
          snippet: 'Full official transcript of Ambedkar’s prophetic "Life of Contradictions" address.',
        },
        {
          title: 'Press Information Bureau: Samvidhan Divas Heritage',
          domain: 'pib.gov.in',
          url: 'https://pib.gov.in',
          snippet: 'Historical photo documentation of the presentation and signing of the original draft.',
        },
      ],
    },
  },
  {
    id: 'tl-1950',
    year: '1950',
    date: '26 January 1950',
    category: 'The Sovereign Republic',
    title: 'The Constitution Comes into Full Force',
    image: '/assets/archive/constitution-preamble.jpg',
    caption: 'Illuminated original Preamble declaring the Sovereign Democratic Republic of India.',
    description:
      'On 26 January 1950, the Constitution of India came into full effect, legally dissolving the colonial dominion and inaugurating the sovereign democratic Republic. In a single stroke, it granted universal adult franchise to all adult citizens regardless of caste, creed, gender, or wealth.',
    keyPoints: [
      'The largest and most comprehensive written constitution in human history became effective.',
      'Eliminated discriminatory literacy and tax qualifications, giving the poorest citizen the same vote as the wealthiest.',
      'Enshrined affirmative action and reservations for Scheduled Castes and Scheduled Tribes.',
    ],
    relatedArtifactId: 'AAROH-ART-0060',
    webOverview: {
      query: 'Constitution of India January 26 1950 Sovereign Democratic Republic Ambedkar',
      summary:
        'With the enactment of the Constitution on 26 January 1950, India became the world’s most populous democracy. Dr. Ambedkar’s vision turned an ancient hierarchical civilization into a modern constitutional republic rooted in individual rights, secularism, and institutional accountability.',
      takeaways: [
        'Created a three-tier federal architecture with an independent judiciary and autonomous Election Commission.',
        'Abolished untouchability and titles of nobility under Fundamental Rights (Articles 14–18).',
        'Instituted judicial review empowering courts to strike down unconstitutional legislation.',
      ],
      sources: [
        {
          title: 'National Portal of India: Constitution Heritage',
          domain: 'india.gov.in',
          url: 'https://www.india.gov.in/my-government/constitution-india',
          snippet: 'Complete digital facsimile of the original illustrated Constitution of India.',
        },
        {
          title: 'Supreme Court of India: The Constitutional Mandate',
          domain: 'main.sci.gov.in',
          url: 'https://main.sci.gov.in',
          snippet: 'Historical origins and judicial development of Fundamental Rights under Dr. Ambedkar.',
        },
      ],
    },
  },
  {
    id: 'tl-1951',
    year: '1951',
    date: 'September 1951',
    category: 'Gender Justice & Reform',
    title: 'Championing the Hindu Code Bill & Resignation',
    image: '/assets/hero/vintage_books_card.jpg',
    caption: 'Parliamentary records of the Hindu Code Bill and Dr. Ambedkar’s principled resignation.',
    description:
      'As Law Minister, Dr. Ambedkar drafted and introduced the historic Hindu Code Bill to revolutionize women’s legal status—granting women equal inheritance rights, absolute property ownership, civil divorce laws, and outlawing polygamy. When reactionary elements in Parliament stalled the bill, Ambedkar resigned from the Cabinet on 27 September 1951 on principle.',
    keyPoints: [
      'Proclaimed: "I measure the progress of a community by the degree of progress which women have achieved."',
      'Resigned from the Cabinet when Prime Minister Nehru postponed the comprehensive enactment of the Bill.',
      'His draft was later passed piecemeal (Hindu Marriage Act 1955, Hindu Succession Act 1956), vindicating his vision.',
    ],
    relatedArtifactId: 'AAROH-ART-0036',
    webOverview: {
      query: 'Ambedkar Hindu Code Bill 1951 resignation women equal property rights inheritance',
      summary:
        'Dr. Ambedkar considered his work on the Hindu Code Bill to be as vital as his work on the Constitution. By providing Hindu women with the legal right to marry outside caste, divorce abusive spouses, and inherit paternal property, he sought to demolish the patriarchal bedrock of the caste system. His principled resignation remains a rare example of ministerial integrity in parliamentary history.',
      takeaways: [
        'Overcame intense conservative opposition inside and outside Parliament.',
        'Established modern Indian family law, dismantling centuries-old codifications of male supremacy.',
        'Revered across Indian feminist jurisprudence as the pioneer of statutory women’s rights.',
      ],
      sources: [
        {
          title: 'Dr. Ambedkar’s Resignation Statement (10 October 1951)',
          domain: 'columbia.edu',
          url: 'https://www.columbia.edu/itc/mealac/pritchett/00ambedkar/',
          snippet: 'Complete statement detailing why he resigned over the stalling of the Hindu Code Bill.',
        },
        {
          title: 'Rajya Sabha Secretariat: The Hindu Code Bill Debates',
          domain: 'sansad.in',
          url: 'https://sansad.in',
          snippet: 'Parliamentary records of the 1948–1951 legislative debates and amendments.',
        },
      ],
    },
  },
  {
    id: 'tl-1956',
    year: '1956',
    date: '14 October & 6 December 1956',
    category: 'Dhamma & Mahaparinirvan',
    title: 'Deekshabhoomi Conversion & Mahaparinirvan',
    image: '/assets/archive/deekshabhoomi.jpg',
    caption: 'Deekshabhoomi, Nagpur: The sacred stupa marking the mass conversion to Buddhism on 14 October 1956.',
    description:
      'On 14 October 1956 (Ashoka Vijayadashami), fulfilling his 1935 Yeola vow, Dr. Ambedkar embraced Buddhism along with over 500,000 followers at Deekshabhoomi in Nagpur. He administered the 22 vows renouncing superstition and pledging to live by wisdom (Prajna) and compassion (Karuna). Having finished his masterwork "The Buddha and His Dhamma", he attained Mahaparinirvan on 6 December 1956 in New Delhi.',
    keyPoints: [
      'Led the largest peaceful mass conversion to Buddhism in human history, reviving the Dhamma in India.',
      'Formulated the 22 Vows (Baavis Pratigya) enshrining ethical rationalism and human dignity.',
      'Completed his magnum opus "The Buddha and His Dhamma" just days before his peaceful passing.',
    ],
    relatedArtifactId: 'AAROH-ART-0038',
    webOverview: {
      query: 'Deekshabhoomi 1956 Nagpur conversion 22 vows Buddha and His Dhamma Mahaparinirvan',
      summary:
        'The historic ceremony at Deekshabhoomi inaugurated the Navayana (New Vehicle) Buddhist renaissance. Dr. Ambedkar presented Buddhism not as metaphysical escapism, but as a scientific, ethical way of life centered on social justice and morality. Millions gather annually on 14 October and 6 December at Deekshabhoomi (Nagpur) and Chaitya Bhoomi (Mumbai) to honor his eternal legacy.',
      takeaways: [
        'Initiated by venerable monk Mahasthavir Chandramani of Burma at Nagpur.',
        'Wrote "The Buddha and Karl Marx", demonstrating the supremacy of democratic Dhamma over violence.',
        'Conferred the Bharat Ratna, India’s highest civilian honour, posthumously in 1990.',
      ],
      sources: [
        {
          title: 'Deekshabhoomi Memorial Trust, Nagpur',
          domain: 'deekshabhoomi.org',
          url: 'https://deekshabhoomi.org',
          snippet: 'Official history of the 1956 Dhamma Deeksha ceremony and sacred stupa architecture.',
        },
        {
          title: 'The Buddha and His Dhamma (Complete Online Text)',
          domain: 'columbia.edu',
          url: 'https://www.columbia.edu/itc/mealac/pritchett/00ambedkar/txt_ahd/ahd_title.html',
          snippet: 'Dr. Ambedkar’s seminal treatise on Buddhist ethics, sociology, and philosophy.',
        },
      ],
    },
  },
]

export const categoryTranslations = {
  'All': 'सभी',
  'Birth & Heritage': 'जन्म एवं धरोहर',
  'Higher Education': 'उच्च शिक्षा',
  'Global Scholarship': 'वैश्विक विद्वता',
  'London Scholarship': 'लंदन अध्ययन',
  'Independent Journalism': 'स्वतंत्र पत्रकारिता',
  'Organization & Movement': 'संगठन व जनांदोलन',
  'Civil Rights Satyagraha': 'नागरिक अधिकार व सत्याग्रह',
  'London Diplomacy': 'लंदन कूटनीति व गोलमेज',
  'Constitutional Compact': 'संवैधानिक समझौता व पूना पैक्ट',
  'Spiritual Declaration': 'आध्यात्मिक घोषणा',
  'Philosophical Masterwork': 'दार्शनिक कालजयी रचना',
  'National Governance': 'राष्ट्रीय शासन व श्रम नीति',
  'Constitutional Architecture': 'संवैधानिक वास्तुकला',
  'Constitutional Adoption': 'संविधान अंगीकार',
  'The Sovereign Republic': 'संप्रभु लोकतांत्रिक गणराज्य',
  'Gender Justice & Reform': 'महिला न्याय व हिंदू कोड बिल',
  'Dhamma & Mahaparinirvan': 'धम्म जागरण व महापरिनिर्वाण',
}

export const timelineTranslationsHI = {
  'tl-1891': {
    title: 'महू छावनी में जन्म एवं आरंभिक जीवन',
    date: '14 अप्रैल 1891',
    caption: 'डॉ. अम्बेडकर नगर (महू), मध्य प्रदेश स्थित जन्मस्थली स्मारक स्तूप।',
    description: 'ब्रिटिश सैन्य छावनी महू में रामजी सकपाल और भीमाबाई के 14वें बच्चे के रूप में भीमराव रामजी सकपाल का जन्म। सैन्य अनुशासन और कबीर पंथ के संस्कारों के बीच बचपन में ही अस्पृश्यता के कठोर भेदभाव को देखा, जिसने सामाजिक समता के लिए उनके संकल्प को दृढ़ किया।',
    keyPoints: [
      'कबीर-पंथी सैनिक परिवार में जन्म, जहां अनुशासन, नैतिकता और ज्ञान को सर्वोच्च महत्व मिला।',
      'विद्यालय में छुआछूत का दंश झेला, जहां कक्षा के बाहर टाट-पट्टी पर बैठकर अध्ययन करना पड़ता था।',
      'प्रतिभाशाली बालक से प्रभावित होकर शिक्षक कृष्णाजी केशव अम्बेडकर ने अपना उपनाम "अम्बेडकर" प्रदान किया।',
    ],
    webSummary: 'डॉ. बी. आर. अम्बेडकर का जन्म 14 अप्रैल 1891 को महू छावनी (वर्तमान डॉ. अम्बेडकर नगर, मध्य प्रदेश) में हुआ था। उनके पिता रामजी मालोजी सकपाल ब्रिटिश भारतीय सेना में सूबेदार-मेजर थे। विद्यालय में छुआछूत का कड़वा अनुभव सहने के बावजूद पारिवारिक संस्कारों ने उनमें अदम्य ज्ञान-पिपासा और आत्मसम्मान का बीजारोपण किया।',
    takeaways: [
      'रामजी सकपाल और भीमाबाई की 14वीं संतान, छावनी वातावरण में नैतिक मूल्यों के साथ पालन-पोषण।',
      'बचपन में झेले गए जातिगत भेदभाव ने आगे चलकर जाति-व्यवस्था के गहन विश्लेषण की नींव रखी।',
      'स्नेही शिक्षक कृष्णाजी केशव अम्बेडकर द्वारा आधिकारिक अभिलेखों में अम्बेडकर उपनाम दिया गया।',
    ],
  },
  'tl-1907': {
    title: 'एल्फिंस्टन हाई स्कूल व बॉम्बे से ऐतिहासिक स्नातक',
    date: '1907–1912',
    caption: 'बॉम्बे में डॉ. अम्बेडकर की ऐतिहासिक कॉलेज शिक्षा को प्रमाणित करते अभिलेखीय दस्तावेज।',
    description: '1907 में एल्फिंस्टन हाई स्कूल से बॉम्बे विश्वविद्यालय की मैट्रिक परीक्षा उत्तीर्ण की—उस दौर में वंचित वर्ग के किसी युवा के लिए यह अभूतपूर्व उपलब्धि थी। समाज सुधारक एस. के. बोले द्वारा आयोजित नागरिक सत्कार में लेखक के. ए. केलुस्कर ने उन्हें गौतम बुद्ध का जीवन-चरित्र भेंट किया, जिसने उनके जीवन की दिशा तय की।',
    keyPoints: [
      'बॉम्बे के प्रतिष्ठित एल्फिंस्टन हाई स्कूल से मैट्रिक परीक्षा उत्तीर्ण करने वाले समुदाय के प्रथम छात्र।',
      '1907 में के. ए. केलुस्कर द्वारा गौतम बुद्ध के जीवन पर आधारित पुस्तक उपहार स्वरूप प्राप्त हुई।',
      'बड़ौदा के प्रगतिशील महाराजा सयाजीराव गायकवाड़ तृतीय द्वारा उच्च शिक्षा हेतु मासिक छात्रवृत्ति प्रदान की गई।',
    ],
    webSummary: 'अम्बेडकर की 1907 की मैट्रिक सफलता पूरे पश्चिमी भारत में उत्सव का विषय बनी। महाराजा सयाजीराव गायकवाड़ तृतीय ने उन्हें 25 रुपये मासिक छात्रवृत्ति प्रदान की, जिससे उन्होंने 1912 में एल्फिंस्टन कॉलेज से अर्थशास्त्र और राजनीति विज्ञान में बी.ए. की डिग्री प्राप्त की।',
    takeaways: [
      'बॉम्बे विश्वविद्यालय से अर्थशास्त्र और राजनीति में कला स्नातक (बी.ए.) की उपाधि (1912)।',
      'केलुस्कर द्वारा बुद्ध-चरित्र भेंट करने से बौद्ध दर्शन में उनका 50 वर्षों का आजीवन अध्ययन आरंभ हुआ।',
      'कठोर स्वाध्याय और छात्रवृत्ति के बल पर शिक्षा के सामाजिक अवरोधों को तोड़ा।',
    ],
  },
  'tl-1913': {
    title: 'कोलंबिया विश्वविद्यालय, न्यूयॉर्क (एम.ए. व पीएच.डी.)',
    date: '1913–1916',
    caption: 'कोलंबिया विश्वविद्यालय का लो मेमोरियल पुस्तकालय, जहां अम्बेडकर प्रतिदिन 18-18 घंटे अध्ययन करते थे।',
    description: 'बड़ौदा रियासत की छात्रवृत्ति पर जुलाई 1913 में न्यूयॉर्क पहुंचे। विश्वप्रसिद्ध दार्शनिक जॉन डेवी और अर्थशास्त्री एडविन सेलिगमैन के मार्गदर्शन में एम.ए. और पीएच.डी. की उपाधियां प्राप्त कीं, और ऐतिहासिक शोध-पत्र "कास्ट्स इन इंडिया: देयर मेकैनिज्म, जेनेसिस एंड डेवलपमेंट" प्रस्तुत किया।',
    keyPoints: [
      '1915 में "ईस्ट इंडिया कंपनी का प्रशासन और वित्त" शोध-प्रबंध पर एम.ए. की उपाधि प्राप्त की।',
      'मई 1916 में "कास्ट्स इन इंडिया" प्रस्तुत कर अंतरजातीय विवाह पर प्रतिबंध (एंडोगैमी) को जाति का मूल तंत्र सिद्ध किया।',
      'जॉन डेवी के व्यावहारिक दर्शन ने उनके लोकतांत्रिक समतावादी विचारों को सदैव के लिए समृद्ध किया।',
    ],
    webSummary: 'डॉ. अम्बेडकर ने कोलंबिया विश्वविद्यालय के वर्षों को अपने जीवन का ऐसा पहला समय बताया जहां उन्होंने जातिगत भेदभाव से मुक्ति का अनुभव किया। उन्होंने अर्थशास्त्र में डॉक्टरेट पूरी की। 1952 में कोलंबिया ने उन्हें "संविधान निर्माता और महान समाज सुधारक" के रूप में मानद एलएल.डी. की उपाधि से अलंकृत किया।',
    takeaways: [
      'जाति को "एंडोगैमी द्वारा बंद किए गए वर्ग" के रूप में समाजशास्त्रीय रूप से परिभाषित किया।',
      'दार्शनिक जॉन डेवी के "सह-संबद्ध जीवन के रूप में लोकतंत्र" के विचार से प्रेरित होकर लेखन किया।',
      'कोलंबिया विश्वविद्यालय डॉ. अम्बेडकर को अपने इतिहास के सबसे गौरवशाली पूर्व छात्रों में गिनता है।',
    ],
  },
  'tl-1916': {
    title: 'लंदन स्कूल ऑफ इकोनॉमिक्स (LSE) व ग्रेज इन बैरिस्टर',
    date: '1916–1923',
    caption: 'लंदन स्कूल ऑफ इकोनॉमिक्स की ब्रिटिश लाइब्रेरी, जहां अम्बेडकर ने मुद्रा और अर्थशास्त्र पर शोध किया।',
    description: 'डी.एससी. उपाधि हेतु लंदन स्कूल ऑफ इकोनॉमिक्स और बैरिस्टर-एट-लॉ हेतु ग्रेज इन में प्रवेश लिया। बड़ौदा छात्रवृत्ति की अवधि समाप्त होने के कारण बीच में स्वदेश लौटना पड़ा, लेकिन 1920 में पुनः लंदन पहुंचकर एम.एससी., डॉक्टर ऑफ साइंस (अर्थशास्त्र) और बैरिस्टर की उपाधियां हासिल कीं।',
    keyPoints: [
      'प्रसिद्ध शोध-ग्रंथ "द प्रॉब्लम ऑफ द रूपी" लिखकर एलएसई से प्रतिष्ठित डी.एससी. (Doctor of Science) की उपाधि अर्जित की।',
      'उनके मौद्रिक और मुद्रा शोध ने भारतीय रिज़र्व बैंक (RBI) की स्थापना हेतु बौद्धिक आधार प्रदान किया।',
      '1923 में ग्रेज इन से बार-एट-लॉ की उपाधि पाकर उच्च न्यायालयों में वकालत हेतु पंजीकृत हुए।',
    ],
    webSummary: 'एलएसई में अम्बेडकर का डॉक्टरेट थीसिस "द प्रॉब्लम ऑफ द रूपी" मुद्रा स्थिरीकरण का उत्कृष्ट ग्रंथ था। 1925 में जब हिल्टन यंग कमीशन (रॉयल कमीशन) भारत आया, तो अम्बेडकर के साक्ष्य और तर्कों के आधार पर 1934 के अधिनियम द्वारा भारतीय रिज़र्व बैंक की रूपरेखा बनी।',
    takeaways: [
      'लंदन स्कूल ऑफ इकोनॉमिक्स से अर्थशास्त्र में डी.एससी. प्राप्त करने वाले प्रथम भारतीय।',
      'आरबीआई की स्थापना से एक दशक पूर्व ही मूल्य स्थिरता और केंद्रीय मुद्रा नियंत्रण की अवधारणा रखी।',
      'ग्रेज इन से बैरिस्टर बनकर शोषित और वंचित समाज को कानूनी संरक्षण व पैरवी प्रदान की।',
    ],
  },
  'tl-1920': {
    title: 'मूकनायक पाक्षिक का ऐतिहासिक प्रकाशन',
    date: '31 जनवरी 1920',
    caption: '31 जनवरी 1920 को बॉम्बे से प्रकाशित मूकनायक के प्रथम अंक का ऐतिहासिक मुखपृष्ठ।',
    description: '31 जनवरी 1920 को छत्रपति शाहू महाराज के वित्तीय सहयोग से डॉ. अम्बेडकर ने मराठी पाक्षिक "मूकनायक" की शुरुआत की। इस समाचार पत्र ने मुख्यधारा के मीडिया की खामोशी को तोड़ते हुए शोषित जनता की बुलंद आवाज बनने का ऐतिहासिक कार्य किया।',
    keyPoints: [
      'संत तुकाराम के अभंग "काय करू आता धरूनिया भीड" को मुख्य ध्येय-वाक्य बनाकर प्रकाशित किया।',
      'पहले ही सम्पादकीय में हिंदू समाज की तुलना सीढ़ियों विहीन बहुमंजिला इमारत से की, जहां मनुष्य जिस मंजिल पर जन्मा वहीं कैद रहता है।',
      'स्वायत्त शोषित पत्रकारिता की नींव रखी, जिससे आगे चलकर "बहिष्कृत भारत" और "जनता" का मार्ग प्रशस्त हुआ।',
    ],
    webSummary: 'मूकनायक के माध्यम से डॉ. अम्बेडकर भारत के वंचित समाज के निर्विवाद वैचारिक नेता के रूप में उभरे। उन्होंने सिद्ध किया कि सामाजिक समता के बिना केवल राजनीतिक स्वतंत्रता का कोई अर्थ नहीं है, क्योंकि सामाजिक लोकतंत्र के बिना स्वराज केवल देशी सामंतों का राज बन जाएगा।',
    takeaways: [
      'जनवरी से जुलाई 1920 के बीच 19 अंक प्रकाशित हुए, जिसके बाद अम्बेडकर आगे की पढ़ाई के लिए लंदन गए।',
      'कोल्हापुर के छत्रपति शाहू महाराज ने स्वतंत्र प्रेस स्थापित करने हेतु 2,500 रुपये की सहयोग राशि दी।',
      'पत्रकारिता को सामाजिक जन-जागरण और राजनीतिक गोलबंदी का मुख्य हथियार बनाया।',
    ],
  },
  'tl-1924': {
    title: 'बहिष्कृत हितकारिणी सभा की स्थापना',
    date: '20 जुलाई 1924',
    caption: 'बहिष्कृत हितकारिणी सभा के मूल संगठनात्मक दस्तावेज एवं ऐतिहासिक अभिलेख।',
    description: '20 जुलाई 1924 को डॉ. अम्बेडकर ने दामोदर हॉल, परेल, बॉम्बे में "बहिष्कृत हितकारिणी सभा" की स्थापना की। उन्होंने समूची मानव जाति को आत्म-मुक्ति का अमर मूलमंत्र दिया: "शिक्षित बनो, आंदोलन करो, संगठित रहो" (Educate, Agitate, Organize)।',
    keyPoints: [
      'अमर सूत्र वाक्य घोषित किया: "शिक्षित बनो, आंदोलन करो, संगठित रहो"।',
      'पश्चिमी भारत में वंचित वर्ग के छात्रों हेतु मुफ्त छात्रावास, वाचनालय और रात्रि विद्यालय स्थापित किए।',
      'याचिका आधारित राजनीति से हटकर स्वायत्त, संगठित अधिकार-आधारित जनांदोलन का युग आरंभ किया।',
    ],
    webSummary: 'बहिष्कृत हितकारिणी सभा डॉ. अम्बेडकर के नागरिक अधिकार आंदोलन का संस्थागत इंजन बनी। अम्बेडकर ने स्पष्ट किया कि मानवीय गरिमा दूसरों की दया से नहीं, बल्कि आत्म-निर्भरता, नैतिक अनुशासन और बौद्धिक सशक्तिकरण से ही हासिल हो सकती है।',
    takeaways: [
      'वंचित वर्ग के युवाओं के सर्वांगीण विकास हेतु संस्थागत मंच तैयार किया।',
      'अध्ययन, संगठन और संघर्ष के त्रिसूत्र ने आने वाले सभी सामाजिक आंदोलनों को वैचारिक दिशा दी।',
      'बॉम्बे विधान परिषद के समक्ष सामाजिक और आर्थिक सुधारों के लिए पहली बार संगठित मांगें रखीं।',
    ],
  },
  'tl-1927': {
    title: 'महाड़ चवदार तालाब सत्याग्रह व मनुस्मृति दहन',
    date: '20 मार्च एवं 25 दिसंबर 1927',
    caption: 'महाड़ स्थित चवदार तालाब, जहां 20 मार्च 1927 को समानता का ऐतिहासिक उद्घोष हुआ।',
    description: '20 मार्च 1927 को डॉ. अम्बेडकर ने हजारों सत्याग्रहियों के साथ चवदार तालाब का पानी पीकर मानवाधिकारों का शंखनाद किया। इसके बाद 25 दिसंबर 1927 को सार्वजनिक रूप से विषमता के प्रतीक ग्रंथ मनुस्मृति का दहन कर जन्म आधारित ऊंच-नीच को सदैव के लिए नकार दिया।',
    keyPoints: [
      '20 मार्च को जल समता दिवस / सामाजिक अधिकारिता दिवस के रूप में राष्ट्रव्यापी मान्यता।',
      'अम्बेडकर का उद्घोष: "हम चवदार तालाब केवल पानी पीने नहीं आए, बल्कि यह सिद्ध करने आए हैं कि हम भी इंसान हैं।"',
      '25 दिसंबर 1927 को मनुस्मृति दहन कर सामाजिक विषमता के विरुद्ध खुली बगावत का ऐलान किया।',
    ],
    webSummary: 'महाड़ सत्याग्रह आधुनिक भारत का पहला बड़ा नागरिक अधिकार आंदोलन था। इस आंदोलन ने जल को मानवीय गरिमा का सार्वभौमिक प्रतीक बना दिया। मनुस्मृति दहन द्वारा अम्बेडकर ने यह स्पष्ट किया कि कानून और धर्म का आधार विवेक और समता होना चाहिए।',
    takeaways: [
      'सार्वजनिक संसाधनों पर सभी नागरिकों के समान अधिकार की कानूनी व सामाजिक विजय।',
      'अस्पृश्यता को केवल धार्मिक मुद्दा नहीं, बल्कि बुनियादी मानवाधिकारों के उल्लंघन के रूप में स्थापित किया।',
      '25 दिसंबर को भारतीय इतिहास में "स्त्री मुक्ति दिवस" और समता दिवस के रूप में मनाया जाता है।',
    ],
  },
  'tl-1930': {
    title: 'लंदन गोलमेज सम्मेलन व कालाराम मंदिर सत्याग्रह',
    date: '1930–1931',
    caption: 'लंदन में आयोजित ऐतिहासिक गोलमेज सम्मेलन, जहां अम्बेडकर ने संवैधानिक अधिकारों का परचम लहराया।',
    description: 'नासिक में कालाराम मंदिर प्रवेश सत्याग्रह का नेतृत्व किया, और लंदन में प्रथम गोलमेज सम्मेलन में वंचित समाज के एकमात्र प्रतिनिधि के रूप में भाग लिया। ब्रिटिश प्रधानमंत्री और देशी राजाओं के समक्ष अस्पृश्यों के स्वतंत्र राजनीतिक प्रतिनिधित्व की अचूक वकालत की।',
    keyPoints: [
      'नासिक के प्रसिद्ध कालाराम मंदिर में प्रवेश हेतु 5 वर्षों तक शांतिपूर्ण सत्याग्रह चलाया।',
      'लंदन गोलमेज सम्मेलन में भारत के वंचितों हेतु पृथक निर्वाचन मंडल और मौलिक अधिकारों की मांग रखी।',
      'स्पष्ट किया कि भारत की स्वतंत्रता तभी सार्थक होगी जब सबसे कमजोर व्यक्ति को भी समान नागरिक अधिकार मिलेंगे।',
    ],
    webSummary: 'गोलमेज सम्मेलन में डॉ. अम्बेडकर के तर्कों ने ब्रिटिश सरकार और भारतीय राष्ट्रीय कांग्रेस दोनों को हिलाकर रख दिया। उन्होंने साबित किया कि अस्पृश्य हिंदू समाज के आंतरिक गुलाम नहीं, बल्कि एक पृथक और शोषित अल्पसंख्यक वर्ग हैं जिन्हें संवैधानिक संरक्षण चाहिए।',
    takeaways: [
      'अंतरराष्ट्रीय मंच पर भारत के दलितों की दयनीय स्थिति और कानूनी अधिकारों को पहली बार रखा।',
      'कालाराम सत्याग्रह ने सिद्ध किया कि लड़ाई मंदिर में जाने की नहीं, बल्कि मनुष्य की समानता की है।',
      'कम्युनल अवार्ड (1932) की पृष्ठभूमि तैयार की जिसने वंचितों को राजनीतिक प्रतिनिधित्व दिया।',
    ],
  },
  'tl-1932': {
    title: 'यरवदा जेल में ऐतिहासिक पूना पैक्ट समझौता',
    date: '24 सितंबर 1932',
    caption: 'यरवदा जेल में गांधीजी और डॉ. अम्बेडकर के बीच हस्ताक्षरित पूना पैक्ट का ऐतिहासिक समझौता।',
    description: 'जब ब्रिटिश सरकार ने वंचितों को पृथक निर्वाचन मंडल दिया, तो महात्मा गांधी ने यरवदा जेल में आमरण अनशन शुरू कर दिया। गांधीजी का जीवन बचाने और अपने समाज के हितों की रक्षा हेतु अम्बेडकर ने ऐतिहासिक समझौता किया, जिसमें संयुक्त निर्वाचन में 148 आरक्षित सीटें प्राप्त हुईं।',
    keyPoints: [
      '24 सितंबर 1932 को यरवदा सेंट्रल जेल, पुणे में पूना पैक्ट पर हस्ताक्षर किए गए।',
      'ब्रिटिश अवार्ड में मिली 71 सीटों के बदले प्रांतीय विधानसभाओं में 148 आरक्षित सीटें सुरक्षित कीं।',
      'केंद्रीय विधायिका में वंचित वर्गों हेतु 18% सीटें आरक्षित की गईं और शिक्षा अनुदान का प्रावधान हुआ।',
    ],
    webSummary: 'पूना पैक्ट ने आधुनिक भारतीय राजनीति में आरक्षण और प्रतिनिधित्व की स्थायी नींव रखी। यद्यपि अम्बेडकर पृथक निर्वाचन के समर्थक थे, लेकिन राष्ट्रहित और गांधीजी के प्राणों की रक्षा हेतु उन्होंने संयुक्त निर्वाचन मंडल के अंतर्गत सीटों के आरक्षण को स्वीकार किया।',
    takeaways: [
      'विधानसभाओं में वंचित वर्गों के प्रतिनिधित्व को दोगुने से भी अधिक बढ़ाया (71 से 148 सीटें)।',
      'भारतीय संविधान में अनुसूचित जातियों और जनजातियों के राजनीतिक आरक्षण की नींव रखी।',
      'अम्बेडकर ने इसे एक "कठिन समझौता" बताया जिसने उनके समाज की स्वतंत्र आवाज को सीमित किया।',
    ],
  },
  'tl-1935': {
    title: 'ऐतिहासिक येवला घोषणा: "मैं हिंदू नहीं मरूंगा"',
    date: '13 अक्टूबर 1935',
    caption: 'नासिक के येवला सम्मेलन का ऐतिहासिक स्थल जहां धार्मिक परिवर्तन की अमर घोषणा की गई।',
    description: '13 अक्टूबर 1935 को नासिक के येवला में आयोजित ऐतिहासिक सम्मेलन में 10,000 प्रतिनिधियों के समक्ष घोषणा की: "यद्यपि मैं एक अस्पृश्य हिंदू के रूप में पैदा हुआ था, लेकिन मैं एक हिंदू के रूप में हरगिज नहीं मरूंगा।" इसने धार्मिक मुक्ति की नई राह खोली।',
    keyPoints: [
      'येवला में स्पष्ट किया कि जाति-व्यवस्था को सुधारना असंभव है क्योंकि यह धार्मिक ग्रंथों पर आधारित है।',
      'घोषणा की कि मुक्ति का एकमात्र मार्ग उस धर्म को त्यागना है जो मनुष्य को नीच मानता है।',
      'विश्व के सभी प्रमुख धर्मों का 21 वर्षों तक गहन तुलनात्मक अध्ययन आरंभ किया।',
    ],
    webSummary: 'येवला घोषणा ने भारतीय सामाजिक और धार्मिक इतिहास में भूकंप ला दिया। अम्बेडकर ने स्पष्ट कर दिया कि आत्मसम्मान और मानवीय गरिमा के बिना कोई समाज जीवित नहीं रह सकता। इस घोषणा के 21 वर्ष बाद 1956 में उन्होंने बौद्ध धर्म की दीक्षा ली।',
    takeaways: [
      'धार्मिक रूढ़िवादिता और जन्म आधारित पदक्रम के विरुद्ध अंतिम और निर्णायक विद्रोह।',
      'धर्मांतरण को अंधविश्वास से मुक्ति और समतावादी दर्शन अपनाने की सचेत प्रक्रिया बनाया।',
      'आने वाले दो दशकों तक विश्व के दार्शनिक और धार्मिक सिद्धांतों का वैज्ञानिक परीक्षण किया।',
    ],
  },
  'tl-1936': {
    title: 'कालजयी कृति "जाति का विनाश" (Annihilation of Caste)',
    date: '1936',
    caption: '1936 में प्रकाशित डॉ. अम्बेडकर की कालजयी पुस्तक "एनिहिलेशन ऑफ कास्ट" का प्रथम संस्करण।',
    description: 'लाहौर के जात-पात तोड़क मंडल के वार्षिक सम्मेलन हेतु लिखा गया वह अप्रकाशित भाषण, जिसे आयोजकों द्वारा भाषण में बदलाव की मांग के कारण अम्बेडकर ने खुद प्रकाशित किया। यह पुस्तक विश्व साहित्य में जाति-व्यवस्था का सबसे वैज्ञानिक और तीक्ष्ण विश्लेषण है।',
    keyPoints: [
      'सिद्ध किया कि जाति श्रम का विभाजन नहीं, बल्कि "श्रमिकों का अस्वाभाविक विभाजन" (Division of Labourers) है।',
      'प्रतिपादित किया कि अंतर्जातीय भोज या सुधार पर्याप्त नहीं हैं, जाति के आधारभूत धार्मिक शास्त्रों को नष्ट करना होगा।',
      'स्वतंत्रता, समता और बंधुता पर आधारित एक आदर्श लोकतांत्रिक समाज का खाका प्रस्तुत किया।',
    ],
    webSummary: '"एनिहिलेशन ऑफ कास्ट" 20वीं सदी की सबसे प्रभावशाली दार्शनिक रचनाओं में गिनी जाती है। जॉन डेवी के विचारों से प्रेरित होकर अम्बेडकर ने लोकतंत्र को केवल सरकार का रूप नहीं, बल्कि सह-संबद्ध जीवन और साझा अनुभवों का माध्यम बताया।',
    takeaways: [
      'जाति व्यवस्था की जड़ उसके धार्मिक और पवित्र माने जाने वाले शास्त्रों में है, इसे निर्भयता से उजागर किया।',
      'महात्मा गांधी के साथ प्रसिद्ध ऐतिहासिक बहस को जन्म दिया, जो पुस्तक के परिशिष्ट में दर्ज है।',
      'आज भी दुनिया भर के विश्वविद्यालयों में सामाजिक न्याय और जाति-विरोधी अध्ययन का यह मूल आधार-ग्रंथ है।',
    ],
  },
  'tl-1942': {
    title: 'वायसराय की कार्यकारी परिषद (श्रम सदस्य व सुधार)',
    date: '1942–1946',
    caption: 'वायसराय की कार्यकारी परिषद में श्रम मंत्री के रूप में डॉ. अम्बेडकर का ऐतिहासिक कार्यकाल।',
    description: '1942 में वायसराय की कैबिनेट में श्रम सदस्य नियुक्त हुए। अपने 4 वर्षों के कार्यकाल में उन्होंने कार्य दिवस को 12 घंटे से घटाकर 8 घंटे किया, मातृत्व अवकाश, न्यूनतम मजदूरी, भविष्य निधि (PF), और केंद्रीय जल आयोग व दामोदर घाटी परियोजना की नींव रखी।',
    keyPoints: [
      'कार्य दिवस को 12 घंटे से घटाकर 8 घंटे करने का ऐतिहासिक श्रम कानून लागू किया।',
      'महिला श्रमिकों हेतु मातृत्व लाभ (Maternity Benefit Act) और समान कार्य के लिए समान वेतन की पहल।',
      'भारत की नदी घाटी परियोजनाओं, जल विद्युत और केंद्रीय विद्युत प्राधिकरण (CEA) की योजना बनाई।',
    ],
    webSummary: 'श्रम सदस्य के रूप में डॉ. अम्बेडकर आधुनिक भारत के सबसे दूरदर्शी नीति निर्माता सिद्ध हुए। उन्होंने न केवल भारत के श्रम कानूनों को अंतरराष्ट्रीय मानकों पर स्थापित किया, बल्कि भारत के औद्योगिक विकास हेतु बिजली और जल संसाधनों की राष्ट्रीय नीति तैयार की।',
    takeaways: [
      'कामकाजी मजदूरों के अधिकारों और सामाजिक सुरक्षा की आधुनिक संवैधानिक संरचना बनाई।',
      'दामोदर घाटी, भाखड़ा नांगल और सोन नदी परियोजनाओं की प्रारंभिक रूपरेखा तैयार की।',
      'रोजगार कार्यालयों (Employment Exchanges) और श्रम सांख्यिकी प्रणाली की स्थापना की।',
    ],
  },
  'tl-1947': {
    title: 'प्रारूप समिति के अध्यक्ष व प्रथम कानून मंत्री',
    date: '15 एवं 29 अगस्त 1947',
    caption: 'स्वतंत्र भारत के प्रथम कानून मंत्री के रूप में कार्यभार ग्रहण करते हुए डॉ. बी. आर. अम्बेडकर।',
    description: 'स्वतंत्र भारत के प्रथम मंत्रिमंडल में पंडित नेहरू के अनुरोध पर देश के प्रथम कानून मंत्री बने। 29 अगस्त 1947 को संविधान सभा ने उन्हें सर्वसम्मति से संविधान प्रारूप समिति (Drafting Committee) का अध्यक्ष चुना, जिससे स्वतंत्र भारत के भाग्य-विधाता के रूप में उनका युग आरंभ हुआ।',
    keyPoints: [
      'स्वतंत्र भारत के प्रथम विधि एवं न्याय मंत्री (15 अगस्त 1947) के रूप में शपथ ली।',
      'संविधान प्रारूप समिति के अध्यक्ष (29 अगस्त 1947) नियुक्त होकर 141 बैठकों का संचालन किया।',
      'विश्व के सभी प्रमुख संविधानों के सर्वोत्तम तत्वों को भारत की सामाजिक वास्तविकताओं के अनुकूल ढाला।',
    ],
    webSummary: 'संविधान सभा में डॉ. अम्बेडकर का प्रवेश और प्रारूप समिति का अध्यक्ष बनना स्वतंत्र भारत के इतिहास का सबसे निर्णायक मोड़ था। उन्होंने भारत के प्रत्येक नागरिक को जाति, धर्म, लिंग से परे समान अधिकार और सार्वभौमिक वयस्क मताधिकार प्रदान करने का नेतृत्व किया।',
    takeaways: [
      'विश्व के सबसे बड़े लिखित संविधान के प्रमुख वास्तुकार (चीफ आर्किटेक्ट) के रूप में मान्यता।',
      'मौलिक अधिकारों, राज्य के नीति-निर्देशक तत्वों और स्वतंत्र न्यायपालिका की मजबूत व्यवस्था की।',
      'अनुच्छेद 17 द्वारा अस्पृश्यता को कानूनन अपराध घोषित कर सदियों की गुलामी को समाप्त किया।',
    ],
  },
  'tl-1949': {
    title: 'भारत के संविधान का ऐतिहासिक समर्पण व अंतिम भाषण',
    date: '25 एवं 26 नवंबर 1949',
    caption: '26 नवंबर 1949 को डॉ. राजेन्द्र प्रसाद को पूर्ण संविधान सौंपते हुए डॉ. बी. आर. अम्बेडकर।',
    description: '25 नवंबर 1949 को संविधान सभा में अमर विदाई भाषण दिया, जिसमें चेतावनी दी कि राजनीतिक लोकतंत्र को सामाजिक लोकतंत्र बनाना होगा। 26 नवंबर 1949 को संविधान सभा ने ऐतिहासिक संविधान को विधिवत अंगीकार किया, जिसे आज राष्ट्रव्यापी "संविधान दिवस" के रूप में मनाया जाता है।',
    keyPoints: [
      '26 नवंबर 1949 को संविधान सभा द्वारा भारत का संविधान पूर्ण रूप से अंगीकृत और समर्पित किया गया।',
      'अमर चेतावनी: "26 जनवरी 1950 को हम अंतर्विरोधों के नए जीवन में प्रवेश करेंगे—राजनीति में समानता होगी, लेकिन सामाजिक-आर्थिक जीवन में असमानता।"',
      'चेतावनी दी कि यदि सामाजिक असमानता दूर नहीं हुई, तो पीड़ित लोग इस लोकतांत्रिक ढांचे को ध्वस्त कर देंगे।',
    ],
    webSummary: '25 नवंबर 1949 का भाषण भारतीय लोकतंत्र के इतिहास का सबसे गंभीर और दूरदर्शी भाषण माना जाता है। अम्बेडकर ने देशवासियों को नायक-पूजा (Bhakti in politics) से बचने और संवैधानिक नैतिकता का पालन करने का आह्वान किया।',
    takeaways: [
      'संविधान के निर्माण में 2 वर्ष, 11 महीने और 18 दिन का कठोर परिश्रम पूरा हुआ।',
      'भारत के प्रत्येक नागरिक को "एक व्यक्ति, एक मत, एक मूल्य" का क्रांतिकारी अधिकार मिला।',
      'संविधान सभा के अध्यक्ष डॉ. राजेन्द्र प्रसाद ने अम्बेडकर के अद्वितीय योगदान की मुक्तकंठ से प्रशंसा की।',
    ],
  },
  'tl-1950': {
    title: 'संविधान लागू: संप्रभु लोकतांत्रिक गणराज्य का उदय',
    date: '26 जनवरी 1950',
    caption: '26 जनवरी 1950 को नई दिल्ली में भारत के एक संप्रभु लोकतांत्रिक गणराज्य बनने का ऐतिहासिक क्षण।',
    description: '26 जनवरी 1950 को भारत का संविधान पूर्ण रूप से लागू हुआ। सदियों से पददलित करोड़ों लोगों को कानूनी रूप से समान नागरिक अधिकार मिले, और भारत विश्व का सबसे बड़ा संवैधानिक लोकतंत्र बनकर उभरा।',
    keyPoints: [
      'भारत एक संप्रभु लोकतांत्रिक गणराज्य (Sovereign Democratic Republic) बना।',
      'अस्पृश्यता का कानूनी अंत हुआ और धर्मनिरपेक्ष, समावेशी गणतंत्र की औपचारिक शुरुआत हुई।',
      'डॉ. अम्बेडकर को आधुनिक भारत का "मनु" नहीं, बल्कि आधुनिक भारत का "विधान-निर्माता" स्वीकार किया गया।',
    ],
    webSummary: '26 जनवरी 1950 को लागू हुआ संविधान केवल एक कानूनी दस्तावेज नहीं, बल्कि एक गहरा सामाजिक अनुबंध था। इसने सदियों पुरानी सामाजिक व्यवस्था को पलटकर प्रत्येक व्यक्ति की गरिमा और राष्ट्र की एकता व अखंडता को सर्वोच्च प्राथमिकता दी।',
    takeaways: [
      'विश्व के सबसे विविधतापूर्ण समाज को एक सूत्र में बांधने वाले जीवंत संविधान का जन्म।',
      'मौलिक अधिकारों के हनन पर सीधे सर्वोच्च न्यायालय जाने का अधिकार (अनुच्छेद 32) संविधान की आत्मा बना।',
      'सार्वभौमिक वयस्क मताधिकार ने गरीब से गरीब व्यक्ति को देश का शासक चुनने की शक्ति दी।',
    ],
  },
  'tl-1951': {
    title: 'महिला अधिकारों हेतु हिंदू कोड बिल व त्यागपत्र',
    date: 'सितंबर 1951',
    caption: 'महिलाओं के समान अधिकारों की पैरवी करते हुए संसद में कानून मंत्री डॉ. अम्बेडकर।',
    description: 'महिलाओं को संपत्ति में समान अधिकार, विवाह विच्छेद, और उत्तराधिकार प्रदान करने हेतु क्रांतिकारी "हिंदू कोड बिल" पेश किया। संसद के रूढ़िवादी सदस्यों द्वारा बिल को रोके जाने पर डॉ. अम्बेडकर ने सिद्धांत की रक्षा हेतु कानून मंत्री पद से ऐतिहासिक त्यागपत्र दे दिया।',
    keyPoints: [
      'भारतीय महिलाओं को संपत्ति, गोद लेने और विवाह में पुरुषों के समान अधिकार दिलाने का विधेयक पेश किया।',
      'जब मंत्रिमंडल और संसद ने बिल को पारित करने में अनिच्छा दिखाई, तो पद की परवाह किए बिना इस्तीफा दे दिया।',
      'अम्बेडकर का कथन: "मैं किसी समाज की प्रगति का आकलन उस समाज की महिलाओं द्वारा की गई प्रगति से करता हूं।"',
    ],
    webSummary: 'हिंदू कोड बिल पर डॉ. अम्बेडकर का त्यागपत्र आधुनिक भारत में लैंगिक समानता की सबसे बड़ी मिसाल है। आगे चलकर 1955-56 में सरकार को उसी बिल को चार अलग-अलग कानूनों के रूप में पारित करना पड़ा, जिससे भारतीय महिलाओं के अधिकारों का नया युग आरंभ हुआ।',
    takeaways: [
      'भारत में महिला सशक्तिकरण और संपत्ति के अधिकार के प्रथम और सबसे मुखर प्रणेता।',
      'दिखाया कि सिद्धांतों और नैतिक मूल्यों के आगे सत्ता की कुर्सी का कोई मोल नहीं होता।',
      'आगे चलकर हिंदू विवाह अधिनियम और उत्तराधिकार अधिनियम के रूप में उनके विचार कानून बने।',
    ],
  },
  'tl-1956': {
    title: 'दीक्षाभूमि नागपुर में बौद्ध धर्म दीक्षा व महापरिनिर्वाण',
    date: '14 अक्टूबर एवं 6 दिसंबर 1956',
    caption: 'दीक्षाभूमि नागपुर का पावन स्तूप, जहां 14 अक्टूबर 1956 को 5 लाख लोगों ने बौद्ध धर्म की दीक्षा ली।',
    description: '14 अक्टूबर 1956 को विजयादशमी के दिन नागपुर की दीक्षाभूमि पर अपने 5 लाख अनुयायियों के साथ 22 प्रतिज्ञाएं लेकर बौद्ध धर्म ग्रहण किया। विश्व इतिहास का यह सबसे बड़ा अहिंसक धार्मिक परिवर्तन था। 6 दिसंबर 1956 को 26 अलीपुर रोड, नई दिल्ली में आपका महापरिनिर्वाण हुआ।',
    keyPoints: [
      '14 अक्टूबर 1956 को नागपुर में 5 लाख लोगों के साथ तथागत बुद्ध के धम्म की दीक्षा ली।',
      'अंधविश्वास, जाति और असमानता को त्यागने हेतु 22 ऐतिहासिक प्रतिज्ञाएं (22 Vows) प्रदान कीं।',
      'अपनी अंतिम महान कृति "द बुद्ध एंड हिज धम्म" पूर्ण की; 6 दिसंबर 1956 को नई दिल्ली में महापरिनिर्वाण हुआ।',
    ],
    webSummary: 'दीक्षाभूमि नागपुर का धम्म चक्र प्रवर्तन आधुनिक भारत की सबसे बड़ी आध्यात्मिक क्रांति थी। अम्बेडकर ने अपने लोगों को आत्मसम्मान, प्रज्ञा, शील और करुणा का मार्ग दिया। 6 दिसंबर 1956 को महापरिनिर्वाण के बाद मुंबई के दादर स्थित चैत्य भूमि पर उनका अंतिम संस्कार हुआ, जहां प्रतिवर्ष लाखों लोग श्रद्धांजलि अर्पित करते हैं।',
    takeaways: [
      'भारत की पावन भूमि पर तथागत बुद्ध के समतावादी धम्म का ऐतिहासिक पुनर्जागरण किया।',
      '22 प्रतिज्ञाओं द्वारा तर्क, विज्ञान और बंधुत्व पर आधारित एक नया नैतिक जीवन दर्शन दिया।',
      '1990 में मरणोपरांत भारत के सर्वोच्च नागरिक सम्मान "भारत रत्न" से अलंकृत किया गया।',
    ],
  },
}

function getLocalizedMilestone(item, lang) {
  if (!item || lang !== 'HI') return item
  const hi = timelineTranslationsHI[item.id]
  if (!hi) return item
  return {
    ...item,
    title: hi.title || item.title,
    date: hi.date || item.date,
    category: categoryTranslations[item.category] || item.category,
    caption: hi.caption || item.caption,
    description: hi.description || item.description,
    keyPoints: hi.keyPoints || item.keyPoints,
    webOverview: {
      ...item.webOverview,
      summary: hi.webSummary || item.webOverview?.summary,
      takeaways: hi.takeaways || item.webOverview?.takeaways,
    },
  }
}

export default function VerticalTimeline({ onOpenArtifact, onAskAi, museumArtifacts = [], language = 'EN', t }) {
  const [activeCategory, setActiveCategory] = useState('All')
  const [searchQuery, setSearchQuery] = useState('')
  const [expandedOverviewId, setExpandedOverviewId] = useState(null)
  const [liveOverviews, setLiveOverviews] = useState({})
  const [loadingOverviewId, setLoadingOverviewId] = useState(null)
  const [copiedId, setCopiedId] = useState(null)
  const [selectedImageModal, setSelectedImageModal] = useState(null)

  // Categories list
  const categories = useMemo(() => {
    const set = new Set(verticalTimelineData.map((d) => d.category))
    return ['All', ...Array.from(set)]
  }, [])

  // Localized data
  const localizedData = useMemo(() => {
    return verticalTimelineData.map((item) => getLocalizedMilestone(item, language))
  }, [language])

  // Filtered milestones
  const filteredData = useMemo(() => {
    return localizedData.filter((item, idx) => {
      const origCat = verticalTimelineData[idx].category
      const matchCat = activeCategory === 'All' || origCat === activeCategory
      const q = searchQuery.toLowerCase().trim()
      if (!q) return matchCat
      const matchSearch =
        item.year.includes(q) ||
        item.title.toLowerCase().includes(q) ||
        item.description.toLowerCase().includes(q) ||
        item.category.toLowerCase().includes(q)
      return matchCat && matchSearch
    })
  }, [localizedData, activeCategory, searchQuery])

  // Scroll to year smoothly
  const scrollToMilestone = (id) => {
    const el = document.getElementById(id)
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'center' })
    }
  }

  // Toggle Overview expansion
  const toggleOverview = (id) => {
    setExpandedOverviewId((prev) => (prev === id ? null : id))
  }

  // Live fetch from /api/web-overview
  const fetchLiveWebOverview = async (item) => {
    if (loadingOverviewId) return
    setLoadingOverviewId(item.id)
    try {
      const q = item.webOverview?.query || `${item.title} Dr B R Ambedkar ${item.year}`
      const resp = await fetch(`/api/web-overview?q=${encodeURIComponent(q)}`)
      if (!resp.ok) throw new Error(`HTTP ${resp.status}`)
      const data = await resp.json()
      if (data && (data.summary || data.key_takeaways)) {
        setLiveOverviews((prev) => ({
          ...prev,
          [item.id]: {
            summary: data.summary,
            takeaways: data.key_takeaways && data.key_takeaways.length > 0 ? data.key_takeaways : item.webOverview.takeaways,
            sources: data.web_sources && data.web_sources.length > 0 ? data.web_sources : item.webOverview.sources,
            isLive: true,
          },
        }))
      }
    } catch (err) {
      console.error('Failed to fetch live web overview:', err)
    } finally {
      setLoadingOverviewId(null)
    }
  }

  // Copy overview text
  const handleCopyOverview = (text, id) => {
    navigator.clipboard.writeText(text)
    setCopiedId(id)
    setTimeout(() => setCopiedId(null), 2200)
  }

  return (
    <main className="aaroh-vtimeline-wrapper">
      {/* 1. Header Hero */}
      <div className="aaroh-vtimeline-hero">
        <div className="aaroh-vtimeline-kicker">
          <CalendarDays size={14} />
          <span>{t?.timeline?.kicker || 'Chronological Master Archive · 1891–1956'}</span>
        </div>
        <h1 className="aaroh-vtimeline-title">{t?.timeline?.title || 'The Life & Milestones of Babasaheb Dr. B. R. Ambedkar'}</h1>
        <p className="aaroh-vtimeline-subtitle">
          {t?.timeline?.subtitle || (
            <>
              An authoritative, year-by-year journey through real photographic records, seminal publications, and constitutional
              triumphs with integrated <strong>Google / AAROH Web Overview</strong> intelligence.
            </>
          )}
        </p>
      </div>

      {/* 2. Sticky Scrubber & Filter Bar */}
      <div className="aaroh-vtimeline-sticky-nav">
        <div className="aaroh-vtimeline-controls-row">
          {/* Search Input */}
          <div className="aaroh-vtimeline-search-box">
            <Search size={15} className="aaroh-vtimeline-search-icon" />
            <input
              type="text"
              placeholder={t?.timeline?.searchPlaceholder || 'Search milestones or years...'}
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="aaroh-vtimeline-search-input"
            />
            {searchQuery && (
              <button
                type="button"
                onClick={() => setSearchQuery('')}
                className="aaroh-vtimeline-clear-btn"
                title="Clear filter"
              >
                ×
              </button>
            )}
          </div>

          {/* Category Selector Pills */}
          <div className="aaroh-vtimeline-category-pills">
            {categories.map((cat) => (
              <button
                type="button"
                key={cat}
                className={`aaroh-vtimeline-cat-pill ${activeCategory === cat ? 'active' : ''}`}
                onClick={() => setActiveCategory(cat)}
              >
                {language === 'HI' ? (categoryTranslations[cat] || cat) : cat}
              </button>
            ))}
          </div>
        </div>

        {/* Quick Year Jump Strip */}
        <div className="aaroh-vtimeline-year-strip" role="navigation" aria-label="Year Jump Navigation">
          <span className="aaroh-vtimeline-strip-label">{t?.timeline?.jumpToYear || 'Jump to Year:'}</span>
          {verticalTimelineData.map((item) => (
            <button
              type="button"
              key={item.id}
              className="aaroh-vtimeline-year-chip"
              onClick={() => scrollToMilestone(item.id)}
              title={`${item.year}: ${item.title}`}
            >
              {item.year}
            </button>
          ))}
        </div>
      </div>

      {/* 3. Continuous Vertical Spine & Milestones */}
      <div className="aaroh-vtimeline-container">
        {/* Glowing Vertical Spine Line */}
        <div className="aaroh-vtimeline-spine-line" aria-hidden="true" />

        {filteredData.length === 0 ? (
          <div className="aaroh-vtimeline-empty">
            <Search size={32} />
            <h3>{t?.timeline?.noMatchTitle || 'No milestones match your search'}</h3>
            <p>{t?.timeline?.noMatchSubtitle || 'Try clearing your search query or choosing "All" categories.'}</p>
            <button
              type="button"
              className="aaroh-vtimeline-reset-btn"
              onClick={() => {
                setActiveCategory('All')
                setSearchQuery('')
              }}
            >
              {t?.timeline?.resetFilters || 'Reset Filters'}
            </button>
          </div>
        ) : (
          filteredData.map((item, index) => {
            const overviewData = liveOverviews[item.id] || item.webOverview
            const isExpanded = expandedOverviewId === item.id
            const isLoading = loadingOverviewId === item.id
            const relatedArtifact = item.relatedArtifactId
              ? museumArtifacts.find((a) => a.id === item.relatedArtifactId)
              : museumArtifacts.find(
                  (a) =>
                    a.timelineEventId === item.id ||
                    (item.year && a.year === parseInt(item.year, 10))
                ) || null

            return (
              <article
                key={item.id}
                id={item.id}
                className="aaroh-vtimeline-card-wrapper"
                style={{ animationDelay: `${index * 0.05}s` }}
              >
                {/* Year Badge Node on the Spine */}
                <div className="aaroh-vtimeline-node">
                  <div className="aaroh-vtimeline-node-dot" />
                  <span className="aaroh-vtimeline-node-year">{item.year}</span>
                </div>

                {/* Main Milestone Glass Card */}
                <div className="aaroh-vtimeline-card">
                  {/* Top Meta Header */}
                  <div className="aaroh-vtimeline-card-meta">
                    <span className="aaroh-vtimeline-cat-badge">
                      <Tag size={11} /> {item.category}
                    </span>
                    <span className="aaroh-vtimeline-date-badge">
                      <Clock size={11} /> {item.date}
                    </span>
                  </div>

                  {/* Title */}
                  <h2 className="aaroh-vtimeline-card-title">{item.title}</h2>

                  {/* Dual Grid: Real Photographic Evidence & Narrative Explanation */}
                  <div className="aaroh-vtimeline-dual-grid">
                    {/* Visual Media Column */}
                    <div className="aaroh-vtimeline-visual-col">
                      <div
                        className="aaroh-vtimeline-image-frame"
                        onClick={() => setSelectedImageModal({ src: item.image, caption: item.caption, title: item.title })}
                        role="button"
                        tabIndex={0}
                        title="Click to view full-resolution archival photograph"
                      >
                        <img
                          src={item.image}
                          alt={item.title}
                          className="aaroh-vtimeline-real-img"
                          loading="lazy"
                        />
                        <div className="aaroh-vtimeline-zoom-pill">
                          <Maximize2 size={13} /> {language === 'HI' ? 'अभिलेखीय दृश्य' : 'Archival View'}
                        </div>
                      </div>
                      <p className="aaroh-vtimeline-caption">{item.caption}</p>
                    </div>

                    {/* Content Column */}
                    <div className="aaroh-vtimeline-content-col">
                      <p className="aaroh-vtimeline-desc">{item.description}</p>

                      {/* Key Historical Milestones */}
                      <div className="aaroh-vtimeline-facts-box">
                        <span className="aaroh-vtimeline-facts-title">
                          <ShieldCheck size={13} /> {language === 'HI' ? 'महत्वपूर्ण ऐतिहासिक तथ्य:' : 'Pivotal Historical Facts:'}
                        </span>
                        <ul className="aaroh-vtimeline-facts-list">
                          {item.keyPoints.map((pt, i) => (
                            <li key={i}>
                              <span className="aaroh-fact-bullet">•</span>
                              <span>{pt}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Connected Primary Records & Action Buttons */}
                      <div className="aaroh-vtimeline-action-row">
                        {relatedArtifact && (
                          <button
                            type="button"
                            className="aaroh-vtimeline-artifact-btn"
                            onClick={() => onOpenArtifact && onOpenArtifact(relatedArtifact)}
                            title={`Examine original archival record: ${relatedArtifact.title}`}
                          >
                            <FileText size={13} />
                            <span>{t?.timeline?.viewArtifact || 'Original Record'}: {relatedArtifact.title}</span>
                            <ArrowRight size={12} />
                          </button>
                        )}

                        <button
                          type="button"
                          className="aaroh-vtimeline-ai-btn"
                          onClick={() =>
                            onAskAi &&
                            onAskAi(
                              `Explain in comprehensive historical depth the significance of Dr. Ambedkar’s milestone in ${item.year}: ${item.title}`
                            )
                          }
                          title="Open deep interactive consultation in AI Research Lab"
                        >
                          <MessageCircle size={13} />
                          <span>{t?.timeline?.askAiMilestone || 'Ask AI Research'}</span>
                        </button>
                      </div>
                    </div>
                  </div>

                  {/* 4. INTEGRATED GOOGLE / AAROH WEB OVERVIEW SECTION */}
                  <div className="aaroh-vtimeline-overview-section">
                    <button
                      type="button"
                      className={`aaroh-voverview-toggle ${isExpanded ? 'active' : ''}`}
                      onClick={() => toggleOverview(item.id)}
                      aria-expanded={isExpanded}
                    >
                      <div className="aaroh-voverview-toggle-left">
                        <div className="aaroh-voverview-gradient-pill">
                          <Sparkles size={13} className="aaroh-sparkle-spin" />
                          <span>{t?.timeline?.webOverviewBtn || 'AAROH Web Overview'}</span>
                        </div>
                        <span className="aaroh-voverview-subtext">
                          {isExpanded
                            ? (language === 'HI' ? 'वेब विश्लेषण छिपाएं' : 'Hide synthesized web analysis')
                            : (language === 'HI' ? 'सत्यापित एआई और वेब अभिलेखीय विश्लेषण' : 'Synthesized deep AI & web archival overview')}
                        </span>
                      </div>
                      <div className="aaroh-voverview-toggle-right">
                        {isExpanded ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
                      </div>
                    </button>

                    {/* Smoothly Expandable Google Overview Panel */}
                    {isExpanded && (
                      <div className="aaroh-voverview-panel">
                        {/* Shimmering Top Bar */}
                        <div className="aaroh-voverview-panel-header">
                          <div className="aaroh-voverview-panel-badge">
                            <Globe2 size={13} />
                            <span>{language === 'HI' ? 'गूगल एआई अवलोकन मॉडल · ऐतिहासिक अभिलेखों पर आधारित' : 'Google AI Overview Model · Grounded in Historical Archives'}</span>
                          </div>
                          <div className="aaroh-voverview-header-actions">
                            <button
                              type="button"
                              className="aaroh-voverview-refresh-btn"
                              onClick={() => fetchLiveWebOverview(item)}
                              disabled={isLoading}
                              title="Fetch real-time live synthesis from verified archives"
                            >
                              <RotateCcw size={12} className={isLoading ? 'aaroh-spin' : ''} />
                              <span>{isLoading ? (language === 'HI' ? 'अवलोकन तैयार हो रहा है...' : 'Synthesizing...') : (t?.timeline?.refreshBtn || 'Live Web Refresh')}</span>
                            </button>
                            <button
                              type="button"
                              className="aaroh-voverview-copy-btn"
                              onClick={() =>
                                handleCopyOverview(
                                  `${overviewData.summary}\n\nKey Takeaways:\n${overviewData.takeaways.map((t) => `• ${t}`).join('\n')}`,
                                  item.id
                                )
                              }
                              title="Copy overview to clipboard"
                            >
                              {copiedId === item.id ? <Check size={12} /> : <Copy size={12} />}
                              <span>{copiedId === item.id ? (t?.timeline?.copiedBtn || 'Copied!') : (t?.timeline?.copyBtn || 'Copy')}</span>
                            </button>
                          </div>
                        </div>

                        {/* Executive Summary Paragraph */}
                        <p className="aaroh-voverview-summary-text">{overviewData.summary}</p>

                        {/* Key Historical Takeaways with Checkmarks */}
                        {overviewData.takeaways && overviewData.takeaways.length > 0 && (
                          <div className="aaroh-voverview-takeaways">
                            <span className="aaroh-voverview-takeaways-heading">{t?.timeline?.keyTakeawaysHeading || 'Key Historical Findings:'}</span>
                            <div className="aaroh-voverview-takeaway-grid">
                              {overviewData.takeaways.map((point, pIdx) => (
                                <div key={pIdx} className="aaroh-voverview-takeaway-item">
                                  <div className="aaroh-takeaway-check">
                                    <Check size={12} />
                                  </div>
                                  <p>{point}</p>
                                </div>
                              ))}
                            </div>
                          </div>
                        )}

                        {/* Verified Web Citations & Sources */}
                        {overviewData.sources && overviewData.sources.length > 0 && (
                          <div className="aaroh-voverview-sources">
                            <span className="aaroh-voverview-sources-label">{t?.timeline?.verifiedSourcesHeading || 'Verified Historical Citations:'}</span>
                            <div className="aaroh-voverview-source-chips">
                              {overviewData.sources.map((src, sIdx) => (
                                <a
                                  key={sIdx}
                                  href={src.url}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  className="aaroh-voverview-source-card"
                                  title={src.snippet || src.title}
                                >
                                  <Globe2 size={13} className="aaroh-source-icon" />
                                  <div className="aaroh-source-info">
                                    <span className="aaroh-source-title">{src.title}</span>
                                    <span className="aaroh-source-domain">{src.domain}</span>
                                  </div>
                                  <ExternalLink size={11} className="aaroh-source-arrow" />
                                </a>
                              ))}
                            </div>
                          </div>
                        )}
                      </div>
                    )}
                  </div>
                </div>
              </article>
            )
          })
        )}
      </div>

      {/* 5. Fullscreen Image Lightbox Modal */}
      {selectedImageModal && (
        <div
          className="aaroh-lightbox-overlay"
          onClick={() => setSelectedImageModal(null)}
          role="dialog"
          aria-modal="true"
        >
          <div className="aaroh-lightbox-content" onClick={(e) => e.stopPropagation()}>
            <button
              type="button"
              className="aaroh-lightbox-close"
              onClick={() => setSelectedImageModal(null)}
              title="Close full-resolution view"
            >
              ×
            </button>
            <img src={selectedImageModal.src} alt={selectedImageModal.title} className="aaroh-lightbox-img" />
            <div className="aaroh-lightbox-caption-bar">
              <h4>{selectedImageModal.title}</h4>
              <p>{selectedImageModal.caption}</p>
            </div>
          </div>
        </div>
      )}
    </main>
  )
}
