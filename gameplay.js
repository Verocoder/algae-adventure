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
      points: 10,
      HelpText: "OMG this is a warm climate"
    },
    coldClimate: {
      title: "Cold climate",
      videoLocation: "drive://cold.mp4",
      points: -5,
      leftButtonKey: "",
      rightButtonKey: "",
      leftButtonChoiceText: "",
      rightButtonChoiceText: "",
      HelpText: "Oh no this is a cold climate"
    }
  },
    choices: [
      {
        "title": "Some birds nest",
        eligible_areas:["river"],
        "description": "",
        "helpText": "",
        optionA:{
          text:"leave them be",
          score:2
        },
        optionB:{
          text:"shoo them away",
          score:0.5
        }
      }
    ] ,

    random_events:[

      {
        "title": "there was a warm spell",
        eligible_areas:["river,sea"],
        "description": "",
        "helpText": "",
        score:2
      }
    ]
  }
};

module.exports = gameplay;
