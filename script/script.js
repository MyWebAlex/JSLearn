'use strict';
let money = 32635, 
    income = 'freelance', 
    addExpenses = 'Water, Gas, Power', 
    deposit = true, 
    mission = 1000000, 
    period = 12,
    budgetDay = money / 30,
    expenses1 = '',
    expenses2 = '',
    amount1 = 0,
    amount2 = 0,
    budgetMonth = 0;

console.log(typeof money + '\n' + typeof income + '\n' + typeof deposit);
console.log(addExpenses.length);
console.log('Период равен '+ period + ' месяцев' + '\n' 
            + 'Цель заработать ' + mission + ' рублей');
console.log(addExpenses.toLowerCase().split(', '));
console.log('budgetDay: ', budgetDay);

//Задание 2
while (!(money = parseInt(prompt('Какой Ваш месячный доход?')))) { }
//Задание 3
addExpenses = prompt('Перечислите возможные расходы за рассчитываемый' 
                    + 'период через запятую').split(', ');
// Задание 4
deposit = confirm('Есть ли у вас депозит в банке?');

//задание 5
expenses1 = prompt('Введите обязательную статью расходов.');
while (!(amount1 = parseInt(prompt('Во сколько это обойдется?')))) { }
expenses2 = prompt('Введите обязательную статью расходов.');
while (!(amount2 = parseInt(prompt('Во сколько это обойдется?')))) { }

//задание 6
budgetMonth = money - amount1 - amount2;
console.log('Остаток на месяц:', budgetMonth);

//задание 7
console.log('Месяцев на достижение цели:', Math.ceil(mission / budgetMonth) );

//задание 8
budgetDay = Math.floor(budgetMonth / 30);

//задание 9
if      (budgetDay > 1200)
    console.log('У вас высокий уровень дохода');
else if (budgetDay === 1200)
    console.log('У вас высокий уровень дохода');
else if (budgetDay > 600)
    console.log('У вас средний уровень дохода');
else if (budgetDay === 600)
    console.log('У вас средний уровень дохода');
else if (budgetDay > 0)
    console.log('К сожалению у вас уровень дохода ниже среднего');
else if (budgetDay === 0)
    console.log('Вы живёте впритык');
else
    console.log('В вашей жизни Что-то пошло не так');