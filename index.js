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

// STRINGS - TEXT "HELLO WORLD", "I am learning JavaScript", "This is a string"
// NUMBERS - 42, 3.14, -10
// BOOLEANS - true, false
// NULL - null
// UNDEFINED - undefined (no variable, no value)
// null intentionally empty 
// symbol - unique identifier, symbol (`id`)

// example the grocery store
// sting prouct name (text)
let productName = "Apples";
console.log(typeof productName); // Output: string
let pricePerKg = 3.99;
let quantity = 5;
console.log(typeof pricePerKg); // Output: number
console.log(typeof quantity); // Output: number
let inStock = true; // or false
let isOrganic = false;// or true
console.log(typeof inStock); // Output: boolean
console.log(typeof isOrganic); // Output: boolean  
// object, complete prodcut information
let product = {
    name: "Apples",
    pricePerKg: 3.99,
    quantity: 5,
    inStock: true,
    categories: ["fruit", "organic"], // the re is an array inside the object
} ;
console.log(typeof product);// Output: object
// undefined - Not asigned yet 
let discountCode;
console.log(typeof specialoffer); // Output: undefined
// Null - Intentionally empty 
let specialOffer = null;
console.log(typeof specialOffer); // Output: object (this is a quirk in JavaScript, null is considered an object)

// USER REGISTRATION FORM - ALL the data types in one place
// strings - text from form inputs
let firstName = "Edu";
let lastName  = "Contreras";
let email = "educontreras@example.com";
let password ="mydogsname";
let bio = " I love coding and digs!"
// Numbers - Age, years of experince
let age = 35;
let yearsofExperience = 5;
let zipCode = 12345;
// Booleans - checkboxes and toggles
let wantsNewsletter = true;
let agreesTerms = true;
let isVerified = false;
// object - group real data
let userProfile = {
    firstName: "Edu",
    lastName: "Contreras",
    fullName: firstName + " " + lastName,
    age: 35,
    email: email,
    preferences: {
        newsletter: wantsNewsletter,
        theme: "dark",
        language: "es",
    }
};
// Now some Undefines fields
let profilePicture;
let paymentMethod;
// NOW some Null - explicitly no value yet
let selectPlan = null;
// NOW THE OUTPUTS CONSOLELOGE
console.log("USER REGISTRATION DATA:");
console.log("Name:", userProfile.fullName, "-", typeof userProfile.fullName);
console.log("Age:", userProfile.age, typeof userProfile.age);
console.log("newsletter:", userProfile.preferences.newsletter, typeof userProfile.preferences.newsletter);
console.log(typeof userProfile);
console.log("profile Picture:", profilePicture, typeof profilePicture);
console.log("Select plan:", selectPlan, typeof selectPlan);
// From form inputs; Everything is a string!
let userAge = document.getElementById("Age"); // This will be a string, even if the user types a number
let yearsToAdd = 5;
// This wont output as expected because userAge is a string, we need to convert it to a number first
let futureAge = userAge + yearsToAdd;
console.log(futureAge); // Output will be something like "35" + 5 = "355" (string concatenation) instead of 40 (number addition)

let empty = null;
console.log(typeof empty);

// adding different types
console.log(5 + "5");
console.log(5 - "5");
console.log("hello" * 2);
console.log(true + true);
// the shopping cart items
let itemPrice = 29.99;
let item2Price = 15.50;
let taxRate = 1.08;
let hasCoupon = true;
// Now calculate the subtotal

let subtotal = itemPrice + item2Price;
console.log ("Subtotal:", subtotal); // Output: "29.9915.50" (string concatenation)

// Calculate Tax=
let totalTax = subtotal * taxRate;
console.log("total tax:", totalTax);
