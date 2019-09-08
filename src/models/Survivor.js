const mongoose = require('mongoose');

const SurvivorSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  age: {
    type: Number,
    required: true,
  },
  gender: {
    type: String,
    required: true,
  },
  location: {
    latitude: {
      type: Number,
      required: true,
    },
    longitude: {
      type: Number,
      required: true,
    },
  },
  resources: {
    Water:{
      type: Number,
      required: true,
    },
    Ammunition: {
      type: Number,
      required: true,
    },
    Medication: {
      type: Number,
      required: true,
    },
    Food: {
      type: Number,
      required: true,
    },
  },
});

mongoose.model("Survivor", SurvivorSchema);
