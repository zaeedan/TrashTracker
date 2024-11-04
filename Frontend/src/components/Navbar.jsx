import React, { useState, useEffect } from "react";
import { AppBar, Toolbar, Typography, IconButton, Menu, MenuItem, Avatar } from '@mui/material';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <AppBar position="fixed">
      <Toolbar>
        <Typography variant="h6" style={{ flexGrow: 1 }}>
          Trash Tracker
        </Typography>
        <IconButton
          size="small"
          aria-label="home"
          color="inherit"
          component={Link}
          to="/Home"
          style={{ padding: '4px', borderRadius: '5px' }}
        >
          <Typography variant="body1" style={{ color: '#ffffff' }}>Home</Typography>
        </IconButton>
        <IconButton
          size="small"
          aria-label="map"
          color="inherit"
          component={Link}
          to="/Map"
          style={{ padding: '4px', borderRadius: '5px' }}
        >
          <Typography variant="body1" style={{ color: '#ffffff' }}>Map</Typography>
        </IconButton>
        <IconButton
          size="small"
          aria-label="login"
          color="inherit"
          component={Link}
          to="/Login"
          style={{ padding: '4px', borderRadius: '5px' }}
        >
          <Typography variant="body1" style={{ color: '#ffffff' }}>Login</Typography>
        </IconButton>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;