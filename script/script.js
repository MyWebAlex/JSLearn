'use strict'; // Для строгой проверки кода


// Блок функций //
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
// Фнкция, которая считывает prompt в объект с заданными параметрами
const getObjFromPrompt = function(obj, mode, keyQuestion, keyDefault, valueQuestion, valueDefault) {
    if (mode === 0) {
        obj[getPrompt(keyQuestion, keyDefault )] = getPrompt(valueQuestion, valueDefault);
    }
    if (mode === 1) {
        obj[getPrompt(keyQuestion, keyDefault)] = getOnlyNumberFromPrompt(valueQuestion, valueDefault);
    }
    return obj;
};
// Блок функций Конец! //


// Блок переменных //
let startButton = document.getElementById('start');
let incomesPlus = document.getElementsByTagName('button')[0];
let expensesPlus = document.getElementsByTagName('button')[1];
let checkDeposit = document.querySelector('#deposit-check');
let budgetMonthValue = document.getElementsByClassName('budget_month-value')[0];
let budgetDayValue = document.getElementsByClassName('budget_day-value')[0];
let expensesMonthValue = document.getElementsByClassName('expenses_month-value')[0];
let additionalIncomeValue = document.getElementsByClassName('additional_income-value')[0];
let additionalExpensesValue = document.getElementsByClassName('additional_expenses-value')[0];
let incomePeriodValue = document.getElementsByClassName('income_period-value')[0];
let targetMonthValue = document.getElementsByClassName('target_month-value')[0];
let salaryAmount = document.querySelector('.salary-amount');
let incomeTitle = document.querySelector('.income-items .income-title');
let incomeAmount = document.querySelector('.income-items .income-amount');
let additionalIncomeItem = document.querySelectorAll('.additional_income-item');
let expensesTitle = document.querySelector('.expenses-title');
let expensesItems = document.querySelectorAll('.expenses-items');
let incomeItems = document.querySelectorAll('.income-items');
let additionalExpensesItem = document.querySelector('.additional_expenses-item');
let depositAmount = document.querySelector('.deposit-amount');
let depositPercent = document.querySelector('.deposit-percent');
let targetAmount = document.querySelector('.target-amount');
let periodSelect = document.querySelector('.period-select');
// Блок переменных Конец! //

