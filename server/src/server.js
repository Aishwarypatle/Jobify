import dotenv from "dotenv";
import app from "./app.js";
import { connectDB } from "./config/db.js";

dotenv.config();
connectDB();

app.listen(process.env.PORT,"0.0.0.0", () => {
  console.log(`Server running on port ${process.env.PORT}`);
})
