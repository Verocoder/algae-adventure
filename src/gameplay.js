const gameplay = {
  locations: {
    shallow_sea: {
      title: "Shallow Sea",
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
      description: "A shallow sea area near the coast",
      video: null,
      image:
        "https://cff2.earth.com/uploads/2019/07/26121452/Algae-may-have-joined-with-fungi-to-give-rise-to-the-first-terrestrial-plants-730x410.jpg",
      helpText:
        "Shallow sea areas have some kind of feature that make them either good or not good for growing algae",
      algal_ceiling: 1000000000000000,
      growth_factor: 5
    },
    lowland_river: {
      title: "Lowland River",
      description: "A shallow sea area near the coast",
      video: null,
      image:
        "https://cff2.earth.com/uploads/2019/07/26121452/Algae-may-have-joined-with-fungi-to-give-rise-to-the-first-terrestrial-plants-730x410.jpg",
      helpText:
        "Shallow sea areas have some kind of feature that make them either good or not good for growing algae",
      algal_ceiling: 1000000000,
      growth_factor: 4
    },
    upland_river: {
      title: "Lowland River",
      description: "A shallow sea area near the coast",
      video: null,
      image:
        "https://cff2.earth.com/uploads/2019/07/26121452/Algae-may-have-joined-with-fungi-to-give-rise-to-the-first-terrestrial-plants-730x410.jpg",
      helpText:
        "Shallow sea areas have some kind of feature that make them either good or not good for growing algae",
      algal_ceiling: 1000000000,
      growth_factor: 1
    },
    lake: {
      title: "Lakes and Ponds",
      description: "A shallow sea area near the coast",
      video: null,
      image:
        "https://cff2.earth.com/uploads/2019/07/26121452/Algae-may-have-joined-with-fungi-to-give-rise-to-the-first-terrestrial-plants-730x410.jpg",
      helpText:
        "Shallow sea areas have some kind of feature that make them either good or not good for growing algae",
      algal_ceiling: 1000000,
      growth_factor: 5
    }
  },
  climate: {
    title: "Cimate",
    video: null,
    image:
      "https://cff2.earth.com/uploads/2019/07/26121452/Algae-may-have-joined-with-fungi-to-give-rise-to-the-first-terrestrial-plants-730x410.jpg",
    // all areas
    eligible_areas: ["river", "shallow_sea"],
    description: "",
    helpText: "",
    options: [
      {
        title: "warm",
        video: null,
        image: "",
        description:
          "THis is a warm climate. as a bloom ou will do super well here",
        effect: {
          duration: -1,
          algae_survive: 1,
          growth_factor: 5
        }
      },
      {
        title: "cold",
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
      eligible_areas: ["river", "lake"],
      description: "",
      helpText: "",
      options: [
        {
          title: "shoe them away",
          video: null,
          image: "",
          description: "",
          effect: {
            duration: 0,
            algae_survive: 1,
            growth_factor: 1
          }
        },
        {
          title: "Let them stay",
          video: null,
          image: "",
          description: "",
          effect: {
            duration: 4,
            algae_survive: 1,
            growth_factor: 5
          }
        }
      ]
    },
    {
      title: "Sewage",
      video: null,
      image: "",
      eligible_areas: ["river", "lake"],
      description:
        "A local sewage company want to use your lake for drainage, for a handsome price. ",
      helpText: "",
      options: [
        {
          title: "Let Them",
          video: null,
          image: "",
          description: "",
          effect: {
            duration: 28,
            algae_survive: 1,
            growth_factor: 10
          }
        },
        {
          title: "Say No",
          video: null,
          image: "",
          description: "",
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
      eligible_areas: ["river", "lake", "shallow_sea", "deep_sea"],
      description: "",
      helpText: "",
      options: [
        {
          title: "shoe them away",
          video: null,
          image: "",
          description: "",
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
      eligible_areas: ["river", "lake", "shallow_sea", "deep_sea"],
      description: "",
      helpText: "",
      options: [
        {
          title: "shoe them away",
          video: null,
          image: "",
          description: "",
          effect: {
            duration: 1,
            algae_survive: 0.6,
            growth_factor: 0.5
          }
        }
      ]
    }
  ]
};

module.exports = gameplay;
