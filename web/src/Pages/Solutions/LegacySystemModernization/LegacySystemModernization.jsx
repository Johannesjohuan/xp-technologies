import "./LegacySystemModernization.css";
import { Helmet } from "react-helmet-async";

import Navbar from "../../../components/layout/Navbar/Navbar";
import Footer from "../../../sections/Footer/Footer";

function LegacySystemModernization() {
  const legacyItems = [
    {
      icon: "bi-server",
      title: "Outdated Technology",
      text: "Hard to maintain",
    },
    {
      icon: "bi-diagram-2",
      title: "Siloed Systems",
      text: "Disconnected data",
    },
    {
      icon: "bi-file-earmark-text",
      title: "Manual Processes",
      text: "Time consuming",
    },
    {
      icon: "bi-bar-chart",
      title: "Limited Scalability",
      text: "Hard to grow",
    },
    {
      icon: "bi-shield-x",
      title: "Security Risks",
      text: "Vulnerable systems",
    },
  ];

  const modernItems = [
    {
      icon: "bi-cloud",
      title: "Modern Technology",
      text: "Easy to maintain",
    },
    {
      icon: "bi-share",
      title: "Integrated Systems",
      text: "Connected data",
    },
    {
      icon: "bi-gear",
      title: "Automated Workflows",
      text: "Higher efficiency",
    },
    {
      icon: "bi-bar-chart-line",
      title: "Scalable Architecture",
      text: "Ready to grow",
    },
    {
      icon: "bi-shield-check",
      title: "Enhanced Security",
      text: "Secure & compliant",
    },
  ];

  const capabilities = [
    {
      icon: "bi-layers",
      title: "Application Modernization",
      text: "Transform legacy applications into modern, scalable and maintainable solutions.",
    },
    {
      icon: "bi-database",
      title: "Database Migration",
      text: "Migrate legacy databases safely with zero data loss and minimal downtime.",
    },
    {
      icon: "bi-cloud-arrow-up",
      title: "Cloud Migration",
      text: "Move to the cloud for better performance, reliability and cost efficiency.",
    },
    {
      icon: "bi-diagram-3",
      title: "API & System Integration",
      text: "Connect legacy systems with modern applications through secure APIs.",
    },
    {
      icon: "bi-window",
      title: "UI/UX Modernization",
      text: "Modernize user interfaces for better usability and improved experiences.",
    },
    {
      icon: "bi-shield-check",
      title: "Performance & Security Upgrades",
      text: "Boost performance, strengthen security and ensure compliance at every layer.",
    },
  ];

  const approach = [
    {
      number: "01",
      icon: "bi-search",
      title: "Assess",
      text: "We evaluate your current systems, architecture and business needs.",
    },
    {
      number: "02",
      icon: "bi-clipboard-data",
      title: "Plan",
      text: "We design a modernization roadmap tailored to your goals.",
    },
    {
      number: "03",
      icon: "bi-code-slash",
      title: "Modernize",
      text: "We refactor, rebuild or re-architect components for modern platforms.",
    },
    {
      number: "04",
      icon: "bi-cloud-upload",
      title: "Migrate",
      text: "We migrate data and applications securely with minimal disruption.",
    },
    {
      number: "05",
      icon: "bi-check2-square",
      title: "Test",
      text: "We ensure quality, performance and security through rigorous testing.",
    },
    {
      number: "06",
      icon: "bi-rocket-takeoff",
      title: "Launch",
      text: "We deploy, monitor and support for a smooth transition to the future.",
    },
  ];

  return (
    <>
      <Helmet>
        <title>
          Legacy System Modernization Services | XP Technologies
        </title>

        <meta
          name="description"
          content="XP Technologies modernizes legacy systems through application modernization, database migration, cloud migration, API integration, UI/UX modernization, performance optimization and security upgrades."
        />

        <meta name="robots" content="index, follow" />

        <link
          rel="canonical"
          href="https://www.xptechnologies.com/solutions/legacy-system-modernization"
        />

        <meta
          property="og:title"
          content="Legacy System Modernization | XP Technologies"
        />

        <meta
          property="og:description"
          content="Modernize outdated applications, infrastructure and business systems with secure, scalable and future-ready technology."
        />

        <meta property="og:type" content="website" />

        <meta
          property="og:url"
          content="https://www.xptechnologies.com/solutions/legacy-system-modernization"
        />

        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            name: "Legacy System Modernization",
            description:
              "Legacy system modernization services including application modernization, database migration, cloud migration, API integration, UI/UX modernization, performance optimization and security upgrades.",
            provider: {
              "@type": "Organization",
              name: "XP Technologies",
              url: "https://www.xptechnologies.com",
            },
            serviceType: "Legacy System Modernization",
          })}
        </script>
      </Helmet>

      <Navbar />

      <main className="legacy-page">
        <section className="legacy-hero">
          <div className="container">
            <nav className="legacy-breadcrumb" aria-label="Breadcrumb">
              <a href="/">Home</a>
              <i className="bi bi-chevron-right"></i>
              <a href="/solutions">Solutions</a>
              <i className="bi bi-chevron-right"></i>
              <span>Legacy System Modernization</span>
            </nav>

            <div className="legacy-hero-grid">
              <div className="legacy-copy">
                <span className="legacy-label">
                  LEGACY SYSTEM MODERNIZATION
                </span>

                <h1>
                  Modernize Old Systems.
                  <br />
                  Build for What&apos;s Next.
                </h1>

                <p>
                  Upgrade outdated applications, infrastructure and
                  business systems without losing the processes and data
                  your organization depends on.
                </p>

                <div className="legacy-actions">
                  <a
                    href="#legacy-contact"
                    className="legacy-primary-btn"
                  >
                    Modernize Your System
                    <i className="bi bi-arrow-right"></i>
                  </a>

                  <a
                    href="#legacy-contact"
                    className="legacy-secondary-btn"
                  >
                    Talk to an Expert
                    <i className="bi bi-chat-dots"></i>
                  </a>
                </div>
              </div>

              <div className="legacy-modernization-visual">
                <div className="legacy-side legacy-before">
                  <div className="legacy-side-label">
                    BEFORE: LEGACY SYSTEM
                  </div>

                  {legacyItems.map((item) => (
                    <div className="legacy-system-card" key={item.title}>
                      <div className="legacy-system-icon">
                        <i className={`bi ${item.icon}`}></i>
                      </div>

                      <div>
                        <strong>{item.title}</strong>
                        <span>{item.text}</span>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="legacy-transform-core">
                  <div className="legacy-transform-ring">
                    <div className="legacy-transform-circle">
                      <i className="bi bi-chevron-double-right"></i>
                      <span>MODERNIZATION</span>
                      <strong>JOURNEY</strong>
                    </div>
                  </div>
                </div>

                <div className="legacy-side legacy-after">
                  <div className="legacy-side-label">
                    AFTER: MODERN PLATFORM
                  </div>

                  {modernItems.map((item) => (
                    <div className="legacy-system-card" key={item.title}>
                      <div className="legacy-system-icon">
                        <i className={`bi ${item.icon}`}></i>
                      </div>

                      <div>
                        <strong>{item.title}</strong>
                        <span>{item.text}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="legacy-capabilities">
          <div className="container">
            <div className="legacy-section-heading">
              <span>MODERNIZATION CAPABILITIES</span>

              <h2>
                Everything You Need to Modernize with Confidence
              </h2>
            </div>

            <div className="legacy-capabilities-grid">
              {capabilities.map((item) => (
                <article className="legacy-capability-card" key={item.title}>
                  <div className="legacy-capability-icon">
                    <i className={`bi ${item.icon}`}></i>
                  </div>

                  <h3>{item.title}</h3>

                  <p>{item.text}</p>

                  <i className="bi bi-arrow-right legacy-card-arrow"></i>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="legacy-preserve">
          <div className="container">
            <div className="legacy-preserve-panel">
              <div className="legacy-preserve-intro">
                <span>MODERNIZE WITHOUT STARTING FROM ZERO</span>

                <h2>
                  Preserve What Matters.
                  <br />
                  Upgrade What Powers You.
                </h2>
              </div>

              <article>
                <i className="bi bi-code-slash"></i>
                <p>
                  Preserve valuable business logic and processes
                </p>
              </article>

              <article>
                <i className="bi bi-database"></i>
                <p>
                  Migrate critical data safely and accurately
                </p>
              </article>

              <article>
                <i className="bi bi-shield-check"></i>
                <p>
                  Reduce operational risk and system vulnerabilities
                </p>
              </article>

              <article>
                <i className="bi bi-speedometer2"></i>
                <p>
                  Improve speed, reliability and overall efficiency
                </p>
              </article>
            </div>
          </div>
        </section>

        <section className="legacy-approach">
          <div className="container">
            <div className="legacy-section-heading">
              <span>OUR MODERNIZATION APPROACH</span>

              <h2>
                A Proven Process. Zero Guesswork.
              </h2>
            </div>

            <div className="legacy-approach-grid">
              {approach.map((item, index) => (
                <article className="legacy-approach-card" key={item.title}>
                  <div className="legacy-step-number">
                    {item.number}
                  </div>

                  <div className="legacy-step-icon">
                    <i className={`bi ${item.icon}`}></i>
                  </div>

                  <h3>{item.title}</h3>

                  <p>{item.text}</p>

                  {index < approach.length - 1 && (
                    <span className="legacy-step-line"></span>
                  )}
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="legacy-final" id="legacy-contact">
          <div className="container">
            <div className="legacy-final-panel">
              <div className="legacy-final-copy">
                <span>READY TO MODERNIZE?</span>

                <h2>
                  Turn Aging Technology Into
                  <br />
                  a Platform Built for Growth.
                </h2>

                <p>
                  Let&apos;s modernize your systems and unlock new
                  agility, performance and value.
                </p>

                <a href="#contact" className="legacy-final-btn">
                  Start a Conversation
                  <i className="bi bi-arrow-right"></i>
                </a>
              </div>

              <div className="legacy-final-visual">
                <div className="legacy-old-stack">
                  <div className="legacy-old-window large">
                    <span></span>
                    <span></span>
                    <span></span>
                    <i className="bi bi-exclamation-circle-fill"></i>
                  </div>

                  <div className="legacy-old-window small one">
                    <i className="bi bi-exclamation-circle-fill"></i>
                  </div>

                  <div className="legacy-old-window small two">
                    <i className="bi bi-exclamation-circle-fill"></i>
                  </div>
                </div>

                <div className="legacy-final-arrow">
                  <i className="bi bi-chevron-double-right"></i>
                </div>

                <div className="legacy-modern-dashboard">
                  <div className="legacy-dashboard-top">
                    <span></span>
                    <span></span>
                    <span></span>
                  </div>

                  <div className="legacy-dashboard-body">
                    <aside>
                      <i className="bi bi-grid"></i>
                      <i className="bi bi-people"></i>
                      <i className="bi bi-bar-chart"></i>
                      <i className="bi bi-gear"></i>
                    </aside>

                    <div className="legacy-dashboard-main">
                      <div className="legacy-dashboard-cards">
                        <span></span>
                        <span></span>
                        <span></span>
                      </div>

                      <div className="legacy-dashboard-chart">
                        <svg viewBox="0 0 200 80">
                          <polyline
                            points="5,67 35,48 65,56 95,28 125,40 155,20 195,29"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="4"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      </div>

                      <div className="legacy-dashboard-bottom">
                        <span></span>
                        <span></span>
                      </div>
                    </div>
                  </div>

                  <div className="legacy-cloud-badge">
                    <i className="bi bi-cloud-check"></i>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}

export default LegacySystemModernization;