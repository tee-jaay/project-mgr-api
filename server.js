import express from "express";
import bodyParser from "body-parser";
import projects from "./routes/projects/index.js";

const app = express();
const PORT = 5555;

app.use(bodyParser.json());

// Routes
app.get("/", (req, res) => {
  res.send('Welcome to the "tackeon" app\'s Express.js powered api.');
});
// Project
app.use("/projects", projects);
// Routes
// Initiate server
app.listen(PORT, () => {
  console.log(`Server is running on port:${PORT}`);
});
