#! /usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";
const answers = await inquirer.prompt([
    {
        name: "Sentences",
        type: "input",
        message: chalk.cyanBright("Enter Your Sentence To Count The Word")
    }
]);
const words = answers.Sentences.trim().split(" ");
console.log(chalk.cyan(words));
console.log(chalk.gray(`Your Sentence Word Count is:${chalk.red(words.length)}`));
