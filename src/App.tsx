import React from 'react';
import Login from './pages/Login';
import SideMenu from './Components/SideMenu';

class App extends React.Component{

  
  state = {
    isLoggedIn : false,
  }

  componentDidMount(){
    this.checkSession()
  }

  checkSession(){
    let authToken = localStorage.getItem('authToken');
    if(authToken != null || authToken != undefined){
      this.setState({isLoggedIn : true});
    } else {
      this.setState({isLoggedIn : false});
    }
  }

  render(){
    if(!this.state.isLoggedIn){
      return <Login onClick={()=>this.checkSession()}/>
    } else {
      return <SideMenu />
    }
  }
}
export default App;

