import * as gameplay from './gameplay'

class Engine {

  constructor(location){
    this.location_name = location;
    this.question_list = build_question_list();
    this.question_count = 0;
    this.growth_factor = gameplay.locations[location].growth_factor;
    this.algal_ceiling = gameplay.locations[location].algal_ceiling;
    this.ongoingEffects = [];
  }

   // return the next question relevant to the location
  //  always starting with the climate
  // returns null after final question
    nextQuestion() {
      let question = this.question_list[this.question_count];
      this.question_count += 1;
      return question;
    }

    // return the new algae count based on the previous count and any relevant effects
    // will count new and existing effects, adding new ones to the existing list
    grow(currentAlgae, newEffects){
      let remove_indices = [];
      let iteration_growth_factor = 1;
      let iteration_algae_survive = 1;

      for (effect in newEffects){
        if (effect.duration === -1){
          //special case for climate choice
          this.growth_factor = this.growth_factor * effect.growth_factor;
        } else {
          this.ongoingEffects.push(effect);
        }
      }

      for (var i=0; i<this.ongoingEffects.length; i++){
        effect = this.ongoingEffects[i];
        if (effect.duration === 0){
          remove_indices.push(i);
        } else {
          effect.duration -= 1;
          iteration_growth_factor = iteration_growth_factor * effect.growth_factor;
          iteration_algae_survive = iteration_algae_survive * effect.algae_survive;
        }
      }

      //this seems janky?
      for (index in remove_indices){
         this.ongoingEffects.splice(index);
      }

      return (currentAlgae * iteration_algae_survive) ^ (this.growth_factor * iteration_growth_factor);
    }

    //this function will return random effects 
    // that do not require a question
    // they will be relevant to the location
    get_random_effects(){
      return [];
    }

    build_question_list(){
      let question_list = [];
      question_list.push(data.climate);
      let random_questions = data.choices.filter(() => choice.eligible_areas.includes(this.location_name)).sort(() => Math.random() - 0.5);
      Array.prototype.push.apply(question_list, random_questions);
      return question_list;
    }

}
