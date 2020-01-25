let money = 48030, 
    income = 'freelance', 
    addExpenses = 'Water, Gas, Power', 
    deposit = true, 
    mission = 1000000, 
    period = 12,
    budgetDay = money / 30,
    num = 266219;

let newNum = num;
num = 1;
while (newNum > 0) {
    let tmp = newNum % 10;
    newNum = (newNum - newNum % 10) / 10;
    num *= tmp;
}
newNum = null;
console.log('Произведение цифр переменной num: ', num);

num **= 3;

console.log('Две первые цифры переменной num: ' + String(num).substr(0, 2) );