import type { Language } from "@/contexts/LanguageContext";

export interface Course {
  code: string;
  level: string;
  type: 'online' | 'classroom' | 'hybrid';
  startDate: string;
  endDate: string;
  schedule: { hu: string; en: string; zh: string };
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
  role: { hu: string; en: string; zh: string };
  email?: string;
  phone?: string;
}

export interface ExamDate {
  date: { hu: string; en: string; zh: string };
  levels: { hu: string; en: string; zh: string };
  registrationDeadline: { hu: string; en: string; zh: string };
  resultsDate: { hu: string; en: string; zh: string };
  note?: { hu: string; en: string; zh: string };
}

export interface PriceItem {
  level: { hu: string; en: string; zh: string };
  price: { hu: string; en: string; zh: string };
  numericPrice: number;
}

export interface Download {
  year: string;
  title: string;
  filename: string;
}

export interface CulturalCourse {
  title: { hu: string; en: string; zh: string };
  startDate: { hu: string; en: string; zh: string };
  schedule: { hu: string; en: string; zh: string };
  location: string;
  instructor: string;
  fee: { hu: string; en: string; zh: string };
  description: { hu: string; en: string; zh: string };
}

export interface NavItem {
  label: { hu: string; en: string; zh: string };
  href: string;
}

export const navItems: NavItem[] = [
  { label: { hu: 'Nyitólap', en: 'Home', zh: '首页' }, href: '/' },
  { label: { hu: 'Nyelvtanfolyamok', en: 'Language Courses', zh: '语言课程' }, href: '/nyelvtanfolyamok' },
  { label: { hu: 'Nyelvvizsgák', en: 'Language Exams', zh: '语言考试' }, href: '/nyelvvizsgak' },
  { label: { hu: 'Kínai ösztöndíjak', en: 'Chinese Scholarships', zh: '中国奖学金' }, href: '/osztondijak' },
  { label: { hu: 'Letöltések', en: 'Downloads', zh: '下载中心' }, href: '/letoltesek' },
  { label: { hu: 'Híreink', en: 'News', zh: '新闻动态' }, href: '/hireink' },
  { label: { hu: 'Elérhetőségünk', en: 'Contact', zh: '联系我们' }, href: '/elerhetosegunk' },
];

export const culturalCourses: CulturalCourse[] = [
  {
    title: {
      hu: 'Kalligráfia-tanfolyam – 10 alkalommal',
      en: 'Calligraphy Course – 10 Sessions',
      zh: '书法课程 – 共10节课',
    },
    startDate: {
      hu: '2026. március 9.',
      en: 'March 9, 2026',
      zh: '2026年3月9日',
    },
    schedule: {
      hu: 'Hétfőnként 17:30-19:00',
      en: 'Mondays 17:30-19:00',
      zh: '每周一 17:30-19:00',
    },
    location: 'Tőkei terem (1/1-es)',
    instructor: 'Horváth Janisz',
    fee: {
      hu: '25 000 Ft (ELTE alkalmazottaknak és alumni tagoknak 10% kedvezmény)',
      en: '25,000 HUF (10% discount for ELTE employees and alumni)',
      zh: '25,000福林（ELTE员工和校友享受10%折扣）',
    },
    description: {
      hu: 'A kínai kalligráfia a kínai kultúra egyik legfontosabb művészeti ága. A tanfolyam során megismerkedhet a kalligráfia alapjaival, eszközeivel és technikáival. Az anyagokat biztosítjuk.',
      en: 'Chinese calligraphy is one of the most important art forms of Chinese culture. In this course, you will learn the basics, tools, and techniques of calligraphy. Materials are provided.',
      zh: '中国书法是中国文化最重要的艺术形式之一。本课程将带您了解书法的基础知识、工具和技法。课程提供所需材料。',
    },
  },
  {
    title: {
      hu: 'Peónia-, rózsa- és gyümölcsfestészeti tanfolyam',
      en: 'Peony, Rose and Fruit Painting Course',
      zh: '牡丹、玫瑰与水果绘画课程',
    },
    startDate: {
      hu: '2026. március 12.',
      en: 'March 12, 2026',
      zh: '2026年3月12日',
    },
    schedule: {
      hu: 'Csütörtökönként 17:30-19:00',
      en: 'Thursdays 17:30-19:00',
      zh: '每周四 17:30-19:00',
    },
    location: 'Tőkei terem (1/1-es)',
    instructor: 'Horváth Janisz',
    fee: {
      hu: '25 000 Ft (ELTE alkalmazottaknak és alumni tagoknak 10% kedvezmény)',
      en: '25,000 HUF (10% discount for ELTE employees and alumni)',
      zh: '25,000福林（ELTE员工和校友享受10%折扣）',
    },
    description: {
      hu: 'Hagyományos kínai festészeti technikákra épülő tanfolyam, amely a peónia, rózsa és egyéb virágok, valamint gyümölcsök festészetére fókuszál. Az anyagokat biztosítjuk.',
      en: 'A course based on traditional Chinese painting techniques, focusing on painting peonies, roses, other flowers, and fruits. Materials are provided.',
      zh: '本课程以中国传统绘画技法为基础，重点教授牡丹、玫瑰及其他花卉和水果的绘画技巧。课程提供所需材料。',
    },
  },
];

