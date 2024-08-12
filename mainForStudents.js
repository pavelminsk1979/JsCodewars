

































/*


function findMissingLetter(array) {
    let flag = true
    if(array[0]===array[0].toLowerCase()){
        flag=false
    }

    const liters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
    const arr = array.join('').toUpperCase().split('')
    let res
    let index
    for (let i = 0; i < arr.length; i++) {

        if(i===0){
           const first = arr[i]
            index = liters.indexOf(first)
        }



        if (arr[i] === liters[i+index]) {
            //debugger
            continue
        } else {
            res = liters[i+index]
            break
        }
    }
    if(flag){return res}else {
        return res.toLowerCase()
    }



}

console.log(findMissingLetter(['O', 'Q', 'R', 'S']))
console.log(findMissingLetter(['a', 'b', 'c', 'd', 'f']))
*/


/*
function bingo(ticket, win) {
    let res = 0
    for (let i = 0; i < ticket.length; i++) {
        const liters = ticket[i][0].split('')
        const numb = ticket[i][1]
        for (let j = 0; j < liters.length; j++) {
            if (liters[j].codePointAt() === numb) {
                res += 1
                break
            }

        }
    }

    if (res >= win) return 'Winner!'
    return 'Loser!'

}


console.log(bingo([['FEZHERA', 70], ['FVWQZIRB', 72], ['MNTRANGQ', 77]], 1))
*/


/*
function solution(str) {
    if (str.length === 0) return []
    const arr = str.split('')
    const result1 = []
    const result2 = []
    for (let i = 0; i < arr.length; i++) {
        if (i % 2 === 0) {
            result1.push(arr[i])
        } else {
            {
                result2.push(arr[i])
            }
        }
    }
   const res = []
    for (let i=0;i<result1.length;i++){
        if(result2[i]){
            res.push(result1[i] + result2[i])
        }else {
            res.push(result1[i] + '_')
        }


    }
    return res
}


console.log(solution("abcdefg"))
console.log(solution(""))
*/


/*

function solution(string) {
    const liters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
    const arr = string.split('')
    const res = []
    for (let i=0;i<arr.length;i++){
        if(liters.includes(arr[i])){


            res.push(' ',arr[i])

        }else {res.push(arr[i])}

    }
    return res.join('')

}

console.log(solution('camelCasingTest'))
console.log(solution(''))


*/


/*

function isPangram(string){
    const a = [ 'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']

    const arrayLiters = string.split('')
for(let i=0;i<arrayLiters.length;i++){

    const liter =  arrayLiters[i].toLowerCase()
    if(a.includes(liter)){
        const index =  a.indexOf(liter)
        a.splice(index,1)

    }
}

if (a.length===0){return true} else {return false}
}


console.log(isPangram('A pangram is a sentence that contains every single letter of the alphabet at least once.'))

*/


/*

function transpose(matrix) {

    const countResultArray = matrix[0].length
    const result =  []
    for(let x =0;x<countResultArray;x++){
        result.push([])
    }

    for(let i=0;i<matrix.length;i++){

        const elem =  matrix[i]
        for(let j=0;j<elem.length;j++){
/!*result[j]---это первый пустой массив  я добавляю в него
    elem[j]   один елемент из масива [1,2,3]*!/
            const vnutrenniAray = result[j]
              vnutrenniAray.push(elem[j])



        }
    }
return result
}


console.log(transpose([[1,2,3],[4,5,6]]))


*/


/*

function persistence(num) {

   if(num<11)return 0



    let iteration = 0

    for(let i=1;i<100000;i++){

        let str =  String(num)
        let arr =   [...str].map(e=>+e)

        let result =    arr.reduce((ac,el)=>ac*el)

        num = result

        iteration=i

        if(result<10) break
    }
return  iteration

}



console.log(persistence(39))
console.log(persistence(4))
console.log(persistence(25))
console.log(persistence(999))

*/


/*
function high(x) {
    const a = [1, 'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']
const resultArray = []
    const arr = x.split(' ')

    for (let i = 0; i < arr.length; i++) {
        const array = [...arr[i]]

        const res = array.reduce((acc,el)=>{
          return  acc+ a.indexOf(el)
        },0)

         resultArray.push(res)
    }
    const max=  Math.max(...resultArray)

    const index =  resultArray.indexOf(max)
    return arr[index]
}


console.log(high('man i need a taxi up to ubud'))
*/


/*function decrypt(encryption) {
    const arr = [...encryption]
    let res = {
        a: 0,
        b: 0,
        c: 0,
        d: 0,
        e: 0,
        f: 0,
        g: 0,
        h: 0,
        i: 0,
        j: 0,
        k: 0,
        l: 0,
        m: 0,
        n: 0,
        o: 0,
        p: 0,
        q: 0,
        r: 0,
        s: 0,
        t: 0,
        u: 0,
        v: 0,
        w: 0,
        x: 0,
        y: 0,
        z: 0
    }
    for (let i = 0; i < arr.length; i++) {
        const big = arr[i].toUpperCase()
        const smile = arr[i].toLowerCase()
        if (big === smile) continue
        if (smile===arr[i]){
            res[smile] += 1
        }

    }
    return Object.values(res).join('')
}


console.log(decrypt('$aaaa#bbb*ccfff!z'))*/


/*function solve(s){
  const ar= [...s]
    const res = {}
    for(let i=0;i<ar.length;i++){
        if(res[ar[i]]){
            res[ar[i]]+=1
        }else {
            res[ar[i]]=1
        }
    }
   const array =  Object.values(res)
    for(let i=0;i<array.length;i++){
       const modificArray = [...array]
        const newAr= modificArray.fill(array[i]-1,i,i+1)
        const newArray=newAr.filter(e=>e!==0)
        const num = newArray[0]
        if(!newArray[1]){return true}
        const isTrue=  newArray.every(e=>e===num)
        if(isTrue){return true}
    }
    return false
};*/


console.log(solve('abbba'))
console.log(solve('aabbccddd'))


/*function beggars(values, n) {
    let take = Array(n).fill(0);

    for (let i = 0; i < values.length; i++)
        take[i % n] += values[i];

    return take;

}


console.log(beggars([1, 2, 3, 4, 5], 3))*/


/*

let a = {
    title:'Pav',
    studen:['Ola','Nata'],
    showList(){
        this.studen.forEach(
            s=>alert(this.title+'...'+s)
        )
    }
}


a.showList()

*/


/*
function onlyDuplicates(str) {

    const a = [...str]
    const res = {}
    for (let i = 0; i < a.length; i++) {

        if (res[a[i]]) {
            const num = res[a[i]]
            const z = num + 1
            res[a[i]] = z

        } else {
            res[a[i]] = 1

        }

    }
    const result = []
    for(let i=0;i<a.length;i++){
        if(res[a[i]]>1){
            result.push(a[i])
        }
    }
    return result.join('')
}


console.log(onlyDuplicates('abccdefee'))
*/


/*
function ranks(a) {
    const b = [...a]
    const sort = b.sort((a, b) => a - b)
    const arr = sort.reverse()
    const obj = {}

    for (let i = 0; i < arr.length; i++) {
        if (obj[arr[i]]) {
            continue
        }

        obj[arr[i]] = i+1
    }
    //return obj
    const res = []
    for (let i = 0; i < a.length; i++) {
        //debugger
        const num = obj[a[i]]
        res.push(num)
    }
    return res
}


console.log(ranks([5, 2, 3, 5, 5, 4, 9, 8, 0]))

*/

/*function gHappy(str) {
    const arr = [...str]

    for (let i = 0; i < arr.length; i++) {
        let x = arr[i]
        if (x !== 'g') {
            continue
        }
        if (i === 0 || i === arr.length - 1) {
            if (i === 0) {
                if (arr[1] !== 'g') {
                    return false
                }
            } else {

                if (arr[arr.length - 2] !== 'g') {
                    return false
                }

            }

        } else {
            if (arr[i - 1] !== 'g' || arr[i + 1] !== 'g') {
                return false
            }
        }


    }
    return true

}*/

/*

function gHappy(str) {
    const arr = [...str]
    const res = []
    for (let i = 0; i < arr.length; i++) {

        if (arr[i] !== 'g') {
            continue
        }
        if (i === 0) {
            if (arr[1] !== 'g') {
                return false
            }
            continue
        }
        if (i !== arr.length - 1) {
            if (arr[i - 1] === 'g' || arr[i + 1] === 'g') {
                res.push(true)
            } else {
                res.push(false)
            }
            continue
        } else {
            if (arr[arr.length - 2] !== 'g') {
                return false
            }
        }

    }
    const a = res.filter(e => !e)
    return a.length > 0 ? false : true

}


console.log(gHappy("gg0gg3gg0gg"))
console.log(gHappy("gog"))
console.log(gHappy("ggg ggg g ggg"))
*/


/*

function inAscOrder(arr) {
    const res = []
    for(let i=0;i<arr.length-1;i++){
        if(arr[i]<arr[i+1]){
            res.push(true)
        }else {res.push(false)}
    }
    return res.every(e=>e)
}


console.log(inAscOrder([1, 6, 10, 18, 2, 4, 20]))
console.log(inAscOrder([1, 2, 4, 7, 19]))


*/


/*

function lottery(str){
    const arr = [...str]
   let a =[]
    for(let i=0;i<arr.length;i++){
        if(arr[i].toLowerCase()===arr[i].toUpperCase()){
            a.push(arr[i])
        }
    }
    let n =  [... new Set(a)]
    if(n.length===0)return 'One more run!'
    return n.join('')
}


console.log(lottery("wQ8Hy0y5m5oshQPeRCkG"))


*/


/*


function wordSearch(query, seq){


    let res = []
   for(let i=0;i<seq.length;i++){

       if( seq[i].toLowerCase().includes(query.toLowerCase())){
           res.push(seq[i])
       }
   }
   if(res.length===0) return ['Empty']
   return res
}


console.log(wordSearch("ab", ["za", "ab", "abc", "zab", "zbc"]))


*/


