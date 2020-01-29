'use strict';

let arr = ['123', '234', '32462', '23581', '987', '0.015846', '897456'];
for (let i = 0; i < arr.length; i++) {
    if (arr[i][0] === '2' || arr[i][0] === '4') {
        console.log(+arr[i]);
    }
}

const isPrimal = function(x) {
    let y = 2;
    do {
        if (x % y === 0) {
            return false;
        }
        y++;
    } while (y <= Math.ceil( Math.sqrt(x) ));
    return true;
};

const toConsole = function(x) {
    console.log(x, 'Делители этого числа: 1 и', x);
};

for (let i = 0; i <= 100; i += 6) {
    if (i === 0) {
        toConsole(1);
        toConsole(2);
        toConsole(3);
    } else {
        if (isPrimal(i - 1)) {
            toConsole(i - 1);
        }
        if (isPrimal(i + 1)) {
            toConsole(i + 1);
        }
    }
}