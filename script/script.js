// 'use strict'; // Для строгой проверки кода


// // Блок функций //
// // Функция, рассчитывающая все доходы
// const getIncomeMonth = function(income1) { // Позже добавить income2
//     return income1;
// };
// // Функция, рассчитывающая все расходы
// const getExpensesMonth = function(expense1, expense2) {
//     return expense1 + expense2;
// };
// // Функция, рассчитывающая остаток в месяц после доходов и расходов
// const getAccumulatedMonth = function(incomes, expenses) {
//     return incomes - expenses;
// };
// // Функция, рассчитывающая количество месяцев до достижения цели
// const getTargetMonth = function(accumulatedMonth, mission) {
//     let tmp = Math.ceil(mission / accumulatedMonth);
//     return tmp > 0 ? tmp : 'Цель не может быть достигнута';
// };
// // Функция, рассчитывающая остаток в день после доходов и расходов
// const getAccumulatedDay = function(accumulatedMonth) {
//     return Math.floor(accumulatedMonth / 30);
// };
// // Функция, выводящая в консоль тип переменной
// const showTypeOf = function(variable) {
//     console.log(typeof variable, variable);
// };
// // Функция, отпределяющая уровень доходов
// const getStatusIncome = function(accumulatedDay) {
//     if (accumulatedDay >= 1200) { return 'У вас высокий уровень дохода'; }
//     else if (accumulatedDay >= 600) { return 'У вас средний уровень дохода'; }
//     else if (accumulatedDay >= 0) { return 'К сожалению у вас уровень дохода ниже среднего'; }
//     else { return 'В вашей жизни Что-то пошло не так'; }
// };
// // Функция, которая через prompt требует число
// const getOnlyNumberFromPrompt = function(message, defaultMessage) {
//     let tmp;
//     do { 
//         tmp = parseInt( prompt(message, defaultMessage) );
//     } while ( !tmp );
//     return tmp;
// };
// // Функция, которая разбивает строку на подстроки через ', ' и приводит все символы к нижнему регистру
// const getArrayFromString = function(str) {
//     str = str.toLowerCase();
//     str = str.split(', ');
//     return str;
// };
// // Блок функций Конец! //


// // Блок переменных //
// const mission = 1000000; // Сколько хотим заработать
// const money = getOnlyNumberFromPrompt('Какой Ваш месячный доход?', 35000); // Доход в месяц
// let addExpenses = prompt('Перечислите возможные расходы за рассчитываемый период через запятую',
// 'Вода, Газ, Электричество'); // Дополнительные расходы
// const deposit = confirm('Есть ли у вас депозит в банке?'); // Есть ли депозит?
// const expenses1 = prompt('Введите обязательную статью расходов.', 'Учёба'); // Осн. расходы 1
// const amount1 = getOnlyNumberFromPrompt('Во сколько это обойдется?', 13000); // Осн. расходы 1
// const expenses2 = prompt('Введите обязательную статью расходов.', 'Еда'); // Осн. расходы 2
// const amount2 = getOnlyNumberFromPrompt('Во сколько это обойдется?', 10000); // Осн. расходы 2
// const income = prompt('Введите дополнительную статью доходов, если есть.', 'Фриланс'); // Допольнительный доход
// // Блок переменных Конец! //


// // Блок Программы //
// // Разбиваем строку трат на массив
// addExpenses = getArrayFromString(addExpenses);
// // Рассчитывем чистый доход в месяц
// const accumulatedMonth = getAccumulatedMonth( getIncomeMonth(money), getExpensesMonth(amount1, amount2) );
// // Рассчитываем дневной остаточный бюджет
// const budgetDay = getAccumulatedDay(accumulatedMonth);


// // Выводим все необходимые данные в консоль
// showTypeOf(money);
// showTypeOf(income);
// showTypeOf(deposit);
// console.log('Основные траты за месяц:', getExpensesMonth(amount1, amount2));
// console.log('Дополнительные траты:', addExpenses);
// console.log('Месяцев до выполнения цели:', getTargetMonth(accumulatedMonth, mission));
// console.log('Бюджет на день:', budgetDay);
// console.log(getStatusIncome(budgetDay));
// // Блок Программы Конец! //