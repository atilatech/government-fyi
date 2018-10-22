import React from 'react'
import PropTypes from 'prop-types'
import { Row, Col } from 'react-flexbox-grid';


const CustomBlock = (props) => {
  const nWidth = props.data.nColWidth || 6;
  const offset = Math.floor((12-nWidth)/2)
  return(
    <Row>
      <Col
        xsOffset={0} xs={12}
        smOffset={2} sm={8}
        mdOffset={offset} md={nWidth}
        lgOffset={offset} lg={nWidth}
      >
        {props.data.body}
      </Col>
    </Row>
  )
}
CustomBlock.propTypes = {
  data: PropTypes.shape({
    body: PropTypes.oneOfType([PropTypes.string, PropTypes.object]).isRequired,
    nColWidth: PropTypes.number,
  })
}

export default CustomBlock;
