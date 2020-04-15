// - создать массив с 20 числами.
let arr = [20, 88, 39, 120, 77, 51, 36, 48, 59, 98, 47, 32, 21, 18, 8, 85, 22, 17, 10, 100];
// -- при помощи метода sort и колбека  отсортировать массив.
console.log(arr.sort((a, b) => a - b));
// -- при помощи метода sort и колбека отсортировать массив в ниспадающем напралении.
console.log(arr.sort((a, b) => b - a));
// -- при помощи filter получить числа кратные 3
console.log(arr.filter(number => number % 3===0));
// -- при помощи filter получить числа кратные 10
console.log(arr.filter(number => number % 10===0));
// -- перебрать (проитерировать) массив при помощи foreach()
arr.forEach(value => console.log(value));
// -- перебрать массив при помощи map() и получить новый массив в котором все значения будут в 3 раза больше
console.log(arr.map(value =>  value *= 3));
// - создать массив со словами на 15-20 элементов.
let arrUsers = ['Dima', 'Viktor', 'Petro', 'Car', 'Green', 'Black', 'White', 'Oksana', 'Oleg', 'Ostap', 'Ukraine',
    'Spain', 'Lviv', 'Kyiv', 'Vynnyky' ];
// -- отсортировать его по алфавиту в восходящем порядке.
console.log(arrUsers.sort());
// // -- отсортировать его по алфавиту  в нисходящем порядке.
console.log(arrUsers.reverse());
// -- отфильтровать слова длиной менее 4х символов
console.log(arrUsers.filter(value => value.length < 4));
// -- перебрать массив при помощи map() и получить новый массив в котором все значения будут со знаком "!" в конце
console.log(arrUsers.map(value => value += '!'));
// Все робити через функції масивів (foreach, map ...тд)
// Дан масив :
    let users = [
    {name: 'vasya', age: 31, status: false},
    {name: 'petya', age: 30, status: true},
    {name: 'kolya', age: 29, status: true},
    {name: 'olya', age: 28, status: false},
    {name: 'max', age: 30, status: true},
    {name: 'anya', age: 31, status: false},
    {name: 'oleg', age: 28, status: false},
    {name: 'andrey', age: 29, status: true},
    {name: 'masha', age: 30, status: true},
    {name: 'olya', age: 31, status: false},
    {name: 'max', age: 31, status: true}
    ];
// - відсортувати його за  віком (зростання , а потім окремо спадання)
console.log(users.sort((a,b) => a.age - b.age));
// console.log(users.sort((a,b) => b.age - a.age));

// - відсортувати його за кількістю знаків в імені  (зростання , а потім окремо спадання)
console.log(users.sort((a, b) => a.name.length - b.name.length));
// console.log(users.sort((a, b) => b.name.length - a.name.length));

// - пройтись по ньому та додати кожному юзеру поле id - яке характеризує унікальний індентифікатор
// (По якому принципу його створювати - ваше рішення), та зберегти це в новий масив (первинний масив залишиться без змін)
console.log(users.map((array, index) => {
    array.id = index+1;
    return array
}));
//
//
// // - відсортувати його за індентифікатором
console.log(users.sort((a, b) => b.id - a.id));


// -- наисать функцию калькулятора с 2мя числами и колбеком
function calculator(a, b, cb) {
    cb(a,b);
}
calculator(2,3, (a,b) => {
    console.log(a / b)
});


// -- наисать функцию калькулятора с 3мя числами и колбеком
function calculator2(a, b, c, cb) {
    cb(a,b,c);
}
calculator2(2,3, 2, (a,b,c) => {
    console.log(a + b * c)
});

