import fs from "node:fs/promises";
import path from "node:path";
import { SpreadsheetFile, Workbook } from "@oai/artifact-tool";

const root = path.resolve("..");
const csvDir = path.join(root, "csv");
const xlsxDir = path.join(root, "xlsx");
await fs.mkdir(csvDir, { recursive: true });
await fs.mkdir(xlsxDir, { recursive: true });

const navy = "#13233A";
const gold = "#D6A43A";
const paleGold = "#FFF4D8";
const paleBlue = "#EAF0F7";
const line = "#D6DEE8";

const sheets = [
  {
    name: "01_Клиенты_ГНБ",
    table: "ClientsHDD",
    columns: [
      "client_id", "company_name", "legal_name", "inn", "kpp", "ogrn", "client_type", "region", "city",
      "works_region", "status", "stage", "rigs", "typical_objects", "avg_diameter_mm", "avg_length_m",
      "soil_types", "seasonality", "monthly_potential_tons", "current_supplier", "product_interest",
      "forecast_revenue_rub", "forecast_tons", "next_step", "next_contact_date", "risk_flag", "notes"
    ],
    examples: [
      ["C-YFO-001", "ЮгГНБ Строй", "ООО ЮгГНБ Строй", "2308123456", "230801001", "1232300000001", "Подрядчик ГНБ", "ЮФО", "Краснодар", "Краснодарский край, Адыгея", "В работе", "Образец", "Vermeer D80x100, XCMG XZ680", "дороги, связь, водоканал", 315, 280, "глина, песок", "март-ноябрь", 75, "локальный дилер", "MBZ HDD Standard", 3200000, 70, "Получить обратную связь по образцу", new Date("2026-06-12"), "Нет", "Пример строки"],
      ["C-YFO-002", "РостовБурСервис", "ООО РостовБурСервис", "6164123450", "616401001", "1236100000002", "Подрядчик ГНБ", "ЮФО", "Ростов-на-Дону", "Ростовская область", "Переговоры", "КП", "Ditch Witch JT100", "газовые сети, промышленные переходы", 426, 420, "суглинок, песок", "апрель-октябрь", 95, "импортный бентонит", "BentoHDD Premium", 4600000, 96, "Согласовать КП с главным инженером", new Date("2026-06-13"), "Да", "Пример строки"]
    ]
  },
  {
    name: "02_ЛПР",
    table: "DecisionMakers",
    columns: ["contact_id", "client_id", "full_name", "position", "decision_role", "influence_level", "phone", "email", "whatsapp", "preferred_channel", "timezone", "is_key_person", "notes"],
    examples: [
      ["P-YFO-001", "C-YFO-001", "Иван Петров", "Главный инженер", "Технический ЛПР", "Критическое", "+7 918 100-10-10", "petrov@example.ru", "+7 918 100-10-10", "WhatsApp", "Europe/Moscow", "Да", "Принимает решение после испытаний"],
      ["P-YFO-002", "C-YFO-001", "Олег Смирнов", "Коммерческий директор", "Бюджет и условия", "Высокое", "+7 918 200-20-20", "smirnov@example.ru", "+7 918 200-20-20", "Телефон", "Europe/Moscow", "Да", "Согласует цену"]
    ]
  },
  {
    name: "03_Объекты_ГНБ",
    table: "HDDObjects",
    columns: ["object_id", "client_id", "object_name", "region", "city_or_location", "customer", "general_contractor", "object_stage", "transition_type", "planned_work_date", "length_m", "diameter_mm", "depth_m", "soil", "complexity", "drilling_risks", "recommended_product", "package_type", "required_tons", "order_probability_percent", "next_contact_date", "forecast_revenue_rub", "technologist_comment"],
    examples: [
      ["G-YFO-001", "C-YFO-001", "Переход под трассой М-4 Дон", "ЮФО", "Краснодарский край", "дорожный заказчик", "ЮгГНБ Строй", "Образец", "Дорога", new Date("2026-07-05"), 340, 315, 8, "глина, песок", "Средняя", "потеря раствора", "MBZ HDD Standard", "мешок 25 кг", 42, 45, new Date("2026-06-12"), 1890000, "Проверить вязкость"],
      ["G-YFO-002", "C-YFO-002", "Газопровод Ростов западный обход", "ЮФО", "Ростовская область", "газораспределительная организация", "РостовБурСервис", "КП", "Газопровод", new Date("2026-07-18"), 520, 426, 12, "суглинок, песок", "Высокая", "обрушение стенки", "BentoHDD Premium", "мешок 25 кг", 96, 62, new Date("2026-06-13"), 4600000, "Нужна устойчивость стенки"]
    ]
  },
  {
    name: "04_Образцы",
    table: "Samples",
    columns: ["sample_id", "client_id", "object_id", "product", "batch_number", "quantity_kg", "purpose", "status", "sent_date", "received_date", "carrier", "tracking_number", "recipient_name", "responsible_manager", "feedback_days", "next_step", "linked_test_id", "linked_offer_id", "linked_order_id", "notes"],
    examples: [
      ["S-YFO-001", "C-YFO-001", "G-YFO-001", "MBZ HDD Standard", "STD-06-10", 25, "Полевое тестирование", "Отправлен", new Date("2026-06-10"), null, "СДЭК", "SD-100200", "Иван Петров", "Анна Сергеева", 0, "Подтвердить получение", "", "", "", ""],
      ["S-YFO-002", "C-YFO-002", "G-YFO-002", "BentoHDD Premium", "BP-06-11", 30, "Сравнение с текущим поставщиком", "Получен клиентом", new Date("2026-06-11"), new Date("2026-06-13"), "ПЭК", "PEK-300400", "Алексей Иванов", "Игорь Колесников", 2, "Получить обратную связь", "T-YFO-001", "", "", ""]
    ]
  },
  {
    name: "05_Заказы",
    table: "Orders",
    columns: ["order_id", "client_id", "object_id", "sample_id", "test_id", "offer_id", "order_number", "order_status", "product", "package_type", "quantity_tons", "unit_price_rub", "total_amount_rub", "payment_status", "delivery_status", "planned_ship_date", "actual_ship_date", "warehouse", "carrier", "notes"],
    examples: [
      ["O-YFO-001", "C-YFO-002", "G-YFO-002", "S-YFO-002", "T-YFO-001", "CO-YFO-001", "ЗК-YFO-001", "Согласование", "BentoHDD Premium", "мешок 25 кг", 96, 47917, 4600000, "Счет не выставлен", "Резерв склада", new Date("2026-07-10"), null, "Склад МБЗ", "ТК по согласованию", "Пример заказа из цепочки"]
    ]
  }
];

