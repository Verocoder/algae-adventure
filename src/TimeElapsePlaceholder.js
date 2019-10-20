import React from 'react'
import { Container, Header, Image, Progress, Segment } from 'semantic-ui-react'

export default class TimeElapsePlaceholder extends React.Component {
    

    render(){
        return (
            <div style={{ marginRight: 260, padding: 20 }}>
                <div style={{ maxWidth: 1000, padding: 20, marginLeft: 'auto', marginRight: 'auto' }}>
                    <Header size="large" centered>Growing...</Header>
                    <Image centered src="https://cff2.earth.com/uploads/2019/07/26121452/Algae-may-have-joined-with-fungi-to-give-rise-to-the-first-terrestrial-plants-730x410.jpg" />
                    <Container fluid>
                        <Segment raised style={{ marginTop: 20 }}>
                            Nothing exciting happens this week, your algae focusses on growing as much as it can.
                        </Segment>
                        <Progress percent={this.props.percent} size='medium' />
                    </Container>
                    
                </div>
            </div>
        )
    }
}

