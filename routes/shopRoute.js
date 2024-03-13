const express = require("express");
const router = express.Router();
const fs = require("fs");
const crypto = require("crypto");

const FILE_PATH = "./data/shop.json";

const readShops = () => {
  const shopsData = fs.readFileSync(FILE_PATH);
  const parsedShops = JSON.parse(shopsData);
  return parsedShops;
};

//GET all
router.get("/", (req, res) => {
  const shops = readShops();
  res.status(200).json(shops);
});

module.exports = router;
