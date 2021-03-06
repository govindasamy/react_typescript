import React, { useEffect, useState,useContext } from 'react'
import { ThemeContext } from "../App";
import { AppTheme } from '../Components/AppTheme'; 
import { makeStyles, createStyles } from '@material-ui/core/styles'
import Buttonss from '../Components/Button';
import ImageAvatars from '../Components/SideTopMenu'
import HomeIcon from '@mui/icons-material/Home';
import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';
import PersonIcon from '@mui/icons-material/Person';
import {
  BrowserRouter as Router,
  Switch, Route, Link,
} from "react-router-dom";
import {
  Drawer, List, ListItem,
  ListItemIcon, ListItemText,
  Container, Typography, Button
} from "@material-ui/core";
import { auth } from '../firebase';
import Login from './Login';
import CarouselWithArrow from '../Components/CarouselWithArrow';
import { SearchableTable } from '../Components/SearchableTable';
import Contributors from '../Components/Contributors';
import ThemeToggle from '../Components/ThemeToggle';

const AppMenu: React.FC = () => {
  const classes = useStyles()
  const persondetails = [
    {
      name: "Ganavi",
      email: "ganavikumarswamy@tarento.com",
      image: "https://media.istockphoto.com/photos/smiling-female-architect-sitting-at-her-office-desk-picture-id1287459398"

    }, 
    {
      name: "Mrigank",
      email: "mrigank.shringi@tarento.com",
      image: "https://cdn.pixabay.com/photo/2019/12/17/17/09/woman-4702060_960_720.jpg"

    }, 
    {
      name: "Suraj",
      email: "suraj.gupta@tarento.com",
      image: "https://cdn.pixabay.com/photo/2017/09/21/19/06/woman-2773007_960_720.jpg"

    },
    {
      name: "Govindasamy",
      email: "govindasamy.krishnan@tarento.com",
      image: "https://cdn.pixabay.com/photo/2012/02/23/08/40/beautiful-15728_960_720.jpg"

    },

  ]

  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);

  useEffect(() => {
    checkSession();
  });

  const onLogout = () => {
    auth.signOut().then(() => {
      // Sign-out successful.
      localStorage.clear();
      checkSession();
    }).catch((error: any) => {
      // An error happened.
      console.log(error);
    });
  }

  const checkSession = () => {
    let authToken = localStorage.getItem('authToken');
    if (authToken != null || authToken != undefined) {
      setIsLoggedIn(true);
    } else {
      setIsLoggedIn(false);
    }
  }

  const imageURL = localStorage.getItem("userProfilePic") as string;
  const userName = localStorage.getItem("userName") as string;
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
    <div style={themeStyle2}>

      <Router >
        <div style={{display: 'flex' }}>
          <Drawer
            style={{ width: '240px' }}
            variant="persistent"
            anchor="left"
            open={true}
            classes={{ paper: classes.drawerPaper }}
          >
            <ImageAvatars  imageURL={imageURL} userName={userName} />

            <List  style={themeStyle2} >
            <Link style={themeStyle2} to="/" className={classes.link}>
                <ListItem button>
                  <ListItemIcon style={themeStyle2}>
                    <ThemeToggle />
                  </ListItemIcon>
                  <ListItemText primary={theme} />
                </ListItem>
              </Link>
              <Link style={themeStyle2} to="/" className={classes.link}>
                <ListItem button>
                  <ListItemIcon style={themeStyle2}>
                    <HomeIcon />
                  </ListItemIcon>
                  <ListItemText primary={"Home"} />
                </ListItem>
              </Link>
              <Link style={themeStyle2} to="/about" className={classes.link}>
                <ListItem button>
                  <ListItemIcon style={themeStyle2}>
                    <RemoveRedEyeIcon />
                  </ListItemIcon>
                  <ListItemText primary={"About"} />
                </ListItem>

              </Link>
              <Link style={themeStyle2} to="/contributors" className={classes.link}>
                <ListItem button>
                  <ListItemIcon style={themeStyle2}>
                    < PersonIcon />
                  </ListItemIcon>
                  <ListItemText primary={"Contributors"} />
                </ListItem>
              </Link>
              {isLoggedIn ? <Buttonss onClick={() => onLogout()} /> : null}

            </List>
          </Drawer>
          <Switch>
            <Route exact path="/"  >
              <Container>
                <Typography variant="h3" gutterBottom>
                  {isLoggedIn ? "Home" : "Sign in to see this page"}
                </Typography>
                <Typography variant="body1" gutterBottom>
                  {
                    isLoggedIn ?
                      <SearchableTable rows={[{ id: "string", firstName: "string", lastName: "string", email: "string" }]} />
                      // <CarouselWithArrow />
                      : <div>
                        <Login onClick={() => checkSession()} />
                      </div>

                  }

                </Typography>
              </Container>
            </Route>
            <Route path="/about">
              <Container>
                <Typography variant="h3" gutterBottom>
                  About
                </Typography>
                <Typography style={themeStyle2} variant="body1" gutterBottom>
                  Nature, in the broadest sense, is the natural, physical, material world or universe. "Nature" can refer to the phenomena of the physical world, and also to life in general. The study of nature is a large, if not the only, part of science. Although humans are part of nature, human activity is often understood as a separate category from other natural phenomena.[1]

                  The word nature is borrowed from the Old French nature and is derived from the Latin word natura, or "essential qualities, innate disposition", and in ancient times, literally meant "birth".[2] In ancient philosophy, natura is mostly used as the Latin translation of the Greek word physis (??????????), which originally related to the intrinsic characteristics that plants, animals, and other features of the world develop of their own accord.[3][4] The concept of nature as a whole, the physical universe, is one of several expansions of the original notion;[1] it began with certain core applications of the word ?????????? by pre-Socratic philosophers (though this word had a dynamic dimension then, especially for Heraclitus), and has steadily gained currency ever since
                </Typography>
              </Container>
            </Route>
            <Route path="/contributors">
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

      </Router>

    </div>

  )
}


const useStyles = makeStyles(theme =>
  createStyles({
    drawerPaper: { width: 'inherit' },
    link: {

      color: theme.palette.text.secondary,

      // textDecoration: "underline",
      textDecorationColor: "blue",
      

    },

    appMenu: {

      height: '600px',
    },
    menuItem: {
      width: '230px',
    },
  }),
)

export default AppMenu
