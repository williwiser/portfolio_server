import express from "express";
import cors from "cors";
import db from "./db.js";

const app = express();
const port = process.env.PORT || 3000;

db.connect();

// MIDDLEWARE
app.use(cors());

// ROUTES
app.get("/getProjects", async (req, res) => {
  try {
    const response = await db.query("SELECT * FROM projects");
    const getProjects = response.rows;
    res.json(getProjects);
  } catch (error) {
    console.log(error);
  }
});

app.post("/messageMe", async (req, res) => {});

app.listen(port, () => {
  console.log(`Server listening on port ${port}.`);
});
