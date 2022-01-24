// import React from 'react';
// import Login from './pages/Login';
// import Demo from './Components/demo';
// import {Paper}from '@material-ui/core';
// import {ThemeProvider} from '@material-ui/core/styles'
// import createMuiTheme  from '@material-ui/core/styles';
// import SideMenu from './Components/SideMenu'


// class App extends React.Component{

  
//   state = {
//     isLoggedIn : false,
//   }

//   componentDidMount(){
//     this.checkSession()
//   }

//   checkSession(){
//     let authToken = localStorage.getItem('authToken');
//     if(authToken != null || authToken != undefined){
//       this.setState({isLoggedIn : true});
//     } else {
//       this.setState({isLoggedIn : false});
//     }
//   }

//   render(){
//     // <Demo/>
//     if(!this.state.isLoggedIn){
//       return <Login onClick={()=>this.checkSession()}/>
//     } else {
//       return <SideMenu />
//     }
//   }
// }
// export default App;
import React, { useState } from "react";
import "./App.css";
import SideMenu from './Components/SideMenu'
export const ThemeContext = React.createContext({} as { theme: string, setTheme: any });

function App() {
  const [theme, setTheme] = useState('light');

  return (
    <ThemeContext.Provider value={{theme,setTheme}}>
      <div>
        <SideMenu />
        
      </div>
    </ThemeContext.Provider>
  );
}

export default App;