const scheduleMap: Record<string, { hu: string; en: string; zh: string }> = {
  'Hétfő-Szerda': { hu: 'Hétfő-Szerda', en: 'Mon-Wed', zh: '周一-周三' },
  'Hétfő-Csütörtök': { hu: 'Hétfő-Csütörtök', en: 'Mon-Thu', zh: '周一-周四' },
  'Kedd-Csütörtök': { hu: 'Kedd-Csütörtök', en: 'Tue-Thu', zh: '周二-周四' },
  'Naponta': { hu: 'Naponta', en: 'Daily', zh: '每天' },
};

function sched(hu: string): { hu: string; en: string; zh: string } {
  return scheduleMap[hu] ?? { hu, en: hu, zh: hu };
}

export const startingCourses: Course[] = [
  { code: '2026/44', level: 'A2.1', type: 'online', startDate: '2026.03.18.', endDate: '2026.05.18.', schedule: sched('Hétfő-Szerda'), time: '18:00-19:30', instructor: 'Borsódi Réka', fee: 40000 },
  { code: '2026/43', level: 'B2.1', type: 'classroom', startDate: '2026.03.18.', endDate: '2026.05.18.', schedule: sched('Hétfő-Szerda'), time: '18:00-19:30', instructor: 'Cai Shaowei', fee: 40000 },
  { code: '2026/46', level: 'A1.2', type: 'online', startDate: '2026.03.23.', endDate: '2026.05.20.', schedule: sched('Hétfő-Szerda'), time: '18:00-19:30', instructor: 'Liu Daoyuan', fee: 28000 },
  { code: '2026/47', level: 'A1.2', type: 'online', startDate: '2026.03.23.', endDate: '2026.05.20.', schedule: sched('Hétfő-Szerda'), time: '18:00-19:30', instructor: 'Liu Ming', fee: 28000 },
  { code: '2026/45', level: 'A2.1', type: 'online', startDate: '2026.03.23.', endDate: '2026.05.18.', schedule: sched('Hétfő-Csütörtök'), time: '11:00-12:30', instructor: 'Fülöp Andrea', fee: 40000 },
  { code: '2026/48', level: 'A1.1', type: 'classroom', startDate: '2026.03.23.', endDate: '2026.05.20.', schedule: sched('Hétfő-Szerda'), time: '18:00-19:30', instructor: 'Olajos István', fee: 20000 },
  { code: '2026/49', level: 'A2.1', type: 'classroom', startDate: '2026.03.24.', endDate: '2026.05.14.', schedule: sched('Kedd-Csütörtök'), time: '18:00-19:30', instructor: 'Borsódi Réka', fee: 40000 },
  { code: '2026/50', level: 'A2.4', type: 'online', startDate: '2026.03.30.', endDate: '2026.06.01.', schedule: sched('Hétfő-Szerda'), time: '18:00-19:30', instructor: 'Chen Yingying', fee: 40000 },
  { code: '2026/51', level: 'HSK6', type: 'hybrid', startDate: '2026.03.30.', endDate: '2026.06.01.', schedule: sched('Hétfő-Szerda'), time: '18:00-19:30', instructor: 'Xu Xiaokai', fee: 40000 },
  { code: '2026/52', level: 'B1.2', type: 'classroom', startDate: '2026.03.31.', endDate: '2026.05.21.', schedule: sched('Kedd-Csütörtök'), time: '18:00-19:30', instructor: 'Jin Xiaoyuan', fee: 40000 },
  { code: '2026/55', level: 'A2.2', type: 'online', startDate: '2026.04.07.', endDate: '2026.05.28.', schedule: sched('Kedd-Csütörtök'), time: '18:00-19:30', instructor: 'Liu Daoyuan', fee: 40000 },
  { code: '2026/53', level: 'Ismerkedő', type: 'online', startDate: '2026.04.07.', endDate: '2026.04.20.', schedule: sched('Naponta'), time: '18:00-19:30', instructor: 'Chi Ying', fee: 0, isFree: true },
  { code: '2026/54', level: 'B1.5', type: 'online', startDate: '2026.04.07.', endDate: '2026.05.28.', schedule: sched('Kedd-Csütörtök'), time: '18:00-19:30', instructor: 'Cai Shaowei', fee: 40000 },
  { code: '2026/56', level: 'A2.3', type: 'online', startDate: '2026.04.08.', endDate: '2026.06.08.', schedule: sched('Hétfő-Szerda'), time: '18:00-19:30', instructor: 'Zhong Manni', fee: 40000 },
  { code: '2026/57', level: 'A2.1', type: 'online', startDate: '2026.04.08.', endDate: '2026.06.08.', schedule: sched('Hétfő-Szerda'), time: '18:00-19:30', instructor: 'Tan Huixin', fee: 40000 },
  { code: '2026/58', level: 'B1.1', type: 'online', startDate: '2026.04.08.', endDate: '2026.06.08.', schedule: sched('Hétfő-Szerda'), time: '18:00-19:30', instructor: 'Jin Xiaoyuan', fee: 40000 },
  { code: '2026/59', level: 'C1.1', type: 'online', startDate: '2026.04.09.', endDate: '2026.06.02.', schedule: sched('Kedd-Csütörtök'), time: '18:00-19:30', instructor: 'Tan Huixin', fee: 40000 },
  { code: '2026/60', level: 'A2.2', type: 'online', startDate: '2026.04.14.', endDate: '2026.06.04.', schedule: sched('Kedd-Csütörtök'), time: '18:00-19:30', instructor: 'Lu Yinyin', fee: 40000 },
  { code: '2026/61', level: 'B1.2', type: 'online', startDate: '2026.04.16.', endDate: '2026.06.09.', schedule: sched('Kedd-Csütörtök'), time: '18:00-19:30', instructor: 'Chen Yingying', fee: 40000 },
  { code: '2026/64', level: 'A1.2', type: 'classroom', startDate: '2026.04.16.', endDate: '2026.06.09.', schedule: sched('Kedd-Csütörtök'), time: '18:00-19:30', instructor: 'Kang Lei', fee: 28000 },
  { code: '2026/63', level: 'A1.2', type: 'classroom', startDate: '2026.04.16.', endDate: '2026.06.09.', schedule: sched('Kedd-Csütörtök'), time: '18:00-19:30', instructor: 'Zhang Xinrui', fee: 28000 },
  { code: '2026/62', level: 'B2.5', type: 'classroom', startDate: '2026.04.16.', endDate: '2026.06.09.', schedule: sched('Kedd-Csütörtök'), time: '18:00-19:30', instructor: 'Wang Lu', fee: 40000 },
  { code: '2026/65', level: 'B1.5', type: 'online', startDate: '2026.04.20.', endDate: '2026.06.17.', schedule: sched('Hétfő-Szerda'), time: '18:00-19:30', instructor: 'Lu Yinyin', fee: 40000 },
  { code: '2026/66', level: 'B1.4', type: 'online', startDate: '2026.04.21.', endDate: '2026.06.11.', schedule: sched('Kedd-Csütörtök'), time: '18:00-19:30', instructor: 'Luo Chi', fee: 40000 },
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
  { name: 'Prof. Dr. Hamar Imre', role: { hu: 'Igazgató', en: 'Director', zh: '院长' } },
  { name: 'Li Denggui', role: { hu: 'Kínai igazgató', en: 'Chinese Director', zh: '中方院长' } },
  { name: 'Csikó Anna', role: { hu: 'Igazgatóhelyettes', en: 'Deputy Director', zh: '副院长' } },
  { name: 'Veres Judit', role: { hu: 'Oktatási igazgató', en: 'Educational Director', zh: '教学主任' }, email: 'veres.judit@konfuciusz.elte.hu' },
  { name: 'Papp Evelin Csenge', role: { hu: 'Titkár', en: 'Secretary', zh: '秘书' }, email: 'office@konfuciusz.elte.hu' },
];

