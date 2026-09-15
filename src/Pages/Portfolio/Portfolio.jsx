import { useEffect, useState } from "react";
import "./Portfolio.css";
import { Helmet } from "react-helmet-async";

import Navbar from "../../components/layout/Navbar/Navbar";
import Footer from "../../sections/Footer/Footer";

const desktopStages = [
  "dashboard",
  "registration-click",
  "registration",
  "assign-click",
  "assign",
  "search",
  "customer-click",
  "customer",
  "process-click",
  "process",
  "ready-click",
  "ready",
  "collections-click",
  "collections",
  "dashboard-click",
];

function VoodiDemo() {
  const [stageIndex, setStageIndex] = useState(0);

  useEffect(() => {
    const currentStage = desktopStages[stageIndex];

    const clickStage = currentStage.includes("-click");

    const delay = clickStage ? 700 : 2300;

    const timer = setTimeout(() => {
      setStageIndex(
        (current) => (current + 1) % desktopStages.length
      );
    }, delay);

    return () => clearTimeout(timer);
  }, [stageIndex]);

  const stage = desktopStages[stageIndex];

  return (
    <>
      <VoodiDesktopPreview stage={stage} />
      <VoodiMobilePreview stage={stage} />
    </>
  );
}

function VoodiSidebar({ stage }) {
  const registrationActive =
    stage === "registration" ||
    stage === "registration-click";

  const assignActive =
    stage === "assign" ||
    stage === "assign-click" ||
    stage === "search" ||
    stage === "customer-click" ||
    stage === "customer";

  const processActive =
    stage === "process" ||
    stage === "process-click";

  const readyActive =
    stage === "ready" ||
    stage === "ready-click";

  const collectionsActive =
    stage === "collections" ||
    stage === "collections-click";

  const dashboardActive =
    stage === "dashboard" ||
    stage === "dashboard-click";

  return (
    <aside className="voodi-desktop-sidebar">
      <div className="voodi-sidebar-company">
        <span className="voodi-sidebar-logo">V</span>

        <div>
          <strong>Voodi</strong>
          <small>Management System</small>
        </div>
      </div>

      <span className="voodi-sidebar-group">
        OVERVIEW
      </span>

      <div
        className={`voodi-sidebar-link ${
          dashboardActive ? "active" : ""
        }`}
      >
        <i className="bi bi-grid"></i>
        <span>Dashboard</span>
      </div>

      <span className="voodi-sidebar-group">
        CUSTOMER & JOBS
      </span>

      <div className="voodi-sidebar-link">
        <i className="bi bi-rulers"></i>
        <span>Measurements</span>
      </div>

      <div
        className={`voodi-sidebar-link ${
          assignActive ? "active" : ""
        }`}
      >
        <i className="bi bi-scissors"></i>
        <span>Assign Job</span>
      </div>

      <div
        className={`voodi-sidebar-link ${
          registrationActive ? "active" : ""
        }`}
      >
        <i className="bi bi-person-plus"></i>
        <span>New Registration</span>
      </div>

      <span className="voodi-sidebar-group">
        PRODUCTION
      </span>

      <div
        className={`voodi-sidebar-link ${
          processActive ? "active" : ""
        }`}
      >
        <i className="bi bi-gear"></i>
        <span>In Process</span>
      </div>

      <div
        className={`voodi-sidebar-link ${
          readyActive ? "active" : ""
        }`}
      >
        <i className="bi bi-check-circle"></i>
        <span>Ready Clothes</span>
      </div>

      <div
        className={`voodi-sidebar-link ${
          collectionsActive ? "active" : ""
        }`}
      >
        <i className="bi bi-bag-check"></i>
        <span>Today's Collections</span>
      </div>

      <div className="voodi-sidebar-link">
        <i className="bi bi-clock-history"></i>
        <span>Overdue Collections</span>
      </div>
    </aside>
  );
}

function DesktopCursor({ stage }) {
  let cursorClass = "cursor-dashboard";

  if (
    stage === "registration-click" ||
    stage === "registration"
  ) {
    cursorClass = "cursor-registration";
  }

  if (
    stage === "assign-click" ||
    stage === "assign"
  ) {
    cursorClass = "cursor-assign";
  }

  if (stage === "search") {
    cursorClass = "cursor-search";
  }

  if (
    stage === "customer-click" ||
    stage === "customer"
  ) {
    cursorClass = "cursor-customer";
  }

  if (
    stage === "process-click" ||
    stage === "process"
  ) {
    cursorClass = "cursor-process";
  }

  if (
    stage === "ready-click" ||
    stage === "ready"
  ) {
    cursorClass = "cursor-ready";
  }

  if (
    stage === "collections-click" ||
    stage === "collections"
  ) {
    cursorClass = "cursor-collections";
  }

  if (stage === "dashboard-click") {
    cursorClass = "cursor-dashboard";
  }

  const clicking =
    stage.includes("-click");

  return (
    <div
      className={`voodi-demo-cursor ${cursorClass} ${
        clicking ? "is-clicking" : ""
      }`}
    >
      <i className="bi bi-cursor-fill"></i>

      <span className="voodi-click-ring"></span>
    </div>
  );
}

function VoodiDesktopPreview({ stage }) {
  const visibleStage = stage.replace("-click", "");

  return (
    <div className="voodi-desktop-preview">
      <div className="voodi-desktop-window">
        <div className="voodi-desktop-topbar">
          <div className="voodi-topbar-brand">
            <span className="voodi-topbar-logo">
              V
            </span>

            <strong>VOODI ERP</strong>
          </div>

          <div className="voodi-topbar-actions">
            <div className="voodi-topbar-notification">
              <i className="bi bi-bell"></i>
              <span>3</span>
            </div>

            <i className="bi bi-envelope"></i>

            <span className="voodi-admin-avatar">
              A
            </span>
          </div>
        </div>

        <div className="voodi-desktop-layout">
          <VoodiSidebar stage={stage} />

          <div className="voodi-desktop-main">
            <div
              key={visibleStage}
              className="voodi-stage-screen"
            >
              {(visibleStage === "dashboard" ||
                visibleStage === "dashboard-click") && (
                <VoodiDashboard />
              )}

              {visibleStage === "registration" && (
                <VoodiRegistration />
              )}

              {visibleStage === "assign" && (
                <VoodiAssignJob />
              )}

              {visibleStage === "search" && (
                <VoodiCustomerSearch />
              )}

              {visibleStage === "customer" && (
                <VoodiCustomerProfile />
              )}

              {visibleStage === "process" && (
                <VoodiProcess />
              )}

              {visibleStage === "ready" && (
                <VoodiReady />
              )}

              {visibleStage === "collections" && (
                <VoodiCollections />
              )}
            </div>
          </div>

          <DesktopCursor stage={stage} />
        </div>
      </div>
    </div>
  );
}

function VoodiStat({
  icon,
  label,
  value,
  description,
  type = "",
}) {
  return (
    <article className="voodi-stat-card">
      <div className="voodi-stat-top">
        <span
          className={`voodi-stat-icon ${type}`}
        >
          <i className={`bi ${icon}`}></i>
        </span>

        <small>{label}</small>
      </div>

      <strong>{value}</strong>

      <span className="voodi-stat-description">
        {description}
      </span>
    </article>
  );
}

