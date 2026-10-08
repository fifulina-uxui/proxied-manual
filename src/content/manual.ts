export type Lang = 'en' | 'ka'

export interface L {
  en: string
  ka: string
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
  },
  heroTitle: {
    en: 'Why Proxies Are Important',
    ka: 'რატომ არის პროქსები მნიშვნელოვანი',
  },
  heroSubtitle: {
    en: 'The complete Proxied.com manual: from 4G & 5G connections and IP addresses to proxy pools, mobile proxies, and a full setup walkthrough with Multilogin, Incogniton, WireGuard, and OpenVPN.',
    ka: 'Proxied.com-ის სრული სახელმძღვანელო: 4G და 5G კავშირებიდან და IP მისამართებიდან პროქსი პულებამდე, მობილურ პროქსებამდე და სრულ კონფიგურაციამდე Multilogin-ში, Incogniton-ში, WireGuard-სა და OpenVPN-ში.',
  },
  heroCtaPrimary: {
    en: 'Start reading',
    ka: 'წაკითხვის დაწყება',
  },
  heroCtaSecondary: {
    en: 'Visit proxied.com',
    ka: 'გადადით proxied.com-ზე',
  },
  heroBadges: [
    { en: '12 chapters', ka: '12 თავი',  },
    { en: '4G & 5G mobile proxies', ka: '4G და 5G მობილური პროქსები',  },
    { en: 'Step-by-step setup', ka: 'ნაბიჯ-ნაბიჯ კონფიგურაცია',  },
  ] as L[],
  contents: { en: 'Contents', ka: 'სარჩევი',  },
  chapter: { en: 'Chapter', ka: 'თავი',  },
  getProxies: { en: 'Get proxies', ka: 'პროქსის შეძენა',  },
  themeToggle: { en: 'Toggle theme', ka: 'თემის გადართვა',  },
  footerTagline: {
    en: 'A community-driven marketplace for real 4G/5G mobile proxies - no middlemen, just true market prices.',
    ka: 'რეალური 4G/5G მობილური პროქსების საზოგადოებრივი მარკეტპლეისი - შუამავლების გარეშე, მხოლოდ რეალური საბაზრო ფასებით.',
  },
  footerLegal: {
    en: 'Independent training guide based on the Proxied Manual (2026). Not legal advice - check the laws and regulations in your country.',
    ka: 'დამოუკიდებელი სასწავლო გზამკვლევი Proxied Manual-ის (2026) საფუძველზე. არ არის იურიდიული რჩევა - გაითვალისწინეთ თქვენი ქვეყნის კანონები და რეგულაციები.',
  },
  onThisPage: { en: 'On this page', ka: 'ამ გვერდზე',  },
}