// =============================================
// =============================================
// =============КЛАССНАЯ РАБОТА=================
// =============================================
// =============================================
//
//
//
//
let car = [
    {producer:"subaru",model: "wrx",year: 2010, color:"blue",type: "sedan",engine: "ej204x",volume: 2,power: 400},
    {producer:"subaru",model: "legacy",year: 2007, color:"silver",type: "sedan",engine: "ez30",volume: 3,power: 250},
    {producer:"subaru",model: "tribeca",year: 2011, color:"white",type: "jeep",engine: "ej20",volume: 2,power: 300},
    {producer:"subaru",model: "leone",year: 1998, color:"yellow",type: "sedan",engine: "ez20x",volume: 2,power: 140},
    {producer:"subaru",model: "impreza",year: 2014, color:"red",type: "sedan",engine: "ej204x",volume: 2,power: 200},
    {producer:"subaru",model: "outback",year: 2014, color:"red",type: "hachback",engine: "ej204",volume: 2,power: 165},
    {producer:"bmw",model: "115",year: 2013, color:"red",type: "hachback",engine: "f15",volume: 1.5,power: 120},
    {producer:"bmw",model: "315",year: 2010, color:"white",type: "sedan",engine: "f15",volume: 1.5, power: 120},
    {producer:"bmw",model: "650",year: 2009, color:"black",type: "coupe",engine: "f60",volume: 6,power: 350},
    {producer:"bmw",model: "320",year: 2012, color:"red",type: "sedan",engine: "f20",volume: 2,power: 180},
    {producer:"mercedes",model: "e200",year: 1990, color:"silver",type: "sedan",engine: "eng200",volume: 2,power: 180},
    {producer:"mercedes",model: "e63",year: 2017, color:"yellow",type: "sedan",engine: "amg63",volume:3,power: 400},
    {producer:"mercedes",model: "c250",year: 2017, color:"red",type: "sedan",engine: "eng25",volume: 2.5,power: 230}
];
// Відфільтрувати масив за наступними крітеріями :
// - двигун більше 3х літрів
console.log(car.filter(value => value.volume > 3 ));
// - двигун = 2л
console.log(car.filter(value => value.volume === 2 ));
// - виробник мерс
console.log(car.filter(value => value.producer === 'mercedes'));
// - двигун більше 3х літрів + виробник мерседес
console.log(car.filter(value => value.volume >= 3 && value.producer === 'mercedes'));
// - двигун більше 3х літрів + виробник субару
console.log(car.filter(value => value.volume >= 3 && value.producer ==='subaru'));
// - сили більше ніж 300
console.log(car.filter(value => value.power > 300));
// - сили більше ніж 300 + виробник субару
console.log(car.filter(value => value.power > 300 && value.producer === 'subaru'));
// - мотор серіі ej
console.log(car.filter(value => value.engine.startsWith('ej')));
// - сили більше ніж 300 + виробник субару + мотор серіі ej
console.log(car.filter(value => value.power > 300 && value.producer === 'subaru' && value.engine.startsWith('ej')));
// - двигун меньше 3х літрів + виробник мерседес
console.log(car.filter(value => value.volume < 3 && value.producer === 'mercedes'));
// - двигун більше 2л + сили більше 250
console.log(car.filter(value => value.volume > 2 && value.power > 250));
// - сили більше 250  + виробник бмв
console.log(car.filter(value => value.power > 250 && value.producer === 'bmw'));



// - взять слдующий массив
let usersWithAddress = [
    {id: 1, name: 'vasya', age: 31, status: false, address: {city: 'Lviv', street: 'Shevchenko', number: 16}},
    {id: 2, name: 'petya', age: 30, status: true, address: {city: 'Lviv', street: 'Shevchenko', number: 1}},
    {id: 3, name: 'kolya', age: 29, status: true, address: {city: 'Lviv', street: 'Shevchenko', number: 121}},
    {id: 4, name: 'olya', age: 28, status: false, address: {city: 'Lviv', street: 'Shevchenko', number: 90}},
    {id: 5, name: 'max', age: 30, status: true, address: {city: 'Lviv', street: 'Shevchenko', number: 115}},
    {id: 6, name: 'anya', age: 31, status: false, address: {city: 'Lviv', street: 'Shevchenko', number: 2}},
    {id: 7, name: 'oleg', age: 28, status: false, address: {city: 'Lviv', street: 'Shevchenko', number: 22}},
    {id: 8, name: 'andrey', age: 29, status: true, address: {city: 'Lviv', street: 'Shevchenko', number: 43}},
    {id: 9, name: 'masha', age: 30, status: true, address: {city: 'Lviv', street: 'Shevchenko', number: 12}},
    {id: 10, name: 'olya', age: 31, status: false, address: {city: 'Lviv', street: 'Shevchenko', number: 16}},
    {id: 11, name: 'max', age: 31, status: true, address: {city: 'Lviv', street: 'Shevchenko', number: 121}}
];
// -- отсортировать его по id пользователей
console.log(usersWithAddress.sort((a, b) => a.id - b.id));
//  -- отсортировать его по id пользователей в обратном опрядке
console.log(usersWithAddress.sort((a, b) => b.id - a.id));
//  -- отсортировать его по возрасту пользователей
console.log(usersWithAddress.sort((a, b) => a.age - b.age));
//  -- отсортировать его по возрасту пользователей в обратном порядке
console.log(usersWithAddress.sort((a, b) => b.age - a.age));
// -- отсортировать его по имени пользователей
console.log(usersWithAddress.sort(((a, b) => a.name < b.name ? -1 : 1 )));
// -- отсортировать его по имени пользователей в обратном порядке
console.log(usersWithAddress.sort(((a, b) => a.name > b.name ? -1 : 1 )));
// -- отсортировать его по названию улицы  в алфавитном порядке
console.log(usersWithAddress.sort(((a, b) => a.address.street < b.address.street ? -1 : 1 )));
// -- отсортировать его по номеру дома по возрастанию
console.log(usersWithAddress.sort((a, b) => a.address.number - b.address.number));
// -- отфильтровать (оставить) тех кто младше 30
console.log(usersWithAddress.filter(value => value.age < 30));
//  -- отфильтровать (оставить) тех у кого отрицательный статус
console.log(usersWithAddress.filter(value => value.status === false));
// -- отфильтровать (оставить) тех у кого отрицательный статус и младше 30 лет
console.log(usersWithAddress.filter(value => value.status === false && value.age < 30));
// -- отфильтровать (оставить) тех у кого номер дома четный
console.log(usersWithAddress.filter(value => value.address.number % 2 === 0 ));


