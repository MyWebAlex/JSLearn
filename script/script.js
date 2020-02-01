'use strict';

function start(number) {
    console.log('number: ', number);
    let counter = 10;

    function restart() {
        counter = 10;
        return start(Math.floor(Math.random() * 100) + 1)(prompt('Угадай число от 1 до 100'));
    }
    function gameOver(overMessage) {
        return alert(overMessage);
    }

    return function play(tryNumber) {
        if (tryNumber === null) {
            return confirm('Вы уверены, что хотите выйти?') ? gameOver('Ок. Удачи') : restart();
        }
        tryNumber = +tryNumber;
        if (!tryNumber || tryNumber < 0 || tryNumber > 100) {
            return play(prompt('Введите число от 1 до 100'));
        }
        if (tryNumber === number) {
            return confirm('Поздравляю, Вы угадали!!! Хотели бы сыграть еще?') ? restart() : gameOver('Ок. Удачи');
        }
        counter--;
        if (counter === 0) {
            return confirm('Попытки закончились, хотите сыграть еще?') ? restart() : gameOver('Ок. Удачи');
        }
        if (tryNumber > number) {
            return play(prompt('Загаданное число меньше, попыток осталось ' + counter));
        }
        if (tryNumber < number) {
            return play(prompt('Загаданное число больше, попыток осталось ' + counter));
        }
    };

}

const game = start(Math.floor(Math.random() * 100) + 1);
game(prompt('Угадай число от 1 до 100'));