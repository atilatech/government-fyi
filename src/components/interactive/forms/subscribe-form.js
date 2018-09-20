import React from 'react'
import styled from 'styled-components'
// import PropTypes from 'prop-types';
// import { connect } from 'react-redux';
// import { STATUS } from "state/requestStatus/reducer";
import {
  TextField,
  // ErrorMessage,
  // SuccessStyle,
  SubmitButtonWithStyle,
  // SubmittingStyle
} from './form-styles';

const Form = styled.form`
  display: flex;
`

/*
<SubscribeForm longform/>
Form to be used around site to subscribe users to MailChimp list.

just provides the form. Does NOT provide the container.

Usage:
<SubscribeForm/>
*/


class SubscribeForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
    };
  }


  handleInputChange = (event) => {
    const target = event.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    this.setState({[target.name]: value});
  }

  handleSubmit = async (event) => {
    event.preventDefault(); //-- prevents page from refreshing
    // const { store } = this.context;

    // const payload = {
    //   username: this.state.email,
    //   first: this.state.firstName,
    //   last: this.state.lastName,
    // };
    //
    // if (this.state.zip) {
    //   payload.zip = this.state.zip;
    // }
    //
    // store.dispatch({
    //   type: "SUBSCRIBE_REQUESTED",
    //   payload: payload
    // });
  }

	render() {
    let button =
      <SubmitButtonWithStyle
        id='submit-btn'
        type="submit"
        value="join"
        name="subscribe"
      />
    // const { subscriber } = this.props;
    // switch(subscriber.status) {
    //   case STATUS.NONE:
    //     break;
    //   case STATUS.PENDING:
    //     button = <SubmittingStyle>Sending...</SubmittingStyle>
    //     break;
    //   case STATUS.SUCCESS:
    //     button = <SuccessStyle>Cooooool. You're on the list.</SuccessStyle>
    //     break;
    //   case STATUS.FAILURE:
    //   default:
    //     button = (
    //       <React.Fragment>
    //         {button}
    //         <ErrorMessage>
    //           Error sending! Try again.
    //         </ErrorMessage>
    //       </React.Fragment>
    //     );
    //     break;
    // }


		return (
			<div action="" method="GET">
				<Form onSubmit={this.handleSubmit}>
			    <TextField
            required={true}
            type="email"
            name="email"
            id="MERGE0"
            placeholder='email address'
            value={this.state.email}
            onChange={this.handleInputChange}
       />

					{button}

			    <div style={{position: 'absolute', left: '-5000px'}} aria-hidden='true' aria-label="Please leave the following three fields empty">
		        <label htmlFor="b_name">Name: </label>
		        <input type="text" name="b_name" tabIndex="-1" value="" placeholder="Freddie" id="b_name"/>

		        <label htmlFor="b_email">Email: </label>
		        <input type="email" name="b_email" tabIndex="-1" value="" autoComplete='off' placeholder="youremail@gmail.com" id="b_email"/>

		        <label htmlFor="b_comment">Comment: </label>
		        <textarea name="b_comment" tabIndex="-1" placeholder="Please comment" id="b_comment"></textarea>
			    </div>
			  </Form>
			</div>
		)
	}
}

// SubscribeForm.contextTypes = {
//   store: PropTypes.object
// };
//
// function mapStateToProps(state) {
//   const subscriber = state.subscriber;
//   return { subscriber };
// }

// const SubscribeForm = connect(mapStateToProps, {})(SubscribeForm);
export default SubscribeForm;
