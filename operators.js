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


