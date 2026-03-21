export interface Course {
  code: string;
  level: string;
  type: 'online' | 'classroom' | 'hybrid';
  startDate: string;
  endDate: string;
  schedule: string;
  time: string;
  instructor: string;
  fee: number;
  isFree?: boolean;
  isStarting?: boolean;
}

export interface NewsItem {
  date: string;
  title: string;
  description?: string;
}

export interface StaffMember {
  name: string;
  role: string;
  email?: string;
  phone?: string;
}

export interface ExamDate {
  date: string;
  levels: string;
  registrationDeadline: string;
  resultsDate: string;
  note?: string;
}

export interface PriceItem {
  level: string;
  price: string;
  numericPrice: number;
}

export interface Download {
  year: string;
  title: string;
  filename: string;
}

export interface CulturalCourse {
  title: string;
  startDate: string;
  schedule: string;
  location: string;
  instructor: string;
  fee: string;
  description: string;
}

export const navItems = [
  { label: 'Nyitólap', href: '/' },
  { label: 'Nyelvtanfolyamok', href: '/nyelvtanfolyamok' },
  { label: 'Nyelvvizsgák', href: '/nyelvvizsgak' },
  { label: 'Áraink', href: '/araink' },
  { label: 'Kínai ösztöndíjak', href: '/osztondijak' },
  { label: 'Letöltések', href: '/letoltesek' },
  { label: 'Híreink', href: '/hireink' },
  { label: 'Elérhetőségünk', href: '/elerhetosegunk' },
];

export const culturalCourses: CulturalCourse[] = [
  {
    title: 'Kalligráfia-tanfolyam – 10 alkalommal',
    startDate: '2026. március 9.',
    schedule: 'Hétfőnként 17:30-19:00',
    location: 'Tőkei terem (1/1-es)',
    instructor: 'Horváth Janisz',
    fee: '25 000 Ft (ELTE alkalmazottaknak és alumni tagoknak 10% kedvezmény)',
    description: 'A kínai kalligráfia a kínai kultúra egyik legfontosabb művészeti ága. A tanfolyam során megismerkedhet a kalligráfia alapjaival, eszközeivel és technikáival. Az anyagokat biztosítjuk.',
  },
  {
    title: 'Peónia-, rózsa- és gyümölcsfestészeti tanfolyam',
    startDate: '2026. március 12.',
    schedule: 'Csütörtökönként 17:30-19:00',
    location: 'Tőkei terem (1/1-es)',
    instructor: 'Horváth Janisz',
    fee: '25 000 Ft (ELTE alkalmazottaknak és alumni tagoknak 10% kedvezmény)',
    description: 'Hagyományos kínai festészeti technikákra épülő tanfolyam, amely a peónia, rózsa és egyéb virágok, valamint gyümölcsök festészetére fókuszál. Az anyagokat biztosítjuk.',
  },
];

