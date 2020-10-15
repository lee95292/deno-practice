import {
  opine,
  response,
  Router,
} from "https://deno.land/x/opine@0.21.2/mod.ts";

const app = opine();
const router = Router();

router.get("/hello", (req, res, next) => {
  const responseContent =
    "<h2>Your Request</h2> <br/>" +
    JSON.stringify(req.headers) +
    "<hr/>" +
    Object.keys(req);

  res.type("text/html").send(responseContent);
});

app.use("/", router);

app.listen({ port: 3000 });
console.log("opine app running on port 3000");
