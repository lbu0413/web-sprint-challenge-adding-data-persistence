// complete your db configuration

const knex = require('knex')

const config = require('../knexfile')

const environment = process.env.NODE_ENV || "development";
module.exports = knex(knexConfig[environment]);