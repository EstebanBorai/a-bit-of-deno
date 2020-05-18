import { oak } from "../../deps.ts";

async function timing(
  ctx: oak.Context<Record<string, any>>,
  next: () => Promise<void>,
) {
  const start = Date.now();
  await next();
  const ms = Date.now() - start;
  ctx.response.headers.set("X-Response-Time", `${ms}ms`);
}

export default timing;
