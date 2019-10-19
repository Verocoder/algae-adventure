import React from 'react'
import 'semantic-ui-less/semantic.less'
import {  Sidebar, Statistic, Header } from 'semantic-ui-react'
import DecisionPrompt from './DecisionPrompt'
import EnvironmentDecision from './EnvironmentDecision'
import Engine from './Engine'

export default class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      selectedLocation: null,
      activeQuestion: null,
      weekNumber: 0,
      secondsToWeekAdvance: 0,
      weekAdvanceIntervalSeconds: 5,
      algaeQuantity: 1,
      videoPlaying: null,
      ongoingMultipliers: [],
    };

    this.engine = null;
    //this.selectLocation = this.selectLocation.bind(this)
  
  }

  /*componentDidMount(){
    this.advance()
  }*/

  tickWeek(){
    
  }

  selectLocation(e, locationId){
    this.engine = new Engine(locationId);
    this.setState({activeQuestion: this.engine.nextQuestion()});
  }

  answerQuestion(e, choice){
    this.setState(state => ({
      algaeQuantity: this.engine.grow(state.algaeQuantity, [choice.effect]),
      activeQuestion: this.engine.nextQuestion(),
      weekNumber: state.weekNumber + 1
    }))
    
  }
  

  render() {
    let activeQuestion;
    if(this.state.activeQuestion == null){
      if(this.engine == null){
        activeQuestion = <EnvironmentDecision onSelect={this.selectLocation.bind(this)}></EnvironmentDecision>
      }else{
        activeQuestion = <div style={{ marginRight: 260, padding: 20 }}></div>
      }
    }else {
      activeQuestion = <DecisionPrompt activeQuestion={this.state.activeQuestion} onSelect={this.answerQuestion.bind(this)}></DecisionPrompt>
    }
    
    return (
      <div style={{ width: '100vw', height: '100vh' }}>
        <Sidebar direction='right' visible width='thin'>
          <Header textAlign='center' size='large' style={{ paddingTop: 20 }}>Algae Adventures</Header>
=          <Statistic.Group widths='1' style={{ paddingTop: 20 }}>
            <Statistic>
              <Statistic.Label>Algae Volume</Statistic.Label>
              <Statistic.Value>{this.state.algaeQuantity.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</Statistic.Value>
              <Statistic.Label>m&sup3;</Statistic.Label>
            </Statistic>
          </Statistic.Group>
          <Statistic.Group widths='1' style={{ paddingTop: 20 }}>
            <Statistic>
              <Statistic.Label>Week</Statistic.Label>
              <Statistic.Value>{this.state.weekNumber}</Statistic.Value>
            </Statistic>
          </Statistic.Group>
        </Sidebar>

        {activeQuestion}
      </div>
    )
  }
}
