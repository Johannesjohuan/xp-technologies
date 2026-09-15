import { useState } from "react";
import { Helmet } from "react-helmet-async";
import "./Resources.css";

import Navbar from "../../components/layout/Navbar/Navbar";
import Footer from "../../sections/Footer/Footer";

const insights = [
  {
    category: "ERP",
    title: "What Is an ERP System and Does Your Business Need One?",
    text: "Learn how ERP software connects customers, operations, orders, inventory, finance and reporting, and when a growing business should consider moving to an integrated system.",
    icon: "bi-boxes",
  },
  {
    category: "AUTOMATION",
    title: "What Business Processes Should You Automate First?",
    text: "Discover which repetitive workflows are good candidates for business process automation and how automation can reduce manual work, delays and operational errors.",
    icon: "bi-diagram-3",
  },
  {
    category: "SAAS & SOFTWARE",
    title: "Custom ERP, SaaS or Off-the-Shelf Software: Which Is Right for You?",
    text: "Compare custom ERP development, SaaS solutions and ready-made business software to understand which approach best fits your processes, budget and growth plans.",
    icon: "bi-cloud",
  },
];

const guides = [
  {
    icon: "bi-clipboard-check",
    title: "ERP Readiness Checklist for Growing Businesses",
    text: "Assess your processes, teams, data and operational challenges before implementing or developing an ERP system.",
  },
  {
    icon: "bi-file-earmark-text",
    title: "Planning a Custom Business Software Project",
    text: "Understand how to define workflows, software requirements, integrations and priorities before starting a custom software development project.",
  },
];

