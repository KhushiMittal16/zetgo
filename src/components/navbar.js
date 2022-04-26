import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { textAlign } from '@mui/system';
import '../CSS/main.css'

export default function ButtonAppBar() {
  return (
    <Box sx={{ flexGrow: 1}}>
      <AppBar position="static" sx={{bgcolor:"white"}}>
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1, color:"#315680", fontFamily:"Nexa Bold", fontSize:"260%", fontWeight:"700"}}>
            Zetgo
          </Typography>
          {/* <Button color="inherit">Login</Button> */}
          <div className='iconbtn'>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          </div> 
        </Toolbar>
      </AppBar>
    </Box>
  );
}
