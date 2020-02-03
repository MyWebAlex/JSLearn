'use strict';

const week = [
    'Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота', 'Воскресенье'
];

for (let item of week) {
    if (item === 'Суббота' || item === 'Воскресенье') {
        document.writeln(item.italics());
    } else if (Date.week === item) {
        document.writeln(item + '+');
    } else {
        document.writeln(item);
    }

}