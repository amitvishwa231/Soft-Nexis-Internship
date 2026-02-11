import { Router } from "express";

import {
  getTasks,
  getTaskById,
  createTask,
  updateTask,
  deleteTask,
} from "../controllers/taskController.js";

import { validateBody } from "../middleware/validate.js";
import { taskSchema } from "../utils/taskSchema.js";

const router = Router();

router.get("/", getTasks);
router.get("/:id", getTaskById);
router.post("/", validateBody(taskSchema), createTask);
router.put("/:id", updateTask);
router.delete("/:id", deleteTask);

export default router;
