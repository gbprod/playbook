import {
  Navbar as BaseNavbar,
  NavbarDivider,
  NavbarGroup,
  NavbarHeading,
} from "@blueprintjs/core";
import React from "react";

export const Navbar: React.FC<{}> = () => {
  return (
    <BaseNavbar fixedToTop>
      <NavbarGroup>
        <NavbarHeading>Playbook</NavbarHeading>
        <NavbarDivider />
      </NavbarGroup>
    </BaseNavbar>
  );
};
