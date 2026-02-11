import express from "express";
import cors from "cors";
import morgan from "morgan";
import helmet from "helmet";
import rateLimit from "express-rate-limit";
import dotenv from "dotenv";

import taskRouter from "./src/routes/taskRoutes.js";
import { errorHandler } from "./src/middleware/errorHandler.js";
import { securityHeaders } from "./src/middleware/security.js";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(helmet());
app.use(securityHeaders);
app.use(morgan("dev"));
app.use(express.json());

app.use(
  "/api/",
  rateLimit({
    windowMs: 15 * 60 * 1000,
    max: 100,
    message: "Too many requests. Please try again later.",
  })
);

app.use("/api/tasks", taskRouter);

app.use(errorHandler);

app.listen(PORT, () =>
  console.log(`🚀 TaskFlow API running on http://localhost:${PORT}`)
);
