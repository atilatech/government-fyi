import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import { Row, Col } from 'react-flexbox-grid';
import Helmet from 'react-helmet'


const Attrib = styled.h3`
  display: block;
  font-size: 10px;
  color: #666;
  margin-bottom: 20px
  padding-left: 10px;
  padding-right: 10px;
  text-align: center;
`

const KQEDBlock = (props) => {
  const {nColWidth, widgetId} = props.data;
  const nWidth = nColWidth || 8;
  const offset = Math.floor((12-nWidth)/2)
  return(
    <Row>
      <Col
        xsOffset={0} xs={12}
        smOffset={2} sm={8}
        mdOffset={offset} md={nWidth}
        lgOffset={offset} lg={nWidth}
      >
        <Helmet>
          <script src='https://www.kqed.org/dist/widgets.js' type='text/javascript'></script>
        </Helmet>
        <div data-kqed-widget data-widget-type='measureFinance' data-widget-id={widgetId}/>
        <Attrib>Campaign finance graphic brought to you by <a href="https://www.kqed.org/elections/props" target="_blank" rel="noreferrer noopener">KQED</a> and Voter's Edge.</Attrib>
      </Col>
    </Row>
  )
}
KQEDBlock.propTypes = {
  data: PropTypes.shape({
    widgetId: PropTypes.string,
    nColWidth: PropTypes.number,
  })
}

export default KQEDBlock;
