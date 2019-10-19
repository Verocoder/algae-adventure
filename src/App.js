import React, { useState } from 'react'
import 'semantic-ui-css/semantic.min.css'
import { Button, Sidebar, Statistic, Container, Divider } from 'semantic-ui-react'

export default () => {
  const [value, setValue] = useState(1234)

  return <div style={{ width: '100vw', height: '100vh' }}>
    <Sidebar direction='right' visible >
      <Statistic.Group widths='1' style={{ paddingTop: 20 }}>
        <Statistic>
          <Statistic.Value>{value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</Statistic.Value>
          <Statistic.Label>km2</Statistic.Label>
        </Statistic>
      </Statistic.Group>
    </Sidebar>

    <div style={{ marginRight: 260, padding: 20 }}>
      <video controls style={{ width: '100%' }}>
        <source src='http://techslides.com/demos/sample-videos/small.mp4' type='video/mp4' />
      </video>

      <Divider />

      <Container>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
      </Container>

      <Button.Group size='huge' fluid style={{ padding: '30px 0px' }}>
        <Button>A</Button>
        <Button.Or />
        <Button>B</Button>
      </Button.Group>
    </div>
  </div>
}
