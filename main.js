// (function () {

//     //this is a prompt exercise with javascript function constructors 
//     var Question = function (questionList, answer, correctAnswer) {
//         this.questionList = questionList;
//         this.answer = answer;
//         this.correctAnswer = correctAnswer;
//     }

//     var question1 = new Question("is Javascript hard?", ["yes", "No", "Maybe"], 0)
//     var question2 = new Question("is Python worth learning?", ["No", "Yes", "Maybe"], 2)
//     var question3 = new Question("who is writing this code?", ["Lauren", "Leo", "Alex", "Fabri"], 1)

//     Question.prototype.questionSelected =
//         function () {
//             console.log(this.questionList)
//             //to show the answer, we loop through it
//             for (var i = 0; i < this.answer.length; i++) {
//                 console.log(i + ": " + this.answer[i])
//             }
//         }

//     Question.prototype.checkAnswer =
//         function (popQuestion) {
//             if (popQuestion == this.correctAnswer) {
//                 console.log("Congrats great answer")
//             } else {
//                 console.log("Oh no sorry try again!")
//             }

//         }

//     var listOfQuestion = [question1, question2, question3]

//     //we are selecting a random question anc console it 
//     var randomQuestion = Math.floor(Math.random() * listOfQuestion.length)

//     listOfQuestion[randomQuestion].questionSelected()

//     var popQuestion = parseInt(prompt("Please enter the answer in number here"));
//     listOfQuestion[randomQuestion].checkAnswer(popQuestion)
// })();

//This a edabit.com problem

// function specialReverse(s, c) {
//     var newArr;
//     newArr = s.split(' ') //["this", "is", "just", "practice"]
//     for (var i = 0; i < newArr.length; i++) {
//         console.log('what is ' + newArr[i])
//         var arr2 = newArr[i].charAt(0)
//         console.log(arr2)
//         // if (c === arr2) {
//         //     console.log(newArr.reverse())
//         //     // console.log(c)

//         // } else {
//         //     return s;
//         // }
//     }

// }



// console.log(specialReverse("this is just practice", "t"))
// console.log(specialReverse("this is just practice", "i"))


//closure problems
var getOlder = (function () {
    var age = 23;
    var isYoung = function (b) {
        return age - b;
    }
    return {
        verifiedAge: function (c) {
            console.log(isYoung(c))
        }
    }
})();

function adding(n) {
    var a = 10;

    function multiply(b) {
        return a * b;
    }
    return multiply
}

var addedNum = adding()
addedNum()

// ANOTHER CODE CHALLENGE!

// var johnFam = [124, 48, 268, 180, 42];

var john = {
    fullName: "John Parse",
    bill: [124, 48, 268, 180, 42],
    tipCalculator: function () {
        this.tip = []
        this.finalTotal = []
        for (var i = 0; i < this.bill.length; i++) {
            var bills = this.bill[i]
            var percentage;

            if (bills < 50) {
                percentage = .2
            } else if (bills >= 50 && bills <= 200) {
                percentage = .15
            } else {
                percentage = .1
            }
            this.tip[i] = Math.floor(bills * percentage)
            this.finalTotal[i] = bills + bills * percentage
        }
    }
}



var mark = {
    fullName: "MArk Lopez",
    bill: [77, 375, 110, 45],
    tipCalculator: function () {
        this.tip = []
        this.finalValue = []

        for (var i = 0; i < this.bill.length; i++) {
            var bills = this.bill[i];
            var percentage;

            if (bills < 100) {
                percentage = .2
            } else if (bills > 100 && bills < 300) {
                percentage = .1
            } else {
                percentage = .25
            }
            this.tip[i] = bills * percentage;
            this.finalValue[i] = bills + bills * percentage;
        }
    }
}


function tipAverage(tip) {
    var sum = 0
    for (var i = 0; i < tip.length; i++) {
        sum += tip[i]
    }
    return sum / tip.length
}



john.tipCalculator()
console.log(john)
mark.tipCalculator()
console.log(mark)

console.log(john.tip)
console.log(mark.tip)

john.average = tipAverage(john.tip)
mark.average = tipAverage(mark.tip)

if (john.average > mark.average) {
    console.log("john family paid the highest tip with and average of " + john.average)
} else if (mark.average > john.average) {
    console.log("mark family paid the highest tip with and average of " + mark.average)
} else {
    console.log("both families paid the same amount on average")
}

//CHALLENGE TO CONVERT ROMAN NUMERALS TO NUMBERS\
var romanLetters = {
    'I': 1,
    'V': 5,
    'X': 10,
    'L': 50,
    'C': 100,
    'D': 500,
    'M': 1000
}

var romanToInt = function (s) {
    var array = s.split('');

    var total = 0;
    var current;
    var currentValue;
    var next;
    var nextValue;

    for (var i = 0; i < array.length; i++) {
        current = array[i]
        currentValue = romanLetters[current]

        next = array[i + 1];
        nextValue = romanLetters[next]

        if (currentValue < nextValue) {
            total -= currentValue
        } else {
            total += currentValue;
        }
    }
    return total;
    // console.log(current, next)

}
console.log(romanToInt("X")) // 10
console.log(romanToInt("VI")) //6

