import { createMuiTheme, ThemeProvider } from '@material-ui/core';
import React from 'react';
import './App.css';
import Header from './Components/Header/Header';
import SideNav from './Components/SideNav/SideNav';
import TaskList from './Components/TaskList/TaskList';
const theme = createMuiTheme({
  palette:{
    primary:{
      main:'#f0f0f'
    }
  }
})
function App() {
  return (
    <ThemeProvider theme={theme}>
    <div className="App">
    <div className="aside">
      <SideNav />
    </div>
    <div className="header-body-flex Header">
      <Header  />
      <div className="TaskList01">
        <TaskList/>
      </div>
    </div>
  </div>
  </ThemeProvider>
  );
}

export default App;
