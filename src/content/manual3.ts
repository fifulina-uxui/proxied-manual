import type { Chapter } from './manual'

export const chapters3: Chapter[] = [
  {
    id: '4g-vs-5g-proxy',
    num: '09',
    title: { en: '4G vs 5G proxy: the difference', ka: '4G vs 5G პროქსი: განსხვავება' },
    blocks: [
      {
        type: 'p',
        text: {
          en: 'In the proxy world, the difference between 4G and 5G proxies is similar to the difference between a reliable sedan and a Formula 1 car. Both will get you to your destination, but power and speed will be different. Both mobile proxies share the same superpower: high trust. Thousands of mobile users share the same IP address, and websites (like Google and Instagram) are afraid to block a mobile IP because they might accidentally block thousands of real customers at once (using CGNAT technology).',
          ka: 'პროქსი სამყაროში 4G და 5G პროქსებს შორის განსხვავება საიმედო სედანისა და ფორმულა 1-ის მანქანის განსხვავებას ჰგავს. ორივე დანიშნულების ადგილამდე მიგიყვანთ, მაგრამ სიმძლავრე და სიჩქარე განსხვავებული იქნება. ორივე მობილურ პროქსს იგივე სუპერძალა აქვს: მაღალი ნდობა. ათასობით მობილური მომხმარებელი იზიარებს იმავე IP მისამართს და ვებსაიტებს (როგორიცაა Google და Instagram) ეშინიათ მობილური IP-ის დაბლოკვის, რადგან შესაძლოა შემთხვევით ათასობით რეალური კლიენტი დააბლოკონ ერთდროულად (CGNAT ტექნოლოგიის გამოყენებით).',
        },
      },
      { type: 'h3', text: { en: 'Speed and bandwidth', ka: 'სიჩქარე და გამტარუნარიანობა' } },
      {
        type: 'p',
        text: {
          en: '4G proxies usually offer speeds between 20 Mbps and 100 Mbps - a good speed for social media automation and general browsing. 5G proxies can reach speeds from 150 Mbps up to 1 Gbps+ in ideal conditions, saving you hours when processing massive amounts of images/videos or streaming 4K content.',
          ka: '4G პროქსები ჩვეულებრივ სთავაზობს 20–100 Mbps სიჩქარეს - კარგი სიჩქარეა სოციალური მედიის ავტომატიზაციისა და ზოგადი ბრაუზინგისთვის. 5G პროქსებს შეუძლიათ მიაღწიონ 150 Mbps-დან 1 Gbps+-მდე სიჩქარეს იდეალურ პირობებში, რაც საათებს ზოგავს უზარმაზარი რაოდენობის ვიდეოების/სურათების დამუშავებისა ან 4K კონტენტის სტრიმინგისას.',
        },
      },
      { type: 'h3', text: { en: 'Latency (the ping)', ka: 'ლატენცია (პინგი)' } },
      {
        type: 'p',
        text: {
          en: 'Latency is the delay between sending a request and getting a response. A 4G proxy has 60–150 ms latency in real/ideal conditions. A 5G proxy has a theoretical 5.2 ms latency (ideal for gaming or high-frequency trading), but in the real world it will be 30–100 ms. Critical factors affect signal strength: if a 5G device has a weak signal (inside a basement), it will fall back to 4G or suffer from retransmissions, and latency will peak at 200 ms+.',
          ka: 'ლატენცია არის დაგვიანება მოთხოვნის გაგზავნასა და პასუხის მიღებას შორის. 4G პროქსის ლატენცია რეალურ/იდეალურ პირობებში 60–150 მწმ-ია. 5G პროქსის თეორიული ლატენცია 5.2 მწმ-ია (იდეალური თამაშებისა ან მაღალსიხშირული ტრეიდინგისთვის), მაგრამ რეალურ სამყაროში ეს 30–100 მწმ იქნება. სიგნალის სიძლიერეზე კრიტიკული ფაქტორები მოქმედებს: თუ 5G მოწყობილობას სუსტი სიგნალი აქვს (მაგ., სარდაფში), ის 4G-ზე დაბრუნდება ან გადაცემის ხარვეზებს განიცდის და ლატენცია 200 მწმ+-მდე გაიზრდება.',
        },
      },
      {
        type: 'table',
        head: [
          { en: 'Feature', ka: 'მახასიათებელი' },
          { en: '4G proxy', ka: '4G პროქსი' },
          { en: '5G proxy', ka: '5G პროქსი' },
        ],
        rows: [
          [
            { en: 'Trust level', ka: 'ნდობის დონე' },
            { en: 'Extremely high', ka: 'უკიდურესად მაღალი' },
            { en: 'Extremely high', ka: 'უკიდურესად მაღალი' },
          ],
          [
            { en: 'Availability', ka: 'ხელმისაწვდომობა' },
            { en: 'Everywhere', ka: 'ყველგან' },
            { en: 'Major cities / urban areas', ka: 'მსხვილი ქალაქები / ურბანული არეები' },
          ],
          [
            { en: 'Cost', ka: 'ღირებულება' },
            { en: 'Budget-friendly', ka: 'ბიუჯეტისთვის ხელსაყრელი' },
            { en: 'Premium / expensive', ka: 'პრემიუმ / ძვირი' },
          ],
          [
            { en: 'Congestion', ka: 'გადატვირთვა' },
            { en: 'High (more users on 4G)', ka: 'მაღალი (4G-ზე მეტი მომხმარებელია)' },
            { en: 'Low (newer, less crowded “highways”)', ka: 'დაბალი (უფრო ახალი, ნაკლებად გადატვირთული „გზატკეცილები“)' },
          ],
          [
            { en: 'Stability', ka: 'სტაბილურობა' },
            { en: 'Very stable', ka: 'ძალიან სტაბილური' },
            { en: 'Can fluctuate if the 5G signal is weak', ka: 'შეიძლება მერყეობდეს, თუ 5G სიგნალი სუსტია' },
          ],
        ],
      },
    ],
  },
  {
    id: 'use-cases',
    num: '10',
    title: { en: 'Cases - using proxy', ka: 'შემთხვევები - პროქსის გამოყენება' },
    blocks: [
      {
        type: 'p',
        text: {
          en: '4G proxies are considered effective for digital marketers and SEO professionals. Because they use IP addresses assigned by real mobile carriers, it is nearly impossible for platforms (Instagram, Facebook) to distinguish between a real person on a smartphone and a bot. Social media platforms like Instagram, TikTok, and Facebook are mobile-first and have extremely aggressive anti-bot filters. If a person manages more than 3–5 client accounts from a single IP, the platform will ban all of them for “suspicious activity.” Using 4G proxies gives each account a unique mobile identity.',
          ka: '4G პროქსები ეფექტურად ითვლება ციფრული მარკეტერებისა და SEO პროფესიონალებისთვის. რადგან ისინი რეალური მობილური ოპერატორების მიერ მინიჭებულ IP მისამართებს იყენებენ, პლატფორმებისთვის (Instagram, Facebook) თითქმის შეუძლებელია განასხვავონ სმარტფონის რეალური მომხმარებელი და ბოტი. Instagram, TikTok და Facebook მობილურ-პირველადია და უკიდურესად აგრესიული ანტი-ბოტ ფილტრები აქვთ. თუ ადამიანი 3–5-ზე მეტ კლიენტის ანგარიშს მართავს ერთი IP-დან, პლატფორმა ყველას დააბლოკავს „საეჭვო აქტივობის“ გამო. 4G პროქსები თითოეულ ანგარიშს უნიკალურ მობილურ იდენტობას აძლევს.',
        },
      },
      { type: 'h3', text: { en: 'Marketing agencies', ka: 'მარკეტინგული სააგენტოები' } },
      {
        type: 'p',
        text: {
          en: 'A marketing agency’s typical responsibilities include generating leads, managing accounts, researching markets, and creating social media content. Most websites (Google, Meta, TikTok) have sophisticated systems to detect automation, and data center IPs are often blacklisted. Proxied provides genuine mobile IPs from major carriers - after using Proxied, the agency’s activity is mirrored as a real user, and bans or IP blocks are drastically reduced.',
          ka: 'მარკეტინგული სააგენტოს ტიპური მოვალეობები მოიცავს ლიდების გენერაციას, ანგარიშების მართვას, ბაზრის კვლევასა და სოციალური მედიის კონტენტის შექმნას. ვებსაიტების უმეტესობას (Google, Meta, TikTok) ავტომატიზაციის აღმოსაჩენად დახვეწილი სისტემები აქვს და მონაცემთა ცენტრის IP-ები ხშირად შავ სიაშია. Proxied ნამდვილ მობილურ IP-ებს აძლევს მსხვილი ოპერატორებიდან - Proxied-ის გამოყენების შემდეგ სააგენტოს აქტივობა რეალური მომხმარებლის სარკისებრად ჩანს და ბანები ან IP ბლოკები დრამატულად მცირდება.',
        },
      },
      {
        type: 'p',
        text: {
          en: 'Imagine an agency working with a travel company offering vacation packages. Using mobile proxies, the agency can run targeted campaigns to generate leads from specific regions, access travel booking sites and review platforms, and analyze competitors’ pricing and promotions in each target market. Proxied acts as a “digital teleporter”: even if you type “best coffee shop in Tbilisi” from London, results are filtered through your UK IP profile - but with a Tbilisi mobile (Magti, Geocell) proxy, the agency’s browser is identified as a local phone user in Vake or on Rustaveli Avenue, and sees the local ads and organic results of those locations.',
          ka: 'წარმოიდგინეთ სააგენტო, რომელიც საერთაშორისო სამოგზაურო კომპანიასთან მუშაობს. მობილური პროქსებით სააგენტოს შეუძლია მიზნობრივი კამპანიების ჩატარება კონკრეტული რეგიონებიდან ლიდების გენერაციისთვის, სამოგზაურო დაჯავშნის საიტებზე და მიმოხილვის პლატფორმებზე წვდომა და კონკურენტების ფასებისა და აქციების ანალიზი თითოეულ სამიზნე ბაზარზე. Proxied მოქმედებს როგორც „ციფრული ტელეპორტერი“: თუნდაც ლონდონიდან ჩაწეროთ „საუკეთესო ყავახანა თბილისში“, შედეგები თქვენი ბრიტანული IP პროფილით ფილტრდება - მაგრამ თბილისური მობილური (Magti, Geocell) პროქსით სააგენტოს ბრაუზერი ადგილობრივ ტელეფონის მომხმარებლად იდენტიფიცირდება ვაკეში ან რუსთაველის გამზირზე და ხედავს ამ ლოკაციების ლოკალურ რეკლამებსა და ორგანულ შედეგებს.',
        },
      },
      {
        type: 'list',
        items: [
          { en: 'Filter proxies by country (UK, USA, EU)', ka: 'პროქსების ფილტრაცია ქვეყნის მიხედვით (გაერთ. სამეფო, აშშ, ეს)' },
          { en: 'City-level targeting (Manchester, Berlin)', ka: 'ქალაქის დონის ტარგეტირება (მანჩესტერი, ბერლინი)' },
          { en: 'Network type (4G or 5G)', ka: 'ქსელის ტიპი (4G ან 5G)' },
        ],
      },
      { type: 'h3', text: { en: 'Bypassing restrictions', ka: 'შეზღუდვების გვერდის ავლა' } },
      {
        type: 'p',
        text: {
          en: 'If an agency works with a client launching a streaming service in a specific country, but the competitor’s service is only available to users with IP addresses from that country, mobile proxies let the agency bypass these IP restrictions and study the competitor’s platform. For example, Netflix’s competitor in Georgia is Rustavi 2 - a subcontractor agency could easily use a proxy to access Rustavi 2’s marketplace, investigate marketing trends, and plan a user experience tailored only for Georgian users.',
          ka: 'თუ სააგენტო მუშაობს კლიენტთან, რომელიც კონკრეტულ ქვეყანაში სტრიმინგ სერვისს უშვებს, მაგრამ კონკურენტის სერვისი მხოლოდ იმ ქვეყნის IP მისამართების მქონე მომხმარებლებისთვისაა ხელმისაწვდომი, მობილური პროქსები საშუალებას აძლევს სააგენტოს გვერდი აუაროს ამ IP შეზღუდვებს და შეისწავლოს კონკურენტის პლატფორმა. მაგალითად, Netflix-ის კონკურენტი საქართველოში რუსთავი 2 არის - საკონტრაქტო სააგენტოს ადვილად შეუძლია გამოიყენოს პროქსი რუსთავი 2-ის მარკეტპლეისზე წვდომისთვის, მარკეტინგული ტრენდების შესასწავლად და მხოლოდ ქართველი მომხმარებლებისთვის მორგებული მომხმარებლის გამოცდილების დასაგეგმად.',
        },
      },
      { type: 'h3', text: { en: 'SEO optimization', ka: 'SEO ოპტიმიზაცია' } },
      {
        type: 'p',
        text: {
          en: 'Marketing agencies can utilize mobile proxies for SEO by conducting keyword research, monitoring search engine rankings, and analyzing competitor strategies from various locations and mobile devices. Search results for a desktop user in an office are often different from what a person sees on 4G or 5G connections - with Proxied mobile IPs, agencies see what a person scrolls on 4G/5G networks while walking down Rustaveli or Liberty Square, identify popular keywords, and optimize the client’s website content accordingly.',
          ka: 'მარკეტინგული სააგენტოებს შეუძლიათ გამოიყენონ მობილური პროქსები SEO-სთვის - საკვანძო სიტყვების კვლევის, საძიებო სისტემების რეიტინგების მონიტორინგისა და კონკურენტების სტრატეგიების ანალიზისთვის სხვადასხვა ლოკაციიდან და მობილური მოწყობილობიდან. ოფისში მყოფი დესკტოპის მომხმარებლის საძიებო შედეგები ხშირად განსხვავდება იმისგან, რასაც ადამიანი 4G ან 5G კავშირით ხედავს - Proxied-ის მობილური IP-ებით სააგენტოები ხედავენ, რას სქროლავს ადამიანი 4G/5G ქსელებში რუსთაველზე ან თავისუფლების მოედანზე სიარულისას, ამოიცნობენ პოპულარულ საკვანძო სიტყვებს და შესაბამისად ოპტიმიზირებენ კლიენტის ვებსაიტის კონტენტს.',
        },
      },
      { type: 'h3', text: { en: 'Competitor analysis', ka: 'კონკურენტების ანალიზი' } },
      {
        type: 'p',
        text: {
          en: 'An agency working with an e-commerce client can access the competitor’s website and social media profiles from various geolocations and mobile devices, analyze ad placements, content, messaging, and promotional offers across different markets, and gather valuable insights on the target audience, pricing strategies, and content effectiveness.',
          ka: 'ელექტრონული კომერციის კლიენტთან მომუშავე სააგენტოს შეუძლია წვდომა კონკურენტის ვებსაიტზე და სოციალური მედიის პროფილებზე სხვადასხვა გეოლოკაციიდან და მობილური მოწყობილობიდან, გაანალიზოს რეკლამების განთავსება, კონტენტი, შეტყობინებები და სარეკლამო შეთავაზებები სხვადასხვა ბაზარზე და შეაგროვოს ღირებული ანალიზი სამიზნე აუდიტორიის, საფასო სტრატეგიებისა და კონტენტის ეფექტურობის შესახებ.',
        },
      },
      { type: 'h3', text: { en: 'Web scraping', ka: 'ვებსკრეპინგი' } },
      {
        type: 'p',
        text: {
          en: 'Proxies can be used for web scraping (using BeautifulSoup, Selenium, or Playwright) to extract valuable information from a competitor’s website. Instead of rendering a pretty page for a human, scraping reads the underlying code (HTML) and saves specific data points (prices, reviews) into a database. Without a proxy, numerous requests (1,000 per minute) from a single IP get detected and blocked; with a proxy pool, the scraper rotates its identity and the host website detects 1,000 requests from 1,000 different users - your IP address remains safe and non-blacklisted.',
          ka: 'პროქსები გამოიყენება ვებსკრეპინგისთვის (BeautifulSoup, Selenium ან Playwright-ის გამოყენებით) კონკურენტის ვებსაიტიდან ღირებული ინფორმაციის ამოსაღებად. ადამიანისთვის ლამაზი გვერდის რენდერების ნაცვლად, სკრეპინგი კითხულობს ქვედა კოდს (HTML) და ინახავს კონკრეტულ მონაცემებს (ფასები, მიმოხილვები) მონაცემთა ბაზაში. პროქსის გარეშე, ერთი IP-დან მრავალრიცხოვანი მოთხოვნები (წუთში 1,000) აღმოაჩენდება და დაიბლოკება; პროქსი პულით სკრეპერი თავის იდენტობას ცვლის და მასპინძელი ვებსაიტი 1,000 მოთხოვნას 1,000 სხვადასხვა მომხმარებლისგან აღმოაჩენს - თქვენი IP მისამართი უსაფრთხოდ რჩება და შავ სიაში არ ხვდება.',
        },
      },
      { type: 'h3', text: { en: 'Online shopping', ka: 'ონლაინ შოპინგი' } },
      {
        type: 'p',
        text: {
          en: 'Using proxies is an effective tool for finding different prices from different locations, helping businesses implement their strategies in targeted locations. Proxied overcomes the technical barriers e-commerce sites use to protect their data: users from Tbilisi can see exactly what a customer in Berlin sees. And because Proxied uses 4G/5G mobile data, its IPs have the highest trust scores, making it harder for retailers to identify and block price-collection scripts. Proxied also opens local-only offers, when discounts are only visible to users on specific carriers or in certain locations.',
          ka: 'პროქსების გამოყენება ეფექტური ინსტრუმენტია სხვადასხვა ლოკაციიდან სხვადასხვა ფასების საპოვნელად, რაც ბიზნესებს ეხმარება სტრატეგიების განხორციელებაში სამიზნე ლოკაციებში. Proxied უვლის გვერდს ტექნიკურ ბარიერებს, რომლებსაც ელექტრონული კომერციის საიტები მონაცემების დასაცავად იყენებენ: თბილისელი მომხმარებლები ზუსტად იმას ხედავენ, რასაც ბერლინელი კლიენტი. და რადგან Proxied 4G/5G მობილურ მონაცემებს იყენებს, მის IP-ებს უმაღლესი ნდობის ქულები აქვთ, რაც საცალო ვაჭრებისთვის ართულებს ფასების შეგროვების სკრიპტების იდენტიფიკაციასა და დაბლოკვას. Proxied ასევე ხსნის მხოლოდ-ლოკალურ შეთავაზებებს, როდესაც ფასდაკლებები მხოლოდ კონკრეტული ოპერატორების ან გარკვეული ლოკაციების მომხმარებლებისთვისაა ხილული.',
        },
      },
      { type: 'h3', text: { en: 'Brand protection', ka: 'ბრენდის დაცვა' } },
      {
        type: 'p',
        text: {
          en: 'The internet’s global reach makes it easy for bad actors to sell counterfeits or impersonate your business. Proxied.com is an essential tool for brand protection because it allows you to act on the internet without being seen by the people you are investigating. Counterfeiters often block IP addresses coming from known corporate headquarters or law firms - using mobile proxies, you appear as a random person connected to 4G/5G data, can even conduct a “test purchase” without being noticed, and acquire valuable evidence for legal teams or police investigations. With CGNAT IPs, scammers cannot block these IPs without accidentally blocking thousands of potential “real” customers.',
          ka: 'ინტერნეტის გლობალური საფარველი ბოროტმოქმედებისთვის უფრთხილებს ყალბი პროდუქციის გაყიდვასა და თქვენი ბიზნესის განმსგავსებას. Proxied.com აუცილებელი ინსტრუმენტია ბრენდის დაცვისთვის, რადგან საშუალებას გაძლევთ იმოქმედოთ ინტერნეტში იმ ადამიანების მიერ შეუმჩნევლად, ვისაც იძიებთ. ყალბი პროდუქციის გამყიდველები ხშირად ბლოკავენ ცნობილი კორპორაციული თავდაპირველებიდან ან სამართლის ფირმებიდან მომავალ IP მისამართებს - მობილური პროქსებით თქვენ გამოიყურებით როგორც შემთხვევითი ადამიანი 4G/5G კავშირით, შეგიძლიათ ჩაატაროთ „სატესტო შენაძენი“ შეუმჩნევლად და მოიპოვოთ ღირებული მტკიცებულებები იურიდიული გუნდებისა ან პოლიციის გამოძიებებისთვის. CGNAT IP-ებით, მაქრტიელები ვერ დააბლოკავენ ამ IP-ებს ათასობით პოტენციური „რეალური“ კლიენტის შემთხვევითი დაბლოკვის გარეშე.',
        },
      },
      { type: 'h3', text: { en: 'Travel fare aggregation', ka: 'სამოგზაურო ტარიფების აგრეგაცია' } },
      {
        type: 'p',
        text: {
          en: 'Travel fare aggregation is the practice of collecting real-time pricing for flights, hotels, and car rentals from hundreds of different sources to present them in one place for comparison. Companies like Booking.com must show real-time, accurate prices - Proxied allows them to scrape these high-frequency updates using mobile IPs. Large corporations moving thousands of employees around the globe every month use dedicated Travel & Expense platforms; Proxied allows them to benchmark their negotiated corporate rates against public fares in different countries to ensure they are actually getting good deals.',
          ka: 'სამოგზაურო ტარიფების აგრეგაცია არის რეალურ დროში ფასების შეგროვების პრაქტიკა ავიაბილეთებისთვის, სასტუმროებისა და მანქანების გაქირავებისთვის ასობით სხვადასხვა წყაროდან, რათა ისინი ერთ ადგილას შედარებისთვის წარდგეს. Booking.com-ის მსგავსმა კომპანიებმა რეალურ დროში ზუსტი ფასები უნდა აჩვენონ - Proxied საშუალებას აძლევს მათ ამ მაღალსიხშირული განახლებების სკრეპინგს მობილური IP-ებით. მსხვილი კორპორაციები, რომლებიც ყოველთვიურად ათასობით თანამშრომელს გადააქვთ მსოფლიოში, იყენებენ სპეციალურ სამოგზაურო და სახარჯო პლატფორმებს; Proxied საშუალებას აძლევს მათ შეადარონ მოლაპარაკებული კორპორაციული ტარიფები საჯარო ფასებს სხვადასხვა ქვეყანაში, რათა დარწმუნდნენ, რომ ნამდვილად კარგ გარიგებებს აკეთებენ.',
        },
      },
      { type: 'h3', text: { en: 'Crypto market data', ka: 'კრიპტო ბაზრის მონაცემები' } },
      {
        type: 'p',
        text: {
          en: 'Using proxies for cryptocurrency market data is a common practice among traders and developers. Major trading platforms like Binance, Coinbase, or Kraken impose strict rate limits on their APIs - if you pull data too frequently from a single IP, you will be blocked. Proxied allows you to distribute requests across hundreds of thousands of different IPs. Some crypto exchanges also restrict access or offer different data based on the user’s location; a proxy with a specific country IP lets you see the market exactly as a local user would. Moreover, Proxied gives access to Coinbase, which is blocking Georgian users. Our 4G/5G mobile proxies are particularly effective: high trust score, IPs shared by thousands of real mobile users, automatic IP rotation, country selection (UK, Germany, USA, etc.), and easy integration into Python scripts or trading bots (like custom-built Node.js tools).',
          ka: 'პროქსების გამოყენება კრიპტოვალუტის ბაზრის მონაცემებისთვის ჩვეული პრაქტიკაა ტრეიდერებსა და დეველოპერებს შორის. Binance, Coinbase ან Kraken-ის მსგავსი მსხვილი სავაჭრო პლატფორმები მკაცრ რეით-ლიმიტებს აწესებენ თავიანთ API-ებზე - თუ მონაცემებს ძალიან ხშირად მოითხოვთ ერთი IP-დან, დაიბლოკებით. Proxied საშუალებას გაძლევთ გაანაწილოთ მოთხოვნები ასთასობით სხვადასხვა IP-ზე. ზოგი კრიპტო ბირჟა ასევე ზღუდავს წვდომას ან სხვადასხვა მონაცემებს სთავაზობს მომხმარებლის ლოკაციის მიხედვით; კონკრეტული ქვეყნის IP-ით ბაზარს ზუსტად ისე ხედავთ, როგორც ადგილობრივი მომხმარებელი. ამასთან, Proxied გაძლევთ წვდომას Coinbase-ზე, რომელიც ქართველ მომხმარებლებს ბლოკავს. ჩვენი 4G/5G მობილური პროქსები განსაკუთრებით ეფექტურია: მაღალი ნდობის ქულა, ათასობით რეალური მობილური მომხმარებლის მიერ გაზიარებული IP-ები, ავტომატური IP როტაცია, ქვეყნის არჩევა (გაერთ. სამეფო, გერმანია, აშშ და ა.შ.) და მარტივი ინტეგრაცია Python სკრიპტებში ან სავაჭრო ბოტებში (მაგ., მორგებული Node.js ინსტრუმენტები).',
        },
      },
      { type: 'h3', text: { en: 'Open Source Intelligence (OSINT)', ka: 'ღია წყაროების დაზვერვა (OSINT)' } },
      {
        type: 'p',
        text: {
          en: 'Non-attribution and access are major characteristics for a successful investigation. When visiting a website, the IP address acts as a digital return address - the target website sees exactly who is looking at them: a government agency, a private investigator, or a specific corporation. With a proxy, the OSINT team avoids detection and continues the investigation while protecting operational security (OPSEC). Proxied masks your identity, ensuring the investigation cannot be traced back to your physical office or home.',
          ka: 'არა-ატრიბუცია და წვდომა წარმატებული გამოძიების მთავარი მახასიათებლებია. ვებსაიტის მონახულებისას IP მისამართი ციფრული საბრუნო მისამართის როლს ასრულებს - სამიზნე ვებსაიტი ზუსტად ხედავს, ვინ უყურებს მას: სახელმწიფო სააგენტო, პირადი გამომძიებელი თუ კონკრეტული კორპორაცია. პროქსით OSINT გუნდი ერიდება გამოვლენას და აგრძელებს გამოძიებას ოპერაციული უსაფრთხოების (OPSEC) დაცვით. Proxied მალავს თქვენს იდენტობას და უზრუნველყოფს, რომ გამოძიება ვერ დაიბრუნება თქვენამდე - ფიზიკურ ოფისამდე ან სახლამდე.',
        },
      },
      {
        type: 'p',
        text: {
          en: 'OSINT often requires viewing information as it appears to local users in a specific country. Websites - especially local news, government portals, or classified ads - block traffic coming from certain countries. Proxied.com allows bypassing geo-restrictions and opens localized search results and region-blocked social media content. And when legal teams and investigators need to delve into the dark web (parts of the internet not indexed by standard search engines), a proxy is a layer of isolation when exploring high-risk forums or dark web marketplaces.',
          ka: 'OSINT ხშირად მოითხოვს ინფორმაციის ნახვას ისე, როგორც ის ადგილობრივ მომხმარებლებს ჩანს კონკრეტულ ქვეყანაში. ვებსაიტები - განსაკუთრებით ადგილობრივი ახალი ამბები, სამთავრობო პორტალები ან განცხადებები - ბლოკავენ გარკვეული ქვეყნებიდან მომავალ ტრაფიკს. Proxied.com საშუალებას აძლევს გვერდი ავულიოთ გეო-შეზღუდვებს და ხსნის ლოკალიზებულ საძიებო შედეგებსა და რეგიონულად დაბლოკილ სოციალური მედიის კონტენტს. და როდესაც იურიდიულმა გუნდებმა და გამომძიებლებმა ღრმად უნდა ჩაძირნენ dark web-ში (ინტერნეტის ნაწილებში, რომლებიც სტანდარტული საძიებო სისტემებით არ ინდექსირდება), პროქსი არის იზოლაციის ფენა მაღალრისკიანი ფორუმებისა და dark web მარკეტპლეისების შესწავლისას.',
        },
      },
      {
        type: 'note',
        title: { en: 'The bottom line', ka: 'ძირითადი დასკვნა' },
        text: {
          en: 'In 2026, user requirements have increased significantly, and mobile proxies are essential for marketing agencies and other businesses. Google and other major search engines now use mobile-first indexing. Proxied.com can help users navigate the virtual universe, unlock closed borders, and grow their audience.',
          ka: '2026 წელს მომხმარებელთა მოთხოვნები მნიშვნელოვნად გაიზარდა და მობილური პროქსები აუცილებელია მარკეტინგული სააგენტოებისა და სხვა ბიზნესებისთვის. Google და სხვა მსხვილი საძიებო სისტემები ახლა მობილურ-პირველად ინდექსაციას იყენებენ. Proxied.com შეუძლია დაეხმაროს მომხმარებლებს ვირტუალურ სამყაროში ნავიგაციაში, დაკეტილი საზღვრების გახსნასა და აუდიტორიის ზრდაში.',
        },
      },
    ],
  },
  {
    id: 'how-to-use-proxy',
    num: '11',
    title: { en: 'How to use proxy?', ka: 'როგორ გამოვიყენოთ პროქსი?' },
    blocks: [
      {
        type: 'p',
        text: {
          en: 'Enhancing security and anonymous activities on the internet is the focal point for users - especially internet enthusiasts and entrepreneurs trying to be safe, manage their content, and remain untraceable in the virtual world. Essentially, proxied.com is a high-tier mobile proxy provider. We use the same IP addresses as real cell phones (4G, 5G, LTE), making them impossible for websites like Facebook, Amazon, or Google to block. We use real SIM cards and mobile towers, and customers’ traffic looks exactly like a person browsing on an iPhone or Android.',
          ka: 'უსაფრთხოებისა და ანონიმური აქტივობის გაუმჯობესება ინტერნეტში მომხმარებლების მთავარი ფოკუსია - განსაკუთრებით ინტერნეტ ენთუზიასტებისა და მეწარმეებისთვის, რომლებიც ცდილობენ იყვნენ დაცული, მართონ თავიანთი კონტენტი და დარჩნენ უკვალავად ვირტუალურ სამყაროში. არსებითად, proxied.com არის მაღალი დონის მობილური პროქსი პროვაიდერი. ჩვენ ვიყენებთ იგივე IP მისამართებს, რასაც ნამდვილი მობილური ტელეფონები (4G, 5G, LTE), რაც Facebook-ის, Amazon-ის ან Google-ის მსგავსი ვებსაიტებისთვის შეუძლებელს ხდის მათ დაბლოკვას. ჩვენ ვიყენებთ ნამდვილ SIM ბარათებსა და მობილურ ანძებს, ხოლო კლიენტების ტრაფიკი ზუსტად ისე გამოიყურება, როგორც iPhone-ზე ან Android-ზე დამათვალიერებელი ადამიანისა.',
        },
      },
      {
        type: 'p',
        text: {
          en: 'Using a proxy requires setting up specific configurations. The user must navigate to the network or connection settings and enter the proxy IP address and port number. If your proxy requires authentication, you also need to enter your username and password. Once the details are entered, test the connection by visiting a website that is normally geo-restricted in your location and checking its accessibility.',
          ka: 'პროქსის გამოყენება კონკრეტული კონფიგურაციების დაყენებას მოითხოვს. მომხმარებელი უნდა გადავიდეს ქსელის ან კავშირის პარამეტრებში და შეიყვანოს პროქსის IP მისამართი და პორტის ნომერი. თუ თქვენი პროქსი ავთენტიფიკაციას მოითხოვს, ასევე უნდა შეიყვანოთ მომხმარებლის სახელი და პაროლი. დეტალების შეყვანის შემდეგ შეამოწმეთ კავშირი - ეწვიეთ ვებსაიტს, რომელიც ჩვეულებრივ თქვენს ლოკაციაში გეო-შეზღუდულია, და გადაამოწმეთ მისი ხელმისაწვდომობა.',
        },
      },
      { type: 'h3', text: { en: 'Before buying mobile proxies, consider', ka: 'მობილური პროქსების ყიდვამდე გაითვალისწინეთ' } },
      {
        type: 'cards',
        items: [
          {
            title: { en: 'Real mobile IPs', ka: 'ნამდვილი მობილური IP-ები' },
            text: {
              en: 'Ensure the proxies come from actual devices, not simulated environments.',
              ka: 'დარწმუნდით, რომ პროქსები რეალური მოწყობილობებიდან მოდის და არა სიმულირებული გარემოებიდან.',
            },
          },
          {
            title: { en: 'Carrier coverage', ka: 'ოპერატორების საფარველი' },
            text: {
              en: 'Ensure the service offers proxies from multiple carriers, especially in locations that matter to your business.',
              ka: 'დარწმუნდით, რომ სერვისი რამდენიმე ოპერატორისგან სთავაზობს პროქსებს, განსაკუთრებით თქვენი ბიზნესისთვის მნიშვნელოვან ლოკაციებში.',
            },
          },
          {
            title: { en: 'Rotational capabilities', ka: 'როტაციის შესაძლებლობები' },
            text: {
              en: 'Look for IP rotation to avoid red flags during activities like scraping or ad verification.',
              ka: 'მოითხოვეთ IP როტაცია საეჭვო სიგნალების თავიდან ასაცილებლად სკრეპინგის ან რეკლამის ვერიფიკაციისას.',
            },
          },
          {
            title: { en: 'Speed & stability', ka: 'სიჩქარე და სტაბილურობა' },
            text: {
              en: 'Ensure proxies deliver consistent performance without slowing down.',
              ka: 'დარწმუნდით, რომ პროქსები სტაბილურ წარმადობას იძლევა შენელების გარეშე.',
            },
          },
          {
            title: { en: 'Ethical sourcing', ka: 'ეთიკური წარმომავლობა' },
            text: {
              en: 'Make sure the provider uses legitimate, carrier-assigned mobile IPs.',
              ka: 'დარწმუნდით, რომ პროვაიდერი ლეგიტიმურ, ოპერატორის მიერ მინიჭებულ მობილურ IP-ებს იყენებს.',
            },
          },
          {
            title: { en: 'Support & documentation', ka: 'მხარდაჭერა და დოკუმენტაცია' },
            text: {
              en: 'Access to reliable support and clear setup guides can save valuable time when integrating proxies into your operations.',
              ka: 'საიმედო მხარდაჭერაზე და ნათელ სახელმძღვანელოებზე წვდომა ძვირფას დროს დაზოგავს პროქსების ინტეგრაციისას.',
            },
          },
        ],
      },
      {
        type: 'p',
        text: {
          en: 'Our proxied.com checks all these boxes and offers pure 4G and 5G mobile IPs, high uptime, numerous locations, and flexible rotation. Users are in control - building a plan that answers their requirements. We provide Unlimited Data, a huge benefit for customers doing heavy scraping or video streaming, as most other providers charge per gigabyte.',
          ka: 'ჩვენი proxied.com ყველა ამ პირობას აკმაყოფილებს და სთავაზობს სუფთა 4G და 5G მობილურ IP-ებს, მაღალ აფთაიმს, მრავალ ლოკაციასა და მოქნილ როტაციას. მომხმარებლები თავად აკონტროლებენ - ქმნიან გეგმას, რომელიც მათ მოთხოვნილებებს პასუხობს. ჩვენ ვაძლევთ შეუზღუდავ მონაცემებს - უზარმაზარ უპირატესობას ინტენსიური სკრეპინგის ან ვიდეო სტრიმინგისთვის, რადგან სხვა პროვაიდერების უმეტესობა გიგაბაიტზე იღებს საფასურს.',
        },
      },
      {
        type: 'p',
        text: {
          en: 'After buying a proxy, the provider gives you a “Proxy Gateway” address. Users are not connecting directly to the mobile device; they go through the provider’s server, which routes them through a mobile device. We do not use typical data center servers that are easily blocked - our infrastructure connects users directly to real 4G/5G mobile carrier towers (like AT&T or Vodafone). The actual internet for our proxies does not come from server providers like Amazon or Google Cloud; it comes from Mobile Network Operators (MNOs). Traffic is routed through towers in the USA (e.g., T-Mobile), the UK (e.g., Vodafone), and the EU (e.g., Deutsche Telekom), and our company maintains hardware in the key regions of these states.',
          ka: 'პროქსის შეძენის შემდეგ პროვაიდერი გაძლევთ „Proxy Gateway“ მისამართს. მომხმარებლები პირდაპირ არ უერთდებიან მობილურ მოწყობილობას; ისინი გადიან პროვაიდერის სერვერით, რომელიც მათ მობილური მოწყობილობის გავლით მარშრუტავს. ჩვენ არ ვიყენებთ ტიპურ მონაცემთა ცენტრის სერვერებს, რომლებიც ადვილად იბლოკება - ჩვენი ინფრასტრუქტურა მომხმარებლებს პირდაპირ უკავშირდება რეალურ 4G/5G მობილური ოპერატორის ანძებს (როგორიცაა AT&T ან Vodafone). ჩვენი პროქსების რეალური ინტერნეტი არ მოდის Amazon-ის ან Google Cloud-ის მსგავსი სერვერ პროვაიდერებიდან; ის მოდის მობილური ქსელის ოპერატორებიდან (MNO). ტრაფიკი მარშრუტდება ანძებით აშშ-ში (მაგ., T-Mobile), გაერთიანებულ სამეფოში (მაგ., Vodafone) და ევროკავშირში (მაგ., Deutsche Telekom), ხოლო ჩვენი კომპანია ამ ქვეყნების საკვანძო რეგიონებში აპარატურას ინახავს.',
        },
      },
      { type: 'h3', text: { en: 'Protocols: HTTPS vs SOCKS5', ka: 'პროტოკოლები: HTTPS vs SOCKS5' } },
      {
        type: 'p',
        text: {
          en: 'If you are using a proxy for security, ensure it is an HTTPS or SOCKS5 proxy. Standard HTTP proxies do not encrypt your data, meaning the proxy owner could potentially see what you are doing. On our marketplace we offer HTTPS and SOCKS5 protocols - full protocol support, including both IPv4 and IPv6. We recommend HTTPS proxies for standard web browsing, secure web sessions, and social media management; SOCKS5 is more versatile for data-intensive tasks like web scraping, gaming, and applications that require UDP support.',
          ka: 'თუ პროქსის უსაფრთხოებისთვის იყენებთ, დარწმუნდით, რომ ის HTTPS ან SOCKS5 პროქსია. სტანდარტული HTTP პროქსები არ აშიფრავს თქვენს მონაცემებს, რაც ნიშნავს, რომ პროქსის მფლობელს შესაძლოა ეხილოს, რას აკეთებთ. ჩვენს მარკეტპლეისზე ჩვენ ვთავაზობთ HTTPS და SOCKS5 პროტოკოლებს - სრულ პროტოკოლურ მხარდაჭერას, IPv4 და IPv6-ის ჩათვლით. ჩვენ ვურჩევთ HTTPS პროქსებს სტანდარტული ვებბრაუზინგისთვის, უსაფრთხო ვებსესიებისა და სოციალური მედიის მართვისთვის; SOCKS5 უფრო უნივერსალურია მონაცემ-ინტენსიური ამოცანებისთვის, როგორიცაა ვებსკრეპინგი, თამაშები და აპლიკაციები, რომლებიც UDP მხარდაჭერას მოითხოვენ.',
        },
      },
      { type: 'h3', text: { en: 'Anti-detect browsers: Multilogin & Incogniton', ka: 'ანტი-დეტექტ ბრაუზერები: Multilogin და Incogniton' } },
      {
        type: 'p',
        text: {
          en: 'We use Proxied management infrastructure to manage thousands of physical mobile devices (real 4G/5G modems) and turn them into a professional proxy fleet. For product operation, our users rely on Multilogin and Incogniton anti-detect browsers. They do not just manage proxies; they handle the user’s entire digital fingerprint.',
          ka: 'ჩვენ ვიყენებთ Proxied-ის სამართავ ინფრასტრუქტურას ათასობით ფიზიკური მობილური მოწყობილობის (რეალური 4G/5G მოდემების) სამართავად და პროფესიონალურ პროქსი ფლოტად ქცევისთვის. პროდუქტის ოპერაციისთვის ჩვენი მომხმარებლები ეყრდნობიან Multilogin და Incogniton ანტი-დეტექტ ბრაუზერებს. ისინი არა მხოლოდ პროქსებს მართავენ; ისინი მომხმარებლის მთელ ციფრულ თითის ანაბეჭედს გაუმკლავდებიან.',
        },
      },
      {
        type: 'table',
        head: [
          { en: 'Feature', ka: 'მახასიათებელი' },
          { en: 'Multilogin', ka: 'Multilogin' },
          { en: 'Incogniton', ka: 'Incogniton' },
        ],
        rows: [
          [
            { en: 'Best for', ka: 'საუკეთესო ვისთვის' },
            { en: 'High-end professionals & large teams', ka: 'მაღალი დონის პროფესიონალები და დიდი გუნდები' },
            { en: 'Individual entrepreneurs & budget-conscious users', ka: 'ინდივიდუალური მეწარმეები და ბიუჯეტზე ორიენტირებული მომხმარებლები' },
          ],
          [
            { en: 'Fingerprinting', ka: 'თითის ანაბეჭდები' },
            { en: 'Extremely sophisticated; mimics real hardware profiles', ka: 'უკიდურესად დახვეწილი; რეალური აპარატურის პროფილებს იმეორებს' },
            { en: 'Great balance; offers a free tier for up to 10 profiles', ka: 'კარგი ბალანსი; სთავაზობს უფასო დონეს 10 პროფილამდე' },
          ],
          [
            { en: 'Complexity', ka: 'სირთულე' },
            { en: 'More “enterprise” feel; high stability', ka: 'უფრო „ენტერფრაიზ“ შეგრძნება; მაღალი სტაბილურობა' },
            { en: 'User-friendly; easier for beginners to pick up', ka: 'მომხმარებლისთვის მეგობრული; დამწყებებისთვის უფრო მარტივი' },
          ],
          [
            { en: 'Platform', ka: 'პლატფორმა' },
            { en: 'Windows, macOS, and Linux (system agnostic)', ka: 'Windows, macOS და Linux (სისტემებისგან დამოუკიდებელი)' },
            { en: 'Windows and macOS', ka: 'Windows და macOS' },
          ],
        ],
      },
      { type: 'h3', text: { en: 'WireGuard', ka: 'WireGuard' } },
      {
        type: 'p',
        text: {
          en: 'While Multilogin and Incogniton handle your identity, WireGuard and OpenVPN are the protocols (the tunnels) that actually move your data - the engine under the hood. WireGuard is a newer, lightweight protocol designed for high performance. It is faster than OpenVPN and uses modern “lean” code. If you need speed for streaming, WireGuard is the best option. It creates secure point-to-point connections and connects almost instantly. On the operational level, users get the .conf file or QR code from Proxied, install WireGuard, import the .conf file, and all traffic is routed through the mobile proxy IP.',
          ka: 'მაშინ როცა Multilogin და Incogniton თქვენს იდენტობას მართავენ, WireGuard და OpenVPN არიან პროტოკოლები (გვირაბები), რომლებიც რეალურად გადააქვთ თქვენი მონაცემები - ძრავა საფარის ქვეშ. WireGuard არის უფრო ახალი, მსუბუქი პროტოკოლი, შექმნილი მაღალი წარმადობისთვის. ის OpenVPN-ზე სწრაფია და იყენებს თანამედროვე „მჭიდრო“ კოდს. თუ სიჩქარე გჭირდებათ სტრიმინგისთვის, WireGuard საუკეთესო ვარიანტია. ის ქმნის უსაფრთხო წერტილ-წერტილ კავშირებს და თითქმის მყისიერად უერთდება. ოპერაციულ დონეზე, მომხმარებლები იღებენ .conf ფაილს ან QR კოდს Proxied-დან, აყენებენ WireGuard-ს, იმპორტირებენ .conf ფაილს და მთელი ტრაფიკი მობილური პროქსი IP-ით მარშრუტდება.',
        },
      },
      {
        type: 'p',
        text: {
          en: 'WireGuard uses state-of-the-art cryptography - ChaCha20. This ensures that your Internet Service Provider or any middlemen cannot monitor the data you are scraping or receiving. And regarding switches from Wi-Fi to mobile internet, WireGuard does not drop the session - it resumes instantly and avoids signal distortions.',
          ka: 'WireGuard იყენებს უახლეს კრიპტოგრაფიას - ChaCha20. ეს უზრუნველყოფს, რომ თქვენს ინტერნეტ პროვაიდერს ან ნებისმიერ შუამავალს არ შეუძლია თქვენი მონაცემების მონიტორინგი. რაც შეეხება Wi-Fi-დან მობილურ ინტერნეტზე გადართვას, WireGuard სესიას არ თიშავს - ის მყისიერად ახლდება და თავიდან აცილებს სიგნალის დამახინჯებას.',
        },
      },
      { type: 'h3', text: { en: 'OpenVPN', ka: 'OpenVPN' } },
      {
        type: 'p',
        text: {
          en: 'OpenVPN is slower but incredibly flexible. It can mask the traffic to look like normal HTTPS (port 443), making it better at bypassing strict firewalls - like office networks or restrictive countries. At the operational level, proxy users combine these tools: Multilogin to look like 50 different people, with each profile assigned a unique proxy connecting via WireGuard (for speed) or OpenVPN (for stealth).',
          ka: 'OpenVPN უფრო ნელია, მაგრამ წარმოუდგენლად მოქნილი. მას შეუძლია ტრაფიკის დამალვა ნორმალური HTTPS-ის სახით (პორტი 443), რაც მას მკაცრი ფაერვოლების - მაგ., საოფისე ქსელების ან შეზღუდვადი ქვეყნების - გვერდის ავლაში უკეთესს ხდის. ოპერაციულ დონეზე, პროქსი მომხმარებლები აერთიანებენ ამ ინსტრუმენტებს: Multilogin - 50 სხვადასხვა ადამიანის სახით გამოსაყურებლად, თითოეული პროფილი უნიკალური პროქსით, რომელიც უერთდება WireGuard-ით (სიჩქარისთვის) ან OpenVPN-ით (უხილავობისთვის).',
        },
      },
    ],
  },
  {
    id: 'setup-proxied',
    num: '12',
    title: { en: 'How to set up a Proxied.com proxy?', ka: 'როგორ დავაყენოთ Proxied.com-ის პროქსი?' },
    blocks: [
      {
        type: 'lead',
        text: {
          en: 'You need proxy credentials - IP, Port, Username, Password - and the tools mentioned above.',
          ka: 'თქვენ გჭირდებათ პროქსის მონაცემები - IP, პორტი, მომხმარებლის სახელი, პაროლი - და ზემოთ ნახსენები ინსტრუმენტები.',
        },
      },
      { type: 'h3', text: { en: 'Purchasing & the dashboard', ka: 'შეძენა და დაშბორდი' } },
      {
        type: 'p',
        text: {
          en: 'After payment, you will see the Proxied dashboard with your credentials. Proxied.com accepts a variety of standard and modern payment methods:',
          ka: 'გადახდის შემდეგ თქვენ ნახავთ Proxied-ის დაშბორდს თქვენი მონაცემებით. Proxied.com იღებს სტანდარტული და თანამედროვე გადახდის მეთოდების მრავალფეროვნებას:',
        },
      },
      {
        type: 'list',
        items: [
          { en: 'Credit / debit cards: Visa, MasterCard, American Express', ka: 'საკრედიტო / სადებეტო ბარათები: Visa, MasterCard, American Express' },
          { en: 'Cryptocurrency: major coins (Bitcoin, Monero, Solana, Ethereum, etc.) via Cryptomus', ka: 'კრიპტოვალუტა: მთავარი მონეტები (Bitcoin, Monero, Solana, Ethereum და ა.შ.) Cryptomus-ით' },
          { en: 'PayPal & Stripe', ka: 'PayPal და Stripe' },
        ],
      },
      {
        type: 'p',
        text: {
          en: 'As soon as payment is confirmed, your proxy plan is activated and you receive a confirmation email with the invoice and a link to your dashboard. In the dashboard you will find the technical details needed to use proxies:',
          ka: 'გადახდის დადასტურებისთანავე თქვენი პროქსი გეგმა აქტიურდება და თქვენ მიიღებთ დამადასტურებელ ელფოსტას ინვოისითა და დაშბორდის ბმულით. დაშბორდში ნახავთ პროქსების გამოსაყენებლად საჭირო ტექნიკურ დეტალებს:',
        },
      },
      {
        type: 'cards',
        items: [
          {
            title: { en: 'IP or Host', ka: 'IP ან ჰოსტი' },
            text: {
              en: 'e.g., 123.456.78.9 or gw.proxied.com - like the street address of the building; it tells your device which building to go to.',
              ka: 'მაგ., 123.456.78.9 ან gw.proxied.com - როგორც შენობის ქუჩის მისამართი; ეუბნება თქვენს მოწყობილობას, რომელ შენობას მივას მართოს.',
            },
          },
          {
            title: { en: 'Port', ka: 'პორტი' },
            text: {
              en: 'e.g., 1080 or 8080 - the specific “entryway” into the Proxied network, like the door number in a massive apartment complex. Keep walking through one specific door and the building keeps you connected to the same mobile phone IP; use a different entry gate (e.g., 8889) and you get a different mobile IP. A port range like 10000–10100 gives you 100 “gates” - 100 browser profiles at the same time, each with its own unique identity.',
              ka: 'მაგ., 1080 ან 8080 - კონკრეტული „შესასვლელი“ Proxied ქსელში, როგორც კარის ნომერი უზარმაზარ საცხოვრებელ კომპლექსში. გააგრძელეთ ერთი კონკრეტული კარით სიარული და შენობა იმავე მობილური ტელეფონის IP-თან შეაკავშირებთ; გამოიყენეთ სხვა კარი (მაგ., 8889) და მიიღებთ სხვა მობილურ IP-ს. პორტების დიაპაზონი, როგორიცაა 10000–10100, გაძლევთ 100 „კარს“ - 100 ბრაუზერის პროფილი ერთდროულად, თითოეული საკუთარი უნიკალური იდენტობით.',
            },
          },
          {
            title: { en: 'Username', ka: 'მომხმარებლის სახელი' },
            text: {
              en: 'Provided in your dashboard - the private key used to open the gate.',
              ka: 'მოცემულია თქვენს დაშბორდში - პირადი გასაღები კარის გასაღებად.',
            },
          },
          {
            title: { en: 'Password', ka: 'პაროლი' },
            text: {
              en: 'Provided in your dashboard - the second private key used to open the gate.',
              ka: 'მოცემულია თქვენს დაშბორდში - მეორე პირადი გასაღები კარის გასაღებად.',
            },
          },
        ],
      },
      { type: 'h3', text: { en: 'Multilogin setup', ka: 'Multilogin-ის კონფიგურაცია' } },
      {
        type: 'steps',
        items: [
          {
            title: { en: 'Create a profile', ka: 'შექმენით პროფილი' },
            text: { en: 'Open Multilogin and click “+ Create New” on the left sidebar.', ka: 'გახსენით Multilogin და დააწკაპუნეთ „+ Create New“-ს მარცხენა საიდბარში.' },
          },
          {
            title: { en: 'Open proxy settings', ka: 'გახსენით პროქსის პარამეტრები' },
            text: { en: 'Go to the Proxy section in the profile settings (left-hand sidebar).', ka: 'გადადით პროფილის პარამეტრების Proxy სექციაში (მარცხენა საიდბარი).' },
          },
          {
            title: { en: 'Set proxy type', ka: 'დააყენეთ პროქსის ტიპი' },
            text: { en: 'Set Proxy Type to Custom.', ka: 'დააყენეთ Proxy Type - Custom.' },
          },
          {
            title: { en: 'Choose protocol', ka: 'აირჩიეთ პროტოკოლი' },
            text: {
              en: 'Select SOCKS5 (recommended for proxied.com mobile proxies - better performance) or HTTP.',
              ka: 'აირჩიეთ SOCKS5 (რეკომენდებულია proxied.com-ის მობილური პროქსებისთვის - უკეთესი წარმადობა) ან HTTP.',
            },
          },
          {
            title: { en: 'Enter details', ka: 'შეიყვანეთ დეტალები' },
            text: {
              en: 'Paste them one by one, or use “Quick Input” - IP (or Host): 123.456.78.9 or proxy.proxied.com; Port: 8080 or 10001; Username: your proxied username; Password: your proxied password.',
              ka: 'ჩასვით თითო-თითოდ ან გამოიყენეთ „Quick Input“ - IP (ან ჰოსტი): 123.456.78.9 ან proxy.proxied.com; პორტი: 8080 ან 10001; მომხმარებლის სახელი: თქვენი proxied მომხმარებლის სახელი; პაროლი: თქვენი proxied პაროლი.',
            },
          },
          {
            title: { en: 'Check the proxy', ka: 'შეამოწმეთ პროქსი' },
            text: {
              en: 'Click “Check Proxy”. If it turns green and says “Proxy check passed”, you are ready - Multilogin sees an external (proxied.com) IP.',
              ka: 'დააწკაპუნეთ „Check Proxy“-ს. თუ მწვანედ განათდა და წერს „Proxy check passed“, მზად ხართ - Multilogin ხედავს გარე (proxied.com) IP-ს.',
            },
          },
          {
            title: { en: 'Create & launch', ka: 'შექმნა და გაშვება' },
            text: { en: 'Click “Create Profile” and launch it.', ka: 'დააწკაპუნეთ „Create Profile“-ს და გაუშვით.' },
          },
        ],
      },
      { type: 'h3', text: { en: 'Verify your fingerprint', ka: 'გადაამოწმეთ თქვენი თითის ანაბეჭედი' } },
      {
        type: 'p',
        text: {
          en: 'After setup, check that your fingerprint is running smoothly and correctly. Several tools will help you:',
          ka: 'კონფიგურაციის შემდეგ შეამოწმეთ, მუშაობს თუ არა თქვენი თითის ანაბეჭედი შეუფერხებლად და სწორად. რამდენიმე ინსტრუმენტი დაგეხმარებათ:',
        },
      },
      {
        type: 'cards',
        items: [
          {
            title: { en: 'WhoerIP', ka: 'WhoerIP' },
            text: { en: 'Check your IP and make sure it matches your intended location.', ka: 'შეამოწმეთ თქვენი IP და დარწმუნდით, რომ ის თქვენს სასურველ ლოკაციას ემთხვევა.' },
          },
          {
            title: { en: 'MaxMind', ka: 'MaxMind' },
            text: { en: 'Use for the most accurate IP geolocation details.', ka: 'გამოიყენეთ ყველაზე ზუსტი IP გეოლოკაციის დეტალებისთვის.' },
          },
          {
            title: { en: 'Pixelscan', ka: 'Pixelscan' },
            text: { en: 'Get a detailed view of your browser fingerprint.', ka: 'მიიღეთ თქვენი ბრაუზერის თითის ანაბეჭდის დეტალური ხედი.' },
          },
          {
            title: { en: 'BrowsLeaks', ka: 'BrowsLeaks' },
            text: { en: 'Spot any fingerprint inconsistencies that might expose your real identity.', ka: 'აღმოაჩინეთ თითის ანაბეჭდის შეუსაბამობები, რომლებსაც შესაძლოა თქვენი რეალური იდენტობა გაამჟღავნოს.' },
          },
        ],
      },
      {
        type: 'p',
        text: {
          en: 'Multilogin is an anti-detect browser that allows users to scrape data without getting blocked, and it offers built-in residential proxies that protect you from bans and CAPTCHAs. Worth mentioning: the Multilogin browser supports all proxy types!',
          ka: 'Multilogin არის ანტი-დეტექტ ბრაუზერი, რომელიც მომხმარებლებს საშუალებას აძლევს მონაცემების სკრეპინგს დაბლოკვის გარეშე და სთავაზობს ჩაშენებულ საცხოვრებელ პროქსებს, რომლებიც ბანებისა და CAPTCHA-ებისგან გიცავთ. აღსანიშნავია: Multilogin ბრაუზერი პროქსების ყველა ტიპს უჭერს მხარს!',
        },
      },
      { type: 'h3', text: { en: 'Incogniton setup', ka: 'Incogniton-ის კონფიგურაცია' } },
      {
        type: 'steps',
        items: [
          {
            title: { en: 'Create a profile', ka: 'შექმენით პროფილი' },
            text: { en: 'Open Incogniton and click “New Profile” at the top right.', ka: 'გახსენით Incogniton და დააწკაპუნეთ „New Profile“-ს მარჯვნივ ზემოთ.' },
          },
          {
            title: { en: 'Open Proxy Management', ka: 'გახსენით Proxy Management' },
            text: {
              en: 'On the left menu, click the Proxy tab - Proxy Management. It allows you to enter custom IPs, port numbers, and authentication fields, giving you full control over how each IP functions.',
              ka: 'მარცხენა მენიუში დააწკაპუნეთ Proxy ჩანართს - Proxy Management. ის საშუალებას გაძლევთ შეიყვანოთ მორგებული IP-ები, პორტის ნომრები და ავთენტიფიკაციის ველები - სრული კონტროლი თითოეული IP-ის ფუნქციონირებაზე.',
            },
          },
          {
            title: { en: 'Choose connection type', ka: 'აირჩიეთ კავშირის ტიპი' },
            text: {
              en: 'Under Connection Type, select the protocol provided for proxied.com - SOCKS5 proxy (or HTTP). SOCKS5 is flexible and supports advanced routing, while HTTPS is used for added data protection.',
              ka: 'Connection Type-ში აირჩიეთ proxied.com-ისთვის მოწოდებული პროტოკოლი - SOCKS5 პროქსი (ან HTTP). SOCKS5 მოქნილია და უჭერს მხარს განვითარებულ რაუტინგს, HTTPS კი დამატებითი მონაცემების დაცვისთვის გამოიყენება.',
            },
          },
          {
            title: { en: 'Enter IP / host', ka: 'შეიყვანეთ IP / ჰოსტი' },
            text: { en: 'Enter the proxy IP/host: e.g., 123.456.7.8 or proxy.proxied.com.', ka: 'შეიყვანეთ პროქსის IP/ჰოსტი: მაგ., 123.456.7.8 ან proxy.proxied.com.' },
          },
          {
            title: { en: 'Enter the port', ka: 'შეიყვანეთ პორტი' },
            text: { en: 'Proxy port: e.g., 8080 or 10001, provided from proxied.com.', ka: 'პროქსის პორტი: მაგ., 8080 ან 10001, მოწოდებული proxied.com-დან.' },
          },
          {
            title: { en: 'Enter credentials', ka: 'შეიყვანეთ მონაცემები' },
            text: { en: 'Username and password from your proxied.com dashboard.', ka: 'მომხმარებლის სახელი და პაროლი თქვენი proxied.com დაშბორდიდან.' },
          },
          {
            title: { en: 'Rotation settings', ka: 'როტაციის პარამეტრები' },
            text: {
              en: 'If your proxied.com plan has the IP Rotation feature (common with mobile proxies), make sure you check the “Rotating proxy” toggle if Incogniton asks.',
              ka: 'თუ თქვენს proxied.com გეგმას აქვს IP როტაციის ფუნქცია (ჩვეული მობილური პროქსებისთვის), დარწმუნდით, რომ მონიშნეთ „Rotating proxy“ გადამრთველი, თუ Incogniton იკითხება.',
            },
          },
          {
            title: { en: 'Check the proxy', ka: 'შეამოწმეთ პროქსი' },
            text: {
              en: 'Click “Check Proxy”. You should see a green confirmation message with the location of the proxy. If it is red, double-check your credentials or ensure the IP isn’t whitelisted incorrectly at the provider level.',
              ka: 'დააწკაპუნეთ „Check Proxy“-ს. უნდა ნახოთ მწვანე დამადასტურებელი შეტყობინება პროქსის ლოკაციით. თუ წითელია, კვლავ შეამოწმეთ თქვენი მონაცემები ან დარწმუნდით, რომ IP პროვაიდერის დონეზე არასწორად არ არის თეთრ სიაში.',
            },
          },
        ],
      },
      { type: 'h3', text: { en: 'IP rotation - 3 ways', ka: 'IP როტაცია - 3 გზა' } },
      {
        type: 'p',
        text: {
          en: 'Mobile IPs need to be refreshed, which means your IP stays clean. In Proxied, it implies a physical reset of a mobile connection - this is a feature, not a bug! IP rotation is a process where the proxy provider automatically switches your assigned IP address to a different one from their pool. You can rotate the IP on the dashboard in three ways:',
          ka: 'მობილური IP-ები განახლებას საჭიროებს, რაც ნიშნავს, რომ თქვენი IP სუფთა რჩება. Proxied-ში ეს მობილური კავშირის ფიზიკურ გადატვირთვას გულისხმობს - ეს ფუნქციაა და არა შეცდომა! IP როტაცია არის პროცესი, რომლის დროსაც პროქსი პროვაიდერი ავტომატურად ცვლის თქვენს მინიჭებულ IP მისამართს პულიდან სხვაზე. IP-ის როტაცია დაშბორდზე სამი გზით შეგიძლიათ:',
        },
      },
      {
        type: 'steps',
        items: [
          {
            title: { en: 'Manual trigger', ka: 'ხელით გაშვება' },
            text: {
              en: 'Click the “Rotate” button - manual control of the task. Users often get a “Rotation URL” (a reset link): when you click it, the modem at the provider’s end disconnects and reconnects to the cellular network, forcing the carrier to assign a fresh IP address.',
              ka: 'დააწკაპუნეთ „Rotate“ ღილაკს - ამოცანის ხელით კონტროლი. მომხმარებლები ხშირად იღებენ „Rotation URL“-ს (გადატვირთვის ბმული): როდესაც დააწკაპუნებთ, პროვაიდერის მხარეს მოდემი გათიშვება და ხელახლა დაუკავშირდება მობილურ ქსელს, რაც ოპერატორს აიძულებს ახალი IP მისამართი მიანიჭოს.',
            },
          },
          {
            title: { en: 'The API link', ka: 'API ბმული' },
            text: {
              en: 'Proxied.com provides a unique URL (e.g., https://proxied.com/api/rotate?key=123). Simply paste this link into the browser address bar and hit enter - when the page is loaded, the proxy IP will change after 10 seconds.',
              ka: 'Proxied.com გაძლევთ უნიკალურ URL-ს (მაგ., https://proxied.com/api/rotate?key=123). უბრალოდ ჩასვით ეს ბმული ბრაუზერის მისამართების ველში და დააჭირეთ Enter-ს - გვერდის ჩატვირთვის შემდეგ პროქსის IP 10 წამში შეიცვლება.',
            },
          },
          {
            title: { en: 'Rotation time', ka: 'როტაციის დრო' },
            text: {
              en: 'Tell the dashboard to rotate every 10 minutes, and the system handles it automatically. The lowest IP rotation interval starts from 1 minute - configurable in the dashboard.',
              ka: 'უთხარით დაშბორდს, რომ როტაცია ყოველ 10 წუთში მოახდინოს და სისტემა ავტომატურად გაუმკლავდება. ყველაზე დაბალი IP როტაციის ინტერვალი 1 წუთიდან იწყება - კონფიგურირებადია დაშბორდში.',
            },
          },
        ],
      },
      {
        type: 'p',
        text: {
          en: 'When you rotate an IP in proxied.com, the system sends a command to a physical 4G/5G modem. The modem disconnects from the cell tower after about 5–10 seconds and then reconnects. The time between connections is called the “dead zone.” Tools like Multilogin prevent your real IP from leaking during this gap. The mobile carriers use dynamic IP assignment - they almost always assign a new IP address to the modem upon connection, so websites like Instagram or Google see this activity as natural: like one person turning off a phone and a different person turning one on in the same city.',
          ka: 'როდესაც IP-ს proxied.com-ში ატრიალებთ, სისტემა უგზავნის ბრძანებას ფიზიკურ 4G/5G მოდემს. მოდემი თიშავს კავშირს საძირებელ ანძასთან დაახლოებით 5–10 წამში და შემდეგ ხელახლა უერთდება. კავშირებს შორის დროს „მკვდარი ზონა“ ეწოდება. Multilogin-ის მსგავსი ინსტრუმენტები თავიდან აცილებენ თქვენი რეალური IP-ის გაჟონვას ამ ხვრელში. მობილური ოპერატორები დინამიურ IP მინიჭებას იყენებენ - ისინი თითქმის ყოველთვის ანიჭებენ მოდემს ახალ IP მისამართს კავშირისას, ამიტომ Instagram ან Google ამ აქტივობას ბუნებრივად აღიქვამს: თითქოს ერთი ადამიანი თიშავს ტელეფონს და სხვა ადამიანი რთავს იმავე ქალაქში.',
        },
      },
      {
        type: 'note',
        title: { en: 'The golden rule', ka: 'ოქროს წესი' },
        text: {
          en: 'Do not configure Windows/PC proxy settings while using anti-detect browsers. Keep proxy settings inside the browser’s profile. Assigning a separate IP to each profile ensures full isolation, allowing you to manage multiple accounts without detection or interference. Do not rotate your IPs at the same time in the Proxied dashboard and in the Incogniton browser - manage the “Rotating Proxy” in one place.',
          ka: 'არ დააკონფიგურიროთ Windows/PC-ის პროქსი პარამეტრები ანტი-დეტექტ ბრაუზერების გამოყენებისას. შეინახეთ პროქსი პარამეტრები ბრაუზერის პროფილის შიგნით. თითოეული პროფილისთვის ცალკე IP-ის მინიჭება სრულ იზოლაციას უზრუნველყოფს და საშუალებას გაძლევთ მართოთ მრავალი ანგარიში გამოვლენისა თუ ჩარევის გარეშე. არ მოატრიალოთ IP-ები ერთდროულად Proxied-ის დაშბორდში და Incogniton ბრაუზერში - მართეთ „Rotating Proxy“ ერთ ადგილას.',
        },
      },
      {
        type: 'p',
        text: {
          en: 'The anti-detect browsers Incogniton / Multilogin and the VPNs WireGuard / OpenVPN, together with proxied.com, give users absolute safety - they are untraceable in the virtual world. Unlike data center proxies, proxied.com IPs have the highest trust scores, and websites see them as legitimate mobile users, making them nearly impossible to blacklist. After completing all configuration steps - from creating a profile to testing the connection - you can safely and securely use proxies for tasks like scraping, SEO monitoring, and social media management.',
          ka: 'ანტი-დეტექტ ბრაუზერები Incogniton / Multilogin და VPN-ები WireGuard / OpenVPN, proxied.com-თან ერთად, მომხმარებლებს აბსოლუტურ უსაფრთხოებას აძლევს - ისინი ვირტუალურ სამყაროში უკვალავები არიან. მონაცემთა ცენტრის პროქსებისგან განსხვავებით, proxied.com-ის IP-ებს უმაღლესი ნდობის ქულები აქვთ და ვებსაიტები მათ ლეგიტიმურ მობილურ მომხმარებლებად აღიქვამს, რაც მათ შავ სიაში მოხვედრას თითქმის შეუძლებელს ხდის. კონფიგურაციის ყველა ნაბიჯის დასრულების შემდეგ - პროფილის შექმნიდან კავშირის შემოწმებამდე - შეგიძლიათ უსაფრთხოდ გამოიყენოთ პროქსები ისეთი ამოცანებისთვის, როგორიცაა სკრეპინგი, SEO მონიტორინგი და სოციალური მედიის მართვა.',
        },
      },
    ],
  },
]
