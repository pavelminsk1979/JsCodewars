



function maxProduct(a) {
let z = a.reduce((acc,el)=>acc>el?acc:el)
    let index= a.indexOf(z)
     a.splice(index,1)
    let nn= a.reduce((acc,el)=>acc>el?acc:el)
    return z*nn
}

console.log(maxProduct([56, 335, 195, 443, 6, 494, 252]))

















/*

const sumSquareEvenRootOdd = ns => {
let a =[]
    for (let i=0;i<ns.length;i++){
        if(ns[i]%2===0){
            a.push(ns[i]*ns[i])
        }else { a.push(Math.sqrt(ns[i]))}
    }
    let res = a.reduce((ac,el)=>ac+el).toFixed(2)
    return +res
};

console.log(sumSquareEvenRootOdd([4,5,7,8,1,2,3,0]))



*/
























/*
var number=function(array){
  let res = []
    for (let i=0;i<array.length;i++){
       res.push  (String(i+1)+':'+' '+ array[i])
    }
    return res
}


console.log(number(["a", "b", "c"]))
console.log(number([]))
*/















/*

function secondSymbol(s, symbol) {
   let a = s.indexOf(symbol)
    if(a===-1){return a}else {
        return s.indexOf(symbol,a+1)
    }
}

console.log(secondSymbol('Hello world!!!', 'o'))
console.log(secondSymbol('Hello world!!!', 'A'))


*/










/*

function alternateCase(s) {

   return  s.split('').map(e=>e===e.toUpperCase()?e.toLowerCase():e.toUpperCase()).join('')

}


console.log(alternateCase('Hello Word'))




*/
















/*

function killer(suspectInfo, dead) {
   for(let key in suspectInfo){
       let a= suspectInfo[key]
       let res = []
       for(let i=0;i<dead.length;i++){
         res.push(  a.find(e=>e===dead[i]))
       }
       if( dead.sort().join('')=== res.sort().join('')){
           return key
       }
   }
}

console.log(killer({'James': ['Jacob', 'Bill', 'Lucas'], 'Johnny': ['David', 'Kyle', 'Lucas'], 'Peter': ['Lucy', 'Kyle']}, ['Lucas', 'Bill']))

*/

















/*

function sortArray(a1, a2) {
let a= a1.map(e=>e.slice(0,1))
    let res = []
    for(let i=0;i<a.length;i++){
       res.push( a2.find(e=>e[0]===a[i]))
    }
    return res
}

console.log(sortArray(['giraffe', 'orangutan', 'impala', 'elephant', 'rhino'],['rattlesnake', 'eagle', 'geko', 'iguana', 'octopus']))


*/
















/*

function accum(s) {
    let a= s.split('')
    let res =[]
    for(let i=0;i<a.length;i++){

       let simvol= a[i].toLowerCase()
        let simvolUp=a[i].toUpperCase()
        let bb= i+1
        let uu= Array(bb).fill(simvol)
       res.push(uu.fill(simvolUp,0,1).join(''))
    }
    return res.join('-')
}

console.log(accum("ZpglnRxqenU"))
console.log(accum("cwAt"))
*/

















/*
function sortByArea(array) {
    let a = []
    for (let i = 0; i < array.length; i++) {
        if (Number.isFinite(array[i])) {
            a.push(3.14 * (array[i] * array[i]))
        } else {
            a.push(array[i][0] * array[i][1])
        }
    }
    let obj={}
    for(let j=0;j<array.length;j++){
       obj[a[j]]=array[j]
    }

    let xx= a.sort((a,b)=>a-b)
    let result =[]
    for(let n=0;n<xx.length;n++){
        result.push(obj[xx[n]])
    }
    return result
}

console.log(sortByArea([[4.23, 6.43], 1.23, 3.444, [1.342, 3.212]]))
console.log(sortByArea([[2, 5], 6]))

*/

/*

Array.prototype.sum = function() {
    let a= this
    if(a.length){
        return a.reduce((ac,el)=>ac+el)
    } else{return 0}


}

console.log([-2,-1,-5].sum())
console.log([].sum())
Array.range = function(start, count) {
    let a = []
    for(let i=start;i<start+count;i++){
        a.push(i)
    }
    return a
}


console.log(Array.range(-2,5))


*/


/*
function tapCodeTranslation(text) {
    let a = text.split(' ')
    let res = []
    for (let i = 0; i < a.length; i++) {
        res.push(String(a[i].length))
    }
    let bb = []
    for (let j = 0; j < a.length; j++) {
        if (res[0]) {
            bb.push(res[0] + res[1])
            res.shift()
            res.shift()
        }
    }
    let nnn = {
        11: 'a',
        12: 'b',
        13: 'k',
        14: 'd',
        15: 'e',
        21: 'f',
        22: 'g',
        23: 'h',
        24: 'i',
        25: 'j',
        31: 'l',
        32: 'm',
        33: 'n',
        34: 'o',
        35: 'p',
        41: 'q',
        42: 'r',
        43: 's',
        44: 't',
        45: 'u',
        51: 'v',
        52: 'w',
        53: 'x',
        54: 'y',
        55: 'z',
    }

    let result = []
    for (let q = 0; q < bb.length; q++) {
        result.push(nnn[bb[q]])
    }

    return `Text: "${result.join('')}" `
    }


console.log(tapCodeTranslation('.... .... . ..... .... ... .... ....'))

*/


