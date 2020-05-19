import { mysql } from "../../deps.ts";

export async function openConnection(): Promise<mysql.Client> {
  return await new mysql.Client().connect({
    hostname: "172.17.0.2",
    port: 3306,
    username: Deno.env.get("MYSQL_USER"),
    db: Deno.env.get("MYSQL_DATABASE"),
    password: Deno.env.get("MYSQL_PASSWORD"),
    poolSize: 3,
  });
}

export async function bootstrap(): Promise<void> {
  const conn = await openConnection();

  conn.execute("SELECT 1");
}
