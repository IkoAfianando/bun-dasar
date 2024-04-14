// Read file content
const file = Bun.file('../.env')
const content = await file.text();
console.log(content)

// Write file content
await Bun.write('../.env.test', content)
