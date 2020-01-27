'use strict';
//Задание 1
let lang = document.getElementsByTagName('html')[0].getAttribute('lang');

let weekDays = [
    ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'], 
    ['Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота', 'Воскресенье']
];

let li = document.getElementsByTagName('li');

//Способ a
if (lang === 'en') {
    for (let i = 0; i < 7; i++) {
        li[i].innerHTML = weekDays[0][i];
    }
}
else if (lang === 'ru') {
    for (let i = 0; i < 7; i++) {
        li[i].innerHTML = weekDays[1][i];
    } 
}
else {
    alert('Страница имеет неверный язык');
}
    

//Способ b
switch (lang) {
    case 'en':
        for (let i = 0; i < 7; i++) {
            li[i].innerHTML = weekDays[0][i];
        }
        break;
    case 'ru':
        for (let i = 0; i < 7; i++) {
            li[i].innerHTML = weekDays[1][i];
        }
        break;
    default:
        alert('Страница имеет неверный язык');
        break;
}

//Способ c
let langHack = (lang === 'ru');
for (let i = 0; i < 7; i++) {
    li[i].innerHTML = weekDays[+langHack][i];
}

//Задание 2
let namePerson = 'Саня';
console.log(namePerson === 'Артём' ? 'Артём - Батя Glo Academy' : 
            namePerson === 'Максим' ? 'Максим - Батя курса по js' : 
            namePerson + ' - топовый студент');