import { Helmet } from "react-helmet-async";
import "./About.css";

import Navbar from "../../components/layout/Navbar/Navbar";
import Footer from "../../sections/Footer/Footer";

const solutions = [
  {
    icon: "bi-boxes",
    title: "Enterprise ERP Solutions",
    text: "Business systems that connect processes, people and operational data in one structured environment.",
  },
  {
    icon: "bi-gear-wide-connected",
    title: "Business Process Automation",
    text: "Digital workflows that reduce repetitive tasks and improve the way everyday operations are managed.",
  },
  {
    icon: "bi-arrow-repeat",
    title: "Legacy System Modernisation",
    text: "Modernise outdated applications and workflows while preserving the processes your business depends on.",
  },
  {
    icon: "bi-shield-check",
    title: "Security & Infrastructure",
    text: "Build secure and dependable foundations for critical business applications and operational systems.",
  },
  {
    icon: "bi-headset",
    title: "Technical Support & Maintenance",
    text: "Ongoing technical support focused on reliability, continuity and the long-term health of your systems.",
  },
  {
    icon: "bi-code-slash",
    title: "Custom Software Development",
    text: "Purpose-built software designed around the specific requirements and workflows of your organisation.",
  },
];

const principles = [
  {
    icon: "bi-buildings",
    title: "Business First",
    text: "We begin with the operational problem before deciding what technology should be built.",
  },
  {
    icon: "bi-diagram-3",
    title: "Workflow Driven",
    text: "Systems are structured around how people, information and processes actually move through the business.",
  },
  {
    icon: "bi-braces",
    title: "Purpose Built",
    text: "We design software around the requirements of the business rather than forcing generic tools into the workflow.",
  },
  {
    icon: "bi-arrow-up-right-circle",
    title: "Built to Evolve",
    text: "Our systems are designed with maintainability and future business requirements in mind.",
  },
];

const approach = [
  {
    number: "01",
    title: "Understand",
    text: "We study the business, users, existing systems and the operational challenges that need to be solved.",
  },
  {
    number: "02",
    title: "Design",
    text: "We structure the workflow and define a practical system around the way the business needs to operate.",
  },
  {
    number: "03",
    title: "Build",
    text: "We develop secure, maintainable and scalable software around the agreed business requirements.",
  },
  {
    number: "04",
    title: "Deploy & Support",
    text: "We launch the system, support its operation and improve it as business needs continue to evolve.",
  },
];

