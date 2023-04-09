import React, { useState } from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import MenuItem from "@mui/material/MenuItem";
import MenuData from "../components/MenuData.json";
import AlertMessage from "./AlertMessage";

// TODO: FUTURE USE BACKEND ENDPOINT TO GENERATE NAVBAR
const menuItems = MenuData;

export default function Navbar() {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [open, setOpen] = useState(false);
  const [errorMessage, setErrorMessage] = React.useState("");

  const handleClose = () => {
    setOpen(false);
  };

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const goTo = (id) => {
    try {
      const section = document.querySelector(`#${id}`);
      section.scrollIntoView({ behavior: 'smooth' });
    } catch (error) {
      console.log(error.message)
      setErrorMessage(error.message);
      setOpen(true);
      setTimeout(() => {
        setOpen(false);
      }, 5000);
    }
  }

  return (
    <AppBar position="static" sx={{ bgcolor: "#000"}}>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Typography
            variant="h6"
            noWrap
            component="a"
            onClick={() => goTo("home")}
            sx={{
              mr: 2,
              display: { xs: "none", md: "flex" },
              fontWeight: 700,
              color: "inherit",
              textDecoration: "none",
              cursor: "pointer",
            }}
          >
            Edison Duong
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
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
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: "block", md: "none" },
              }}
            >
              {menuItems.map((menu, key) => (
                <MenuItem key={key} onClick={() => goTo(menu.link)}>
                  <Typography textAlign="center">{menu.name}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
          <Typography
            variant="h5"
            noWrap
            component="a"
            onClick={() => goTo("home")}
            sx={{
              mr: 2,
              display: { xs: "flex", md: "none" },
              flexGrow: 1,
              fontFamily: "monospace",
              fontWeight: 700,
              color: "inherit",
              textDecoration: "none",
              cursor: "pointer",
            }}
          >
            Edison Duong
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
            {menuItems.map((menu, key) => (
              <Button
                key={key}
                onClick={() => goTo(menu.link)}
                sx={{ my: 2, color: "white", display: "block" }}
              >
                {menu.name}
              </Button>
            ))}
          </Box>
          <div>
            {open && (
              <AlertMessage
                severity="error"
                message={errorMessage}
                onClose={handleClose}
              />
            )}
          </div>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