//desctructuring objects

// var apellido = {
//     nombre: "lauren",
//     lastApel: "farello"
// }
// // console.log(apellido)

// var {
//     nombre,
//     lastApel
// } = apellido
// console.log(nombre)
// console.log(lastApel)

//Longest common prefix
//horizontal method
var longestCommonPrefix = function (strs) {
    let prefix = '';
    if (strs.length === 0) {
        return prefix
    }
    for (var i = 0; i < strs[0].length; i++) {
        let characters = strs[0][i]
        console.log(characters)
        for (var j = 0; j < strs.length; j++) {
            console.log(j)
            if (strs[j][i] !== characters) return prefix;

        }
        prefix += characters

    }
    return prefix
}

console.log(longestCommonPrefix(["flower", "flow", "flight"]))

//multiples of 3 and 5. Add them all

// n=10

// function solution(number) {
//     var suma = 0
//     // let num = [];
//     for (var i = 1; i < number; i++) {
//         if ((i % 3 === 0) || (i % 5 === 0) || (i % 3 === 0 && i % 5 === 0)) {
//             suma += i

//             // return i;
//         }
//     }
//     return suma
// }
// console.log(solution(10)) //23

//removing the vowels
function disemvowel(str) {
    // var a = str.toUpperCase().split('')
    // var vowels = new Array('A', 'E', 'I', 'O', 'U')
    // console.log(vowels)
    // console.log(a)
    return str.replace(/[aeiou]/gi, "");

}
console.log(disemvowel('This website is for losers LOL!'))

//DNA practice:

//In DNA strings, symbols "A" and "T" are complements of each other, as "C" and "G". 
// You have function with one side of the DNA (string, except for Haskell); 
// you need to get the other complementary side. DNA strand is never empty or there is no DNA at all (again, except for Haskell).

function DNAStrand(dna) {
    let lettersPaired = [];

    let findPairing = function (character) {
        switch (character) {
            case "A":
                lettersPaired.push("T");
                break;
            case "T":
                lettersPaired.push("A")
                break
            case "G":
                lettersPaired.push("C")
                break
            case "C":
                lettersPaired.push("G");
                break
        }
        console.log(lettersPaired)
    }
    for (var i = 0; i < dna.length; i++) {
        findPairing(dna[i])
    }
    return lettersPaired.join('')
}

//need to return a full string of all the words
console.log(DNAStrand("ATTGC"))
console.log(DNAStrand("GTAT"))


//validate the parenthesis
function checkParen(paren) {
    if (paren.length === 0)
        return true;
    if (paren.length % 2 === 1)
        return false;

    let openParen = ["(", "[", "{"]
    let closeParen = [")", "]", "}"]
    let stack = []

    for (let i = 0; i < paren.length; i++) {
        let characters = paren[i];
        if (closeParen.indexOf(characters) > -1) {
            let matchParen = openParen[closeParen.indexOf(characters)];
            if (stack.pop() !== matchParen)
                return false;
        } else {
            stack.push(characters)

        }
    }
    return (stack.length === 0)

}
console.log(checkParen("()"))
console.log(checkParen("())"))
console.log(checkParen("{()}"))

//bag of kilos
function createPackage(small, big, goal) {
    while (big > 0 && goal >= 5) {
        goal -= 5;
        big--;
    }
    if (goal > small) return -1;

    return goal;
}
console.log(createPackage(5, 9, 7))
//triple threat
function tripleThreat(a) {
    for (var i = 0; i < a.length; i++) {
        console.log(i)
        if (a[i + 1] === a[i] + 1 && a[i + 2] === a[i] + 2) return 1
    }
    i += 1;
    return 0;
}

//split string into a value of pairs
function solution(str) {
    var newStr = str.split('', 3);
    console.log(newStr)
    for (var i = 0; i < newStr.length; i++) {
        var str1 = newStr[i].split('', 3)
        console.log(str1)
    }
}
//I need to do more research on this exercise
solution('abc')

function findOdd(A) {
    let oddNumber = 0;
    for (var i = 0; i < A.length; i++) {
        for (var j = 0; j < A.length; j++) {
            if (A[i] == A[j]) {
                oddNumber++;
            }
        }
        if (oddNumber % 2 != 0) {
            return A[i]
        }

    }
    return 0
}
console.log(findOdd([20, 1, -1, 2, -2, 3, 3, 5, 5, 1, 2, 4, 20, 4, -1, -2, 5]))

// Capitalize the words

String.prototype.toJadenCase = function () {
    //in a prototype function think of assigning "this" to a variable
    let finalString = this.toLowerCase().split(' ')
    for (let i = 0; i < finalString.length; i++){
        finalString[i] = finalString[i].charAt(0).toUpperCase() + finalString[i].substring(1)
    }
    return finalString.join(' ')
}


//counting how many true in the array
function countTrue(a) {
    // if (a == [] ) return 0
    let result2 = a.filter(b => b == true)
    return result2.length
}
console.log(countTrue([true, false, false, true, false])) //2
console.log(countTrue([true, false, true, true, false])) //3
console.log(countTrue([])) //0