/*function bank(mun) {
    const banknotes = [1000, 500, 100, 50, 20, 10, 5, 2, 1]
    let res = []

    for (let i = 0; i < banknotes.length; i++) {

        if (mun > 0) {
            if (mun < banknotes[i]) {
                continue
            } else {
                let a = Math.floor(mun / banknotes[i])
                let blanks = Array(a).fill(banknotes[i])
                res = res.concat(blanks)
                mun = mun - (a * (banknotes[i]))
            }

        }
    }
    return res
}


console.log(bank(3908))*/


/*

const intDiff = (arr, n) => {
    const res = []

   for(let i=0;i<arr.length;i++){
       for(let j =i+1;j<arr.length;j++){
         const a = arr[i]
         const b = arr[j]
           if(a>=b){ res.push(a-b)}else {
               res.push(b-a)
           }
       }
   }

   return res
   //return res.filter(e=>e===n).length
}


console.log(intDiff([1, 1, 5, 6, 9, 16, 27], 4))
console.log(intDiff([1, 1, 3, 3], 2))



*/


/*

const a = (arr)=>{
   for(let i=0;i<arr.length;i++){
       for(let x =0;x<arr.length-1-i;x++){
           if(arr[x]>arr[x+1]){
               let bb=arr[x]
               arr[x]=arr[x+1]
               arr[x+1]=bb
           }
       }
   }
   return arr
}













console.log(a([3,45,893,3,0,8,35,65784,9,22,2,3,56,7]))



*/


/*

function checkExam(array1, array2) {
    let  res = 0
  for(let i=0;i<array1.length;i++){
      if(array1[i]===array2[i]){
          res=res+4
      }
      if(array1[i]!==array2[i]){
          if(array2[i]===''){
              res=res+0
          } else {
              res=res-1
          }

      }
  }
  if(res<0){return 0}
  return res
}


console.log(checkExam(["a", "a", "b", "b"], ["a", "c", "b", "d"]))
console.log(checkExam(["a", "a", "c", "b"], ["a", "a", "b",  ""]))
console.log(checkExam(["a", "a", "b", "c"], ["a", "a", "b", "c"]))
console.log(checkExam(["b", "c", "b", "a"], ["",  "a", "a", "c"]))

*/


/*

function divisibleByLast(n) {
 let a =  [...String(n)]
    let res = [false]
    for(let i=1;i<a.length;i++){
        if( a[i]%a[i-1]===0) {
            res.push(true)
        }else { res.push(false)}
    }
    return res
}


console.log(divisibleByLast(2026))

*/


/*


function findGlasses(arr){
 for ( let i=0;i<arr.length;i++){

     let res =  arr[i].includes('O')

      if(!res){continue }
      let a = arr[i].split('')

      const index =  a.findIndex(e=>e==='O')
      a.splice(0,index+1)

     const index2 =  a.findIndex(e=>e==='-')
     a.splice(0,index2)
     if(a[0]!=='-'){continue}

     const aa = a.filter(e=>e!=='-')
     if(aa[0]!=='O'){continue}
     return i
 }
}


console.log(findGlasses(["OOOO----~OOO","-------","OOOOOOO","OO-OO-OO-O"]))
console.log(findGlasses(["phone", "O-O", "coins", "keys"]))
console.log(findGlasses(["O--#--O", "more dust","dustO---Odust"]))
console.log(findGlasses([ "dustO---Odust", "more dust"]))
console.log(findGlasses([ "dustO---Odust", "more dust"]))
*/


/*function findGlasses(arr){
    for ( let i=0;i<arr.length;i++){

        let res =  arr[i].includes('O')
        if(!res){continue }
        let a = arr[i].split('')
        const index =  a.findIndex(e=>e==='O')
        a.splice(0,index+1)
        const aa = a.reverse()
        const index2 =  a.findIndex(e=>e==='O')
        aa.splice(0,index2+1)
        if(aa.length===0){continue}
        const result =  aa.every(e=>e==='-')
        if (!result) {continue}
        else { return i}
    }
}*/


/*

function takeUmbrella(weather, chance) {
    if (weather==='sunny'&&chance>0.5){return true}
    if (weather==='sunny'){return false}

    if(weather==='rainy')
    {return true}

    if (weather==='cloudy'&&chance>0.2){return true}else {return false}
}


console.log(takeUmbrella('sunny',0.4))
console.log(takeUmbrella('rainy',0))
console.log(takeUmbrella('cloudy',0.2))
console.log(takeUmbrella('sunny',0.92))



*/


/*
function divCon(x) {
    if (x.length === 0) {
        return 0
    }

    let num = x.filter(e => typeof e === "number")
    let n
    if (num.length === 0) {
        n = 0
    } else {
        n = num.reduce((ac, el) => ac + el)
    }

    let string = x.filter(e => typeof e === "string")
    let s
    if (string.length === 0) {
        s = 0
    } else {
        let str = string.map(e => Number(e)).filter(e => !isNaN(e))

        if (str.length === 0) {
            n = 0
        } else {
            s = str.reduce((ac, el) => ac + el)
        }
    }

    return n - s



}


console.log(divCon([9, 6]))
console.log(divCon(["0", "8", "4", "1", "5"]))
console.log(divCon([9, 3, '7', '3', 'j']))
*/


/*

function differenceOfSquares(n) {

    const arr= []
    for(let i=1;i<=n;i++){
        arr.push(i)
    }
    const one = arr.reduce((acc,el)=>acc+el)
    const oneOne = Math.pow(one,2)


    const two=[]
    for(let i= 0  ; i<arr.length;i++){
let num = Math.pow(arr[i],2)
        two.push(num)
    }
    const twoTwo= two.reduce((acc,el)=>acc+el)
    return oneOne-twoTwo

}


console.log(differenceOfSquares(5))

*/


/*

function sentence(arrayOfObjects) {

    let arr =  arrayOfObjects.map(e=>Object.keys(e)).map(e=>Number(e[0]))
    let array = arr.sort((a,b)=>a-b)

let res = []
    for (let i=0;i<array.length;i++){
        let word= arrayOfObjects.find(e=>e[array[i]])

        res.push(word[array[i]])
    }

return res.join(' ')

}


console.log(sentence(            [
        {'4': 'dog' }, {'2': 'took'}, {'3': 'his'},
        {'-2': 'Vatsan'}, {'5': 'for'}, {'6': 'a'}, {'12': 'spin'}
    ]
))
*/


/*

function rpsls(pl1,pl2){
if(pl1==='rock'){
    if(pl2==='rock'){return 'Draw!'}
    if(pl2==='lizard'||pl2==='scissors'){return 'Player 1 Won!'}
    if(pl2==='paper'||pl2==='spock'){return 'Player 2 Won!'}
}

    if(pl1==='lizard'){
        if(pl2==='lizard'){return 'Draw!'}
        if(pl2==='spock'||pl2==='paper'){return 'Player 1 Won!'}
        if(pl2==='scissors'||pl2==='rock'){return 'Player 2 Won!'}
    }

    if(pl1==='paper'){
        if(pl2==='paper'){return 'Draw!'}
        if(pl2==='rock'||pl2==='spock'){return 'Player 1 Won!'}
        if(pl2==='scissors'||pl2==='lizard'){return 'Player 2 Won!'}
    }

    if(pl1==='scissors'){
        if(pl2==='scissors'){return 'Draw!'}
        if(pl2==='lizard'||pl2==='paper'){return 'Player 1 Won!'}
        if(pl2==='rock'||pl2==='spock'){return 'Player 2 Won!'}
    }

    if(pl1==='spock'){
        if(pl2==='spock'){return 'Draw!'}
        if(pl2==='lizard'||pl2==='paper'){return 'Player 2 Won!'}
        if(pl2==='rock'||pl2==='scissors'){return 'Player 1 Won!'}
    }

}


console.log(rpsls('rock', 'lizard'))
console.log(rpsls('scissors', 'lizard'))
console.log(rpsls('paper', 'rock'))
console.log(rpsls('lizard', 'paper'))
console.log(rpsls('spock', 'rock'))
*/


/*
function sortGiftCode(code) {
    return code.split('').sort().join('')

}


console.log(sortGiftCode('pqksuvy'))

*/

/*
function findMissing(arr1, arr2) {
    for (let i = 0; i < arr2.length; i++) {
        let el = arr2[i]

        let index = arr1.findIndex(elem=>elem===el)

        arr1.splice(index, 1)
    }
    return arr1[0]
}


console.log(findMissing([6, 1, 3, 6, 8, 2], [3, 6, 6, 1, 2]))

*/

/*

function convertHashToArray(hash){
    const keys = Object.keys(hash).sort()
    let array = []
    for(let i=0;i<keys.length;i++){
        let one = keys[i]
        let two = hash[keys[i]]

        array.push([one,two])
    }
    return array

}


console.log(convertHashToArray({name: 'Jeremy', age: 24, role: 'Software Engineer'}))

*/


/*

function isIsogram(str){
let array = str.toLowerCase().split('')
    let obj={}
    for(let i=0;i<array.length;i++){
        if(obj[array[i]]){return false}else{
            obj[array[i]]=1
        }
    }
    return true
}


console.log(isIsogram("Dermatoglyphics"))
console.log(isIsogram("aba"))


*/


/*

function addBinary(a, b) {
    const sum = a + b;
    return sum.toString(2);
}


console.log(addBinary(1,1))
console.log(addBinary(5,9))



*/


/*

const promicse = new Promise((res,rej)=>{
    return res('Hello')
})

promicse.then((res)=>{
    console.log(res)})
    .then(()=>{
        console.log('111')})



*/


/*

function diff(a, b){
let all= a.concat(b)
    let res = []
 for(let i=0;i<all.length;i++){
     let isExistInA=a.includes(all[i])
     let isExistInAB=b.includes(all[i])

     if(isExistInA&&isExistInAB){continue}else {
        res.push(all[i])
     }
 }
 return  [...new Set(res)].sort()
}


console.log(diff(['a','a','t','e','f','i','j'],['t','g','g','i','k','f']))

*/


