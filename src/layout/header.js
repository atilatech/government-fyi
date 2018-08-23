import React from 'react'
import styled from 'styled-components'
import {Link } from 'react-router-dom'
import Color from 'layout/colors'
// import MenuDrawerButton from 'components/interactive/menu/menu-drawer-button'

const Container = styled.div`
  position: fixed;
  top: -100px;
  left: 0;
  width: 100%;
  height: 145px;
  display: flex;
  align-items: flex-end;
  background-color: ${Color('yellow2')};
  z-index: 3;
`
const LogoLink = styled(Link)`
  color: ${Color('black')};
  text-decoration: none;
`
const Logo = styled.h2 `
  margin-left: 60px;
  font-size: 20px;
  @media not all and (hover: none) {
    &:hover {
      color: ${Color('pink2')};
    }
  }
  @media screen and (max-width: 767px){
    margin-left: 28px;
  }
`
const Sticky = styled.div`
  background-color: white;
  box-shadow: 0 0 40px rgba(0,0,0,0.15);
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 45px;
  width: 100%;
`

// const NavBar = styled.div`
//   display: flex;
//   justify-content: flex-end;
//   margin-right: 30px;
// `
// const NavWrapper = styled(NavLink)`
//   color: ${Color('black')};
//   text-decoration: none;
// `
//
// const NavItem = styled.h3`
//   display: block;
//   padding: 5px 10px;
//   margin-left: 15px;
//   margin-right: 15px;
// `
//
// const Secret = styled.h2`
//   z-index: 4;
//   background-color: teal;
// `


class Header extends React.Component {
  constructor(props) {
    super(props)
    this.state = ({
      windowWidth: 767,
    })
  }

  componentDidMount() {
    window.addEventListener("resize", this.handleResize);
    this.handleResize();
	}

	componentWillUnmount() {
    window.removeEventListener("resize", this.handleResize);
	}

  handleResize = () => {
    let w = (window.innerWidth || document.documentElement.clientWidth);
    this.setState({ windowWidth: w });
  }

  render() {
    // const navItems = nav.map((item,i) => {
    //   return(
    //     <NavWrapper key={i} to={item.to} activeClassName="activeNavLink">
    //       <NavItem>{item.label}</NavItem>
    //     </NavWrapper>
    //   );
    // });

    // const isXsScreen = this.state.windowWidth < 767;
    return(
      <Container>
        <Sticky>
          <LogoLink to="/">
            <Logo>ballot.fyi</Logo>
          </LogoLink>

        </Sticky>
      </Container>
    )
  }
}

// const nav = [
//   { to:"/home/", label:"Props"},
//   // { to:"/races/", label:"Races"},
//   { to:"/about/", label:"About"},
//   { to:"/subscribe/", label:"Follow us"},
// ];

export default Header;
