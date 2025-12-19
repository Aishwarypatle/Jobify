import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
import authRoutes from "./routes/auth.routes.js";
import userRoutes from "./routes/user.routes.js";

const app = express();

console.log("APP.JS LOADED");

app.use(
  cors({
    origin: "http://localhost:3000",
    credentials: true
  })
);

// IMPORTANT: preflight support
// app.options("*", cors());

app.use(express.json());
app.use(cookieParser());

app.use("/api/auth", authRoutes);
app.use("/api/user", userRoutes);

export default app;
