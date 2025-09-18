<ol class="breadcrumb">
  <li class="breadcrumb-item"><a href="{{ site.baseurl }}/index">Главная</a></li>
  <li class="breadcrumb-item"><a href="{{ site.baseurl }}/design-systems/index">Проектирование и дизайн ИС</a></li>
  <li class="breadcrumb-item active">ЛР №2</li>
</ol>

## Лабораторная работа №2: Проектирование логической модели базы данных

### Цель работы
Изучить основные понятия и этапы проектирования реляционной базы данных. Освоить методологию построения логической модели данных "Сущность-Связь" (ER-модель) и научиться преобразовывать ее в реляционную схему.

### Теоретическая часть

#### ***Нотация "Сущность-Связь" (ER-нотация)***

**Стержневая сущность** - прямоугольник. Представляет собой объект реального мира (например, Книга, Читатель).

    - Атрибут - овал. Характеристика сущности (например, Название_книги, Дата_рождения_читателя).

    - Ключевой атрибут - подчеркивается. Однозначно идентифицирует экземпляр сущности (например, ID_книги).

**Ассоциация** - ромб. Отображает взаимодействие между двумя стержневыми сущностями (например, Выдана).

#### Типы связей

- ***Один-к-одному (1:1)*** - Экземпляр сущности A связан не более чем с одним экземпляром сущности B.

- ***Один-ко-многим (1:M)*** - Экземпляр сущности A связан с несколькими экземплярами сущности B.

- ***Многие-ко-многим (M:N)*** - Каждый экземпляр сущности A связан с несколькими экземплярами B, и наоборот.

#### Пример логической модели:
<div class="card border-primary mb-2" style="max-width: 40rem;">
  <div class="card-body">
    <img src="{{ site.baseurl }}/img/Лог_модель.png"
        alt="FCN" focusable="false" width="100%"
        class="d-block user-select-none" />
  </div>
</div>

### Практическая часть

Спроектируйте логическую модель базы данных выбранной темы ИС:
- Выделите основные сущности, определите атрибуты для каждой сущности, выделите первичные ключи. Определите связи между сущностями и их тип
- Преобразуйте модель в реляционную схему

### Памятка 

<div class="table-responsive">
<table class="table table-hover border-primary table-bordered ">
  <thead>
    <tr class="table-dark">
      <th scope="col">ER модель</th>
      <th scope="col">Реляционная схема</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">Сущность</th>
      <td>Таблица</td>
    </tr>
    <tr>
      <th scope="row">Атрибут</th>
      <td>Столбец таблицы</td>
    </tr>
    <tr>
      <th scope="row">Ключевой атрибут</th>
      <td>Первичный ключ (PK)</td>
    </tr>
    <tr>
      <th scope="row">Связь 1:M</th>
      <td>Внешний ключ (FK) в таблице на стороне "M"</td>
    </tr>
    <tr>
      <th scope="row">Связь M:N</th>
      <td>Создание таблицы-связки содержащей PK, и два FK ссылающихся на исходные таблицы</td>
    </tr>
   </tbody>
</table>
</div>

<div class="row">
  <div class="col-lg-12">
    <ul class="list-unstyled">
      <li  class="float-end">
       <button type="button" class="btn btn-primary" onclick="window.location.href='{{ site.baseurl }}/design-systems/labs/lab3';">ЛР №3 →</button>
     </li>
      <li>
        <button type="button" class="btn btn-primary" onclick="window.location.href='{{ site.baseurl }}/design-systems/labs/lab1';">← ЛР №1</button>
      </li>
    </ul>
  </div>
</div>