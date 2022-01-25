// import React from 'react';
// import Login from './pages/Login';
// import SideMenu from './Components/SideMenu';
// import AppMenu from './pages/AppMenu';

// class App extends React.Component{

  
//   state = {
//     isLoggedIn : false,
//   }

//   render(){
//       return <AppMenu />
//   }
// }
// export default App;
import React, { useState } from "react";
import AppMenu from './pages/AppMenu'
export const ThemeContext = React.createContext({} as { theme: string, setTheme: any });
function App() {
  const [theme, setTheme] = useState('light');
  // const [theme1, setTheme1] = useState('light')
  return (
    <ThemeContext.Provider value={{theme,setTheme}}>
      <div>
        <AppMenu />
      </div>
    </ThemeContext.Provider>
  );
}

export default App;