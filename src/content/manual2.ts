import type { Chapter } from './manual'

export const chapters2: Chapter[] = [
  {
    id: 'proxy-what-why',
    num: '04',
    title: { en: 'Proxy: what & why?', ru: 'Прокси: что и зачем?', de: 'Proxy: was & warum?', es: 'Proxy: qué y por qué?', ka: 'პროქსი: რა და რატომ?' },
    blocks: [
      {
        type: 'lead',
        text: {
          en: 'The proxy is an intermediary server that sits between a user’s device (for example, your phone) and the internet.', ru: 'Прокси - это промежуточный сервер, который находится между устройством пользователя (например, вашим телефоном) и интернетом.', de: 'Ein Proxy ist ein Vermittlungsserver zwischen dem Gerät eines Nutzers (z. B. Ihrem Telefon) und dem Internet.', es: 'El proxy es un servidor intermediario que se sitúa entre el dispositivo del usuario (por ejemplo, su teléfono) e internet.',
          ka: 'პროქსი არის შუამავალი სერვერი, რომელიც მომხმარებლის მოწყობილობას (მაგალითად, თქვენს ტელეფონს) და ინტერნეტს შორის დგას.',
        },
      },
      {
        type: 'p',
        text: {
          en: 'Usually, when we use the internet on our phones, our devices connect directly to the website’s servers. With a proxy, your device talks to the proxy first, and the proxy talks to the website on your behalf. The internet sees that the proxy is talking - not your device (cellphone, laptop, or PC).', ru: 'Обычно, когда мы пользуемся интернетом на телефоне, наши устройства подключаются напрямую к серверам вебсайта. С прокси ваше устройство сначала обращается к прокси, а прокси общается с вебсайтом от вашего имени. Интернет видит, что общается прокси, - а не ваше устройство (телефон, ноутбук или ПК).', de: 'Normalerweise verbinden sich unsere Geräte beim Internetsurfen auf dem Telefon direkt mit den Servern der Website. Mit einem Proxy spricht Ihr Gerät zuerst mit dem Proxy, und der Proxy spricht in Ihrem Namen mit der Website. Das Internet sieht, dass der Proxy spricht - nicht Ihr Gerät (Handy, Laptop oder PC).', es: 'Normalmente, cuando usamos internet en el teléfono, nuestros dispositivos se conectan directamente a los servidores del sitio web. Con un proxy, tu dispositivo habla primero con el proxy, y el proxy habla con el sitio web en tu nombre. Internet ve que habla el proxy, no tu dispositivo (teléfono, portátil o PC).',
          ka: 'რიგითად, როდესაც ინტერნეტს ტელეფონით ვიყენებთ, ჩვენი მოწყობილობები პირდაპირ უერთდება ვებსაიტის სერვერებს. პროქსის შემთხვევაში, თქვენი მოწყობილობა ჯერ პროქსის ესაუბრება, პროქსი კი თქვენი სახელით ესაუბრება ვებსაიტს. ინტერნეტი ხედავს, რომ პროქსი საუბრობს - და არა თქვენი მოწყობილობა (ტელეფონი, ლეპტოპი ან კომპიუტერი).',
        },
      },
      {
        type: 'p',
        text: {
          en: 'To make it more understandable: when you want to buy a car, instead of going to the market, you send your friend (the proxy) there. Your friend asks the merchant a price, the merchant tells the friend the price, and then your friend comes back and tells you.', ru: 'Чтобы было понятнее: когда вы хотите купить машину, вместо похода на рынок вы отправляете туда друга (прокси). Ваш друг спрашивает у продавца цену, продавец называет цену другу, а затем друг возвращается и рассказывает вам.', de: 'Zum besseren Verständnis: Wenn Sie ein Auto kaufen wollen, schicken Sie statt zum Markt zu gehen Ihren Freund (den Proxy) dorthin. Ihr Freund fragt den Händler nach dem Preis, der Händler nennt dem Freund den Preis, und dann kommt Ihr Freund zurück und erzählt es Ihnen.', es: 'Para que se entienda mejor: cuando quieres comprar un coche, en lugar de ir al mercado envías a tu amigo (el proxy). Tu amigo le pregunta el precio al vendedor, el vendedor le dice el precio a tu amigo, y luego tu amigo vuelve y te lo cuenta.',
          ka: 'უფრო გასაგებად: როდესაც მანქანის ყიდვა გსურთ, ბაზარში წასვლის ნაცვლად იქ აგზავნით თქვენს მეგობარს (პროქსს). თქვენი მეგობარი ეკითხება ვაჭარს ფასს, ვაჭარი მეგობარს ეუბნება ფასს, შემდეგ მეგობარი ბრუნდება და გეუბნებათ თქვენ.',
        },
      },
      {
        type: 'note',
        title: { en: 'The result', ru: 'Результат', de: 'Das Ergebnis', es: 'El resultado', ka: 'შედეგი' },
        text: {
          en: 'You got the information you wanted, but the merchant never saw your face and does not know that you were the one asking. It is private: the website sees the proxy’s IP address, not yours.', ru: 'Вы получили нужную информацию, но продавец так и не увидел вашего лица и не знает, что именно вы спрашивали. Это конфиденциально: вебсайт видит IP-адрес прокси, а не ваш.', de: 'Sie haben die gewünschte Information erhalten, aber der Händler hat Ihr Gesicht nie gesehen und weiß nicht, dass Sie gefragt haben. Das ist privat: Die Website sieht die IP-Adresse des Proxys, nicht Ihre.', es: 'Obtuviste la información que querías, pero el vendedor nunca vio tu cara y no sabe que fuiste tú quien preguntó. Es privado: el sitio web ve la dirección IP del proxy, no la tuya.',
          ka: 'თქვენ მიიღეთ სასურველი ინფორმაცია, მაგრამ ვაჭარმა თქვენი სახე არასდროს იხილა და არ იცის, რომ ზუსტად თქვენ გეკითხებოდით. ეს კონფიდენციალურია: ვებსაიტი ხედავს პროქსის IP მისამართს და არა თქვენსას.',
        },
      },
    ],
  },
  {
    id: 'vpn-vs-proxy',
    num: '05',
    title: {
      en: 'VPN: key concepts & how it differs from a proxy', ru: 'VPN: ключевые понятия и чем отличается от прокси', de: 'VPN: Schlüsselkonzepte & Unterschied zum Proxy', es: 'VPN: conceptos clave y en qué se diferencia de un proxy',
      ka: 'VPN: ძირითადი ცნებები და განსხვავება პროქსისგან',
    },
    blocks: [
      {
        type: 'p',
        text: {
          en: 'When we talk about proxies and proxy servers, people get confused. The first question is always whether the proxy is a VPN and what makes it different. The function of both products is to circumvent the blocks and firewalls imposed by different governments or corporations. Both tools act as intermediaries between your device and the internet, but they differ in scope, security, and how they handle user data.', ru: 'Когда мы говорим о прокси и прокси-серверах, люди путаются. Первый вопрос всегда один: является ли прокси VPN и чем он отличается. Функция обоих продуктов - обход блокировок и файрволов, установленных разными правительствами или корпорациями. Оба инструмента выступают посредниками между вашим устройством и интернетом, но отличаются масштабом, безопасностью и тем, как они обрабатывают пользовательские данные.', de: 'Wenn wir über Proxys und Proxy-Server sprechen, werden Menschen verwirrt. Die erste Frage ist immer, ob ein Proxy ein VPN ist und worin der Unterschied liegt. Die Funktion beider Produkte ist es, Blockaden und Firewalls verschiedener Regierungen oder Konzerne zu umgehen. Beide Tools agieren als Vermittler zwischen Ihrem Gerät und dem Internet, unterscheiden sich aber in Umfang, Sicherheit und im Umgang mit Nutzerdaten.', es: 'Cuando hablamos de proxies y servidores proxy, la gente se confunde. La primera pregunta siempre es si el proxy es una VPN y en qué se diferencia. La función de ambos productos es sortear los bloqueos y firewalls impuestos por distintos gobiernos o corporaciones. Ambas herramientas actúan como intermediarias entre tu dispositivo e internet, pero difieren en alcance, seguridad y en cómo manejan los datos del usuario.',
          ka: 'როდესაც პროქსებსა და პროქსი სერვერებზე ვსაუბრობთ, ადამიანები ბნელდებიან. პირველი კითხვა ყოველთვის არის - არის თუ არა პროქსი VPN და რით განსხვავდება. ორივე პროდუქტის ფუნქციაა სხვადასხვა მთავრობების ან კორპორაციების მიერ დაწესებული ბლოკირებებისა და ფაერვოლების გვერდის ავლა. ორივე ინსტრუმენტი შუამავლის როლს ასრულებს თქვენს მოწყობილობასა და ინტერნეტს შორის, მაგრამ განსხვავდება მასშტაბით, უსაფრთხოებითა და მონაცემების დამუშავების წესით.',
        },
      },
      {
        type: 'p',
        text: {
          en: 'They have two common features: users can change their IP address using both VPNs and proxies, and both allow them to connect to the internet from different locations. However, the ways they are managed and the levels of encryption on both sides are different.', ru: 'У них две общие черты: пользователи могут менять свой IP-адрес и с помощью VPN, и с помощью прокси, и оба позволяют подключаться к интернету из разных локаций. Однако способы управления и уровни шифрования у них разные.', de: 'Sie haben zwei gemeinsame Merkmale: Nutzer können ihre IP-Adresse sowohl mit VPNs als auch mit Proxys ändern, und beide ermöglichen den Internetzugang von verschiedenen Standorten. Die Verwaltungsweisen und Verschlüsselungsniveaus unterscheiden sich jedoch.', es: 'Tienen dos características comunes: los usuarios pueden cambiar su dirección IP tanto con VPN como con proxies, y ambos permiten conectarse a internet desde diferentes ubicaciones. Sin embargo, las formas de gestión y los niveles de cifrado son diferentes.',
          ka: 'მათ ორი საერთო თვისება აქვთ: მომხმარებლებს შეუძლიათ IP მისამართის შეცვლა როგორც VPN-ით, ისე პროქსით, და ორივე საშუალებას აძლევს ინტერნეტთან სხვადასხვა ლოკაციიდან დაკავშირებას. თუმცა, მათი მართვის წესები და შიფრაციის დონეები განსხვავებულია.',
        },
      },
      { type: 'h3', text: { en: 'VPN (Virtual Private Network)', ru: 'VPN (виртуальная частная сеть)', de: 'VPN (Virtuelles Privates Netzwerk)', es: 'VPN (Red Privada Virtual)', ka: 'VPN (ვირტუალური პირადი ქსელი)' } },
      {
        type: 'p',
        text: {
          en: 'To use a VPN, you first need to register for a VPN server and install software on your device. VPN provider server locations are in different areas, allowing users to choose the desired location. After the connection is established, signals are routed at the system level, and all applications connect through the VPN server - web browsers, games, BitTorrent, and even app updates.', ru: 'Чтобы использовать VPN, сначала нужно зарегистрироваться на VPN-сервере и установить программу на устройство. Серверы VPN-провайдера расположены в разных регионах, что позволяет пользователю выбрать нужную локацию. После установки соединения сигналы маршрутизируются на системном уровне, и все приложения подключаются через VPN-сервер - браузеры, игры, BitTorrent и даже обновления приложений.', de: 'Um ein VPN zu nutzen, müssen Sie sich zuerst bei einem VPN-Server registrieren und Software auf Ihrem Gerät installieren. Die Serverstandorte des VPN-Anbieters liegen in verschiedenen Regionen, sodass Nutzer den gewünschten Standort wählen können. Nach Verbindungsaufbau werden die Signale auf Systemebene geroutet, und alle Anwendungen verbinden sich über den VPN-Server - Webbrowser, Spiele, BitTorrent und sogar App-Updates.', es: 'Para usar una VPN, primero necesitas registrarte en un servidor VPN e instalar software en tu dispositivo. Las ubicaciones de los servidores del proveedor VPN están en diferentes regiones, lo que permite al usuario elegir la ubicación deseada. Una vez establecida la conexión, las señales se enrutan a nivel del sistema y todas las aplicaciones se conectan a través del servidor VPN: navegadores, juegos, BitTorrent e incluso las actualizaciones de apps.',
          ka: 'VPN-ის გამოსაყენებლად ჯერ უნდა დარეგისტრირდეთ VPN სერვერზე და დააინსტალიროთ პროგრამა თქვენს მოწყობილობაზე. VPN პროვაიდერის სერვერები სხვადასხვა რეგიონშია განთავსებული, რაც მომხმარებელს სასურველი ლოკაციის არჩევის საშუალებას აძლევს. კავშირის დამყარების შემდეგ, სიგნალები სისტემურ დონეზე მარშრუტდება და ყველა აპლიკაცია VPN სერვერით უერთდება - ბრაუზერები, თამაშები, BitTorrent და აპლიკაციების განახლებებიც კი.',
        },
      },
      {
        type: 'p',
        text: {
          en: 'A VPN creates a secure tunnel between your device and the internet; all data transferred between your device and the VPN server is encrypted. Hence, your browsing information and IP address are hidden from the government, Internet Service Providers (ISPs), and possible attackers (hackers).', ru: 'VPN создаёт защищённый туннель между вашим устройством и интернетом; все данные, передаваемые между устройством и VPN-сервером, зашифрованы. Поэтому информация о вашем браузинге и IP-адрес скрыты от правительства, интернет-провайдеров (ISP) и возможных злоумышленников (хакеров).', de: 'Ein VPN erstellt einen sicheren Tunnel zwischen Ihrem Gerät und dem Internet; alle Daten, die zwischen Ihrem Gerät und dem VPN-Server übertragen werden, sind verschlüsselt. Daher sind Ihre Surf-Informationen und IP-Adresse vor der Regierung, Internetdienstanbietern (ISPs) und möglichen Angreifern (Hackern) verborgen.', es: 'Una VPN crea un túnel seguro entre tu dispositivo e internet; todos los datos transferidos entre tu dispositivo y el servidor VPN están cifrados. Por lo tanto, tu información de navegación y tu dirección IP quedan ocultas al gobierno, a los proveedores de servicios de internet (ISP) y a posibles atacantes (hackers).',
          ka: 'VPN ქმნის უსაფრთხო გვირაბს თქვენს მოწყობილობასა და ინტერნეტს შორის; ყველა მონაცემი, რომელიც თქვენს მოწყობილობასა და VPN სერვერს შორის გადადის, დაშიფრულია. შესაბამისად, თქვენი ბრაუზინგის ინფორმაცია და IP მისამართი დამალულია მთავრობის, ინტერნეტ პროვაიდერებისა (ISP) და პოტენციური ჰაკერებისგან.',
        },
      },
      { type: 'h3', text: { en: 'Proxy', ru: 'Прокси', de: 'Proxy', es: 'Proxy', ka: 'პროქსი' } },
      {
        type: 'p',
        text: {
          en: 'A proxy is a middleman between the browser and the website. When you access a website, a request connection is sent from your ISP to the website - in this process, your IP is visible. While using a proxy, the request goes through your Internet Service Provider to the proxy and then to the website. In this case, your IP is hidden, and your host server IP is visible to the whole world.', ru: 'Прокси - это посредник между браузером и вебсайтом. Когда вы заходите на сайт, запрос отправляется от вашего провайдера к вебсайту - в этом процессе ваш IP виден. При использовании прокси запрос идёт от интернет-провайдера к прокси, а затем к вебсайту. В этом случае ваш IP скрыт, а IP прокси-сервера виден всему миру.', de: 'Ein Proxy ist ein Vermittler zwischen Browser und Website. Wenn Sie eine Website aufrufen, wird eine Anfrage von Ihrem ISP an die Website gesendet - dabei ist Ihre IP sichtbar. Bei der Nutzung eines Proxys geht die Anfrage von Ihrem Internetdienstanbieter an den Proxy und dann an die Website. In diesem Fall ist Ihre IP verborgen, und die IP des Proxy-Servers ist für die ganze Welt sichtbar.', es: 'Un proxy es un intermediario entre el navegador y el sitio web. Cuando accedes a un sitio web, la solicitud se envía desde tu ISP al sitio web; en este proceso tu IP es visible. Al usar un proxy, la solicitud va de tu proveedor de internet al proxy y luego al sitio web. En este caso tu IP queda oculta y la IP del servidor proxy es visible para todo el mundo.',
          ka: 'პროქსი არის შუამავალი ბრაუზერსა და ვებსაიტს შორის. როდესაც ვებსაიტზე შედიხართ, მოთხოვნა თქვენი ISP-დან ვებსაიტისკენ გადის - ამ პროცესში თქვენი IP ხილულია. პროქსის გამოყენებისას მოთხოვნა ჯერ თქვენი ინტერნეტ პროვაიდერიდან პროქსიზე, შემდეგ კი ვებსაიტზე გადადის. ამ შემთხვევაში თქვენი IP დამალულია და მთელი მსოფლიოსთვის პროქსი სერვერის IP არის ხილული.',
        },
      },
      {
        type: 'p',
        text: {
          en: 'For the configuration of the proxy server, you need a specific web browser (Incogniton / Multilogin). A proxy hides your IP; the traffic between your device and the proxy server is not encrypted.', ru: 'Для настройки прокси-сервера нужен специальный браузер (Incogniton / Multilogin). Прокси скрывает ваш IP; трафик между вашим устройством и прокси-сервером не шифруется.', de: 'Für die Konfiguration des Proxy-Servers benötigen Sie einen speziellen Browser (Incogniton / Multilogin). Ein Proxy verbirgt Ihre IP; der Traffic zwischen Ihrem Gerät und dem Proxy-Server ist nicht verschlüsselt.', es: 'Para la configuración del servidor proxy se necesita un navegador específico (Incogniton / Multilogin). Un proxy oculta tu IP; el tráfico entre tu dispositivo y el servidor proxy no está cifrado.',
          ka: 'პროქსი სერვერის კონფიგურაციისთვის საჭიროა კონკრეტული ვებბრაუზერი (Incogniton / Multilogin). პროქსი მალავს თქვენს IP-ს; ტრაფიკი თქვენს მოწყობილობასა და პროქსი სერვერს შორის დაშიფრული არ არის.',
        },
      },
      {
        type: 'table',
        head: [
          { en: 'VPN', ru: 'VPN', de: 'VPN', es: 'VPN', ka: 'VPN' },
          { en: 'Proxy', ru: 'Прокси', de: 'Proxy', es: 'Proxy', ka: 'პროქსი' },
        ],
        rows: [
          [
            { en: 'Encrypts the whole internet connection', ru: 'Шифрует всё интернет-соединение', de: 'Verschlüsselt die gesamte Internetverbindung', es: 'Cifra toda la conexión a internet', ka: 'აშიფრავს მთელ ინტერნეტ კავშირს' },
            { en: 'Must be configured for each app (e.g. Chrome, BitTorrent)', ru: 'Нужно настраивать для каждого приложения отдельно (например, Chrome, BitTorrent)', de: 'Muss für jede App einzeln konfiguriert werden (z. B. Chrome, BitTorrent)', es: 'Debe configurarse para cada aplicación (p. ej., Chrome, BitTorrent)', ka: 'თითოეული აპლიკაციისთვის ცალკე უნდა კონფიგურირდეს (მაგ., Chrome, BitTorrent)' },
          ],
          [
            { en: 'Changes your IP', ru: 'Меняет ваш IP', de: 'Ändert Ihre IP', es: 'Cambia tu IP', ka: 'ცვლის თქვენს IP-ს' },
            { en: 'Changes your IP', ru: 'Меняет ваш IP', de: 'Ändert Ihre IP', es: 'Cambia tu IP', ka: 'ცვლის თქვენს IP-ს' },
          ],
          [
            { en: 'Has its own software', ru: 'Имеет собственное ПО', de: 'Hat eigene Software', es: 'Tiene su propio software', ka: 'აქვს საკუთარი პროგრამა' },
            { en: 'Doesn’t have its own software', ru: 'Не имеет собственного ПО', de: 'Hat keine eigene Software', es: 'No tiene software propio', ka: 'არ აქვს საკუთარი პროგრამა' },
          ],
          [
            { en: 'Encrypts the data being transferred', ru: 'Шифрует передаваемые данные', de: 'Verschlüsselt die übertragenen Daten', es: 'Cifra los datos transferidos', ka: 'აშიფრავს გადასაცემ მონაცემებს' },
            { en: 'Doesn’t encrypt the data being transferred', ru: 'Не шифрует передаваемые данные', de: 'Verschlüsselt die übertragenen Daten nicht', es: 'No cifra los datos transferidos', ka: 'არ აშიფრავს გადასაცემ მონაცემებს' },
          ],
          [
            { en: 'Slower than a proxy', ru: 'Медленнее прокси', de: 'Langsamer als ein Proxy', es: 'Más lento que un proxy', ka: 'პროქსიზე ნელია' },
            { en: 'Faster than a VPN', ru: 'Быстрее VPN', de: 'Schneller als ein VPN', es: 'Más rápido que una VPN', ka: 'VPN-ზე სწრაფია' },
          ],
          [
            { en: 'More costly than a proxy', ru: 'Дороже прокси', de: 'Teurer als ein Proxy', es: 'Más caro que un proxy', ka: 'პროქსიზე ძვირია' },
            { en: 'Cheaper than a VPN', ru: 'Дешевле VPN', de: 'Günstiger als ein VPN', es: 'Más barato que una VPN', ka: 'VPN-ზე იაფია' },
          ],
        ],
      },
      {
        type: 'note',
        title: { en: 'Check your local laws', ru: 'Проверьте местные законы', de: 'Prüfen Sie die lokalen Gesetze', es: 'Consulta las leyes locales', ka: 'შეამოწმეთ ადგილობრივი კანონები' },
        text: {
          en: 'Make sure to check the laws and regulations in your country regarding VPNs. In some locations there are stringent regulations - in Belarus, Iran, Turkmenistan, Iraq, and China, using a VPN is heavily restricted, and in North Korea and Belarus, VPN users can face jail.', ru: 'Обязательно проверьте законы и правила вашей страны относительно VPN. В некоторых местах действуют строгие ограничения - в Беларуси, Иране, Туркменистане, Ираке и Китае использование VPN сильно ограничено, а в Северной Корее и Беларуси пользователи VPN могут столкнуться с тюремным заключением.', de: 'Prüfen Sie unbedingt die Gesetze und Vorschriften Ihres Landes bezüglich VPNs. An manchen Orten gibt es strenge Regulierungen - in Belarus, dem Iran, Turkmenistan, dem Irak und China ist die VPN-Nutzung stark eingeschränkt, und in Nordkorea und Belarus drohen VPN-Nutzern Haftstrafen.', es: 'Asegúrate de consultar las leyes y normativas de tu país respecto a las VPN. En algunos lugares hay regulaciones estrictas: en Bielorrusia, Irán, Turkmenistán, Irak y China el uso de VPN está fuertemente restringido, y en Corea del Norte y Bielorrusia los usuarios de VPN pueden enfrentar prisión.',
          ka: 'აუცილებლად შეამოწმეთ თქვენი ქვეყნის კანონები და რეგულაციები VPN-ებთან დაკავშირებით. ზოგიერთ ადგილას მკაცრი რეგულაციებია - ბელარუსში, ირანში, თურქმენეთში, ერაყსა და ჩინეთში VPN-ის გამოყენება მკაცრად არის შეზღუდული, ხოლო ჩრდილოეთ კორეასა და ბელარუსში VPN მომხმარებლებს პატიმრობა ემუქრებათ.',
        },
      },
      { type: 'h3', text: { en: 'Deep Packet Inspection (DPI)', ru: 'Глубокая аналитика пакетов (DPI)', de: 'Deep Packet Inspection (DPI)', es: 'Inspección Profunda de Paquetes (DPI)', ka: 'პაკეტების ღრმა ინსპექცია (DPI)' } },
      {
        type: 'p',
        text: {
          en: 'Blocking VPN servers serves two different goals: for authoritarian regimes it is associated with free speech suppression, while the other side is the protection of the state’s economy, security, and defence secrets. The technique used by governments is called Deep Packet Inspection (DPI). A date on the internet is a “packet”; these packets include crucial information - data traffic, source, content, destination. DPI meticulously analyzes the particulars embedded in the packet to identify the IP address and port numbers, helping governments find and filter undesirable information, including VPN servers.', ru: 'Блокировка VPN-серверов служит двум разным целям: для авторитарных режимов это связано с подавлением свободы слова, а другая сторона - защита экономики, безопасности и оборонных тайн государства. Техника, которую используют правительства, называется глубокой аналитикой пакетов (DPI). Данные в интернете - это «пакеты»; эти пакеты содержат важнейшую информацию - трафик, источник, содержимое, назначение. DPI дотошно анализирует детали, зашитые в пакете, чтобы определить IP-адрес и номера портов, помогая правительствам находить и фильтровать нежелательную информацию, включая VPN-серверы.', de: 'Die Blockierung von VPN-Servern dient zwei verschiedenen Zielen: Für autoritäre Regime hängt sie mit der Unterdrückung der Meinungsfreiheit zusammen, die andere Seite ist der Schutz von Wirtschaft, Sicherheit und Verteidigungsgeheimnissen des Staates. Die von Regierungen eingesetzte Technik heißt Deep Packet Inspection (DPI). Daten im Internet sind «Pakete»; diese Pakete enthalten entscheidende Informationen - Traffic, Quelle, Inhalt, Ziel. DPI analysiert akribisch die im Paket eingebetteten Details, um IP-Adresse und Portnummern zu identifizieren, und hilft Regierungen, unerwünschte Informationen einschließlich VPN-Server zu finden und zu filtern.', es: 'Bloquear servidores VPN sirve para dos objetivos diferentes: para los regímenes autoritarios está asociado con la supresión de la libertad de expresión, mientras que el otro lado es la protección de la economía, la seguridad y los secretos de defensa del Estado. La técnica que usan los gobiernos se llama Inspección Profunda de Paquetes (DPI). Los datos en internet son «paquetes»; estos paquetes incluyen información crucial: tráfico, origen, contenido, destino. El DPI analiza meticulosamente los detalles incrustados en el paquete para identificar la dirección IP y los números de puerto, ayudando a los gobiernos a encontrar y filtrar información no deseada, incluidos los servidores VPN.',
          ka: 'VPN სერვერების ბლოკირება ორ განსხვავებულ მიზანს ემსახურება: ავტორიტარული რეჟიმებისთვის ეს სიტყვის თავისუფლების ჩახშობას უკავშირდება, მეორე მხარე კი სახელმწიფოს ეკონომიკის, უსაფრთხოებისა და თავდაცვის საიდუმლოებების დაცვაა. მთავრობების მიერ გამოყენებულ ტექნიკას ეწოდება პაკეტების ღრმა ინსპექცია (DPI). ინტერნეტში მონაცემი არის „პაკეტი“; ეს პაკეტები შეიცავს გადამწყვეტ ინფორმაციას - ტრაფიკს, წყაროს, შიგთავსს, დანიშნულებას. DPI წარმტაცად აანალიზებს პაკეტში ჩაშენებულ დეტალებს IP მისამართისა და პორტის ნომრების იდენტიფიკაციისთვის, რაც მთავრობებს ეხმარება არასასურველი ინფორმაციის, მათ შორის VPN სერვერების პოვნასა და ფილტრაციაში.',
        },
      },
      {
        type: 'p',
        text: {
          en: 'DPI technology allows ISPs to intercept their users’ comprehensive online activities, such as browsing histories, emails, and downloads - given the absence of encryption in a substantial portion of internet traffic. This has grave implications for internet users because of data disclosure and the questioning of privacy.', ru: 'Технология DPI позволяет провайдерам перехватывать всю онлайн-активность пользователей: историю браузинга, электронную почту и загрузки - учитывая отсутствие шифрования в значительной части интернет-трафика. Это имеет серьёзные последствия для пользователей из-за разглашения данных и подрыва приватности.', de: 'Die DPI-Technologie ermöglicht es ISPs, die umfassenden Online-Aktivitäten ihrer Nutzer abzufangen, wie Browserverläufe, E-Mails und Downloads - angesichts fehlender Verschlüsselung in einem erheblichen Teil des Internet-Traffics. Das hat gravierende Folgen für Internetnutzer durch Datenoffenlegung und die Verletzung der Privatsphäre.', es: 'La tecnología DPI permite a los ISP interceptar las actividades en línea completas de sus usuarios, como historiales de navegación, correos electrónicos y descargas, dada la ausencia de cifrado en una parte sustancial del tráfico de internet. Esto tiene graves implicaciones para los usuarios por la revelación de datos y la vulneración de la privacidad.',
          ka: 'DPI ტექნოლოგია საშუალებას აძლევს ISP-ებს შეაჩერონ მომხმარებლების ყოვლისმომცველი ონლაინ აქტივობა - ბრაუზინგის ისტორია, ელფოსტა და ჩამოტვირთვები - ინტერნეტ ტრაფიკის მნიშვნელოვანი ნაწილის შიფრაციის არარსებობის გამო. ამას სერიოზული შედეგები აქვს მომხმარებლებისთვის მონაცემების გამჟღავნებისა და კონფიდენციალურობის თვალსაზრისით.',
        },
      },
    ],
  },
  {
    id: 'proxy-pool',
    num: '06',
    title: { en: 'What is a proxy pool?', ru: 'Что такое пул прокси?', de: 'Was ist ein Proxy-Pool?', es: '¿Qué es un pool de proxies?', ka: 'რა არის პროქსი პული?' },
    blocks: [
      {
        type: 'lead',
        text: {
          en: 'A proxy pool is a large collection of different IP addresses that acts as a reservoir for your internet traffic.', ru: 'Пул прокси - это большая коллекция разных IP-адресов, которая служит резервуаром для вашего интернет-трафика.', de: 'Ein Proxy-Pool ist eine große Sammlung verschiedener IP-Adressen, die als Reservoir für Ihren Internet-Traffic dient.', es: 'Un pool de proxies es una gran colección de direcciones IP diferentes que actúa como un reservorio para tu tráfico de internet.',
          ka: 'პროქსი პული არის სხვადასხვა IP მისამართების დიდი კოლექცია, რომელიც თქვენი ინტერნეტ ტრაფიკის რეზერვუარის როლს ასრულებს.',
        },
      },
      {
        type: 'p',
        text: {
          en: 'Instead of using just one intermediary server, you have thousands (or even millions) of them at your disposal. Imagine you have a large bag of different “digital disguises” or masks. Every time you go to a website, you reach into the bag and pull out a new mask - making it look like you are a completely different person from a different part of the world.', ru: 'Вместо одного промежуточного сервера у вас в распоряжении тысячи (или даже миллионы) серверов. Представьте, что у вас большая сумка с разными «цифровыми масками». Каждый раз, заходя на сайт, вы залезаете в сумку и достаёте новую маску - создавая видимость, что вы совершенно другой человек из другой части света.', de: 'Anstelle eines einzigen Vermittlungsservers haben Sie Tausende (oder sogar Millionen) zur Verfügung. Stellen Sie sich eine große Tasche mit verschiedenen «digitalen Masken» vor. Jedes Mal, wenn Sie eine Website besuchen, greifen Sie in die Tasche und ziehen eine neue Maske heraus - es sieht so aus, als wären Sie eine völlig andere Person aus einem anderen Teil der Welt.', es: 'En lugar de usar un solo servidor intermediario, tienes miles (o incluso millones) a tu disposición. Imagina que tienes una bolsa grande de «disfrazes digitales» diferentes. Cada vez que vas a un sitio web, metes la mano en la bolsa y sacas una máscara nueva: parece que eres una persona completamente distinta de otra parte del mundo.',
          ka: 'ერთი შუამავალი სერვერის ნაცვლად, თქვენს განკარგულებაშია ათასობით (ან მილიონობით) მათგანი. წარმოიდგინეთ, რომ გაქვთ დიდი ჩანთა სხვადასხვა „ციფრული ნიღბით“. ყოველ ჯერზე, როდესაც ვებსაიტზე შედიხართ, ჩანთაში ხელს ყოფთ და ახალ ნიღაბს იღებთ - გამოიყურებით ისე, თითქოს სრულიად სხვა ადამიანი ხართ მსოფლიოს სხვა ნაწილიდან.',
        },
      },
      {
        type: 'p',
        text: {
          en: 'In a proxy pool, you don’t manually switch between 500 different IPs. Instead, you connect to a single entry point. When you send a request, the system automatically picks an available IP from the pool. Depending on your settings, the proxy pool can give you a new IP for every single request or keep you on the same IP for a few minutes. As a result, the hosting website sees your request from the proxy IP, not from your home IP.', ru: 'В пуле прокси вы не переключаете вручную между 500 разными IP. Вместо этого вы подключаетесь к одной точке входа. Когда вы отправляете запрос, система автоматически выбирает доступный IP из пула. В зависимости от настроек пул может выдавать вам новый IP для каждого запроса или удерживать один IP несколько минут. В результате сайт видит ваш запрос с прокси-IP, а не с вашего домашнего IP.', de: 'In einem Proxy-Pool schalten Sie nicht manuell zwischen 500 verschiedenen IPs um. Stattdessen verbinden Sie sich mit einem einzigen Einstiegspunkt. Wenn Sie eine Anfrage senden, wählt das System automatisch eine verfügbare IP aus dem Pool. Je nach Einstellung kann der Proxy-Pool Ihnen für jede Anfrage eine neue IP geben oder Sie einige Minuten auf derselben IP halten. Dadurch sieht die Website Ihre Anfrage von der Proxy-IP, nicht von Ihrer Heim-IP.', es: 'En un pool de proxies no cambias manualmente entre 500 IP diferentes. En su lugar, te conectas a un único punto de entrada. Cuando envías una solicitud, el sistema elige automáticamente una IP disponible del pool. Según tu configuración, el pool puede darte una IP nueva por cada solicitud o mantenerte en la misma IP unos minutos. Como resultado, el sitio ve tu solicitud desde la IP del proxy, no desde tu IP doméstica.',
          ka: 'პროქსი პულში თქვენ ხელით არ გადართავთ 500 სხვადასხვა IP-ს შორის. ამის ნაცვლად, ერთ შესასვლელ წერტილთან უერთდებით. მოთხოვნის გაგზავნისას სისტემა ავტომატურად ირჩევს ხელმისაწვდომ IP-ს პულიდან. თქვენი პარამეტრების მიხედვით, პროქსი პული შეიძლება მოგცეთ ახალი IP ყოველი მოთხოვნისთვის ან იგივე IP-ზე დაგტოვოთ რამდენიმე წუთით. შედეგად, მასპინძელი ვებსაიტი ხედავს თქვენს მოთხოვნას პროქსი IP-დან და არა თქვენი საშინაო IP-დან.',
        },
      },
      { type: 'h3', text: { en: 'What can you use a proxy pool for?', ru: 'Для чего можно использовать пул прокси?', de: 'Wofür kann man einen Proxy-Pool verwenden?', es: '¿Para qué puedes usar un pool de proxies?', ka: 'რისთვის გამოიყენება პროქსი პული?' } },
      {
        type: 'cards',
        items: [
          {
            title: { en: 'Web scraping', ru: 'Веб-скрапинг', de: 'Web-Scraping', es: 'Web scraping', ka: 'ვებსკრეპინგი' },
            text: {
              en: 'Collecting data from a website with no chances of being blocked.', ru: 'Сбор данных с вебсайта без шансов быть заблокированным.', de: 'Daten von einer Website sammeln, ohne blockiert werden zu können.', es: 'Recopilar datos de un sitio web sin riesgo de bloqueo.',
              ka: 'მონაცემების შეგროვება ვებსაიტიდან დაბლოკვის რისკის გარეშე.',
            },
          },
          {
            title: { en: 'Price & competitor monitoring', ru: 'Мониторинг цен и конкурентов', de: 'Preis- & Wettbewerbsmonitoring', es: 'Monitorización de precios y competidores', ka: 'ფასებისა და კონკურენტების მონიტორინგი' },
            text: {
              en: 'Running periodic checks on market products and service pricing.', ru: 'Периодическая проверка цен на продукты и услуги рынка.', de: 'Regelmäßige Prüfung der Preise von Marktprodukten und Dienstleistungen.', es: 'Realización de comprobaciones periódicas de precios de productos y servicios del mercado.',
              ka: 'ბაზრის პროდუქტებისა და სერვისების ფასების პერიოდული შემოწმება.',
            },
          },
          {
            title: { en: 'Marketplace operations', ru: 'Операции на маркетплейсах', de: 'Marktplatz-Operationen', es: 'Operaciones en mercados', ka: 'მარკეტპლეისის ოპერაციები' },
            text: {
              en: 'Operating multiple accounts and IPs for a single service.', ru: 'Управление несколькими аккаунтами и IP для одного сервиса.', de: 'Verwaltung mehrerer Konten und IPs für einen einzigen Dienst.', es: 'Gestión de múltiples cuentas e IPs para un solo servicio.',
              ka: 'მრავალი ანგარიშისა და IP-ის მართვა ერთი სერვისისთვის.',
            },
          },
          {
            title: { en: 'Web-service testing', ru: 'Тестирование веб-сервисов', de: 'Testen von Webdiensten', es: 'Pruebas de servicios web', ka: 'ვებსერვისის ტესტირება' },
            text: {
              en: 'Making requests from multiple IPs for a single service to determine the strength of the system.', ru: 'Отправка запросов с нескольких IP к одному сервису для определения устойчивости системы.', de: 'Anfragen von mehreren IPs an einen Dienst, um die Belastbarkeit des Systems zu prüfen.', es: 'Envío de solicitudes desde múltiples IP a un solo servicio para determinar la solidez del sistema.',
              ka: 'მოთხოვნების გაგზავნა მრავალი IP-დან ერთი სერვისისთვის, სისტემის გამძლეობის დასადგენად.',
            },
          },
          {
            title: { en: 'Marketing & social media', ru: 'Маркетинг и соцсети', de: 'Marketing & soziale Medien', es: 'Marketing y redes sociales', ka: 'მარკეტინგი და სოციალური მედია' },
            text: {
              en: 'Automating activity on social networks with zero-tolerance policies without getting locked out.', ru: 'Автоматизация активности в соцсетях с политикой нулевой терпимости без блокировок.', de: 'Automatisierung der Aktivität in sozialen Netzwerken mit Null-Toleranz-Richtlinien, ohne gesperrt zu werden.', es: 'Automatización de la actividad en redes sociales con políticas de tolerancia cero sin que te bloqueen.',
              ka: 'აქტივობის ავტომატიზაცია სოციალურ ქსელებში ნულოვანი ტოლერანტობის პოლიტიკის პირობებში - დაბლოკვის გარეშე.',
            },
          },
        ],
      },
      {
        type: 'p',
        text: {
          en: 'We need a proxy pool to bypass IP bans and rate limits. Most websites use rate limits to prevent bots from overwhelming their servers. If you send 1,000 requests per minute from a single IP, the website will flag you as a bot and block your IP address. With a proxy pool, we can spread those 1,000 requests across 1,000 different IPs - on the website it looks like 1,000 different people visiting once each, bypassing the security triggers.', ru: 'Нам нужен пул прокси, чтобы обходить IP-баны и рейт-лимиты. Большинство сайтов используют рейт-лимиты, чтобы боты не перегружали их серверы. Если вы отправляете 1,000 запросов в минуту с одного IP, сайт пометит вас как бота и заблокирует ваш адрес. С пулом прокси мы можем распределить эти 1,000 запросов по 1,000 разных IP - для сайта это выглядит как 1,000 разных людей, зашедших один раз, что обходит триггеры безопасности.', de: 'Wir brauchen einen Proxy-Pool, um IP-Sperren und Rate-Limits zu umgehen. Die meisten Websites nutzen Rate-Limits, damit Bots ihre Server nicht überlasten. Wenn Sie 1.000 Anfragen pro Minute von einer einzigen IP senden, markiert die Website Sie als Bot und sperrt Ihre Adresse. Mit einem Proxy-Pool können wir diese 1.000 Anfragen auf 1.000 verschiedene IPs verteilen - für die Website sieht es aus wie 1.000 verschiedene Personen, die jeweils einmal vorbeischauen, und die Sicherheitsauslöser werden umgangen.', es: 'Necesitamos un pool de proxies para evitar bloqueos de IP y límites de tasa. La mayoría de los sitios web usan límites de tasa para evitar que los bots saturen sus servidores. Si envías 1,000 solicitudes por minuto desde una sola IP, el sitio te marcará como bot y bloqueará tu dirección. Con un pool de proxies podemos repartir esas 1,000 solicitudes entre 1,000 IP diferentes: para el sitio parece que 1,000 personas distintas visitan una vez cada una, sorteando los disparadores de seguridad.',
          ka: 'პროქსი პული საჭიროა IP ბანებისა და რეით-ლიმიტების გვერდის ასავლელად. ვებსაიტების უმეტესობა იყენებს რეით-ლიმიტებს, რათა ბოტებმა სერვერები არ გადატვირთონ. თუ ერთი IP-დან წუთში 1,000 მოთხოვნას გაგზავნით, ვებსაიტი ბოტად მოგნიშნავთ და დააბლოკავს თქვენს IP-ს. პროქსი პულით ჩვენ შეგვიძლია ეს 1,000 მოთხოვნა 1,000 სხვადასხვა IP-ზე გავანაწილოთ - ვებსაიტისთვის ეს 1,000 სხვადასხვა ადამიანის ერთჯერადი ვიზიტის ტოლია, რაც უსაფრთხოების ტრიგერებს უვლის გვერდს.',
        },
      },
      {
        type: 'p',
        text: {
          en: 'Rotation is a pillar of the pool system - a constant process of IP switching. When a proxy rotates its IP address, internet systems see that as normal human behavior. Unlike our competitors, proxied.com has independent 4G and 5G mobile connections. Our users can browse different locations (USA, UK, Germany, etc.), discover network types, and pricing.', ru: 'Ротация - столп системы пула - постоянный процесс смены IP. Когда прокси меняет свой IP-адрес, интернет-системы воспринимают это как нормальное человеческое поведение. В отличие от конкурентов, у proxied.com независимые мобильные подключения 4G и 5G. Наши пользователи могут просматривать разные локации (США, Великобритания, Германия и др.), знакомиться с типами сетей и ценами.', de: 'Rotation ist der Pfeiler des Pool-Systems - ein ständiger Prozess des IP-Wechsels. Wenn ein Proxy seine IP-Adresse wechselt, sehen Internet-Systeme das als normales menschliches Verhalten. Anders als unsere Konkurrenten hat proxied.com unabhängige 4G- und 5G-Mobilfunkverbindungen. Unsere Nutzer können verschiedene Standorte durchsuchen (USA, UK, Deutschland usw.) und Netzwerktypen sowie Preise entdecken.', es: 'La rotación es el pilar del sistema de pool: un proceso constante de cambio de IP. Cuando un proxy rota su dirección IP, los sistemas de internet lo ven como comportamiento humano normal. A diferencia de nuestros competidores, proxied.com tiene conexiones móviles 4G y 5G independientes. Nuestros usuarios pueden explorar distintas ubicaciones (EE. UU., Reino Unido, Alemania, etc.), descubrir tipos de red y precios.',
          ka: 'როტაცია პულის სისტემის საყრდენია - IP-ების გადართვის მუდმივი პროცესი. როდესაც პროქსი თავის IP მისამართს ცვლის, ინტერნეტ სისტემები ამას ნორმალურ ადამიანურ ქცევად აღიქვამენ. კონკურენტებისგან განსხვავებით, proxied.com-ს აქვს დამოუკიდებელი 4G და 5G მობილური კავშირები. ჩვენს მომხმარებლებს შეუძლიათ დაათვალიერონ სხვადასხვა ლოკაციები (აშშ, გაერთიანებული სამეფო, გერმანია და ა.შ.), აღმოაჩინონ ქსელის ტიპები და ფასები.',
        },
      },
      {
        type: 'cards',
        items: [
          {
            title: { en: 'Rotating IPs', ru: 'Ротируемые IP', de: 'Rotierende IPs', es: 'IPs rotativas', ka: 'როტირებადი IP-ები' },
            text: {
              en: 'Automatically change the IP at intervals - as fast as 1 minute.', ru: 'Автоматическая смена IP через интервалы - вплоть до 1 минуты.', de: 'Automatischer IP-Wechsel in Intervallen - bis zu 1 Minute schnell.', es: 'Cambio automático de IP por intervalos: tan rápido como 1 minuto.',
              ka: 'IP-ის ავტომატური შეცვლა ინტერვალებით - 1 წუთამდე სისწრაფით.',
            },
          },
          {
            title: { en: 'Sticky sessions', ru: 'Липкие сессии', de: 'Sticky Sessions', es: 'Sesiones persistentes', ka: 'წებოვანი სესიები' },
            text: {
              en: 'Keep the same IP for a longer duration if you need to stay logged into an account.', ru: 'Сохранение одного IP на более долгий срок, если нужно оставаться в аккаунте.', de: 'Behalten derselben IP für eine längere Dauer, wenn Sie in einem Konto angemeldet bleiben müssen.', es: 'Mantener la misma IP por más tiempo si necesitas permanecer conectado a una cuenta.',
              ka: 'იგივე IP-ის შენარჩუნება უფრო ხანგრძლივად, თუ ანგარიშში შესული უნდა დარჩეთ.',
            },
          },
        ],
      },
      {
        type: 'p',
        text: {
          en: 'On our proxy, users can choose how “private” the pool might be. The gold standard in this industry is that only the user’s traffic goes to the SIM card. There are several pool types: the Residential Proxy Pool, the Mobile Proxy Pool, the Static Proxy Pool, and the Internet Service Provider (ISP) Proxy Pool. A proxy pool is a sophisticated instrument for operability and reliability - it enables effortless circumvention of boundaries and grants dexterity to users.', ru: 'На нашем прокси пользователи могут выбирать, насколько «приватным» будет пул. Золотой стандарт в этой индустрии - когда только трафик пользователя идёт на SIM-карту. Существует несколько типов пулов: резидентский (Residential), мобильный (Mobile), статический (Static) и ISP-прокси-пул. Пул прокси - это изощрённый инструмент для оперативности и надёжности - он позволяет без усилий обходить границы и даёт пользователям гибкость.', de: 'Auf unserem Proxy können Nutzer wählen, wie «privat» der Pool sein soll. Der Goldstandard in dieser Branche ist, dass nur der Traffic des Nutzers auf die SIM-Karte geht. Es gibt mehrere Pool-Typen: den Residential Proxy Pool, den Mobile Proxy Pool, den Static Proxy Pool und den ISP Proxy Pool. Ein Proxy-Pool ist ein raffiniertes Instrument für Betriebsfähigkeit und Zuverlässigkeit - es ermöglicht mühelose Umgehung von Grenzen und verleiht Nutzern Geschicklichkeit.', es: 'En nuestro proxy, los usuarios pueden elegir qué tan «privado» será el pool. El estándar de oro en esta industria es que solo el tráfico del usuario vaya a la tarjeta SIM. Hay varios tipos de pool: el pool de proxies residenciales, el pool de proxies móviles, el pool de proxies estáticos y el pool de proxies ISP. Un pool de proxies es un instrumento sofisticado para la operatividad y la fiabilidad: permite sortear fronteras sin esfuerzo y otorga destreza a los usuarios.',
          ka: 'ჩვენს პროქსიზე მომხმარებლებს შეუძლიათ აირჩიონ, რამდენად „პირადი“ იქნება პული. ამ ინდუსტრიაში ოქროს სტანდარტია, რომ SIM ბარათზე მხოლოდ მომხმარებლის ტრაფიკი გადიოდეს. არსებობს პულების რამდენიმე ტიპი: საცხოვრებელი (Residential), მობილური (Mobile), სტატიკური (Static) და ინტერნეტ პროვაიდერის (ISP) პროქსი პული. პროქსი პული არის დახვეწილი ინსტრუმენტი ოპერატიულობისა და საიმედოობისთვის - ის საზღვრების უმოქმედოდ გვერდის ავლისა და მოქნილობის საშუალებას აძლევს მომხმარებლებს.',
        },
      },
    ],
  },
  {
    id: 'proxy-types',
    num: '07',
    title: { en: 'Different types of proxies', ru: 'Разные типы прокси', de: 'Verschiedene Proxy-Typen', es: 'Distintos tipos de proxies', ka: 'პროქსების სხვადასხვა ტიპები' },
    blocks: [
      {
        type: 'p',
        text: {
          en: 'There are residential, data center, mobile, and pool proxies. Let’s explain each of them in this chapter.', ru: 'Существуют резидентские, дата-центровые, мобильные и пуловые прокси. Давайте объясним каждый из них в этой главе.', de: 'Es gibt Residential-, Data-Center-, Mobile- und Pool-Proxys. Lassen Sie uns jeden in diesem Kapitel erklären.', es: 'Existen proxies residenciales, de centro de datos, móviles y de pool. Expliquemos cada uno de ellos en este capítulo.',
          ka: 'არსებობს საცხოვრებელი (residential), მონაცემთა ცენტრის (data center), მობილური (mobile) და პულის (pool) პროქსები. მოდით, თითოეულს ამ თავში ავხსნათ.',
        },
      },
      {
        type: 'cards',
        items: [
          {
            title: { en: 'Residential proxy', ru: 'Резидентский прокси', de: 'Residential-Proxy', es: 'Proxy residencial', ka: 'საცხოვრებელი პროქსი' },
            text: {
              en: 'An intermediary server that provides you with an IP address physically tied to a real home and a legitimate internet service provider (like Magti or Silknet). It makes you look like a real person browsing from their living room on their home Wi-Fi. A residential proxy has the highest trust: if a website blocks a residential IP, they risk losing a real customer.', ru: 'Промежуточный сервер, предоставляющий вам IP-адрес, физически привязанный к реальному дому и легитимному интернет-провайдеру (как Magti или Silknet). Он создаёт видимость реального человека, сидящего в гостиной и пользующегося домашним Wi-Fi. Резидентский прокси имеет самое высокое доверие: если сайт заблокирует резидентский IP, он рискует потерять реального клиента.', de: 'Ein Vermittlungsserver, der Ihnen eine IP-Adresse bereitstellt, die physisch an ein echtes Haus und einen legitimen Internetdienstanbieter gebunden ist (wie Magti oder Silknet). Er lässt Sie aussehen wie eine echte Person, die vom Wohnzimmer aus über das Heim-Wi-Fi surft. Ein Residential-Proxy hat das höchste Vertrauen: Wenn eine Website eine Residential-IP blockiert, riskiert sie, einen echten Kunden zu verlieren.', es: 'Un servidor intermediario que te proporciona una dirección IP ligada físicamente a un hogar real y a un proveedor de internet legítimo (como Magti o Silknet). Te hace parecer una persona real navegando desde su salón con su Wi-Fi doméstico. Un proxy residencial tiene la máxima confianza: si un sitio web bloquea una IP residencial, arriesga perder a un cliente real.',
              ka: 'შუამავალი სერვერი, რომელიც გაძლევთ IP მისამართს, რომელიც ფიზიკურად მიბმულია რეალურ სახლთან და ლეგიტიმურ ინტერნეტ პროვაიდერთან (როგორიცაა Magti ან Silknet). ის გაძლევთ რეალური ადამიანის იერს, რომელიც სახლის Wi-Fi-დან დათვალიერებს. საცხოვრებელ პროქსს ყველაზე მაღალი ნდობა აქვს: თუ ვებსაიტი საცხოვრებელ IP-ს დააბლოკავს, რეალური კლიენტის დაკარგვას რისკავს.',
            },
          },
          {
            title: { en: 'Data center proxy', ru: 'Дата-центровый прокси', de: 'Data-Center-Proxy', es: 'Proxy de centro de datos', ka: 'მონაცემთა ცენტრის პროქსი' },
            text: {
              en: 'Uses IPs from server farms like Amazon or Google - not affiliated with an Internet Service Provider. These proxies live in massive high-speed data centers. They are easily detectable: websites can quickly identify that the traffic is coming from a server, not a human, so the user’s IP will be blocked.', ru: 'Использует IP из серверных ферм вроде Amazon или Google - не связан с интернет-провайдером. Эти прокси живут в огромных высокоскоростных дата-центрах. Их легко обнаружить: сайты быстро определяют, что трафик идёт от сервера, а не человека, поэтому IP пользователя будет заблокирован.', de: 'Nutzt IPs aus Serverfarmen wie Amazon oder Google - nicht mit einem Internetdienstanbieter verbunden. Diese Proxys leben in riesigen Hochgeschwindigkeits-Rechenzentren. Sie sind leicht erkennbar: Websites können schnell feststellen, dass der Traffic von einem Server und nicht von einem Menschen kommt, daher wird die IP des Nutzers gesperrt.', es: 'Usa IPs de granjas de servidores como Amazon o Google, no afiliadas a un proveedor de servicios de internet. Estos proxies viven en centros de datos masivos de alta velocidad. Son fácilmente detectables: los sitios web pueden identificar rápidamente que el tráfico procede de un servidor y no de un humano, por lo que la IP del usuario será bloqueada.',
              ka: 'იყენებს IP-ებს სერვერული ფერმებიდან, როგორიცაა Amazon ან Google - არ არის დაკავშირებული ინტერნეტ პროვაიდერთან. ეს პროქსები ცხოვრობს უზარმაზარ მაღალსიჩქარიან მონაცემთა ცენტრებში. ისინი ადვილად აღმოჩენადია: ვებსაიტებს სწრაფად შეუძლიათ დაადგინონ, რომ ტრაფიკი სერვერიდან მოდის და არა ადამიანისგან, ამიტომ მომხმარებლის IP დაიბლოკება.',
            },
          },
          {
            title: { en: 'Mobile proxies', ru: 'Мобильные прокси', de: 'Mobile Proxys', es: 'Proxies móviles', ka: 'მობილური პროქსები' },
            text: {
              en: 'As mentioned above - 4G and 5G proxies. They specialize in internet connections through a physical mobile device connected to a cellular network, using cellular wireless connections.', ru: 'Как упоминалось выше - прокси 4G и 5G. Они специализируются на интернет-подключениях через физическое мобильное устройство, подключённое к сотовой сети, используя беспроводные сотовые соединения.', de: 'Wie oben erwähnt - 4G- und 5G-Proxys. Sie sind auf Internetverbindungen über ein physisches Mobilgerät spezialisiert, das mit einem Mobilfunknetz verbunden ist und drahtlose Mobilfunkverbindungen nutzt.', es: 'Como se mencionó arriba: proxies 4G y 5G. Se especializan en conexiones a internet a través de un dispositivo móvil físico conectado a una red celular, usando conexiones celulares inalámbricas.',
              ka: 'როგორც ზემოთ აღვნიშნეთ - 4G და 5G პროქსები. ისინი სპეციალიზირებულია ინტერნეტ კავშირებში ფიზიკური მობილური მოწყობილობის მეშვეობით, რომელიც მობილურ ქსელთანაა დაკავშირებული და უსადენო სელულურ კავშირებს იყენებს.',
            },
          },
          {
            title: { en: 'ISP proxy', ru: 'ISP-прокси', de: 'ISP-Proxy', es: 'Proxy ISP', ka: 'ISP პროქსი' },
            text: {
              en: 'The hybrid of the proxy world: it takes the best parts of data center and residential connections. These proxies are in data centers and are powerful and fast 24/7, but websites see them as a residential provider (like “Comcast”) instead of a bot from a farm. ISP proxies are always static - you get one specific IP that never changes unless you manually swap it. This is why they are perfect for account management (Facebook, Amazon, eBay): if your IP jumps from New York to London while you are logged in, you get banned. With an ISP proxy, you look like a loyal customer at home.', ru: 'Гибрид мира прокси: он берёт лучшее от дата-центровых и резидентских подключений. Эти прокси находятся в дата-центрах и мощны и быстры 24/7, но сайты видят в них резидентного провайдера (вроде «Comcast»), а не бота с фермы. ISP-прокси всегда статичны - вы получаете один конкретный IP, который никогда не меняется, пока вы не поменяете его вручную. Поэтому они идеальны для управления аккаунтами (Facebook, Amazon, eBay): если ваш IP во время сессии прыгнет из Нью-Йорка в Лондон, вас забанят. С ISP-прокси вы выглядите как верный клиент у себя дома.', de: 'Das Hybrid der Proxy-Welt: Er nimmt das Beste aus Data-Center- und Residential-Verbindungen. Diese Proxys stehen in Rechenzentren und sind rund um die Uhr leistungsstark und schnell, aber Websites sehen sie als Residential-Anbieter (wie «Comcast») statt als Bot von einer Farm. ISP-Proxys sind immer statisch - Sie erhalten eine bestimmte IP, die sich nie ändert, es sei denn, Sie tauschen sie manuell. Deshalb sind sie perfekt für das Account-Management (Facebook, Amazon, eBay): Wenn Ihre IP mitten in der Sitzung von New York nach London springt, werden Sie gesperrt. Mit einem ISP-Proxy sehen Sie aus wie ein treuer Kunde zu Hause.', es: 'El híbrido del mundo proxy: toma lo mejor de las conexiones de centro de datos y residenciales. Estos proxies están en centros de datos y son potentes y rápidos 24/7, pero los sitios web los ven como un proveedor residencial (como «Comcast») en lugar de un bot de una granja. Los proxies ISP siempre son estáticos: obtienes una IP específica que nunca cambia a menos que la cambies manualmente. Por eso son perfectos para la gestión de cuentas (Facebook, Amazon, eBay): si tu IP salta de Nueva York a Londres mientras estás conectado, te expulsan. Con un proxy ISP pareces un cliente fiel en casa.',
              ka: 'პროქსი სამყაროს ჰიბრიდი: იღებს მონაცემთა ცენტრისა და საცხოვრებელი კავშირების საუკეთესო მხარეებს. ეს პროქსები მონაცემთა ცენტრებშია და 24/7 ძლიერი და სწრაფია, მაგრამ ვებსაიტები ხედავენ მათ საცხოვრებელ პროვაიდერად (მაგ., „Comcast“) და არა ფერმის ბოტად. ISP პროქსები ყოველთვის სტატიკურია - იღებთ ერთ კონკრეტულ IP-ს, რომელიც არასდროს იცვლება, სანამ ხელით არ შეცვლით. სწორედ ამიტომ ისინი იდეალურია ანგარიშების მართვისთვის (Facebook, Amazon, eBay): თუ თქვენი IP სესიის დროს ნიუ-იორკიდან ლონდონში გადახტება, დაიბანებით. ISP პროქსით საკუთარ სახლში მყოფი ერთგული კლიენტის იერი გაქვთ.',
            },
          },
        ],
      },
      { type: 'h3', text: { en: 'Price comparison', ru: 'Сравнение цен', de: 'Preisvergleich', es: 'Comparación de precios', ka: 'ფასების შედარება' } },
      {
        type: 'list',
        items: [
          {
            en: 'Data center proxy: $0.50–$1.50 per IP/month.', ru: 'Дата-центровый прокси: $0.50-$1.50 за IP/месяц.', de: 'Data-Center-Proxy: $0.50-$1.50 pro IP/Monat.', es: 'Proxy de centro de datos: $0.50-$1.50 por IP/mes.',
            ka: 'მონაცემთა ცენტრის პროქსი: $0.50–$1.50 IP-ზე/თვეში.',
          },
          {
            en: 'Residential proxy: $3.00–$15.00 per IP/month.', ru: 'Резидентский прокси: $3.00-$15.00 за IP/месяц.', de: 'Residential-Proxy: $3.00-$15.00 pro IP/Monat.', es: 'Proxy residencial: $3.00-$15.00 por IP/mes.',
            ka: 'საცხოვრებელი პროქსი: $3.00–$15.00 IP-ზე/თვეში.',
          },
          {
            en: 'Mobile proxy (proxied.com): $4.00–$40.00 - price varies hourly, daily, weekly, and monthly.', ru: 'Мобильный прокси (proxied.com): $4.00-$40.00 - цена варьируется по часовым, дневным, недельным и месячным тарифам.', de: 'Mobile Proxy (proxied.com): $4.00-$40.00 - Preis variiert stündlich, täglich, wöchentlich und monatlich.', es: 'Proxy móvil (proxied.com): $4.00-$40.00 - el precio varía por hora, día, semana y mes.',
            ka: 'მობილური პროქსი (proxied.com): $4.00–$40.00 - ფასი მერყეობს საათობრივი, დღიური, კვირიული და თვიური გეგმების მიხედვით.',
          },
        ],
      },
    ],
  },
  {
    id: 'why-mobile-effective',
    num: '08',
    title: { en: 'Why are mobile proxies effective?', ru: 'Почему мобильные прокси эффективны?', de: 'Warum sind mobile Proxys effektiv?', es: '¿Por qué son efectivos los proxies móviles?', ka: 'რატომ არის მობილური პროქსები ეფექტური?' },
    blocks: [
      {
        type: 'p',
        text: {
          en: 'In 2025, mobile proxies are considered the gold standard of the proxy industry, and they are unblockable. If a residential proxy is a real ID, a mobile proxy is like a diplomatic passport. A mobile IP rotates naturally; every time a phone moves between cell towers or loses signal for a second, the carrier often assigns it a new IP (flight mode demonstration).', ru: 'В 2025 году мобильные прокси считаются золотым стандартом прокси-индустрии, и их невозможно заблокировать. Если резидентский прокси - это настоящее удостоверение личности, то мобильный прокси - как дипломатический паспорт. Мобильный IP естественным образом ротируется; каждый раз, когда телефон перемещается между вышками или на секунду теряет сигнал, оператор часто присваивает ему новый IP (демонстрация с авиарежимом).', de: 'Im Jahr 2025 gelten mobile Proxys als Goldstandard der Proxy-Branche, und sie sind unblockierbar. Wenn ein Residential-Proxy ein echter Ausweis ist, ist ein mobiler Proxy wie ein Diplomatenpass. Eine mobile IP rotiert naturgemäß; jedes Mal, wenn ein Telefon zwischen Funkmasten wechselt oder für eine Sekunde das Signal verliert, weist der Carrier ihm oft eine neue IP zu (Demonstration per Flugmodus).', es: 'En 2025, los proxies móviles se consideran el estándar de oro de la industria de proxies, y son imbloqueables. Si un proxy residencial es un documento de identidad real, un proxy móvil es como un pasaporte diplomático. Una IP móvil rota de forma natural; cada vez que el teléfono se mueve entre antenas o pierde la señal por un segundo, el operador a menudo le asigna una IP nueva (demostración con el modo avión).',
          ka: '2025 წელს მობილური პროქსები პროქსი ინდუსტრიის ოქროს სტანდარტად ითვლება და ისინი დაბლოკვას არ ექვემდებარდება. თუ საცხოვრებელი პროქსი ნამდვილი პირადობის მოწმობაა, მობილური პროქსი დიპლომატური პასპორტის მსგავსია. მობილური IP ბუნებრივად როტაციას განიცდის; ყოველ ჯერზე, როდესაც ტელეფონი საძირებელ ანძებს შორის გადაადგილდება ან წამით კარგავს სიგნალს, ოპერატორი ხშირად ახალ IP-ს ანიჭებს მას (ავიარეჟიმის დემონსტრაცია).',
        },
      },
      {
        type: 'p',
        text: {
          en: 'The biggest reason for the effectiveness of mobile proxies originates from Carrier-Grade Network Address Translation technology (CGNAT). As we mentioned above, one IPv4 is shared by hundreds or even thousands of real people’s devices at the same time. If a website like Instagram blocks one mobile IP because a bot is using it, they might accidentally block 5,000 real users.', ru: 'Главная причина эффективности мобильных прокси - технология трансляции сетевых адресов операторского класса (CGNAT). Как мы упоминали выше, один IPv4-адрес одновременно разделяют сотни или даже тысячи устройств реальных людей. Если сайт вроде Instagram заблокирует один мобильный IP из-за бота, он может случайно заблокировать 5,000 реальных пользователей.', de: 'Der größte Grund für die Effektivität mobiler Proxys ist die Carrier-Grade Network Address Translation-Technologie (CGNAT). Wie oben erwähnt, teilen sich Hunderte oder sogar Tausende Geräte echter Menschen gleichzeitig eine IPv4-Adresse. Wenn eine Website wie Instagram eine mobile IP blockiert, weil ein Bot sie nutzt, blockiert sie möglicherweise versehentlich 5.000 echte Nutzer.', es: 'La mayor razón de la eficacia de los proxies móviles es la tecnología de Traducción de Direcciones de Red de Nivel de Operador (CGNAT). Como mencionamos arriba, una IPv4 es compartida simultáneamente por cientos o incluso miles de dispositivos de personas reales. Si un sitio como Instagram bloquea una IP móvil porque un bot la está usando, podría bloquear accidentalmente a 5,000 usuarios reales.',
          ka: 'მობილური პროქსების ეფექტურობის ყველაზე დიდი მიზეზი Carrier-Grade Network Address Translation ტექნოლოგიიდან (CGNAT) მომდინარეობს. როგორც ზემოთ აღვნიშნეთ, ერთ IPv4 მისამართს ასობით ან ათასობით რეალური ადამიანის მოწყობილობა იზიარებს ერთდროულად. თუ Instagram-ის მსგავსი ვებსაიტი ერთ მობილურ IP-ს დააბლოკავს, რადგან ბოტი იყენებს მას, შესაძლოა შემთხვევით 5,000 რეალური მომხმარებელი დააბლოკოს.',
        },
      },
      {
        type: 'p',
        text: {
          en: 'Henceforth, websites are hesitant to block mobile users, allowing internet service providers to share a single public IPv4 address among thousands of individual subscribers and giving incredibly high “trust scores.” Another reason is the connection itself: the IP from the proxy belongs to a major carrier (like Silknet, Magti, or Vodafone) rather than a server farm. In our case, Proxied has real mobile phones with SIM cards and provides service infrastructure to our users. As a result, the traffic is real, and the website assumes this is normal activity.', ru: 'Поэтому сайты неохотно блокируют мобильных пользователей, что позволяет провайдерам раздавать один публичный IPv4-адрес тысячам абонентов и даёт невероятно высокие «оценки доверия». Другая причина - само подключение: IP прокси принадлежит крупному оператору (как Silknet, Magti или Vodafone), а не серверной ферме. В нашем случае у Proxied есть реальные мобильные телефоны с SIM-картами, и мы предоставляем сервисную инфраструктуру пользователям. В результате трафик реален, и сайт считает это нормальной активностью.', de: 'Daher zögern Websites, mobile Nutzer zu blockieren, was es Providern erlaubt, eine einzige öffentliche IPv4-Adresse unter Tausenden Abonnenten zu teilen und unglaublich hohe «Trust-Scores» zu vergeben. Ein weiterer Grund ist die Verbindung selbst: Die IP des Proxys gehört einem großen Carrier (wie Silknet, Magti oder Vodafone) und nicht einer Serverfarm. In unserem Fall hat Proxied echte Mobiltelefone mit SIM-Karten und stellt den Nutzern die Serviceinfrastruktur bereit. Das Ergebnis: Der Traffic ist echt, und die Website geht von normaler Aktivität aus.', es: 'Por ello, los sitios web dudan en bloquear a los usuarios móviles, lo que permite a los proveedores compartir una única dirección IPv4 pública entre miles de abonados y otorga «puntuaciones de confianza» increíblemente altas. Otra razón es la propia conexión: la IP del proxy pertenece a un gran operador (como Silknet, Magti o Vodafone) y no a una granja de servidores. En nuestro caso, Proxied tiene teléfonos móviles reales con tarjetas SIM y proporciona infraestructura de servicio a nuestros usuarios. Como resultado, el tráfico es real y el sitio web asume que es una actividad normal.',
          ka: 'აქედან გამომდინარე, ვებსაიტები ყოყმანობენ მობილური მომხმარებლების დაბლოკვას, რაც ინტერნეტ პროვაიდერებს საშუალებას აძლევს ერთი საჯარო IPv4 მისამართი ათასობით აბონენტს შორის გაანაწილონ და წარმოუდგენლად მაღალი „ნდობის ქულები“ მიანიჭონ. მეორე მიზეზი თავად კავშირია: პროქსის IP ეკუთვნის მსხვილ ოპერატორს (როგორიცაა Silknet, Magti ან Vodafone) და არა სერვერულ ფერმას. ჩვენს შემთხვევაში, Proxied-ს აქვს ნამდვილი მობილური ტელეფონები SIM ბარათებით და უზრუნველყოფს სერვისის ინფრასტრუქტურას მომხმარებლებისთვის. შედეგად, ტრაფიკი რეალურია და ვებსაიტი ამას ნორმალურ აქტივობად აღიქვამს.',
        },
      },
      {
        type: 'note',
        title: { en: 'Real phones, real IPs', ru: 'Настоящие телефоны, настоящие IP', de: 'Echte Telefone, echte IPs', es: 'Teléfonos reales, IPs reales', ka: 'ნამდვილი ტელეფონები, ნამდვილი IP-ები' },
        text: {
          en: 'In the proxied.com case, we have real phones’ IP addresses, which always stay the same and serve only one purpose: to bypass constraints and ensure a high-quality mobile connection for the proxy user.', ru: 'В случае с proxied.com у нас есть IP-адреса реальных телефонов, которые всегда остаются прежними и служат только одной цели: обход ограничений и обеспечение высококачественного мобильного соединения для пользователя прокси.', de: 'Im Fall von proxied.com haben wir IP-Adressen echter Telefone, die immer gleich bleiben und nur einem Zweck dienen: die Umgehung von Beschränkungen und die Sicherstellung einer hochwertigen mobilen Verbindung für den Proxy-Nutzer.', es: 'En el caso de proxied.com, tenemos direcciones IP de teléfonos reales, que siempre permanecen iguales y sirven a un solo propósito: sortear restricciones y garantizar una conexión móvil de alta calidad para el usuario del proxy.',
          ka: 'proxied.com-ის შემთხვევაში, ჩვენ გვაქვს ნამდვილი ტელეფონების IP მისამართები, რომლებიც ყოველთვის იგივე რჩება და მხოლოდ ერთ მიზანს ემსახურება: შეზღუდვების გვერდის ავლა და პროქსი მომხმარებლისთვის მაღალხარისხიანი მობილური კავშირის უზრუნველყოფა.',
        },
      },
    ],
  },
]
