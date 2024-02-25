import React from "react";
import { Stack, Typography, IconButton } from "@mui/material";
import { Facebook, Twitter, LinkedIn } from "@mui/icons-material";

const Footer = () => {

  return (
    <footer
      style={{
        padding: "40px 20px",
        backgroundColor:"#000", 
      }}

    >
      <Stack
        justifyContent="center"
        alignItems="center"
        spacing={2}
        sx={{ color: "white" , }}
      >
        <Typography variant="body1" textAlign="center">
          Connect with us:
        </Typography>
        <Stack direction="row" spacing={2}>
          <IconButton color="white" aria-label="Facebook">
            <Facebook sx={{ color: "white" }} />
          </IconButton>
          <IconButton color="white" aria-label="Twitter">
            <Twitter sx={{ color: "white" }} />
          </IconButton>
          <IconButton color="white" aria-label="LinkedIn">
            <LinkedIn sx={{ color: "white" }} />
          </IconButton>
        </Stack>
        <Typography variant="body2" textAlign="center">
          Your go-to source for reliable news and updates. Stay informed with MOVIESHUB.
        </Typography>
        <Typography variant="body2" textAlign="center">
          © {new Date().getFullYear()} MOVIESHUB. All rights reserved.
        </Typography>
      </Stack>
    </footer>
  );
};

export default Footer;