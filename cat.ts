for (const filename in Deno.args) console.log(Deno.readTextFileSync(Deno.args[filename]))


//deno run --allow-read cat.ts fruit.json
