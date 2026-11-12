
// SpendWise Budget Tracker

// 1. Declare variables
let budget = 0;
let expenses = 0;
let remainingBalance = 0;

// 2. Function to calculate remaining balance
function calculateBalance(budget, expenses) {
    return budget - expenses;
}

// 3. Function to collect user input
function startBudget() {

    // Collect monthly budget
    let budgetInput = prompt(
        "Enter your monthly budget in KSh:"
    );

    // Check if user cancelled
    if (budgetInput === null) {
        return;
    }

    budget = Number(budgetInput);

    // Validate budget
    if (budgetInput.trim() === "" ||
        !Number.isFinite(budget) || budget <= 0) {
        alert("Please enter a valid budget.");
        return;
    }

    // Collect total expenses
    let expensesInput = prompt(
        "Enter your total expenses in KSh:"
    );

    if (expensesInput === null) {
        return;
    }

    expenses = Number(expensesInput);

    // Validate expenses
    if (expensesInput.trim() === "" ||
        !Number.isFinite(expenses) || expenses < 0) {
        alert("Please enter valid expenses.");
        return;
    }

    // 4. Perform budget calculation
    remainingBalance = calculateBalance(
        budget,
        expenses
    );

    // 5. Display results on the webpage
    document.getElementById("budget").textContent =
        "KSh " + budget.toLocaleString("en-KE");

    document.getElementById("expenses").textContent =
        "KSh " + expenses.toLocaleString("en-KE");

    document.getElementById("balance").textContent =
        "KSh " + remainingBalance.toLocaleString("en-KE");

    // 6. Display results in the browser console
    console.log("===== SpendWise Budget Summary =====");
    console.log("Monthly Budget: KSh " + budget);
    console.log("Total Expenses: KSh " + expenses);
    console.log("Remaining Balance: KSh " + remainingBalance);

    // Check spending status
    if (remainingBalance > 0) {
        console.log("Status: You are within your budget.");
    } else if (remainingBalance === 0) {
        console.log("Status: You have used your entire budget.");
    } else {
        console.log("Status: You have exceeded your budget.");
    }

    console.log("====================================");
}
