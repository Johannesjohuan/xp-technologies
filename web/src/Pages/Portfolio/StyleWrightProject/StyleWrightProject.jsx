import { useEffect, useState } from "react";
import { Helmet } from "react-helmet-async";
import "./StyleWrightProject.css";

import Navbar from "../../../components/layout/Navbar/Navbar";
import Footer from "../../../sections/Footer/Footer";

const systemStages = [
  "dashboard",
  "customers",
  "measurements",
  "orders",
  "production",
  "payments",
];

function StyleWrightProjectDemo() {
  const [stageIndex, setStageIndex] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => {
      setStageIndex(
        (current) =>
          (current + 1) % systemStages.length
      );
    }, 2400);

    return () => clearTimeout(timer);
  }, [stageIndex]);

  const stage = systemStages[stageIndex];

  return (
    <div className="sw-case-demo">
      <div className="sw-case-demo-topbar">
        <div className="sw-case-demo-brand">
          <span>SW</span>

          <div>
            <strong>STYLE WRIGHT</strong>
            <small>FASHION MANAGEMENT</small>
          </div>
        </div>

        <div className="sw-case-demo-actions">
          <i className="bi bi-search"></i>
          <i className="bi bi-bell"></i>
          <span>A</span>
        </div>
      </div>

      <div className="sw-case-demo-layout">
        <aside className="sw-case-demo-sidebar">
          <CaseNavItem
            stage={stage}
            target="dashboard"
            icon="bi-grid"
            label="Dashboard"
          />

          <CaseNavItem
            stage={stage}
            target="customers"
            icon="bi-people"
            label="Customers"
          />

          <CaseNavItem
            stage={stage}
            target="measurements"
            icon="bi-rulers"
            label="Measurements"
          />

          <CaseNavItem
            stage={stage}
            target="orders"
            icon="bi-bag"
            label="Orders"
          />

          <CaseNavItem
            stage={stage}
            target="production"
            icon="bi-gear"
            label="Production"
          />

          <CaseNavItem
            stage={stage}
            target="payments"
            icon="bi-credit-card"
            label="Payments"
          />

          <div className="sw-case-nav-item">
            <i className="bi bi-bar-chart"></i>
            <span>Reports</span>
          </div>
        </aside>

        <div className="sw-case-demo-main">
          <div
            key={stage}
            className="sw-case-stage"
          >
            {stage === "dashboard" && (
              <CaseDashboard />
            )}

            {stage === "customers" && (
              <CaseCustomers />
            )}

            {stage === "measurements" && (
              <CaseMeasurements />
            )}

            {stage === "orders" && (
              <CaseOrders />
            )}

            {stage === "production" && (
              <CaseProduction />
            )}

            {stage === "payments" && (
              <CasePayments />
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

function CaseNavItem({
  stage,
  target,
  icon,
  label,
}) {
  return (
    <div
      className={`sw-case-nav-item ${
        stage === target ? "active" : ""
      }`}
    >
      <i className={`bi ${icon}`}></i>
      <span>{label}</span>
    </div>
  );
}

function CaseDashboard() {
  return (
    <>
      <div className="sw-demo-heading">
        <div>
          <span>BUSINESS OVERVIEW</span>
          <h3>Dashboard</h3>
        </div>

        <small>Live Operations</small>
      </div>

      <div className="sw-demo-stats">
        <article>
          <span>Customers</span>
          <strong>1,248</strong>
          <small>Registered profiles</small>
        </article>

        <article>
          <span>Active Orders</span>
          <strong>256</strong>
          <small>Current orders</small>
        </article>

        <article>
          <span>In Production</span>
          <strong>142</strong>
          <small>Active garments</small>
        </article>

        <article>
          <span>Ready</span>
          <strong>58</strong>
          <small>For collection</small>
        </article>
      </div>

      <div className="sw-demo-dashboard-bottom">
        <div className="sw-demo-production">
          <span>PRODUCTION STATUS</span>
          <h4>Current Workflow</h4>

          <DemoProgress
            label="Cutting"
            value="46"
            width="64%"
          />

          <DemoProgress
            label="Sewing"
            value="61"
            width="82%"
          />

          <DemoProgress
            label="Finishing"
            value="35"
            width="48%"
          />
        </div>

        <div className="sw-demo-orders">
          <span>RECENT ORDERS</span>

          <DemoOrder
            number="SW-0256"
            customer="Sophia Clinton"
            item="Premium Suit"
          />

          <DemoOrder
            number="SW-0255"
            customer="Luca Romano"
            item="Blazer"
          />

          <DemoOrder
            number="SW-0254"
            customer="Eva Rossi"
            item="Evening Dress"
          />
        </div>
      </div>
    </>
  );
}

function DemoProgress({
  label,
  value,
  width,
}) {
  return (
    <div className="sw-demo-progress">
      <span>{label}</span>

      <div>
        <i style={{ width }}></i>
      </div>

      <strong>{value}</strong>
    </div>
  );
}

function DemoOrder({
  number,
  customer,
  item,
}) {
  return (
    <div className="sw-demo-order-row">
      <strong>{number}</strong>
      <span>{customer}</span>
      <small>{item}</small>
    </div>
  );
}

function CaseCustomers() {
  return (
    <>
      <div className="sw-demo-heading">
        <div>
          <span>CUSTOMER MANAGEMENT</span>
          <h3>Customer Profiles</h3>
        </div>

        <button type="button">
          + New Customer
        </button>
      </div>

      <div className="sw-demo-search">
        <i className="bi bi-search"></i>
        <span>
          Search name, phone or email...
        </span>
      </div>

      <div className="sw-demo-customer-list">
        <DemoCustomer
          initials="SC"
          name="Sophia Clinton"
          email="sophia.clinton@example.com"
          phone="+31 6 4821 7420"
        />

        <DemoCustomer
          initials="LR"
          name="Luca Romano"
          email="luca.romano@example.com"
          phone="+31 6 3715 9021"
        />

        <DemoCustomer
          initials="ER"
          name="Eva Rossi"
          email="eva.rossi@example.com"
          phone="+31 6 7231 4802"
        />
      </div>
    </>
  );
}

function DemoCustomer({
  initials,
  name,
  email,
  phone,
}) {
  return (
    <div className="sw-demo-customer">
      <span>{initials}</span>

      <div>
        <strong>{name}</strong>
        <small>{email}</small>
      </div>

      <p>{phone}</p>

      <button type="button">
        View Profile
      </button>
    </div>
  );
}

function CaseMeasurements() {
  const measurements = [
    ["Chest", "94 cm"],
    ["Waist", "78 cm"],
    ["Hip", "98 cm"],
    ["Shoulder", "44 cm"],
    ["Sleeve", "61 cm"],
    ["Length", "72 cm"],
  ];

  return (
    <>
      <div className="sw-demo-heading">
        <div>
          <span>CUSTOMER PROFILE</span>
          <h3>Sophia Clinton</h3>
        </div>

        <small>SW-1248</small>
      </div>

      <div className="sw-demo-profile">
        <span>SC</span>

        <div>
          <strong>Sophia Clinton</strong>
          <small>
            sophia.clinton@example.com
          </small>
          <p>+31 6 4821 7420</p>
        </div>

        <em>Active</em>
      </div>

      <div className="sw-demo-measurement-heading">
        <span>MEASUREMENT PROFILE</span>
        <h4>Saved Customer Measurements</h4>
      </div>

      <div className="sw-demo-measurements">
        {measurements.map(
          ([label, value]) => (
            <article key={label}>
              <span>{label}</span>
              <strong>{value}</strong>
            </article>
          )
        )}
      </div>
    </>
  );
}

function CaseOrders() {
  return (
    <>
      <div className="sw-demo-heading">
        <div>
          <span>ORDER MANAGEMENT</span>
          <h3>Active Orders</h3>
        </div>

        <button type="button">
          + New Order
        </button>
      </div>

      <div className="sw-demo-order-stats">
        <article>
          <span>Active Orders</span>
          <strong>256</strong>
        </article>

        <article>
          <span>Due This Week</span>
          <strong>24</strong>
        </article>

        <article>
          <span>Awaiting Fitting</span>
          <strong>18</strong>
        </article>
      </div>

      <div className="sw-demo-table">
        <div className="sw-demo-table-head">
          <span>Order</span>
          <span>Customer</span>
          <span>Style</span>
          <span>Status</span>
        </div>

        <DemoTableOrder
          order="SW-0256"
          customer="Sophia Clinton"
          item="Premium Suit"
          status="Production"
        />

        <DemoTableOrder
          order="SW-0255"
          customer="Luca Romano"
          item="Blazer"
          status="Fitting"
        />

        <DemoTableOrder
          order="SW-0254"
          customer="Eva Rossi"
          item="Evening Dress"
          status="Ready"
        />
      </div>
    </>
  );
}

function DemoTableOrder({
  order,
  customer,
  item,
  status,
}) {
  return (
    <div className="sw-demo-table-row">
      <strong>{order}</strong>
      <span>{customer}</span>
      <span>{item}</span>
      <small>{status}</small>
    </div>
  );
}

function CaseProduction() {
  return (
    <>
      <div className="sw-demo-heading">
        <div>
          <span>PRODUCTION CONTROL</span>
          <h3>Production Workflow</h3>
        </div>

        <small>142 Active Jobs</small>
      </div>

      <div className="sw-demo-production-flow">
        <ProductionStep
          icon="bi-scissors"
          label="Cutting"
          number="46"
        />

        <i className="bi bi-arrow-right"></i>

        <ProductionStep
          icon="bi-gear"
          label="Sewing"
          number="61"
        />

        <i className="bi bi-arrow-right"></i>

        <ProductionStep
          icon="bi-stars"
          label="Finishing"
          number="35"
        />

        <i className="bi bi-arrow-right"></i>

        <ProductionStep
          icon="bi-check-circle"
          label="Ready"
          number="58"
        />
      </div>

      <div className="sw-demo-active-job">
        <div>
          <span>ORDER</span>
          <strong>SW-0256</strong>
          <small>
            Sophia Clinton · Premium Suit
          </small>
        </div>

        <div>
          <span>CURRENT STAGE</span>
          <strong>Sewing</strong>
        </div>

        <div>
          <span>DELIVERY</span>
          <strong>20 May</strong>
        </div>

        <em>IN PRODUCTION</em>
      </div>
    </>
  );
}

function ProductionStep({
  icon,
  label,
  number,
}) {
  return (
    <article>
      <i className={`bi ${icon}`}></i>
      <span>{label}</span>
      <strong>{number}</strong>
    </article>
  );
}

function CasePayments() {
  return (
    <>
      <div className="sw-demo-heading">
        <div>
          <span>FINANCIAL MANAGEMENT</span>
          <h3>Payments & Balances</h3>
        </div>

        <button type="button">
          Record Payment
        </button>
      </div>

      <div className="sw-demo-payment-stats">
        <article>
          <span>Order Amount</span>
          <strong>€1,250</strong>
        </article>

        <article>
          <span>Amount Paid</span>
          <strong>€750</strong>
        </article>

        <article className="outstanding">
          <span>Outstanding</span>
          <strong>€500</strong>
        </article>
      </div>

      <div className="sw-demo-payment-history">
        <span>PAYMENT HISTORY</span>

        <div>
          <strong>RCPT-10254</strong>
          <span>Cash</span>
          <small>€250</small>
        </div>

        <div>
          <strong>RCPT-10287</strong>
          <span>Bank Transfer</span>
          <small>€500</small>
        </div>
      </div>
    </>
  );
}

function StyleWrightProject() {
  return (
    <>
      <Helmet>
        <title>
          Style Wright Fashion Management System |
          XP Technologies
        </title>

        <meta
          name="description"
          content="Explore the Style Wright fashion business management system developed by XP Technologies."
        />
      </Helmet>

      <Navbar />

      <main className="stylewright-case-page">
        <section className="sw-case-hero">
          <div className="sw-case-grid"></div>

          <div className="container">
            <a
              href="/portfolio"
              className="sw-back-link"
            >
              <i className="bi bi-arrow-left"></i>
              Back to Portfolio
            </a>

            <div className="sw-case-hero-layout">
              <div className="sw-case-hero-copy">
                <span className="sw-case-eyebrow">
                  CASE STUDY · FASHION TECHNOLOGY
                </span>

                <h1>
                  STYLE
                  <br />
                  <strong>WRIGHT.</strong>
                </h1>

                <h2>
                  Fashion operations brought
                  into one connected system.
                </h2>

                <p>
                  A custom business management
                  platform designed around the
                  day-to-day operations of a fashion
                  business — connecting customers,
                  measurements, orders, production
                  progress and payments in one
                  structured workflow.
                </p>

                <div className="sw-case-tags">
                  <span>Business Management</span>
                  <span>Fashion Technology</span>
                  <span>Workflow Automation</span>
                </div>
              </div>

              <div className="sw-case-hero-demo">
                <StyleWrightProjectDemo />
              </div>
            </div>
          </div>
        </section>

        <section className="sw-case-intro">
          <div className="container">
            <div className="sw-case-section-label">
              <span>01</span>
              <strong>THE PROJECT</strong>
            </div>

            <div className="sw-case-intro-grid">
              <div>
                <h2>
                  Built around how a fashion
                  business actually operates.
                </h2>
              </div>

              <div>
                <p>
                  Fashion businesses manage far
                  more than customer names and
                  orders. Every job can involve
                  measurements, style information,
                  production stages, fitting,
                  delivery dates, payments and
                  customer history.
                </p>

                <p>
                  Style Wright brings those
                  operational pieces together,
                  giving the business a structured
                  digital environment for managing
                  the complete journey from customer
                  registration to completed garment.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="sw-case-problem">
          <div className="container">
            <div className="sw-case-section-label light">
              <span>02</span>
              <strong>THE CHALLENGE</strong>
            </div>

            <div className="sw-case-problem-grid">
              <div className="sw-case-problem-copy">
                <span>OPERATIONAL FRICTION</span>

                <h2>
                  When information is scattered,
                  managing every order becomes
                  harder.
                </h2>

                <p>
                  Customer information, measurements,
                  order details, production progress
                  and payment records can easily
                  become disconnected when they are
                  managed through separate records
                  or manual processes.
                </p>

                <p>
                  The objective was to create a
                  system where the important parts
                  of the fashion workflow could
                  remain connected to the same
                  customer and order.
                </p>
              </div>

              <div className="sw-case-problem-list">
                <article>
                  <span>01</span>

                  <div>
                    <strong>
                      Customer information
                    </strong>

                    <p>
                      Customer records need to be
                      easy to find and reuse when
                      they return with another job.
                    </p>
                  </div>
                </article>

                <article>
                  <span>02</span>

                  <div>
                    <strong>
                      Measurement records
                    </strong>

                    <p>
                      Measurements need to remain
                      attached to the correct
                      customer profile.
                    </p>
                  </div>
                </article>

                <article>
                  <span>03</span>

                  <div>
                    <strong>
                      Production visibility
                    </strong>

                    <p>
                      Staff need to know whether a
                      garment is being cut, sewn,
                      finished or is ready.
                    </p>
                  </div>
                </article>

                <article>
                  <span>04</span>

                  <div>
                    <strong>
                      Payment tracking
                    </strong>

                    <p>
                      Deposits, payments and
                      outstanding balances need to
                      remain connected to each
                      order.
                    </p>
                  </div>
                </article>
              </div>
            </div>
          </div>
        </section>

        <section className="sw-case-workflow">
          <div className="container">
            <div className="sw-case-section-label">
              <span>03</span>
              <strong>THE WORKFLOW</strong>
            </div>

            <div className="sw-case-centered-heading">
              <span>CONNECTED OPERATIONS</span>

              <h2>
                One customer journey.
                <br />
                One connected workflow.
              </h2>

              <p>
                The system follows the operational
                journey of a fashion order from
                customer registration through
                production and payment.
              </p>
            </div>

            <div className="sw-workflow-line">
              <WorkflowCard
                number="01"
                icon="bi-person-plus"
                title="Customer"
                text="Create or locate the customer profile."
              />

              <i className="bi bi-arrow-right"></i>

              <WorkflowCard
                number="02"
                icon="bi-rulers"
                title="Measure"
                text="Save measurements against the customer."
              />

              <i className="bi bi-arrow-right"></i>

              <WorkflowCard
                number="03"
                icon="bi-bag-plus"
                title="Order"
                text="Create the garment order and delivery details."
              />

              <i className="bi bi-arrow-right"></i>

              <WorkflowCard
                number="04"
                icon="bi-gear"
                title="Produce"
                text="Follow the garment through production."
              />

              <i className="bi bi-arrow-right"></i>

              <WorkflowCard
                number="05"
                icon="bi-credit-card"
                title="Payment"
                text="Record payments and outstanding balances."
              />
            </div>
          </div>
        </section>

        <section className="sw-case-system">
          <div className="container">
            <div className="sw-case-section-label">
              <span>04</span>
              <strong>THE SYSTEM</strong>
            </div>

            <div className="sw-case-system-heading">
              <div>
                <span>
                  DESIGNED FOR DAILY OPERATIONS
                </span>

                <h2>
                  Everything the business needs,
                  connected.
                </h2>
              </div>

              <p>
                Rather than treating each business
                activity as an isolated function,
                the platform connects information
                throughout the customer and
                production lifecycle.
              </p>
            </div>

            <div className="sw-feature-grid">
              <FeatureCard
                icon="bi-people"
                title="Customer Management"
                text="Create searchable customer profiles containing contact details and business history."
              />

              <FeatureCard
                icon="bi-rulers"
                title="Measurement Profiles"
                text="Store reusable customer measurements directly against each customer profile."
              />

              <FeatureCard
                icon="bi-bag"
                title="Order Management"
                text="Create and manage garment orders with customer, style and delivery information."
              />

              <FeatureCard
                icon="bi-diagram-3"
                title="Production Tracking"
                text="Follow garments through cutting, sewing, finishing and ready-for-collection stages."
              />

              <FeatureCard
                icon="bi-credit-card"
                title="Payments & Balances"
                text="Record payments and maintain visibility of outstanding balances against orders."
              />

              <FeatureCard
                icon="bi-bar-chart"
                title="Business Overview"
                text="Give management a clearer view of customers, active orders and current production."
              />
            </div>
          </div>
        </section>

        <section className="sw-case-showcase">
          <div className="container">
            <div className="sw-case-section-label light">
              <span>05</span>
              <strong>PRODUCT EXPERIENCE</strong>
            </div>

            <div className="sw-case-showcase-heading">
              <div>
                <span>FROM DATA TO WORKFLOW</span>

                <h2>
                  Designed to make operational
                  information useful.
                </h2>
              </div>

              <p>
                The interface prioritises the
                information staff need to move a
                customer order forward without
                losing the relationship between
                customer data, measurements,
                production and payment.
              </p>
            </div>

            <div className="sw-case-large-demo">
              <StyleWrightProjectDemo />
            </div>
          </div>
        </section>

        <section className="sw-case-outcome">
          <div className="container">
            <div className="sw-case-section-label">
              <span>06</span>
              <strong>THE OUTCOME</strong>
            </div>

            <div className="sw-case-outcome-grid">
              <div className="sw-case-outcome-copy">
                <span>A CONNECTED BUSINESS SYSTEM</span>

                <h2>
                  Less fragmentation.
                  <br />
                  Better operational visibility.
                </h2>

                <p>
                  Style Wright demonstrates how
                  software can be structured around
                  the real workflow of a fashion
                  business rather than forcing the
                  business into a generic system.
                </p>
              </div>

              <div className="sw-case-outcome-cards">
                <article>
                  <i className="bi bi-person-check"></i>

                  <div>
                    <strong>
                      Central customer records
                    </strong>

                    <p>
                      Customer information and
                      measurements remain available
                      for future orders.
                    </p>
                  </div>
                </article>

                <article>
                  <i className="bi bi-eye"></i>

                  <div>
                    <strong>
                      Clearer production visibility
                    </strong>

                    <p>
                      Staff can understand where
                      garments are within the
                      production workflow.
                    </p>
                  </div>
                </article>

                <article>
                  <i className="bi bi-link-45deg"></i>

                  <div>
                    <strong>
                      Connected order information
                    </strong>

                    <p>
                      Customer, order, production
                      and payment information stays
                      connected.
                    </p>
                  </div>
                </article>

                <article>
                  <i className="bi bi-graph-up-arrow"></i>

                  <div>
                    <strong>
                      Better business oversight
                    </strong>

                    <p>
                      Management gains a more
                      structured overview of
                      day-to-day operations.
                    </p>
                  </div>
                </article>
              </div>
            </div>
          </div>
        </section>

        <section className="sw-case-final">
          <div className="container">
            <div className="sw-case-final-box">
              <span>XP TECHNOLOGIES</span>

              <h2>
                Technology designed around
                the business behind it.
              </h2>

              <p>
                Style Wright is an example of our
                approach to business software:
                understand the operational problem,
                structure the workflow and build
                technology around how the business
                needs to work.
              </p>

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

function WorkflowCard({
  number,
  icon,
  title,
  text,
}) {
  return (
    <article className="sw-workflow-card">
      <span className="sw-workflow-number">
        {number}
      </span>

      <i className={`bi ${icon}`}></i>

      <strong>{title}</strong>

      <p>{text}</p>
    </article>
  );
}

function FeatureCard({
  icon,
  title,
  text,
}) {
  return (
    <article className="sw-feature-card">
      <span>
        <i className={`bi ${icon}`}></i>
      </span>

      <h3>{title}</h3>

      <p>{text}</p>
    </article>
  );
}

export default StyleWrightProject;