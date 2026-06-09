const STORAGE_KEY = "mbz-hdd-crm-stage-2-v2";
const AUTO_BACKUP_KEY = "mbz-hdd-crm-auto-backup-json";
const AUTO_BACKUP_META_KEY = "mbz-hdd-crm-auto-backup-meta";

const seedData = {
  clients: [
    {
      id: "c1",
      name: "ГНБ СтройПроект",
      legalName: "ООО ГНБ СтройПроект",
      inn: "7728491201",
      type: "Подрядчик ГНБ",
      region: "Москва и МО",
      city: "Москва",
      stage: "КП",
      status: "Активный",
      worksRegion: "ЦФО",
      objects: "дороги, газовые сети, кабельные трассы",
      rigs: "Vermeer D100x140, XCMG XZ680",
      avgDiameter: "315-630 мм",
      avgLength: "280-620 м",
      soils: "суглинок, песок, обводненные участки",
      season: "март-ноябрь",
      monthlyPotentialTons: 120,
      currentSupplier: "импортный бентонит",
      productInterest: "MBZ DrillGel",
      forecastRevenue: 5400000,
      forecastTons: 120,
      nextStep: "Согласовать график поставки на объект МКАД",
      risk: false
    },
    {
      id: "c2",
      name: "ВолгаБурСервис",
      legalName: "ООО ВолгаБурСервис",
      inn: "6312057788",
      type: "Подрядчик ГНБ",
      region: "Поволжье",
      city: "Самара",
      stage: "Образец",
      status: "Переговоры",
      worksRegion: "Самарская область, Татарстан",
      objects: "переходы под реками, нефтегазовая инфраструктура",
      rigs: "Ditch Witch JT100, Goodeng GS600",
      avgDiameter: "225-500 мм",
      avgLength: "180-450 м",
      soils: "песок, супесь, глина",
      season: "апрель-октябрь",
      monthlyPotentialTons: 58,
      currentSupplier: "локальный дилер",
      productInterest: "BentoHDD Premium",
      forecastRevenue: 2450000,
      forecastTons: 54,
      nextStep: "Получить обратную связь по образцу",
      risk: true
    },
    {
      id: "c3",
      name: "УралТранш",
      legalName: "АО УралТранш",
      inn: "6671199032",
      type: "Генподрядчик",
      region: "Урал",
      city: "Екатеринбург",
      stage: "Испытание",
      status: "Техническая проверка",
      worksRegion: "Свердловская область",
      objects: "промышленные площадки, водоканал",
      rigs: "Herrenknecht HDD, XCMG XZ1000",
      avgDiameter: "500-800 мм",
      avgLength: "350-900 м",
      soils: "песчаник, глина, щебень",
      season: "круглогодично",
      monthlyPotentialTons: 86,
      currentSupplier: "европейский аналог",
      productInterest: "BentoHDD Plus",
      forecastRevenue: 3980000,
      forecastTons: 88,
      nextStep: "Передать протокол технолога",
      risk: false
    },
    {
      id: "c4",
      name: "СибирьГНБ",
      legalName: "ООО СибирьГНБ",
      inn: "5406813310",
      type: "Постоянный клиент",
      region: "Сибирь",
      city: "Новосибирск",
      stage: "Заказ",
      status: "Повторная закупка",
      worksRegion: "Новосибирская область, Алтай",
      objects: "связь, ЖКХ, дороги",
      rigs: "Vermeer D80x100",
      avgDiameter: "160-400 мм",
      avgLength: "120-380 м",
      soils: "суглинок, песок",
      season: "апрель-ноябрь",
      monthlyPotentialTons: 82,
      currentSupplier: "МБЗ",
      productInterest: "MBZ HDD Standard",
      forecastRevenue: 3920000,
      forecastTons: 82,
      nextStep: "Контроль отгрузки первой партии",
      risk: false
    },
    {
      id: "c5",
      name: "КавказКоммуникации",
      legalName: "ООО КавказКоммуникации",
      inn: "2312284439",
      type: "Дилер",
      region: "ЮФО",
      city: "Краснодар",
      stage: "КП",
      status: "Договор",
      worksRegion: "ЮФО, СКФО",
      objects: "дилерские поставки для малых подрядчиков",
      rigs: "смешанный парк клиентов",
      avgDiameter: "110-315 мм",
      avgLength: "80-260 м",
      soils: "глина, песок, известняк",
      season: "февраль-декабрь",
      monthlyPotentialTons: 210,
      currentSupplier: "несколько производителей",
      productInterest: "линейка ГНБ МБЗ",
      forecastRevenue: 8900000,
      forecastTons: 210,
      nextStep: "Вернуть спецификацию от юриста клиента",
      risk: true
    }
  ],
  contacts: [
    { id: "p1", clientId: "c1", name: "Алексей Романов", position: "Коммерческий директор", decisionRole: "Решает бюджет", influence: "Высокое", phone: "+7 495 210-44-18", email: "romanov@gnb-sp.ru", note: "Смотрит на цену, сроки и стабильность поставки." },
    { id: "p2", clientId: "c1", name: "Сергей Матвеев", position: "Главный инженер", decisionRole: "Технический ЛПР", influence: "Критическое", phone: "+7 916 331-10-44", email: "matveev@gnb-sp.ru", note: "Принимает решение после испытаний раствора." },
    { id: "p3", clientId: "c2", name: "Павел Андреев", position: "Начальник участка", decisionRole: "Пользователь продукта", influence: "Среднее", phone: "+7 927 801-33-19", email: "andreev@vbs.ru", note: "Важно быстро получить рабочую рецептуру." },
    { id: "p4", clientId: "c3", name: "Ольга Денисова", position: "Закупки", decisionRole: "Согласует закупку", influence: "Среднее", phone: "+7 343 220-09-18", email: "denisova@uraltr.ru", note: "Запрашивает протоколы и сертификаты." },
    { id: "p5", clientId: "c5", name: "Руслан Давыдов", position: "Генеральный директор", decisionRole: "Финальный ЛПР", influence: "Высокое", phone: "+7 861 700-12-24", email: "rd@kavkom.ru", note: "Интересует дилерская маржа и эксклюзивность по региону." }
  ],
  objects: [
    { id: "g1", clientId: "c1", name: "Переход МКАД, кабельная линия 110 кВ", region: "Москва и МО", location: "Москва, южный участок", customer: "энергосетевая компания", stage: "КП", type: "Кабельная трасса", lengthM: 620, diameterMm: 500, soil: "обводненный песок", depthM: 12, complexity: "Высокая", risk: "потеря раствора", product: "MBZ DrillGel", package: "мешок 25 кг", requiredTons: 108, revenue: 4860000, clientPotentialTonsMonth: 120, orderProbability: 68, nextContactDate: "2026-06-10", worksDate: "2026-06-25", technologistComment: "Нужна стабильная водоотдача и контроль выноса шлама." },
    { id: "g2", clientId: "c2", name: "Переход под Волгой для футляра", region: "Поволжье", location: "Самарская область", customer: "нефтегазовый подрядчик", stage: "Образец", type: "Река", lengthM: 410, diameterMm: 426, soil: "песок, супесь", depthM: 18, complexity: "Высокая", risk: "обрушение стенки скважины", product: "BentoHDD Premium", package: "мешок 25 кг", requiredTons: 46, revenue: 2140000, clientPotentialTonsMonth: 58, orderProbability: 42, nextContactDate: "2026-06-08", worksDate: "2026-06-18", technologistComment: "Проверить набухание и вязкость после 20 минут гидратации." },
    { id: "g3", clientId: "c3", name: "Промышленный водовод Уралмаш", region: "Урал", location: "Екатеринбург", customer: "промышленный заказчик", stage: "Испытание", type: "Промышленный объект", lengthM: 780, diameterMm: 630, soil: "песчаник, включения щебня", depthM: 14, complexity: "Критическая", risk: "абразивный грунт", product: "BentoHDD Plus", package: "МКР", requiredTons: 88, revenue: 3980000, clientPotentialTonsMonth: 86, orderProbability: 55, nextContactDate: "2026-06-09", worksDate: "2026-07-05", technologistComment: "Подобрать рецептуру с повышенным удержанием стенки." },
    { id: "g4", clientId: "c4", name: "Сезонная программа связи Алтай", region: "Сибирь", location: "Алтайский край", customer: "оператор связи", stage: "Заказ", type: "Связь", lengthM: 260, diameterMm: 160, soil: "суглинок", depthM: 6, complexity: "Средняя", risk: "срыв сроков из-за логистики", product: "MBZ HDD Standard", package: "мешок 25 кг", requiredTons: 82, revenue: 3920000, clientPotentialTonsMonth: 82, orderProbability: 100, nextContactDate: "2026-06-10", worksDate: "2026-06-10", technologistComment: "Стандартная рецептура, важна своевременная отгрузка." },
    { id: "g5", clientId: "c5", name: "Дилерский пул объектов ЮФО", region: "ЮФО", location: "Краснодарский край", customer: "малые подрядчики ГНБ", stage: "КП", type: "Дилерская программа", lengthM: 180, diameterMm: 250, soil: "глина, песок", depthM: 7, complexity: "Средняя", risk: "не согласованы цены дилера", product: "линейка ГНБ МБЗ", package: "мешок 25 кг", requiredTons: 210, revenue: 8900000, clientPotentialTonsMonth: 210, orderProbability: 74, nextContactDate: "2026-06-11", worksDate: "2026-06-30", technologistComment: "Нужны типовые рекомендации для дилерских клиентов." }
  ],
  samples: [
    { id: "s1", clientId: "c1", objectId: "g1", product: "MBZ DrillGel", batch: "DG-06-25", quantityKg: 30, sentAt: "2026-05-20", receivedAt: "2026-05-23", testDate: "2026-05-27", testResult: "Рекомендовано", carrier: "СДЭК", tracking: "SD-774421", recipient: "Сергей Матвеев", purpose: "Проверка партии под объект МКАД", status: "Привел к КП", owner: "Анна Сергеева", nextStep: "Согласовать условия поставки", feedbackDays: 0 },
    { id: "s2", clientId: "c2", objectId: "g2", product: "BentoHDD Premium", batch: "BP-05-18", quantityKg: 25, sentAt: "2026-05-28", receivedAt: "2026-06-01", testDate: "", testResult: "Ожидается", carrier: "ПЭК", tracking: "PEK-210418", recipient: "Павел Андреев", purpose: "Сравнение с конкурентом", status: "Получен клиентом", owner: "Игорь Колесников", nextStep: "Получить полевую обратную связь", feedbackDays: 6 },
    { id: "s3", clientId: "c3", objectId: "g3", product: "BentoHDD Plus", batch: "BHP-06-02", quantityKg: 40, sentAt: "2026-06-02", receivedAt: "2026-06-05", testDate: "2026-06-09", testResult: "В работе", carrier: "Деловые Линии", tracking: "DL-884210", recipient: "Ольга Денисова", purpose: "Подбор рецептуры под песчаник", status: "На испытании", owner: "Мария Белова", nextStep: "Завершить лабораторное заключение", feedbackDays: 2 },
    { id: "s4", clientId: "c5", objectId: "g5", product: "MBZ HDD Standard", batch: "STD-06-01", quantityKg: 50, sentAt: "2026-06-03", receivedAt: "", testDate: "", testResult: "", carrier: "Байкал Сервис", tracking: "BS-901223", recipient: "Руслан Давыдов", purpose: "Дилерская презентация", status: "Отправлен", owner: "Анна Сергеева", nextStep: "Подтвердить получение", feedbackDays: 4 }
  ],
  tests: [
    { id: "t1", clientId: "c1", objectId: "g1", sampleId: "s1", type: "Входной контроль", status: "Завершено", viscosity: 48, fluidLoss: 11, swelling: 24, conclusion: "Рекомендовано к применению", completedAt: "2026-05-27" },
    { id: "t2", clientId: "c3", objectId: "g3", sampleId: "s3", type: "Лабораторное", status: "В работе", viscosity: 42, fluidLoss: 14, swelling: 21, conclusion: "Ожидает финального замера", completedAt: "" }
  ],
  offers: [
    { id: "o1", clientId: "c1", objectId: "g1", sampleId: "s1", testId: "t1", number: "КП-0257", version: 2, status: "Обсуждается", amount: 4860000, tons: 108, validUntil: "2026-06-20" },
    { id: "o2", clientId: "c2", objectId: "g2", sampleId: "s2", testId: "", number: "КП-0261", version: 1, status: "Отправлено", amount: 2140000, tons: 46, validUntil: "2026-06-15" },
    { id: "o3", clientId: "c5", objectId: "g5", sampleId: "s4", testId: "", number: "КП-0268", version: 3, status: "Согласовано", amount: 8900000, tons: 210, validUntil: "2026-07-01" }
  ],
  orders: [
    { id: "r1", clientId: "c4", objectId: "g4", sampleId: "", testId: "", offerId: "", number: "ЗК-1044", status: "В отгрузке", amount: 3920000, tons: 82, payment: "Оплачен", delivery: "План 10.06", shipDate: "2026-06-10" }
  ],
  calls: [
    { id: "call1", clientId: "c2", objectId: "g2", contactId: "p3", date: "2026-06-07", result: "ЛПР в командировке", nextStep: "Повторить звонок 08.06", status: "Риск" },
    { id: "call2", clientId: "c1", objectId: "g1", contactId: "p2", date: "2026-06-06", result: "Технически устраивает", nextStep: "Согласовать доставку", status: "Успешно" }
  ],
  tasks: [
    { id: "task1", clientId: "c2", objectId: "g2", contactId: "p3", assignee: "Игорь Колесников", callDate: "2026-06-08", nextStep: "Дозвониться до начальника участка по образцу", status: "Просрочена" },
    { id: "task2", clientId: "c1", objectId: "g1", contactId: "p2", assignee: "Анна Сергеева", callDate: "2026-06-10", nextStep: "Согласовать условия поставки", status: "В работе" }
  ],
  whatsapp: [
    { id: "wa1", clientId: "c2", objectId: "g2", contactId: "p3", date: "2026-06-07", subject: "Фото замеса образца", result: "Клиент обещал видео с объекта", nextStep: "Запросить результат до 08.06" },
    { id: "wa2", clientId: "c5", objectId: "g5", contactId: "p5", date: "2026-06-06", subject: "Дилерские цены", result: "Передали условия по первой партии", nextStep: "Получить согласование объема" },
    { id: "wa3", clientId: "c1", objectId: "g1", contactId: "p2", date: "2026-06-06", subject: "Логистика образца", result: "Подтверждены параметры раствора", nextStep: "Уточнить дату поставки" }
  ],
  emails: [
    { id: "mail1", clientId: "c5", objectId: "g5", contactId: "p5", date: "2026-06-07", subject: "Спецификация дилерского КП", result: "Ожидает правок юриста", nextStep: "Проверить замечания" },
    { id: "mail2", clientId: "c3", objectId: "g3", contactId: "p4", date: "2026-06-06", subject: "Протокол испытаний", result: "Запросили финальный замер", nextStep: "Передать технологу" }
  ]
};

