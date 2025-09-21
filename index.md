<!-- Hero Section -->
<div class="hero-section">
  <div class="container-fluid">
    <div class="row align-items-center min-vh-50">
      <div class="col-lg-6">
        <div class="hero-content">
          <h1 class="hero-title animate-fade-in">
            Добро пожаловать в мир<br><span class="text-gradient">Веб-разработки</span>
          </h1>
          <p class="hero-subtitle animate-fade-in-delay">
            Или коротко о том как, зачем и сколько я делал этот сайт
          </p>
        </div>
      </div>
      <div class="col-lg-6">
        <div class="hero-image-container animate-slide-in">
          <div class="floating-card">
            <img src="{{ site.baseurl }}/img/Student.png"
                 alt="Картина: Мыслитель студент" 
                 class="hero-image" />
            <div class="image-overlay">
              <div class="overlay-text">Студенты, «Искусство посещения»</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>

<!-- Progress Section -->
<div class="progress-section">
  <div class="container">
    <div class="row justify-content-center">
      <div class="col-lg-8">
        <div class="progress-card">
          <div class="progress-header">
            <h3 class="progress-title">Прогресс семестра</h3>
          </div>
          <div class="progress-container">
            <div class="progress progress-custom">
              <div class="progress-bar progress-bar-custom" id="progressbar" role="progressbar" 
                   style="width: 0%;" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100">
                <span class="progress-text" id="progress-text">0%</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>

<!-- Courses Section -->
<div class="courses-section">
  <div class="container">
    <div class="row justify-content-center">
      <div class="col-lg-10">
        <h2 class="section-title text-center mb-5">Дисциплины</h2>
        <div class="row g-4">
          <div class="col-md-6">
            <div class="course-card" onclick="window.location.href='{{ site.baseurl }}/design-systems/';">
              <div class="course-icon">
                <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                  <rect x="3" y="3" width="18" height="18" rx="2" ry="2"/>
                  <circle cx="8.5" cy="8.5" r="1.5"/>
                  <polyline points="21,15 16,10 5,21"/>
                </svg>
              </div>
              <h3 class="course-title">Проектирование и дизайн информационных систем</h3>
              <p class="course-description">
                Изучайте современные методы проектирования, создавайте красивые интерфейсы и архитектуру систем
              </p>
              <div class="course-arrow">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                  <line x1="5" y1="12" x2="19" y2="12"/>
                  <polyline points="12,5 19,12 12,19"/>
                </svg>
              </div>
            </div>
          </div>
          <div class="col-md-6">
            <div class="course-card" onclick="window.location.href='{{ site.baseurl }}/development-systems/';">
              <div class="course-icon">
                <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                  <polyline points="16,18 22,12 16,6"/>
                  <polyline points="8,6 2,12 8,18"/>
                </svg>
              </div>
              <h3 class="course-title">Разработка кода информационных систем</h3>
              <p class="course-description">
                Погрузитесь в мир программирования, изучайте алгоритмы и создавайте функциональные приложения
              </p>
              <div class="course-arrow">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                  <line x1="5" y1="12" x2="19" y2="12"/>
                  <polyline points="12,5 19,12 12,19"/>
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>


<script src="{{ site.baseurl }}/assets/js/homepage.js"></script>


