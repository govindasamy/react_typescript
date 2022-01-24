import React from 'react'
import clsx from 'clsx'
import { makeStyles } from '@material-ui/core/styles'
import CssBaseline from '@material-ui/core/CssBaseline'
import Drawer from '@material-ui/core/Drawer'
import AppMenu from './AppMenu';
import Box from '@mui/material/Box';

import Buttonss from './Button'
const App: React.FC = () => {
  const classes = useStyles()

  return (
    <div className={clsx('App', classes.root)}>
      <CssBaseline />
     <Box
      
      //style={{float:'right'}}
       // variant="permanent"
        classes={{
          paper: classes.drawerPaper,
        }}
      >
      <AppMenu  /> 
    
    
      </Box>
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