/*


function findArray(arr1, arr2){
  let arr = []
    for(let i=0; i<arr2.length;i++){
        /!* return arr1[arr2[i]]*!/
        if(arr1.length>arr2[i]){arr.push(arr1[arr2[i]])}

    }

    return arr
}

console.log(findArray(['a', 'a', 'a', 'a', 'a'], [2, 4]))
console.log(findArray([1,2], [3]))
console.log(findArray([], []))
console.log(findArray([0, 1, 5, 2, 1, 8, 9, 1, 5], [1, 4, 7]))



*/


/*

function XO(str) {
   let a = str.toLowerCase().split('')
    let xx=[]
    let oo =[]
    for(let i=0;i<a.length;i++){
        if(a[i]==='x'){xx.push('1')}if(a[i]==='o'){oo.push('1')}
    }
    return xx.length===oo.length
}

console.log(XO('xo'))
console.log(XO('xxOo'))
console.log(XO('xxxm'))


*/


/*


function isAnagram(test, original){

let a= test.toLowerCase().split('').sort().join('')
    let b= original.toLowerCase().split('').sort().join('')
    return a===b
};


console.log(isAnagram("ound", "round"))
console.log(isAnagram("foefet", "toffee"))


*/


/*function openOrSenior(data){
    let res = []
   for(let i=0;i<data.length;i++){
      if(  data[i][0]>=55&&data[i][1]>7){
          res.push('Senior')
      }else {res.push('Open')}
   }
   return res
}

console.log(openOrSenior([[45, 12],[55,21],[19, -2],[104, 20]]))*/


/*

function solve(compasses, gears, tablets) {
 /!*  let a = 0
    if(compasses>0&&gears>0&&tablets>0){
        a=7
    }*!/
    let k=0
    if(compasses<gears){k=compasses}else {k=gears}
    let res=0
    if(k<tablets){res=k}else {res=tablets}
    let num= 0
    if(res===0){num=0}else{num=7*res}
   let b = compasses*compasses+gears*gears+tablets*tablets
    return num+b
}

console.log(solve(0,0,0))
console.log(solve(1,1,1))
console.log(solve(2,1,1))
console.log(solve(7,2,2))




*/


/*

11

/!*function validatePIN (pin) {
let a=pin.split('')
    let x=[]
    for (let i=0;i<a.length;i++){
        if(a[i]!=='-'){x.push(a[i])}
    }
let n=x.join('')

     if (n.includes('.')){return false} else if(isNaN(+n)){return false} else if (pin.length===4||pin.length===6||n.length===6||n.length===4){return true}else {return false}
}*!/


function validatePIN (pin) {
    let x=''
    if(pin.length===4||pin.length===6) {x=pin}
    let a= x.split('')
    let y=[]
    for (let i=0;i<a.length;i++){
        if(a[i]==='0'||a[i]==='1'||a[i]==='2'||a[i]==='3'||a[i]==='4'||a[i]==='5'||a[i]==='6'||a[i]==='7'||a[i]==='8'||a[i]==='9'){y.push(true)} else { y.push(false)}
    }
    return y.length>0&&y.every(e=>e)
/!*    let a=pin.split('')
    let x=[]
    for (let i=0;i<a.length;i++){
        if(a[i]!=='-'){x.push(a[i])}
    }
    let n=x.join('')

    if (n.includes('.')){return false} else if(isNaN(+n)){return false} else if (pin.length===4||pin.length===6||n.length===6||n.length===4){return true}else {return false}*!/
}

console.log(validatePIN('-12345'))
console.log(validatePIN('-1234'))
console.log(validatePIN('-1.234'))
console.log(validatePIN('.234'))
console.log(validatePIN('2223'))
console.log(validatePIN('333'))
console.log(validatePIN('555555'))
console.log(validatePIN('dg55'))


*/


/*

function switcheroo(x){
 let z=x.split('')
    let res=[]
    for (let i=0;i<z.length;i++){
        if(z[i]==='a'){
            res.push('b')
        }if(z[i]==='b'){res.push('a')}
        if(z[i]==='c'){res.push('c')}
    }
    return res.join('')
}


console.log(switcheroo('abc'))
console.log(switcheroo('aabb'))
console.log(switcheroo('aaabcccbaaa'))


*/


/*

function catMouse(x){
let b= x.split('')
    let res=[]
    for(let i=0;i<5;i++){
        if(b[i]==="m"){ res.push(true)}else {res.push(false)}

    }
     if(res.some(e=>e)){return 'Caught!'} else {return 'Escaped!'}
}


console.log(catMouse('C...m'))
console.log(catMouse('C..m'))
console.log(catMouse('C.....m'))


*/


