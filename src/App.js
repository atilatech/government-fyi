import React from 'react';
import {BrowserRouter} from 'react-router-dom'
import { Grid } from 'react-flexbox-grid';
import Analytics from 'react-router-ga';
import ScrollToTop from 'components/static/scroll-to-top'
import { ThemeProvider } from 'styled-components'
import theme from './theme'
import Body from './body'
import {OrderingProvider} from './ordering-context'
import './styles.scss';
import 'bootstrap/dist/css/bootstrap.min.css';

const App = () => (
  <ThemeProvider theme={theme}>
    <BrowserRouter>
        <Analytics  id="UA-150210691-1">
      <ScrollToTop>
        <Grid fluid style={{padding: 0, margin: 0}}>
          <OrderingProvider>
            <Body />
          </OrderingProvider>
        </Grid>
      </ScrollToTop>
        </Analytics>
    </BrowserRouter>
  </ThemeProvider>
);
export default App;
