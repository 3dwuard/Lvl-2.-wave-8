// step 1 Select Elements
const profileNameDisplay = document.getElementById("profileNameDisplay");
const profileMoodDisplay = document.getElementById("profileMoodDisplay");
const colorValueText = document.getElementById("colorValueText");
const nameInput = document.getElementById("nameInput");
const colorInput = document.getElementById("colorInput");
const moodSelect = document.getElementById("moodSelect");
const resetProfileBtn = document.getElementById("resetProfileBtn");

// Step 2 Add an Input event Listener to the name input.

nameInput.addEventListener("input", () => {
    const inputName = nameInput.value

    if (inputName === "") {
        profileMoodDisplay.textContent = "Your Name"
    } else {
        profileNameDisplay.textContent = inputName;
    }
});

// Step 3 Add an "input"  event listener to the color input.

colorInput.addEventListener("input", () => {
    const inputFavColor = colorInput.value;

    if (inputFavColor === "") {
        colorValueText.textContent = "none yet"
    } else {
        colorValueText.textContent = inputFavColor;
    }
});

// step 4 Add a "Change" event listener to the mood select.
moodSelect.addEventListener("change", () => {
    const selectedMood = moodSelect.value;
    profileMoodDisplay.textContent = `Current mood: ${selectedMood}`;
});

// Step 5 add a "click"  event listener to the reset button

resetProfileBtn.addEventListener("click", () => {
    nameInput.value = "";
    moodSelect.value = "Neutral";
    nameInput.textContent = "Your Name";
    colorInput.textContent = "none yet";
    profileMoodDisplay.textContent = "Current mood: neutral";
});

