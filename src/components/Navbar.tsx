import {
  Navbar as BaseNavbar,
  NavbarGroup,
  NavbarHeading,
} from "@blueprintjs/core";
import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.scss";

export const Navbar: React.FC<{}> = () => {
  return (
    <BaseNavbar fixedToTop>
      <NavbarGroup>
        <NavbarHeading>
          <Link to="/">Playbook </Link>
        </NavbarHeading>
      </NavbarGroup>
    </BaseNavbar>
  );
};
