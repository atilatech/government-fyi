import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import { Row, Col } from 'react-flexbox-grid';
import Helmet from 'react-helmet'

const Widget = styled.div`
  margin-bottom: -70px;
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
          <script src='https://demo.kqed.org/dist/widgetsDemo.js' type='text/javascript'></script>
        </Helmet>
        <Widget data-kqed-widget data-widget-type='measureFinance' data-widget-id={widgetId}/>
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
