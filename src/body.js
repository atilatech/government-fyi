import React from 'react';
import {Route, Switch, withRouter } from 'react-router-dom'
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
        <Route exact path='/' component={TempHomePage}/>
        {/* <Route path='/home' component={TempHomePage}/> */}
        {/* <Route path='/subscribe' component={SubscribePage}/> */}
        {/* <Route path='/prop-1' component={Prop1}/> */}
        {/* <Route path='/prop-2' component={Prop2}/> */}
        {/* <Route path='/prop-3' component={Prop3}/> */}
        {/* <Route path='/prop-4' component={Prop4}/> */}
        {/* <Route path='/prop-5' component={Prop5}/> */}
        {/* <Route path='/prop-6' component={Prop6}/> */}
        {/* <Route path='/prop-7' component={Prop7}/> */}
        {/* <Route path='/prop-8' component={Prop8}/> */}
        {/* <Route path='/prop-9' component={Prop9}/> */}
        {/* <Route path='/prop-10' component={Prop10}/> */}
        {/* <Route path='/prop-11' component={Prop11}/> */}
        {/* <Route path='/prop-12' component={Prop12}/> */}
        <Route path='/about' component={AboutPage}/>
        <Route path='/terms' component={TermsPage}/>
        <Route component={Page404}/>
      </Switch>
      <Footer />
    </div>
    )
};

<<<<<<< HEAD
const TempHomePage = mkLoadable(import("pages/coming-soon/index"));
// const HomePage = mkLoadable(import("pages/home/index"));
// const AboutPage = mkLoadable(import("pages/about/index"));
// const SubscribePage = mkLoadable(import("pages/subscribe/index"));
// const Prop1 = mkLoadable(import("pages/1/index"));
=======
const HomePage = mkLoadable(import("pages/home/index"));
const AboutPage = mkLoadable(import("pages/about/index"));
const TermsPage = mkLoadable(import("pages/terms/index"));
const SubscribePage = mkLoadable(import("pages/subscribe/index"));
const Prop1 = mkLoadable(import("pages/1/index"));
>>>>>>> dev
// const Prop2 = mkLoadable(import("pages/2/index"));
// const Prop3 = mkLoadable(import("pages/3/index"));
// const Prop4 = mkLoadable(import("pages/4/index"));
// const Prop5 = mkLoadable(import("pages/5/index"));
// const Prop6 = mkLoadable(import("pages/6/index"));
// const Prop7 = mkLoadable(import("pages/7/index"));
// const Prop8 = mkLoadable(import("pages/8/index"));
// const Prop9 = mkLoadable(import("pages/9/index"));
// const Prop10 = mkLoadable(import("pages/10/index"));
// const Prop11 = mkLoadable(import("pages/11/index"));
// const Prop12 = mkLoadable(import("pages/12/index"));
const Page404 = mkLoadable(import("pages/404/index"));

try {
<<<<<<< HEAD
  GA.initialize([{trackingId: 'UA-83939332-1'}]);
=======
  GA.initialize([
    { trackingId: 'UA-83939332-1'},
  ]);
>>>>>>> dev
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
