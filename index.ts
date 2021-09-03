#!/usr/bin/env node
import { ArgsParser } from "./src/parser";
import { Commandline } from "./src/commandline"
import { boxenOptions, argsPrint } from "./src/console";


const parser = new ArgsParser();
const parsedArguments = parser.getParsedArguments();
argsPrint(parsedArguments);

// check environment function
// TODO SYNC commandline await?
const commandline = new Commandline(boxenOptions);
// execute the helm
commandline.ls();

// print the value the template retrieved

// remove all resources from the cluster where helm was depoyed to