function VoodiDashboard() {
  return (
    <>
      <div className="voodi-dashboard-heading">
        <div>
          <span>Dashboard</span>
          <h3>Welcome, Admin</h3>
        </div>

        <div className="voodi-dashboard-date">
          <i className="bi bi-calendar3"></i>
          <span>Business Overview</span>
        </div>
      </div>

      <div className="voodi-desktop-stats">
        <VoodiStat
          icon="bi-people"
          label="Total Customers"
          value="672"
          description="Registered customers"
        />

        <VoodiStat
          icon="bi-wallet2"
          label="Outstanding Balance"
          value="€160,000"
          description="Across customer accounts"
          type="balance"
        />

        <VoodiStat
          icon="bi-gear"
          label="Clothes In Process"
          value="1,500"
          description="Active production jobs"
          type="process"
        />

        <VoodiStat
          icon="bi-clock-history"
          label="Overdue Collections"
          value="25"
          description="Awaiting collection"
          type="overdue"
        />

        <VoodiStat
          icon="bi-bag-check"
          label="Today's Collections"
          value="7"
          description="Scheduled for today"
          type="collections"
        />

        <VoodiStat
          icon="bi-gift"
          label="Birthdays This Month"
          value="3"
          description="Customer reminders"
          type="birthdays"
        />
      </div>

      <div className="voodi-dashboard-bottom">
        <div className="voodi-production-card">
          <div className="voodi-card-heading">
            <div>
              <span>PRODUCTION</span>
              <strong>
                Production Overview
              </strong>
            </div>

            <small>Live status</small>
          </div>

          <div className="voodi-production-row">
            <div>
              <span className="voodi-production-dot green"></span>
              <span>In Process</span>
            </div>

            <strong>1,500</strong>
          </div>

          <div className="voodi-production-row">
            <div>
              <span className="voodi-production-dot blue"></span>
              <span>Ready Clothes</span>
            </div>

            <strong>42</strong>
          </div>

          <div className="voodi-production-row">
            <div>
              <span className="voodi-production-dot orange"></span>
              <span>Due Today</span>
            </div>

            <strong>7</strong>
          </div>
        </div>

        <div className="voodi-notification-card">
          <div className="voodi-notification-heading">
            <div>
              <span>ERP NOTIFICATIONS</span>
              <strong>Today's Activity</strong>
            </div>

            <i className="bi bi-bell-fill"></i>
          </div>

          <div className="voodi-notification-grid">
            <div>
              <strong>7</strong>
              <span>Collections today</span>
            </div>

            <div>
              <strong>3</strong>
              <span>Birthdays this month</span>
            </div>

            <div>
              <strong>25</strong>
              <span>Overdue collections</span>
            </div>
          </div>

          <button type="button">
            Open Notification Center
            <i className="bi bi-arrow-right"></i>
          </button>
        </div>
      </div>
    </>
  );
}

function VoodiRegistration() {
  return (
    <div className="voodi-workspace">
      <div className="voodi-page-title">
        <div>
          <span>CUSTOMER MANAGEMENT</span>
          <h3>New Customer Registration</h3>
        </div>

        <span className="voodi-record-badge">
          New Customer
        </span>
      </div>

      <div className="voodi-form-card">
        <div className="voodi-form-grid">
          <label>
            <span>Customer Name</span>
            <div className="voodi-demo-input">
              Sophia Clinton
            </div>
          </label>

          <label>
            <span>Phone Number</span>
            <div className="voodi-demo-input">
              +31 6 4821 7420
            </div>
          </label>

          <label>
            <span>Email Address</span>
            <div className="voodi-demo-input">
              sophia.clinton@example.com
            </div>
          </label>

          <label>
            <span>Branch</span>
            <div className="voodi-demo-input">
              Amsterdam
            </div>
          </label>

          <label>
            <span>Date of Birth</span>
            <div className="voodi-demo-input">
              12 May 1992
            </div>
          </label>

          <label>
            <span>Customer ID</span>
            <div className="voodi-demo-input">
              VD-0672
            </div>
          </label>
        </div>

        <div className="voodi-form-actions">
          <button
            type="button"
            className="voodi-demo-secondary"
          >
            Cancel
          </button>

          <button
            type="button"
            className="voodi-demo-primary"
          >
            Register Customer
          </button>
        </div>
      </div>

      <div className="voodi-success-message">
        <i className="bi bi-check-circle-fill"></i>

        <div>
          <strong>
            Customer registered successfully
          </strong>

          <span>
            Customer profile VD-0672 is now
            available across authorised locations.
          </span>
        </div>
      </div>
    </div>
  );
}

function VoodiAssignJob() {
  return (
    <div className="voodi-workspace">
      <div className="voodi-page-title">
        <div>
          <span>MEASUREMENT & PRODUCTION</span>
          <h3>Assign New Job</h3>
        </div>

        <span className="voodi-record-badge">
          Step 1 of 2
        </span>
      </div>

      <div className="voodi-assign-banner">
        <div>
          <span>FIND CUSTOMER</span>

          <h3>
            Search Existing Customer
          </h3>

          <p>
            Locate the customer's profile before
            assigning measurements and production.
          </p>
        </div>

        <i className="bi bi-person-search"></i>
      </div>

      <div className="voodi-search-card">
        <label>
          <span>
            Customer name, phone number or email
          </span>

          <div className="voodi-search-input">
            <i className="bi bi-search"></i>
            <span>
              Search customer...
            </span>
          </div>
        </label>

        <button
          type="button"
          className="voodi-demo-primary"
        >
          Search Customer
        </button>
      </div>

      <div className="voodi-search-helper">
        <i className="bi bi-info-circle"></i>

        <span>
          Customer measurements are stored securely
          inside their profile for future jobs.
        </span>
      </div>
    </div>
  );
}

function VoodiCustomerSearch() {
  return (
    <div className="voodi-workspace">
      <div className="voodi-page-title">
        <div>
          <span>ASSIGN JOB</span>
          <h3>Search Customer</h3>
        </div>

        <span className="voodi-record-badge">
          Customer Found
        </span>
      </div>

      <div className="voodi-search-card search-active">
        <label>
          <span>
            Customer name, phone number or email
          </span>

          <div className="voodi-search-input">
            <i className="bi bi-search"></i>
            <strong>Sophia Clinton</strong>
          </div>
        </label>

        <button
          type="button"
          className="voodi-demo-primary"
        >
          Search
        </button>
      </div>

      <div className="voodi-results">
        <div className="voodi-result-row active">
          <span className="voodi-result-avatar">
            SC
          </span>

          <div className="voodi-result-details">
            <strong>Sophia Clinton</strong>

            <span>
              <i className="bi bi-telephone"></i>
              +31 6 4821 7420
            </span>

            <span>
              <i className="bi bi-envelope"></i>
              sophia.clinton@example.com
            </span>
          </div>

          <div className="voodi-result-location">
            <span>Branch</span>
            <strong>Amsterdam</strong>
          </div>

          <button
            type="button"
            className="voodi-select-customer"
          >
            Select
            <i className="bi bi-arrow-right"></i>
          </button>
        </div>
      </div>
    </div>
  );
}

function VoodiCustomerProfile() {
  return (
    <div className="voodi-workspace">
      <div className="voodi-customer-profile-header">
        <div className="voodi-profile-person">
          <span className="voodi-profile-avatar">
            SC
          </span>

          <div>
            <span>CUSTOMER SELECTED</span>
            <h3>Sophia Clinton</h3>
            <small>Customer ID: VD-0672</small>
          </div>
        </div>

        <span className="voodi-profile-status">
          <i className="bi bi-check-circle-fill"></i>
          Active
        </span>
      </div>

      <div className="voodi-profile-contact-grid">
        <div>
          <span>Phone Number</span>
          <strong>+31 6 4821 7420</strong>
        </div>

        <div>
          <span>Email Address</span>
          <strong>
            sophia.clinton@example.com
          </strong>
        </div>

        <div>
          <span>Branch</span>
          <strong>Amsterdam</strong>
        </div>
      </div>

      <div className="voodi-measurement-section">
        <div className="voodi-measurement-heading">
          <div>
            <span>MEASUREMENT PROFILE</span>
            <h3>
              Saved Customer Measurements
            </h3>
          </div>

          <i className="bi bi-rulers"></i>
        </div>

        <div className="voodi-measurement-grid">
          <div>
            <span>Chest</span>
            <strong>38"</strong>
          </div>

          <div>
            <span>Waist</span>
            <strong>31"</strong>
          </div>

          <div>
            <span>Hip</span>
            <strong>40"</strong>
          </div>

          <div>
            <span>Shoulder</span>
            <strong>15"</strong>
          </div>

          <div>
            <span>Sleeve</span>
            <strong>24"</strong>
          </div>

          <div>
            <span>Length</span>
            <strong>58"</strong>
          </div>
        </div>
      </div>

      <div className="voodi-profile-action-row">
        <span>
          Measurement profile available for
          production assignment.
        </span>

        <button
          type="button"
          className="voodi-demo-primary"
        >
          Assign New Job
          <i className="bi bi-arrow-right"></i>
        </button>
      </div>
    </div>
  );
}

