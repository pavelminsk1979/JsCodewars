





function findMultiples(integer, limit) {
let res= []
    let x = Math.floor(limit/integer)
    for (let i=1;i<=x;i++){
        res.push(integer*i)
    }
    return res
}


console.log(findMultiples(5, 25))
console.log(findMultiples(4, 27))




















/*
Твоя работа
Найдите сумму всех кратных n меньше m

Иметь ввиду
n и m - натуральные числа (целые положительные числа)
m исключается из кратных
*/


/*

function sumMul(n,m){
let x = Math.floor((m-1)/n)
    let res = 0
    for (let i=1;i<=x;i++){
       res = res +n*i
    }
     if(res>0){
        return res
    }else {return 'INVALID'}
}


console.log(sumMul(2,9))
console.log(sumMul(4, -7))
console.log(sumMul(20, 3280))
*/



































/*
function pipeFix(numbers){

let x = []
    for (let i=numbers[0];i<numbers[numbers.length-1]+1;i++){
        x.push(i)
    }
    return x
}


console.log(pipeFix([1,2,3,5,6,8,9]))
console.log(pipeFix([6,9]))*/





























/*
Студент работал над функцией и допустил несколько синтаксических ошибок при кодировании. Помогите им найти свои ошибки и исправить их.
*/



/*function main (verb, noun) {
return verb + noun
}


console.log(main('take ', 'item'))*/


















/*Ваш коллега должен был написать простую вспомогательную функцию, чтобы написать строку (содержащую одно слово) с заглавной буквы перед тем, как уйти в отпуск.

    К сожалению, они ушли, и код, который они вам дали, не работает. Исправьте вспомогательную функцию, которую они написали, чтобы она работала как задумано (т. е. сделать первый символ в строке «слово» прописным).

Не беспокойтесь о числах, специальных символах или нестроковых типах, которые передаются функции. Длина строки будет от 1 до 10 символов, но она никогда не будет пустой.*/

/*
function capitalizeWord(word) {
    /!*return word.slice(1)*!/
    let x = ''
    for(let i=0;i<word.length;i++){
        if(i===0){
            x=x+word[i].toUpperCase()
        }else {
            x=x+word[i]
        }
    }
    return x
}

console.log(capitalizeWord('word'))*/






























/*
function whoIsPaying(name){
   let res = []
    res.push(name)
    if(name.length>2){
        let x = name.substring(0,2)
        res.push(x)
    }
    return res
}


console.log(whoIsPaying("Mexico"))
console.log(whoIsPaying("Melania"))
console.log(whoIsPaying("Me"))
console.log(whoIsPaying(""))*/























/*
Для этой задачи вы должны создать программу, которая говорит, кто съел последнее печенье. Если ввод представляет собой строку, то «Зак» съел печенье. Если ввод представляет собой число с плавающей запятой или целое число, то «Моника» съела куки. Если на входе что-то еще, «собака» съела печенье. Способ возврата заявления: «Кто съел последнее печенье? Это было (имя)!»

Пример: Ввод = "привет" --> Вывод = "Кто съел последнее печенье? Это был Зак! (Причина, по которой вы возвращаете Зака, заключается в том, что ввод представляет собой строку)

Примечание. Убедитесь, что вы возвращаете правильное сообщение с правильными пробелами и пунктуацией.*/



/*function cookie(x){
    if (typeof x === 'string'){
        return 'Who ate the last cookie? It was Zach!'
    }else if (typeof x === 'number'){
        return 'Who ate the last cookie? It was Monica!'
    }else {
        return ('Who ate the last cookie? It was the dog!')
    }
}

console.log(cookie('uioiu'))
console.log(cookie(20))
console.log(cookie(1.54))
console.log(cookie(true))*/































