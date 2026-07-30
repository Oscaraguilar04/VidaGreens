import { useEffect, useState } from "react";

const links = [
  { href: "#menu", label: "Menu" },
  { href: "#craft", label: "Craft" },
  { href: "#visit", label: "Visit" },
];

export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const close = () => setOpen(false);

  return (
    <header className={`nav${scrolled || open ? " nav--scrolled" : ""}`}>
      <a className="nav__brand" href="#top" onClick={close}>
        VidaGreens
      </a>

      <button
        className="nav__toggle"
        type="button"
        aria-label={open ? "Close menu" : "Open menu"}
        aria-expanded={open}
        onClick={() => setOpen((v) => !v)}
      >
        <span />
      </button>

      <nav className={`nav__links${open ? " nav__links--open" : ""}`} aria-label="Primary">
        {links.map((link) => (
          <a key={link.href} href={link.href} onClick={close}>
            {link.label}
          </a>
        ))}
        <a className="nav__cta" href="#visit" onClick={close}>
          Order pickup
        </a>
      </nav>
    </header>
  );
}
