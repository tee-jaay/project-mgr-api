import dotenv from "dotenv";
import mongoose from "mongoose";
import { createServer } from "http";
import { Server } from "socket.io";

import app from './src/app/app.js';

// .env
dotenv.config();
// .env

// Database
let DB_CONN_URI = "";
if (process.env.MONGO_NETWORK === "localnet") {
  DB_CONN_URI = `mongodb://${process.env.MONGO_USR}:${process.env.MONGO_PWD}@${process.env.MONGO_HOST_LOCALNET}/${process.env.MONGO_DB}`;
} else {
  DB_CONN_URI = `mongodb+srv://${process.env.MONGO_USR}:${process.env.MONGO_PWD}@${process.env.MONGO_CLUSTER}.mongodb.net/${process.env.MONGO_DB}?${process.env.MONGO_OPT}`;
}

mongoose.set('strictQuery', false);
mongoose
  .connect(DB_CONN_URI)
  .then(() => console.log("Database connection successful"))
  .catch((err) => console.error(err));
// Database

// Initialize app
const server = createServer(app);
// Initialize app

// Socket
const origin = process.env.CLIENT_ORIGIN;
const io = new Server(server, {
  cors: {
    origin: origin,
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
// Initiate server
