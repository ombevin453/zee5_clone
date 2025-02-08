import React, { useState } from "react";
import { AppBar, Toolbar, Box, Button, Menu, MenuItem, IconButton, InputBase, Drawer, List, ListItem, useMediaQuery, useTheme } from "@mui/material";
import { Search, Menu as MenuIcon, Language as LanguageIcon } from "@mui/icons-material";
import { motion } from "framer-motion";
import "./../styles/navbar.css";

const Navbar = () => {
  const [moviesAnchor, setMoviesAnchor] = useState(null);
  const [tvAnchor, setTvAnchor] = useState(null);
  const [searchOpen, setSearchOpen] = useState(false);
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [languageAnchor, setLanguageAnchor] = useState(null);

  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const isTablet = useMediaQuery(theme.breakpoints.between("sm", "md"));

  const handleMoviesOpen = (event) => setMoviesAnchor(event.currentTarget);
  const handleTvOpen = (event) => setTvAnchor(event.currentTarget);
  const handleLanguageOpen = (event) => setLanguageAnchor(event.currentTarget);
  const handleClose = () => {
    setMoviesAnchor(null);
    setTvAnchor(null);
    setLanguageAnchor(null);
  };

  const toggleDrawer = () => {
    setDrawerOpen(!drawerOpen);
  };

  const menuItems = (
    <>
      <Button color="inherit" className="Button" onClick={handleMoviesOpen}>Movies</Button>
      <Menu anchorEl={moviesAnchor} open={Boolean(moviesAnchor)} onClose={handleClose}>
        <MenuItem onClick={handleClose}>Action</MenuItem>
        <MenuItem onClick={handleClose}>Comedy</MenuItem>
        <MenuItem onClick={handleClose}>Drama</MenuItem>
        <MenuItem onClick={handleClose}>Horror</MenuItem>
        <MenuItem onClick={handleClose}>Thriller</MenuItem>
      </Menu>

      <Button color="inherit" className="Button" onClick={handleTvOpen}>TV Shows</Button>
      <Menu anchorEl={tvAnchor} open={Boolean(tvAnchor)} onClose={handleClose}>
        <MenuItem onClick={handleClose}>Reality</MenuItem>
        <MenuItem onClick={handleClose}>Drama</MenuItem>
        <MenuItem onClick={handleClose}>Kids</MenuItem>
        <MenuItem onClick={handleClose}>Sports</MenuItem>
        <MenuItem onClick={handleClose}>News</MenuItem>
      </Menu>

      <Button color="inherit" className="Button">Plans</Button>
      <Button color="inherit" className="Button">Sports</Button>
    </>
  );

  const mobileMenuItems = (
    <List>
      <ListItem button onClick={handleMoviesOpen}>Movies</ListItem>
      <ListItem button onClick={handleTvOpen}>TV Shows</ListItem>
      <ListItem button>Live Shows</ListItem>
      <ListItem button>Sports</ListItem>
      <ListItem button>Plans</ListItem>
      <ListItem button>Sign Up</ListItem>
      <ListItem button>Log In</ListItem>
    </List>
  );

  return (
    <AppBar position="sticky" sx={{ backgroundColor: "#1A0033" }}>
      <Toolbar sx={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
        {/* Logo */}
        <Box component="img" src="https://www.zee5.com/images/ZEE5_logo.svg?ver=4.17.0" alt="ZEE5 Logo" className="logo-img" />

        {/* Mobile view */}
        {isMobile ? (
          <>
            {/* Search, Language Icon, and Menu Icon */}
            <Box className="search-box">
              {searchOpen && (
                <motion.div initial={{ width: 0 }} animate={{ width: "150px" }} exit={{ width: 0 }}>
                  <InputBase placeholder="Search..." sx={{ background: "#fff", borderRadius: "5px", padding: "5px" }} />
                </motion.div>
              )}
              <IconButton onClick={() => setSearchOpen(!searchOpen)} className="MuiIconButton-root">
                <Search sx={{ color: 'white' }} />
              </IconButton>

              {/* Language Dropdown */}
              <IconButton onClick={handleLanguageOpen} className="MuiIconButton-root">
                <LanguageIcon sx={{ color: 'white' }} />
              </IconButton>
              <Menu
                anchorEl={languageAnchor}
                open={Boolean(languageAnchor)}
                onClose={handleClose}
                sx={{ zIndex: 9999 }} // Ensure the menu is above other elements
              >
                <MenuItem onClick={handleClose}>English</MenuItem>
                <MenuItem onClick={handleClose}>Hindi</MenuItem>
                <MenuItem onClick={handleClose}>Tamil</MenuItem>
                <MenuItem onClick={handleClose}>Telugu</MenuItem>
              </Menu>

              <IconButton onClick={toggleDrawer} className="MuiIconButton-root">
                <MenuIcon sx={{ color: 'white' }} />
              </IconButton>
            </Box>

            {/* Drawer for mobile menu */}
            <Drawer anchor="right" open={drawerOpen} onClose={toggleDrawer}>
              <Box className="Drawer">
                {mobileMenuItems}
              </Box>
            </Drawer>
          </>
        ) : (
          /* Desktop view */
          <>
            {/* Navigation Links */}
            <Box className="MenuItems">
              {menuItems}
            </Box>

            {/* Language and Sign Up Buttons */}
            <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
              {/* Language Dropdown */}
              <IconButton onClick={handleLanguageOpen} className="MuiIconButton-root">
                <LanguageIcon sx={{ color: 'white' }} />
              </IconButton>
              <Menu anchorEl={languageAnchor} open={Boolean(languageAnchor)} onClose={handleClose}>
                <MenuItem onClick={handleClose}>English</MenuItem>
                <MenuItem onClick={handleClose}>Hindi</MenuItem>
                <MenuItem onClick={handleClose}>Tamil</MenuItem>
                <MenuItem onClick={handleClose}>Telugu</MenuItem>
              </Menu>

              {/* Sign Up Button */}
              <Button variant="outlined" color="inherit" className="Button">Sign Up</Button>

              {/* Search Input */}
              {searchOpen && (
                <motion.div initial={{ width: 0 }} animate={{ width: "200px" }} exit={{ width: 0 }}>
                  <InputBase placeholder="Search..." sx={{ background: "#fff", borderRadius: "5px", padding: "5px" }} />
                </motion.div>
              )}
              <IconButton onClick={() => setSearchOpen(!searchOpen)} className="MuiIconButton-root">
                <Search sx={{ color: 'white' }} />
              </IconButton>

              {/* Buy Plan Button */}
              <Button variant="contained" sx={{ bgcolor: "purple" }}>Buy Plan</Button>
            </Box>
          </>
        )}
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
