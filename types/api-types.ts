import { z } from "zod"

export const expenseSchema = z.object({
  id: z.number().int().positive().min(1),
  name: z.string().min(1).max(50),
  amount: z.number().int().positive(),
  date: z.string(),
})

export type Expense = z.infer<typeof expenseSchema>
