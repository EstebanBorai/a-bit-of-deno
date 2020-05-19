import { inputNumber, input } from './io.ts';
import { writeFileStr } from "https://deno.land/std/fs/mod.ts";

interface ObjectLike {
  [key: string]: string | number | undefined;
}

interface APIEnv extends ObjectLike {
  PORT?: number;
  MYSQL_DATABASE?: string;
  MYSQL_USER?: string;
  MYSQL_PASSWORD?: string;
  MYSQL_ROOT_PASSWORD?: string;
}

async function getUserOptions(): Promise<APIEnv> {
  const values: APIEnv = {};

  console.log("\nConfigure server");
  values.PORT = await inputNumber("Port: ");

  console.log("\nConfigure the MySQL database Instance");
  values.MYSQL_DATABASE = await input("Database Name: ");
  values.MYSQL_USER = await input("Username: ");
  values.MYSQL_PASSWORD = await input("Password: ");
  
  const rootPassword = await input("MySQL Root User Password [Dafaults to root]: ");

  values.MYSQL_ROOT_PASSWORD = rootPassword || 'root';

  return values;
}

function valuesAsString(data: APIEnv): string {
  const keys = Object.keys(data);

  return keys.map((key: string) => `${key}=${data[key]}`).join('\n');
}

await writeFileStr('./.env', valuesAsString( await getUserOptions()));
