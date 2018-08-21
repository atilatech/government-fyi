import React from 'react'
import {Row, Col} from 'react-flexbox-grid'

const HomePage = () => {
  return(
    <Row style={{backgroundColor: 'white'}}>
      <Col
        xsOffset={1} xs={10}
        smOffset={2} sm={8}
        mdOffset={3} md={6}
        lgOffset={3} lg={6}
      >
        <h1>Prop 52 requires any public infrastructure project over $2B to be voter approved.</h1>
        <h2>Explain this to me, pls.</h2>
        <h3>Button</h3>
        <h3>About</h3>
        <h3>more</h3>
        Prop 12 bans the sale of meat from animals raised in spaces below specified square footages. For example, in order to sell its eggs, a chicken must have at least 1 square foot of space. The goal? By 2022, egg-laying hens will be entirely cage-free.
      </Col>
    </Row>
  )
}

export default HomePage;
