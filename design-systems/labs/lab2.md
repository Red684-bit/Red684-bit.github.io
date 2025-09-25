---
layout: default
title: Лабораторная работа №2
---

<!-- Construction Hero Section -->
<div class="construction-hero">
  <div class="container">
    <div class="construction-hero-content animate-fade-in-up">
      <div class="construction-hero-badge">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" style="margin-right: 8px;">
          <rect x="3" y="3" width="18" height="18" rx="2" ry="2"/>
          <circle cx="8.5" cy="8.5" r="1.5"/>
          <polyline points="21,15 16,10 5,21"/>
        </svg>
        Храм Знаний
      </div>
      <h1 class="construction-hero-title">
        Лабораторная работа №2
      </h1>
      <p class="construction-hero-subtitle">
        Строительство логической модели базы данных и архитектурных чертежей
      </p>
    </div>
  </div>
</div>

<!-- Foundation Section (Theory) -->
<div class="foundation-section">
  <div class="container">
    <h2 class="foundation-title animate-fade-in-up">Парфенон Мудрости</h2>
    <div class="row g-4">
      <div class="col-lg-6 col-md-6">
        <div class="foundation-card animate-slide-in-left">
          <div class="foundation-card-icon">
            <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <rect x="3" y="3" width="18" height="18" rx="2" ry="2"/>
              <path d="M9 9h6v6"/>
              <path d="M9 15h6"/>
            </svg>
          </div>
          <h3 class="foundation-card-title">Священные Символы</h3>
          <p class="foundation-card-description">
            Основные элементы нотации "Сущность-Связь" для возведения храма данных
          </p>
          <ul class="foundation-card-list">
            <li>Стержневая сущность - прямоугольник. Представляет собой объект реального мира (например, Книга, Читатель).</li>
            <li>Атрибут - овал. Характеристика сущности (например, Название_книги, Дата_рождения_читателя).</li>
            <li>Ключевой атрибут - подчеркивается. Однозначно идентифицирует экземпляр сущности (например, ID_книги).</li>
            <li>Ассоциация - ромб. Отображает взаимодействие между двумя стержневыми сущностями (например, Выдана).</li>
          </ul>
        </div>
      </div>
      <div class="col-lg-6 col-md-6">
        <div class="foundation-card animate-slide-in-right">
          <div class="foundation-card-icon">
            <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"/>
              <rect x="8" y="2" width="8" height="4" rx="1" ry="1"/>
              <path d="M12 11h4"/>
              <path d="M12 16h4"/>
              <path d="M8 11h.01"/>
              <path d="M8 16h.01"/>
            </svg>
          </div>
          <h3 class="foundation-card-title">Архитектурные Связи</h3>
          <p class="foundation-card-description">
            Различные типы связей между колоннами в храме данных
          </p>
          <ul class="foundation-card-list">
            <li>Один-к-одному (1:1) - Экземпляр сущности A связан не более чем с одним экземпляром сущности B.</li>
            <li>Один-ко-многим (1:M) - Экземпляр сущности A связан с несколькими экземплярами сущности B.</li>
            <li>Многие-ко-многим (M:N) - Каждый экземпляр сущности A связан с несколькими экземплярами B, и наоборот.</li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</div>

<!-- Blueprint Section (ER Diagram) -->
<div class="blueprint-section">
  <div class="container">
    <div class="row justify-content-center">
      <div class="col-lg-10">
        <div class="blueprint-content animate-fade-in-up">
          <h3 class="blueprint-title">Священные Свитки</h3>
          <p class="blueprint-description">
            Изучите пример логической модели базы данных и её преобразование в реляционную схему
          </p>
          <div class="row">
            <div class="col-md-5">
              <img src="{{ site.baseurl }}/img/Лог_модель.png" alt="Логическая модель" class="blueprint-image">
            </div>
            <div class="col-md-2"></div>
            <div class="col-md-5">
              <img src="{{ site.baseurl }}/img/Рел_схема1.png" alt="Реляционная схема" class="blueprint-image">
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>

<!-- Construction Section (Practice) -->
<div class="construction-section">
  <div class="container">
    <h2 class="construction-title animate-fade-in-up">Возведение Храма</h2>
    <div class="row g-4">
      <div class="col-lg-6 col-md-6">
        <div class="construction-card animate-slide-in-left">
          <div class="construction-card-icon">
            <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <circle cx="12" cy="12" r="10"/>
              <path d="M8 12l2 2 4-4"/>
            </svg>
          </div>
          <h3 class="construction-card-title">Закладка Фундамента</h3>
          <p class="construction-card-description">
            Создайте логическую модель базы данных для выбранной темы ИС
          </p>
          <ul class="construction-card-list">
            <li>Выделите основные сущности</li>
            <li>Определите атрибуты для каждой сущности</li>
            <li>Выделите первичные ключи</li>
            <li>Определите связи между сущностями</li>
          </ul>
        </div>
      </div>
      <div class="col-lg-6 col-md-6">
        <div class="construction-card animate-slide-in-right">
          <div class="construction-card-icon">
            <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <rect x="3" y="3" width="18" height="18" rx="2" ry="2"/>
              <path d="M9 9h6v6"/>
              <path d="M9 15h6"/>
            </svg>
          </div>
          <h3 class="construction-card-title">Возведение Колонн</h3>
          <p class="construction-card-description">
            Преобразуйте ER-модель в реляционную схему базы данных
          </p>
          <ul class="construction-card-list">
            <li>Преобразование сущностей в таблицы</li>
            <li>Преобразование атрибутов в столбцы</li>
            <li>Определение первичных ключей</li>
            <li>Создание внешних ключей</li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</div>

<!-- Specifications Section (Reference Table) -->
<div class="specifications-section">
  <div class="container">
    <div class="row justify-content-center">
      <div class="col-lg-10">
        <div class="specifications-content animate-fade-in-up">
          <h3 class="specifications-title">Священные Законы</h3>
          <div class="specifications-card">
            <div class="table-responsive">
              <table class="specifications-table">
                <thead>
                  <tr>
                    <th>ER модель</th>
                    <th>Реляционная схема</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td><strong>Сущность</strong></td>
                    <td>Таблица</td>
                  </tr>
                  <tr>
                    <td><strong>Атрибут</strong></td>
                    <td>Столбец таблицы</td>
                  </tr>
                  <tr>
                    <td><strong>Ключевой атрибут</strong></td>
                    <td>Первичный ключ (PK)</td>
                  </tr>
                  <tr>
                    <td><strong>Связь 1:M</strong></td>
                    <td>Внешний ключ (FK) в таблице на стороне "M"</td>
                  </tr>
                  <tr>
                    <td><strong>Связь M:N</strong></td>
                    <td>Создание таблицы-связки содержащей PK, и два FK ссылающихся на исходные таблицы</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>

<!-- Navigation -->
<div class="construction-navigation">
  <div class="container">
    <div class="text-center">
      <a href="{{ site.baseurl }}/design-systems/labs/lab1" class="nav-btn nav-btn-prev">
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
          <line x1="19" y1="12" x2="5" y2="12"/>
          <polyline points="12,19 5,12 12,5"/>
        </svg>
        ЛР №1
      </a>
      <a href="{{ site.baseurl }}/design-systems/labs/lab3" class="nav-btn nav-btn-next">
        ЛР №3
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
          <line x1="5" y1="12" x2="19" y2="12"/>
          <polyline points="12,5 19,12 12,19"/>
        </svg>
      </a>
    </div>
  </div>
</div>

<!-- Include Construction Style CSS -->
<link rel="stylesheet" href="{{ site.baseurl }}/assets/css/lab2.css">