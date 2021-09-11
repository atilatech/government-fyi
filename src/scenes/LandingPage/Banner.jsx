import React from 'react';
import QueueAnim from 'rc-queue-anim';
import { Col, Row } from "antd";
import { scrollToElement, slugify, toTitleCase } from "../../services/Utils";
import { ALL_DEMOGRAPHICS, ELECTION_TOPICS, ELECTION_YEAR, PROP_NUM_TO_CATEGORY_DICT } from "../../data/Constants";
import Link from "react-router-dom/Link";

class Banner extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      model: null,
      searchQuery: '',
      demographicsToShow: 5,
    }
  };

  render() {

    const topicsData = ELECTION_TOPICS
      .map(topic => ({
        title: topic
      }));
    return (
      <div className="Banner container">
        <QueueAnim type="alpha" delay={150}>
          <Row>
            <Col md={18} xs={24}>
              <QueueAnim
                className="text-wrapper responsive-text banner-title-wrapper"
                key="text"
                type="bottom"
              >
                <h1 key="h1" className="mt-sm-5">
                  A NONPARTISAN GUIDE TO CANADA'S {ELECTION_YEAR} ELECTIONS {' '}

                  <span role="img" aria-label="Canada emoji">
                    🇨🇦
              </span>
                </h1>
                <h2 key="h2">
                  The simplest guide to the upcoming Canadian Federal elections.{' '}
                  <span role="img" aria-label="maple leaf emoji">
                    🍁
              </span>
                </h2>
              </QueueAnim>
            </Col>
          </Row>
          <Row className="my-5">
            <Col md={12} xs={24} className="px-4">
              <QueueAnim
                className="text-wrapper responsive-text"
                key="text"
                type="bottom"
              >
                <div>
                  <h2> Topics </h2>
                  <ul className="font-size-xl">
                    {topicsData.map((topic, index) => (
                      <li key={topic.title}><a href={`#${PROP_NUM_TO_CATEGORY_DICT[index + 1]}`}
                        onClick={() => {
                          scrollToElement(`#${PROP_NUM_TO_CATEGORY_DICT[index + 1]}`)
                        }}>
                        {topic.title}
                      </a></li>
                    ))}
                  </ul>
                </div>
              </QueueAnim>
            </Col>
            <Col md={12} xs={24} className="px-4">
              <QueueAnim
                className="text-wrapper responsive-text"
                key="text"
                type="bottom"
              >
                <Link to="/people">
                  <h2 className="text-link">
                    How Will These Issues Affect You?
                    </h2>
                </Link>
                <div style={{ maxHeight: '300px', overflowY: 'scroll', width: '275px' }}>
                  <ul className="font-size-xl">
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