/*
function cupVolume(d1, d2, height){
    const r1=d1/2
    const r2=d2/2
    const h=height
    const p= 3.14159
    let res= (1/3)*p*h*(r1*r1+r1*r2+r2*r2)
    return Math.round(res * 100) / 100;

}

console.log(cupVolume(10,8,10))
console.log(cupVolume(1000,1000,1000))
console.log(cupVolume(13.123, 123.12, 1))

*/


/*



function wheresWally(string){
    let x=  string.split(' ')
    let ind= string.indexOf('Wally' )
 let oooo= x.map(el => el.slice(0,5))
    let res=[]

    for ( let i=0;i<oooo.length;i++){
        if(oooo[i]==='Wally'){
            res.push(true)

        }else { res.push(false)}
    }



    if(res.some(e=>e===true)){return ind}else{
       return -1}
    }





console.log(wheresWally('Hi Wally.'))
console.log(wheresWally("Where's Wally"))
console.log(wheresWally('DWally'))
console.log(wheresWally('.Wally'))
console.log(wheresWally('Wally'))
console.log(wheresWally('Hi Wally'))



*/


/*


function tacofy(word) {
  let x = {
      t: 'tomato',
      l :'lettuce',
      c: 'cheese',
      g: 'guacamole',
      s: 'salsa',
      a:'beef',
      e:'beef',
      i:'beef',
      o:'beef',
      u:'beef',
  }
let y= word.split('')
    let res=['shell']
    for(let i=0;i<y.length;i++){
        if(x[y[i].toLowerCase()]){
            res.push(x[y[i].toLowerCase()])
        }

    }
     res.push('shell')
    return res
}

console.log(tacofy(''))
console.log(tacofy('a'))
console.log(tacofy('gg'))
console.log(tacofy('ogmmml'))


*/


/*


function isLeapYear(year) {
   if(year%400===0){return true}
   else if (year%100===0){return false}
   else if(year%4===0){return true}else {return false}
}

console.log(isLeapYear(2020))
console.log(isLeapYear(2000))
console.log(isLeapYear(2015))




*/


/*
function getMean(arr, x, y) {
    if(x<2){return -1}
    if(y<2){return -1}
    if(y>arr.length){return -1}
    if(x>arr.length){return -1}
    let one=0
    for(let i=0;i<x;i++){
        one=one+arr[i]
    }
    let arrRevers= arr.reverse()
    let two = 0
    for(let i=0;i<y;i++){
        two=two+arrRevers[i]
    }
    let averageOne= one/x
    let averageTwo= two/y
    return  (averageOne+averageTwo)/2

}


console.log(getMean([1,3,2,4],2,3))
console.log(getMean([1,3,2],2,2))
console.log(getMean([1,3,2,4],1,2))*/


/*function totalAmountVisible(topNum, numOfSides){
    let a= numOfSides/2
    let x=numOfSides+1
   let z= a*x
    let bbb= x-topNum
    return z-bbb

}


console.log(totalAmountVisible(3,6))
console.log(totalAmountVisible(3,8))
console.log(totalAmountVisible(1,12))*/


/*


function vampireTest(a, b) {
   let multiplyArr= String(a*b).split('')
    let mun=(String(a)+String(b)).split('')

 for(let i=0;i<mun.length;i++){
     for (let j=0;j<mun.length;j++){
        if(mun[j]>mun[j+1]){
            let storage= mun[j]
            mun[j]=mun[j+1]
            mun[j+1]=storage
        }
     }

 }
    for(let i=0;i<multiplyArr.length;i++){
        for (let j=0;j<multiplyArr.length;j++){
            if(multiplyArr[j]>multiplyArr[j+1]){
                let storage= multiplyArr[j]
                multiplyArr[j]=multiplyArr[j+1]
                multiplyArr[j+1]=storage
            }
        }

    }
    let res=[]
    for(let n=0;n<mun.length;n++){
        if(mun[n]===multiplyArr[n]){
            res.push(true)
        }else {res.push(false)}
    }
    return res.every(e=>e===true)
}

console.log(vampireTest(21,6))
console.log(vampireTest(204,615))
console.log(vampireTest(10,11))
*/


/*
/!*
0 = sıfır
1 = bir
2 = iki
3 = üç
4 = dört
5 = beş
6 = altı
7 = yedi
8 = sekiz
9 = dokuz

10 = on
20 = yirmi
30 = otuz
40 = kırk
50 = elli
60 = altmış
70 = yetmiş
80 = seksen
90 = doksan*!/


const getTurkishNumber = (num) => {
    let a ={0 : 'sıfır',
        1 : 'bir',
        2 : 'iki',
        3 : 'üç',
        4 : 'dört',
        5 : 'beş',
        6 : 'altı',
        7 : 'yedi',
        8 : 'sekiz',
        9 : 'dokuz',}
    let aaa={10 :'on',
        20 :'yirmi',
        30 :'otuz',
        40 :'kırk',
        50 :'elli',
        60 :'altmış',
        70 :'yetmiş',
        80 :'seksen',
        90 :'doksan'}
if(num<10) {return a[num]}
else {let x= String(num)[0]*10
    let y = String(num)[1]
    if(+y===0){return aaa[+x] } else {
return aaa[+x]+' '+a[y]}}
}


console.log(getTurkishNumber(0))
console.log(getTurkishNumber(16))
console.log(getTurkishNumber(70))
console.log(getTurkishNumber(80))


*/


