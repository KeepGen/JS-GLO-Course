'use strict';

let money = prompt('Укажите ваш месячный доход в рублях:');
const perDay = 30;
let addExpenses = prompt('Укажите категории расхода за ' + perDay + ' дней? (Через запятую)');
let deposit = confirm('Есть ли у вас депозит в банке?');

console.log(addExpenses);
let categoryArray = addExpenses.split(', ');

let expenseQueFirst = prompt('Какая ваша основная статья расхода?', categoryArray[0]);
let expenseQueSecond = prompt('Какой ожидается бюджет для категории: ' + expenseQueFirst);
let expenseQueThird = prompt('Какая ваша второстепенная статья расхода?', categoryArray[1]);
let expenseQueForth = prompt('Какой ожидается бюджет для категории: ' + expenseQueThird);

let income = 'freelance';
let mission = 10000;
let period = 6;

let budgetMonth = money - expenseQueSecond - expenseQueForth;
console.log('Ваша ЗП: ' + money + 'руб –' + expenseQueSecond + 'руб (' + expenseQueFirst + ') –'+ expenseQueForth + 'руб (' + expenseQueThird +'). Остаток: ' + budgetMonth + 'руб.');

let budgetDay = Math.ceil((budgetMonth / perDay)*100)/100;
console.log('Остаток на месяц: '+ budgetMonth + 'руб / 30 дней = ' + budgetDay + 'руб в день');
console.log('Бюджет в месяц: ' + Math.floor(budgetMonth) + 'руб. (включая обязательные затраты)');
console.log('Бюджет в день: ' + Math.floor(budgetDay) + 'руб.');

let planBudget = mission / budgetMonth;
if (planBudget >= 1) {
	console.log('Ваша цель будет достигнута за ' + Math.ceil(planBudget) + ' месяцев(-а)');
} else if (planBudget < 0) {
	console.log('К сожалению Ваша цель не будет достигнута за при этих условиях...');
}

if (budgetMonth > 1200) {
	console.log('У вас ВЫСОКИЙ уровень дохода! Поздравляем!');
} else if (budgetMonth >= 600) {
	console.log('У вас средний уровень дохода. Молодец!');
} else if (budgetMonth >= 0) {
	console.log('К сожалению ваш уровень дохода ниже среднего.');
} else if (budgetMonth <= -1) {
	console.log('Что-то пошло не так! Вы ушли в минус!');
}

if (budgetMonth >= 600) {
	let resultPlus600 = budgetMonth > 1200 ? 'У вас ВЫСОКИЙ уровень дохода! Поздравляем!' : 'У вас средний уровень дохода. Молодец!';
	console.log(resultPlus600);
} else if (budgetMonth < 600) {
	let resultMinus600 = budgetMonth > 0 ? 'К сожалению ваш уровень дохода ниже среднего.' : 'Что-то пошло не так! Вы ушли в минус!';
	console.log(resultMinus600);
}




/*
console.log(addExpenses.length);

console.log(`Период равен ${period} месяцев`);
console.log('Цель заработать ' + mission + ' долларов');

console.log(addExpenses.toLowerCase());

const newArray = Array.from(addExpenses);
console.log(newArray);
*/