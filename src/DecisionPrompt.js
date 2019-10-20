import React from 'react'
import { Button, Container, Divider, Embed, Header, Popup } from 'semantic-ui-react'

export default class DecisionPrompt extends React.Component {

    render(){
        let buttons = []
        for(let i = 0; i < this.props.activeQuestion.options.length; i++){
            let question = this.props.activeQuestion.options[i]
            buttons.push(
            <Popup trigger={<Button primary onClick={(e) => this.props.onSelect(e, question, i)}>{question.title}</Button>}>
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
        return (
            <div style={{ marginRight: 150 }}>
                <div style={{ maxWidth: 1000, padding: 20, marginLeft: 'auto', marginRight: 'auto' }}>
                    <Embed autoplay aspectRatio='16:9' icon='play' url='http://techslides.com/demos/sample-videos/small.mp4' />

                    <Divider />

                    <Container fluid>
                        <Header size="large">{this.props.activeQuestion.title}</Header>
                        {this.props.activeQuestion.description}
                    </Container>

                    <Button.Group size='huge' fluid style={{ padding: '30px 0px' }}>
                    {buttons}
                    </Button.Group>
                </div>
            </div>
        )
    }
}