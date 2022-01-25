import React, { useState } from "react";
import AppMenu from './pages/AppMenu'
export const ThemeContext = React.createContext({} as { theme: string, setTheme: any });
function App() {
  const [theme, setTheme] = useState('light');
  return (
    <ThemeContext.Provider value={{theme,setTheme}}>
      <div>
        <AppMenu />
      </div>
    </ThemeContext.Provider>
  );
}

export default App;