/*

function convertToMixedNumeral(parm){
   let x =  parm.split('/')
    let z= x[0]/x[1]
    let g = x[0]-Math.floor(z)*x[1]
    if(z%1===0){return String(z)} else {
        return `${Math.floor(z)} ${g} /${x[1]}`
    }
}


console.log(convertToMixedNumeral('6/2'))
console.log(convertToMixedNumeral('74/3'))
console.log(convertToMixedNumeral('9/18'))



*/


/*

function divisors(integer) {
let res=[]
    for (let i=2;i<integer;i++){
        if( integer/i%1===0){
            res.push(i)
        }
    }
    if(res.length===0){return `${integer}
    is
    prime`}
    else {return res}
};

console.log(divisors(15))
console.log(divisors(12))
console.log(divisors(13))

*/


/*

function center (strng, width, fill = ' ')  {
   if(strng.length>=width){return strng} else if (strng.length===0){
       return fill.repeat(+width)
   }
   else {
       let num = width-strng.length
       let z= num/2
        if(z%1===0){return fill.repeat(z)+strng+fill.repeat(z)}
     else{return fill.repeat(z+1)+strng+fill.repeat(z)}

   }
}


console.log(center("a", 3, ' '))
console.log(center("abcdefg", 2, ' '))
console.log(center("abc", 10, '_'))
console.log(center("", 3, '_'))
*/


/*

function battle(x, y) {
    let data = {
        A:1,
        B:2,
        C:3,
        D:4,
        E:5,
        F:6,
        G:7,
        H:8,
        I:9,
        J:10,
        K:11,
        L:12,
        M:13,
        N:14,
        O:15,
        P:16,
        Q:17,
        R:18,
        S:19,
        T:20,
        U:21,
        V:22,
        W:23,
        X:24,
        Y:25,
        Z:26
    }
    let arr= x.split('')
    let numX=0
    for (let i=0;i<arr.length;i++){
        numX=numX+data[arr[i]]
    }
    let arrY= y.split('')
    let numY=0
    for (let i=0;i<arrY.length;i++){
        numY=numY+data[arrY[i]]
    }
    if(numX===numY){return "Tie!"}
    if(numX>numY){return x}
    if(numX<numY){return y}
}


console.log(battle("AAA", "Z"))
console.log(battle("ONE", "TWO"))
console.log(battle("ONE", "NEO"))
*/


/*



function keepOrder(ary, val) {
   let a = ary.concat(val)
    for(let i=0;i<a.length;i++){
        for(let j=0;j<a.length;j++){
            if(a[j]>a[j+1]){
                let draft=a[j]
                a[j]=a[j+1]
                a[j+1]=draft
            }
        }
    }
    return a.indexOf(val)
}

console.log(keepOrder([1, 2, 3, 4, 7], 5))
console.log(keepOrder([1, 2, 3, 4, 7], 0))
console.log(keepOrder([1, 1, 2, 2, 2], 2))


*/


/*function explode(s) {
    let arr= s.split('')
    let res=[]
    for (let i=0;i<arr.length;i++){
         let x = Array( Number(arr[i]))
       res=res.concat( x.fill(arr[i]))

    }
    return res.join('')
}


console.log(explode("312"))
console.log(explode("102269"))
console.log(explode("000"))*/


/*function getMinMax(arr){
    let min= arr.reduce((acc,el)=>acc<el?acc:el)
    let max= arr.reduce((acc,el)=>acc>el?acc:el)
    return [min,max]
};


console.log(getMinMax([1]))
console.log(getMinMax([1,2]))
console.log(getMinMax([2,1]))*/


/*

function tiyFizzBuzz(sentence){
let x = sentence.split('')
    let a= x.map(e=>e==='a'||e==='e'||e==='i'||e==='o'||e==='u'?e='Yard':e)
    let aaa= a.map(e=>e==='A'||e==='E'||e==='I'||e==='O'||e==='U'?e='Iron Yard':e)
    return aaa.map(e=>e==='B'||e==='C'||e==='D'||e==='F'||e==='G'||e==='H'||e==='J'||e==='K'||e==='L'||e==='M'||e==='N'||e==='P'||e==='Q'||e==='R'||e==='S'||e==='T'||e==='V'||e==='W'||e==='X'||e==='Y'||e==='Z'?e='Iron':e).join('')
}


console.log(tiyFizzBuzz('Hello WORLD!'))
console.log(tiyFizzBuzz('a'))
console.log(tiyFizzBuzz('b'))
console.log(tiyFizzBuzz('H'))
console.log(tiyFizzBuzz('A'))
*/


