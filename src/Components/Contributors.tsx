import   React,{useContext } from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import { makeStyles } from '@material-ui/core/styles'
import { AppTheme } from './AppTheme';
import {ThemeContext }from '../App' 

type PersondetailsProps = {
  person:{
  name:string;
  email:string;
  image:string;
}[]
}
const useStyles = makeStyles(theme => ({
  root: {
    
    // display: "flex",
    // flexWrap: "wrap",
    // justifyContent: "space-between",
    // padding: "20px",
     
   
    
     
  },
  one: {
    
    display: "grid",
    padding:"50px",
   
    gridTemplateColumns:" repeat(3, 1fr)",
    columnGap:" 100px",
    rowGap:" 50px",
}
  
}));

const Contributors  = (props:PersondetailsProps) => {
  const classes = useStyles()


  const { theme} = useContext(ThemeContext);
  const headerStyle: AppTheme = {
      dark: {
          backgroundColor: '#808080',
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

  const themeStyle2 = {
      ...(theme === 'light' ? headerStyle.light : headerStyle.dark),
      ...headerStyle.common,
  };
  
  
  return (
    <Card style={themeStyle2} sx={{ maxWidth:1950 }}  className={classes.one} >
      {props.person.map((person)=>{
console.log(person);
return(
<CardActionArea>
  <h2 key={person.name}  className={classes.root}>
        <CardMedia
          component="img"
          height="140"
          src={person.image}
          alt="green iguana"
        ></CardMedia>
        <CardContent>
          <Typography gutterBottom variant="h5" component="div" align='center'>
           {person.name}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {person.email}
          </Typography>
        </CardContent>
        </h2>
      </CardActionArea>
)
      })}
      
    </Card>
  );
}
export default Contributors;