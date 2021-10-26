'use strict';

const lang = document.documentElement.lang;
const langRu = document.getElementById("RU");
const langEn = document.getElementById("EN");
console.log(lang);


/*
if (lang === 'en') {
	langRu.classList.add("hide");
	console.log('This is ENG Version');
} else if (lang === 'ru') {
	langEn.classList.add("hide");
	console.log('Это РУС версия!');
}


switch (lang) {
	case 'en':
		langRu.classList.add("hide");
		console.log('This is ENG Version');
		break;
	case 'ru':
		langEn.classList.add("hide");
		console.log('Это РУС версия!');
		break;
}
*/

let langResult = lang === 'en' ? langRu.classList.add("hide") : langEn.classList.add("hide");

// Task#2Rjn
let namePerson = prompt('Как тебя зовут?');
console.log(namePerson);

let checkName = namePerson === 'Артем' ? console.log('Директор') : namePerson === 'Максим' ? console.log('Преподаватель') : console.log('Студент');