/*Цель этого ката — выяснить, сколько бутылок виски из беспошлинной торговли вам придется купить, чтобы экономия по сравнению с обычной ценой на дорогих магазинах эффективно покрыла стоимость вашего отпуска.

    Вам будет предоставлена ​​розничная цена (normPrice, в £ (фунтах)), скидка беспошлинной торговли (скидка, в процентах) и стоимость отпуска (в £).

Например, если бутылка обычно стоит 10 фунтов стерлингов, а скидка в магазине беспошлинной торговли составляет 10%, вы сэкономите 1 фунт стерлингов за бутылку. Если ваш отпуск будет стоить 500 фунтов стерлингов, вам придется купить 500 бутылок, чтобы сэкономить 500 фунтов стерлингов, поэтому ответ, который вы вернете, должен быть 500.

Другой пример: если бутылка обычно стоит 12 фунтов стерлингов, а скидка в магазине беспошлинной торговли составляет 50%, вы сэкономите 6 фунтов стерлингов за бутылку. Если ваш отпуск будет стоить 1000 фунтов стерлингов, вам придется купить 166,66 бутылок, чтобы сэкономить 1000 фунтов стерлингов, поэтому ваш ответ должен быть 166 бутылок.

    Все входные данные будут целыми. Пожалуйста, верните целое число. Округлить вниз.*/



/*normPrice-цена    discount-скидка в процентах    hol-отпуск*/

/*function dutyFree(normPrice, discount, hol){
let z = normPrice*discount/100
    return Math.floor(hol/z)
}

console.log(dutyFree(12, 50, 1000))
console.log(dutyFree(17, 10, 500))
console.log(dutyFree(24, 35, 3000))*/
























/*
Вам даны длина и ширина четырехугольника. Многоугольник может быть прямоугольным или квадратным.
    Если это квадрат, вернуть его площадь. Если это прямоугольник, верните его периметр.

Пример (Ввод1, Ввод2 --> Выход):

6, 10 --> 32
3, 3 --> 9*/



/*const areaOrPerimeter = function(l , w) {
    if(l===w){return l*w}
    else {return l*2+w*2}
};



console.log(areaOrPerimeter(3,  3))
console.log(areaOrPerimeter(6,  10))*/





















/*Создайте функцию, которая принимает строку и один символ и возвращает целое число, соответствующее количеству вхождений второго аргумента в первом.

    Если вхождений не найдено, должно быть возвращено число */0.


/*
function strCount(str, letter){
    let res = str.toLowerCase().split('')
    let z = letter.toLowerCase()
    let q = 0
    for(let i=0;i<res.length;i++){
        if(res[i]===z){q=q+1}
    }
    return q
}*/

























/*
Боб работает водителем автобуса. Тем не менее, он стал чрезвычайно популярен среди жителей города. С таким количеством пассажиров, желающих сесть в его автобус, ему иногда приходится сталкиваться с проблемой нехватки места в автобусе! Он хочет, чтобы вы написали простую программу, сообщающую ему, сможет ли он разместить всех пассажиров.

    Обзор задачи:
    Вам нужно написать функцию, которая принимает три параметра:

    cap — это количество человек, которое может вместить автобус, не считая водителя.
    on - количество людей в автобусе, не считая водителя.
    ожидание - это количество людей, ожидающих посадки в автобус, исключая водителя.
    Если места достаточно, вернуть 0, а если нет, вернуть количество пассажиров, которых он не может взять.*/

/*
function enough(cap, on, wait) {
   let x = cap-on
    if(wait<=x) {return 0}
    else {return wait - x}
}


console.log(enough(10,5,5))
console.log(enough(100, 60, 50))
console.log(enough(20, 5, 5))*/



























/*Получив букву, верните ее положение в алфавите.

Ввод :: "а"

Вывод :: "Позиция алфавита: 1"*/


/*

function position(letter){
if(letter==='a'){return 'Position of alphabet: 1' }
if(letter==='b'){return 'Position of alphabet: 2'}
if(letter==='c'){return 'Position of alphabet: 3'}
if(letter==='d'){return 'Position of alphabet: 4'}
if(letter==='e'){return 'Position of alphabet: 5'}
if(letter==='f'){return 'Position of alphabet: 6'}
if(letter==='g'){return 'Position of alphabet: 7'}
if(letter==='h'){return 'Position of alphabet: 8'}
if(letter==='i'){return 'Position of alphabet: 9'}
if(letter==='j'){return 'Position of alphabet: 10'}
if(letter==='k'){return 'Position of alphabet: 11'}
if(letter==='l'){return 'Position of alphabet: 12'}
if(letter==='m'){return 'Position of alphabet: 13'}
if(letter==='n'){return 'Position of alphabet: 14'}
if(letter==='o'){return 'Position of alphabet: 15'}
if(letter==='p'){return 'Position of alphabet: 16'}
if(letter==='q'){return 'Position of alphabet: 17'}
if(letter==='r'){return 'Position of alphabet: 18'}
if(letter==='s'){return 'Position of alphabet: 19'}
if(letter==='t'){return 'Position of alphabet: 20'}
if(letter==='u'){return 'Position of alphabet: 21'}
if(letter==='v'){return 'Position of alphabet: 22'}
if(letter==='w'){return 'Position of alphabet: 23'}
if(letter==='x'){return 'Position of alphabet: 24'}
if(letter==='y'){return 'Position of alphabet: 25'}
if(letter==='z'){return 'Position of alphabet: 26'}
}*/


























