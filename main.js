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