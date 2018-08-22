import React from 'react'
import ReactDOM from 'react-dom'

/*
uses Portals in React to insert dom node
at sibling of root (so that full screen overlay is easy)

does nothing stylistic
*/

//-- found in bythebay/public/index.html
const menuRoot = document.getElementById('menu-root');

class MenuPortal extends React.Component {
  constructor(props) {
    super(props);
    this.el = document.createElement('div');
  }
  componentDidMount() {
    menuRoot.appendChild(this.el);
  }
  componentWillUnmount() {
    menuRoot.removeChild(this.el);
  }
  render() {
    return ReactDOM.createPortal(
      this.props.children,
      this.el,
    );
  }
}

export default MenuPortal
