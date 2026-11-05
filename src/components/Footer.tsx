
function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-main">
        <div className="footer-brand">
          <img
            src="https://ezyshopnow.com/images/ezyshopnow-ftr-logo.png"
            alt="EzyShopNow"
            className="footer-logo"
          />

          <p>
            We are an online lifestyle store offering the latest in fashion,
            electronics, and home decor. Our mission is to provide high-quality
            products with exceptional service.
          </p>
        </div>

        <div className="footer-column">
          <h3>Quick Links</h3>
          <a href="#">Decor</a>
          <a href="#">Gift Items</a>
          <a href="#">Candles</a>
          <a href="#">Jewellery</a>
          <a href="#">Wall Decor</a>
        </div>

        <div className="footer-column">
          <h3>Support</h3>
          <a href="#">Your Account</a>
          <a href="#">Shipping Policy</a>
          <a href="#">Returns &amp; Exchanges</a>
          <a href="#">FAQs</a>
        </div>

        <div className="footer-column">
          <h3>Contact Us</h3>
          <a href="#">Contact Us</a>
          <a href="https://ezyshopnow.com/about-us.html">About Us</a>
          <a href="#">Blog</a>
          <a href="tel:+919876862727">+91-9876862727</a>
          <a href="mailto:Support@ezyshopnow.com">
            Support@ezyshopnow.com
          </a>
        </div>

        <div className="footer-newsletter">
          <h3>Stay Updated</h3>
          <p>
            Subscribe to our newsletter to get the latest updates and exclusive
            offers.
          </p>

          <form
            className="newsletter-form"
            onSubmit={(event) => event.preventDefault()}
          >
            <input
              type="email"
              placeholder="Enter your email address"
              aria-label="Email address"
              required
            />
            <button type="submit">Subscribe</button>
          </form>
        </div>
      </div>

      <div className="footer-bottom">
        <p>© 2025 Ezyshopnow Inc. All rights reserved.</p>

        <div className="footer-legal">
          <a href="#">Privacy Policy</a>
          <span>|</span>
          <a href="#">Terms of Service</a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
