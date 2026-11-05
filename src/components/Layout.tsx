import type { ReactNode, FormEvent } from 'react';
import { Link } from 'react-router-dom';
import { FaSearch, FaPhoneAlt, FaShoppingCart, FaHeart } from 'react-icons/fa';

function Layout({ children }: { children: ReactNode }) {
  const handleSearch = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);
    const searchText = String(formData.get('search') ?? '').trim();

    if (searchText) {
      console.log('Search product:', searchText);
      // Connect your product search logic here.
    }
  };

  return (
    <>
      <nav className="navbar store-navbar">
        {/* Left: Store welcome */}
        <Link to="/" className="navbar-brand store-welcome">
          Welcome to Store
        </Link>

        {/* Center: Search bar */}
        <form className="store-search" onSubmit={handleSearch}>
          <input
            type="search"
            name="search"
            placeholder="Search products..."
            aria-label="Search products"
          />
          <button type="submit" aria-label="Search">
            <FaSearch />
          </button>
        </form>

        {/* Right: Contact and Cart */}
        <div className="store-actions">
          <a
            href="tel:+919876862727"
            className="store-icon"
            aria-label="Contact us"
          >
            <FaPhoneAlt />
           
          </a>
          <Link to="/wishlist" className="store-icon" aria-label="Wishlist">
               <FaHeart />
               
                 </Link>

          <Link to="/cart" className="store-icon" aria-label="Shopping cart">
            <FaShoppingCart />
           
          </Link>
        </div>
      </nav>

      {/* Page content */}
      <main>{children}</main>
    </>
  );
}

export default Layout;