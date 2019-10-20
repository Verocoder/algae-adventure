const gameplay = {
  locations: {
    shallow_sea: {
      title: "Shallow Sea",
      effectText: "",
      description: "A shallow sea area near the coast",
      image:
        "https://cff2.earth.com/uploads/2019/07/26121452/Algae-may-have-joined-with-fungi-to-give-rise-to-the-first-terrestrial-plants-730x410.jpg",
      helpText:
        "Shallow sea areas have some kind of feature that make them either good or not good for growing algae",
      algal_ceiling: 1000000000000,
      growth_factor: 4
    },
    deep_sea: {
      title: "Deep Sea",
      effectText: "",
      description: "A shallow sea area near the coast",
      video: null,
      image:
        "https://cff2.earth.com/uploads/2019/07/26121452/Algae-may-have-joined-with-fungi-to-give-rise-to-the-first-terrestrial-plants-730x410.jpg",
      helpText:
        "Shallow sea areas have some kind of feature that make them either good or not good for growing algae",
      algal_ceiling: 1000000000000000,
      growth_factor: 1.5
    },
    lowland_river: {
      title: "Lowland River",
      effectText: "",
      description: "A shallow sea area near the coast",
      video: null,
      image:
        "https://cff2.earth.com/uploads/2019/07/26121452/Algae-may-have-joined-with-fungi-to-give-rise-to-the-first-terrestrial-plants-730x410.jpg",
      helpText:
        "Shallow sea areas have some kind of feature that make them either good or not good for growing algae",
      algal_ceiling: 250000,
      growth_factor: 2
    },
    upland_river: {
      title: "Lowland River",
      effectText: "",
      description: "A shallow sea area near the coast",
      video: null,
      image:
        "https://cff2.earth.com/uploads/2019/07/26121452/Algae-may-have-joined-with-fungi-to-give-rise-to-the-first-terrestrial-plants-730x410.jpg",
      helpText:
        "Shallow sea areas have some kind of feature that make them either good or not good for growing algae",
      algal_ceiling: 250000,
      growth_factor: 1
    },
    lake: {
      title: "Lakes and Ponds",
      effectText: "",
      description: "A shallow sea area near the coast",
      video: null,
      image:
        "https://cff2.earth.com/uploads/2019/07/26121452/Algae-may-have-joined-with-fungi-to-give-rise-to-the-first-terrestrial-plants-730x410.jpg",
      helpText:
        "Shallow sea areas have some kind of feature that make them either good or not good for growing algae",
      algal_ceiling: 50000,
      growth_factor: 2.5
    }
  },
  climate: {
    title: "Cimate",
    video: null,
    image:
      "https://cff2.earth.com/uploads/2019/07/26121452/Algae-may-have-joined-with-fungi-to-give-rise-to-the-first-terrestrial-plants-730x410.jpg",
    // all areas
      eligible_areas: ["upland_river", "lowland_river", "lake", "shallow_sea", "deep_sea"],
    description: "",
    helpText: "",
    options: [
      {
        title: "warm",
        effectText: "Warm weather will help algae grow",
        video: null,
        image: "",
        description:
          "THis is a warm climate. as a bloom you will do super well here",
        effect: {
          duration: -1,
          algae_survive: 1,
          growth_factor: 2
        }
      },
      {
        title: "cold",
        effectText: "Cooler weather slows the growth of algae",
        video: null,
        image:
          "https://cff2.earth.com/uploads/2019/07/26121452/Algae-may-have-joined-with-fungi-to-give-rise-to-the-first-terrestrial-plants-730x410.jpg",
        description:
          "THis is a warm climate. as a bloom ou will do super well here",
        effect: {
          duration: -1,
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
      image: "",
      eligible_areas: ["upland_river", "lowland_river", "lake"],
      description: "",
      helpText: "",
      options: [
        {
          title: "Shoe them away",
          effectText: "The water stays clean with less for the algae to eat",
          video: null,
          image: "",
          description: "Shoe away the birds",
          effect: {
            duration: 0,
            algae_survive: 1,
            growth_factor: 1
          }
        },
        {
          title: "Let them stay",
          effectText: "Bird poo releases phosphates and nitrates that feed algae",
          video: null,
          image: "",
          description: "Keep the birds",
          effect: {
            duration: 4,
            algae_survive: 1,
            growth_factor: 3
          }
        }
      ]
    },
    {
      title: "Sewage",
      video: null,
      image: "",
      eligible_areas: ["upland_river", "lowland_river", "lake"],
      description:
        "A local sewage company want to use your lake for drainage, for a handsome price. ",
      helpText: "",
      options: [
        {
          title: "Let Them",
          effectText: "The sewage feeds the algae and poisons the water",
          video: null,
          image: "",
          description: "Say Yes To Sewage",
          effect: {
            duration: 28,
            algae_survive: 1,
            growth_factor: 5
          }
        },
        {
          title: "Say No",
          effectText: "The sewage would have fed the algae and poisoned the water",
          video: null,
          image: "",
          description: "Say No To Sewage",
          effect: {
            duration: 0,
            algae_survive: 1,
            growth_factor: 1
          }
        }
      ]
    },
    {
      title: "There was a warm spell",
      eligible_areas: ["upland_river", "lowland_river", "lake", "shallow_sea", "deep_sea"],
      description: "",
      helpText: "",
      options: [
        {
          title: "Sunny Weather",
          effectText: "Warm sunny weather helps algae grow",
          video: null,
          image: "",
          description: "Sunny Weather",
          effect: {
            duration: 2,
            algae_survive: 1,
            growth_factor: 2
          }
        }
      ]
    },
    {
      title: "there was a big storm",
      eligible_areas: ["upland_river", "lowland_river", "lake", "shallow_sea", "deep_sea"],
      description: "",
      helpText: "",
      options: [
        {
          title: "Stormy Weather",
          description: "Stormy Weather",
          effectText: "Storms wash nutrients into the water from the land, helping algae to flourish",
          video: null,
          image: "",
          effect: {
            duration: 1,
            algae_survive: 1,
            growth_factor: 2
          }
        }
      ]
    },
    {
      title: "there was a cloudy period",
      eligible_areas: ["upland_river", "lowland_river", "lake", "shallow_sea", "deep_sea"],
      description: "",
      helpText: "",
      options: [
        {
          title: "Cloudy Weather",
          effectText: "Clouds block the sun from reaching the waters surface which reduce the rate that blooms can grow at",
          video: null,
          image: "",
          description: "Cloudy Weather",
          effect: {
            duration: 4,
            algae_survive: 1,
            growth_factor: 0.5
          }
        }
      ]
    }
  ]
};

module.exports = gameplay;
