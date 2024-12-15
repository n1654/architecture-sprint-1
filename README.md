# Задание 1

## Уровень 1 

Webpack Module Federation
При выборе между Webpack Module Federation и Single SPA, отталкиваюсь от тезиса, упомянутого в курсе, что принципиальных различий между технологиями нет.
Далее приведу соображения за и против:

| | Webpack Module Federation | Singe SPA |
| --- | --- | --- |
| За | Есть какой-то опыт | |
| Против | - | Framework agnostic - кажется избыточным на данном эпапе развития "Mesto" |

## Уровень 2

Разделяю на 4 микрофронтенда:

 - host
 - auth
 - user
 - card


### host

Группирую общие компоненты layout:

```sh
/host-microfrontend
    /src
        /components
            App.js
            Header.js
            Footer.js
            Main.js
            ProtectedRoute.js
            index.css
            index.html
            index.js
        /images
    package.json
    webpack.config.js
```

### auth

Компоненты аутентификации:

```sh
/auth-microfrontend
    /src
        /components
            App.js
            InfoTooltip.js
            Login.js
            Register.js
            index.css
            index.html
            index.js
        /utils
            auth.js
        /images
    package.json
    webpack.config.js 
```

### user

Компоненты профиля (пользователя):

```sh
/user-microfrontend
    /src
        /components
            App.js
            EditAvatarPopup.js
            EditProfilePopup.js
            PopupWithForm.js
            index.css
            index.html
            index.js
        /utils
            api.js
        package.json
        webpack.config.js
```

### card

Компоненты карточек, в том числе лайки:

```sh
/card-microfrontend
    /src
        /components
            App.js
            AddPlacePopup.js
            Card.js
            ImagePopup.js
            PopupWithForm.js
            index.css
            index.html
            index.js
        /utils
            api.js
        /images
    package.json
    webpack.config.js
```

# Задание 2

Схема по ссылке, см. вкладку task_2:

https://github.com/n1654/architecture-sprint-1/blob/sprint_1/arch_task2.drawio