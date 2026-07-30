export function Hero() {
  return (
    <section className="hero" id="top" aria-label="VidaGreens hero">
      <div className="hero__media">
        <img
          src="/images/hero-juice.jpg"
          alt="Fresh green cold-pressed juice poured among kale, cucumber, apple, and lemon"
          width={1920}
          height={1080}
          fetchPriority="high"
        />
        <div className="hero__veil" aria-hidden="true" />
      </div>

      <div className="hero__content">
        <h1 className="hero__brand">VidaGreens</h1>
        <p className="hero__headline">All-natural juice, pressed in Huntington Park.</p>
        <p className="hero__support">
          Whole produce. Cold-pressed daily. Nothing added but care.
        </p>
        <div className="hero__actions">
          <a className="btn btn--primary" href="#menu">
            Explore the menu
          </a>
          <a className="btn btn--ghost" href="#visit">
            Visit the bar
          </a>
        </div>
      </div>
    </section>
  );
}
