import React from 'react';
import {Route, Switch, withRouter } from 'react-router-dom'
import Header from "layout/header"
import Footer from "layout/footer"
import Loadable from 'loadable-components'
import {LoadingAnimation, ErrorLoading} from 'components/static/loading'

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
      <Switch>
        <Route exact path='/' component={HomePage}/>
        <Route path='/home' component={HomePage}/>
        <Route path='/housing' component={Prop1}/>
        <Route path='/jobs-and-economy' component={JobsAndEconomyPage}/>
        <Route path='/energy-and-climate' component={EnergyAndClimatePage}/>
        <Route path='/education' component={EducationPage}/>
        <Route path='/healthcare' component={HealthCarePage}/>
        <Route path='/immigration' component={ImmigrationPage}/>
        <Route path='/taxes' component={TaxesPage}/>
        <Route path='/prop-8' component={Prop8}/>
        <Route path='/prop-9' component={Prop9}/>
        <Route path='/prop-10' component={Prop10}/>
        <Route path='/prop-11' component={Prop11}/>
        <Route path='/prop-12' component={Prop12}/>
        <Route path='/about' component={AboutPage}/>
        <Route path='/people/:demographic' component={PeopleDetail}/>
        <Route path='/people' component={People}/>
        <Route path='/terms' component={TermsPage}/>
        <Route path='/procrastinators' component={ProcrastinatorsPage}/>
        <Route path='/donate' component={DonatePage}/>
        <Route path='/follow' component={SubscribePage}/>
        <Route component={Page404}/>
      </Switch>
      <Footer />
    </div>
    )
};

// <Route path='/print' component={PrintedGuidePage}/>

const HomePage = mkLoadable(import("pages/home/index"));
// const BRBPage = mkLoadable(import("pages/coming-soon/index"));
const AboutPage = mkLoadable(import("pages/about/index"));
const People = mkLoadable(import("pages/people/People"));
const PeopleDetail = mkLoadable(import("pages/people/PeopleDetail"));
const TermsPage = mkLoadable(import("pages/terms/index"));
const SubscribePage = mkLoadable(import("pages/subscribe/index"));
const DonatePage = mkLoadable(import("pages/donate/index"));
const ProcrastinatorsPage = mkLoadable(import("pages/procrastinators/index"));
const Prop1 = mkLoadable(import("pages/1/index"));
const JobsAndEconomyPage = mkLoadable(import("pages/2/index"));
const EnergyAndClimatePage = mkLoadable(import("pages/3/index"));
const EducationPage = mkLoadable(import("pages/4/index"));
const HealthCarePage = mkLoadable(import("pages/5/index"));
const ImmigrationPage = mkLoadable(import("pages/6/index"));
const TaxesPage = mkLoadable(import("pages/7/index"));
const Prop8 = mkLoadable(import("pages/8/index"));
const Prop9 = mkLoadable(import("pages/9/index"));
const Prop10 = mkLoadable(import("pages/10/index"));
const Prop11 = mkLoadable(import("pages/11/index"));
const Prop12 = mkLoadable(import("pages/12/index"));
const Page404 = mkLoadable(import("pages/404/index"));


export default withRouter(Body)
