import app from "./app"

const hostname = "localhost"
const port = "3000"

Bun.serve({
  fetch: app.fetch,
  hostname,
  port,
})

console.log(`Server is running on ${hostname}:${port}`)
