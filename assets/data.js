/* ============================================================
   NERDs Lab — site content
   이 파일만 수정하면 사이트 내용이 바뀝니다.
   (People / News / Gallery / Publications / Funding)
   ============================================================ */

const SITE = {
  labName: "NERDs Lab",
  labFull: "Neural Data Science Lab",
  tagline: "Decoding the brain with neural data and AI",
  intro:
    "We study the brain with a wide array of neural and physiological data — from PET and MRI to signals recorded " +
    "continuously at the bedside. Our goal is to understand the nervous system and to build clinical decision support " +
    "tools driven by AI-based biomarkers.",
  affiliation: "Department of Biomedical Engineering, College of Medicine, Hanyang University",
  contact: {
    address:
      "Room 210, 2nd Medical Building, Hanyang University,<br>222 Wangsimni-ro, Seongdong-gu, Seoul 04763, Korea",
    /* 아이디와 도메인은 화면에서 합쳐 표시됩니다. */
    emailUser: "jeyeonlee",
    emailDomain: "hanyang.ac.kr",
    phone: "+82-2-2220-0594",
    scholar: "https://scholar.google.com/citations?user=FG4ZUsQAAAAJ&hl=en"
  }
};

/* ---------------- Research ---------------- */
const RESEARCH = [
  {
    id: "imaging-ai",
    num: "01",
    title: "Neuroimaging AI & Imaging Biomarkers",
    lead: "Turning brain images into biomarkers a clinician can act on.",
    body:
      "We build deep learning and latent-space models for MRI, FDG-PET, tau PET and amyloid PET — synthesizing one modality from " +
      "another, predicting brain age, detecting the earliest reliable change in serial scans, and mapping the macro-scale anatomy of " +
      "neurodegenerative syndromes. The work spans Alzheimer's disease, Parkinson's disease and atypical parkinsonian syndromes, and " +
      "is developed alongside neuropathology and fluid biomarkers so that model outputs stay interpretable in the clinic.",
    tags: ["Deep learning", "Tau / amyloid PET", "Brain age", "AD & PD phenotyping"],
    img: "assets/img/research/theme-imaging-ai.svg",
    alt: "Abstract illustration: imaging voxels feeding a neural network that outputs a biomarker"
  },
  {
    id: "fluid",
    num: "02",
    title: "Brain–Body & Glymphatic Dynamics",
    lead: "How the body's rhythms — breathing, heartbeat, sleep — move fluid through the brain.",
    body:
      "The glymphatic system clears waste from the brain and is a promising target in neurodegenerative disease. Using real-time " +
      "phase-contrast MRI, fast rsfMRI and overnight sleep recordings, we quantify how respiratory patterns and sleep depth drive " +
      "cerebrospinal fluid circulation — and how that coupling shows up in the global fMRI signal. Understanding these drivers is a " +
      "prerequisite for any attempt to enhance clearance therapeutically.",
    tags: ["CSF flow", "Real-time MRI", "Sleep", "Cardiorespiratory coupling"],
    img: "assets/img/research/theme-fluid.svg",
    alt: "Abstract illustration: fluid channels circulating through a brain with a respiratory waveform"
  },
  {
    id: "signals",
    num: "03",
    title: "Digital Healthcare",
    lead: "Continuously measured physiological signals, turned into care at the bedside and beyond.",
    body:
      "We develop interpretable, uncertainty-aware models for physiological signals that can be recorded continuously and " +
      "noninvasively — ECG, PPG, EDA and NIRS. Applications include noninvasive detection of acute hyperglycemia, autonomic stress " +
      "reactivity, sleep staging from wearables, and estimating cerebral blood flow in cardiac arrest patients. In every case the " +
      "endpoint is a decision a clinician actually has to make.",
    tags: ["ECG / PPG / NIRS", "Wearables", "Interpretable ML", "Bedside monitoring"],
    img: "assets/img/research/theme-signals.svg",
    alt: "Abstract illustration: ECG, PPG and NIRS traces converging into a digital healthcare output"
  }
];

/* ---------------- People ---------------- */
const PI = {
  name: "Jeyeon Lee, PhD",
  role: "Principal Investigator",
  title: "Associate Professor, Department of Biomedical Engineering, College of Medicine, Hanyang University",
  photo: "assets/img/people/pi.webp",
  bio: [
    "Jeyeon Lee received his PhD in Biomedical Engineering in 2017 and went on to the Mayo Clinic, where he served as a postdoctoral fellow and then assistant professor from 2017 to 2023 before joining Hanyang University.",
    "His research centers on developing digital healthcare systems that work as clinical decision support tools, particularly using neuroimaging and electrophysiology data."
  ],
  links: [
    { label: "Google Scholar", href: "https://scholar.google.com/citations?user=FG4ZUsQAAAAJ&hl=en" },
    { label: "Email", mail: true }
  ]
};

