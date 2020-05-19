import { oak } from "../../deps.ts";
import { openConnection } from "../config/database.ts";

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

  router.get("/book", async (context: RouteContext) => {
    const conn = await openConnection();
    const requestBody = await context.request.body();
    const book = await conn.query(
      `select * from books`,
    );
    console.log(book);
    context.response.body = {
      id: book?.id,
      title: requestBody?.value?.title,
    };

    conn.close();
  })
    .get("/book/:id", async (context: RouteContext) => {
      if (context.params && context.params.id) {
        const conn = await openConnection();
        const requestBody = await context.request.body();
        const book = await conn.query(
          `select * from books where id=${context.params.id}`,
        );

        context.response.body = {
          id: book?.id,
          title: requestBody?.value?.title,
        };

        conn.close();
      }
    })
    .post("/book", async (context: RouteContext) => {
      const conn = await openConnection();
      const requestBody = await context.request.body();

      const { lastInsertId } = await conn.execute(
        `INSERT INTO books(title) values(?)`,
        [
          requestBody?.value?.title,
        ],
      );

      context.response.body = {
        id: lastInsertId,
        title: requestBody?.value?.title,
      };

      conn.close();
    })
    .patch("/book/:id", async (context: RouteContext) => {
      const conn = await openConnection();
      const requestBody = await context.request.body();
      await conn.execute(
        `UPDATE books set ?? = ? WHERE id=${context.params.id}`,
        ["title", requestBody?.value?.title],
      );

      await conn.close();
    });

  return router;
}

export default makeBooksRouter;
