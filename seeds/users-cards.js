/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */

const usersData = require("../seed-data/users");
const cardsData = require("../seed-data/cards");

exports.seed = async function (knex) {
  // Deletes ALL existing entries
  await knex("card").del();
  await knex("user").del();
  await knex("user").insert(usersData);
  await knex("card").insert(cardsData);
};