/*


function getSum(a, b) {
    if(a===b){return a}else {
        let start
        let finish
        if(a<b){
            start=a
        finish=b}
        if(b<a){
            start=b
        finish=a}
        let sum=0
        for(let i=start;i<=finish;i++){
            sum += i
        }
        return sum
    }

}

console.log(getSum(-1,2))


*/


/*
function func () {
    let count=0
    return  ()=>{
        console.log(count++)
    }
}

const a = func()
const x = func()

a()
a()
a()
a()
x()
x()

*/


/*

function evenLast(numbers) {
    if(numbers.length===0)return 0
    const finishNumber = numbers.slice(-1)
    let num = 0
   for (let i = 0;i<numbers.length;i++){

       if([i]===0||[i]%2===0){
          num= num+numbers[i]
       }
   }
   return num*finishNumber[0]
}


console.log(evenLast([2, 3, 4, 5]))

*/


/*


function bestFriend(txt, a, b) {

  const arr = txt.split(a)
   for (let i=1;i<arr.length;i++){
       if(arr[i][0]!==b) return false
   }
   return true
}


console.log(bestFriend("he headed to the store", "h", "e"))



*/


/*


Array.prototype.customFind = function (callback){
    for(let i=0;i<this.length;i++){
        if(callback(this[i])){
            return this[i]
        }
    }
    return null
}


const number = [1,2,3,4,5]
//const foundItem = number.customFind
console.log(number.customFind((el)=>  el===2))

/!*

Array.prototype.customFind = function (callback) {
    for (let i = 0; i < this.length; i++) {
        if (callback(this[i])) {
            return this[i];
        }
    }
    return null;
};

const numbers = [1, 2, 3, 4, 5];
console.log(numbers.customFind((el) => el === 2));
*!/



*/


/*

export const Component=({name:string})=>{
    return <div>{name}</div>
}


*/


/*

function numberProperty(n) {
    let simple=false
    let x=0
    if(n>=2)
     {
        for(let i=2;i<=Math.sqrt(n);i++){
            if(n%i===0){x+=1}
        }
        if(x===1){simple =true}
    }

    let chet=false
    if(n===0){chet=true}else {
        if(n%2===0){ chet=true}
    }

let ten = false
    if(n%10===0){ten=true}

    return [simple, chet, ten]

}

console.log(numberProperty(-2))



*/


/*

function cypher(string) {
    let listLeters={
        I:1,
        R:2,
        E:3,
        A:4,
        S:5,
        G:6,
        T:7,
        B:8,
        O:'0',
        l:1,
        z:2,
        e:3,
        a:4,
        s:5,
        b:6,
        t:7,
        g:9,
        o:'0'}
   const arr = string.split('')
    let res = []
    for(let i=0;i<arr.length;i++){

        let leter = arr[i]
        if(listLeters[leter]){
            res.push(listLeters[leter])
        }else {res.push(leter)}
    }

    return res.join('')
}

console.log(cypher("Hello World"))


*/


/*

function encode(str,  n) {
    let listLeters={
        a:1,
        b:2,
        c:3,
        d:4,
        e:5,
        f:6,
        g:7,
        h:8,
        i:9,
        j:10,
        k:11,
        l:12,
        m:13,
        n:14,
        o:15,
        p:16,
        q:17,
        r:18,
        s:19,
        t:20,
        u:21,
        v:22,
        w:23,
        x:24,
        y:25,
        z:26,}
    const arr = str.split('')
    let res = []
    for (let i=0;i<arr.length;i++){
        let a = listLeters[arr[i]]
        res.push(a)
    }
    let finishArr=[]
    let nn=String(n)
    let nnn = nn.repeat(res.length)
    let nN= nnn.split('')
    for(let i =0;i<res.length;i++){
       finishArr.push(Number(res[i])+Number(nN[i]))
    }
  return finishArr
}


console.log(encode("scout",1939))




*/


/*

function wordsToMarks(string){
    let listLeter={
        a:1,
        b:2,
        c:3,
        d:4,
        e:5,
        f:6,
        g:7,
        h:8,
        i:9,
        j:10,
        k:11,
        l:12,
        m:13,
        n:14,
        o:15,
        p:16,
        q:17,
        r:18,
        s:19,
        t:20,
        u:21,
        v:22,
        w:23,
        x:24,
        y:25,
        z:26,}
    const arr = string.split('')
    let sum=0
    for (let i=0;i<arr.length;i++){
        sum+=listLeter[arr[i]]
    }
    return sum
}


console.log(wordsToMarks("attitude"))


*/


/*

function xx(el){
    const p= Object.values(el)
    const rr=p.filter(e=>!!e===true)
    if(rr.length===p.length){return true}else {return false}
}




console.log(xx({a:'st',b:5,c:true}))
console.log(xx({a:'st',b:0,c:true}))
console.log(5*'2.4')

*/


/*
function factorial(n) {
    if(n<0||n>12){throw new Error('error factorial')}
    let x =n
    if(n===0||n===1){return 1}
    let res =1
    for(let i=1;i<=x;i++){
        res*=i
    }
    return res
}


console.log(factorial(5))
//console.log(factorial(15))
console.log(factorial(1))

*/


/*


const a =(ar)=>{
if(ar.length===0){
    return 0
}else {
   return  ar[0]+a(ar.slice(1))

}
}

console.log(a([1,2,3]))

*/


/*

const incCounter = (function (){
    let a = 0
    return function (){
        a++
        return a
    }
})()

const foo=(n)=>{


    for (let i =0;i<n;i++){
        setTimeout(()=>{
            console.log( incCounter())
        },i*100)
    }


}

foo(50)


*/


/*

function a (value){
    this.name=value
    this.getValue = function (){
        return this.name
    }
}

const t = new a ('pavel')
console.log(t.getValue)
const x = JSON.stringify(t)
console.log(x)
const xxx = JSON.parse(x)
console.log(t===xxx)
console.log(xxx.name)
console.log(2)
console.log(1+xxx.getValue)
*/


/*


function oddOnesOut(nums) {
    let obj = {}
    for(let i=0;i<nums.length;i++){
        if(obj[nums[i]]){
            obj[nums[i]]+=1
        }else {
            obj[nums[i]]=1
        }
    }
   let a = []
    for(let key in obj){
        if( obj[key]%2!==0){
            a.push(key)
        }
    }
   for (let j=0;j<a.length;j++){
       nums=nums.filter(e=>e!==Number(a[j]))
   }
   return nums
}

console.log(oddOnesOut([1, 2, 3, 1, 3, 3]))




*/


/*

function filter_list(l) {
   return l.filter(e=>typeof(e)==='number')
}


console.log(filter_list([1,2,'aasf','1','123',123]))
console.log(filter_list([1,'a','b',0,15]))


*/


/*


function strong(n) {
let arr = String(n).split('')
    let sum=0
    for (let i=0;i<arr.length;i++){
      let qqq =1
        for (let j=1;j<=arr[i];j++) {
            qqq=qqq*j
        }


        sum=sum+qqq
    }
    if(sum===n){return "STRONG!!!!"}else {
        return "Not Strong !!"
    }


}

console.log(strong(145))

*/


/*

Array.prototype.customFilter = function (){}



function a (){}
a.title = 'Title'


console.log(a.title)




*/


/*

const a = {
    name:'Name',
    getName:function (){
        return this.name
    },
    setName:function (value){
        this.name=value
    }
}
const b=new Object(a)
b.setName('NewName')
console.log(a.getName())

const c = {...a}
c.setName.bind(a,'CCC')()

console.log(a.getName())

console.log(a==b)
console.log(a==c)



function aaa (){}
aaa.name = ":JJJLL"
console.log(aaa.name)



*/


/*
function matrix(array) {

    let res = []

    for (let i = 0; i < array.length; i++) {


        res.push( array[i].map((el,index) => index===i ? el<0?0:1 : el
        ))

    }
    return res
}


console.log(matrix([
    [-1, 4, -5, -9, 3],
    [6, -4, -7, 4, -5],
    [3, 5, 0, -9, -1],
    [1, 5, -7, -8, -9],
    [-3, 2, 1, -5, 6]
]))
*/


/*


function isItLetter(character) {
    if(character.toLowerCase()===character.toUpperCase()){
        return false
    }else {return true}
}


console.log(isItLetter('a'))
console.log(isItLetter('1'))




*/


/*

 if(true){
    b=2
 }

a=4

console.log(a)
console.log(b)



*/


/*


function validateWord(s) {
let a = s.toLowerCase().split('')
    let res =[...a]
    let iii=[]
    for (let i=0;i<a.length;i++){
        let l = a[i]
        let x = res.map((el)=>el===l?el='true':el)
      let ww=x.filter((el)=>el==='true')
        iii.push(ww.length)
    }

    let lll = iii.filter((el)=>iii[0]!==el)

if(lll.length){return false}else {return true}
}


console.log(validateWord('abcabcd'))
console.log(validateWord('AbcabcAbcabc'))
console.log(validateWord('abc123'))
console.log(validateWord('2%rundefined3ji:0kj6dzfjtifz?rhja8h!yr$hm*5222%%%ruuunndeefi333:::000kkk666zzttt???haaa888!!!yyy$$$mmm***555'))


*/


/*

function interweave(s1, s2) {
    let num = '0123456789'
  let one = s1.split('')
    let two = s2.split('')
    let arr = []
    for (let i=0;i<one.length;i++){

        if(!num.includes(one[i])){
            arr.push(one[i])
        }

        if(!num.includes(two[i])){
            arr.push(two[i])
        }

    }
    return arr.join('')
}
*/


console.log(interweave("h3lo", "el4"))


