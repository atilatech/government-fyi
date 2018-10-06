import React from 'react'
import {Row, Col} from 'react-flexbox-grid'
import styled from 'styled-components'
import {Spacer} from 'layout/util'

const Attribution = styled.h5`
  font-size: 11px;
  color: #666;
  display: block;
`

const AttributionBlock = (props) => {
  const {text, nColWidth} = props.data;
  const nWidth = nColWidth || 6; // default hack
  const offset = Math.floor((12-nWidth)/2)
  return(
    <Row>
      <Col
        xsOffset={1} xs={10}
        smOffset={2} sm={8}
        mdOffset={offset} md={nWidth}
        lgOffset={offset} lg={nWidth}
      >
        <Spacer height={30}/>
        <Attribution>
          {text}
        </Attribution>
      </Col>
    </Row>
  )
}

export default AttributionBlock;
