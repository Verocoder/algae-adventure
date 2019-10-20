import React from 'react'
import Moment from 'react-moment';
import 'semantic-ui-less/semantic.less'
import {  Sidebar, Statistic, Header } from 'semantic-ui-react'
import ChoiceEffectDisplay from './ChoiceEffectDisplay'
import DecisionPrompt from './DecisionPrompt'
import EnvironmentDecision from './EnvironmentDecision'
import TimeElapsePlaceholder from './TimeElapsePlaceholder'
import AlgaeMinimap from './AlgaeMinimap'
import Engine from './Engine'
import * as gameplay from './gameplay'

export default class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      selectedLocation: null,
      activeQuestion: null,
      weekNumber: 0,
      secondsToWeekAdvance: 0,
      weekAdvancePercentage: 0,
      weekAdvanceIntervalSeconds: 5,
      algaeQuantity: 1,
      videoPlaying: null,
      ongoingMultipliers: [],
      gameEnd: false,
      activeLocation: null
    };

    this.engine = null;
    this.weekAdvanceTimeout = null;
  }

  componentWillUnmount(){
    if(this.weekAdvanceTimeout != null){
      clearTimeout(this.weekAdvanceTimeout);
      this.weekAdvanceTimeout = null;
    }
  }

  tickWeek(){
    this.weekAdvanceTimeout = null;
    this.setState(state => {
      let newState = {
        secondsToWeekAdvance: state.secondsToWeekAdvance - 1,
        weekAdvancePercentage: (state.weekAdvanceIntervalSeconds - (state.secondsToWeekAdvance - 1)) * 100 / state.weekAdvanceIntervalSeconds
      };
      if(newState.secondsToWeekAdvance <= 0){
        this.weekAdvanceTimeout = setTimeout(this.answerQuestion.bind(this, null, null), 1000);
      }else{
        this.weekAdvanceTimeout = setTimeout(this.tickWeek.bind(this), 1000)
      }
      return newState;
    });
  }

  selectLocation(e, locationId){
    this.engine = new Engine(locationId, 28);
    let location = gameplay.locations[locationId];
    this.setState({activeLocation: location})
    this.answerQuestion(null, location)
    
  }

  advance(choice){
    this.weekAdvanceTimeout = null;
    let effects = []
    if(choice && choice.effect){
      effects.push(choice.effect)
    }
    this.setState(state => {
      let newState = {
        choiceEffectDisplay: null,
        algaeQuantity: this.engine.grow(state.algaeQuantity, effects),
        weekNumber: state.weekNumber + 1
      }
      if(newState.weekNumber >= 28){
        newState.gameEnd = true
      }else {
        newState.activeQuestion = this.engine.nextQuestion();
        if(!newState.activeQuestion){
          // Timer
          newState.secondsToWeekAdvance = state.weekAdvanceIntervalSeconds;
          newState.weekAdvancePercentage = 0
          this.weekAdvanceTimeout = setTimeout(this.tickWeek.bind(this), 1000);
        }
      }
      
      return newState;
    })
  }

  answerQuestion(e, choice){
    if(choice && (choice.video || choice.image || choice.effectText)){
      this.nextAdvanceCallback = this.advance.bind(this, choice)
      this.setState({
        choiceEffectDisplay: choice
      });
    }else{
      this.advance(choice)
    }
    
  }


  render() {
    let activeContent;

    if(this.state.choiceEffectDisplay){
      activeContent = <ChoiceEffectDisplay choice={this.state.choiceEffectDisplay} onComplete={this.nextAdvanceCallback} />
    }else if(this.state.gameEnd){
      activeContent = <div>Game End</div>
    } else if(this.state.activeQuestion == null){
      if(this.engine == null){
        activeContent = <EnvironmentDecision onSelect={this.selectLocation.bind(this)}></EnvironmentDecision>
      }else{
        activeContent = <TimeElapsePlaceholder percent={this.state.weekAdvancePercentage} />
      }
    }else {
      activeContent = <DecisionPrompt activeQuestion={this.state.activeQuestion} onSelect={this.answerQuestion.bind(this)}></DecisionPrompt>
    }

    let minimap = null;
    if(this.state.activeLocation != null){
      minimap = <AlgaeMinimap background={this.state.activeLocation.minimap} percent={this.state.algaeQuantity / this.state.activeLocation.algal_ceiling}  />
    }
    

    return (
      <div style={{ width: '100vw', height: '100vh' }}>
        <Sidebar direction='right' visible width='thin'>
          <Header textAlign='center' size='large' style={{ paddingTop: 20 }}>Algae Adventures</Header>
            <Statistic.Group widths='1' style={{ paddingTop: 20 }}>
            <Statistic>
              <Statistic.Label>Algae Volume</Statistic.Label>
              <Statistic.Value>{Math.round(this.state.algaeQuantity).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</Statistic.Value>
              <Statistic.Label>Tonnes</Statistic.Label>
            </Statistic>
          </Statistic.Group>
          <Statistic.Group widths='1' style={{ paddingTop: 20 }}>
            <Statistic>
              <Statistic.Label>Week</Statistic.Label>
              <Statistic.Value>{this.state.weekNumber}</Statistic.Value>
              <Statistic.Label><Moment parse="YYYY-MM-DD" add={{weeks: this.state.weekNumber - 1}} format="MMMM Do">2000-03-01</Moment></Statistic.Label>
            </Statistic>
          </Statistic.Group>
          {minimap}
        </Sidebar>

        {activeContent}
      </div>
    )
  }
}
