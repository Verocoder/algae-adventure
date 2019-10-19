const gameplay = {
  locations:{
    shallow_sea:{
      "title": "Shallow Sea",
      "description": "A shallow sea area near the coast",
      "helpText": "Shallow sea areas have some kind of feature that make them either good or not good for growing algae", 
      "image":"location of image",
      "algal_ceiling":10000,
      "growth_factor":4, 
      "resource_availability":5
  },
  climates:{
    warmClimate: {
      title: "Warm climate",
      description: "THis is a warm climate. as a bloom ou will do super well here",
      videoLocation: "drive://warm.mp4",
      growth_factor: 3,
      HelpText: "OMG this is a warm climate"
    },
    coldClimate: {
      title: "cold climate",
      description: "THis is a cold climate. as a bloom ou will do super well here JOKES IT WONT" ,
      videoLocation: "drive://warm.mp4",
      growth_factor: 0.5,
      HelpText: "OMG this is a cold climate"
    },
  },
    choices: [
      {
        "title": "Some birds nest",
        eligible_areas:["river"],
        "description": "",
        "helpText": "",
        options:[
        {
          text:"leave them be",
          effect:{"algae_survive":0.8, "growth_factor": 1, "long_term_growth_factor":1}
        },{
          text:"shoo them away",
          effect:{"algae_survive":0.8, "growth_factor": 1, "long_term_growth_factor":1}
        }
      ]
      }
    ] ,

    random_events:[
      {
        "title": "there was a warm spell",
        eligible_areas:["river","sea"],
        "description": "",
        "helpText": "",
        effect:{"algae_survive":0.8, "growth_factor": 1, "long_term_growth_factor":1}
      }
    ]
  }
};

module.exports = gameplay;
