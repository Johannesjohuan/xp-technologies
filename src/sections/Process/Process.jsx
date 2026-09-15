import "./Process.css";

import {
  Search,
  ClipboardList,
  Code2,
  Rocket,
  Headphones,
  Users2,
  ArrowRight,
} from "lucide-react";

const processSteps = [
  {
    number: "01",
    icon: Search,
    title: "Discovery",
    description:
      "We take time to understand your business, goals, and challenges before proposing the right solution.",
  },
  {
    number: "02",
    icon: ClipboardList,
    title: "Planning",
    description:
      "We define the project scope, architecture, timeline, and technology stack that fits your needs.",
  },
  {
    number: "03",
    icon: Code2,
    title: "Development",
    description:
      "Our engineers build secure, scalable, and user-friendly software tailored to your requirements.",
  },
  {
    number: "04",
    icon: Rocket,
    title: "Deployment",
    description:
      "After thorough testing, we launch your solution safely with minimal disruption to your operations.",
  },
  {
    number: "05",
    icon: Headphones,
    title: "Support",
    description:
      "We provide ongoing maintenance, updates, and technical support as your business evolves.",
  },
];

function ProcessCard({ step, index }) {
  const Icon = step.icon;

  return (
    <article
      className={`process-card process-card-${index + 1}`}
      style={{ "--process-delay": `${index * 90}ms` }}
    >
      <span className="process-number" aria-hidden="true">
        {step.number}
      </span>

      <div className="process-card-top-line" aria-hidden="true">
        <span />
      </div>

      <div className="process-card-content">
        <div className="process-icon">
          <Icon size={30} strokeWidth={1.9} aria-hidden="true" />
        </div>

        <div className="process-text">
          <h3>{step.title}</h3>
          <span className="process-title-line" aria-hidden="true" />
          <p>{step.description}</p>
        </div>
      </div>
    </article>
  );
}

function Process() {
  return (
    <section className="process-section" id="process">
      <div className="process-container">
        <header className="process-header">
          <p className="process-eyebrow">HOW WE WORK</p>

          <h2>
            Our Process<span>.</span>
          </h2>

          <p className="process-intro">
            From idea to deployment, we’ve got you covered.
            <span>
              A simple, transparent process that delivers results.
            </span>
          </p>
        </header>

        <div className="process-desktop-flow">
          <div className="process-row process-row-top">
            <ProcessCard step={processSteps[0]} index={0} />

            <div className="process-arrow process-arrow-horizontal">
              <ArrowRight size={34} strokeWidth={1.6} aria-hidden="true" />
            </div>

            <ProcessCard step={processSteps[1]} index={1} />

            <div className="process-arrow process-arrow-horizontal">
              <ArrowRight size={34} strokeWidth={1.6} aria-hidden="true" />
            </div>

            <ProcessCard step={processSteps[2]} index={2} />
          </div>

          <div className="process-connector-wrap" aria-hidden="true">
            <div className="process-connector-line" />
          </div>

          <div className="process-row process-row-bottom">
            <ProcessCard step={processSteps[3]} index={3} />

            <div className="process-arrow process-arrow-horizontal">
              <ArrowRight size={34} strokeWidth={1.6} aria-hidden="true" />
            </div>

            <ProcessCard step={processSteps[4]} index={4} />
          </div>
        </div>

        <div className="process-mobile-flow">
          {processSteps.map((step, index) => (
            <div className="process-mobile-item" key={step.number}>
              <ProcessCard step={step} index={index} />

              {index < processSteps.length - 1 && (
                <div className="process-mobile-connector" aria-hidden="true">
                  <span />
                  <ArrowRight size={22} strokeWidth={1.7} />
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="process-banner">
          <div className="process-banner-content">
            <div className="process-banner-icon">
              <Users2 size={31} strokeWidth={1.8} aria-hidden="true" />
            </div>

            <div className="process-banner-copy">
              <h3>Ready to build something together?</h3>

              <p>
                Let’s bring your ideas to life with the right technology and
                the right team.
              </p>
            </div>
          </div>

          <div className="process-banner-wave" aria-hidden="true">
            <span className="process-wave-one" />
            <span className="process-wave-two" />
            <span className="process-wave-three" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Process;