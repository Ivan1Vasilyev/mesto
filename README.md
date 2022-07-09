# Проект: Место

**Описание**

* В рамках проектной самостоятельной работы реализован одностраничный сайт. Здесь кроме адаптивности мы практикуем небольшой интерактивный функционал с пользователем. Пользователь может открыть диалоговое окно и ввести имя (можно полное) и род занятий. Результат отобразится на соответствующих полях профиля. Ограничения на количество вводимого текста нет, однако в случае, когда весь текст не помещается в поле, вёрстка искажена не будет за счёт сокрытия лишнего текста (выполнено с помощью css). При новом открытии диалогового окна пользователь увидит именно тот текст, который написан в профиле на текущий момент. Логика работы кнопок закрытия диалогового окна и "Сохранить" адекватна и интуитивно понятна для пользователя.
* Реализована возможность добавлять картинки в альбом. Кнопка "+" вызывает новый попап, где пользователь может ввести название места и URL-адрес картинки.
* Все поля в попапов обязательны для заполнения. Реализовано средствами браузера.
* К карточкам добавлена кнопка удаления карточки.
* Реализована визуальная имитация внесения и снятия "лайка" картинок.
* При клике на картинку карточки фотография будет отображена в специальном "попапе" в увеличенном (но не оригинальном) размере. Увеличенный размер фотографии не будет превышать 75% высоты или ширины экрана.
* Все всплывающие окна появляются и исчезают плавно в течение 0,7 секунды.

**Технологии**

* Адаптивность и отзывчивость страницы реализована средствами Flex-box, Grid-layout и запросами @media.
* Теперь при загрузке страницы 6 картинок добавляются в альбом с помощью javascript.
* Выстраивая логику работы всех интерактивных элементов, автор работы старался писать код легко читаемый и лаконичный. Каждая функция выполняет одну конкретную задачу, суть которой отображена в её названии. В именовании переменных также можно проследить понятные и удобочитаемые закономерности.
* Все события типа "click" добавлены к элементам страницы методом addEventListener. Слушатели событий элементов карточки прикрепляются в момент её создания с помощью замыкания.
* Карточки создаются из шаблона html.
* Страница защищена от XSS-атаки.

**ghPages**

- [Ссылка на проект](https://ivan1vasilyev.github.io/mesto/index.html)
