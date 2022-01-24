import React, { useEffect, useState } from 'react';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';
import Box from '@mui/material/Box';
import { Typography } from '@material-ui/core';


const useStyles = makeStyles((theme: Theme) =>
  createStyles({
  avatar:{
            marginLeft:'8px',
            marginTop:'8px'
        },
     }),
);

interface profileData {
  imageURL: string;
  userName: string;
  // emailId: string
}
 const ImageAvatars = (props:profileData)=>{
  const classes = useStyles();

  // const [avatar, setAvatar] = useState<string>("https://media.istockphoto.com/photos/smiling-female-architect-sitting-at-her-office-desk-picture-id1287459398?s=612x612");
  // const [avatar, setAvatar] = useState<string>("https://media.istockphoto.com/photos/smiling-female-architect-sitting-at-her-office-desk-picture-id1287459398?s=612x612")

  // useEffect(()=>{
    // let userProfilePic = localStorage.getItem("userProfilePic");
    // console.log(userProfilePic);
    // setAvatar(imageURL);
  // })

  return (
    <div >
       <Box
        sx={{
          boxShadow: 1,
          width: '14.8rem',
          height: '4rem',
          bgcolor: (theme) => (theme.palette.mode === 'dark' ? '#101010' : '#fff'),
          color: (theme) =>
          theme.palette.mode === 'dark' ? 'grey.300' : 'grey.800',
          textAlign: 'center',
          fontSize: '0.875rem',
          fontWeight: '700',
        }}
      >
      <Avatar  className={classes.avatar}alt="Cindy Baker" src={props.imageURL} />
      <Typography>{props.userName}</Typography>
      </Box>
    </div>
  );
}

export default ImageAvatars