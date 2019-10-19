import React, { useState } from 'react'
import 'semantic-ui-less/semantic.less'
import { Button, Sidebar, Statistic, Container, Divider, Embed, Popup, Header } from 'semantic-ui-react'
import Engine from './Engine'

export default class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      selectedLocation: null,
      activeQuestion: null,
      weekNumber: 0,
      nextWeekAdvance: 0,
      algaeQuantity: 1,
      videoPlaying: null,
      ongoingMultipliers: [],
    };

    this.engine = new Engine();
  
  }

componentDidMount(){
  this.advance()
}

  advance(){
    console.log(this.engine.nextQuestion());
    this.setState({activeQuestion: this.engine.nextQuestion()});
    console.log(this.state)
  }

  

  render() {
    let activeQuestion;
    if(this.state.activeQuestion == null){
      activeQuestion = <div style={{ marginRight: 260, padding: 20 }}></div>
    }else {
      
      let buttons = []
      for(let i = 0; i < this.state.activeQuestion.options.length; i++){
        let question = this.state.activeQuestion.options[i]
        buttons.push(
          <Popup trigger={<Button primary>{question.title}</Button>}>
            <Popup.Header>{question.title}</Popup.Header>
            <Popup.Content>
              {question.description}
            </Popup.Content>
          </Popup>
        )
        if(i < this.state.activeQuestion.options.length - 1){
          buttons.push(<Button.Or />)
        }
      }
      activeQuestion = (
        <div style={{ marginRight: 150 }}>
          <div style={{ maxWidth: 1000, padding: 20, marginLeft: 'auto', marginRight: 'auto' }}>
            <Embed autoplay aspectRatio='16:9' icon='play' url='http://techslides.com/demos/sample-videos/small.mp4' />

            <Divider />

            <Container fluid>
              {this.state.activeQuestion.description}
            </Container>

            <Button.Group size='huge' fluid style={{ padding: '30px 0px' }}>
              {buttons}
            </Button.Group>
          </div>
        </div>
      )
    }
    return (
      <div style={{ width: '100vw', height: '100vh' }}>
        <Sidebar direction='right' visible width='thin'>
          <Header textAlign='center' size='large' style={{ paddingTop: 20 }}>Algae Adventures</Header>
          <Statistic.Group widths='1' style={{ paddingTop: 20 }}>
            <Statistic>
              <Statistic.Value>{this.state.algaeQuantity.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</Statistic.Value>
              <Statistic.Label>m&sup2;</Statistic.Label>
            </Statistic>
          </Statistic.Group>
        </Sidebar>

        {activeQuestion}
      </div>
    )
  }
}
