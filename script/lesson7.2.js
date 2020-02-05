'use strict';

const week = [
    'Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота', 'Воскресенье'
];

let day = new Date().getDay();

for (let i = 0; i < week.length; i++) {
    let msg = week[i];
    if (i === 5 || i === 6) {
        msg = msg.italics();
    }
    if (day === i) {
        msg = msg.bold();
    }
    document.writeln('<p>' + msg + '</p>');

}