describe('Проверка авторизации', function () {

    it('Верный пароль и верный логин', function () {
         cy.visit('https://login.qa.studio'); // зашли на сайт
         cy.get('#mail').type('german@dolnikov.ru'); // ввели верный логин
         cy.get('#pass').type('iLoveqastudio1'); //ввели верный пароль
         cy.get('#loginButton').click(); // нажал войти
         cy.get('#messageHeader').contains('Авторизация прошла успешно');// проверяю что после авторизации вижу текст
         cy.get('#messageHeader').should('be.visible'); //проверяю что текст виден
         cy.get('#exitMessageButton > .exitIcon').should('be.visible'); // проверяю наличие крестика
        }) 

    it('Восстановление пароля', function () {
        cy.visit('https://login.qa.studio'); // зашли на сайт
        cy.get('#forgotEmailButton').click(); // нажимаю восстановить пароль
        cy.get('#mailForgot').type('german@dolnikov.ru'); // ввожу почту для восстановления
        cy.get('#restoreEmailButton').click(); // нажимаю кнопку отправить код
        cy.get('#messageHeader').contains('Успешно отправили пароль на e-mail'); // проверяю на совпадение текст
        cy.get('#messageHeader').should('be.visible'); //проверяю что текст виден
        cy.get('#exitMessageButton > .exitIcon').should('be.visible'); // проверяю наличие крестика
        })
        
    it('Верный логин и неверный пароль', function () {
        cy.visit('https://login.qa.studio'); // зашли на сайт
        cy.get('#mail').type('german@dolnikov.ru'); // ввели верный логин
        cy.get('#pass').type('iLoveqastudio2'); //ввели неверный пароль
        cy.get('#loginButton').click(); // нажал войти
        cy.get('#messageHeader').contains('Такого логина или пароля нет'); // проверяю на совпадение текст
        cy.get('#messageHeader').should('be.visible'); //проверяю что текст виден
        cy.get('#exitMessageButton > .exitIcon').should('be.visible'); // проверяю наличие крестика
        })  

    it('Неверный логин и верный пароль', function () {
        cy.visit('https://login.qa.studio'); // зашли на сайт
        cy.get('#mail').type('german@dolnikow.ru'); // ввели неверный логин
        cy.get('#pass').type('iLoveqastudio1'); //ввели верный пароль
        cy.get('#loginButton').click(); // нажал войти
        cy.get('#messageHeader').contains('Такого логина или пароля нет'); // проверяю на совпадение текст
        cy.get('#messageHeader').should('be.visible'); //проверяю что текст виден
        cy.get('#exitMessageButton > .exitIcon').should('be.visible'); // проверяю наличие крестика
        })  

    it('Проверка валидации', function () {
        cy.visit('https://login.qa.studio'); // зашли на сайт
        cy.get('#mail').type('germandolnikov.ru'); // ввели логин без @
        cy.get('#pass').type('iLoveqastudio1'); //ввели верный пароль
        cy.get('#loginButton').click(); // нажал войти
        cy.get('#messageHeader').contains('Нужно исправить проблему валидации'); // проверяю на совпадение текст
        cy.get('#messageHeader').should('be.visible'); //проверяю что текст виден
        })

    it('Проверка на приведение к строчным буквам в логине', function () {
        cy.visit('https://login.qa.studio'); // зашли на сайт
        cy.get('#mail').type('GerMan@Dolnikov.ru'); // ввели логин с заглавными и сторочными буквами
        cy.get('#pass').type('iLoveqastudio1'); //ввели верный пароль
        cy.get('#loginButton').click(); // нажал войти
        cy.get('#messageHeader').contains('Авторизация прошла успешно');// проверяю что после авторизации вижу текст
        cy.get('#messageHeader').should('be.visible'); //проверяю что текст виден
        cy.get('#exitMessageButton > .exitIcon').should('be.visible'); // проверяю наличие крестика
        })

    })
    