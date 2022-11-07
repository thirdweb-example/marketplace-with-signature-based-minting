import { useAddress, useDisconnect, ConnectWallet } from "@thirdweb-dev/react";
import * as React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Link from "next/link";
import styles from "../styles/Theme.module.css";
import Header from "./Header";


const drawerWidth = 240;

function DrawerAppBar(props) {
  const address = useAddress();
  const disconnectWallet = useDisconnect();
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center'}}>
<Link href="/" passHref>
          <img
            src={`/mmlogonobg.svg`}
            alt="Mintmatica Logo"
            width={144}
          />
        </Link>
      <Divider /><br></br>
      <Link href="/listings" passHref>
          Listings
        </Link>
        <Divider /><br></br>
        <ConnectWallet accentColor="#041635" colorMode="dark"/>
    </Box>
  );

  const container = window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: 'flex' }}>
      <AppBar component="nav" sx={{ backgroundColor: '#041635'}}>
        <Toolbar variant="regular" disableGutters={false} className={Header} sx={{height: 72, width: 100}}>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: 'none' } }}
          >
            <MenuIcon />
          </IconButton>
          <Link href="/" passHref>
          <img
            src={`/mmlogonobg.svg`}
            alt="Mintmatica Logo"
            width={144}
          />
        </Link>
          <Box >
          <Link href="/listings" passHref className={styles.headerItem}>
          Listings
        </Link>
        </Box>
          
        <ConnectWallet accentColor="#041635" colorMode="dark" className={styles.headerItem.right}/>
       
        </Toolbar>

      </AppBar>
      <Box component="nav">
        <Drawer
          container={container}
          variant="persistent"
          anchor="left"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: 'block', sm: 'none' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth, backgroundColor: '#041635' },
          }}
        >
          {drawer}
        </Drawer>
      </Box>

      <Toolbar />
    </Box>
  );
}

DrawerAppBar.propTypes = {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func,
};

export default DrawerAppBar;