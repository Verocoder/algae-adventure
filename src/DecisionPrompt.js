import React from 'react'
import { Button, Container, Segment, Header, Image, Popup } from 'semantic-ui-react'
import ReactPlayer from 'react-player'

export default class DecisionPrompt extends React.Component {

    constructor(props){
        super(props)
        this.state = {
            mediaPlaying: !!this.props.activeQuestion.video
        }
    }

    onMediaEnd(){
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
            let description = null;
            if(this.props.activeQuestion.description){
                description = (
                    <Container fluid>
                        <Segment raised>
                            {this.props.activeQuestion.description}
                        </Segment>
                    </Container>
                )
            }
            decision = (
                <Container fluid>
                    {description}

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
                <div style={{ maxWidth: 850, padding: 20, marginLeft: 'auto', marginRight: 'auto' }}>
                    <Header size="large">{this.props.activeQuestion.title}</Header>
                    {media}
                    {decision}
                </div>
            </div>
        )
    }
}