export const chapters: Chapter[] = [
  {
    id: 'what-is-proxied',
    num: '01',
    title: { en: 'What is Proxied?', ka: 'რა არის Proxied?' },
    blocks: [
      {
        type: 'lead',
        text: {
          en: 'Proxied is a dedicated marketplace selling 4G and 5G internet without mediators, where users have an uninterrupted connection on the network.',
          ka: 'Proxied არის სპეციალიზებული მარკეტპლეისი, რომელიც ყიდის 4G და 5G ინტერნეტს შუამავლების გარეშე - მომხმარებლებს ქსელში უწყვეტი კავშირი აქვთ.',
        },
      },
      {
        type: 'p',
        text: {
          en: 'In simple terms, it acts as a platform that connects buyers who need high-trust, mobile IP addresses with providers who have them, cutting out middlemen. As a result, it provides “true market prices” by allowing users to purchase proxies directly from individual sellers worldwide.',
          ka: 'მარტივად რომ ვთქვათ, ეს არის პლატფორმა, რომელიც აკავშირებს მყიდველებს, ვისაც მაღალი ნდობის მობილური IP მისამართები სჭირდება, მომწოდებლებთან, ვისაც ისინი აქვს - შუამავლების გარეშე. შედეგად, მომხმარებლები პროქსებს პირდაპიც მყიდველებისგან ყიდულობენ მთელი მსოფლიოდან, რაც „რეალურ საბაზრო ფასებს“ იძლევა.',
        },
      },
      {
        type: 'p',
        text: {
          en: 'Proxied is backed by Proxied Limited, which provides multiple IP-address proxy infrastructure solutions globally. Our global network blends carrier SIM-based exits and custom routing to ensure your traffic looks just like ordinary mobile user traffic, not a flagged data center bot. It offers superior advantages compared to competitors, as we utilize our own infrastructure and digital ecosystem.',
          ka: 'Proxied-ის უკან დგას Proxied Limited, რომელიც გლობალურად IP მისამართების პროქსი ინფრასტრუქტურის გადაწყვეტებს სთავაზობს. ჩვენი გლობალური ქსელი აერთიანებს ოპერატორის SIM-ბაზირებულ გამომავალ კვანძებსა და მორგებულ რაუტინგს, რათა თქვენი ტრაფიკი ჩვეულებრივი მობილური მომხმარებლის ტრაფიკივით გამოიყურებოდეს და არა მონიშნული მონაცემთა ცენტრის ბოტივით. კონკურენტებთან შედარებით უპირატესობას გვაძლევს საკუთარი ინფრასტრუქტურა და ციფრული ეკოსისტემა.',
        },
      },
      { type: 'h3', text: { en: 'Why clients choose Proxied', ka: 'რატომ ირჩევენ კლიენტები Proxied-ს' } },
      {
        type: 'cards',
        items: [
          {
            title: { en: 'High-speed 5G/4G connectivity', ka: 'მაღალსიჩქარიანი 5G/4G კავშირი' },
            text: {
              en: 'A platform that connects buyers who need high-trust mobile IP addresses with providers who have them - cutting out middlemen.',
              ka: 'პლატფორმა, რომელიც აკავშირებს მაღალი ნდობის მობილური IP მისამართების მყიდველებსა და მომწოდებლებს - შუამავლების გარეშე.',
            },
          },
          {
            title: { en: 'Real carrier IPs', ka: 'რეალური ოპერატორის IP-ები' },
            text: {
              en: 'Operate with genuine SIM-based IPs from real mobile carriers, avoiding detection and eliminating risks associated with recycled IP pools.',
              ka: 'იმუშავეთ ნამდვილი SIM-ბაზირებული IP მისამართებით რეალური მობილური ოპერატორებიდან - გამოვლენის თავიდან აცილება და გადამუშავებული IP პულების რისკების გამორიცხვა.',
            },
          },
          {
            title: { en: 'Carrier-grade infrastructure', ka: 'ოპერატორის დონის ინფრასტრუქტურა' },
            text: {
              en: 'Go beyond basic proxy usage - run on mobile-native infrastructure optimized for security, stability, and large-scale operations.',
              ka: 'გადააჭარბეთ პროქსის ბაზისურ გამოყენებას - იმუშავეთ მობილურ-ნატიურ ინფრასტრუქტურაზე, ოპტიმიზებულზე უსაფრთხოებისთვის, სტაბილურობისა და მასშტაბური ოპერაციებისთვის.',
            },
          },
          {
            title: { en: 'Unlimited data flexibility', ka: 'შეუზღუდავი მონაცემების მოქნილობა' },
            text: {
              en: 'Scale usage freely with plans ranging from hourly to monthly, giving you full control over your data consumption.',
              ka: 'თავისუფლად გაზარდეთ მოხმარება საათობრივიდან თვიურამდე გეგმებით - სრული კონტროლი თქვენს მონაცემებზე.',
            },
          },
          {
            title: { en: '99.9% uptime reliability', ka: '99.9% აფთაიმის საიმედოობა' },
            text: {
              en: 'Enjoy consistent, uninterrupted connections with a robust network built for maximum uptime and stability.',
              ka: 'დაიტკბით სტაბილური, უწყვეტი კავშირებით მყარი ქსელით, შექმნილი მაქსიმალური აფთაიმისა და სტაბილურობისთვის.',
            },
          },
          {
            title: { en: 'Stealth & native access', ka: 'ფარული და ნატიური წვდომა' },
            text: {
              en: 'Blend seamlessly into real mobile traffic, access platform-native content, and reduce the risk of detection.',
              ka: 'უნაკლოდ იზავეთ რეალურ მობილურ ტრაფიკში, გაეხსენით პლატფორმის ნატიურ კონტენტს და შეამცირეთ გამოვლენის რისკი.',
            },
          },
          {
            title: { en: 'Enhanced performance & longevity', ka: 'გაუმჯობესებული წარმადობა და ხანგრძლივობა' },
            text: {
              en: 'Work faster and longer with reliable connections that support sustained, high-performance operations.',
              ka: 'იმუშავეთ უფრო სწრაფად და ხანგრძლივად საიმედო კავშირებით, რომლებიც ხანგრძლივ, მაღალწარმადობიან ოპერაციებს უჭერენ მხარს.',
            },
          },
          {
            title: { en: 'Trusted across industries', ka: 'სანდოობა სხვადასხვა ინდუსტრიაში' },
            text: {
              en: 'Preferred by social media managers, data analytics teams, and e-commerce sellers for dependable and scalable proxy solutions.',
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
    title: { en: 'What are 4G & 5G connections?', ka: 'რა არის 4G და 5G კავშირები?' },
    blocks: [
      {
        type: 'p',
        text: {
          en: '4G stands for fourth-generation internet connection. Compared to 3G, 4G is a leap forward because it provides speeds that finally match the high-speed internet people have in their residential devices. 4G is ten times faster than 3G - useful for downloading large files, apps, or movies in minutes rather than hours. On 4G, YouTube, Netflix, and TikTok work perfectly, giving high-quality videos and new experiences to users.',
          ka: '4G ნიშნავს მეოთხე თაობის ინტერნეტ კავშირს. 3G-თან შედარებით, 4G არის ნახტომი წინ, რადგან ის იძლევა სიჩქარეს, რომელიც ბოლოს შეესაბამება საცხოვრებელ მოწყობილობებში არსებულ მაღალსიჩქარიან ინტერნეტს. 4G ათჯერ სწრაფია 3G-ზე - დიდი ფაილების, აპლიკაციებისა და ფილმების ჩამოტვირთვა წუთებში და არა საათებში. 4G-ზე YouTube, Netflix და TikTok შეუფერხებლად მუშაობს და მაღალხარისხიან ვიდეოებს იძლევა.',
        },
      },
      {
        type: 'p',
        text: {
          en: '4G also decreased latency - the delay between you clicking a button and the internet reacting. This is why video calls (Zoom, Google Meet) and online gaming became possible on mobile phones. Today you will see 4G LTE (Long Term Evolution), the development chain of 4G internet. When 4G was introduced, it was not compatible with different networks, and it took time for mobile operators to implement it. Today, 4G LTE is essential for fast, qualitative mobile data.',
          ka: '4G-მ ასევე შეამცირა ლატენცია - დაგვიანება ღილაკზე დაწკაპუნებასა და ინტერნეტის რეაქციას შორის. სწორედ ამიტომ გახდა შესაძლებელი ვიდეზარები (Zoom, Google Meet) და ონლაინ თამაშები მობილურ ტელეფონებზე. დღეს თქვენ ხედავთ 4G LTE-ს (Long Term Evolution) - 4G ინტერნეტის განვითარების ჯაჭვს. 4G-ის დანერგვისას ის სხვადასხვა ქსელთან თავსებადი არ იყო და ოპერატორებს მისი დანერგვა დრო დასჭირდათ. დღეს 4G LTE აუცილებელია სწრაფი და ხარისხიანი მობილური ინტერნეტისთვის.',
        },
      },
      {
        type: 'p',
        text: {
          en: 'After 4G LTE, 5G started operating in 2019. We can call 5G speed the “Speed of Mercury” - fifth-generation technology giving network users faster mobile internet. The development of 5G was not just about making your phone faster; it was a fundamental redesign of how the world communicates. Because of poor frequency, 4G networks were often congested and lagging. 5G opened a new networking experience with a higher frequency: downloads take seconds, and it can handle millions of devices at once (smart watches, cars, traffic lights, sensors) without slowing down.',
          ka: '4G LTE-ის შემდეგ, 2019 წელს ამუშავდა 5G. 5G-ის სიჩქარეს შეგვიძლია „მერკურის სიჩქარე“ ვუწოდოთ - მეხუთე თაობის ტექნოლოგია, რომელიც მომხმარებლებს უფრო სწრაფ მობილურ ინტერნეტს აძლევს. 5G-ის განვითარება მხოლოდ ტელეფონის დაჩქარებას არ ეხებოდა - ეს იყო მსოფლიოს კომუნიკაციის ფუნდამენტური რედიზაინი. დაბალი სიხშირის გამო 4G ქსელები ხშირად გადატვირთული და ნელა იყო. 5G-მ გახსნა ახალი ქსელური გამოცდილება უფრო მაღალი სიხშირით: ჩამოტვირთვა წამებში ხდება და ის მილიონობით მოწყობილობას (ჭკვიანი საათები, მანქანები, შუქნიშნები, სენსორები) ემსახურება შენელების გარეშე.',
        },
      },
      {
        type: 'p',
        text: {
          en: 'For the 5G network there is almost zero “lag” - it allows surgeons to operate robotic arms from across the world, or self-driving cars to react to stop lights instantly. It utilizes higher-frequency waves and advanced antenna systems to send massive amounts of data with almost zero delay. Consider that 5G requires “mini-towers” on almost every street corner, because the signal is easily blocked by trees, rain, or even fog. 4G signals can travel for miles and go through thick walls - 4G is still the king of the countryside, districts, and villages, while 5G covers mostly big cities and downtowns.',
          ka: '5G ქსელში თითქმის ნულოვანი „ლეგია“ - ის ქირურგებს საშუალებას აძლევს მსოფლიოს მეორე ბოლოდან რობოტული ხელები მართონ, ხოლო უპილოტო მანქანებს - მყისიერად რეაგირება მოუხდეთ შუქნიშნებზე. ის იყენებს უფრო მაღალი სიხშირის ტალღებსა და განვითარებულ ანტენის სისტემებს უზარმაზარი რაოდენობის მონაცემების თითქმის ნულოვანი დაგვიანებით გადასაცემად. გაითვალისწინეთ, რომ 5G-ს თითქმის ყოველ ქუჩის კუთხეში „მინი-ანძები“ სჭირდება, რადგან სიგნალს ხეები, წვიმა და ნისლიც კი აბლოკავს. 4G სიგნალი კილომეტრებს გადის და სქელ კედლებს ღებულობს - 4G კვლავ სოფლებისა და დაბების მეფეა, 5G კი ძირითადად დიდ ქალაქებსა და ცენტრებს ფარავს.',
        },
      },
      {
        type: 'p',
        text: {
          en: 'For battery life: to maintain a 5G connection, a phone needs to work harder. Most phones are dual-connected, meaning they use 4G and 5G at the same time. In case 5G drops, the device needs to reconnect to 4G instantly. This uses 6% to 11% more battery than just using 4G.',
          ka: 'ბატარეის ხანგრძლივობის თვალსაზრისით: 5G კავშირის შესანარჩუნებლად ტელეფონს უფრო ინტენსიურად უწევს მუშაობა. ტელეფონების უმეტესობა ორმაგად არის დაკავშირებული - იყენებს 4G-სა და 5G-ს ერთდროულად. თუ 5G გათიშვა მოხდა, მოწყობილობა მყისიერად უნდა დაუბრუნდეს 4G-ს. ეს 6%-დან 11%-მდე მეტ ბატარეას ხარჯავს, ვიდრე მხოლოდ 4G-ის გამოყენება.',
        },
      },
      {
        type: 'table',
        head: [
          { en: 'Feature', ka: 'მახასიათებელი' },
          { en: '4G reliable', ka: '4G საიმედო' },
          { en: '5G instant', ka: '5G მყისიერი' },
        ],
        rows: [
          [
            { en: 'Speed', ka: 'სიჩქარე' },
            { en: 'Fast (good for 1080p video)', ka: 'სწრაფი (1080p ვიდეოსთვის საკმარისი)' },
            { en: 'Blazing (good for 8K & VR)', ka: 'ელვისებური (8K და VR-ისთვის)' },
          ],
          [
            { en: 'Reaction time', ka: 'რეაქციის დრო' },
            { en: 'Small delay (noticeable in gaming)', ka: 'მცირე დაგვიანება (თამაშებში შესამჩნევი)' },
            { en: 'No delay (feels like real-time)', ka: 'დაგვიანების გარეშე (რეალურ დროში)' },
          ],
          [
            { en: 'Capacity', ka: 'ტევადობა' },
            { en: 'Can get crowded in stadiums', ka: 'სტადიონებზე გადაიტვირთება' },
            { en: 'Can handle a whole city of devices', ka: 'მთელ ქალაქის მოწყობილობებს ემსახურება' },
          ],
          [
            { en: 'Battery life', ka: 'ბატარეა' },
            { en: 'Very efficient', ka: 'ძალიან ეკონომიური' },
            { en: 'Drains battery slightly faster', ka: 'ბატარეას ოდნავ სწრაფად ხარჯავს' },
          ],
          [
            { en: 'Coverage', ka: 'ფართობი' },
            { en: 'Available almost everywhere', ka: 'თითქმის ყველგან ხელმისაწვდომი' },
            { en: 'Best in cities and urban centers', ka: 'საუკეთესო ქალაქებსა და ცენტრებში' },
          ],
        ],
      },
    ],
  },
  {
    id: 'what-is-ip',
    num: '03',
    title: { en: 'What is an IP?', ka: 'რა არის IP?' },
    blocks: [
      {
        type: 'p',
        text: {
          en: 'The IP address (Internet Protocol address) is a unique string of numbers assigned to every device connected to a computer network. It has two primary purposes:',
          ka: 'IP მისამართი (Internet Protocol address) არის ციფრების უნიკალური სტრიქონი, რომელიც ენიჭება ყველა მოწყობილობას, რომელიც კომპიუტერულ ქსელთან არის დაკავშირებული. მას ორი ძირითადი დანიშნულება აქვს:',
        },
      },
      {
        type: 'cards',
        items: [
          {
            title: { en: 'Identification', ka: 'იდენტიფიკაცია' },
            text: {
              en: 'Tells the network exactly which device is communicating (phone, laptop, etc.).',
              ka: 'უთითებს ქსელს, ზუსტად რომელი მოწყობილობა კომუნიკაციას აწარმოებს (ტელეფონი, ლეპტოპი და ა.შ.).',
            },
          },
          {
            title: { en: 'Location', ka: 'მდებარეობა' },
            text: {
              en: 'Provides the digital coordinates so that data packets (mail or web pages) know exactly where to travel to find you - like a postal service.',
              ka: 'აძლევს ციფრულ კოორდინატებს, რათა მონაცემთა პაკეტებმა (წერილებმა ან ვებგვერდებმა) ზუსტად იცოდნენ, საით უნდა გაემგზავრონ თქვენს საპოვნელად - როგორც საფოსტო სამსახური.',
            },
          },
        ],
      },
      {
        type: 'p',
        text: {
          en: 'Most people think IP just means the number, but it actually stands for Internet Protocol - a set of rules:',
          ka: 'უმეტესობა ფიქრობს, რომ IP მხოლოდ რიცხვს ნიშნავს, მაგრამ სინამდვილეში ეს არის Internet Protocol - წესების ერთობლიობა:',
        },
      },
      {
        type: 'table',
        head: [
          { en: 'Concept', ka: 'ცნება' },
          { en: 'What it is', ka: 'რა არის' },
          { en: 'Human terms', ka: 'ადამიანური ენით' },
        ],
        rows: [
          [
            { en: 'The Protocol', ka: 'პროტოკოლი' },
            { en: 'The Rules', ka: 'წესები' },
            { en: 'The “Laws of the Road”', ka: '„გზის კანონები“' },
          ],
          [
            { en: 'The Address', ka: 'მისამართი' },
            { en: 'The Destination', ka: 'დანიშნულება' },
            { en: 'Your house number', ka: 'თქვენი სახლის ნომერი' },
          ],
          [
            { en: 'The Packet', ka: 'პაკეტი' },
            { en: 'The Message Piece', ka: 'შეტყობინების ნაწილი' },
            { en: 'A single letter in an envelope', ka: 'ერთი წერილი კონვერტში' },
          ],
          [
            { en: 'The Router', ka: 'როუტერი' },
            { en: 'The Traffic Cop', ka: 'მოძრაობის მარეგულირებელი' },
            { en: 'A signpost at a crossroads', ka: 'საჩვენებელი გზაჯვარედინზე' },
          ],
        ],
      },
      {
        type: 'p',
        text: {
          en: 'The internet does not send all the information at once - it is too “heavy.” It slices your data into tiny pieces, each containing the source IP (your address) and the destination IP (the website address). These pieces might take different routes; some travel via satellite, others via underwater cables. Once it arrives, the protocol instructs the receiving computer how to reassemble the pieces in the correct order.',
          ka: 'ინტერნეტი მთელ ინფორმაციას ერთდროულად არ აგზავნის - ის ძალიან „მძიმეა“. ის თქვენს მონაცემებს პატარა ნაწილებად ჭრის, თითოეული შეიცავს წყაროს IP-ს (თქვენს მისამართს) და დანიშნულების IP-ს (ვებსაიტის მისამართს). ეს ნაწილები სხვადასხვა მარშრუტით მოძრაობს; ზოგი თანავარსკვლავით, ზოგი წყალქვეშა კაბელებით. მიღწევის შემდეგ, პროტოკოლი აძლევს მიმღებ კომპიუტერს ინსტრუქციას, როგორ შეკრას ნაწილები სწორი თანმიმდევრობით.',
        },
      },
      {
        type: 'p',
        text: {
          en: 'Computers communicate using numbers. The DNS (Domain Name System) is the phone book of the internet - a hierarchical and distributed service that translates human-readable domain names (like google.com) into machine-readable numeric IP addresses. It is the critical bridge that allows you to access websites without memorizing complex strings of digits.',
          ka: 'კომპიუტერები რიცხვებით კომუნიკაციას აწარმოებენ. DNS (Domain Name System) არის ინტერნეტის სატელეფონო წიგნი - იერარქიული და განაწილებული სერვისი, რომელიც ადამიანისთვის წაკითხვად დომენურ სახელებს (მაგ., google.com) მანქანისთვის წაკითხვად რიცხვით IP მისამართებთან აკავშირებს. ეს არის კრიტიკული ხიდი, რომელიც საშუალებას გაძლევთ ვებსაიტებზე წვდომა ციფრების რთული კომბინაციების დამახსოვრების გარეშე.',
        },
      },
      {
        type: 'p',
        text: {
          en: 'For years, we used IPv4. These addresses look like 192.168.1.1, and there were only 4.3 billion of them. In 2025, with billions of people having phones, watches, and smart fridges, we “ran out” of numbers. Then we created IPv6, much longer: 2001:0db8:85a3:0000:0000:8a2e:0370:7334.',
          ka: 'წლების განმავლობაში ჩვენ ვიყენებდით IPv4-ს. ეს მისამართები ასე გამოიყურება: 192.168.1.1 და მხოლოდ 4.3 მილიარდი მათგანი არსებობდა. 2025 წელს, როდესაც მილიარდობით ადამიანს ტელეფონი, საათი და ჭკვიანი მაცივარი აქვს, ნომრები „აგვიმთავრდა“. შემდეგ შევქმენით IPv6 - ბევრად გრძელი: 2001:0db8:85a3:0000:0000:8a2e:0370:7334.',
        },
      },
      { type: 'h3', text: { en: 'Public and private IP addresses', ka: 'საჯარო და პირადი IP მისამართები' } },
      {
        type: 'cards',
        items: [
          {
            title: { en: 'Public IP', ka: 'საჯარო IP' },
            text: {
              en: 'Your entire house, where your internet router communicates with the rest of the world. Like the main gate of a great villa: all mail from other cities is delivered to this gate, and everyone knows the address of your gate. (Find yours by searching “What is my IP?”.)',
              ka: 'თქვენი მთელი სახლი, სადაც ინტერნეტ როუტერი დანარჩენ მსოფლიოთან კომუნიკაციას აწარმოებს. როგორც დიდი ვილის მთავარი კარი: ყველა წერილი სხვა ქალაქებიდან ამ კარიბჭესთან მოდის და ყველამ იცის თქვენი კარის მისამართი. (იპოვეთ თქვენი - მოძებნეთ „What is my IP?“.)',
            },
          },
          {
            title: { en: 'Private IP', ka: 'პირადი IP' },
            text: {
              en: 'Your personal cellphone, laptop, smartwatch - devices using a router in the building. The villa has different rooms, each with a private number, so information coming through the gate is distributed to the rooms accordingly. A private IP is hidden from the whole world and is only used for your devices to talk to each other - thanks to NAT (Network Address Translation), which swaps your private info for a public IP.',
              ka: 'თქვენი პირადი ტელეფონი, ლეპტოპი, ჭკვიანი საათი - მოწყობილობები, რომლებიც შენობაში როუტერს იყენებენ. ვილას სხვადასხვა ოთახი აქვს, თითოეული პირადი ნომრით, ამიტომ კარიბჭიდან შემომავალი ინფორმაცია ოთახებზე ნაწილდება. პირადი IP დამალულია მსოფლიოსგან და მხოლოდ თქვენი მოწყობილობების ურთიერთკომუნიკაციისთვის გამოიყენება - NAT-ის (Network Address Translation) წყალობით, რომელიც თქვენს პირად ინფორმაციას საჯარო IP-თან ცვლის.',
            },
          },
          {
            title: { en: 'Static IP', ka: 'სტატიკური IP' },
            text: {
              en: 'Never changes; manually assigned and stays the same forever - like a lighthouse. Necessary when you want the world to find your specific device at the same digital location every time (websites, email servers, file sharing). Usually costs more. Note: mobile IPs are never static - as the phone moves or the signal fluctuates, the carrier naturally assigns a new IP.',
              ka: 'არასდროს იცვლება; ხელით არის მინიჭებული და სამუდამოდ უცვლელი რჩება - როგორც შუქურა. აუცილებელია, როცა გსურთ, რომ მსოფლიომ თქვენი კონკრეტული მოწყობილობა ყოველთვის იმავე ციფრულ ადგილას იპოვოს (ვებსაიტები, საფოსტო სერვერები, ფაილების გაზიარება). რიგითად უფრო ძვირი ჯდება. გაითვალისწინეთ: მობილური IP არასდროს არის სტატიკური - ტელეფონის მოძრაობისას ან სიგნალის რყევისას ოპერატორი ბუნებრივად ახალ IP-ს ანიჭებს.',
            },
          },
          {
            title: { en: 'Dynamic IP', ka: 'დინამიური IP' },
            text: {
              en: 'Changes periodically; your internet provider loans it to you for a while, then takes it back and gives you a new one. Both static and dynamic IPs are public, follow the same networking rules (IPv4 or IPv6), and can identify your device - the difference is that a dynamic IP is temporary, while a static IP is permanent.',
              ka: 'პერიოდულად იცვლება; თქვენი ინტერნეტ პროვაიდერი გიჯელოდებათ მას გარკვეული ხნით, შემდეგ იღებს უკან და ახალს გაძლევთ. სტატიკური და დინამიური IP-ები ორივე საჯაროა, იმავე ქსელურ წესებს მიჰყვება (IPv4 ან IPv6) და თქვენი მოწყობილობის იდენტიფიკაცია შეუძლია - განსხვავება ისაა, რომ დინამიური IP დროებითია, სტატიკური კი მუდმივი.',
            },
          },
        ],
      },
      { type: 'h3', text: { en: 'How NAT works', ka: 'როგორ მუშაობს NAT' } },
      {
        type: 'p',
        text: {
          en: 'Your laptop sends the request to the router (using a private IP), and the router “swaps” your private information for a public IP and sends it to YouTube. When YouTube sends the video back, the router remembers it was for your laptop and passes it back to your private IP. NAT allows multiple devices to operate under a single IP address - internal addresses remain hidden from external networks, and port numbers help differentiate traffic from different devices.',
          ka: 'თქვენი ლეპტოპი აგზავნის მოთხოვნას როუტერისკენ (პირადი IP-ის გამოყენებით), როუტერი კი „ცვლის“ თქვენს პირად ინფორმაციას საჯარო IP-თან და აგზავნის YouTube-ისკენ. როდესაც YouTube ვიდეოს უკან აბრუნებს, როუტერი ახსოვს, რომ ის თქვენი ლეპტოპისთვის იყო და პირად IP-ზე უბრუნებს. NAT საშუალებას აძლევს მრავალ მოწყობილობას ერთი IP მისამართის ქვეშ იმუშაოს - შინაგანი მისამართები დამალული რჩება გარე ქსელებისთვის, პორტის ნომრები კი სხვადასხვა მოწყობილობის ტრაფიკს არჩევს.',
        },
      },
      {
        type: 'note',
        title: { en: 'Why are IPs important?', ka: 'რატომ არის IP-ები მნიშვნელოვანი?' },
        text: {
          en: 'Without the protocol (rules), the address (number) would be useless. It ensures that even if one part of the internet breaks, your data can find a different path to reach you. It is what makes the internet unstoppable.',
          ka: 'პროტოკოლის (წესების) გარეშე მისამართი (ნომერი) უსარგებლო იქნებოდა. ის უზრუნველყოფს, რომ ინტერნეტის ერთი ნაწილის გაუმართაობის შემთხვევაშიც კი, თქვენმა მონაცემებმა სხვა გზით მიგაწვდინოს ინფორმაცია. სწორედ ეს ხდის ინტერნეტს გაჩერებასაც შეუძლებელს.',
        },
      },
    ],
  },
]
