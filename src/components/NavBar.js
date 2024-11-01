import React from "react";

function NavBar() {
  const links = ["home", "about", "projects"];

  return( <nav>{/* display an <a> tag for each link here */}
          <ul>
      {links.map((link) => (
        <li key={link}>
          <a href={`#${link}`}>{link}</a>
        </li>
      ))}
    </ul>
        </nav>
  );
}

export default NavBar;
