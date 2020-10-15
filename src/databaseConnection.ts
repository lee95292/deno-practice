// run command : deno run --allow-net --allow-write --allow-read --allow-plugin --unstable  ./src/databaseConnection.ts
import { MongoClient } from "https://deno.land/x/mongo@v0.12.1/mod.ts";

const client = new (MongoClient as any)();

await client.connectWithUri("mongodb://localhost:27017");

const db = client.database("deno_examples");
const task_collections = db.collection("task");
console.log("db connected");

await task_collections.insertOne({ name: "my task", period: 3 });

const k = await task_collections.find();
console.log(k);

export default k;