/*Есть предложение «3 по цене 2» (или «2+1», если хотите) на манго. Для данного количества и цены (за манго) рассчитайте общую стоимость манго.*/






/*
    function mango(quantity, price){

let a = Math.floor(quantity/3)
        let x = quantity - a*3
        let res = a*2 +x
return  res*price
}


console.log(mango(3, 3))
console.log(mango(10, 5))*/















/*Напишите функцию, которая разбивает строку и преобразует ее в массив слов.*/




/*function stringToArray(string){

  return string.split(' ')

}

console.log(stringToArray("I love arrays they are my favorite"))*/


















/*Числа, заканчивающиеся нулями, скучны.

    Они могут быть забавными в вашем мире, но не здесь.

    Избавься от них. Только конечные.

1450 -> 145
960000 -> 96
1050 -> 105
-1050 -> -105
Один только ноль в порядке, не беспокойтесь об этом. Бедный парень в любом случае*/

/*
function noBoringZeros(n) {
    let x = String(n).split('').reverse()
    let res=[]
    for (let i= 0; i<x.length;i++){
        if(x[i]!=='0'||res.length){res.push(x[i])}
    }
   return +(res.reverse().join(''))
}


console.log(noBoringZeros(14050))*/















/*Создайте функцию, которая будет возвращать строку, объединяющую все буквы трех введенных строк в группы. Взяв первую букву всех входных данных и сгруппировав их рядом друг с другом. Сделайте это для каждой буквы, см. пример ниже!

    Например. Ввод: "aa", "bb", "cc" => Вывод: "abcabc"

Примечание. Можно ожидать, что все входные данные будут одинаковой длины.*/




/*function tripleTrouble(one, two, three){
    let x = one.length
    let result = ''
    for (let i=0;i<x;i++){
        let sum = one[i]+two[i]+three[i]
        result=result+sum
    }
    return result
}


console.log(tripleTrouble("aaa","bbb","ccc"))*/



/*Герой направляется в замок, чтобы выполнить свою миссию. Однако ему сказали, что замок окружен парочкой могущественных драконов! каждому дракону требуется 2 пули, чтобы быть побежденным, наш герой понятия не имеет, сколько пуль он должен нести.. Предполагая, что он собирается схватить определенное количество пуль и двигаться вперед, чтобы сразиться с другим заданным количеством драконов, выживет ли он?

    Верните true, если да, иначе false :)


function hero(bullets, dragons){

    if(bullets/2>=dragons) {return true}
    else {return false}
}*/













/*Учитывая строку цифр, вы должны заменить любую цифру ниже 5 на «0», а любую цифру 5 и выше на «1». Верните полученную строку.

    Примечание: ввод никогда не будет пустой строкой*/

/*function fakeBin(x){
return x.split('').map(e=>+e).map(e=>e<5?0:1).join('')
}

console.log(fakeBin('4538'))*/

/*Дети пьют тодди.
    Подростки пьют колу.
    Молодые люди пьют пиво.
    Взрослые пьют виски.
    Сделайте функцию, которая получает возраст и возвращает то, что они пьют.

    Правила:

Дети до 14 лет.
    Подростки до 18 лет.
    Молодые до 21 года.
    У взрослых 21 и более.*/

/*
function peopleWithAgeDrink(old) {
    if(old<14){return "drink toddy"}
    if(old>=14&&old<18){return 'drink coke'}
    if(old>=18&&old<21){return 'drink beer'}
    if(old>=21){return 'drink whisky'}

};*/


