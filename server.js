import express from "express";
import bodyParser from "body-parser";

const app = express();
const PORT = 5555;

app.use(bodyParser.json());

// Initiate server
app.listen(PORT, () => {
  console.log(`Server is running on port:${PORT}`);
});
