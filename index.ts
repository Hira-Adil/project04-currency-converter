#! /usr/bin/env node
   
   
   import inquirer from "inquirer";

   let currency_value: {[key:string]: number} = {
                  PKR  : 277.31,
                  UAE  : 3.67,
                  USD  : 1
   }

   let answer = await inquirer.prompt([
    {
        name: "from",
        type: "list",
        message: "converting from",
        choices: ["PKR","UAE","USD"]
    },
    {
        name: "to",
        type: "list",
        message: "converting to",
        choices: ["PKR","UAE","USD"]
    },
    {
        name: "amount",
        type: "number",
        message: "Your amount to  convert"
    },
   ]);

   console.log(currency_value[answer.to] / currency_value[answer.from] * answer.amount);