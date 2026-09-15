import "./Industries.css";

import {
  HeartPulse,
  GraduationCap,
  Bell,
  Truck,
  Factory,
  ShoppingBag,
  Handshake,
  Building2,
  Shirt,
  Sparkles,
  ArrowRight,
} from "lucide-react";

const industries = [
  {
    icon: HeartPulse,
    title: "Healthcare",
    description:
      "Secure, compliant and efficient solutions for healthcare providers.",
  },
  {
    icon: GraduationCap,
    title: "Education",
    description:
      "Digital solutions that empower institutions and improve learning.",
  },
  {
    icon: Bell,
    title: "Hospitality",
    description:
      "Streamline operations and elevate guest experiences.",
  },
  {
    icon: Truck,
    title: "Logistics",
    description:
      "Optimize routes, tracking and supply chain performance.",
  },
  {
    icon: Factory,
    title: "Manufacturing",
    description:
      "Improve production, quality and operational efficiency.",
  },
  {
    icon: ShoppingBag,
    title: "Retail & Commerce",
    description:
      "Drive sales and deliver seamless shopping experiences.",
  },
  {
    icon: Handshake,
    title: "NGOs & Nonprofits",
    description:
      "Technology that helps you create greater impact and transparency.",
  },
  {
    icon: Building2,
    title: "Enterprise Solutions",
    description:
      "Scalable, secure and future-ready solutions for growing businesses.",
  },
  {
    icon: Shirt,
    title: "Fashion",
    description:
      "Tailored software for fashion and apparel brands.",
  },
];

function Industries() {
  return (
    <section className="industries-section" id="industries">
      <div className="industries-container">
        <header className="industries-header">
          <p className="industries-eyebrow">INDUSTRIES WE SERVE</p>

          <div className="industries-heading-accent" />

          <h2>
            Software built for businesses
            <span>
              across multiple industries<span className="industries-dot">.</span>
            </span>
          </h2>

          <p className="industries-intro">
            Powering growth and efficiency with innovative,
            <span>secure and scalable software solutions.</span>
          </p>
        </header>

        <div className="industries-grid">
          {industries.map((industry, index) => {
            const Icon = industry.icon;

            return (
              <article
                className="industry-card"
                key={industry.title}
                style={{ "--industry-delay": `${index * 60}ms` }}
              >
                <div className="industry-icon">
                  <Icon size={34} strokeWidth={1.7} aria-hidden="true" />
                </div>

                <div className="industry-content">
                  <h3>{industry.title}</h3>
                  <p>{industry.description}</p>
                </div>

                <a
                  href="#contact"
                  className="industry-arrow"
                  aria-label={`Discuss a ${industry.title} software project`}
                >
                  <ArrowRight
                    size={19}
                    strokeWidth={2.2}
                    aria-hidden="true"
                  />
                </a>
              </article>
            );
          })}
        </div>

        <div className="industries-custom">
          <div className="industries-custom-content">
            <div className="industries-custom-icon">
              <Sparkles size={28} strokeWidth={1.8} aria-hidden="true" />
            </div>

            <div className="industries-custom-copy">
              <h3>Need something different?</h3>
              <p>We build custom software solutions.</p>
            </div>
          </div>

          <a href="#contact" className="industries-custom-button">
            Start Your Project
            <ArrowRight size={19} strokeWidth={2.2} aria-hidden="true" />
          </a>
        </div>
      </div>
    </section>
  );
}

export default Industries;