export const startingCourses: Course[] = [
  { code: '2026/44', level: 'A2.1', type: 'online', startDate: '2026.03.18.', endDate: '2026.05.18.', schedule: 'Hétfő-Szerda', time: '18:00-19:30', instructor: 'Borsódi Réka', fee: 40000 },
  { code: '2026/43', level: 'B2.1', type: 'classroom', startDate: '2026.03.18.', endDate: '2026.05.18.', schedule: 'Hétfő-Szerda', time: '18:00-19:30', instructor: 'Cai Shaowei', fee: 40000 },
  { code: '2026/46', level: 'A1.2', type: 'online', startDate: '2026.03.23.', endDate: '2026.05.20.', schedule: 'Hétfő-Szerda', time: '18:00-19:30', instructor: 'Liu Daoyuan', fee: 28000 },
  { code: '2026/47', level: 'A1.2', type: 'online', startDate: '2026.03.23.', endDate: '2026.05.20.', schedule: 'Hétfő-Szerda', time: '18:00-19:30', instructor: 'Liu Ming', fee: 28000 },
  { code: '2026/45', level: 'A2.1', type: 'online', startDate: '2026.03.23.', endDate: '2026.05.18.', schedule: 'Hétfő-Csütörtök', time: '11:00-12:30', instructor: 'Fülöp Andrea', fee: 40000 },
  { code: '2026/48', level: 'A1.1', type: 'classroom', startDate: '2026.03.23.', endDate: '2026.05.20.', schedule: 'Hétfő-Szerda', time: '18:00-19:30', instructor: 'Olajos István', fee: 20000 },
  { code: '2026/49', level: 'A2.1', type: 'classroom', startDate: '2026.03.24.', endDate: '2026.05.14.', schedule: 'Kedd-Csütörtök', time: '18:00-19:30', instructor: 'Borsódi Réka', fee: 40000 },
  { code: '2026/50', level: 'A2.4', type: 'online', startDate: '2026.03.30.', endDate: '2026.06.01.', schedule: 'Hétfő-Szerda', time: '18:00-19:30', instructor: 'Chen Yingying', fee: 40000 },
  { code: '2026/51', level: 'HSK6', type: 'hybrid', startDate: '2026.03.30.', endDate: '2026.06.01.', schedule: 'Hétfő-Szerda', time: '18:00-19:30', instructor: 'Xu Xiaokai', fee: 40000 },
  { code: '2026/52', level: 'B1.2', type: 'classroom', startDate: '2026.03.31.', endDate: '2026.05.21.', schedule: 'Kedd-Csütörtök', time: '18:00-19:30', instructor: 'Jin Xiaoyuan', fee: 40000 },
  { code: '2026/55', level: 'A2.2', type: 'online', startDate: '2026.04.07.', endDate: '2026.05.28.', schedule: 'Kedd-Csütörtök', time: '18:00-19:30', instructor: 'Liu Daoyuan', fee: 40000 },
  { code: '2026/53', level: 'Ismerkedő', type: 'online', startDate: '2026.04.07.', endDate: '2026.04.20.', schedule: 'Naponta', time: '18:00-19:30', instructor: 'Chi Ying', fee: 0, isFree: true },
  { code: '2026/54', level: 'B1.5', type: 'online', startDate: '2026.04.07.', endDate: '2026.05.28.', schedule: 'Kedd-Csütörtök', time: '18:00-19:30', instructor: 'Cai Shaowei', fee: 40000 },
  { code: '2026/56', level: 'A2.3', type: 'online', startDate: '2026.04.08.', endDate: '2026.06.08.', schedule: 'Hétfő-Szerda', time: '18:00-19:30', instructor: 'Zhong Manni', fee: 40000 },
  { code: '2026/57', level: 'A2.1', type: 'online', startDate: '2026.04.08.', endDate: '2026.06.08.', schedule: 'Hétfő-Szerda', time: '18:00-19:30', instructor: 'Tan Huixin', fee: 40000 },
  { code: '2026/58', level: 'B1.1', type: 'online', startDate: '2026.04.08.', endDate: '2026.06.08.', schedule: 'Hétfő-Szerda', time: '18:00-19:30', instructor: 'Jin Xiaoyuan', fee: 40000 },
  { code: '2026/59', level: 'C1.1', type: 'online', startDate: '2026.04.09.', endDate: '2026.06.02.', schedule: 'Kedd-Csütörtök', time: '18:00-19:30', instructor: 'Tan Huixin', fee: 40000 },
  { code: '2026/60', level: 'A2.2', type: 'online', startDate: '2026.04.14.', endDate: '2026.06.04.', schedule: 'Kedd-Csütörtök', time: '18:00-19:30', instructor: 'Lu Yinyin', fee: 40000 },
  { code: '2026/61', level: 'B1.2', type: 'online', startDate: '2026.04.16.', endDate: '2026.06.09.', schedule: 'Kedd-Csütörtök', time: '18:00-19:30', instructor: 'Chen Yingying', fee: 40000 },
  { code: '2026/64', level: 'A1.2', type: 'classroom', startDate: '2026.04.16.', endDate: '2026.06.09.', schedule: 'Kedd-Csütörtök', time: '18:00-19:30', instructor: 'Kang Lei', fee: 28000 },
  { code: '2026/63', level: 'A1.2', type: 'classroom', startDate: '2026.04.16.', endDate: '2026.06.09.', schedule: 'Kedd-Csütörtök', time: '18:00-19:30', instructor: 'Zhang Xinrui', fee: 28000 },
  { code: '2026/62', level: 'B2.5', type: 'classroom', startDate: '2026.04.16.', endDate: '2026.06.09.', schedule: 'Kedd-Csütörtök', time: '18:00-19:30', instructor: 'Wang Lu', fee: 40000 },
  { code: '2026/65', level: 'B1.5', type: 'online', startDate: '2026.04.20.', endDate: '2026.06.17.', schedule: 'Hétfő-Szerda', time: '18:00-19:30', instructor: 'Lu Yinyin', fee: 40000 },
  { code: '2026/66', level: 'B1.4', type: 'online', startDate: '2026.04.21.', endDate: '2026.06.11.', schedule: 'Kedd-Csütörtök', time: '18:00-19:30', instructor: 'Luo Chi', fee: 40000 },
];

