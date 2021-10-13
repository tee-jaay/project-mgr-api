import express from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import dotenv from "dotenv";

import projectRoutes from "./routes/projects/projects.js";
import userRoutes from "./routes/users/users.js";
import profileRoutes from "./routes/profiles/profiles.js";
import authRoutes from "./routes/auth/auth.js";

const app = express();
const PORT = 5555;

dotenv.config();

// Database
mongoose
  .connect(
    `mongodb+srv://${process.env.MONGO_USR}:${process.env.MONGO_PWD}@${process.env.MONGO_HOST}/${process.env.MONGO_DB}?${process.env.MONGO_OPT}`
  )
  .then(() => console.log("Database connection successful"))
  .catch((err) => console.error(err));

app.use(bodyParser.json());

// ---- Routes ----
// Root
app.get("/", (req, res) => {
  res.send('Welcome to the "tackeon" app\'s Express.js powered api.');
});
// Project
app.use("/projects", projectRoutes);
// User
app.use("/users", userRoutes);
// Profile
app.use("/profiles", profileRoutes);
// Auth
app.use("/auth", authRoutes);
// ---- Routes ----

// Initiate server
app.listen(PORT, () => {
  console.log(`Server is running on port:${PORT}`);
});
