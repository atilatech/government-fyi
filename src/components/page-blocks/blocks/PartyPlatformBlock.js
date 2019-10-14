import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import {Col, Row} from 'react-flexbox-grid';
import {Spacer} from 'layout/util'
import FillRestWithLine from 'components/static/TextAndLine'
import Color from 'layout/colors'
import {Link} from "react-router-dom";
import {PartyPlatformPropTypes} from "../../../data/PartyPlatformData";
import {slugify} from "../../../services/Utils";
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
	color: ${Color('black')};
	margin: 20px 0 3px 0;
	text-transform: none;
`;


export const PlatformBlock = (props) => {
    const {text, source, demographics, question} = props.partyPlatform;

    return(
        <React.Fragment>
            {question && <strong>{question}</strong>}
            <li className="p-0-5">
                {text}
                {source &&
                <a href={source}>(source)</a>
                }
            </li>
            {demographics &&
            <React.Fragment>
                Groups Affected: {' '}
            {demographics.map(group => (
                    <Link to={`/demographic/${slugify(group)}`} className="chip">
                        {group}
                    </Link>
            ))}
            </React.Fragment>
            }
            <br/>
        </React.Fragment>
    );
}

PlatformBlock.propTypes = {
    partyPlatform: PropTypes.shape(PartyPlatformPropTypes),
};

function partyToTileTransform(party){
    let title = null;

    switch(party) {
        case "Liberal":
        case "Conservative":
            title = `What do the ${party}s think?`;
            break;
        case "NDP":
        case "Bloc Quebecois":
        case "People's Party":
        case "Green Party":
            title = `What does the ${party} think?`;
            break;
        default:
            break;
    }

    return title;
};
const PartyPlatformBlock = (props) => {
    const {party, partyPlatforms, nColWidth} = props.data;

    const nWidth = nColWidth || 6; // default hack
    const offset = Math.floor((12-nWidth)/2)

    const title = partyToTileTransform(party);
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
                    <PlatformBlock partyPlatform={partyPlatform} />
                ))}
            </Col>
        </Row>
    );
}


const PartyPlatformBlockPropTypes = {
    data: PropTypes.shape({
        party: PropTypes.string.isRequired,
        partyPlatforms: PropTypes.arrayOf(PropTypes.shape(PartyPlatformPropTypes)).isRequired,
        nColWidth: PropTypes.number,
    })
};
PartyPlatformBlock.propTypes = PartyPlatformBlockPropTypes;


export default PartyPlatformBlock
