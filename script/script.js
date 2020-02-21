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
let cancelButton = document.querySelector('#cancel');
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
        this.budget = +salaryAmount.value;

        this.getExpenses();
        this.getIncomes();
        this.getExpensesMonth();
        this.getIncomes();
        this.getBudget();
        this.getAddExpenses();
        this.getAddIncome();
        this.blockInputs();
        
        this.showResults();
        
    },
    showResults: function() {
        budgetMonthValue.value = this.budgetMonth;
        budgetDayValue.value = this.budgetDay;
        expensesMonthValue.value = this.expensesMonth;
        additionalExpensesValue.value = this.addExpenses.join(', ');
        additionalIncomeValue.value = this.addIncome.join(', ');
        targetMonthValue.value = this.getTargetMonth();
        incomePeriodValue.value = this.calcPeriod();
        periodSelect.addEventListener('input', this.setIncomePeriodValueByPeriodSelect.bind(appData));
    },
    blockInputs: function() {
        let inputs = document.querySelector('.data').querySelectorAll('input');
        inputs.forEach(function(item) {
            item.setAttribute('disabled', 'disabled');
        });
        periodSelect.removeAttribute('disabled');
        startButton.style.display = 'none';
        cancelButton.style.display = 'block';
    },
    reset: function() {
        startButton.style.display = 'block';
        cancelButton.style.display = 'none';
        this.budget = 0;
        this.budgetDay = 0;
        this.budgetMonth = 0;
        this.expensesMonth = 0;
        this.incomes = {};
        this.incomeMonth = 0;
        this.addIncome = [];
        this.expenses = {};
        this.addExpenses = [];
        this.deposit = false;
        this.percentDeposit = 0;
        this.moneyDeposit = 0;
        let inputs = document.querySelector('.data').querySelectorAll('input');
        inputs.forEach(function(item) {
            item.removeAttribute('disabled');
        });
        budgetMonthValue.value = 0;
        budgetDayValue.value = 0;
        expensesMonthValue.value = 0;
        additionalIncomeValue.value = 'Наименования';
        additionalExpensesValue.value = 'Наименования';
        incomePeriodValue.value = 0;
        targetMonthValue.value = 'Срок';
    },
    // Функция, рассчитывающая все расходы
    getExpensesMonth: function() {
        this.expensesMonth = 0;
        for (let key in this.expenses) {
            this.expensesMonth += +this.expenses[key];
        }
    },
    // Функция, рассчитывающая остаток в месяц после доходов и расходов
    getBudget: function() {
        this.budgetMonth = this.budget + this.incomeMonth - this.expensesMonth;
        this.budgetDay = Math.floor(this.budgetMonth / 30);
    },
    // Функция, рассчитывающая количество месяцев до достижения цели
    getTargetMonth: function() {
        return Math.ceil(targetAmount.value / appData.budgetMonth);
    },
    // Функция, отпределяющая уровень доходов
    getStatusIncome: function() {
        if (this.budgetDay >= 1200) { return 'У вас высокий уровень дохода'; }
        else if (this.budgetDay >= 600) { return 'У вас средний уровень дохода'; }
        else if (this.budgetDay >= 0) { return 'К сожалению у вас уровень дохода ниже среднего'; }
        else { return 'В вашей жизни Что-то пошло не так'; }
    },
    calcPeriod: function() {
        return this.budgetMonth * periodSelect.value;
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
        this.incomeMonth = 0;
        for (let key in this.incomes) {
            this.incomeMonth += +this.incomes[key];
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
        this.addExpenses = [];
        let addExpenses = additionalExpensesItem.value.split(',');
        addExpenses.forEach(function(item) {
            item = item.trim();
            if (item !== '') {
                this.addExpenses.push(item);
            }
        });
    },
    getAddIncome: function() {
        this.addIncome = [];
        additionalIncomeItem.forEach(function(item) {
            let itemValue = item.value.trim();
            if (itemValue !== '') {
                this.addIncome.push(itemValue);
            }
        });
    },
    getPeriod: function() {
        document.querySelector('.period-amount').textContent = periodSelect.value;
    },
    setIncomePeriodValueByPeriodSelect: function() {
        incomePeriodValue.value =  this.budgetMonth * periodSelect.value;
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
startButton.addEventListener('click', appData.start.bind(appData));
cancelButton.addEventListener('click', appData.reset.bind(appData));
expensesPlus.addEventListener('click', appData.addExpensesBlock);
incomesPlus.addEventListener('click', appData.addIncomesBlock);
periodSelect.addEventListener('input', appData.getPeriod);
salaryAmount.addEventListener('input', appData.setStartBtn);
// Блок Программы Конец! //