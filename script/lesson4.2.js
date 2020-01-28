'use strict';

const strChanging = function(str) {
    if (typeof str !== 'string') {
        alert('Переменная не является строкой');
        return;
    }
    str = str.trim();
    if (str.length > 30) {
        str = str.slice(0, 30) + '...';
    }
    return str;
};

const str1 = prompt('Ваша строка:', '   съешь ещё этих мягких французских булок да выпей же чаю   ');
console.log(strChanging(str1));