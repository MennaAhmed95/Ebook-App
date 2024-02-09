import { Link as RouterLink } from "react-router-dom";
import { Link } from "@mui/material";

export const NavigationLink = ({ to, label }) => (
  <Link
    component={RouterLink}
    to={to}
    color="inherit"
    style={{ textDecoration: "none", marginLeft: "1rem" }}
  >
    {label}
  </Link>
);