//pushin ceros to the end!!!
var moveZeros = function (arr_1) {
    let arr_ceros = [];
    let arr_others = [];
    let final_array = [];

    for (let i = 0; i < arr_1.length; i++){
        if (arr_1[i] === 0) {
            arr_ceros.push(arr_1[i])
        } else {
            arr_others.push(arr_1[i])
        }
    }
    final_array = arr_others.concat(arr_ceros)
    return final_array;
    
}
console.log(moveZeros([false,1,0,1,2,0,1,3,"a"])) //[false, 1, 1, 2, 1, 3, "a", 0, 0]
console.log(moveZeros([1, 2, 1, 1, 3, 1, 0, 0, 0, 0])) //[1, 2, 1, 1, 3, 1, 0, 0, 0, 0]




//FREQUENCY COUNTER
//write a function that takes 2 arrays and checks if the second array contains the square of each element from the first arrayd regardless of the order. 
//return true if correct or false otherwise. also, if both arrays are different in sizes, return false.

function same (arr1, arr2) {
    if(arr1.length !== arr2.length) return false;
    let frequencyCounter1 = {};
    let frequencyCounter2 = {};
    for (let val of arr1){
      frequencyCounter1[val] = (frequencyCounter1[val] || 0) + 1;
    }
    for (let val of arr2){
      frequencyCounter2[val] = (frequencyCounter2[val] || 0) + 1;
    }
    for (let key in frequencyCounter1){
      if(!(key * key in frequencyCounter2)){
        return false;
      }
      if(frequencyCounter2[key * key] !== frequencyCounter1[key]){
        return false;
      }
    }
      console.log(frequencyCounter1)
      console.log(frequencyCounter2)
    return true;
  }
  
console.log(same([1,3,9,1],[1,1,81,9]))
console.log(same([1,3,9],[2,6,9,81]))
console.log(same([1, 3, 9, 10], [2, 6, 9, 81]))
  

  
  function validAnagram(str1,str2){
    // if(str1.length !== str2.length) return false;
    // let counterStr1 = {};
    // let counterStr2 = {};
    // for(let val of str1){
    //   counterStr1[val] = (counterStr1[val] || 0) + 1
    // }
    // for(let val of str2){
    //   counterStr2[val] = (counterStr2[val] || 0) + 1
    // }
    // for(let key in counterStr1){
    //   if(!(key in counterStr2)){
    //     return false;
    //   }
    //   if(counterStr2[key] !== counterStr1[key]){
    //     return false;
    //   }
    // // console.log(counterStr1)
    // // console.log(counterStr2)
    // }
    // return true;

//A separate answer with only two loops
if(str1.length !== str2.length) return false;
let findLetter = {};

for(let i = 0; i < str1.length; i++){
    var letter = str1[i];
    findLetter[letter] ? findLetter[letter] += 1 : findLetter[letter] = 1;
}
console.log(findLetter)
//Here we are checking if a matching letter from the second string is inside the 
//first string. If so, substract the letter
for(let j = 0; j < str2.length; j++){
    let letter2 = str2[j]
    if(!findLetter[letter2]){
    return false;
    } else {
    findLetter[letter2] -= 1;
    }
    console.log(findLetter[letter2])
}
return true;
  }

console.log(validAnagram('azz', 'zza'))
console.log(validAnagram('qwerqty', 'qqeywrt'))
console.log(validAnagram('', ''))
  
//Write a function called countUniqueValues,which accepts a sorted arrya and counts
//the unique values in the array. There can be negative numbers in the array. But it will
// be sorted.

function countUniqueValues (arr){
    if(arr.length === 0) return 0
    arr.sort()
   let i = 0;
   for(let j = 1; j < arr.length; j++){
    
     if(arr[i] !== arr[j]){   
       i++;
       arr[i] = arr[j]
     }
   }
   return i + 1;
  }
  
  
  console.log(countUniqueValues([1,2,3,4,4,4,7,7,12,12,13]))  // 7
  console.log(countUniqueValues([8,1,6,5,8,4,2,1]))  
  console.log(countUniqueValues([]))  


//write a function called sumZero which accepts a sorted array of integers. The function
//should finf the first pair where the sum is 0. return and array that includes both values
//that sum to zero or undefined if a pair does not exist

function sumZero(arr) {
    let leftIndex = 0;
    let rightIndex = arr.length - 1;
    //while loop to make sure the left index is lower than right index
    while(leftIndex < rightIndex){  
      let sum = arr[leftIndex] + arr[rightIndex];
      if(sum === 0){
        return [arr[leftIndex], arr[rightIndex]]
        //here we break the while loop
      } else if(sum > 0){
        //we want the last index in the array to move to the next 
        rightIndex--;
      } else {
        //we want the first index in the array to move to the next 
        leftIndex++
      }
    }
  }
  
  console.log(sumZero([-2,-1,0,5,1,8,5]))
  console.log(sumZero([-2,-1,0,5,8,5]))