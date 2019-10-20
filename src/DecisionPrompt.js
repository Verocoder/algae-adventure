import React from 'react'
import { Button, Container, Divider, Header, Image, Popup } from 'semantic-ui-react'
import ReactPlayer from 'react-player'

export default class DecisionPrompt extends React.Component {

    constructor(props){
        super(props)
        this.state = {
            mediaPlaying: !!this.props.activeQuestion.video
        }
    }

    onMediaEnd(){
        console.log("Media ended");
        this.setState({mediaPlaying: false})
    }

    render(){
        let buttons = []
        for(let i = 0; i < this.props.activeQuestion.options.length; i++){
            let question = this.props.activeQuestion.options[i]
            buttons.push(
            <Popup position='top center' trigger={<Button primary onClick={(e) => this.props.onSelect(e, question, i)}>{question.title}</Button>}>
                <Popup.Header>{question.title}</Popup.Header>
                <Popup.Content>
                {question.description}
                </Popup.Content>
            </Popup>
            )
            if(i < this.props.activeQuestion.options.length - 1){
                buttons.push(<Button.Or />)
            }
        }
        let decision = null
        if(!this.state.mediaPlaying){
            decision = (
                <Container fluid>
                    <Divider />

                    <Container fluid>
                        <Header size="large">{this.props.activeQuestion.title}</Header>
                        {this.props.activeQuestion.description}
                    </Container>

                    <Button.Group size='huge' fluid style={{ padding: '30px 0px' }}>
                    {buttons}
                    </Button.Group>
                </Container>
            )
        }
        let media = null;
        if(this.props.activeQuestion.video){
            media = (
                <ReactPlayer playing={true} loop={false} url={this.props.activeQuestion.video} onEnded={this.onMediaEnd.bind(this)} onError={this.onMediaEnd.bind(this)}></ReactPlayer>
            )
        } else {
            media = (
                <Image centered src={this.props.activeQuestion.image} />
            )
        }

        return (
            <div style={{ marginRight: 150 }}>
                <div style={{ maxWidth: 1000, padding: 20, marginLeft: 'auto', marginRight: 'auto' }}>
                    {media}
                    {decision}
                </div>
            </div>
        )
    }
}