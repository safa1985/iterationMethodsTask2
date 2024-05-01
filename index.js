// You are given an array representing a series of transactions in a small business.
// Each transaction is an array containing the transaction type ("income" or "expense") and the amount.
const transactions = [
  ["income", 1000],
  ["income", 1500],
  ["expense", 500],
  ["expense", 300],
  ["income", 700],
];

/*****************************************************************
Part 1: Transaction Analysis

Task 1) Create a new array containing only the income transactions.
       Output 1) [["income", 1000], ["income", 1500], ["income", 700]]
       

Task 2) Create a new array containing only the expense transactions.
       Output 2) [["expense", 500], ["expense", 300]]

******************************************************************/
//Task 1
let income = transactions.filter(([name, number]) => {
  return name == "income";
});

console.log(income);

// Task 2
let expense = transactions.filter(([name, number]) => {
  return name == "expense";
});

console.log(expense);

/*****************************************************************
Part 2: Financial Summary

Task 3) Calculate the total income and return it.
       Output 3) 3200

Task 4) Calculate the total expenses and return it.
       Output 4) 800

******************************************************************/
// Task 3

let sum1 = 0;
income.forEach((x) => {
  sum1 += x[1];
});
console.log(sum1);
// Task 4

let sum2 = 0;
expense.forEach((x) => {
  sum2 += x[1];
});
console.log(sum2);
/*****************************************************************
Part 3: Net Analysis

Task 5) Calculate the net total (total income - total expenses) and return it.
       Output 5) 2400

Task 6) Identify and create a new array with transactions (both incomes and expenses) above $500.
       Output 6) [["income", 1000], ["income", 1500]]

******************************************************************/
//Task 5
//function netTotal(n1, n2) {
// return n1 - n2;
//}

let netTotal = (n1, n2) => {
  return n1 - n2;
};
console.log(netTotal(sum1, sum2));

//Task 6
let above = transactions.filter(([name, number]) => {
  return number > 500;
});
console.log(above);
// Note: Use appropriate JavaScript array iteration methods such as filter, reduce, etc., to achieve the desired output for each task.
