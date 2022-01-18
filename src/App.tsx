import React from 'react';
import { useState } from 'react';
import { GoogleLoginResponse, GoogleLoginResponseOffline } from 'react-google-login';
import { GoogleSignInComponent } from './GoogleSignInComponent';
import logo from './logo.svg';
import './App.css';

function App() {

  // const [selectedMenuItem, setSelectedMenuItem] = useState<MenuAction>();
  const [googleAccessToken, setGoogleAccessToken] = useState<string>('');

  // const menuSelectionChanged: MenuActionListener = function (action: MenuAction): void {
  //   setSelectedMenuItem(action);
  //   if (action === MenuAction.LOGOUT) {
  //     setGoogleAccessToken('');
  //   }
  // };

  let componentToDisplay;

  if (!googleAccessToken) {
    componentToDisplay = <GoogleSignInComponent loginSuccess={(response: GoogleLoginResponse | GoogleLoginResponseOffline) => {
      if ('tokenId' in response) {
        setGoogleAccessToken(response.tokenId);
      }
    }} />
  }else {
    componentToDisplay = <h1><span className="badge badge-pill badge-danger align-items-centre">Please select an item to display</span></h1>;
  }

  return (
    <>
      {googleAccessToken &&
        "Welcome"
      }      
      {componentToDisplay}
    </>
  );
}

export default App;
