import "./EnterpriseERP.css";
import { Helmet } from "react-helmet-async";

import Navbar from "../../../components/layout/Navbar/Navbar";
import Footer from "../../../sections/Footer/Footer";
import FashionERPPreview from "./FashionERPPreview";


function EnterpriseERP() {
  return (
    <>
      <Helmet>
        <title>
          Enterprise ERP Systems & Business Management Software | XP Technologies
        </title>

        <meta
          name="description"
          content="XP Technologies builds secure and scalable enterprise ERP systems for finance, inventory, sales, CRM, procurement, HR, payroll and business reporting."
        />

        <meta
          name="robots"
          content="index, follow"
        />

        <link
          rel="canonical"
          href="https://www.xptechnologies.com/solutions/enterprise-erp"
        />

        <meta
          property="og:title"
          content="Enterprise ERP Systems | XP Technologies"
        />

        <meta
          property="og:description"
          content="Connect finance, inventory, sales, procurement, HR and business reporting with a secure and scalable enterprise ERP system."
        />

        <meta
          property="og:type"
          content="website"
        />

        <meta
          property="og:url"
          content="https://www.xptechnologies.com/solutions/enterprise-erp"
        />

        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            name: "Enterprise ERP Systems",
            description:
              "Enterprise ERP systems for finance, inventory, sales, CRM, procurement, HR, payroll and business reporting.",
            provider: {
              "@type": "Organization",
              name: "XP Technologies",
              url: "https://www.xptechnologies.com",
            },
            serviceType: "Enterprise ERP System Development",
          })}
        </script>
      </Helmet>

      <Navbar />

      <main className="enterprise-page">
        <section className="enterprise-hero">
          <div className="container">
            <nav
              className="enterprise-breadcrumb"
              aria-label="Breadcrumb"
            >
              <a href="/">Home</a>

              <i className="bi bi-chevron-right"></i>

              <a href="/solutions">
                Solutions
              </a>

              <i className="bi bi-chevron-right"></i>

              <span>
                Enterprise ERP Systems
              </span>
            </nav>

            <div className="enterprise-hero-grid">
              <div className="enterprise-copy">
                <span className="enterprise-label">
                  ENTERPRISE SOLUTION
                </span>

                <h1>
                  Enterprise
                  <br />
                  ERP Systems
                </h1>

                <p className="enterprise-description">
                  A unified, intelligent and scalable ERP system
                  that connects your people, processes and business
                  data across your organization. Manage operations
                  efficiently, improve productivity and make better
                  decisions with real-time business information.
                </p>

                <div className="enterprise-actions">
                  <a
                    href="#enterprise-contact"
                    className="enterprise-primary-btn"
                  >
                    Request a Demo

                    <i className="bi bi-arrow-right"></i>
                  </a>

                  <a
                    href="#enterprise-contact"
                    className="enterprise-secondary-btn"
                  >
                    Talk to an Expert
                  </a>
                </div>

                <div className="enterprise-trust">
                  <div>
                    <i className="bi bi-shield-check"></i>
                    <span>Trusted by Businesses</span>
                  </div>

                  <div>
                    <i className="bi bi-shield-lock"></i>
                    <span>Secure &amp; Reliable</span>
                  </div>

                  <div>
                    <i className="bi bi-graph-up-arrow"></i>
                    <span>Built for Growth</span>
                  </div>
                </div>
              </div>

              <div className="enterprise-hero-grid">
  <div className="enterprise-copy">
    ...
  </div>

  <FashionERPPreview />
