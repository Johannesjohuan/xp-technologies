import "./Industries.css";
import { Helmet } from "react-helmet-async";

import Navbar from "../../components/layout/Navbar/Navbar";
import Footer from "../../sections/Footer/Footer";

const industries = [
  {
    icon: "bi-bank",
    title: "Financial Services",
    description:
      "Secure, scalable systems for financial operations, automation and digital transformation.",
    tone: "blue",
  },
  {
    icon: "bi-cart3",
    title: "Retail & E-commerce",
    description:
      "Technology for sales, inventory, customers, payments and business operations.",
    tone: "green",
  },
  {
    icon: "bi-bell",
    title: "Hospitality & Restaurants",
    description:
      "Systems for reservations, operations, customer service and management.",
    tone: "orange",
  },
  {
    icon: "bi-buildings",
    title: "Manufacturing",
    description:
      "Connected systems for production, inventory, workflow and operational visibility.",
    tone: "purple",
  },
  {
    icon: "bi-heart",
    title: "NGOs & Nonprofits",
    description:
      "Digital systems that support programs, operations, reporting and organizational growth.",
    tone: "lime",
  },
  {
    icon: "bi-briefcase",
    title: "Professional Services",
    description:
      "Business systems for workflow, clients, projects, reporting and internal operations.",
    tone: "sky",
  },
  {
    icon: "bi-heart-pulse",
    title: "Healthcare",
    description:
      "Secure technology solutions for operations, data management and service delivery.",
    tone: "red",
  },
  {
    icon: "bi-mortarboard",
    title: "Education",
    description:
      "Digital systems that support administration, operations, learning and institutional management.",
    tone: "cyan",
  },
];

function HeroCity() {
  return (
    <div className="industry-city-visual" aria-hidden="true">
      <div className="industry-world-dots"></div>

      <div className="industry-city-ring ring-large"></div>
      <div className="industry-city-ring ring-small"></div>

      <div className="industry-city-platform platform-bottom"></div>
      <div className="industry-city-platform platform-middle"></div>
      <div className="industry-city-platform platform-top"></div>

      <div className="industry-city-buildings">
        <div className="industry-building building-small-left">
          <span></span>
          <span></span>
        </div>

        <div className="industry-building building-tower-one">
          <span></span>
          <span></span>
          <span></span>
          <span></span>
        </div>

        <div className="industry-building building-main">
          <div className="industry-building-roof"></div>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
        </div>

        <div className="industry-building building-tower-two">
          <span></span>
          <span></span>
          <span></span>
        </div>

        <div className="industry-building building-tower-three">
          <span></span>
          <span></span>
          <span></span>
        </div>

        <div className="industry-bank">
          <div className="industry-bank-roof"></div>

          <div className="industry-bank-columns">
            <i></i>
            <i></i>
            <i></i>
            <i></i>
          </div>
        </div>

        <div className="industry-shop shop-left">
          <div></div>
        </div>

        <div className="industry-shop shop-right">
          <div></div>
        </div>

        <div className="industry-factory">
          <div className="factory-roof"></div>
          <div className="factory-base"></div>
          <div className="factory-pipe"></div>
        </div>

        <div className="industry-education-icon">
          <i className="bi bi-mortarboard-fill"></i>
        </div>
      </div>

      <div className="industry-orbit-icon orbit-cart">
        <i className="bi bi-cart3"></i>
      </div>

      <div className="industry-orbit-icon orbit-chart">
        <i className="bi bi-bar-chart-line"></i>
      </div>

      <div className="industry-orbit-icon orbit-gear">
        <i className="bi bi-gear"></i>
      </div>

      <div className="industry-orbit-icon orbit-people">
        <i className="bi bi-people"></i>
      </div>

      <div className="industry-orbit-icon orbit-bag">
        <i className="bi bi-bag"></i>
      </div>
    </div>
  );
}

function BottomCity() {
  return (
    <div className="industry-bottom-visual" aria-hidden="true">
      <div className="industry-bottom-glow"></div>

      <div className="industry-bottom-network">
        <span className="network-arc arc-one"></span>
        <span className="network-arc arc-two"></span>
      </div>

      <div className="bottom-floating-icon bottom-bank">
        <i className="bi bi-bank"></i>
      </div>

      <div className="bottom-floating-icon bottom-cart">
        <i className="bi bi-cart3"></i>
      </div>

      <div className="bottom-floating-icon bottom-health">
        <i className="bi bi-heart-pulse"></i>
      </div>

      <div className="bottom-floating-icon bottom-factory">
        <i className="bi bi-buildings"></i>
      </div>

      <div className="bottom-floating-icon bottom-school">
        <i className="bi bi-mortarboard"></i>
      </div>

      <div className="industry-bottom-city">
        <span className="bottom-building b1"></span>
        <span className="bottom-building b2"></span>
        <span className="bottom-building b3"></span>
        <span className="bottom-building b4"></span>
        <span className="bottom-building b5"></span>
        <span className="bottom-building b6"></span>
        <span className="bottom-building b7"></span>
        <span className="bottom-building b8"></span>
        <span className="bottom-building b9"></span>
        <span className="bottom-building b10"></span>
        <span className="bottom-building b11"></span>
        <span className="bottom-building b12"></span>
        <span className="bottom-building b13"></span>
      </div>

      <div className="industry-bottom-ground"></div>
    </div>
  );
}

