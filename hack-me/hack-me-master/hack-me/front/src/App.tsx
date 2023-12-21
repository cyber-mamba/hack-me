// Comments are here

/* */

import './App.css';
import React, { Component, useState } from 'react';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { CssBaseline } from '@mui/material';
import GridBackgroundWIthText from './Functions/GridBackgroundWithText';
import SideNav from './Functions/LeftNavigationMenu';
import TableContents from './Functions/TableContents';
import LeftImageAndDescription from "./Functions/LeftImageAndDescription";
import UserInput from './UserInput';


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

const texts_to_repeat = 'ABE Hiroshi';
const name_of_home_page = texts_to_repeat;
const repeat_count = 4;
const texts = Array(repeat_count).fill(texts_to_repeat);

class App extends Component {
  render(){
    return(
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <div>
          <h1 className="homePageTitle">{name_of_home_page}のホームページ</h1><h2 className='homePageSubTitle'>～ABE Hiroshiと学ぶサイバーセキュリティ～</h2>
        </div>
        <table className="table1">
          <td>
          </td>
        </table>
        
        <div style={{ display: 'flex', width: '100%' }}>
        <div style={{ flex: '0 0 auto' }}> {/* flex-grow: 0, flex-shrink: 0, flex-basis: auto */}
          <SideNav/>
        </div>
        <div style={{ flex: '0', marginLeft: '500px' }}> {/* flex-grow: 1, flex-shrink: 1, flex-basis: 0% */}
          <LeftImageAndDescription/>
        </div>
        <div style={{ flex: '1' }}> {/* flex-grow: 1, flex-shrink: 1, flex-basis: 0% */}
          <TableContents/>
        </div>
        </div>


        
        <div>
          <GridBackgroundWIthText texts={texts} columns={repeat_count}/>
        </div>
      </ThemeProvider>
    )
  }
}

export default App;




