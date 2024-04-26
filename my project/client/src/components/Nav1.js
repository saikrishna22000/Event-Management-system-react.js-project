import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { Link, link } from 'react-router-dom';

export default function ButtonAppBar() {
  return (
    <Box>
        <AppBar position="static"></AppBar>
    
      <AppBar position="static">
        <Toolbar>
          <Link to="/S">Login</Link>
          &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;

          <Link to="/B">Back</Link>
          &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
          <Link to="/Q">Show</Link>
        </Toolbar>
      </AppBar>
    </Box>
  );
}