function VoodiProcess() {
  return (
    <div className="voodi-workspace">
      <div className="voodi-production-banner">
        <div>
          <span>PRODUCTION MANAGEMENT</span>
          <h3>Clothes In Process</h3>

          <p>
            Track active production jobs across
            authorised business locations.
          </p>
        </div>

        <i className="bi bi-gear"></i>
      </div>

      <div className="voodi-production-metrics">
        <div>
          <span>Clothes In Process</span>
          <strong>1,500</strong>
        </div>

        <div>
          <span>Due Today</span>
          <strong>7</strong>
        </div>

        <div>
          <span>Overdue Pickups</span>
          <strong>25</strong>
        </div>

        <div>
          <span>Active Locations</span>
          <strong>3</strong>
        </div>
      </div>

      <div className="voodi-demo-table">
        <div className="voodi-table-heading">
          <span>Job ID</span>
          <span>Customer</span>
          <span>Item</span>
          <span>Location</span>
          <span>Status</span>
        </div>

        <div>
          <strong>VD-1504</strong>
          <span>Sophia Clinton</span>
          <span>Business Suit</span>
          <span>Amsterdam</span>

          <small className="voodi-status-green">
            Sewing
          </small>
        </div>

        <div>
          <strong>VD-1505</strong>
          <span>Luca Romano</span>
          <span>Jacket</span>
          <span>Rotterdam</span>

          <small className="voodi-status-blue">
            Cutting
          </small>
        </div>

        <div>
          <strong>VD-1506</strong>
          <span>Emma Keller</span>
          <span>Dress</span>
          <span>Amsterdam</span>

          <small className="voodi-status-orange">
            Finishing
          </small>
        </div>
      </div>
    </div>
  );
}

function VoodiReady() {
  return (
    <div className="voodi-workspace">
      <div className="voodi-page-title">
        <div>
          <span>PRODUCTION</span>
          <h3>Ready Clothes</h3>
        </div>

        <span className="voodi-record-badge ready">
          Ready for Collection
        </span>
      </div>

      <div className="voodi-ready-cards">
        <article>
          <span className="voodi-ready-icon">
            <i className="bi bi-check-lg"></i>
          </span>

          <div>
            <span>Total Ready Clothes</span>
            <strong>42</strong>
          </div>
        </article>

        <article>
          <span className="voodi-ready-icon">
            <i className="bi bi-calendar-check"></i>
          </span>

          <div>
            <span>Due Today</span>
            <strong>7</strong>
          </div>
        </article>

        <article>
          <span className="voodi-ready-icon warning">
            <i className="bi bi-exclamation-lg"></i>
          </span>

          <div>
            <span>Overdue Collection</span>
            <strong>25</strong>
          </div>
        </article>
      </div>

      <div className="voodi-ready-list">
        <div>
          <span className="voodi-ready-customer">
            SC
          </span>

          <div>
            <strong>Sophia Clinton</strong>
            <span>
              VD-1504 · Business Suit
            </span>
          </div>

          <span className="voodi-ready-date">
            Collection: Today
          </span>

          <small>READY</small>
        </div>

        <div>
          <span className="voodi-ready-customer">
            ER
          </span>

          <div>
            <strong>Eva Rossi</strong>
            <span>
              VD-1498 · Evening Dress
            </span>
          </div>

          <span className="voodi-ready-date">
            Collection: Tomorrow
          </span>

          <small>READY</small>
        </div>
      </div>
    </div>
  );
}

function VoodiCollections() {
  return (
    <div className="voodi-workspace">
      <div className="voodi-page-title">
        <div>
          <span>COLLECTION MANAGEMENT</span>
          <h3>Today's Collections</h3>
        </div>

        <span className="voodi-record-badge">
          7 Scheduled
        </span>
      </div>

      <p className="voodi-collection-description">
        Customers scheduled to collect completed
        garments today.
      </p>

      <div className="voodi-demo-table collections-table">
        <div className="voodi-table-heading">
          <span>Job ID</span>
          <span>Customer</span>
          <span>Item</span>
          <span>Location</span>
          <span>Collection</span>
        </div>

        <div>
          <strong>VD-1504</strong>
          <span>Sophia Clinton</span>
          <span>Business Suit</span>
          <span>Amsterdam</span>

          <small className="voodi-status-green">
            Today
          </small>
        </div>

        <div>
          <strong>VD-1487</strong>
          <span>Luca Romano</span>
          <span>Jacket</span>
          <span>Rotterdam</span>

          <small className="voodi-status-green">
            Today
          </small>
        </div>

        <div>
          <strong>VD-1475</strong>
          <span>Eva Rossi</span>
          <span>Dress</span>
          <span>Amsterdam</span>

          <small className="voodi-status-green">
            Today
          </small>
        </div>
      </div>

      <div className="voodi-collection-summary">
        <i className="bi bi-bag-check-fill"></i>

        <div>
          <strong>
            7 customers expected today
          </strong>

          <span>
            Automated collection reminders are
            active.
          </span>
        </div>
      </div>
    </div>
  );
}

function VoodiMobilePreview({ stage }) {
  let mobileStage = stage.replace("-click", "");

  if (mobileStage === "search") {
    mobileStage = "assign";
  }

  if (mobileStage === "customer") {
    mobileStage = "customer";
  }

  return (
    <div className="voodi-mobile-preview">
      <div className="voodi-mobile-device">
        <div className="voodi-mobile-app">
          <div className="voodi-mobile-topbar">
            <div className="voodi-mobile-brand">
              <span>V</span>

              <div>
                <strong>VOODI</strong>
                <small>ERP</small>
              </div>
            </div>

            <div className="voodi-mobile-actions">
              <div className="voodi-mobile-bell">
                <i className="bi bi-bell"></i>
                <span>3</span>
              </div>

              <div className="voodi-mobile-avatar">
                A
              </div>
            </div>
          </div>

          <div
            key={mobileStage}
            className="voodi-mobile-content"
          >
            {mobileStage === "dashboard" && (
              <VoodiMobileDashboard />
            )}

            {mobileStage === "registration" && (
              <VoodiMobileRegistration />
            )}

            {mobileStage === "assign" && (
              <VoodiMobileAssign />
            )}

            {mobileStage === "customer" && (
              <VoodiMobileCustomer />
            )}

            {mobileStage === "process" && (
              <VoodiMobileProcess />
            )}

            {mobileStage === "ready" && (
              <VoodiMobileReady />
            )}

            {mobileStage === "collections" && (
              <VoodiMobileCollections />
            )}
          </div>

          <VoodiMobileNavigation
            stage={mobileStage}
          />
        </div>
      </div>
    </div>
  );
}

function VoodiMobileDashboard() {
  return (
    <>
      <div className="voodi-mobile-welcome">
        <div>
          <span>Dashboard</span>
          <h3>Welcome, Admin</h3>
        </div>

        <button type="button">
          <i className="bi bi-search"></i>
        </button>
      </div>

      <div className="voodi-mobile-stats">
        <article>
          <small>Total Customers</small>
          <strong>672</strong>
        </article>

        <article>
          <small>Outstanding</small>
          <strong>€160K</strong>
        </article>

        <article>
          <small>In Process</small>
          <strong>1,500</strong>
        </article>

        <article>
          <small>Overdue</small>
          <strong>25</strong>
        </article>
      </div>

      <div className="voodi-mobile-quick-row">
        <div>
          <span>Today's Collections</span>
          <strong>7</strong>
        </div>

        <div>
          <span>Birthdays This Month</span>
          <strong>3</strong>
        </div>
      </div>

      <div className="voodi-mobile-notifications">
        <div className="voodi-mobile-notification-title">
          <div>
            <span>NOTIFICATIONS</span>
            <strong>Today's Activity</strong>
          </div>

          <i className="bi bi-bell-fill"></i>
        </div>

        <div className="voodi-mobile-alert">
          <i className="bi bi-bag-check"></i>

          <div>
            <strong>
              7 collections due today
            </strong>
            <small>
              View scheduled collections
            </small>
          </div>
        </div>

        <div className="voodi-mobile-alert">
          <i className="bi bi-clock-history"></i>

          <div>
            <strong>
              25 overdue collections
            </strong>
            <small>
              Clothes awaiting pickup
            </small>
          </div>
        </div>
      </div>
    </>
  );
}

