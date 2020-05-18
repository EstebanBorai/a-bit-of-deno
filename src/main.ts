import makeApp from "./config/app.ts";

const app = makeApp();

console.log("📡  Running at http://127.0.0.1:8000");

await app.listen({
  port: 8000,
});
