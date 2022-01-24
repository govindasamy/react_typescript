import React from 'react';
import Login from './pages/Login';
import SideMenu from './Components/SideMenu';
import AppMenu from './pages/AppMenu';

class App extends React.Component {

  componentDidMount() {

  
  state = {
    isLoggedIn : false,
  }

  // componentDidMount(){
  //   this.checkSession()
  // }

  // checkSession(){
  //   let authToken = localStorage.getItem('authToken');
  //   if(authToken != null || authToken != undefined){
  //     this.setState({isLoggedIn : true});
  //   } else {
  //     this.setState({isLoggedIn : false});
  //   }
  // }

  render(){
      return <AppMenu />
  }
}
export default App;

