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

    public async executeAnyCMD(cmd: string, customErrorMessage: string = "", customSuccessMesage: string = ""): Promise<[string[], boolean]> {
        const consolePrints: string[] = [];
        let success = true;

        try {
            await this.promisedExec(`${cmd}`);
            if (customSuccessMesage !== "") {
                consolePrints.push(chalk.red(`${customSuccessMesage}`));
            }
        } catch (err) {
            if (customErrorMessage !== ""){
                err = customErrorMessage;
            }
            consolePrints.push(chalk.red(`${err}`));
            success = false;
        }

        return [consolePrints, success];
    }

    public async cmdExists(cmd: string): Promise<[string[], boolean]> {
        return this.executeAnyCMD(`which ${cmd}`, `${cmd} - ❌`, `${cmd} - ✔️`)
    }

    public async ls(): Promise<[string[], boolean]> {
        return this.executeAnyCMD(`ls -lah`)
    }
}
