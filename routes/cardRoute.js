// const knex = require("knex")(require("../knexfile"));
const router = require("express").Router();
const cardController = require("../controllers/card-controller");

router.get("/", cardController.getCards);
router.get("/:id", cardController.getCardById);

module.exports = router;
