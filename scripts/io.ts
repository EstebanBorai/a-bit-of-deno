import { readLines } from "https://deno.land/std/io/bufio.ts";

export async function input(stdout: string) {
  console.log(stdout);
  for await (const line of readLines(Deno.stdin)) {
    return line;
  }
}

export async function inputNumber(stdout: string) {
  const prompt = await input(stdout);
  const asNumber = Number(prompt);

  if (isNaN(asNumber)) {
    throw new Error(`Invalid value provided. Expected number, received ${prompt}`);
  }

  return asNumber;
}
