import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Button } from './Button';
import './Navbar.css';

function Navbar() {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  };

  useEffect(() => {
    showButton();
  }, []);

  window.addEventListener('resize', showButton);

  return (
    <>
      <nav className="navbar">
        <div className="navbar-container">
          <Link to="/" className="navbar-logo" onClick={closeMobileMenu}>
            U-Disc <i className="fab fa-typo3"></i>
          </Link>
          <div className="menu-icon" onClick={handleClick}>
            <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
          </div>
          <ul className={click ? 'nav-menu active' : 'nav-menu'}>
            <li className="nav-item">
              <Link to="/" className="nav-links" onClick={closeMobileMenu}>
                Course Info
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/layout"
                className="nav-links"
                onClick={closeMobileMenu}
              >
                Layout
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/course/61944dcba4014a2b54bef362"
                className="nav-links"
                onClick={closeMobileMenu}
              >
                Edit Course
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/layout/61944d9294e421a31db55b0e/edit"
                className="nav-links"
                onClick={closeMobileMenu}
              >
                Edit Layout
              </Link>
            </li>
          </ul>
          {button && <Button buttonStyle="btn--outline">Login</Button>}
        </div>
      </nav>
    </>
  );
}

export default Navbar;
