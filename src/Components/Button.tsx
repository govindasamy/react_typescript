import React from 'react'
import { makeStyles, createStyles } from '@material-ui/core/styles'
import Button from '@mui/material/Button';
import Grid from "@material-ui/core/Grid";
import Box from '@mui/material/Box';
const Buttonss: React.FC = () => {
    const classes = useStyles()
    return (
        <div>
           <Box
        sx={{
          boxShadow: 1,
          width: '14.8rem',
          height: '5rem',
          bgcolor: (theme) => (theme.palette.mode === 'dark' ? '#101010' : '#fff'),
          color: (theme) =>
            theme.palette.mode === 'dark' ? 'grey.200' : 'grey.400',
        
         marginTop:"450px",
          textAlign: 'center',
          fontSize: '0.875rem',
          fontWeight: '700',
          transform: 'rotate(180deg)',
        }}
      >
            <Grid container justify="center">
     <Button style={{ backgroundColor:'#DEDCD8', color:'black', marginTop:"15px",}} className={classes.button} variant="contained" >
     LOGOUT
   </Button>
   
 </Grid>
 </Box>
        </div>
    )
}


const useStyles = makeStyles(theme =>
    createStyles({
      
     
      button:{
       width:'230px',
       
     
       
        transform: 'rotate(180deg)',
        textDecoration:" none",
          
      },
     
    }),
  )
  export default Buttonss;