// ===========================
// ======ДОПОЛНИТЕЛЬНО========
// ===========================
//
// Створити обєкт автомобіля з полями:
//     Марка автомобля, потужність двигуна, власник, ціна, рік випуску.
//     Власник автомобіля теж має бути обєкт, у якого є поля
// Імя, вік, стаж водіння.
//     Створити не менше 7 та не більше 20 машинок.
let car1 = {
    producer: 'Peugeot',
    power: 160,
    price: 13000,
    year: 2013,
    driver: {name: 'Petro', age: 52, stag:35}
};
let car2 = {
    producer: 'Opel',
    power: 60,
    price: 4500,
    year: 2003,
    driver: {name: 'Ostap', age: 21, stag:2}
};
let car3 = {
    producer: 'Nissan',
    power: 130,
    price: 9500,
    year: 2012,
    driver: {name: 'Nazar', age: 27, stag:9}
};
let car4 = {
    producer: 'BMW',
    power: 260,
    price: 20000,
    year: 2017,
    driver: {name: 'Zahar', age: 30, stag:12}
};
let car5 = {
    producer: 'Peugeot',
    power: 80,
    price: 2000,
    year: 1993,
    driver: {name: 'Oleg', age: 35, stag:4}
};
let car6 = {
    producer: 'Mercedes',
    power: 250,
    price: 23000,
    year: 2018,
    driver: {name: 'Yarik', age: 23, stag:1}
};
let car7 = {
    producer: 'Renault',
    power: 85,
    price: 8000,
    year: 2007,
    driver: {name: 'Oksana', age: 36, stag:6}
};
let car8 = {
    producer: 'Toyota',
    power: 110,
    price: 16000,
    year: 2015,
    driver: {name: 'Olga', age: 24, stag:2}
};
let car9 = {
    producer: 'BMW',
    power: 350,
    price: 30000,
    year: 2018,
    driver: {name: 'Artem', age: 28, stag:10}
};
let car10 = {
    producer: 'Peugeot',
    power: 110,
    price: 7000,
    year: 2011,
    driver: {name: 'Viktor', age: 24, stag:4}
};

    // Зробили половину автопарку ремонт мотору, що збільшить потужність автомобілів на 10% (переприсвоєння змінної потужності).
car1.power += car1.power * 0.1;
car2.power += car2.power * 0.1;
car3.power += car3.power * 0.1;
car4.power += car4.power * 0.1;
car5.power += car5.power * 0.1;

// На відремонтовані автомобілі найняти нових водіїв (переприсвоїти змінну водій).
car1.driver = {name: 'Yarek', age: 35, stag: 10};
car2.driver = {name: 'Agneshka', age: 34, stag: 4};
car3.driver = {name: 'Kaya', age: 22, stag: 2};
car4.driver = {name: 'Mihal', age: 19, stag: 1};
car5.driver = {name: 'Lucash', age: 39, stag: 15};

// Для початку вкладіть всі наші створені автомобілі в масив cars.
let cars = [car1, car2, car3, car4, car5, car6, car7, car8, car9, car10];
// Далі необхідно дати кожну другу машинку (цикл з кроком в 2), та робити їй підвищення потужності двигуна на 10% та ціну на 5%
for (let i = 0; i < cars.length; i += 2) {
    cars[i].power += cars[i].power * 0.1;
    cars[i].price += cars[i].price * 0.05;
}
// Після того зробити перевірку досвіду ВСІХ наших водіїв. Якщо досвід водія менший за 5 років,
// але його вік більший за 25, то необідно відправити його на курси підвищення кваліфікації, що збільшить йому досвід на 1 рік.
for (const car of cars) {
    if (car.driver.stag < 5 && car.driver.age > 25){
        car.driver.stag = car.driver.stag + 1;
    }
}
console.log(cars);
// Також спробуйте порахувати суму, яку потрібно потратити для покупки всіх цих авто в циклі
let sum = cars.reduce((previousValue, currentValue) => previousValue + currentValue.price,0);
console.log(sum);

