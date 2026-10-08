export type Lang = 'en' | 'ka' | 'ru' | 'de' | 'es'

export interface L {
  en: string
  ka: string
  ru?: string
  de?: string
  es?: string
}

/** Localized string with fallback to English. */
export function pick(l: L, lang: Lang): string {
  return l[lang] ?? l.en
}

export type Block =
  | { type: 'lead'; text: L }
  | { type: 'p'; text: L }
  | { type: 'h3'; text: L }
  | { type: 'list'; items: L[] }
  | { type: 'cards'; items: { title: L; text: L }[] }
  | { type: 'table'; head: L[]; rows: L[][] }
  | { type: 'steps'; items: { title: L; text: L }[] }
  | { type: 'note'; title: L; text: L }

export interface Chapter {
  id: string
  num: string
  title: L
  blocks: Block[]
}

export const ui = {
  trustBadge: {
    en: '2026 · Training Guide',
    ka: '2026 · სასწავლო გზამკვლევი',
    ru: '2026 · Учебное руководство',
    de: '2026 · Schulungsanleitung',
    es: '2026 · Guía de formación',
  },
  heroTitle: {
    en: 'Why Proxies Are Important',
    ka: 'რატომ არის პროქსები მნიშვნელოვანი',
    ru: 'Почему прокси важны',
    de: 'Warum Proxys wichtig sind',
    es: 'Por qué son importantes los proxies',
  },
  heroSubtitle: {
    en: 'The complete Proxied.com manual: from 4G & 5G connections and IP addresses to proxy pools, mobile proxies, and a full setup walkthrough with Multilogin, Incogniton, WireGuard, and OpenVPN.',
    ka: 'Proxied.com-ის სრული სახელმძღვანელო: 4G და 5G კავშირებიდან და IP მისამართებიდან პროქსი პულებამდე, მობილურ პროქსებამდე და სრულ კონფიგურაციამდე Multilogin-ში, Incogniton-ში, WireGuard-სა და OpenVPN-ში.',
    ru: 'Полное руководство Proxied.com: от подключений 4G и 5G и IP-адресов до пулов прокси, мобильных прокси и пошаговой настройки с Multilogin, Incogniton, WireGuard и OpenVPN.',
    de: 'Das vollständige Proxied.com-Handbuch: von 4G- und 5G-Verbindungen und IP-Adressen über Proxy-Pools und mobile Proxys bis hin zur kompletten Einrichtung mit Multilogin, Incogniton, WireGuard und OpenVPN.',
    es: 'El manual completo de Proxied.com: desde conexiones 4G y 5G y direcciones IP hasta pools de proxies, proxies móviles y una guía completa de configuración con Multilogin, Incogniton, WireGuard y OpenVPN.',
  },
  heroCtaPrimary: {
    en: 'Start reading',
    ka: 'წაკითხვის დაწყება',
    ru: 'Начать чтение',
    de: 'Lesen beginnen',
    es: 'Empezar a leer',
  },
  heroCtaSecondary: {
    en: 'Visit proxied.com',
    ka: 'გადადით proxied.com-ზე',
    ru: 'Перейти на proxied.com',
    de: 'proxied.com besuchen',
    es: 'Visitar proxied.com',
  },
  heroBadges: [
    { en: '12 chapters', ka: '12 თავი', ru: '12 глав', de: '12 Kapitel', es: '12 capítulos' },
    { en: '4G & 5G mobile proxies', ka: '4G და 5G მობილური პროქსები', ru: 'Мобильные прокси 4G и 5G', de: '4G- und 5G-Mobilproxys', es: 'Proxies móviles 4G y 5G' },
    { en: 'Step-by-step setup', ka: 'ნაბიჯ-ნაბიჯ კონფიგურაცია', ru: 'Пошаговая настройка', de: 'Schritt-für-Schritt-Einrichtung', es: 'Configuración paso a paso' },
  ] as L[],
  contents: { en: 'Contents', ka: 'სარჩევი', ru: 'Содержание', de: 'Inhalt', es: 'Contenido' },
  chapter: { en: 'Chapter', ka: 'თავი', ru: 'Глава', de: 'Kapitel', es: 'Capítulo' },
  getProxies: { en: 'Get proxies', ka: 'პროქსის შეძენა', ru: 'Получить прокси', de: 'Proxys erhalten', es: 'Obtener proxies' },
  themeToggle: { en: 'Toggle theme', ka: 'თემის გადართვა', ru: 'Переключить тему', de: 'Theme wechseln', es: 'Cambiar tema' },
  footerTagline: {
    en: 'A community-driven marketplace for real 4G/5G mobile proxies - no middlemen, just true market prices.',
    ka: 'რეალური 4G/5G მობილური პროქსების საზოგადოებრივი მარკეტპლეისი - შუამავლების გარეშე, მხოლოდ რეალური საბაზრო ფასებით.',
    ru: 'Маркетплейс, управляемый сообществом, для настоящих мобильных прокси 4G/5G - без посредников, по честным рыночным ценам.',
    de: 'Ein community-getriebener Marktplatz für echte 4G/5G-Mobilproxys - ohne Mittelsmänner, zu fairen Marktpreisen.',
    es: 'Un mercado impulsado por la comunidad para proxies móviles 4G/5G reales: sin intermediarios, a precios de mercado justos.',
  },
  footerLegal: {
    en: 'Independent training guide based on the Proxied Manual (2026). Not legal advice - check the laws and regulations in your country.',
    ka: 'დამოუკიდებელი სასწავლო გზამკვლევი Proxied Manual-ის (2026) საფუძველზე. არ არის იურიდიული რჩევა - გაითვალისწინეთ თქვენი ქვეყნის კანონები და რეგულაციები.',
    ru: 'Независимое учебное руководство на основе Proxied Manual (2026). Не является юридической консультацией - проверяйте законы и правила вашей страны.',
    de: 'Unabhängiger Schulungsleitfaden auf Basis des Proxied Manual (2026). Keine Rechtsberatung - beachten Sie die Gesetze und Vorschriften Ihres Landes.',
    es: 'Guía de formación independiente basada en el Proxied Manual (2026). No es asesoramiento legal: consulta las leyes y normativas de tu país.',
  },
  onThisPage: { en: 'On this page', ka: 'ამ გვერდზე', ru: 'На этой странице', de: 'Auf dieser Seite', es: 'En esta página' },
}

