import { useInView } from "../hooks/useInView";

const steps = [
  {
    title: "Source close",
    body: "We buy produce at peak ripeness from growers who keep it clean—no concentrates, no powders.",
  },
  {
    title: "Press cold",
    body: "Hydraulic cold-press keeps nutrients and flavor intact. No heat. No blender foam.",
  },
  {
    title: "Bottle fresh",
    body: "Poured the day it’s made, labeled by hand, and ready for pickup in Huntington Park.",
  },
];

export function Craft() {
  const header = useInView<HTMLDivElement>(0.2);
  const panel = useInView<HTMLDivElement>(0.25);

  return (
    <section className="craft" id="craft">
      <div
        ref={panel.ref}
        className={`craft__panel reveal${panel.isVisible ? " is-visible" : ""}`}
      >
        <p className="craft__panel-label">Our promise</p>
        <p className="craft__panel-quote">If it doesn’t grow, it doesn’t go in the bottle.</p>
      </div>

      <div className="craft__copy">
        <div ref={header.ref} className={`reveal${header.isVisible ? " is-visible" : ""}`}>
          <p className="section__eyebrow">The craft</p>
          <h2 className="section__title">Healthy means honest.</h2>
          <p className="section__lede">
            VidaGreens was built for neighbors who want real juice—bright, all-natural, and made
            without the mystery ingredients.
          </p>
        </div>

        <ol className="craft__steps">
          {steps.map((step, i) => (
            <CraftStep key={step.title} index={i + 1} title={step.title} body={step.body} delay={i * 100} />
          ))}
        </ol>
      </div>
    </section>
  );
}

function CraftStep({
  index,
  title,
  body,
  delay,
}: {
  index: number;
  title: string;
  body: string;
  delay: number;
}) {
  const { ref, isVisible } = useInView<HTMLLIElement>(0.3);

  return (
    <li
      ref={ref}
      className={`craft__step${isVisible ? " is-visible" : ""}`}
      style={{ transitionDelay: isVisible ? `${delay}ms` : "0ms" }}
    >
      <span className="craft__num" aria-hidden="true">
        {index}
      </span>
      <div>
        <h3>{title}</h3>
        <p>{body}</p>
      </div>
    </li>
  );
}