/*



function toLeetSpeak(str) {
    let obj= {
        A : '@',
        B : '8',
        C : '(',
        D : 'D',
        E : '3',
        F : 'F',
        G : '6',
        H : '#',
        I : '!',
        J : 'J',
        K : 'K',
        L : '1',
        M : 'M',
        N : 'N',
        O : '0',
        P : 'P',
        Q : 'Q',
        R : 'R',
        S : '$',
        T : '7',
        U : 'U',
        V : 'V',
        W : 'W',
        X : 'X',
        Y : 'Y',
        Z : '2'
    }
    let z= str.split('')
    let rez=[]
    for (let i=0;i<z.length;i++){
        let bb=z[i]
        if(bb===' '){rez.push(' ')}else {
            rez.push(  obj[bb])
        }

    }
    return rez.join('')
}

console.log(toLeetSpeak("O WORLD"))

console.log(toLeetSpeak("LEET"))
console.log(toLeetSpeak("CODEWARS"))
console.log(toLeetSpeak("HELLO WORLD"))
*/


/*В банкомате имеются купюры номиналом 10, 20, 50, 100, 200 и 500 долларов. Можно считать, что каждой из этих банкнот имеется достаточно большой запас.

    Вам нужно написать функцию банкомата, которая определяет минимальное количество банкнот, необходимое для снятия n долларов, при этом 1 <= n <= 1500.

Верните это число или -1, если это невозможно.

    Удачи!!!*/

/*

function solve(n) {

 if(n%10!==0){return -1}else {
     let res=0
     let arr = [500,200,100,50,20,10]
     for(let i=0;i<arr.length&&n>0;i++){
         if(n>=arr[i]){
            let z=Math.floor( n/arr[i])
             res=res+z
            n=n- z*arr[i]
         }
     }
     return res
 }
}

console.log(solve(770))
console.log(solve(550))
console.log(solve(10))
console.log(solve(1250))
console.log(solve(9))
console.log(solve(666))
console.log(solve(125))
*/


/*function printerError(s) {
let x= s.length

    let z= s.split('')
    let one=[]
    let two=[]
    for(let i=0;i<z.length;i++){
        if(z[i]==='a'||z[i]==='b'||z[i]==='c'||z[i]==='d'||z[i]==='e'||z[i]==='f'||z[i]==='g'||z[i]==='h'||z[i]==='i'||z[i]==='j'||z[i]==='k'||z[i]==='l'||z[i]==='m'){one.push(z[i])} else {two.push(z[i])}
    }
    return `${two.length} /${x}`
}

console.log(printerError("aaabbbbhaijjjm"))
console.log(printerError("aaaxbbbbyyhwawiwjjjwwm"))*/


/*function removeUrlAnchor(url){
  let x =  url.split('')
    let z = x.indexOf('#')
    if(z>0){
        return x.slice(0,z).join('')
    } else { return url}


}

console.log(removeUrlAnchor('www.codewars.com#about'))
console.log(removeUrlAnchor('www.codewars.com/katas/'))*/


/*

function cookPancakes(n, m) {

    if(n<=m){return 2}else {return Math.ceil(n/m*2)}

}

console.log(cookPancakes(1,2))
console.log(cookPancakes(2,2))
console.log(cookPancakes(4,2))


*/


/*function solution(nums){
    if(nums===null){return []}
for(let i =0;i<nums.length;i++){
    for(let j=0;j<nums.length;j++){
        if(nums[j]>nums[j+1]){
            let z=nums[j]
            nums[j]= nums[j+1]
            nums[j+1]=z
        }
    }
}
return nums
}


console.log(solution([1,2,3,10,5]))
console.log(solution(null))
console.log(solution([]))*/


/*function maxDiff(list) {
    if(list.length===1){return 0}else if (list.length === 0){
        return 0;
    } else{
        let max = Math.max(...list);
        let min = Math.min(...list);
        return max-min
    }

};

console.log(maxDiff([0, 1, 2, 3, 4, 5, 6]))
console.log(maxDiff([-0, 1, 2, -3, 4, 5, -6]))
console.log(maxDiff([0, 1, 2, 3, 4, 5, 16]))
console.log(maxDiff([16]))
console.log(maxDiff([]))*/


/*
function quotable(name, quote){


   return `${name}
    said: "${quote}"`
}

console.log(quotable('Grae', 'Practice makes perfect'))
*/


/*


function areaCode(text) {

    let start=text.indexOf('(')
    let finish=text.indexOf(')')
    return text.slice(start+1,finish)

}

console.log(areaCode("The supplier's phone number is (555) 867-5309"))*/


/*
данные = [[2, 5], [3, 4], [8, 7]]
Каждый подсписок содержит два элемента, и каждый элемент в подсписках представляет собой целое число.

    Напишите функциюprocess_data()/processData(), которая обрабатывает каждый подсписок следующим образом:

    [2, 5] --> 2 - 5 --> -3
        [3, 4] --> 3 - 4 --> -1
        [8, 7] --> 8 - 7 --> 1
а затем возвращает произведение всех обработанных подсписков: -3 * -1 * 1 --> 3.*/


/*function processData(data){
    return data.map(e=>e[0]-e[1]).reduce((acc,el) => acc*el )
}


console.log(processData([[2, 5], [3, 4], [8, 7]]))
console.log(processData([[2, 9], [2, 4], [7, 5]]))*/


