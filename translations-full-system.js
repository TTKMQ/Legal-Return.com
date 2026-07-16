/**
 * ╔════════════════════════════════════════════════════════════════════╗
 * ║  LEGALRETURN — ПОЛНАЯ СИСТЕМА ЛОКАЛИЗАЦИИ v2.0                   ║
 * ║  Профессиональная локализация с валютами и номерами               ║
 * ╚════════════════════════════════════════════════════════════════════╝
 * 
 * Система включает:
 * ✓ Полный перевод всех текстов на 3 языках
 * ✓ Динамическая подстановка валют (RUB/EUR)
 * ✓ Форматирование номеров телефонов по стране
 * ✓ Управление контактной информацией
 * ✓ Автоматическое определение языка по IP
 */

// ═══════════════════════════════════════════════════════════════════════════
// ИНФОРМАЦИЯ ПО СТРАНАМ (контакты, валюты, форматы номеров)
// ═══════════════════════════════════════════════════════════════════════════

const COUNTRY_DATA = {
  ru: {
    name: 'Русский',
    country: 'Russia',
    currency: {
      code: 'RUB',
      symbol: '₽',
      position: 'after', // ₽ ставится после числа
      decimal: ',',      // 1 000 000,00
      thousands: ' '     // пробел как разделитель
    },
    phone: {
      prefix: '+7',
      length: 11,
      format: '+7 (###) ###-##-##',
      telegram_botname: '@Legal_Return_bot',
      support_number: '+7 (495) 123-45-67'
    },
    timezone: 'Europe/Moscow'
  },
  lt: {
    name: 'Lietuvių',
    country: 'Lithuania',
    currency: {
      code: 'EUR',
      symbol: '€',
      position: 'before', // € ставится до числа
      decimal: ',',
      thousands: ' '
    },
    phone: {
      prefix: '+370',
      length: 12,
      format: '+370 ### #####',
      telegram_botname: '@Legal_Return_bot',
      support_number: '+370 5 268 7777'
    },
    timezone: 'Europe/Vilnius'
  },
  lv: {
    name: 'Latviski',
    country: 'Latvia',
    currency: {
      code: 'EUR',
      symbol: '€',
      position: 'before',
      decimal: ',',
      thousands: ' '
    },
    phone: {
      prefix: '+371',
      length: 12,
      format: '+371 ## ### ###',
      telegram_botname: '@Legal_Return_bot',
      support_number: '+371 6 7123 456'
    },
    timezone: 'Europe/Riga'
  }
};

// ═══════════════════════════════════════════════════════════════════════════
// ПОЛНЫЙ СЛОВАРЬ ПЕРЕВОДОВ (ВСЕ ТЕКСТЫ САЙТА)
// ═══════════════════════════════════════════════════════════════════════════

