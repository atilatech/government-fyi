import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import {Col, Row} from 'react-flexbox-grid';
import {Spacer} from '../../../layout/util'
import FillRestWithLine from '../../static/TextAndLine'
import {Link} from "react-router-dom";
import {PartyPlatformPropTypes} from "../../../data/PartyPlatformData";
import {getDomainFromUrl, slugify} from "../../../services/Utils";
/*
A block of text
takes a title and body of text

usage in data.js file:
{

	component: TextWithTitleBlock,
	data: {
		title: "",
		text: ""
	},
},

*/

const Title = styled.h2`
	display: inline-block;
	margin: 20px 0 3px 0;
	text-transform: none;
`;


export const PlatformBlock = (props) => {
    const {text, source, sources_details, demographics, question} = props.partyPlatform;

    return(
        <React.Fragment>
            {question && <strong>{question}</strong>}
            <li className="p-0-5">
                {text}
                {source &&
                    <React.Fragment>
                        {' '}<a href={source}
                                target="_blank"
                                rel="noopener noreferrer">
                        (source)
                        </a>
                    </React.Fragment>
                }
                {sources_details &&
                    <React.Fragment>
                        <br/>
                        {sources_details.map( source_detail => (
                            <React.Fragment>
                            {' '}<a href={source_detail.url}
                                target="_blank"
                                rel="noopener noreferrer">
                                {source_detail.title} ({getDomainFromUrl(source_detail.url)})
                                </a>
                            </React.Fragment>
                        ))}
                    </React.Fragment>
                }
            </li>
            {demographics &&
            <React.Fragment>
                <strong>Groups Affected:</strong> {' '}
            {demographics.map(group => (
                    <Link key={group} to={`/people/${slugify(group)}`} className="chip">
                        {group}
                    </Link>
            ))}
            </React.Fragment>
            }
            <br/>
        </React.Fragment>
    );
};

PlatformBlock.propTypes = {
    partyPlatform: PropTypes.shape(PartyPlatformPropTypes),
};

function partyToTitleTransform(party){
    let title = null;

    switch(party) {
        case "Liberal":
        case "Conservative":
            title = `What do the ${party}s think?`;
            break;
        case "NDP":
        case "Bloc Quebecois":
        case "People's":
        case "Green":
            title = `What does the ${party} Party think?`;
            break;
        default:
            break;
    }

    return title;
}
const PartyPlatformBlock = (props) => {
    const {party, partyPlatforms, nColWidth} = props.data;

    const nWidth = nColWidth || 6; // default hack
    const offset = Math.floor((12-nWidth)/2);

    const title = partyToTitleTransform(party);
    return(
        <Row>
            <Col
                xsOffset={1} xs={10}
                smOffset={2} sm={8}
                mdOffset={offset} md={nWidth}
                lgOffset={offset} lg={nWidth}
            >
                <Spacer height={40}/>
                {title &&
                <React.Fragment>
                    <FillRestWithLine >
                        <Title className={slugify(party)}>
                            {title}
                        </Title>
                    </FillRestWithLine>
                </React.Fragment>
                }
                {partyPlatforms.map(partyPlatform => (
                    <PlatformBlock key={JSON.stringify(partyPlatform.text)} partyPlatform={partyPlatform} />
                ))}
            </Col>
        </Row>
    );
};


const PartyPlatformBlockPropTypes = {
    data: PropTypes.shape({
        party: PropTypes.string.isRequired,
        partyPlatforms: PropTypes.arrayOf(PropTypes.shape(PartyPlatformPropTypes)).isRequired,
        nColWidth: PropTypes.number,
    })
};
PartyPlatformBlock.propTypes = PartyPlatformBlockPropTypes;


export default PartyPlatformBlock
