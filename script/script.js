let money = 48030, 
    income = 'freelance', 
    addExpenses = 'Water, Gas, Power', 
    deposit = true, 
    mission = 1000000, 
    period = 12,
    budgetDay = money / 30;

console.log(typeof money + '\n' + typeof income + '\n' + typeof deposit);
console.log(addExpenses.length);
console.log('Период равен '+ period + ' месяцев' + '\n' 
            + 'Цель заработать ' + mission + ' рублей');
console.log(addExpenses.toLowerCase().split(', '));
console.log('budgetDay: ', budgetDay);