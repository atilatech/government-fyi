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
        <Route path='/seniors' component={SeniorsPage}/>
        <Route path='/about' component={AboutPage}/>
        <Route path='/people/:demographic' component={PeopleDetail}/>
        <Route path='/people' component={People}/>
        <Route path='/terms' component={TermsPage}/>
        <Route path='/donate' component={DonatePage}/>
        <Route component={Page404}/>
      </Switch>
      <Footer />
    </div>
    )
};


const HomePage = mkLoadable(import("pages/home/index"));
const AboutPage = mkLoadable(import("pages/about/index"));
const People = mkLoadable(import("pages/people/People"));
const PeopleDetail = mkLoadable(import("pages/people/PeopleDetail"));
const TermsPage = mkLoadable(import("pages/terms/index"));
mkLoadable(import("pages/subscribe/index"));
const DonatePage = mkLoadable(import("pages/donate/index"));
mkLoadable(import("pages/procrastinators/index"));
const Prop1 = mkLoadable(import("pages/1/index"));
const JobsAndEconomyPage = mkLoadable(import("pages/2/index"));
const EnergyAndClimatePage = mkLoadable(import("pages/3/index"));
const EducationPage = mkLoadable(import("pages/4/index"));
const HealthCarePage = mkLoadable(import("pages/5/index"));
const ImmigrationPage = mkLoadable(import("pages/6/index"));
const TaxesPage = mkLoadable(import("pages/7/index"));
const SeniorsPage = mkLoadable(import("pages/8/index"));
mkLoadable(import("pages/9/index"));
mkLoadable(import("pages/10/index"));
mkLoadable(import("pages/11/index"));
mkLoadable(import("pages/12/index"));
const Page404 = mkLoadable(import("pages/404/index"));


export default withRouter(Body)