/*

function boredom(staff){
    let res=[]
    for (let key in staff){
        res.push(staff[key])
    }
    const z = {
        accounts: 1,
        finance: 2,
        canteen: 10,
        regulation: 3,
        trading: 6,
        change: 6,
        IS: 8,
        retail: 5,
        cleaning: 4,
        "pissing about": 25
    };
   let bbb=0
    for(let i=0;i<res.length;i++)
    {bbb=bbb+ z[res[i]]}
    if(bbb<=80){return  'kill me now'}
    if(bbb>80&&bbb<100){return  'i can handle this'}
    if(bbb>=100){return  'party time!'}
    return bbb


}

console.log(boredom({ tim: 'IS', jim: 'finance',
    randy: 'pissing about', sandy: 'cleaning', andy: 'cleaning',
    katie: 'cleaning', laura: 'pissing about', saajid: 'regulation',
    alex: 'regulation', john: 'accounts', mr: 'canteen' }))*/


/*
function triangular( n ) {
    if(n<=0){return 0}
    let arr = []
    for (let i=1; i<=n;i++){
       arr.push(i)
    }
    return arr.reduce((acc,el)=>acc+el)
}
*/
/*function triangular( n ) {
    if(n<=0){return 0}
 let res = n
    for(let i=1; i<=n;i++){
        res=res+(n-i)
    }
    return res
}


console.log(triangular(2))
console.log(triangular(4))
console.log(triangular(-35))
console.log(triangular(25099822))*/


/*triangular(25099822) should equal 315000544765753*/


/*
function getMean(arr, x, y) {
    if(x<2){return -1}
    if(y<2){return -1}
    if(y>arr.length){return -1}
    if(x>arr.length){return -1}
    let one=0
    for(let i=0;i<x;i++){
        one=one+arr[i]
    }
    let arrRevers= arr.reverse()
    let two = 0
    for(let i=0;i<y;i++){
        two=two+arrRevers[i]
    }
    let averageOne= one/x
    let averageTwo= two/y
    return  (averageOne+averageTwo)/2

}


console.log(getMean([1,3,2,4],2,3))
console.log(getMean([1,3,2],2,2))
console.log(getMean([1,3,2,4],1,2))*/


/*
Пример
Для n = 22 выходное значение должно быть 4.

И сумма, и произведение цифр равны 4, а LCM(4, 4) = 4.

Для n = 1234 выходное значение должно быть 120.

1+2+3+4=10 и 1*2*3*4=24, НОК(10,24)=120
НОК  это число наименьшее на которое без остатка поделится
и сумма и произведение */


/*

function a (n) {

return n.split(' ').map(e=>e[0].toUpperCase()+e.slice(1)).join(' ')
}



console.log(a("How can mirrors be real if our eyes aren't real"))
*/


/*function breakChocolate(n,m) {
    if(n>0&&m>0){
        let x =n-1
        let y= n*(m-1)

        return x+y;
    } else {return 0}

}


console.log(breakChocolate(5,5))*/


/*
function disemvowel(str) {

    return str.split('').filter(e=>e!=='i'&&e!=='e'&&e!=='o'&&e!=='a'&&e!=='u'&&e!=='I'&&e!=='E'&&e!=='O'&&e!=='A'&&e!=='U').join('')
}

console.log(disemvowel("This website is for losers LOL!"))
console.log(disemvowel("No offense but,\nYour writing is among the worst I've ever read"))
console.log(disemvowel("What are you, a communist?"))*/


/*Создайте функцию, которая проверяет, делится ли первый аргумент n на все остальные аргументы (возвратите true, если нет других аргументов)*/


/*

function isDivisible(...arr){
    let x = arr[0]
    arr.shift()
    for(let i=0;i<arr.length;i++){
       if(x%arr[i]!==0){return false}
    }
    return true
}

console.log(isDivisible(3,3,4))
console.log(isDivisible(12,3,4))
console.log(isDivisible(8,3,4,2,5))

*/


/*

Понедельник --> 12

Вторник --> числа больше 95

Среда --> 34

Четверг --> 0

Пятница --> числа, делящиеся на 2

Суббота --> 56

Воскресенье --> 666 или -666
*/

/*
var AmIAfraid = function(day, num){
     if(day==='Monday'&&num===12){return true}
    else if(day==='Tuesday'&&num>95){return true}
    else if(day==='Wednesday'&&num===34){return true}
    else if(day==='Thursday'&&num===0){return true}
    else if(day==='Friday'&&num%2===0){return true}
    else if(day==='Saturday'&&num===56){return true}
    else if(day==='Sunday'&&(num===666||num===-666)){return true}
    else {return false}

}
console.log(AmIAfraid("Monday", 13))
console.log(AmIAfraid("Sunday", -666))
console.log(AmIAfraid("Tuesday", 2))
console.log(AmIAfraid("Tuesday", 965))
console.log(AmIAfraid("Friday", 2))*/


/*Вам будет предоставлен список из двух строк, каждая из которых будет содержать ровно одно двоеточие (":") в середине (но не в начале или в конце). Длина строк до и после двоеточия является случайной.

    Ваша задача состоит в том, чтобы вернуть список из двух строк (в том же порядке, что и исходный список), но с заменой символов после каждого двоеточия.*/


