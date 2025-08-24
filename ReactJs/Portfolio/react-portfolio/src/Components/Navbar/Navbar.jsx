import './Navbar.css';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import menuIcon from '../../../asset/nav/menuIcon.png';
import closeIcon from '../../../asset/nav/closeIcon.png';
import { useState } from 'react';

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="navContainer">
      <div>
        <p className="title">Mano</p>
      </div>

      <div className="menu">
        <img
          src={menuOpen ? closeIcon : menuIcon}
          className="menuToggleIcon"
          onClick={() => setMenuOpen(!menuOpen)}
          alt="menu toggle"
        />
        <ul className={`menuItems ${menuOpen ? 'showMenu' : ''}`}>
          <li>
            <AnchorLink className="Anchor-Link" offset={200} href="#about" onClick={() => setMenuOpen(false)}><p>About</p></AnchorLink>
          </li>
          <li>
            <AnchorLink className="Anchor-Link" offset={100} href="#skill" onClick={() => setMenuOpen(false)}><p>Skills</p></AnchorLink>
          </li>
          <li>
            <AnchorLink className="Anchor-Link" offset={100} href="#projects" onClick={() => setMenuOpen(false)}><p>Projects</p></AnchorLink>
          </li>
          <li>
            <AnchorLink className="Anchor-Link" offset={50} href="#contact" onClick={() => setMenuOpen(false)}><p>Contact</p></AnchorLink>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
