#! /usr/bin/env node
console.log("Welcome to My Atm");
import inquirer from "inquirer";
let myBalance = 500000;
let myPin = 1414;
let pinAnswer = await inquirer.prompt([
    {
        name: "pin",
        message: "enter your pin number",
        type: "number"
    }
]);
if (pinAnswer.pin === myPin) {
    console.log("correct pin code !!");
    let operationAns = await inquirer.prompt([
        {
            name: "operation",
            message: "please select one option",
            type: "list",
            choices: ["withdraw", "balance inquirey", "fastcash"]
        }
    ]);
    if (operationAns.operation === "withdraw") {
        let amountAns = await inquirer.prompt([{
                name: "amount",
                message: "enter your amount",
                type: "number",
            }]);
        if (amountAns.amount > myBalance) {
            console.log("Insufficient Balance");
        }
        else if (myBalance -= amountAns.amount)
            console.log("Your remaing balance is:" + myBalance);
    }
    else if (operationAns.operation === "balance inquirey") {
        console.log("your balance is:" + myBalance);
    }
    if (operationAns.operation === "fastcash") {
        let cash = await inquirer.prompt([
            {
                name: "option",
                message: "slect any amount",
                type: "list",
                choices: ["1000", "3000", "6000", "10000"],
            }
        ]);
        if (myBalance -= cash.option) {
            console.log("your remaining amount is:" + myBalance);
        }
    }
}
else {
    console.log("incorect pin code");
}
