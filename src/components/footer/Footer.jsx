import React from "react";
import { Stack, Typography, IconButton } from "@mui/material";
import { Facebook, Twitter, LinkedIn } from "@mui/icons-material";
import { Link } from "react-router-dom";
const Footer = () => {
  return (
    <footer
      style={{
        padding: "40px 20px",
        backgroundColor: "#000",
      }}
    >
      <Stack
        justifyContent="center"
        alignItems="center"
        spacing={2}
        sx={{ color: "white" }}
      >
        <Typography variant="body1" textAlign="center">
          Connect with us:
        </Typography>
        <Stack direction="row" spacing={2}>
          <Link
            to={
              "https://www.facebook.com/profile.php?id=100036740010945&mibextid=rS40aB7S9Ucbxw6v"
            }
            target="_blank"
          >
            <IconButton color="white" aria-label="Facebook">
              <Facebook sx={{ color: "white" }} />
            </IconButton>
          </Link>

         
          <Link
            target="_blank"
            to="https://www.linkedin.com/in/ashutosh-kumar-7ba1a6211/"
          >
            <IconButton color="white" aria-label="LinkedIn">
              <LinkedIn sx={{ color: "white" }} />
            </IconButton>
          </Link>
        </Stack>
        <Typography variant="body2" textAlign="center">
          Your go-to source for reliable news and updates. Stay informed with
          MOVIESHUB.
        </Typography>
        <Typography variant="body2" textAlign="center">
          © {new Date().getFullYear()} MOVIESHUB. All rights reserved.
        </Typography>
      </Stack>
    </footer>
  );
};

export default Footer;
