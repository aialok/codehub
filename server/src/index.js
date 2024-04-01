import express from "express";
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
