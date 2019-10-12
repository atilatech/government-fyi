import React from 'react';
import QueueAnim from 'rc-queue-anim';
import {Link} from "react-router-dom";
import {Col, Row} from "antd";

class Banner extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      model: null,
      searchQuery: '',
    }
  };

  render() {

    return (
        <React.Fragment>
          <QueueAnim type="alpha" delay={150}>
            <Row>
              <Col md={12} xs={24}>
                <QueueAnim
                    className="text-wrapper responsive-text"
                    key="text"
                    type="bottom"
                >
                  <h1 key="h1" className="mt-sm-5">
                    A NONPARTISAN GUIDE TO CANADA'S 2019 ELECTIONS
                  </h1>
                  <h2 key="h2">
                    Politics is complicated {' '}
                    <span role="img" aria-label="sad emoji">
                😕
              </span>
                    <br />
                    We  make it easy to understand {' '}
                    <span role="img" aria-label="happy emoji">
                😃
              </span>
                  </h2>
                </QueueAnim>
              </Col>
              <Col md={12} xs={24}>
                <QueueAnim
                    className="text-wrapper responsive-text"
                    key="text"
                    type="bottom"
                >
                  <div className="col-sm-12 font-size-xl">
                    <h4>Learn More About </h4>
                    <ul>
                      <li>Housing</li>
                      <li>Jobs and Economy</li>
                      <li>Education</li>
                      <li>Energy and Environment</li>
                    </ul>
                  </div>
                </QueueAnim>
              </Col>
            </Row>
          </QueueAnim>
        </React.Fragment>
    );
  }
}
export default Banner;
