// Array methods
// Think as an array as a number list - like a row of cards laid out in front of you.
// arrayss methods are built-in helpers that let you:
// add cards
// remove cards
// look at each card
// Change cards into new cards
// pick only certain cards
// Example
let fruits = ["Apple", "Banana", "Cherry"];
// push() add a cad to the right end
fruits.push("Mango");
console.log(fruits);
// .pop  remove the last card
let lastFruits = fruits.pop(1);
console.log(fruits);
// shift() - remove the first card
let firstFruits = fruits.shift();
console.log(fruits);
// unshift() - add card to the left end
fruits.unshift("kiwi");
console.log(fruits);
// forEach - look at each card and do something 
fruits.forEach(function(fruit){
    console.log("I like", fruit);
});
// map.() Make a new row of tranformed cards.
// It creates a new array by applying a function to every item.
let upperFruits = fruits.map(function(fruit){
    return fruit.toUpperCase();
});
console.log(upperFruits);
// filter() Keep only the cards that pass the test
// It creates a new array with only the item that makes a condition true.
let longFruits = fruits.filter(function(fruit){
    return fruit.length > 5;
});
console.log(longFruits);
// Class excercise

let fruitse = ["mango", "banana", "orange"];
console.log(`original Fruitse array`, fruitse);

fruitse.push("grape");
console.log(`use push`,fruitse);
fruitse.unshift("apple");
console.log(`use unshift`,fruitse);
fruitse.pop();
console.log(`use pop`, fruitse);
fruitse.shift();
console.log(`use shift`, fruitse);
// Using array methods with objects.
const person = {
    name: "Jhon",
    tasks: ["code", "sleep", "gym"],
};

person.tasks.push("drink water");
console.log(person.tasks);
// Say hello to each item
let mentee = ["Bob", "Nancy", "Danna"];
mentee.forEach(mentee => {
    console.log(`Hello my name is ${mentee} and i am ready to code!`)
});
// use .map to transform values
let numbers = [2, 5, 7, 12];

let doubleNumbers = numbers.map((doubledNum) => doubledNum*2);
console.log(numbers);
console.log(doubleNumbers);


const labeledNumbers = numbers.map((num) => `Value: ${num}`);
console.log(labeledNumbers);

const tripleNumbers = numbers.map((tripleNumber) => tripleNumber*3);
console.log(tripleNumbers);



//Value: 2
//Value: 5




// keep only some values
let mixedNumbers = [1, 2, 3, 5, 25, 15, 78];
let bigNumbers = mixedNumbers.filter(filterNum => filterNum >= 10);
console.log(bigNumbers);


let evenNumbers = mixedNumbers.filter(evenNum => evenNum % 2 === 0);
console.log(evenNumbers);

// 1 divisable by 2? No, is the answer equal to 0? No - This is not an even number.
// 2 divisable by 2? Yes, is the answer 0 === 0? yes, This an even number

function greet(name) {
    console.log(`Hello ${name}`);
}

greet(`Jhon, Luis, Lena`);

// The 4 type of functions you will use most
// function Declaration 

function  add(a, b) {
    return a + b;  
}
let result = add(5, 3);
console.log(result);
//Use this when, you are building main logic that you will reuse everywhere (like calculateTotal, format Name)

function adding(a, b) {
    return (a * b) ;
}
let results = adding(180, 175);
console.log(results);

// Function Expression - recipe stored in a variable

const multiply = function(a, b) {
    return a % b;
};
let product = multiply(5, 5);
console.log(product);

// Use this when: you want to control exactly when the function is available (hoisting can be confusing - but you can just use this for safety)

// Arrow function the modern shortcut

const divide = (a, b) => a / b;

let quotient = divide (10, 2);
console.log(quotient);
// use this when you need a quick, small function (like inside array methods: map, filter, or eventListeners)
// Callback Function - a function you pass to another function

function runTwice(action) {
    action();
    action();
}

runTwice(() => console.log(`hello!`));
// Use tgis when: Something happens later - like a button is clickes , or after a timer. (I will see the real example in DOM)
// button. addEventListener("click", () => alert ("clicked"));  The arrow function is the callback - it runs when the button is clicked.

const heading = document.getElementById(`mainHeading`);
const button = document.querySelector(`.myButton`);

// Changign Content

textContent (heading.textContent = `New Title`) // What it does change only the text safe , no HTML
innerHTML divide.innerHTML = `<p>Hi</p>` // CHanges HTML inside (use carefully)

// heading.textContent = `Welcome!`;
button.addEventListener(`click`, () => {
    heading.textContent = `Button was clicked!`;
});
