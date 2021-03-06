import React from 'react';
import {
  BrowserRouter, Switch, Route, Redirect,
} from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import { Normalize } from 'styled-normalize';
import theme from './themes/theme';
import GlobalStyles from './themes/GlobalStyles';
import Quote from './components/Quote';
import Navbar from './components/ui/Navbar';

export default function App() {
  return (
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <>
          <Normalize />
          <GlobalStyles />
          <Navbar />
          <Switch>
            <Route exact path="/" component={Quote} />
            <Redirect to="/" />
          </Switch>
        </>
      </ThemeProvider>
    </BrowserRouter>
  );
}
