#!/usr/bin/env node

import chalk from "chalk";
import boxen from "boxen";
import { exec } from "child_process";
import { args } from "./src/parser";


const parsedArguments = args
const consolePrints: string[] = [];

// example print formatted
consolePrints.push(chalk.white(`Command args: `));
consolePrints.push(chalk.green(`${parsedArguments["filepath"]}!\n`));
consolePrints.push(chalk.white("Template Name: "));
consolePrints.push(chalk.green(`${parsedArguments["templatename"]}!\n`));

// check environment function

// execute the helm

// print the value the template retrieved

// remove all resources from the cluster where helm was depoyed to

// TEST move to commandline
exec("ls -la", (error, stdout, stderr) => {
    if (error) {
        consolePrints.push(chalk.red(`${error.message}!\n`));
        return;
    }
    if (stderr) {
        consolePrints.push(chalk.red(`${stderr}!\n`));
        return;
    }

    consolePrints.push(chalk.white(`${stdout}!\n`));

    // console print
    const msgBox = boxen(consolePrints.join("\n"), boxenOptions);
    console.log(msgBox);
});
