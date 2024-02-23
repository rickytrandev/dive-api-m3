import express from "express"
import { fish } from "./data.js";
import cors from "cors"

const app = express()
const port = 8080

app.use(cors());
app.use(express.json());


app.locals.favorites = []

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
})

app.get("/api/v1/sushi", (err, res) => {
  res.status(200).json({fish})
})

app.post("api/v1/sushi", (err, res) => {
  
})

