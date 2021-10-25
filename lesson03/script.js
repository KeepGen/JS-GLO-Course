'use strict';
let money, income, addExpenses, deposit, mission, period;

money = 100;
income = 'freelance';
addExpenses = 'Courses, Books, Webinars';
deposit = true;
mission = 10000;
period = 6;

console.log(typeof money);
console.log(typeof income);
console.log(typeof deposit);

console.log(addExpenses.length);

console.log(`Период равен ${period} месяцев`);
console.log('Цель заработать ' + mission + ' долларов');

console.log(addExpenses.toLowerCase());

const newArray = Array.from(addExpenses);
const newArray1 = [...addExpenses];
const newArray2 = addExpenses.split('');
const newArray3 = Object.assign([], addExpenses);

console.log(newArray);
console.log(newArray1);
console.log(newArray2);
console.log(newArray3);

const perDay = 30;
let budgetDay = Math.ceil((money / perDay)*100)/100;

console.log('Budget per day: USD ' + budgetDay);

