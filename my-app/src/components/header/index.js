import { useState, useEffect } from "react";
import "./index.css";

function Header() {
  return (
    <div>
      <NavigationArrows />
      <Dropdown />
    </div>
  );
}

export default Header;
