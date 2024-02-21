const knex = require("knex")(require("../knexfile"));

const getCards = async (req, res) => {
  try {
    const data = await knex("card");
    res.status(200).json(data);
  } catch (err) {
    res.status(400).send(`Error retrieving Card: ${err}`);
  }
};

//find card by id
const getCardById = async (req, res) => {
  try {
    const card = await knex("card").where({ id: req.params.id }).first();

    if (card.length === 0) {
      return res.status(404).json({
        message: `Card with ID ${req.params.id} not found`,
      });
    }
    res.status(200).json(card);
  } catch (error) {
    res.status(500).json({
      message: `Unable to retrieve card data for card with ID ${req.params.id}`,
    });
    console.error(error);
  }
};

module.exports = {
  getCards,
  getCardById,
};
