'use strict';
//Задание 1
let lang = document.getElementsByTagName('html')[0].getAttribute('lang');
let weekDays = {'en':['Sunday', 'Monday', 'Tuesday', 'Wednesday', 
                'Thursday', 'Friday', 'Saturday'], 
                'ru': ['Понедельник', 'Вторник', 'Среда', 'Четверг', 
                'Пятница', 'Суббота', 'Воскресенье']};
let li = document.getElementsByTagName('li');

//Способ a
if (lang === 'en') {
    for (let i = 0; i < 7; i++) {
        li[i].innerHTML = weekDays.en[i];
    }
}
else if (lang === 'ru') {
    for (let i = 0; i < 7; i++) {
        li[i].innerHTML = weekDays.ru[i];
    } 
}
else {
    alert('Страница имеет неверный язык');
}
    

//Способ b
switch (lang) {
    case 'en':
        for (let i = 0; i < 7; i++) {
            li[i].innerHTML = weekDays.en[i];
        }
        break;
    case 'ru':
        for (let i = 0; i < 7; i++) {
            li[i].innerHTML = weekDays.ru[i];
        }
        break;
    default:
        alert('Страница имеет неверный язык');
        break;
}

//Способ c
for (let i = 0; i < 7; i++) {
    li[i].innerHTML = weekDays.lang[i];
}

//Задание 2
let namePerson = 'Саня';
console.log(namePerson === 'Артём' ? 'Артём - Батя Glo Academy' : 
            namePerson === 'Максим' ? 'Максим - Батя курса по js' : 
            namePerson + ' - топовый студент');