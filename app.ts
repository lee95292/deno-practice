import { printFileContents, fileIO_description } from "./src/fileIO.ts";

const seperator = (appName: string) => 
  "\n" + "-".repeat(30) + `APP - ${appName} ` + "-".repeat(30) + "\n Description:";
const commandMapping = {
    'fileIO' : {
        runner: printFileContents,
        description:fileIO_description,
        params:Deno.args.splice(1, Deno.args.length)
    }
}

const runApplication = () => {
    const appName:string = Deno.args[0];
    // const { description, params} : {description: string, params: string[]} = commandMapping[appName];
    console.log(commandMapping[appName].description)
    
} 
console.log(seperator, fileIO_description);
await printFileContents(Deno.args.);
