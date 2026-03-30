// Step 1 Get: reference to DOM elements
const failedAttempts = document.getElementById("failedAttempts");
const unusualLocations = document.getElementById("unusualLocations");
const recognizedDevice = document.getElementById("recognizedDevice");
const scanBtn = document.getElementById("scanBtn");
const message = document.getElementById("message");
const statusText = document.getElementById("statusText");
const statusDetails = document.getElementById("statusDetails");
const attemptOut = document.getElementById("attemptOut");
const locationOut = document.getElementById("locationOut");
const deviceOut = document.getElementById("deviceOut");

// Step 2: Add click event Listener
scanBtn.addEventListener(`click`, function(){

// Step 3 Read and convert user inputs    
    const failedAttemptsValue = Number(failedAttempts.value);
    const unusualLocationsValue = unusualLocations.value;
    const recognizedDeviceInput = recognizedDevice.value;
// Convert "yes" or "no" strings to true or false booleans
    const unusual = unusualLocationsValue === "yes";
    let recognized = recognizedDeviceInput === "yes";
// Step 4 : Validation   
    if (!failedAttempts.value || failedAttemptsValue < 0){  // || either or
      message.textContent = "Please enter a valid number of failed attempts 0 or more";
      message.className = "message danger";
      return;
};
// Step 5: Update "waht you selected" outputs
    attemptOut.textContent = String(failedAttemptsValue);
    locationOut.textContent = unusual ? "Yes" : "No"; //: otherwise
    deviceOut.textContent = recognized ? "Yes" : "No";
// Step 6: Create variables for final decision
    let status ="";
    let details ="";
// Step 7: Use conditionales to decide threat results 
    if (failedAttemptsValue >= 5) {
        status = "ACCOUNT LOCKED";
    }
    else if (unusual === true && recognized === false) { 
        status = "SUSPICIOUS";
    }
    else if (failedAttemptsValue >= 3 && unusual === true) {
        status = "SUSPICIOUS";
    }
    else {status = "Login Approved"; 
    };
// Step 8: Create helpful details message
    if (status === "ACCOUNT LOCKED") {
     details = "To many attempts. Please reset your password";
    }
    else if (status === "SUSPICIOUS") {
        details = "Unusual sign-in detected. Verify identity";
    }
    else {details = "No major risk indicators detected";
    }

    statusText.textContent = status;
    statusDetails.textContent = details;

    statusText.classList.remove("safe", "warn", "danger");
    if (status === "ACCOUNT LOCKED") {
        statusText.classList.add("danger");
    }
    else if (status === "SUSPICIOUS") {
        statusText.classList.add("warn");
    }
    else {statusText.classList.add("safe");}
}
); 