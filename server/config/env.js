import dotenv from "dotenv";

// Load values from .env into process.env before the application starts.
dotenv.config();

const env = {
  port: Number.parseInt(process.env.PORT, 10) || 5000,
  nodeEnv: process.env.NODE_ENV || "development",
};

export default env;
