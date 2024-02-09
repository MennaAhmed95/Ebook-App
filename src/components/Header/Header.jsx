import { AppBar, Toolbar, Typography } from "@mui/material";
import { NavigationLink } from "./NavigationLink";

export const Header = () => {
  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6">Ebook App</Typography>
        <NavigationLink to="/" label="Home" />
        <NavigationLink to="/" label="E-books" />
        <NavigationLink to="#" label="Contact Us" />
      </Toolbar>
    </AppBar>
  );
};
