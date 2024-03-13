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
const quizRoutes = require("./routes/quizRoute");
const booksRoutes = require("./routes/booksRoute");
const shopRoutes = require("./routes/shopRoute");

// all users routes
app.use("/users", userRoutes);
app.use("/cards", cardRoutes);
app.use("/quiz", quizRoutes);
app.use("/books", booksRoutes);
app.use("/shops", shopRoutes);

app.listen(PORT, () => {
  console.log(`running at http://localhost:${PORT}`);
});
