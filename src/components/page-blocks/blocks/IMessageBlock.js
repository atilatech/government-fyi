import React from 'react'
import PropTypes from 'prop-types'
import { Row, Col } from 'react-flexbox-grid';
// import AnnotationsList from 'components/interactive/annotation/AnnotationsList';
import {FromThem, FromMe, Clear, Section} from 'components/static/iMessageStyles'

/*
an iMessage conversation block

example usage for data.js
{
	
	component: IMessageBlock,
	data: {
		messages: [
			{
				from: 'me',
				body: "Man, Prop 72. I'm just gonna watch youtube with this extra time."
			},
			{
				from: 'them',
				body: "Hi Jimmy, I'm Taryn, a volunteer with Gavin Newsom's campaign for governor. Have you decided who you'll be supporting on June 5th?"
			},
			{
				from: 'me',
				body: "For the love of God, stop texting me"
			},
			{
				from: 'them',
				body: "Great question, Jimmy! You can learn more at gavinnewsom.com."
			},
		]
	},
},
*/

const IMessageBlock = (props) => {
	const {messages} = props.data;
	// const { showAnnos, pageId, loggedInUserId, authorUserId, sectionId } = props.annoData;
	let lastSender = null;
	const conversation = messages.map( (message, i) => {
		let conditionalClear = null;
		let msg = null;
		if (lastSender !== message.from) {
			conditionalClear = <Clear/>
		}
		lastSender = message.from;

		switch(message.from) {
			case "them":
				msg = <FromThem>{message.body}</FromThem>
				break;
			case "me":
				msg = <FromMe>{message.body}</FromMe>
				break;
			case "me-no-bg":
				msg = <FromMe style={{background:'none'}}>{message.body}</FromMe>
				break;
			default:
				break;
		}
		return (
			<React.Fragment key={i}>
				{conditionalClear}
				{msg}
			</React.Fragment>
		)
	})
	return(
		<Row>
	    <Col
	    	xsOffset={1} xs={10}
	      smOffset={2} sm={8}
	      mdOffset={3} md={6}
	      lgOffset={3} lg={6}
	    >
				<Section>
					{conversation}
				</Section>
			</Col>
		</Row>
	);
}

IMessageBlock.propTypes = {
  data: PropTypes.shape({
    messages: PropTypes.arrayOf(
			PropTypes.shape({
	      from: PropTypes.string.isRequired,
				body: PropTypes.oneOfType([PropTypes.string, PropTypes.object]).isRequired,
	    })
		)
  }).isRequired
}

export default IMessageBlock
