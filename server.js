import dotenv from "dotenv";
import express from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import cors from "cors";
import sApp from './src/app/app.js';

import authRoutes from "./src/routes/auth/auth.js";
import projectRoutes from "./src/routes/projects/projects.js";
import projectSearchRoutes from "./src/routes/projects/projectSearch.route.js";
import projectCommentRoutes from "./src/routes/projects/projectComment.route.js";
import userRoutes from "./src/routes/users/users.js";
import profileRoutes from "./src/routes/users/profile.route.js";
import wallPosts from "./src/routes/users/social/wallPosts/wallPosts.route.js";
import taskRoutes from "./src/routes/tasks/tasks.js";
import taskChatRoutes from "./src/routes/tasks/chat.route.js";
import todoRoutes from "./src/routes/todos/todos.js";
import commentRoutes from "./src/routes/comments/comments.js";
import issueRoutes from "./src/routes/issues/issues.js";
import issueCommentRoutes from "./src/routes/issues/issueComment.route.js";
import meetingRoutes from "./src/routes/meetings/meetings.route.js";
import meetingCommentRoutes from "./src/routes/meetings/meetingComments.route.js";
import messageRoutes from "./src/routes/message/message.route.js";
import timeSheetRoutes from "./src/routes/timeSheets/timeSheets.route.js";
import issueAssigneeRoutes from "./src/routes/issueAssignees/issueAssignees.js";
import projectAssigneeRoutes from "./src/routes/projectAssignees/projectAssignees.js";
import meetingParticipantRoutes from "./src/routes/meetingParticipants/meetingParticipants.js";
import projectBudgetRoutes from "./src/routes/projectBudgets/projectBudgets.js";
import dashboardRoutes from "./src/routes/dashboard/dashboard.route.js";
import homePageRoutes from "./src/routes/pages/homePage.route.js";
import authPageRoutes from "./src/routes/pages/authPages.route.js";
import pageRoutes from "./src/routes/pages/page.route.js";
import frontendRoutes from "./src/routes/frontend/frontend.route.js";
import { byLimit } from "./src/controllers/app/project/projectController.js";

import { tasksByMonth } from "./src/controllers/app/dashboard/tasksGroupByMonth.js";
// ============ faker ============ //
// import {
//   collectionDropOne,
//   collectionDropAll,
// } from "./src/controllers/faker/collectionDrop.js";
// import {
//   fakerRegisters,
//   fakerProjects,
//   fakerTasks,
//   fakerTodos,
//   fakerIssues,
//   fakerMeetings,
//   fakerProfiles,
//   fakerTimeSheets,
//   fakerDbSeed,
//   fakerTaskMessages,
//   fakerProfileWallposts,
// } from "./src/controllers/faker/fakerController.js";

// ============ faker ============ //

const app = express();

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
app.use("/users/auth", authRoutes);
// User
app.use("/users", userRoutes);
// Profile
app.use("/profiles", profileRoutes);
// Social
app.use("/users/socials/wall-posts", wallPosts);
// Project
app.use("/projects", projectRoutes);
app.use("/projects-search", projectSearchRoutes);
app.use("/projects-by-limit/:limit", byLimit);
app.use("/projects/comments", projectCommentRoutes);
// Task
app.use("/tasks", taskRoutes);
app.use("/tasks/chat", taskChatRoutes);
// Todo
app.use("/todos", todoRoutes);
// Comment
app.use("/comments", commentRoutes);
// Issue
app.use("/issues", issueRoutes);
app.use("/issues/comments", issueCommentRoutes);
// Meeting
app.use("/meetings", meetingRoutes);
app.use("/meetings/comments", meetingCommentRoutes);
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
// Dashboard
app.use("/dashboard", dashboardRoutes);
// Homepage
app.use("/homepage", homePageRoutes);
// Authpage
app.use("/authpage", authPageRoutes);
// Page
app.use("/page", pageRoutes);
// Site
app.use("/frontend", frontendRoutes);
// Message
app.use("/message", messageRoutes);
// ========== faker =========== //
// app.use("/drop/all", collectionDropAll);
// app.use("/drop/:db", collectionDropOne);

// app.use("/faker-users", fakerRegisters);
// app.use("/faker-projects", fakerProjects);
// app.use("/faker-tasks", fakerTasks);
// app.use("/faker-tasks-msgs", fakerTaskMessages);
// app.use("/faker-todos", fakerTodos);
// app.use("/faker-issues", fakerIssues);
// app.use("/faker-meetings", fakerMeetings);
// app.use("/faker-timesheets", fakerTimeSheets);
// app.use("/faker-profiles", fakerProfiles);
// app.use("/faker-wallposts", fakerProfileWallposts);
// app.use("/faker-db-seed", fakerDbSeed);

// app.use("/group-by/tasks/:year", tasksByMonth);
// ========== faker =========== //

// ---- Routes ----

// Socket
import { createServer } from "http";
import { Server } from "socket.io";

const server = createServer(sApp);
// const server = createServer(app);
const io = new Server(server, {
  cors: {
    origin: "*",
    methods: ["GET", "POST"],
  },
});

io.on("connection", (socket) => {
  console.log("Socket.io connection made successfully");

  socket.on("message", (payload) => {
    socket.join(payload.taskId);
    io.to(payload.taskId).emit("message", payload);
  });
});
// Socket

// Initiate server
server.listen(process.env.PORT || 5000, () => {
  console.log(`Server is running on port ${process.env.PORT}...`);
});
