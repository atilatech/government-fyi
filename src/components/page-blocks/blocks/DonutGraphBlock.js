import React from 'react'
import {Row, Col} from 'react-flexbox-grid'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import {Spacer} from 'layout/util'
import 'components/static/donut-graph-styles.css'
import {select} from "d3-selection";
import {extent as d3extent} from "d3-array";
import {pie as d3pie, arc as d3arc} from 'd3-shape'
import {tsvParse, tsvFormat} from 'd3-dsv'
import {scaleLinear as d3scaleLinear} from 'd3-scale'

const Container = styled.div`
	display:flex;
	align-items: center;
	justify-content:center;
	background-color: whitesmoke;
`
const CenterLabel = styled.h1`
	position: absolute;
`

class DonutGraph extends React.Component {
	componentDidMount() {
		this.drawGraph('#donut-graph');
	}

	drawGraph = (graphId) => {
		const {src, colorRangeStart, colorRangeEnd} = this.props.data;
		//-- setup
		const width = 960;
		const height = 600
		const radius = 300;

		const arc = d3arc()
			.outerRadius(radius*0.85)
			.innerRadius(radius*0.4);

		const outerArc = d3arc()
			.innerRadius(radius * 0.95)
			.outerRadius(radius * 0.95)

		const pie = d3pie()
			.sort(null)
			.value(function(d) {
				return d.amount
			})

		const svg = select(graphId)
			.append("g")
	    .attr("transform", "translate(" + width/2 + "," + height/2 + ")");

		//-- parse data
		const loadedData = tsvParse(tsvFormat(src), function(d) {
			return {
				label: d.l,
				amount: +d.v,
				description: d.d
			};
		})

		//-- sets colorRange function
		const colorRange = d3scaleLinear()
		.domain(d3extent(loadedData, function(d) {
			return d.amount;
		}))
		.range([colorRangeStart, colorRangeEnd]);

		//-- attach elements, style them
		const g = svg.selectAll('.arc')
			.data(pie(loadedData)).enter()
			.append('g')
			.attr('class','arc');

		g.append('path')
			.attr('d', arc)
			.attr('stroke', '#fff')
			.attr('stroke-width', '1')
			.style('fill', function(d){
				return colorRange(d.data.amount)
			})

		//-- move text labels to outside
		g.append('text')
			.attr('class', 'labels')
			.attr('alignment-baseline', 'middle')
			.attr("transform", function(d) {
				var pos = outerArc.centroid(d);
				pos[0] = radius * (midAngle(d) < Math.PI ? 1 : -1);
				return "translate("+ pos +")";
			})
			.text(function(d) {
				return d.data.label;
			})
			.style('text-anchor', function(d){
				return midAngle(d) < Math.PI ? "start":"end";
			})

		//-- create a polyline from centroid of arc to label
		g.append("polyline")
			.attr("points", function(d){
				var pos = outerArc.centroid(d);
				pos[0] = radius * 0.95 * (midAngle(d) < Math.PI ? 1 : -1);
				return [arc.centroid(d), outerArc.centroid(d), pos];
			})

		function midAngle(d){
			return (d.startAngle+d.endAngle)/2
		}
	}

	render() {
		const {nColWidth} = this.props.data;
		const nWidth = nColWidth || 8;
		const offset = Math.floor((12-nWidth)/2)
		return(
			<Row>
		    <Col
		    	xsOffset={0} xs={12}
		      smOffset={2} sm={8}
		      mdOffset={offset} md={nWidth}
		      lgOffset={offset} lg={nWidth}
				>
					<Spacer height={10}/>
					<Container>
						<svg width="100%" height="100%" viewBox="0 0 960 600" id="donut-graph"></svg>
						<CenterLabel>$4M</CenterLabel>
					</Container>
					<Spacer height={30}/>
				</Col>
			</Row>
		)
	}
}

DonutGraph.propTypes = {
	nColWidth: PropTypes.number,
	colorRangeStart: PropTypes.string,
	colorRangeEnd: PropTypes.string
}


export default DonutGraph;