/*function tailSwap(arr) {

    let x = arr.map(e=>e.split(':')).flat(Infinity)
    let res = []
     res.push(x[0]+':'+x[3])
    res.push(x[2]+':'+x[1])
    return res
}

console.log(tailSwap(['abc:123', 'cde:456']))
console.log(tailSwap(['a:12345', '777:xyz']))*/


/*Преобразование 12-часового времени, такого как «8:30 утра» или «20:30 вечера», в 24-часовое время (например, «08:30» или «20:30») звучит достаточно просто, не так ли? Что ж, посмотрим, сможешь ли ты это сделать!

    Вам нужно будет определить функцию, которой будет задан час (всегда в диапазоне от 1 до 12 включительно), минута (всегда в диапазоне от 0 до 59 включительно) и период (либо «am», или "pm") в качестве входных данных.

    Ваша задача — вернуть четырехзначную строку, которая кодирует это время в 24-часовом формате.*/

/*
function to24hourtime(hour, minute, period) {
    let res=''
    if(period==='am'&&hour<10){
        if(minute<10){
            res=res+'0'+hour+'0'+minute
        }else{
            res=res+'0'+hour+minute
        }
    }
    if(period==='am'&&hour>=10&&hour<12){
        if(minute<10){
            res=res+hour+'0'+minute
        }else{
            res=res+hour+minute
        }
    }
    if(period==='am'&&hour==12){
        if(minute<10){
            res=res+'0'+'0'+'0'+minute
        }else{
            res=res+'0'+'0'+minute
        }
    }
    if(period==='pm'&&hour<12){
        if(minute<10){
            res = res+(12+hour)+'0'+minute
        }else{
            res = res+(12+hour)+minute
        }

    }
    if(period==='pm'&&hour===12){
        if(minute<10){
            res = res+'12'+'0'+minute
        }else{
            res = res+'12'+minute
        }

    }

    return res;
}

console.log(to24hourtime(1,  0, "am"))
console.log(to24hourtime(1,  0, "pm"))
console.log(to24hourtime(12,  0, "am"))
console.log(to24hourtime(12,  0, "pm"))
console.log(to24hourtime(6,  30, "am"))
console.log(to24hourtime(9,  45, "pm"))
console.log(to24hourtime(10,  47, "am"))*/


/*Ваша задача — написать функцию, которая принимает три целых числа a, b и c в качестве аргументов и возвращает True, если ровно два из трех целых чисел являются положительными числами (больше нуля), и False — в противном случае.*/


/*
function twoArePositive(a, b, c) {
    if(a>0&&b>0&&c<=0)
    {return true}
    else if(a>0&&c>0&&b<=0){return true}
    else if(b>0&&c>0&&a<=0){return true}
    else {return  false}
}

console.log(twoArePositive(2, 4, -3))
console.log(twoArePositive(-4, 6, 8))
console.log(twoArePositive(-4, 6, 0))
console.log(twoArePositive(4, 6, 10))
*/


/*DropCaps означает, что первая буква начального слова абзаца должна быть заглавной, а остальные строчными, как вы видите в газете.

    Но для разнообразия давайте проделаем это для каждого слова заданной строки. Ваша задача состоит в том, чтобы написать каждое слово, длина которого больше 2, с заглавной буквы, оставив меньшие слова такими, какие они есть.*/

/*

function dropCap(n) {
let arr = n.split(' ')
    let res = []
    for(let i=0;i<arr.length;i++){
if(arr[i].length<=2){
    res.push(arr[i])
}else{
    let z = arr[i][0].toUpperCase()
    let c= arr[i].toLowerCase().slice(1)
    res.push(z+c)
}


    }
    return res.join(' ')
}

console.log(dropCap('  leading spaces'))
console.log(dropCap('ALL CAPS CRAZINESS'))
console.log(dropCap('trailing spaces   '))
console.log(dropCap('of'))
*/


/*
Номер перепутан с текстом. Ваша цель — извлечь число из текста, сможете ли вы вернуть число в исходное состояние?

    Задача
    Ваша задача — вернуть число из строки.

    Подробности
Вам будет дана строка из перепутанных цифр и букв, вы должны вернуть все числа в этой строке в том порядке, в котором они встречаются.
*/


/*

var filterString = function(value) {
  return Number(value.split('').map(e=>Number(e)).filter(el=>el||el===0).join(''))
}

console.log(filterString('123'))
console.log(filterString("a1b2c3"))
console.log(filterString("aa1bb2cc3dd"))
*/


/*

Натан любит кататься на велосипеде.

    Поскольку Натан знает, как важно избегать обезвоживания, он выпивает 0,5 литра воды за час езды на велосипеде.

    Вам дается время в часах, и вам нужно вернуть количество литров, которые выпьет Натан, округленное до наименьшего значения.
*/


/*function litres(time) {
    return Math.floor(time*0.5);
}


console.log(litres(2))
console.log(litres(1.4))
console.log(litres(12.3))*/


/*

Напишите функцию, которая возвращает строку, в которой имя заменено на фамилию.
*/


