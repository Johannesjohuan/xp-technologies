import "./BusinessProcessAutomation.css";
import { Helmet } from "react-helmet-async";

import Navbar from "../../../components/layout/Navbar/Navbar";
import Footer from "../../../sections/Footer/Footer";

function BusinessProcessAutomation() {
  return (
    <>
      <Helmet>
        <title>
          Business Process Automation Solutions | XP Technologies
        </title>

        <meta
          name="description"
          content="XP Technologies builds business process automation solutions for workflow automation, approvals, notifications, data processing, system integration and process tracking."
        />

        <meta
          name="robots"
          content="index, follow"
        />

        <link
          rel="canonical"
          href="https://www.xptechnologies.com/solutions/business-process-automation"
        />

        <meta
          property="og:title"
          content="Business Process Automation | XP Technologies"
        />

        <meta
          property="og:description"
          content="Automate repetitive tasks, approvals, notifications and business workflows with intelligent automation solutions from XP Technologies."
        />

        <meta
          property="og:type"
          content="website"
        />

        <meta
          property="og:url"
          content="https://www.xptechnologies.com/solutions/business-process-automation"
        />

        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            name: "Business Process Automation",
            description:
              "Business process automation solutions for workflow automation, approvals, notifications, data processing, system integration and process tracking.",
            provider: {
              "@type": "Organization",
              name: "XP Technologies",
              url: "https://www.xptechnologies.com",
            },
            serviceType: "Business Process Automation",
          })}
        </script>
      </Helmet>

      <Navbar />

      <main className="bpa-page">
        <section className="bpa-hero">
          <div className="container">
            <nav
              className="bpa-breadcrumb"
              aria-label="Breadcrumb"
            >
              <a href="/">Home</a>

              <i className="bi bi-chevron-right"></i>

              <a href="/solutions">
                Solutions
              </a>

              <i className="bi bi-chevron-right"></i>

              <span>
                Business Process Automation
              </span>
            </nav>

            <div className="bpa-hero-grid">
              <div className="bpa-hero-copy">
                <span className="bpa-label">
                  BUSINESS AUTOMATION
                </span>

                <h1>
                  Automate Workflows.
                  <br />
                  Scale with Confidence.
                </h1>

                <p>
                  Streamline repetitive tasks, reduce manual errors,
                  and connect your people, processes and systems with
                  intelligent business automation.
                </p>

                <div className="bpa-hero-actions">
                  <a
                    href="#bpa-contact"
                    className="bpa-primary-btn"
                  >
                    Automate Your Process

                    <i className="bi bi-arrow-right"></i>
                  </a>

                  <a
                    href="#bpa-contact"
                    className="bpa-secondary-btn"
                  >
                    Talk to an Expert

                    <i className="bi bi-chat-dots"></i>
                  </a>
                </div>
              </div>

              <div
                className="bpa-workflow-preview"
                aria-label="Business process automation workflow example"
              >
                <div className="bpa-flow-step step-one">
                  <div className="bpa-flow-icon green">
                    <i className="bi bi-inbox"></i>
                  </div>

                  <div className="bpa-flow-copy">
                    <div className="bpa-flow-number">
                      01
                    </div>

                    <div>
                      <strong>
                        Request Received
                      </strong>

                      <p>
                        A request is submitted through
                        the portal or system.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="bpa-flow-line line-one"></div>

                <div className="bpa-flow-step step-two">
                  <div className="bpa-flow-icon blue">
                    <i className="bi bi-person-check"></i>
                  </div>

                  <div className="bpa-flow-copy">
                    <div className="bpa-flow-number">
                      02
                    </div>

                    <div>
                      <strong>
                        Auto Approval
                      </strong>

                      <p>
                        The request is reviewed and
                        approved automatically.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="bpa-flow-line line-two"></div>

                <div className="bpa-flow-step step-three">
                  <div className="bpa-flow-icon orange">
                    <i className="bi bi-clipboard-check"></i>
                  </div>

                  <div className="bpa-flow-copy">
                    <div className="bpa-flow-number">
                      03
                    </div>

                    <div>
                      <strong>
                        Task Assigned
                      </strong>

                      <p>
                        The task is assigned to the
                        right person or team.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="bpa-flow-line line-three"></div>

                <div className="bpa-flow-step step-four">
                  <div className="bpa-flow-icon light-blue">
                    <i className="bi bi-bell"></i>
                  </div>

                  <div className="bpa-flow-copy">
                    <div className="bpa-flow-number">
                      04
                    </div>

                    <div>
                      <strong>
                        Notification Sent
                      </strong>

                      <p>
                        Stakeholders are notified
                        instantly.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="bpa-flow-line line-four"></div>

                <div className="bpa-flow-step step-five">
                  <div className="bpa-flow-icon green">
                    <i className="bi bi-check-circle"></i>
                  </div>

                  <div className="bpa-flow-copy">
                    <div className="bpa-flow-number">
                      05
                    </div>

                    <div>
                      <strong>
                        Process Completed
                      </strong>

                      <p>
                        The process is completed
                        and recorded.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="bpa-capabilities">
          <div className="container">
            <div className="bpa-section-heading">
              <span>
                POWERFUL AUTOMATION CAPABILITIES
              </span>

              <h2>
                Everything You Need to Automate and Grow
              </h2>
            </div>

            <div className="bpa-capability-grid">
              <article className="bpa-capability-card">
                <div className="bpa-capability-icon blue">
                  <i className="bi bi-diagram-3"></i>
                </div>

                <div>
                  <h3>
                    Workflow Automation
                  </h3>

                  <p>
                    Automate complex workflows and eliminate
                    repetitive manual tasks.
                  </p>
                </div>

                <i className="bi bi-arrow-right bpa-card-arrow"></i>
              </article>

              <article className="bpa-capability-card">
                <div className="bpa-capability-icon light-blue">
                  <i className="bi bi-person-check"></i>
                </div>

                <div>
                  <h3>
                    Approval Automation
                  </h3>

                  <p>
                    Set rules and automate approvals to
                    accelerate business decisions.
                  </p>
                </div>

                <i className="bi bi-arrow-right bpa-card-arrow"></i>
              </article>

              <article className="bpa-capability-card">
                <div className="bpa-capability-icon orange">
                  <i className="bi bi-bell"></i>
                </div>

                <div>
                  <h3>
                    Notifications &amp; Alerts
                  </h3>

                  <p>
                    Keep teams and customers informed
                    in real time.
                  </p>
                </div>

                <i className="bi bi-arrow-right bpa-card-arrow"></i>
              </article>

              <article className="bpa-capability-card">
                <div className="bpa-capability-icon green">
                  <i className="bi bi-database"></i>
                </div>

                <div>
                  <h3>
                    Data Entry Automation
                  </h3>

                  <p>
                    Capture, validate and process data
                    with accuracy and efficiency.
                  </p>
                </div>

                <i className="bi bi-arrow-right bpa-card-arrow"></i>
              </article>

              <article className="bpa-capability-card">
                <div className="bpa-capability-icon blue">
                  <i className="bi bi-puzzle"></i>
                </div>

                <div>
                  <h3>
                    System Integration
                  </h3>

                  <p>
                    Connect your tools and systems for a
                    seamless flow of information.
                  </p>
                </div>

                <i className="bi bi-arrow-right bpa-card-arrow"></i>
              </article>

              <article className="bpa-capability-card">
                <div className="bpa-capability-icon light-blue">
                  <i className="bi bi-graph-up-arrow"></i>
                </div>

                <div>
                  <h3>
                    Process Tracking
                  </h3>

                  <p>
                    Monitor every step with real-time
                    visibility and reporting.
                  </p>
                </div>

                <i className="bi bi-arrow-right bpa-card-arrow"></i>
              </article>
            </div>
          </div>
        </section>

        <section className="bpa-benefits">
          <div className="container">
            <div className="bpa-benefits-panel">
              <div className="bpa-benefits-intro">
                <span>
                  WHY AUTOMATE?
                </span>

                <h2>
                  Automation That
                  <br />
                  Drives Real Impact
                </h2>
              </div>

              <article className="bpa-benefit">
                <div>
                  <i className="bi bi-clock"></i>
                </div>

                <h3>
                  Save Time
                </h3>

                <p>
                  Eliminate manual work and focus on
                  what matters.
                </p>
              </article>

              <article className="bpa-benefit">
                <div>
                  <i className="bi bi-bullseye"></i>
                </div>

                <h3>
                  Improve Accuracy
                </h3>

                <p>
                  Reduce human errors and ensure
                  accurate data.
                </p>
              </article>

              <article className="bpa-benefit">
                <div>
                  <i className="bi bi-bar-chart"></i>
                </div>

                <h3>
                  Increase Efficiency
                </h3>

                <p>
                  Accelerate processes and improve
                  productivity.
                </p>
              </article>

              <article className="bpa-benefit">
                <div>
                  <i className="bi bi-shield-check"></i>
                </div>

                <h3>
                  Better Control
                </h3>

                <p>
                  Gain visibility and control over
                  every business process.
                </p>
              </article>
            </div>
          </div>
        </section>

        <section
          className="bpa-final"
          id="bpa-contact"
        >
          <div className="container">
            <div className="bpa-final-panel">
              <div className="bpa-final-copy">
                <span>
                  READY TO AUTOMATE?
                </span>

                <h2>
                  Let&apos;s Build Smarter
                  <br />
                  Processes Together
                </h2>

                <p>
                  Tell us about your process and we&apos;ll
                  help you automate it from end to end.
                </p>

                <a
                  href="#contact"
                  className="bpa-final-btn"
                >
                  Start a Conversation

                  <i className="bi bi-arrow-right"></i>
                </a>
              </div>

              <div className="bpa-final-visual">
                <div className="bpa-final-window">
                  <div className="bpa-window-dots">
                    <span></span>
                    <span></span>
                    <span></span>
                  </div>

                  <div className="bpa-final-flow">
                    <div className="bpa-final-node node-one">
                      <i className="bi bi-diagram-3"></i>
                    </div>

                    <span></span>

                    <div className="bpa-final-node node-two">
                      <i className="bi bi-check2"></i>
                    </div>

                    <span></span>

                    <div className="bpa-final-node node-three">
                      <i className="bi bi-clipboard-check"></i>
                    </div>

                    <span></span>

                    <div className="bpa-final-node node-four">
                      <i className="bi bi-person"></i>
                    </div>
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

export default BusinessProcessAutomation;