import * as gameplay from './gameplay'

export default class Engine {

    

    // return either the next question or null to skip a question
    nextQuestion() {
      console.log(gameplay)
      return gameplay.climate;
    }

    grow(currentAlgae, ongoingEffects){
      return currentAlgae + 10;
    }

  }

  