const students = [
    {
        name: "Bob",
        age: 22,
        isMarried: true,
        scores: 85
    },
    {
        name: "Alex",
        age: 21,
        isMarried: true,
        scores: 90,
    },
    {
        name: "Nick",
        age: 20,
        isMarried: false,
        scores: 120
    },
    {
        name: "John",
        age: 19,
        isMarried: false,
        scores: 100
    },
    {
        name: "Helen",
        age: 28,
        isMarried: false,
        scores: 110
    },
    {
        name: "Ann",
        age: 26,
        isMarried: false,
        scores: 105
    },
];
console.log(students)


/*function findAverage(array) {

    let x = array.length
if(array.length>0){
    return array.reduce((ac,el)=>ac+el)/x
} else {return 0}

}

console.log(findAverage([1,2,3]))*/


//////////////////////////////////////////////////////
/* ... вывести в кансоль один весь елемент-обьект, с самым старшим студентом */


//////////////////////////////////////////////////////
/* сумма баллов всех студентов*/


////////////////////////////////////////////////////////////////
/*всем добавить но 10 баллов, способом редусер этот пример не надо решать-*/


////////////////////////////////////////////////////
/*ОБЯЗАТЕЛЬНО К ПОВТОРУ
cделать большой обьект, из каждого малого обьекта достать свойство  name: "Ann"
и сделать ключи "Ann" для малого обьекта... это упростит поиск обьектов по ключам---
    ----это задача для реальной работы*/





///////////////////////////////////////////////////////
/*вернуть обьект в котором ключи это цивры
а значения- колличество повторений этих цифр в массиве*/
/*const arr = [1, 2, 3, 4, 1, 3, 7, 2, 2, 2, 3]

const x = arr.reduce((obj, r) => {
    obj[r] = (obj[r] | 0) + 1
    return obj
}, {})
console.log(x)*/
//////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////



/*const user = {
    name: "Bob",
    age: 23,
    friends: ["Alex", "Nick", "John"]
}*/

/*то для тренировки маленький обьект...по нем вопросы далее будут*/

///////////////////////////////////////////////////////

//2. Полная (глубокая) копия объекта user


//Проверка:

/*console.log(user===deepCopyUser)
console.log(user.friends===deepCopyUser.friends)*/


//3. Поверхностная копия массива students

//Проверка:

/*console.log(a===students)
console.log(a[0]===students[0])*/


//4*. Полная (глубокая) копия массива students (map)


//Проверка:
/*console.log(a===students)
 console.log(a[0]===students[0])
 console.log(a[0].age===students[0].age)*/


// NB!!! Далее все преобразования выполняем не модифицируя исходный массив students
// Вывод результатов - в консоль

//5. Отсортируйте копию массива deepCopyStudents по алфавиту (sort)




//5a. Отсортируйте deepCopyStudents по успеваемости(лучший идёт первым)(sort)


//6. Сформируйте массив студентов, у которых 100 и более баллов (filter)


/////////////////////////////////////////
/*циклом for in вывести все имена из обьектов*/


//6a. Получите в отдельный  массив... ("вырежьте") из массива трёх лучших студентов  deepCopyStudents (splice)
//https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Array/splice


/*6в.
написать сортировку пузырьком*/
/*let a=[22,874,3,1,5,3,33,2,9]*/

//7. Сформируйте массив холостых студентов


//8. Сформируйте массив имён студентов


//8a. Сформируйте строку из имён студентов, разделённых
// - пробелом
// - запятой


//9. Добавьте всем студентам свойство "isStudent" со значением true


//10. Nick женился. Выполните соответствующие преобразование массива students


//11. Найдите студента(вывести один обьект) по имени Ann


//12. Найдите студента с самым высоким баллом


//13. Найдите сумму баллов всех студентов


// И поднимаем руку!!!!


// 14. Д.З.:
// Напишите функцию addFriends, которая принимает параметром массив students
// и добавляет в каждому студенту свойство "friends",
// значением которого является массив имён всех остальных студентов из массива students,
// за исключением собственного имени студента. Т.е. в друзьях у Боба Боба быть не должно.




/*ВТОРАЯ ЧАСТЬ посложнее */

//1. Реализуйте функцию, которая принимает параметром подсторку, число повторов и разделитель, а возвращает сторку, состоящую из указанного количества повторов подстроки с использованием разделителя.
// repeatString("yo", 3, " ") => "yo yo yo"
// repeatString("yo", 3, ",") => "yo,yo,yo"


//2. Реализуйте функцию, которая принимает параметром сторку и подстроку, а возвращает true, если строка начинается с указанной подстроки, в противном случае - false. Регистр не учитывается.

