import "./VoodiProject.css";
import { Helmet } from "react-helmet-async";

import Navbar from "../../../components/layout/Navbar/Navbar";
import Footer from "../../../sections/Footer/Footer";

const challenges = [
  "Customer records were overloaded and difficult to search quickly.",
  "Branch operations worked in isolation with limited visibility across locations.",
  "Outstanding customer balances could remain hidden when customers moved between branches.",
  "A customer could start a new job at another location while still owing at a previous branch.",
  "Payments made at one branch were not reliably reflected across the wider business.",
  "The previous system did not properly reflect the stages involved in fashion production.",
  "Receipt generation and customer payment documentation depended heavily on manual processes.",
  "The business lacked structured visibility into debtors, overdue collections and customer balances.",
  "Currency handling was limited and required additional manual intervention.",
  "Customer collection dates and other important events could easily be missed.",
];

const solutions = [
  {
    icon: "bi-people",
    title: "Centralised Customer Records",
    text: "Customer information can be searched and accessed through a structured business-wide profile instead of fragmented records.",
  },
  {
    icon: "bi-buildings",
    title: "Multi-Branch Visibility",
    text: "Authorised users can understand relevant customer activity across locations while branch-level operational controls remain structured.",
  },
  {
    icon: "bi-wallet2",
    title: "Outstanding Balance Tracking",
    text: "Customer debts remain visible regardless of the branch where the original transaction occurred.",
  },
  {
    icon: "bi-rulers",
    title: "Reusable Measurement Profiles",
    text: "Measurements remain attached to customer profiles so they can be reused for future jobs without unnecessary re-entry.",
  },
  {
    icon: "bi-gear",
    title: "Structured Production",
    text: "Jobs move through identifiable production stages including active processing, completion and collection.",
  },
  {
    icon: "bi-receipt",
    title: "Receipt Management",
    text: "Payments and receipts are recorded in a structured history that makes customer accounts easier to understand.",
  },
  {
    icon: "bi-envelope-check",
    title: "Automated Customer Receipts",
    text: "Transaction documentation can be generated and delivered digitally to customers instead of relying only on manual handling.",
  },
  {
    icon: "bi-currency-exchange",
    title: "Multi-Currency Support",
    text: "The modernised workflow supports different payment currencies and reduces the need for manual conversion processes.",
  },
  {
    icon: "bi-bell",
    title: "Operational Notifications",
    text: "Collections, overdue pickups, birthdays and other important activities are surfaced through dashboard notifications.",
  },
];

const workflow = [
  {
    number: "01",
    icon: "bi-search",
    title: "Search Customer",
    text: "Find an existing customer using their name, phone number, email or account information.",
  },
  {
    number: "02",
    icon: "bi-person-vcard",
    title: "Customer Profile",
    text: "View customer details, home branch, contact information and relevant account history.",
  },
  {
    number: "03",
    icon: "bi-rulers",
    title: "Measurements",
    text: "Retrieve saved measurement information already connected to the customer's profile.",
  },
  {
    number: "04",
    icon: "bi-scissors",
    title: "Assign Job",
    text: "Create the new clothing job and connect it to the customer, measurement and branch information.",
  },
  {
    number: "05",
    icon: "bi-gear",
    title: "Production",
    text: "Follow the job through the production process with clearer operational status visibility.",
  },
  {
    number: "06",
    icon: "bi-bag-check",
    title: "Collection",
    text: "Track completed clothes, today's collections and overdue customer pickups.",
  },
];

const impact = [
  {
    icon: "bi-diagram-3",
    title: "Connected Operations",
    text: "Customer, financial and production information now work as parts of one operational system.",
  },
  {
    icon: "bi-eye",
    title: "Better Visibility",
    text: "Staff can understand customer activity, balances, jobs and collections with far greater clarity.",
  },
  {
    icon: "bi-shield-check",
    title: "Stronger Financial Control",
    text: "Outstanding balances remain visible across the organisation and are easier to reconcile.",
  },
  {
    icon: "bi-lightning-charge",
    title: "Faster Information Access",
    text: "Searchable customer profiles reduce the friction caused by overloaded and fragmented records.",
  },
  {
    icon: "bi-arrow-repeat",
    title: "Structured Workflow",
    text: "The ERP reflects the actual journey from customer registration through production and collection.",
  },
];

