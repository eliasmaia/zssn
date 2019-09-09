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
  },

  // return the percentage of infected survivors
  async infected(req, res){
    var infectedSurvivors = 0;
    const survivors =  await Survivor.find();

    for (let i in survivors) {
      if(survivors[i].infected){
        infectedSurvivors++;
      }
    }

    return res.json({
      "Percentage of infected survivors": (infectedSurvivors/survivors.length)*100 + "%",
    })
  },

  // return the percentage of non-infected survivors
  async nonInfected(req, res){
    var nonInfectedSurvivors = 0;
    const survivors =  await Survivor.find();

    for (let i in survivors) {
      if(!survivors[i].infected){
        nonInfectedSurvivors++;
      }
    }

    return res.json({
      "Percentage of non infected survivors": (nonInfectedSurvivors/survivors.length)*100 + "%",
    })
  },

};
