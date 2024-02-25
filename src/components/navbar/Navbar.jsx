import React from "react";
import {
  Typography,
  Stack,
  Box,
  Button,
  ButtonGroup,
  IconButton,
  Drawer,
  useMediaQuery,
  List,
  ListItem,
  Hidden,
} from "@mui/material";
import { Link } from "react-router-dom";
import MenuIcon from "@mui/icons-material/Menu";


const Navbar = () => {
  // Check if the screen width is smaller than 768px
  const isSmallScreen = useMediaQuery("(max-width:768px)");

  // State to manage the drawer open/close status
  const [drawerOpen, setDrawerOpen] = React.useState(false);

  // Open the drawer
  const handleDrawerOpen = () => {
    setDrawerOpen(true);
  };

  // Close the drawer
  const handleDrawerClose = () => {
    setDrawerOpen(false);
  };

  // Handle click on a mobile menu item
  const handleDrawerItemClick = () => {
    // Close the drawer when a mobile menu item is clicked
    handleDrawerClose();
  };

  return (
    <div>
      {/* Top navigation stack */}
      <Stack
        backgroundColor="#000"
        direction={"row"}
        alignItems={"center"}
        padding={"12px 24px"}
        justifyContent={"space-between"}
        sx={{ color: "white",position:"fixed",width:"100%",zIndex:"100" }}
      >
        {/* Brand/logo */}
        <Box>
          <Link to="/">
            <Button
              sx={{ color: "white", letterSpacing: ".2em", fontWeight: "bold" }}
              size="medium"
            >
              MoviesHub
            </Button>
          </Link>
        </Box>

        {/* Navigation buttons (visible on larger screens) */}
        <Hidden smDown>
          <Box>
            <ButtonGroup>
              <Link to="/">
                <Button sx={{ color: "#f3e5f5" }} variant="none">
                  Home
                </Button>
              </Link>

              <Link to="/about">
                <Button sx={{ color: "#f3e5f5" }} variant="none">
                  about
                </Button>
              </Link>

              <Link to="/movies">
                <Button sx={{ color: "#f3e5f5" }} variant="none">
                  Movies
                </Button>
              </Link>
            </ButtonGroup>
          </Box>
        </Hidden>

        {/* Mobile menu button (visible on smaller screens) */}
        {isSmallScreen && (
          <Box>
            <IconButton
              sx={{ color: "white" }}
              aria-label="open drawer"
              edge="end"
              onClick={handleDrawerOpen}
            >
              <MenuIcon />
            </IconButton>
            {/* Drawer for mobile navigation */}
            <Drawer
              anchor="left"
              padding="20 30px"
              open={drawerOpen}
              onClose={handleDrawerClose}
              backgroundColor="seconday"
            >
              <List sx={{ backgroundColor: "#000", height: "100%" }}>
                {/* Mobile navigation items */}
                <Link to="/" style={{ textDecoration: "none" }}>
                  <ListItem
                    button
                    justifyContent="center"
                    onClick={handleDrawerItemClick}
                  >
                    <Typography
                      margin={"0 20px"}
                      variant="overline"
                      sx={{ color: "white" }}
                    >
                      home
                    </Typography>
                  </ListItem>
                </Link>
                <Link to="/about" style={{ textDecoration: "none" }}>
                  <ListItem
                    button
                    justifyContent="center"
                    onClick={handleDrawerItemClick}
                    sx={{ color: "white" }}
                  >
                    <Typography margin={"0 20px"} variant="overline">
                      about
                    </Typography>
                  </ListItem>
                </Link>
                <Link to="/movies" style={{ textDecoration: "none" }}>
                  <ListItem
                    button
                    justifyContent="center"
                    onClick={handleDrawerItemClick}
                    sx={{ color: "white" }}
                  >
                    <Typography margin={"0 20px"} variant="overline">
                      movies
                    </Typography>
                  </ListItem>
                </Link>

                {/* Add more Link components for other pages */}
              </List>
            </Drawer>
          </Box>
        )}
      </Stack>
    </div>
  );
};

export default Navbar;
