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
  },

  //function update, will be responsible for letting the survivor update his location
  async update(req, res){
    const survivor = await Survivor.findByIdAndUpdate(req.params.id, req.body, { new: true});

    return res.json(survivor);
  },

  //function reportInfection, responsible for reporting if a survivor has been infected.
  async reportInfection(req, res){
    if( req.params.id != req.params.id2){

      if(req.body.infections < 3){
        const survivor = await Survivor.findByIdAndUpdate(req.params.id, req.body, { new:true});

        return res.json(survivor);
      }
       else if (req.body.infected ) {
        res.json({
          success: true,
          message: 'The survivor is infected, he has already been reported as infected 3 times!',
        })
      }
    } else {
        res.json({
          success: false,
          message: 'The survivor cannot report himself as infected!',
        })
    }
  }
};
