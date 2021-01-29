console.log("Hello World!\n==========\n");

// Exercise 1 Section
console.log("EXERCISE 1:\n==========\n");

let count = Number(prompt("Input a whole number as a numeral between -100 and 100"))

if (isNaN(count) == true || count < -100 || count > 100 || count != parseInt(count)) {
    alert("That's not a whole-number numeral in the working range! \nI can't work under these conditions! \nI quit!");
}
else {
printOdds(count)
}
function printOdds() {
    if (count < 0) {
        for (let i = -1; i >= count; i--)
        if (i % 2 == -1) {
            console.log(i);
        }
    }
    else {
        for (let i = 1; i <= count; i++)
        if (i % 2 == 1) {
            console.log(i);
        }
    }
}

// Exercise 2 Section
console.log("EXERCISE 2:\n==========\n");

let myName=String(prompt("What's your name?"));
let myAge=Number(prompt("How old are you?"));

if (isNaN(myAge) == true) {
    alert("That's not an age - you messin' with me? \nI refuse to work with this disrespect! \nI quit!");
}
else {
checkAge(myName, myAge)
}
function checkAge (myName, myAge) {
    if (myAge >= 16){
        let aboveSixteen = myName + "! You can drive, homey!!";
        console.log(aboveSixteen)
    }
    else {
        let belowSixteen = "Sorry, " + myName + ", Ima drive till you're 16.";
        console.log(belowSixteen)
    }
}
