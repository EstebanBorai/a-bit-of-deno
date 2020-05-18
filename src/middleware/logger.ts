import { oak } from "../../deps.ts";

async function logger(
  ctx: oak.Context<Record<string, any>>,
  next: () => Promise<void>,
) {
  await next();
  const responseTime = ctx.response.headers.get("X-Response-Time");
  const { method, url } = ctx.request;

  console.log(`${method} - ${url} - ${responseTime}`);
}

export default logger;
