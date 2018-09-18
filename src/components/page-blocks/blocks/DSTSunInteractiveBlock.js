import React from 'react'
import styled from 'styled-components'
import {Row, Col} from 'react-flexbox-grid'
import {select} from "d3-selection";
import {csvParse} from "d3-dsv"
import {timeParse as d3TimeParse, timeFormat as d3TimeFormat} from "d3-time-format"
import {timeHour, timeMinute} from "d3-time"
import {axisBottom} from 'd3-axis'
import {scaleTime} from 'd3-scale'
import 'components/static/dst-sun-styles.css'

const Container = styled.div`
  display: flex;
  @media screen and (max-width: 767px){
    flex-direction: column;
    background-color: whitesmoke;
  }
`
const SelectorContainer = styled.div`
  position: relative;
  display: flex;
  width: 160px;
  @media screen and (max-width: 767px){
    justify-content: center;
    width: 100%;
    height: 50px;
  }
`
const DateSelectInput = styled.input`
  position: absolute;
  width: 100%;
  top: 40%;
  right: 50%;
  transform: rotate(90deg);
  @media screen and (max-width: 767px){
    width: 200px;
    top: 0;
    right: unset;
    transform: none;
  }
`

const SelectorLabel = styled.div`
  font-family: Helvetica Neue, Helvetica, Arial, sans-serif;
  font-size: 12px;
  font-style: italic;
  position: relative;
  top: ${props => props.top}px;
  left: 10px;
  @medai screen and (max-width: 767px) {
    position: block;
  }
`

class DSTSun extends React.Component{
  constructor(props) {
    super(props);
    this.width = 1000;
    this.height = 250;
    this.loadedData = []
    this.padding= 50;
    this.barHeight= 60;
    this.graphId = 'sun-viz'
    this.state = {
      risePercentX: 21,
      setPercentX: 80
    }
  }
	componentDidMount() {
    window.addEventListener("resize",this.handleResize);
    this.initDraw();
    this.handleResize();
    this.draw(42); // starting point

	}

  componentWillUnmount() {
    window.removeEventListener("resize",this.handleResize);
  }

  handleResize = () => {
    const w = (window.innerWidth || document.documentElement.clientWidth);
    this.barHeight = (w < 767) ? 140 : 60;
    this.reDimension();
  }

  reDimension = () => {
    const graph = select("#"+this.graphId)
    const midY = (this.height+this.barHeight)/2

    graph.select("rect")
      .attr("y",midY - this.barHeight)
      .attr("height",this.barHeight)
    graph.selectAll(".sunline")
      .attr("y1", midY)
      .attr("y2", midY-this.barHeight)
    graph.select("g")
      .attr("transform", "translate("+this.padding+","+midY+")")

  }