function VoodiMobileRegistration() {
  return (
    <>
      <div className="voodi-mobile-page-title">
        <span>CUSTOMER MANAGEMENT</span>
        <h3>New Registration</h3>
        <p>
          Create a new customer profile.
        </p>
      </div>

      <div className="voodi-mobile-form">
        <label>
          <span>Name</span>
          <div className="voodi-mobile-input">
            Sophia Clinton
          </div>
        </label>

        <label>
          <span>Phone</span>
          <div className="voodi-mobile-input">
            +31 6 4821 7420
          </div>
        </label>

        <label>
          <span>Email</span>
          <div className="voodi-mobile-input">
            sophia.clinton@example.com
          </div>
        </label>

        <label>
          <span>Branch</span>
          <div className="voodi-mobile-input">
            Amsterdam
          </div>
        </label>

        <button type="button">
          Register Customer
        </button>
      </div>
    </>
  );
}

function VoodiMobileAssign() {
  return (
    <>
      <div className="voodi-mobile-page-title">
        <span>MEASUREMENT</span>
        <h3>Assign Job</h3>

        <p>
          Search for a customer before assigning
          measurements and production.
        </p>
      </div>

      <div className="voodi-mobile-search-box">
        <i className="bi bi-search"></i>
        <span>Sophia Clinton</span>
      </div>

      <div className="voodi-mobile-results">
        <div className="active">
          <span>SC</span>

          <div>
            <strong>Sophia Clinton</strong>
            <small>
              +31 6 4821 7420
            </small>
            <small>
              sophia.clinton@example.com
            </small>
          </div>

          <i className="bi bi-chevron-right"></i>
        </div>
      </div>
    </>
  );
}

function VoodiMobileCustomer() {
  return (
    <>
      <div className="voodi-mobile-profile">
        <span className="voodi-mobile-profile-avatar">
          SC
        </span>

        <div>
          <small>CUSTOMER SELECTED</small>
          <h3>Sophia Clinton</h3>
          <span>VD-0672 · Amsterdam</span>
        </div>
      </div>

      <div className="voodi-mobile-contact">
        <div>
          <span>Phone</span>
          <strong>
            +31 6 4821 7420
          </strong>
        </div>

        <div>
          <span>Email</span>
          <strong>
            sophia.clinton@example.com
          </strong>
        </div>
      </div>

      <div className="voodi-mobile-measurements">
        <span>MEASUREMENTS</span>

        <div>
          <article>
            <small>Chest</small>
            <strong>38"</strong>
          </article>

          <article>
            <small>Waist</small>
            <strong>31"</strong>
          </article>

          <article>
            <small>Hip</small>
            <strong>40"</strong>
          </article>

          <article>
            <small>Shoulder</small>
            <strong>15"</strong>
          </article>

          <article>
            <small>Sleeve</small>
            <strong>24"</strong>
          </article>

          <article>
            <small>Length</small>
            <strong>58"</strong>
          </article>
        </div>

        <button type="button">
          Assign New Job
        </button>
      </div>
    </>
  );
}

function VoodiMobileProcess() {
  return (
    <>
      <div className="voodi-mobile-page-title">
        <span>PRODUCTION</span>
        <h3>In Process</h3>
        <p>
          Track active clothing production.
        </p>
      </div>

      <div className="voodi-mobile-production-summary">
        <div>
          <span>In Process</span>
          <strong>1,500</strong>
        </div>

        <div>
          <span>Due Today</span>
          <strong>7</strong>
        </div>
      </div>

      <div className="voodi-mobile-job-list">
        <div>
          <span className="voodi-job-icon">
            SC
          </span>

          <div>
            <strong>Sophia Clinton</strong>
            <small>
              VD-1504 · Business Suit
            </small>
          </div>

          <span className="voodi-mobile-status">
            Sewing
          </span>
        </div>

        <div>
          <span className="voodi-job-icon">
            LR
          </span>

          <div>
            <strong>Luca Romano</strong>
            <small>
              VD-1505 · Jacket
            </small>
          </div>

          <span className="voodi-mobile-status blue">
            Cutting
          </span>
        </div>
      </div>
    </>
  );
}

function VoodiMobileReady() {
  return (
    <>
      <div className="voodi-mobile-page-title">
        <span>PRODUCTION</span>
        <h3>Ready Clothes</h3>
        <p>
          Finished garments ready for collection.
        </p>
      </div>

      <div className="voodi-mobile-ready-total">
        <i className="bi bi-check-circle-fill"></i>

        <div>
          <small>Total Ready</small>
          <strong>42</strong>
        </div>
      </div>

      <div className="voodi-mobile-job-list">
        <div>
          <span className="voodi-job-icon">
            SC
          </span>

          <div>
            <strong>Sophia Clinton</strong>
            <small>
              VD-1504 · Business Suit
            </small>
          </div>

          <span className="voodi-mobile-status ready">
            Ready
          </span>
        </div>

        <div>
          <span className="voodi-job-icon">
            ER
          </span>

          <div>
            <strong>Eva Rossi</strong>
            <small>
              VD-1498 · Evening Dress
            </small>
          </div>

          <span className="voodi-mobile-status ready">
            Ready
          </span>
        </div>
      </div>
    </>
  );
}

function VoodiMobileCollections() {
  return (
    <>
      <div className="voodi-mobile-page-title">
        <span>COLLECTIONS</span>
        <h3>Today's Collections</h3>
        <p>
          Customers expected for collection today.
        </p>
      </div>

      <div className="voodi-mobile-collection-count">
        <div>
          <span>Scheduled Today</span>
          <strong>7</strong>
        </div>

        <i className="bi bi-bag-check-fill"></i>
      </div>

      <div className="voodi-mobile-job-list">
        <div>
          <span className="voodi-job-icon">
            SC
          </span>

          <div>
            <strong>Sophia Clinton</strong>
            <small>
              VD-1504 · Amsterdam
            </small>
          </div>

          <span className="voodi-mobile-status ready">
            Today
          </span>
        </div>

        <div>
          <span className="voodi-job-icon">
            LR
          </span>

          <div>
            <strong>Luca Romano</strong>
            <small>
              VD-1487 · Rotterdam
            </small>
          </div>

          <span className="voodi-mobile-status ready">
            Today
          </span>
        </div>
      </div>
    </>
  );
}

function VoodiMobileNavigation({ stage }) {
  return (
    <nav className="voodi-mobile-bottom-nav">
      <div
        className={
          stage === "dashboard" ? "active" : ""
        }
      >
        <i className="bi bi-grid"></i>
        <span>Dashboard</span>
      </div>

      <div
        className={
          stage === "registration" ? "active" : ""
        }
      >
        <i className="bi bi-person-plus"></i>
        <span>Register</span>
      </div>

      <div
        className={
          stage === "assign" ||
          stage === "customer"
            ? "active"
            : ""
        }
      >
        <i className="bi bi-scissors"></i>
        <span>Assign</span>
      </div>

      <div
        className={
          stage === "process" ||
          stage === "ready"
            ? "active"
            : ""
        }
      >
        <i className="bi bi-gear"></i>
        <span>Process</span>
      </div>

      <div
        className={
          stage === "collections" ? "active" : ""
        }
      >
        <i className="bi bi-bag-check"></i>
        <span>Collect</span>
      </div>
    </nav>
  );
}
function StyleWrightDemo() {
  const stages = [
    "dashboard",
    "customers",
    "measurements",
    "orders",
    "production",
    "payments",
  ];

  const [stageIndex, setStageIndex] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => {
      setStageIndex(
        (current) => (current + 1) % stages.length
      );
    }, 2300);

    return () => clearTimeout(timer);
  }, [stageIndex]);

  const stage = stages[stageIndex];

  return (
    <>
      <StyleWrightDesktopPreview stage={stage} />
      <StyleWrightMobilePreview stage={stage} />
    </>
  );
}
function StyleWrightDesktopPreview({ stage }) {
  return (
    <div className="stylewright-desktop-preview">
      <div className="stylewright-demo-window">
        <div className="stylewright-demo-topbar">
          <div className="stylewright-demo-brand">
            <span>SW</span>

            <div>
              <strong>STYLE WRIGHT</strong>
              <small>FASHION HOUSE</small>
            </div>
          </div>

          <div className="stylewright-demo-actions">
            <i className="bi bi-bell"></i>
            <i className="bi bi-envelope"></i>
            <span>A</span>
          </div>
        </div>

        <div className="stylewright-demo-layout">
          <StyleWrightSidebar stage={stage} />

          <div className="stylewright-demo-main">
            <div
              key={stage}
              className="stylewright-stage"
            >
              {stage === "dashboard" && (
                <StyleWrightDashboard />
              )}

              {stage === "customers" && (
                <StyleWrightCustomers />
              )}

              {stage === "measurements" && (
                <StyleWrightMeasurements />
              )}

              {stage === "orders" && (
                <StyleWrightOrders />
              )}

              {stage === "production" && (
                <StyleWrightProduction />
              )}

              {stage === "payments" && (
                <StyleWrightPayments />
              )}
            </div>
          </div>

          <StyleWrightCursor stage={stage} />
        </div>
      </div>
    </div>
  );
}

