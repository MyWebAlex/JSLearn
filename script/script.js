let money = 48030, 
    income = 'freelance', 
    addExpenses = 'Water, Gas, Power', 
    deposit = true, 
    mission = 1000000, 
    period = 12,
    budgetDay = money / 30,
    num = 266219;

let strNum = String(num),
    newNum = 1;
for (let i = 0; i < strNum.length; i++)
    newNum *= +strNum[i];
console.log('Произведение цифр переменной num: ', newNum);
newNum **= 3;
strNum = String(newNum);
console.log(strNum[0] + strNum[1]);
