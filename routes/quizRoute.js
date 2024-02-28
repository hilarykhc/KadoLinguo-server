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
router.get("/:quizId", (req, res) => {
  const quizzes = readQuizzes();
  const quizId = parseInt(req.params.quizId, 10);
  const singleQuiz = quizzes.find((quiz) => quiz.id === quizId);
  if (singleQuiz) {
    res.json(singleQuiz);
  } else {
    res.status(404).json({ error: "Quiz not found" });
  }
});

module.exports = router;
