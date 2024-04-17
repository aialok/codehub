import express from "express";
import mongoose from "mongoose";
import apiRoutes from "./routes/index.js";
import cors from "cors";

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

app.get("/", (req, res) => {
  res.json({ message: "Welcome to the application." });
});

app.use("/api", apiRoutes);

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});

mongoose.connect("mongodb://localhost:27017/online-judge").then(() => {
  console.log("Connected to MongoDB");
})