function StyleWrightSidebar({ stage }) {
  return (
    <aside className="stylewright-demo-sidebar">
      <div
        className={`stylewright-nav-item ${
          stage === "dashboard" ? "active" : ""
        }`}
      >
        <i className="bi bi-grid"></i>
        <span>Dashboard</span>
      </div>

      <div
        className={`stylewright-nav-item ${
          stage === "customers" ? "active" : ""
        }`}
      >
        <i className="bi bi-people"></i>
        <span>Customers</span>
      </div>

      <div
        className={`stylewright-nav-item ${
          stage === "measurements" ? "active" : ""
        }`}
      >
        <i className="bi bi-rulers"></i>
        <span>Measurements</span>
      </div>

      <div
        className={`stylewright-nav-item ${
          stage === "orders" ? "active" : ""
        }`}
      >
        <i className="bi bi-bag"></i>
        <span>Orders</span>
      </div>

      <div
        className={`stylewright-nav-item ${
          stage === "production" ? "active" : ""
        }`}
      >
        <i className="bi bi-gear"></i>
        <span>Production</span>
      </div>

      <div
        className={`stylewright-nav-item ${
          stage === "payments" ? "active" : ""
        }`}
      >
        <i className="bi bi-credit-card"></i>
        <span>Payments</span>
      </div>

      <div className="stylewright-nav-item">
        <i className="bi bi-bar-chart"></i>
        <span>Reports</span>
      </div>
    </aside>
  );
}

function StyleWrightDashboard() {
  return (
    <>
      <div className="stylewright-page-heading">
        <div>
          <span>OVERVIEW</span>
          <h3>Dashboard</h3>
        </div>

        <small>Business Overview</small>
      </div>

      <div className="stylewright-dashboard-stats">
        <article>
          <span>Customers</span>
          <strong>1,248</strong>
          <small>Registered profiles</small>
        </article>

        <article>
          <span>Active Orders</span>
          <strong>256</strong>
          <small>Current customer orders</small>
        </article>

        <article>
          <span>In Production</span>
          <strong>142</strong>
          <small>Garments being produced</small>
        </article>

        <article>
          <span>Ready</span>
          <strong>58</strong>
          <small>Ready for collection</small>
        </article>
      </div>

      <div className="stylewright-dashboard-grid">
        <div className="stylewright-status-card">
          <span>ORDER PIPELINE</span>
          <h4>Production Status</h4>

          <div className="stylewright-progress-row">
            <span>Cutting</span>
            <div>
              <i style={{ width: "76%" }}></i>
            </div>
            <strong>46</strong>
          </div>

          <div className="stylewright-progress-row">
            <span>Sewing</span>
            <div>
              <i style={{ width: "88%" }}></i>
            </div>
            <strong>61</strong>
          </div>

          <div className="stylewright-progress-row">
            <span>Finishing</span>
            <div>
              <i style={{ width: "49%" }}></i>
            </div>
            <strong>35</strong>
          </div>
        </div>

        <div className="stylewright-recent-orders">
          <span>RECENT ORDERS</span>

          <div>
            <strong>SW-0256</strong>
            <span>Sophia Clinton</span>
            <small>Premium Suit</small>
          </div>

          <div>
            <strong>SW-0255</strong>
            <span>Luca Romano</span>
            <small>Blazer</small>
          </div>

          <div>
            <strong>SW-0254</strong>
            <span>Eva Rossi</span>
            <small>Evening Dress</small>
          </div>
        </div>
      </div>
    </>
  );
}

function StyleWrightCustomers() {
  return (
    <>
      <div className="stylewright-page-heading">
        <div>
          <span>CUSTOMER MANAGEMENT</span>
          <h3>Customer Profiles</h3>
        </div>

        <button type="button">
          New Customer
        </button>
      </div>

      <div className="stylewright-search-bar">
        <i className="bi bi-search"></i>
        <span>Search customers...</span>
      </div>

      <div className="stylewright-customer-list">
        <div>
          <span className="stylewright-avatar">
            SC
          </span>

          <div>
            <strong>Sophia Clinton</strong>
            <small>
              sophia.clinton@example.com
            </small>
          </div>

          <span>Amsterdam</span>

          <button type="button">
            View Profile
          </button>
        </div>

        <div>
          <span className="stylewright-avatar">
            LR
          </span>

          <div>
            <strong>Luca Romano</strong>
            <small>
              luca.romano@example.com
            </small>
          </div>

          <span>Rotterdam</span>

          <button type="button">
            View Profile
          </button>
        </div>

        <div>
          <span className="stylewright-avatar">
            ER
          </span>

          <div>
            <strong>Eva Rossi</strong>
            <small>
              eva.rossi@example.com
            </small>
          </div>

          <span>Amsterdam</span>

          <button type="button">
            View Profile
          </button>
        </div>
      </div>
    </>
  );
}

function StyleWrightMeasurements() {
  return (
    <>
      <div className="stylewright-page-heading">
        <div>
          <span>CUSTOMER PROFILE</span>
          <h3>Sophia Clinton</h3>
        </div>

        <small>Customer SW-1248</small>
      </div>

      <div className="stylewright-profile-summary">
        <span className="stylewright-profile-avatar">
          SC
        </span>

        <div>
          <strong>Sophia Clinton</strong>
          <span>
            +31 6 4821 7420
          </span>
          <small>
            sophia.clinton@example.com
          </small>
        </div>
      </div>

      <div className="stylewright-measurement-title">
        <span>MEASUREMENT PROFILE</span>
        <strong>Saved Measurements</strong>
      </div>

      <div className="stylewright-measurements-grid">
        <article>
          <span>Chest</span>
          <strong>94 cm</strong>
        </article>

        <article>
          <span>Waist</span>
          <strong>78 cm</strong>
        </article>

        <article>
          <span>Hip</span>
          <strong>98 cm</strong>
        </article>

        <article>
          <span>Shoulder</span>
          <strong>44 cm</strong>
        </article>

        <article>
          <span>Sleeve</span>
          <strong>61 cm</strong>
        </article>

        <article>
          <span>Length</span>
          <strong>72 cm</strong>
        </article>
      </div>
    </>
  );
}

function StyleWrightOrders() {
  return (
    <>
      <div className="stylewright-page-heading">
        <div>
          <span>ORDER MANAGEMENT</span>
          <h3>Active Orders</h3>
        </div>

        <button type="button">
          New Order
        </button>
      </div>

      <div className="stylewright-order-summary">
        <div>
          <span>Active Orders</span>
          <strong>256</strong>
        </div>

        <div>
          <span>Due This Week</span>
          <strong>24</strong>
        </div>

        <div>
          <span>Awaiting Fitting</span>
          <strong>18</strong>
        </div>
      </div>

      <div className="stylewright-order-table">
        <div className="stylewright-table-heading">
          <span>Order</span>
          <span>Customer</span>
          <span>Style</span>
          <span>Status</span>
        </div>

        <div>
          <strong>SW-0256</strong>
          <span>Sophia Clinton</span>
          <span>Premium Suit</span>
          <small>In Production</small>
        </div>

        <div>
          <strong>SW-0255</strong>
          <span>Luca Romano</span>
          <span>Blazer</span>
          <small>Fitting</small>
        </div>

        <div>
          <strong>SW-0254</strong>
          <span>Eva Rossi</span>
          <span>Evening Dress</span>
          <small>Ready</small>
        </div>
      </div>
    </>
  );
}

