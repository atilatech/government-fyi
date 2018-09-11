import React from 'react'
import styled from 'styled-components'
import {Row, Col} from 'react-flexbox-grid'
import UsaMap from './us-paths'
import './map-styles.css'


class Prop7Page extends React.Component{
	componentDidMount() {
		UsaMap.draw("#chart", null, null);
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
					<div id="tooltip"/>
					<svg width="100%" height="100%" viewBox="0 0 960 600" id="chart"></svg>
				</Col>
			</Row>
		)
	}
}
export default Prop7Page
