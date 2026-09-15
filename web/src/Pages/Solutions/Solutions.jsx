import "./Solutions.css";

import Navbar from "../../components/layout/Navbar/Navbar";
import Footer from "../../sections/Footer/Footer";

import { solutionsData } from "../../data/solutionsData";

function Solutions() {
  return (
    <>
      <Navbar />

      <main className="solutions-page">
        <section className="solutions-top-hero">
          <div className="solutions-top-inner">
            <div className="solutions-top-copy">
              <span className="solutions-top-badge">
                <i className="bi bi-infinity"></i>
                OUR SOLUTIONS
              </span>

              <h1>
                Powerful ERP Systems
                <br />
                That Run Your
                <br />
                <span>Business</span> Better.
              </h1>

              <p>
                We design, implement and support enterprise ERP systems that help
                you manage operations, automate processes, protect data and make
                smarter business decisions.
              </p>

              <div className="solutions-top-pills">
                <span>
                  <i className="bi bi-check-circle"></i>
                  Centralised
                </span>

                <span>
                  <i className="bi bi-check-circle"></i>
                  Secure
                </span>

                <span>
                  <i className="bi bi-check-circle"></i>
                  Scalable
                </span>

                <span>
                  <i className="bi bi-check-circle"></i>
                  Insightful
                </span>
              </div>
            </div>

            <div className="solutions-erp-preview">
              <div className="solutions-dashboard-scroll">
                <div className="solutions-dashboard-card">
                  <div className="solutions-dashboard-topbar">
                    <div className="solutions-dashboard-brand">
                      <span className="dashboard-xp">XP</span>
                      <strong>ERP</strong>
                    </div>

                    <div className="solutions-dashboard-search">
                      <i className="bi bi-search"></i>
                      <span>Search anything...</span>
                    </div>

                    <div className="solutions-dashboard-user">
                      <i className="bi bi-bell"></i>

                      <div className="solutions-user-avatar">
                        A
                      </div>
                    </div>
                  </div>

                  <div className="solutions-dashboard-body">
                    <aside className="solutions-dashboard-sidebar">
                      <div className="dashboard-menu-item active">
                        <i className="bi bi-grid"></i>
                        <span>Dashboard</span>
                      </div>

                      <div className="dashboard-menu-item">
                        <i className="bi bi-receipt"></i>
                        <span>Sales</span>
                      </div>

                      <div className="dashboard-menu-item">
                        <i className="bi bi-cart"></i>
                        <span>Purchases</span>
                      </div>

                      <div className="dashboard-menu-item">
                        <i className="bi bi-box-seam"></i>
                        <span>Inventory</span>
                      </div>

                      <div className="dashboard-menu-item">
                        <i className="bi bi-cash-stack"></i>
                        <span>Finance</span>
                      </div>

                      <div className="dashboard-menu-item">
                        <i className="bi bi-people"></i>
                        <span>HR & Payroll</span>
                      </div>

                      <div className="dashboard-menu-item">
                        <i className="bi bi-bar-chart"></i>
                        <span>Reports</span>
                      </div>

                      <div className="dashboard-menu-item">
                        <i className="bi bi-gear"></i>
                        <span>Settings</span>
                      </div>
                    </aside>

                    <div className="solutions-dashboard-main">
                      <div className="solutions-kpi-grid">
                        <div className="solutions-kpi-card">
                          <span>Total Sales</span>
                          <strong>₦24,780,000</strong>
                          <small>↑ 12.5%</small>
                        </div>

                        <div className="solutions-kpi-card">
                          <span>Total Orders</span>
                          <strong>1,284</strong>
                          <small>↑ 8.4%</small>
                        </div>

                        <div className="solutions-kpi-card">
                          <span>Total Customers</span>
                          <strong>326</strong>
                          <small>↑ 5.1%</small>
                        </div>

                        <div className="solutions-kpi-card">
                          <span>Total Profit</span>
                          <strong>₦7,540,000</strong>
                          <small>↑ 9.3%</small>
                        </div>
                      </div>

                      <div className="solutions-dashboard-lower">
                        <div className="solutions-chart-card">
                          <div className="solutions-chart-heading">
                            <strong>Sales Overview</strong>
                            <span>Monthly</span>
                          </div>

                          <div className="solutions-chart-area">
                            <svg
                              viewBox="0 0 420 180"
                              preserveAspectRatio="none"
                              aria-hidden="true"
                            >
                              <polyline
                                points="0,135 60,155 115,105 165,125 220,88 275,58 330,82 390,35"
                                fill="none"
                                stroke="#2f63ff"
                                strokeWidth="4"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                              />
                            </svg>

                            <div className="chart-labels">
                              <span>Jan</span>
                              <span>Feb</span>
                              <span>Mar</span>
                              <span>Apr</span>
                              <span>May</span>
                              <span>Jun</span>
                              <span>Jul</span>
                            </div>
                          </div>
                        </div>

                        <div className="solutions-orders-card">
                          <div className="solutions-orders-heading">
                            <strong>Recent Orders</strong>
                            <span>View all</span>
                          </div>

                          <div className="solution-order-row">
                            <span>ORD-0001</span>
                            <strong>₦250,000</strong>
                          </div>

                          <div className="solution-order-row">
                            <span>ORD-0002</span>
                            <strong>₦150,000</strong>
                          </div>

                          <div className="solution-order-row">
                            <span>ORD-0003</span>
                            <strong>₦700,000</strong>
                          </div>

                          <div className="solution-order-row">
                            <span>ORD-0004</span>
                            <strong>₦320,000</strong>
                          </div>

                          <div className="solution-order-row">
                            <span>ORD-0005</span>
                            <strong>₦190,000</strong>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="solutions-hero">
          <div className="solutions-hero-container">
            <p className="solutions-eyebrow">
              WHAT WE OFFER
            </p>

            <h2>
              Our Core ERP Solutions
            </h2>

            <p className="solutions-subtitle">
              End-to-end business systems that streamline operations, improve
              productivity and give you complete control of your business.
            </p>
          </div>
        </section>

        <section className="solutions-grid-section">
          <div className="solutions-grid-container">
            <div className="solutions-grid">
              {solutionsData.map((solution) => (
                <article
                  className="solution-card"
                  key={solution.id}
                >
                  <div className="solution-card-icon">
                    <i className={`bi ${solution.icon}`}></i>
                  </div>

                  <h3>
                    {solution.title}
                  </h3>

                  <p className="solution-card-description">
                    {solution.shortDescription}
                  </p>

                  <ul className="solution-feature-list">
                    {solution.features.map((feature) => (
                      <li key={feature}>
                        <span className="solution-check-icon">
                          <i className="bi bi-check-circle"></i>
                        </span>

                        <span>
                          {feature}
                        </span>
                      </li>
                    ))}
                  </ul>

                  <a
                    href={solution.path}
                    className="solution-learn-more"
                  >
                    <span>
                      Learn more
                    </span>

                    <i className="bi bi-arrow-right"></i>
                  </a>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="solutions-cta-section">
          <div className="solutions-cta">
            <div className="solutions-cta-left">
              <div className="solutions-cta-icon">
                <i className="bi bi-rocket-takeoff"></i>
              </div>

              <div className="solutions-cta-text">
                <h2>
                  Ready to transform your business?
                </h2>

                <p>
                  Let&apos;s build the right ERP solution for your unique
                  challenges.
                </p>
              </div>
            </div>

            <div className="solutions-cta-actions">
              <a
                href="#contact"
                className="solutions-primary-btn"
              >
                <span>
                  Book a Consultation
                </span>

                <i className="bi bi-arrow-right"></i>
              </a>

              <a
                href="#portfolio"
                className="solutions-secondary-btn"
              >
                View Portfolio
              </a>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}

export default Solutions;