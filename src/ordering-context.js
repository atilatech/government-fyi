import React from 'react'

export const OrderingContext = React.createContext();

export class OrderingProvider extends React.Component {
  constructor(props) {
    super(props);
    this.ordering = {
      spicy: [7,10,12,5,6,11,9,3,8,2,1,4],
      numerical: [1,2,3,4,5,6,7,8,9,10,11,12]
    };
    this.state = {
      ordering : this.ordering.spicy,
      setToSpicy: () => { this.setState({ordering: this.ordering.spicy}) },
      setToNumerical: () => { this.setState({ordering: this.ordering.numerical}) },
    }
  }

  render() {
    return(
      <OrderingContext.Provider value={this.state}>
        {this.props.children}
      </OrderingContext.Provider>
    )
  }
}