/*

function sortMyString(S) {
let arr = S.split('')
    let arr1=[];
let arr2=[];

    for(let i=0;i<arr.length;i++){

        if(i===0||i%2===0){
            arr1.push(arr[i])

        } else {
            arr2.push(arr[i])
        }
    }
    return arr1.join('')+' '+arr2.join('')
}


console.log(sortMyString("CodeWars"))

*/


/*

function planeSeat(a){

    let arr= a.split('')
    let letter = arr.pop()
    let num= arr.join('')
    let one;
    let two;

    if(num>0&&num<21){one='Front'}
    else if (num>20&&num<41){one='Middle'}
    else if(num>40&&num<61){one='Back'}
    else {return 'No Seat!!'}

    if(letter==='A'||letter==='B'||letter==='C'){two='Left'}
    else if(letter==='D'||letter==='E'||letter==='F'){two='Middle'}
    else if(letter==='G'||letter==='H'||letter==='K'){two='Right'}
    else {return 'No Seat!!'}

    return one+'-'+two
}
*/


/*console.log(planeSeat('20B'))
console.log(planeSeat('2B'))*/


/*


function SeriesSum(n) {
    let del=[]
    for (let i=0;i<n;i++){
    del.push(1+i*3)
    }
   let x = del.reduce((acc,el)=> acc+1/el,0)
    let bb = Math.round(x*100)/100
    if(x%1===0){
return String(x)+'.00'
    }
    if((bb*10)%1===0){
        return String(bb)+'0'
    }
    else {
        return  String(bb)
    }

}


//console.log(SeriesSum(1))
//console.log(SeriesSum(5))
console.log(SeriesSum(58))

*/


/*

function bulbMaze(maze){
const ar = maze.split('')
    const result = []
    for(let i=0;i<ar.length;i++){

        if(ar[i]===' '){
            result.push('x')
            continue
        }
        if(i===0&&ar[i]==='x'){
            result.push('x')
            continue
        }
        if(i%2===0){result.push(ar[i])}
        if(i%2!==0){result.push(ar[i]==='x'?'o':'x')}


    }
  let el= result.find(e=>e==='o')
    if(el){return false}else {return true}

}

console.log(bulbMaze("xo oxox"))

*/


/*


function a (x,y){
    if(y-x===2){
        return [x+1]
    }else {
        //return 1+a(x,y-1)
        let list = a(x,y-1)
         list.push(y-1)
        return list

    }
}


console.log(a(10,18))



*/


/*


function pagesNumberingWithInk(current, numberOfDigits) {

    let length=0
    let oneMoreTime=numberOfDigits
    for(let i=0;i<numberOfDigits;i++){
        let num=current+i
        length=String(num).length
        if(oneMoreTime>length){
            oneMoreTime=oneMoreTime-length
            continue
        }
        if(oneMoreTime===length) {return num}
        if(oneMoreTime<length) {return num-1}
    }


}

//console.log(pagesNumberingWithInk(1,5))
console.log(pagesNumberingWithInk(21,5))

*/


/*

function gimmeTheLetters(sp) {
   let ar = sp.split('-')
    let listLeter="abcdefghijklmnopqrstuvwxyz"

    let indexOne = listLeter.indexOf(ar[0].toLowerCase())
    let indexEnd = listLeter.indexOf(ar[1].toLowerCase())


    if(ar[0]===ar[0].toLowerCase()){
        return listLeter.slice(indexOne,indexEnd+1)
    } else {
        const BigLiter =  listLeter.slice(indexOne,indexEnd+1)
        return BigLiter.toUpperCase()
    }
}
console.log(gimmeTheLetters('A-N'))
console.log(gimmeTheLetters('a-b'))
console.log(gimmeTheLetters('a-n'))

*/


/*

function stonePick(arr) {
    let st2=0
    let cob3=0
  for(let i=0;i<arr.length;i++){
      if(arr[i]==="Sticks"){
          st2++
      }
      if(arr[i]==="Cobblestone"){
          cob3++
      }
      if(arr[i]==="Wood"){
          st2=st2+4
      }
  }

  return st2/2>=cob3/3?Math.floor(cob3/3):Math.floor(st2/2)
}

console.log(stonePick(["Sticks", "Sticks", "Cobblestone", "Cobblestone", "Cobblestone"]))


*/


/*var ownedCatAndDog = function(catYears, dogYears) {
    let cat=0
    let num=catYears

for (let i=0;i<catYears;i++){
    if(i===0&&num>=15){
        num=num-15
        cat=cat+1
    }else{
        if(i===1&&num>=9){
            num=num-9
            cat=cat+1
        }else{
            if(num>=4){
                num=num-4
                cat=cat+1
            }else{
                break
            }
        }
    }
}

    let dog=0
    let numDog=dogYears

    for (let i=0;i<dogYears;i++){

        if(i===0&&numDog>=15){
            numDog=numDog-15
            dog=dog+1
        }else{
            if(i===1&&numDog>=9){
                numDog=numDog-9
                dog=dog+1
            }else{
                if(numDog>=5){
                    numDog=numDog-5
                    dog=dog+1
                }else{
                    break
                }
            }
        }
    }

return [cat,dog]
}*/

/*

var ownedCatAndDog = function (catYears, dogYears) {
    let cat = 0
    let num = catYears

    for (let i = 0; i < catYears; i++) {

        if (i === 0 && num >= 15) {
            num = num - 15
            cat = cat + 1
            continue
        }
        if (i === 0 && num < 15){break}

        if (i === 1 && num >= 9) {
            num = num - 9
            cat = cat + 1
            continue
        }
        if (i === 1 && num < 9){break}

        if (i>1&&num >= 4) {
            num = num - 4
            cat = cat + 1
        }
        if(i>1&&num<4){break}
    }

    let dog = 0
    let numDog = dogYears

    for (let i = 0; i < dogYears; i++) {

        if (i === 0 && numDog >= 15) {
            numDog = numDog - 15
            dog = dog + 1
            continue
        }
        if (i === 0 && numDog < 15){break}
        if (i === 1 && numDog >= 9) {
            numDog = numDog - 9
            dog = dog + 1
            continue
        }
        if (i === 1 && numDog < 9){break}
        if (i>1&&numDog >= 5) {
            numDog = numDog - 5
            dog = dog + 1
        }
        if(i>1&&numDog<5){break}
    }

    return [cat, dog]
}
console.log(ownedCatAndDog(99, 21))
console.log(ownedCatAndDog(24, 24))

console.log(ownedCatAndDog(56, 64))
console.log(ownedCatAndDog(65, 14))
console.log(ownedCatAndDog(24, 15))
console.log(ownedCatAndDog(14, 14))
console.log(ownedCatAndDog(15, 15))
*/


/*


function a(x,y){
    if(x===1){return 1}else {
        return a(x-1,y)
    }
}

console.log(4,12)


*/


/*



function a(num){

    for (let i=1;i<=num;i++){
        if(i%3===0&&i%5===0){
            console.log('FizzBuzz')
        }
         else if(i%5===0){
            console.log('buzz')
        }else if(i%3===0){
            console.log('fizz')
        }else {
             console.log(i)
        }
    }

}


console.log(a(16))

*/


/*

function a (num){
    debugger
   if(num===0){return 1}else {
       return num*a(num-1)
   }
}

console.log(a(5))

*/


/*

function alphabet(ns) {
    let ar =  ns.sort((a,b)=>a-b)
    let a =ar[0]

    let b= ar[1]

    let ab=a*b
  ar.shift()
    ar.shift()
    let indexAB=ar.indexOf(ab)
     ar.splice(indexAB,1)
    let c=ar[0]
    ar.shift()
    let cb=c*b
    let indexCB=ar.indexOf(cb)
    ar.splice(indexCB,1)
    return ar[0]

}


console.log(alphabet([20,10,6,5,4,3,2,12]))
console.log(alphabet([2,3,4,1,12,6,2,4]))
console.log(alphabet([2,6,7,3,14,35,15,5]))


*/


/*


function bubble(arr) {
    let array=[]
for(let i=0;i<arr.length;i++){

    for(j=0;j<arr.length;j++){
        if(arr[j]>arr[j+1]){
            let zzz=arr[j]
            arr[j]=arr[j+1]
            arr[j+1]=zzz
            let ppp= [...arr]
            array.push(ppp)
        }

    }

}
return array
}


console.log(bubble([2,1,4,3]))



*/


/////////////////////////////////////////////////////////

////////////////////////////////////////////////////////////

//////////////////////////////////////////////////////////////

///////////////////////////////////////////////////////////////////


/*
const arr = ['1','2','3','4','5','6','7']
function print  (a,index=0) {
    console.log(a[index])
    index=index+1
    if(index<a.length){
        print(a,index)
        //console.log(arr[index])
    }
}
print(arr)
*/


//////////////////////////////////////////////////
////////////////////////////////////////////////
///////////////////////////////////////////////
/*for(let i=0;i<arr.length;i++){
    console.log(arr[i])
}*/


/*


function factorial(num) {
    console.log('Вызов с num =', num);
    debugger
    if(num===0){return 1}else {
        return num*factorial(num-1)
    }
}


console.log(factorial(5))

*/


