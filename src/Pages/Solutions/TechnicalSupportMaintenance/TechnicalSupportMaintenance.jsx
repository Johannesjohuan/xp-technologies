import "./TechnicalSupportMaintenance.css";
import { Helmet } from "react-helmet-async";

import Navbar from "../../../components/layout/Navbar/Navbar";
import Footer from "../../../sections/Footer/Footer";

function TechnicalSupportMaintenance() {
  const services = [
    {
      icon: "bi-headset",
      title: "24/7 Help Desk Support",
      text: "Round-the-clock technical support from our expert team.",
      className: "support-blue",
    },
    {
      icon: "bi-gear",
      title: "Preventive Maintenance",
      text: "Proactive maintenance to prevent issues and minimize downtime.",
      className: "support-green",
    },
    {
      icon: "bi-bug",
      title: "Issue Resolution",
      text: "Fast and effective resolution of technical issues.",
      className: "support-orange",
    },
    {
      icon: "bi-cloud-check",
      title: "System Monitoring",
      text: "Continuous monitoring to ensure peak performance.",
      className: "support-purple",
    },
    {
      icon: "bi-arrow-repeat",
      title: "Updates & Patch Management",
      text: "Timely updates and patches for security and stability.",
      className: "support-cyan",
    },
    {
      icon: "bi-shield-check",
      title: "Security & Compliance",
      text: "Keep your systems secure, protected and compliant.",
      className: "support-blue",
    },
  ];

  const benefits = [
    {
      icon: "bi-arrow-clockwise",
      title: "Maximize Uptime",
      text: "Reduce downtime and keep your business running.",
    },
    {
      icon: "bi-graph-up-arrow",
      title: "Improve Performance",
      text: "Optimize system performance for better productivity.",
    },
    {
      icon: "bi-shield-check",
      title: "Reduce Risk",
      text: "Minimize security risks and ensure data protection.",
    },
    {
      icon: "bi-cloud-check",
      title: "Lower Costs",
      text: "Prevent costly issues and extend the life of your systems.",
    },
  ];

  const process = [
    {
      number: "01",
      icon: "bi-search",
      title: "Detect",
      text: "We monitor your systems 24/7 to detect issues early.",
    },
    {
      number: "02",
      icon: "bi-chat-square-text",
      title: "Report",
      text: "Issues are logged and prioritized immediately.",
    },
    {
      number: "03",
      icon: "bi-person",
      title: "Respond",
      text: "Our team responds quickly and acknowledges the issue.",
    },
    {
      number: "04",
      icon: "bi-tools",
      title: "Resolve",
      text: "We resolve the issue efficiently and keep you updated.",
    },
    {
      number: "05",
      icon: "bi-clipboard-check",
      title: "Verify",
      text: "We verify the fix and ensure everything works properly.",
    },
    {
      number: "06",
      icon: "bi-shield-check",
      title: "Prevent",
      text: "We implement measures to prevent future issues.",
    },
  ];

  return (
    <>
      <Helmet>
        <title>
          Technical Support & Maintenance Services | XP Technologies
        </title>

        <meta
          name="description"
          content="XP Technologies provides technical support and maintenance services including 24/7 help desk support, preventive maintenance, system monitoring, issue resolution, updates, patch management and security support."
        />

        <meta
          name="robots"
          content="index, follow"
        />

        <link
          rel="canonical"
          href="https://www.xptechnologies.com/solutions/technical-support-maintenance"
        />

        <meta
          property="og:title"
          content="Technical Support & Maintenance | XP Technologies"
        />

        <meta
          property="og:description"
          content="Keep your systems secure, reliable and performing at their best with proactive technical support and maintenance from XP Technologies."
        />

        <meta
          property="og:type"
          content="website"
        />

        <meta
          property="og:url"
          content="https://www.xptechnologies.com/solutions/technical-support-maintenance"
        />

        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            name: "Technical Support and Maintenance",
            description:
              "Technical support and maintenance services including system monitoring, preventive maintenance, issue resolution, patch management, help desk support and security support.",
            provider: {
              "@type": "Organization",
              name: "XP Technologies",
              url: "https://www.xptechnologies.com",
            },
            serviceType: "Technical Support and Maintenance",
          })}
        </script>
      </Helmet>

      <Navbar />

      <main className="support-page">
        <section className="support-hero">
          <div className="container">
            <nav
              className="support-breadcrumb"
              aria-label="Breadcrumb"
            >
              <a href="/">Home</a>

              <i className="bi bi-chevron-right"></i>

              <a href="/solutions">
                Solutions
              </a>

              <i className="bi bi-chevron-right"></i>

              <span>
                Technical Support & Maintenance
              </span>
            </nav>

            <div className="support-hero-grid">
              <div className="support-copy">
                <span className="support-label">
                  TECHNICAL SUPPORT & MAINTENANCE
                </span>

                <h1>
                  Keep Your Systems
                  <br />
                  Running. Always.
                  <br />
                  We&apos;ve Got You.
                </h1>

                <p>
                  Reliable support. Proactive maintenance. Rapid
                  response. We ensure your systems stay secure,
                  up-to-date and performing at their best — 24/7.
                </p>

                <div className="support-actions">
                  <a
                    href="#support-contact"
                    className="support-primary-btn"
                  >
                    Get Support Now

                    <i className="bi bi-arrow-right"></i>
                  </a>

                  <a
                    href="#support-contact"
                    className="support-secondary-btn"
                  >
                    Talk to an Expert

                    <i className="bi bi-chat-dots"></i>
                  </a>
                </div>
              </div>

              <div className="support-network">
                <div className="support-orbit orbit-one"></div>
                <div className="support-orbit orbit-two"></div>
                <div className="support-orbit orbit-three"></div>

                <div className="support-center">
                  <div className="support-headset">
                    <i className="bi bi-headset"></i>
                  </div>

                  <strong>24/7</strong>
                  <span>SUPPORT</span>
                </div>

                <div className="support-feature monitoring">
                  <div className="support-feature-icon">
                    <i className="bi bi-display"></i>
                  </div>

                  <div>
                    <strong>Monitoring</strong>
                    <span>
                      Real-time monitoring to prevent issues.
                    </span>
                  </div>
                </div>

                <div className="support-feature security">
                  <div className="support-feature-icon">
                    <i className="bi bi-shield-check"></i>
                  </div>

                  <div>
                    <strong>Security</strong>
                    <span>
                      Keeping your systems secure and compliant.
                    </span>
                  </div>
                </div>

                <div className="support-feature helpdesk">
                  <div className="support-feature-icon">
                    <i className="bi bi-headset"></i>
                  </div>

                  <div>
                    <strong>Support</strong>
                    <span>
                      Expert support when you need it.
                    </span>
                  </div>
                </div>

                <div className="support-feature updates">
                  <div className="support-feature-icon">
                    <i className="bi bi-arrow-repeat"></i>
                  </div>

                  <div>
                    <strong>Updates</strong>
                    <span>
                      Timely updates to keep you ahead.
                    </span>
                  </div>
                </div>

                <div className="support-feature maintenance">
                  <div className="support-feature-icon">
                    <i className="bi bi-gear"></i>
                  </div>

                  <div>
                    <strong>Maintenance</strong>
                    <span>
                      Regular maintenance for optimal performance.
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="support-services">
          <div className="container">
            <div className="support-section-heading">
              <span>
                OUR SUPPORT & MAINTENANCE SERVICES
              </span>

              <h2>
                Comprehensive Support for Peace of Mind
              </h2>
            </div>

            <div className="support-services-grid">
              {services.map((service) => (
                <article
                  className="support-service-card"
                  key={service.title}
                >
                  <div
                    className={`support-service-icon ${service.className}`}
                  >
                    <i className={`bi ${service.icon}`}></i>
                  </div>

                  <h3>
                    {service.title}
                  </h3>

                  <p>
                    {service.text}
                  </p>

                  <i className="bi bi-arrow-right support-card-arrow"></i>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="support-benefits">
          <div className="container">
            <div className="support-benefits-panel">
              <div className="support-benefits-intro">
                <span>
                  WHY IT MATTERS
                </span>

                <h2>
                  We Prevent Problems
                  <br />
                  Before They Happen
                </h2>

                <div className="support-intro-line"></div>
              </div>

              {benefits.map((benefit) => (
                <article
                  className="support-benefit"
                  key={benefit.title}
                >
                  <div>
                    <i className={`bi ${benefit.icon}`}></i>
                  </div>

                  <h3>
                    {benefit.title}
                  </h3>

                  <p>
                    {benefit.text}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="support-process">
          <div className="container">
            <div className="support-section-heading">
              <span>
                OUR SUPPORT PROCESS
              </span>

              <h2>
                A Simple Process. Powerful Results.
              </h2>
            </div>

            <div className="support-process-grid">
              {process.map((step, index) => (
                <article
                  className="support-process-card"
                  key={step.title}
                >
                  <div className="support-process-visual">
                    <div className="support-process-number">
                      {step.number}
                    </div>

                    <div className="support-process-icon">
                      <i className={`bi ${step.icon}`}></i>
                    </div>

                    {index < process.length - 1 && (
                      <div className="support-process-line">
                        <span></span>
                        <i className="bi bi-chevron-right"></i>
                      </div>
                    )}
                  </div>

                  <h3>
                    {step.title}
                  </h3>

                  <p>
                    {step.text}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section
          className="support-final"
          id="support-contact"
        >
          <div className="container">
            <div className="support-final-panel">
              <div className="support-final-copy">
                <span>
                  READY WHEN YOU NEED US
                </span>

                <h2>
                  We&apos;re Here to Support
                  <br />
                  Your Success.
                </h2>

                <p>
                  Partner with us for reliable support and
                  maintenance you can count on.
                </p>

                <a
                  href="#contact"
                  className="support-final-btn"
                >
                  Start a Conversation

                  <i className="bi bi-arrow-right"></i>
                </a>
              </div>

              <div className="support-final-visual">
                <div className="support-monitor">
                  <div className="support-monitor-top">
                    <span></span>
                    <span></span>
                    <span></span>
                  </div>

                  <div className="support-monitor-body">
                    <aside>
                      <div></div>
                      <div></div>
                      <div></div>
                      <div></div>
                    </aside>

                    <div className="support-monitor-main">
                      <div className="support-monitor-status">
                        <div>
                          <span></span>
                          <span></span>
                          <span></span>
                        </div>

                        <small>
                          <i className="bi bi-circle-fill"></i>
                          Online
                        </small>
                      </div>

                      <div className="support-monitor-content">
                        <div className="support-chart">
                          <svg
                            viewBox="0 0 220 90"
                            preserveAspectRatio="none"
                          >
                            <polyline
                              points="0,70 22,55 45,67 68,38 92,54 115,27 138,42 164,18 190,34 220,22"
                              fill="none"
                              stroke="currentColor"
                              strokeWidth="4"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                          </svg>
                        </div>

                        <div className="support-monitor-list">
                          <span></span>
                          <span></span>
                          <span></span>
                          <span></span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="support-agent-card">
                  <div className="support-agent-avatar">
                    <i className="bi bi-person-fill"></i>
                  </div>

                  <div>
                    <strong>
                      Support Agent
                    </strong>

                    <span>
                      How can we help you today?
                    </span>

                    <small>
                      <i className="bi bi-circle-fill"></i>
                      Online
                    </small>
                  </div>
                </div>

                <div className="support-security-shield">
                  <i className="bi bi-shield-check"></i>
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

export default TechnicalSupportMaintenance;