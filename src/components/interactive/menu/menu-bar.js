import React from 'react'
import PropTypes from 'prop-types'
import MenuItem from './menu-item'
import MenuDrawerButton from './menu-drawer-button'
import styled from 'styled-components'
import './menu.css'
// import SearchForm from 'components/interactive/forms/search'

import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';


const MenuBarWrapper = styled.div`
	display:flex;
	align-items: flex-start;
	justify-content:flex-end;
	min-height: 35px;

	@media screen and (max-width: 767px) {
		display: flex;
		justify-content: space-evenly;
		margin-top: 20px;
	}
  @media print {
    display: none;
  }
`;

const PrintOnly = styled.div`
	display: none;
	@media print {
		padding: 20px;
		background-color: #eee;
		text-align: center;
		display: block;
  }
`;



class MenuBar extends React.Component {

	render() {
		// const isAuthed = this.props.auth.loggedIn;
		const menuItems = [
			{
				text: 'About',
				to: '/wtf'
			},
			{
				text: 'Support us',
				to: '/support-us/'
			},
			{
				text: "Blog",
				link: 'https://blog.bythebay.cool/'
			},
		];

		const {location} = this.props;
		const items = menuItems.map( (item, i) => (
			<MenuItem key={i} text={item.text} location={location} to={item.to} link={item.link}/>
		));

		return(
			<React.Fragment>
				<PrintOnly>See more online at www.bythebay.cool</PrintOnly>
				<MenuBarWrapper>
					{items}
					<MenuDrawerButton text='More...'/>
				</MenuBarWrapper>
			</React.Fragment>
		);
	}
}

				// <SearchForm/>
MenuBar.contextTypes = {
	store: PropTypes.object
};

function mapStateToProps(state) {
  const auth = state.auth;
  return { auth };
}

export default connect(mapStateToProps, {})(withRouter(MenuBar));
