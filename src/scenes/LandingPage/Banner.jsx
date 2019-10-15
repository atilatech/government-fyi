import React from 'react';
import QueueAnim from 'rc-queue-anim';
import {Col, Row} from "antd";
import {scrollToElement, slugify, toTitleCase} from "../../services/Utils";
import {ALL_DEMOGRAPHICS} from "../../data/Constants";
import {ELECTION_TOPICS} from "../../data/PartyPlatformData";
import Link from "react-router-dom/Link";

class Banner extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      model: null,
      searchQuery: '',
    }
  };

  render() {

    const topicsData = ELECTION_TOPICS
        .map(topic => ({
          title: topic
        }));
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
              <Col md={6} xs={24} className="px-4">
                <QueueAnim
                    className="text-wrapper responsive-text"
                    key="text"
                    type="bottom"
                >
                  <div className="col-sm-12">
                    <h2> What do the Different parties think about </h2>
                    <ul className="col-sm-12 font-size-xl">
                      {topicsData.map((topic, index) => (
                          <li key={topic.title}><a href={`#bg-${index+1}`}
                                 onClick={()=>{scrollToElement(`#bg-${index+1}`)}}>
                            {topic.title}
                          </a></li>
                      ))}
                    </ul>
                  </div>
                </QueueAnim>
              </Col>
              <Col md={6} xs={24} className="px-4">
                <QueueAnim
                    className="text-wrapper responsive-text"
                    key="text"
                    type="bottom"
                >
                  <div className="col-sm-12">
                    <h2> How Will These Issues Affect Me? </h2>
                    <ul className="col-sm-12 font-size-xl">
                      {ALL_DEMOGRAPHICS.map(demographic => (
                          <li key={demographic}><Link to={`/people/${slugify(demographic)}`}>
                            {toTitleCase(demographic)}
                          </Link></li>
                      ))}
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
