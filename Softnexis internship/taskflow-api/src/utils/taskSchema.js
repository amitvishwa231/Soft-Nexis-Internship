import { z } from "zod";

export const taskSchema = z.object({
  text: z.string().min(3, "Task must be at least 3 characters"),
  completed: z.boolean().optional(),
});
