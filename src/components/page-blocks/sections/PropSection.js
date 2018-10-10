import React from 'react'
import styled from 'styled-components'
import {PropMetaData} from 'pages/prop-attributes'
import PropCardBlock from 'components/page-blocks/blocks/PropCardBlock'
import Color from 'layout/colors'

const ButtonLabel = styled.h2`
  font-size: 16px;
`
const Button = styled.div`
  padding: 5px 10px;
  background-color: ${props=>props.color};
  color: white;
  width: 100px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  margin-left: 20px;
  box-shadow: 2px 3px 2px rgba(0,0,0,0.1);
  border-radius: 2px;
  @media not all and (hover: none) {
    &:hover {
      background-color: ${Color('pink2',-3,-10)};
      box-shadow: 2px 3px 2px rgba(0,0,0,0.2);
    }
  }
`

const ButtonContainer = styled.div`
  display: flex;
  align-items: center;
  padding: 20px;
`
class PropSection extends React.Component {
  constructor(props) {
    super(props)
    this.ordering = {
      spicy: [7,10,12,5,6,11,9,3,8,2,1,4],
      numerical: [1,2,3,4,5,6,7,8,9,10,11,12]
    }
    this.state={ordering: this.ordering.spicy}
  }

  changeOrder = (arr) => {
    this.setState({ordering:arr})
  }

  render() {
    const isNumerical = (this.state.ordering[0] === 1);
    const orderingSelection =
      <ButtonContainer>
        <h3>Order the props by</h3>
        <Button
          color={isNumerical ? "#444": Color('pink2') }
          onClick={() => this.changeOrder(this.ordering.spicy)}>
          <ButtonLabel>Spiciness</ButtonLabel>
        </Button>
        <Button
          color={isNumerical ? Color('pink2'):"#444"}
          onClick={() => this.changeOrder(this.ordering.numerical)}>
          <ButtonLabel>Number</ButtonLabel>
        </Button>
      </ButtonContainer>

    const propsInOrder = this.state.ordering.map( (propNum, i) => {
      const {color, imageSet, title, socialDescription} = PropMetaData(propNum)
      return(
        <PropCardBlock
          key={i}
          data = {{
            propNum: propNum + "",
            header: title,
            color: color,
            description: socialDescription,
            img: imageSet,
            linksTo: `/prop-${propNum}`,
          }}
        />
      );
  	});

    return(
      <React.Fragment>
        {orderingSelection}
        {propsInOrder}
      </React.Fragment>
    );
  }
}
export default PropSection;
