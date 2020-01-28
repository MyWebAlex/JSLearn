'use strict';

const strChanging = function(str) {
    if (typeof str !== 'string') {
        alert('Переменная не является строкой');
        return;
    }
    while (str[0] === ' ') {
        str = str.slice(1);
    }
    while (str[str.length - 1] === ' ') {
        str = str.slice(0, str.length - 2);
    }
    if (str.length > 30) {
        str = str.slice(0, 30) + '...';
    }
    return str;
};

const str1 = prompt('Ваша строка:', '   съешь ещё этих мягких французских булок да выпей же чаю   ');
console.log(strChanging(str1));