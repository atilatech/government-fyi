import React from 'react'
import styled from 'styled-components'
import {Row, Col} from 'react-flexbox-grid'
import {select} from "d3-selection";
import {csvParse} from "d3-dsv"
import {timeParse as d3TimeParse, timeFormat as d3TimeFormat} from "d3-time-format"
import {timeHour, timeMinute} from "d3-time"
import {axisBottom} from 'd3-axis'
import {scaleTime} from 'd3-scale'
import Color from 'layout/colors'
import 'components/static/dst-sun-styles.css'
// import Acronym from 'components/interactive/acronym'
// import {Acronyms} from 'pages/7/expandables'

const Container = styled.div`
  display: flex;
  align-items: center;
  @media screen and (max-width: 767px){
    flex-direction: column;
    background-color: whitesmoke;
  }
`

const SelectorContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-left: 25px;
  width: 250px;
  @media screen and (max-width: 767px){
    width: 100%;
    height: 70px;
    margin-left: 0;
    margin-bottom: 20px;
    margin-top: 20px;
  }
`

const Vert = styled.div`
  display:flex;
  align-items:center;
  justify-content:center;
  width: 100%;
  @media screen and (max-width: 767px){
    width: 80%;
  }
`
const DateSelectInput = styled.input`
  margin-left: 5px;
  margin-right: 5px;
  width: 100%;
  z-index: 3;
`
const DSTLabel = styled.div.attrs({
  style: props => ({
    color: props.sliderIsInDST ? 'white' : 'black',
    backgroundColor: props.sliderIsInDST ? Color('blue2') : 'white',
    left: props.isDSTToggled ? -7 : -1
  })
})`
  font-family: Helvetica Neue, Helvetica, Arial, sans-serif;
  letter-spacing: 0.5px;
  font-size: 12px;
  font-weight:bold;
  text-align: center;
  position: relative;
  color: #000;
  padding: 0 5px;
  border-radius: 4px;
  z-index: 3;
  transition-property: background-color, color, left;
  transition-duration: 150ms;
  transition-timing-function: ease-out;
  transition-delay: 200ms;
  @media screen and (max-width: 767px){
    position: static;
    margin-top: 10px;
  }
`

const DSTMarking = styled.div.attrs({
  style: props => ({
    width: props.lineWidth-2, //-2px for the width of the borders
    left: props.xOffset,
  })
})`
  height: 16px;
  border-radius: 2px;
  position:relative;
  top: -28px;
  transition: all 230ms ease-out;
  transition-delay: 200ms;
  border-radius: 1px;
  border-bottom: 1px solid #666;
  border-right: 1px solid #666;
  border-left: 1px solid #666;
  @media screen and (max-width: 767px) {
    top:-15px;
  }
`
const EndLabel = styled.h5`
  display: block;
  line-height: 12px;
  @media screen and (max-width: 767px) {
  }

`

const SelectorLabel = styled.div.attrs({
  style: props => ({
    left: props.leftOffset + 28
  })
})`
  position:relative;
  bottom: -6px;
  font-family: Helvetica Neue, Helvetica, Arial, sans-serif;
  font-size: 12px;
  font-style: italic;
  align-self: flex-start;

  @media screen and (max-width: 767px) {
    position: static;
    align-self: center;
  }
`

const FormContainer = styled.div`
  display: flex;
  justify-content: center
  align-items: center;
  @media screen and (max-width: 767px) {
    flex-direction: column;
  }
`
const Form = styled.form`
  background-color: whitesmoke;
  padding: 5px 10px;
  border-radius: 2px;
`
const ToggleLabel = styled.label`
  display: inline-block;
  text-transform: none;
  padding-left: 5px;
  font-size: 12px;
`
const ToggleContainer = styled.div`
  max-width: 280px;
`
const Caption = styled.div`
  width: 70%;
  margin: 10px auto 0 auto;
	font-size: 13px;
	line-height: 20px;
	font-style: italic;
	color: #666;
	padding-left: 5px;
  text-align: center;
  @media screen and (max-width: 767px) {
    width: 95%;
  }
