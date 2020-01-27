'use strict';
let money = 0, 
    income = '', 
    addExpenses = '', 
    deposit = true, 
    mission = 1000000, 
    period = 12,
    budgetDay = money / 30,
    expenses1 = '',
    expenses2 = '',
    amount1 = 0,
    amount2 = 0,
    budgetMonth = 0;

//Задание 2
while ( !(money = parseInt( prompt('Какой Ваш месячный доход?', 35000) )) ) { let n = true; }
//Задание 3
addExpenses = prompt('Перечислите возможные расходы за рассчитываемый период через запятую', 'Water, Gas, Power');
let addExpensesCounter = addExpenses.length;
addExpenses = addExpenses.split(', ');

// Задание 4
deposit = confirm('Есть ли у вас депозит в банке?');

//задание 5
expenses1 = prompt('Введите обязательную статью расходов.', 'Studying');
while ( !(amount1 = parseInt( prompt('Во сколько это обойдется?', 13000)) ) ) { let n = true; }
expenses2 = prompt('Введите обязательную статью расходов.', 'Food');
while ( !(amount2 = parseInt( prompt('Во сколько это обойдется?', 10000) )) ) { let n = true; }

//Вывод данных
console.log(typeof money + '\n' + typeof income + '\n' + typeof deposit);
console.log(addExpensesCounter);
console.log('Период равен '+ period + ' месяцев' + '\n' + 'Цель заработать ' + mission + ' рублей');
for (let i = 0; i < addExpenses.length; i++) {
    addExpenses[i] = addExpenses[i].toLowerCase();
}
console.log(addExpenses);


//задание 6
budgetMonth = money - amount1 - amount2;
console.log('Остаток на месяц:', budgetMonth);

//задание 7
console.log('Месяцев на достижение цели:', Math.ceil(mission / budgetMonth) );

//задание 8
budgetDay = Math.floor(budgetMonth / 30);
console.log('Бюджет на день: ', budgetDay);

//задание 9
if (budgetDay >= 1200) { console.log('У вас высокий уровень дохода'); }
else if (budgetDay >= 600) { console.log('У вас средний уровень дохода'); }
else if (budgetDay >= 0) { console.log('К сожалению у вас уровень дохода ниже среднего'); }
else { console.log('В вашей жизни Что-то пошло не так'); }