const MEMBERS = [
  { name: "Youngseok Choi", role: "PhD candidate", photo: "assets/img/people/youngseok-choi.webp" },
  { name: "Junyong Jang",   role: "PhD candidate", photo: "assets/img/people/junyong-jang.webp" },
  { name: "Jihee Choe",     role: "PhD candidate", photo: "assets/img/people/jihee-choe.webp" },
  { name: "Kyoungmin Son",  role: "MS student",    photo: "assets/img/people/kyoungmin-son.webp" },
  { name: "Gyubin Kim",     role: "MS student",    photo: "assets/img/people/gyubin-kim.webp" },
  { name: "Jeong Hyeon Bae",role: "MS student",    photo: "assets/img/people/jeonghyeon-bae.webp" },
  { name: "Hongkeun Yoo, MD", role: "MS student",  photo: "assets/img/people/hongkeun-yoo.webp" },
  { name: "Hye Seo Kim",    role: "MS student",    photo: "assets/img/people/hyeseo-kim.webp" },
  { name: "Yurim Choi",     role: "Undergraduate researcher", photo: "assets/img/people/yurim-choi.webp" }
];

const ALUMNI = [
  { name: "Minji Song", role: "Now PhD candidate, University of Connecticut", photo: "assets/img/people/minji-song.webp" }
];

/* ---------------- News ----------------
   date("YYYY.MM") 기준으로 최신순 자동 정렬됩니다. 배열에 적는 순서는 신경 쓰지 않아도 됩니다. */
const NEWS = [
  { date: "2026.09", text: "The lab was awarded a <strong>보건복지부 한국형 ARPA-H</strong> grant for <em>CHAIN: 헬스케어 Agentic AI 통합 네트워크</em> (2026–2030)." },
  { date: "2026.07", text: "<strong>Youngseok Choi</strong> received the <strong>Student Best Poster Award</strong> from the ISTAART Lewy Body Dementias PIA at <strong>AAIC 2026</strong> (London, 12–15 July) for \"Visuospatial dysfunction and dementia risk in Parkinson's disease\"." },
  { date: "2026.08", text: "<strong>Yurim Choi</strong> published \"Amyloid-linked trajectories of cerebral hypoperfusion and dopamine loss in dementia with Lewy bodies\" in <em>Brain</em>. The paper was selected for <strong>BRIC 한빛사</strong> (Highlights of Korean Scientists)." },
  { date: "2026.06", text: "<strong>Youngseok Choi</strong> published \"Spatiotemporal progression patterns of striatal dopamine depletion and cerebral hypoperfusion in Parkinson's disease\" in <em>Movement Disorders</em>." },
  { date: "2026.05", text: "<strong>Kyoungmin Son</strong> received the <strong>Excellent Poster Award</strong> at the KOSOMBE 2026 Spring Conference for work on detecting cognitive decline from cube-drawing tests using multiple instance learning." },
  { date: "2026.03", text: "The lab was awarded a <strong>한국연구재단 우수신진연구</strong> grant for <em>퇴행성 뇌질환 정량 바이오마커 개발을 위한 FDG-PET 기반 뇌영상 파운데이션 모델 구축</em> (2026–2030)." },
  { date: "2026.01", text: "<strong>Youngseok Choi</strong> published \"Visuospatial dysfunction indicates an increased risk of rapid dementia conversion in Parkinson's disease\" in <em>Alzheimer's &amp; Dementia</em>. The paper was selected for <strong>BRIC 한빛사</strong> (Highlights of Korean Scientists)." },
  { date: "2025.05", text: "<strong>Youngseok Choi</strong> received the <strong>Best Poster Award</strong> at the KOSOMBE 2025 Spring Conference for spatiotemporal cerebral perfusion subtyping of Parkinson's disease with early-phase <sup>18</sup>F-FP-CIT PET." },
  { date: "2024.01", text: "<strong>Youngseok Choi</strong> published \"Effects of game-related tasks for the diagnosis and classification of gaming disorder\" in <em>Biosensors</em>." },
  { date: "2024.11", text: "<strong>Yurim Choi</strong> and <strong>Junyong Jang</strong> received the <strong>Excellent Poster Paper Award (Gold)</strong> at the KOSOMBE 2024 Fall Conference for \"Tau-PET image synthesis from FDG-PET using a latent diffusion model\"." },
  { date: "2023.09", text: "<strong>NERDs Lab opened</strong> in the Department of Biomedical Engineering, College of Medicine, Hanyang University." }
];

/* ---------------- Funding ----------------
   진행 중인 연구비. years 기준으로 최신순 자동 정렬됩니다.        */
