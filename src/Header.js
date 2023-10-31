import React from 'react';
import { AppBar, Toolbar, Typography, Button, makeStyles } from '@mui/material';

const useStyles = makeStyles((theme) => ({
  appBar: {
    backgroundColor: '#2196F3', // Customize the background color as needed
  },
  title: {
    flexGrow: 1,
  },
  button: {
    marginLeft: theme.spacing(2), // Add spacing between buttons
  },
}));

const Header = () => {
  const classes = useStyles();

  return (
    <AppBar position="static" className={classes.appBar}>
      <Toolbar>
        {/* App Logo */}
        <Typography variant="h6" className={classes.title}>
          Your App Logo
        </Typography>

        {/* Menu Options */}
        <Button color="inherit" className={classes.button}>
          Home
        </Button>
        <Button color="inherit" className={classes.button}>
          Recipes
        </Button>
        <Button color="inherit" className={classes.button}>
          About
        </Button>
        {/* Add more menu options as needed */}
      </Toolbar>
    </AppBar>
  );
};

export default Header;
