# Vibe App Skeleton

Приложение-скелетон для быстрого создания HTML/JS веб-приложений с возможностью сборки в APK для Android.

Используйте этот проект как основу для своих идей — вся инфраструктура уже настроена, остаётся только писать код.

Минимальная поддерживаемая версия Android: **7.0** (API level 24).

## Возможности

- 🌐 **Веб-приложение** — современный стек с Next.js и React
- 📱 **APK для Android** — сборка нативного Android-приложения из веб-кода через Capacitor
- 🎨 **UI-компоненты** — готовая библиотека shadcn/ui с Tailwind CSS
- 🌓 **Автоматическая тема** — дневная/ночная тема переключается по системным настройкам устройства (в том числе в Android-приложении через Capacitor)
- ⚡ **Быстрый старт** — клонируй и начинай разработку сразу

## Технологии

| Технология | Назначение |
|---|---|
| [Next.js](https://nextjs.org) | React-фреймворк (App Router) |
| [React](https://react.dev) | UI-библиотека |
| [TypeScript](https://www.typescriptlang.org) | Типизация |
| [Tailwind CSS](https://tailwindcss.com) | Утилитарный CSS-фреймворк |
| [shadcn/ui](https://ui.shadcn.com) | Библиотека готовых UI-компонентов |
| [Lucide React](https://lucide.dev) | Иконки |
| [Capacitor](https://capacitorjs.com) | Обёртка веб-приложения в нативное Android-приложение |
| [Radix UI](https://www.radix-ui.com) | Безголовые (headless) примитивы для shadcn/ui |

## Команды

| Команда | Описание |
|---|---|
| `npm run dev` | Запуск сервера разработки (http://localhost:3000) |
| `npm run build` | Сборка production-бандла Next.js |
| `npm run start` | Запуск production-сервера |
| `npm run serve` | Сборка и запуск статической версии через `serve` |
| `npm run lint` | Проверка кода линтером (ESLint) |
| `npm run build-apk` | Сборка APK (debug) |
| `npm run start-apk` | Запуск приложения на подключённом Android-устройстве/эмуляторе |

### Сборка APK

```bash
npm run build-apk
```

Готовый APK-файл будет находиться в `android/app/build/outputs/apk/debug/`.

Для сборки APK требуются:
- Java JDK 21
- Android SDK (переменная окружения `ANDROID_HOME`)

### Запуск на устройстве

```bash
npm run start-apk
```

Соберёт проект и сразу запустит на подключённом Android-устройстве или эмуляторе.

## Структура проекта

```
├── app/            # Страницы и роутинг Next.js (App Router)
├── components/     # UI-компоненты (shadcn/ui)
├── lib/            # Утилиты и хелперы
├── public/         # Статические файлы
├── scripts/        # Bash-скрипты для сборки APK
├── android/        # Нативный Android-проект Capacitor
└── capacitor.config.ts  # Конфигурация Capacitor
```

## Быстрый старт

```bash
# Установка зависимостей
npm install

# Запуск в режиме разработки
npm run dev
```

Откройте [http://localhost:3000](http://localhost:3000) и начинайте редактировать `app/page.tsx` — изменения отображаются мгновенно.
