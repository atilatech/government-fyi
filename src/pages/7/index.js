import React from 'react'
import styled from 'styled-components'
import UsaMap from './us-paths'
import './map-styles.css'

const MapContainer = styled.div`
	margin: 20px auto;
	width: 800px;
`

class Prop7Page extends React.Component{
	componentDidMount() {
		function tooltipHtml(n, d){	/* function to create html content string in tooltip div. */
		return "<div><h4>"+n+"</h4><div>"+d.info+"</div></div>";
		}



		var sampleData ={};	/* Sample random data. */
		["HI", "AK", "FL", "SC", "GA", "AL", "NC", "TN", "RI", "CT", "MA",
		"ME", "NH", "VT", "NY", "NJ", "PA", "DE", "MD", "WV", "KY", "OH",
		"MI", "WY", "MT", "ID", "WA", "DC", "TX", "CA", "AZ", "NV", "UT",
		"CO", "NM", "OR", "ND", "SD", "NE", "IA", "MS", "IN", "IL", "MN",
		"WI", "MO", "AR", "OK", "KS", "LA", "VA"]
			.forEach(function(d){
				let info=Math.round(100*Math.random());
				sampleData[d]={ info: info};
			});
		UsaMap.draw("#chart", sampleData, tooltipHtml);
	}
	render() {
		return(
			<MapContainer>
				<div id="tooltip"/>
				<svg width="100%" height="100%" viewBox="0 0 960 600" id="chart"></svg>
			</MapContainer>
		)
	}
}
export default Prop7Page
