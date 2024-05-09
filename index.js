#! /usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";
console.log(chalk.bgWhite.blueBright.bold(`\n\t "Welcome to CODE-CURRENCY-CONVERTER"\t\n`));
const exchangeRate = {
    "USD": 1,
    "OMR": 0.38,
    "EUR": 0.91,
    "TRY": 32.26,
    "INR": 74.57,
    "AED": 3.67,
    "PKR": 278.22,
};
let user_answer = await inquirer.prompt([
    {
        name: "from_currency",
        message: chalk.magenta("Select the currency to convert from"),
        type: "list",
        choices: ["USD", "OMR", "EUR", "TRY", "INR", "AED", "PKR"]
    },
    {
        name: "to_currency",
        message: chalk.magenta("Select the currency to convert into"),
        type: "list",
        choices: ["USD", "OMR", "EUR", "TRY", "INR", "AED", "PKR"]
    },
    {
        name: "amount",
        message: chalk.magenta("Please Entry Your Amount to convert"),
        type: "input",
    }
]);
let fromAmount = exchangeRate[user_answer.from_currency];
let toAmount = exchangeRate[user_answer.to_currency];
let amount = user_answer.amount;
let baseAmount = amount / fromAmount;
let convertedAmount = baseAmount * toAmount;
console.log(convertedAmount.toFixed(2));