const FULL_TRANSLATIONS = {
  // ─────────────────────────────────────────────────────────────────────────
  // НАВИГАЦИЯ И ЗАГОЛОВКИ
  // ─────────────────────────────────────────────────────────────────────────
  ru: {
    // === НАВИГАЦИЯ ===
    'nav-cases': 'Ситуации',
    'nav-checklist': 'Что делать',
    'nav-process': 'Как работает',
    'nav-faq': 'Вопросы',
    'nav-why': 'Почему мы',
    'nav-cta': 'Вернуть деньги',

    // === HERO СЕКЦИЯ ===
    'hero-tag': '№1 по возврату средств в России · Работаем 24/7',
    'hero-title': 'Вас обманули?',
    'hero-subtitle1': 'Мы разберёмся.',
    'hero-subtitle2': 'Быстро. Чётко.',
    'hero-desc': 'LegalReturn — профессиональная защита от мошенников. Анализируем схемы, строим юридическую стратегию и ведём дело до полного возврата средств. Всё дистанционно — через Telegram.',
    'hero-btn-main': 'Вернуть деньги',
    'hero-btn-secondary': 'Как это работает',
    'hero-btn-callback': 'Обратная связь',

    // === СТАТИСТИКА ===
    'stat-cases': 'успешных дел',
    'stat-response': 'первый ответ',
    'stat-returned': 'возвращено клиентам',
    'stat-rating': 'средний рейтинг',

    // === ДОВЕРИЕ ===
    'trust-anonymous': 'Анонимно',
    'trust-response': 'Ответ за 24 ч',
    'trust-safe': 'Безопасно',

    // === СОЦИАЛЬНОЕ ДОКАЗАТЕЛЬСТВО ===
    'social-proof': 'человек уже вернули свои деньги',

    // === ОСНОВНЫЕ ТИПЫ МОШЕННИЧЕСТВА (TICKER) ===
    'fraud-phone': 'Телефонное мошенничество',
    'fraud-investment': 'Инвестиционные платформы',
    'fraud-phishing': 'Фишинговые сайты',
    'fraud-analysis': 'Анализ транзакций',
    'fraud-legal': 'Юридические рекомендации',
    'fraud-consultation': 'Дистанционная консультация',
    'fraud-telegram': 'Telegram',
    'fraud-crypto': 'Криптовалютное мошенничество',
    'fraud-romance': 'Романтические аферы',
    'fraud-marketplace': 'Поддельные маркетплейсы',
    'fraud-consumer': 'Защита прав потребителей',
    'fraud-blocking': 'Блокировка транзакций',
    'fraud-analysis2': 'Анализ переписки',
    'fraud-docs': 'Поддельные документы',

    // === ГОРЯЧИЕ ВОПРОСЫ ===
    'hot-q1': 'Что будет, если я обращусь в LegalReturn?',
    'hot-q1-a': 'Мы проанализируем вашу ситуацию и предложим оптимальный способ вернуть деньги. Если нужно — поговорим с банком, обратимся в полицию или подадим в суд.',
    'hot-q2': 'Можно ли вернуть деньги, если прошло много времени?',
    'hot-q2-a': 'Да, можно. Сроки давности варьируются. Каждый случай рассматриваем индивидуально.',
    'hot-q3': 'Сколько стоит услуга?',
    'hot-q3-a': 'Мы берём процент от возвращённой суммы. Если денег не вернём — не платите. No win, no fee.',

    // === ЧЕКЛИСТ ===
    'checklist-title': 'Что нужно при первом обращении',
    'checklist-1': 'Описание ситуации',
    'checklist-1-desc': 'Расскажите, как именно вас обманули',
    'checklist-2': 'Скриншоты переписки',
    'checklist-2-desc': 'Все сообщения и доказательства контакта',
    'checklist-3': 'Реквизиты платежей',
    'checklist-3-desc': 'На какие счета/кошельки пошли деньги',
    'checklist-4': 'Личные данные',
    'checklist-4-desc': 'Ваше имя, номер телефона, email',
    'checklist-note': 'Ничего сложного — мы поможем собрать всё нужное',

    // === ПРОЦЕСС ===
    'process-title': 'Как мы работаем',
    'process-step1': 'Анализ',
    'process-step1-desc': 'Изучаем вашу ситуацию и ищем способ вернуть деньги',
    'process-step2': 'Стратегия',
    'process-step2-desc': 'Разрабатываем оптимальный юридический путь',
    'process-step3': 'Действие',
    'process-step3-desc': 'Обращаемся в банк, полицию или готовим иск',
    'process-step4': 'Успех',
    'process-step4-desc': 'Деньги вернулись на ваш счет',

    // === FAQ ===
    'faq-title': 'Вопросы и ответы',
    'faq-q1': 'Что если у меня нет доказательств?',
    'faq-q1-a': 'Не проблема. По номеру телефона, email или кошельку мы найдём информацию через интернет.',
    'faq-q2': 'Сколько времени займёт?',
    'faq-q2-a': 'В среднем 2-3 месяца. Сроки зависят от сложности дела.',
    'faq-q3': 'Гарантируете ли вы результат?',
    'faq-q3-a': 'Гарантируем максимальные усилия. Платите только если вернули деньги.',

    // === ФОРМА ОБРАТНОЙ СВЯЗИ ===
    'feedback-title': 'Рассказать о проблеме',
    'feedback-name': 'Ваше имя',
    'feedback-phone': 'Номер телефона',
    'feedback-submit': 'Отправить',
    'feedback-success': 'Спасибо! Мы свяжемся с вами в течение 24 часов',
    'feedback-error-name': 'Введите имя (минимум 2 символа)',
    'feedback-error-phone': 'Введите корректный номер телефона',

    // === FOOTER ===
    'footer-text': 'LegalReturn — профессиональная защита от мошенников. Возвращаем деньги через суд, полицию и банки.',
    'footer-rights': 'Все права защищены.',
    'footer-privacy': 'Политика конфиденциальности',
    'footer-terms': 'Условия использования',
    'footer-contact': 'Контакты',

    // === GENERAL ===
    '24h': '24 ч',
    'cases': 'дел',
    'people': 'человек',
    'yes': 'Да',
    'no': 'Нет',
    'back': 'Назад',
    'next': 'Далее',
    'close': 'Закрыть',
    'scroll': 'Scroll'
  },

  // ─────────────────────────────────────────────────────────────────────────
  // ЛИТОВСКИЙ ЯЗЫК
  // ─────────────────────────────────────────────────────────────────────────
  lt: {
    // === НАВИГАЦИЯ ===
    'nav-cases': 'Situacijos',
    'nav-checklist': 'Ką daryti',
    'nav-process': 'Kaip veikia',
    'nav-faq': 'Klausimai',
    'nav-why': 'Kodėl mes',
    'nav-cta': 'Grąžinti pinigus',

    // === HERO СЕКЦИЯ ===
    'hero-tag': 'Nr. 1 pinigų grąžinimas Lietuvoje · Dirbame 24/7',
    'hero-title': 'Ar jus apgavo?',
    'hero-subtitle1': 'Mes išsiaiškinsime.',
    'hero-subtitle2': 'Greitai. Aiškiai.',
    'hero-desc': 'LegalReturn — profesionali apsauga nuo sukčių. Analizuojame schemas, kuriame teisinę strategiją ir vedame bylą iki visiško pinigų grąžinimo. Viskas nuotoliniu būdu — per Telegram.',
    'hero-btn-main': 'Grąžinti pinigus',
    'hero-btn-secondary': 'Kaip tai veikia',
    'hero-btn-callback': 'Atsiliepimai',

    // === СТАТИСТИКА ===
    'stat-cases': 'sėkmingų bylų',
    'stat-response': 'pirmas atsakymas',
    'stat-returned': 'grąžinta klientams',
    'stat-rating': 'vidutinis įvertinimas',

    // === ДОВЕРИЕ ===
    'trust-anonymous': 'Anoniminiu',
    'trust-response': 'Atsakymas per 24 h',
    'trust-safe': 'Saugiai',

    // === СОЦИАЛЬНОЕ ДОКАЗАТЕЛЬСТВО ===
    'social-proof': 'žmonės jau grąžino savo pinigus',

    // === ОСНОВНЫЕ ТИПЫ МОШЕННИЧЕСТВА ===
    'fraud-phone': 'Telefoninis sukčiavimas',
    'fraud-investment': 'Investicinės platformos',
    'fraud-phishing': 'Phishing svetainės',
    'fraud-analysis': 'Sandorių analizė',
    'fraud-legal': 'Teisinės rekomendacijos',
    'fraud-consultation': 'Nuotolinis konsultavimas',
    'fraud-telegram': 'Telegram',
    'fraud-crypto': 'Kriptovaliutos sukčiavimas',
    'fraud-romance': 'Romantiški sukčiai',
    'fraud-marketplace': 'Padirbtosios prekybos vietos',
    'fraud-consumer': 'Vartotojų teisių apsauga',
    'fraud-blocking': 'Sandorių blokavimas',
    'fraud-analysis2': 'Korespondencijos analizė',
    'fraud-docs': 'Padirbti dokumentai',

    // === ГОРЯЧИЕ ВОПРОСЫ ===
    'hot-q1': 'Kas bus, jei kreipsiuos į LegalReturn?',
    'hot-q1-a': 'Analizuosime jūsų situaciją ir pasiūlysime optimalų būdą grąžinti pinigus. Jei reikia — kalbinsimės su banka, kreipisimės į policiją arba paduosime ieškinį.',
    'hot-q2': 'Ar galima grąžinti pinigus, jei praėjo daug laiko?',
    'hot-q2-a': 'Taip, galima. Senaties terminai skiriasi. Kiekvieną atvejį nagrinėjame individualiai.',
    'hot-q3': 'Kiek kainuoja paslauga?',
    'hot-q3-a': 'Imame procentą iš grąžintos sumos. Jei pinigų negrąžinsime — nemokate. Jokio atlygio — jokaus rezultato.',

    // === ЧЕКЛИСТ ===
    'checklist-title': 'Ką reikia pirmą kartą susisiekiant',
    'checklist-1': 'Situacijos aprašymas',
    'checklist-1-desc': 'Pasakykite, kaip tiksliai jus apgavo',
    'checklist-2': 'Korespondencijos ekrano kopijos',
    'checklist-2-desc': 'Visos žinutės ir žiniatinklio kontakto įrodymai',
    'checklist-3': 'Mokėjimo rekvizitai',
    'checklist-3-desc': 'Kurioms sąskaitoms / piniginėms nusidėjo pinigai',
    'checklist-4': 'Asmeniniai duomenys',
    'checklist-4-desc': 'Jūsų vardas, telefono numeris, el. paštas',
    'checklist-note': 'Nieko sudėtingo — padėsime surinkti viską reikalingą',

    // === ПРОЦЕСС ===
    'process-title': 'Kaip mes dirbame',
    'process-step1': 'Analizė',
    'process-step1-desc': 'Tirinėjame jūsų situaciją ir ieškome būdo grąžinti pinigus',
    'process-step2': 'Strategija',
    'process-step2-desc': 'Kuriame optimalią teisinę taktiką',
    'process-step3': 'Veiksmas',
    'process-step3-desc': 'Kreipiamės į banką, policiją arba ruošiame ieškinį',
    'process-step4': 'Sėkmė',
    'process-step4-desc': 'Pinigai grąžinti į jūsų sąskaitą',

    // === FAQ ===
    'faq-title': 'Dažnai užduodami klausimai',
    'faq-q1': 'Ką daryti, jei neturiu įrodymų?',
    'faq-q1-a': 'Nuo bėdos. Pagal telefono numerį, el. paštą ar piniginę rasime informaciją internete.',
    'faq-q2': 'Kiek laiko užtruks?',
    'faq-q2-a': 'Vidutiniškai 2-3 mėnesiai. Terminai priklauso nuo bylos sudėtingumo.',
    'faq-q3': 'Ar garantuojate rezultatą?',
    'faq-q3-a': 'Garantuojame maksimalias pastangas. Mokate tik tada, kai pinigai grąžinti.',

    // === ФОРМА ОБРАТНОЙ СВЯЗИ ===
    'feedback-title': 'Pasakyk apie problemą',
    'feedback-name': 'Jūsų vardas',
    'feedback-phone': 'Telefono numeris',
    'feedback-submit': 'Siųsti',
    'feedback-success': 'Ačiū! Su jumis susisieksime per 24 valandas',
    'feedback-error-name': 'Įveskite vardą (mažiausiai 2 simboliai)',
    'feedback-error-phone': 'Įveskite teisingą telefono numerį',

    // === FOOTER ===
    'footer-text': 'LegalReturn — profesionali apsauga nuo sukčių. Grąžiname pinigus per teismą, policiją ir bankus.',
    'footer-rights': 'Visos teisės saugomos.',
    'footer-privacy': 'Privatumo politika',
    'footer-terms': 'Naudojimo sąlygos',
    'footer-contact': 'Kontaktai',

    // === GENERAL ===
    '24h': '24 h',
    'cases': 'bylų',
    'people': 'žmonių',
    'yes': 'Taip',
    'no': 'Ne',
    'back': 'Atgal',
    'next': 'Toliau',
    'close': 'Uždaryti',
    'scroll': 'Slinkti'
  },

  // ─────────────────────────────────────────────────────────────────────────
  // ЛАТЫШСКИЙ ЯЗЫК
  // ─────────────────────────────────────────────────────────────────────────
  lv: {
    // === НАВИГАЦИЯ ===
    'nav-cases': 'Situācijas',
    'nav-checklist': 'Ko darīt',
    'nav-process': 'Kā tas darbojas',
    'nav-faq': 'Jautājumi',
    'nav-why': 'Kāpēc mēs',
    'nav-cta': 'Atgūt naudu',

    // === HERO СЕКЦИЯ ===
    'hero-tag': 'Nr. 1 naudas atgriešanā Latvijā · Strādājam 24/7',
    'hero-title': 'Vai jūs tika piekrāpti?',
    'hero-subtitle1': 'Mēs to izdomāsim.',
    'hero-subtitle2': 'Ātri. Skaidri.',
    'hero-desc': 'LegalReturn — profesionāla aizsardzība pret krāpniekiem. Analizējam shēmas, veidojam juridisko stratēģiju un vadām lietu līdz pilnīgai naudas atgriešanai. Viss attālināti — caur Telegram.',
    'hero-btn-main': 'Atgūt naudu',
    'hero-btn-secondary': 'Kā tas darbojas',
    'hero-btn-callback': 'Atsauksmes',

    // === СТАТИСТИКА ===
    'stat-cases': 'veiksmīgu lietu',
    'stat-response': 'pirmā atbilde',
    'stat-returned': 'atgriezta klientiem',
    'stat-rating': 'vidējais novērtējums',

    // === ДОВЕРИЕ ===
    'trust-anonymous': 'Anonīmi',
    'trust-response': 'Atbilde 24 h laikā',
    'trust-safe': 'Draudzīgi',

    // === СОЦИАЛЬНОЕ ДОКАЗАТЕЛЬСТВО ===
    'social-proof': 'cilvēki jau atguva savu naudu',

    // === ОСНОВНЫЕ ТИПЫ МОШЕННИЧЕСТВА ===
    'fraud-phone': 'Telefona krāpšana',
    'fraud-investment': 'Ieguldījumu platformas',
    'fraud-phishing': 'Phishing vietnes',
    'fraud-analysis': 'Transakciju analīze',
    'fraud-legal': 'Juridiski ieteikumi',
    'fraud-consultation': 'Attālināta konsultācija',
    'fraud-telegram': 'Telegram',
    'fraud-crypto': 'Kriptovalūtas krāpšana',
    'fraud-romance': 'Romantiskas krāpšanas',
    'fraud-marketplace': 'Viltoti tirgus vietas',
    'fraud-consumer': 'Patērētāju tiesību aizsardzība',
    'fraud-blocking': 'Transakciju bloķēšana',
    'fraud-analysis2': 'Korespondences analīze',
    'fraud-docs': 'Viltotas dokumenti',

    // === ГОРЯЧИЕ ВОПРОСЫ ===
    'hot-q1': 'Kas notiks, ja vērsīšos pie LegalReturn?',
    'hot-q1-a': 'Mēs analizēsim jūsu situāciju un piedāvāsim optimālu naudu atgriešanas veidu. Ja nepieciešams - runāsim ar banku, vērsimies pie policijas vai iesniegsum prasību.',
    'hot-q2': 'Vai var atgūt naudu, ja ir pagājis daudz laika?',
    'hot-q2-a': 'Jā, var. Noilguma termiņi atšķiras. Katru gadījumu aplūkojam individuāli.',
    'hot-q3': 'Cik maksā pakalpojums?',
    'hot-q3-a': 'Ņemam procentuālo daļu no atgriežamās summas. Ja naudu neatgriežam - nemaksāt. Nav rezultāta - nav maksas.',

    // === ЧЕКЛИСТ ===
    'checklist-title': 'Kas nepieciešams pirmajā kontaktā',
    'checklist-1': 'Situācijas apraksts',
    'checklist-1-desc': 'Pastāstiet, kā jūs tika piekrāpti',
    'checklist-2': 'Sarakste ekrānuzņēmumi',
    'checklist-2-desc': 'Visi ziņojumi un kontakta pierādījumi',
    'checklist-3': 'Maksājuma detaļas',
    'checklist-3-desc': 'Uz kuriem kontiem / maku-musu naudas nonāca',
    'checklist-4': 'Personīgie dati',
    'checklist-4-desc': 'Jūsu vārds, tālruņa numurs, e-pasts',
    'checklist-note': 'Nekas sarežģīts - palīdzēsim salikt visu nepieciešamo',

    // === ПРОЦЕСС ===
    'process-title': 'Kā mēs strādājam',
    'process-step1': 'Analīze',
    'process-step1-desc': 'Pārbaudām jūsu situāciju un meklējam naudas atgriešanas veidu',
    'process-step2': 'Stratēģija',
    'process-step2-desc': 'Izstrādājam optimālu juridisko stratēģiju',
    'process-step3': 'Darbība',
    'process-step3-desc': 'Vēršamies pie bankas, policijas vai sagatavojam prasību',
    'process-step4': 'Veiksme',
    'process-step4-desc': 'Nauda atgriezta jūsu kontā',

    // === FAQ ===
    'faq-title': 'Jautājumi un atbildes',
    'faq-q1': 'Kā būtu, ja man nav pierādījumu?',
    'faq-q1-a': 'Nav problēmas. Pēc tālruņa numura, e-pasta vai maciņa mēs atradam informāciju internetā.',
    'faq-q2': 'Cik ilgs laiks to prasīs?',
    'faq-q2-a': 'Vidēji 2-3 mēneši. Laiki ir atkarīgi no lietas sarežģītības.',
    'faq-q3': 'Vai jūs garantējat rezultātu?',
    'faq-q3-a': 'Garantējam maksimālas pūles. Jūs maksājat tikai tad, kad nauda tiek atgriezta.',

    // === ФОРМА ОБРАТНОЙ СВЯЗИ ===
    'feedback-title': 'Stāstiet par problēmu',
    'feedback-name': 'Jūsu vārds',
    'feedback-phone': 'Tālruņa numurs',
    'feedback-submit': 'Sūtīt',
    'feedback-success': 'Paldies! Ar jums sazināsimies 24 stundu laikā',
    'feedback-error-name': 'Ievadiet vārdu (vismaz 2 rakstzīmes)',
    'feedback-error-phone': 'Ievadiet pareizu tālruņa numuru',

    // === FOOTER ===
    'footer-text': 'LegalReturn — profesionāla aizsardzība pret krāpniekiem. Atgriežam naudu caur tiesu, policiju un bankām.',
    'footer-rights': 'Visas tiesības aizsargātas.',
    'footer-privacy': 'Privātuma politika',
    'footer-terms': 'Lietošanas noteikumi',
    'footer-contact': 'Kontakti',

    // === GENERAL ===
    '24h': '24 h',
    'cases': 'lietu',
    'people': 'cilvēku',
    'yes': 'Jā',
    'no': 'Nē',
    'back': 'Atpakaļ',
    'next': 'Tālāk',
    'close': 'Aizvērt',
    'scroll': 'Ritināt'
  }
};

