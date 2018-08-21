import {Component} from 'react'
import {withRouter} from 'react-router-dom'

//necessary to scroll to top of page when route changes (i.e. user navigates)

class ScrollToTop extends Component {
  componentDidUpdate(prevProps) {
    if (this.props.location !== prevProps.location) {
      window.scrollTo(0, 0)
    }
  }
  render() {
    return this.props.children
  }
}

export default withRouter(ScrollToTop)
