const gameplay = {
  locations: {
    shallow_sea: {
      title: "Shallow Sea",
      description: "A shallow sea area near the coast",
      video: null,
      image: "https://cff2.earth.com/uploads/2019/07/26121452/Algae-may-have-joined-with-fungi-to-give-rise-to-the-first-terrestrial-plants-730x410.jpg",
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
    video: null,
    image:"https://cff2.earth.com/uploads/2019/07/26121452/Algae-may-have-joined-with-fungi-to-give-rise-to-the-first-terrestrial-plants-730x410.jpg",
    // all areas
    eligible_areas: ["river", "shallow_sea"],
    description: "",
    helpText: "",
    options: [
      {
        title: "warm",
        video: null,
        image:"",
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
        video: null,
        image:"https://cff2.earth.com/uploads/2019/07/26121452/Algae-may-have-joined-with-fungi-to-give-rise-to-the-first-terrestrial-plants-730x410.jpg",
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
      video: null,
      image:"",
      eligible_areas: ["river", "shallow_sea"],
      description: "",
      helpText: "",
      options: [
        {
          title: "shoe them away",
          video: null,
          image:"",
          description: "",
          effect: {
            duration:0,
            algae_survive: 1,
            growth_factor: 1
          }
        },
        {
          title: "Let them stay",
          video: null,
          image:"",
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
