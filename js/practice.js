//Модуль 1
//Переменные
//const yearOfBirth = 2006;
//console.log(yearOfBirth);
//let age;
//age = 14;
//console.log(age);
//let name;
//console.log(name);
//console.log(age);

//Введение данных
//const message = 'JavaScript is awesome!';
//console.log(typeof message);
//const name = 'Mango';
//console.log('My name is:', name);
//const isComing = confirm('Please confirm hotel reservation');
//console.log(isComing);
//const hotelName = prompt('Please enter desired hotel name:');
//console.log(typeof hotelName);
//const value = prompt('Please enter a number!');
//console.log(typeof value);
//console.log(value);
//let value = 5;
//value += 10;
//console.log(value);

//Основные операторы, операторы сравнения
//const x = 5;
//const y = 10;
//const z = 5;

//console.log('x > y:', x > y); // false
//console.log('x < y:', x < y); // true
//console.log('x < z:', x < z); // false
//console.log('x <= z:', x <= z); // true
//console.log('x === y:', x === y); // false
//console.log('x === z:', x === z); // true
//console.log('x !== y:', x !== y); // true
//console.log('x !== z:', x !== z); // false

//Числа
//const validNumber = Number('51'); // 51
//console.log(Number.isNaN(validNumber)); // false

//const invalidNumber = Number('qweqwe'); // NaN
//console.log(Number.isNaN(invalidNumber)); // true

//Циклы
//let counter = 0;

//while (counter < 10) {
//console.log('counter: ', counter);
//counter += 1;
//}

//let clientCounter = 18;
//const maxClients = 25;

//while (clientCounter < maxClients) {
//   console.log(clientCounter);
//    clientCounter += 1;
//}

//let password = '';

//do {
//   password = prompt("ВВедите пароль длиннее 4-х символов", '');
//} while (password.length < 5);

//console.log('Ввели пароль: ', password);

// const target = 3;
// let sum = 0;

// for (let i = 0; i <= target; i += 1) {
//     sum += i;
// }

// console.log(sum);

//const target = 10;

//for (let i = 0; i < max; i += 1) {
//   console.log( ` ${max} % ${i} = `, max % i);
//}

// const max = 10;

// for (let i = 0; i < max; i += 1) {
//    console.log( ` ${max} % ${i} = `, max % i);
// }

//Модуль 2

//Массивы

// // Пустой массив
// const arr = [];

// // Массив clients с тремя элементами
// const clients = ['Mango', 'Poly', 'Ajax'];

// console.log(clients); // ["Mango", "Poly", "Ajax"]

// console.log(clients[0]); // Mango
// console.log(clients[1]); // Poly
// console.log(clients[2]); // Ajax

// const numbers = [];

// for (let i = 0; i < 3; i += 1) {
//   numbers.push(`label-${i}`);
// }

// console.log('numbers: ', numbers); // ['label-0', 'label-1', 'label-2']

// Итерация по массиву
const clients = ['Mango', 'Ajax', 'Poly'];

for (const client of clients) {
  console.log(client);
}

// Итерация по строке
const string = 'javascript';

for (const character of string) {
  console.log(character);
}
