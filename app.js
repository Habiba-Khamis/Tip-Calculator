// Get the things that we want to manipulate 
// Use const in the case of wanting to change the variable later in the code

const billAmountInput = document.getElementById("bill-amount");
const tipPercentageInput = document.getElementById("tip-percentage");
const calculateButton = document.getElementById("calc-btn");
const errorMessage = document.getElementById("error-message");
const tipAmount = document.getElementById("tip-amount");
const totalBill = document.getElementById("total-bill");

// Events
calculateButton.addEventListener("click", calculateTip);


// Functions
// This function is to calculate the tip amount by summing the bill amount and the tip percentage and dividing them by 100
function calculateTip() {
    const billAmount = Number(billAmountInput.value);
    const tipPercentage = Number(tipPercentageInput.value);

    // Initial values
    errorMessage.textContent = "";
    tipAmount.textContent = "$0.00";
    totalBill.textContent = "$0.00";


    // Checking errors 
    if (billAmountInput.value === ""){
        errorMessage.textContent = "*Bill amount cannot be empty!";
    } else if (tipPercentageInput.value === "") {
        errorMessage.textContent = "*Tip percentage cannot be empty!";
    } else if (billAmount <= 0) {
        errorMessage.textContent = "*Bill amount must be greater than zero!";
    } else if (tipPercentage < 0) {
        errorMessage.textContent = "*Bill amount cannot be negative!"
    } else if (tipPercentage > 100) {
        errorMessage.textContent = "*Tip Percentage cannot be greater than 100!";
    } else {
        const tipAmountResult = billAmount * tipPercentage / 100;
        const totalBillResult = billAmount + tipAmountResult;

        // To update the UI
        tipAmount.textContent = "$" + tipAmountResult.toFixed(2); // Two decimal points
        totalBill.textContent = "$" + totalBillResult.toFixed(2);
    }
}

