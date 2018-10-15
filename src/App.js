import React from 'react';
import {BrowserRouter} from 'react-router-dom'
import { Grid } from 'react-flexbox-grid';
import ScrollToTop from 'components/static/scroll-to-top'
import { ThemeProvider } from 'styled-components'
import theme from './theme'
import Body from './body'
import {OrderingProvider} from './ordering-context'


const App = () => (
  <ThemeProvider theme={theme}>
    <BrowserRouter>
      <ScrollToTop>
        <Grid fluid style={{padding: 0, margin: 0}}>
          <OrderingProvider>
            <Body />
          </OrderingProvider>
        </Grid>
      </ScrollToTop>
    </BrowserRouter>
  </ThemeProvider>
);
export default App;
