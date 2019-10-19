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
  climates:[
    {
      title:"warm",
      description: "THis is a warm climate. as a bloom ou will do super well here",
      effect:{"algae_survive":0.8, "growth_factor": 1, "long_term_growth_factor":5}
    },{
      title:"cold",
      description: "THis is a warm climate. as a bloom ou will do super well here",
      effect:{"algae_survive":0.8, "growth_factor": 1, "long_term_growth_factor":0.5}
    }
  ],
  choices: [
    {
      "title": "Some birds nest",
      eligible_areas:["river"],
      "description": "",
      "helpText": "",
      options:[
      {
        title: "shoe them away",
        description: "",
        effect:{"algae_survive":1, "growth_factor": 1, "long_term_growth_factor":1}
      },{
        title: "Let them stay",
        description: "",
        effect:{"algae_survive":0.8, "growth_factor": 5, "long_term_growth_factor":1}
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
