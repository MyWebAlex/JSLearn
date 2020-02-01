'use strict';

//const number = Math.floor(Math.random() * 100) + 1;

function start(number) {
    console.log('number: ', number);

    function restart() {
        return start(Math.floor(Math.random() * 100) + 1)(prompt('Угадай число от 1 до 100'));
    }

    function gameOver(overMessage) {
        return alert(overMessage);
    }

    return function play(tryNumber) {
        if (tryNumber === null) {
            return gameOver('Ок. Удачи!');
        }
        tryNumber = +tryNumber;
        if (!tryNumber || tryNumber < 0 || tryNumber > 100) {
            return play(prompt('Введите число от 1 до 100'));
        }
        if (tryNumber === number) {
            return gameOver('Поздравляю, Вы угадали!!!');
        }
        if (tryNumber > number) {
            return play(prompt('Загаданное число меньше'));
        }
        if (tryNumber < number) {
            return play(prompt('Загаданное число больше'));
        }
    };

}

const game = start(Math.floor(Math.random() * 100) + 1);
game(prompt('Угадай число от 1 до 100'));