  initDraw = () => {
    //-- load data
    this.loadedData = csvParse(this.props.data.src, function(d) {
      return {
        date: d.date,
        sunrise: d.rise,
        sunset: d.set
      };
    })
    //-- x axis
    this.xScale = scaleTime()
      .domain([(new Date(1900,0,1)), (new Date(1900,0,2))])
      .range([0, this.width-this.padding*2]);

    const xAxis = axisBottom(this.xScale)
      .tickSize(10)
      .ticks(timeHour.every(6))
      .tickFormat(d3TimeFormat("%-I %p"))//12 hour clock

    const graph = select("#"+this.graphId)
    const midY = (this.height+this.barHeight)/2
    //-- gradient
    graph.append("rect")
      .attr("fill","url(#day-grad)")
      .attr("x",this.padding)
      .attr("y",midY-this.barHeight)
      .attr("width",this.width-this.padding*2+1)
      .attr("height",this.barHeight)

    graph.append("g")
      .attr("transform", "translate("+this.padding+","+midY+")")
      .attr("class", "x-axis")
      .call(xAxis)

    // lines for sunset/sunrise
    graph.append("line")
      .attr("id", "rise-line")
      .attr("class","sunline")
      .attr("y1", midY)
      .attr("y2", midY-this.barHeight)
      .attr("stroke","white")
      .attr("stroke-width", "2")
    graph.append("line")
      .attr("id", "set-line")
      .attr("class","sunline")
      .attr("y1", midY)
      .attr("y2", midY-this.barHeight)
      .attr("stroke","white")
      .attr("stroke-width", "2")

    //-- labels for sunrise/sunset
    graph.append("text")
      .attr("id","rise-label")
      .attr("text-anchor","end")
      .attr("class", "time-label")
    graph.append("text")
      .attr("id","set-label")
      .attr("text-anchor","start")
      .attr("class", "time-label")
  }
  //-------------------------------------
  //-- redraw graph
  draw = (selectedDateIndex) => {
    //-- d3 formaters and parsers
    const timeParse = d3TimeParse("%-H:%M");
    const timeFormat = d3TimeFormat("%-I:%M %p");

    //-- change label on input
    const selectedDate = d3TimeParse("%Y-%m-%d")(this.loadedData[selectedDateIndex].date);
    const selectorHeight = this.inputSlider.getBoundingClientRect().height;

    // change label text and position
    this.setState({
      selectorLabel: (d3TimeFormat("%b %-d, 2018")(selectedDate)),
      labelTop: selectedDateIndex/365 * (selectorHeight-14) + 20
    })


    //-- change lines on graph
    const sunriseTime = timeParse(this.loadedData[selectedDateIndex].sunrise)
    const sunsetTime = timeParse(this.loadedData[selectedDateIndex].sunset)
    const sunriseTimeX = this.xScale(sunriseTime)+this.padding;
    const sunsetTimeX = this.xScale(sunsetTime)+ this.padding;

    //-- adjust where the gradient is by calculating where it is on percentage of day
    this.setState({
      risePercentX: timeMinute.count((new Date(1900,0,1)), sunriseTime)/14.40,
      setPercentX: timeMinute.count((new Date(1900,0,1)), sunsetTime)/14.40
    });
    // sunrise
    select("#rise-line")
      .attr("x1", sunriseTimeX)
      .attr("x2", sunriseTimeX)
    select("#rise-label")
      .attr("transform","translate("+(sunriseTimeX-20)+","+(this.height/2+7)+")")
      .text(timeFormat(sunriseTime))
    //sunset
    select("#set-line")
      .attr("x1", sunsetTimeX)
      .attr("x2", sunsetTimeX)
    select("#set-label")
      .attr("transform","translate("+(sunsetTimeX+20)+","+(this.height/2+7)+")")
      .text(timeFormat(sunsetTime))
  }

  handleSliderChange = (e) => {
    this.draw(parseInt(e.target.value,10));
  }

	render() {
    const {risePercentX, setPercentX} = this.state;
		return(
			<Row>
				<Col
					xsOffset={0} xs={12}
					smOffset={1} sm={10}
					mdOffset={2} md={9}
					lgOffset={2} lg={9}
    >
          <Container>
            <svg width="100%" height="100%" viewBox={`0 0 ${this.width} ${this.height}`} id={this.graphId}>
              <defs>
                <linearGradient x1="0%" y1="50%" x2="100%" y2="50%" id="day-grad">
                  <stop stopColor="#380072" offset="0%"></stop>
                  <stop stopColor="#380072" offset={`${risePercentX-3}%`}></stop>
                  <stop stopColor="#E94E64" offset={`${risePercentX}%`}></stop>
                  <stop stopColor="#FFD17D" offset={`${risePercentX+5}%`}></stop>
                  <stop stopColor="#FFD17D" offset={`${setPercentX-5}%`}></stop>
                  <stop stopColor="#E94E64" offset={`${setPercentX}%`}></stop>
                  <stop stopColor="#380072" offset={`${setPercentX+3}%`}></stop>
                  <stop stopColor="#380072" offset="100%"></stop>
                </linearGradient>
              </defs>
            </svg>
            <SelectorContainer>
              <DateSelectInput
                type="range" id="date-select-input" name="date-select"
                innerRef={el=>this.inputSlider=el}
                min="0" max="364"
                onChange={this.handleSliderChange}
              />
              <SelectorLabel top={this.state.labelTop}>{this.state.selectorLabel}</SelectorLabel>
            </SelectorContainer>
          </Container>
				</Col>
			</Row>
		)
	}
}
export default DSTSun