const FUNDING = [
  { years: "2026–2030", from: "보건복지부",
    program: "한국형 ARPA-H",
    title: "CHAIN: 헬스케어 Agentic AI 통합 네트워크" },
  { years: "2026–2030", from: "한국연구재단",
    program: "우수신진연구",
    title: "퇴행성 뇌질환 정량 바이오마커 개발을 위한 FDG-PET 기반 뇌영상 파운데이션 모델 구축" },
  { years: "2025–2029", from: "산업통상자원부",
    program: "바이오산업기술개발(R&D)사업",
    title: "림프부종 완화 및 관리를 위한 AI 영상 모니터링 기반 다중 자극 레이저-초음파 치료기기 개발" },
  { years: "2025–2027", from: "한양대학교",
    program: "국제공동연구지원사업",
    title: "다중 뇌영상-인공지능 기반 알츠하이머병 정밀진단 SW 기술 개발" },
  { years: "2024–2028", from: "산업통상자원부",
    program: "바이오산업기술개발(R&D)사업",
    title: "심장혈관계 생체역학 디지털 시뮬레이터 개발 및 연계 디지털의료제품 개발" },
  { years: "2024–2027", from: "한국연구재단",
    program: "차세대바이오사업",
    title: "개방형 DB 플랫폼 서비스 및 AI 기반 치매 조기 예측시스템 실증" }
];

/* ---------------- Gallery ----------------
   date("YYYY-MM") 기준으로 최신순 자동 정렬됩니다. 배열에 적는 순서는 신경 쓰지 않아도 됩니다. */
const GALLERY = [
  { src: "assets/img/gallery/poster-award.webp",date: "2026-07", caption: "Excellent Poster Award — KOSOMBE 2026" },
  { src: "assets/img/gallery/aaic2026-award.webp", date: "2026-07", caption: "Student Best Poster Award, Lewy Body Dementias PIA — AAIC 2026, London" },
  { src: "assets/img/gallery/worldcup.webp",    date: "2026-06", caption: "Korea vs. South Africa World Cup viewing + lab social" },
  { src: "assets/img/gallery/ohbm1.webp",       date: "2026-06", caption: "OHBM 2026, Bordeaux" },
  { src: "assets/img/gallery/ohbm2.webp",       date: "2026-06", caption: "Lab dinner in Bordeaux" },
  { src: "assets/img/gallery/kosombe2026.webp", date: "2026-05", caption: "KOSOMBE 2026 Spring Conference" },
  { src: "assets/img/gallery/lab2.webp",        date: "2025-08", caption: "AAIC 2025" },
  { src: "assets/img/gallery/lab1.webp",        date: "2025-06", caption: "Best Poster Award — KOSOMBE 2025" },
  { src: "assets/img/gallery/teachersday.webp", date: "2025-05", caption: "Teachers' Day" },
  { src: "assets/img/gallery/kosombe2025.webp", date: "2025-05", caption: "KOSOMBE 2025 Spring Conference" },
  { src: "assets/img/gallery/khbm2025.webp",    date: "2025-05", caption: "KHBM 2025 Spring Conference" },
  { src: "assets/img/gallery/kosombe2024-award.webp", date: "2024-11", caption: "Excellent Poster Paper Award (Gold) — KOSOMBE 2024 Fall Conference" }
];

/* ---------------- Journals: abbreviation + impact factor ----------------
   abbr : 논문 왼쪽 썸네일 타일에 들어가는 약자
   if   : impact factor. 값을 지우면 해당 저널에는 배지가 표시되지 않습니다.     */
