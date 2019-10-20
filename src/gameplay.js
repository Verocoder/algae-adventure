
const gameplay = {
  locations: {
    shallow_sea: {
      title: "Shallow Sea",
      effectText: "",
      description: "Shallow coastal seas are predominantly found at the coastlines of land masses. Many coastal citites have grown up around river estuaries and the sheltered waters that make them suitable for ports.",
      image: "https://github.com/Verocoder/algae-adventure/blob/master/src/images/shallow_sea.jpg?raw=true",
      video: "https://github.com/Verocoder/algae-adventure/blob/master/src/videos/shallow_seas.mp4?raw=true",
        minimap: "https://raw.githubusercontent.com/Verocoder/algae-adventure/master/src/images/algae-minimap-shallow-sea.png",
      helpText:
        "Shallow sea areas have some kind of feature that make them either good or not good for growing algae",
      algal_ceiling: 1000000000000,
      growth_factor: 4
    },
    deep_sea: {
      title: "Deep Sea",
      effectText: "",
      description: "Deep seas, such as those found far out from any land masses,are full of algae. However, the turbulent, relatively low nutrient conditions and cool temperatures mean that algal blooms are rare.",
      image: "https://github.com/Verocoder/algae-adventure/blob/master/src/images/shallow_sea.jpg?raw=true",
      video: "https://github.com/Verocoder/algae-adventure/blob/master/src/videos/shallow_seas.mp4?raw=true",
        minimap: "https://raw.githubusercontent.com/Verocoder/algae-adventure/master/src/images/algae-minimap-deep-sea.png",
      helpText:
        "Shallow sea areas have some kind of feature that make them either good or not good for growing algae",
      algal_ceiling: 1000000000000000,
      growth_factor: 1.5
    },
    lowland_river: {
      title: "Lowland Rivers",
      effectText: "",
      description: "Lowland rivers tend to run through relatively flat, fertile land, where much of the world's intensive agriculture takes place. Many inland cities have grown up around crossing points on lowland rivers.",
      image: "https://github.com/Verocoder/algae-adventure/blob/master/src/images/shallow_sea.jpg?raw=true",
      video: "https://github.com/Verocoder/algae-adventure/blob/master/src/videos/shallow_seas.mp4?raw=true",
        minimap: "https://raw.githubusercontent.com/Verocoder/algae-adventure/master/src/images/algae-minimap-lowland-river.png",
      helpText:
        "Shallow sea areas have some kind of feature that make them either good or not good for growing algae",
      algal_ceiling: 250000,
      growth_factor: 2
    },
    upland_river: {
      title: "Upland River",
      effectText: "",
      description: "Upland rivers tend to be shallow, fast flowing and cold. Many of them run through sparsely populated areas with steep landforms poorly suited to intensive agriculture.",
      image: "https://github.com/Verocoder/algae-adventure/blob/master/src/images/shallow_sea.jpg?raw=true",
      video: "https://github.com/Verocoder/algae-adventure/blob/master/src/videos/shallow_seas.mp4?raw=true",
        minimap: "https://raw.githubusercontent.com/Verocoder/algae-adventure/master/src/images/algae-minimap-upland-river.png",
      helpText:
        "Shallow sea areas have some kind of feature that make them either good or not good for growing algae",
      algal_ceiling: 250000,
      growth_factor: 1
    },
    lake: {
      title: "Lakes and Ponds",
      effectText: "",
      description: "In spring and summer, the still waters in lakes warm up quickly. During times of heavy rainfall, nutrients can leach into the lake via soil washed away from the surrounding land",
      image: "https://github.com/Verocoder/algae-adventure/blob/master/src/images/shallow_sea.jpg?raw=true",
      video: "https://github.com/Verocoder/algae-adventure/blob/master/src/videos/shallow_seas.mp4?raw=true",
        minimap: "/images/algae-minimap-lake.png",
      helpText:
        "Shallow sea areas have some kind of feature that make them either good or not good for growing algae",
      algal_ceiling: 50000,
      growth_factor: 2.5
    }
  },
  climate: {
    title: "Climate",
    video: null,
    image: "https://github.com/Verocoder/algae-adventure/blob/master/src/images/sun.jpg?raw=true",
    // all areas
      eligible_areas: ["upland_river", "lowland_river", "lake", "shallow_sea", "deep_sea"],
    description: "",
    helpText: "",
    options: [
      {
        title: "Warm Climate",
        effectText: "Warm weather will help algae grow...",
        video: null,
        image: "https://github.com/Verocoder/algae-adventure/blob/master/src/images/sun.jpg?raw=true",
        description:
          "This is a warm climate - as a bloom, you will do super well here",
        effect: {
          duration: -1,
          algae_survive: 1,
          growth_factor: 2
        }
      },
      {
        title: "Cold Climate",
        effectText: "Cooler weather slows the growth of algae...",
        video: null,
        image: "https://github.com/Verocoder/algae-adventure/blob/master/src/images/storm.webp?raw=true",
        description:
          "This is a cold climate. as a bloom, you won't do as well here",
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
      title: "Population Density",
      video: null,
      image: "https://github.com/Verocoder/algae-adventure/blob/master/src/images/lilducks.jpg?raw=true",
      eligible_areas: ["upland_river", "lowland_river", "lake"],
      description: "",
      helpText: "",
      options: [
        {
          title: "High Population",
          effectText: "Due to a growing population, cities are increasing in size, leading to an increase in sewage works leaking nutrient rich treated sewage into the rivers and seas. Intensive agriculture is also on the rise, meaning higher levels of fertiliser usage and increased soil run-off.",
          video: null,
          image: "https://github.com/Verocoder/algae-adventure/blob/master/src/images/lilducks.jpg?raw=true",
          description: "Increase population",
          effect: {
            duration: 4,
            algae_survive: 1,
            growth_factor: 3
          }
        },
        {
          title: "Low Population",
          effectText: "In countries where people live in relatively small communities, the discharge of sewage works has less of an impact on individual rivers and lakes. A lower intensity of agriculture and lower fertiliser usage also means lower soil run-off rates.",
          video: null,
          image: "",
          description: "Decrease Population",
          effect: {
            duration: 4,
            algae_survive: 1,
            growth_factor: 1
          }
        }
      ]
    },
    {
      title: "Some geese decide to nest near your lake!",
      video: null,
      image: "",
      eligible_areas: ["upland_river", "lowland_river", "lake"],
      description: "",
      helpText: "",
      options: [
        {
          title: "Shoo them away",
          effectText: "The water stays clean, with less for the algae to eat",
          video: null,
          image: "",
          description: "Shoo away the birds",
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
          image: "https://github.com/Verocoder/algae-adventure/blob/master/src/images/lilducks.jpg?raw=true",
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
      title: "Sewage draining!",
      video: null,
      image: "https://github.com/Verocoder/algae-adventure/blob/master/src/images/lilducks.jpg?raw=true",
      eligible_areas: ["upland_river", "lowland_river", "lake"],
      description:
        "A local sewage company want to use your lake for drainage, for a handsome price. ",
      helpText: "",
      options: [
        {
          title: "Let Them",
          effectText: "The sewage feeds the algae and poisons the water",
          video: null,
          image: "https://github.com/Verocoder/algae-adventure/blob/master/src/images/lilducks.jpg?raw=true",
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
          image: "https://github.com/Verocoder/algae-adventure/blob/master/src/images/lilducks.jpg?raw=true",
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
      title: "There was a warm spell!",
      eligible_areas: ["upland_river", "lowland_river", "lake", "shallow_sea", "deep_sea"],
      description: "",
      helpText: "",
      options: [
        {
          title: "Sunny Weather",
          effectText: "Warm sunny weather helps algae grow",
          video: null,
          image: "https://github.com/Verocoder/algae-adventure/blob/master/src/images/sun.jpg?raw=true",
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
      title: "There was a big storm!",
      eligible_areas: ["upland_river", "lowland_river", "lake", "shallow_sea", "deep_sea"],
      description: "",
      helpText: "",
      options: [
        {
          title: "Stormy Weather",
          description: "Stormy Weather",
          effectText: "Storms wash nutrients into the water from the land, helping algae to flourish.",
          video: null,
          image: "https://github.com/Verocoder/algae-adventure/blob/master/src/images/storm.webp?raw=true",
          effect: {
            duration: 1,
            algae_survive: 1,
            growth_factor: 2
          }
        }
      ]
    },
    {
      title: "There was a cloudy period!",
      eligible_areas: ["upland_river", "lowland_river", "lake", "shallow_sea", "deep_sea"],
      description: "",
      helpText: "",
      options: [
        {
          title: "Cloudy Weather",
          effectText: "Clouds block the sun from reaching the water's surface which reduces the rate that your bloom can grow at",
          video: null,
          image: "https://github.com/Verocoder/algae-adventure/blob/master/src/images/storm.webp?raw=true",
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