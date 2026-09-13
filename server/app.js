import cors from "cors";
import express from "express";
import healthRouter from "./routes/health.routes.js";
import { errorHandler } from "./middleware/error-handler.middleware.js";
import { notFound } from "./middleware/not-found.middleware.js";

const app = express();

// Allow the frontend and future clients to call this REST API.
app.use(cors());

// Parse JSON request bodies for future POST and PATCH endpoints.
app.use(express.json());

// Feature routes are mounted under /api so they share a clear API boundary.
app.use("/api", healthRouter);

app.use(notFound);
app.use(errorHandler);

export default app;
