import React from 'react'
import {PropMetaData} from 'pages/prop-attributes'
import PropCardBlock from 'components/page-blocks/blocks/PropCardBlock'
import {OrderingContext} from 'ordering-context.js'

class PropSection extends React.Component {

  render() {

    return(
      <React.Fragment>
        <OrderingContext.Consumer>
          {(context) => {
            const propsInOrder = context.ordering.map( (pageLink, i) => {

              // TODO: remove propNum once done converting to actual page names
              const propNum = i + 1;
              const {color, imageSet, title, socialDescription, result} = PropMetaData(propNum); 
                const propLink = i <= 1 ? pageLink : `/prop-${pageLink}`;
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
