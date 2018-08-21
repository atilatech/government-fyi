import React from 'react';
import {Route, Switch, Redirect, withRouter } from 'react-router-dom'
import Header from "layout/header"
import Footer from "layout/footer"
import Loadable from 'loadable-components'
import {LoadingAnimation, ErrorLoading} from 'components/static/loading'
import GA from 'react-ga'

const mkLoadable = (importStatement) => {
  const defaults = {
    LoadingComponent: LoadingAnimation,
    ErrorComponent: ErrorLoading
  };
  return Loadable(() => importStatement, defaults);
};

const Body = (props) => {
  return(
    <div style={{backgroundColor: 'white'}}>
      <Header location={props.location}/>
      <Route component={logView}/>
      <Switch>
        <Route exact path='/' component={HomePage}/>
        {/* <Route component={Page404}/> */}
      </Switch>
      <Footer />
    </div>
    )
};

const HomePage = mkLoadable(import("pages/home/index"));
// const Page404 = mkLoadable(import("pages/404/404"));

try {
  GA.initialize([
    {
      trackingId: 'UA-83939332-1',
    },
  ]);
} catch(e) {
  console.error("GA initialize error:", e.message);
}

const logView = () => {
  if(process.env.NODE_ENV === 'production') {
    GA.pageview(window.location.pathname + window.location.search);
  }
  return null;
}



export default withRouter(Body)
