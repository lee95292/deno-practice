const port = 8080;
const listener = Deno.listen({ port });
console.log(`listening on 0.0.0.0${port}`);

for await (const conn of listener) {
  Deno.copy(conn, conn);
}