const defaultSettings = {
  companyDetails: {
    company: "ООО «Мостовской Бентонитовый Завод»",
    shortName: "МБЗ",
    inn: "",
    kpp: "",
    ogrn: "",
    legalAddress: "",
    postalAddress: "",
    phone: "",
    email: "",
    website: "mbz-bentonit.ru",
    bank: "",
    account: "",
    director: ""
  },
  employees: [
    { name: "Анна Сергеева", role: "Менеджер ГНБ", phone: "", email: "", whatsapp: "", active: true },
    { name: "Игорь Колесников", role: "Менеджер ГНБ", phone: "", email: "", whatsapp: "", active: true },
    { name: "Мария Белова", role: "Технолог", phone: "", email: "", whatsapp: "", active: true }
  ],
  products: [
    { sku: "MBZ-HDD-STD", name: "MBZ HDD Standard", unit: "т", package: "мешок 25 кг", priceRub: 0, active: true },
    { sku: "MBZ-DRILLGEL", name: "MBZ DrillGel", unit: "т", package: "мешок 25 кг", priceRub: 0, active: true },
    { sku: "BENTOHDD-PREMIUM", name: "BentoHDD Premium", unit: "т", package: "мешок 25 кг", priceRub: 0, active: true }
  ],
  whatsappTemplates: [
    { name: "Первичный контакт", text: "Добрый день. Это МБЗ, производитель бентонита для ГНБ. Хотим уточнить потребность по объектам и предложить образец." },
    { name: "Контроль образца", text: "Добрый день. Подскажите, пожалуйста, получили ли образец МБЗ и когда планируете испытания?" }
  ],
  emailTemplates: [
    { name: "Отправка КП", subject: "Коммерческое предложение МБЗ для ГНБ", body: "Добрый день. Направляем коммерческое предложение по бентониту МБЗ для вашего объекта." },
    { name: "Протокол испытаний", subject: "Протокол испытаний образца МБЗ", body: "Добрый день. Направляем результаты испытаний образца и рекомендации технолога." }
  ],
  offerTemplates: [
    { name: "КП ГНБ стандарт", validityDays: 10, paymentTerms: "по согласованию", deliveryTerms: "самовывоз / доставка ТК", note: "Цена действует при наличии продукции на складе." }
  ],
  salesRegions: [
    { name: "ЮФО", manager: "Анна Сергеева", priority: "Высокий" },
    { name: "СКФО", manager: "Анна Сергеева", priority: "Высокий" },
    { name: "ЦФО", manager: "Игорь Колесников", priority: "Средний" }
  ],
  clientSources: [
    { name: "Холодный звонок", active: true },
    { name: "Рекомендация", active: true },
    { name: "Выставка", active: true },
    { name: "Сайт", active: true },
    { name: "Повторное обращение", active: true }
  ],
  backup: {
    lastBackupAt: "",
    lastAutoBackupAt: "",
    note: "Резервная копия содержит все данные CRM из localStorage."
  }
};

const availableViews = ["ceo", "firstOrders", "clients", "objects", "pipeline", "calls", "whatsapp", "emails", "offers", "samples", "tests", "orders", "settings"];

const state = {
  data: loadData(),
  view: initialView(),
  search: "",
  filters: {
    region: "all",
    clientType: "all",
    stage: "all",
    riskOnly: false
  },
  selected: null
};

const viewNames = {
  ceo: "Панель генерального директора",
  firstOrders: "Первые 5 заказов МБЗ",
  clients: "Реестр клиентов ГНБ",
  objects: "Объекты ГНБ",
  pipeline: "Воронка ГНБ",
  calls: "Задачи и звонки",
  whatsapp: "WhatsApp",
  emails: "История писем",
  offers: "Коммерческие предложения",
  samples: "Учет образцов",
  tests: "Испытания",
  orders: "Заказы",
  settings: "Настройки CRM"
};

function initialView() {
  const view = new URLSearchParams(window.location.search).get("view");
  return availableViews.includes(view) ? view : "ceo";
}

const viewTitle = document.querySelector("#viewTitle");
const viewRoot = document.querySelector("#viewRoot");
const detailPanel = document.querySelector("#detailPanel");
const navList = document.querySelector("#navList");
const globalSearch = document.querySelector("#globalSearch");
const regionFilter = document.querySelector("#regionFilter");
const clientTypeFilter = document.querySelector("#clientTypeFilter");
const stageFilter = document.querySelector("#stageFilter");
const riskOnly = document.querySelector("#riskOnly");

function loadData() {
  const saved = localStorage.getItem(STORAGE_KEY);
  if (!saved) return normalizeData(structuredClone(seedData));
  try {
    return normalizeData(JSON.parse(saved));
  } catch {
    return normalizeData(structuredClone(seedData));
  }
}

function normalizeData(data) {
  const collections = ["clients", "contacts", "objects", "samples", "tests", "offers", "orders", "calls", "tasks", "whatsapp", "emails"];
  const normalized = { ...data };
  collections.forEach((collection) => {
    if (!Array.isArray(normalized[collection])) normalized[collection] = [];
  });
  normalized.contacts = normalized.contacts.map((item) => ({ whatsapp: item.phone || "", ...item }));
  normalized.samples = normalized.samples.map((item) => ({ testDate: "", testResult: "", ...item }));
  normalized.settings = mergeSettings(normalized.settings);
  return normalized;
}

function mergeSettings(settings = {}) {
  const merged = structuredClone(defaultSettings);
  Object.entries(settings || {}).forEach(([key, value]) => {
    if (Array.isArray(value)) merged[key] = value;
    else if (value && typeof value === "object" && !Array.isArray(value)) merged[key] = { ...(merged[key] || {}), ...value };
    else if (value !== undefined) merged[key] = value;
  });
  return merged;
}

function saveData() {
  writeAutoBackup();
  localStorage.setItem(STORAGE_KEY, JSON.stringify(state.data));
}

function writeAutoBackup() {
  try {
    const timestamp = new Date().toISOString();
    if (state.data.settings?.backup) state.data.settings.backup.lastAutoBackupAt = timestamp;
    localStorage.setItem(AUTO_BACKUP_KEY, JSON.stringify(state.data));
    localStorage.setItem(AUTO_BACKUP_META_KEY, JSON.stringify({ updatedAt: timestamp, storageKey: STORAGE_KEY }));
  } catch {
    showToast("Автобэкап не сохранен: localStorage переполнен");
  }
}

function money(value) {
  return new Intl.NumberFormat("ru-RU", { style: "currency", currency: "RUB", maximumFractionDigits: 0 }).format(value);
}

function number(value) {
  return new Intl.NumberFormat("ru-RU", { maximumFractionDigits: 1 }).format(value);
}

function tons(value) {
  return `${number(value)} т`;
}

function byId(collection, id) {
  return state.data[collection].find((item) => item.id === id);
}

function clientName(id) {
  return byId("clients", id)?.name ?? "Клиент не найден";
}

function objectName(id) {
  return byId("objects", id)?.name ?? "Объект не найден";
}

function contactName(id) {
  return byId("contacts", id)?.name ?? "Контакт не указан";
}

function contactLine(id) {
  const contact = byId("contacts", id);
  if (!contact) return "Контакт не указан";
  return `${contact.name} · ${contact.position || "должность не указана"} · ${contact.phone || ""} · WhatsApp: ${contact.whatsapp || contact.phone || ""}`;
}

