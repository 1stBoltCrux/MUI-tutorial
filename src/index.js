import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { createMuiTheme } from '@material-ui/core/styles'
import { orange } from '@material-ui/core/colors'
// creating a theme on its own won't suffice, to overwrite the default theme, we would need to position MuiThemeProvider at th root of our app and pass our custom theme a a prop//
import { /*...*/ MuiThemeProvider } from '@material-ui/core/styles'


const theme = createMuiTheme({
  palette: {
    //When applied the color will the be calculated for light, main, dark and contrastText variations. For more granular control, you could pass in a plain object with any of those four keys.

//     light: orange[200] // same as '#FFCC80',
// main: '#FB8C00', // same as orange[600]
// dark: '#EF6C00',
// contrastText: 'rgb(0,0,0)'
    primary: orange
  }
})

ReactDOM.render(
  <MuiThemeProvider theme={theme}>
    <App />
  </MuiThemeProvider>
  , document.getElementById('root'));
