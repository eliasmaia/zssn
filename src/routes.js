const express = require('express');
const routes = express.Router();

const SurvivorController = require('./controllers/SurvivorController');
// require('./models/Survivor');

//Route responsible to get all survivors
routes.get("/survivors", SurvivorController.index);
//route responsible for creating the survivors
routes.post("/survivors", SurvivorController.store);
//route responsible for letting the survivor update his location
routes.put("/survivors/:id", SurvivorController.update);
//route to be used to inform if a user has been infected.
routes.put("/survivors/:id/reportinfection/:id2", SurvivorController.reportInfection);
//route to return the percentage of infected survivors
routes.get("/survivors/reports/infected", SurvivorController.infected);
//route to return the percentage of non infected survivors
routes.get("/survivors/reports/noninfected", SurvivorController.nonInfected);
//route to return the average amount of resources per survivor
routes.get("/survivors/reports/averageamount", SurvivorController.average);

module.exports = routes;
