import { print } from "./console";
import boxen from "boxen";
import { exec } from "child_process";
import chalk from "chalk";

const util = require("util");

export class Commandline {
    promisedExec: any;

    constructor(private boxenOptions: boxen.Options) {
        this.promisedExec = util.promisify(exec);
    }

    public async cmdExists(cmd: string): Promise<string[]> {
        const consolePrints: string[] = [];
        const { stdout, stderr } = await this.promisedExec(`which ${cmd}`);

        if (stderr) {
            consolePrints.push(chalk.red(`${stderr}- ❌`));
        } else {
            consolePrints.push(chalk.white(`${cmd} - ✔️`));
        }
        return consolePrints;
    }

    public async ls(): Promise<string[]> {
        const consolePrints: string[] = [];
        const { stdout, stderr } = await this.promisedExec(`ls -lah`);

        if (stderr) {
            consolePrints.push(chalk.red(`${stderr}!\n`));
        }
        return consolePrints;
    }
}
