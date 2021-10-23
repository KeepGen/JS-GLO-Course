let num = 266219;
console.log(typeof num);

// ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~
// Option #01
let newNum = [...num+ ''];
// деление большого числа на отдельные
console.log(newNum);

let resultNum = newNum.reduce(function(a, b) {
	return a * b;
});
// Умножение каждой цифры
console.log(resultNum);
//1296

// ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~
// Option #02
const arrayNum = num.toString().split('').map(Number);
// перевод цила в строку, его разделение и первод обратно в цифры
console.log(arrayNum);

let resultNumTwo = arrayNum.reduce(function(a, b) {
	return a * b;
});
console.log(resultNumTwo);
//1296

// ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~

const fullMathResult = resultNumTwo ** 3;
// возведение результата в 3 степень
console.log(fullMathResult);

console.log(String(fullMathResult).slice(0,2))
// отобразить только первые две цифры (начало, конец)