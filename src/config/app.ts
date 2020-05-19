import { oak } from "../../deps.ts";
import { logger, timing } from "../middleware/mod.ts";
import { bootstrap } from "./database.ts";
import makeBooksRouter from "../router/books.ts";

async function makeApp(): Promise<oak.Application<Record<string, any>>> {
  const { Application } = oak;
  const app = new Application();

  app.use(logger);
  app.use(timing);

  const booksRouter = makeBooksRouter();

  app.use(booksRouter.routes());
  app.use(booksRouter.allowedMethods());

  await bootstrap();

  return app;
}

export default makeApp;