/*

function naughtyOrNice(data) {
   let good=0
    let bad=0
    for(let key in data) {
        let oneObj=data[key]
        let arr= Object.values(oneObj)
        for(let i=0;i<arr.length;i++){
            if(arr[i]==='Naughty'){bad++}
            if(arr[i]==='Nice'){good++}
        }
    }
   if(good>=bad){return 'Nice!'}
   if(good<bad){return 'Naughty!'}

}


console.log(naughtyOrNice({"January": {"1": "Naughty", "2": "Nice", "3": "Naughty", "4": "Nice", "5": "Naughty", "6": "Nice", "7": "Naughty", "8": "Nice", "9": "Naughty", "10": "Nice", "11": "Naughty", "12": "Nice", "13": "Naughty", "14": "Nice", "15": "Naughty", "16": "Nice", "17": "Naughty", "18": "Nice", "19": "Naughty", "20": "Nice", "21": "Naughty", "22": "Nice", "23": "Naughty", "24": "Nice", "25": "Naughty", "26": "Nice", "27": "Naughty", "28": "Nice", "29": "Naughty", "30": "Nice", "31": "Naughty"}, "February": {"1": "Nice", "2": "Naughty", "3": "Nice", "4": "Naughty", "5": "Nice", "6": "Naughty", "7": "Nice", "8": "Naughty", "9": "Nice", "10": "Naughty", "11": "Nice", "12": "Naughty", "13": "Nice", "14": "Naughty", "15": "Nice", "16": "Naughty", "17": "Nice", "18": "Naughty", "19": "Nice", "20": "Naughty", "21": "Nice", "22": "Naughty", "23": "Nice", "24": "Naughty", "25": "Nice", "26": "Naughty", "27": "Nice", "28": "Naughty", "29": "Nice"}, "March": {"1": "Naughty", "2": "Nice", "3": "Naughty", "4": "Nice", "5": "Naughty", "6": "Nice", "7": "Naughty", "8": "Nice", "9": "Naughty", "10": "Nice", "11": "Naughty", "12": "Nice", "13": "Naughty", "14": "Nice", "15": "Naughty", "16": "Nice", "17": "Naughty", "18": "Nice", "19": "Naughty", "20": "Nice", "21": "Naughty", "22": "Nice", "23": "Naughty", "24": "Nice", "25": "Naughty", "26": "Nice", "27": "Naughty", "28": "Nice", "29": "Naughty", "30": "Nice", "31": "Naughty"}, "April": {"1": "Nice", "2": "Naughty", "3": "Nice", "4": "Naughty", "5": "Nice", "6": "Naughty", "7": "Nice", "8": "Naughty", "9": "Nice", "10": "Naughty", "11": "Nice", "12": "Naughty", "13": "Nice", "14": "Naughty", "15": "Nice", "16": "Naughty", "17": "Nice", "18": "Naughty", "19": "Nice", "20": "Naughty", "21": "Nice", "22": "Naughty", "23": "Nice", "24": "Naughty", "25": "Nice", "26": "Naughty", "27": "Nice", "28": "Naughty", "29": "Nice", "30": "Naughty"}, "May": {"1": "Nice", "2": "Naughty", "3": "Nice", "4": "Naughty", "5": "Nice", "6": "Naughty", "7": "Nice", "8": "Naughty", "9": "Nice", "10": "Naughty", "11": "Nice", "12": "Naughty", "13": "Nice", "14": "Naughty", "15": "Nice", "16": "Naughty", "17": "Nice", "18": "Naughty", "19": "Nice", "20": "Naughty", "21": "Nice", "22": "Naughty", "23": "Nice", "24": "Naughty", "25": "Nice", "26": "Naughty", "27": "Nice", "28": "Naughty", "29": "Nice", "30": "Naughty", "31": "Nice"}, "June": {"1": "Naughty", "2": "Nice", "3": "Naughty", "4": "Nice", "5": "Naughty", "6": "Nice", "7": "Naughty", "8": "Nice", "9": "Naughty", "10": "Nice", "11": "Naughty", "12": "Nice", "13": "Naughty", "14": "Nice", "15": "Naughty", "16": "Nice", "17": "Naughty", "18": "Nice", "19": "Naughty", "20": "Nice", "21": "Naughty", "22": "Nice", "23": "Naughty", "24": "Nice", "25": "Naughty", "26": "Nice", "27": "Naughty", "28": "Nice", "29": "Naughty", "30": "Nice"}, "July": {"1": "Naughty", "2": "Nice", "3": "Naughty", "4": "Nice", "5": "Naughty", "6": "Nice", "7": "Naughty", "8": "Nice", "9": "Naughty", "10": "Nice", "11": "Naughty", "12": "Nice", "13": "Naughty", "14": "Nice", "15": "Naughty", "16": "Nice", "17": "Naughty", "18": "Nice", "19": "Naughty", "20": "Nice", "21": "Naughty", "22": "Nice", "23": "Naughty", "24": "Nice", "25": "Naughty", "26": "Nice", "27": "Naughty", "28": "Nice", "29": "Naughty", "30": "Nice", "31": "Naughty"}, "August": {"1": "Nice", "2": "Naughty", "3": "Nice", "4": "Naughty", "5": "Nice", "6": "Naughty", "7": "Nice", "8": "Naughty", "9": "Nice", "10": "Naughty", "11": "Nice", "12": "Naughty", "13": "Nice", "14": "Naughty", "15": "Nice", "16": "Naughty", "17": "Nice", "18": "Naughty", "19": "Nice", "20": "Naughty", "21": "Nice", "22": "Naughty", "23": "Nice", "24": "Naughty", "25": "Nice", "26": "Naughty", "27": "Nice", "28": "Naughty", "29": "Nice", "30": "Naughty", "31": "Nice"}, "September": {"1": "Naughty", "2": "Nice", "3": "Naughty", "4": "Nice", "5": "Naughty", "6": "Nice", "7": "Naughty", "8": "Nice", "9": "Naughty", "10": "Nice", "11": "Naughty", "12": "Nice", "13": "Naughty", "14": "Nice", "15": "Naughty", "16": "Nice", "17": "Naughty", "18": "Nice", "19": "Naughty", "20": "Nice", "21": "Naughty", "22": "Nice", "23": "Naughty", "24": "Nice", "25": "Naughty", "26": "Nice", "27": "Naughty", "28": "Nice", "29": "Naughty", "30": "Nice"}, "October": {"1": "Naughty", "2": "Nice", "3": "Naughty", "4": "Nice", "5": "Naughty", "6": "Nice", "7": "Naughty", "8": "Nice", "9": "Naughty", "10": "Nice", "11": "Naughty", "12": "Nice", "13": "Naughty", "14": "Nice", "15": "Naughty", "16": "Nice", "17": "Naughty", "18": "Nice", "19": "Naughty", "20": "Nice", "21": "Naughty", "22": "Nice", "23": "Naughty", "24": "Nice", "25": "Naughty", "26": "Nice", "27": "Naughty", "28": "Nice", "29": "Naughty", "30": "Nice", "31": "Naughty"}, "November": {"1": "Nice", "2": "Naughty", "3": "Nice", "4": "Naughty", "5": "Nice", "6": "Naughty", "7": "Nice", "8": "Naughty", "9": "Nice", "10": "Naughty", "11": "Nice", "12": "Naughty", "13": "Nice", "14": "Naughty", "15": "Nice", "16": "Naughty", "17": "Nice", "18": "Naughty", "19": "Nice", "20": "Naughty", "21": "Nice", "22": "Naughty", "23": "Nice", "24": "Naughty", "25": "Nice", "26": "Naughty", "27": "Nice", "28": "Naughty", "29": "Nice", "30": "Naughty"}, "December": {"1": "Nice", "2": "Naughty", "3": "Nice", "4": "Naughty", "5": "Nice", "6": "Naughty", "7": "Nice", "8": "Naughty", "9": "Nice", "10": "Naughty", "11": "Nice", "12": "Naughty", "13": "Nice", "14": "Naughty", "15": "Nice", "16": "Naughty", "17": "Nice", "18": "Naughty", "19": "Nice", "20": "Naughty", "21": "Nice", "22": "Naughty", "23": "Nice", "24": "Naughty", "25": "Nice", "26": "Naughty", "27": "Nice", "28": "Naughty", "29": "Nice", "30": "Naughty", "31": "Nice"}}))



*/


/*

function reverseAndMirror(s1,s2) {
    let  ss1=s1.split('').map(e=>e===e.toLowerCase()?e.toUpperCase():e.toLowerCase())
    let two = ss1.reverse().join('')+ss1.reverse().join('')
    let one = s2.split('').map(e=>e===e.toLowerCase()?e.toUpperCase():e.toLowerCase()).reverse().join('')
    return one+'@@@'+two
}


console.log(reverseAndMirror("FizZ","buZZ"))


*/


/*


function isAllPossibilities(x){
   let lastNum = x.length-1
    let isLastNum = x.includes(lastNum)
    if(!isLastNum){return false}

    for(let i=0;i<lastNum;i++){

        if(!x.includes(i)){
            return false
        }

    }
    return true
}


console.log(isAllPossibilities([1,2,0,3]))
console.log(isAllPossibilities([5,1,9,0,3,2,8,7,4,15,6,13,13,11,13,10]))


*/


/*

function mnLCM(m,n) {
    if(m>n){
        let q=m
        m=n;
        n=q
    }
let x =m
for(let i=m+1;i<=n;i++){
    let ooo
  if(x>i){
     ooo=i
  } else ooo=x
    let ar=[]
    for (let j=1;j<=ooo;j++){
        if(x%j===0 && i%j===0){
            ar.push(j)
        }
    }
    let ia=ar.reverse()[0]

x=(x*i)/ia
    }
return x
}

console.log(mnLCM(5,1))//60



*/


/*



function mnLCM(m,n) {
    let a = []
    for (let i=m;i<=n;i++){
       a.push([i])
    }
    for (let i =2;i<Infinity;i++){
        a.map(e=>{
            let nn =e[0]*i
            e.push(nn)
        })
        let bbb = a[0]
        let number= bbb[bbb.length-1]
     let vv= a.map(e=>[...e])

        vv.map(e=>{
           let ggg=e.includes(number)
            e.length=0
            e.push(ggg)
        })

let iii=[]
        vv.map(e=>iii.push(e[0]))

       let p= iii.every(e=>e===true)
if(iii.every(e=>e===true)){return number}

    }

}

console.log(mnLCM(10,15))
*/


/*


function removeSmallest(numbers) {
    let copy = [...numbers]
   let a = [...copy].sort((a,b)=>a-b)

    let num= a[0]
    let index = copy.findIndex(e=>e===num)
    copy.splice(index,1)
    return copy
}

console.log(removeSmallest([5, 3, 2, 1, 4]))
console.log(removeSmallest([5,1, 3, 2, 1, 4]))
console.log(removeSmallest( [ 284, 310, 190, 78, 166, 119, 351, 177, 51, 314, 45 ]))




*/


