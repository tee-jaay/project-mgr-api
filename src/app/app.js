import express from 'express';
import morgan from 'morgan';
import cors from 'cors';
import bodyParser from "body-parser";

import authRoutes from "../routes/auth/auth.js";
import projectRoutes from "../routes/projects/projects.js";
import projectSearchRoutes from "../routes/projects/projectSearch.route.js";
import projectCommentRoutes from "../routes/projects/projectComment.route.js";
import userRoutes from "../routes/users/users.js";
import profileRoutes from "../routes/users/profile.route.js";
import wallPosts from "../routes/users/social/wallPosts/wallPosts.route.js";
import taskRoutes from "../routes/tasks/tasks.js";
import taskChatRoutes from "../routes/tasks/chat.route.js";
import todoRoutes from "../routes/todos/todos.js";
import commentRoutes from "../routes/comments/comments.js";
import issueRoutes from "../routes/issues/issues.js";
import issueCommentRoutes from "../routes/issues/issueComment.route.js";
import meetingRoutes from "../routes/meetings/meetings.route.js";
import meetingCommentRoutes from "../routes/meetings/meetingComments.route.js";
import messageRoutes from "../routes/message/message.route.js";
import timeSheetRoutes from "../routes/timeSheets/timeSheets.route.js";
import issueAssigneeRoutes from "../routes/issueAssignees/issueAssignees.js";
import projectAssigneeRoutes from "../routes/projectAssignees/projectAssignees.js";
import meetingParticipantRoutes from "../routes/meetingParticipants/meetingParticipants.js";
import projectBudgetRoutes from "../routes/projectBudgets/projectBudgets.js";
import dashboardRoutes from "../routes/dashboard/dashboard.route.js";
import homePageRoutes from "../routes/pages/homePage.route.js";
import authPageRoutes from "../routes/pages/authPages.route.js";
import pageRoutes from "../routes/pages/page.route.js";
import frontendRoutes from "../routes/frontend/frontend.route.js";
import { byLimit } from "../controllers/app/project/projectController.js";

import { tasksByMonth } from "../controllers/app/dashboard/tasksGroupByMonth.js";


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

app.use([
    morgan('dev'),
    cors(),
    bodyParser.json(),
    express.json()
]);

app.get('/health', (_req, res) => {
    res.status(200).json({ message: 'Success' });
});

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

app.use((_req, _res, next) => {
    const error = new Error('Resource Not Found');
    error.status = 404;
    next(error);
});

app.use((error, _req, res, _next) => {
    if (error.status) {
        return res.status(error.status).json({
            message: error.message,
        });
    }
    res.status(500).json({
        message: 'Something went wrong'
    });
});

export default app;