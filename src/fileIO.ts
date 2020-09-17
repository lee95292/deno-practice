/*
  source origin: https://deno.land/manual/examples/unix_cat
*/

async function printFileContents(args: Array<string>) {
  const fileNames = args.length === 0 ? ["app.ts"] : args;

  for (const fileName of fileNames) {
    const file = await Deno.open(fileName);
    const contents = await Deno.copy(file, Deno.stdout);
    console.log(contents);
    file.close();
  }
}

const fileIO_description =
  "Print file's contents what Deno gets from arguments\n";

export { printFileContents, fileIO_description };
