import React from 'react'
import { Card, Image } from 'semantic-ui-react'

import * as gameplay from './gameplay'

export default class DecisionPrompt extends React.Component {
    constructor(props){
        super(props)

        this.locations = gameplay.locations
    }

    render(){
        let locationCards = []
        Object.entries(this.locations).forEach(([locationId, location]) => {
            locationCards.push(
                <Card onClick={(e) => this.props.onSelect(e, locationId)}>
                    <Image src={location.image} wrapped ui={false} />
                    <Card.Content>
                    <Card.Header>{location.title}</Card.Header>
                    <Card.Description>{location.description}</Card.Description>
                    </Card.Content>
                </Card>
            )
        });
        return (
            <div style={{ marginRight: 150 }}>
                <div style={{ maxWidth: 850, padding: 20, marginLeft: 'auto', marginRight: 'auto' }}>
                    <Card.Group itemsPerRow="3" centered>
                        {locationCards}
                    </Card.Group>
                </div>
            </div>
        )
    }
}