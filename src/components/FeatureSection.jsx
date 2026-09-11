import { Gauge, Layers3, WandSparkles } from "lucide-react";
const features = [
  { icon: Gauge, title: "Fast", copy: "Find what you're looking for quickly." },
  {
    icon: Layers3,
    title: "Simple",
    copy: "One clean interface without unnecessary complexity.",
  },
  {
    icon: WandSparkles,
    title: "Powerful",
    copy: "Built to become a complete media platform.",
  },
];
export default function FeatureSection() {
  return (
    <section className="feature-section" id="about">
      <div>
        <span className="section-kicker">BUILT FOR YOUR FLOW</span>
        <h2>
          A better way to
          <br />
          <em>find your media.</em>
        </h2>
        <p>
          Everything you want to explore, organized around the way you actually
          discover.
        </p>
      </div>
      <div className="feature-grid">
        {features.map(({ icon: Icon, title, copy }) => (
          <div className="feature-card" key={title}>
            <Icon size={21} />
            <h3>{title}</h3>
            <p>{copy}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