function csvValue(value) {
  if (value instanceof Date) return value.toISOString().slice(0, 10);
  if (value === null || value === undefined) return "";
  const text = String(value);
  return /[",\n]/.test(text) ? `"${text.replaceAll('"', '""')}"` : text;
}

async function writeCsv(fileName, columns, rows) {
  const lines = [columns.join(","), ...rows.map((row) => row.map(csvValue).join(","))];
  await fs.writeFile(path.join(csvDir, fileName), `${lines.join("\n")}\n`, "utf8");
}

const yfoColumns = [
  "row_number", "client_id", "company_name", "legal_name", "inn", "kpp", "ogrn", "client_type", "region", "city",
  "works_region", "status", "stage", "rigs", "typical_objects", "avg_diameter_mm", "avg_length_m", "soil_types",
  "seasonality", "monthly_potential_tons", "current_supplier", "product_interest", "forecast_revenue_rub",
  "forecast_tons", "next_step", "next_contact_date", "risk_flag", "source", "notes"
];
const yfoRows = Array.from({ length: 100 }, (_, i) => {
  const n = String(i + 1).padStart(3, "0");
  return [i + 1, `C-YFO-${n}`, "", "", "", "", "", "Подрядчик ГНБ", "ЮФО", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", ""];
});
await writeCsv("06_yfo_first_100_companies_structure.csv", yfoColumns, yfoRows);

const workbook = Workbook.create();

function styleSheet(sheet, totalRows, totalCols) {
  sheet.showGridLines = false;
  sheet.freezePanes.freezeRows(1);
  const used = sheet.getRangeByIndexes(0, 0, totalRows, totalCols);
  used.format.borders = { preset: "all", style: "thin", color: line };
  used.format.wrapText = true;
  sheet.getRangeByIndexes(0, 0, 1, totalCols).format = {
    fill: navy,
    font: { bold: true, color: "#FFFFFF" },
  };
  sheet.getRangeByIndexes(1, 0, Math.max(1, totalRows - 1), totalCols).format = {
    fill: "#FFFFFF",
    font: { color: "#172033" },
  };
  for (let col = 0; col < totalCols; col += 1) {
    sheet.getRangeByIndexes(0, col, totalRows, 1).format.columnWidthPx = 150;
  }
}

for (const spec of sheets) {
  const sheet = workbook.worksheets.add(spec.name);
  const rows = [spec.columns, ...spec.examples, ...Array.from({ length: 20 }, () => Array(spec.columns.length).fill(""))];
  sheet.getRangeByIndexes(0, 0, rows.length, spec.columns.length).values = rows;
  styleSheet(sheet, rows.length, spec.columns.length);
  sheet.tables.add(`A1:${columnName(spec.columns.length)}${rows.length}`, true, spec.table);
}

const yfo = workbook.worksheets.add("06_Первые_100_ЮФО");
yfo.getRangeByIndexes(0, 0, yfoRows.length + 1, yfoColumns.length).values = [yfoColumns, ...yfoRows];
styleSheet(yfo, yfoRows.length + 1, yfoColumns.length);
yfo.tables.add(`A1:${columnName(yfoColumns.length)}101`, true, "YFOFirst100");

const dict = workbook.worksheets.add("Справочники");
const dictionaries = [
  ["client_type", "Подрядчик ГНБ", "Дилер", "Генподрядчик", "Проектная организация", "Постоянный клиент", "Потенциальный клиент"],
  ["stage", "Новый", "Образец", "Испытание", "КП", "Заказ", "Пауза"],
  ["risk_flag", "Да", "Нет"],
  ["sample_status", "Заявлен", "Подготовлен", "Отправлен", "Получен клиентом", "На испытании", "Обратная связь получена", "Привел к КП", "Привел к заказу", "Закрыт без результата"],
  ["complexity", "Низкая", "Средняя", "Высокая", "Критическая"]
];
const maxDictRows = Math.max(...dictionaries.map((row) => row.length));
const dictMatrix = Array.from({ length: maxDictRows }, (_, row) => dictionaries.map((col) => col[row] || ""));
dict.getRangeByIndexes(0, 0, dictMatrix.length, dictionaries.length).values = dictMatrix;
styleSheet(dict, dictMatrix.length, dictionaries.length);

const guide = workbook.worksheets.add("Инструкция");
const guideRows = [
  ["Раздел", "Инструкция"],
  ["Общий порядок", "Заполняйте листы слева направо: клиенты -> ЛПР -> объекты -> образцы -> заказы."],
  ["ID клиента", "client_id должен быть стабильным и уникальным. Для ЮФО используйте формат C-YFO-001 ... C-YFO-100."],
  ["Связи", "client_id связывает все сущности с клиентом. object_id связывает объект, образец и заказ."],
  ["Первые 100 ЮФО", "Лист 06_Первые_100_ЮФО подготовлен как структура загрузки первых 100 компаний ГНБ ЮФО."],
  ["Обязательные поля клиентов", "client_id, company_name, inn, client_type, region, city, stage, monthly_potential_tons, next_contact_date."],
  ["Обязательные поля ЛПР", "contact_id, client_id, full_name, position, decision_role, phone или email."],
  ["Обязательные поля объектов", "object_id, client_id, object_name, region, transition_type, required_tons, order_probability_percent, next_contact_date."],
  ["Обязательные поля образцов", "sample_id, client_id, object_id, product, quantity_kg, status, sent_date, recipient_name."],
  ["Обязательные поля заказов", "order_id, client_id, object_id, order_number, product, quantity_tons, total_amount_rub, order_status."],
  ["Проверка перед загрузкой", "Проверьте дубли ИНН, пустые ID, несовпадения client_id/object_id и даты в формате YYYY-MM-DD."]
];
guide.getRangeByIndexes(0, 0, guideRows.length, 2).values = guideRows;
styleSheet(guide, guideRows.length, 2);
guide.getRange("B1:B11").format.columnWidthPx = 760;

function columnName(count) {
  let name = "";
  let n = count;
  while (n > 0) {
    const rem = (n - 1) % 26;
    name = String.fromCharCode(65 + rem) + name;
    n = Math.floor((n - 1) / 26);
  }
  return name;
}

const preview = await workbook.render({ sheetName: "Инструкция", autoCrop: "all", scale: 1, format: "png" });
await fs.writeFile(path.join(xlsxDir, "import_templates_preview.png"), new Uint8Array(await preview.arrayBuffer()));

const output = await SpreadsheetFile.exportXlsx(workbook);
await output.save(path.join(xlsxDir, "mbz_hdd_import_templates.xlsx"));

console.log(path.join(xlsxDir, "mbz_hdd_import_templates.xlsx"));
