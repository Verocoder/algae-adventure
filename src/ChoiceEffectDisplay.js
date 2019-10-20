import React from 'react'
import { Container, Header, Image, Progress, Segment } from 'semantic-ui-react'
import ReactPlayer from 'react-player'


export default class ChoiceEffectDisplay extends React.Component {

    constructor(props){
        super(props)

        this.state = {
            advanceTimeoutSeconds: (this.props.choice.effectDisplayTimeout ? this.props.choice.effectDisplayTimeout : 5),
            advancePercent: 0    
        };
        this.state.advanceTimeoutRemaining = this.state.advanceTimeoutSeconds;
        this.advanceTimeoutHandle = null;
    }

    componentDidMount(){
        if(!this.props.choice.video){
            this.advanceTimeoutHandle = setInterval(this.advance.bind(this), 1000)
        }
    }

    componentWillUnmount(){
        if(this.advanceTimeoutHandle){
            clearTimeout(this.advanceTimeoutHandle)
            this.advanceTimeoutHandle = null
        }
    }

    advance(){
        this.setState(state => {
            let newState = {
                advanceTimeoutRemaining: state.advanceTimeoutRemaining - 1,
                advancePercent: (state.advanceTimeoutSeconds - (state.advanceTimeoutRemaining - 1)) * 100 / state.advanceTimeoutSeconds
            }
            if(newState.advanceTimeoutRemaining <= 0){
                clearInterval(this.advanceTimeoutHandle)
                this.advanceTimeoutHandle = null;
                setTimeout(this.props.onComplete, 1000)
            }
            return newState;
        })
    }

    render(){
        let media = null;
        if(this.props.choice.video){
            media = (
                <ReactPlayer playing={true} loop={false} url={this.props.choice.video} onEnded={this.props.onComplete} onError={this.props.onComplete}></ReactPlayer>
            )
        } else if(this.props.choice.image){
            media = (
                <Image centered src={this.props.choice.image} />
            )
        }

        let effectText = null;
        if(this.props.choice.effectText) {
            effectText = (
                <Segment raised>
                    {this.props.choice.effectText}
                </Segment>
            )
        }

        let advanceTimer = null;
        if(!this.props.choice.video){
            advanceTimer = <Progress percent={this.state.advancePercent} size='medium' />
        }

        return (
            <div style={{ marginRight: 260, padding: 20 }}>
                <div style={{ maxWidth: 1000, padding: 20, marginLeft: 'auto', marginRight: 'auto' }}>
                    <Header size="large" centered>{this.props.choice.title}</Header>
                    {media}
                    
                    <Container fluid style={{ marginTop: 20 }}>
                        {effectText}
                        {advanceTimer}
                    </Container>
                </div>
            </div>
        )
    }
}

