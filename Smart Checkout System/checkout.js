// Step 1: References to DOM
const cartTotal = document.getElementById ("cartTotal");
const membership = document.getElementById ("membership");
const coupon = document.getElementById ("coupon");
const calcBtn = document.getElementById ("calcBtn");
const message = document.getElementById ("message");
const subtotalText = document.getElementById ("subtotalText");
const discountText = document.getElementById ("discountText");
const shippingText = document.getElementById ("shippingText");
const finalTotalText = document.getElementById ("finalTotalText");

// Step 2: Add click event listener to calculate button
calcBtn.addEventListener(`click`, function(){
// Step 3 Inside the click function, read the user inputs    
    let cartTotalValue = Number(cartTotal.value);
    let membershipValue = membership.value;
    let cuponValue = coupon.value;
    // Convert coupon "yes" or "no" to BOOLEANl (Remember booleans is True or False)
    const hasCoupon = cuponValue === "yes";

// Step 4 Validation check, check if the customer actually bought something or entered silly numbers.
// we use ! exclamation to convert the value of the variable to its opposite boolean value.
if (!cartTotal.value || cartTotal <=0) { // remember || this is or
    message.textContent = "please enter a valid cart total greater than $0"; // you open {} to send the message and use textContent that is inplicit in Js.
    return; // With return you are stopping the function here!
}

// Step 5 Create checkout calculation variables; Make empty boxes to put all our calculated values in.
let subtotal = cartTotalValue;
let discountAmount = 0;
let shippingCost = 0;
let totalAfterDiscount = 0;
let finalTotal = 0;

// step 6 Determine membership discount using conditionals; this is like the cashier looking at your membership card to see how much you save.
if (membership === "premium") {
    discountAmount = subtotal * 0.15; // Remember in Step 5 you create checkout new variables and now you are filling the slots
}
else if (membership === "vip") {
    discountAmount = subtotal * 0.25;
} else {discountAmount = 0;}

// Step 7 : Apply coupon using conditionals

if (hasCoupon) {
    discountAmount = discountAmount * .10; // add extra 10% off, IMPORTANT this adds to the extra discount, not replace it!
}
// step 8 Calculate the total After discount (before shipping)
totalAfterDiscount = subtotal - discountAmount

// step 9 Determine shipping using conditionals
if (totalAfterDiscount >= 150) {
    shippingCost = 0;
} else (shippingCost = 9.99);

// Calculate final total usin operators
finalTotal = totalAfterDiscount + shippingCost

// Update the UI (The receipt values) uding textContent
// The .toFixed(2) trick: makes sure money shows as $10.50 and not $10,5
subtotalText.textContent = `$${subtotal.toFixed(2)}`;
discountText.textContent = `$${discountAmount.toFixed(2)}`;
shippingText.textContent = shippingCost === 0 ? "free": `$${shippingCost.toFixed(2)}`; // Here you have to check the logic bc nowere else you point the text shipping free, with the funcion.
finalTotalText.textContent = `$${finalTotal.toFixed(2)}`;

// Step 12: Update the message text using conditionals
if (shippingCost === 0) {
    message.textContent = "Free shipping Unlocked" // remember wher does the message is going to show up
} else {
    let neededForFree = 150 - totalAfterDiscount;
    message.textContent = ` ADD $${neededForFree.toFixed(2)} more to unlock free shipping!`;
}
});
