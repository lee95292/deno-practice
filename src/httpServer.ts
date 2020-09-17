import { serve } from "https://deno.land/std@0.69.0/http/server.ts";

const port = 3000;
const server = serve({ hostname: "0.0.0.0", port });
console.log(`HTTP web server running. https://localhost:${port}`);

for await (const request of server) {
  let bodyContent = "user-agent:\n";
  bodyContent += request.headers.get("user-agent") || "Unknown";

  request.respond({ status: 200, body: bodyContent });
}
