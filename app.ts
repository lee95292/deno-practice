import { printFileContents, fileIO_description } from "./src/fileIO.ts";
const seperator =
  "\n" + "-".repeat(30) + "[New]" + "-".repeat(30) + "\n Description:";

console.log(seperator, fileIO_description);
await printFileContents(Deno.args);
