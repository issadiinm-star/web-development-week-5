
# SpendWise - JavaScript Foundation

## Project Description

SpendWise is a simple budgeting application designed to
help users manage their monthly budgets and track expenses.

The application allows users to enter their monthly budget
and total expenses. It then calculates the remaining balance
and displays the results on the webpage and in the browser
console.

The project demonstrates the use of JavaScript fundamentals
in building an interactive budgeting application.

## Technologies Used

- HTML5
- CSS3
- JavaScript

## JavaScript Concepts Implemented

### 1. Variables

The application uses `let` to declare variables that store
budget-related information.

Examples:

- budget
- expenses
- remainingBalance

### 2. Data Types

The project uses:

- Number: To store budget and expense amounts.
- String: To collect user input and display messages.
- Null: To handle cancelled user prompts.
- Boolean: To evaluate conditions and validate input.

### 3. User Input

The JavaScript `prompt()` method collects the user's
monthly budget and total expenses.

The `Number()` function converts the entered values
into numbers for mathematical calculations.

### 4. Budget Calculations

The application calculates the remaining balance using:

Remaining Balance = Monthly Budget - Total Expenses

For example:

Monthly Budget = KSh 50,000
Total Expenses = KSh 15,000
Remaining Balance = KSh 35,000

### 5. Functions

The project uses reusable functions to organize the code.

The `calculateBalance()` function calculates the remaining
budget by subtracting expenses from the budget.

The `startBudget()` function collects user input, validates
the information, performs calculations, and displays results.

### 6. Conditional Statements

The application uses `if`, `else if`, and `else` statements
to determine whether the user is within budget, has used
the entire budget, or has exceeded the budget.

### 7. Displaying Results

The application uses:

- `console.log()` to display budget calculations in the
  browser console.
- `document.getElementById()` to update the webpage.
- `alert()` to display input validation messages.

## How to Run the Project

1. Download or clone this repository.
2. Open the SpendWise project folder.
3. Open `index.html` in a web browser.
4. Click the Start Budget Tracking button.
5. Enter your monthly budget.
6. Enter your total expenses.
7. View your budget summary on the webpage.

To view the console output:

1. Right-click the webpage.
2. Select Inspect.
3. Open the Console tab.
4. View the SpendWise budget summary.

## Project Structure

SpendWise/
- index.html
- style.css
- script.js
- README.md

## Author

SpendWise JavaScript Foundation Assignment.

## Conclusion

This project demonstrates how JavaScript can transform
a static webpage into an interactive application by
collecting user input, storing data, performing calculations,
and displaying results.
# web-development-week-5
