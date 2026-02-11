import express from "express";
import {
  getTasks,
  createTask,
  updateTask,
  deleteTask,
  searchTasks,
  getPaginatedTasks,
} from "../controllers/taskController.js";

const router = express.Router();

router.get("/", getTasks);
router.post("/", createTask);
router.put("/:id", updateTask);
router.delete("/:id", deleteTask);

router.get("/search/query", searchTasks);
router.get("/pagination/list", getPaginatedTasks);

export default router;
