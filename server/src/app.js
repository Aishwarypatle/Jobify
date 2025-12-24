import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
import authRoutes from "./routes/auth.routes.js";
import userRoutes from "./routes/user.routes.js";

const app = express();

const allowedOrigins = [
  "http://localhost:3000",
  // "http://your-frontend-domain.com"
]


app.use(
  cors({
    origin: allowedOrigins,
    credentials: true
  })
)

app.use(express.json());
app.use(cookieParser());

app.use("/api/auth", authRoutes);
app.use("/api/user", userRoutes);

export default app;