export const newsItems: NewsItem[] = [
  // 2025
  { date: '2025.12.19.', title: 'Megtartottuk a Fiatal Sinológusok Házi Konferenciáját' },
  { date: '2025.12.05.', title: 'A korai császárok öröksége: feliratok a Qin-korból' },
  { date: '2025.12.03.', title: 'Az ELTE Konfuciusz Intézet kalligráfiai bemutatója a Szépművészeti Múzeumban' },
  { date: '2025.11.28.', title: 'Haladó tájképfestészet tanfolyam az ELTE Konfuciusz Intézetben' },
  { date: '2025.11.27.', title: 'Az ELTE Konfuciusz Intézet a Szépművészeti Múzeumban' },
  { date: '2025.11.23.', title: 'Folytatódik a kalligráfiaképzés az ELTE Konfuciusz Intézetben' },
  { date: '2025.11.15.', title: 'Az ELTE Konfuciusz Intézete idén is elnyerte a „Kiváló HSK vizsgaközpont" címet' },
  { date: '2025.11.15.', title: 'Ázsia Napok a GOBUDA Mallban' },
  { date: '2025.11.05.', title: 'Hoppál Krisztina az MTA kitüntetettjei között' },
  { date: '2025.10.18.', title: 'Megtartottuk első összevont HSK- és HSKK-nyelvvizsgánkat' },
  { date: '2025.10.13.', title: 'Prof. Dr. Hamar Imre megtartotta akadémiai székfoglalóját' },
  { date: '2025.10.11.', title: 'Konfuciusz Nap az ELTE-n – a kínai kultúra ünnepe minden korosztálynak' },
  { date: '2025.09.26.', title: 'Kutatók Éjszakája az ELTE Konfuciusz Intézetben' },
  { date: '2025.09.10.', title: 'Folytatódik a taiji oktatás az ELTE-n' },
  { date: '2025.09.09.', title: 'Gazdasági előadássorozat az ELTE Konfuciusz Intézetben', description: 'Az intézmény gazdasági és kereskedelmi, valamint üzleti témájú előadássorozatot szervezett a kínai–magyar vállalatvezetési kultúra összehasonlításáról.' },
  { date: '2025.09.05.', title: 'Prof. Dr. Hamar Imre az ELTE kitüntetettjei között' },
  { date: '2025.08.30.', title: 'Látogatás a vácrátóti Nemzeti Botanikus Kertben' },
  { date: '2025.07.19.', title: 'Sikeresen zárultak a júliusi HSK és HSKK nyelvvizsgák' },
  { date: '2025.07.04.', title: 'A Nyelvoktatási és Együttműködési Központ delegációja tett látogatást' },
  { date: '2025.06.25.', title: 'Párbeszéd a kínai–magyar oktatási és interkulturális kapcsolatok erősítéséért' },
  { date: '2025.06.23.', title: 'Sikeresen zárult a Tokaji Ferenc Gimnázium nyári kínai nyelvi programja' },
  { date: '2025.06.21.', title: '„Varázslatos Kelet" kiállítás a Tokaji Múzeumban' },
  { date: '2025.06.06.', title: 'Újabb sikereket értek el az ELTE Konfuciusz Intézet diákjai' },
  { date: '2025.06.04.', title: 'Sikeres versenyzés a Pekingi Idegennyelvi Egyetem szinkronizálóversenyén' },
  { date: '2025.06.02.', title: 'Sárkányhajó Fesztivál a X. kerületben' },
  { date: '2025.05.09.', title: 'Sikeresen lezárult a CEETC tizenkettedik továbbképzése' },
  { date: '2025.05.07.', title: 'Dr. Hamar Imrét a Magyar Tudományos Akadémia levelező tagjai közé választották' },
  { date: '2025.04.08.', title: 'Az ELTE Konfuciusz Intézet a Dabasi Táncsics Mihály Gimnázium vendége volt' },
  { date: '2025.04.07.', title: 'Az ELTE Konfuciusz Intézet vendége volt Li Chen professzor' },
  { date: '2025.04.01.', title: 'A Távol-keleti Tanulmányok Q-besorolása a SCOPUS adatbázisban' },
  { date: '2025.03.18.', title: 'Nemzetközi Kulturális Nap a Trefort-kertben' },
  { date: '2025.03.09.', title: 'Sikeresen megtartottuk a márciusi HSK és HSKK nyelvvizsgákat' },
  { date: '2025.02.28.', title: 'Kínai teabemutató a Magyar Nemzeti Múzeumban' },
  { date: '2025.02.05.', title: 'Holdújév a miskolci Fényi Gyula Jezsuita Gimnáziumban' },
  { date: '2025.02.01.', title: 'Kínai holdújév a Magyar Nemzeti Múzeumban' },
  { date: '2025.01.31.', title: 'Kínai Holdújév az ELTE Trefort Ágoston Gyakorló Gimnáziumban' },
  { date: '2025.01.23.', title: 'Az ELTE Konfuciusz Intézete részt vett a GE Healthcare éves rendezvényén' },
  { date: '2025.01.16.', title: 'Eredményhirdetés az ELTE Konfuciusz Intézet rajzpályázatán' },
  // 2024
  { date: '2024.12.20.', title: 'Hudecz Ferenc professzor kitüntetést kapott a Konfuciusz Intézetek hálózatának évfordulóján' },
  { date: '2024.12.13.', title: 'Az ELTE Konfuciusz Intézet kínai teabemutatója a Magyar Nemzeti Múzeumban' },
  { date: '2024.12.12.', title: 'Hamar Imre, egyetemi vezető újabb rangos elismerést vett át' },
  { date: '2024.11.23.', title: 'Az ELTE Konfuciusz Intézet megtartotta az idei második YCT nyelvvizsgáját' },
  { date: '2024.11.16.', title: 'Megalakult a Konfuciusz Intézetek szakértői központja' },
  { date: '2024.11.15.', title: 'Intézetünk „Modell Kínai Nyelvvizsgaközpont" lett – világelső elismerés' },
  { date: '2024.10.24.', title: 'Magyar–kínai diplomáciai évfordulós koncert a Zene Házában' },
  { date: '2024.10.19.', title: 'Megkezdődtek az őszi kínai nyelvvizsgák' },
  { date: '2024.10.12.', title: 'Büszkék vagyunk a 2024-es Kínai nagyköveti ösztöndíj díjazottjainkra' },
  { date: '2024.10.09.', title: 'Kínai lámpáskészítő foglalkozást tartottunk' },
  { date: '2024.10.07.', title: 'Budapesten megrendezett konferencián tartottunk kulturális foglalkozást' },
  { date: '2024.10.07.', title: 'Kínai napot tartottunk Tokajban' },
  { date: '2024.10.05.', title: 'Nagy sikerrel zajlott az idei Konfuciusz Nap az ELTE-n' },
  { date: '2024.09.30.', title: 'Átadták az egyetemi kitüntetéseket az ELTE-n' },
  { date: '2024.09.27.', title: 'Idén is részt vettünk a Kutatók Éjszakáján' },
  { date: '2024.09.19.', title: 'Hoppál Krisztina Kinga Bolyai-plakettet vehetett át' },
  { date: '2024.07.05.', title: 'You and Me in Beijing – Sikeresen lezajlott a nyári tábor' },
  { date: '2024.07.04.', title: 'Húszéves a Konfuciusz Intézetek hálózata' },
  { date: '2024.06.17.', title: 'Sikeresen zárult az önkéntesi képzés' },
  { date: '2024.06.10.', title: 'Kínai–magyar kutatóközpont nyílt az ELTÉ-n' },
  { date: '2024.06.08.', title: 'Sárkányhajó Fesztivál Velencén' },
  { date: '2024.05.26.', title: 'Gyermeknap a Városligetben' },
  { date: '2024.05.24.', title: 'ELTE Konfuciusz Intézet gratulál a Chinese Bridge győzteseinek' },
  { date: '2024.05.22.', title: 'Folytatódnak tájképfestő tanfolyamaink' },
  { date: '2024.05.21.', title: 'Irodalmi Különlegesség az ELTE Konfuciusz Intézetében' },
  { date: '2024.05.12.', title: 'Megtartottuk az idei év első MCT és YCT vizsgáit' },
  { date: '2024.05.07.', title: 'Intézetünk is részt vett a Trefort-napokon' },
  { date: '2024.04.22.', title: 'Lezajlott az ELTE Konfuciusz Intézet idei első HSK és HSKK nyelvvizsgája' },
  { date: '2024.04.10.', title: 'Az ELTE Konfuciusz Intézet is részt vett az első Cultural Connection Day nevű eseményen' },
  { date: '2024.04.01.', title: 'A tavaszi félévben is folytatódott a taiji kurzusunk' },
  { date: '2024.03.27.', title: 'Kínai nyelvtanítás napja – konferencia és kulturális program' },
  { date: '2024.03.14.', title: 'Kalligráfia workshopot tartottunk a Fényi Gyula Jezsuita Gimnáziumban' },
  { date: '2024.02.22.', title: 'Részt vettünk a Schiller szalon BYD autóbemutatóján' },
  { date: '2024.02.03.', title: 'Az ELTE Konfuciusz Intézet ismét társszervezője volt az ország legnagyobb holdújévi rendezvényének' },
  { date: '2024.01.28.', title: 'Kínai Újévi Fesztivál a budapesti kínai negyedben' },
  { date: '2024.01.26.', title: 'Online előadás a kínai manhua fejlődéséről' },
  { date: '2024.01.09.', title: 'Elrajtolt a Konfuciusz Konyhája: Élmények a Kínai Konyha Varázslatából' },
  // 2023
  { date: '2023.11.25.', title: 'Első kínai orvosi nyelvvizsga a régióban' },
  { date: '2023.11.20.', title: 'Százéves az ELTE Kínai tanszék' },
  { date: '2023.11.16.', title: 'Sikeresen zárult a CEETC tizenegyedik továbbképzése' },
  { date: '2023.10.15.', title: 'Lezajlottak az őszi félév első HSK és HSKK vizsgái' },
  { date: '2023.10.13.', title: 'Őszközép ünnep az ELTE Konfuciusz Intézetében' },
  { date: '2023.09.30.', title: 'Teltházas volt az idei Konfuciusz nap' },
  { date: '2023.09.29.', title: 'A Kutatók Éjszakáján megtelt a Kodály-terem' },
  { date: '2023.09.12.', title: 'Az ELTE Konfuciusz Intézet megkezdte taiji oktatását egyetemistáknak' },
  { date: '2023.06.07.', title: '100 éves lett az ELTE Kínai Tanszék' },
  { date: '2023.05.28.', title: 'Hatalmas siker volt az idei Városligeti Gyereknap' },
  { date: '2023.05.25.', title: '„Út és Övezet" című előadás – dr. Salát Gergely, Kína szakértő' },
  { date: '2023.05.24.', title: 'Megtartottuk az első Kínai Karriernapot' },
  { date: '2023.03.18.', title: 'Sikeresen lezajlott 2023 első HSK és HSKK nyelvvizsgája' },
  // 2022
  { date: '2022.12.20.', title: 'Megalakult az ELTE Római Világ és a Távol-Kelet Kutatócsoport' },
  { date: '2022.11.17.', title: 'Sikeresen zárult a CEETC tizedik, jubileumi továbbképzése' },
  { date: '2022.09.24.', title: 'Teltházas volt az idei Konfuciusz-nap' },
  { date: '2022.06.21.', title: '15 éves lett az ELTE Konfuciusz Intézet' },
  { date: '2022.06.04.', title: 'Az ELTE Konfuciusz Intézet is ott volt az első Velencei Sárkányhajó Ünnepen' },
  { date: '2022.03.26.', title: 'Nyelvvizsga történelmi pillanat: Még soha nem volt ennyi nyelvvizsgázónk' },
  { date: '2022.03.17.', title: 'Az ELTE Konfuciusz Intézetét újra „Kiváló Kínai Nyelvvizsgaközpont"-nak minősítették' },
];

