import { useAddress, useDisconnect, ConnectWallet } from "@thirdweb-dev/react";
import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import Link from "next/link";


function ResponsiveAppBar() {
  const address = useAddress();
  const disconnectWallet = useDisconnect();
  const [anchorElNav, setAnchorElNav] = React.useState(null);


  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <AppBar position="sticky" sx={{backgroundColor:'#041635', alignitems: 'center'}}>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <p>
            <Link href="/" passHref>
          <img
            src={`/mmlogonobg.svg`}
            alt="Mintmatica Logo"
            width={122}
          />
        </Link>
        </p>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'center',
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'center',
                horizontal: 'left',
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: 'block', md: 'none' }, color:'#041635', alignContent:'center', verticalAlign:'center',
              }}
            >
              <MenuItem>
              <Link href="/listings" passHref>
                 Listings
              </Link>
              </MenuItem>

            <Box sx={{ flexGrow: 0, fontSize: '.7rem', letterSpacing: 'normal', width: '90%'}}>
            <ConnectWallet colorMode="light" />
            </Box>

            </Menu>
          </Box>
          
          <Box sx={{ flexGrow: 1, verticalAlign:'center', margin:'2px', padding:'2px', alignContent:'center', display: { xs: 'none', md: 'flex' } }}>

          <Link href="/" passHref>
          <img
            src={`/mmlogonobg.svg`}
            alt="Mintmatica Logo"
            width={122}
          />
        </Link>

       
              <MenuItem>
              <Link href="/listings" passHref>
                 Listings
              </Link>
              </MenuItem>
              
          </Box>
          
          <Box sx={{ flexGrow: 0, fontSize: '.7rem', letterSpacing: 'normal', }}>
            <ConnectWallet accentColor="#041635" colorMode="dark" />
            </Box>
          
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default ResponsiveAppBar;