import { type Expense, expenseSchema } from "@/types/api-types"
import { zValidator } from "@hono/zod-validator"
import { Hono } from "hono"

const fakeExpenses: Expense[] = []
const createPostSchema = expenseSchema.omit({ id: true })

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
  .get("/total-spent", (c) => {
    const totalSpent = fakeExpenses.reduce(
      (acc, expense) => acc + expense.amount,
      0,
    )
    return c.json({ totalSpent })
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
