const gameplay = {
  locations: {
    shallow_sea: {
      title: "Shallow Sea",
      description: "A shallow sea area near the coast",
      media:"",
      helpText:
        "Shallow sea areas have some kind of feature that make them either good or not good for growing algae",
      image: "location of image",
      algal_ceiling: 10000,
      growth_factor: 4,
      resource_availability: 5
    }
  },
  climate: {
    title: "Cimate",
    media:"",
    // all areas
    eligible_areas: ["river", "shallow_sea"],
    description: "",
    helpText: "",
    options: [
      {
        title: "warm",
        media:"",
        description:
          "THis is a warm climate. as a bloom ou will do super well here",
        effect: {
          duration:-1,
          algae_survive: 1,
          growth_factor: 5
        }
      },
      {
        title: "cold",
        media:"",
        description:
          "THis is a warm climate. as a bloom ou will do super well here",
        effect: {
          duration:-1,
          algae_survive: 1,
          growth_factor: 0.5
        }
      }
    ]
  },
  choices: [
    {
      title: "Some birds nest",
      media:"",
      eligible_areas: ["river", "shallow_sea"],
      description: "",
      helpText: "",
      options: [
        {
          title: "shoe them away",
          media:"",
          description: "",
          effect: {
            duration:0,
            algae_survive: 1,
            growth_factor: 1
          }
        },
        {
          title: "Let them stay",
          media:"",
          description: "",
          effect: {
            duration:4,
            algae_survive: 1,
            growth_factor: 5
          }
        }
      ]
    }
  ],

  random_events: [
    {
      title: "There was a warm spell",
      eligible_areas: ["river", "shallow_sea", "deep_sea"],
      description: "",
      helpText: "",
      effect: {
        duration:2,
        algae_survive: 1,
        growth_factor: 2
      }
    },{
      title: "there was a big storm",
      eligible_areas: ["shallow_sea","deep_sea"],
      description: "",
      helpText: "",
      effect: {
        duration:1,
        algae_survive: 0.6,
        growth_factor: 0.5
      }
    }
  ]
};

module.exports = gameplay;
