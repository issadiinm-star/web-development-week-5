# SpendWise — JavaScript Foundation

## What My SpendWise Project Does
SpendWise is a personal budgeting web application that helps users track their monthly income and core expenses. In this version, SpendWise collects budget and expense data from the user via interactive browser prompts, calculates total expenses, remaining balance, and budget usage percentage, and outputs a clearly formatted financial summary in the browser console.

## JavaScript Concepts Implemented
* **External Script Linking:** Linked `script.js` to `index.html` using `<script src="script.js"></script>` at the end of the `<body>`.
* **Variables & Data Types:** Used `const` and `let` with `String`, `Number`, and `Boolean` data types.
* **User Input & Type Conversion:** Collected interactive user input using `prompt()` and converted text strings into floating-point numbers using `parseFloat()`.
* **Arithmetic & Comparison Operations:** Performed addition, subtraction, division, and boolean comparisons (`>=`).
* **Reusable Functions:** Organized application logic into modular functions that accept parameters and return calculated results.
* **Console Logging:** Displayed labeled, easy-to-read output in the browser console using `console.log()` and template literals.

## How Variables Are Being Used
* `const appName`: Stores the constant application title (`"SpendWise"`) as a string.
* `let userName`: Stores the user's name entered at runtime.
* `let monthlyBudget`: Stores the user's total monthly budget as a number.
* `let rentExpense`, `foodExpense`, `transportExpense`, `utilitiesExpense`: Store individual monthly expense amounts as numbers.
* `let isWithinBudget`: Stores a boolean (`true` or `false`) indicating whether the user's remaining balance is zero or greater.

## How User Input Is Collected
The `collectUserInput()` function uses JavaScript's `prompt()` dialog to ask the user for their name, monthly budget, and four expense categories. Because `prompt()` returns string values, each numeric entry is wrapped in `parseFloat()` with a `|| 0` fallback so invalid or blank inputs default safely to `0`.

## How Calculations Are Performed
1. **Total Expenses:** Adds `rentExpense`, `foodExpense`, `transportExpense`, and `utilitiesExpense` together.
2. **Remaining Balance:** Subtracts `totalExpenses` from `monthlyBudget`.
3. **Percentage Used:** Divides `totalExpenses` by `monthlyBudget`, multiplies by `100`, and formats the result to one decimal place using `.toFixed(1)`.

## How Functions Help Organize the Code
Instead of placing all logic in one continuous script, the code is separated into focused, reusable functions:
* `collectUserInput()`: Handles all prompt dialogs and stores input values.
* `calculateTotalExpenses(rent, food, transport, utilities)`: Accepts four expense parameters and returns their sum.
* `calculateRemainingBalance(budget, totalExpenses)`: Computes and returns the remaining funds.
* `calculateBudgetPercentage(budget, totalExpenses)`: Calculates the percentage of the monthly budget spent.
* `displayResults()`: Calls the calculation functions and prints a structured summary report to the console.
