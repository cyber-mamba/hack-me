// Comments are here

/* */

import './App.css';
import { MyDropzoneBasic } from './FileUpload';
import React, { Component } from 'react';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { CssBaseline } from '@mui/material';

/*
const darkTheme = createTheme({
  palette: {
    mode: 'dark',
  },
});
*/

const theme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#7fff00',
    },
    secondary: {
      main: '#FFA500',
    },
    background: {
      default: '#15202B'
    }
  },
});

/*
const styles = {
  primaryText: {
    color: theme.palette.primary.main,
  },
  secondaryText: {
    color: theme.palette.secondary.main,
  },
};
*/

class App extends Component {
  render(){
    return(
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <div>
          <h1>Hack Me</h1>
          <MyDropzoneBasic />
        </div>
      </ThemeProvider>
    )
  }
}

export default App;