function StyleWrightProduction() {
  return (
    <>
      <div className="stylewright-page-heading">
        <div>
          <span>PRODUCTION CONTROL</span>
          <h3>Production Workflow</h3>
        </div>

        <small>142 Active Jobs</small>
      </div>

      <div className="stylewright-production-flow">
        <article>
          <i className="bi bi-scissors"></i>
          <span>Cutting</span>
          <strong>46</strong>
        </article>

        <i className="bi bi-arrow-right"></i>

        <article>
          <i className="bi bi-gear"></i>
          <span>Sewing</span>
          <strong>61</strong>
        </article>

        <i className="bi bi-arrow-right"></i>

        <article>
          <i className="bi bi-stars"></i>
          <span>Finishing</span>
          <strong>35</strong>
        </article>

        <i className="bi bi-arrow-right"></i>

        <article>
          <i className="bi bi-check-circle"></i>
          <span>Ready</span>
          <strong>58</strong>
        </article>
      </div>

      <div className="stylewright-production-job">
        <div>
          <span>SW-0256</span>
          <strong>Sophia Clinton</strong>
          <small>Premium Suit</small>
        </div>

        <div>
          <span>Current Stage</span>
          <strong>Sewing</strong>
        </div>

        <div>
          <span>Delivery</span>
          <strong>20 May</strong>
        </div>

        <small className="stylewright-status">
          IN PRODUCTION
        </small>
      </div>
    </>
  );
}

function StyleWrightPayments() {
  return (
    <>
      <div className="stylewright-page-heading">
        <div>
          <span>FINANCIAL MANAGEMENT</span>
          <h3>Payments & Collections</h3>
        </div>

        <button type="button">
          Record Payment
        </button>
      </div>

      <div className="stylewright-payment-cards">
        <article>
          <span>Order Amount</span>
          <strong>€1,250</strong>
        </article>

        <article>
          <span>Paid</span>
          <strong>€750</strong>
        </article>

        <article className="outstanding">
          <span>Outstanding</span>
          <strong>€500</strong>
        </article>
      </div>

      <div className="stylewright-payment-history">
        <span>PAYMENT HISTORY</span>

        <div>
          <strong>RCPT-10254</strong>
          <span>€250</span>
          <small>Cash</small>
        </div>

        <div>
          <strong>RCPT-10287</strong>
          <span>€500</span>
          <small>Bank Transfer</small>
        </div>
      </div>
    </>
  );
}

function StyleWrightCursor({ stage }) {
  return (
    <div
      className={`stylewright-cursor stylewright-cursor-${stage}`}
    >
      <i className="bi bi-cursor-fill"></i>
    </div>
  );
}

function StyleWrightMobilePreview({ stage }) {
  return (
    <div className="stylewright-mobile-preview">
      <div className="stylewright-mobile-device">
        <div className="stylewright-mobile-app">
          <div className="stylewright-mobile-topbar">
            <div className="stylewright-mobile-brand">
              <span>SW</span>

              <div>
                <strong>STYLE WRIGHT</strong>
                <small>FASHION HOUSE</small>
              </div>
            </div>

            <div className="stylewright-mobile-actions">
              <div className="stylewright-mobile-bell">
                <i className="bi bi-bell"></i>
                <span>3</span>
              </div>

              <span className="stylewright-mobile-avatar">
                A
              </span>
            </div>
          </div>

          <div
            key={stage}
            className="stylewright-mobile-content"
          >
            {stage === "dashboard" && (
              <StyleWrightMobileDashboard />
            )}

            {stage === "customers" && (
              <StyleWrightMobileCustomers />
            )}

            {stage === "measurements" && (
              <StyleWrightMobileMeasurements />
            )}

            {stage === "orders" && (
              <StyleWrightMobileOrders />
            )}

            {stage === "production" && (
              <StyleWrightMobileProduction />
            )}

            {stage === "payments" && (
              <StyleWrightMobilePayments />
            )}
          </div>

          <StyleWrightMobileNav stage={stage} />
        </div>
      </div>
    </div>
  );
}

function StyleWrightMobileDashboard() {
  return (
    <>
      <div className="stylewright-mobile-heading">
        <div>
          <span>OVERVIEW</span>
          <h3>Dashboard</h3>
        </div>

        <button type="button">
          <i className="bi bi-search"></i>
        </button>
      </div>

      <div className="stylewright-mobile-stats">
        <article>
          <span>Customers</span>
          <strong>1,248</strong>
        </article>

        <article>
          <span>Active Orders</span>
          <strong>256</strong>
        </article>

        <article>
          <span>In Production</span>
          <strong>142</strong>
        </article>

        <article>
          <span>Ready</span>
          <strong>58</strong>
        </article>
      </div>

      <div className="stylewright-mobile-section">
        <div className="stylewright-mobile-section-heading">
          <span>PRODUCTION</span>
          <strong>Order Pipeline</strong>
        </div>

        <div className="stylewright-mobile-progress">
          <div>
            <span>Cutting</span>
            <strong>46</strong>
          </div>

          <div className="stylewright-mobile-progress-bar">
            <span style={{ width: "72%" }}></span>
          </div>
        </div>

        <div className="stylewright-mobile-progress">
          <div>
            <span>Sewing</span>
            <strong>61</strong>
          </div>

          <div className="stylewright-mobile-progress-bar">
            <span style={{ width: "88%" }}></span>
          </div>
        </div>

        <div className="stylewright-mobile-progress">
          <div>
            <span>Finishing</span>
            <strong>35</strong>
          </div>

          <div className="stylewright-mobile-progress-bar">
            <span style={{ width: "52%" }}></span>
          </div>
        </div>
      </div>

      <div className="stylewright-mobile-section">
        <div className="stylewright-mobile-section-heading">
          <span>RECENT</span>
          <strong>Latest Orders</strong>
        </div>

        <div className="stylewright-mobile-order">
          <span>SC</span>

          <div>
            <strong>Sophia Clinton</strong>
            <small>SW-0256 · Premium Suit</small>
          </div>

          <small>Production</small>
        </div>

        <div className="stylewright-mobile-order">
          <span>ER</span>

          <div>
            <strong>Eva Rossi</strong>
            <small>SW-0254 · Evening Dress</small>
          </div>

          <small>Ready</small>
        </div>
      </div>
    </>
  );
}

function StyleWrightMobileCustomers() {
  return (
    <>
      <div className="stylewright-mobile-heading">
        <div>
          <span>CUSTOMERS</span>
          <h3>Customer Profiles</h3>
        </div>

        <button type="button">
          <i className="bi bi-person-plus"></i>
        </button>
      </div>

      <div className="stylewright-mobile-search">
        <i className="bi bi-search"></i>
        <span>Search customer...</span>
      </div>

      <div className="stylewright-mobile-customer-list">
        <article>
          <span className="stylewright-mobile-customer-avatar">
            SC
          </span>

          <div>
            <strong>Sophia Clinton</strong>
            <small>sophia.clinton@example.com</small>
            <span>Amsterdam</span>
          </div>

          <i className="bi bi-chevron-right"></i>
        </article>

        <article>
          <span className="stylewright-mobile-customer-avatar">
            LR
          </span>

          <div>
            <strong>Luca Romano</strong>
            <small>luca.romano@example.com</small>
            <span>Rotterdam</span>
          </div>

          <i className="bi bi-chevron-right"></i>
        </article>

        <article>
          <span className="stylewright-mobile-customer-avatar">
            ER
          </span>

          <div>
            <strong>Eva Rossi</strong>
            <small>eva.rossi@example.com</small>
            <span>Amsterdam</span>
          </div>

          <i className="bi bi-chevron-right"></i>
        </article>
      </div>
    </>
  );
}

function StyleWrightMobileMeasurements() {
  return (
    <>
      <div className="stylewright-mobile-profile">
        <span>SC</span>

        <div>
          <small>CUSTOMER PROFILE</small>
          <h3>Sophia Clinton</h3>
          <p>SW-1248</p>
        </div>
      </div>

      <div className="stylewright-mobile-contact">
        <div>
          <span>Phone</span>
          <strong>+31 6 4821 7420</strong>
        </div>

        <div>
          <span>Email</span>
          <strong>sophia.clinton@example.com</strong>
        </div>
      </div>

      <div className="stylewright-mobile-section">
        <div className="stylewright-mobile-section-heading">
          <span>MEASUREMENTS</span>
          <strong>Saved Profile</strong>
        </div>

        <div className="stylewright-mobile-measurements-grid">
          <article>
            <span>Chest</span>
            <strong>94 cm</strong>
          </article>

          <article>
            <span>Waist</span>
            <strong>78 cm</strong>
          </article>

          <article>
            <span>Hip</span>
            <strong>98 cm</strong>
          </article>

          <article>
            <span>Shoulder</span>
            <strong>44 cm</strong>
          </article>

          <article>
            <span>Sleeve</span>
            <strong>61 cm</strong>
          </article>

          <article>
            <span>Length</span>
            <strong>72 cm</strong>
          </article>
        </div>
      </div>
    </>
  );
}

