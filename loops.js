
// count UP with a for loop
for (i = 1; i <= 10; i++) {
    console.log (`count up: ${i}`);
}
// SUM of Numbers
let maxNumber = 5;
let total = 0;

for (i = 1; i <= maxNumber; i ++) {
    total += i;
}
console.log (`sum of numbers from 1 to ${maxNumber} is ${total}`);
// count down
for (i = 5; i >= 1; i --) {
    console.log (`countown: ${i}`);
};
// LOOP OVER AND array
let favoriteSnacks = ["chocolate", "gummies", "icecream"];

for (let i = 0;  i < favoriteSnacks.length; i++) {
    console.log(`snack ${i} : ${favoriteSnacks[i]}`);
}
// Basic While loop count up
let number = 1;
while (number <= 5) {
console.log(`while counting up to: ${number}`)
number += 1;   
}
// Countdown while while
let countdown = 5;
while (countdown >= 0) {
    console.log(`While countdown: ${countdown}`)
    countdown -= 1;
}
// Sum using a while loop
let limit = 5;
let current= 1;
let sum = 0;

while (current <= limit) {
    sum += current;
    current++;
}
console.log(`while loop sum from 1 to ${limit} is ${sum}`);
// Loop through an array with while
let dailyTasks = ["code", "eat", "sleep", "repeat"];
let index = 0;
while (index < dailyTasks.length){
    console.log (`task: ${index}: ${dailyTasks[index]}`);
    index++;
}

// Think of an array as a number list of items.
// Example: let numbers = [10, 20, 30];
// Positions:
// index 0 = 10
// index 1 = 20
// index 2 = 30
// forEch() - Do something with each item
// use it when you want to perfomr an action for every element, but you dont need a new array back.
// Visaul Analogy:
// imagine ypu have a list of names , ypu want to say "Hello " to each person. ypu go through the list one by one greet them, and thats it - You dont create a new list.

let names = ["Ana", "Ben", "Cara"];
    names.forEach(function(name){
        console.log("hello:" + name);
    })
// .forEach() always loops through the whole array.
// it does not return anything (or returns undefined).
// Use it for side effects like logging, updating something outside, etc.

// .map() Transform each item into something new
// Use it when you want to create a new array of the same length, where each element is transformed.
// Visual analogy: lest imagine
// you have a list of prices in dollars. You want a new list with the same prices converted to euros
// (multiplied by 0.85) you got through each price, convert it , and put the result in a new list.

let dollars = ["10", "20", "30"];

let euros = dollars.map(function(price){
    return price * 0.85;
})
console.log("euros:", euros);

// filters () keep the items that pass a test
// use it when you want to create a new array with only the elements that satisfy a condition. 
// visual analogy: Imagine
// You have a list of ages. you want a new list containing only the ages that are 18 or older.
// You check each age; if it passes (> 18), you add it to the new list.
let ages = [15, 22, 18, 12, 30];
let adults = ages.filter(function(age){
    return age >= 18;
});

console.log(adults);

// Now how does this conects with for loops
// yoy might remember the for loop from earlier:
let numbers = [1, 2, 3];
for (let i = 0; i < numbers.length; i ++) {
    console.log(numbers[i]);
}
// the new way elegantly or shoreter will be
numbers.forEach(function(num){
    console.log(num);
})
// with for loop
let double = [];
for (let i = 0; i < numbers.length; i ++) {
    double.push(numbers[i] * 2);
}
// with map
let doubled = numbers.map(num => num *2);
console.log (doubled);
// excercises:
