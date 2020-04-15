import React from "react";
import { Navbar } from "./";

export const Layout: React.FC<React.PropsWithChildren<{}>> = ({ children }) => (
  <div>
    <Navbar />
    {children}
  </div>
);
