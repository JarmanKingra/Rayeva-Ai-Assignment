import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import { connectDB } from "./utils/db.js";
import aiRoutes from "./routes/ai.routes.js"

dotenv.config();
 
const app = express();
app.use(cors());

app.use(express.json());
app.use("/ai", aiRoutes);

app.get("/", (req, res) => {
  res.send("AI system running");
});

const PORT = process.env.PORT || 3001;
connectDB(); 

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});