import React from 'react'
import styled from 'styled-components'
import {Link, NavLink } from 'react-router-dom'
import Color from 'layout/colors'
import MenuDrawerButton from 'components/interactive/menu/menu-drawer-button'
import {Spacer} from 'layout/util'
import shadowPattern from 'components/static/shadowPattern.png'

const Container = styled.div`
  position: fixed;
  top: -115px;
  left: 0;
  width: 100%;
  height: 160px;
  display: flex;
  align-items: flex-end;
  background: url('${shadowPattern}') repeat;
  background-size: 5px 5px;
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

const NavBar = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-right: 30px;
`
const NavWrapper = styled(NavLink)`
  color: ${Color('black')};
  text-decoration: none;
  border-radius: 15px;

`

const NavItem = styled.h3`
  display: block;
  padding: 5px 10px;
  margin-left: 15px;
  margin-right: 15px;
  font-size: 12px;
`

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
    const navItems = nav.map((item,i) => {
      return(
        <NavWrapper key={i} to={item.to} activeClassName="activeNavLink">
          <NavItem>{item.label}</NavItem>
        </NavWrapper>
      );
    });

    const isXsScreen = this.state.windowWidth < 767;
    return(
      <React.Fragment>
        <Spacer height={45}/>
        <Container>
          <Sticky>
            <LogoLink to="/">
              <Logo>ballot.fyi</Logo>
            </LogoLink>
            <NavBar>
              {isXsScreen ? <MenuDrawerButton items={nav}/> : navItems}
            </NavBar>
          </Sticky>
        </Container>
      </React.Fragment>
    )
  }
}

const nav = [
  { to:"/home/", label:"Props (2018)", longLabel: "CA Propositions (2018)"},
  // { to:"/races/", label:"Races"},
  { to:"/about/", label:"About", longLabel:"About us"},
  // { to:"/follow/", label:"Follow us", icon:""},
  // { to:"/print/", label:"Print", longLabel: "Printed guide", icon:""},

];

export default Header;