function Industries() {
  return (
    <>
      <Helmet>
        <title>
          Industries We Support | Technology Solutions | XP Technologies
        </title>

        <meta
          name="description"
          content="XP Technologies delivers adaptable technology solutions for financial services, retail, hospitality, manufacturing, NGOs, professional services, healthcare and education."
        />

        <meta name="robots" content="index, follow" />

        <link
          rel="canonical"
          href="https://www.xptechnologies.com/industries"
        />

        <meta
          property="og:title"
          content="Industries We Support | XP Technologies"
        />

        <meta
          property="og:description"
          content="Technology solutions designed around the operational needs of businesses and organizations across multiple industries."
        />

        <meta property="og:type" content="website" />

        <meta
          property="og:url"
          content="https://www.xptechnologies.com/industries"
        />
      </Helmet>

      <Navbar />

      <main className="industry-page">
        <section className="industry-hero">
          <div className="container">
            <div className="industry-hero-grid">
              <div className="industry-hero-copy">
                <span className="industry-eyebrow">
                  INDUSTRIES
                </span>

                <h1>
                  Solutions Built Around
                  <br />
                  Different <strong>Industries</strong>
                </h1>

                <p>
                  We build adaptable technology solutions for organizations
                  across different sectors, helping them improve operations,
                  modernize systems and support growth.
                </p>

                <a
                  href="#industry-contact"
                  className="industry-talk-btn"
                >
                  <i className="bi bi-chat-dots-fill"></i>
                  <span>Talk to an Expert</span>
                </a>
              </div>

              <HeroCity />
            </div>
          </div>
        </section>

        <section className="industry-supported">
          <div className="container">
            <div className="industry-section-heading">
              <span>
                INDUSTRIES WE SUPPORT
              </span>

              <h2>
                Technology Solutions for Every Industry
              </h2>
            </div>

            <div className="industry-card-grid">
              {industries.map((industry) => (
                <article
                  className="industry-sector-card"
                  key={industry.title}
                >
                  <div
                    className={`industry-sector-icon ${industry.tone}`}
                  >
                    <i className={`bi ${industry.icon}`}></i>
                  </div>

                  <h3>
                    {industry.title}
                  </h3>

                  <p>
                    {industry.description}
                  </p>

                  <span className="industry-sector-arrow">
                    <i className="bi bi-arrow-right"></i>
                  </span>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="industry-insights">
  <div className="container">
    <div className="industry-insights-grid">
      <div className="industry-insights-copy">
        <span className="industry-eyebrow">
          INDUSTRY-FOCUSED TECHNOLOGY
        </span>

        <h2>
          Technology Designed Around Real Industry Challenges
        </h2>

        <p>
          Every industry has different operational pressures, customer
          expectations, compliance requirements and growth priorities.
          XP Technologies develops business systems, enterprise software
          and digital solutions that are aligned with the way each sector
          actually works.
        </p>

        <p>
          From enterprise resource planning and workflow automation to
          infrastructure, security, system modernization and technical
          support, we help organizations replace disconnected processes
          with secure, scalable and integrated technology.
        </p>
      </div>

      <div className="industry-challenge-grid">
        <article>
          <i className="bi bi-diagram-3"></i>

          <div>
            <h3>Disconnected Processes</h3>
            <p>
              Connect departments, systems and information into more
              efficient digital workflows.
            </p>
          </div>
        </article>

        <article>
          <i className="bi bi-hourglass-split"></i>

          <div>
            <h3>Manual Operations</h3>
            <p>
              Reduce repetitive work through business process automation
              and smarter operational systems.
            </p>
          </div>
        </article>

        <article>
          <i className="bi bi-shield-lock"></i>

          <div>
            <h3>Security & Compliance</h3>
            <p>
              Protect business data and strengthen systems with secure,
              reliable infrastructure and access controls.
            </p>
          </div>
        </article>

        <article>
          <i className="bi bi-graph-up-arrow"></i>

          <div>
            <h3>Growth & Scalability</h3>
            <p>
              Build technology platforms that can support new locations,
              users, services and expanding business operations.
            </p>
          </div>
        </article>
      </div>
    </div>
  </div>
</section>

<section className="industry-solutions-overview">
  <div className="container">
    <div className="industry-section-heading">
      <span>
        HOW WE SUPPORT DIFFERENT INDUSTRIES
      </span>

      <h2>
        One Technology Partner Across Your Business Operations
      </h2>

      <p>
        Our solutions are designed to work together, giving organizations
        a stronger technology foundation across operations, management,
        security and growth.
      </p>
    </div>

    <div className="industry-solution-grid">
      <article>
        <div>
          <i className="bi bi-box-seam"></i>
        </div>

        <h3>Enterprise Business Systems</h3>

        <p>
          Centralize finance, inventory, sales, procurement, customers,
          reporting and other core operations in one connected system.
        </p>
      </article>

      <article>
        <div>
          <i className="bi bi-diagram-3"></i>
        </div>

        <h3>Business Process Automation</h3>

        <p>
          Automate approvals, notifications, data processing and repetitive
          workflows to improve speed and operational accuracy.
        </p>
      </article>

      <article>
        <div>
          <i className="bi bi-arrow-repeat"></i>
        </div>

        <h3>Legacy System Modernization</h3>

        <p>
          Upgrade aging software and outdated platforms into modern,
          maintainable and scalable digital systems.
        </p>
      </article>

      <article>
        <div>
          <i className="bi bi-headset"></i>
        </div>

        <h3>Technical Support & Maintenance</h3>

        <p>
          Keep business-critical systems reliable through monitoring,
          maintenance, updates and responsive technical support.
        </p>
      </article>

      <article>
        <div>
          <i className="bi bi-shield-check"></i>
        </div>

        <h3>Security & Infrastructure</h3>

        <p>
          Strengthen system security, business continuity, data protection
          and infrastructure performance.
        </p>
      </article>

      <article>
        <div>
          <i className="bi bi-bar-chart-line"></i>
        </div>

        <h3>Data & Operational Visibility</h3>

        <p>
          Give decision-makers better access to operational information,
          performance indicators and real-time business reporting.
        </p>
      </article>
    </div>
  </div>
</section>

<section className="industry-approach">
  <div className="container">
    <div className="industry-approach-panel">
      <div className="industry-approach-copy">
        <span>
          BUILT AROUND YOUR OPERATIONS
        </span>

        <h2>
          We Don&apos;t Force Every Industry Into the Same System
        </h2>

        <p>
          The needs of a retailer are different from those of a healthcare
          provider, manufacturer, nonprofit or financial institution.
          Our approach begins with your workflows, users, business goals
          and existing technology environment.
        </p>
      </div>

      <div className="industry-approach-points">
        <div>
          <i className="bi bi-check-circle-fill"></i>
          <span>Industry-specific workflows and requirements</span>
        </div>

        <div>
          <i className="bi bi-check-circle-fill"></i>
          <span>Customizable and scalable system architecture</span>
        </div>

        <div>
          <i className="bi bi-check-circle-fill"></i>
          <span>Integration with existing business applications</span>
        </div>

        <div>
          <i className="bi bi-check-circle-fill"></i>
          <span>Secure access, infrastructure and data management</span>
        </div>

        <div>
          <i className="bi bi-check-circle-fill"></i>
          <span>Ongoing technical support and system improvement</span>
        </div>

        <div>
          <i className="bi bi-check-circle-fill"></i>
          <span>Technology designed to support long-term growth</span>
        </div>
      </div>
    </div>
  </div>
</section>

<section className="industry-faq">
  <div className="container">
    <div className="industry-section-heading">
      <span>
        FREQUENTLY ASKED QUESTIONS
      </span>

      <h2>
        Technology Solutions for Different Industries
      </h2>
    </div>

    <div className="industry-faq-grid">
      <article>
        <h3>
          Can XP Technologies build software for my specific industry?
        </h3>

        <p>
          Yes. Our systems can be designed around the processes, users,
          operational requirements and business goals of different sectors
          rather than relying on a single fixed software structure.
        </p>
      </article>

      <article>
        <h3>
          Can you integrate with systems we already use?
        </h3>

        <p>
          Yes. Where appropriate, we can design solutions that integrate
          with existing applications, databases, payment platforms and
          other business systems.
        </p>
      </article>

      <article>
        <h3>
          Do you support growing and multi-location organizations?
        </h3>

        <p>
          Yes. Our solutions can be designed for growing teams, multiple
          departments, branches and locations while maintaining centralized
          operational visibility.
        </p>
      </article>

      <article>
        <h3>
          Do you provide support after deployment?
        </h3>

        <p>
          Yes. XP Technologies provides technical support, maintenance,
          monitoring and ongoing system improvements to help keep business
          systems reliable and secure.
        </p>
      </article>
    </div>
  </div>
</section>

        <section
          className="industry-cta-section"
          id="industry-contact"
        >
          <div className="container">
            <div className="industry-cta">
              <div className="industry-cta-copy">
                <h2>
                  Built for the Way
                  <br />
                  Your <strong>Industry</strong> Works
                </h2>

                <span className="industry-cta-line"></span>

                <p>
                  Every industry operates differently.
                  We adapt our solutions around your processes,
                  requirements and goals rather than forcing
                  your organization into a fixed system.
                </p>

                <a
                  href="#contact"
                  className="industry-start-btn"
                >
                  <span>Start a Conversation</span>
                  <i className="bi bi-arrow-right"></i>
                </a>
              </div>

              <BottomCity />
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}

export default Industries;