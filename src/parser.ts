import * as yargs from "yargs";

export class ArgsParser {

    // TODO make options as arguments for ArgsParser constructor

    public getParsedArguments() {
        return yargs
            .usage("Usage: -f <path-to-.tpl-file>")
            .option("filepath", {
                alias: "f",
                describe:
                    "Filepath to .tpl file containing the tempalte you want to test on your live cluster.",
                type: "string",
                demandOption: true,
            })
            .option("templatename", {
                alias: "n",
                describe:
                    "The defined helm tempalte name usually something similar to <helmchart.name>.",
                type: "string",
                demandOption: true,
            }).argv;
    }
}
