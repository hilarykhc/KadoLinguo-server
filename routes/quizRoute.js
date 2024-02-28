const express = require("express");
const router = express.Router();
const fs = require("fs");
const crypto = require("crypto");

const FILE_PATH = "./data/quiz.json";

const readQuizzes = () => {
  const quizzesData = fs.readFileSync(FILE_PATH);
  const parsedQuizzes = JSON.parse(quizzesData);
  return parsedQuizzes;
};

//GET all quizzes
router.get("/", (req, res) => {
  const quizzes = readQuizzes();
  res.status(200).json(quizzes);
});

//GET single quiz
router.get("/:id", (req, res) => {
  const quizzes = readQuizzes();
  const singleQuiz = quizzes.find((quiz) => quiz.id === req.params.quizId);
  res.json(singleQuiz);
});

module.exports = router;
