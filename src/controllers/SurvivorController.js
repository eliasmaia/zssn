const mongoose = require('mongoose');

const Survivor = mongoose.model('Survivor');

module.exports = {
  // index will get all survivors
  async index(req, res){
    const survivors =  await Survivor.find();

    return res.json(survivors);
  },


};
