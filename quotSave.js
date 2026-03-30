// GOAL: Save single wuote strings in localStorage, load it on page load, and clear it when requested
// step 1 
quoteInput = document.getElementById("quoteInput");
saveQuoteBtn = document.getElementById("saveQuoteBtn");
clearQuoteBtn = document.getElementById("clearQuoteBtn");
quoteDisplay = document.getElementById("quoteDisplay");

// setp When the scriptloads read localStorage.getItem("savedQuote")
const favQuote = localStorage.getItem("favoriteQuote");
let quoteVal = quoteInput.value;
if (favQuote) {
    quoteDisplay.textContent = favQuote;
} else {quoteDisplay.textContent = "none quote saved yet"};

// step 3 ADD A CLICK EVENT LISTENER
saveQuoteBtn.addEventListener("click", () => {
    let currentQuote = quoteInput.value;
    currentQuote = localStorage.setItem("favoriteQuote", currentQuote);
    quoteDisplay.textContent = currentQuote;
    if (currentQuote === "") {
        quoteDisplay.textContent = "none quote saved yet";
        return; }
});

// step 4 add a click event listener to clearQuoteBtn.
clearQuoteBtn.addEventListener("click", () =>{
    localStorage.removeItem("favoriteQuote");
    localStorage.clear("textarea", "quoteInput");
    quoteInput.value = "";
    quoteDisplay.textContent = "none quote saved yet";
    });

