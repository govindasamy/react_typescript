import React from 'react';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';
import Box from '@mui/material/Box';


const useStyles = makeStyles((theme: Theme) =>
  createStyles({
  avatar:{
            marginLeft:'8px',
            marginTop:'8px'
        },
     }),
);

export default function ImageAvatars() {
  const classes = useStyles();

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
      <Avatar  className={classes.avatar}alt="Cindy Baker" src="https://media.istockphoto.com/photos/smiling-female-architect-sitting-at-her-office-desk-picture-id1287459398?s=612x612" />
      </Box>
    </div>
  );
}
