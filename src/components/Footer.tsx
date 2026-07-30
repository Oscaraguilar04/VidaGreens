export function Footer() {
  return (
    <footer className="footer">
      <div className="footer__top">
        <div>
          <p className="footer__brand">VidaGreens</p>
          <p className="footer__tag">All-natural cold-pressed juice from Huntington Park.</p>
        </div>
        <nav className="footer__nav" aria-label="Footer">
          <a href="#menu">Menu</a>
          <a href="#craft">Craft</a>
          <a href="#visit">Visit</a>
          <a href="mailto:hola@vidagreens.com">Contact</a>
        </nav>
      </div>
      <div className="footer__bottom">
        <p>© {new Date().getFullYear()} VidaGreens. Pressed with care.</p>
        <p>Huntington Park, California</p>
      </div>
    </footer>
  );
}
