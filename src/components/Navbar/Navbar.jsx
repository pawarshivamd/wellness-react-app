import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import {
  Box,
  Button,
  Container
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";

import { Img } from "../../ui";
import { Logo } from "../../assets";

const navLinks = [
  { path: "/", label: "Home" },
  { path: "/about", label: "About" },
  { path: "/service", label: "Service" },
  { path: "/portfolio", label: "Portfolio" },
  { path: "/blog", label: "Blogs" },
  { path: "/pricing", label: "Pricing" },
];

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);
  const [fixedNavbar, setFixedNavbar] = useState(false);

  const toggleMenu = () => setShowMenu(!showMenu);

  const handleNavLinkClick = () => {
    if (showMenu) setShowMenu(false);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  useEffect(() => {
    const handleScroll = () => {
      setFixedNavbar(window.scrollY > 100);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className={`main-navbar ${fixedNavbar ? "fixed-navbar" : ""}`}>
      <Container>
        <Box display="flex" justifyContent="space-between" alignItems="center">
          <Box>
            <Img src={Logo} alt="logo" className="logo-nav" />
          </Box>
          <Box className="menubar" onClick={toggleMenu}>
            <MenuIcon className="menu-icon" />
          </Box>
          <Box
            className={`menun-section ${showMenu ? "menu-visible" : "menu-hidden"}`}
          >
            <ul className="list-group">
              {navLinks.map((link) => (
                <li className="list-item" key={link.path}>
                  <NavLink
                    to={link.path}
                    className="list-link"
                    onClick={handleNavLinkClick}
                  >
                    {link.label}
                  </NavLink>
                </li>
              ))}

              <li className="list-item login-section-ul">
                <Button
                  variant="contained"
                  component={NavLink}
                  to="/contact"
                  className="login-btn"
                  onClick={handleNavLinkClick}
                >
                  Contact
                </Button>
              </li>
            </ul>
          </Box>
          <Box className="login-section">
            <Button
              variant="contained"
              component={NavLink}
              to="/contact"
              onClick={handleNavLinkClick}
              className="login-btn"
            >
             Contact
            </Button>
          </Box>
        </Box>
      </Container>
    </nav>
  );
};

export default Navbar;
