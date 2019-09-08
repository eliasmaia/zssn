const express = require('express');
const routes = express.Router();

const SurvivorController = require('./controllers/SurvivorController');
// require('./models/Survivor');

//Creating our first route
// routes.get('/', (req, res) => {
//   res.send("Server is on!");
// });

//Route responsible to get all survivors
routes.get("/survivors", SurvivorController.index);

module.exports = routes;