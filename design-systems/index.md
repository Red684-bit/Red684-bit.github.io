<!-- Design Hero Section -->
<div class="design-hero">
  <div class="container">
    <div class="row align-items-center">
      <div class="col-lg-8">
        <div class="design-hero-content animate-fade-in-up">
          <div class="design-hero-badge">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
            </svg>
            Дисциплина 2-го и 3-го курса
          </div>
          <h1 class="design-hero-title">
            Проектирование и дизайн<br>информационных систем
          </h1>
          <p class="design-hero-subtitle">
            Изучайте современные методы проектирования баз данных, разметки html, стилей css и скриптов JS! 
          </p>
        </div>
      </div>
      <div class="col-lg-4">
        <div class="gothic-text-section animate-slide-in-right">
          <div class="gothic-text" style="background-image: url('{{ site.baseurl }}/img/fabric.jpg'); background-size: cover; background-position: center; background-repeat: no-repeat;">
            <img src="{{ site.baseurl }}/img/imperor.png" alt="Император" class="gothic-imperor">
            My <span class="gothic-accent">Armor</span> is<br>
            <span class="gothic-emphasis">Django</span><br>
            My <span class="gothic-accent">Shield</span> is<br>
            <span class="gothic-emphasis">HTML</span><br>
            My <span class="gothic-accent">Sword</span> is<br>
            <span class="gothic-emphasis">CSS</span><br>
            In the <span class="gothic-accent">Site's</span><br>
            <span class="gothic-accent">name</span><br>
            Let None<br>
            Survive<br>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>

<!-- Labs Section -->
<div class="literature-section">
  <div class="container">
    <h2 class="design-section-title animate-fade-in-up">Лабораторные работы</h2>
    <div class="row g-4">
      <div class="col-lg-4 col-md-6">
        <div class="lab-card animate-slide-in-left" onclick="window.location.href='{{ site.baseurl }}/design-systems/labs/lab1';">
          <div class="lab-card-number">01</div>
          <div class="lab-card-icon">
            <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/>
              <polyline points="14,2 14,8 20,8"/>
              <line x1="16" y1="13" x2="8" y2="13"/>
              <line x1="16" y1="17" x2="8" y2="17"/>
              <polyline points="10,9 9,9 8,9"/>
            </svg>
          </div>
          <h3 class="lab-card-title">Описание предметной области</h3>
          <p class="lab-card-description">
            Анализ требований, создание технического задания и описание предметной области для информационной системы
          </p>
        </div>
      </div>
      <div class="col-lg-4 col-md-6">
        <div class="lab-card animate-fade-in-up" onclick="window.location.href='{{ site.baseurl }}/design-systems/labs/lab2';">
          <div class="lab-card-number">02</div>
          <div class="lab-card-icon">
            <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <rect x="3" y="3" width="18" height="18" rx="2" ry="2"/>
              <circle cx="8.5" cy="8.5" r="1.5"/>
              <polyline points="21,15 16,10 5,21"/>
              <path d="M9 9h6v6"/>
            </svg>
          </div>
          <h3 class="lab-card-title">Логическая модель БД</h3>
          <p class="lab-card-description">
            Создание ER-диаграммы, проектирование структуры базы данных и определение связей между сущностями
          </p>
        </div>
      </div>
      <div class="col-lg-4 col-md-6">
        <div class="lab-card animate-slide-in-right" onclick="window.location.href='{{ site.baseurl }}/design-systems/labs/lab3';">
          <div class="lab-card-number">03</div>
          <div class="lab-card-icon">
            <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <rect x="3" y="3" width="18" height="18" rx="2" ry="2"/>
              <path d="M9 9h6v6"/>
              <path d="M9 15h6"/>
              <path d="M9 12h6"/>
            </svg>
          </div>
          <h3 class="lab-card-title">Django ORM модели</h3>
          <p class="lab-card-description">
            Создание моделей базы данных в Django, реализация ORM и работа с миграциями
          </p>
        </div>
      </div>
    </div>
  </div>
</div>

