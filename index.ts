#!/usr/bin/env node
import { ArgsParser } from "./src/parser";
import { Commandline } from "./src/commandline"
import { boxenOptions, argsPrint, print } from "./src/console";
import { command } from "yargs";

(async () => {
    const parser = new ArgsParser();
    const parsedArguments: any = parser.getParsedArguments();
    argsPrint(parsedArguments);

    // works from command line :)
    console.log(`KUBECONFIG: ${process.env["KUBECONFIG"]}`);

    // check environment function
    // TODO SYNC commandline await?
    const printBuffer: string[] = [];
    const commandline = new Commandline(boxenOptions);
    // execute the helm
    printBuffer.push(...await commandline.cmdExists("kubectl"));
    printBuffer.push(...await commandline.cmdExists("helm"));
    printBuffer.push(...await commandline.ls());

    print(printBuffer);
    // print the value the template retrieved

    // remove all resources from the cluster where helm was depoyed to
})();