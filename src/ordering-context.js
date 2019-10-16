import React from 'react'

export const OrderingContext = React.createContext();

export class OrderingProvider extends React.Component {
  constructor(props) {
    super(props);
    this.ordering = {
      spicy: [7,10,8,12,5,6,11,9,3,2,1,4],
      // todo come here to change links from numerical to categorical
      pageLinks: ["/housing","/jobs-and-economy","/energy-and-climate","/education",
        "/healthcare","/immigration","7","8","9","10","11","12",],
    };
    this.state = {
      ordering: this.ordering.pageLinks,
      setToSpicy: () => { this.setState({ordering: this.ordering.spicy}) },
      setToNumerical: () => { this.setState({ordering: this.ordering.numerical}) },
      isXs: false
    }
  }

  componentDidMount() {
    window.addEventListener("resize",this.handleResize);
    this.handleResize();
  }

  componentWillUnmount() {
    window.removeEventListener("resize",this.handleResize);
  }

  handleResize = () => {
    const w = (window.innerWidth || document.documentElement.clientWidth);
    this.setState({isXs: w <= 767})
  }

  render() {
    return(
      <OrderingContext.Provider value={this.state}>
        {this.props.children}
      </OrderingContext.Provider>
    )
  }
}
