// Operators Homework - SIMPLE BUDGET
// The goal is to use operators to calculte how much money left after expenses and print the summar in the console.

let monthlyIncome = 7000;
let rentCost = 2500;
let foodCost = 1000;
let transportCost = 1000;
let funBudget = 1000;
let totalExpenses =(rentCost + foodCost + transportCost + funBudget);
let moneyLeft = (monthlyIncome - totalExpenses);

console.log("simple budget",{
    monthlyIncome: monthlyIncome,
    totalExpenses: totalExpenses,
    moneyLeft: moneyLeft
});

funBudget += 800;
totalExpenses =(rentCost + foodCost + transportCost + funBudget);
moneyLeft = (monthlyIncome - totalExpenses);

console.log("Update budget", {
    monthlyIncome: monthlyIncome,
    totalExpenses: totalExpenses,
    moneyLeft: moneyLeft,
});


// No DOM yet -- just logic practice.
// Mini Homework -- Access checker,  decide if a user can cces something.

let userAge = 21;
let hasDriversLicense = true;
let isDriver = true;

if (userAge >= 21 && hasDriversLicense === true && isDriver === false) {
    console.log("You cant drive, you have only the age")
} else if (userAge >= 21 && hasDriversLicense === true && isDriver === true) {
    console.log("you can drive, you have the age and the license")
} else {console.log("You cant drive, you dont have the age or the license");
}