function escapeHtml(value) {
  return String(value ?? "")
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

function badge(text, tone = "") {
  return `<span class="badge ${tone}">${escapeHtml(text)}</span>`;
}

function unique(values) {
  return [...new Set(values)].sort().map((value) => ({ value, label: value }));
}

function fillSelect(select, items, label) {
  const current = select.value || "all";
  select.innerHTML = `<option value="all">${label}</option>${items.map((item) => `<option value="${escapeHtml(item.value)}">${escapeHtml(item.label)}</option>`).join("")}`;
  select.value = [...select.options].some((option) => option.value === current) ? current : "all";
}

function populateFilters() {
  fillSelect(regionFilter, unique(state.data.clients.map((client) => client.region)), "Все регионы");
  fillSelect(clientTypeFilter, unique(state.data.clients.map((client) => client.type)), "Все типы клиентов");
  fillSelect(stageFilter, unique(state.data.clients.map((client) => client.status)), "Все статусы");
}

function matchesSearch(client) {
  const q = state.search.trim().toLowerCase();
  if (!q) return true;
  const objects = state.data.objects.filter((item) => item.clientId === client.id);
  const contacts = state.data.contacts.filter((item) => item.clientId === client.id);
  const haystack = [
    client.name,
    client.legalName,
    client.inn,
    client.region,
    client.type,
    client.productInterest,
    client.currentSupplier,
    ...objects.flatMap((item) => [item.name, item.location, item.customer, item.soil, item.product]),
    ...contacts.flatMap((item) => [item.name, item.position, item.phone, item.whatsapp, item.email])
  ].join(" ").toLowerCase();
  return haystack.includes(q);
}

function filteredClients() {
  return state.data.clients.filter((client) => {
    if (!matchesSearch(client)) return false;
    if (state.filters.region !== "all" && client.region !== state.filters.region) return false;
    if (state.filters.clientType !== "all" && client.type !== state.filters.clientType) return false;
    if (state.filters.stage !== "all" && client.status !== state.filters.stage) return false;
    if (state.filters.riskOnly && !client.risk) return false;
    return true;
  });
}

function filteredClientIds() {
  return new Set(filteredClients().map((client) => client.id));
}

function visible(collection) {
  const ids = filteredClientIds();
  return state.data[collection].filter((item) => !item.clientId || ids.has(item.clientId));
}

function salesStage(value) {
  const map = {
    "Новый": "Новый клиент",
    "КП": "Отправлено КП",
    "Образец": "Отправлен образец",
    "Испытание": "Испытания",
    "Техническая проверка": "Испытания",
    "Договор": "Отправлено КП",
    "Повторная закупка": "Повторный заказ",
    "Повторные продажи": "Повторный заказ",
    "Заказ": "Заказ"
  };
  return map[value] || value || "Новый клиент";
}

function firstOrdersMetrics() {
  const ids = filteredClientIds();
  const samples = state.data.samples.filter((item) => ids.has(item.clientId));
  const tests = state.data.tests.filter((item) => ids.has(item.clientId));
  const offers = state.data.offers.filter((item) => ids.has(item.clientId));
  const orders = state.data.orders.filter((item) => ids.has(item.clientId));
  const objects = state.data.objects.filter((item) => ids.has(item.clientId));
  const activeClients = state.data.clients.filter((item) => ids.has(item.id) && !["Пауза", "Архив"].includes(item.status));
  const samplesInWork = samples.filter((item) => !["Привел к заказу", "Закрыт без результата"].includes(item.status));
  const objectsInWork = objects.filter((item) => !["Заказ", "Повторный заказ"].includes(salesStage(item.stage)));
  const planRevenue = objects.reduce((sum, item) => sum + item.revenue, 0);
  const forecastRevenue = objects.reduce((sum, item) => sum + item.revenue * (item.orderProbability / 100), 0);
  const forecastTonnage = objects.reduce((sum, item) => sum + item.requiredTons * (item.orderProbability / 100), 0);
  const factRevenue = orders.reduce((sum, item) => sum + item.amount, 0);
  return {
    targetOrders: 5,
    clientsTotal: ids.size,
    activeClients: activeClients.length,
    samplesInWork: samplesInWork.length,
    objectsInWork: objectsInWork.length,
    companiesInWork: ids.size,
    callsConnected: state.data.calls.filter((item) => ids.has(item.clientId) && item.status === "Успешно").length,
    whatsappCount: state.data.whatsapp.filter((item) => ids.has(item.clientId)).length,
    ordersReceived: orders.length,
    offersSent: offers.length,
    samplesSent: samples.length,
    testsDone: tests.filter((item) => item.status === "Завершено").length,
    sampleToTest: samples.length ? Math.round((tests.length / samples.length) * 100) : 0,
    testToOrder: tests.length ? Math.round((orders.length / tests.length) * 100) : 0,
    forecastTonnage,
    forecastRevenue,
    planRevenue,
    factRevenue
  };
}

function operationalCounters() {
  const ids = filteredClientIds();
  const clients = state.data.clients.filter((item) => ids.has(item.id));
  return {
    newClients: clients.filter((item) => salesStage(item.stage) === "Новый клиент" || item.status === "Новый").length,
    samples: state.data.samples.filter((item) => ids.has(item.clientId)).length,
    tests: state.data.tests.filter((item) => ids.has(item.clientId)).length,
    offers: state.data.offers.filter((item) => ids.has(item.clientId)).length,
    orders: state.data.orders.filter((item) => ids.has(item.clientId)).length
  };
}

function overdueTasks() {
  const ids = filteredClientIds();
  const current = today();
  return state.data.tasks
    .filter((item) => ids.has(item.clientId) && item.callDate && item.callDate < current && item.status !== "Выполнена")
    .sort((a, b) => a.callDate.localeCompare(b.callDate));
}

function render() {
  viewTitle.textContent = viewNames[state.view];
  document.querySelectorAll(".nav-item").forEach((item) => item.classList.toggle("is-active", item.dataset.view === state.view));
  viewRoot.innerHTML = (renderers[state.view] || renderCeoPanel)();
  bindSelection();
  renderDetail();
}

const renderers = {
  ceo: renderCeoPanel,
  firstOrders: renderFirstOrders,
  clients: renderClients,
  objects: renderObjects,
  pipeline: renderPipelineView,
  calls: () => renderTable("Задачи и звонки", taskRows(), "task", "+ Задача") + renderTable("История звонков", callRows()),
  whatsapp: () => renderTable("WhatsApp", whatsappRows()),
  emails: () => renderTable("История писем", emailRows()),
  offers: () => renderTable("Коммерческие предложения", offerRows(), "offer", "+ КП"),
  samples: renderSamples,
  tests: () => renderTable("Испытания", testRows(), "test", "+ Испытание"),
  orders: () => renderTable("Заказы", orderRows(), "order", "+ Заказ"),
  settings: renderSettings
};

renderers.calls = renderCalls;

function renderCeoPanel() {
  const metrics = firstOrdersMetrics();
  const counters = operationalCounters();
  const overdue = overdueTasks();
  const openObjects = visible("objects");

  return `
    <section class="hero-board">
      <div class="section-head">
        <div>
          <h2>Первые 5 заказов МБЗ на рынке ГНБ</h2>
          <p class="muted">Управление цепочкой: клиент → объект → образец → испытание → КП → заказ</p>
        </div>
        ${badge(`Цель: ${metrics.targetOrders} заказов`, "gold")}
      </div>
      <div class="kpi-grid">
        ${metric("Клиентов всего", metrics.clientsTotal, "реестр ГНБ")}
        ${metric("Активных клиентов", metrics.activeClients, "без паузы и архива")}
        ${metric("Образцов в работе", metrics.samplesInWork, "отправлены или на контроле")}
        ${metric("Объектов в работе", metrics.objectsInWork, "до стадии заказа")}
        ${metric("Заказов", metrics.ordersReceived, "получено")}
        ${metric("Прогноз продаж", money(metrics.forecastRevenue), "сумма заказа × вероятность")}
        ${metric("Компаний в работе", metrics.companiesInWork, "активная база ГНБ")}
        ${metric("Дозвонов", metrics.callsConnected, "успешные звонки")}
        ${metric("WhatsApp", metrics.whatsappCount, "сообщения по сделкам")}
        ${metric("КП", metrics.offersSent, "отправлено клиентам")}
        ${metric("Образцы", metrics.samplesSent, "передано клиентам")}
        ${metric("Испытания", metrics.testsDone, "завершенные")}
        ${metric("Заказы", metrics.ordersReceived, "получено")}
        ${metric("Прогноз тоннажа", tons(metrics.forecastTonnage), "тоннаж × вероятность")}
        ${metric("Прогноз выручки", money(metrics.forecastRevenue), "сумма заказа × вероятность")}
        ${metric("План/Факт по 5 заказам", `${metrics.targetOrders}/${metrics.ordersReceived}`, "цель / факт")}
      </div>
      <div class="progress" aria-label="Прогресс первых 5 заказов"><span style="width:${Math.min(100, (metrics.ordersReceived / metrics.targetOrders) * 100)}%"></span></div>
    </section>

    <section class="band">
      <div class="section-head">
        <h2>Оперативный счетчик</h2>
        ${badge("клиенты · образцы · испытания · КП · заказы", "blue")}
      </div>
      <div class="counter-strip">
        ${counterPill("Новые клиенты", counters.newClients)}
        ${counterPill("Образцы", counters.samples)}
        ${counterPill("Испытания", counters.tests)}
        ${counterPill("КП", counters.offers)}
        ${counterPill("Заказы", counters.orders)}
      </div>
    </section>

    ${overdue.length ? `<section class="band alert-band">
      <div class="section-head">
        <h2>Просроченные задачи</h2>
        ${badge(`${overdue.length} требуют внимания`, "red")}
      </div>
      <div class="stack">${overdue.slice(0, 5).map(renderReminderCard).join("")}</div>
    </section>` : ""}

    <div class="split">
      <section class="band">
        <div class="section-head">
          <h2>Цепочки продаж по объектам</h2>
          ${badge(`${openObjects.length} объектов`, "blue")}
        </div>
        <div class="stack">${openObjects.map(renderFlowCard).join("")}</div>
      </section>
      <section class="band">
        <div class="section-head">
          <h2>Риски генерального директора</h2>
          ${badge(`${riskItems().length} сигналов`, riskItems().length ? "red" : "green")}
        </div>
        <div class="stack">${riskItems().map((item) => `<div class="compact-item"><strong>${escapeHtml(item.title)}</strong><div class="meta-line">${escapeHtml(item.text)}</div></div>`).join("") || `<div class="compact-item">Критичных рисков по текущим фильтрам нет.</div>`}</div>
      </section>
    </div>
  `;
}

function metric(label, value, hint) {
  return `<div class="metric"><span>${escapeHtml(label)}</span><strong>${value}</strong><small>${escapeHtml(hint)}</small></div>`;
}

function counterPill(label, value) {
  return `<div class="counter-pill"><span>${escapeHtml(label)}</span><strong>${value}</strong></div>`;
}

function renderReminderCard(task) {
  return `<div class="compact-item reminder-card">
    <strong>${escapeHtml(task.callDate)} · ${escapeHtml(clientName(task.clientId))}</strong>
    <div class="meta-line">${escapeHtml(contactLine(task.contactId))}</div>
    <div class="meta-line">${escapeHtml(task.nextStep)} · ${escapeHtml(task.assignee || "ответственный не указан")}</div>
  </div>`;
}

function renderFirstOrders() {
  const metrics = firstOrdersMetrics();
  return `
    <section class="hero-board">
      <div class="section-head">
        <div>
          <h2>Штаб первых 5 заказов</h2>
          <p class="muted">Отслеживание коммерческого запуска МБЗ в ГНБ по образцам, испытаниям, КП и заказам.</p>
        </div>
        ${badge(`${metrics.ordersReceived} из ${metrics.targetOrders}`, "gold")}
      </div>
      <div class="kpi-grid">
        ${metric("Цель заказов", metrics.targetOrders, "план запуска")}
        ${metric("Получено заказов", metrics.ordersReceived, "факт")}
        ${metric("Компаний в работе", metrics.companiesInWork, "активная база")}
        ${metric("Дозвонов", metrics.callsConnected, "успешные звонки")}
        ${metric("WhatsApp", metrics.whatsappCount, "сообщения")}
        ${metric("КП", metrics.offersSent, "отправлено")}
        ${metric("Образцы", metrics.samplesSent, "передано")}
        ${metric("Испытания", metrics.testsDone, "проведено")}
        ${metric("Конверсия образец → испытание", `${metrics.sampleToTest}%`, "все испытания / образцы")}
        ${metric("Конверсия испытание → заказ", `${metrics.testToOrder}%`, "заказы / испытания")}
        ${metric("Прогноз тоннажа", tons(metrics.forecastTonnage), "тоннаж × вероятность")}
        ${metric("Прогноз выручки", money(metrics.forecastRevenue), "сумма заказа × вероятность")}
        ${metric("План выручки", money(metrics.planRevenue), "потенциал")}
        ${metric("Факт выручки", money(metrics.factRevenue), "закрыто заказами")}
      </div>
    </section>
    <section class="band">
      <div class="section-head">
        <h2>План 5 заказов: управленческие поля</h2>
        ${badge("потенциал · вероятность · следующий контакт", "gold")}
      </div>
      <div class="table-wrap">
        <table>
          <thead><tr><th>Клиент</th><th>Объект</th><th>Потенциал клиента</th><th>Вероятность заказа</th><th>Дата следующего контакта</th><th>Прогноз выручки</th></tr></thead>
          <tbody>${visible("objects").map((object) => `<tr><td>${escapeHtml(clientName(object.clientId))}</td><td><button class="link-button" data-select="object:${object.id}">${escapeHtml(object.name)}</button></td><td>${tons(object.clientPotentialTonsMonth)} / мес</td><td>${object.orderProbability}%</td><td>${escapeHtml(object.nextContactDate)}</td><td>${money(object.revenue * (object.orderProbability / 100))}</td></tr>`).join("")}</tbody>
        </table>
      </div>
    </section>
    <section class="band">
      <div class="section-head">
        <h2>Объектные цепочки</h2>
        ${badge("Клиент → Объект → Образец → Испытание → КП → Заказ", "blue")}
      </div>
      <div class="stack">${visible("objects").map(renderFlowCard).join("")}</div>
    </section>
  `;
}

function renderFlowCard(object) {
  const sample = state.data.samples.find((item) => item.objectId === object.id);
  const test = state.data.tests.find((item) => item.objectId === object.id);
  const offer = state.data.offers.find((item) => item.objectId === object.id);
  const order = state.data.orders.find((item) => item.objectId === object.id);
  return `<article class="compact-item">
    <div class="section-head">
      <div>
        <button class="link-button" data-select="object:${object.id}">${escapeHtml(object.name)}</button>
        <div class="meta-line">${escapeHtml(clientName(object.clientId))} · ${escapeHtml(object.region)} · ${tons(object.requiredTons)} · ${money(object.revenue)}</div>
      </div>
      ${badge(salesStage(object.stage), salesStage(object.stage) === "Заказ" ? "green" : object.risk ? "red" : "gold")}
    </div>
    <div class="meta-line">
      ${badge(`Потенциал ${tons(object.clientPotentialTonsMonth)}/мес`, "blue")}
      ${badge(`Вероятность ${object.orderProbability}%`, object.orderProbability >= 70 ? "green" : "gold")}
      ${badge(`Контакт ${object.nextContactDate}`, "gold")}
      ${badge(`Прогноз ${money(object.revenue * (object.orderProbability / 100))}`, "green")}
    </div>
    <div class="flow-line">
      ${flowStep("Клиент", clientName(object.clientId), true)}
      ${flowStep("Объект ГНБ", object.type, true)}
      ${flowStep("Образец", sample?.status || "не передан", Boolean(sample), sample && !test)}
      ${flowStep("Испытание", test?.status || "нет", Boolean(test?.status === "Завершено"), Boolean(test && test.status !== "Завершено"))}
      ${flowStep("КП", offer?.number || "нет", Boolean(offer), Boolean(offer && !order))}
      ${flowStep("Заказ", order?.number || "нет", Boolean(order))}
    </div>
  </article>`;
}

function flowStep(label, value, done, active = false) {
  const className = done ? "is-done" : active ? "is-active" : "";
  return `<div class="flow-step ${className}"><span>${escapeHtml(label)}</span><strong>${escapeHtml(value)}</strong></div>`;
}

function riskItems() {
  const ids = filteredClientIds();
  const risks = [];
  state.data.clients.filter((item) => ids.has(item.id) && item.risk).forEach((item) => risks.push({ title: `Клиент: ${item.name}`, text: item.nextStep }));
  state.data.samples.filter((item) => ids.has(item.clientId) && item.feedbackDays >= 4 && !["Привел к КП", "Привел к заказу"].includes(item.status)).forEach((item) => risks.push({ title: `Образец без обратной связи: ${clientName(item.clientId)}`, text: `${item.product}, ${item.feedbackDays} дней, следующий шаг: ${item.nextStep}` }));
  state.data.tests.filter((item) => ids.has(item.clientId) && item.status !== "Завершено").forEach((item) => risks.push({ title: `Испытание задерживает продажу: ${clientName(item.clientId)}`, text: item.conclusion }));
  return risks;
}

function renderClients() {
  return `<section class="band">
    <div class="section-head">
      <h2>Полноценный реестр клиентов ГНБ</h2>
      <div class="detail-actions">
        ${badge(`${filteredClients().length} клиентов`, "blue")}
        <button class="secondary-button" data-action="import-clients-excel">Импорт клиентов Excel</button>
        <button class="primary-button" data-create="client">+ Клиент</button>
      </div>
    </div>
    <div class="entity-grid">${filteredClients().map(renderClientCard).join("")}</div>
  </section>`;
}

function renderClientCard(client) {
  return `<article class="entity-card">
    <div class="section-head">
      <button data-select="client:${client.id}">${escapeHtml(client.name)}</button>
      ${badge(salesStage(client.stage), client.risk ? "red" : "gold")}
    </div>
    <div class="meta-line">ИНН ${escapeHtml(client.inn)} · ${escapeHtml(client.type)} · ${escapeHtml(client.region)}</div>
    <div class="meta-line">${badge(`${client.monthlyPotentialTons} т/мес`, "blue")} ${badge(money(client.forecastRevenue), "green")} ${badge(client.productInterest)}</div>
    <div class="compact-item">
      <strong>ГНБ-профиль</strong>
      <div class="meta-line">${escapeHtml(client.rigs)}</div>
      <div class="meta-line">${escapeHtml(client.avgDiameter)} · ${escapeHtml(client.avgLength)} · ${escapeHtml(client.soils)}</div>
    </div>
    <div class="meta-line">Следующий шаг: ${escapeHtml(client.nextStep)}</div>
    <div class="detail-actions">
      <button class="secondary-button" data-action="edit-client" data-id="${client.id}">Редактировать</button>
      <button class="danger-button" data-action="delete-client" data-id="${client.id}">Удалить</button>
    </div>
  </article>`;
}

function renderObjects() {
  return `<section class="band">
    <div class="section-head">
      <h2>Карточки объектов ГНБ</h2>
      <div class="detail-actions">
        ${badge(`${visible("objects").length} объектов`, "blue")}
        <button class="primary-button" data-create="object">+ Объект ГНБ</button>
      </div>
    </div>
    <div class="entity-grid">${visible("objects").map(renderObjectCard).join("")}</div>
  </section>`;
}

function renderObjectCard(object) {
  return `<article class="entity-card">
    <div class="section-head">
      <button data-select="object:${object.id}">${escapeHtml(object.name)}</button>
      ${badge(salesStage(object.stage), object.complexity === "Критическая" ? "red" : "gold")}
    </div>
    <div class="meta-line">${escapeHtml(clientName(object.clientId))} · ${escapeHtml(object.location)} · ${escapeHtml(object.customer)}</div>
    <div class="three-col">
      <div class="compact-item"><strong>${object.lengthM} м</strong><div class="meta-line">длина</div></div>
      <div class="compact-item"><strong>${object.diameterMm} мм</strong><div class="meta-line">диаметр</div></div>
      <div class="compact-item"><strong>${tons(object.requiredTons)}</strong><div class="meta-line">потребность</div></div>
    </div>
    <div class="three-col">
      <div class="compact-item"><strong>${tons(object.clientPotentialTonsMonth)}/мес</strong><div class="meta-line">потенциал клиента</div></div>
      <div class="compact-item"><strong>${object.orderProbability}%</strong><div class="meta-line">вероятность заказа</div></div>
      <div class="compact-item"><strong>${escapeHtml(object.nextContactDate)}</strong><div class="meta-line">следующий контакт</div></div>
    </div>
    <div class="meta-line">${escapeHtml(object.soil)} · ${escapeHtml(object.risk)}</div>
    <div class="meta-line">Продукт: ${escapeHtml(object.product)} · ${escapeHtml(object.package)}</div>
    <div class="detail-actions">
      <button class="secondary-button" data-action="edit-entity" data-type="object" data-id="${object.id}">Редактировать</button>
      <button class="danger-button" data-action="delete-entity" data-type="object" data-id="${object.id}">Удалить</button>
    </div>
  </article>`;
}

function renderSamples() {
  const samples = visible("samples");
  const withTests = samples.filter((sample) => state.data.tests.some((test) => test.sampleId === sample.id)).length;
  const withOffers = samples.filter((sample) => state.data.offers.some((offer) => offer.sampleId === sample.id)).length;
  return `
    <div class="kpi-grid">
      ${metric("Передано образцов", samples.length, "по текущим фильтрам")}
      ${metric("Связано с испытанием", withTests, "лабораторный контур")}
      ${metric("Привело к КП", withOffers, "коммерческий контур")}
      ${metric("Без обратной связи", samples.filter((sample) => sample.feedbackDays >= 4).length, "нужен контроль")}
    </div>
    <section class="band">
      <div class="section-head">
        <h2>Полноценный учет образцов</h2>
        <div class="detail-actions">
          ${badge("образец связан с объектом, испытанием, КП и заказом", "gold")}
          <button class="primary-button" data-create="sample">+ Образец</button>
        </div>
      </div>
      <div class="entity-grid">${samples.map(renderSampleCard).join("")}</div>
    </section>
  `;
}

function renderSampleCard(sample) {
  const test = state.data.tests.find((item) => item.sampleId === sample.id);
  const offer = state.data.offers.find((item) => item.sampleId === sample.id);
  const order = state.data.orders.find((item) => item.sampleId === sample.id);
  return `<article class="entity-card">
    <div class="section-head">
      <button data-select="sample:${sample.id}">${escapeHtml(sample.product)} · ${escapeHtml(sample.batch)}</button>
      ${badge(sample.status, sample.feedbackDays >= 4 ? "red" : "gold")}
    </div>
    <div class="meta-line">${escapeHtml(clientName(sample.clientId))} · ${escapeHtml(objectName(sample.objectId))}</div>
    <div class="meta-line">${sample.quantityKg} кг · ${escapeHtml(sample.carrier)} · ${escapeHtml(sample.tracking)}</div>
    <div class="meta-line">Отправка: ${escapeHtml(sample.sentAt || "не указана")} · Испытания: ${escapeHtml(sample.testDate || "не назначены")} · Результат: ${escapeHtml(sample.testResult || "нет")}</div>
    <div class="compact-item">
      <strong>Цель</strong>
      <div class="meta-line">${escapeHtml(sample.purpose)}</div>
      <div class="meta-line">Получатель: ${escapeHtml(sample.recipient)}</div>
    </div>
    <div class="flow-line">
      ${flowStep("Образец", sample.status, true)}
      ${flowStep("Испытание", test?.status || "нет", Boolean(test?.status === "Завершено"), Boolean(test && test.status !== "Завершено"))}
      ${flowStep("КП", offer?.number || "нет", Boolean(offer))}
      ${flowStep("Заказ", order?.number || "нет", Boolean(order))}
    </div>
    <div class="meta-line">Следующий шаг: ${escapeHtml(sample.nextStep)}</div>
    <div class="detail-actions">
      <button class="secondary-button" data-action="edit-entity" data-type="sample" data-id="${sample.id}">Редактировать</button>
      <button class="danger-button" data-action="delete-entity" data-type="sample" data-id="${sample.id}">Удалить</button>
    </div>
  </article>`;
}

function renderPipelineView() {
  const stages = ["Новый клиент", "Переговоры", "Отправлено КП", "Отправлен образец", "Испытания", "Заказ", "Повторный заказ"];
  const objects = visible("objects");
  return `<section class="band">
    <div class="section-head">
      <h2>Воронка по объектам ГНБ</h2>
      ${badge(`${objects.length} объектов`, "blue")}
    </div>
    <div class="pipeline">${stages.map((stage) => {
      const list = objects.filter((object) => salesStage(object.stage) === stage);
      return `<div class="stage"><h3>${stage} <span>${list.length}</span></h3>${list.map(renderDealCard).join("") || `<div class="meta-line">Нет объектов</div>`}</div>`;
    }).join("")}</div>
  </section>`;
}

function renderDealCard(object) {
  return `<article class="deal-card">
    <button data-select="object:${object.id}">${escapeHtml(object.name)}</button>
    <div class="meta-line">${escapeHtml(clientName(object.clientId))} · ${escapeHtml(object.product)}</div>
    <div class="meta-line">${badge(money(object.revenue), "green")} ${badge(tons(object.requiredTons), "blue")} ${badge(object.complexity, object.complexity === "Критическая" ? "red" : "gold")}</div>
    <div class="meta-line">${escapeHtml(object.technologistComment)}</div>
  </article>`;
}

function renderTable(title, rows, createType = "", createLabel = "") {
  return `<section class="band">
    <div class="section-head">
      <h2>${escapeHtml(title)}</h2>
      <div class="detail-actions">
        ${badge(`${rows.length} записей`, "blue")}
        ${createType ? `<button class="primary-button" data-create="${createType}">${escapeHtml(createLabel)}</button>` : ""}
      </div>
    </div>
    <div class="table-wrap"><table><thead>${rows[0]?.head || ""}</thead><tbody>${rows.map((row) => row.body).join("") || `<tr><td>Нет данных по текущим фильтрам.</td></tr>`}</tbody></table></div>
  </section>`;
}

const settingsSections = [
  ["companyDetails", "Реквизиты МБЗ", "Юридические и банковские реквизиты компании."],
  ["employees", "Пользователи и сотрудники", "Менеджеры, технологи и сотрудники, работающие в CRM."],
  ["products", "Продукты и номенклатура", "Продукты МБЗ, фасовка, единицы измерения и цены."],
  ["whatsappTemplates", "Шаблоны WhatsApp", "Готовые сообщения для менеджеров."],
  ["emailTemplates", "Шаблоны писем", "Темы и тексты писем клиентам."],
  ["offerTemplates", "Шаблоны коммерческих предложений", "Условия КП, сроки действия и стандартные примечания."],
  ["salesRegions", "Регионы продаж", "Регионы, ответственные менеджеры и приоритеты."],
  ["clientSources", "Источник клиента", "Справочник источников появления клиента."],
  ["backup", "Резервное копирование данных", "Скачивание и восстановление полной копии localStorage CRM."]
];

function renderSettings() {
  return `<section class="band">
    <div class="section-head">
      <div>
        <h2>Настройки CRM</h2>
        <p class="muted">Справочники и шаблоны сохраняются в localStorage вместе с рабочими данными CRM.</p>
      </div>
      ${badge("localStorage", "gold")}
    </div>
    <div class="settings-grid">${settingsSections.map(renderSettingsCard).join("")}</div>
  </section>`;
}

function renderSettingsCard([key, title, description]) {
  const value = state.data.settings[key];
  return `<article class="settings-card">
    <div class="section-head">
      <div>
        <h3>${escapeHtml(title)}</h3>
        <div class="meta-line">${escapeHtml(description)}</div>
      </div>
      ${badge(settingsCount(value), "blue")}
    </div>
    <div class="settings-preview">${settingsPreview(value)}</div>
    <div class="detail-actions">
      <button class="secondary-button" data-action="edit-setting" data-setting="${key}">Редактировать</button>
      ${key === "backup" ? `<button class="primary-button" data-action="download-backup">Скачать резервную копию</button><button class="secondary-button" data-action="restore-backup">Восстановить из резервной копии</button>` : ""}
    </div>
  </article>`;
}

function settingsCount(value) {
  if (Array.isArray(value)) return `${value.length} записей`;
  if (value && typeof value === "object") return `${Object.keys(value).length} полей`;
  return "1 поле";
}

function settingsPreview(value) {
  if (Array.isArray(value)) {
    return value.slice(0, 4).map((item) => `<div class="compact-item">${escapeHtml(settingItemTitle(item))}<div class="meta-line">${escapeHtml(settingItemSubtitle(item))}</div></div>`).join("") || `<div class="compact-item">Записей пока нет.</div>`;
  }
  if (value && typeof value === "object") {
    return Object.entries(value).slice(0, 6).map(([key, item]) => `<div class="settings-row"><span>${escapeHtml(key)}</span><strong>${escapeHtml(item || "не заполнено")}</strong></div>`).join("");
  }
  return `<div class="compact-item">${escapeHtml(value || "не заполнено")}</div>`;
}

function settingItemTitle(item) {
  return item.name || item.company || item.sku || item.subject || "Запись";
}

function settingItemSubtitle(item) {
  return item.role || item.text || item.body || item.package || item.manager || item.priority || item.note || "";
}

function openSettingForm(key) {
  const section = settingsSections.find((item) => item[0] === key);
  if (!section) return;
  const body = `<form class="modal-form" data-setting-form="${key}">
    <label class="form-field full">
      <span>Данные раздела в формате JSON</span>
      <textarea name="settingJson" class="json-editor" spellcheck="false">${escapeHtml(JSON.stringify(state.data.settings[key], null, 2))}</textarea>
    </label>
    <div class="compact-item">Можно редактировать поля, добавлять строки в массивы и удалять неактуальные записи. После сохранения данные попадут в localStorage.</div>
    <div class="form-actions">
      <button type="button" class="secondary-button" data-close-modal>Отмена</button>
      <button class="primary-button" type="submit">Сохранить настройки</button>
    </div>
  </form>`;
  showModal(section[1], body, (event) => {
    event.preventDefault();
    saveSettingForm(key, new FormData(event.currentTarget));
  });
}

function saveSettingForm(key, formData) {
  try {
    state.data.settings[key] = JSON.parse(formData.get("settingJson"));
    saveData();
    closeModal();
    showToast("Настройки сохранены");
    render();
  } catch {
    showToast("Ошибка JSON. Проверьте кавычки, запятые и скобки.");
  }
}

function downloadBackup() {
  state.data.settings.backup.lastBackupAt = new Date().toISOString();
  saveData();
  const blob = new Blob([JSON.stringify(state.data, null, 2)], { type: "application/json" });
  const link = document.createElement("a");
  link.href = URL.createObjectURL(blob);
  link.download = `crm-mbz-backup-${today()}.json`;
  document.body.append(link);
  link.click();
  link.remove();
  URL.revokeObjectURL(link.href);
  showToast("Резервная копия создана");
  render();
}

function restoreBackup(file) {
  const reader = new FileReader();
  reader.onload = () => {
    try {
      state.data = normalizeData(JSON.parse(reader.result));
      saveData();
      populateFilters();
      showToast("Данные восстановлены из копии");
      render();
    } catch {
      showToast("Не удалось восстановить JSON-файл");
    }
  };
  reader.readAsText(file);
}

function renderCalls() {
  const overdue = overdueTasks();
  return `
    ${overdue.length ? `<section class="band alert-band">
      <div class="section-head">
        <h2>Напоминания по просроченным задачам</h2>
        ${badge(`${overdue.length} просрочено`, "red")}
      </div>
      <div class="stack">${overdue.map(renderReminderCard).join("")}</div>
    </section>` : ""}
    ${renderTaskCalendar()}
    ${renderTable("Задачи и звонки", taskRows(), "task", "+ Задача")}
    ${renderTable("История звонков", callRows())}
  `;
}

function renderTaskCalendar() {
  const calendarRows = calendarDays().map((date) => {
    const tasks = visible("tasks").filter((item) => item.callDate === date);
    const calls = visible("calls").filter((item) => item.date === date);
    return `<div class="calendar-day ${tasks.some(isTaskOverdue) ? "is-overdue" : ""}">
      <div class="calendar-date">${escapeHtml(formatShortDate(date))}</div>
      <div class="calendar-items">
        ${tasks.map((task) => `<button class="calendar-item" data-action="edit-entity" data-type="task" data-id="${task.id}">${escapeHtml(clientName(task.clientId))}: ${escapeHtml(task.nextStep)}</button>`).join("")}
        ${calls.map((call) => `<div class="calendar-item is-call">${escapeHtml(clientName(call.clientId))}: ${escapeHtml(call.result)}</div>`).join("")}
        ${!tasks.length && !calls.length ? `<div class="meta-line">Нет задач</div>` : ""}
      </div>
    </div>`;
  }).join("");

  return `<section class="band">
    <div class="section-head">
      <h2>Календарь задач и звонков</h2>
      ${badge("14 дней", "gold")}
    </div>
    <div class="calendar-grid">${calendarRows}</div>
  </section>`;
}

function calendarDays() {
  const start = new Date();
  start.setDate(start.getDate() - 3);
  return Array.from({ length: 14 }, (_, index) => {
    const date = new Date(start);
    date.setDate(start.getDate() + index);
    return date.toISOString().slice(0, 10);
  });
}

function formatShortDate(date) {
  return new Intl.DateTimeFormat("ru-RU", { day: "2-digit", month: "2-digit" }).format(new Date(`${date}T00:00:00`));
}

function isTaskOverdue(task) {
  return task.callDate && task.callDate < today() && task.status !== "Выполнена";
}

function callRows() {
  const head = `<tr><th>Дата</th><th>Клиент</th><th>Объект</th><th>ЛПР</th><th>Результат</th><th>Следующий шаг</th></tr>`;
  return visible("calls").map((item) => ({ head, body: `<tr><td>${escapeHtml(item.date)}</td><td><button class="link-button" data-select="client:${item.clientId}">${escapeHtml(clientName(item.clientId))}</button></td><td>${escapeHtml(objectName(item.objectId))}</td><td>${escapeHtml(contactName(item.contactId))}</td><td>${escapeHtml(item.result)}</td><td>${badge(item.nextStep, item.status === "Риск" ? "red" : "green")}</td></tr>` }));
}

function taskRows() {
  const todayDate = today();
  const head = `<tr><th>Когда позвонить</th><th>Клиент</th><th>Объект</th><th>ЛПР / связь</th><th>Ответственный</th><th>Следующий шаг</th><th>Статус</th><th>Действия</th></tr>`;
  return visible("tasks").map((item) => {
    const overdue = item.callDate && item.callDate < todayDate && item.status !== "Выполнена";
    const status = overdue ? "Просрочена" : item.status;
    return {
      head,
      body: `<tr><td>${escapeHtml(item.callDate)}</td><td><button class="link-button" data-select="client:${item.clientId}">${escapeHtml(clientName(item.clientId))}</button></td><td>${escapeHtml(objectName(item.objectId))}</td><td>${escapeHtml(contactLine(item.contactId))}</td><td>${escapeHtml(item.assignee)}</td><td>${escapeHtml(item.nextStep)}</td><td>${badge(status, overdue ? "red" : "gold")}</td><td>${rowActions("task", item.id)}</td></tr>`
    };
  });
}

function whatsappRows() {
  const head = `<tr><th>Дата</th><th>Клиент</th><th>Объект</th><th>ЛПР</th><th>Тема</th><th>Результат</th><th>Следующий шаг</th></tr>`;
  return visible("whatsapp").map((item) => ({ head, body: `<tr><td>${escapeHtml(item.date)}</td><td><button class="link-button" data-select="client:${item.clientId}">${escapeHtml(clientName(item.clientId))}</button></td><td>${escapeHtml(objectName(item.objectId))}</td><td>${escapeHtml(contactName(item.contactId))}</td><td>${escapeHtml(item.subject)}</td><td>${escapeHtml(item.result)}</td><td>${escapeHtml(item.nextStep)}</td></tr>` }));
}

function emailRows() {
  const head = `<tr><th>Дата</th><th>Клиент</th><th>Объект</th><th>ЛПР</th><th>Тема</th><th>Следующий шаг</th></tr>`;
  return visible("emails").map((item) => ({ head, body: `<tr><td>${escapeHtml(item.date)}</td><td><button class="link-button" data-select="client:${item.clientId}">${escapeHtml(clientName(item.clientId))}</button></td><td>${escapeHtml(objectName(item.objectId))}</td><td>${escapeHtml(contactName(item.contactId))}</td><td>${escapeHtml(item.subject)}</td><td>${escapeHtml(item.nextStep)}</td></tr>` }));
}

function offerRows() {
  const head = `<tr><th>КП</th><th>Клиент</th><th>Объект</th><th>Версия</th><th>Статус</th><th>Сумма</th><th>Тоннаж</th><th>Действия</th></tr>`;
  return visible("offers").map((item) => ({ head, body: `<tr><td>${escapeHtml(item.number)}</td><td><button class="link-button" data-select="client:${item.clientId}">${escapeHtml(clientName(item.clientId))}</button></td><td>${escapeHtml(objectName(item.objectId))}</td><td>v${item.version}</td><td>${badge(item.status, item.status === "Согласовано" ? "green" : "gold")}</td><td>${money(item.amount)}</td><td>${tons(item.tons)}</td><td>${rowActions("offer", item.id)}</td></tr>` }));
}

function testRows() {
  const head = `<tr><th>Клиент</th><th>Объект</th><th>Образец</th><th>Тип</th><th>Статус</th><th>Вязкость</th><th>Водоотдача</th><th>Заключение</th><th>Действия</th></tr>`;
  return visible("tests").map((item) => ({ head, body: `<tr><td><button class="link-button" data-select="client:${item.clientId}">${escapeHtml(clientName(item.clientId))}</button></td><td>${escapeHtml(objectName(item.objectId))}</td><td>${escapeHtml(byId("samples", item.sampleId)?.batch || "нет")}</td><td>${escapeHtml(item.type)}</td><td>${badge(item.status, item.status === "Завершено" ? "green" : "gold")}</td><td>${item.viscosity}</td><td>${item.fluidLoss}</td><td>${escapeHtml(item.conclusion)}</td><td>${rowActions("test", item.id)}</td></tr>` }));
}

function orderRows() {
  const head = `<tr><th>Заказ</th><th>Клиент</th><th>Объект</th><th>Статус</th><th>Оплата</th><th>Доставка</th><th>Сумма</th><th>Тоннаж</th><th>Действия</th></tr>`;
  return visible("orders").map((item) => ({ head, body: `<tr><td>${escapeHtml(item.number)}</td><td><button class="link-button" data-select="client:${item.clientId}">${escapeHtml(clientName(item.clientId))}</button></td><td>${escapeHtml(objectName(item.objectId))}</td><td>${badge(item.status, "gold")}</td><td>${escapeHtml(item.payment)}</td><td>${escapeHtml(item.delivery)}</td><td>${money(item.amount)}</td><td>${tons(item.tons)}</td><td>${rowActions("order", item.id)}</td></tr>` }));
}

function rowActions(type, id) {
  return `<div class="detail-actions"><button class="secondary-button" data-action="edit-entity" data-type="${type}" data-id="${id}">Редактировать</button><button class="danger-button" data-action="delete-entity" data-type="${type}" data-id="${id}">Удалить</button></div>`;
}

function bindSelection() {
  document.querySelectorAll("[data-select]").forEach((button) => {
    button.addEventListener("click", () => {
      const [type, id] = button.dataset.select.split(":");
      state.selected = { type, id };
      renderDetail();
    });
  });
}

function renderDetail() {
  if (!state.selected) {
    detailPanel.innerHTML = `<div class="detail-empty"><strong>Связанная карточка</strong><span>Выберите клиента, объект, образец или заказ, чтобы увидеть всю цепочку продажи ГНБ.</span></div>`;
    return;
  }
  if (state.selected.type === "client") renderClientDetail(state.selected.id);
  if (state.selected.type === "object") renderObjectDetail(state.selected.id);
  if (state.selected.type === "sample") renderSampleDetail(state.selected.id);
}

function renderClientDetail(id) {
  const client = byId("clients", id);
  const contacts = state.data.contacts.filter((item) => item.clientId === id);
  const objects = state.data.objects.filter((item) => item.clientId === id);
  detailPanel.innerHTML = `<div class="detail-card">
    <div class="detail-title">
      <h2>${escapeHtml(client.name)}</h2>
      <div class="meta-line">${escapeHtml(client.legalName)} · ИНН ${escapeHtml(client.inn)}</div>
      <div class="meta-line">${badge(client.type)} ${badge(client.region, "blue")} ${badge(salesStage(client.stage), client.risk ? "red" : "gold")}</div>
    </div>
    ${detailBlock("ГНБ-профиль", [`Техника: ${client.rigs}`, `Диаметры: ${client.avgDiameter}`, `Длины: ${client.avgLength}`, `Грунты: ${client.soils}`, `Потенциал: ${client.monthlyPotentialTons} т/мес`, `Текущий поставщик: ${client.currentSupplier}`])}
    <section>
      <div class="section-head">
        <h3>ЛПР</h3>
        <button class="secondary-button" data-create="contact">+ ЛПР</button>
      </div>
      <div class="stack">${contacts.map(renderContactItem).join("") || `<div class="compact-item">ЛПР пока не добавлены.</div>`}</div>
    </section>
    ${detailBlock("Объекты", objects.map((item) => `${item.name} · ${salesStage(item.stage)} · ${tons(item.requiredTons)} · ${money(item.revenue)}`))}
    ${detailBlock("Следующий шаг", [client.nextStep])}
  </div>`;
}

function renderContactItem(contact) {
  return `<div class="compact-item">
    <strong>${escapeHtml(contact.name)}</strong>
    <div class="meta-line">${escapeHtml(contact.position)} · ${escapeHtml(contact.decisionRole)} · ${escapeHtml(contact.influence)}</div>
    <div class="meta-line">Телефон: ${escapeHtml(contact.phone || "не указан")} · WhatsApp: ${escapeHtml(contact.whatsapp || contact.phone || "не указан")} · Email: ${escapeHtml(contact.email || "не указан")}</div>
    <div class="meta-line">${escapeHtml(contact.note || "")}</div>
    <div class="detail-actions">
      <button class="secondary-button" data-action="edit-entity" data-type="contact" data-id="${contact.id}">Редактировать</button>
      <button class="danger-button" data-action="delete-entity" data-type="contact" data-id="${contact.id}">Удалить</button>
    </div>
  </div>`;
}

function renderObjectDetail(id) {
  const object = byId("objects", id);
  const sample = state.data.samples.find((item) => item.objectId === id);
  const test = state.data.tests.find((item) => item.objectId === id);
  const offer = state.data.offers.find((item) => item.objectId === id);
  const order = state.data.orders.find((item) => item.objectId === id);
  detailPanel.innerHTML = `<div class="detail-card">
    <div class="detail-title">
      <h2>${escapeHtml(object.name)}</h2>
      <div class="meta-line">${escapeHtml(clientName(object.clientId))} · ${escapeHtml(object.location)}</div>
      <div class="meta-line">${badge(object.type)} ${badge(salesStage(object.stage), "gold")} ${badge(object.complexity, object.complexity === "Критическая" ? "red" : "blue")}</div>
    </div>
    ${detailBlock("Технические параметры", [`Длина: ${object.lengthM} м`, `Диаметр: ${object.diameterMm} мм`, `Грунт: ${object.soil}`, `Глубина: ${object.depthM} м`, `Риск: ${object.risk}`])}
    ${detailBlock("Коммерция и продукт", [`Продукт: ${object.product}`, `Фасовка: ${object.package}`, `Потребность: ${tons(object.requiredTons)}`, `Потенциал клиента: ${tons(object.clientPotentialTonsMonth)}/мес`, `Вероятность заказа: ${object.orderProbability}%`, `Прогноз выручки: ${money(object.revenue * (object.orderProbability / 100))}`, `Следующий контакт: ${object.nextContactDate}`, `Дата работ: ${object.worksDate}`])}
    ${detailBlock("Связанные сущности", [`Образец: ${sample?.batch || "нет"}`, `Испытание: ${test?.status || "нет"}`, `КП: ${offer?.number || "нет"}`, `Заказ: ${order?.number || "нет"}`])}
    ${detailBlock("Комментарий технолога", [object.technologistComment])}
  </div>`;
}

function renderSampleDetail(id) {
  const sample = byId("samples", id);
  const test = state.data.tests.find((item) => item.sampleId === id);
  const offer = state.data.offers.find((item) => item.sampleId === id);
  const order = state.data.orders.find((item) => item.sampleId === id);
  detailPanel.innerHTML = `<div class="detail-card">
    <div class="detail-title">
      <h2>${escapeHtml(sample.product)} · ${escapeHtml(sample.batch)}</h2>
      <div class="meta-line">${escapeHtml(clientName(sample.clientId))} · ${escapeHtml(objectName(sample.objectId))}</div>
      <div class="meta-line">${badge(sample.status, sample.feedbackDays >= 4 ? "red" : "gold")} ${badge(`${sample.quantityKg} кг`, "blue")}</div>
    </div>
    ${detailBlock("Логистика образца", [`Отправлен: ${sample.sentAt}`, `Получен: ${sample.receivedAt || "не подтвержден"}`, `Перевозчик: ${sample.carrier}`, `Трек: ${sample.tracking}`, `Получатель: ${sample.recipient}`])}
    ${detailBlock("Испытания образца", [`Дата испытаний: ${sample.testDate || "не назначена"}`, `Результат испытаний: ${sample.testResult || "нет данных"}`])}
    ${detailBlock("Цель и контроль", [`Цель: ${sample.purpose}`, `Дней без обратной связи: ${sample.feedbackDays}`, `Ответственный: ${sample.owner}`, `Следующий шаг: ${sample.nextStep}`])}
    ${detailBlock("Связи", [`Испытание: ${test?.status || "нет"}`, `КП: ${offer?.number || "нет"}`, `Заказ: ${order?.number || "нет"}`])}
  </div>`;
}

function detailBlock(title, items) {
  return `<section><h3>${escapeHtml(title)}</h3><div class="stack">${items.map((item) => `<div class="compact-item">${escapeHtml(item)}</div>`).join("")}</div></section>`;
}

const entityForms = {
  client: {
    titleCreate: "Создание клиента ГНБ",
    titleEdit: "Редактирование клиента ГНБ",
    collection: "clients",
    idPrefix: "C",
    fields: [
      ["name", "Название клиента", "text", true],
      ["legalName", "Юридическое название", "text"],
      ["inn", "ИНН", "text", true],
      ["type", "Тип клиента", "select", true, ["Подрядчик ГНБ", "Дилер", "Генподрядчик", "Проектная организация", "Постоянный клиент", "Потенциальный клиент"]],
      ["region", "Регион", "text", true],
      ["city", "Город", "text"],
      ["stage", "Стадия воронки", "select", true, ["Новый клиент", "Переговоры", "Отправлено КП", "Отправлен образец", "Испытания", "Заказ", "Повторный заказ", "Пауза"]],
      ["status", "Статус", "text"],
      ["worksRegion", "Регионы работ", "text"],
      ["objects", "Типовые объекты", "text"],
      ["rigs", "Техника / установки", "text"],
      ["avgDiameter", "Средний диаметр", "text"],
      ["avgLength", "Средняя длина переходов", "text"],
      ["soils", "Грунты", "text"],
      ["season", "Сезонность", "text"],
      ["monthlyPotentialTons", "Потенциал, тонн/мес", "number"],
      ["currentSupplier", "Текущий поставщик", "text"],
      ["productInterest", "Интерес к продукту МБЗ", "text"],
      ["forecastRevenue", "Прогноз выручки, руб", "number"],
      ["forecastTons", "Прогноз тоннажа", "number"],
      ["nextStep", "Следующий шаг", "textarea"],
      ["risk", "Риск", "select", false, ["Нет", "Да"]]
    ]
  },
  contact: {
    titleCreate: "Создание ЛПР",
    titleEdit: "Редактирование ЛПР",
    collection: "contacts",
    idPrefix: "P",
    fields: [
      ["clientId", "Клиент", "client", true],
      ["name", "ФИО ЛПР", "text", true],
      ["position", "Должность", "text"],
      ["decisionRole", "Роль в решении", "text"],
      ["influence", "Влияние", "select", false, ["Высокое", "Среднее", "Низкое"]],
      ["phone", "Телефон", "tel"],
      ["whatsapp", "WhatsApp", "tel"],
      ["email", "Email", "email"],
      ["note", "Примечание", "textarea"]
    ]
  },
  object: {
    titleCreate: "Создание объекта ГНБ",
    collection: "objects",
    idPrefix: "G",
    fields: [
      ["clientId", "Клиент", "client", true],
      ["name", "Название объекта", "text", true],
      ["region", "Регион", "text"],
      ["location", "Город / участок", "text"],
      ["customer", "Заказчик", "text"],
      ["stage", "Статус объекта", "select", true, ["Новый клиент", "Переговоры", "Отправлено КП", "Отправлен образец", "Испытания", "Заказ", "Повторный заказ"]],
      ["type", "Тип перехода", "text"],
      ["lengthM", "Длина, м", "number"],
      ["diameterMm", "Диаметр, мм", "number"],
      ["depthM", "Глубина, м", "number"],
      ["soil", "Грунт", "text"],
      ["complexity", "Сложность", "select", false, ["Низкая", "Средняя", "Высокая", "Критическая"]],
      ["risk", "Риски бурения", "text"],
      ["product", "Рекомендуемый продукт", "text"],
      ["package", "Фасовка", "text"],
      ["requiredTons", "Потребность, тонн", "number"],
      ["clientPotentialTonsMonth", "Потенциал клиента, тонн/мес", "number"],
      ["orderProbability", "Вероятность заказа, %", "number"],
      ["nextContactDate", "Дата следующего контакта", "date"],
      ["revenue", "Сумма заказа / потенциал, руб", "number"],
      ["worksDate", "Дата начала", "date"],
      ["technologistComment", "Примечания", "textarea"]
    ]
  },
  offer: {
    titleCreate: "Создание КП",
    collection: "offers",
    idPrefix: "CO",
    fields: [
      ["clientId", "Клиент", "client", true],
      ["objectId", "Объект ГНБ", "object", true],
      ["sampleId", "Образец", "sample"],
      ["testId", "Испытание", "test"],
      ["number", "Номер КП", "text", true],
      ["version", "Версия", "number"],
      ["status", "Статус", "select", true, ["Черновик", "Отправлено", "Обсуждается", "Согласовано", "Отклонено"]],
      ["amount", "Сумма, руб", "number"],
      ["tons", "Тоннаж", "number"],
      ["validUntil", "Действует до", "date"]
    ]
  },
  sample: {
    titleCreate: "Создание образца",
    collection: "samples",
    idPrefix: "S",
    fields: [
      ["clientId", "Клиент", "client", true],
      ["objectId", "Объект ГНБ", "object", true],
      ["product", "Продукт", "text", true],
      ["batch", "Партия", "text"],
      ["quantityKg", "Количество, кг", "number"],
      ["purpose", "Цель отправки", "text"],
      ["status", "Статус", "select", true, ["Заявлен", "Подготовлен", "Отправлен", "Получен клиентом", "На испытании", "Обратная связь получена", "Привел к КП", "Привел к заказу", "Закрыт без результата"]],
      ["sentAt", "Дата отправки", "date"],
      ["receivedAt", "Дата получения", "date"],
      ["testDate", "Дата испытаний", "date"],
      ["testResult", "Результат испытаний", "textarea"],
      ["carrier", "Перевозчик", "text"],
      ["tracking", "Трек-номер", "text"],
      ["recipient", "Получатель", "text"],
      ["owner", "Ответственный", "text"],
      ["feedbackDays", "Дней без обратной связи", "number"],
      ["nextStep", "Следующий шаг", "textarea"]
    ]
  },
  test: {
    titleCreate: "Создание испытания",
    collection: "tests",
    idPrefix: "T",
    fields: [
      ["clientId", "Клиент", "client", true],
      ["objectId", "Объект ГНБ", "object", true],
      ["sampleId", "Образец", "sample", true],
      ["type", "Тип испытания", "text"],
      ["status", "Статус", "select", true, ["В работе", "Завершено", "Пауза"]],
      ["viscosity", "Вязкость", "number"],
      ["fluidLoss", "Водоотдача", "number"],
      ["swelling", "Набухание", "number"],
      ["conclusion", "Заключение", "textarea"],
      ["completedAt", "Дата завершения", "date"]
    ]
  },
  task: {
    titleCreate: "Создание задачи",
    titleEdit: "Редактирование задачи",
    collection: "tasks",
    idPrefix: "TASK",
    fields: [
      ["clientId", "Клиент", "client", true],
      ["objectId", "Объект ГНБ", "object"],
      ["contactId", "ЛПР", "contact"],
      ["assignee", "Кому позвонить", "text", true],
      ["callDate", "Когда позвонить", "date", true],
      ["nextStep", "Следующий шаг", "textarea", true],
      ["status", "Статус", "select", true, ["В работе", "Просрочена", "Выполнена", "Отменена"]]
    ]
  },
  order: {
    titleCreate: "Создание заказа",
    collection: "orders",
    idPrefix: "O",
    fields: [
      ["clientId", "Клиент", "client", true],
      ["objectId", "Объект ГНБ", "object", true],
      ["sampleId", "Образец", "sample"],
      ["testId", "Испытание", "test"],
      ["offerId", "КП", "offer"],
      ["number", "Номер заказа", "text", true],
      ["status", "Статус", "select", true, ["Новый", "Согласование", "Счет выставлен", "В отгрузке", "Закрыт", "Отменен"]],
      ["amount", "Сумма, руб", "number"],
      ["tons", "Тоннаж", "number"],
      ["payment", "Оплата", "text"],
      ["delivery", "Доставка", "text"],
      ["shipDate", "Дата отгрузки", "date"]
    ]
  }
};

function nextId(prefix, collection) {
  const nums = state.data[collection].map((item) => Number(String(item.id || "").split("-").pop())).filter(Number.isFinite);
  return `${prefix}-${String((Math.max(0, ...nums) || 0) + 1).padStart(3, "0")}`;
}

function openActionMenu() {
  const actions = [
    ["client", "Клиент"],
    ["contact", "ЛПР"],
    ["object", "Объект ГНБ"],
    ["offer", "КП"],
    ["sample", "Образец"],
    ["test", "Испытание"],
    ["task", "Задача"],
    ["order", "Заказ"]
  ];
  showModal("Создать запись", `<div class="action-grid">${actions.map(([type, label]) => `<button class="primary-button" data-create="${type}">+ ${label}</button>`).join("")}</div>`);
}

function showModal(title, body, onSubmit) {
  closeModal();
  const wrapper = document.createElement("div");
  wrapper.className = "modal-backdrop";
  wrapper.innerHTML = `<div class="modal" role="dialog" aria-modal="true">
    <div class="modal-head"><h2>${escapeHtml(title)}</h2><button class="icon-button" data-close-modal>×</button></div>
    ${body}
  </div>`;
  document.body.append(wrapper);
  wrapper.addEventListener("click", (event) => {
    if (event.target === wrapper || event.target.closest("[data-close-modal]")) closeModal();
    const createButton = event.target.closest("[data-create]");
    if (createButton) {
      const type = createButton.dataset.create;
      closeModal();
      openEntityForm(type);
    }
  });
  const form = wrapper.querySelector("form");
  if (form && onSubmit) form.addEventListener("submit", onSubmit);
}

function closeModal() {
  document.querySelector(".modal-backdrop")?.remove();
}

function fieldOptions(type, currentItem = {}) {
  if (type === "client") return state.data.clients.map((item) => [item.id, item.name]);
  if (type === "object") return state.data.objects.filter((item) => !currentItem.clientId || item.clientId === currentItem.clientId).map((item) => [item.id, item.name]);
  if (type === "sample") return state.data.samples.filter((item) => !currentItem.clientId || item.clientId === currentItem.clientId).map((item) => [item.id, `${item.product} · ${item.batch}`]);
  if (type === "test") return state.data.tests.filter((item) => !currentItem.clientId || item.clientId === currentItem.clientId).map((item) => [item.id, `${item.type} · ${item.status}`]);
  if (type === "offer") return state.data.offers.filter((item) => !currentItem.clientId || item.clientId === currentItem.clientId).map((item) => [item.id, item.number]);
  if (type === "contact") return state.data.contacts.filter((item) => !currentItem.clientId || item.clientId === currentItem.clientId).map((item) => [item.id, `${item.name} · ${item.position}`]);
  return [];
}

function renderField([name, label, type, required, options], value, item) {
  const req = required ? "required" : "";
  if (type === "textarea") return `<label class="form-field full"><span>${label}</span><textarea name="${name}" ${req}>${escapeHtml(value)}</textarea></label>`;
  if (type === "select") {
    const displayValue = typeof value === "boolean" ? (value ? "Да" : "Нет") : String(value);
    return `<label class="form-field"><span>${label}</span><select name="${name}" ${req}>${options.map((option) => `<option value="${escapeHtml(option)}" ${displayValue === option ? "selected" : ""}>${escapeHtml(option)}</option>`).join("")}</select></label>`;
  }
  if (["client", "object", "sample", "test", "offer", "contact"].includes(type)) {
    const opts = fieldOptions(type, item);
    return `<label class="form-field"><span>${label}</span><select name="${name}" ${req}><option value="">Не выбрано</option>${opts.map(([id, text]) => `<option value="${escapeHtml(id)}" ${String(value) === id ? "selected" : ""}>${escapeHtml(text)}</option>`).join("")}</select></label>`;
  }
  return `<label class="form-field"><span>${label}</span><input name="${name}" type="${type}" value="${escapeHtml(value)}" ${req}></label>`;
}

function defaultItem(type) {
  const firstClient = state.data.clients[0]?.id || "";
  const firstObject = state.data.objects.find((item) => item.clientId === firstClient)?.id || state.data.objects[0]?.id || "";
  const defaults = {
    client: { status: "В работе", stage: "Новый клиент", type: "Подрядчик ГНБ", region: "ЮФО", risk: "Нет" },
    contact: { clientId: firstClient, influence: "Среднее", whatsapp: "" },
    object: { clientId: firstClient, stage: "Переговоры", complexity: "Средняя", orderProbability: 50, nextContactDate: today(), worksDate: today() },
    offer: { clientId: firstClient, objectId: firstObject, number: `КП-${Date.now().toString().slice(-5)}`, version: 1, status: "Отправлено", validUntil: today() },
    sample: { clientId: firstClient, objectId: firstObject, status: "Отправлен", sentAt: today(), testDate: "", testResult: "", feedbackDays: 0 },
    test: { clientId: firstClient, objectId: firstObject, sampleId: state.data.samples[0]?.id || "", status: "В работе", completedAt: "" },
    task: { clientId: firstClient, objectId: firstObject, contactId: state.data.contacts.find((item) => item.clientId === firstClient)?.id || "", assignee: "", callDate: today(), status: "В работе" },
    order: { clientId: firstClient, objectId: firstObject, number: `ЗК-${Date.now().toString().slice(-5)}`, status: "Новый", payment: "Счет не выставлен", delivery: "Не запланирована", shipDate: today() }
  };
  return defaults[type] || {};
}

function today() {
  return new Date().toISOString().slice(0, 10);
}

function openEntityForm(type, id = null) {
  const spec = entityForms[type];
  const original = id ? byId(spec.collection, id) : null;
  const item = { ...defaultItem(type), ...(original || {}) };
  if (!original && state.selected?.type === "client" && "clientId" in item) item.clientId = state.selected.id;
  if (!original && state.selected?.type === "object") {
    const selectedObject = byId("objects", state.selected.id);
    if (selectedObject && "objectId" in item) item.objectId = selectedObject.id;
    if (selectedObject && "clientId" in item) item.clientId = selectedObject.clientId;
  }
  const title = original ? (spec.titleEdit || spec.titleCreate.replace("Создание", "Редактирование")) : spec.titleCreate;
  const formHtml = `<form class="modal-form" data-form-type="${type}">
    <div class="form-grid">${spec.fields.map((field) => renderField(field, item[field[0]] ?? "", item)).join("")}</div>
    <div class="form-actions">
      <button type="button" class="secondary-button" data-close-modal>Отмена</button>
      <button class="primary-button" type="submit">Сохранить</button>
    </div>
  </form>`;
  showModal(title, formHtml, (event) => {
    event.preventDefault();
    saveEntityForm(type, id, new FormData(event.currentTarget));
  });
}

function formValue(value, type) {
  if (type === "number") return value === "" ? 0 : Number(value);
  if (value === "Да") return true;
  if (value === "Нет") return false;
  return value;
}

function saveEntityForm(type, id, formData) {
  const spec = entityForms[type];
  const values = {};
  spec.fields.forEach(([name, , fieldType]) => {
    values[name] = formValue(formData.get(name), fieldType);
  });
  if (type === "client") values.risk = values.risk === true;
  if (id) {
    const index = state.data[spec.collection].findIndex((item) => item.id === id);
    state.data[spec.collection][index] = { ...state.data[spec.collection][index], ...values };
  } else {
    state.data[spec.collection].push({ id: nextId(spec.idPrefix, spec.collection), ...values });
  }
  saveData();
  populateFilters();
  closeModal();
  showToast("Данные сохранены");
  render();
}

function deleteClient(id) {
  const client = byId("clients", id);
  if (!client) return;
  if (!confirm(`Удалить клиента "${client.name}" и все связанные записи?`)) return;
  ["contacts", "objects", "samples", "tests", "offers", "orders", "calls", "tasks", "whatsapp", "emails"].forEach((collection) => {
    state.data[collection] = state.data[collection].filter((item) => item.clientId !== id);
  });
  state.data.clients = state.data.clients.filter((item) => item.id !== id);
  if (state.selected?.id === id) state.selected = null;
  saveData();
  populateFilters();
  showToast("Клиент удален");
  render();
}

function deleteEntity(type, id) {
  if (type === "client") {
    deleteClient(id);
    return;
  }
  const spec = entityForms[type];
  const item = byId(spec.collection, id);
  if (!item) return;
  if (!confirm(`Удалить запись "${entityLabel(type, item)}"?`)) return;

  if (type === "object") {
    state.data.samples = state.data.samples.filter((row) => row.objectId !== id);
    state.data.tests = state.data.tests.filter((row) => row.objectId !== id);
    state.data.offers = state.data.offers.filter((row) => row.objectId !== id);
    state.data.orders = state.data.orders.filter((row) => row.objectId !== id);
    state.data.calls = state.data.calls.filter((row) => row.objectId !== id);
    state.data.tasks = state.data.tasks.filter((row) => row.objectId !== id);
    state.data.whatsapp = state.data.whatsapp.filter((row) => row.objectId !== id);
    state.data.emails = state.data.emails.filter((row) => row.objectId !== id);
  }
  if (type === "contact") {
    state.data.calls = state.data.calls.map((row) => row.contactId === id ? { ...row, contactId: "" } : row);
    state.data.tasks = state.data.tasks.map((row) => row.contactId === id ? { ...row, contactId: "" } : row);
    state.data.whatsapp = state.data.whatsapp.map((row) => row.contactId === id ? { ...row, contactId: "" } : row);
    state.data.emails = state.data.emails.map((row) => row.contactId === id ? { ...row, contactId: "" } : row);
  }
  if (type === "sample") {
    state.data.tests = state.data.tests.filter((row) => row.sampleId !== id);
    state.data.offers = state.data.offers.filter((row) => row.sampleId !== id);
    state.data.orders = state.data.orders.filter((row) => row.sampleId !== id);
  }
  if (type === "test") {
    state.data.offers = state.data.offers.map((row) => row.testId === id ? { ...row, testId: "" } : row);
    state.data.orders = state.data.orders.map((row) => row.testId === id ? { ...row, testId: "" } : row);
  }
  if (type === "offer") {
    state.data.orders = state.data.orders.map((row) => row.offerId === id ? { ...row, offerId: "" } : row);
  }

  state.data[spec.collection] = state.data[spec.collection].filter((row) => row.id !== id);
  if (state.selected?.id === id) state.selected = null;
  saveData();
  populateFilters();
  showToast("Запись удалена");
  render();
}

function entityLabel(type, item) {
  if (type === "object") return item.name;
  if (type === "sample") return `${item.product} ${item.batch || ""}`.trim();
  if (type === "contact") return item.name;
  if (type === "task") return item.nextStep;
  if (type === "offer") return item.number;
  if (type === "test") return `${item.type} ${item.status}`.trim();
  if (type === "order") return item.number;
  return item.id;
}

function showToast(text) {
  document.querySelector(".toast")?.remove();
  const toast = document.createElement("div");
  toast.className = "toast";
  toast.textContent = text;
  document.body.append(toast);
  setTimeout(() => toast.remove(), 2600);
}

function exportExcel() {
  if (!window.XLSX) {
    showToast("Библиотека Excel еще не загружена");
    return;
  }
  const workbook = XLSX.utils.book_new();
  Object.entries({
    clients: state.data.clients,
    contacts: state.data.contacts,
    objects: state.data.objects,
    samples: state.data.samples,
    tests: state.data.tests,
    offers: state.data.offers,
    orders: state.data.orders,
    calls: state.data.calls,
    tasks: state.data.tasks,
    whatsapp: state.data.whatsapp,
    emails: state.data.emails,
    settings_company: [state.data.settings.companyDetails],
    settings_employees: state.data.settings.employees,
    settings_products: state.data.settings.products,
    settings_regions: state.data.settings.salesRegions,
    settings_sources: state.data.settings.clientSources,
    settings_whatsapp: state.data.settings.whatsappTemplates,
    settings_emails: state.data.settings.emailTemplates,
    settings_offers: state.data.settings.offerTemplates
  }).forEach(([name, rows]) => XLSX.utils.book_append_sheet(workbook, XLSX.utils.json_to_sheet(rows), name));
  XLSX.writeFile(workbook, `crm-mbz-${today()}.xlsx`);
}

function importExcel(file) {
  if (!window.XLSX) {
    showToast("Библиотека Excel еще не загружена");
    return;
  }
  const reader = new FileReader();
  reader.onload = () => {
    const workbook = XLSX.read(reader.result, { type: "array", cellDates: true });
    const imported = structuredClone(state.data);
    workbook.SheetNames.forEach((sheetName) => {
      const rows = XLSX.utils.sheet_to_json(workbook.Sheets[sheetName], { defval: "" });
      mergeRows(imported, sheetName, rows);
    });
    state.data = normalizeData(imported);
    saveData();
    populateFilters();
    showToast("Импорт Excel выполнен");
    render();
  };
  reader.readAsArrayBuffer(file);
}

function importClientsExcel(file) {
  if (!window.XLSX) {
    showToast("Библиотека Excel еще не загружена");
    return;
  }
  const reader = new FileReader();
  reader.onload = () => {
    const workbook = XLSX.read(reader.result, { type: "array", cellDates: true });
    const rows = workbook.SheetNames.flatMap((sheetName) => XLSX.utils.sheet_to_json(workbook.Sheets[sheetName], { defval: "" }));
    const clients = rows.map(mapClient).filter(Boolean);
    if (!clients.length) {
      showToast("Клиенты не найдены. Нужны колонки id/client_id и name/company_name");
      return;
    }
    mergeById(state.data.clients, clients);
    state.data = normalizeData(state.data);
    saveData();
    populateFilters();
    showToast(`Импортировано клиентов: ${clients.length}`);
    render();
  };
  reader.readAsArrayBuffer(file);
}

function mergeRows(target, sheetName, rows) {
  const lower = sheetName.toLowerCase();
  if (lower.includes("client") || sheetName.includes("Клиенты")) mergeById(target.clients, rows.map(mapClient).filter(Boolean));
  if (lower.includes("contact") || sheetName.includes("ЛПР")) mergeById(target.contacts, rows.map(mapContact).filter(Boolean));
  if (lower.includes("object") || sheetName.includes("Объекты")) mergeById(target.objects, rows.map(mapObject).filter(Boolean));
  if (lower.includes("sample") || sheetName.includes("Образцы")) mergeById(target.samples, rows.map(mapSample).filter(Boolean));
  if (lower.includes("test") || sheetName.includes("Испытания")) mergeById(target.tests, rows.map(mapTest).filter(Boolean));
  if (lower.includes("offer") || sheetName.includes("КП")) mergeById(target.offers, rows.map(mapOffer).filter(Boolean));
  if (lower.includes("order") || sheetName.includes("Заказы")) mergeById(target.orders, rows.map(mapOrder).filter(Boolean));
  if (lower.includes("task") || sheetName.includes("Задачи")) mergeById(target.tasks, rows.map(mapTask).filter(Boolean));
}

function mergeById(targetRows, newRows) {
  newRows.forEach((row) => {
    const index = targetRows.findIndex((item) => item.id === row.id);
    if (index >= 0) targetRows[index] = { ...targetRows[index], ...row };
    else targetRows.push(row);
  });
}

function val(row, ...keys) {
  for (const key of keys) if (row[key] !== undefined && row[key] !== "") return row[key];
  return "";
}

function dateVal(value) {
  if (value instanceof Date) return value.toISOString().slice(0, 10);
  return String(value || "").slice(0, 10);
}

function boolVal(value) {
  return value === true || String(value).toLowerCase() === "да" || String(value).toLowerCase() === "true";
}

function numVal(value) {
  return value === "" ? 0 : Number(value) || 0;
}

function mapClient(row) {
  const id = val(row, "id", "client_id");
  const name = val(row, "name", "company_name");
  if (!id || !name) return null;
  return {
    id, name,
    legalName: val(row, "legalName", "legal_name"),
    inn: val(row, "inn"),
    type: val(row, "type", "client_type") || "Подрядчик ГНБ",
    region: val(row, "region") || "ЮФО",
    city: val(row, "city"),
    stage: val(row, "stage") || "Новый",
    status: val(row, "status"),
    worksRegion: val(row, "worksRegion", "works_region"),
    objects: val(row, "objects", "typical_objects"),
    rigs: val(row, "rigs"),
    avgDiameter: val(row, "avgDiameter", "avg_diameter_mm"),
    avgLength: val(row, "avgLength", "avg_length_m"),
    soils: val(row, "soils", "soil_types"),
    season: val(row, "season", "seasonality"),
    monthlyPotentialTons: numVal(val(row, "monthlyPotentialTons", "monthly_potential_tons")),
    currentSupplier: val(row, "currentSupplier", "current_supplier"),
    productInterest: val(row, "productInterest", "product_interest"),
    forecastRevenue: numVal(val(row, "forecastRevenue", "forecast_revenue_rub")),
    forecastTons: numVal(val(row, "forecastTons", "forecast_tons")),
    nextStep: val(row, "nextStep", "next_step"),
    risk: boolVal(val(row, "risk", "risk_flag"))
  };
}

function mapContact(row) {
  const id = val(row, "id", "contact_id");
  if (!id) return null;
  return { id, clientId: val(row, "clientId", "client_id"), name: val(row, "name", "full_name"), position: val(row, "position"), decisionRole: val(row, "decisionRole", "decision_role"), influence: val(row, "influence", "influence_level"), phone: val(row, "phone"), whatsapp: val(row, "whatsapp", "WhatsApp") || val(row, "phone"), email: val(row, "email"), note: val(row, "note", "notes") };
}

function mapObject(row) {
  const id = val(row, "id", "object_id");
  const name = val(row, "name", "object_name");
  if (!id || !name) return null;
  return { id, clientId: val(row, "clientId", "client_id"), name, region: val(row, "region"), location: val(row, "location", "city_or_location"), customer: val(row, "customer"), stage: val(row, "stage", "object_stage") || "Образец", type: val(row, "type", "transition_type"), lengthM: numVal(val(row, "lengthM", "length_m")), diameterMm: numVal(val(row, "diameterMm", "diameter_mm")), depthM: numVal(val(row, "depthM", "depth_m")), soil: val(row, "soil"), complexity: val(row, "complexity"), risk: val(row, "risk", "drilling_risks"), product: val(row, "product", "recommended_product"), package: val(row, "package", "package_type"), requiredTons: numVal(val(row, "requiredTons", "required_tons")), clientPotentialTonsMonth: numVal(val(row, "clientPotentialTonsMonth", "monthly_potential_tons")), orderProbability: numVal(val(row, "orderProbability", "order_probability_percent")), nextContactDate: dateVal(val(row, "nextContactDate", "next_contact_date")), revenue: numVal(val(row, "revenue", "forecast_revenue_rub")), worksDate: dateVal(val(row, "worksDate", "planned_work_date")), technologistComment: val(row, "technologistComment", "technologist_comment") };
}

function mapSample(row) {
  const id = val(row, "id", "sample_id");
  if (!id) return null;
  return { id, clientId: val(row, "clientId", "client_id"), objectId: val(row, "objectId", "object_id"), product: val(row, "product"), batch: val(row, "batch", "batch_number"), quantityKg: numVal(val(row, "quantityKg", "quantity_kg")), purpose: val(row, "purpose"), status: val(row, "status"), sentAt: dateVal(val(row, "sentAt", "sent_date")), receivedAt: dateVal(val(row, "receivedAt", "received_date")), testDate: dateVal(val(row, "testDate", "test_date")), testResult: val(row, "testResult", "test_result"), carrier: val(row, "carrier"), tracking: val(row, "tracking", "tracking_number"), recipient: val(row, "recipient", "recipient_name"), owner: val(row, "owner", "responsible_manager"), feedbackDays: numVal(val(row, "feedbackDays", "feedback_days")), nextStep: val(row, "nextStep", "next_step") };
}

function mapTest(row) {
  const id = val(row, "id", "test_id");
  if (!id) return null;
  return { id, clientId: val(row, "clientId", "client_id"), objectId: val(row, "objectId", "object_id"), sampleId: val(row, "sampleId", "sample_id"), type: val(row, "type", "test_type"), status: val(row, "status"), viscosity: numVal(val(row, "viscosity")), fluidLoss: numVal(val(row, "fluidLoss", "fluid_loss")), swelling: numVal(val(row, "swelling")), conclusion: val(row, "conclusion"), completedAt: dateVal(val(row, "completedAt", "completed_at")) };
}

function mapOffer(row) {
  const id = val(row, "id", "offer_id");
  if (!id) return null;
  return { id, clientId: val(row, "clientId", "client_id"), objectId: val(row, "objectId", "object_id"), sampleId: val(row, "sampleId", "sample_id"), testId: val(row, "testId", "test_id"), number: val(row, "number", "offer_number"), version: numVal(val(row, "version")) || 1, status: val(row, "status"), amount: numVal(val(row, "amount", "total_amount_rub")), tons: numVal(val(row, "tons", "quantity_tons")), validUntil: dateVal(val(row, "validUntil", "valid_until")) };
}

function mapOrder(row) {
  const id = val(row, "id", "order_id");
  if (!id) return null;
  return { id, clientId: val(row, "clientId", "client_id"), objectId: val(row, "objectId", "object_id"), sampleId: val(row, "sampleId", "sample_id"), testId: val(row, "testId", "test_id"), offerId: val(row, "offerId", "offer_id"), number: val(row, "number", "order_number"), status: val(row, "status", "order_status"), amount: numVal(val(row, "amount", "total_amount_rub")), tons: numVal(val(row, "tons", "quantity_tons")), payment: val(row, "payment", "payment_status"), delivery: val(row, "delivery", "delivery_status"), shipDate: dateVal(val(row, "shipDate", "planned_ship_date")) };
}

function mapTask(row) {
  const id = val(row, "id", "task_id");
  if (!id) return null;
  return { id, clientId: val(row, "clientId", "client_id"), objectId: val(row, "objectId", "object_id"), contactId: val(row, "contactId", "contact_id"), assignee: val(row, "assignee", "responsible_manager"), callDate: dateVal(val(row, "callDate", "call_date")), nextStep: val(row, "nextStep", "next_step"), status: val(row, "status") || "В работе" };
}

function setupEvents() {
  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") closeModal();
  });

  navList.addEventListener("click", (event) => {
    const button = event.target.closest("[data-view]");
    if (!button) return;
    state.view = button.dataset.view;
    render();
  });

  globalSearch.addEventListener("input", (event) => {
    state.search = event.target.value;
    render();
  });

  regionFilter.addEventListener("change", (event) => {
    state.filters.region = event.target.value;
    render();
  });

  clientTypeFilter.addEventListener("change", (event) => {
    state.filters.clientType = event.target.value;
    render();
  });

  stageFilter.addEventListener("change", (event) => {
    state.filters.stage = event.target.value;
    render();
  });

  riskOnly.addEventListener("change", (event) => {
    state.filters.riskOnly = event.target.checked;
    render();
  });

  document.querySelector("#resetData").addEventListener("click", () => {
    state.data = normalizeData(structuredClone(seedData));
    state.selected = null;
    saveData();
    populateFilters();
    render();
  });

  document.querySelector("#quickCreate").addEventListener("click", openActionMenu);
  document.querySelector("#exportExcel").addEventListener("click", exportExcel);
  document.querySelector("#importExcel").addEventListener("click", () => document.querySelector("#excelFileInput").click());
  document.querySelector("#excelFileInput").addEventListener("change", (event) => {
    const file = event.target.files?.[0];
    if (file) importExcel(file);
    event.target.value = "";
  });

  document.querySelector("#clientExcelFileInput").addEventListener("change", (event) => {
    const file = event.target.files?.[0];
    if (file) importClientsExcel(file);
    event.target.value = "";
  });

  document.querySelector("#backupFileInput").addEventListener("change", (event) => {
    const file = event.target.files?.[0];
    if (file) restoreBackup(file);
    event.target.value = "";
  });

  document.body.addEventListener("click", (event) => {
    const createButton = event.target.closest("[data-create]");
    if (createButton && !event.target.closest(".modal-backdrop")) {
      openEntityForm(createButton.dataset.create);
      return;
    }

    const action = event.target.closest("[data-action]");
    if (!action) return;
    if (action.dataset.action === "edit-client") openEntityForm("client", action.dataset.id);
    if (action.dataset.action === "delete-client") deleteClient(action.dataset.id);
    if (action.dataset.action === "import-clients-excel") document.querySelector("#clientExcelFileInput").click();
    if (action.dataset.action === "edit-entity") openEntityForm(action.dataset.type, action.dataset.id);
    if (action.dataset.action === "delete-entity") deleteEntity(action.dataset.type, action.dataset.id);
    if (action.dataset.action === "edit-setting") openSettingForm(action.dataset.setting);
    if (action.dataset.action === "download-backup") downloadBackup();
    if (action.dataset.action === "restore-backup") document.querySelector("#backupFileInput").click();
  });
}

populateFilters();
setupEvents();
const testCycleToCreate = new URLSearchParams(window.location.search).get("createTestCycle");
if (testCycleToCreate === "1") createTestCycle();
render();

const formToOpen = new URLSearchParams(window.location.search).get("form");
if (formToOpen && entityForms[formToOpen]) openEntityForm(formToOpen);
const editClientToOpen = new URLSearchParams(window.location.search).get("editClient");
if (editClientToOpen) openEntityForm("client", editClientToOpen);

function createTestCycle() {
  if (state.data.clients.some((item) => item.id === "C-TEST-MBZ")) return;
  const client = {
    id: "C-TEST-MBZ",
    name: "Тестовый клиент МБЗ ГНБ",
    legalName: "ООО Тестовый клиент МБЗ ГНБ",
    inn: "2308999001",
    type: "Подрядчик ГНБ",
    region: "ЮФО",
    city: "Краснодар",
    stage: "Заказ",
    status: "В работе",
    worksRegion: "ЮФО",
    objects: "дороги, связь, водоканал",
    rigs: "Vermeer D80x100",
    avgDiameter: "315 мм",
    avgLength: "350 м",
    soils: "глина, песок",
    season: "март-ноябрь",
    monthlyPotentialTons: 90,
    currentSupplier: "текущий поставщик",
    productInterest: "MBZ HDD Standard",
    forecastRevenue: 3750000,
    forecastTons: 75,
    nextStep: "Провести контроль первого заказа",
    risk: false
  };
  const object = {
    id: "G-TEST-MBZ",
    clientId: client.id,
    name: "Тестовый переход под дорогой ЮФО",
    region: "ЮФО",
    location: "Краснодарский край",
    customer: "дорожный заказчик",
    stage: "Заказ",
    type: "Дорога",
    lengthM: 360,
    diameterMm: 315,
    depthM: 8,
    soil: "глина, песок",
    complexity: "Средняя",
    risk: "потеря раствора",
    product: "MBZ HDD Standard",
    package: "мешок 25 кг",
    requiredTons: 75,
    clientPotentialTonsMonth: 90,
    orderProbability: 100,
    nextContactDate: today(),
    revenue: 3750000,
    worksDate: today(),
    technologistComment: "Тестовая цепочка создана для проверки рабочего цикла CRM."
  };
  const contact = { id: "P-TEST-MBZ", clientId: client.id, name: "Иван Петров", position: "Главный инженер", decisionRole: "Технический ЛПР", influence: "Высокое", phone: "+7 900 000-00-01", whatsapp: "+7 900 000-00-01", email: "test@mbz-crm.ru", note: "Тестовый ЛПР для проверки полного цикла." };
  const sample = { id: "S-TEST-MBZ", clientId: client.id, objectId: object.id, product: "MBZ HDD Standard", batch: "TEST-001", quantityKg: 25, purpose: "Полевое тестирование", status: "Привел к КП", sentAt: today(), receivedAt: today(), testDate: today(), testResult: "Рекомендовано к применению", carrier: "СДЭК", tracking: "TEST-TRACK", recipient: "Главный инженер", owner: "Менеджер МБЗ", feedbackDays: 0, nextStep: "Передать КП" };
  const test = { id: "T-TEST-MBZ", clientId: client.id, objectId: object.id, sampleId: sample.id, type: "Лабораторное", status: "Завершено", viscosity: 48, fluidLoss: 11, swelling: 24, conclusion: "Рекомендовано к применению", completedAt: today() };
  const offer = { id: "CO-TEST-MBZ", clientId: client.id, objectId: object.id, sampleId: sample.id, testId: test.id, number: "КП-TEST-001", version: 1, status: "Согласовано", amount: 3750000, tons: 75, validUntil: today() };
  const order = { id: "O-TEST-MBZ", clientId: client.id, objectId: object.id, sampleId: sample.id, testId: test.id, offerId: offer.id, number: "ЗК-TEST-001", status: "Новый", amount: 3750000, tons: 75, payment: "Счет не выставлен", delivery: "Не запланирована", shipDate: today() };
  const task = { id: "TASK-TEST-MBZ", clientId: client.id, objectId: object.id, contactId: contact.id, assignee: "Менеджер МБЗ", callDate: today(), nextStep: "Позвонить по первому заказу", status: "В работе" };
  state.data.clients.push(client);
  state.data.contacts.push(contact);
  state.data.objects.push(object);
  state.data.samples.push(sample);
  state.data.tests.push(test);
  state.data.offers.push(offer);
  state.data.orders.push(order);
  state.data.tasks.push(task);
  if (!new URLSearchParams(window.location.search).get("view")) state.view = "clients";
  state.selected = { type: "client", id: client.id };
  saveData();
  populateFilters();
}
