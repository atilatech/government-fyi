import React from 'react'
import styled from 'styled-components'
import {PropMetaData} from 'pages/prop-attributes'
import PropCardBlock from 'components/page-blocks/blocks/PropCardBlock'
import Color from 'layout/colors'
import {OrderingContext} from 'ordering-context.js'
import LastMinImg from 'pages/home/images/lastmin.png'
import LastMinImg_w from 'pages/home/images/lastmin.webp'
import LastMinImg_2x from 'pages/home/images/lastmin@2x.png'
import LastMinImg_2x_w from 'pages/home/images/lastmin@2x.webp'

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


  render() {
    const orderingSelection =
    <OrderingContext.Consumer>
      {(context) => (
        <ButtonContainer>
          <h3>Order the props by</h3>
          <Button
            color={context.ordering[0] === 1 ? "#444": Color('pink2') }
            onClick={context.setToSpicy}>
            <ButtonLabel>Spiciness</ButtonLabel>
          </Button>
          <Button
            color={context.ordering[0] === 1 ? Color('pink2'):"#444"}
            onClick={context.setToNumerical}>
            <ButtonLabel>Number</ButtonLabel>
          </Button>
        </ButtonContainer>
      )}
    </OrderingContext.Consumer>




    return(
      <React.Fragment>
        {orderingSelection}
        <OrderingContext.Consumer>
          {(context) => {
            const propsInOrder = context.ordering.map( (propNum, i) => {
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
                <PropCardBlock
                  data={{
                    img: {
                      _1x: LastMinImg,
                      _1x_webp: LastMinImg_w,
                      _2x: LastMinImg_2x,
                      _2x_webp: LastMinImg_2x_w,
                    },
                    propNum: "",
                    header:"Last minute, procrastinator's guide",
                    description:"Are you waiting in line or at a voting booth right now? Here's a five minute guide.",
                    linksTo:"/procrastinators/",
                    color:"gray",
                  }}
                />
                {propsInOrder}
              </React.Fragment>
            )
          }}
        </OrderingContext.Consumer>
      </React.Fragment>
    );
  }
}
export default PropSection;