export const chapters: Chapter[] = [
  {
    id: 'what-is-proxied',
    num: '01',
    title: { en: 'What is Proxied?', ru: 'Что такое Proxied?', de: 'Was ist Proxied?', es: '¿Qué es Proxied?', ka: 'რა არის Proxied?' },
    blocks: [
      {
        type: 'lead',
        text: {
          en: 'Proxied is a dedicated marketplace selling 4G and 5G internet without mediators, where users have an uninterrupted connection on the network.', ru: 'Proxied - это специализированный маркетплейс, продающий интернет 4G и 5G без посредников, где пользователи имеют бесперебойное подключение к сети.', de: 'Proxied ist ein spezialisierter Marktplatz, der 4G- und 5G-Internet ohne Mittelsmänner verkauft, mit unterbrechungsfreier Netzverbindung für die Nutzer.', es: 'Proxied es un mercado especializado que vende internet 4G y 5G sin intermediarios, donde los usuarios tienen una conexión de red ininterrumpida.',
          ka: 'Proxied არის სპეციალიზებული მარკეტპლეისი, რომელიც ყიდის 4G და 5G ინტერნეტს შუამავლების გარეშე - მომხმარებლებს ქსელში უწყვეტი კავშირი აქვთ.',
        },
      },
      {
        type: 'p',
        text: {
          en: 'In simple terms, it acts as a platform that connects buyers who need high-trust, mobile IP addresses with providers who have them, cutting out middlemen. As a result, it provides “true market prices” by allowing users to purchase proxies directly from individual sellers worldwide.', ru: 'Проще говоря, это платформа, которая соединяет покупателей, нуждающихся в мобильных IP-адресах с высоким доверием, с поставщиками, у которых они есть, устраняя посредников. В результате пользователи могут покупать прокси напрямую у частных продавцов по всему миру, что обеспечивает «честные рыночные цены».', de: 'Einfach ausgedrückt verbindet die Plattform Käufer, die vertrauenswürdige mobile IP-Adressen benötigen, mit Anbietern, die diese haben - ohne Mittelsmänner. So erhalten Nutzer «echte Marktpreise», indem sie Proxys direkt bei privaten Verkäufern weltweit kaufen.', es: 'En términos simples, es una plataforma que conecta a compradores que necesitan direcciones IP móviles de alta confianza con proveedores que las tienen, eliminando intermediarios. Como resultado, ofrece «precios de mercado reales» al permitir a los usuarios comprar proxies directamente a vendedores individuales de todo el mundo.',
          ka: 'მარტივად რომ ვთქვათ, ეს არის პლატფორმა, რომელიც აკავშირებს მყიდველებს, ვისაც მაღალი ნდობის მობილური IP მისამართები სჭირდება, მომწოდებლებთან, ვისაც ისინი აქვს - შუამავლების გარეშე. შედეგად, მომხმარებლები პროქსებს პირდაპიც მყიდველებისგან ყიდულობენ მთელი მსოფლიოდან, რაც „რეალურ საბაზრო ფასებს“ იძლევა.',
        },
      },
      {
        type: 'p',
        text: {
          en: 'Proxied is backed by Proxied Limited, which provides multiple IP-address proxy infrastructure solutions globally. Our global network blends carrier SIM-based exits and custom routing to ensure your traffic looks just like ordinary mobile user traffic, not a flagged data center bot. It offers superior advantages compared to competitors, as we utilize our own infrastructure and digital ecosystem.', ru: 'Proxied поддерживается компанией Proxied Limited, которая предоставляет решения по инфраструктуре прокси с несколькими IP-адресами по всему миру. Наша глобальная сеть сочетает выходные узлы на SIM-картах операторов и пользовательскую маршрутизацию, чтобы ваш трафик выглядел как обычный мобильный трафик пользователя, а не как помеченный бот дата-центра. Мы имеем преимущество перед конкурентами, так как используем собственную инфраструктуру и цифровую экосистему.', de: 'Proxied wird von Proxied Limited getragen, das weltweit Infrastrukturlösungen für Proxy-Netzwerke mit mehreren IP-Adressen bereitstellt. Unser globales Netzwerk verbindet SIM-basierte Ausgänge von Mobilfunkanbietern mit eigener Routing-Technik, damit Ihr Traffic wie gewöhnlicher mobiler Nutzertraffic aussieht - nicht wie ein markierter Bot aus einem Rechenzentrum. Unser eigener Infrastruktur- und Digitalökosystem-Vorteil schlägt die Konkurrenz.', es: 'Proxied está respaldado por Proxied Limited, que proporciona soluciones de infraestructura de proxy con múltiples direcciones IP a nivel global. Nuestra red global combina salidas basadas en SIM de operadores y enrutamiento personalizado para que su tráfico se vea como el de un usuario móvil normal, no como un bot marcado de un centro de datos. Ofrece ventajas superiores frente a la competencia, ya que utilizamos nuestra propia infraestructura y ecosistema digital.',
          ka: 'Proxied-ის უკან დგას Proxied Limited, რომელიც გლობალურად IP მისამართების პროქსი ინფრასტრუქტურის გადაწყვეტებს სთავაზობს. ჩვენი გლობალური ქსელი აერთიანებს ოპერატორის SIM-ბაზირებულ გამომავალ კვანძებსა და მორგებულ რაუტინგს, რათა თქვენი ტრაფიკი ჩვეულებრივი მობილური მომხმარებლის ტრაფიკივით გამოიყურებოდეს და არა მონიშნული მონაცემთა ცენტრის ბოტივით. კონკურენტებთან შედარებით უპირატესობას გვაძლევს საკუთარი ინფრასტრუქტურა და ციფრული ეკოსისტემა.',
        },
      },
      { type: 'h3', text: { en: 'Why clients choose Proxied', ru: 'Почему клиенты выбирают Proxied', de: 'Warum Kunden Proxied wählen', es: 'Por qué los clientes eligen Proxied', ka: 'რატომ ირჩევენ კლიენტები Proxied-ს' } },
      {
        type: 'cards',
        items: [
          {
            title: { en: 'High-speed 5G/4G connectivity', ru: 'Высокоскоростное соединение 5G/4G', de: 'Hochgeschwindige 5G/4G-Konnektivität', es: 'Conectividad 5G/4G de alta velocidad', ka: 'მაღალსიჩქარიანი 5G/4G კავშირი' },
            text: {
              en: 'A platform that connects buyers who need high-trust mobile IP addresses with providers who have them - cutting out middlemen.', ru: 'Платформа, соединяющая покупателей, которым нужны мобильные IP-адреса с высоким доверием, с поставщиками, у которых они есть, - без посредников.', de: 'Eine Plattform, die Käufer, die vertrauenswürdige mobile IP-Adressen benötigen, mit Anbietern verbindet, die diese haben - ohne Mittelsmänner.', es: 'Una plataforma que conecta a compradores que necesitan direcciones IP móviles de alta confianza con proveedores que las tienen, sin intermediarios.',
              ka: 'პლატფორმა, რომელიც აკავშირებს მაღალი ნდობის მობილური IP მისამართების მყიდველებსა და მომწოდებლებს - შუამავლების გარეშე.',
            },
          },
          {
            title: { en: 'Real carrier IPs', ru: 'Реальные IP-адреса операторов', de: 'Echte Carrier-IPs', es: 'IPs reales de operadores', ka: 'რეალური ოპერატორის IP-ები' },
            text: {
              en: 'Operate with genuine SIM-based IPs from real mobile carriers, avoiding detection and eliminating risks associated with recycled IP pools.', ru: 'Работайте с настоящими IP-адресами на SIM-картах реальных мобильных операторов, избегая обнаружения и исключая риски, связанные с перепроданными IP-пулами.', de: 'Arbeiten Sie mit echten SIM-basierten IPs echter Mobilfunkanbieter - unentdeckt und ohne Risiken recycelter IP-Pools.', es: 'Opera con IPs reales basadas en SIM de operadores móviles reales, evitando la detección y eliminando los riesgos de los pools de IP reciclados.',
              ka: 'იმუშავეთ ნამდვილი SIM-ბაზირებული IP მისამართებით რეალური მობილური ოპერატორებიდან - გამოვლენის თავიდან აცილება და გადამუშავებული IP პულების რისკების გამორიცხვა.',
            },
          },
          {
            title: { en: 'Carrier-grade infrastructure', ru: 'Инфраструктура операторского уровня', de: 'Carrier-grade-Infrastruktur', es: 'Infraestructura de nivel operador', ka: 'ოპერატორის დონის ინფრასტრუქტურა' },
            text: {
              en: 'Go beyond basic proxy usage - run on mobile-native infrastructure optimized for security, stability, and large-scale operations.', ru: 'Пойдите дальше базового использования прокси - работайте на мобильно-нативной инфраструктуре, оптимизированной для безопасности, стабильности и крупномасштабных операций.', de: 'Gehen Sie über die Grundnutzung von Proxys hinaus - nutzen Sie eine mobil-native Infrastruktur, optimiert für Sicherheit, Stabilität und großangelegte Operationen.', es: 'Supere el uso básico de proxies: trabaje sobre infraestructura móvil nativa optimizada para seguridad, estabilidad y operaciones a gran escala.',
              ka: 'გადააჭარბეთ პროქსის ბაზისურ გამოყენებას - იმუშავეთ მობილურ-ნატიურ ინფრასტრუქტურაზე, ოპტიმიზებულზე უსაფრთხოებისთვის, სტაბილურობისა და მასშტაბური ოპერაციებისთვის.',
            },
          },
          {
            title: { en: 'Unlimited data flexibility', ru: 'Гибкость без лимитов трафика', de: 'Unbegrenzte Datenflexibilität', es: 'Flexibilidad de datos ilimitada', ka: 'შეუზღუდავი მონაცემების მოქნილობა' },
            text: {
              en: 'Scale usage freely with plans ranging from hourly to monthly, giving you full control over your data consumption.', ru: 'Свободно масштабируйте использование с тарифами от почасовых до помесячных, получая полный контроль над расходом трафика.', de: 'Skalieren Sie den Verbrauch frei mit Tarifen von stündlich bis monatlich - volle Kontrolle über Ihren Datenverbrauch.', es: 'Escale el uso libremente con planes de por hora a mensual, con control total sobre su consumo de datos.',
              ka: 'თავისუფლად გაზარდეთ მოხმარება საათობრივიდან თვიურამდე გეგმებით - სრული კონტროლი თქვენს მონაცემებზე.',
            },
          },
          {
            title: { en: '99.9% uptime reliability', ru: 'Надёжность с аптаймом 99.9%', de: '99,9% Uptime-Zuverlässigkeit', es: 'Fiabilidad del 99,9% de tiempo activo', ka: '99.9% აფთაიმის საიმედოობა' },
            text: {
              en: 'Enjoy consistent, uninterrupted connections with a robust network built for maximum uptime and stability.', ru: 'Наслаждайтесь стабильным, бесперебойным соединением благодаря надёжной сети, построенной для максимального аптайма и стабильности.', de: 'Genießen Sie konsistente, unterbrechungsfreie Verbindungen mit einem robusten Netzwerk für maximale Verfügbarkeit und Stabilität.', es: 'Disfrute de conexiones constantes e ininterrumpidas con una red robusta construida para el máximo tiempo activo y estabilidad.',
              ka: 'დაიტკბით სტაბილური, უწყვეტი კავშირებით მყარი ქსელით, შექმნილი მაქსიმალური აფთაიმისა და სტაბილურობისთვის.',
            },
          },
          {
            title: { en: 'Stealth & native access', ru: 'Скрытность и нативный доступ', de: 'Stealth & nativer Zugriff', es: 'Sigilo y acceso nativo', ka: 'ფარული და ნატიური წვდომა' },
            text: {
              en: 'Blend seamlessly into real mobile traffic, access platform-native content, and reduce the risk of detection.', ru: 'Бесшовно сливайтесь с реальным мобильным трафиком, получайте доступ к нативному контенту платформ и снижайте риск обнаружения.', de: 'Gehen Sie nahtlos im echten mobilen Traffic auf, greifen Sie plattformnativ auf Inhalte zu und reduzieren Sie das Risiko der Erkennung.', es: 'Integrese sin problemas en el tráfico móvil real, acceda a contenido nativo de las plataformas y reduzca el riesgo de detección.',
              ka: 'უნაკლოდ იზავეთ რეალურ მობილურ ტრაფიკში, გაეხსენით პლატფორმის ნატიურ კონტენტს და შეამცირეთ გამოვლენის რისკი.',
            },
          },
          {
            title: { en: 'Enhanced performance & longevity', ru: 'Повышенная производительность и долговечность', de: 'Verbesserte Leistung & Langlebigkeit', es: 'Rendimiento y longevidad mejorados', ka: 'გაუმჯობესებული წარმადობა და ხანგრძლივობა' },
            text: {
              en: 'Work faster and longer with reliable connections that support sustained, high-performance operations.', ru: 'Работайте быстрее и дольше с надёжными соединениями, поддерживающими длительные высокопроизводительные операции.', de: 'Arbeiten Sie schneller und länger mit zuverlässigen Verbindungen für nachhaltige, leistungsstarke Operationen.', es: 'Trabaje más rápido y durante más tiempo con conexiones fiables que soportan operaciones sostenidas de alto rendimiento.',
              ka: 'იმუშავეთ უფრო სწრაფად და ხანგრძლივად საიმედო კავშირებით, რომლებიც ხანგრძლივ, მაღალწარმადობიან ოპერაციებს უჭერენ მხარს.',
            },
          },
          {
            title: { en: 'Trusted across industries', ru: 'Доверие в разных отраслях', de: 'Branchenübergreifend vertraut', es: 'De confianza en múltiples sectores', ka: 'სანდოობა სხვადასხვა ინდუსტრიაში' },
            text: {
              en: 'Preferred by social media managers, data analytics teams, and e-commerce sellers for dependable and scalable proxy solutions.', ru: 'Выбор менеджеров соцсетей, команд аналитики данных и продавцов электронной коммерции благодаря надёжным и масштабируемым прокси-решениям.', de: 'Die Wahl von Social-Media-Managern, Datenanalyse-Teams und E-Commerce-Verkäufern - zuverlässige und skalierbare Proxy-Lösungen.', es: 'Preferido por gestores de redes sociales, equipos de análisis de datos y vendedores de comercio electrónico por sus soluciones proxy fiables y escalables.',
              ka: 'სოციალური მედიის მენეჯერების, მონაცემთა ანალიტიკის გუნდებისა და ელექტრონული კომერციის გამყიდველების არჩევანი - საიმედო და მასშტაბირებადი პროქსი გადაწყვეტებისთვის.',
            },
          },
        ],
      },
    ],
  },
  {
    id: '4g-5g-connections',
    num: '02',
    title: { en: 'What are 4G & 5G connections?', ru: 'Что такое подключения 4G и 5G?', de: 'Was sind 4G- und 5G-Verbindungen?', es: '¿Qué son las conexiones 4G y 5G?', ka: 'რა არის 4G და 5G კავშირები?' },
    blocks: [
      {
        type: 'p',
        text: {
          en: '4G stands for fourth-generation internet connection. Compared to 3G, 4G is a leap forward because it provides speeds that finally match the high-speed internet people have in their residential devices. 4G is ten times faster than 3G - useful for downloading large files, apps, or movies in minutes rather than hours. On 4G, YouTube, Netflix, and TikTok work perfectly, giving high-quality videos and new experiences to users.', ru: '4G означает интернет-подключение четвёртого поколения. По сравнению с 3G, 4G - это огромный скачок вперёд, потому что он обеспечивает скорости, которые наконец сопоставимы с высокоскоростным интернетом на домашних устройствах. 4G в десять раз быстрее 3G - полезно для загрузки больших файлов, приложений или фильмов за минуты, а не часы. На 4G YouTube, Netflix и TikTok работают идеально, давая пользователям качественное видео и новые впечатления.', de: '4G steht für Internetverbindung der vierten Generation. Im Vergleich zu 3G ist 4G ein Quantensprung, da es Geschwindigkeiten bietet, die endlich dem Hochgeschwindigkeitsinternet auf Heimgeräten entsprechen. 4G ist zehnmal schneller als 3G - praktisch zum Herunterladen großer Dateien, Apps oder Filme in Minuten statt Stunden. Auf 4G funktionieren YouTube, Netflix und TikTok perfekt und bieten hochwertige Videos und neue Erlebnisse.', es: '4G significa conexión a internet de cuarta generación. En comparación con 3G, 4G es un gran salto adelante porque ofrece velocidades que por fin igualan al internet de alta velocidad de los dispositivos residenciales. 4G es diez veces más rápido que 3G: útil para descargar archivos grandes, aplicaciones o películas en minutos en lugar de horas. Con 4G, YouTube, Netflix y TikTok funcionan perfectamente, ofreciendo vídeos de alta calidad y nuevas experiencias.',
          ka: '4G ნიშნავს მეოთხე თაობის ინტერნეტ კავშირს. 3G-თან შედარებით, 4G არის ნახტომი წინ, რადგან ის იძლევა სიჩქარეს, რომელიც ბოლოს შეესაბამება საცხოვრებელ მოწყობილობებში არსებულ მაღალსიჩქარიან ინტერნეტს. 4G ათჯერ სწრაფია 3G-ზე - დიდი ფაილების, აპლიკაციებისა და ფილმების ჩამოტვირთვა წუთებში და არა საათებში. 4G-ზე YouTube, Netflix და TikTok შეუფერხებლად მუშაობს და მაღალხარისხიან ვიდეოებს იძლევა.',
        },
      },
      {
        type: 'p',
        text: {
          en: '4G also decreased latency - the delay between you clicking a button and the internet reacting. This is why video calls (Zoom, Google Meet) and online gaming became possible on mobile phones. Today you will see 4G LTE (Long Term Evolution), the development chain of 4G internet. When 4G was introduced, it was not compatible with different networks, and it took time for mobile operators to implement it. Today, 4G LTE is essential for fast, qualitative mobile data.', ru: '4G также снизил задержку (латентность) - промежуток между нажатием кнопки и реакцией интернета. Именно поэтому видеозвонки (Zoom, Google Meet) и онлайн-игры стали возможны на мобильных телефонах. Сегодня вы встретите 4G LTE (Long Term Evolution) - эволюционную цепочку развития 4G. Когда 4G только появился, он был несовместим с разными сетями, и операторам потребовалось время для внедрения. Сегодня 4G LTE необходим для быстрого и качественного мобильного интернета.', de: '4G senkte außerdem die Latenz - die Verzögerung zwischen Knopfdruck und Internetreaktion. Deshalb wurden Videoanrufe (Zoom, Google Meet) und Online-Gaming auf Mobiltelefonen möglich. Heute sehen Sie 4G LTE (Long Term Evolution), die Entwicklungsstufe des 4G-Internets. Als 4G eingeführt wurde, war es nicht mit verschiedenen Netzen kompatibel, und die Umsetzung durch die Mobilfunkanbieter brauchte Zeit. Heute ist 4G LTE essenziell für schnelles, qualitativ hochwertiges mobiles Internet.', es: '4G también redujo la latencia: el retraso entre pulsar un botón y la reacción de internet. Por eso las videollamadas (Zoom, Google Meet) y los juegos en línea se hicieron posibles en los teléfonos móviles. Hoy verás 4G LTE (Long Term Evolution), la cadena de desarrollo del internet 4G. Cuando se introdujo el 4G, no era compatible con diferentes redes, y los operadores tardaron en implementarlo. Hoy, 4G LTE es esencial para datos móviles rápidos y de calidad.',
          ka: '4G-მ ასევე შეამცირა ლატენცია - დაგვიანება ღილაკზე დაწკაპუნებასა და ინტერნეტის რეაქციას შორის. სწორედ ამიტომ გახდა შესაძლებელი ვიდეზარები (Zoom, Google Meet) და ონლაინ თამაშები მობილურ ტელეფონებზე. დღეს თქვენ ხედავთ 4G LTE-ს (Long Term Evolution) - 4G ინტერნეტის განვითარების ჯაჭვს. 4G-ის დანერგვისას ის სხვადასხვა ქსელთან თავსებადი არ იყო და ოპერატორებს მისი დანერგვა დრო დასჭირდათ. დღეს 4G LTE აუცილებელია სწრაფი და ხარისხიანი მობილური ინტერნეტისთვის.',
        },
      },
      {
        type: 'p',
        text: {
          en: 'After 4G LTE, 5G started operating in 2019. We can call 5G speed the “Speed of Mercury” - fifth-generation technology giving network users faster mobile internet. The development of 5G was not just about making your phone faster; it was a fundamental redesign of how the world communicates. Because of poor frequency, 4G networks were often congested and lagging. 5G opened a new networking experience with a higher frequency: downloads take seconds, and it can handle millions of devices at once (smart watches, cars, traffic lights, sensors) without slowing down.', ru: 'После 4G LTE в 2019 году заработал 5G. Скорость 5G можно назвать «скоростью Меркурия» - технология пятого поколения, дающая пользователям сети более быстрый мобильный интернет. Развитие 5G было не просто ускорением телефона; это было фундаментальное переосмысление того, как мир общается. Из-за низкой частоты сети 4G часто были перегружены и медленными. 5G открыл новый сетевой опыт с более высокой частотой: загрузки занимают секунды, а сеть обслуживает миллионы устройств одновременно (умные часы, автомобили, светофоры, датчики) без замедления.', de: 'Nach 4G LTE ging 2019 5G in Betrieb. Die 5G-Geschwindigkeit können wir «Geschwindigkeit des Merkur» nennen - Technik der fünften Generation mit schnellerem mobilem Internet. Die Entwicklung von 5G war nicht nur schnelleres Telefonieren; sie war eine grundlegende Neugestaltung der weltweiten Kommunikation. Wegen niedriger Frequenzen waren 4G-Netze oft überlastet und träge. 5G eröffnete ein neues Netzerlebnis mit höherer Frequenz: Downloads dauern Sekunden, und das Netz bedient Millionen Geräte gleichzeitig (Smartwatches, Autos, Ampeln, Sensoren) ohne Verlangsamung.', es: 'Después del 4G LTE, el 5G comenzó a operar en 2019. Podemos llamar a la velocidad del 5G la «velocidad de Mercurio»: tecnología de quinta generación que da a los usuarios de la red un internet móvil más rápido. El desarrollo del 5G no se trataba solo de hacer tu teléfono más rápido; fue un rediseño fundamental de cómo se comunica el mundo. Debido a la baja frecuencia, las redes 4G a menudo estaban congestionadas y lentas. El 5G abrió una nueva experiencia de red con mayor frecuencia: las descargas tardan segundos y puede manejar millones de dispositivos a la vez (relojes inteligentes, coches, semáforos, sensores) sin frenarse.',
          ka: '4G LTE-ის შემდეგ, 2019 წელს ამუშავდა 5G. 5G-ის სიჩქარეს შეგვიძლია „მერკურის სიჩქარე“ ვუწოდოთ - მეხუთე თაობის ტექნოლოგია, რომელიც მომხმარებლებს უფრო სწრაფ მობილურ ინტერნეტს აძლევს. 5G-ის განვითარება მხოლოდ ტელეფონის დაჩქარებას არ ეხებოდა - ეს იყო მსოფლიოს კომუნიკაციის ფუნდამენტური რედიზაინი. დაბალი სიხშირის გამო 4G ქსელები ხშირად გადატვირთული და ნელა იყო. 5G-მ გახსნა ახალი ქსელური გამოცდილება უფრო მაღალი სიხშირით: ჩამოტვირთვა წამებში ხდება და ის მილიონობით მოწყობილობას (ჭკვიანი საათები, მანქანები, შუქნიშნები, სენსორები) ემსახურება შენელების გარეშე.',
        },
      },
      {
        type: 'p',
        text: {
          en: 'For the 5G network there is almost zero “lag” - it allows surgeons to operate robotic arms from across the world, or self-driving cars to react to stop lights instantly. It utilizes higher-frequency waves and advanced antenna systems to send massive amounts of data with almost zero delay. Consider that 5G requires “mini-towers” on almost every street corner, because the signal is easily blocked by trees, rain, or even fog. 4G signals can travel for miles and go through thick walls - 4G is still the king of the countryside, districts, and villages, while 5G covers mostly big cities and downtowns.', ru: 'В сети 5G почти нулевой «лаг» - она позволяет хирургам управлять роботизированными руками на другом конце света, а беспилотным автомобилям мгновенно реагировать на светофоры. 5G использует волны более высокой частоты и продвинутые антенные системы для передачи огромных объёмов данных почти без задержки. Учтите: 5G требует «мини-вышек» почти на каждом углу, потому что сигнал легко блокируется деревьями, дождём или даже туманом. Сигнал 4G проходит на мили и проникает сквозь толстые стены - 4G всё ещё король деревень и районов, а 5G покрывает в основном большие города и центры.', de: 'Bei 5G-Netzen gibt es fast null «Lag» - Chirurgen können Roboterarme von der anderen Seite der Welt steuern, und selbstfahrende Autos reagieren sofort auf Ampeln. 5G nutzt höherfrequente Wellen und fortschrittliche Antennensysteme, um riesige Datenmengen nahezu ohne Verzögerung zu übertragen. Bedenken Sie: 5G benötigt «Mini-Türme» an fast jeder Straßenecke, da das Signal leicht von Bäumen, Regen oder sogar Nebel blockiert wird. 4G-Signale reichen mehrere Kilometer und dringen durch dicke Mauern - 4G bleibt der König des ländlichen Raums, während 5G hauptsächlich Großstädte und Zentren abdeckt.', es: 'En la red 5G el «lag» es casi cero: permite a cirujanos operar brazos robóticos desde el otro lado del mundo, o a coches autónomos reaccionar al instante a los semáforos. Utiliza ondas de mayor frecuencia y sistemas de antenas avanzados para enviar enormes cantidades de datos con casi ningún retraso. Ten en cuenta que el 5G requiere «mini-torres» en casi cada esquina, porque la señal se bloquea fácilmente con árboles, lluvia o incluso niebla. Las señales 4G pueden viajar kilómetros y atravesar paredes gruesas: el 4G sigue siendo el rey del campo y los pueblos, mientras el 5G cubre sobre todo grandes ciudades y centros urbanos.',
          ka: '5G ქსელში თითქმის ნულოვანი „ლეგია“ - ის ქირურგებს საშუალებას აძლევს მსოფლიოს მეორე ბოლოდან რობოტული ხელები მართონ, ხოლო უპილოტო მანქანებს - მყისიერად რეაგირება მოუხდეთ შუქნიშნებზე. ის იყენებს უფრო მაღალი სიხშირის ტალღებსა და განვითარებულ ანტენის სისტემებს უზარმაზარი რაოდენობის მონაცემების თითქმის ნულოვანი დაგვიანებით გადასაცემად. გაითვალისწინეთ, რომ 5G-ს თითქმის ყოველ ქუჩის კუთხეში „მინი-ანძები“ სჭირდება, რადგან სიგნალს ხეები, წვიმა და ნისლიც კი აბლოკავს. 4G სიგნალი კილომეტრებს გადის და სქელ კედლებს ღებულობს - 4G კვლავ სოფლებისა და დაბების მეფეა, 5G კი ძირითადად დიდ ქალაქებსა და ცენტრებს ფარავს.',
        },
      },
      {
        type: 'p',
        text: {
          en: 'For battery life: to maintain a 5G connection, a phone needs to work harder. Most phones are dual-connected, meaning they use 4G and 5G at the same time. In case 5G drops, the device needs to reconnect to 4G instantly. This uses 6% to 11% more battery than just using 4G.', ru: 'Что касается батареи: для поддержания соединения 5G телефону приходится работать интенсивнее. Большинство телефонов двойного подключения - они используют 4G и 5G одновременно. Если 5G пропадает, устройство должно мгновенно переподключиться к 4G. Это расходует на 6-11% больше батареи, чем использование только 4G.', de: 'Zur Akkulaufzeit: Um eine 5G-Verbindung aufrechtzuerhalten, muss das Telefon härter arbeiten. Die meisten Telefone sind dual verbunden, nutzen also 4G und 5G gleichzeitig. Fällt 5G aus, muss sich das Gerät sofort wieder mit 4G verbinden. Das verbraucht 6% bis 11% mehr Akku als die Nutzung von nur 4G.', es: 'En cuanto a la batería: para mantener una conexión 5G, el teléfono tiene que trabajar más duro. La mayoría de los teléfonos están doblemente conectados, es decir, usan 4G y 5G al mismo tiempo. Si el 5G se cae, el dispositivo debe reconectarse al 4G al instante. Esto consume entre un 6% y un 11% más de batería que usar solo 4G.',
          ka: 'ბატარეის ხანგრძლივობის თვალსაზრისით: 5G კავშირის შესანარჩუნებლად ტელეფონს უფრო ინტენსიურად უწევს მუშაობა. ტელეფონების უმეტესობა ორმაგად არის დაკავშირებული - იყენებს 4G-სა და 5G-ს ერთდროულად. თუ 5G გათიშვა მოხდა, მოწყობილობა მყისიერად უნდა დაუბრუნდეს 4G-ს. ეს 6%-დან 11%-მდე მეტ ბატარეას ხარჯავს, ვიდრე მხოლოდ 4G-ის გამოყენება.',
        },
      },
      {
        type: 'table',
        head: [
          { en: 'Feature', ru: 'Характеристика', de: 'Merkmal', es: 'Característica', ka: 'მახასიათებელი' },
          { en: '4G reliable', ru: '4G надёжный', de: '4G zuverlässig', es: '4G fiable', ka: '4G საიმედო' },
          { en: '5G instant', ru: '5G мгновенный', de: '5G blitzschnell', es: '5G instantáneo', ka: '5G მყისიერი' },
        ],
        rows: [
          [
            { en: 'Speed', ru: 'Скорость', de: 'Geschwindigkeit', es: 'Velocidad', ka: 'სიჩქარე' },
            { en: 'Fast (good for 1080p video)', ru: 'Быстрая (достаточна для 1080p видео)', de: 'Schnell (gut für 1080p-Video)', es: 'Rápida (buena para vídeo 1080p)', ka: 'სწრაფი (1080p ვიდეოსთვის საკმარისი)' },
            { en: 'Blazing (good for 8K & VR)', ru: 'Огненная (для 8K и VR)', de: 'Rasend (gut für 8K und VR)', es: 'Fulminante (buena para 8K y VR)', ka: 'ელვისებური (8K და VR-ისთვის)' },
          ],
          [
            { en: 'Reaction time', ru: 'Время реакции', de: 'Reaktionszeit', es: 'Tiempo de reacción', ka: 'რეაქციის დრო' },
            { en: 'Small delay (noticeable in gaming)', ru: 'Небольшая задержка (заметна в играх)', de: 'Kleine Verzögerung (im Gaming spürbar)', es: 'Pequeño retraso (apreciable en juegos)', ka: 'მცირე დაგვიანება (თამაშებში შესამჩნევი)' },
            { en: 'No delay (feels like real-time)', ru: 'Без задержки (ощущается как реальное время)', de: 'Keine Verzögerung (fühlt sich Echtzeit an)', es: 'Sin retraso (se siente en tiempo real)', ka: 'დაგვიანების გარეშე (რეალურ დროში)' },
          ],
          [
            { en: 'Capacity', ru: 'Вместимость', de: 'Kapazität', es: 'Capacidad', ka: 'ტევადობა' },
            { en: 'Can get crowded in stadiums', ru: 'Может перегружаться на стадионах', de: 'Kann in Stadien überlastet sein', es: 'Puede saturarse en estadios', ka: 'სტადიონებზე გადაიტვირთება' },
            { en: 'Can handle a whole city of devices', ru: 'Обслуживает целый город устройств', de: 'Bedient eine ganze Stadt voller Geräte', es: 'Puede manejar una ciudad entera de dispositivos', ka: 'მთელ ქალაქის მოწყობილობებს ემსახურება' },
          ],
          [
            { en: 'Battery life', ru: 'Время работы батареи', de: 'Akku-Laufzeit', es: 'Batería', ka: 'ბატარეა' },
            { en: 'Very efficient', ru: 'Очень эффективна', de: 'Sehr effizient', es: 'Muy eficiente', ka: 'ძალიან ეკონომიური' },
            { en: 'Drains battery slightly faster', ru: 'Разряжает батарею немного быстрее', de: 'Verbraucht den Akku etwas schneller', es: 'Agota la batería ligeramente más rápido', ka: 'ბატარეას ოდნავ სწრაფად ხარჯავს' },
          ],
          [
            { en: 'Coverage', ru: 'Покрытие', de: 'Abdeckung', es: 'Cobertura', ka: 'ფართობი' },
            { en: 'Available almost everywhere', ru: 'Доступен почти везде', de: 'Fast überall verfügbar', es: 'Disponible casi en todas partes', ka: 'თითქმის ყველგან ხელმისაწვდომი' },
            { en: 'Best in cities and urban centers', ru: 'Лучше всего в городах и городских центрах', de: 'Am besten in Städten und urbanen Zentren', es: 'Mejor en ciudades y centros urbanos', ka: 'საუკეთესო ქალაქებსა და ცენტრებში' },
          ],
        ],
      },
    ],
  },
  {
    id: 'what-is-ip',
    num: '03',
    title: { en: 'What is an IP?', ru: 'Что такое IP?', de: 'Was ist eine IP?', es: '¿Qué es una IP?', ka: 'რა არის IP?' },
    blocks: [
      {
        type: 'p',
        text: {
          en: 'The IP address (Internet Protocol address) is a unique string of numbers assigned to every device connected to a computer network. It has two primary purposes:', ru: 'IP-адрес (адрес интернет-протокола) - это уникальная строка чисел, присваиваемая каждому устройству, подключённому к компьютерной сети. У неё две основные цели:', de: 'Die IP-Adresse (Internet Protocol Address) ist eine eindeutige Zahlenfolge, die jedem Gerät in einem Computernetzwerk zugewiesen wird. Sie hat zwei Hauptzwecke:', es: 'La dirección IP (dirección del Protocolo de Internet) es una cadena única de números asignada a cada dispositivo conectado a una red informática. Tiene dos propósitos principales:',
          ka: 'IP მისამართი (Internet Protocol address) არის ციფრების უნიკალური სტრიქონი, რომელიც ენიჭება ყველა მოწყობილობას, რომელიც კომპიუტერულ ქსელთან არის დაკავშირებული. მას ორი ძირითადი დანიშნულება აქვს:',
        },
      },
      {
        type: 'cards',
        items: [
          {
            title: { en: 'Identification', ru: 'Идентификация', de: 'Identifikation', es: 'Identificación', ka: 'იდენტიფიკაცია' },
            text: {
              en: 'Tells the network exactly which device is communicating (phone, laptop, etc.).', ru: 'Точно сообщает сети, какое устройство ведёт связь (телефон, ноутбук и т.д.).', de: 'Teilt dem Netzwerk genau mit, welches Gerät kommuniziert (Telefon, Laptop usw.).', es: 'Indica a la red exactamente qué dispositivo se está comunicando (teléfono, portátil, etc.).',
              ka: 'უთითებს ქსელს, ზუსტად რომელი მოწყობილობა კომუნიკაციას აწარმოებს (ტელეფონი, ლეპტოპი და ა.შ.).',
            },
          },
          {
            title: { en: 'Location', ru: 'Местоположение', de: 'Standort', es: 'Ubicación', ka: 'მდებარეობა' },
            text: {
              en: 'Provides the digital coordinates so that data packets (mail or web pages) know exactly where to travel to find you - like a postal service.', ru: 'Предоставляет цифровые координаты, чтобы пакеты данных (почта или веб-страницы) точно знали, куда двигаться, чтобы найти вас, - как почтовая служба.', de: 'Liefert die digitalen Koordinaten, damit Datenpakete (Post oder Webseiten) genau wissen, wo sie hin müssen, um Sie zu finden - wie ein Postdienst.', es: 'Proporciona las coordenadas digitales para que los paquetes de datos (correo o páginas web) sepan exactamente a dónde viajar para encontrarte, como un servicio postal.',
              ka: 'აძლევს ციფრულ კოორდინატებს, რათა მონაცემთა პაკეტებმა (წერილებმა ან ვებგვერდებმა) ზუსტად იცოდნენ, საით უნდა გაემგზავრონ თქვენს საპოვნელად - როგორც საფოსტო სამსახური.',
            },
          },
        ],
      },
      {
        type: 'p',
        text: {
          en: 'Most people think IP just means the number, but it actually stands for Internet Protocol - a set of rules:', ru: 'Большинство думает, что IP - это просто номер, но на самом деле это Internet Protocol - набор правил:', de: 'Die meisten denken, IP sei nur die Nummer, aber es steht für Internet Protocol - eine Regelsammlung:', es: 'La mayoría piensa que IP es solo el número, pero en realidad significa Internet Protocol: un conjunto de reglas:',
          ka: 'უმეტესობა ფიქრობს, რომ IP მხოლოდ რიცხვს ნიშნავს, მაგრამ სინამდვილეში ეს არის Internet Protocol - წესების ერთობლიობა:',
        },
      },
      {
        type: 'table',
        head: [
          { en: 'Concept', ru: 'Понятие', de: 'Konzept', es: 'Concepto', ka: 'ცნება' },
          { en: 'What it is', ru: 'Что это', de: 'Was es ist', es: 'Qué es', ka: 'რა არის' },
          { en: 'Human terms', ru: 'На человеческом языке', de: 'Auf menschlich', es: 'En términos humanos', ka: 'ადამიანური ენით' },
        ],
        rows: [
          [
            { en: 'The Protocol', ru: 'Протокол', de: 'Das Protokoll', es: 'El protocolo', ka: 'პროტოკოლი' },
            { en: 'The Rules', ru: 'Правила', de: 'Die Regeln', es: 'Las reglas', ka: 'წესები' },
            { en: 'The “Laws of the Road”', ru: '«Правила дорожного движения»', de: 'Die «Straßenverkehrsregeln»', es: 'Las «leyes de tráfico»', ka: '„გზის კანონები“' },
          ],
          [
            { en: 'The Address', ru: 'Адрес', de: 'Die Adresse', es: 'La dirección', ka: 'მისამართი' },
            { en: 'The Destination', ru: 'Назначение', de: 'Das Ziel', es: 'El destino', ka: 'დანიშნულება' },
            { en: 'Your house number', ru: 'Номер вашего дома', de: 'Deine Hausnummer', es: 'El número de tu casa', ka: 'თქვენი სახლის ნომერი' },
          ],
          [
            { en: 'The Packet', ru: 'Пакет', de: 'Das Paket', es: 'El paquete', ka: 'პაკეტი' },
            { en: 'The Message Piece', ru: 'Часть сообщения', de: 'Das Nachrichtenstück', es: 'La pieza del mensaje', ka: 'შეტყობინების ნაწილი' },
            { en: 'A single letter in an envelope', ru: 'Одно письмо в конверте', de: 'Ein einzelner Brief im Umschlag', es: 'Una carta en un sobre', ka: 'ერთი წერილი კონვერტში' },
          ],
          [
            { en: 'The Router', ru: 'Роутер', de: 'Der Router', es: 'El router', ka: 'როუტერი' },
            { en: 'The Traffic Cop', ru: 'Регулятор движения', de: 'Der Verkehrspolizist', es: 'El agente de tráfico', ka: 'მოძრაობის მარეგულირებელი' },
            { en: 'A signpost at a crossroads', ru: 'Указатель на перекрёстке', de: 'Ein Wegweiser an der Kreuzung', es: 'Una señal en un cruce', ka: 'საჩვენებელი გზაჯვარედინზე' },
          ],
        ],
      },
      {
        type: 'p',
        text: {
          en: 'The internet does not send all the information at once - it is too “heavy.” It slices your data into tiny pieces, each containing the source IP (your address) and the destination IP (the website address). These pieces might take different routes; some travel via satellite, others via underwater cables. Once it arrives, the protocol instructs the receiving computer how to reassemble the pieces in the correct order.', ru: 'Интернет не отправляет всю информацию сразу - она слишком «тяжёлая». Он нарезает ваши данные на крошечные кусочки, каждый из которых содержит IP-адрес источника (ваш адрес) и IP-адрес назначения (адрес вебсайта). Эти кусочки могут идти разными маршрутами: одни через спутник, другие через подводные кабели. Получив их, протокол указывает принимающему компьютеру, как собрать кусочки в правильном порядке.', de: 'Das Internet sendet nicht alle Informationen auf einmal - sie sind zu «schwer». Es zerlegt Ihre Daten in winzige Stücke, die jeweils die Quell-IP (Ihre Adresse) und die Ziel-IP (die Website-Adresse) enthalten. Diese Stücke können verschiedene Wege nehmen; manche reisen über Satellit, andere über Unterseekabel. Nach der Ankunft weist das Protokoll den empfangenden Computer an, die Stücke in der richtigen Reihenfolge zusammenzusetzen.', es: 'Internet no envía toda la información de una vez: es demasiado «pesada». Corta tus datos en pedazos diminutos, cada uno con la IP de origen (tu dirección) y la IP de destino (la dirección del sitio web). Estos pedazos pueden tomar rutas diferentes; algunos viajan vía satélite, otros por cables submarinos. Una vez que llegan, el protocolo indica a la computadora receptora cómo rearmar los pedazos en el orden correcto.',
          ka: 'ინტერნეტი მთელ ინფორმაციას ერთდროულად არ აგზავნის - ის ძალიან „მძიმეა“. ის თქვენს მონაცემებს პატარა ნაწილებად ჭრის, თითოეული შეიცავს წყაროს IP-ს (თქვენს მისამართს) და დანიშნულების IP-ს (ვებსაიტის მისამართს). ეს ნაწილები სხვადასხვა მარშრუტით მოძრაობს; ზოგი თანავარსკვლავით, ზოგი წყალქვეშა კაბელებით. მიღწევის შემდეგ, პროტოკოლი აძლევს მიმღებ კომპიუტერს ინსტრუქციას, როგორ შეკრას ნაწილები სწორი თანმიმდევრობით.',
        },
      },
      {
        type: 'p',
        text: {
          en: 'Computers communicate using numbers. The DNS (Domain Name System) is the phone book of the internet - a hierarchical and distributed service that translates human-readable domain names (like google.com) into machine-readable numeric IP addresses. It is the critical bridge that allows you to access websites without memorizing complex strings of digits.', ru: 'Компьютеры общаются числами. DNS (система доменных имён) - это телефонная книга интернета: иерархический и распределённый сервис, который переводит понятные человеку доменные имена (например, google.com) в машиночитаемые числовые IP-адреса. Это критически важный мост, позволяющий получать доступ к сайтам, не запоминая сложные комбинации цифр.', de: 'Computer kommunizieren mit Zahlen. Das DNS (Domain Name System) ist das Telefonbuch des Internets - ein hierarchischer, verteilter Dienst, der menschenlesbare Domainnamen (wie google.com) in maschinenlesbare numerische IP-Adressen übersetzt. Es ist die kritische Brücke, die Ihnen den Zugriff auf Websites ohne Auswendiglernen komplexer Ziffernfolgen ermöglicht.', es: 'Las computadoras se comunican con números. El DNS (Sistema de Nombres de Dominio) es la guía telefónica de internet: un servicio jerárquico y distribuido que traduce nombres de dominio legibles para humanos (como google.com) a direcciones IP numéricas legibles para máquinas. Es el puente crítico que te permite acceder a sitios web sin memorizar complejas cadenas de dígitos.',
          ka: 'კომპიუტერები რიცხვებით კომუნიკაციას აწარმოებენ. DNS (Domain Name System) არის ინტერნეტის სატელეფონო წიგნი - იერარქიული და განაწილებული სერვისი, რომელიც ადამიანისთვის წაკითხვად დომენურ სახელებს (მაგ., google.com) მანქანისთვის წაკითხვად რიცხვით IP მისამართებთან აკავშირებს. ეს არის კრიტიკული ხიდი, რომელიც საშუალებას გაძლევთ ვებსაიტებზე წვდომა ციფრების რთული კომბინაციების დამახსოვრების გარეშე.',
        },
      },
      {
        type: 'p',
        text: {
          en: 'For years, we used IPv4. These addresses look like 192.168.1.1, and there were only 4.3 billion of them. In 2025, with billions of people having phones, watches, and smart fridges, we “ran out” of numbers. Then we created IPv6, much longer: 2001:0db8:85a3:0000:0000:8a2e:0370:7334.', ru: 'Годами мы использовали IPv4. Такие адреса выглядят как 192.168.1.1, и их было всего 4.3 миллиарда. В 2025 году, когда миллиарды людей имеют телефоны, часы и умные холодильники, номера «закончились». Тогда мы создали IPv6 - гораздо более длинный: 2001:0db8:85a3:0000:0000:8a2e:0370:7334.', de: 'Jahrelang nutzten wir IPv4. Diese Adressen sehen aus wie 192.168.1.1, und es gab nur 4,3 Milliarden davon. 2025, als Milliarden Menschen Telefone, Uhren und intelligente Kühlschränke besitzen, «gingen uns die Nummern aus». Dann schufen wir IPv6 - viel länger: 2001:0db8:85a3:0000:0000:8a2e:0370:7334.', es: 'Durante años usamos IPv4. Estas direcciones se ven como 192.168.1.1, y solo había 4.3 mil millones de ellas. En 2025, con miles de millones de personas con teléfonos, relojes y neveras inteligentes, se nos «acabaron los números». Entonces creamos IPv6, mucho más larga: 2001:0db8:85a3:0000:0000:8a2e:0370:7334.',
          ka: 'წლების განმავლობაში ჩვენ ვიყენებდით IPv4-ს. ეს მისამართები ასე გამოიყურება: 192.168.1.1 და მხოლოდ 4.3 მილიარდი მათგანი არსებობდა. 2025 წელს, როდესაც მილიარდობით ადამიანს ტელეფონი, საათი და ჭკვიანი მაცივარი აქვს, ნომრები „აგვიმთავრდა“. შემდეგ შევქმენით IPv6 - ბევრად გრძელი: 2001:0db8:85a3:0000:0000:8a2e:0370:7334.',
        },
      },
      { type: 'h3', text: { en: 'Public and private IP addresses', ru: 'Публичные и частные IP-адреса', de: 'Öffentliche und private IP-Adressen', es: 'Direcciones IP públicas y privadas', ka: 'საჯარო და პირადი IP მისამართები' } },
      {
        type: 'cards',
        items: [
          {
            title: { en: 'Public IP', ru: 'Публичный IP', de: 'Öffentliche IP', es: 'IP pública', ka: 'საჯარო IP' },
            text: {
              en: 'Your entire house, where your internet router communicates with the rest of the world. Like the main gate of a great villa: all mail from other cities is delivered to this gate, and everyone knows the address of your gate. (Find yours by searching “What is my IP?”.)', ru: 'Весь ваш дом, где интернет-роутер общается с остальным миром. Как главные ворота большой виллы: вся почта из других городов доставляется к этим воротам, и все знают адрес ваших ворот. (Найдите свой - поиском «What is my IP?».)', de: 'Ihr gesamtes Haus, in dem Ihr Internetrouter mit der übrigen Welt kommuniziert. Wie das Haupttor einer großen Villa: die gesamte Post aus anderen Städten wird an dieses Tor geliefert, und jeder kennt die Adresse Ihres Tores. (Ihre finden Sie mit der Suche «What is my IP?».)', es: 'Toda tu casa, donde tu router de internet se comunica con el resto del mundo. Como la puerta principal de una gran villa: todo el correo de otras ciudades se entrega en esta puerta, y todos conocen la dirección de tu puerta. (Encuentra la tuya buscando «What is my IP?».)',
              ka: 'თქვენი მთელი სახლი, სადაც ინტერნეტ როუტერი დანარჩენ მსოფლიოთან კომუნიკაციას აწარმოებს. როგორც დიდი ვილის მთავარი კარი: ყველა წერილი სხვა ქალაქებიდან ამ კარიბჭესთან მოდის და ყველამ იცის თქვენი კარის მისამართი. (იპოვეთ თქვენი - მოძებნეთ „What is my IP?“.)',
            },
          },
          {
            title: { en: 'Private IP', ru: 'Частный IP', de: 'Private IP', es: 'IP privada', ka: 'პირადი IP' },
            text: {
              en: 'Your personal cellphone, laptop, smartwatch - devices using a router in the building. The villa has different rooms, each with a private number, so information coming through the gate is distributed to the rooms accordingly. A private IP is hidden from the whole world and is only used for your devices to talk to each other - thanks to NAT (Network Address Translation), which swaps your private info for a public IP.', ru: 'Ваш личный телефон, ноутбук, умные часы - устройства, использующие роутер в здании. У виллы разные комнаты, у каждой свой номер, поэтому информация, проходящая через ворота, распределяется по комнатам. Частный IP скрыт от всего мира и используется только для связи ваших устройств друг с другом - благодаря NAT (трансляции сетевых адресов), который меняет вашу частную информацию на публичный IP.', de: 'Ihr persönliches Handy, Laptop, Smartwatch - Geräte, die einen Router im Gebäude nutzen. Die Villa hat verschiedene Zimmer, jedes mit einer privaten Nummer, damit die Informationen durch das Tor verteilt werden. Eine private IP ist vor der ganzen Welt verborgen und dient nur der Kommunikation Ihrer Geräte untereinander - dank NAT (Network Address Translation), das Ihre privaten Daten gegen eine öffentliche IP austauscht.', es: 'Tu teléfono personal, portátil, reloj inteligente: dispositivos que usan un router en el edificio. La villa tiene distintas habitaciones, cada una con un número privado, para que la información que entra por la puerta se distribuya entre las habitaciones. Una IP privada está oculta para el mundo entero y solo se usa para que tus dispositivos hablen entre sí, gracias a NAT (Traducción de Direcciones de Red), que cambia tu información privada por una IP pública.',
              ka: 'თქვენი პირადი ტელეფონი, ლეპტოპი, ჭკვიანი საათი - მოწყობილობები, რომლებიც შენობაში როუტერს იყენებენ. ვილას სხვადასხვა ოთახი აქვს, თითოეული პირადი ნომრით, ამიტომ კარიბჭიდან შემომავალი ინფორმაცია ოთახებზე ნაწილდება. პირადი IP დამალულია მსოფლიოსგან და მხოლოდ თქვენი მოწყობილობების ურთიერთკომუნიკაციისთვის გამოიყენება - NAT-ის (Network Address Translation) წყალობით, რომელიც თქვენს პირად ინფორმაციას საჯარო IP-თან ცვლის.',
            },
          },
          {
            title: { en: 'Static IP', ru: 'Статический IP', de: 'Statische IP', es: 'IP estática', ka: 'სტატიკური IP' },
            text: {
              en: 'Never changes; manually assigned and stays the same forever - like a lighthouse. Necessary when you want the world to find your specific device at the same digital location every time (websites, email servers, file sharing). Usually costs more. Note: mobile IPs are never static - as the phone moves or the signal fluctuates, the carrier naturally assigns a new IP.', ru: 'Никогда не меняется; назначается вручную и остаётся прежним навсегда - как маяк. Необходим, когда вы хотите, чтобы мир находил ваше конкретное устройство всегда в том же цифровом месте (вебсайты, почтовые серверы, файлообмен). Обычно стоит дороже. Примечание: мобильные IP никогда не статичны - когда телефон движется или сигнал колеблется, оператор естественным образом назначает новый IP.', de: 'Ändert sich nie; manuell zugewiesen und für immer gleich - wie ein Leuchtturm. Notwendig, wenn die Welt Ihr bestimmtes Gerät immer am selben digitalen Ort finden soll (Websites, E-Mail-Server, Filesharing). Meist teurer. Hinweis: Mobile IPs sind nie statisch - wenn sich das Telefon bewegt oder das Signal schwankt, weist der Carrier natürlich eine neue IP zu.', es: 'Nunca cambia; asignada manualmente y permanece igual para siempre, como un faro. Necesaria cuando quieres que el mundo encuentre tu dispositivo específico siempre en la misma ubicación digital (sitios web, servidores de correo, intercambio de archivos). Suele costar más. Nota: las IP móviles nunca son estáticas: cuando el teléfono se mueve o la señal fluctúa, el operador asigna naturalmente una IP nueva.',
              ka: 'არასდროს იცვლება; ხელით არის მინიჭებული და სამუდამოდ უცვლელი რჩება - როგორც შუქურა. აუცილებელია, როცა გსურთ, რომ მსოფლიომ თქვენი კონკრეტული მოწყობილობა ყოველთვის იმავე ციფრულ ადგილას იპოვოს (ვებსაიტები, საფოსტო სერვერები, ფაილების გაზიარება). რიგითად უფრო ძვირი ჯდება. გაითვალისწინეთ: მობილური IP არასდროს არის სტატიკური - ტელეფონის მოძრაობისას ან სიგნალის რყევისას ოპერატორი ბუნებრივად ახალ IP-ს ანიჭებს.',
            },
          },
          {
            title: { en: 'Dynamic IP', ru: 'Динамический IP', de: 'Dynamische IP', es: 'IP dinámica', ka: 'დინამიური IP' },
            text: {
              en: 'Changes periodically; your internet provider loans it to you for a while, then takes it back and gives you a new one. Both static and dynamic IPs are public, follow the same networking rules (IPv4 or IPv6), and can identify your device - the difference is that a dynamic IP is temporary, while a static IP is permanent.', ru: 'Периодически меняется; интернет-провайдер одалживает его вам на время, затем забирает обратно и выдаёт новый. И статический, и динамический IP публичны, следуют одним и тем же сетевым правилам (IPv4 или IPv6) и могут идентифицировать ваше устройство - разница в том, что динамический IP временный, а статический постоянный.', de: 'Ändert sich periodisch; Ihr Internetprovider leiht ihn Ihnen eine Weile, nimmt ihn dann zurück und gibt Ihnen einen neuen. Sowohl statische als auch dynamische IPs sind öffentlich, folgen denselben Netzwerkregeln (IPv4 oder IPv6) und können Ihr Gerät identifizieren - der Unterschied ist, dass eine dynamische IP temporär ist, eine statische permanent.', es: 'Cambia periódicamente; tu proveedor de internet te lo presta por un tiempo, luego lo recupera y te da uno nuevo. Tanto las IP estáticas como las dinámicas son públicas, siguen las mismas reglas de red (IPv4 o IPv6) y pueden identificar tu dispositivo; la diferencia es que una IP dinámica es temporal, mientras que una IP estática es permanente.',
              ka: 'პერიოდულად იცვლება; თქვენი ინტერნეტ პროვაიდერი გიჯელოდებათ მას გარკვეული ხნით, შემდეგ იღებს უკან და ახალს გაძლევთ. სტატიკური და დინამიური IP-ები ორივე საჯაროა, იმავე ქსელურ წესებს მიჰყვება (IPv4 ან IPv6) და თქვენი მოწყობილობის იდენტიფიკაცია შეუძლია - განსხვავება ისაა, რომ დინამიური IP დროებითია, სტატიკური კი მუდმივი.',
            },
          },
        ],
      },
      { type: 'h3', text: { en: 'How NAT works', ru: 'Как работает NAT', de: 'Wie NAT funktioniert', es: 'Cómo funciona NAT', ka: 'როგორ მუშაობს NAT' } },
      {
        type: 'p',
        text: {
          en: 'Your laptop sends the request to the router (using a private IP), and the router “swaps” your private information for a public IP and sends it to YouTube. When YouTube sends the video back, the router remembers it was for your laptop and passes it back to your private IP. NAT allows multiple devices to operate under a single IP address - internal addresses remain hidden from external networks, and port numbers help differentiate traffic from different devices.', ru: 'Ваш ноутбук отправляет запрос роутеру (используя частный IP), а роутер «меняет» вашу частную информацию на публичный IP и отправляет её на YouTube. Когда YouTube отправляет видео обратно, роутер помнит, что оно было для вашего ноутбука, и передаёт его вашему частному IP. NAT позволяет нескольким устройствам работать под одним IP-адресом - внутренние адреса остаются скрытыми от внешних сетей, а номера портов помогают различать трафик разных устройств.', de: 'Ihr Laptop sendet die Anfrage an den Router (mit privater IP), und der Router «tauscht» Ihre privaten Daten gegen eine öffentliche IP und sendet sie an YouTube. Wenn YouTube das Video zurücksendet, erinnert sich der Router, dass es für Ihren Laptop war, und leitet es an Ihre private IP weiter. NAT ermöglicht mehreren Geräten den Betrieb unter einer einzigen IP-Adresse - interne Adressen bleiben vor externen Netzwerken verborgen, und Portnummern helfen, den Traffic verschiedener Geräte zu unterscheiden.', es: 'Tu portátil envía la solicitud al router (usando una IP privada), y el router «cambia» tu información privada por una IP pública y la envía a YouTube. Cuando YouTube devuelve el vídeo, el router recuerda que era para tu portátil y se lo pasa a tu IP privada. NAT permite que varios dispositivos operen bajo una sola dirección IP: las direcciones internas permanecen ocultas a las redes externas, y los números de puerto ayudan a diferenciar el tráfico de distintos dispositivos.',
          ka: 'თქვენი ლეპტოპი აგზავნის მოთხოვნას როუტერისკენ (პირადი IP-ის გამოყენებით), როუტერი კი „ცვლის“ თქვენს პირად ინფორმაციას საჯარო IP-თან და აგზავნის YouTube-ისკენ. როდესაც YouTube ვიდეოს უკან აბრუნებს, როუტერი ახსოვს, რომ ის თქვენი ლეპტოპისთვის იყო და პირად IP-ზე უბრუნებს. NAT საშუალებას აძლევს მრავალ მოწყობილობას ერთი IP მისამართის ქვეშ იმუშაოს - შინაგანი მისამართები დამალული რჩება გარე ქსელებისთვის, პორტის ნომრები კი სხვადასხვა მოწყობილობის ტრაფიკს არჩევს.',
        },
      },
      {
        type: 'note',
        title: { en: 'Why are IPs important?', ru: 'Почему IP-адреса важны?', de: 'Warum sind IPs wichtig?', es: '¿Por qué son importantes las IP?', ka: 'რატომ არის IP-ები მნიშვნელოვანი?' },
        text: {
          en: 'Without the protocol (rules), the address (number) would be useless. It ensures that even if one part of the internet breaks, your data can find a different path to reach you. It is what makes the internet unstoppable.', ru: 'Без протокола (правил) адрес (номер) был бы бесполезен. Он гарантирует, что даже если одна часть интернета сломается, ваши данные найдут другой путь, чтобы дойти до вас. Именно это делает интернет неостановимым.', de: 'Ohne das Protokoll (die Regeln) wäre die Adresse (die Nummer) nutzlos. Es stellt sicher, dass Ihre Daten selbst dann einen anderen Weg zu Ihnen finden, wenn ein Teil des Internets ausfällt. Das macht das Internet unaufhaltsam.', es: 'Sin el protocolo (las reglas), la dirección (el número) sería inútil. Garantiza que, incluso si una parte de internet se rompe, tus datos puedan encontrar un camino diferente para llegar a ti. Eso es lo que hace que internet sea imparable.',
          ka: 'პროტოკოლის (წესების) გარეშე მისამართი (ნომერი) უსარგებლო იქნებოდა. ის უზრუნველყოფს, რომ ინტერნეტის ერთი ნაწილის გაუმართაობის შემთხვევაშიც კი, თქვენმა მონაცემებმა სხვა გზით მიგაწვდინოს ინფორმაცია. სწორედ ეს ხდის ინტერნეტს გაჩერებასაც შეუძლებელს.',
        },
      },
    ],
  },
]
