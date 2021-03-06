import React,{useContext } from 'react'
import clsx from 'clsx'
import { makeStyles } from '@material-ui/core/styles'
import { ThemeContext } from "../App";
import { AppTheme } from "../Components/AppTheme";
import CssBaseline from '@material-ui/core/CssBaseline'
import Drawer from '@material-ui/core/Drawer'
import AppMenu from '../pages/AppMenu';
import Buttonss from './Button'

const App: React.FC = () => {
  const classes = useStyles()

  const { theme } = useContext(ThemeContext);
  const headerStyle: AppTheme = {
      dark: {
          backgroundColor: 'black',
          color: 'white',
      },
      light: {
          backgroundColor: '#e0e0e0',
          color: 'black',
      },
      common: {
          transition: 'all 1s ease',
      }
  };

  const themeStyle = {
      ...(theme === 'light' ? headerStyle.light : headerStyle.dark),
      ...headerStyle.common,
  };
  return (
    <div style={themeStyle} className={clsx('App', classes.root)}>
      <CssBaseline />
     {/* <Box
      
      //style={{float:'right'}}
       // variant="permanent"
        classes={{
          paper: classes.drawerPaper,
        }}
      >
      <AppMenu  /> 
    
    
      </Box> */}
    </div>
  )
}



const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
  
  
    
  },
  drawerPaper: {
    position: 'relative',
  
    paddingTop: theme.spacing(4),
    paddingBottom: theme.spacing(4),
    background: "transparent",
   
  },
 
  
}))

export default App
