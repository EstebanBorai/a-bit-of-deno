import "https://deno.land/x/dotenv/load.ts";
import { dotenv } from "../deps.ts";

dotenv.config();

import makeApp from "./config/app.ts";

const app = await makeApp();

console.log(`📡  Running at http://127.0.0.1:${Deno.env.get("PORT")}`);

await app.listen({
  port: Number(Deno.env.get("PORT")),
});