// checkStart("Incubator", "inc") => true
// checkStart("Incubator", "yo") => false




//3. Реализуйте функцию, которая принимает параметром строку и число (количество символов), а возвращает строку из параметров, обрезанную до указанного количества символов и завершает её многоточием.
//truncateString("Всем студентам инкубатора желаю удачи!", 10) => "Всем студе..."




//4. Реализуйте функцию, которая принимает параметром сторку (предложение) и возвращает самое короткое слово в предложении, если в параметрах пустая строка, то возвращает null.
// getMinLengthWord("Всем студентам инкубатора желаю удачи !") => "Всем"
// getMinLengthWord("") => null
// split()





//5. Реализуйте функцию, которая принимает параметром сторку (предложение) и возвращает то же предложение, где все слова написаны строчными, но начинаются с заглавных букв.
// setUpperCase("всем стУдентам инкуБатора Желаю удачИ!") => "Всем Студентам Инкубатора Желаю Удачи!"




//6. Реализуйте функцию, котрая принимает параметрами две строки. Если все символы второй строки содержаться в первой - возвращает true, если нет - возвращает fasle. Проверка проводится без учёта регистра.
// isIncludes("Incubator", "Cut") => true
// isIncludes("Incubator", "table") => false



/*ГЛУБОКОЕ КОПИРОВАНИЕ*/

// 3. Object inside an object
/*let man = {
    name: 'John',
    age: 28,
    mother: {
        name: 'Kate',
        age: 50
    }
};*/


// 4. Array of primitives inside an object

/*let man = {
    name: 'John',
    age: 28,
    friends: ["Peter", "Steven", "William"]
};*/



// 5 Array of objects

/*let man = [
    {name: "Peter", age: 30},
    {name: "Steven", age: 32},
    {name: "William", age: 28}
];*/


// 6 Array of objects inside object

/*let man = {
    name: 'John',
    age: 28,
    friends: [
        {name: "Peter", age: 30},
        {name: "Steven", age: 32},
        {name: "William", age: 28}
    ]
};*/




// 7 Object inside an object, inside an object


/*let man = {
    name: 'John',
    age: 28,
    mother: {
        name: "Kate",
        age: 50,
        work: {
            position: "doctor",
            experience: 15
        }
    }
};*/


// 8 Array of objects inside object -> object

/*let man = {
    name: 'John',
    age: 28,
    mother: {
        name: "Kate",
        age: 50,
        work: {
            position: "doctor",
            experience: 15
        },
        parents: [
            {name: "Kevin", age: 80},
            {name: "Jennifer", age: 78},
        ]
    }
};*/



// 9 Object inside an object -> array -> object ->  object

/*let man = {
    name: 'John',
    age: 28,
    mother: {
        name: "Kate",
        age: 50,
        work: {
            position: "doctor",
            experience: 15
        },
        parents: [
            {
                name: "Kevin",
                age: 80,
                favoriteDish: {
                    title: "borscht"
                }
            },
            {
                name: "Jennifer",
                age: 78,
                favoriteDish: {
                    title: "sushi"
                }
            },
        ]
    }
};*/






//10 Array of objects inside an object -> object -> array -> object ->  object

/*
let man = {
    name: 'John',
    age: 28,
    mother: {
        name: "Kate",
        age: 50,
        work: {
            position: "doctor",
            experience: 15
        },
        parents: [
            {
                name: "Kevin",
                age: 80,
                favoriteDish: {
                    title: "borscht",
                    ingredients: [
                        {title: "beet", amount: 3},
                        {title: "potatoes", amount: 5},
                        {title: "carrot", amount: 1},
                    ]
                }
            },
            {
                name: "Jennifer",
                age: 78,
                favoriteDish: {
                    title: "sushi",
                    ingredients: [
                        {title: "fish", amount: 1},
                        {title: "rise", amount: 0.5}
                    ]
                }
            },
        ]
    }
};*/









/*let a = {...man,mother:{...man.mother,parents:man.mother.parents.map(e=>({...e,favoriteDish:{...e.favoriteDish,ingredients:e.favoriteDish.ingredients.map(el=>({...el}))}}))}}
a.mother.parents[0].favoriteDish.ingredients[0].title='jlkalkjalkjfalkjsfdsfh'
console.log(man)
console.log(a)*/







