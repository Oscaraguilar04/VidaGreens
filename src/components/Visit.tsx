import { useInView } from "../hooks/useInView";

export function Visit() {
  const { ref, isVisible } = useInView<HTMLDivElement>(0.2);

  return (
    <section className="visit" id="visit">
      <div ref={ref} className={`visit__layout reveal${isVisible ? " is-visible" : ""}`}>
        <div className="visit__info">
          <p className="section__eyebrow">Huntington Park</p>
          <h2 className="section__title">Come through for a fresh pour.</h2>
          <p className="section__lede">
            Pickup at the bar, or grab a bottle on your way—pressed that morning, waiting for you.
          </p>

          <dl className="visit__details">
            <div className="visit__detail">
              <dt>Address</dt>
              <dd>
                6120 Pacific Blvd
                <br />
                Huntington Park, CA 90255
              </dd>
            </div>
            <div className="visit__detail">
              <dt>Hours</dt>
              <dd>
                Mon–Sat · 7am–7pm
                <br />
                Sun · 8am–4pm
              </dd>
            </div>
            <div className="visit__detail">
              <dt>Contact</dt>
              <dd>
                (323) 555-0148
                <br />
                hola@vidagreens.com
              </dd>
            </div>
          </dl>

          <div className="hero__actions visit__actions">
            <a className="btn btn--dark" href="mailto:hola@vidagreens.com">
              Order for pickup
            </a>
            <a
              className="btn btn--outline"
              href="https://maps.google.com/?q=Huntington+Park+CA"
              target="_blank"
              rel="noreferrer"
            >
              Get directions
            </a>
          </div>
        </div>

        <div className="visit__media">
          <img
            src="/images/visit-interior.jpg"
            alt="Bright VidaGreens juice bar interior with bottles on the shelf"
            loading="lazy"
          />
        </div>
      </div>
    </section>
  );
}
