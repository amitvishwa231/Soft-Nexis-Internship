import mongoose from "mongoose";

const taskSchema = new mongoose.Schema(
  {
    text: {
      type: String,
      required: [true, "Task text is required"],
      trim: true,
      minlength: [3, "Task must be at least 3 characters"],
      maxlength: [255, "Task cannot exceed 255 characters"],
    },
    completed: {
      type: Boolean,
      default: false,
    },
  },
  {
    timestamps: { createdAt: true, updatedAt: "lastModified" },
  }
);

taskSchema.index({ text: "text" });
taskSchema.index({ completed: 1 });
taskSchema.index({ completed: 1, createdAt: -1 });

const Task = mongoose.model("Task", taskSchema);
export default Task;