export const prices: PriceItem[] = [
  { level: { hu: 'Ismerkedő tanfolyam', en: 'Introductory Course', zh: '体验课程' }, price: { hu: 'Ingyenes', en: 'Free', zh: '免费' }, numericPrice: 0 },
  { level: { hu: 'A1.1', en: 'A1.1', zh: 'A1.1' }, price: { hu: '20 000 Ft', en: '20,000 HUF', zh: '20,000福林' }, numericPrice: 20000 },
  { level: { hu: 'A1.2', en: 'A1.2', zh: 'A1.2' }, price: { hu: '28 000 Ft', en: '28,000 HUF', zh: '28,000福林' }, numericPrice: 28000 },
  { level: { hu: 'A2.1 – C2.5', en: 'A2.1 – C2.5', zh: 'A2.1 – C2.5' }, price: { hu: '40 000 Ft', en: '40,000 HUF', zh: '40,000福林' }, numericPrice: 40000 },
];

export const examDates: ExamDate[] = [
  {
    date: { hu: '2026. március 22. (vasárnap)', en: 'March 22, 2026 (Sunday)', zh: '2026年3月22日（星期日）' },
    levels: { hu: 'HSK 1-6 és HSKK szintek', en: 'HSK Levels 1-6 and HSKK', zh: 'HSK 1-6级和HSKK各级' },
    registrationDeadline: { hu: '2026. február 23. (pekingi idő szerint éjfél)', en: 'February 23, 2026 (midnight Beijing time)', zh: '2026年2月23日（北京时间午夜）' },
    resultsDate: { hu: '2026. április 22.', en: 'April 22, 2026', zh: '2026年4月22日' },
    note: {
      hu: 'Ez a nyelvvizsga az utolsó, amely még a korábbi vizsgarendszer szintjei szerint lesz megrendezve!',
      en: 'This is the last exam to be held under the previous exam system levels!',
      zh: '本次考试是按照旧考试体系等级举办的最后一次考试！',
    },
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
  { number: '5', label: { hu: 'városban', en: 'cities', zh: '个城市' } },
  { number: '21', label: { hu: 'intézmény', en: 'institutions', zh: '所合作机构' } },
  { number: '2500+', label: { hu: 'diák évente', en: 'students yearly', zh: '名学生/年' } },
  { number: '28', label: { hu: 'anyanyelvű szaktanár', en: 'native teachers', zh: '名母语教师' } },
  { number: '800+', label: { hu: 'vizsgázó évente', en: 'examinees yearly', zh: '名考生/年' } },
  { number: '2006', label: { hu: 'óta működünk', en: 'established', zh: '年创办' } },
];

/* helpers used by course type display */
export function courseTypeLabel(type: Course['type'], lang: Language): string {
  const labels: Record<Course['type'], { hu: string; en: string; zh: string }> = {
    online: { hu: '🖥 Online', en: '🖥 Online', zh: '🖥 线上' },
    classroom: { hu: '🏫 Jelenléti', en: '🏫 In-person', zh: '🏫 面授' },
    hybrid: { hu: '🔁 Hibrid', en: '🔁 Hybrid', zh: '🔁 混合' },
  };
  return labels[type][lang];
}
