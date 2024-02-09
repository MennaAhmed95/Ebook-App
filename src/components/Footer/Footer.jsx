// components/Footer.js
import { AppBar, Toolbar, Typography } from "@mui/material";

export const Footer = () => {
  return (
    <AppBar
      position="fixed"
      color="primary"
      style={{
        top: "auto",
        bottom: 0,
      }}
    >
      <Toolbar>
        <Typography variant="body1" color="inherit">
          &copy; 2024 Ebook App. All rights reserved.
        </Typography>
      </Toolbar>
    </AppBar>
  );
};
