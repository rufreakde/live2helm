import { print } from "./console";
import boxen from "boxen";
import { exec } from "child_process";
import chalk from "chalk";

export class Commandline {
    constructor(private boxenOptions: boxen.Options) { 
    }

    public ls() {
        return exec("ls -la", (error, stdout, stderr) => {
            const consolePrints: string[] = [];
        
            if (error) {
                consolePrints.push(chalk.red(`${error.message}!\n`));
                return;
            }
            if (stderr) {
                consolePrints.push(chalk.red(`${stderr}!\n`));
                return;
            }

            consolePrints.push(chalk.white(`${stdout}!\n`));
            print(consolePrints);
        });
    }
}
