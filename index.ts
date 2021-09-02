#!/usr/bin/env node

import chalk from "chalk";
import boxen from "boxen";
import * as yargs from "yargs";

const borderStyle: boxen.CustomBorderStyle = {
    topLeft: " ",
    topRight: " ",
    bottomLeft: " ",
    bottomRight: " ",
    horizontal: "-",
    vertical: " ",
}

const boxenOptions: boxen.Options = {
    padding: 1,
    margin: 1,
    borderStyle,
    borderColor: "#007acc",
    backgroundColor: "#1e1e1e",
    
};

const args: any = yargs
    .usage("Usage: -f <path-to-.tpl-file>")
    .option(
    "filepath", {
        alias: "f",
        describe:
            "Filepath to .tpl file containing the tempalte you want to test on your live cluster.",
        type: "string",
        demandOption: true,
    })
    .option(
    "templatename", {
        alias: "n",
        describe:
            "The defined helm tempalte name usually something similar to <helmchart.name>.",
        type: "string",
        demandOption: true,
    }).argv;

const options: string[] = []
options.push(chalk.white(`Command args: `));
options.push(chalk.green(`${args["filepath"]}!\n`));
options.push(chalk.white("Template Name: "))
options.push(chalk.green(`${args["templatename"]}!\n`));


const msgBox = boxen(options.join(""), boxenOptions);
console.log(msgBox);