// ═══════════════════════════════════════════════════════════════════════════
// КЛАСС ЛОКАЛИЗАЦИИ (Advanced Professional Level)
// ═══════════════════════════════════════════════════════════════════════════

class LocalizationSystem {
  constructor() {
    this.currentLang = localStorage.getItem('lr_language') || 'ru';
    this.defaultLang = 'ru';
    this.init();
  }

  async init() {
    if (!localStorage.getItem('lr_language')) {
      await this.detectCountry();
    }
    this.updateUI();
  }

  async detectCountry() {
    try {
      const response = await fetch('https://ipapi.co/json/', { method: 'GET' });
      const data = await response.json();
      const country = data.country_code;
      
      if (country === 'LT') this.currentLang = 'lt';
      else if (country === 'LV') this.currentLang = 'lv';
      else this.currentLang = 'ru';
      
      localStorage.setItem('lr_language', this.currentLang);
    } catch (err) {
      console.log('IP detection failed, using default');
      this.currentLang = this.defaultLang;
    }
  }

  setLanguage(lang) {
    if (FULL_TRANSLATIONS[lang]) {
      this.currentLang = lang;
      localStorage.setItem('lr_language', lang);
      this.updateUI();
      window._redrawCaptcha?.();
    }
  }

  getText(key) {
    return FULL_TRANSLATIONS[this.currentLang]?.[key] || FULL_TRANSLATIONS[this.defaultLang][key] || key;
  }

