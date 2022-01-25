import React from 'react';
import Login from './pages/Login';
import SideMenu from './Components/SideMenu';
import AppMenu from './pages/AppMenu';

class App extends React.Component{

  
  state = {
    isLoggedIn : false,
  }

  render(){
      return <AppMenu />
  }
}
export default App;

