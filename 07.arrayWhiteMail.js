/*
Задание:

Напишите функцию, которая создаёт массив email-адресов, не попавших в чёрный список.
В качестве аргументов функция должна принимать:
массив строк с исходными email адресами,
массив строк с email адресами в чёрном списке.

Проверка результата:

Для проверки задания вызывайте получившуюся функцию вручную с различными параметрами и сверяйте
получившийся результат с тем, что вы считаете правильным.
Для этого предварительно произведите самостоятельно несколько вычислений с различными вариантами аргументов.
*/

function checkResult(allMail, blackMail, whiteMail) {
    'use strict';
        
    for (let i = 0; i < allMail.length; i++) {
        if (blackMail.includes(allMail[i]) !== true) {
            whiteMail.push(allMail[i]);
        }
    }
    console.log('Список e-Mail адресов, не попавших в "черный список":');
    console.log(whiteMail);
}

let allMail = ['denis@yandex.ru', 'max@yandex.ru', '123@yandex.ru', 'spam@yandex.ru', 'olya@yandex.ru',
               'taisia@yandex.ru', 'cat@yandex.ru', 'igor@yandex.ru', 'tima@yandex.ru'];
let blackMail = ['123@yandex.ru', 'spam@yandex.ru', 'cat@yandex.ru'];
let whiteMail = [];

checkResult(allMail, blackMail, whiteMail);