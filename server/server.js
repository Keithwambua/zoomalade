import app from "./app.js";
import env from "./config/env.js";

const server = app.listen(env.port, () => {
  console.log(`ZOOMALADE backend running on port ${env.port}`);
});

// Shut down cleanly when the process receives a termination signal.
function handleShutdown(signal) {
  console.log(`${signal} received. Shutting down server...`);
  server.close(() => process.exit(0));
}

process.on("SIGINT", () => handleShutdown("SIGINT"));
process.on("SIGTERM", () => handleShutdown("SIGTERM"));