function StyleWrightMobileOrders() {
  return (
    <>
      <div className="stylewright-mobile-heading">
        <div>
          <span>ORDER MANAGEMENT</span>
          <h3>Active Orders</h3>
        </div>

        <button type="button">
          <i className="bi bi-plus-lg"></i>
        </button>
      </div>

      <div className="stylewright-mobile-summary">
        <article>
          <span>Active</span>
          <strong>256</strong>
        </article>

        <article>
          <span>Due This Week</span>
          <strong>24</strong>
        </article>

        <article>
          <span>Fittings</span>
          <strong>18</strong>
        </article>
      </div>

      <div className="stylewright-mobile-order-list">
        <article>
          <div>
            <strong>SW-0256</strong>
            <span>Sophia Clinton</span>
            <small>Premium Suit</small>
          </div>

          <span className="stylewright-mobile-status">
            Production
          </span>
        </article>

        <article>
          <div>
            <strong>SW-0255</strong>
            <span>Luca Romano</span>
            <small>Blazer</small>
          </div>

          <span className="stylewright-mobile-status fitting">
            Fitting
          </span>
        </article>

        <article>
          <div>
            <strong>SW-0254</strong>
            <span>Eva Rossi</span>
            <small>Evening Dress</small>
          </div>

          <span className="stylewright-mobile-status ready">
            Ready
          </span>
        </article>
      </div>
    </>
  );
}

function StyleWrightMobileProduction() {
  return (
    <>
      <div className="stylewright-mobile-heading">
        <div>
          <span>PRODUCTION</span>
          <h3>Production Workflow</h3>
        </div>

        <small>142 Active</small>
      </div>

      <div className="stylewright-mobile-production-grid">
        <article>
          <i className="bi bi-scissors"></i>
          <span>Cutting</span>
          <strong>46</strong>
        </article>

        <article>
          <i className="bi bi-gear"></i>
          <span>Sewing</span>
          <strong>61</strong>
        </article>

        <article>
          <i className="bi bi-stars"></i>
          <span>Finishing</span>
          <strong>35</strong>
        </article>

        <article>
          <i className="bi bi-check-circle"></i>
          <span>Ready</span>
          <strong>58</strong>
        </article>
      </div>

      <div className="stylewright-mobile-job">
        <div>
          <small>CURRENT JOB</small>
          <strong>Sophia Clinton</strong>
          <span>SW-0256 · Premium Suit</span>
        </div>

        <div className="stylewright-mobile-job-meta">
          <span>
            Stage
            <strong>Sewing</strong>
          </span>

          <span>
            Delivery
            <strong>20 May</strong>
          </span>
        </div>
      </div>
    </>
  );
}

function StyleWrightMobilePayments() {
  return (
    <>
      <div className="stylewright-mobile-heading">
        <div>
          <span>FINANCIAL</span>
          <h3>Payments</h3>
        </div>

        <button type="button">
          <i className="bi bi-plus-lg"></i>
        </button>
      </div>

      <div className="stylewright-mobile-payment-summary">
        <article>
          <span>Order Amount</span>
          <strong>€1,250</strong>
        </article>

        <article>
          <span>Paid</span>
          <strong>€750</strong>
        </article>

        <article className="outstanding">
          <span>Outstanding</span>
          <strong>€500</strong>
        </article>
      </div>

      <div className="stylewright-mobile-section">
        <div className="stylewright-mobile-section-heading">
          <span>HISTORY</span>
          <strong>Recent Payments</strong>
        </div>

        <div className="stylewright-mobile-payment-row">
          <div>
            <strong>RCPT-10287</strong>
            <small>Bank Transfer</small>
          </div>

          <strong>€500</strong>
        </div>

        <div className="stylewright-mobile-payment-row">
          <div>
            <strong>RCPT-10254</strong>
            <small>Cash</small>
          </div>

          <strong>€250</strong>
        </div>
      </div>
    </>
  );
}

function StyleWrightMobileNav({ stage }) {
  return (
    <nav className="stylewright-mobile-nav">
      <div className={stage === "dashboard" ? "active" : ""}>
        <i className="bi bi-grid"></i>
        <span>Home</span>
      </div>

      <div className={stage === "customers" ? "active" : ""}>
        <i className="bi bi-people"></i>
        <span>Clients</span>
      </div>

      <div
        className={
          stage === "measurements" ||
          stage === "orders"
            ? "active"
            : ""
        }
      >
        <i className="bi bi-rulers"></i>
        <span>Orders</span>
      </div>

      <div className={stage === "production" ? "active" : ""}>
        <i className="bi bi-gear"></i>
        <span>Production</span>
      </div>

      <div className={stage === "payments" ? "active" : ""}>
        <i className="bi bi-credit-card"></i>
        <span>Payments</span>
      </div>
    </nav>
  );
}

