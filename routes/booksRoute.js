const express = require("express");
const router = express.Router();
const fs = require("fs");
const crypto = require("crypto");

const FILE_PATH = "./data/books.json";

const readBooks = () => {
  const booksData = fs.readFileSync(FILE_PATH);
  const parsedBooks = JSON.parse(booksData);
  return parsedBooks;
};

//GET all books
router.get("/", (req, res) => {
  const books = readBooks();
  res.status(200).json(books);
});

module.exports = router;