const questions = [
  {
    question: "What is an ERP system and how does it work?",
    answer:
      "An Enterprise Resource Planning (ERP) system brings important business processes and data into one connected platform. Depending on the business, an ERP can manage customers, orders, inventory, production, employees, payments, reporting and other operational workflows instead of relying on disconnected spreadsheets and applications.",
  },
  {
    question: "Does my small business need an ERP system?",
    answer:
      "A small or growing business may benefit from ERP software when spreadsheets, paperwork or separate applications make it difficult to manage customers, orders, inventory, payments, reporting or multiple locations. The right system should match the size and actual operational needs of the business rather than introduce unnecessary complexity.",
  },
  {
    question: "What is custom ERP software?",
    answer:
      "Custom ERP software is a business management system designed around the specific processes and requirements of an organisation. Instead of forcing the business to completely adapt to generic software, the system can be designed around workflows such as customer management, order processing, inventory, production, payments and reporting.",
  },
  {
    question: "What is the difference between ERP and SaaS?",
    answer:
      "ERP describes software used to integrate and manage business operations, while SaaS, or Software as a Service, describes a way software is delivered over the internet, usually through a subscription. An ERP system can itself be delivered as a SaaS application, so the two terms describe different aspects of business software.",
  },
  {
    question: "Can XP Technologies build a SaaS application for my business?",
    answer:
      "Yes. XP Technologies can design custom web-based business applications and SaaS platforms around defined business requirements, user roles, workflows and integrations. The appropriate architecture depends on the product, expected users, security requirements and plans for future growth.",
  },
  {
    question: "ERP vs custom software: which does my business need?",
    answer:
      "The answer depends on the problem you are trying to solve. ERP is appropriate when several business functions need to operate through one connected system, while custom software may focus on a particular process or unique requirement. XP Technologies begins by understanding the business workflow before recommending an approach.",
  },
  {
    question: "Should I buy an existing ERP or build a custom ERP system?",
    answer:
      "Off-the-shelf ERP software can be suitable when your processes closely match standard functionality. Custom ERP development may be more appropriate when your organisation has specialised workflows, integrations or operational requirements that generic systems cannot support efficiently.",
  },
  {
    question: "What is the best alternative to spreadsheets for managing a growing business?",
    answer:
      "When spreadsheets become difficult to maintain, businesses can move to a centralised business management system, ERP platform or custom application. A connected system can provide controlled access, structured workflows, centralised records, reporting and automation without relying on multiple disconnected spreadsheets.",
  },
  {
    question: "Can one system manage customers, orders, payments and business operations?",
    answer:
      "Yes. A properly designed business management or ERP system can connect customer records, orders, payments, inventory, production, reporting and other operational processes. The exact modules depend on how the business operates.",
  },
  {
    question: "Can ERP software manage multiple branches or business locations?",
    answer:
      "Yes. ERP and business management software can be designed to support multiple branches while maintaining centralised reporting and controlled user access. Depending on the business, each branch can manage its own operations while authorised management users maintain visibility across the organisation.",
  },
  {
    question: "What is business process automation?",
    answer:
      "Business process automation uses software to reduce repetitive manual work and move information through defined workflows automatically. Examples include order processing, approvals, notifications, customer onboarding, inventory updates, document generation and operational reporting.",
  },
  {
    question: "What business processes should I automate first?",
    answer:
      "Businesses should usually begin with repetitive, time-consuming processes that frequently create delays or errors. The best automation opportunities vary by organisation, so the first step is to understand the existing workflow and identify where technology can produce meaningful improvements.",
  },
  {
    question: "Can XP Technologies build software around our existing business process?",
    answer:
      "Yes. XP Technologies takes a process-first approach to software development. We study how the business currently operates, identify problems and inefficiencies, and then design the system around the workflows that need to be improved rather than forcing every business into the same software structure.",
  },
  {
    question: "Can you integrate with software we already use?",
    answer:
      "Where technically supported, existing applications, databases, payment services and other platforms can be connected using APIs and system integrations. Integration requirements are reviewed during discovery to determine what can be connected securely and reliably.",
  },
  {
    question: "Do you modernise existing or legacy business systems?",
    answer:
      "Yes. XP Technologies can assess legacy software and older business systems to identify technical limitations, inefficient workflows and modernisation opportunities. Depending on the system, this may involve redesigning interfaces, rebuilding components, improving integrations or developing a modern replacement.",
  },
  {
    question: "How much does a custom ERP system cost?",
    answer:
      "Custom ERP development does not have one fixed price because cost depends on the number of users, business processes, modules, integrations, security requirements and overall complexity. XP Technologies first studies the required workflow and scope before providing an appropriate project estimate.",
  },
  {
    question: "How long does it take to build a custom ERP system?",
    answer:
      "Development time depends on the size and complexity of the system. A focused business application may require significantly less time than an ERP platform involving multiple departments, integrations and workflows. The project is therefore scoped and divided into appropriate delivery stages before development begins.",
  },
  {
    question: "How do I get a custom ERP system built for my business?",
    answer:
      "The process normally begins with a discovery conversation about your business, existing tools, users, operational challenges and desired outcomes. Those workflows are then translated into requirements before the system architecture, modules, project scope and implementation approach are defined.",
  },
  {
    question: "What industries can use custom ERP and business management software?",
    answer:
      "Custom ERP and business software can support organisations across industries including fashion, retail, hospitality, manufacturing, logistics, healthcare, education, professional services and nonprofit operations. The functionality should be designed around the processes of the particular organisation.",
  },
  {
    question: "Can you build ERP software for a fashion or tailoring business?",
    answer:
      "Yes. Fashion and tailoring businesses can use custom software to manage customer profiles, measurements, orders, production stages, assignments, payments and collections through a connected workflow. XP Technologies' portfolio demonstrates how these operational processes can be represented within a business management system.",
  },
  {
    question: "Can you build business software for hotels, restaurants and hospitality companies?",
    answer:
      "Yes. Hospitality businesses can require systems for areas such as operations, customer management, internal workflows, reporting, inventory and integrations. The appropriate solution depends on the existing systems and the specific operational problem the business needs to solve.",
  },
  {
    question: "Can you develop ERP software for manufacturing and logistics businesses?",
    answer:
      "Yes. Depending on requirements, custom business systems can support production workflows, inventory, order tracking, operational reporting, logistics processes and multi-location operations. Discovery is used to determine which modules and integrations are actually required.",
  },
  {
    question: "How does a software project with XP Technologies begin?",
    answer:
      "A project begins with discovery. We discuss the business problem, existing processes, users, current software, operational challenges and desired outcomes. This allows the proposed system to be based on real business requirements before development begins.",
  },
  {
    question: "Do you provide support after software deployment?",
    answer:
      "Yes. XP Technologies can provide ongoing technical support, maintenance, system improvements and assistance after deployment. The appropriate support arrangement depends on the system and the organisation's requirements.",
  },
];

function ResourceVisual({ icon, label }) {
  return (
    <div className="resource-card-visual">
      <div className="resource-card-grid"></div>

      <span>
        <i className={`bi ${icon}`}></i>
      </span>

      <strong>{label}</strong>
    </div>
  );
}