/*

function findShort(s){
    return s.split(' ').map(e=>e.length).reduce((acc,el)=>acc<el?acc:el)
}


console.log(findShort("bitcoin take over the world maybe who knows perhaps"))




*/


/*

function productArray(numbers){

   let res = []
    for (let i=0;i<numbers.length;i++){
        let a =[...numbers]
         a.splice(i,1)
        res.push(a.reduce((acc,el) => acc*el))
    }
    return res
}

console.log(productArray([3,27,4,2]))



*/


/*

function maxRot(n) {
    let workArr = String(n).split('')
  let arr = []

    for (let i=0;i<workArr.length;i++){
       let num = workArr.splice(i,1)
        workArr.push(num)
        let a =[...workArr]
        arr.push(Number(a.join('')))
    }
    return arr.reduce((acc,el)=>acc>el?acc:el)
}

console.log(maxRot(56789))


*/


/*

function squareUp(n) {
    let arr = Array(n).fill(0)
    let res = []
for(let i=0;i<n;i++){

    let y= arr.fill(i+1,i,i+1)
    let lll=[...y].reverse()
      res = res.concat(lll)

}
return res
}

console.log(squareUp(4))


*/


/*

function maxProduct(numbers, size){
  for(let i=0;i<numbers.length;i++){
      for(let j=0;j<numbers.length;j++){
          if(numbers[j]>numbers[j+1]){
              let x =numbers[j]
              numbers[j]=numbers[j+1]
              numbers[j+1]=x
          }
      }
  }
  let arr =  numbers.reverse()
    let res = []
    for(let a =0;a<size;a++){
        res.push(arr[a])
    }
    return res.reduce((acc,el)=>acc*el)
}



console.log(maxProduct([10,8,7,9], 3))

*/


/*


function solution(start, finish) {
let amountPolk = finish-start
    let cel3=0
    if(amountPolk>=3){
        cel3=Math.floor(amountPolk/3)
    }
    if(amountPolk<3){return amountPolk}
    let ostatok = amountPolk-(cel3*3)
    return cel3+ostatok
}


console.log(solution(1,5))



*/


/*


function makeValley(arr) {
   for (let i=0;i<arr.length;i++){
       for(let j=0;j<arr.length;j++){
           if(arr[j]<arr[j+1]){
               let x = arr[j]
                arr[j]=arr[j+1]
               arr[j+1]=x
           }
       }
   }
   let array =arr
    let left = []
    let right = []
    for (let i=0;i<array.length;i++){
        if(i===0||i%2===0){
            left.push(array[i])
        }else {right.push(array[i])}
    }
    return left.concat(right.reverse())
}

console.log(makeValley([20, 18, 17, 13, 12, 12, 10, 9, 4, 2, 2, 1, 1]))

*/


/*

function whatListAmIOn(actions){
    let bfk=0
    let gsn =0
    for (let i=0;i<actions.length;i++){
        if(actions[i][0]==='b'||actions[i][0]==='f'||actions[i][0]==='k'){
            bfk++
        }
        if(actions[i][0]==='g'||actions[i][0]==='s'||actions[i][0]==='n')
            gsn++
    }
    if(bfk>=gsn){return 'naughty'}  else {return 'nice'}

}

console.log(whatListAmIOn(["broke someone's window", "fought over a toaster", "killed a bug"]))



*/


/*

<script>
    function removeWhitespaces(string) {
    return string.split(' ').filter(s => s !== '').join('_')
}

    console.log(removeWhitespaces('you are JS developer'))
</script>



*/


/*


function catchSignChange(arr) {
    let count
    let flag
    if(arr.length===0){count=0}
   for (let i=0;i<arr.length;i++){

       if(i===0){
           count=0
           if(arr[i]<0){
               flag=-1
           }else {
               flag=1
           }
       }else {
           if(flag===-1&&arr[i]>=0){
               flag=1
               count=count+1
           }
           if(flag===1&&arr[i]<0){
               flag=-1
               count=count+1
           }
       }
   }
   return count
}

console.log(catchSignChange([-47,84,-30,-11,-5,74,77]))
console.log(catchSignChange([]))


*/


/*

function wordPattern(word) {
 let a = word.split('').map(e=>e.toLowerCase())
    let simbols = []
    let result=[]
    let z=0
    for (let i=0;i<a.length;i++){
        let exist = simbols.includes(a[i])
        if(!exist){
            simbols.push(a[i])
            result.push(z)
            z++
        }else {
            let index=simbols.indexOf(a[i])
            result.push(index)
        }

    }
    return result.join('.')

}

console.log(wordPattern('hello'))

*/


/*


function shorterReverseLonger(a,b){
    let big
    let short
    if(a.length>b.length){
       big=a
        short=b
    } else {
        big=b
    short=a}
    if(a.length===b.length){
        big=a
        short=b
    }
    let newBig=big.split('').reverse().join('')
    return  short+newBig+short
}

console.log(shorterReverseLonger("hello", "bau"))
console.log(shorterReverseLonger("first", "abcde"))
console.log(shorterReverseLonger("", ""))




*/


/*

async  function a (){
    console.log(11)

    try {
        const x = await new Promise((res,rej)=>{rej('kjkj')})
    }
    catch (er){
        console.log(er)
    }
    console.log(22)
}
a()
console.log(116666)




*/


/*

function reverseNumber(n) {
    let a = String(n).split('')

    if(n>=0){
        return Number(a.reverse().join(''))
    } else {
        let res=  a.filter(e=>e!=='-').reverse().join('')
        return -Number(res)
    }
}


console.log(reverseNumber(123))
console.log(reverseNumber(-456))
console.log(reverseNumber(1000))



*/


/*

function delay(ms){
return new Promise((res)=>{
    setTimeout(()=>{
        res('111')
    },ms)
})
}






delay(2000).then((res)=>{
    console.log(res) })




*/


/*


const prom= new Promise((res,rej)=>{
    return res('resolve-43243')
})

prom   .finally((res)=>{
    console.log('finally1')
})
    .then((res)=>{
    console.log(res)
    return ('lkjdfslk')
})
    .then((res)=>{
        console.log(res)
    })
    .then((res)=>{
        console.log(2)
        throw new Error()
    })
    .catch((err)=>{
        console.log(err)
    })
    .then((res)=>{
        console.log(4)
    })
    .finally((res)=>{
        console.log('finally')
    })



*/


/*

function count (){
    let a=0
    return ()=>{
       return  a++
    }
}

let coutn1=count()
let coutn2=count()

console.log(coutn1())
console.log(coutn1())
console.log(coutn1())
console.log(coutn2())
console.log(coutn2())
console.log(coutn2())




*/


/*




function sumCubes(n){
    let num=[]
    for(let i=1;i<=n;i++){
        num.push(i*i*i)
    }
    return num.reduce((acc,el)=>acc+el)
}

console.log(sumCubes(3))






*/


/*


function isFlush(cards) {

    let arr = []
    for(let i=0;i<cards.length-1;i++){

        if(cards[i][cards[i].length-1]===cards[i+1][cards[i+1].length-1]) {
            arr.push(1)
        } else {arr.push(0)}
    }
    return arr.every(e=>e===1)
}

console.log(isFlush([  "AS", "3S",  "9S", "KS", "4S" ]))
console.log(isFlush([  "QD", "4D", "10D", "KD", "5D" ]))


*/


/*

const pr = new Promise((res)=>res('A'))
pr.then((res)=>{
    console.log('then',res)
  /!* return  Promise.reject('error')*!/
    throw new Error('error')
})
    .catch((err)=>{
        console.log('catch',err)
    })


*/


/*

function candies(kids){
   if(kids.length===0||kids.length===1){
       return -1
   } else {
       let bigNum = kids.reduce((acc,el)=>acc>el?acc:el)
       let arr=[]
      for (let i=0;i<kids.length;i++){
          arr.push(bigNum-kids[i])
      }
      return arr.reduce((acc,el)=>acc+el)
   }
}


console.log(candies([5, 8, 6, 4]))
/!*console.log(candies([5]))*!/




*/


/*

function averages(numbers) {
let res = []

    if(numbers===null||numbers===undefined){
        return res
    }

    for (let i=0;i<numbers.length;i++){
        if(numbers[i+1]!==undefined){
            let a = numbers[i]+numbers[i+1]

            let b = a/2
            res.push(b)
        }

    }
    return res
}


console.log(averages([1, 3, 5, 1, -10]))



*/


/*

function reduce(fraction) {
    let first=fraction[0]
    let second=fraction[1]
    let arrFirst=[]
    for(let i=1;i<=first;i++){
        if(first%i===0){
            arrFirst.push(i)
        }
    }
    let arrSecond=[]
    for(let i=1;i<=second;i++){
        if(second%i===0){
            arrSecond.push(i)
        }
    }

  let reversAF=arrFirst.reverse()
  let reversAS=arrSecond.reverse()
let arNum=[]
for(let i=0;i<reversAF.length;i++){
    for(let j=0;j<reversAS.length;j++){
        if(reversAF[i]===reversAS[j]){
arNum.push(reversAS[j])
        }
    }
}
let num=arNum[0]
    let one = fraction[0]/num
    let two = fraction[1]/num
    return [one,two]
}

console.log(reduce([45, 120]))



*/


/*


function removeChars(s) {
let arr=s.split('')

    let right=['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z','A','B','C','E','D','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z',' ']
    let res = []
    for (let i=0;i<arr.length;i++){
        if(right.find(e=>e===arr[i])){
            res.push(arr[i])
        }
    }
    return res.join('')
}


console.log(removeChars("that's a pie&ce o_f p#ie!"))



*/


/*

function isTriangle(a,b,c)
{
   if(a<b+c&&b<a+c&&c<a+b){return true}else {return false}
}

console.log(isTriangle(4,2,3))



*/


