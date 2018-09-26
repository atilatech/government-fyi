import React from 'react'
import styled from 'styled-components'
// import PropTypes from 'prop-types';
import {
  TextField,
  ErrorMessage,
  SuccessStyle,
  SubmitButtonWithStyle,
  SubmittingStyle
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
      subscribeStatus: null,
    };
  }


  handleInputChange = (event) => {
    const target = event.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    this.setState({[target.name]: value});
    if(this.state.subscribeStatus === 'error') {
      this.setState({subscribeStatus:null})
    }
  }

  handleSubmit = async (event) => {
    event.preventDefault(); //-- prevents page from refreshing
    const gUrl = 'https://script.google.com/macros/s/AKfycbzIn-AFFt_C_bXkuZ9hKuOSc7fGPQlaFEoBw-NsY2LrGRDcIkZ0/exec'
    const form = document.forms['subscribe']
    fetch(gUrl, {
      method: 'POST',
      body:new FormData(form)
    })
    .then(response => {
      if(response.status === 200) {
        this.setState({
          email:"", //clear the field
          subscribeStatus:"success"
        });
      }
    })
    .catch(error => {
      this.setState({
        subscribeStatus:"error"
      })
      window.setTimeout(()=>{this.setState({subscribeStatus:null})},6000);
    })
    this.setState({subscribeStatus:"pending"})
  }

	render() {
    let button =
      <SubmitButtonWithStyle
        id='submit-btn'
        type="submit"
        value="join"
        name="subscribe"
      />
    const { subscriber } = this.props;
    switch(this.state.subscribeStatus) {
      case null:
        break;
      case "pending":
        button = <SubmittingStyle>Maybe...</SubmittingStyle>
        break;
      case "success":
        button = <SuccessStyle>You're in</SuccessStyle>;
        break;
      case "error":
      default:
        button = <ErrorMessage>Error! Try again.</ErrorMessage>;
        break;
    }


		return (
			<div action="" method="GET">
				<Form name="subscribe" onSubmit={this.handleSubmit}>
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
			  </Form>
			</div>
		)
	}
}

export default SubscribeForm;
