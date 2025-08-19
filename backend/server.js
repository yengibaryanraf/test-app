import express from "express";
import cors from "cors";

const app = express();
const PORT = process.env.PORT || 8080;

app.use(cors());

app.get("/api/hello", (_req, res) => {
  res.json({
    message: process.env.BACKEND_MESSAGE || "Hello from the backend 👋",
    time: new Date().toISOString(),
  });
});

app.listen(PORT, () => console.log(`Backend listening on ${PORT}`));
