require("dotenv").config();
const express = require("express");
const cors = require("cors");
const app = express();

app.use(cors());

const PORT = process.env.PORT || 8081;

// basic home route
app.get("/", (req, res) => {
  res.send("Welcome to my API");
});

const userRoutes = require("./routes/userRoute");
const cardRoutes = require("./routes/cardRoute");

// all users routes
app.use("/users", userRoutes);
app.use("/cards", cardRoutes);

app.listen(PORT, () => {
  console.log(`running at http://localhost:${PORT}`);
});
