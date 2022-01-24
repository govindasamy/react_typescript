
import React from 'react'
import { makeStyles, createStyles } from '@material-ui/core/styles'
import Box from '@mui/material/Box';
import Contributors from './Contributors'
import Buttonss from './Button';
import  ImageAvatars from './SideTopMenu'
import HomeIcon from '@mui/icons-material/Home';
import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';
import PersonIcon from '@mui/icons-material/Person';
import {
  BrowserRouter as Router,
  Switch, Route,Link , 
} from "react-router-dom";
import {
   List, ListItem,
  ListItemIcon, ListItemText,
  Container, Typography,Button
} from "@material-ui/core";

const AppMenu: React.FC = () => {
const classes = useStyles()
const persondetails = [
  {
  name:"Ganavi",
  email:"ganavikumarswamy@tarento.com",
  image:"https://media.istockphoto.com/photos/smiling-female-architect-sitting-at-her-office-desk-picture-id1287459398"

  },{
    name:"aaaaaa",
  email:"aaaaaaaaa@tarento.com",
 image:"https://cdn.pixabay.com/photo/2019/12/17/17/09/woman-4702060_960_720.jpg"

  },{
    name:"bbbbbbbb",
  email:"bbbbbbbbb@tarento.com",
 image:"https://cdn.pixabay.com/photo/2017/09/21/19/06/woman-2773007_960_720.jpg"

  },
  {
    name:"ccccc",
    email:"ccccccccc@tarento.com",
    image:"https://cdn.pixabay.com/photo/2012/02/23/08/40/beautiful-15728_960_720.jpg"
  
    },{
      name:"dddddd",
    email:"ddddddddd@tarento.com",
   image:"https://cdn.pixabay.com/photo/2017/07/31/21/01/laptop-2561018_960_720.jpg"
  
    },{
      name:"eeeeeeeeee",
    email:"eeeeeeeeee@tarento.com",
   image:"https://media.istockphoto.com/photos/smiling-female-architect-sitting-at-her-office-desk-picture-id1287459398"
  
    },
  
]

  return (
    <div>
    
    <Router >
      <div style={{ display: 'flex' }}>
        <Box
          style={{width: '240px', }}
          // variant="persistent"
          //  open={true}
          sx={{
            boxShadow: 1,
            width: '8rem',
            height: '47rem',
            bgcolor: (theme) => (theme.palette.mode === 'dark' ? '#101010' : '#fff'),
            color: (theme) =>
              theme.palette.mode === 'dark' ? 'grey.300' : 'grey.800',
           
     
            textAlign: 'center',
            fontSize: '0.875rem',
            fontWeight: '700',
          }}
          
        >
          <ImageAvatars/>
           
          <List   >
          <Link to="/about" className={classes.link}>
              <ListItem button>
                <ListItemIcon>
                  <RemoveRedEyeIcon />
                </ListItemIcon>
                <ListItemText primary={"About"} />
              </ListItem>
            
            </Link>
            <Link to="/" className={classes.link}>
              <ListItem button>
                <ListItemIcon>
                  <HomeIcon />
                </ListItemIcon>
                <ListItemText primary={"Home"}  />
              </ListItem>
            </Link>
            
            <Link to="/contributors" className={classes.link}>
              <ListItem button>
                <ListItemIcon>
               < PersonIcon/>
                </ListItemIcon>
                <ListItemText primary={"Contributors"} />
              </ListItem>
            </Link>
            <Buttonss/>
          </List>
         </Box>
         <div  className={classes.links}> 
       <Switch  >
          <Route exact path="/"  >
            <Container>
              <Typography variant="h3" >
                Home
              </Typography>
              if
              <Typography variant="body1" >
              A flower, sometimes known as a bloom or blossom, is the reproductive structure found in flowering plants (plants of the division Angiospermae). The biological function of a flower is to facilitate reproduction, usually by providing a mechanism for the union of sperm with eggs. Flowers may facilitate outcrossing (fusion of sperm and eggs from different individuals in a population) resulting from cross-pollination or allow selfing (fusion of sperm and egg from the same flower) when self-pollination occurs.

The two types of pollination are: self-pollination and cross-pollination. Self-pollination happens when the pollen from the anther is deposited on the stigma of the same flower, or another flower on the same plant. Cross-pollination is the transfer of pollen from the anther of one flower to the stigma of another flower on a different individual of the same species. Self-pollination happens in flowers where the stamen and carpel mature at the same time, and are positioned so that the pollen can land on the flower's stigma. This pollination does not require an investment from the plant to provide nectar and pollen as food for pollinators.[1]              </Typography>
            </Container>
          </Route>
          <Route   path="/about">
            <Container>
              <Typography variant="h3" >
                About
              </Typography>
              <Typography variant="body1">
              Nature, in the broadest sense, is the natural, physical, material world or universe. "Nature" can refer to the phenomena of the physical world, and also to life in general. The study of nature is a large, if not the only, part of science. Although humans are part of nature, human activity is often understood as a separate category from other natural phenomena.[1]

The word nature is borrowed from the Old French nature and is derived from the Latin word natura, or "essential qualities, innate disposition", and in ancient times, literally meant "birth".[2] In ancient philosophy, natura is mostly used as the Latin translation of the Greek word physis (φύσις), which originally related to the intrinsic characteristics that plants, animals, and other features of the world develop of their own accord.[3][4] The concept of nature as a whole, the physical universe, is one of several expansions of the original notion;[1] it began with certain core applications of the word φύσις by pre-Socratic philosophers (though this word had a dynamic dimension then, especially for Heraclitus), and has steadily gained currency ever since
Nature, in the broadest sense, is the natural, physical, material world or universe. "Nature" can refer to the phenomena of the physical world, and also to life in general. The study of nature is a large, if not the only, part of science. Although humans are part of nature, human activity is often understood as a separate category from other natural phenomena.[1]

The word nature is borrowed from the Old French nature and is derived from the Latin word natura, or "essential qualities, innate disposition", and in ancient times, literally meant "birth".[2] In ancient philosophy, natura is mostly used as the Latin translation of the Greek word physis (φύσις), which originally related to the intrinsic characteristics that plants, animals, and other features of the world develop of their own accord.[3][4] The concept of nature as a whole, the physical universe, is one of several expansions of the original notion;[1] it began with certain core applications of the word φύσις by pre-Socratic philosophers (though this word had a dynamic dimension then, especially for Heraclitus), and has steadily gained currency ever since
              
              
              </Typography>
            </Container>
          </Route>
          <Route   path="/contributors">
            <Container>
              <Typography variant="h3" align='center'>
              Contributors
              </Typography>
              <Typography variant="body1" >
              < Contributors person={persondetails} />
              </Typography>
            </Container>
          </Route>
        </Switch>
        </div>
      </div>
     
    </Router>
  
    </div>
   
  )
}


const useStyles = makeStyles(theme =>
  createStyles({
   
    link: {
  
      color: theme.palette.text.primary,
      
      textDecoration:"underline",
      textDecorationColor: "blue",
      
    },
    links: {
  
     
      width:"100%",
    },
    
    appMenu: {
   
      height:'600px',
     },
    menuItem: {
        width:'230px',
      },
   }),
)

export default AppMenu
