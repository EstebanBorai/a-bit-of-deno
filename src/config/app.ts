import { oak } from "../../deps.ts";
import { logger, timing } from "../middleware/index.ts";
import makeBooksRouter from "../router/books.ts";

function makeApp(): oak.Application<Record<string, any>> {
  const { Application } = oak;
  const app = new Application();

  app.use(logger);
  app.use(timing);

  const booksRouter = makeBooksRouter();

  app.use(booksRouter.routes());
  app.use(booksRouter.allowedMethods());

  return app;
}

export default makeApp;
