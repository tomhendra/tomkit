import { Hono } from "hono"
import { zValidator } from "@hono/zod-validator"
import { z } from "zod"

// Define the schema for the expense object
const expenseSchema = z.object({
  id: z.number().int().positive().min(1),
  name: z.string().min(1).max(50),
  amount: z.number().int().positive(),
  date: z.string(),
})
// Create a schema for the POST request
const createPostSchema = expenseSchema.omit({ id: true })
// Infer the type of the expense object
type Expense = z.infer<typeof expenseSchema>
// Create a fake list of expenses
const fakeExpenses: Expense[] = []

// Create the expenses route
export const expensesRoute = new Hono()
  .get("/", (c) => {
    return c.json({ expenses: [...fakeExpenses] })
  })
  .post("/", zValidator("json", createPostSchema), (c) => {
    const expense = c.req.valid("json")
    fakeExpenses.push({ ...expense, id: fakeExpenses.length + 1 })
    c.status(201)
    return c.json(expense)
  })
  .get("/:id{[0-9]+}", (c) => {
    const id = Number.parseInt(c.req.param("id"))
    const expense = fakeExpenses.find((expense) => expense.id === id)
    if (!expense) {
      return c.notFound()
    }
    return c.json(expense)
  })
  .delete("/:id{[0-9]+}", (c) => {
    const id = Number.parseInt(c.req.param("id"))
    const expense = fakeExpenses.find((expense) => expense.id === id)
    if (!expense) {
      return c.notFound()
    }
    const index = fakeExpenses.findIndex((expense) => expense.id === id)
    if (index !== -1) {
      fakeExpenses.splice(index, 1)
    }
    return c.text("Expense deleted")
  })
