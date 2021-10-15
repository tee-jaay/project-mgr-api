import express from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import dotenv from "dotenv";

import authRoutes from "./routes/auth/auth.js";
import projectRoutes from "./routes/projects/projects.js";
import userRoutes from "./routes/users/users.js";
import profileRoutes from "./routes/profiles/profiles.js";
import taskRoutes from "./routes/tasks/tasks.js";
import todoRoutes from "./routes/todos/todos.js";
import commentRoutes from "./routes/comments/comments.js";
import issueRoutes from "./routes/issues/issues.js";
import meetingRoutes from "./routes/meetings/meetings.js";
import timeSheetRoutes from "./routes/timeSheets/timeSheets.js";
import issueAssigneeRoutes from "./routes/issueAssignees/issueAssignees.js";

// ============ faker
import { fakerProjects } from "./controllers/app/project/projectController.js";
// ============ faker

const app = express();
const PORT = 5555;

dotenv.config();

// Database
mongoose
  .connect(
    // `mongodb+srv://${process.env.MONGO_USR}:${process.env.MONGO_PWD}@${process.env.MONGO_CLUSTER}.mongodb.net/${process.env.MONGO_DB}?${process.env.MONGO_OPT}`
    `mongodb://${process.env.MONGO_USR}:${process.env.MONGO_PWD}@${process.env.MONGO_HOST}/${process.env.MONGO_DB}`
  )
  .then(() => console.log("Database connection successful"))
  .catch((err) => console.error(err));

app.use(bodyParser.json());

// ---- Routes ----
// Root
app.get("/", (req, res) => {
  res.send('Welcome to the "tackeon" app\'s Express.js powered api.');
});
// Auth
app.use("/auth", authRoutes);
// User
app.use("/users", userRoutes);
// Profile
app.use("/profiles", profileRoutes);

// Project
app.use("/projects", projectRoutes);
// Task
app.use("/tasks", taskRoutes);
// Todo
app.use("/todos", todoRoutes);
// Comment
app.use("/comments", commentRoutes);
// Issue
app.use("/issues", issueRoutes);
// Meeting
app.use("/meetings", meetingRoutes);
// Timesheet
app.use("/timesheets", timeSheetRoutes);
// Issue Assignee
app.use("/issue-assignees", issueAssigneeRoutes);
// ========== fakers=========== //
app.use("/faker-projects", fakerProjects);
// ========== fakers=========== //

// ---- Routes ----

// Initiate server
app.listen(PORT, () => {
  console.log(`Server is running on port:${PORT}`);
});