<!-- Requirements Section - HIDDEN -->
<!-- 
<div class="requirements-section">
  <div class="container">
    <div class="row justify-content-center">
      <div class="col-lg-8">
        <div class="requirements-card animate-fade-in-up">
          <div class="requirements-icon">
            <svg width="50" height="50" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <path d="M9 12l2 2 4-4"/>
              <path d="M21 12c-1 0-3-1-3-3s2-3 3-3 3 1 3 3-2 3-3 3"/>
              <path d="M3 12c1 0 3-1 3-3s-2-3-3-3-3 1-3 3 2 3 3 3"/>
              <path d="M12 3c0 1-1 3-3 3s-3-2-3-3 1-3 3-3 3 2 3 3"/>
              <path d="M12 21c0-1 1-3 3-3s3 2 3 3-1 3-3 3-3-2-3-3"/>
            </svg>
          </div>
          <h3 class="requirements-title">Требования на допуск</h3>
          <p class="requirements-description">
            Для получения допуска к экзамену необходимо выполнить все лабораторные работы, 
            сдать курсовой проект и продемонстрировать понимание принципов проектирования информационных систем
          </p>
          <a href="{{ site.baseurl }}/design-systems/labs/min" class="requirements-btn">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/>
              <polyline points="14,2 14,8 20,8"/>
              <line x1="16" y1="13" x2="8" y2="13"/>
              <line x1="16" y1="17" x2="8" y2="17"/>
            </svg>
            Подробные требования
          </a>
        </div>
      </div>
    </div>
  </div>
</div>
-->

<!-- Literature Section -->
<div class="literature-section">
  <div class="container">
    <h2 class="design-section-title animate-fade-in-up">Рекомендуемая литература</h2>
    <div class="row g-4">
      <div class="col-lg-6 col-md-6">
        <a href="https://ilshatpro.wordpress.com/wp-content/uploads/2017/08/d0ba-d0b4d0b6-d0b4d0b5d0b9d182-d0b2d0b2d0b5d0b4d0b5d0bdd0b8d0b5-d0b2-d181d0b8d181d182d0b5d0bcd18b-d0b1d0b0d0b7-d0b4d0b0d0bdd0bdd18b.pdf">
          <div class="literature-card animate-slide-in-left">
            <div class="literature-icon">
              <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"/>
                <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"/>
              </svg>
            </div>
            <h3 class="literature-title">Основы проектирования БД</h3>
            <p class="literature-description">
              К. Дж. Дейт - "Введение в системы баз данных"<br>
              Классический учебник по теории и практике проектирования баз данных
            </p>
          </div>
        </a>
      </div>
      <div class="col-lg-6 col-md-6">
        <a href="https://docs.djangoproject.com/en/5.2/">
          <div class="literature-card animate-slide-in-right">
            <div class="literature-icon">
              <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
              </svg>
            </div>
            <h3 class="literature-title">Django Framework</h3>
            <p class="literature-description">
              Официальная документация Django<br>
              Практические руководства и туториалы по веб-разработке
            </p>
          </div>
        </a>
      </div>
      <div class="col-lg-4 col-md-6">
        <a href="https://developer.mozilla.org/ru/docs/Web/HTML">
          <div class="literature-card animate-fade-in-up">
            <div class="literature-icon">
              <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <polygon points="12,2 2,7 12,12 22,7 12,2"/>
                <polyline points="2,17 12,22 22,17"/>
                <polyline points="2,12 12,17 22,12"/>
              </svg>
            </div>
            <h3 class="literature-title">HTML Руководства</h3>
            <p class="literature-description">
              MDN Web Docs - HTML<br>
              Полное руководство по разметке HTML5 и семантике
            </p>
          </div>
        </a>
      </div>
      <div class="col-lg-4 col-md-6">
        <a href="https://developer.mozilla.org/ru/docs/Web/CSS">
          <div class="literature-card animate-fade-in-up">
            <div class="literature-icon">
              <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <rect x="3" y="3" width="18" height="18" rx="2" ry="2"/>
                <circle cx="8.5" cy="8.5" r="1.5"/>
                <polyline points="21,15 16,10 5,21"/>
              </svg>
            </div>
            <h3 class="literature-title">CSS Руководства</h3>
            <p class="literature-description">
              MDN Web Docs - CSS<br>
              Современные стили, Flexbox, Grid и анимации
            </p>
          </div>
        </a>
      </div>
      <div class="col-lg-4 col-md-6">
        <a href="https://developer.mozilla.org/ru/docs/Web/JavaScript">
          <div class="literature-card animate-fade-in-up">
            <div class="literature-icon">
              <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <polyline points="16,18 22,12 16,6"/>
                <polyline points="8,6 2,12 8,18"/>
              </svg>
            </div>
            <h3 class="literature-title">JavaScript Руководства</h3>
            <p class="literature-description">
              MDN Web Docs - JavaScript<br>
              ES6+, DOM, асинхронность и современные возможности
            </p>
          </div>
        </a>
      </div>
    </div>
  </div>
</div>

<!-- Include Design Systems CSS -->
<link rel="stylesheet" href="{{ site.baseurl }}/assets/css/design-systems.css">

<!-- Preload Gothic Font -->
<link rel="preload" href="{{ site.baseurl }}/assets/font/Gothic-Mother.ttf" as="font" type="font/ttf" crossorigin>


