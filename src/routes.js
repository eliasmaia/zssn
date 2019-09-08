const express = require('express');
const routes = express.Router();

//Creating our first route
routes.get('/', (req, res) => {
  res.send("Server is on!");
});

module.exports = routes;
