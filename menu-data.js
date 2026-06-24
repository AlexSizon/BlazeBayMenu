const text = (bg, en) => ({ bg, en });
const sameText = (value) => ({ bg: value, en: value });
const option = (amount, unit, value) => ({ amount, unit, value });
const labeledOption = (bg, en, value) => ({ label: text(bg, en), value });

// Bulgarian source copy normalized against the printable menu document.
// Key corrections include terms such as "крема сирене", "айсберг",
// "джинджифил", "ликьор", and "кафе".
const menuData = {
  defaultLocale: "bg",
  localeOptions: {
    bg: {
      shortLabel: sameText("BG"),
    },
    en: {
      shortLabel: sameText("EN"),
    },
  },
  units: {
    bg: {
      g: "г",
      ml: "мл",
      l: "л",
      pcs: "бр",
      portion: "порция",
      addOn: "добавка",
    },
    en: {
      g: "g",
      ml: "ml",
      l: "L",
      pcs: "pcs",
      portion: "portion",
      addOn: "add-on",
    },
  },
  venue: {
    name: "Blaze Bay",
    tagLine: "Cafe . Bar",
    hours: "09:00 - 23:00",
    phone: "+359 888 339 031",
    instagram: "@blazebay_beach",
  },
  ui: {
    documentTitle: text("Blaze Bay | Меню", "Blaze Bay | Menu"),
    metaDescription: text(
      "Меню на Blaze Bay Cafe Bar с мобилни раздели за бургери, коктейли, кафе, лимонади и още.",
      "Blaze Bay Cafe Bar menu with mobile-friendly tabs for burgers, cocktails, coffee, lemonades, and more."
    ),
    localeToggleAriaLabel: text("Избор на език", "Language selector"),
    summaryAriaLabel: text("Акценти от менюто", "Menu highlights"),
    itemPricesAriaPrefix: text("Цени за", "Prices for"),
    hero: {
      eyebrow: text("Кафе бар меню", "Cafe Bar Menu"),
      localeLabel: text("Език", "Language"),
      description: text(
        "Разгледай менюто на Blaze Bay и избери между бриоши, бургери, морски хапки, авторски коктейли, кафе и летни напитки.",
        "Explore the Blaze Bay menu and choose from brioche sandwiches, burgers, seaside bites, signature cocktails, coffee, and summer drinks."
      ),
      callAction: text("Обади се", "Call venue"),
      instagramAction: sameText("Instagram"),
      venueCardLabel: text("Посети Blaze Bay", "Visit Blaze Bay"),
      hoursLabel: text("Работно време", "Hours"),
      phoneLabel: text("Телефон", "Phone"),
      handleLabel: text("Профил", "Handle"),
      note: text("", ""),
    },
    navigation: {
      eyebrow: text("Навигация в менюто", "Menu navigation"),
      title: text("Избери своя ритъм", "Choose your vibe"),
      copy: text(
        "Премини през храната, коктейлите, кафето и освежаващите напитки, за да откриеш какво ти се хапва или пие точно сега.",
        "Browse food, cocktails, coffee, and refreshing drinks to find exactly what you want to eat or sip right now."
      ),
      tabsAriaLabel: text("Категории в менюто на Blaze Bay", "Blaze Bay menu categories"),
    },
    summaryCards: [
      {
        eyebrow: text("Бърз избор", "Fast order flow"),
        title: text("Храна и напитки на едно място", "Food and drinks in one place"),
        body: text(
          "Бургери, бриош сандвичи, коктейли, кафе, лимонади, шейкове и добавки са достъпни без презареждане на страницата.",
          "Burgers, brioche sandwiches, cocktails, coffee, lemonades, shakes, and extras are all reachable without page reloads."
        ),
      },
      {
        eyebrow: text("Свежи напитки", "Refreshing picks"),
        title: text("Лимонади, шейкове и кафе", "Lemonades, shakes, and coffee"),
        body: text(
          "От домашни лимонади до айс кафе и шейкове - подбрахме напитки за плажно настроение през целия ден.",
          "From house lemonades to iced coffee and milkshakes, the menu brings easy beachside favorites for the whole day."
        ),
      },
      {
        eyebrow: text("Вечерни вкусове", "Evening pours"),
        title: text("Коктейли, бира и силни напитки", "Cocktails, beer, and spirits"),
        body: text(
          "Премини към бар селекцията за авторски коктейли, наливна бира и класически напитки за залез край морето.",
          "Move to the bar selection for signature cocktails, draft beer, and classic pours made for sunset by the sea."
        ),
      },
    ],
  },
  categories: [
    {
      id: "brioche-sandwiches",
      label: text("Бриоши", "Brioche"),
      title: text("Бриош сандвичи", "Brioche Sandwiches"),
      group: text("Храна", "Food"),
      intro: text(
        "Пухкави бриоши със сладки или пържени картофи, адаптирани от печатното меню.",
        "Soft brioche sandwiches served with sweet potato fries or french fries, adapted from the printed menu."
      ),
      items: [
        {
          name: text("Бриош Роял със сладки картофи", "Brioche Royal & Sweet Fries"),
          detail: text(
            "Бриош питка, риба тон, авокадо, крема сирене, салата валериана, лук, зелен лук и батат.",
            "Brioche bun, tuna, avocado, cream cheese, lamb's lettuce, onion, spring onion, and sweet potato fries."
          ),
          options: [option("300", "g", "10.90 €")],
        },
        {
          name: text("Пилешки бриош с пържени картофи", "Chicken Brioche & French Fries"),
          detail: text(
            "Бриош, чедър сос, кисели краставички, пилешко на грил, моцарела, домат, айсберг и пържени картофи.",
            "Brioche bun, cheddar sauce, pickles, grilled chicken, mozzarella, tomato, iceberg lettuce, and french fries."
          ),
          options: [option("420", "g", "9.50 €")],
        },
        {
          name: text("Тройно сирене със сладки картофи", "Triple Cheese & Sweet Fries"),
          detail: text(
            "Бриош, моцарела, чедър, кашкавал, чедър сос и батат.",
            "Brioche bun, mozzarella, cheddar, yellow cheese, cheddar sauce, and sweet potato fries."
          ),
          options: [option("380", "g", "9.50 €")],
        },
        {
          name: text("BBQ телешко с пържени картофи", "BBQ Beef & French Fries"),
          detail: text(
            "Бриош, дърпано телешко, карамелизиран лук, гъби, BBQ сос и пържени картофи.",
            "Brioche bun, pulled beef, caramelized onion, mushrooms, BBQ sauce, and french fries."
          ),
          options: [option("400", "g", "12.90 €")],
        },
        {
          name: text("Премиум бриош със сладки картофи", "Premium Brioche & Sweet Fries"),
          detail: text(
            "Бриош, скариди, авокадо, крема сирене, краставица, балсамов унаги сос и батат.",
            "Brioche bun, shrimp, avocado, cream cheese, cucumber, balsamic unagi sauce, and sweet potato fries."
          ),
          options: [option("290", "g", "11.90 €")],
        },
        {
          name: text("Веган BBQ с пържени картофи", "Vegan BBQ & French Fries"),
          detail: text(
            "Бриош, спаначено кюфте, карамелизиран лук, гъби, BBQ сос и пържени картофи.",
            "Brioche bun, spinach patty, caramelized onion, mushrooms, BBQ sauce, and french fries."
          ),
          options: [option("400", "g", "10.00 €")],
        },
      ],
    },
    {
      id: "burgers",
      label: text("Бургери", "Burgers"),
      title: text("Бургери", "Burgers"),
      group: text("Храна", "Food"),
      intro: text(
        "Фирмени бургери с пържени картофи, близки до комбинациите от печатното меню.",
        "Signature burgers with french fries, staying close to the printed combinations."
      ),
      items: [
        {
          name: text("Cheese Core бургер с пържени картофи", "Cheese Core Burger & French Fries"),
          detail: text(
            "Бриош, телешко кюфте, чедър, кисели краставички, бекон, айсберг, домат, BBQ сос и пържени картофи.",
            "Brioche bun, beef patty, cheddar, pickles, bacon, iceberg lettuce, tomato, BBQ sauce, and french fries."
          ),
          options: [option("410", "g", "10.00 €")],
        },
        {
          name: text("Smoky Chicken бургер с пържени картофи", "Smoky Chicken Burger & French Fries"),
          detail: text(
            "Бриош, пилешко на грил, чедър, кисели краставички, домат, айсберг, чедър сос и пържени картофи.",
            "Brioche bun, grilled chicken, cheddar, pickles, tomato, iceberg lettuce, cheddar sauce, and french fries."
          ),
          options: [option("400", "g", "10.00 €")],
        },
        {
          name: text("Sweet Daddy бургер с пържени картофи", "Sweet Daddy Burger & French Fries"),
          detail: text(
            "Бриош, телешко кюфте, карамелизиран лук, чедър, камамбер, боровинков конфитюр, BBQ сос и пържени картофи.",
            "Brioche bun, beef patty, caramelized onion, cheddar, camembert, blueberry jam, BBQ sauce, and french fries."
          ),
          options: [option("395", "g", "10.00 €")],
        },
        {
          name: text("Vegan Core бургер с пържени картофи", "Vegan Core Burger & French Fries"),
          detail: text(
            "Бриош, спаначено кюфте, чедър, кисели краставички, червен лук, айсберг, домат, BBQ сос и пържени картофи.",
            "Brioche bun, spinach patty, cheddar, pickles, red onion, iceberg lettuce, tomato, BBQ sauce, and french fries."
          ),
          options: [option("395", "g", "9.00 €")],
        },
      ],
    },
    {
      id: "fried-temptations",
      label: text("Пържено", "Fried"),
      title: text("Пържени изкушения", "Fried Temptations"),
      group: text("Храна", "Food"),
      intro: text(
        "Хрупкави хапки за споделяне. Сосове по избор: кетчуп, майонеза, горчица, барбекю, чеснов, чедър и унаги.",
        "Crispy shareables. Sauce choices include ketchup, mayo, mustard, BBQ, garlic, cheddar, and unagi."
      ),
      items: [
        { name: text("Пържени картофи", "French Fries"), options: [option("180", "g", "4.50 €")] },
        { name: text("Сладки картофи", "Sweet Potato Fries"), options: [option("170", "g", "5.20 €")] },
        { name: text("Скариди темпура", "Tempura Shrimp"), options: [option("200", "g", "8.50 €")] },
        { name: text("Панирани миди", "Breaded Mussels"), options: [option("180", "g", "7.50 €")] },
        { name: text("Моцарелени пръчици", "Mozzarella Sticks"), options: [option("210", "g", "4.50 €")] },
        { name: text("Пилешки хапки", "Chicken Bites"), options: [option("170", "g", "4.50 €")] },
        { name: text("Чеснови сухари", "Garlic Croutons"), options: [option("110", "g", "3.50 €")] },
        { name: text("Лаваш със сулугуни", "Suluguni Lavash"), options: [option("170", "g", "6.50 €")] },
        { name: text("Лаваш със сулугуни и пиле", "Chicken Suluguni Lavash"), options: [option("240", "g", "8.00 €")] },
        { name: text("Миди с вино", "Mussels with Wine"), options: [option("200", "g", "8.90 €")] },
        { name: text("Миди в сметанов сос", "Mussels in Cream Sauce"), options: [option("250", "g", "9.50 €")] },
        { name: text("Скариди с вино", "Shrimp with Wine"), options: [option("200", "g", "11.90 €")] },
      ],
    },
    {
      id: "cocktails",
      label: text("Коктейли", "Cocktails"),
      title: text("Коктейли и още", "Cocktails & Others"),
      group: text("Напитки", "Drinks"),
      intro: text(
        "Коктейли за неоновите часове и любими класики от печатното меню.",
        "Neon-hour cocktails and house favorites from the printed menu."
      ),
      items: [
        {
          name: sameText("Aperol Spritz"),
          detail: text(
            "Ликьор Aperol, фреш портокал, просеко, сода и украса с портокал.",
            "Aperol liqueur, fresh orange juice, prosecco, soda, and an orange garnish."
          ),
          options: [option("350", "ml", "7.90 €")],
        },
        {
          name: sameText("Margarita"),
          detail: text(
            "Текила Olmeca, ликьор Triple Sec, фреш лайм, захарен сироп, сол и украса с лайм.",
            "Olmeca tequila, Triple Sec liqueur, fresh lime juice, sugar syrup, salt, and a lime garnish."
          ),
          options: [option("250", "ml", "6.90 €")],
        },
        {
          name: sameText("Pina Colada"),
          detail: text(
            "Ром Bacardi Carta Blanca, сок ананас, кокосов сироп и украса с портокал.",
            "Bacardi Carta Blanca rum, pineapple juice, coconut syrup, and an orange garnish."
          ),
          options: [option("250", "ml", "7.50 €")],
        },
        {
          name: sameText("Watermelon Splash"),
          detail: text(
            "Ром Bacardi Spiced, пюре от диня, фреш лимон, Sprite и мента.",
            "Bacardi Spiced rum, watermelon puree, fresh lemon juice, Sprite, and mint."
          ),
          options: [option("250", "ml", "7.50 €")],
        },
        {
          name: sameText("Peach Beach"),
          detail: text(
            "Уиски Jameson, ликьор Amaretto, пюре праскова, фреш лимон и украса с лимон.",
            "Jameson whiskey, Amaretto liqueur, peach puree, fresh lemon juice, and a lemon garnish."
          ),
          options: [option("200", "ml", "7.50 €")],
        },
        {
          name: sameText("Gin Fizz"),
          detail: text(
            "Джин Tanqueray, захарен сироп, фреш лимон, сода, fee foam, мента и украса с лимон.",
            "Tanqueray gin, sugar syrup, fresh lemon juice, soda, fee foam, mint, and a lemon garnish."
          ),
          options: [option("350", "ml", "5.90 €")],
        },
        {
          name: text("Gin Fizz с вкус", "Flavored Gin Fizz"),
          detail: text(
            "Джин Tanqueray, пюре ягода или диня, фреш лимон, сода, мента, fee foam и украса с лимон.",
            "Tanqueray gin, strawberry or watermelon puree, fresh lemon juice, soda, mint, fee foam, and a lemon garnish."
          ),
          options: [option("350", "ml", "6.50 €")],
        },
        {
          name: sameText("Matcha Gin Fizz"),
          detail: text(
            "Джин Tanqueray, матча, захарен сироп, фреш лимон, сода или тоник, мента и fee foam.",
            "Tanqueray gin, matcha, sugar syrup, fresh lemon juice, soda or tonic, mint, and fee foam."
          ),
          options: [option("350", "ml", "9.90 €")],
        },
        {
          name: sameText("Daiquiri"),
          detail: text(
            "Ром Bacardi Carta Blanca, фреш лайм, захарен сироп, мента, захар и украса с лайм.",
            "Bacardi Carta Blanca rum, fresh lime juice, sugar syrup, mint, sugar, and a lime garnish."
          ),
          options: [option("130", "ml", "5.90 €")],
        },
        {
          name: sameText("Strawberry Daiquiri"),
          detail: text(
            "Ром Bacardi Carta Blanca, фреш лайм, пюре ягода, мента, захар и лайм.",
            "Bacardi Carta Blanca rum, fresh lime juice, strawberry puree, mint, sugar, and lime."
          ),
          options: [option("130", "ml", "6.90 €")],
        },
        {
          name: sameText("Porn Star Martini"),
          detail: text(
            "Водка Smirnoff, сироп ванилия, пюре маракуя, просеко и fee foam.",
            "Smirnoff vodka, vanilla syrup, passion fruit puree, prosecco, and fee foam."
          ),
          options: [option("180", "ml", "8.50 €")],
        },
        {
          name: sameText("Negroni"),
          detail: text(
            "Джин Tanqueray, ликьор Campari, вермут Cinzano Rosso и портокалова цедра.",
            "Tanqueray gin, Campari liqueur, Cinzano Rosso vermouth, and orange zest."
          ),
          options: [option("190", "ml", "7.90 €")],
        },
        {
          name: sameText("Negroni Americano"),
          detail: text(
            "Ликьор Campari, вермут Cinzano Rosso, сода и портокалова цедра.",
            "Campari liqueur, Cinzano Rosso vermouth, soda, and orange zest."
          ),
          options: [option("270", "ml", "6.50 €")],
        },
        {
          name: sameText("Negroni Sbagliato"),
          detail: text(
            "Ликьор Campari, вермут Cinzano Rosso, просеко и портокалова цедра.",
            "Campari liqueur, Cinzano Rosso vermouth, prosecco, and orange zest."
          ),
          options: [option("270", "ml", "7.50 €")],
        },
        {
          name: sameText("Mojito"),
          detail: text(
            "Ром Bacardi Carta Blanca, тръстикова захар, Sprite, мента и украса с лайм.",
            "Bacardi Carta Blanca rum, cane sugar, Sprite, mint, and a lime garnish."
          ),
          options: [option("350", "ml", "7.50 €")],
        },
        {
          name: text("Mojito с вкус", "Flavored Mojito"),
          detail: text(
            "Ром Bacardi Carta Blanca, тръстикова захар, пюре ягода или праскова, Sprite и мента.",
            "Bacardi Carta Blanca rum, cane sugar, strawberry or peach puree, Sprite, and mint."
          ),
          options: [option("350", "ml", "8.20 €")],
        },
        {
          name: sameText("Mai Tai"),
          detail: text(
            "Ром Bacardi Blanca, Bacardi Gold и Bacardi Negra, ликьор Triple Sec, фреш лайм, сироп бадем, сироп кокос, сок ананас и фреш портокал.",
            "Bacardi Blanca, Bacardi Gold, and Bacardi Negra rum, Triple Sec liqueur, fresh lime juice, almond syrup, coconut syrup, pineapple juice, and fresh orange juice."
          ),
          options: [option("350", "ml", "7.90 €")],
        },
        {
          name: sameText("Gin Tonic"),
          detail: text(
            "Джин Tanqueray, Schweppes тоник и лайм.",
            "Tanqueray gin, Schweppes tonic, and lime."
          ),
          options: [option("350", "ml", "5.90 €")],
        },
        {
          name: sameText("Honey Jack Sour"),
          detail: text(
            "Медено уиски Jack Daniel's, фреш лимон, джинджифилов ейл и лимонова цедра.",
            "Jack Daniel's honey whiskey, fresh lemon juice, ginger ale, and lemon zest."
          ),
          options: [option("250", "ml", "7.50 €")],
        },
        {
          name: sameText("Skinos Spritz"),
          detail: text(
            "Ликьор Skinos, сироп от бъз, просеко и мента.",
            "Skinos liqueur, elderflower syrup, prosecco, and mint."
          ),
          options: [option("350", "ml", "8.50 €")],
        },
        {
          name: sameText("Whiskey Sour"),
          detail: text(
            "Уиски Jameson, фреш лимон, захарен сироп, лимонова цедра, fee foam и ангостура.",
            "Jameson whiskey, fresh lemon juice, sugar syrup, lemon zest, fee foam, and Angostura bitters."
          ),
          options: [option("250", "ml", "6.50 €")],
        },
        {
          name: sameText("New York Sour"),
          detail: text(
            "Уиски Jameson, фреш лимон, захарен сироп, портокалова цедра, червено вино, fee foam и ангостура.",
            "Jameson whiskey, fresh lemon juice, sugar syrup, orange zest, red wine, fee foam, and Angostura bitters."
          ),
          options: [option("180", "ml", "6.90 €")],
        },
        {
          name: sameText("Long Island"),
          detail: text(
            "Ром Bacardi Carta Blanca, текила Olmeca, джин Tanqueray, ликьор Triple Sec, водка Smirnoff, фреш лимон, захарен сироп, Coca-Cola и лимон.",
            "Bacardi Carta Blanca rum, Olmeca tequila, Tanqueray gin, Triple Sec liqueur, Smirnoff vodka, fresh lemon juice, sugar syrup, Coca-Cola, and lemon."
          ),
          options: [option("350", "ml", "8.90 €")],
        },
      ],
    },
    {
      id: "beer",
      label: text("Бира", "Beer"),
      title: text("Бира", "Beer"),
      group: text("Напитки", "Drinks"),
      intro: text(
        "Наливна и бутилирана бира от печатния списък.",
        "Draft and bottled beer selections from the printed list."
      ),
      items: [
        {
          name: text("Наливна бира: Hoegaarden", "Draft Beer: Hoegaarden"),
          options: [option("330/500", "ml", "4.50/5.50 €")],
        },
        {
          name: text("Наливна бира: Staropramen", "Draft Beer: Staropramen"),
          options: [option("330/500", "ml", "3.50/4.50 €")],
        },
        { name: sameText("Corona"), options: [option("330", "ml", "5.00 €")] },
        { name: sameText("Glarus"), options: [option("500", "ml", "4.50 €")] },
        { name: sameText("Stella Artois"), options: [option("330", "ml", "4.00 €")] },
        { name: sameText("Heineken"), options: [option("330", "ml", "4.00 €")] },
        { name: sameText("Budweiser"), options: [option("500", "ml", "4.00 €")] },
        { name: sameText("Pirinsko"), options: [option("500", "ml", "2.50 €")] },
      ],
    },
    {
      id: "lemonades",
      label: text("Лимонади", "Lemonades"),
      title: text("Лимонади", "Lemonades"),
      group: text("Напитки", "Drinks"),
      intro: text(
        "Свежи лимонади и вкусове като маракуя-лайм, ягода-череша, малина-бъз и джинджифил-лайм-мед.",
        "Fresh lemonades and flavored mixes such as passion fruit-lime, strawberry-cherry, raspberry-elderflower, and ginger-lime-honey."
      ),
      items: [
        {
          name: text("Линчик", "Linchik"),
          detail: text(
            "Спрайт, сироп виолетка, фреш лайм, мента и резенче лайм.",
            "Sprite, violet syrup, fresh lime juice, mint, and a slice of lime."
          ),
          options: [option("350", "ml", "4.00 €")],
        },
        {
          name: text("Лимонада класик", "Classic Lemonade"),
          detail: text(
            "Фреш лимон, захарен сироп и сода.",
            "Fresh lemon juice, sugar syrup, and soda."
          ),
          options: [option("350/570", "ml", "3.50/4.10 €")],
        },
        {
          name: text("Лимонада с вкус", "Flavored Lemonade"),
          detail: text(
            "Избери между маракуя-лайм, ягода-череша, малина-бъз или джинджифил-лайм-мед.",
            "Choose from passion fruit-lime, strawberry-cherry, raspberry-elderflower, or ginger-lime-honey."
          ),
          options: [option("350/570", "ml", "4.10/4.50 €")],
        },
      ],
    },
    {
      id: "soft-drinks",
      label: text("Безалкохолни", "Soft drinks"),
      title: text("Безалкохолни напитки", "Soft Drinks"),
      group: text("Напитки", "Drinks"),
      intro: text(
        "Охладени безалкохолни напитки и миксери.",
        "Chilled soft drinks and mixers."
      ),
      items: [
        { name: text("Студен чай Fuze Tea", "Fuze Tea Iced Tea"), options: [option("500", "ml", "2.90 €")] },
        { name: sameText("Coca-Cola"), options: [option("330", "ml", "2.50 €")] },
        { name: sameText("Schweppes"), options: [option("330", "ml", "2.50 €")] },
        { name: sameText("Sprite"), options: [option("330", "ml", "2.50 €")] },
        { name: sameText("Red Bull"), options: [option("250", "ml", "3.10 €")] },
        { name: text("Cappy сок", "Cappy Juice"), options: [option("250", "ml", "2.50 €")] },
        { name: text("Coca-Cola стъкло", "Coca-Cola Glass Bottle"), options: [option("250", "ml", "2.80 €")] },
        { name: text("Томас Хенри", "Thomas Henry"), options: [option("200", "ml", "4.70 €")] },
        { name: text("Вода", "Water"), options: [option("500", "ml", "1.80 €")] },
        { name: text("Вода", "Water"), options: [option("1", "l", "2.50 €")] },
      ],
    },
    {
      id: "alcohol",
      label: text("Алкохол", "Alcohol"),
      title: text("Алкохол", "Alcohol"),
      group: text("Напитки", "Drinks"),
      intro: text(
        "Силни напитки, просеко и ликьори на чаша.",
        "Spirits, prosecco, and liqueurs by the glass."
      ),
      items: [
        { name: text("Текила Olmeca Blanco", "Olmeca Blanco Tequila"), options: [option("50", "ml", "2.90 €")] },
        { name: text("Уиски Jameson", "Jameson Whiskey"), options: [option("50", "ml", "3.90 €")] },
        { name: text("Уиски Bushmills", "Bushmills Whiskey"), options: [option("50", "ml", "3.60 €")] },
        { name: text("Уиски Jack Daniel's", "Jack Daniel's Whiskey"), options: [option("50", "ml", "5.90 €")] },
        { name: text("Уиски Jack Daniel's Honey/Apple", "Jack Daniel's Honey/Apple Whiskey"), options: [option("50", "ml", "6.50 €")] },
        { name: text("Ром Bacardi Carta Blanca/Negra", "Bacardi Carta Blanca/Negra Rum"), options: [option("50", "ml", "3.50 €")] },
        { name: text("Ром Bacardi Spiced Gold", "Bacardi Spiced Gold Rum"), options: [option("50", "ml", "3.90 €")] },
        { name: text("Джин Tanqueray", "Tanqueray Gin"), options: [option("50", "ml", "5.50 €")] },
        { name: text("Просеко Mont Royal", "Mont Royal Prosecco"), options: [option("150", "ml", "2.90 €")] },
        { name: text("Просеко CAV", "CAV Prosecco"), options: [option("0.75", "l", "35.00 €")] },
        { name: text("Ликьор Aperol", "Aperol Liqueur"), options: [option("50", "ml", "3.90 €")] },
        { name: text("Ликьор Campari", "Campari Liqueur"), options: [option("50", "ml", "4.50 €")] },
        { name: text("Ликьор Skinos", "Skinos Liqueur"), options: [option("50", "ml", "6.50 €")] },
      ],
    },
    {
      id: "coffee",
      label: text("Кафе", "Coffee"),
      title: text("Кафе", "Coffee"),
      group: text("Напитки", "Drinks"),
      intro: text(
        "Кафе класики, ледени варианти, чай и какао.",
        "Coffee classics, iced options, tea, and cocoa."
      ),
      items: [
        { name: text("Еспресо", "Espresso"), options: [option("30", "ml", "2.00 €")] },
        { name: text("Еспресо с мляко", "Espresso with Milk"), options: [option("100", "ml", "2.50 €")] },
        { name: text("Късо кафе", "Short Coffee"), options: [option("20", "ml", "2.00 €")] },
        { name: text("Дълго кафе", "Long Coffee"), options: [option("50", "ml", "2.20 €")] },
        { name: text("Американо", "Americano"), options: [option("120", "ml", "2.20 €")] },
        { name: text("Капучино", "Cappuccino"), options: [option("180", "ml", "3.50 €")] },
        { name: text("Лате", "Latte"), options: [option("250", "ml", "3.90 €")] },
        { name: text("Айс лате", "Iced Latte"), options: [option("300", "ml", "4.50 €")] },
        { name: text("Айс какао", "Iced Cocoa"), options: [option("300", "ml", "4.00 €")] },
        { name: text("Айс какао с ягода", "Iced Strawberry Cocoa"), options: [option("300", "ml", "4.50 €")] },
        { name: text("Сироп", "Syrup"), options: [labeledOption("добавка", "add-on", "0.50 €")] },
        { name: text("Алтернативно мляко", "Alternative Milk"), options: [labeledOption("добавка", "add-on", "1.50 €")] },
        { name: text("Флет уайт", "Flat White"), options: [option("180", "ml", "4.50 €")] },
        { name: sameText("Bumble Coffee"), options: [option("300", "ml", "4.50 €")] },
        { name: text("Еспресо тоник", "Espresso Tonic"), options: [option("180", "ml", "3.50 €")] },
        { name: text("Фрапе бяло", "White Frappe"), options: [option("180", "ml", "3.50 €")] },
        { name: text("Фрапе черно", "Black Frappe"), options: [option("180", "ml", "5.00 €")] },
        { name: text("Фрапе ягода", "Strawberry Frappe"), options: [option("180", "ml", "6.00 €")] },
        { name: text("Фрапе оранж", "Orange Frappe"), options: [option("180", "ml", "5.00 €")] },
        { name: text("Фрапе череша", "Cherry Frappe"), options: [option("180", "ml", "4.00 €")] },
        { name: text("Мача лате", "Matcha Latte"), options: [option("330", "ml", "5.20 €")] },
        { name: text("Мача оранж", "Matcha Orange"), options: [option("330", "ml", "5.20 €")] },
        { name: text("Мача тоник", "Matcha Tonic"), options: [option("330", "ml", "5.20 €")] },
        { name: text("Айс матча малина/ягода", "Iced Matcha Raspberry/Strawberry"), options: [option("330", "ml", "5.50 €")] },
        { name: text("Какао", "Cocoa"), options: [option("250", "ml", "3.50 €")] },
        { name: text("Какао с ягода", "Strawberry Cocoa"), options: [option("250", "ml", "3.90 €")] },
        { name: text("Чай", "Tea"), options: [option("200", "ml", "2.00 €")] },
      ],
    },
    {
      id: "smoothies-shakes",
      label: text("Шейкове", "Shakes"),
      title: text("Смутита и шейкове", "Smoothies & Shakes"),
      group: text("Напитки", "Drinks"),
      intro: text(
        "Смутита, фрешове, млечни шейкове, полезни шотове и сладки плодови купи.",
        "Smoothies, fresh juices, milkshakes, healthy shots, and sweet fruit cups."
      ),
      items: [
        {
          name: text("Смути", "Smoothie"),
          detail: text(
            "Вкусове: касис-ананас, манго-ягода и череша-малина.",
            "Flavors: blackcurrant-pineapple, mango-strawberry, and cherry-raspberry."
          ),
          options: [option("400", "ml", "8.90 €")],
        },
        {
          name: text("Фреш от портокал/грейпфрут", "Fresh Orange/Grapefruit Juice"),
          options: [option("400", "ml", "3.60 €")],
        },
        {
          name: sameText("Milkshake"),
          detail: text(
            "Ванилия, ягода, шоколад или банан.",
            "Vanilla, strawberry, chocolate, or banana."
          ),
          options: [option("400", "ml", "5.50 €")],
        },
        {
          name: text("Здравословни шотове", "Healthy Shots"),
          detail: text(
            "Лимон-джинджифил-мед, вишна или портокал-куркума-мед.",
            "Lemon-ginger-honey, sour cherry, or orange-turmeric-honey."
          ),
          options: [option("60", "ml", "2.50 €")],
        },
        {
          name: text("Чаша горска наслада", "Forest Delight Cup"),
          detail: text(
            "Нектарини, киви, ягода, боровинка, малини и топинг по избор.",
            "Nectarines, kiwi, strawberry, blueberry, raspberries, and a topping of your choice."
          ),
          options: [option("350", "g", "5.00 €")],
        },
        {
          name: text("Лятна плодова чаша", "Summer Fruit Cup"),
          detail: text(
            "Диня, пъпеш и топинг по избор.",
            "Watermelon, melon, and a topping of your choice."
          ),
          options: [option("320", "g", "3.00 €")],
        },
      ],
    },
    {
      id: "add-ons",
      label: text("Добавки", "Add-ons"),
      title: text("Добавки", "Add-ons"),
      group: text("Екстри", "Extras"),
      intro: text(
        "Допълнителни сосове и финални акценти от печатното меню.",
        "Extra sauces and finishing touches from the printed menu."
      ),
      items: [
        {
          name: text(
            "Люти чушки, халапеньо, карамелизиран лук, кисели краставички",
            "Hot peppers, jalapeno, caramelized onion, pickles"
          ),
          options: [labeledOption("порция", "portion", "1.50 €")],
        },
        {
          name: text(
            "Бекон, чедър, моцарела, кашкавал",
            "Bacon, cheddar, mozzarella, yellow cheese"
          ),
          options: [labeledOption("порция", "portion", "2.00 €")],
        },
        {
          name: text("Скариди 3 бр.", "3 pcs shrimp"),
          options: [labeledOption("добавка", "add-on", "2.50 €")],
        },
        {
          name: text("Резенчета лимон/лайм", "Lemon/lime slices"),
          options: [labeledOption("добавка", "add-on", "0.50 €")],
        },
      ],
    },
  ],
};
