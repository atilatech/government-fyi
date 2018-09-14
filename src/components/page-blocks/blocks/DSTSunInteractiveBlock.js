import React from 'react'
// import styled from 'styled-components'
import {Row, Col} from 'react-flexbox-grid'
import {select} from "d3-selection";
import 'components/static/dst-sun-styles.css'

// code adapted from this example gist: https://gist.github.com/NPashaP/a74faf20b492ad377312

class DSTSun extends React.Component{
  constructor(props) {
    super(props);
    this.width = 900;
    this.height = 400;
  }
	componentDidMount() {
    const {src} = this.props.data;
    this.draw("#sun-viz", src);
	}

  draw = (graphId, src) => {
  }

	render() {
		return(
			<Row>
				<Col
					xsOffset={0} xs={12}
					smOffset={1} sm={10}
					mdOffset={2} md={8}
					lgOffset={2} lg={8}
    >
					<svg width="100%" height="100%" viewBox={`0 0 ${this.width} ${this.height}`} id="sun-viz"></svg>
				</Col>
			</Row>
		)
	}
}
export default DSTSun