function MiniDashboard() {
  return (
    <div className="voodi-case-dashboard">
      <div className="voodi-case-dashboard-top">
        <div className="voodi-case-dashboard-brand">
          <span>V</span>

          <div>
            <strong>Voodi</strong>
            <small>ERP System</small>
          </div>
        </div>

        <div className="voodi-case-dashboard-user">
          <i className="bi bi-bell"></i>
          <span>A</span>
        </div>
      </div>

      <div className="voodi-case-dashboard-body">
        <aside>
          <strong>OVERVIEW</strong>

          <div className="active">
            <i className="bi bi-grid"></i>
            Dashboard
          </div>

          <div>
            <i className="bi bi-rulers"></i>
            Measurements
          </div>

          <div>
            <i className="bi bi-scissors"></i>
            Assign Job
          </div>

          <div>
            <i className="bi bi-person-plus"></i>
            Registration
          </div>

          <strong>PRODUCTION</strong>

          <div>
            <i className="bi bi-gear"></i>
            In Process
          </div>

          <div>
            <i className="bi bi-check-circle"></i>
            Ready Clothes
          </div>

          <div>
            <i className="bi bi-bag-check"></i>
            Collections
          </div>
        </aside>

        <main>
          <div className="voodi-case-dashboard-heading">
            <div>
              <span>DASHBOARD</span>
              <h3>Welcome, Admin</h3>
            </div>

            <small>Business Overview</small>
          </div>

          <div className="voodi-case-dashboard-stats">
            <article>
              <span>Total Customers</span>
              <strong>672</strong>
            </article>

            <article>
              <span>Outstanding Balance</span>
              <strong>€160,000</strong>
            </article>

            <article>
              <span>Clothes In Process</span>
              <strong>1,500</strong>
            </article>

            <article>
              <span>Overdue Collections</span>
              <strong>25</strong>
            </article>

            <article>
              <span>Today's Collections</span>
              <strong>7</strong>
            </article>

            <article>
              <span>Birthdays This Month</span>
              <strong>3</strong>
            </article>
          </div>

          <div className="voodi-case-customer-search">
            <div>
              <strong>
                Search Customer / Receipt / Account
              </strong>

              <span>
                Find customer information across the business
              </span>
            </div>

            <div className="voodi-case-search-control">
              <i className="bi bi-search"></i>

              <span>
                Sophia Clinton
              </span>

              <button type="button">
                SEARCH
              </button>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
function OldSystemPreview() {
  return (
    <div className="voodi-old-system">
      <div className="voodi-old-topbar">
        <div className="voodi-old-brand">
          <span>V</span>

          <div>
            <strong>Voodi Management</strong>
            <small>Business System</small>
          </div>
        </div>

        <div className="voodi-old-user">
          Admin
        </div>
      </div>

      <div className="voodi-old-layout">
        <aside className="voodi-old-sidebar">
          <strong>MENU</strong>

          <span>Dashboard</span>
          <span>Customers</span>
          <span>New Registration</span>
          <span>Measurements</span>
          <span>Jobs</span>
          <span>Payments</span>
          <span>Receipts</span>
          <span>Reports</span>
        </aside>

        <div className="voodi-old-content">
          <div className="voodi-old-page-heading">
            <div>
              <h3>Customer Management</h3>
              <p>Customer records and transactions</p>
            </div>

            <button type="button">
              Add Customer
            </button>
          </div>

          <div className="voodi-old-tools">
            <div className="voodi-old-search">
              <span>Search Customer</span>

              <div>
                <input
                  type="text"
                  placeholder="Enter customer name..."
                  readOnly
                />

                <button type="button">
                  Search
                </button>
              </div>
            </div>

            <div className="voodi-old-filter">
              <span>Branch</span>

              <select defaultValue="all">
                <option value="all">
                  All Branches
                </option>

                <option>
                  Amsterdam
                </option>

                <option>
                  Rotterdam
                </option>
              </select>
            </div>
          </div>

          <div className="voodi-old-summary-row">
            <div>
              <span>Total Customers</span>
              <strong>672</strong>
            </div>

            <div>
              <span>Active Jobs</span>
              <strong>783</strong>
            </div>

            <div>
              <span>Outstanding</span>
              <strong>€160,000</strong>
            </div>
          </div>

          <div className="voodi-old-table">
            <div className="voodi-old-table-heading">
              <span>ID</span>
              <span>Customer Name</span>
              <span>Phone</span>
              <span>Branch</span>
              <span>Balance</span>
              <span>Status</span>
            </div>

            <div>
              <span>1028</span>
              <strong>Sophia Clinton</strong>
              <span>+31 6 4821 7420</span>
              <span>Amsterdam</span>
              <span>€4,000</span>
              <small>Active</small>
            </div>

            <div>
              <span>1029</span>
              <strong>Luca Romano</strong>
              <span>+31 6 2318 4392</span>
              <span>Rotterdam</span>
              <span>€0</span>
              <small>Active</small>
            </div>

            <div>
              <span>1030</span>
              <strong>Eva Rossi</strong>
              <span>+31 6 8840 2143</span>
              <span>Amsterdam</span>
              <span>€2,300</span>
              <small>Active</small>
            </div>

            <div>
              <span>1031</span>
              <strong>Emma Keller</strong>
              <span>+31 6 4402 7321</span>
              <span>Rotterdam</span>
              <span>€1,250</span>
              <small>Active</small>
            </div>

            <div>
              <span>1032</span>
              <strong>Noah Martins</strong>
              <span>+31 6 9982 3107</span>
              <span>Amsterdam</span>
              <span>€800</span>
              <small>Active</small>
            </div>
          </div>

          <div className="voodi-old-bottom-panels">
            <div>
              <strong>Recent Payments</strong>

              <span>
                RCPT-19320 · €1,500
              </span>

              <span>
                RCPT-19319 · €2,300
              </span>

              <span>
                RCPT-19318 · €900
              </span>
            </div>

            <div>
              <strong>Pending Jobs</strong>

              <span>
                Sophia Clinton · Suit
              </span>

              <span>
                Eva Rossi · Dress
              </span>

              <span>
                Luca Romano · Jacket
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function CustomerAccountDemo() {
  return (
    <div className="voodi-account-demo">
      <div className="voodi-account-header">
        <div className="voodi-account-person">
          <span>SC</span>

          <div>
            <small>CUSTOMER SUMMARY</small>
            <h3>Sophia Clinton</h3>
            <p>Customer ID: VD-0672</p>
          </div>
        </div>

        <span className="voodi-account-active">
          Active
        </span>
      </div>

      <div className="voodi-account-details">
        <div>
          <span>Phone</span>
          <strong>+31 6 4821 7420</strong>
        </div>

        <div>
          <span>Email</span>
          <strong>sophia.clinton@example.com</strong>
        </div>

        <div>
          <span>Home Branch</span>
          <strong>Amsterdam</strong>
        </div>

        <div>
          <span>Receipts Found</span>
          <strong>3</strong>
        </div>

        <div>
          <span>Branches Used</span>
          <strong>2</strong>
        </div>

        <div className="debt">
          <span>Outstanding Balance</span>
          <strong>€8,750</strong>
        </div>
      </div>
    </div>
  );
}

function ReceiptDemo() {
  return (
    <div className="voodi-receipt-demo">
      <div className="voodi-receipt-heading">
        <div>
          <span>PAYMENT HISTORY</span>
          <h3>Latest Receipts & Balance Summary</h3>
        </div>

        <i className="bi bi-receipt"></i>
      </div>

      <div className="voodi-receipt-table">
        <div className="heading">
          <span>Receipt</span>
          <span>Location</span>
          <span>Total</span>
          <span>Deposit</span>
          <span>Balance</span>
        </div>

        <div>
          <strong>RCPT-19630</strong>
          <span>Amsterdam</span>
          <span>€12,500</span>
          <span>€8,500</span>
          <strong className="balance">€4,000</strong>
        </div>

        <div>
          <strong>RCPT-19629</strong>
          <span>Rotterdam</span>
          <span>€7,000</span>
          <span>€3,000</span>
          <strong className="balance">€4,000</strong>
        </div>

        <div>
          <strong>RCPT-19628</strong>
          <span>Amsterdam</span>
          <span>€3,500</span>
          <span>€3,500</span>
          <strong>€0</strong>
        </div>
      </div>
    </div>
  );
}

function VoodiProject() {
  return (
    <>
      <Helmet>
        <title>
          Voodi ERP Case Study | XP Technologies
        </title>

        <meta
          name="description"
          content="Explore how XP Technologies modernised a multi-branch fashion ERP by improving customer management, branch visibility, debt tracking, production workflows, receipts, payments, collections and operational notifications."
        />
      </Helmet>

      <Navbar />

      <main className="voodi-project-page">
        <section className="voodi-project-hero">
          <div className="container">
            <div className="voodi-project-breadcrumb">
              <a href="/">Home</a>
              <i className="bi bi-chevron-right"></i>
              <a href="/portfolio">Portfolio</a>
              <i className="bi bi-chevron-right"></i>
              <span>Voodi ERP System</span>
            </div>

            <div className="voodi-project-hero-grid">
              <div className="voodi-project-hero-content">
                <span className="voodi-project-label">
                  FEATURED PROJECT
                </span>

                <h1>Voodi ERP System</h1>

                <h2>
                  Modernising a Multi-Branch Fashion Business
                </h2>

                <p>
                  XP Technologies modernised an existing fashion
                  ERP that no longer reflected the way the
                  business actually operated. The redesigned
                  platform connects customer management,
                  measurements, job assignment, production,
                  payments and collections into a more structured
                  multi-location operating system.
                </p>

                <div className="voodi-project-hero-features">
                  <span>
                    <i className="bi bi-buildings"></i>
                    Multi-Branch Operations
                  </span>

                  <span>
                    <i className="bi bi-gear"></i>
                    Production Visibility
                  </span>

                  <span>
                    <i className="bi bi-wallet2"></i>
                    Financial Control
                  </span>

                  <span>
                    <i className="bi bi-bell"></i>
                    Smart Notifications
                  </span>
                </div>

                <a
                  href="#project-story"
                  className="voodi-project-primary-btn"
                >
                  Explore the Project
                  <i className="bi bi-arrow-down"></i>
                </a>
              </div>

              <div className="voodi-project-hero-preview">
                <div className="voodi-laptop">
                  <div className="voodi-laptop-screen">
                    <MiniDashboard />
                  </div>

                  <div className="voodi-laptop-base"></div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section
          className="voodi-story-section"
          id="project-story"
        >
          <div className="container">
            <div className="voodi-story-grid">
              <article className="voodi-story-card challenge">
                <span className="voodi-story-icon">
                  <i className="bi bi-exclamation-triangle"></i>
                </span>

                <span className="voodi-story-kicker">
                  THE CHALLENGE
                </span>

                <h2>
                  The ERP Was No Longer Supporting the Business
                </h2>

                <p>
                  The project began as an upgrade request, but the
                  deeper issue was not simply an outdated
                  interface. Core operational information was
                  fragmented and the system did not properly
                  represent how a multi-branch fashion business
                  works.
                </p>

                <ul>
                  {challenges.map((challenge) => (
                    <li key={challenge}>
                      <i className="bi bi-x-lg"></i>
                      <span>{challenge}</span>
                    </li>
                  ))}
                </ul>
              </article>

              <article className="voodi-story-card discovery">
                <span className="voodi-story-icon">
                  <i className="bi bi-lightbulb"></i>
                </span>

                <span className="voodi-story-kicker">
                  WHAT WE DISCOVERED
                </span>

                <h2>
                  This Was an Operational Architecture Problem
                </h2>

                <p>
                  Customer records, payments, measurements,
                  production and collection information existed,
                  but they were not working together as one
                  connected operational flow.
                </p>

                <p>
                  One of the clearest problems appeared between
                  branches. A customer could leave an outstanding
                  balance at one location and later approach
                  another branch for a new job. Without connected
                  account visibility, staff at the second branch
                  could continue the relationship without knowing
                  that money remained outstanding elsewhere.
                </p>

                <p>
                  The ERP therefore needed to become more than a
                  database. It needed to represent the real
                  business relationship between customers,
                  branches, jobs, production, payments and
                  collections.
                </p>
              </article>

              <article className="voodi-story-card solution">
                <span className="voodi-story-icon">
                  <i className="bi bi-check-circle"></i>
                </span>

                <span className="voodi-story-kicker">
                  THE SOLUTION
                </span>

                <h2>
                  Rebuild the Workflow Around the Business
                </h2>

                <p>
                  XP Technologies redesigned the operating flow
                  around the way the fashion business actually
                  functions — not around the limitations of the
                  previous system.
                </p>

                <div className="voodi-solution-checks">
                  <span>
                    <i className="bi bi-check2"></i>
                    Studied the existing ERP and business process
                  </span>

                  <span>
                    <i className="bi bi-check2"></i>
                    Identified operational gaps and friction
                  </span>

                  <span>
                    <i className="bi bi-check2"></i>
                    Structured the customer and branch relationship
                  </span>

                  <span>
                    <i className="bi bi-check2"></i>
                    Redesigned fashion production workflows
                  </span>

                  <span>
                    <i className="bi bi-check2"></i>
                    Connected financial and customer activity
                  </span>

                  <span>
                    <i className="bi bi-check2"></i>
                    Added visibility, alerts and automation
                  </span>
                </div>
              </article>
            </div>
          </div>
        </section>

        <section className="voodi-before-after-section">
          <div className="container">
            <div className="voodi-section-heading">
              <span>THE TRANSFORMATION</span>

              <h2>Before vs. After</h2>

              <p>
                The project was not about replacing screens.
                It was about changing how operational information
                moves through the business.
              </p>
            </div>

            <div className="voodi-before-after-grid">
              <article className="voodi-before-card">
                <div className="voodi-comparison-title old">
                  <span>BEFORE</span>
                  <h3>The Previous ERP</h3>
                </div>

                <OldSystemPreview />

                <div className="voodi-comparison-list">
                  <span>
                    <i className="bi bi-x-circle"></i>
                    Slow customer record retrieval
                  </span>

                  <span>
                    <i className="bi bi-x-circle"></i>
                    Fragmented branch information
                  </span>

                  <span>
                    <i className="bi bi-x-circle"></i>
                    Weak cross-branch debt visibility
                  </span>

                  <span>
                    <i className="bi bi-x-circle"></i>
                    Incomplete production workflow
                  </span>

                  <span>
                    <i className="bi bi-x-circle"></i>
                    Manual payment documentation
                  </span>

                  <span>
                    <i className="bi bi-x-circle"></i>
                    Limited operational notifications
                  </span>
                </div>
              </article>

              <div className="voodi-versus">
                VS
              </div>

              <article className="voodi-after-card">
                <div className="voodi-comparison-title new">
                  <span>AFTER</span>
                  <h3>The Modernised Voodi ERP</h3>
                </div>

                <MiniDashboard />

                <div className="voodi-comparison-list success">
                  <span>
                    <i className="bi bi-check-circle"></i>
                    Searchable customer information
                  </span>

                  <span>
                    <i className="bi bi-check-circle"></i>
                    Connected multi-location operations
                  </span>

                  <span>
                    <i className="bi bi-check-circle"></i>
                    Business-wide outstanding balance visibility
                  </span>

                  <span>
                    <i className="bi bi-check-circle"></i>
                    Structured production stages
                  </span>

                  <span>
                    <i className="bi bi-check-circle"></i>
                    Digital receipts and payment history
                  </span>

                  <span>
                    <i className="bi bi-check-circle"></i>
                    Dashboard alerts and collection visibility
                  </span>
                </div>
              </article>
            </div>
          </div>
        </section>

        <section className="voodi-workflow-section">
          <div className="container">
            <div className="voodi-section-heading">
              <span>HOW THE SYSTEM WORKS</span>

              <h2>
                One Connected Customer-to-Collection Workflow
              </h2>

              <p>
                The modernised system follows the actual journey
                of a fashion customer instead of treating each
                business activity as an isolated record.
              </p>
            </div>

            <div className="voodi-workflow-grid">
              {workflow.map((step) => (
                <article
                  className="voodi-workflow-card"
                  key={step.number}
                >
                  <div className="voodi-workflow-top">
                    <span>{step.number}</span>

                    <i className={`bi ${step.icon}`}></i>
                  </div>

                  <h3>{step.title}</h3>

                  <p>{step.text}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="voodi-solutions-section">
          <div className="container">
            <div className="voodi-section-heading">
              <span>WHAT WAS IMPROVED</span>

              <h2>
                The ERP Was Modernised Across the Entire Operation
              </h2>

              <p>
                Each improvement addresses a real operational
                weakness identified during the project.
              </p>
            </div>

            <div className="voodi-solutions-grid">
              {solutions.map((solution) => (
                <article
                  className="voodi-solution-card"
                  key={solution.title}
                >
                  <span>
                    <i className={`bi ${solution.icon}`}></i>
                  </span>

                  <h3>{solution.title}</h3>

                  <p>{solution.text}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="voodi-financial-section">
          <div className="container">
            <div className="voodi-section-heading">
              <span>CUSTOMER & FINANCIAL MANAGEMENT</span>

              <h2>
                One Customer. One Business-Wide Record.
              </h2>

              <p>
                The system gives authorised users a clearer
                customer account picture even when activity has
                taken place across different locations.
              </p>
            </div>

            <div className="voodi-financial-layout">
              <div>
                <CustomerAccountDemo />

                <div className="voodi-financial-explanation">
                  <h3>
                    Cross-Branch Debt Visibility
                  </h3>

                  <p>
                    If a customer leaves an outstanding balance at
                    one branch and later visits another location,
                    staff can identify that unresolved account
                    position instead of treating the customer as
                    completely new.
                  </p>

                  <p>
                    When an authorised payment is recorded, the
                    customer account can reflect the updated
                    position so the business is not relying on
                    disconnected branch knowledge.
                  </p>
                </div>
              </div>

              <ReceiptDemo />
            </div>
          </div>
        </section>

        <section className="voodi-notification-section">
          <div className="container">
            <div className="voodi-notification-box">
              <div className="voodi-notification-copy">
                <span>OPERATIONAL AWARENESS</span>

                <h2>
                  Important Business Activity Should Not Depend on Memory
                </h2>

                <p>
                  The modernised dashboard surfaces information
                  such as collections due today, overdue
                  collections and customer events so staff can see
                  what requires attention when they enter the
                  system.
                </p>
              </div>

              <div className="voodi-notification-preview">
                <div className="voodi-notification-header">
                  <div>
                    <span>ERP NOTIFICATIONS</span>
                    <strong>Today's Activity</strong>
                  </div>

                  <i className="bi bi-bell-fill"></i>
                </div>

                <div className="voodi-notification-items">
                  <article>
                    <i className="bi bi-bag-check"></i>

                    <div>
                      <strong>7</strong>
                      <span>Collections scheduled today</span>
                    </div>
                  </article>

                  <article>
                    <i className="bi bi-clock-history"></i>

                    <div>
                      <strong>25</strong>
                      <span>Overdue collections</span>
                    </div>
                  </article>

                  <article>
                    <i className="bi bi-gift"></i>

                    <div>
                      <strong>3</strong>
                      <span>Customer birthdays this month</span>
                    </div>
                  </article>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="voodi-impact-section">
          <div className="container">
            <div className="voodi-section-heading">
              <span>PROJECT OUTCOME</span>

              <h2>
                A More Connected Operating System for the Business
              </h2>

              <p>
                The result is an ERP that more accurately reflects
                the relationship between customers, branches,
                production, payments and collections.
              </p>
            </div>

            <div className="voodi-impact-grid">
              {impact.map((item) => (
                <article key={item.title}>
                  <span>
                    <i className={`bi ${item.icon}`}></i>
                  </span>

                  <h3>{item.title}</h3>

                  <p>{item.text}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="voodi-project-cta-section">
          <div className="container">
            <div className="voodi-project-cta">
              <span className="voodi-project-cta-icon">
                <i className="bi bi-chat-dots"></i>
              </span>

              <div>
                <span>HAVE A SIMILAR OPERATIONAL CHALLENGE?</span>

                <h2>
                  Is Your Business Running on Software That No Longer Reflects How You Operate?
                </h2>

                <p>
                  XP Technologies designs and modernises business
                  systems around real operational workflows,
                  helping organisations connect information,
                  improve visibility and reduce unnecessary
                  friction.
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

export default VoodiProject;