import express from "express";
import cors from "cors";
import helmet from "helmet";
import enquiryRoutes from "./routes/enquiryRoutes.js";
const app = express();

app.use(helmet());

app.use(
  cors({
    origin: "http://localhost:5173"
  })
);

app.use(express.json());

app.use("/api", enquiryRoutes);

app.get("/api/health", (req, res) => {
  res.status(200).json({
    success: true,
    message: "XP Technologies API is running"
  });
});

export default app;