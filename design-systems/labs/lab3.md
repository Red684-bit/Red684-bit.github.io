<ol class="breadcrumb">
  <li class="breadcrumb-item"><a href="{{ site.baseurl }}/index">Главная</a></li>
  <li class="breadcrumb-item"><a href="{{ site.baseurl }}/design-systems/index">Проектирование и дизайн ИС</a></li>
  <li class="breadcrumb-item active">ЛР №3</li>
</ol>

## Лабораторная работа №3: Создание моделей базы данных django

### Цель работы

Овладеть навыками проектирования и реализации реляционной модели данных в рамках фреймворка Django. Освоить процесс создания классов моделей, организации связей между ними, генерации и применения миграций для создания соответствующих таблиц в базе данных, а также работы с данными через Django ORM и административную панель.

### Теоретическая часть
Модель в Django — это единственный и самый главный источник информации о ваших данных. Она содержит основные поля и поведение данных, которые вы храните. В Django таблицы данных представленны в виде классов моделей, а атрибуты класса являются столбцами таблицы.  

**Ключевые элементы модели Django:**
- Поля модели: Определяют тип данных, которые будут храниться. Каждое поле представлено соответствующим классом (например, CharField, IntegerField, DateTimeField). В поля методов можно передвать ограничения, например: 
    - **max_length** - ограничение по символам;
    - **unique** - ограничение уникальности;
    - **default** - значение по умолчанию;
    - **blank** - ограничение Null;
    - **null** - ограничение пустого значения

- Связи: Определяют отношения между моделями.

- ForeignKey: Связь «многие-к-одному». Например, много Статей принадлежат одному Автору.

- ManyToManyField: Связь «многие-ко-многим». Например, одна Статья может иметь много Тегов, и один Тег может быть у многих Статей.

- OneToOneField: Связь «один-к-одному». Например, расширенный Профиль пользователя, связанный с основной моделью User.

- Мета-класс: Используется для добавления метаданных к модели (например, ordering — порядок сортировки записей, verbose_name — читаемое имя модели).

Пример простой модели базы данных из 3-ёх сущностей:

___

{% tabs recog_track_1 %}

{% tab recog_track_1 Сущность Автор %}

``` python
class Author(models.Model):
    name = models.CharField(max_length=100) # Текстовое поле ввода
    email = models.EmailField(unique=True) # Поле ввода почты

    def __str__(self):
        return self.name
```
{% endtab %}

{% tab recog_track_1 Сущность Категория %}
```python
class Category(models.Model):
    name = models.CharField(max_length=100, unique=True)
    slug = models.SlugField(max_length=100, unique=True)

    class Meta:
        verbose_name = "Категория" # Название объекта класса в ед.ч.
        verbose_name_plural = "Категории" # Название объекта класса в мн.ч.

    def __str__(self):
        return self.name
```
{% endtab %}

{% tab recog_track_1 Сущность Статья %}
```python
class Article(models.Model):
    title = models.CharField(max_length=200)
    content = models.TextField()
    pub_date = models.DateTimeField(auto_now_add=True)
    is_published = models.BooleanField(default=False)

    author = models.ForeignKey(Author, on_delete=models.CASCADE, related_name='articles') # Связь внешним ключом с сущностью Автор
    categories = models.ManyToManyField(Category, related_name='articles') # Связь многие ко многим с сущностью Категория

    def __str__(self):
        return self.title
```
{% endtab %}

{% endtabs %}

___

После определения модель необходимо обязательно создать и применить миграции базы данных:

```python
python manage.py makemigrations
python manage.py migrate
```

Для добавления данных в модели через административную панель необходимо зарегестрировать модели:
```python
# \admin.py

from django.contrib import admin
from .models import Article, Category, Author

admin.site.register(Article)
admin.site.register(Category)
admin.site.register(Author)
```

### Практическая часть

Используя приведенный выше пример и документацию Django, спроектируйте и реализуйте модель данных для своего варианта. Пропиши ограничения для всех полей.