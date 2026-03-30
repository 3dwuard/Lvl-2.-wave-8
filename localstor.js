


// Step 1 Select and store the following elements in variables:

const nameInput = document.getElementById("nameInput");
const saveNameBtn = document.getElementById("saveNameBtn");
const loadNameBtn = document.getElementById("loadNameBtn");
const clearNameBtn = document.getElementById("clearNameBtn");
const savedNameDisplay = document.getElementById("savedNameDisplay");
const visitCountText = document.getElementById("visitCountText");
const storageCard = document.getElementById("storageCard");
const toggleThemeBtn = document.getElementById("toggleThemeBtn");
const themeStatusText = document.getElementById("themeStatusText"); 


// Inside the listerner: Read the current value from nameInput.
saveNameBtn.addEventListener("click", () => {
    // when it says inside the listener, we have to create a value for nameInput, in this case it will be currentName
 const currentName = nameInput.value;
    // Use localStorage.setItem("savedName", value) to save it.
    // befor we have to check if the currenName is empty, and then we update the savedName display 
    // (option) If the input is empty, you can decide not to save or show a message like "none yet"
    if (currentName === "") {
        savedNameDisplay.textContent = "none yet";
        return; // i want to exit out 
    }
    // now we save the last function instrucion
    // update savedNameDisplay.textContent so it shows the saved value.
    localStorage.setItem ("savedName", currentName);
    savedNameDisplay.textContent = currentName;
});

// Step 3:  Add a "click" event Listener to loadNameBtn,  Inside the listener:
// read the value from localStorage.getItem("savedName").
// If its null (nothing saved), set savedNameDisplay.textContent to "none yet".
// Otherwise, show the saved value in savedNameDisplay
loadNameBtn.addEventListener("click", () => {
  const savedName = localStorage.getItem("savedName");
    if (savedName === null) {
        savedNameDisplay.textContent = "none yet";
        return;
    } 
    else {savedNameDisplay.textContent = savedName};
})  

// Step 4: Add a "click" event listener to clearNameBtn
// Inside the listener;
// Use localStorage.removeItem("savedName")
// clear the input (set value to an empty string).
// set savedNameDisplay.textContent back to "none yet".

clearNameBtn.addEventListener("click", () => {
    localStorage.removeItem("savedName");
    nameInput.value = "";
        savedNameDisplay.textContent = "none yet"
    });

// TASK 2 – VISIT COUNTER (RUNS ON PAGE LOAD)
// STEP 5: When the script loads, read the current value of
//         localStorage.getItem("visitCount").
// First we are going to grab the element were we are going to sho the count, that would be StoredCountVal
// second we are going to get that number to read from the current count from lcalStorage
const storedCountVal = localStorage.getItem("visitCount");
// third place we are going to convert it to a number, handling the first visit (null)
let visitCountVal = storedCountVal === null ? 0 : Number(storedCountVal);
// in step 4 what we are saying is add 1 bc everytime this page load is a new visit
visitCountVal += 1;
// step 5 we are saving the new count back to localStorage
localStorage.setItem("visitCount", visitCountVal);
// step six, we show the count on the page
visitCountText.textContent = visitCountVal;
//
// STEP 6: If visitCount is null (first visit), treat it as 0.
//
// STEP 7: Convert the stored string to a number (for example, using Number()).
//
// STEP 8: Add 1 to this number (because the page was just loaded).
//
// STEP 9: Save the new value back to localStorage with setItem.
//
// STEP 10: Update the textContent of visitCountText (id "visitCountText")
//          so it shows the current count.

// ==============================================
// TASK 3 – CARD THEME TOGGLE
// ==============================================
//
// STEP 11: Select and store:
//          - the main card (id "storageCard")
//          - the toggleThemeBtn (id "toggleThemeBtn")
//          - the themeStatusText (id "themeStatusText")

//
// STEP 12: When the script loads, read the current theme from
//          localStorage.getItem("cardTheme").

const storedTheme = localStorage.getItem("cardTheme");
//
// STEP 13: If the theme is "dark", add the "card-dark" class to the card
//          and set themeStatusText.textContent to "dark".
//          Otherwise, make sure the class is NOT there and set text to "light".
if (storedTheme === "dark") {
 storageCard.classList.add("card-dark");
    themeStatusText.textContent = "dark";
  }
        else {
            storageCard.classList.remove("card-dark");
            themeStatusText.textContent = "light";
        }
// STEP 14: Add a "click" event listener to toggleThemeBtn.
//          Inside the listener:
toggleThemeBtn.addEventListener("click", () => {
  const currentTheme = localStorage.getItem("cardTheme");
    if (currentTheme === "light" || currentTheme === null) {
        storageCard.classList.add("card-dark");
        themeStatusText.textContent = "dark";
        localStorage.setItem("cardTheme", "dark");
    }    else if (currentTheme === "dark") {
        storageCard.classList.remove("card-dark");
        themeStatusText.textContent = "light";
        localStorage.setItem("cardTheme", "light");
    } 
});
//          - Check the current theme (you can read from localStorage again
//            or track it in a variable).
//          - If it's "light" or not set:
//              * change it to "dark"
//              * add "card-dark" class
//              * update themeStatusText to "dark"
//              * save "dark" in localStorage.
if (currentTheme === "light" || currentTheme === null) {
    storageCard.classList.add("dark");
    storageCard.classList.add("card-dark");
    themeStatusText.textContent = "dark";
    localStorage.setItem("cardTheme", "dark");
} 
else if (storedTheme === "dark") {
    storageCard.classList.add("light");
    storageCard.classList.remove("card-dark");
    themeStatusText.textContent = "light";
      localStorage.setItem("cardTheme", "light");
};
//          - Else if it's "dark":
//              * change it to "light"
//              * remove "card-dark" class
//              * update themeStatusText to "light"
//              * save "light" in localStorage.

//localStorage.setItem("favoriteColor", "purple");

//const color = localStorage.getItem("favoriteColor");

//localStorage.removeItem("favoriteColor");

// localStorage - browser storage object
//.setItem(Key, value) - save Data
//.getItem(Key) - read save Data
//.removeItem(key) - delate one save getItem
//.clear() - delate ALL saved data for this website (use carfully)
