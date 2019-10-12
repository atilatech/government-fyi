import React from 'react';
import { enquireScreen } from 'enquire-js';
import Banner from './Banner';
import 'antd/dist/antd.css';
import './LandingPage.scss';
import './Reponsive.scss';
import PropSection from "../../components/page-blocks/sections/PropSection";
import AboutPage from "../../pages/about/index"

let isMobile = false;
enquireScreen((b) => {
    isMobile = b;
});

class LandingPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isMobile,
        };
    }

    componentDidMount() {
        enquireScreen((b) => {
            this.setState({
                isMobile: !!b,
            });
        });
    }
    render() {
        return (
                <div>
                    <Banner isMobile={this.state.isMobile} />
                    <PropSection />
                    <AboutPage />
                </div>
        );
    }
}
export default LandingPage;