  getCurrency() {
    return COUNTRY_DATA[this.currentLang].currency;
  }

  getPhoneInfo() {
    return COUNTRY_DATA[this.currentLang].phone;
  }

  getCountryInfo() {
    return COUNTRY_DATA[this.currentLang];
  }

  /**
   * Форматирование денежной суммы
   * @param {number} amount - Сумма в минимальных единицах (копейки/центы)
   * @returns {string} Отформатированная строка (например: "€ 1 234,56" или "1 234,56 ₽")
   */
  formatCurrency(amount) {
    const currency = this.getCurrency();
    const numberValue = (amount / 100).toFixed(2);
    
    const parts = numberValue.split('.');
    const integerPart = parts[0];
    const decimalPart = parts[1];
    
    // Форматирование целой части (тысячные разделители)
    const formatted = integerPart.replace(/\B(?=(\d{3})+(?!\d))/g, currency.thousands);
    const fullNumber = formatted + currency.decimal + decimalPart;
    
    // Позиционирование валюты
    if (currency.position === 'before') {
      return `${currency.symbol} ${fullNumber}`;
    } else {
      return `${fullNumber} ${currency.symbol}`;
    }
  }

  /**
   * Форматирование номера телефона
   * @param {string} phoneNumber - Номер телефона только из цифр
   * @returns {string} Отформатированный номер
   */
  formatPhoneNumber(phoneNumber) {
    const phoneInfo = this.getPhoneInfo();
    
    // Очистка от всех символов кроме цифр
    let cleaned = phoneNumber.replace(/\D/g, '');
    
    // Удаление кода страны если он уже есть в начале
    if (cleaned.startsWith(phoneInfo.prefix.replace('+', ''))) {
      cleaned = cleaned.substring(phoneInfo.prefix.replace('+', '').length);
    }
    
    // Форматирование по шаблону
    let format = phoneInfo.format;
    let formattedNumber = phoneInfo.prefix + ' ';
    let digitIndex = 0;
    
    for (let i = phoneInfo.prefix.length + 2; i < format.length && digitIndex < cleaned.length; i++) {
      if (format[i] === '#') {
        formattedNumber += cleaned[digitIndex];
        digitIndex++;
      } else {
        formattedNumber += format[i];
      }
    }
    
    return formattedNumber;
  }

