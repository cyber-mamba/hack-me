// Comments are here

/* */

import './App.css';
import { MyDropzoneBasic } from './FileUpload';
import React, { Component } from 'react';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { CssBaseline } from '@mui/material';
import GridBackgroundWIthText from './Functions/GridBackgroundWithText';
import SideNav from './Functions/LeftNavigationMenu';

/*
const darkTheme = createTheme({
  palette: {
    mode: 'dark',
  },
});
*/

const theme = createTheme({
  palette: {
    //mode: 'dark',
    primary: {
      //main: '#7fff00',
      main: '#FFFFFF',
    },
    secondary: {
      main: '#FFA500',
    },
    background: {
      //default: '#15202B'
      default: '#FFFFFF'
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
const texts_to_repeat = 'ABE Hiroshi';
const name_of_home_page = texts_to_repeat;
const repeat_count = 4;
const texts = Array(repeat_count).fill(texts_to_repeat);

class App extends Component {
  render(){
    return(
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <SideNav />
        <div>
          <h1 className="homePageTitle">{name_of_home_page}のホームページ</h1>
        </div>
        <table className="table1">
          <td>
            <div className="latestInfo">
              ★★★　最新情報　★★★
            </div>
          </td>
        </table>


        
        <div>
          <GridBackgroundWIthText texts={texts} columns={repeat_count}/>
        </div>
      </ThemeProvider>
    )
  }
}

export default App;




