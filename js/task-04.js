//4 Задача
// На счету пользователя есть 23580 кредитов, значение хранится в переменной credits (создай и присвой).
// Пользователь решает купить ремонтных дроидов, которые стоят по 3000 кредитов за штуку.
// Цена одного дроида хранится в переменной pricePerDroid (создай и присвой).

// При посещении страницы, используя prompt, необходимо спросить количество дроидов которые пользователь хочет купить и сохранить в переменную.

// Напиши скрипт который:

// Если в prompt была нажата кнопка Cancel, выводит в консоль сообщение 'Отменено пользователем!'.
// В противном случае, рассчитывает общую цену заказа и сохраняет в переменной totalPrice.
// Проверяет сможет ли пользователь оплатить заказ:
// если сумма к оплате превышает количество кредитов на счету, выводи в консоль сообщение 'Недостаточно средств на счету для покупки [количество] дроидов на сумму [сумма], на счету доступно [сумма] кредитов. Вы можете купить максимум [количество] дроидов.'.
// в противном случае необходимо посчитать остаток кредитов на счету и вывести сообщение 'Вы купили [число] дроидов на сумму [сумма], на счету осталось [число] кредитов.'

// let credits = 23580;
// const pricePerDroid = 3000;
// const quantity = prompt('Введите количество дроидов, которые хотите купить');
// let totalPrice = pricePerDroid * quantity;
// let balanceCredit = credits - totalPrice;
// let maxDroid = credits / pricePerDroid;
// if (quantity === null) {
//   console.log('Отменено пользователем!');
// } else if (totalPrice > credits) {
//   console.log(
//     `Недостаточно средств на счету для покупки ${quantity} дроидов на сумму ${totalPrice}, на счету доступно ${credits} кредитов. Вы можете купить максимум ${Math.floor(
//       maxDroid,
//     )} дроидов.`,
//   );
// } else if (credits > totalPrice) {
//   console.log(
//     `Вы купили ${quantity} дроидов на сумму ${totalPrice}, на счету осталось ${balanceCredit} кредитов.`,
//   );
// }

// Задача 1 - 4
// Использование if else и арифметических операторов
// Напиши скрипт имитирующий вывод сообщений о списании средств на покупку товара.

// Переменная credits хранит количество средств - 23580 кредитов.

// Единица товара(дроида) стоит 3000 кредитов за штуку и это значение хранится в переменной pricePerDroid.

// Переменная orderPieces принимает значения null(отказ от покупок) и целое положительное число(количество единиц товара).

// Переменная message будет выводить сообщение.В эту переменную надо будет записать одно из трех сообщений о результате:

// const CANCELED_BY_USER = 'Отменено пользователем!'
// Вы купили ${ } дроидов, на счету осталось ${ } кредитов
// const ACCESS_DENIED = 'Недостаточно средств на счету!'
// Используйте вспомогательную переменную totalPrice, которая принимает рассчитанную общую цену заказа.
// Используйте вспомогательную переменную balanceCredit, которая принимает разницу между credits и totalPrice.
// А также используйте if else для выбора значений переменной message.

// const orderPieces = 7;
// const credits = 23580;
// const pricePerDroid = 3000;
// const CANCELED_BY_USER = 'Отменено пользователем!';
// const ACCESS_DENIED = 'Недостаточно средств на счету!';

// let totalPrice;
// totalPrice = pricePerDroid * orderPieces;
// console.log(totalPrice);

// let balanceCredit;
// balanceCredit = credits - totalPrice;
// console.log(balanceCredit);
// let message;

// if (orderPieces === null) {
//   message = CANCELED_BY_USER;
// } else if (totalPrice < credits) {
//   message = `Вы купили ${orderPieces} дроидов, на счету осталось ${balanceCredit} кредитов`;
// } else if (totalPrice > credits) {
//   message = ACCESS_DENIED;
// }
// console.log(message);

//если orderPieces равно 4
// то значение message будет равно
// 'Вы купили 4 дроидов, на счету осталось 11580 кредитов'

//если orderPieces равно null
// то значение message будет равно
// 'Отменено пользователем!'

//если orderPieces равно 10
// то значение message будет равно
// 'Недостаточно средств на счету!'
