import express from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import dotenv from "dotenv";
import cors from "cors";

import authRoutes from "./src/routes/auth/auth.js";
import projectRoutes from "./src/routes/projects/projects.js";
import userRoutes from "./src/routes/users/users.js";
import profileRoutes from "./src/routes/profiles/profiles.js";
import taskRoutes from "./src/routes/tasks/tasks.js";
import todoRoutes from "./src/routes/todos/todos.js";
import commentRoutes from "./src/routes/comments/comments.js";
import issueRoutes from "./src/routes/issues/issues.js";
import meetingRoutes from "./src/routes/meetings/meetings.js";
import timeSheetRoutes from "./src/routes/timeSheets/timeSheets.js";
import issueAssigneeRoutes from "./src/routes/issueAssignees/issueAssignees.js";
import projectAssigneeRoutes from "./src/routes/projectAssignees/projectAssignees.js";
import meetingParticipantRoutes from "./src/routes/meetingParticipants/meetingParticipants.js";
import projectBudgetRoutes from "./src/routes/projectBudgets/projectBudgets.js";
import { byLimit } from "./src/controllers/app/project/projectController.js";

// ============ faker ============ //
import { databaseDrop } from "./src/controllers/faker/databaseDrop.js";
import {
  fakerRegisters,
  fakerProjects,
  fakerTasks,
  fakerTodos,
  fakerIssues,
  fakerMeetings,
} from "./src/controllers/faker/fakerController.js";
// ============ faker ============ //

const app = express();
const PORT = 5555;

dotenv.config();

// Database
let DB_CONN_URI = "";
if (process.env.MONGO_NETWORK === "localnet") {
  DB_CONN_URI = `mongodb://${process.env.MONGO_USR}:${process.env.MONGO_PWD}@${process.env.MONGO_HOST_LOCALNET}/${process.env.MONGO_DB}`;
} else {
  DB_CONN_URI = `mongodb+srv://${process.env.MONGO_USR}:${process.env.MONGO_PWD}@${process.env.MONGO_CLUSTER}.mongodb.net/${process.env.MONGO_DB}?${process.env.MONGO_OPT}`;
}

mongoose
  .connect(DB_CONN_URI)
  .then(() => console.log("Database connection successful"))
  .catch((err) => console.error(err));

app.use(bodyParser.json());

// CORS
app.use(cors());

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
app.use("/projects-by-limit/:limit", byLimit);
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
// Project Assignee
app.use("/project-assignees", projectAssigneeRoutes);
// Meeting Participant
app.use("/meeting-participants", meetingParticipantRoutes);
// Project Budget
app.use("/project-budgets", projectBudgetRoutes);
//
// ========== faker =========== //
app.use("/drop/:db", databaseDrop);
app.use("/faker-registers", fakerRegisters);
app.use("/faker-projects", fakerProjects);
app.use("/faker-tasks", fakerTasks);
app.use("/faker-todos", fakerTodos);
app.use("/faker-issues", fakerIssues);
app.use("/faker-meetings", fakerMeetings);
// ========== faker =========== //

// ---- Routes ----

// Initiate server
app.listen(PORT, () => {
  console.log(`Server is running on port:${PORT}`);
});
