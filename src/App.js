import React from 'react'
import 'semantic-ui-less/semantic.less'
import {  Sidebar, Statistic, Header, Progress } from 'semantic-ui-react'
import DecisionPrompt from './DecisionPrompt'
import EnvironmentDecision from './EnvironmentDecision'
import TimeElapsePlaceholder from './TimeElapsePlaceholder'
import Engine from './Engine'

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
    this.setState({activeQuestion: this.engine.nextQuestion()});
  }

  answerQuestion(e, choice){
    this.weekAdvanceTimeout = null;
    let effects = []
    if(choice){
      effects.push(choice.effect)
    }
    this.setState(state => {
      let newState = {
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
  

  render() {
    let activeContent;

    if(this.state.gameEnd){
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
    

    return (
      <div style={{ width: '100vw', height: '100vh' }}>
        <Sidebar direction='right' visible width='thin'>
          <Header textAlign='center' size='large' style={{ paddingTop: 20 }}>Algae Adventures</Header>
            <Statistic.Group widths='1' style={{ paddingTop: 20 }}>
            <Statistic>
              <Statistic.Label>Algae Volume</Statistic.Label>
              <Statistic.Value>{this.state.algaeQuantity.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</Statistic.Value>
              <Statistic.Label>Tonnes</Statistic.Label>
            </Statistic>
          </Statistic.Group>
          <Statistic.Group widths='1' style={{ paddingTop: 20 }}>
            <Statistic>
              <Statistic.Label>Week</Statistic.Label>
              <Statistic.Value>{this.state.weekNumber}</Statistic.Value>
            </Statistic>
          </Statistic.Group>
        </Sidebar>

        {activeContent}
      </div>
    )
  }
}
