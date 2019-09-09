const express = require('express');
const mongoose = require('mongoose');
const requireDir = require('require-dir');

//Initiating the app
const app = express();
app.use(express.json());

mongoose.connect('mongodb://localhost:27017/backend-test', { useNewUrlParser: true });
requireDir('./src/models');

const Survivor = mongoose.model('Survivor');

app.get("/", (req, res) => {
  Survivor.create({
    name: 'Mauricio',
    age: 25,
    gender: 'Male',
    location: {
      latitude: 2931.21,
      longitude: 2132.31,
    },
    resources: {
      Water: 1,
      Ammunition: 2,
      Medication: 3,
      Food: 5,
    },
  });

  return res.send("Survivor created");
});

//routes
app.use('/api', require('./src/routes'));

//setting up the app to be listening at port 3001
app.listen(3001);
