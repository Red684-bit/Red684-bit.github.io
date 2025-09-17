# Лабораторная работа №4: Разработка веб-приложений

## Цель работы
Изучить основы разработки веб-приложений на ASP.NET Core и создать простое веб-приложение.

## Теоретическая часть

### 1. ASP.NET Core
- **MVC паттерн** - Model-View-Controller
- **Razor Pages** - страницы с кодом и разметкой
- **Dependency Injection** - внедрение зависимостей
- **Middleware** - компоненты конвейера обработки запросов

### 2. Структура веб-приложения
```csharp
public class HomeController : Controller
{
    public IActionResult Index()
    {
        return View();
    }
    
    [HttpPost]
    public IActionResult Create(Book book)
    {
        if (ModelState.IsValid)
        {
            // Обработка данных
            return RedirectToAction("Index");
        }
        return View(book);
    }
}
```

## Практическая часть

### Задание
Создайте веб-приложение для управления библиотекой:
1. Создайте ASP.NET Core MVC приложение
2. Добавьте контроллеры для книг и читателей
3. Создайте представления для отображения данных
4. Добавьте формы для создания и редактирования записей

### Результат работы
Создайте работающее веб-приложение с полным функционалом управления библиотекой.

## Контрольные вопросы
1. Что такое MVC паттерн?
2. Как работает Dependency Injection в ASP.NET Core?
3. Что такое ViewBag и ViewData?
