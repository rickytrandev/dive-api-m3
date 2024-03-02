import express from "express";
import { fish } from "./data.js";
import cors from "cors";
import { fileURLToPath } from 'url';
import { dirname } from 'path';
import { config } from "dotenv";

config()

const app = express();
const PORT = process.env.PORT || 8080;
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

app.use(cors());
app.use(express.json());

// Serve static assets from the 'assets' directory
app.use(express.static('assets'));

app.locals.favorites = [];

app.listen(PORT, () => {
  console.log(`Server is running on PORT ${PORT}`);
});

app.get("/api/v1/sushi", (req, res) => {
  // Update image URLs based on environment
  const updatedFish = fish.map(item => ({
    ...item,
    image_url: process.env.PORT ? 
      `https://dive-api-717e7547a56e.herokuapp.com/assets/${item.image_url}` : 
      `http://localhost:8080/assets/${item.image_url}`
  }));

  res.status(200).json({ fish: updatedFish });
});

app.post("/api/v1/sushi", (req, res) => {
  // Handle POST request here
});









// import express from "express";
// import { fish } from "./data.js";
// import cors from "cors";
// import { fileURLToPath } from 'url';
// import { dirname } from 'path';
// import { config } from "dotenv";

// config()

// const app = express();
// const PORT = process.env.PORT || 8080;
// const __filename = fileURLToPath(import.meta.url);
// const __dirname = dirname(__filename);

// app.use(cors());
// app.use(express.json());
// app.use(express.static('assets'));
// app.use(express.static(__dirname));


// app.locals.favorites = [];

// app.listen(PORT, () => {
//   console.log(`Server is running on PORT ${PORT}`);
// });

// app.get("/api/v1/sushi", (req, res) => {
//   res.status(200).json({ fish });
// });

// app.post("/api/v1/sushi", (req, res) => {
//   // Handle POST request here
// });