function PortfolioHero() {
  return (
    <section className="portfolio-hero">
      <div className="portfolio-hero-grid"></div>

      <div className="portfolio-hero-glow hero-glow-one"></div>
      <div className="portfolio-hero-glow hero-glow-two"></div>

      <div className="container">
        <div className="portfolio-hero-layout">

          {/* LEFT SIDE */}
          <div className="portfolio-hero-content">
            <span className="portfolio-eyebrow">
              OUR WORK
            </span>

            <h1>
              Technology Built
              <br />
              for <strong>Real Businesses.</strong>
            </h1>

            <span className="portfolio-hero-line"></span>

            <p>
              Explore selected systems designed and
              developed around real operational
              challenges — from ERP modernisation and
              workflow automation to custom business
              management platforms.
            </p>
          </div>

          {/* RIGHT SIDE */}
          <div className="portfolio-network">

            {/* CURVED CONNECTION SYSTEM */}
            <svg
              className="portfolio-network-lines"
              viewBox="0 0 720 470"
              preserveAspectRatio="none"
              aria-hidden="true"
            >
              <defs>
                <linearGradient
                  id="networkStroke"
                  x1="0"
                  y1="0"
                  x2="1"
                  y2="1"
                >
                  <stop
                    offset="0%"
                    stopColor="#168dff"
                    stopOpacity="0.12"
                  />

                  <stop
                    offset="45%"
                    stopColor="#3db4ff"
                    stopOpacity="0.9"
                  />

                  <stop
                    offset="100%"
                    stopColor="#167cff"
                    stopOpacity="0.15"
                  />
                </linearGradient>

                <linearGradient
                  id="energyStroke"
                  x1="0"
                  y1="0"
                  x2="1"
                  y2="1"
                >
                  <stop
                    offset="0%"
                    stopColor="#73dcff"
                  />

                  <stop
                    offset="50%"
                    stopColor="#168cff"
                  />

                  <stop
                    offset="100%"
                    stopColor="#64d3ff"
                  />
                </linearGradient>

                <filter
                  id="networkGlow"
                  x="-80%"
                  y="-80%"
                  width="260%"
                  height="260%"
                >
                  <feGaussianBlur
                    stdDeviation="4"
                    result="blur"
                  />

                  <feMerge>
                    <feMergeNode in="blur" />
                    <feMergeNode in="SourceGraphic" />
                  </feMerge>
                </filter>
              </defs>

              {/* SOFT FLOW LINES */}
              <g className="network-flow-lines">
                <path
                  d="
                    M -40 295
                    C 105 235,
                      190 248,
                      300 292
                    C 405 334,
                      485 308,
                      760 186
                  "
                />

                <path
                  d="
                    M -40 318
                    C 110 265,
                      210 275,
                      305 311
                    C 412 350,
                      520 320,
                      760 222
                  "
                />

                <path
                  d="
                    M -40 340
                    C 115 300,
                      230 298,
                      326 329
                    C 430 362,
                      545 350,
                      760 270
                  "
                />
              </g>

              {/* BASE NETWORK CONNECTIONS */}
              <g className="network-base-connections">
                <path
                  d="
                    M 170 122
                    C 250 126,
                      267 182,
                      345 220
                  "
                />

                <path
                  d="
                    M 570 82
                    C 520 93,
                      485 153,
                      390 221
                  "
                />

                <path
                  d="
                    M 585 230
                    C 520 224,
                      465 223,
                      393 230
                  "
                />

                <path
                  d="
                    M 164 386
                    C 232 367,
                      266 289,
                      346 246
                  "
                />

                <path
                  d="
                    M 568 390
                    C 508 370,
                      474 300,
                      390 246
                  "
                />
              </g>

              {/* MOVING ENERGY */}
              <g className="network-energy-connections">
                <path
                  pathLength="100"
                  d="
                    M 170 122
                    C 250 126,
                      267 182,
                      345 220
                  "
                />

                <path
                  pathLength="100"
                  d="
                    M 570 82
                    C 520 93,
                      485 153,
                      390 221
                  "
                />

                <path
                  pathLength="100"
                  d="
                    M 585 230
                    C 520 224,
                      465 223,
                      393 230
                  "
                />

                <path
                  pathLength="100"
                  d="
                    M 164 386
                    C 232 367,
                      266 289,
                      346 246
                  "
                />

                <path
                  pathLength="100"
                  d="
                    M 568 390
                    C 508 370,
                      474 300,
                      390 246
                  "
                />
              </g>

              {/* CONNECTION NODES */}
              <g className="network-node-group">
                <circle cx="170" cy="122" r="4" />
                <circle cx="570" cy="82" r="4" />
                <circle cx="585" cy="230" r="4" />
                <circle cx="164" cy="386" r="4" />
                <circle cx="568" cy="390" r="4" />

                <circle
                  className="network-center-node"
                  cx="370"
                  cy="232"
                  r="6"
                />
              </g>
            </svg>

            {/* CENTRAL XP */}
            <div className="network-core">
              <div className="network-core-inner">
                <span>X</span>
                <strong>P</strong>
              </div>
            </div>

            {/* WORKFLOW */}
            <div className="network-card network-workflow">
              <div className="network-card-header">
                <span className="network-card-icon">
                  <i className="bi bi-diagram-3-fill"></i>
                </span>

                <strong>Workflow</strong>
              </div>

              <p>
                Automated
                <br />
                processes
              </p>

              <span className="network-card-check">
                <i className="bi bi-check-lg"></i>
              </span>
            </div>

            {/* OPERATIONS */}
            <div className="network-card network-operations">
              <div className="network-card-header">
                <span className="network-card-icon">
                  <i className="bi bi-people-fill"></i>
                </span>

                <strong>Operations</strong>
              </div>

              <p>Real-time overview</p>

              <div className="network-mini-bars">
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
              </div>
            </div>

            {/* AUTOMATION */}
            <div className="network-card network-automation">
              <div className="network-card-header">
                <span className="network-card-icon">
                  <i className="bi bi-gear-fill"></i>
                </span>

                <strong>Automation</strong>
              </div>

              <span className="network-metric-label">
                Efficiency
              </span>

              <strong className="network-metric">
                98.4%
              </strong>

              <div className="network-mini-chart">
                <svg
                  viewBox="0 0 150 35"
                  preserveAspectRatio="none"
                >
                  <polyline
                    points="
                      0,29
                      20,25
                      38,27
                      57,20
                      77,23
                      98,14
                      119,18
                      150,7
                    "
                  />
                </svg>
              </div>
            </div>

            {/* ERP DATA */}
            <div className="network-card network-data">
              <div className="network-card-header">
                <span className="network-card-icon">
                  <i className="bi bi-database-fill"></i>
                </span>

                <strong>ERP Data</strong>
              </div>

              <p>
                Centralised
                <br />
                &amp; Secure
              </p>

              <div className="network-data-dots">
                <span></span>
                <span></span>
                <span></span>
              </div>
            </div>

            {/* ANALYTICS */}
            <div className="network-card network-analytics">
              <div className="network-card-header">
                <span className="network-card-icon">
                  <i className="bi bi-pie-chart-fill"></i>
                </span>

                <strong>Analytics</strong>
              </div>

              <p>
                Insightful
                <br />
                decisions
              </p>

              <div className="network-mini-bars analytics-bars">
                <span></span>
                <span></span>
                <span></span>
                <span></span>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}

function Portfolio() {
  return (
    <>
      <Helmet>
        <title>
          Portfolio | ERP & Business Software Projects | XP Technologies
        </title>

        <meta
          name="description"
          content="Explore ERP modernisation, workflow automation and custom business software projects developed by XP Technologies."
        />
      </Helmet>

      <Navbar />

      <main className="portfolio-page">
        <PortfolioHero />

        <section className="portfolio-work">
          <div className="container">
            <div className="portfolio-heading">
              <span>SELECTED WORK</span>

              <h2>
                Software Designed Around
                How Businesses Actually Work
              </h2>

              <p>
                We go beyond generic software.
                Each system begins with understanding
                the business, identifying operational
                friction and engineering technology
                around the processes that matter.
              </p>
            </div>

            <article className="portfolio-project-card">
              <div className="portfolio-project-info">
                <span className="portfolio-featured">
                  FEATURED PROJECT
                </span>

                <span className="portfolio-category">
                  ERP MODERNISATION · FASHION OPERATIONS
                </span>

                <h2>Voodi</h2>

                <h3>
                  Multi-Branch Fashion ERP System
                </h3>

                <p>
                  A modernised ERP platform connecting
                  customer management, measurements,
                  job assignment, production, payments
                  and collections across a
                  multi-location fashion business.
                </p>

                <div className="portfolio-tags">
                  <span>ERP Modernisation</span>
                  <span>Workflow Automation</span>
                  <span>Multi-Branch Operations</span>
                </div>

                <a
                  href="/portfolio/voodi"
                  className="portfolio-explore-btn"
                >
                  Explore Project
                  <i className="bi bi-arrow-right"></i>
                </a>
              </div>

              <div className="portfolio-project-demo">
                <VoodiDemo />
              </div>
            </article>

            <article className="portfolio-project-card stylewright-project">
           
                <div className="stylewright-preview">
  <StyleWrightDemo />
</div>
             
              <div className="portfolio-project-info">
                <span className="portfolio-category">
                  BUSINESS MANAGEMENT · FASHION TECHNOLOGY
                </span>

                <h2>STYLE WRIGHT</h2>

                <h3>
                  Fashion Business Management System
                </h3>

                <p>
                  A connected digital platform
                  designed to simplify customer
                  management, orders and day-to-day
                  operational workflows.
                </p>

                <div className="portfolio-tags">
                  <span>Business System</span>
                  <span>Customer Management</span>
                  <span>Operations</span>
                </div>

                <a
                  href="/portfolio/StyleWrightProject"
                  className="portfolio-explore-btn"
                >
                  Explore Project
                  <i className="bi bi-arrow-right"></i>
                </a>
              </div>
            </article>
          </div>
        </section>

        <section className="portfolio-method">
          <div className="container">
            <div className="portfolio-method-box">
              <div className="portfolio-method-heading">
                <span>HOW WE WORK</span>

                <h2>
                  From Business Problem
                  <br />
                  to Working System
                </h2>
              </div>

              <div className="portfolio-method-steps">
                <article>
                  <span>
                    <i className="bi bi-search"></i>
                  </span>

                  <h3>Understand</h3>

                  <p>
                    Study the business, workflows
                    and operational challenges.
                  </p>
                </article>

                <i className="bi bi-arrow-right"></i>

                <article>
                  <span>
                    <i className="bi bi-bezier2"></i>
                  </span>

                  <h3>Design</h3>

                  <p>
                    Design technology around how
                    the business needs to operate.
                  </p>
                </article>

                <i className="bi bi-arrow-right"></i>

                <article>
                  <span>
                    <i className="bi bi-code-slash"></i>
                  </span>

                  <h3>Build</h3>

                  <p>
                    Engineer secure, scalable and
                    maintainable business software.
                  </p>
                </article>

                <i className="bi bi-arrow-right"></i>

                <article>
                  <span>
                    <i className="bi bi-rocket-takeoff"></i>
                  </span>

                  <h3>Deploy & Improve</h3>

                  <p>
                    Launch, support and evolve the
                    system as the business grows.
                  </p>
                </article>
              </div>
            </div>
          </div>
        </section>

        <section className="portfolio-bottom-cta">
          <div className="container">
            <div className="portfolio-cta-box">
              <div className="portfolio-cta-icon">
                <i className="bi bi-chat-dots"></i>
              </div>

              <div>
                <span>HAVE A PROJECT IN MIND?</span>

                <h2>
                  Let's Build Technology Around
                  Your Business.
                </h2>

                <p>
                  Tell us where your operations are
                  slowing down. We'll help determine
                  what technology can do about it.
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

export default Portfolio;