export const staff: StaffMember[] = [
  { name: 'Prof. Dr. Hamar Imre', role: 'Igazgató' },
  { name: 'Li Denggui', role: 'Kínai igazgató' },
  { name: 'Csikó Anna', role: 'Igazgatóhelyettes' },
  { name: 'Veres Judit', role: 'Oktatási igazgató', email: 'veres.judit@konfuciusz.elte.hu' },
  { name: 'Papp Evelin Csenge', role: 'Titkár', email: 'office@konfuciusz.elte.hu' },
];

export const prices: PriceItem[] = [
  { level: 'Ismerkedő tanfolyam', price: 'Ingyenes', numericPrice: 0 },
  { level: 'A1.1', price: '20 000 Ft', numericPrice: 20000 },
  { level: 'A1.2', price: '28 000 Ft', numericPrice: 28000 },
  { level: 'A2.1 – C2.5', price: '40 000 Ft', numericPrice: 40000 },
];

export const examDates: ExamDate[] = [
  {
    date: '2026. március 22. (vasárnap)',
    levels: 'HSK 1-6 és HSKK szintek',
    registrationDeadline: '2026. február 23. (pekingi idő szerint éjfél)',
    resultsDate: '2026. április 22.',
    note: 'Ez a nyelvvizsga az utolsó, amely még a korábbi vizsgarendszer szintjei szerint lesz megrendezve!',
  },
];

