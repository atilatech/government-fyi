import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { Row, Col } from 'react-flexbox-grid';
import {Spacer} from 'layout/util'
import FillRestWithLine from 'pages/june-5/components/text-and-line'
// import AnnotationsList from 'components/interactive/annotation/AnnotationsList';

/*
A block of text
takes a title and body of text

usage in data.js file:
{
	id: "000",
	component: TextWithTitleBlock,
	data: {
		title: "",
		text: ""
	},
},

*/

const Title = styled.h2`
	display: inline-block;
	color: #333;
	margin: 10px 0;
`;

const Text = styled.div`
	margin-top: 10px;
`;

const TextWithTitleBlock = (props) => {
	const {title, text, nColWidth} = props.data;
	const nWidth = nColWidth || 6; // default hack
	const offset = Math.floor((12-nWidth)/2)
	// const { showAnnos, pageId, loggedInUserId, authorUserId, sectionId } =
	// 	props.annoData ? props.annoData :
	// 	{showAnnos: false, pageId: null, loggedInUserId: null, authorUserId: null, sectionId: null};
	// mdOffset={showAnnos?1:3} md={showAnnos?5:6}
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
					<FillRestWithLine >
						<Title>{title}</Title>
					</FillRestWithLine>
				}
				<Text>{text}</Text>
			</Col>
		</Row>
	);
}
// {showAnnos &&
// 	<Col
// 		xsOffset={1} xs={10}
// 		smOffset={2} sm={8}
// 		mdOffset={1} md={4}
// 		lgOffset={1} lg={4}
// 	>
// 		<Spacer height={30}/>
// 		<AnnotationsList
// 			pageId={pageId}
// 			loggedInUserId={loggedInUserId}
// 			authorUserId={authorUserId}
// 			sectionId={sectionId}
// 		/>
// 	</Col>
// 	}

TextWithTitleBlock.propTypes = {
	data: PropTypes.shape({
		title: PropTypes.string,
		text: PropTypes.oneOfType([PropTypes.string, PropTypes.object]).isRequired,
		nColWidth: PropTypes.number,
	})
}


export default TextWithTitleBlock
