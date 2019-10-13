import React from 'react'
import styled from 'styled-components'
import {PropMetaData} from 'pages/prop-attributes'
import PropCardBlock from 'components/page-blocks/blocks/PropCardBlock'
import {OrderingContext} from 'ordering-context.js'

// todo: use a less HACKY way for propLink in linksTo

class PropSection extends React.Component {

  render() {

    return(
      <React.Fragment>
        <OrderingContext.Consumer>
          {(context) => {
            const propsInOrder = context.ordering.map( (propNum, i) => {
              const {color, imageSet, title, socialDescription, result} = PropMetaData(propNum);
                const propLink = propNum === 1 ? '/housing' : `/prop-${propNum}`;
                return(
                <PropCardBlock
                  key={i}
                  data = {{
                    propNum: propNum + "",
                    header: title,
                    color: color,
                    description: socialDescription,
                    img: imageSet,
                    result: result,
                    linksTo: propLink,
                  }}
                />
              );
            });
            return(
              <React.Fragment>
                {/* <PropCardBlock
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
                /> */}
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