  /**
   * Валидация номера телефона
   * @param {string} phoneNumber - Номер телефона
   * @returns {boolean} Валиден ли номер
   */
  isValidPhoneNumber(phoneNumber) {
    const cleaned = phoneNumber.replace(/\D/g, '');
    const phoneInfo = this.getPhoneInfo();
    return cleaned.length >= phoneInfo.length - 2; // Небольшой допуск
  }

  /**
   * Получение поддерживающего номера для текущей страны
   * @returns {string} Номер телефона поддержки
   */
  getSupportNumber() {
    return this.getPhoneInfo().support_number;
  }

  /**
   * Получение имени бота Telegram для текущей страны
   * @returns {string} Имя бота (@username)
   */
  getTelegramBotName() {
    return this.getPhoneInfo().telegram_botname;
  }

  /**
   * Обновление UI - основной метод для переводов
   */
  updateUI() {
    document.documentElement.lang = this.currentLang;
    document.documentElement.setAttribute('data-country', this.currentLang);
    
    // Обновление всех элементов с data-text атрибутом
    document.querySelectorAll('[data-text]').forEach(el => {
      const key = el.dataset.text;
      el.textContent = this.getText(key);
    });
    
    // Обновление всех элементов с data-html атрибутом
    document.querySelectorAll('[data-html]').forEach(el => {
      const key = el.dataset.html;
      el.innerHTML = this.getText(key);
    });
    
    // Обновление языка в переключателе
    document.querySelectorAll('.lang-btn').forEach(btn => {
      btn.classList.remove('active');
      if (btn.dataset.lang === this.currentLang) {
        btn.classList.add('active');
      }
    });

    // Обновление номеров телефонов
    this.updatePhoneNumbers();

    // Обновление валют
    this.updateCurrencies();

    // Обновление ссылок на Telegram
    this.updateTelegramLinks();

    // Обновление форм валидации
    this.updateFormValidation();
  }

