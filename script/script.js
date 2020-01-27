'use strict';
let money = 48030, 
    income = 'freelance', 
    addExpenses = 'Water, Gas, Power', 
    deposit = true, 
    mission = 1000000, 
    period = 12,
    budgetDay = money / 30,
    num = 266219;

console.log(typeof money + '\n' + typeof income + '\n' + typeof deposit);
console.log(addExpenses.length);
console.log('Период равен '+ period + ' месяцев' + '\n' 
            + 'Цель заработать ' + mission + ' рублей');
console.log(addExpenses.toLowerCase().split(', '));
console.log('budgetDay: ', budgetDay);

while ( !(money = parseInt( prompt('Какой Ваш месячный доход?') )) ) { }
addExpenses = prompt('Перечислите возможные расходы за рассчитываемый' 
                    + 'период через запятую').split(', ');
deposit = confirm('Есть ли у вас депозит в банке?');

expenses1 = prompt('Введите обязательную статью расходов.');
while ( !(amount1 = parseInt( prompt('Во сколько это обойдется?')) ) ) { }
expenses2 = prompt('Введите обязательную статью расходов.');
while ( !(amount2 = parseInt( prompt('Во сколько это обойдется?') )) ) { }

budgetMonth = money - amount1 - amount2;
console.log('Остаток на месяц:', budgetMonth);

console.log('Месяцев на достижение цели:', Math.ceil(mission / budgetMonth) );

budgetDay = Math.floor(budgetMonth / 30);

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
