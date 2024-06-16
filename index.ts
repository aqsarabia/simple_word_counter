#! /usr/bin/env node

import inquirer from "inquirer";
import chalk from "chalk";

console.log(chalk.greenBright("\n\t\t+++++++RABIA.SYED-WORD-COUNTER+++++++"));
console.log(chalk.greenBright("\t\t------------------------------"));


let condition = true;

while (condition)
    
    
{

const ask = await inquirer.prompt({

    name: "sentence",
    type: "input",
    message: "\nEnter the sentence you want to count: "
})

let wordCount = ask.sentence.trim().split(" ")  // trim cut the spaces and split 


console.log(chalk.blueBright(`\n\tTotal Number Of Words: ${wordCount.length} \n`))

let letterCount = ask.sentence.replace(/\s+/g, '')

console.log(chalk.blueBright(`\n\tTotal Number of Letters: ${letterCount.length} \n `))


let cont = await inquirer.prompt({

    name : "continue",
    type : "list",
    message : "\nDo You Want To Continue?\n",
    choices : ["yes","no"]

})

cont.continue ==  "yes" ? (condition = true) : (condition = false);

}

console.log(chalk.greenBright("\n\t+++++++Thanks For Using RABIA.SYED-Word Counter+++++++"));
console.log(chalk.greenBright("\t------------------------------------------------"));
