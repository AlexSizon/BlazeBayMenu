const menuData = {
  venue: {
    name: "Blaze Bay",
    tagLine: "Cafe . Bar",
    hours: "09:00 - 23:00",
    phone: "+359 888 339 031",
    instagram: "@blazebay_beach",
  },
  categories: [
    {
      id: "brioche-sandwiches",
      label: "Brioche",
      title: "Бриош сандвичи",
      group: "Food",
      intro:
        "Soft brioche builds with fries or sweet fries, adapted from the printed menu.",
      items: [
        {
          name: "Brioche Royal & Sweet Fries",
          detail:
            "Бриош, риба тон, авокадо, крема сирене, салата валериана, лук, зелен лук, батат.",
          options: [{ label: "300 гр", value: "10.90 €" }],
        },
        {
          name: "Chicken Brioche & French Fries",
          detail:
            "Бриош, чедър сос, кисели краставички, пилешко грил, моцарела, домат, айсберг, пържени картофи.",
          options: [{ label: "420 гр", value: "9.50 €" }],
        },
        {
          name: "Triple Cheese & Sweet Fries",
          detail:
            "Бриош, моцарела, чедър, кашкавал, чедър сос, батат.",
          options: [{ label: "380 гр", value: "9.50 €" }],
        },
        {
          name: "BBQ Beef & French Fries",
          detail:
            "Бриош, дърпано телешко, карамелизиран лук, гъби, BBQ сос, пържени картофи.",
          options: [{ label: "400 гр", value: "12.90 €" }],
        },
        {
          name: "Premium Brioche & Sweet Fries",
          detail:
            "Бриош, скариди, авокадо, крема сирене, краставица, балсамов унаги сос, батат.",
          options: [{ label: "290 гр", value: "11.90 €" }],
        },
        {
          name: "Vegan BBQ & French Fries",
          detail:
            "Бриош, спаначено кюфте, карамелизиран лук, гъби, BBQ сос, пържени картофи.",
          options: [{ label: "400 гр", value: "10.00 €" }],
        },
      ],
    },
    {
      id: "burgers",
      label: "Burgers",
      title: "Бургери",
      group: "Food",
      intro:
        "Signature burgers with fries, staying close to the printed combinations.",
      items: [
        {
          name: "Cheese Core & French Fries",
          detail:
            "Бриош, телешко кюфте, чедър, кисели краставички, бекон, айсберг, домат, BBQ сос, пържени картофи.",
          options: [{ label: "410 гр", value: "10.00 €" }],
        },
        {
          name: "Smoky Chicken & French Fries",
          detail:
            "Бриош, пилешко грил, чедър, кисели краставички, домат, айсберг, чедър сос, пържени картофи.",
          options: [{ label: "400 гр", value: "10.00 €" }],
        },
        {
          name: "Sweet Daddy & French Fries",
          detail:
            "Бриош, телешко кюфте, карамелизиран лук, чедър, камамбер, боровинка конфитюр, BBQ сос, пържени картофи.",
          options: [{ label: "395 гр", value: "10.00 €" }],
        },
        {
          name: "Vegan Core & French Fries",
          detail:
            "Бриош, спаначено кюфте, чедър, кисели краставички, червен лук, айсберг, домат, BBQ сос, пържени картофи.",
          options: [{ label: "395 гр", value: "9.00 €" }],
        },
      ],
    },
    {
      id: "fried-temptations",
      label: "Fried",
      title: "Пържени изкушения",
      group: "Food",
      intro:
        "Crispy snacks and shareables. Sauce choices on the menu include кетчуп, майонеза, горчица, барбекю, чеснов, чедър и унаги.",
      items: [
        { name: "Пържени картофи", options: [{ label: "180 гр", value: "4.50 €" }] },
        { name: "Сладки картофи", options: [{ label: "170 гр", value: "5.20 €" }] },
        { name: "Скариди темпура", options: [{ label: "200 гр", value: "8.50 €" }] },
        { name: "Панирани миди", options: [{ label: "180 гр", value: "7.50 €" }] },
        { name: "Моцарелени пръчици", options: [{ label: "210 гр", value: "4.50 €" }] },
        { name: "Пилешки хапки", options: [{ label: "170 гр", value: "4.50 €" }] },
        { name: "Чеснови сухари", options: [{ label: "110 гр", value: "3.50 €" }] },
        { name: "Лаваш сулугуни", options: [{ label: "170 гр", value: "6.50 €" }] },
        {
          name: "Лаваш сулугуни с пиле",
          options: [{ label: "240 гр", value: "8.00 €" }],
        },
        { name: "Миди с вино", options: [{ label: "200 гр", value: "8.90 €" }] },
        {
          name: "Миди в сметанов сос",
          options: [{ label: "250 гр", value: "9.50 €" }],
        },
        {
          name: "Скариди с вино",
          options: [{ label: "200 гр", value: "11.90 €" }],
        },
      ],
    },
    {
      id: "cocktails",
      label: "Cocktails",
      title: "Cocktails & Others",
      group: "Drinks",
      intro:
        "Neon-hour cocktails and house favorites from the printed menu.",
      items: [
        { name: "Aperol Spritz", options: [{ label: "350 мл", value: "7.90 €" }] },
        { name: "Margarita", options: [{ label: "250 мл", value: "6.90 €" }] },
        { name: "Pina Colada", options: [{ label: "250 мл", value: "7.50 €" }] },
        { name: "Watermelon Splash", options: [{ label: "250 мл", value: "7.50 €" }] },
        { name: "Peach Beach", options: [{ label: "200 мл", value: "7.50 €" }] },
        { name: "Gin Fizz", options: [{ label: "350 мл", value: "5.90 €" }] },
        { name: "Matcha Gin Fizz", options: [{ label: "350 мл", value: "9.90 €" }] },
        { name: "Daiquiri", options: [{ label: "130 мл", value: "5.90 €" }] },
        {
          name: "Strawberry Daiquiri",
          options: [{ label: "130 мл", value: "6.90 €" }],
        },
        {
          name: "Porn Star Martini",
          options: [{ label: "180 мл", value: "8.50 €" }],
        },
        { name: "Negroni", options: [{ label: "190 мл", value: "7.90 €" }] },
        {
          name: "Negroni Americano",
          options: [{ label: "270 мл", value: "6.50 €" }],
        },
        {
          name: "Negroni Sbagliata",
          options: [{ label: "270 мл", value: "7.50 €" }],
        },
        { name: "Mojito", options: [{ label: "350 мл", value: "7.50 €" }] },
        {
          name: "Mojito с вкус",
          options: [{ label: "350 мл", value: "8.20 €" }],
        },
        { name: "Mai Tai", options: [{ label: "350 мл", value: "7.90 €" }] },
        { name: "Gin Tonic", options: [{ label: "350 мл", value: "5.90 €" }] },
        {
          name: "Honey Jack Sour",
          options: [{ label: "250 мл", value: "7.50 €" }],
        },
        { name: "Skinos Spritz", options: [{ label: "350 мл", value: "8.50 €" }] },
        { name: "Whiskey Sour", options: [{ label: "250 мл", value: "6.50 €" }] },
        { name: "New York Sour", options: [{ label: "180 мл", value: "6.90 €" }] },
        { name: "Long Island", options: [{ label: "350 мл", value: "8.90 €" }] },
      ],
    },
    {
      id: "beer",
      label: "Beer",
      title: "Beer",
      group: "Drinks",
      intro: "Draft and bottled beer selections from the printed list.",
      items: [
        {
          name: "Draft Beer: Hoegaarden",
          options: [
            { label: "330/500 мл", value: "4.50/5.50 €" },
          ],
        },
        {
          name: "Draft Beer: Staropramen",
          options: [
            { label: "330/500 мл", value: "3.50/4.50 €" },
          ],
        },
        { name: "Corona", options: [{ label: "330 мл", value: "5.00 €" }] },
        { name: "Glarus", options: [{ label: "500 мл", value: "4.50 €" }] },
        { name: "Stella Artois", options: [{ label: "330 мл", value: "4.00 €" }] },
        { name: "Heineken", options: [{ label: "330 мл", value: "4.00 €" }] },
        { name: "Budweiser", options: [{ label: "500 мл", value: "4.00 €" }] },
        { name: "Pirinsko", options: [{ label: "500 мл", value: "2.50 €" }] },
      ],
    },
    {
      id: "lemonades",
      label: "Lemonades",
      title: "Лимонади",
      group: "Drinks",
      intro:
        "Fresh lemonades and flavored mixes. Flavors include маракуя-лайм, ягода-череша, малина-бъз, и джинджифил-лайм-мед.",
      items: [
        {
          name: "Линчик",
          detail: "Спрайт, сироп виолетка, фреш лайм, мента.",
          options: [{ label: "350 мл", value: "4.00 €" }],
        },
        {
          name: "Лимонада класик",
          detail: "Фреш лимон, сироп захар, сода.",
          options: [
            { label: "350 мл", value: "3.50 €" },
            { label: "570 мл", value: "4.10 €" },
          ],
        },
        {
          name: "Лимонада с вкус",
          detail: "Избери любимия вкусов микс.",
          options: [
            { label: "350 мл", value: "4.10 €" },
            { label: "570 мл", value: "4.50 €" },
          ],
        },
      ],
    },
    {
      id: "soft-drinks",
      label: "Soft drinks",
      title: "Bottle Drinks",
      group: "Drinks",
      intro: "Chilled soft drinks and mixers.",
      items: [
        { name: "Студен чай Fuze Tea", options: [{ label: "500 мл", value: "2.90 €" }] },
        { name: "Coca Cola", options: [{ label: "330 мл", value: "2.50 €" }] },
        { name: "Schweppes", options: [{ label: "330 мл", value: "2.50 €" }] },
        { name: "Sprite", options: [{ label: "330 мл", value: "2.50 €" }] },
        { name: "Red Bull", options: [{ label: "250 мл", value: "3.10 €" }] },
        { name: "Cappy сок", options: [{ label: "250 мл", value: "2.50 €" }] },
        {
          name: "Coca Cola стъкло",
          options: [{ label: "250 мл", value: "2.80 €" }],
        },
        { name: "Томас Хенри", options: [{ label: "200 мл", value: "4.70 €" }] },
        { name: "Вода", options: [{ label: "500 мл", value: "1.80 €" }] },
        { name: "Вода", options: [{ label: "1 л", value: "2.50 €" }] },
      ],
    },
    {
      id: "alcohol",
      label: "Alcohol",
      title: "Алкохол",
      group: "Drinks",
      intro: "Spirits, prosecco, and liqueurs by the glass.",
      items: [
        {
          name: "Текила Olmeca Blanco",
          options: [{ label: "50 мл", value: "2.90 €" }],
        },
        { name: "Jameson", options: [{ label: "50 мл", value: "3.90 €" }] },
        { name: "Bushmills", options: [{ label: "50 мл", value: "3.60 €" }] },
        { name: "Jack Daniel's", options: [{ label: "50 мл", value: "5.90 €" }] },
        {
          name: "Jack Daniel's Honey/Apple",
          options: [{ label: "50 мл", value: "6.50 €" }],
        },
        {
          name: "Bacardi Mojito",
          options: [{ label: "50 мл", value: "2.50 €" }],
        },
        {
          name: "Bacardi Carta Blanca/Negra",
          options: [{ label: "50 мл", value: "3.50 €" }],
        },
        {
          name: "Bacardi Spiced Gold",
          options: [{ label: "50 мл", value: "3.90 €" }],
        },
        { name: "Gin Tanqueray", options: [{ label: "50 мл", value: "5.50 €" }] },
        {
          name: "Prosecco Mont Royal",
          options: [{ label: "150 мл", value: "2.90 €" }],
        },
        {
          name: "Prosecco Cau 0.75",
          options: [{ label: "750 мл", value: "35 €" }],
        },
        { name: "Ликьор Aperol", options: [{ label: "50 мл", value: "3.90 €" }] },
        { name: "Ликьор Campari", options: [{ label: "50 мл", value: "4.50 €" }] },
        { name: "Ликьор Skinos", options: [{ label: "50 мл", value: "6.50 €" }] },
      ],
    },
    {
      id: "coffee",
      label: "Coffee",
      title: "Coffee",
      group: "Drinks",
      intro: "Coffee classics, iced options, teas, and cocoa.",
      items: [
        { name: "Espresso (нормално)", options: [{ label: "30 мл", value: "2.00 €" }] },
        { name: "Espresso (дълго)", options: [{ label: "100 мл", value: "2.50 €" }] },
        { name: "Късо", options: [{ label: "20 мл", value: "2.00 €" }] },
        { name: "Дълго", options: [{ label: "50 мл", value: "2.20 €" }] },
        { name: "Американо", options: [{ label: "120 мл", value: "2.20 €" }] },
        { name: "Капучино", options: [{ label: "180 мл", value: "3.50 €" }] },
        { name: "Лате", options: [{ label: "250 мл", value: "3.90 €" }] },
        { name: "Айс Лате", options: [{ label: "300 мл", value: "4.50 €" }] },
        { name: "Айс Какао", options: [{ label: "300 мл", value: "4.50 €" }] },
        { name: "Айс Какао ягода", options: [{ label: "300 мл", value: "4.50 €" }] },
        { name: "Сироп", options: [{ label: "добавка", value: "0.50 €" }] },
        { name: "Алтернативно мляко", options: [{ label: "180 мл", value: "1.50 €" }] },
        { name: "Флет Уайт", options: [{ label: "180 мл", value: "4.50 €" }] },
        { name: "Bubble coffee", options: [{ label: "300 мл", value: "4.50 €" }] },
        { name: "Espresso-tonic", options: [{ label: "180 мл", value: "3.50 €" }] },
        { name: "Фрапе бяло", options: [{ label: "180 мл", value: "3.50 €" }] },
        { name: "Фрапе черно", options: [{ label: "180 мл", value: "5.00 €" }] },
        { name: "Фрапе ягода", options: [{ label: "180 мл", value: "6.00 €" }] },
        { name: "Фрапе оранж", options: [{ label: "180 мл", value: "5.00 €" }] },
        { name: "Фрапе череша", options: [{ label: "180 мл", value: "4.00 €" }] },
        { name: "Мача лате", options: [{ label: "330 мл", value: "5.20 €" }] },
        { name: "Мача оранж", options: [{ label: "330 мл", value: "5.20 €" }] },
        {
          name: "Мача тоник",
          detail: "вода",
          options: [{ label: "330 мл", value: "5.20 €" }],
        },
        {
          name: "Айс Мача малина/ягода",
          options: [{ label: "330 мл", value: "5.50 €" }],
        },
        { name: "Какао", options: [{ label: "250 мл", value: "3.50 €" }] },
        { name: "Какао ягода", options: [{ label: "250 мл", value: "3.90 €" }] },
        { name: "Чай", options: [{ label: "200 мл", value: "2.00 €" }] },
      ],
    },
    {
      id: "smoothies-shakes",
      label: "Shakes",
      title: "Smoothies & Shakes",
      group: "Drinks",
      intro:
        "Smoothies, fresh juices, milkshakes, healthy shots, and sweet cups.",
      items: [
        {
          name: "Смути",
          detail: "Вкусове: касис-ананас, манго-ягода, череша-малина.",
          options: [{ label: "400 мл", value: "8.90 €" }],
        },
        {
          name: "Фреш от портокал/грейпфрут",
          options: [{ label: "400 мл", value: "3.60 €" }],
        },
        {
          name: "Milkshake",
          detail: "Ванилия, ягода, шоколад, банан.",
          options: [{ label: "400 мл", value: "5.50 €" }],
        },
        {
          name: "Здравословни шотове",
          detail: "Лимон, джинджифил, мед; вишна; портокал, куркума, мед.",
          options: [{ label: "60 мл", value: "2.50 €" }],
        },
        {
          name: "Чаша горска наслада",
          detail: "Нектарини, киви, ягода, боровинка, малини, топинг по избор.",
          options: [{ label: "350 гр", value: "5.00 €" }],
        },
        {
          name: "Лятна плодова чаша",
          detail: "Диня, пъпеш, топинг по избор.",
          options: [{ label: "320 гр", value: "3.00 €" }],
        },
      ],
    },
    {
      id: "add-ons",
      label: "Add-ons",
      title: "Добавки",
      group: "Extras",
      intro: "Extra sauces and finishing touches from the printed menu.",
      items: [
        {
          name: "Люти, халапеньо, карамелизиран лук, кисели краставички",
          options: [{ label: "порция", value: "1.50 €" }],
        },
        {
          name: "Бекон, чедър, моцарела, кашкавал",
          options: [{ label: "порция", value: "2.00 €" }],
        },
        {
          name: "Скариди 3 бр",
          options: [{ label: "добавка", value: "2.50 €" }],
        },
        {
          name: "Резенчета лимон/лайм",
          options: [{ label: "добавка", value: "0.50 €" }],
        },
      ],
    },
  ],
};
