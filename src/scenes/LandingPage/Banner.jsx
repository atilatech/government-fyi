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
        <div className="Banner container p-5">
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
              <Col md={{span: 9, offset: 3}} xs={24} className="px-4">
                <QueueAnim
                    className="text-wrapper responsive-text"
                    key="text"
                    type="bottom"
                >
                  <div className="col-sm-12">
                    <h2> What do the Different parties think about </h2>
                    <ul className="col-sm-12 font-size-xl">
                      <li><a href="/#prop-1">Housing</a></li>
                      <li><a href="/#prop-1">Jobs and Economy</a></li>
                      <li><a href="/#prop-1">Education</a></li>
                      <li><a href="/#prop-1">Energy and Environment</a></li>
                    </ul>
                  </div>
                </QueueAnim>
              </Col>
            </Row>
          </QueueAnim>
        </div>
    );
  }
}
export default Banner;
