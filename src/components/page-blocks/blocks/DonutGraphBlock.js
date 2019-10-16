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
	@media screen and (max-width: 767px) {
		margin-left: 10px;
		margin-right: 10px;
	}
`;
const CenterLabel = styled.h1`
	position: absolute;
	@media screen and (max-width: 767px) {
		font-size: 30px;
	}
`;

class DonutGraph extends React.Component {
	constructor(props) {
		super(props);
		this.width = 1080;
		this.height = 600;
		this.arcs = null
	}
	componentDidMount() {
		this.drawGraph('#donut-graph');
		// window.addEventListener("resize", this.handleResize);
	}
	componentWillUnmount() {
		// window.removeEventListener("resize", this.handleResize);
	}
	// handleResize =() => {
	// 	if(this.arcs) {
	// 		this.arcs.selectAll('tspan').call(this.wrapText, 240)
	// 	}
	// }


	drawGraph = (graphId) => {
		const {src, colorRangeStart, colorRangeEnd} = this.props.data;
		//-- setup
		const width = this.width;
		const height = this.height;
		const radius = 280;

		const arc = d3arc()
			.outerRadius(radius*0.8)
			.innerRadius(radius*0.4);

		const outerArc = d3arc()
			.innerRadius(radius * 0.88)
			.outerRadius(radius * 0.88);

		const pie = d3pie()
			.sort(null)
			.value(function(d) {
				return d.amount
			});

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
		});

		//-- sets colorRange function
		const colorRange = d3scaleLinear()
		.domain(d3extent(loadedData, function(d) {
			return d.amount;
		}))
		.range([colorRangeStart, colorRangeEnd]);

		//-- attach elements, style them
		this.arcs = svg.selectAll('.arc')
			.data(pie(loadedData)).enter()
			.append('g')
			.attr('class','arc');

		this.arcs.append('path')
			.attr('d', arc)
			.attr('stroke', '#fff')
			.attr('stroke-width', '1')
			.style('fill', function(d){
				return colorRange(d.data.amount)
			});

		const centerToLabelDist = radius;
		//-- move text labels to outside
		const text = this.arcs
			.append('text')
				.attr('class', 'labels')
				.attr('dy', '0.3em')
				.attr("transform", function(d) {
					var pos = outerArc.centroid(d);
					pos[0] = centerToLabelDist * (midAngle(d) < Math.PI ? 1 : -1);
					return "translate("+ pos +")";
				})
				.style('text-anchor', function(d){
					return midAngle(d) < Math.PI ? "start":"end";
				})
				.text(function(d) {
					return d.data.label;
				});


			// this.arcs.append('text')
			// 	.attr("transform", function(d) {
			// 		var pos = outerArc.centroid(d);
			// 		pos[0] = centerToLabelDist * (midAngle(d) < Math.PI ? 1 : -1);
			// 		return "translate("+ pos +")";
			// 	})
			// 	.style('text-anchor', function(d){
			// 		return midAngle(d) < Math.PI ? "start":"end";
			// 	})
			// 	.attr('dy','1.6em')
			// 	.text(function(d) {
			// 		return d.data.description;
			// 	})

		text.call(wrapText, 240);
		//-- create a polyline from centroid of arc to label
		this.arcs.append("polyline")
			.attr("points", function(d){
				var pos = outerArc.centroid(d);
				pos[0] = centerToLabelDist * 0.95 * (midAngle(d) < Math.PI ? 1 : -1);
				return [arc.centroid(d), outerArc.centroid(d), pos];
			})
			.attr('stroke-width', '3')
			.attr('stroke-linejoin','round')
			.attr('stroke-linecap','round');

		function midAngle(d){
			return (d.startAngle+d.endAngle)/2
		}
		function wrapText(text, width){
			text.each(function() {
				const text = select(this);
				let words = text.text().split(/\s+/).reverse();
				let word;
				let line = [];
				let lineNumber = 0;
				const lineHeight = 1.3; // em
				const dy = parseFloat(text.attr("dy"));
				const y = text.attr("y") || 0;
				let tspan = text.text(null)
					.append("tspan")
					.attr('y', y);
				while (true) {
					word = words.pop();
					if(!word) {break;}
					line.push(word);
					tspan.text(line.join(" "));
					if (tspan.node().getComputedTextLength() > width) {
						line.pop();
						tspan.text(line.join(" "));
						line = [word];
						tspan = text.append("tspan")
							.attr('x', '0')
							.attr('y', y)
							.attr("dy", ++lineNumber * lineHeight + dy +"em")
							.text(word);
					}
				}
			});
		}
	};

	render() {
		const {nColWidth, centerLabel} = this.props.data;
		const nWidth = nColWidth || 10;
		const offset = Math.floor((12-nWidth)/2);
		return(
			<Row>
		    <Col
		    	xsOffset={0} xs={12}
		      smOffset={0} sm={12}
		      mdOffset={offset} md={nWidth}
		      lgOffset={offset} lg={nWidth}
				>
					<Spacer height={10}/>
					<Container>
						<svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox={`0 0 ${this.width} ${this.height}`} id="donut-graph"></svg>
						<CenterLabel>{centerLabel}</CenterLabel>
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
};


export default DonutGraph;
