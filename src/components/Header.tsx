
import { Link } from 'react-router-dom';
import '../App.css';

function Header() {
  return (
    <header className="site-header">
      <div className="header-container">
        <Link to="/" className="header-logo">
          <img
            src="https://ezyshopnow.com/images/ezyshopnow-logo.png"
            alt="EzyShopNow"
          />
        </Link>

        <nav className="header-nav">
          <Link to="/">Collections</Link>
          <Link to="/">Decor</Link>
          <Link to="/">Gift Items</Link>
          <Link to="/">Candles</Link>
          <Link to="/">Jewellery</Link>
          <Link to="/">Wall Decor</Link>
          <Link to="/login">Login</Link>
          <Link to="/register">Register</Link>
        </nav>
      </div>
    </header>
  );
}

export default Header;
