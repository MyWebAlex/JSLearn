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
let money;
// Блок переменных Конец! //

// Объект
let appData = {
    // Свойства
    budget: 0, // Доход в месяц
    budgetDay: 0,  // Чистый доход в день
    budgetMonth: 0, // Чистый доход в месяц
    expensesMonth: 0, // Основные траты
    incomes: {}, // Допольнительный доход
    addIncome: [],
    expenses: {}, // Основные расходы
    addExpenses: [], // Дополнительные расходы
    deposit: false, // Есть ли депозит?
    percentDeposit: 0,
    moneyDeposit: 0,
    mission: 1000000, // Сколько хотим накопить
    period: 12, // За сколько месяцев хотим накопить

    // Методы
    asking: function() {
        this.budget = getOnlyNumberFromPrompt('Какой Ваш месячный доход?', 10000);
        if (confirm('Есть ли у вас дополнительный источник заработка?')) {
            this.incomes = getObjFromPrompt(this.incomes, 1, 'Какой у вас дополнительный зароботок?', 'Репетитор', 
            'Сколько в месяц вы на этом зарабатываете?', 40000);
        }
        // this.income = prompt('Введите дополнительную статью доходов, если есть.', 'Фриланс');
        this.addExpenses = getArrayFromString(
            getPrompt('Перечислите возможные расходы за рассчитываемый период через запятую', 
            'Вода, Газ, Электричество')
        );
        this.deposit = confirm('Есть ли у вас депозит в банке?');
        if (this.deposit) {
            this.percentDeposit = getOnlyNumberFromPrompt('Какой годовой процент?', 10);
            this.moneyDeposit = getOnlyNumberFromPrompt('Какая сумма заложена?', 10000);
        }
        this.expenses = getObjFromPrompt(this.expenses, 1, 'Введите обязательную статью расходов.', 'Еда', 
        'Во сколько это обойдется?', 10000);
        this.expenses = getObjFromPrompt(this.expenses, 1, 'Введите обязательную статью расходов.', 'Учёба', 
        'Во сколько это обойдется?', 13000);
        this.expensesMonth = this.getExpensesMonth(this.expenses);
        this.getBudget();
    },
    // Функция, рассчитывающая все расходы
    getExpensesMonth: function(expenses) {
        let tmp = 0;
        for (let key in expenses) {
            tmp += expenses[key];
        }
        return tmp;
    },
    // Функция, рассчитывающая остаток в месяц после доходов и расходов
    getBudget: function() {
        this.budgetMonth = this.budget - this.expensesMonth;
        this.budgetDay = Math.floor(this.budgetMonth / 30);
    },
    // Функция, рассчитывающая количество месяцев до достижения цели
    getTargetMonth: function() {
        let tmp = Math.ceil(this.mission / this.budgetMonth);
        return tmp > 0 ? tmp : 'Цель не может быть достигнута';
    },
    // Функция, отпределяющая уровень доходов
    getStatusIncome: function() {
        if (this.budgetDay >= 1200) { return 'У вас высокий уровень дохода'; }
        else if (this.budgetDay >= 600) { return 'У вас средний уровень дохода'; }
        else if (this.budgetDay >= 0) { return 'К сожалению у вас уровень дохода ниже среднего'; }
        else { return 'В вашей жизни Что-то пошло не так'; }
    },
    calcSavedMoney: function() {
        return this.budgetMonth * this.period;
    }
};
// Объект Конец!


// Блок Программы //
// Вписываем данные
appData.asking(); 

// Выводим все необходимые данные в консоль
console.log('Расходы за месяц:', appData.expensesMonth);
console.log('Месяцев до выполнения цели:', appData.getTargetMonth());
console.log(appData.getStatusIncome(appData.budgetDay));
console.log('\nНаша программа включает в себя данные: ');
for (let key in appData) {
    if (typeof appData[key] !== 'function') {
        console.log('Свойство:', key, ' значение:', appData[key]);
    }
}
let addExpensesStr = '';
for (let item of appData.addExpenses) {
    addExpensesStr += item[0].toUpperCase() + item.slice(1) + ', ';
}
addExpensesStr = addExpensesStr.slice(0, addExpensesStr.length - 2);
console.log('Возможные расходы: ', addExpensesStr);


let startButton = document.getElementById('start');
let plusButton1 = document.getElementsByTagName('button')[0];
let plusButton2 = document.getElementsByTagName('button')[1];
let checkDeposit = document.querySelector('#deposit-check');
let budgetMonthValue = document.getElementsByClassName('budget_month-value')[0];
let budgetDayValue = document.getElementsByClassName('budget_day-value')[0];
let expensesMonthValue = document.getElementsByClassName('expenses_month-value')[0];
let additionalIncomeValue = document.getElementsByClassName('additional_income-value')[0];
let additionalExpensesValue = document.getElementsByClassName('additional_expenses-value')[0];
let incomePeriodValue = document.getElementsByClassName('income_period-value')[0];
let targetMonthValue = document.getElementsByClassName('target_month-value')[0];
let salaryAmount = document.querySelector('.target_month-value');
let incomeTitle = document.querySelector('.income-items .income-title');
let incomeAmount = document.querySelector('.income-items .income-amount');
let additionalIncomeItem1 = document.querySelector('.additional_income-item');
let additionalIncomeItem2 = document.querySelector('.additional_income-item');
let expensesTitle = document.querySelector('.expenses-title');
let expensesAmount = document.querySelector('.expenses-amount');
let additionalExpensesItem = document.querySelector('.additional_expenses-item');
let depositAmount = document.querySelector('.deposit-amount');
let depositPercent = document.querySelector('.deposit-percent');
let targetAmount = document.querySelector('.target-amount');
let periodSelect = document.querySelector('.period-select');

// Блок Программы Конец! //