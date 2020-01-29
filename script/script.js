'use strict'; // Для строгой проверки кода


// Блок функций //
// Функция, рассчитывающая все доходы
const getIncomeMonth = function(income1) { // Позже добавить income2
    return income1;
};
// Функция, рассчитывающая все расходы
const getExpensesMonth = function(expenses) {
    let tmp = 0;
    for (let i = 0; i < expenses.length; i++) {
        tmp += expenses[i];
    }
    return tmp;
};
// Функция, рассчитывающая остаток в месяц после доходов и расходов
const getAccumulatedMonth = function(incomes, expenses) {
    return incomes - expenses;
};
// Функция, рассчитывающая количество месяцев до достижения цели
const getTargetMonth = function(accumulatedMonth, mission) {
    let tmp = Math.ceil(mission / accumulatedMonth);
    return tmp > 0 ? tmp : 'Цель не может быть достигнута';
};
// Функция, рассчитывающая остаток в день после доходов и расходов
const getAccumulatedDay = function(accumulatedMonth) {
    return Math.floor(accumulatedMonth / 30);
};
// Функция, выводящая в консоль тип переменной
const showTypeOf = function(variable) {
    console.log(typeof variable, variable);
};
// Функция, отпределяющая уровень доходов
const getStatusIncome = function(accumulatedDay) {
    if (accumulatedDay >= 1200) { return 'У вас высокий уровень дохода'; }
    else if (accumulatedDay >= 600) { return 'У вас средний уровень дохода'; }
    else if (accumulatedDay >= 0) { return 'К сожалению у вас уровень дохода ниже среднего'; }
    else { return 'В вашей жизни Что-то пошло не так'; }
};
// Функция, которая через prompt требует число
const getOnlyNumberFromPrompt = function(message, defaultValue) {
    let tmp;
    do { 
        tmp = parseInt( prompt(message, defaultValue) );
    } while ( !tmp );
    return tmp;
};
// функция, которая принимает текст из prompt
const getPrompt = function(message, defaultValue) {
    let tmp;
    do { 
        tmp = prompt(message, defaultValue);
    } while ( !tmp );
    return tmp;
};
// Функция, которая разбивает строку на подстроки через ', ' и приводит все символы к нижнему регистру
const getArrayFromString = function(str) {
    str = str.toLowerCase();
    str = str.split(', ');
    return str;
};
// Блок функций Конец! //


// Блок переменных //
const mission = 1000000; // Сколько хотим заработать
let money, // Доход в месяц
    addExpenses, // Дополнительные расходы
    deposit, // Есть ли депозит?
    income, // Допольнительный доход
    expenses = [ ], // Основные расходы - название
    amounts = [ ]; // Основные расходы - значения
// Блок переменных Конец! //


// Блок Программы //
// Вписываем данные
money = getOnlyNumberFromPrompt('Какой Ваш месячный доход?', 35000);
addExpenses = getPrompt('Перечислите возможные расходы за рассчитываемый период через запятую',
'Вода, Газ, Электричество');
deposit = confirm('Есть ли у вас депозит в банке?');
income = prompt('Введите дополнительную статью доходов, если есть.', 'Фриланс');
for (let i = 0; i < 2; i++) {
    expenses[i] = getPrompt('Введите обязательную статью расходов.', i === 0 ? 'Учёба' : 'Еда');
    amounts[i] = getOnlyNumberFromPrompt('Во сколько это обойдется?', i === 0 ? 13000 : 10000);
}

// Разбиваем строку трат на массив
addExpenses = getArrayFromString(addExpenses);
// Рассчитывем чистый доход в месяц
const accumulatedMonth = getAccumulatedMonth( getIncomeMonth(money), getExpensesMonth(amounts) );
// Рассчитываем дневной остаточный бюджет
const budgetDay = getAccumulatedDay(accumulatedMonth);

// Выводим все необходимые данные в консоль
showTypeOf(money);
showTypeOf(income);
showTypeOf(deposit);
console.log('Основные траты за месяц:', getExpensesMonth(amounts));
console.log('Дополнительные траты:', addExpenses);
console.log('Месяцев до выполнения цели:', getTargetMonth(accumulatedMonth, mission));
console.log('Бюджет на день:', budgetDay);
console.log(getStatusIncome(budgetDay));
// Блок Программы Конец! //