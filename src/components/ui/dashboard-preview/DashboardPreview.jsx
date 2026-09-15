

import "./DashboardPreview.css";

function DashboardPreview({ stage = "dashboard", onLogout }) {
  const customerActive =
    stage === "customer-menu" ||
    stage === "customer-search" ||
    stage === "customer-result";

  const ordersActive = stage === "orders-menu";
  const reportsActive = stage === "reports-menu";

  const logoutActive =
    stage === "logout-focus" ||
    stage === "logout-click";

  const dashboardActive =
    stage === "dashboard" ||
    stage === "dashboard-scroll";

  const layoutClass = [
    "erp-layout",
    ordersActive ? "show-orders" : "",
    reportsActive ? "show-reports" : "",
    stage === "dashboard-scroll" ? "show-bottom" : "",
    logoutActive ? "show-logout" : "",
  ]
    .filter(Boolean)
    .join(" ");

  const cursorClass = [
    "erp-demo-cursor",
    `cursor-${stage}`,
  ]
    .filter(Boolean)
    .join(" ");

  const revenueMonths = [
    { month: "Jan", height: 45 },
    { month: "Feb", height: 65 },
    { month: "Mar", height: 55 },
    { month: "Apr", height: 82 },
    { month: "May", height: 74 },
    { month: "Jun", height: 100 },
  ];

  return (
    <div className={`erp-preview ${stage}`}>
      <div className="erp-topbar">
        <div className="erp-brand">
          <span>XP</span>
          <strong>ERP</strong>
        </div>

        <div
          className={`erp-search ${
            stage === "customer-search" ? "active" : ""
          }`}
        >
          <i className="bi bi-search"></i>

          <span className="erp-search-placeholder">
            Search customers, orders, invoices...
          </span>

          <span className="erp-typed-text">
            Samuel Takobi
          </span>

          <span className="erp-typing-caret"></span>
        </div>

        <button
          className="erp-notification"
          type="button"
          aria-label="Notifications"
        >
          <i className="bi bi-bell"></i>
          <span></span>
        </button>
      </div>

      <div className="erp-scroll-window">
        <div className={layoutClass}>
          <aside className="erp-sidebar">
            <div className="erp-sidebar-top">
              <div className="erp-sidebar-menu">
                <button
                  className={`erp-menu-item ${
                    dashboardActive ? "active" : ""
                  }`}
                  type="button"
                >
                  <i className="bi bi-grid"></i>
                  <span>Dashboard</span>
                </button>

                <button
                  className={`erp-menu-item ${
                    customerActive ? "active" : ""
                  }`}
                  type="button"
                >
                  <i className="bi bi-people"></i>
                  <span>Customers</span>
                </button>

                <button
                  className={`erp-menu-item ${
                    ordersActive ? "active" : ""
                  }`}
                  type="button"
                >
                  <i className="bi bi-bag"></i>
                  <span>Orders</span>
                </button>

                <button
                  className="erp-menu-item"
                  type="button"
                >
                  <i className="bi bi-box-seam"></i>
                  <span>Inventory</span>
                </button>

                <button
                  className="erp-menu-item"
                  type="button"
                >
                  <i className="bi bi-receipt"></i>
                  <span>Invoices</span>
                </button>

                <button
                  className={`erp-menu-item ${
                    reportsActive ? "active" : ""
                  }`}
                  type="button"
                >
                  <i className="bi bi-bar-chart"></i>
                  <span>Reports</span>
                </button>

                <button
                  className="erp-menu-item"
                  type="button"
                >
                  <i className="bi bi-gear"></i>
                  <span>Settings</span>
                </button>
              </div>
            </div>

            <div className="erp-sidebar-footer">
              <button
                type="button"
                className={`erp-menu-item erp-logout-btn ${
                  logoutActive ? "active" : ""
                }`}
                onClick={onLogout}
              >
                <i className="bi bi-box-arrow-left"></i>
                <span>Logout</span>
              </button>
            </div>
          </aside>

          <main className="erp-main">
            <div className="erp-heading">
              <div>
                <span>Monday, 20 July</span>

                <h3>Welcome back, Admin 👋</h3>

                <p>
                  Here is what is happening with your
                  business today.
                </p>
              </div>

              <button
                className="erp-export-btn"
                type="button"
              >
                <i className="bi bi-download"></i>
                Export Report
              </button>
            </div>

            <div className="erp-stats">
              <article className="erp-stat-card">
                <div className="erp-stat-top">
                  <span className="erp-stat-icon">
                    <i className="bi bi-currency-euro"></i>
                  </span>

                  <span className="erp-growth">
                    <i className="bi bi-arrow-up"></i>
                    12.5%
                  </span>
                </div>

                <p>Total Revenue</p>
                <strong>€24,780</strong>
                <small>Compared with last month</small>
              </article>

              <article className="erp-stat-card">
                <div className="erp-stat-top">
                  <span className="erp-stat-icon">
                    <i className="bi bi-cart-check"></i>
                  </span>

                  <span className="erp-growth">
                    <i className="bi bi-arrow-up"></i>
                    8.2%
                  </span>
                </div>

                <p>Total Orders</p>
                <strong>152</strong>
                <small>18 new orders this week</small>
              </article>



              <article className="erp-stat-card">
                <div className="erp-stat-top">
                  <span className="erp-stat-icon">
                    <i className="bi bi-file-earmark-text"></i>
                  </span>

                  <span className="erp-growth negative">
                    <i className="bi bi-arrow-down"></i>
                    2.4%
                  </span>
                </div>

                <p>Outstanding</p>
                <strong>€7,540</strong>
                <small>12 unpaid invoices</small>
              </article>

              <article className="erp-stat-card">
                <div className="erp-stat-top">
                  <span className="erp-stat-icon">
                    <i className="bi bi-person-plus"></i>
                  </span>

                  <span className="erp-growth">
                    <i className="bi bi-arrow-up"></i>
                    6.7%
                  </span>
                </div>

                <p>Customers</p>
                <strong>326</strong>
                <small>21 new this month</small>
              </article>
            </div>

            <div className="erp-bottom-grid">

              <div className="erp-chart-card">

                <div className="card-title">
                  <h4>Revenue Overview</h4>
                  <span>Last 6 Months</span>
                </div>

                <div className="chart-bars">

                  {revenueMonths.map((item) => (

                    <div
                      className="bar"
                      key={item.month}
                    >
                      <span
                        style={{
                          height: `${item.height}%`,
                        }}
                      />

                      <small>
                        {item.month}
                      </small>

                    </div>

                  ))}

                </div>

              </div>

              <div className="erp-orders-card">

                <div className="card-title">
                  <h4>Recent Orders</h4>
                  <span>Today</span>
                </div>

                <table className="orders-table">

                  <tbody>

                    <tr>
                      <td>INV-1001</td>
                      <td>GreenTech</td>
                      <td>
                        <span className="status paid">
                          Paid
                        </span>
                      </td>
                    </tr>

                    <tr>
                      <td>INV-1002</td>
                      <td>Nova Ltd</td>
                      <td>
                        <span className="status pending">
                          Pending
                        </span>
                      </td>
                    </tr>

                    <tr>
                      <td>INV-1003</td>
                      <td>Apex Group</td>
                      <td>
                        <span className="status processing">
                          Processing
                        </span>
                      </td>
                    </tr>

                    {/* Removed one row so the dashboard fits
                        without needing excessive scrolling */}

                    <tr>
                      <td>INV-1004</td>
                      <td>XP Retail</td>
                      <td>
                        <span className="status paid">
                          Paid
                        </span>
                      </td>
                    </tr>

                  </tbody>

                </table>

              </div>

            </div>

            

          </main>
        </div>
      </div>

      <div
        className={`erp-customer-result ${
          stage === "customer-result"
            ? "visible"
            : ""
        }`}
      >
        <div className="erp-result-heading">

          <div className="erp-result-avatar">
            ST
          </div>

          <div>
            <small>
              Customer found
            </small>

            <h4>
              Samuel Takobi
            </h4>
          </div>

          <span className="erp-result-check">
            <i className="bi bi-check-lg"></i>
          </span>

        </div>

        <div className="erp-result-details">

          <div>
            <small>
              Customer ID
            </small>

            <strong>
              CU-0326
            </strong>
          </div>

          <div>
            <small>
              Account Status
            </small>

            <strong>
              Active
            </strong>
          </div>

          <div>
            <small>
              Outstanding
            </small>

            <strong>
              €0.00
            </strong>
          </div>

          <div>
            <small>
              Orders
            </small>

            <strong>
              24
            </strong>
          </div>

        </div>

        <div className="erp-debt-message">

          <i className="bi bi-shield-check"></i>

          <div>

            <strong>
              No Outstanding Debt
            </strong>

            <small>
              This customer's account is fully settled.
            </small>

          </div>

        </div>

        <button type="button">
          Open Customer Profile
        </button>

      </div>

      <div className={cursorClass}>
        <i className="bi bi-cursor-fill"></i>
      </div>

    </div>
  );
}

export default DashboardPreview;