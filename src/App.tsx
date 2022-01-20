import React from 'react';
import Login from './pages/Login';
import SideMenu from './Components/SideMenu';
class App extends React.Component{

  componentDidMount(){
    }
  render(){
    return(
      <>
        <Login />
        <SideMenu/>
      </>
    )
  }
}
export default App;

