import React, { useState } from 'react'
import 'semantic-ui-less/semantic.less'
import { Button, Sidebar, Statistic, Container, Divider, Embed, Header } from 'semantic-ui-react'

const OptionsPage = () => {
  const [value, setValue] = useState(0)

  return <div style={{ width: '100vw', height: '100vh' }}>
    <Sidebar direction='right' visible width='thin'>
      <Header textAlign='center' size='large' style={{ paddingTop: 20 }}>Algae Adventures</Header>

      <Statistic.Group widths='1' style={{ paddingTop: 20 }}>
        <Statistic>
          <Statistic.Value>{value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</Statistic.Value>
          <Statistic.Label>km&sup2;</Statistic.Label>
        </Statistic>
      </Statistic.Group>
    </Sidebar>

    <div style={{ marginRight: 150 }}>
      <div style={{ maxWidth: 1000, padding: 20, marginLeft: 'auto', marginRight: 'auto' }}>
        <Embed autoplay aspectRatio='16:9' icon='play' url='http://techslides.com/demos/sample-videos/small.mp4' />
        <Divider />
        <Container fluid>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
      </Container>

        <Button.Group size='huge' fluid style={{ padding: '30px 0px' }}>
          <Button primary>A</Button>
          <Button.Or />
          <Button primary>B</Button>
        </Button.Group>
      </div>
    </div>
  </div>
}

export default () => {
  return <OptionsPage />
}
