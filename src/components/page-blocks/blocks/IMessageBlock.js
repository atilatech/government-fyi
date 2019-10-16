import React from 'react'
import PropTypes from 'prop-types'
import { Row, Col } from 'react-flexbox-grid';
import {FromThem, FromMe, Clear, Section, FromThemEmoji} from '../../static/iMessageStyles'
import {Button} from "antd";

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
const DEFAULT_MESSAGES_TO_SHOW = 7;

class IMessageBlock extends React.Component {

	constructor(props) {
		super(props);

		const {messages} = this.props.data;

		this.state = {
			hideMessages: messages.length > DEFAULT_MESSAGES_TO_SHOW,
		}
	}
	showHideMoreMessagesToggle = () => {

		const { hideMessages } = this.state;

		this.setState({hideMessages : !hideMessages});

	};

	render ( ) {

		let {messages} = this.props.data;
		let {hideMessages} = this.state;

		if (hideMessages) {
			messages = messages.slice(0, DEFAULT_MESSAGES_TO_SHOW);
		}


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
				case "them-no-bg":
					msg = <FromThemEmoji>{message.body}</FromThemEmoji>
					break;
				default:
					break;
			}
			return (
				<React.Fragment key={i}>
					{conditionalClear}
					{msg}
					<br />
				</React.Fragment>
			)
		})
		return(
			<React.Fragment>
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
			<Row className="mt-3">
				<Col
					xsOffset={1} xs={10}
					smOffset={2} sm={8}
					mdOffset={3} md={6}
					lgOffset={3} lg={6}
				>
				<Button type="primary" onClick={this.showHideMoreMessagesToggle}>
					Show {hideMessages ? 'More' : 'Less'} Messages
				</Button>
				</Col>
			</Row>
			</React.Fragment>
		);
	}
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
