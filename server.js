import express from "express";
import { fish } from "./data.js";
import cors from "cors";
import { fileURLToPath } from 'url';
import { dirname } from 'path';
import { config } from "dotenv";

config()

const app = express();
const port = 8080;
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

app.use(cors());
app.use(express.json());
app.use(express.static('assets'));
app.use(express.static(__dirname));


app.locals.favorites = [];

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});

app.get("/api/v1/sushi", (req, res) => {
  res.status(200).json({ fish });
});

app.post("/api/v1/sushi", (req, res) => {
  // Handle POST request here
});
