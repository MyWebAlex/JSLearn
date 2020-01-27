'use strict';
// Заранее заданные переменные
let mission = 1000000;
let period = 12;
let income = '';

// Вводим зароботок
let money;
while ( !(money = parseInt( prompt('Какой Ваш месячный доход?', 35000) )) ) { let n = true; }

// Вводим возможные расходы
let addExpenses = prompt('Перечислите возможные расходы за рассчитываемый период через запятую', 'Water, Gas, Power');

// Есть ли депозит?
let deposit = confirm('Есть ли у вас депозит в банке?');

// Ввод обязательных статей расходов
let expenses1 = prompt('Введите обязательную статью расходов.', 'Studying');
let amount1;
while ( !(amount1 = parseInt( prompt('Во сколько это обойдется?', 13000)) ) ) { let n = true; }
let expenses2 = prompt('Введите обязательную статью расходов.', 'Food');
let amount2;
while ( !(amount2 = parseInt( prompt('Во сколько это обойдется?', 10000) )) ) { let n = true; }

// Рассчитываем остаток от месячного бюджета после трат
let budgetMonth = money - amount1 - amount2;

// Рассчитываем дневной остаточный бюджет
let budgetDay = Math.floor(budgetMonth / 30);

// Подготавливаем переменные к выводу
let addExpensesCounter = addExpenses.length;
addExpenses = addExpenses.split(', ');
for (let i = 0; i < addExpenses.length; i++) {
    addExpenses[i] = addExpenses[i].toLowerCase();
}
let budgetMessage;
if (budgetDay >= 1200) { budgetMessage = 'У вас высокий уровень дохода'; }
else if (budgetDay >= 600) { budgetMessage = 'У вас средний уровень дохода'; }
else if (budgetDay >= 0) { budgetMessage = 'К сожалению у вас уровень дохода ниже среднего'; }
else { budgetMessage = 'В вашей жизни Что-то пошло не так'; }

// Выводим все необходимые данные в консоль
console.log(typeof money + '\n' + typeof income + '\n' + typeof deposit);
console.log(addExpensesCounter);
console.log('Период равен '+ period + ' месяцев' + '\n' + 'Цель заработать ' + mission + ' рублей');
console.log(addExpenses);
console.log('Остаток на месяц:', budgetMonth);
console.log('Месяцев на достижение цели:', Math.ceil(mission / budgetMonth) );
console.log('Бюджет на день: ', budgetDay);
console.log(budgetMessage);