function Resources() {
  const [openQuestion, setOpenQuestion] = useState(null);

  const toggleQuestion = (index) => {
    setOpenQuestion(openQuestion === index ? null : index);
  };

  return (
    <>
      <Helmet>
        <title>
          ERP, SaaS & Business Software Resources | XP Technologies
        </title>

        <meta
          name="description"
          content="Explore ERP, custom ERP development, SaaS, business software, workflow automation, system integration and legacy modernisation insights from XP Technologies."
        />
      </Helmet>

      <Navbar />

      <main className="resources-page">
        <section className="resources-hero">
          <div className="resources-hero-grid"></div>
          <div className="resources-hero-glow"></div>

          <div className="container">
            <div className="resources-hero-layout">
              <div className="resources-hero-content">
                <span className="resources-eyebrow">
                  ERP · SAAS · AUTOMATION · BUSINESS SOFTWARE
                </span>

                <h1>
                  Practical guidance
                  <br />
                  for building
                  <br />
                  <strong>better business systems.</strong>
                </h1>

                <span className="resources-hero-line"></span>

                <p>
                  Explore practical insights on ERP systems,
                  custom business software, SaaS development,
                  workflow automation, system integration and
                  technology for growing businesses.
                </p>
              </div>

              <div className="resources-hero-visual">
                <div className="resources-laptop-wrap">
                  <img
                    src="/images/resources-laptop.png"
                    alt="XP Technologies business software workspace"
                    className="resources-laptop-image"
                  />

                  <div className="resources-image-shade"></div>
                </div>
              </div>
            </div>

            <div className="resources-featured">
              <div className="resources-featured-copy">
                <span>FEATURED ERP INSIGHT</span>

                <h2>
                  Has your business
                  <br />
                  outgrown spreadsheets?
                </h2>

                <p>
                  Discover the signs that spreadsheets and
                  disconnected applications may be limiting
                  your business and when it could be time for
                  ERP or a connected business management system.
                </p>

                <a href="#latest-insights">
                  Explore ERP Insights
                  <i className="bi bi-arrow-right"></i>
                </a>
              </div>

              <div className="resources-featured-image">
                <div className="featured-screen">
                  <div className="featured-screen-top">
                    <span></span>
                    <span></span>
                    <span></span>
                  </div>

                  <div className="featured-dashboard">
                    <div className="featured-bars">
                      <i></i>
                      <i></i>
                      <i></i>
                      <i></i>
                      <i></i>
                      <i></i>
                      <i></i>
                    </div>

                    <div className="featured-chart">
                      <span></span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section
          className="resources-insights"
          id="latest-insights"
        >
          <div className="container">
            <div className="resources-section-heading">
              <div>
                <span>ERP & BUSINESS SOFTWARE INSIGHTS</span>

                <h2>
                  Understand your options before you invest
                </h2>
              </div>

              <a href="#resources-faq">
                Explore common questions
                <i className="bi bi-arrow-right"></i>
              </a>
            </div>

            <div className="resources-insight-grid">
              {insights.map((item) => (
                <article
                  className="resource-insight-card"
                  key={item.title}
                >
                  <ResourceVisual
                    icon={item.icon}
                    label={item.category}
                  />

                  <div className="resource-insight-content">
                    <span>{item.category}</span>

                    <h3>{item.title}</h3>

                    <p>{item.text}</p>

                    <a href="#resources-faq">
                      Learn More
                      <i className="bi bi-arrow-right"></i>
                    </a>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="resources-guides">
          <div className="container">
            <div className="resources-section-heading">
              <div>
                <span>PRACTICAL SOFTWARE GUIDES</span>

                <h2>
                  Plan your next ERP or software project
                </h2>
              </div>

              <a href="#resources-guides">
                Explore guides
                <i className="bi bi-arrow-right"></i>
              </a>
            </div>

            <div
              className="resources-guide-grid"
              id="resources-guides"
            >
              {guides.map((guide) => (
                <article
                  className="resource-guide-card"
                  key={guide.title}
                >
                  <span className="resource-guide-icon">
                    <i className={`bi ${guide.icon}`}></i>
                  </span>

                  <div>
                    <h3>{guide.title}</h3>

                    <p>{guide.text}</p>

                    <a href="#resources-faq">
                      Read Guide
                      <i className="bi bi-arrow-right"></i>
                    </a>
                  </div>

                  <i className="bi bi-chevron-right resource-guide-arrow"></i>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section
          className="resources-faq"
          id="resources-faq"
        >
          <div className="container">
            <div className="resources-faq-heading">
              <span>
                ERP, SAAS & BUSINESS SOFTWARE QUESTIONS
              </span>

              <h2>
                Questions businesses ask before choosing
                new software
              </h2>
            </div>

            <div className="resources-faq-grid">
              {questions.map((item, index) => (
                <article
                  className={`resource-faq-item ${
                    openQuestion === index ? "open" : ""
                  }`}
                  key={item.question}
                >
                  <button
                    type="button"
                    aria-expanded={openQuestion === index}
                    onClick={() => toggleQuestion(index)}
                  >
                    <span>{item.question}</span>

                    <i
                      className={`bi ${
                        openQuestion === index
                          ? "bi-dash"
                          : "bi-plus"
                      }`}
                    ></i>
                  </button>

                  <div className="resource-faq-answer">
                    <p>{item.answer}</p>
                  </div>
                </article>
              ))}
            </div>

            <div className="resources-final-cta">
              <div className="resources-final-icon">
                <i className="bi bi-chat-dots"></i>
              </div>

              <div>
                <h3>
                  Need an ERP or custom business system?
                </h3>

                <p>
                  Tell us how your business currently works
                  and the problem you want technology to solve.
                </p>
              </div>

              <a href="#contact">
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

export default Resources;