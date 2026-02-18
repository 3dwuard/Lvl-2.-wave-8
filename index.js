// Homework 1: Build a profile using variables only.
const fullName = "Eduardo";
let profileAge = 35;
let country = "Mexico";
let favoriteHobby = "running";
let isStudent = true;

console.log(`PROFILE CARD, My name is ${fullName} I am ${profileAge} years old. I live in ${country}, my favorite hobby is ${favoriteHobby}. Am I a student? ${isStudent}`);

profileAge = 33;
country = "Argentina";
favoriteHobby = "paddel";
isStudent = false;

console.log(`PROFILE CARD, My name is ${fullName} I am ${profileAge} years old. I live in ${country}, my favorite hobby is ${favoriteHobby}. Am I a student? ${isStudent}`);

// Homework 2. Daily Status Summary
let dayName = "Tuesday";
let stepsWalked = 3000;
let waterCups = 3;
let didWorkout = true;
let eveningPlan = null;
let favoriteSnack = undefined;

console.log("Today is " + dayName, "and I walked " + stepsWalked, "steps. I drink  " + waterCups, "glass of water. Did i workout ? " + didWorkout, " Did i have plans for later " + eveningPlan, "What is my favorite Snack " + favoriteSnack);

eveningPlan = "watch a seires";
favoriteSnack = "chocolate or gummies";

console.log(`Today is ${dayName} I have walked ${stepsWalked} steps. I drink ${waterCups} glass of water. Im going to the gym ${didWorkout}. My plans this evening ${eveningPlan}. My favorite snack is ${favoriteSnack} ` );