`;

class DSTSun extends React.Component{
  constructor(props) {
    super(props);
    this.width = 1000;
    this.height = 150;
    this.loadedData = []
    this.padding= 50;
    this.graphHeight= 60;
    this.graphId = 'sun-viz'
    this.isDSTToggled = false; // duplicated bc state doesn't update quickly enough or I'm stupid or both
    this.isXs = false;
    this.state = {
      risePercentX: 21,
      setPercentX: 80,
      isDSTToggled: false, // and using state to keep it controlled
      sliderValue: 42,
      sliderWidth: 142,
      labelLeft: 10,
    }
  }
	componentDidMount() {
    window.addEventListener("resize",this.handleResize);
    this.initDraw();
    this.handleResize();
    this.draw(this.state.sliderValue); // starting point
	}

  componentWillUnmount() {
    window.removeEventListener("resize",this.handleResize);
  }

  handleResize = () => {
    const w = (window.innerWidth || document.documentElement.clientWidth);
    this.graphHeight = (w < 767) ? 140 : 60;
    this.isXs = (w < 767);
    this.redimensionGraph();
  }
  handleToggleChange = (e) => {
    const stateToSet = e.target.value === "all-year"
    this.setState({isDSTToggled: stateToSet});
    this.isDSTToggled = stateToSet;
    this.draw(parseInt(document.querySelector('#date-select-input').value,10))
  }
  handleSliderChange = (e) => {
    this.setState({sliderValue: e.target.value})
    this.draw(parseInt(e.target.value,10));
  }

  redimensionGraph = () => {
    const graph = select("#"+this.graphId)
    const midY = (this.height+this.graphHeight)/2

    graph.select("rect")
    .attr("y",midY - this.graphHeight)
    .attr("height",this.graphHeight)
    graph.selectAll(".sunline")
    .attr("y1", midY)
    .attr("y2", midY-this.graphHeight)
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
    const midY = (this.height+this.graphHeight)/2
    //-- gradient
    graph.append("rect")
    .attr("fill","url(#day-grad)")
    .attr("x",this.padding)
    .attr("y",midY-this.graphHeight)
    .attr("width",this.width-this.padding*2+1)
    .attr("height",this.graphHeight)

    graph.append("g")
    .attr("transform", "translate("+this.padding+","+midY+")")
    .attr("class", "x-axis")
    .call(xAxis)

    // lines for sunset/sunrise
    graph.append("line")
    .attr("id", "rise-line")
    .attr("class","sunline")
    .attr("y1", midY)
    .attr("y2", midY-this.graphHeight)
    .attr("stroke","white")
    .attr("stroke-width", "2")
    graph.append("line")
    .attr("id", "set-line")
    .attr("class","sunline")
    .attr("y1", midY)
    .attr("y2", midY-this.graphHeight)
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
    const selectorWidth = this.inputSlider.getBoundingClientRect().width;
    this.setState({sliderWidth: selectorWidth}) // width of slider changes when on mobiles
    // change label text and position
    this.setState({
      selectorLabel: (d3TimeFormat("%b %-d")(selectedDate)),
      labelLeft: selectedDateIndex/364 * (selectorWidth-10)+6 //some magic numbers
    })


    //if DST toggled and in winter, add an hour (69th and 306th day are march 11, nov 4)
    let addTime = 0;
    if (this.isDSTToggled) {
      if(selectedDateIndex < 69 || selectedDateIndex > 306){
        addTime = 1;
      }
    }

    //-- change lines on graph
    let sunriseTime = timeParse(this.loadedData[selectedDateIndex].sunrise)
    sunriseTime.setHours(sunriseTime.getHours()+addTime);
    const sunsetTime = timeParse(this.loadedData[selectedDateIndex].sunset)
    sunsetTime.setHours(sunsetTime.getHours()+addTime);
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



	render() {
    const {risePercentX, setPercentX, sliderWidth, isDSTToggled, sliderValue} = this.state;
    const labelLineWidth = isDSTToggled ? sliderWidth : 237/364*(sliderWidth-5);
    const labelLineOffset = isDSTToggled ? -7: -3;
    const isInLabelLine = isDSTToggled ? true : (sliderValue >= 69 && sliderValue < 307);
		return(
			<Row>
        <Col
          xsOffset={0} xs={12}
          smOffset={1} sm={10}
          mdOffset={2} md={8}
          lgOffset={2} lg={8}
        >
          <FormContainer>
            <Form>
              <ToggleContainer>
                <input onChange={this.handleToggleChange} name="dst-sometimes-toggle" id="dst-sometimes-toggle" type="radio" value="regular" checked={!isDSTToggled}/>
                <ToggleLabel htmlFor="dst-sometimes-toggle"><h4>DST as currently observed</h4></ToggleLabel>
              </ToggleContainer>
              <ToggleContainer>
                <input onChange={this.handleToggleChange} name="dst-all-year-toggle" id="dst-all-year-toggle" type="radio" value="all-year" checked={isDSTToggled}/>
                <ToggleLabel htmlFor="dst-all-year-toggle"><h4>DST all year</h4></ToggleLabel>
              </ToggleContainer>
            </Form>
            <SelectorContainer>
              <SelectorLabel leftOffset={this.state.labelLeft}>{this.state.selectorLabel}</SelectorLabel>
              <Vert>
                <EndLabel>January</EndLabel>
                <DateSelectInput
                  type="range" id="date-select-input" name="date-select"
                  innerRef={el=>this.inputSlider=el}
                  min="0" max="364"
                  value={this.state.sliderValue}
                  onChange={this.handleSliderChange}
                />
                <EndLabel>December</EndLabel>
              </Vert>
              <DSTLabel sliderIsInDST={isInLabelLine} isDSTToggled={isDSTToggled}>DST</DSTLabel>
              <DSTMarking lineWidth={labelLineWidth} xOffset={labelLineOffset}/>
            </SelectorContainer>
          </FormContainer>

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
          </Container>
          <Caption>{this.props.data.caption}</Caption>
				</Col>
			</Row>
		)
	}
}
export default DSTSun
