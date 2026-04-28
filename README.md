# Promo Site

Портфолио-сайт с публичной частью, админкой и backend API.

Сейчас проект устроен так:
- один фронтенд на `Vue 3 + Vite`
- один вход `src/main.js`
- один `Vue Router`
- публичная часть на маршрутах `/`, `/works`, `/reviews`
- админка на маршрутах `/admin`, `/admin/skills`, `/admin/works`, `/admin/reviews`, `/admin/login`
- публичные `skills`, `works`, `reviews` читаются из backend API
- backend на `Node.js + Express + Prisma`
- база данных `PostgreSQL` через `docker compose`

## Структура

```text
.
├── frontend/          # весь frontend-проект на Vite
│   ├── src/
│   │   ├── admin/     # админка как часть общего src-дерева
│   │   ├── layouts/
│   │   ├── pages/
│   │   ├── public/
│   │   └── styles/
│   ├── index.html
│   ├── vite.config.js
│   └── package.json
├── backend/           # API, Prisma, загрузка файлов
├── docker-compose.yml
└── .env.example
```

## Что за что отвечает

- `frontend/src/router/index.js`:
  единый роутер приложения
- `frontend/src/layouts/PublicLayout.vue`:
  layout публичной части
- `frontend/src/admin/layouts/AdminLayout.vue`:
  layout админки
- `backend/src/app.js`:
  API и раздача собранного frontend
- `backend/prisma/schema.prisma`:
  схема базы данных

## Требования

- Node.js 20+ или 22+
- npm
- Docker и Docker Compose

## Переменные окружения

Скопируйте пример:

```bash
cp .env.example .env
```

Основные переменные:

- `PORT`:
  порт backend, по умолчанию `3000`
- `ADMIN_ORIGIN`:
  origin dev-сервера frontend, по умолчанию `http://localhost:5173`
- `DATABASE_URL`:
  строка подключения к PostgreSQL
- `VITE_API_URL`:
  адрес API для frontend, по умолчанию `http://localhost:3000/api`
- `VITE_API_ORIGIN`:
  origin backend для медиа-файлов, по умолчанию `http://localhost:3000`

## Установка

Важно:

- frontend теперь лежит в папке `frontend/`
- админка находится внутри `frontend/src/admin`
- отдельной папки `frontend/admin/` больше нет

### 1. Поднять PostgreSQL

```bash
docker compose up -d
```

### 2. Установить зависимости

Frontend:

```bash
cd frontend
npm install
```

Backend:

```bash
cd backend
npm install
```

### 3. Подготовить Prisma

```bash
cd backend
npx prisma generate
npx prisma migrate dev
npm run prisma:seed
```

## Запуск в development

Backend:

```bash
cd backend
npm run dev
```

Frontend:

```bash
cd frontend
npm run dev
```

Команду нужно выполнять из папки `frontend`:

```bash
cd frontend
npm run dev
```

После запуска:

- frontend dev: `http://localhost:5173`
- публичная часть: `http://localhost:5173/`
- админка: `http://localhost:5173/admin`
- API: `http://localhost:3000/api`
- healthcheck: `http://localhost:3000/api/health`
- PostgreSQL: `localhost:5433`

## Production build frontend

Собрать frontend:

```bash
cd frontend
npm run build
```

Результат сборки попадает в `frontend/dist/`.

Backend настроен так, чтобы раздавать этот build и обслуживать маршруты:

- `/`
- `/works`
- `/reviews`
- `/admin`
- `/admin/*`

## Запуск backend в production

```bash
cd backend
npm run start
```

Перед этим frontend должен быть собран командой `npm run build`.

## Доступ в админку

- email: `admin@example.com`
- password: `admin12345`

## Полезные команды

Frontend:

```bash
cd frontend
npm run dev
npm run build
npm run preview
```

Backend:

```bash
cd backend
npm run dev
npm run start
npm run prisma:generate
npm run prisma:migrate
npm run prisma:seed
```

Docker:

```bash
docker compose up -d
docker compose down
```

## Примечания

- Публичная часть визуально перенесена из legacy `src` с сохранением старых CSS-классов и структуры секций.
- Публичные блоки `skills`, `works`, `reviews` больше не используют локальные JSON-файлы, данные приходят из API.
- Админка физически лежит в `frontend/src/admin` и собирается как часть общего frontend-приложения.
- В корне проекта теперь две основные папки: `frontend/` и `backend/`.
