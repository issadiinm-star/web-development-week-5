// Requirement 1: Confirm JavaScript loads successfully
console.log("✅ SpendWise JavaScript loaded successfully!");

// Requirement 2: Store Application Data (Variables & Data Types)
const appName = "SpendWise";
let userName = "";
let monthlyBudget = 0;
let rentExpense = 0;
let foodExpense = 0;
let transportExpense = 0;
let utilitiesExpense = 0;
let isWithinBudget = true;

// Requirement 3: Collect User Input via Prompts
function collectUserInput() {
  userName = prompt("Welcome to SpendWise! What is your name?") || "User";
  monthlyBudget = parseFloat(prompt("Enter your total monthly budget ($):")) || 0;
  rentExpense = parseFloat(prompt("Enter your Rent & Housing expense ($):")) || 0;
  foodExpense = parseFloat(prompt("Enter your Food & Groceries expense ($):")) || 0;
  transportExpense = parseFloat(prompt("Enter your Transport expense ($):")) || 0;
  utilitiesExpense = parseFloat(prompt("Enter your Utilities & Internet expense ($):")) || 0;
}

// Requirement 4 & 5: Perform Budget Calculations using Reusable Functions
function calculateTotalExpenses(rent, food, transport, utilities) {
  return rent + food + transport + utilities;
}

function calculateRemainingBalance(budget, totalExpenses) {
  return budget - totalExpenses;
}

function calculateBudgetPercentage(budget, totalExpenses) {
  if (budget <= 0) return 0;
  return ((totalExpenses / budget) * 100).toFixed(1);
}

// Requirement 6: Display Clearly Labeled Results in Browser Console
function displayResults() {
  const totalExpenses = calculateTotalExpenses(
    rentExpense,
    foodExpense,
    transportExpense,
    utilitiesExpense
  );
  const remainingBalance = calculateRemainingBalance(monthlyBudget, totalExpenses);
  const percentageSpent = calculateBudgetPercentage(monthlyBudget, totalExpenses);
  isWithinBudget = remainingBalance >= 0;

  console.log("==============================================");
  console.log(`📊 ${appName.toUpperCase()} BUDGET SUMMARY FOR ${userName.toUpperCase()}`);
  console.log("==============================================");
  console.log(`Monthly Budget:         $${monthlyBudget.toFixed(2)}`);
  console.log("----------------------------------------------");
  console.log("Itemized Expenses:");
  console.log(`  • Rent & Housing:     $${rentExpense.toFixed(2)}`);
  console.log(`  • Food & Groceries:   $${foodExpense.toFixed(2)}`);
  console.log(`  • Transport:          $${transportExpense.toFixed(2)}`);
  console.log(`  • Utilities:          $${utilitiesExpense.toFixed(2)}`);
  console.log("----------------------------------------------");
  console.log(`Total Expenses:         $${totalExpenses.toFixed(2)} (${percentageSpent}% used)`);
  console.log(`Remaining Balance:      $${remainingBalance.toFixed(2)}`);
  console.log(`Within Budget Status:   ${isWithinBudget ? "Yes (On Track)" : "No (Over Budget)"}`);
  console.log("==============================================");
}

// Execute Application
collectUserInput();
displayResults();
