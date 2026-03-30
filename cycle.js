// Step 1 Array of messages 
// we store the message in an array, we need a list of messages. An array is perfect because it keeps them in order and we can access them by index (0, 1, 2..)
const messages = [
    "Hello",
    "Kepp going",
    "You can do This",
    "Js Is fun",
    "One more type, one ore click at the time"
];
// Step 2 Variable Couter; to track wich messages we are at
// Remember in wicj message we are on, we need a variable to track the current index. Without it. we wouldnt know wich message to show next.
let currentIndex = 0;
// Step 2.1 In the variables get the Elements
// Ww have to find the elements in the HTML we want to interact with, we need to change the text inside the <p> and respond to the button click. So we grab them with document.getElementById
const messageDisplay = document.getElementById("messageDisplay");
const cycleBtn = document.getElementById("cycleBtn");
// Step 3 The fucntion , The function that update the message and moves the index
// Write the function that does the work, when the button clicked, we want to: 
// Show the message at currentIndex.  Then updated currentIndex to the next index(or wrap around).
// we put the logic inside a function so we can call it whenever the button is clicked.
function showNextMessage() {
    // Call in the function to show the current message
    messageDisplay.textContent = messages[currentIndex];
    // Now move the index to the next message (and wrap around to 0 when at he end)
    currentIndex = (currentIndex + 1) % messages.length;
}
// We separated into a function? bc it keeps the logic organized, if we later want to also change colors or do somthing else, we add it here.
// The event listener just needs to call this fucntion - it doest neet to know how it works.


// Step 4 add the eventlistener; Attach the function to the button click
// We use addEventListener to tell th ebutton: When someone clicks you, run showNextMessage.
cycleBtn.addEventListener(`click`, showNextMessage);

// Step 5 change Background color 
document.body.style.backgroundColor = "hsl(${currentIndez * 72}, 70%, 80%)";

// Step 6 Add a click counter

let clickCount = 0;
// inside showNextMessage:
clickCount++;
if (clickCount >= 3) cycleBtn.disabled = true;
