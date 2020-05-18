import { desc, run, task, sh } from "https://deno.land/x/drake@v1.0.0/mod.ts";

desc("Runs fmt task and then runs the server");
task("start", ["fmt"], function() {
  sh("deno run -A ./src/main.ts");
});

desc("Format the existing soruce files");
task("fmt", [], async function () {
  await sh("deno fmt ./src/**");
});

run();