  /**
   * Обновление всех номеров телефонов на странице
   */
  updatePhoneNumbers() {
    const phoneInfo = this.getPhoneInfo();
    const supportNumber = this.getSupportNumber();
    
    // Обновление элементов с классом phone-number
    document.querySelectorAll('.phone-number, [data-phone]').forEach(el => {
      if (el.dataset.phone) {
        el.textContent = supportNumber;
      }
    });
    
    // Обновление атрибутов href для телефонных ссылок
    document.querySelectorAll('a[href*="tel:"]').forEach(el => {
      el.href = 'tel:' + phoneInfo.support_number.replace(/\D/g, '');
      el.textContent = phoneInfo.support_number;
    });
  }

  /**
   * Обновление всех валют на странице
   */
  updateCurrencies() {
    const currency = this.getCurrency();
    
    document.querySelectorAll('[data-currency]').forEach(el => {
      const amount = parseInt(el.dataset.currency);
      el.textContent = this.formatCurrency(amount);
    });
  }

  /**
   * Обновление ссылок на Telegram
   */
  updateTelegramLinks() {
    const botName = this.getTelegramBotName();
    
    document.querySelectorAll('a[href*="t.me"], a[href*="telegram"]').forEach(el => {
      if (el.getAttribute('href').includes('Legal_Return')) {
        el.setAttribute('href', 'https://t.me/' + botName.replace('@', ''));
      }
    });
  }

  /**
   * Обновление валидации форм (форматы номеров)
   */
  updateFormValidation() {
    const phoneInfo = this.getPhoneInfo();
    
    // Обновление input[type="tel"]
    document.querySelectorAll('input[type="tel"]').forEach(input => {
      input.placeholder = phoneInfo.format;
      input.dataset.phoneFormat = phoneInfo.format;
      input.addEventListener('input', (e) => {
        e.target.value = this.formatPhoneNumber(e.target.value);
      });
    });
  }
}

// ═══════════════════════════════════════════════════════════════════════════
// ИНИЦИАЛИЗАЦИЯ
// ═══════════════════════════════════════════════════════════════════════════

let localization = null;

document.addEventListener('DOMContentLoaded', () => {
  localization = new LocalizationSystem();
  
  // Обработчики для кнопок языков
  document.querySelectorAll('.lang-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      localization.setLanguage(btn.dataset.lang);
    });
  });
});

// Экспорт для использования в других скриптах
window.localization = localization;
window.COUNTRY_DATA = COUNTRY_DATA;
window.FULL_TRANSLATIONS = FULL_TRANSLATIONS;
