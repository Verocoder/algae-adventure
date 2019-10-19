

class Engine {

    constructor(starting_size, location_name ) {
        //static imports
        this.data = require("./data.json");
        //constructor variables
        this.starting_size = starting_size;
        this.location = data.regions[location_name];

        //class variables
        this.current_count = starting_size;
        

    };

    // events is a list of events 
    iterate(events) {
      let available_algae = this.current_count;
      let growth_factor = this.location.growth_factor;
      let resource_availability = this.location.resource_availability;

      //TODO add if for cap

      for (event in events){
        available_algae = available_algae * event.kill_algae;
        growth_factor = growth_factor * event.growth_factor
        resource_availability = resource_availability * event.resource_availability
      }

      this.current_count = grow(growth_factor, resource_availability, available_algae);

      return "I have calculated the new count as: " + this.current_count;
    }

    grow(growth_factor, resource_availability, available_algae){
      return available_algae^(growth_factor*resource_availability);
    }

  }