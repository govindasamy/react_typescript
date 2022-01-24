import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Check from './check';
import SideMenu from '../Components/SideMenu'
const bull = (
  <Box
    component="span"
    sx={{ display: 'inline-block',height:'100%', mx: '2px', transform: 'scale(0.8)' }}
  >
    
  </Box>
);

export default function BasicCard() {
  return (
    <Card sx={{height:'100%',borderRadius:'0' }}>
    
        {/* <SideMenu/> */}
          <Check/>
          
     
    </Card>
  );
}