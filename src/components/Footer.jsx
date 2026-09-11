export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-top">
        <a className="logo" href="#top">
          <span className="logo-mark">Z</span>ZOOMALADE
        </a>
        <div className="footer-links">
          <div>
            <strong>Navigate</strong>
            <a href="#top">Home</a>
            <a href="#explore">Explore</a>
            <a href="#about">About</a>
            <a href="mailto:hello@zoomalade.com">Contact</a>
          </div>
          <div>
            <strong>Legal</strong>
            <a href="#privacy">Privacy</a>
            <a href="#terms">Terms</a>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <span>© 2026 Zoomalade. Your media, your way.</span>
        <span>Made for curious minds.</span>
      </div>
    </footer>
  );
}