const JOURNALS = {
  "The Lancet":                                       { abbr:"LANCET", if:98.4 },
  "Nature Aging":                                     { abbr:"NatAge", if:17.0 },
  "Alzheimer's & Dementia":                           { abbr:"A&D",    if:13.0 },
  "Science Advances":                                 { abbr:"SciAdv", if:11.7 },
  "Brain":                                            { abbr:"BRAIN",  if:10.6 },
  "Biological Psychiatry":                            { abbr:"BIOPSY", if:9.6  },
  "Clinical Nuclear Medicine":                        { abbr:"CNM",    if:9.4  },
  "Journal of Nuclear Medicine":                      { abbr:"JNM",    if:9.3  },
  "Acta Neuropathologica":                            { abbr:"ANP",    if:9.3  },
  "Movement Disorders":                               { abbr:"MDJ",    if:7.4  },
  "Analytical Chemistry":                             { abbr:"ANCHEM", if:6.7  },
  "Resuscitation":                                    { abbr:"RESUS",  if:6.5  },
  "Biosensors":                                       { abbr:"BIOS",   if:4.9  },
  "NeuroImage":                                       { abbr:"NIMG",   if:4.7  },
  "Experimental Neurology":                           { abbr:"EXPN",   if:4.6  },
  "Aging (Albany NY)":                                { abbr:"AGING",  if:3.9  },
  "Scientific Reports":                               { abbr:"SREP",   if:3.8  },
  "Journal of Neural Engineering":                    { abbr:"JNE",    if:3.7  },
  "Journal of the Neurological Sciences":             { abbr:"JNS",    if:3.6  },
  "Biomedical Engineering Letters":                   { abbr:"BMEL",   if:3.5  },
  "IEEE Access":                                      { abbr:"IEEE",   if:3.4  },
  "Sensors":                                          { abbr:"SENS",   if:3.4  },
  "Physics in Medicine & Biology":                    { abbr:"PMB",    if:3.3  },
  "BMC Medical Informatics and Decision Making":      { abbr:"BMC",    if:3.3  },
  "Frontiers in Neuroscience":                        { abbr:"FNINS",  if:3.2  },
  "Molecular Brain":                                  { abbr:"MolBr",  if:3.0  },
  "Journal of Korean Medical Science":                { abbr:"JKMS",   if:3.0  },
  "Cerebral Cortex":                                  { abbr:"CERCOR", if:2.9  },
  "eNeuro":                                           { abbr:"eNeuro", if:2.7  },
  "Journal of Neuroscience Methods":                  { abbr:"JNSM",   if:2.7  },
  "Frontiers in Behavioral Neuroscience":             { abbr:"FNBEH",  if:2.5  },
  "Frontiers in Human Neuroscience":                  { abbr:"FNHUM",  if:2.4  },
  "Biochemistry and Biophysics Reports":              { abbr:"BBREP",  if:2.3  },
  "Tremor and Other Hyperkinetic Movements":          { abbr:"TOHM",   if:1.5  }
};

/* ---------------- Publications ---------------- */
/* d = DOI. 제목을 누르면 https://doi.org/<d> 로 연결됩니다.
   img: "assets/img/pubs/xxx.jpg" 를 추가하면 저널 타일 대신 그 그림이 썸네일로 쓰입니다. */