/*function cantBeatSoJoin(numbers) {
let arr= numbers.sort((a,b)=>(a.length>0?a.reduce((acc,el)=>acc+el):[])-(b.length>0?b.reduce((acc,el)=>acc+el):[]))
return arr.reverse().flat()
}

console.log(cantBeatSoJoin([[1, 2], [3, 4], [5, 6], [7, 8], [9]]))*/

/*function cantBeatSoJoin(numbers) {
let arr= numbers.map(e=>e.length>0?e.reduce((ac,el)=>ac+el):[])

    let obj={}

    for(let i=0;i<arr.length;i++){

        obj[arr[i]]=numbers[i]
    }
   let sortKeys= arr.sort((a,b)=>a-b).reverse()

    let resArr=[]
    for (let j =0;j<sortKeys.length;j++){
        resArr.push( obj[sortKeys[j]])
    }
    return resArr.flat(Infinity)
}

console.log(cantBeatSoJoin([[1, 0, 1, 0, 1, 0], [0, 1, 0, 0, 1, 0, 0, 1], [0], []]))*/


/*


function getDivisorsCnt(n){
    let count=1

  for (let i=1;i<=n/2;i++){
      if( n%i===0){count++}
  }
  return count
}

console.log(getDivisorsCnt(10))
console.log(getDivisorsCnt(54))
console.log(getDivisorsCnt(1))



*/


/*

function findMissingNumbers(arr){
let start= arr[0]

    let finish= arr[arr.length-1]
    let amount = finish-start
    let res = []
    for(let i=0;i<=amount;i++){
        res.push(start + i)
    }
   for(let i =0 ;i<arr.length;i++){
        res=res.filter(e=>e!==arr[i])
   }
   return res
}


console.log(findMissingNumbers([-3,-2,1,4]))


*/


/*

function remove (string) {

  let a= string.split(' ')
    let reeees=[]
for (let i=0;i<a.length;i++){
    let aaa= a[i].split('').reverse()
    let copy=[...aaa]

    for(let j=0;j<aaa.length;j++){
        if( aaa[j]==='!'){copy.shift()}else {break}
    }

    let res= copy.reverse().join('')
    reeees.push(res)
}
return reeees.join(' ')
}

console.log(remove("!Hi!"))
console.log(remove("Hi! Hi!"))

*/


/*

function squareDigits(num){
    let a =  String(num).split('')
    let res =[]
    for(let i=0;i<a.length;i++){
        res.push(String(Number(a[i])*Number(a[i])))
    }
    return Number(res.reduce((ac,el)=>ac+el))
}


console.log(squareDigits(3212))




*/


/*

function solution(pairs){
    let res = []
    for(let key in pairs){
        let k=key
        let pr = pairs[key]
        res.push(k+' = '+pr)
    }
    return res.join()
}

console.log(solution({'a': 1, 'b': 2}))
console.log(solution({'b': 1, 'c': 2, 'e': 3}))



*/


/*



function quicksum(packet){
    let ob = {A:1, B:2, C:3, D:4, E:5, F:6, G:7, H:8, I:9, J:10,K:11, L:12, M:13, N:14, O:15, P:16, Q:17, R:18, S:19, T:20, U:21, V:22, W:23, X:24, Y:25, Z:26}
 let a = packet.split('')
    let res=[]
    for (let i=0;i<a.length;i++){
if(a[i]===' '){res.push(0)}else {
    res.push(ob[a[i]]*(i+1))
}

    }

    if(res[0]===0||res[res.length-1]===0){return 0} else  {

        let nn=  res.reduce((ac,el)=>ac+el)
        if( isNaN(nn)){return 0} else {return nn}
    }

}

console.log(quicksum("A C M"))
console.log(quicksum("MID CENTRAL"))


*/


/*

function digitsAverage(input) {


 if(input>=0&&input<=9) {return input}else {

     let str = String(input)
     let arr=str.split('').map(e=>Number(e))
let newArr=[...arr]
for (let j=0;j<arr.length-1;j++){

        let res =[]
        for (let i=0;i<newArr.length-1;i++){
            res.push(Math.ceil((newArr[i]+newArr[i+1])/2))
        }
        let bb = res.join('')

        if(bb>=0&&bb<=9){return Number(bb)}else {
            newArr=[...res]}

}
 }

}


console.log(digitsAverage(345))
console.log(digitsAverage(89))
console.log(digitsAverage(8965))


*/


/*

function daysUntilChristmas(days) {
     const currentDate = new Date(days);

    const currentYear = currentDate.getFullYear();

    const christmasDate = new Date(currentYear, 11, 25);


    if (currentDate < christmasDate) {
            christmasDate.setFullYear(currentYear + 1);

    }


    const timeDiff = christmasDate.getTime() - currentDate.getTime();
    const daysDiff = Math.ceil(timeDiff / (1000 * 60 * 60 * 24));

    return daysDiff;
}

console.log(daysUntilChristmas(new Date(2016,11,8)))*/


/*

function largest(n, array) {

   for(let i=0;i<array.length;i++){
       for (let j=0;j<array.length;j++)
           if(array[j]>array[j+1]){
               let x = array[j]
               array[j]=array[j+1]
               array[j+1]=x

           }
   }
   return array.reverse().slice(0,n).reverse()
}

console.log(largest(2, [-3, -2, -1, 0, -9, -8, -7, -6, -4, -5]))
console.log(largest(3, [5, 1, 5, 2, 3, 1, 2, 3, 5]))


*/


/*


function reverseMiddle(array) {
    let z = array.length
    if( z%2===0){
        return [array[z/2],array[z/2-1]]
    }else {
        let v=Math.ceil(z/2)
        return [array[v],array[v-1],array[v-2]] }
}

console.log(reverseMiddle([1, 2, 3, 4, 5, 6]))
console.log(reverseMiddle([1, 2, 3, 4, 5, 6, 7]))


*/


/*



function encode(str)
{
    let string= str.split('')
    let res = []
    for(let i=0;i<string.length;i++){
        let z = string[i]
        if( z==='A'||z==='a'||z==='E'||z==='e'||z==='Y'||z==='y'||z==='O'||z==='o'||z==='U'||z==='u'||z==='I'||z==='i'||z==='G'||z==='g'||z==='D'||z==='d'||z==='R'||z==='r'||z==='P'||z==='p'||z==='L'||z==='l'||z==='K'||z==='k'){
if(z==='A'){res.push('G')}
    if(z==='a'){res.push('g')}
        if(z==='Y'){res.push('R')}
            if(z==='E'){res.push('D')}
                if(z==='e'){res.push('d')}
                    if(z==='y'){res.push('r')}
                        if(z==='O'){res.push('P')}
                            if(z==='o'){res.push('p')}
                                if(z==='U'){res.push('L')}
                                    if(z==='u'){res.push('l')}
                                        if(z==='I'){res.push('K')}
                                            if(z==='i'){res.push('k')}
            if(z==='G'){res.push('A')}
            if(z==='g'){res.push('a')}
            if(z==='R'){res.push('Y')}
            if(z==='D'){res.push('E')}
            if(z==='d'){res.push('e')}
            if(z==='r'){res.push('y')}
            if(z==='P'){res.push('O')}
            if(z==='p'){res.push('o')}
            if(z==='L'){res.push('U')}
            if(z==='l'){res.push('u')}
            if(z==='K'){res.push('I')}
            if(z==='k'){res.push('i')}
}
        else {res.push(z)}
    }
    return res.join('')
}


console.log(encode("Ala has a cat"))
console.log(encode("Gug hgs g cgt"))

*/


/*

function scf(array){

    let arr= array.sort((a,b)=>a-b)
    let num= arr[0]
  for(let i=2; i<=num;i++){


      let z =[]
for(let j=0;j<array.length;j++){

    if(array[j]%i===0) {
        z.push(true)
    }else{z.push(false)}

}
      if(z.every(e=>e)) {
          return i
      }



  }
  return 1
}


console.log(scf([21, 45, 51, 27, 33]))
console.log(scf([133, 147, 427, 266]))
console.log(scf([3, 7,5]))
console.log(scf([]))


*/


/*

function repeats(arr){
let a= arr.sort((a,b)=>a-b)
    let res=[]
    for (let i=0;i<a.length;i++){
        if(a[i]===a[i+1]){
            res.push(a[i])
        }
    }
    for(let j=0;j<res.length;j++){
        a=a.filter(e=>e!==res[j])
    }
return a.reduce((acc,el)=>acc+el)
};

console.log(repeats([4,5,7,5,4,8]))
*/


/*

function min(arr, toReturn) {
    let copyArr=[...arr]
    let a=copyArr.sort((x,y)=>x-y)[0]

    if(toReturn==='value'){
        return a
    }
    if(toReturn==='index'){
        return  arr.indexOf(a)
    }

}

console.log( min([4,2,31,1,5], 'value'))
console.log( min([4,2,1,4,5], 'index'))

*/


/*

function sortList (sortBy, list) {
    return list.sort((x,y)=>x[sortBy]-y[sortBy]).reverse()
}

console.log(sortList('a',[
    {"a": 1, "b": 3},
    {"a": 3, "b": 2},
    {"a": 2, "b": 40},
    {"a": 4, "b": 12}
]))


*/


/*
function sectSort(arr,one,two) {
    let arr1=[...arr]
    let a =  arr1.splice(one,two).sort()
   let start = arr.slice(0,one)
    let finish = arr.slice(one+two)
    return start.concat(a,finish)
}

console.log( sectSort([9, 7, 4, 2, 5, 3, 1, 8, 6], 2, 5))*/


/*

function noonerize(numbers) {
    if (numbers.length>0&&typeof numbers[0]==='number'&&typeof numbers[1]==='number'){
        let oneArr= String(numbers[0]).split('')
        let one = oneArr[0]
        let twoArr= String(numbers[1]).split('')
        let two = twoArr[0]

        let  resOne= oneArr.fill(two,0,1)
        let resTwo= twoArr.fill(one,0,1)
        if(+resOne.join('')>+resTwo.join('')){

            return +resOne.join('')-(+resTwo.join(''))
        }else {return +resTwo.join('')-(+resOne.join(''))}
    }else {return "invalid array"}


}


console.log(noonerize([357, 579]))


*/


