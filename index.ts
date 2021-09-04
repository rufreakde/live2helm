#!/usr/bin/env node
import { ArgsParser } from "./src/parser";
import { Commandline } from "./src/commandline"
import { boxenOptions, argsPrint, print } from "./src/console";
import { boolean, command } from "yargs";

(async () => {
    const parser = new ArgsParser();
    const parsedArguments: any = parser.getParsedArguments();
    argsPrint(parsedArguments);

    // works from command line :)
    console.log(`KUBECONFIG: ${process.env["KUBECONFIG"]}`);

    // check environment function
    // TODO SYNC commandline await?
    const executionsBuffer: string[] = [];
    const commandline = new Commandline(boxenOptions);
    // execute the helm
    executionsBuffer.push(...await commandline.cmdExists("kubectl"));
    executionsBuffer.push(...await commandline.cmdExists("helm"));
    executionsBuffer.push(...await commandline.ls());

    // filter away the success status for printing
    print(executionsBuffer.filter((value, index) => typeof value !== 'boolean' ));
    // print the value the template retrieved

    // remove all resources from the cluster where helm was depoyed to
})();