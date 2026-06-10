# Публикация CRM МБЗ в интернете

CRM МБЗ подготовлена как статический сайт. Для публикации не нужен backend, база данных, API или сборщик.

## Что публиковать

Публикуется корень проекта:

```text
.
├── index.html
├── app/
├── netlify.toml
├── vercel.json
└── .nojekyll
```

Корневой `index.html` автоматически открывает приложение из папки `app/`.

## Проверка перед публикацией

Из корня проекта запустите локальный web-сервер:

```bash
python -m http.server 4173
```

Откройте:

```text
http://localhost:4173/
```

Проверьте:

- открывается панель генерального директора;
- логотип МБЗ загружается;
- меню переключает разделы;
- поиск и фильтры работают;
- на телефоне меню становится горизонтальным и прокручиваемым;
- таблицы на телефоне прокручиваются по горизонтали внутри блока.

## GitHub Pages

1. Создайте репозиторий на GitHub.
2. Загрузите в репозиторий весь проект.
3. Откройте `Settings` -> `Pages`.
4. В `Build and deployment` выберите:
   - Source: `Deploy from a branch`;
   - Branch: `main`;
   - Folder: `/root`.
5. Сохраните настройки.
6. GitHub Pages выдаст ссылку вида:

```text
https://<account>.github.io/<repository>/
```

Файл `.nojekyll` уже добавлен, чтобы GitHub Pages отдавал статические файлы без обработки Jekyll.

## Netlify

1. Откройте Netlify.
2. Выберите `Add new site` -> `Import an existing project`.
3. Подключите репозиторий.
4. Настройки:
   - Build command: оставить пустым;
   - Publish directory: `.`;
5. Опубликуйте сайт.

Файл `netlify.toml` уже указывает папку публикации `.`.

## Vercel

1. Откройте Vercel.
2. Выберите `Add New` -> `Project`.
3. Импортируйте репозиторий.
4. Настройки:
   - Framework Preset: `Other`;
   - Build Command: оставить пустым;
   - Output Directory: оставить пустым или `.`.
5. Опубликуйте сайт.

Файл `vercel.json` уже добавлен для статической публикации и базовых security headers.

## Как открыть конкретный экран

Приложение поддерживает параметр `view`:

```text
https://your-domain.example/app/?view=ceo
https://your-domain.example/app/?view=firstOrders
https://your-domain.example/app/?view=clients
https://your-domain.example/app/?view=objects
https://your-domain.example/app/?view=samples
```

## Важные ограничения

Текущая версия хранит данные в браузере через `localStorage`. Это нормально для демонстрации и предпросмотра CRM по ссылке, но не является промышленным хранением данных.

Для боевого режима позже потребуется отдельный этап с backend, авторизацией и базой данных.

