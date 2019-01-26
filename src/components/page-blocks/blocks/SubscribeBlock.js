import React from 'react'
import { Row, Col } from 'react-flexbox-grid';
import SubscribeForm from 'components/interactive/forms/subscribe-form'
import {FormContainer, Title} from 'components/interactive/forms/form-styles'
import {Spacer} from 'layout/util'

const SubscribeBlock = (props) => {
  const {title} = props.data;
  return(
    <Row>
      <Col
        xsOffset={1} xs={10}
        smOffset={3} sm={6}
        mdOffset={3} md={6}
        lgOffset={3} lg={6}
      >
        <Spacer height={30}/>
        {title && <Title>{title}</Title>}
        <FormContainer>
          <SubscribeForm/>
        </FormContainer>
      </Col>
    </Row>
  );
}

export default SubscribeBlock;
