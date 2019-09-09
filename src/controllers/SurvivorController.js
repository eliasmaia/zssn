const mongoose = require('mongoose');

const Survivor = mongoose.model('Survivor');

module.exports = {
  // index will get all survivors
  async index(req, res){
    const survivors =  await Survivor.find();

    return res.json(survivors);
  },

  //function store will create new survivors
  async store(req, res){
    const survivor = await Survivor.create(req.body);

    return res.json(survivor);
  }

};