/*function nameShuffler(str){
    let res = str.split(' ')
    let arr = [res[1],res[0]]
 return arr.join(' ')
}

console.log(nameShuffler('john McClane'))*/


/*

Возвращает новый массив, состоящий из элементов, кратных их собственному индексу во входном массиве (длина > 1).
*/


/*function multipleOfIndex(array) {
    let res = []
    for(let i=0;i<array.length;i++){

        if(array[i]===0||array[i]%[i]===0){
            res.push(array[i])
        }
    }
    return res
}


console.log(multipleOfIndex([22, -6, 32, 82, 9, 25]))
console.log(multipleOfIndex([0,2,3,6,9]))
console.log(multipleOfIndex([68, -1, 1, -7, 10, 10]))
console.log(multipleOfIndex([-56,-85,72,-26,-14,76,-27,72,35,-21,-67,87,0,21,59,27,-92,68]))*/


/*
напишите мне функцию stringy, которая принимает размер и возвращает строку из чередующихся «1» и «0».

строка должна начинаться с 1.

строка размером 6 должна возвращать: '101010'.

    с размером 4 должно возвращаться: '1010'.

    с размером 12 должен возвращать: «101010101010».

Размер всегда будет положительным и будет использовать только целые числа.
*/

/*
function stringy(size) {
   let res = ''
    for(let i=1;i<=size;i++){
        if(i%2===0){
            res=res+0
        } else {
            res=res+1
        }

    }
    return res
}*/

/*console.log(stringy(6))
console.log(stringy(4))
console.log(stringy(5))*/


/*
const flip=(d, a)=>{
if(d==='R'){
    return a.sort((a,b)=>a-b)
}  if(d==='L'){return a.sort((a,b)=>a-b).reverse()}

}


console.log(flip('R', [3, 2, 1, 2]))
console.log(flip('L', [1, 4, 5, 3, 5]))*/


/*
Что, если нам нужно, чтобы длина слов, разделенных пробелом, была добавлена ​​в конце того же слова и возвращена в виде массива?

    Пример (ввод --> вывод)

    "яблоко запрет" --> ["яблоко 5", "бан 3"]
"вы выиграете" -->["вы 3", "выиграете 4", "выиграете 3"]
Ваша задача — написать функцию, которая принимает строку и возвращает массив/список с длиной каждого слова, добавленного к каждому элементу.

    Примечание. Строка будет содержать как минимум один элемент; слова всегда будут разделены пробелом.*/


/*function addLength(str) {
let x= str.split(' ')
    let res = []
    for(let i=0;i<x.length;i++){

        let z=x[i]
        let length= z.length
        let p =z+' '+length
        res.push(p)
    }
    return res
}*/


console.log(addLength('you will win'))


/*

function plural(n) {
    if(n===1){return false}
    else {return true}
}

*/


/*
Я новичок в кодировании и теперь хочу получить сумму двух массивов... На самом деле сумму всех их элементов. Я буду признателен за вашу помощь.

    P.S. Каждый массив включает только целые числа. Выход - тоже число.*/


/*function arrayPlusArray(arr1, arr2) {
    const x =  arr1.concat(arr2)
    return x.reduce((ac,el)=>ac+el)
}


console.log(arrayPlusArray([1, 2, 3], [4, 5, 6]))
console.log(arrayPlusArray([-1, -2, -3], [-4, -5, -6]))*/


/*

Создайте функцию, которая возвращает значение, умноженное на 50 и увеличенное на 6. Если введенное значение является строкой, оно должно возвращать «Ошибка».
*/


/*function problem(x){
 if(typeof x ==='number'){
     return x*50+6
 } else {return 'Error'}
}

console.log(problem("hello"))
console.log(problem(1))
console.log(problem(5))*/


/*Ваши одноклассники попросили вас скопировать для них некоторые документы. Вы знаете, что есть «n» одноклассников, а в документах «m» страниц.

    Ваша задача — посчитать, сколько чистых страниц вам нужно. Если n < 0 или m < 0, вернуть 0.*/


/*function paperwork(n, m) {
if(n<0||m<0){return 0}else {return n*m}
}

console.log(paperwork(5,5))
console.log(paperwork(-5,5))
console.log(paperwork(5,-5))*/


/*
Учитывая 2 строки, a и b, верните строку формы короткая + длинная + короткая, с более короткой строкой снаружи и более длинной строкой внутри. Строки не будут одинаковой длины, но могут быть пустыми (нулевой длины).*/


/*
function solution(a, b){
    if(a.length<b.length){
        return a.concat(b).concat(a)
    }else {
        return b.concat(a).concat(b)
    }
}

console.log(solution('45', '1'))
console.log(solution('13', '2000'))
console.log(solution('Soon', 'Me'))*/


/*

Завершите функцию, которая принимает два целых числа (a, b, где a < b), и верните массив всех целых чисел между входными параметрами, включая их.
*/


/*
function between(a, b) {
   if(a<b){
       let res = []
      for (let i=a;i<=b;i++){
          res.push(i)
      }
      return res
   }
}


console.log(between(1,4))
console.log(between(-2,2))
*/


/*

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
*/


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

    Если вхождений не найдено, должно быть возвращено число */
0.


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







