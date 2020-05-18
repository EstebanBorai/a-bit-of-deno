import { oak } from "../../deps.ts";

const { Router } = oak;

type RouteContext = oak.RouterContext<
  Record<string | number, string | undefined>,
  Record<string, any>
>;

function makeBooksRouter() {
  const router = new Router();

  const books = new Map<string, any>();
  books.set("1", {
    id: "1",
    title: "The Hound of the Baskervilles",
    author: "Conan Doyle, Author",
  });

  router
    .get("/", (context: RouteContext) => {
      context.response.body = "Hello world!";
    })
    .get("/book", (context: RouteContext) => {
      context.response.body = Array.from(books.values());
    })
    .get("/book/:id", (context: RouteContext) => {
      if (context.params && context.params.id && books.has(context.params.id)) {
        context.response.body = books.get(context.params.id);
      }
    });

  return router;
}

export default makeBooksRouter;
