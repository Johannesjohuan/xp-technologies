import "./ERPSecurityInfrastructure.css";
import { Helmet } from "react-helmet-async";

import Navbar from "../../../components/layout/Navbar/Navbar";
import Footer from "../../../sections/Footer/Footer";

function ERPSecurityInfrastructure() {
  const benefits = [
    {
      icon: "bi-shield-check",
      title: "Protect Critical Data",
      text: "Safeguard your business and customer data from threats and breaches.",
      type: "blue",
    },
    {
      icon: "bi-speedometer2",
      title: "Ensure High Availability",
      text: "Minimize downtime and keep your ERP running without interruptions.",
      type: "green",
    },
    {
      icon: "bi-file-earmark-check",
      title: "Meet Compliance Standards",
      text: "Align with regulatory requirements and industry best practices.",
      type: "purple",
    },
    {
      icon: "bi-bar-chart-line",
      title: "Optimize Performance",
      text: "High-performing infrastructure that scales with your business growth.",
      type: "blue",
    },
  ];

  const services = [
    {
      icon: "bi-shield-lock",
      title: "ERP Security Assessment",
      text: "Identify vulnerabilities and strengthen your ERP security posture.",
      type: "blue",
    },
    {
      icon: "bi-person-gear",
      title: "Access & Identity Management",
      text: "Implement role-based access and identity controls.",
      type: "green",
    },
    {
      icon: "bi-cloud-lock",
      title: "Infrastructure Setup & Optimization",
      text: "Build secure, scalable and high-performing ERP infrastructure.",
      type: "purple",
    },
    {
      icon: "bi-database-lock",
      title: "Data Protection & Encryption",
      text: "Encrypt sensitive data and ensure secure data handling.",
      type: "orange",
    },
    {
      icon: "bi-shield-check",
      title: "Compliance & Governance",
      text: "Ensure compliance with industry standards and regulations.",
      type: "cyan",
    },
    {
      icon: "bi-arrow-repeat",
      title: "Backup & Disaster Recovery",
      text: "Reliable backup and recovery to ensure business continuity.",
      type: "blue",
    },
  ];

  const framework = [
    {
      number: "01",
      icon: "bi-search",
      title: "Assess",
      text: "We assess your ERP environment and identify security risks.",
      type: "blue",
    },
    {
      number: "02",
      icon: "bi-shield-check",
      title: "Protect",
      text: "We implement robust security controls and access policies.",
      type: "green",
    },
    {
      number: "03",
      icon: "bi-display",
      title: "Monitor",
      text: "We continuously monitor for threats and unusual activities.",
      type: "purple",
    },
    {
      number: "04",
      icon: "bi-tools",
      title: "Optimize",
      text: "We optimize infrastructure for performance, security and scalability.",
      type: "orange",
    },
    {
      number: "05",
      icon: "bi-check-circle",
      title: "Assure",
      text: "We ensure compliance, continuity and ongoing confidence.",
      type: "cyan",
    },
  ];

  return (
    <>
      <Helmet>
        <title>
          ERP Security & Infrastructure Services | XP Technologies
        </title>

        <meta
          name="description"
          content="XP Technologies provides ERP security and infrastructure services including security assessments, identity and access management, data protection, encryption, compliance, monitoring, backup and disaster recovery."
        />

        <meta name="robots" content="index, follow" />

        <link
          rel="canonical"
          href="https://www.xptechnologies.com/solutions/erp-security-infrastructure"
        />

        <meta
          property="og:title"
          content="ERP Security & Infrastructure | XP Technologies"
        />

        <meta
          property="og:description"
          content="Protect your ERP environment with secure infrastructure, access controls, data protection, monitoring, compliance and disaster recovery."
        />

        <meta property="og:type" content="website" />

        <meta
          property="og:url"
          content="https://www.xptechnologies.com/solutions/erp-security-infrastructure"
        />

        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            name: "ERP Security and Infrastructure",
            description:
              "ERP security and infrastructure services including security assessments, access management, encryption, compliance, infrastructure optimization, monitoring, backup and disaster recovery.",
            provider: {
              "@type": "Organization",
              name: "XP Technologies",
              url: "https://www.xptechnologies.com",
            },
            serviceType: "ERP Security and Infrastructure",
          })}
        </script>
      </Helmet>

      <Navbar />

      <main className="erpsec-page">
        <section className="erpsec-hero">
          <div className="container">
            <nav className="erpsec-breadcrumb" aria-label="Breadcrumb">
              <a href="/">Home</a>

              <i className="bi bi-chevron-right"></i>

              <a href="/solutions">Solutions</a>

              <i className="bi bi-chevron-right"></i>

              <span>ERP Security & Infrastructure</span>
            </nav>

            <div className="erpsec-hero-grid">
              <div className="erpsec-copy">
                <span className="erpsec-label">
                  ERP SECURITY & INFRASTRUCTURE
                </span>

                <h1>
                  Secure Your ERP.
                  <br />
                  Strengthen Your
                  <br />
                  Business <em>Foundation.</em>
                </h1>

                <p>
                  Robust security. Reliable infrastructure. Seamless
                  performance. We design and manage secure ERP environments
                  that protect your data, ensure compliance, and support
                  uninterrupted business operations.
                </p>

                <div className="erpsec-actions">
                  <a
                    href="#erpsec-contact"
                    className="erpsec-primary-btn"
                  >
                    Secure My ERP
                    <i className="bi bi-arrow-right"></i>
                  </a>

                  <a
                    href="#erpsec-contact"
                    className="erpsec-secondary-btn"
                  >
                    Talk to an Expert
                    <i className="bi bi-chat-dots"></i>
                  </a>
                </div>
              </div>

              <div className="erpsec-hero-visual">
                <div className="erpsec-grid-pattern"></div>

                <div className="erpsec-main-shield">
                  <div className="erpsec-shield-shell">
                    <i className="bi bi-lock-fill"></i>
                    <strong>ERP</strong>
                  </div>

                  <div className="erpsec-platform">
                    <span></span>
                    <span></span>
                    <span></span>
                  </div>
                </div>

                <article className="erpsec-floating-card card-data">
                  <div className="erpsec-floating-icon blue">
                    <i className="bi bi-lock"></i>
                  </div>

                  <div>
                    <strong>Data Security</strong>
                    <span>
                      Protect sensitive data with advanced security controls.
                    </span>
                  </div>
                </article>

                <article className="erpsec-floating-card card-compliance">
                  <div className="erpsec-floating-icon green">
                    <i className="bi bi-shield-check"></i>
                  </div>

                  <div>
                    <strong>Compliance</strong>
                    <span>
                      Stay compliant with industry standards and regulations.
                    </span>
                  </div>
                </article>

                <article className="erpsec-floating-card card-access">
                  <div className="erpsec-floating-icon blue">
                    <i className="bi bi-people"></i>
                  </div>

                  <div>
                    <strong>Access Control</strong>
                    <span>
                      Role-based access to keep your ERP secure.
                    </span>
                  </div>
                </article>

                <article className="erpsec-floating-card card-continuity">
                  <div className="erpsec-floating-icon purple">
                    <i className="bi bi-arrow-repeat"></i>
                  </div>

                  <div>
                    <strong>Business Continuity</strong>
                    <span>
                      Ensure uptime and disaster recovery when it matters.
                    </span>
                  </div>
                </article>

                <article className="erpsec-floating-card card-infra">
                  <div className="erpsec-floating-icon cyan">
                    <i className="bi bi-server"></i>
                  </div>

                  <div>
                    <strong>Infrastructure</strong>
                    <span>
                      Scalable and reliable infrastructure for performance.
                    </span>
                  </div>
                </article>
              </div>
            </div>
          </div>
        </section>

        <section className="erpsec-benefits">
          <div className="container">
            <div className="erpsec-benefits-panel">
              <div className="erpsec-benefits-heading">
                <span>KEY BENEFITS</span>

                <h2>
                  Secure Today. Perform Tomorrow.
                </h2>
              </div>

              <div className="erpsec-benefits-grid">
                {benefits.map((benefit) => (
                  <article
                    className="erpsec-benefit"
                    key={benefit.title}
                  >
                    <div
                      className={`erpsec-benefit-icon ${benefit.type}`}
                    >
                      <i className={`bi ${benefit.icon}`}></i>
                    </div>

                    <h3>{benefit.title}</h3>

                    <p>{benefit.text}</p>
                  </article>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="erpsec-services">
          <div className="container">
            <div className="erpsec-section-heading">
              <span>
                OUR ERP SECURITY & INFRASTRUCTURE SERVICES
              </span>

              <h2>
                Comprehensive Security. Reliable Infrastructure.
              </h2>
            </div>

            <div className="erpsec-services-grid">
              {services.map((service) => (
                <article
                  className="erpsec-service-card"
                  key={service.title}
                >
                  <div
                    className={`erpsec-service-icon ${service.type}`}
                  >
                    <i className={`bi ${service.icon}`}></i>
                  </div>

                  <div>
                    <h3>{service.title}</h3>
                    <p>{service.text}</p>
                  </div>

                  <i className="bi bi-arrow-right erpsec-service-arrow"></i>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="erpsec-framework">
          <div className="container">
            <div className="erpsec-section-heading">
              <span>
                OUR SECURITY FRAMEWORK
              </span>

              <h2>
                Built on Proven Principles.
              </h2>
            </div>

            <div className="erpsec-framework-grid">
              {framework.map((item, index) => (
                <article
                  className="erpsec-framework-step"
                  key={item.title}
                >
                  <div className="erpsec-framework-visual">
                    <div
                      className={`erpsec-framework-icon ${item.type}`}
                    >
                      <i className={`bi ${item.icon}`}></i>
                    </div>

                    <small>
                      {item.number}
                    </small>

                    {index < framework.length - 1 && (
                      <div className="erpsec-framework-line">
                        <span></span>
                        <i className="bi bi-chevron-right"></i>
                      </div>
                    )}
                  </div>

                  <h3>{item.title}</h3>

                  <p>{item.text}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section
          className="erpsec-final"
          id="erpsec-contact"
        >
          <div className="container">
            <div className="erpsec-final-panel">
              <div className="erpsec-final-copy">
                <span>
                  READY TO SECURE YOUR ERP?
                </span>

                <h2>
                  Let&apos;s Build a Secure
                  <br />
                  and Resilient ERP
                  <br />
                  Environment.
                </h2>

                <p>
                  Partner with XP Technologies for enterprise-grade security
                  and infrastructure you can trust.
                </p>

                <a
                  href="#contact"
                  className="erpsec-final-btn"
                >
                  Start a Conversation
                  <i className="bi bi-arrow-right"></i>
                </a>
              </div>

              <div className="erpsec-final-visual">
                <div className="erpsec-server-stack">
                  <div className="erpsec-server server-one">
                    <div>
                      <span></span>
                      <span></span>
                      <span></span>
                    </div>
                  </div>

                  <div className="erpsec-server server-two">
                    <div>
                      <span></span>
                      <span></span>
                      <span></span>
                    </div>
                  </div>

                  <div className="erpsec-server server-three">
                    <div>
                      <span></span>
                      <span></span>
                      <span></span>
                    </div>
                  </div>

                  <div className="erpsec-final-shield">
                    <i className="bi bi-check-lg"></i>
                  </div>

                  <div className="erpsec-server-platform"></div>
                </div>

                <article className="erpsec-final-info monitor">
                  <div>
                    <i className="bi bi-display"></i>
                  </div>

                  <span>
                    <strong>24/7 Monitoring</strong>
                    Continuous monitoring for threats and uptime.
                  </span>
                </article>

                <article className="erpsec-final-info security">
                  <div>
                    <i className="bi bi-lock"></i>
                  </div>

                  <span>
                    <strong>Enterprise Grade Security</strong>
                    Advanced security to protect your critical ERP systems.
                  </span>
                </article>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}

export default ERPSecurityInfrastructure;