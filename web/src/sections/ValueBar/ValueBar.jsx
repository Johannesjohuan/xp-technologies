import "./ValueBar.css";

import {
  Blocks,
  RefreshCw,
  ShieldCheck,
  Headset,
  ArrowUpRight,
} from "lucide-react";

const valueItems = [
  {
    icon: Blocks,
    title: "Custom Software Solutions",
    description: "Built around your unique business workflows.",
  },
  {
    icon: RefreshCw,
    title: "System Modernization",
    description: "Upgrade outdated systems for faster performance.",
  },
  {
    icon: ShieldCheck,
    title: "Secure & Scalable",
    description: "Reliable software designed for future growth.",
  },
  {
    icon: Headset,
    title: "24/7 Technical Support",
    description: "Dependable assistance whenever you need it.",
  },
];

function ValueBar() {
  return (
    <section className="value-bar-section">
      <div className="value-bar">
        <div className="value-bar-items">
          {valueItems.map((item, index) => {
            const Icon = item.icon;

            return (
              <article
                className="value-item"
                key={item.title}
                style={{ "--item-delay": `${index * 80}ms` }}
              >
                <div className="value-icon-wrap">
                  <div className="value-icon">
                    <Icon
                      size={20}
                      strokeWidth={1.9}
                      aria-hidden="true"
                    />
                  </div>
                </div>

                <div className="value-content">
                  <h3>{item.title}</h3>
                  <p>{item.description}</p>
                </div>
              </article>
            );
          })}
        </div>

        <div className="value-cta">
          <div className="value-cta-copy">
            <span className="value-cta-label">START A PROJECT</span>

            <p>Ready to transform your business?</p>

            <small>
              Let&apos;s discuss the right software solution for you.
            </small>
          </div>

          <a href="#contact" className="value-cta-button">
            Let&apos;s Talk

            <span className="value-cta-arrow">
              <ArrowUpRight
                size={16}
                strokeWidth={2.2}
                aria-hidden="true"
              />
            </span>
          </a>
        </div>
      </div>
    </section>
  );
}

export default ValueBar;