function About() {
  return (
    <>
      <Helmet>
        <title>
          About XP Technologies | Business Software & ERP Development
        </title>

        <meta
          name="description"
          content="Learn about XP Technologies and our approach to ERP solutions, business process automation, system modernisation and custom business software."
        />
      </Helmet>

      <Navbar />

      <main className="about-page">
        <section className="about-hero">
          <div className="about-hero-grid"></div>
          <div className="about-hero-glow about-hero-glow-one"></div>
          <div className="about-hero-glow about-hero-glow-two"></div>

          <div className="container">
            <div className="about-hero-layout">
              <div className="about-hero-content">
                <span className="about-eyebrow">
                  ABOUT XP TECHNOLOGIES
                </span>

                <h1>
                  We build systems
                  <br />
                  that help businesses
                  <br />
                  <strong>run better.</strong>
                </h1>

                <span className="about-hero-line"></span>

                <p>
                  XP Technologies designs and develops business
                  software around real operational challenges —
                  from ERP modernisation and workflow automation
                  to custom platforms built around the way a
                  business actually works.
                </p>

                <div className="about-hero-actions">
                  <a
                    href="#contact"
                    className="about-primary-btn"
                  >
                    Start a Conversation
                    <i className="bi bi-arrow-right"></i>
                  </a>

                  <a
                    href="#our-story"
                    className="about-story-link"
                  >
                    <span>
                      <i className="bi bi-arrow-down"></i>
                    </span>

                    Our Story
                  </a>
                </div>
              </div>

              <div className="about-hero-visual">
                <div className="about-office-image-wrap">
                  <img
                    src="/images/about-office.png"
                    alt="Modern XP Technologies workspace"
                    className="about-office-image"
                  />

                  <div className="about-office-image-overlay"></div>
                  <div className="about-office-image-shine"></div>

                 
                </div>

               

                
              </div>
            </div>
          </div>
        </section>

        <section
          className="about-story"
          id="our-story"
        >
          <div className="container">
            <div className="about-section-marker">
              <span>01</span>
              <strong>WHO WE ARE</strong>
            </div>

            <div className="about-story-layout">
              <div className="about-story-heading">
                <span className="about-section-eyebrow">
                  TECHNOLOGY WITH A BUSINESS PURPOSE
                </span>

                <h2>
                  Technology built
                  <br />
                  around your business.
                </h2>

                <span className="about-small-line"></span>
              </div>

              <div className="about-story-copy">
                <p>
                  Businesses rarely struggle because they need
                  more software. They struggle when information
                  is fragmented, processes are inefficient or
                  existing systems no longer reflect how the
                  organisation operates.
                </p>

                <p>
                  That is where we focus. We look at the business
                  first, its people, workflows, information and
                  operational challenges, and then determine how
                  technology can make those processes work better.
                </p>

                <p>
                  The result is software designed with a clear
                  purpose: to make everyday operations easier to
                  manage, information easier to access and
                  business processes easier to understand.
                </p>
              </div>
            </div>

            <div className="about-principles">
              {principles.map((principle) => (
                <article key={principle.title}>
                  <span>
                    <i className={`bi ${principle.icon}`}></i>
                  </span>

                  <h3>{principle.title}</h3>

                  <p>{principle.text}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="about-belief">
          <div className="about-belief-grid"></div>

          <div className="container">
            <div className="about-section-marker light">
              <span>02</span>
              <strong>WHAT WE BELIEVE</strong>
            </div>

            <div className="about-belief-layout">
              <div className="about-belief-copy">
                <span>SOFTWARE SHOULD FIT THE BUSINESS</span>

                <h2>
                  The technology should adapt
                  to the operation — not the
                  other way around.
                </h2>
              </div>

              <div className="about-belief-text">
                <p>
                  Every organisation has its own workflows,
                  responsibilities, bottlenecks and ways of
                  managing information.
                </p>

                <p>
                  Our role is to understand those differences and
                  build technology that supports them. That can
                  mean modernising an existing ERP, automating a
                  manual workflow or building a completely custom
                  business management platform.
                </p>

                <div className="about-belief-highlight">
                  <span>
                    <i className="bi bi-quote"></i>
                  </span>

                  <strong>
                    Understand the operation. Structure the
                    workflow. Build the technology around it.
                  </strong>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="about-solutions">
          <div className="container">
            <div className="about-section-marker">
              <span>03</span>
              <strong>WHAT WE DO</strong>
            </div>

            <div className="about-centered-heading">
              <span>
                BUSINESS SOFTWARE & TECHNOLOGY
              </span>

              <h2>
                Solutions designed around
                operational challenges.
              </h2>

              <p>
                Our work covers the systems and technology
                businesses rely on to manage operations, automate
                processes and improve the way information moves
                across the organisation.
              </p>
            </div>

            <div className="about-solutions-grid">
              {solutions.map((solution) => (
                <article
                  key={solution.title}
                  className="about-solution-card"
                >
                  <div className="about-solution-icon">
                    <i className={`bi ${solution.icon}`}></i>
                  </div>

                  <h3>{solution.title}</h3>

                  <p>{solution.text}</p>

                  <span className="about-solution-line"></span>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="about-approach">
          <div className="about-approach-pattern"></div>
          <div className="about-approach-glow"></div>

          <div className="container">
            <div className="about-section-marker light">
              <span>04</span>
              <strong>OUR APPROACH</strong>
            </div>

            <div className="about-approach-heading">
              <div>
                <span>
                  FROM BUSINESS PROBLEM TO WORKING SYSTEM
                </span>

                <h2>
                  Business understanding
                  <br />
                  meets technical execution.
                </h2>
              </div>

              <p>
                Our process keeps the business problem at the
                centre of every technical decision, from initial
                discovery through deployment and ongoing support.
              </p>
            </div>

            <div className="about-approach-grid">
              {approach.map((item, index) => (
                <article
                  key={item.number}
                  className="about-approach-step"
                >
                  <div className="about-step-top">
                    <span>{item.number}</span>

                    {index < approach.length - 1 && (
                      <i></i>
                    )}
                  </div>

                  <h3>{item.title}</h3>

                  <p>{item.text}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="about-work">
          <div className="container">
            <div className="about-section-marker">
              <span>05</span>
              <strong>OUR WORK</strong>
            </div>

            <div className="about-work-layout">
              <div className="about-work-copy">
                <span className="about-section-eyebrow">
                  SYSTEMS BUILT AROUND REAL OPERATIONS
                </span>

                <h2>
                  Our approach becomes clearer
                  when you see the systems.
                </h2>

                <p>
                  Explore examples of business software designed
                  around actual operational requirements,
                  including ERP modernisation and custom fashion
                  business management systems.
                </p>

                <a
                  href="/portfolio"
                  className="about-outline-btn"
                >
                  Explore Our Work
                  <i className="bi bi-arrow-right"></i>
                </a>
              </div>

              <div className="about-work-panel">
                <div className="about-work-panel-top">
                  <span>SELECTED WORK</span>

                  <i className="bi bi-arrow-up-right"></i>
                </div>

                <div className="about-work-project">
                  <span>01</span>

                  <div>
                    <strong>Voodi</strong>

                    <p>
                      Multi-branch fashion ERP
                      modernisation.
                    </p>
                  </div>

                  <i className="bi bi-arrow-right"></i>
                </div>

                <div className="about-work-project">
                  <span>02</span>

                  <div>
                    <strong>Style Wright</strong>

                    <p>
                      Fashion business management
                      and production workflow system.
                    </p>
                  </div>

                  <i className="bi bi-arrow-right"></i>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section
          className="about-contact"
          id="contact"
        >
          <div className="container">
            <div className="about-contact-box">
              <div className="about-contact-icon">
                <i className="bi bi-chat-dots"></i>
              </div>

              <div className="about-contact-copy">
                <span>
                  HAVE A BUSINESS CHALLENGE?
                </span>

                <h2>
                  Let's talk about what
                  technology can do about it.
                </h2>

                <p>
                  Tell us where your operations are slowing down,
                  becoming fragmented or difficult to manage.
                </p>
              </div>

              <a
                href="mailto:info@xptechnologies.com"
                className="about-contact-btn"
              >
                Start a Conversation
                <i className="bi bi-arrow-right"></i>
              </a>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}

export default About;