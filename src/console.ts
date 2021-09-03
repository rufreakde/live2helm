import boxen from "boxen";
import chalk from "chalk";

export const borderStyle: boxen.CustomBorderStyle = {
    topLeft: " ",
    topRight: " ",
    bottomLeft: " ",
    bottomRight: " ",
    horizontal: "-",
    vertical: " ",
};

export const boxenOptions: boxen.Options = {
    padding: 1,
    margin: 1,
    borderStyle,
    borderColor: "#007acc",
    backgroundColor: "#1e1e1e",
};

export const argsPrint = function (parsedArguments) {

    const stringListbyLine: string[] = [];
    stringListbyLine.push(chalk.white(`Command args: `));
    stringListbyLine.push(chalk.green(`${parsedArguments["filepath"]}!\n`));
    stringListbyLine.push(chalk.white("Template Name: "));
    stringListbyLine.push(chalk.green(`${parsedArguments["templatename"]}!\n`));
    print(stringListbyLine);
};

export const print = function (stringListbyLine: string[]) {

    const msgBox = boxen(stringListbyLine.join("\n"), boxenOptions);
    console.log(msgBox);

    return stringListbyLine;
}