export const downloads: Download[] = [
  { year: '2024', title: 'Konfuciusz Krónika 2024. szám', filename: 'Konfuciusz_Kronika_2024.pdf' },
  { year: '2023', title: 'Konfuciusz Krónika 2023. szám', filename: 'Konfuciusz_Kronika_2023.pdf' },
  { year: '2022', title: 'Konfuciusz Krónika 2022. szám', filename: 'Konfuciusz_Kronika_2022.pdf' },
  { year: '2021', title: 'Konfuciusz Krónika 2021. szám', filename: 'Konfuciusz_Kronika_2021.pdf' },
  { year: '2019-2020', title: 'Konfuciusz Krónika 2019-2020. szám', filename: 'Konfuciusz_Kronika_2019.pdf' },
  { year: '2018', title: 'Konfuciusz Krónika 2018. szám', filename: 'Konfuciusz_Kronika_2018.pdf' },
  { year: '2017', title: 'Konfuciusz Krónika 2017.', filename: 'Konfuciusz_Kronika_2017.pdf' },
  { year: '2016', title: 'Konfuciusz Krónika 2016/1-2.', filename: 'Konfuciusz_Kronika_2016_1-2.pdf' },
  { year: '2015', title: 'Konfuciusz Krónika 2015/1-2.', filename: 'Konfuciusz_Kronika_2015_1-2.pdf' },
  { year: '2014', title: 'Konfuciusz Krónika 2014/1-2.', filename: 'Konfuciusz_Kronika_2014_1-2.pdf' },
  { year: '2013', title: 'Konfuciusz Krónika 2013/1-2.', filename: 'Konfuciusz_Kronika_2013_1-2.pdf' },
  { year: '2012', title: 'Konfuciusz Krónika 2012/1-2.', filename: 'Konfuciusz_Kronika_2012_1-2.pdf' },
  { year: '2011/2', title: 'Konfuciusz Krónika 2011/2.', filename: 'Konfuciusz_Kronika_2011-2.pdf' },
  { year: '2011/1', title: 'Konfuciusz Krónika 2011/1.', filename: 'Konfuciusz_Kronika_2011-1.pdf' },
  { year: '2010/2', title: 'Konfuciusz Krónika 2010/2.', filename: 'Konfuciusz_Kronika_2010-2.pdf' },
  { year: '2010/1', title: 'Konfuciusz Krónika 2010/1.', filename: 'Konfuciusz_Kronika_2010-1.pdf' },
  { year: '2009/2', title: 'Konfuciusz Krónika 2009/2.', filename: 'Konfuciusz_Kronika_2009-2.pdf' },
  { year: '2009/1', title: 'Konfuciusz Krónika 2009/1.', filename: 'Konfuciusz_Kronika_2009-1.pdf' },
  { year: '2008/2', title: 'Konfuciusz Krónika 2008/2.', filename: 'Konfuciusz_Kronika_2008-2szam.pdf' },
  { year: '2008/1', title: 'Konfuciusz Krónika 2008/1.', filename: 'Konfuciusz_Kronika_2008-1.pdf' },
  { year: '2007', title: 'Konfuciusz Krónika 2007/1.', filename: 'Konfuciusz_Kronika_2007-1szam.pdf' },
];

export const instituteFacts = [
  { number: '5', label: 'városban' },
  { number: '21', label: 'intézmény' },
  { number: '2500+', label: 'diák évente' },
  { number: '28', label: 'anyanyelvű szaktanár' },
  { number: '800+', label: 'vizsgázó évente' },
  { number: '2006', label: 'óta működünk' },
];