/*

function sortByHeight(a) {

    let x= a.filter(e=>e!==-1)

let nnn= x.sort((a,b)=>a-b)
    let res=[]
    for(let i=0;i<a.length;i++){
        if(a[i]===-1){
            res.push(a[i])
        }else{
            res.push(nnn[0])
            nnn.shift()
        }
    }
    return res

}

console.log(sortByHeight([-1, 150, 190, 170, -1, -1, 160, 180]))

*/


/*

function sortByValueAndIndex(array) {

    let res = []
    for (let i=0;i<array.length;i++){
        res.push(array[i]*(i+1))
    }
    for(let j=0;j<res.length;j++)
    {for (let b=0;b<res.length;b++){
        if(res[b]>res[b+1]){
            let vari=res[b]
            res[b]=res[b+1]
            res[b+1]=vari
        }
    }}
    return res
}

console.log(sortByValueAndIndex([ 23, 2, 3, 4, 5 ]))
*/


/*


function sortGrades(lst){
 let res=[]
    let listZ=lst
    for(let i=0;i<listZ.length;i++){

        let vb= listZ.indexOf('VB')
        if(vb>=0){
            res.push('VB')
            listZ.splice(vb,1)

        }
        let vb1= listZ.indexOf('VB')
        if(vb1>=0){
            res.push('VB')
            listZ.splice(vb,1)

        }
        let o= listZ.indexOf('V0')
        if(o>=0){
            res.push('V0')
            listZ.splice(o,1)
        }
        let oo= listZ.indexOf('V0+')
        if(oo>=0){
            res.push('V0+')
            listZ.splice(oo,1)
        }
        let vvv= listZ.map(e=>+e.slice(1)).sort((a,b)=>a-b).map(e=>'V'+String(e))

         res=res.concat(vvv)
break

    }
return res
}


console.log(sortGrades(["V0+", "V0", "V16", "V2", "VB", "V6"]))
console.log(sortGrades(["VB","VB"]))


*/


/*

function exampleSort(arr,exampleArr) {
    let obj = {}
    for (let i = 0; i < arr.length; i++) {
        let key = arr[i]
        obj[key] = arr.filter(el=>el===arr[i])

    }
    let res = []
    for (let j=0;j<exampleArr.length;j++){
        if(obj[exampleArr[j]]){
            res=res.concat(obj[exampleArr[j]])
        }

    }
    return res
}

console.log(exampleSort([1,2,3,3,3,4,5],[2,3,4,1,5]))
console.log(exampleSort([1,2,3,3,3,5],[2,3,4,1,5]))
*/


/*

function nbYear(p0, percent, aug, p) {
let procent = percent/100
let res = 0
   let num =p0
    for (let i=0;i<p;i++){
        let z=Math.floor(num+num*procent+aug)

        if( num<p){
           res=res +1
            num=z
        }else{
            break
        }
    }
    return res
}

console.log(nbYear(1500, 5, 100, 5000))

*/


/*



function numbersWithDigitInside(x, d) {

    if(x<d||x===0){return [0,0,0]}
    if(x<10&&d===0){return [0,0,0]}
    let arr=[]

    for (let i=1 ; i<=x;i++){

       if(String(i).includes(String(d))){
           arr.push(i)
       }
    }
    let one= arr.length
    let sum= arr.reduce((acc,el)=>acc+el)
    let mult =  arr.reduce((acc,el)=>acc*el)
    return [one,sum, mult]

}


console.log(numbersWithDigitInside(1,0))
console.log(numbersWithDigitInside(11,1))
console.log(numbersWithDigitInside(44,4))

*/


/*

function mainDiagonalProduct(mat){
   let a=[]
    for(let i=0;i<mat.length;i++){
        a.push( mat[i][i])
    }
return a.reduce((ac,el)=>ac*el)
}

console.log(mainDiagonalProduct([[1,0],[0,1]]))
console.log(mainDiagonalProduct([[1,2,3],[4,5,6],[7,8,9]]))
*/


/*
function reOrdering(text){
   let a = text.split(' ')
    let word
    for (let i=0;i<a.length;i++){
        if( a[i][0]===a[i][0].toUpperCase()){
           word=a[i]
        }
    }
    let n= a.filter(e=>e!==word)
     n.unshift(word)
    return n.join(' ')
}

console.log(reOrdering('wario LoBan hello'))
console.log(reOrdering('ming Yao'))
*/


/*

function findScreenHeight(width, ratio) {

    let a = ratio.split(':')
    let res = width*(Number(a[1]))/(Number(a[0]))
    return String(width)+'x'+String(res)
}


console.log(findScreenHeight(1024,"4:3"))

*/


/*



function checkConcatenatedSum(x, y) {
    if(x>0){let a= String(x).split('')
        let res=0
        for(let i=0;i<a.length;i++){
            let num= a[i]
            res =res+ Number(num.repeat(y))

        }
        if(res===x){return true}else {return false}}else {
        let nn= Math.abs(x)
        let a= String(nn).split('')
        let res=0
        for(let i=0;i<a.length;i++){
            let num= a[i]
            res =res+ Number(num.repeat(y))

        }
        if(-res===x){return true}else {return false}
    }

}

console.log(checkConcatenatedSum(2997,3))
console.log(checkConcatenatedSum(-2997,3))

*/


/*


function sexy_prime(x, y){

    if(x===1||y===1){return false}else {
        let hhh=[]
        for (let i=2;i<x/2;i++){
            if(x%[i]===0){hhh.push(true)}else {hhh.push(false)}
        }
        let xxx= hhh.every(e=>!e)

        let jjj=[]
        for (let i=2;i<y/2;i++){
            if(y%[i]===0){hhh.push(true)}else {hhh.push(false)}
        }
        let yyy= hhh.every(e=>!e)

        if(xxx&&yyy){
            let res
            if(x>y){
                res =x-y
            } else {
                res = y-x

            } if(res===6){return true}else {return false}
        }else {return false}
    }

}

console.log(sexy_prime(24, 11))
console.log(sexy_prime(5, 11))
console.log(sexy_prime( 11,5))


*/


/*

function arrayMash (array1, array2) {
    let res = []
    for (let i=0;i<array1.length;i++){
        res.push(array1[i])
        res.push(array2[i])
    }
    return res
}


console.log(arrayMash([1, 2, 3], ['a', 'b', 'c']))


*/


/*

function sortIt(list, n) {
    let a=  list.split(', ')
    let object = {}
    for(let i=0;i<a.length;i++){
        let bb= a[i].toLowerCase()[n-1]
        let ss= a[i]
object[bb]=ss

    }

    return a.map(e=>e[n-1]).sort().map(e=>object[e]).join(', ')
}

console.log(sortIt('bill, bell, ball, bull', 2))
console.log(sortIt('cat, dog, eel, bee', 3))
*/


/*



function closest(arr){
    // return null if it is not possible to return 1 unique closest value


    let a = arr.filter(e=>e===0)
    if(a.length){return a[0]}
    else {
        let b = arr.filter(e=>e>0)
        let res1= b.sort((a,b)=>a-b)[0]


        let res2= arr.filter(e=>e<0).sort((a,b)=>a-b).reverse()[0]

        if(res2===undefined){return res1}
        if(res1===undefined){return res2}

        if(res1===Math.abs(res2)){return null}
        if( res1<Math.abs(res2)){return res1}else {return res2}

    }
}


console.log(closest([10, 3, 9, 1]))
console.log(closest([10, 3, 9, 3, -3,-10, -8]))


*/


/*

function calculate(string) {
    let a= string.split(' ')
    let res=[]
    for(let i=0;i<a.length;i++){
        if(!isNaN(Number(a[i]))){
            res.push(a[i])
        }
    }
    if(string.split(' ').includes('loses')){
        return +res[0]-(+res[1])
    }else {return +res[0]+(+res[1])}
}


console.log(calculate("Panda has 48 apples and loses 4"))



*/


/*

function friend(friends){
   return friends.filter(e=>e.length===4)
}


console.log(friend(["Ryan", "Jimmy", "123", "4", "Cool Man"]))

*/


/*


var isEven = function (n) { //if n is even return true, otherwise, return false
  let a = String(n).split('').reverse()
    if( a[0]==='0'||a[0]==='2'||a[0]==='4'||a[0]==='6'||a[0]==='8'){return true} else {return false}
}

console.log(isEven(24))
console.log(isEven(3))




function checkRoot(string){

let z= string.split(',').map(e=>+e)
    let res=[]
    let p=1
    for(let i=0;i<z.length;i++){
        if(z[i]+1===z[i+1]){res.push(true);} else{res.push(false)}
        p=p*z[i]
    }
    res.pop()

    let hh= z.includes(NaN)


   let bb=  Math.sqrt(p+1)

    if( res.every(e=>e)){return String(p+1).concat(', ').concat(String(bb))} else {return 'not consecutive' }
    if(hh){return 'incorrect input'}
}

console.log(checkRoot('4,5,6,7'))
console.log(checkRoot("0,5,2,3"))


*/


/*

function uniteUnique(...arg) {
    let res = []
    for(let i=0;i<arg.length;i++){
        let x = arg[i]
        for(let j=0;j<x.length;j++){

            if(!res.includes(x[j])) {
                res.push(x[j])
            }
        }
    }
    return res
}



console.log(uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1]))
console.log(uniteUnique([4, 3, 2, 2]))
console.log(uniteUnique([],[]))
*/


/*
function maxProduct(a) {
let z = a.reduce((acc,el)=>acc>el?acc:el)
    let index= a.indexOf(z)
     a.splice(index,1)
    let nn= a.reduce((acc,el)=>acc>el?acc:el)
    return z*nn
}

console.log(maxProduct([56, 335, 195, 443, 6, 494, 252]))
*/


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







