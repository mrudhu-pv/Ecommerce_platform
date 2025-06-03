import React, { useContext, useState } from 'react';
import Styles from '../Styles/Header.module.css';
import { CartContext } from '../Cart/CartContext';
import { Link } from 'react-router-dom';

function Header({ onSearch }) {
  const { cartCount } = useContext(CartContext);
  const [menuOpen, setMenuOpen] = useState(false);

  const handleSearch = (e) => {
    onSearch(e.target.value);
  };

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const navLinks = [
    { label: 'Home', path: '/' },
    { label: 'About Us', path: '/about' },
    { label: 'Contact Us', path: '/contact' },
    { label: 'Products', path: '/products' },
  ];

  return (
    <nav className={Styles.header}>
      <div className={Styles.navContainer}>
        <div className={Styles.logo}>
          <Link to="/">MyStore</Link>
        </div>

        {/* Navigation Links */}
        <ul className={`${Styles.navLinks} ${menuOpen ? Styles.open : ''}`}>
          {navLinks.map((link) => (
            <li key={link.path}>
              <Link to={link.path} onClick={() => setMenuOpen(false)}>
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        {/* Right Section: Search & Cart */}
        <div className={Styles.navRight}>
          <form className={Styles.searchForm}>
            <input
              type="search"
              placeholder="Search..."
              onChange={handleSearch}
              className={Styles.searchInput}
            />
          </form>

          <Link to="/cart" className={Styles.cartIcon}>
            <i className="bi bi-cart2 fs-3"></i>
            {cartCount > 0 && <span className={Styles.cartCount}>{cartCount}</span>}
          </Link>

          {/* Mobile Menu Toggle */}
          <button className={Styles.menuToggle} onClick={toggleMenu}>
            ☰
          </button>
        </div>
      </div>
    </nav>
  );
}

export default Header;
