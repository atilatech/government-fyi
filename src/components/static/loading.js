import React from 'react'
import './loading.css'

export class LoadingAnimation extends React.Component {
	constructor(props) {
		super(props);
		this.state = { show: false }
	}
	componentDidMount() {
		this.timer = window.setTimeout(()=> this.setState({show: true}), 200)
	}
	componentWillUnmount() {
		window.clearTimeout(this.timer)
	}

	render() {
		return(
		  this.state.show ?
		  	<div className="loading-block">
			    <div className="animated-background facebook">
			      <div className="background-masker header-top"/>
			      <div className="background-masker header-top-2"/>
			      <div className="background-masker body-top-left"/>
			      <div className="background-masker body-line"/>
			      <div className="background-masker body-line-2"/>
			      <div className="background-masker body-line-3"/>
			      <div className="background-masker body-line-4"/>
			      <div className="background-masker body-line-5"/>
			      <div className="background-masker body-line-6"/>
			      <div className="background-masker body-line-end"/>
			    </div>
			  </div>
			: <div style={{height:600}} />
		);
	}
}

export const ErrorLoading = () => {
	return(
  	<div className='loading-error'>
    	<span role="img" aria-label="yikes">😬</span><br/>Sorry, there was a problem loading this page, but refreshing the page often helps.
    	<div className='refresh-button' onClick={()=>window.location.reload()}>
    		Refresh
    	</div>
  	</div>
	);
};
