import { juices } from "../data/juices";
import { useInView } from "../hooks/useInView";

function JuiceRow({
  juice,
  delay,
}: {
  juice: (typeof juices)[number];
  delay: number;
}) {
  const { ref, isVisible } = useInView<HTMLElement>(0.18);

  return (
    <article
      ref={ref}
      className={`juice${isVisible ? " is-visible" : ""}`}
      style={{ transitionDelay: isVisible ? `${delay}ms` : "0ms" }}
    >
      <div className="juice__visual">
        <img src={juice.image} alt={`${juice.name} cold-pressed juice bottle`} loading="lazy" />
        <span className="juice__swatch" style={{ background: juice.swatch }} aria-hidden="true" />
      </div>
      <div className="juice__meta">
        <h3 className="juice__name">{juice.name}</h3>
        <p className="juice__tag">{juice.tag}</p>
        <p className="juice__desc">{juice.description}</p>
        <ul className="juice__ingredients">
          {juice.ingredients.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </div>
    </article>
  );
}

export function Menu() {
  const { ref, isVisible } = useInView<HTMLDivElement>(0.25);

  return (
    <section className="section menu" id="menu">
      <div ref={ref} className={`section__header reveal${isVisible ? " is-visible" : ""}`}>
        <p className="section__eyebrow">The press</p>
        <h2 className="section__title">Four juices. Zero shortcuts.</h2>
        <p className="section__lede">
          Every bottle starts with whole fruit and vegetables—washed, cut, and cold-pressed the same
          day you drink it.
        </p>
      </div>

      <div className="juice-list">
        {juices.map((juice, i) => (
          <JuiceRow key={juice.id} juice={juice} delay={i * 80} />
        ))}
      </div>
    </section>
  );
}