</div>
            </div>
          </div>
        </section>

        <section className="enterprise-capabilities">
          <div className="container">
            <div className="enterprise-section-heading">
              <span>
                POWERFUL CAPABILITIES
              </span>

              <h2>
                Enterprise ERP System Capabilities
              </h2>
            </div>

            <div className="capabilities-grid">
              <article className="capability-card">
                <div className="capability-icon">
                  <i className="bi bi-clipboard-data"></i>
                </div>

                <h3>
                  Financial Management
                </h3>

                <p>
                  Manage accounting, budgets, expenses and
                  financial reporting from one centralized ERP
                  system.
                </p>
              </article>

              <article className="capability-card">
                <div className="capability-icon">
                  <i className="bi bi-box-seam"></i>
                </div>

                <h3>
                  Inventory Management
                </h3>

                <p>
                  Monitor stock, warehouses, transfers and
                  real-time inventory levels across your business.
                </p>
              </article>

              <article className="capability-card">
                <div className="capability-icon">
                  <i className="bi bi-people"></i>
                </div>

                <h3>
                  Sales &amp; CRM
                </h3>

                <p>
                  Manage customers, leads, sales opportunities,
                  orders and after-sales activities efficiently.
                </p>
              </article>

              <article className="capability-card">
                <div className="capability-icon">
                  <i className="bi bi-cart3"></i>
                </div>

                <h3>
                  Procurement
                </h3>

                <p>
                  Streamline purchasing, supplier management,
                  purchase orders and approval processes.
                </p>
              </article>

              <article className="capability-card">
                <div className="capability-icon">
                  <i className="bi bi-person-badge"></i>
                </div>

                <h3>
                  HR &amp; Payroll
                </h3>

                <p>
                  Manage employee records, payroll, attendance,
                  leave and workforce information.
                </p>
              </article>

              <article className="capability-card">
                <div className="capability-icon">
                  <i className="bi bi-graph-up-arrow"></i>
                </div>

                <h3>
                  Business Intelligence
                </h3>

                <p>
                  Use real-time ERP dashboards, analytics and
                  business reports to make informed decisions.
                </p>
              </article>
            </div>
          </div>
        </section>

        <section className="enterprise-operations">
          <div className="container">
            <div className="enterprise-operations-grid">
              <div className="enterprise-operations-copy">
                <span className="enterprise-small-heading">
                  BUILT AROUND YOUR OPERATIONS
                </span>

                <h2>
                  An ERP That Works the Way Your Business Works
                </h2>

                <p>
                  Every business operates differently. XP Technologies
                  builds adaptable ERP systems around your workflows,
                  teams and operational requirements, giving you one
                  connected platform without forcing your business into
                  a rigid structure.
                </p>
              </div>

              <div className="enterprise-operations-features">
                <article className="enterprise-operation-item">
                  <div className="enterprise-operation-icon">
                    <i className="bi bi-puzzle"></i>
                  </div>

                  <div>
                    <h3>
                      Customizable Modules
                    </h3>

                    <p>
                      Choose and configure the modules your business
                      actually needs.
                    </p>
                  </div>
                </article>

                <article className="enterprise-operation-item">
                  <div className="enterprise-operation-icon">
                    <i className="bi bi-buildings"></i>
                  </div>

                  <div>
                    <h3>
                      Multi-Location Management
                    </h3>

                    <p>
                      Manage branches, departments and operations
                      from one centralized system.
                    </p>
                  </div>
                </article>

                <article className="enterprise-operation-item">
                  <div className="enterprise-operation-icon">
                    <i className="bi bi-person-lock"></i>
                  </div>

                  <div>
                    <h3>
                      Role-Based Access
                    </h3>

                    <p>
                      Give employees secure access to the information
                      and tools relevant to their roles.
                    </p>
                  </div>
                </article>

                <article className="enterprise-operation-item">
                  <div className="enterprise-operation-icon">
                    <i className="bi bi-link-45deg"></i>
                  </div>

                  <div>
                    <h3>
                      Integration Ready
                    </h3>

                    <p>
                      Connect your ERP with existing applications,
                      payment systems and other business tools.
                    </p>
                  </div>
                </article>
              </div>
            </div>
          </div>
        </section>

        <section className="enterprise-why">
          <div className="container">
            <div className="enterprise-why-grid">
              <div className="enterprise-why-content">
                <span className="enterprise-small-heading">
                  WHY CHOOSE OUR ERP?
                </span>

                <h2>
                  Why Choose XP Technologies
                  Enterprise ERP?
                </h2>

                <div className="enterprise-benefits">
                  <div>
                    <i className="bi bi-check-circle-fill"></i>

                    <span>
                      End-to-end integration across business departments
                    </span>
                  </div>

                  <div>
                    <i className="bi bi-check-circle-fill"></i>

                    <span>
                      Secure, reliable and cloud-ready architecture
                    </span>
                  </div>

                  <div>
                    <i className="bi bi-check-circle-fill"></i>

                    <span>
                      Real-time business data and analytics
                    </span>
                  </div>

                  <div>
                    <i className="bi bi-check-circle-fill"></i>

                    <span>
                      Modern technology and proven development practices
                    </span>
                  </div>

                  <div>
                    <i className="bi bi-check-circle-fill"></i>

                    <span>
                      Scalable and customizable ERP modules
                    </span>
                  </div>

                  <div>
                    <i className="bi bi-check-circle-fill"></i>

                    <span>
                      Ongoing technical support and system improvement
                    </span>
                  </div>
                </div>
              </div>

              <div
                className="enterprise-cta"
                id="enterprise-contact"
              >
                <div className="enterprise-cta-icon">
                  <i className="bi bi-rocket-takeoff"></i>
                </div>

                <div>
                  <h2>
                    Ready to Transform Your
                    Business Operations?
                  </h2>

                  <p>
                    Talk to XP Technologies about an ERP system
                    designed around the way your business operates.
                  </p>

                  <a
                    href="#contact"
                    className="enterprise-primary-btn"
                  >
                    Request a Demo

                    <i className="bi bi-arrow-right"></i>
                  </a>
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

export default EnterpriseERP;