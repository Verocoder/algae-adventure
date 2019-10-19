import data from './gameplay.js';

class Engine {
  constructor(starting_size, location_name) {
    //static imports
    // sort out getting data
    //constructor variables
    this.starting_size = starting_size;
    this.location = data.regions[location_name];

    //class variables
    this.current_count = starting_size;
    this.growth_factor = this.location.growth_factor;
  }

  // events is a list of events
  iterate(events) {
    let available_algae = this.current_count;
    let growth_factor = this.growth_factor;
    let resource_availability = this.location.resource_availability;

    if (available_algae > this.location.algal_ceiling) {
      available_algae = available_algae / 10;
    }

    for (event in events) {
      if (event.algae_survive) {
        available_algae = available_algae * event.algae_survive;
      }
      if (event.long_term_growth_factor) {
        this.growth_factor = event.long_term_growth_factor;
      }
      if (event.growth_factor) {
        growth_factor = growth_factor * event.growth_factor;
      }
    }

    this.current_count = grow(available_algae, growth_factor);

    return "I have calculated the new count as: " + this.current_count;
  }

  grow(available_algae, growth_factor) {
    return available_algae ^ growth_factor;
  }
}

  //   // return either the next question or null to skip a question
  //   nextQuestion() {
  //     console.log(gameplay)
  //     return gameplay.climate;
  //   }

  //   grow(currentAlgae, ongoingEffects){
  //     return currentAlgae + 10;
  //   }

  // }

  
  // constructor(starting_size, location_name) {
  //   //static imports
  //   // sort out getting data
  //   //constructor variables
  //   this.starting_size = starting_size;
  //   this.location = data.regions[location_name];

  //   //class variables
  //   this.current_count = starting_size;
  //   this.growth_factor = this.location.growth_factor;
  // }

  // // events is a list of events
  // iterate(events) {
  //   let available_algae = this.current_count;
  //   let growth_factor = this.growth_factor;
  //   let resource_availability = this.location.resource_availability;

  //   if (available_algae > this.location.algal_ceiling) {
  //     available_algae = available_algae / 10;
  //   }

  //   for (event in events) {
  //     if (event.algae_survive) {
  //       available_algae = available_algae * event.algae_survive;
  //     }
  //     if (event.long_term_growth_factor) {
  //       this.growth_factor = event.long_term_growth_factor;
  //     }
  //     if (event.growth_factor) {
  //       growth_factor = growth_factor * event.growth_factor;
  //     }
  //   }

  //   this.current_count = grow(available_algae, growth_factor);

  //   return "I have calculated the new count as: " + this.current_count;
  // }

  // grow(available_algae, growth_factor) {
  //   return available_algae ^ growth_factor;
  // }