const PUBS = [
  /* 2026 */
  { y:2026, a:"Choi H, Kim C, Lim S, Min PH, Lee J, Jang DP", t:"Respiratory rate and minute ventilation independently modulate cardiovascular and autonomic responses in healthy adults", j:"Scientific Reports, 16", d:"10.1038/s41598-026-60600-z" },
  { y:2026, a:"Park CW, Choi Y, Lee HS, Jeong SH, Lee PH, Kim YJ, Sohn YH, Lee J, Chung SJ", t:"Amyloid-linked trajectories of cerebral hypoperfusion and dopamine loss in dementia with Lewy bodies", j:"Brain", d:"10.1093/brain/awag264", img:"assets/img/pubs/dlb-sustain.webp" },
  { y:2026, a:"Sun Y, Choi Y, Park CW, Na HK, Lee HS, Kim YJ, …, Chung SJ", t:"Spatiotemporal progression patterns of striatal dopamine depletion and cerebral hypoperfusion in Parkinson's disease", j:"Movement Disorders" , d:"10.1002/mds.70398", img:"assets/img/pubs/pd-dopamine-perfusion.webp" },
  { y:2026, a:"Ha J, Hwang HB, Kim H, Lee S, Lee J, Park JH, …, Kim IY", t:"Noninvasive detection of acute hyperglycemia using signal from wearable ECG sensors considering individual HRV response delays to glucose", j:"Biosensors, 16(5), 251" , d:"10.3390/bios16050251", img:"assets/img/pubs/hyperglycemia-ecg.webp" },
  { y:2026, a:"Lim S, Lee J, Min PH, Moloney CM, Mester CT, Ghatamaneni S, …, Lowe VJ", t:"Tau PET overlap index correlation with neuropathological findings", j:"Alzheimer's & Dementia, 22(3), e71241" , d:"10.1002/alz.71241", img:"assets/img/pubs/tau-overlap-neuropath.webp" },
  { y:2026, a:"Kandimalla M, Lim S, Jacobson DN, Lee J, Min PH, Nycklemoe ME, …, Lowe VJ", t:"Neuroinflammation demonstrated by 11C-ER176 PET with amyloid and tau pathology", j:"Alzheimer's & Dementia, 22(1), e71027" , d:"10.1002/alz.71027", img:"assets/img/pubs/er176-amyloid-tau.webp" },
  { y:2026, a:"Park CW, Choi Y, Sun Y, Lee HS, Lee PH, Kim YJ, …, Lee J, Chung SJ", t:"Visuospatial dysfunction indicates an increased risk of rapid dementia conversion in Parkinson's disease", j:"Alzheimer's & Dementia, 22(1), e71130" , d:"10.1002/alz.71130", img:"assets/img/pubs/pd-visuospatial.webp" },
  { y:2026, a:"Choi SH, Jang DH, Kim IY, Kim DG, Kim HE, Kang J, …, Lee J", t:"Cerebral blood flow estimation using NIRS in cardiac arrest patients: correlation with ROSC outcomes", j:"Resuscitation, 110997" , d:"10.1016/j.resuscitation.2026.110997", img:"assets/img/pubs/nirs-rosc.webp" },

  /* 2025 */
  { y:2025, a:"Kim S, Kang D, Choi Y, Lee J, Lee J, Kim IY, Park E", t:"Effects of electrode placement on electrical stimulation for wound healing", j:"Scientific Reports, 15(1), 39043" , d:"10.1038/s41598-025-26070-5", img:"assets/img/pubs/wound-healing.webp" },
  { y:2025, a:"Satoh R, Utianski RL, Duffy JR, Clark HM, Stephens YC, Lee J, …, Whitwell JL", t:"Distinct 11C-ER176 PET neuroinflammatory profiles and tau colocalization in progressive apraxia of speech with and without Parkinson-plus syndrome", j:"Clinical Nuclear Medicine, 50(8), 731–742" , d:"10.1097/RLU.0000000000005962", img:"assets/img/pubs/er176-apraxia.webp" },
  { y:2025, a:"Ghatamaneni S, Coleman C, Shin I, Bruinsma T, Scott N, Lee J, …, Lowe VJ", t:"High resolution autoradiography of [18F]MK-6240 and [18F]Flortaucipir shows similar neurofibrillary tangle binding patterns preferentially recognizing middling neurofibrillary tangle maturity", j:"Acta Neuropathologica, 149(1), 26" , d:"10.1007/s00401-025-02864-9", img:"assets/img/pubs/autoradiography.webp" },
  { y:2025, a:"Kang S, Lee J, Min PH, Choi D-S", t:"Moderate ethanol exposure disrupts energy homeostasis between central and peripheral system in APP/PS1 mice", j:"Molecular Brain, 18, 21" , d:"10.1186/s13041-025-01192-z", img:"assets/img/pubs/ethanol-energy.webp" },
  { y:2025, a:"Yang MA, Kang S, Hong SI, Lee J, Lee SW, Choi DS", t:"Astrocytes in the external globus pallidus selectively represent routine formation during repeated reward-seeking in mice", j:"eNeuro" , d:"10.1523/ENEURO.0552-24.2025", img:"assets/img/pubs/gpe-routine.webp" },
  { y:2025, a:"Kim J, Lee J, Lee J, Park HK, Kim IY", t:"Quantitative analysis of the effect of clothing on the oscillometric waveform envelope and oscillometric blood pressure measurements", j:"Biomedical Engineering Letters" , d:"10.1007/s13534-025-00467-7", img:"assets/img/pubs/bp-clothing.webp" },
  { y:2025, a:"Kandimalla M, Lim S, Thakkar J, Dewan S, Kang D, In MH, …, Min HK", t:"Cardiorespiratory dynamics in the brain: review on the significance of cardiovascular and respiratory correlates in functional MRI signal", j:"NeuroImage, 121000" , d:"10.1016/j.neuroimage.2024.121000", img:"assets/img/pubs/cardioresp-review.webp" },

  /* 2024 */
  { y:2024, a:"Lee J, Burkett BJ, Min HK, Senjem ML, Dicks E, Corriveau-Lecavalier N, …, Jones DT", t:"Synthesizing images of tau pathology from cross-modal neuroimaging using deep learning", j:"Brain, 147(3), 980" , d:"10.1093/brain/awad346", img:"assets/img/pubs/tau-synthesis.webp" },
  { y:2024, a:"Corriveau-Lecavalier N, Barnard LR, Botha H, Graff-Radford J, Ramanan VK, Lee J, …, Jones DT", t:"Uncovering the distinct macro-scale anatomy of dysexecutive and behavioural degenerative diseases", j:"Brain, 147(4), 1483–1496" , d:"10.1093/brain/awad356", img:"assets/img/pubs/uncovering-macro.webp" },
  { y:2024, a:"Lee J, Lim S, Kandimalla M, Ghatamaneni S, Thakkar J, Dewan S, …, Min HK", t:"Respiratory volume changes and CSF circulation during human NREM sleep", j:"Alzheimer's & Dementia, 20, e093200" , d:"10.1002/alz.093200", img:"assets/img/pubs/nrem-csf.webp" },
  { y:2024, a:"Lowe VJ, Mester CT, Lundt ES, Lee J, Ghatamaneni S, Algeciras-Schimnich A, …, Mielke MM", t:"Amyloid PET detects the deposition of brain Aβ earlier than CSF fluid biomarkers", j:"Alzheimer's & Dementia" , d:"10.1002/alz.14317", img:"assets/img/pubs/amyloid-vs-csf.webp" },
  { y:2024, a:"Kang S, Lee J, Ali DN, Choi S, Nesbitt J, Min PH, …, Choi DS", t:"Low to moderate ethanol exposure reduces astrocyte-induced neuroinflammatory signaling and cognitive decline in presymptomatic APP/PS1 mice", j:"Scientific Reports, 14(1), 23989" , d:"10.1038/s41598-024-75202-w", img:"assets/img/pubs/ethanol-neuroinflam.webp" },
  { y:2024, a:"Lee J, Hwang HB, Lee S, Kim J, Lee J, Kim S, …, Kim IY", t:"Analysis of acute stress reactivity and recovery in autonomic nervous system considering individual characteristics of stress using HRV and EDA", j:"IEEE Access" , d:"10.1109/ACCESS.2024.3437671", img:"assets/img/pubs/stress-hrv-eda.webp" },
  { y:2024, a:"Lecy EE, Min HK, Apgar CJ, Maltais DD, Lundt ES, Albertson SM, …, Lee J, Lowe VJ", t:"Patterns of early neocortical amyloid-β accumulation: a PET population-based study", j:"Journal of Nuclear Medicine" , d:"10.2967/jnumed.123.267150", img:"assets/img/pubs/early-amyloid.webp" },
  { y:2024, a:"Hwang HB, Lee J, Kwon H, Chung B, Lee J, Kim IY", t:"Preliminary study of novel bio-crypto key generation using clustering-based binarization of ECG features", j:"Sensors, 24(5), 1556" , d:"10.3390/s24051556", img:"assets/img/pubs/biocrypto-ecg.webp" },
  { y:2024, a:"Nam B, Bark B, Lee J, Kim IY", t:"InsightSleepNet: the interpretable and uncertainty-aware deep learning network for sleep staging using continuous photoplethysmography", j:"BMC Medical Informatics and Decision Making, 24(1), 50" , d:"10.1186/s12911-024-02437-y", img:"assets/img/pubs/insightsleepnet.webp" },
  { y:2024, a:"Choi J, Choi Y, Jung YC, Lee J, Lee J, Park E, Kim IY", t:"Effects of game-related tasks for the diagnosis and classification of gaming disorder", j:"Biosensors, 14(1), 42" , d:"10.3390/bios14010042", img:"assets/img/pubs/gaming-disorder.webp" },

  /* 2023 */
  { y:2023, a:"Kang S, Hong SI, Kang S, Song M, Yang MA, Essa H, …, Choi DS", t:"Astrocyte activities in the external globus pallidus regulate action-selection strategies in reward-seeking behaviors", j:"Science Advances, 9(24), eadh9239" , d:"10.1126/sciadv.adh9239", img:"assets/img/pubs/gpe-astrocyte.webp" },
  { y:2023, a:"Lee J, Barnard LR, Jones DT", t:"Artificial intelligence and the aging mind", j:"Aging (Albany NY), 15(8), 2815" , d:"10.18632/aging.204644" },
  { y:2023, a:"Corriveau-Lecavalier N, Barnard LR, Lee J, Dicks E, Botha H, Graff-Radford J, …, Jones DT", t:"Deciphering the clinico-radiological heterogeneity of dysexecutive Alzheimer's disease", j:"Cerebral Cortex, 33(11), 7026–7043" , d:"10.1093/cercor/bhad017", img:"assets/img/pubs/dysexecutive-ad.webp" },
  { y:2023, a:"Robinson CG, Lee J, Min PH, Przybelski SA, Josephs KA, Jones DT, …, Lowe VJ", t:"Significance of a positive tau PET scan with a negative amyloid PET scan", j:"Alzheimer's & Dementia" , d:"10.1002/alz.13608", img:"assets/img/pubs/tau-pos-amy-neg.webp" },
  { y:2023, a:"Yook S, Shao X, Chai Y, Zang C, Park G, Kim J, …, Kim H", t:"Human brain MRI reveals more active glymphatic flow in deeper delta sleep", j:"Journal of the Neurological Sciences, 455" , d:"10.1016/j.jns.2023.121966" },
  { y:2023, a:"Lee J, Kang D, In MH, Shu Y, Bernstein MA, Ghatamaneni S, …, Min HK", t:"The impact of breathing patterns on CSF flow and global brain BOLD signal while awake: a study using real-time phase-contrast MRI and fast rsfMRI", j:"Alzheimer's & Dementia, 19, e079182" , d:"10.1002/alz.079182", img:"assets/img/pubs/breathing-csf-bold.webp" },
  { y:2023, a:"Nayak R, Lee J, Sotoudehnia S, Chang SY, Fatemi M, Alizad A", t:"Mapping pharmacologically evoked neurovascular activation and its suppression in a rat model of tremor using functional ultrasound: a feasibility study", j:"Sensors, 23(15), 6902" , d:"10.3390/s23156902", img:"assets/img/pubs/fus-tremor.webp" },
  { y:2023, a:"Corriveau-Lecavalier N, Barnard LR, Botha H, Graff-Radford J, Ramanan VK, Lee J, …, Jones DT", t:"Disambiguating the macro-scale anatomy of dysexecutive and behavioral degenerative diseases of the mind", j:"Alzheimer's & Dementia, 19, e076679" , d:"10.1002/alz.076679", img:"assets/img/pubs/disambiguating-macro.webp" },
  { y:2023, a:"Corriveau-Lecavalier N, Botha H, Schumacher J, Dicks E, Barnard LR, Lee J, …, Jones DT", t:"Comparing approaches based on the global functional organization of the brain versus local connectivity to predict tau-PET across the Alzheimer's disease phenotypic spectrum", j:"Alzheimer's & Dementia, 19, e081730" , d:"10.1002/alz.081730", img:"assets/img/pubs/global-vs-local-tau.webp" },
  { y:2023, a:"Dicks E, Barnard LR, Boeve B, Botha H, Corriveau-Lecavalier N, Graff-Radford J, …, Jones DT", t:"Comparison of self-similarity measures in FDG-PET images and association with disease progression risk", j:"Alzheimer's & Dementia, 19, e083097" , d:"10.1002/alz.083097", img:"assets/img/pubs/self-similarity-fdg.webp" },

  /* 2022 */
  { y:2022, a:"Lee J, Burkett BJ, Min HK, Senjem ML, Lundt ES, Botha H, …, Jones DT", t:"Deep learning-based brain age prediction in normal aging and dementia", j:"Nature Aging, 2(5), 412–424" , d:"10.1038/s43587-022-00219-7", img:"assets/img/pubs/brain-age.webp" },
  { y:2022, a:"Jones DT, Lee J, Topol EJ", t:"Digitising brain age", j:"The Lancet, 400(10357), 988" , d:"10.1016/S0140-6736(22)01782-2", img:"assets/img/pubs/digitising-brain-age.webp" },
  { y:2022, a:"Lee J, Burkett BJ, Min HK, Lundt ES, Albertson SM, Botha H, …, Lowe VJ", t:"The overlap index as a means of evaluating early tau PET signal reliability", j:"Journal of Nuclear Medicine, 63(11), 1748–1753" , d:"10.2967/jnumed.121.263136", img:"assets/img/pubs/overlap-index-jnm.webp" },
  { y:2022, a:"Lee J, Kim J, Cortez J, Chang SY", t:"Thalamo-cortical network is associated with harmaline-induced tremor in rodent model", j:"Experimental Neurology, 358, 114210" , d:"10.1016/j.expneurol.2022.114210", img:"assets/img/pubs/thalamocortical-tremor.webp" },
  { y:2022, a:"Barnard LR, Botha H, Corriveau-Lecavalier N, Dicks E, Lee J, Min PH, …, Jones DT", t:"Latent space projection of brain FDG-PET creates a powerful classifier for neurodegenerative diseases", j:"Alzheimer's & Dementia, 18, e066652" , d:"10.1002/alz.066652", img:"assets/img/pubs/latent-space-fdg.webp" },
  { y:2022, a:"Lee J, Burkett BJ, Min HK, Senjem ML, Mester CT, Wiste HJ, …, Jones DT", t:"Synthesizing images of tau pathology from images of glucose utilization", j:"Alzheimer's & Dementia, 18, e062011" , d:"10.1002/alz.062011", img:"assets/img/pubs/tau-from-fdg.webp" },
  { y:2022, a:"Lee J, Chung JO, Park SY, Rajamohan N, Singh A, Kim J, …, Lee S", t:"Natural COA water inhibits mitochondrial ROS-mediated apoptosis through Plk3 downregulation under STZ diabetic stress in pancreatic β-cell lines", j:"Biochemistry and Biophysics Reports, 30, 101247" , d:"10.1016/j.bbrep.2022.101247", img:"assets/img/pubs/coa-water.webp" },

  /* 2021 and earlier */
  { y:2021, a:"Lee J, Min HK, Lundt ES, Albertson SM, Botha H, Senjem ML, …, Lowe VJ", t:"The overlap index: a new means for early detection of serial tau PET signal change", j:"Alzheimer's & Dementia, 17, e053944" , d:"10.1002/alz.053944", img:"assets/img/pubs/overlap-index-serial.webp" },
  { y:2021, a:"Nayak R, Lee J, Chantigian S, Fatemi M, Chang SY, Alizad A", t:"Imaging the response to deep brain stimulation in rodent using functional ultrasound", j:"Physics in Medicine & Biology, 66(5), 05LT01" , d:"10.1088/1361-6560/abdee5", img:"assets/img/pubs/dbs-fus.webp" },
  { y:2020, a:"Kang S, Hong SI, Lee J, Peyton L, Baker M, Choi S, …, Choi DS", t:"Activation of astrocytes in the dorsomedial striatum facilitates transition from habitual to goal-directed reward-seeking behavior", j:"Biological Psychiatry, 88(10), 797–808" , d:"10.1016/j.biopsych.2020.04.023" },
  { y:2020, a:"Barath AS, Rusheen AE, Min HK, Lee J, Ross E, Shin S, …, Blaha CD", t:"Brain metabolic changes with longitudinal transcutaneous afferent patterned stimulation in essential tremor subjects", j:"Tremor and Other Hyperkinetic Movements, 10" , d:"10.5334/tohm.565", img:"assets/img/pubs/taps-tremor.webp" },
  { y:2019, a:"Lee J, Jo HJ, Kim I, Lee J, Min HK, In MH, …, Chang SY", t:"Mapping BOLD activation by pharmacologically evoked tremor in swine", j:"Frontiers in Neuroscience, 13, 459486" , d:"10.3389/fnins.2019.00985", img:"assets/img/pubs/swine-bold-tremor.webp" },
  { y:2018, a:"Lee J, Choi H, Min K, Lee S, Ahn KH, Jo HJ, …, Lee KM", t:"Right hemisphere lateralization in neural connectivity within fronto-parietal networks in non-human primates during a visual reaching task", j:"Frontiers in Behavioral Neuroscience, 12, 186" , d:"10.3389/fnbeh.2018.00186", img:"assets/img/pubs/monkey-wpli.webp" },
  { y:2018, a:"Choi H, Lee S, Lee J, Min K, Lim S, Park J, …, Jang DP", t:"Long-term evaluation and feasibility study of the insulated screw electrode for ECoG recording", j:"Journal of Neuroscience Methods, 308, 261–268" , d:"10.1016/j.jneumeth.2018.06.027" },
  { y:2018, a:"Choi H, Lee J, Park J, Lee S, Ahn KH, Kim IY, …, Jang DP", t:"Improved prediction of bimanual movements by a two-staged (effector-then-trajectory) decoder with epidural ECoG in nonhuman primates", j:"Journal of Neural Engineering, 15(1), 016011" , d:"10.1088/1741-2552/aa8a83" },
  { y:2018, a:"Choi H, Lee J, Park J, Cho BH, Lee KM, Jang DP", t:"Movement state classification for bimanual BCI from non-human primate's epidural ECoG using three-dimensional convolutional neural network", j:"6th International Conference on Brain-Computer Interface (BCI), IEEE" , d:"10.1109/IWW-BCI.2018.8311534" },
  { y:2018, a:"Lee J, Kim I, Lee J, Knight E, Cheng L, Kang SI, …, Chang SY", t:"Development of harmaline-induced tremor in a swine model", j:"Tremor and Other Hyperkinetic Movements, 8" , d:"10.5334/tohm.406" },
  { y:2017, a:"Lee J, Choi H, Lee S, Cho BH, Ahn KH, Kim IY, …, Jang DP", t:"Decoding saccadic directions using epidural ECoG in non-human primates", j:"Journal of Korean Medical Science, 32(8), 1243" , d:"10.3346/jkms.2017.32.8.1243" },
  { y:2016, a:"Oh Y, Park C, Kim DH, Shin H, Kang YM, DeWaele M, …, Jang DP", t:"Monitoring in vivo changes in tonic extracellular dopamine level by charge-balancing multiple waveform fast-scan cyclic voltammetry", j:"Analytical Chemistry, 88(22), 10962–10970" , d:"10.1021/acs.analchem.6b02605" },
  { y:2014, a:"Baek DH, Lee J, Byeon HJ, Choi H, Kim IY, Lee KM, …, Lee SH", t:"A thin film polyimide mesh microelectrode for chronic epidural electrocorticography recording with enhanced contactability", j:"Journal of Neural Engineering, 11(4), 046023" , d:"10.1088/1741-2560/11/4/046023" },
  { y:2013, a:"Kim T, Lee J, Choi H, Lee H, Kim IY, Jang DP", t:"Meaning based covert speech classification for brain-computer interface based on electroencephalography", j:"6th International IEEE/EMBS Conference on Neural Engineering (NER), 53–56" , d:"10.1109/NER.2013.6695869" },
  { y:2013, a:"Lee J, Choi H, Kim T, Lee H, Kim IY, Jang DP, …, Lee KM", t:"The effectiveness of epidural ECoG on brain computer interface in primate", j:"International Winter Workshop on Brain-Computer Interface (BCI), 107–108" , d:"10.1109/IWW-BCI.2013.6506647" },
  { y:2013, a:"Lee J, Ku J, Han K, Park J, Lee H, Kim KR, …, Kim SI", t:"rTMS over bilateral inferior parietal cortex induces decrement of spatial sustained attention", j:"Frontiers in Human Neuroscience, 7, 26", d:"10.3389/fnhum.2013.00026" }
];
