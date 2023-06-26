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

JsCodewars
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







