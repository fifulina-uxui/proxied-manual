import type { Chapter } from './manual'

export const chapters2: Chapter[] = [
  {
    id: 'proxy-what-why',
    num: '04',
    title: { en: 'Proxy: what & why?', ka: 'პროქსი: რა და რატომ?' },
    blocks: [
      {
        type: 'lead',
        text: {
          en: 'The proxy is an intermediary server that sits between a user’s device (for example, your phone) and the internet.',
          ka: 'პროქსი არის შუამავალი სერვერი, რომელიც მომხმარებლის მოწყობილობას (მაგალითად, თქვენს ტელეფონს) და ინტერნეტს შორის დგას.',
        },
      },
      {
        type: 'p',
        text: {
          en: 'Usually, when we use the internet on our phones, our devices connect directly to the website’s servers. With a proxy, your device talks to the proxy first, and the proxy talks to the website on your behalf. The internet sees that the proxy is talking - not your device (cellphone, laptop, or PC).',
          ka: 'რიგითად, როდესაც ინტერნეტს ტელეფონით ვიყენებთ, ჩვენი მოწყობილობები პირდაპირ უერთდება ვებსაიტის სერვერებს. პროქსის შემთხვევაში, თქვენი მოწყობილობა ჯერ პროქსის ესაუბრება, პროქსი კი თქვენი სახელით ესაუბრება ვებსაიტს. ინტერნეტი ხედავს, რომ პროქსი საუბრობს - და არა თქვენი მოწყობილობა (ტელეფონი, ლეპტოპი ან კომპიუტერი).',
        },
      },
      {
        type: 'p',
        text: {
          en: 'To make it more understandable: when you want to buy a car, instead of going to the market, you send your friend (the proxy) there. Your friend asks the merchant a price, the merchant tells the friend the price, and then your friend comes back and tells you.',
          ka: 'უფრო გასაგებად: როდესაც მანქანის ყიდვა გსურთ, ბაზარში წასვლის ნაცვლად იქ აგზავნით თქვენს მეგობარს (პროქსს). თქვენი მეგობარი ეკითხება ვაჭარს ფასს, ვაჭარი მეგობარს ეუბნება ფასს, შემდეგ მეგობარი ბრუნდება და გეუბნებათ თქვენ.',
        },
      },
      {
        type: 'note',
        title: { en: 'The result', ka: 'შედეგი' },
        text: {
          en: 'You got the information you wanted, but the merchant never saw your face and does not know that you were the one asking. It is private: the website sees the proxy’s IP address, not yours.',
          ka: 'თქვენ მიიღეთ სასურველი ინფორმაცია, მაგრამ ვაჭარმა თქვენი სახე არასდროს იხილა და არ იცის, რომ ზუსტად თქვენ გეკითხებოდით. ეს კონფიდენციალურია: ვებსაიტი ხედავს პროქსის IP მისამართს და არა თქვენსას.',
        },
      },
    ],
  },
  {
    id: 'vpn-vs-proxy',
    num: '05',
    title: {
      en: 'VPN: key concepts & how it differs from a proxy',
      ka: 'VPN: ძირითადი ცნებები და განსხვავება პროქსისგან',
    },
    blocks: [
      {
        type: 'p',
        text: {
          en: 'When we talk about proxies and proxy servers, people get confused. The first question is always whether the proxy is a VPN and what makes it different. The function of both products is to circumvent the blocks and firewalls imposed by different governments or corporations. Both tools act as intermediaries between your device and the internet, but they differ in scope, security, and how they handle user data.',
          ka: 'როდესაც პროქსებსა და პროქსი სერვერებზე ვსაუბრობთ, ადამიანები ბნელდებიან. პირველი კითხვა ყოველთვის არის - არის თუ არა პროქსი VPN და რით განსხვავდება. ორივე პროდუქტის ფუნქციაა სხვადასხვა მთავრობების ან კორპორაციების მიერ დაწესებული ბლოკირებებისა და ფაერვოლების გვერდის ავლა. ორივე ინსტრუმენტი შუამავლის როლს ასრულებს თქვენს მოწყობილობასა და ინტერნეტს შორის, მაგრამ განსხვავდება მასშტაბით, უსაფრთხოებითა და მონაცემების დამუშავების წესით.',
        },
      },
      {
        type: 'p',
        text: {
          en: 'They have two common features: users can change their IP address using both VPNs and proxies, and both allow them to connect to the internet from different locations. However, the ways they are managed and the levels of encryption on both sides are different.',
          ka: 'მათ ორი საერთო თვისება აქვთ: მომხმარებლებს შეუძლიათ IP მისამართის შეცვლა როგორც VPN-ით, ისე პროქსით, და ორივე საშუალებას აძლევს ინტერნეტთან სხვადასხვა ლოკაციიდან დაკავშირებას. თუმცა, მათი მართვის წესები და შიფრაციის დონეები განსხვავებულია.',
        },
      },
      { type: 'h3', text: { en: 'VPN (Virtual Private Network)', ka: 'VPN (ვირტუალური პირადი ქსელი)' } },
      {
        type: 'p',
        text: {
          en: 'To use a VPN, you first need to register for a VPN server and install software on your device. VPN provider server locations are in different areas, allowing users to choose the desired location. After the connection is established, signals are routed at the system level, and all applications connect through the VPN server - web browsers, games, BitTorrent, and even app updates.',
          ka: 'VPN-ის გამოსაყენებლად ჯერ უნდა დარეგისტრირდეთ VPN სერვერზე და დააინსტალიროთ პროგრამა თქვენს მოწყობილობაზე. VPN პროვაიდერის სერვერები სხვადასხვა რეგიონშია განთავსებული, რაც მომხმარებელს სასურველი ლოკაციის არჩევის საშუალებას აძლევს. კავშირის დამყარების შემდეგ, სიგნალები სისტემურ დონეზე მარშრუტდება და ყველა აპლიკაცია VPN სერვერით უერთდება - ბრაუზერები, თამაშები, BitTorrent და აპლიკაციების განახლებებიც კი.',
        },
      },
      {
        type: 'p',
        text: {
          en: 'A VPN creates a secure tunnel between your device and the internet; all data transferred between your device and the VPN server is encrypted. Hence, your browsing information and IP address are hidden from the government, Internet Service Providers (ISPs), and possible attackers (hackers).',
          ka: 'VPN ქმნის უსაფრთხო გვირაბს თქვენს მოწყობილობასა და ინტერნეტს შორის; ყველა მონაცემი, რომელიც თქვენს მოწყობილობასა და VPN სერვერს შორის გადადის, დაშიფრულია. შესაბამისად, თქვენი ბრაუზინგის ინფორმაცია და IP მისამართი დამალულია მთავრობის, ინტერნეტ პროვაიდერებისა (ISP) და პოტენციური ჰაკერებისგან.',
        },
      },
      { type: 'h3', text: { en: 'Proxy', ka: 'პროქსი' } },
      {
        type: 'p',
        text: {
          en: 'A proxy is a middleman between the browser and the website. When you access a website, a request connection is sent from your ISP to the website - in this process, your IP is visible. While using a proxy, the request goes through your Internet Service Provider to the proxy and then to the website. In this case, your IP is hidden, and your host server IP is visible to the whole world.',
          ka: 'პროქსი არის შუამავალი ბრაუზერსა და ვებსაიტს შორის. როდესაც ვებსაიტზე შედიხართ, მოთხოვნა თქვენი ISP-დან ვებსაიტისკენ გადის - ამ პროცესში თქვენი IP ხილულია. პროქსის გამოყენებისას მოთხოვნა ჯერ თქვენი ინტერნეტ პროვაიდერიდან პროქსიზე, შემდეგ კი ვებსაიტზე გადადის. ამ შემთხვევაში თქვენი IP დამალულია და მთელი მსოფლიოსთვის პროქსი სერვერის IP არის ხილული.',
        },
      },
      {
        type: 'p',
        text: {
          en: 'For the configuration of the proxy server, you need a specific web browser (Incogniton / Multilogin). A proxy hides your IP; the traffic between your device and the proxy server is not encrypted.',
          ka: 'პროქსი სერვერის კონფიგურაციისთვის საჭიროა კონკრეტული ვებბრაუზერი (Incogniton / Multilogin). პროქსი მალავს თქვენს IP-ს; ტრაფიკი თქვენს მოწყობილობასა და პროქსი სერვერს შორის დაშიფრული არ არის.',
        },
      },
      {
        type: 'table',
        head: [
          { en: 'VPN', ka: 'VPN' },
          { en: 'Proxy', ka: 'პროქსი' },
        ],
        rows: [
          [
            { en: 'Encrypts the whole internet connection', ka: 'აშიფრავს მთელ ინტერნეტ კავშირს' },
            { en: 'Must be configured for each app (e.g. Chrome, BitTorrent)', ka: 'თითოეული აპლიკაციისთვის ცალკე უნდა კონფიგურირდეს (მაგ., Chrome, BitTorrent)' },
          ],
          [
            { en: 'Changes your IP', ka: 'ცვლის თქვენს IP-ს' },
            { en: 'Changes your IP', ka: 'ცვლის თქვენს IP-ს' },
          ],
          [
            { en: 'Has its own software', ka: 'აქვს საკუთარი პროგრამა' },
            { en: 'Doesn’t have its own software', ka: 'არ აქვს საკუთარი პროგრამა' },
          ],
          [
            { en: 'Encrypts the data being transferred', ka: 'აშიფრავს გადასაცემ მონაცემებს' },
            { en: 'Doesn’t encrypt the data being transferred', ka: 'არ აშიფრავს გადასაცემ მონაცემებს' },
          ],
          [
            { en: 'Slower than a proxy', ka: 'პროქსიზე ნელია' },
            { en: 'Faster than a VPN', ka: 'VPN-ზე სწრაფია' },
          ],
          [
            { en: 'More costly than a proxy', ka: 'პროქსიზე ძვირია' },
            { en: 'Cheaper than a VPN', ka: 'VPN-ზე იაფია' },
          ],
        ],
      },
      {
        type: 'note',
        title: { en: 'Check your local laws', ka: 'შეამოწმეთ ადგილობრივი კანონები' },
        text: {
          en: 'Make sure to check the laws and regulations in your country regarding VPNs. In some locations there are stringent regulations - in Belarus, Iran, Turkmenistan, Iraq, and China, using a VPN is heavily restricted, and in North Korea and Belarus, VPN users can face jail.',
          ka: 'აუცილებლად შეამოწმეთ თქვენი ქვეყნის კანონები და რეგულაციები VPN-ებთან დაკავშირებით. ზოგიერთ ადგილას მკაცრი რეგულაციებია - ბელარუსში, ირანში, თურქმენეთში, ერაყსა და ჩინეთში VPN-ის გამოყენება მკაცრად არის შეზღუდული, ხოლო ჩრდილოეთ კორეასა და ბელარუსში VPN მომხმარებლებს პატიმრობა ემუქრებათ.',
        },
      },
      { type: 'h3', text: { en: 'Deep Packet Inspection (DPI)', ka: 'პაკეტების ღრმა ინსპექცია (DPI)' } },
      {
        type: 'p',
        text: {
          en: 'Blocking VPN servers serves two different goals: for authoritarian regimes it is associated with free speech suppression, while the other side is the protection of the state’s economy, security, and defence secrets. The technique used by governments is called Deep Packet Inspection (DPI). A date on the internet is a “packet”; these packets include crucial information - data traffic, source, content, destination. DPI meticulously analyzes the particulars embedded in the packet to identify the IP address and port numbers, helping governments find and filter undesirable information, including VPN servers.',
          ka: 'VPN სერვერების ბლოკირება ორ განსხვავებულ მიზანს ემსახურება: ავტორიტარული რეჟიმებისთვის ეს სიტყვის თავისუფლების ჩახშობას უკავშირდება, მეორე მხარე კი სახელმწიფოს ეკონომიკის, უსაფრთხოებისა და თავდაცვის საიდუმლოებების დაცვაა. მთავრობების მიერ გამოყენებულ ტექნიკას ეწოდება პაკეტების ღრმა ინსპექცია (DPI). ინტერნეტში მონაცემი არის „პაკეტი“; ეს პაკეტები შეიცავს გადამწყვეტ ინფორმაციას - ტრაფიკს, წყაროს, შიგთავსს, დანიშნულებას. DPI წარმტაცად აანალიზებს პაკეტში ჩაშენებულ დეტალებს IP მისამართისა და პორტის ნომრების იდენტიფიკაციისთვის, რაც მთავრობებს ეხმარება არასასურველი ინფორმაციის, მათ შორის VPN სერვერების პოვნასა და ფილტრაციაში.',
        },
      },
      {
        type: 'p',
        text: {
          en: 'DPI technology allows ISPs to intercept their users’ comprehensive online activities, such as browsing histories, emails, and downloads - given the absence of encryption in a substantial portion of internet traffic. This has grave implications for internet users because of data disclosure and the questioning of privacy.',
          ka: 'DPI ტექნოლოგია საშუალებას აძლევს ISP-ებს შეაჩერონ მომხმარებლების ყოვლისმომცველი ონლაინ აქტივობა - ბრაუზინგის ისტორია, ელფოსტა და ჩამოტვირთვები - ინტერნეტ ტრაფიკის მნიშვნელოვანი ნაწილის შიფრაციის არარსებობის გამო. ამას სერიოზული შედეგები აქვს მომხმარებლებისთვის მონაცემების გამჟღავნებისა და კონფიდენციალურობის თვალსაზრისით.',
        },
      },
    ],
  },
  {
    id: 'proxy-pool',
    num: '06',
    title: { en: 'What is a proxy pool?', ka: 'რა არის პროქსი პული?' },
    blocks: [
      {
        type: 'lead',
        text: {
          en: 'A proxy pool is a large collection of different IP addresses that acts as a reservoir for your internet traffic.',
          ka: 'პროქსი პული არის სხვადასხვა IP მისამართების დიდი კოლექცია, რომელიც თქვენი ინტერნეტ ტრაფიკის რეზერვუარის როლს ასრულებს.',
        },
      },
      {
        type: 'p',
        text: {
          en: 'Instead of using just one intermediary server, you have thousands (or even millions) of them at your disposal. Imagine you have a large bag of different “digital disguises” or masks. Every time you go to a website, you reach into the bag and pull out a new mask - making it look like you are a completely different person from a different part of the world.',
          ka: 'ერთი შუამავალი სერვერის ნაცვლად, თქვენს განკარგულებაშია ათასობით (ან მილიონობით) მათგანი. წარმოიდგინეთ, რომ გაქვთ დიდი ჩანთა სხვადასხვა „ციფრული ნიღბით“. ყოველ ჯერზე, როდესაც ვებსაიტზე შედიხართ, ჩანთაში ხელს ყოფთ და ახალ ნიღაბს იღებთ - გამოიყურებით ისე, თითქოს სრულიად სხვა ადამიანი ხართ მსოფლიოს სხვა ნაწილიდან.',
        },
      },
      {
        type: 'p',
        text: {
          en: 'In a proxy pool, you don’t manually switch between 500 different IPs. Instead, you connect to a single entry point. When you send a request, the system automatically picks an available IP from the pool. Depending on your settings, the proxy pool can give you a new IP for every single request or keep you on the same IP for a few minutes. As a result, the hosting website sees your request from the proxy IP, not from your home IP.',
          ka: 'პროქსი პულში თქვენ ხელით არ გადართავთ 500 სხვადასხვა IP-ს შორის. ამის ნაცვლად, ერთ შესასვლელ წერტილთან უერთდებით. მოთხოვნის გაგზავნისას სისტემა ავტომატურად ირჩევს ხელმისაწვდომ IP-ს პულიდან. თქვენი პარამეტრების მიხედვით, პროქსი პული შეიძლება მოგცეთ ახალი IP ყოველი მოთხოვნისთვის ან იგივე IP-ზე დაგტოვოთ რამდენიმე წუთით. შედეგად, მასპინძელი ვებსაიტი ხედავს თქვენს მოთხოვნას პროქსი IP-დან და არა თქვენი საშინაო IP-დან.',
        },
      },
      { type: 'h3', text: { en: 'What can you use a proxy pool for?', ka: 'რისთვის გამოიყენება პროქსი პული?' } },
      {
        type: 'cards',
        items: [
          {
            title: { en: 'Web scraping', ka: 'ვებსკრეპინგი' },
            text: {
              en: 'Collecting data from a website with no chances of being blocked.',
              ka: 'მონაცემების შეგროვება ვებსაიტიდან დაბლოკვის რისკის გარეშე.',
            },
          },
          {
            title: { en: 'Price & competitor monitoring', ka: 'ფასებისა და კონკურენტების მონიტორინგი' },
            text: {
              en: 'Running periodic checks on market products and service pricing.',
              ka: 'ბაზრის პროდუქტებისა და სერვისების ფასების პერიოდული შემოწმება.',
            },
          },
          {
            title: { en: 'Marketplace operations', ka: 'მარკეტპლეისის ოპერაციები' },
            text: {
              en: 'Operating multiple accounts and IPs for a single service.',
              ka: 'მრავალი ანგარიშისა და IP-ის მართვა ერთი სერვისისთვის.',
            },
          },
          {
            title: { en: 'Web-service testing', ka: 'ვებსერვისის ტესტირება' },
            text: {
              en: 'Making requests from multiple IPs for a single service to determine the strength of the system.',
              ka: 'მოთხოვნების გაგზავნა მრავალი IP-დან ერთი სერვისისთვის, სისტემის გამძლეობის დასადგენად.',
            },
          },
          {
            title: { en: 'Marketing & social media', ka: 'მარკეტინგი და სოციალური მედია' },
            text: {
              en: 'Automating activity on social networks with zero-tolerance policies without getting locked out.',
              ka: 'აქტივობის ავტომატიზაცია სოციალურ ქსელებში ნულოვანი ტოლერანტობის პოლიტიკის პირობებში - დაბლოკვის გარეშე.',
            },
          },
        ],
      },
      {
        type: 'p',
        text: {
          en: 'We need a proxy pool to bypass IP bans and rate limits. Most websites use rate limits to prevent bots from overwhelming their servers. If you send 1,000 requests per minute from a single IP, the website will flag you as a bot and block your IP address. With a proxy pool, we can spread those 1,000 requests across 1,000 different IPs - on the website it looks like 1,000 different people visiting once each, bypassing the security triggers.',
          ka: 'პროქსი პული საჭიროა IP ბანებისა და რეით-ლიმიტების გვერდის ასავლელად. ვებსაიტების უმეტესობა იყენებს რეით-ლიმიტებს, რათა ბოტებმა სერვერები არ გადატვირთონ. თუ ერთი IP-დან წუთში 1,000 მოთხოვნას გაგზავნით, ვებსაიტი ბოტად მოგნიშნავთ და დააბლოკავს თქვენს IP-ს. პროქსი პულით ჩვენ შეგვიძლია ეს 1,000 მოთხოვნა 1,000 სხვადასხვა IP-ზე გავანაწილოთ - ვებსაიტისთვის ეს 1,000 სხვადასხვა ადამიანის ერთჯერადი ვიზიტის ტოლია, რაც უსაფრთხოების ტრიგერებს უვლის გვერდს.',
        },
      },
      {
        type: 'p',
        text: {
          en: 'Rotation is a pillar of the pool system - a constant process of IP switching. When a proxy rotates its IP address, internet systems see that as normal human behavior. Unlike our competitors, proxied.com has independent 4G and 5G mobile connections. Our users can browse different locations (USA, UK, Germany, etc.), discover network types, and pricing.',
          ka: 'როტაცია პულის სისტემის საყრდენია - IP-ების გადართვის მუდმივი პროცესი. როდესაც პროქსი თავის IP მისამართს ცვლის, ინტერნეტ სისტემები ამას ნორმალურ ადამიანურ ქცევად აღიქვამენ. კონკურენტებისგან განსხვავებით, proxied.com-ს აქვს დამოუკიდებელი 4G და 5G მობილური კავშირები. ჩვენს მომხმარებლებს შეუძლიათ დაათვალიერონ სხვადასხვა ლოკაციები (აშშ, გაერთიანებული სამეფო, გერმანია და ა.შ.), აღმოაჩინონ ქსელის ტიპები და ფასები.',
        },
      },
      {
        type: 'cards',
        items: [
          {
            title: { en: 'Rotating IPs', ka: 'როტირებადი IP-ები' },
            text: {
              en: 'Automatically change the IP at intervals - as fast as 1 minute.',
              ka: 'IP-ის ავტომატური შეცვლა ინტერვალებით - 1 წუთამდე სისწრაფით.',
            },
          },
          {
            title: { en: 'Sticky sessions', ka: 'წებოვანი სესიები' },
            text: {
              en: 'Keep the same IP for a longer duration if you need to stay logged into an account.',
              ka: 'იგივე IP-ის შენარჩუნება უფრო ხანგრძლივად, თუ ანგარიშში შესული უნდა დარჩეთ.',
            },
          },
        ],
      },
      {
        type: 'p',
        text: {
          en: 'On our proxy, users can choose how “private” the pool might be. The gold standard in this industry is that only the user’s traffic goes to the SIM card. There are several pool types: the Residential Proxy Pool, the Mobile Proxy Pool, the Static Proxy Pool, and the Internet Service Provider (ISP) Proxy Pool. A proxy pool is a sophisticated instrument for operability and reliability - it enables effortless circumvention of boundaries and grants dexterity to users.',
          ka: 'ჩვენს პროქსიზე მომხმარებლებს შეუძლიათ აირჩიონ, რამდენად „პირადი“ იქნება პული. ამ ინდუსტრიაში ოქროს სტანდარტია, რომ SIM ბარათზე მხოლოდ მომხმარებლის ტრაფიკი გადიოდეს. არსებობს პულების რამდენიმე ტიპი: საცხოვრებელი (Residential), მობილური (Mobile), სტატიკური (Static) და ინტერნეტ პროვაიდერის (ISP) პროქსი პული. პროქსი პული არის დახვეწილი ინსტრუმენტი ოპერატიულობისა და საიმედოობისთვის - ის საზღვრების უმოქმედოდ გვერდის ავლისა და მოქნილობის საშუალებას აძლევს მომხმარებლებს.',
        },
      },
    ],
  },
  {
    id: 'proxy-types',
    num: '07',
    title: { en: 'Different types of proxies', ka: 'პროქსების სხვადასხვა ტიპები' },
    blocks: [
      {
        type: 'p',
        text: {
          en: 'There are residential, data center, mobile, and pool proxies. Let’s explain each of them in this chapter.',
          ka: 'არსებობს საცხოვრებელი (residential), მონაცემთა ცენტრის (data center), მობილური (mobile) და პულის (pool) პროქსები. მოდით, თითოეულს ამ თავში ავხსნათ.',
        },
      },
      {
        type: 'cards',
        items: [
          {
            title: { en: 'Residential proxy', ka: 'საცხოვრებელი პროქსი' },
            text: {
              en: 'An intermediary server that provides you with an IP address physically tied to a real home and a legitimate internet service provider (like Magti or Silknet). It makes you look like a real person browsing from their living room on their home Wi-Fi. A residential proxy has the highest trust: if a website blocks a residential IP, they risk losing a real customer.',
              ka: 'შუამავალი სერვერი, რომელიც გაძლევთ IP მისამართს, რომელიც ფიზიკურად მიბმულია რეალურ სახლთან და ლეგიტიმურ ინტერნეტ პროვაიდერთან (როგორიცაა Magti ან Silknet). ის გაძლევთ რეალური ადამიანის იერს, რომელიც სახლის Wi-Fi-დან დათვალიერებს. საცხოვრებელ პროქსს ყველაზე მაღალი ნდობა აქვს: თუ ვებსაიტი საცხოვრებელ IP-ს დააბლოკავს, რეალური კლიენტის დაკარგვას რისკავს.',
            },
          },
          {
            title: { en: 'Data center proxy', ka: 'მონაცემთა ცენტრის პროქსი' },
            text: {
              en: 'Uses IPs from server farms like Amazon or Google - not affiliated with an Internet Service Provider. These proxies live in massive high-speed data centers. They are easily detectable: websites can quickly identify that the traffic is coming from a server, not a human, so the user’s IP will be blocked.',
              ka: 'იყენებს IP-ებს სერვერული ფერმებიდან, როგორიცაა Amazon ან Google - არ არის დაკავშირებული ინტერნეტ პროვაიდერთან. ეს პროქსები ცხოვრობს უზარმაზარ მაღალსიჩქარიან მონაცემთა ცენტრებში. ისინი ადვილად აღმოჩენადია: ვებსაიტებს სწრაფად შეუძლიათ დაადგინონ, რომ ტრაფიკი სერვერიდან მოდის და არა ადამიანისგან, ამიტომ მომხმარებლის IP დაიბლოკება.',
            },
          },
          {
            title: { en: 'Mobile proxies', ka: 'მობილური პროქსები' },
            text: {
              en: 'As mentioned above - 4G and 5G proxies. They specialize in internet connections through a physical mobile device connected to a cellular network, using cellular wireless connections.',
              ka: 'როგორც ზემოთ აღვნიშნეთ - 4G და 5G პროქსები. ისინი სპეციალიზირებულია ინტერნეტ კავშირებში ფიზიკური მობილური მოწყობილობის მეშვეობით, რომელიც მობილურ ქსელთანაა დაკავშირებული და უსადენო სელულურ კავშირებს იყენებს.',
            },
          },
          {
            title: { en: 'ISP proxy', ka: 'ISP პროქსი' },
            text: {
              en: 'The hybrid of the proxy world: it takes the best parts of data center and residential connections. These proxies are in data centers and are powerful and fast 24/7, but websites see them as a residential provider (like “Comcast”) instead of a bot from a farm. ISP proxies are always static - you get one specific IP that never changes unless you manually swap it. This is why they are perfect for account management (Facebook, Amazon, eBay): if your IP jumps from New York to London while you are logged in, you get banned. With an ISP proxy, you look like a loyal customer at home.',
              ka: 'პროქსი სამყაროს ჰიბრიდი: იღებს მონაცემთა ცენტრისა და საცხოვრებელი კავშირების საუკეთესო მხარეებს. ეს პროქსები მონაცემთა ცენტრებშია და 24/7 ძლიერი და სწრაფია, მაგრამ ვებსაიტები ხედავენ მათ საცხოვრებელ პროვაიდერად (მაგ., „Comcast“) და არა ფერმის ბოტად. ISP პროქსები ყოველთვის სტატიკურია - იღებთ ერთ კონკრეტულ IP-ს, რომელიც არასდროს იცვლება, სანამ ხელით არ შეცვლით. სწორედ ამიტომ ისინი იდეალურია ანგარიშების მართვისთვის (Facebook, Amazon, eBay): თუ თქვენი IP სესიის დროს ნიუ-იორკიდან ლონდონში გადახტება, დაიბანებით. ISP პროქსით საკუთარ სახლში მყოფი ერთგული კლიენტის იერი გაქვთ.',
            },
          },
        ],
      },
      { type: 'h3', text: { en: 'Price comparison', ka: 'ფასების შედარება' } },
      {
        type: 'list',
        items: [
          {
            en: 'Data center proxy: $0.50–$1.50 per IP/month.',
            ka: 'მონაცემთა ცენტრის პროქსი: $0.50–$1.50 IP-ზე/თვეში.',
          },
          {
            en: 'Residential proxy: $3.00–$15.00 per IP/month.',
            ka: 'საცხოვრებელი პროქსი: $3.00–$15.00 IP-ზე/თვეში.',
          },
          {
            en: 'Mobile proxy (proxied.com): $4.00–$40.00 - price varies hourly, daily, weekly, and monthly.',
            ka: 'მობილური პროქსი (proxied.com): $4.00–$40.00 - ფასი მერყეობს საათობრივი, დღიური, კვირიული და თვიური გეგმების მიხედვით.',
          },
        ],
      },
    ],
  },
  {
    id: 'why-mobile-effective',
    num: '08',
    title: { en: 'Why are mobile proxies effective?', ka: 'რატომ არის მობილური პროქსები ეფექტური?' },
    blocks: [
      {
        type: 'p',
        text: {
          en: 'In 2025, mobile proxies are considered the gold standard of the proxy industry, and they are unblockable. If a residential proxy is a real ID, a mobile proxy is like a diplomatic passport. A mobile IP rotates naturally; every time a phone moves between cell towers or loses signal for a second, the carrier often assigns it a new IP (flight mode demonstration).',
          ka: '2025 წელს მობილური პროქსები პროქსი ინდუსტრიის ოქროს სტანდარტად ითვლება და ისინი დაბლოკვას არ ექვემდებარდება. თუ საცხოვრებელი პროქსი ნამდვილი პირადობის მოწმობაა, მობილური პროქსი დიპლომატური პასპორტის მსგავსია. მობილური IP ბუნებრივად როტაციას განიცდის; ყოველ ჯერზე, როდესაც ტელეფონი საძირებელ ანძებს შორის გადაადგილდება ან წამით კარგავს სიგნალს, ოპერატორი ხშირად ახალ IP-ს ანიჭებს მას (ავიარეჟიმის დემონსტრაცია).',
        },
      },
      {
        type: 'p',
        text: {
          en: 'The biggest reason for the effectiveness of mobile proxies originates from Carrier-Grade Network Address Translation technology (CGNAT). As we mentioned above, one IPv4 is shared by hundreds or even thousands of real people’s devices at the same time. If a website like Instagram blocks one mobile IP because a bot is using it, they might accidentally block 5,000 real users.',
          ka: 'მობილური პროქსების ეფექტურობის ყველაზე დიდი მიზეზი Carrier-Grade Network Address Translation ტექნოლოგიიდან (CGNAT) მომდინარეობს. როგორც ზემოთ აღვნიშნეთ, ერთ IPv4 მისამართს ასობით ან ათასობით რეალური ადამიანის მოწყობილობა იზიარებს ერთდროულად. თუ Instagram-ის მსგავსი ვებსაიტი ერთ მობილურ IP-ს დააბლოკავს, რადგან ბოტი იყენებს მას, შესაძლოა შემთხვევით 5,000 რეალური მომხმარებელი დააბლოკოს.',
        },
      },
      {
        type: 'p',
        text: {
          en: 'Henceforth, websites are hesitant to block mobile users, allowing internet service providers to share a single public IPv4 address among thousands of individual subscribers and giving incredibly high “trust scores.” Another reason is the connection itself: the IP from the proxy belongs to a major carrier (like Silknet, Magti, or Vodafone) rather than a server farm. In our case, Proxied has real mobile phones with SIM cards and provides service infrastructure to our users. As a result, the traffic is real, and the website assumes this is normal activity.',
          ka: 'აქედან გამომდინარე, ვებსაიტები ყოყმანობენ მობილური მომხმარებლების დაბლოკვას, რაც ინტერნეტ პროვაიდერებს საშუალებას აძლევს ერთი საჯარო IPv4 მისამართი ათასობით აბონენტს შორის გაანაწილონ და წარმოუდგენლად მაღალი „ნდობის ქულები“ მიანიჭონ. მეორე მიზეზი თავად კავშირია: პროქსის IP ეკუთვნის მსხვილ ოპერატორს (როგორიცაა Silknet, Magti ან Vodafone) და არა სერვერულ ფერმას. ჩვენს შემთხვევაში, Proxied-ს აქვს ნამდვილი მობილური ტელეფონები SIM ბარათებით და უზრუნველყოფს სერვისის ინფრასტრუქტურას მომხმარებლებისთვის. შედეგად, ტრაფიკი რეალურია და ვებსაიტი ამას ნორმალურ აქტივობად აღიქვამს.',
        },
      },
      {
        type: 'note',
        title: { en: 'Real phones, real IPs', ka: 'ნამდვილი ტელეფონები, ნამდვილი IP-ები' },
        text: {
          en: 'In the proxied.com case, we have real phones’ IP addresses, which always stay the same and serve only one purpose: to bypass constraints and ensure a high-quality mobile connection for the proxy user.',
          ka: 'proxied.com-ის შემთხვევაში, ჩვენ გვაქვს ნამდვილი ტელეფონების IP მისამართები, რომლებიც ყოველთვის იგივე რჩება და მხოლოდ ერთ მიზანს ემსახურება: შეზღუდვების გვერდის ავლა და პროქსი მომხმარებლისთვის მაღალხარისხიანი მობილური კავშირის უზრუნველყოფა.',
        },
      },
    ],
  },
]