// Объект
let appData = {
    // Свойства
    budget: 0, // Доход в месяц
    budgetDay: 0,  // Чистый доход в день
    budgetMonth: 0, // Чистый доход в месяц
    expensesMonth: 0, // Основные траты
    incomes: {}, // Допольнительный доход
    incomeMonth: 0,
    addIncome: [],
    expenses: {}, // Основные расходы
    addExpenses: [], // Дополнительные расходы
    deposit: false, // Есть ли депозит?
    percentDeposit: 0,
    moneyDeposit: 0,
    start: function() {
        appData.budget = +salaryAmount.value;

        appData.getExpenses();
        appData.getIncomes();
        appData.getExpensesMonth();
        appData.getIncomes();
        appData.getBudget();
        appData.getAddExpenses();
        appData.getAddIncome();

        appData.showResults();
    },
    showResults: function() {
        budgetMonthValue.value = appData.budgetMonth;
        budgetDayValue.value = appData.budgetDay;
        expensesMonthValue.value = appData.expensesMonth;
        additionalExpensesValue.value = appData.addExpenses.join(', ');
        additionalIncomeValue.value = appData.addIncome.join(', ');
        targetMonthValue.value = appData.getTargetMonth();
        incomePeriodValue.value = appData.calcPeriod();
        periodSelect.addEventListener('input', appData.setIncomePeriodValueByPeriodSelect);
    },
    // Функция, рассчитывающая все расходы
    getExpensesMonth: function() {
        appData.expensesMonth = 0;
        for (let key in appData.expenses) {
            appData.expensesMonth += +appData.expenses[key];
        }
    },
    // Функция, рассчитывающая остаток в месяц после доходов и расходов
    getBudget: function() {
        appData.budgetMonth = appData.budget + appData.incomeMonth - appData.expensesMonth;
        appData.budgetDay = Math.floor(appData.budgetMonth / 30);
    },
    // Функция, рассчитывающая количество месяцев до достижения цели
    getTargetMonth: function() {
        return Math.ceil(targetAmount.value / appData.budgetMonth);
    },
    // Функция, отпределяющая уровень доходов
    getStatusIncome: function() {
        if (appData.budgetDay >= 1200) { return 'У вас высокий уровень дохода'; }
        else if (appData.budgetDay >= 600) { return 'У вас средний уровень дохода'; }
        else if (appData.budgetDay >= 0) { return 'К сожалению у вас уровень дохода ниже среднего'; }
        else { return 'В вашей жизни Что-то пошло не так'; }
    },
    calcPeriod: function() {
        return appData.budgetMonth * periodSelect.value;
    },
    addExpensesBlock: function() {
        let cloneExpensesItem = expensesItems[0].cloneNode(true);
        expensesItems[0].parentNode.insertBefore(cloneExpensesItem, expensesPlus);
        expensesItems = document.querySelectorAll('.expenses-items');
        if (expensesItems.length === 3) {
            expensesPlus.style.display = 'none';
        }
    },
    getExpenses: function() {
        expensesItems.forEach(function(item) {
            let itemExpenses = item.querySelector('.expenses-title').value;
            let cashExpenses = item.querySelector('.expenses-amount').value;
            if (itemExpenses !== '' && cashExpenses !== '') {
                appData.expenses[itemExpenses] = +cashExpenses;
            }
        });
    },
    getIncomes: function() {
        incomeItems.forEach(function(item) {
            let itemIncome = item.querySelector('.income-title').value;
            let cashIncome = item.querySelector('.income-amount').value;
            if (itemIncome !== '' && cashIncome !== '') {
                appData.incomes[itemIncome] = +cashIncome;
            }
        });
        appData.incomeMonth = 0;
        for (let key in appData.incomes) {
            appData.incomeMonth += +appData.incomes[key];
        }
    },
    addIncomesBlock: function() {
        let cloneIncomeItem = incomeItems[0].cloneNode(true);
        incomeItems[0].parentNode.insertBefore(cloneIncomeItem, incomesPlus);
        incomeItems = document.querySelectorAll('.income-items');
        if (incomeItems.length === 3) {
            incomesPlus.style.display = 'none';
        }
    },
    getAddExpenses: function() {
        appData.addExpenses = [];
        let addExpenses = additionalExpensesItem.value.split(',');
        addExpenses.forEach(function(item) {
            item = item.trim();
            if (item !== '') {
                appData.addExpenses.push(item);
            }
        });
    },
    getAddIncome: function() {
        appData.addIncome = [];
        additionalIncomeItem.forEach(function(item) {
            let itemValue = item.value.trim();
            if (itemValue !== '') {
                appData.addIncome.push(itemValue);
            }
        });
    },
    getPeriod: function() {
        document.querySelector('.period-amount').textContent = periodSelect.value;
    },
    setIncomePeriodValueByPeriodSelect: function() {
        incomePeriodValue.value =  appData.budgetMonth * periodSelect.value;
    },
    setStartBtn: function() {
        if (salaryAmount.value === '') {
            startButton.setAttribute('disabled', 'disabled');
        } 
        else {
            startButton.removeAttribute('disabled');
        }
    }
};
// Объект Конец!


// Блок Программы //
appData.setStartBtn();
startButton.addEventListener('click', appData.start);
expensesPlus.addEventListener('click', appData.addExpensesBlock);
incomesPlus.addEventListener('click', appData.addIncomesBlock);
periodSelect.addEventListener('input', appData.getPeriod);
salaryAmount.addEventListener('input', appData.setStartBtn);
// Выводим все необходимые данные в консоль
// console.log('Расходы за месяц:', appData.expensesMonth);
// console.log('Месяцев до выполнения цели:', appData.getTargetMonth());
// console.log(appData.getStatusIncome(appData.budgetDay));
// console.log('\nНаша программа включает в себя данные: ');
// for (let key in appData) {
//     if (typeof appData[key] !== 'function') {
//         console.log('Свойство:', key, ' значение:', appData[key]);
//     }
// }
// let addExpensesStr = '';
// for (let item of appData.addExpenses) {
//     addExpensesStr += item[0].toUpperCase() + item.slice(1) + ', ';
// }
// addExpensesStr = addExpensesStr.slice(0, addExpensesStr.length - 2);
// console.log('Возможные расходы: ', addExpensesStr);

// Блок Программы Конец! //