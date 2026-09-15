import { useEffect, useState } from "react";
import "./FashionERPPreview.css";

const STEP_TIME = 1800;

const steps = [
  "dashboard",
  "customer",
  "customer-saved",
  "measurements",
  "measurements-saved",
  "order",
  "order-created",
  "payment",
  "receipt",
  "production",
  "cutting",
  "sewing",
  "fitting",
  "completed",
  "notification",
  "final-dashboard",
];

function DesktopSidebar({ step }) {
  const customerActive = ["customer", "customer-saved"].includes(step);

  const measurementActive = [
    "measurements",
    "measurements-saved",
  ].includes(step);

  const orderActive = [
    "order",
    "order-created",
    "payment",
    "receipt",
  ].includes(step);

  const productionActive = [
    "production",
    "cutting",
    "sewing",
    "fitting",
    "completed",
    "notification",
  ].includes(step);

  return (
    <aside className="ferp-desktop-sidebar">
      <div className="ferp-desktop-brand">
        <div>
          <i className="bi bi-scissors"></i>
        </div>

        <strong>StyleHub</strong>
      </div>

      <div
        className={`ferp-desktop-menu ${
          step === "dashboard" || step === "final-dashboard"
            ? "active"
            : ""
        }`}
      >
        <i className="bi bi-grid"></i>
        <span>Dashboard</span>
      </div>

      <div
        className={`ferp-desktop-menu ${
          customerActive ? "active" : ""
        }`}
      >
        <i className="bi bi-people"></i>
        <span>Customers</span>
      </div>

      <div
        className={`ferp-desktop-menu ${
          measurementActive ? "active" : ""
        }`}
      >
        <i className="bi bi-rulers"></i>
        <span>Measurements</span>
      </div>

      <div
        className={`ferp-desktop-menu ${
          orderActive ? "active" : ""
        }`}
      >
        <i className="bi bi-bag"></i>
        <span>Orders</span>
      </div>

      <div
        className={`ferp-desktop-menu ${
          productionActive ? "active" : ""
        }`}
      >
        <i className="bi bi-scissors"></i>
        <span>Production</span>
      </div>

      <div className="ferp-desktop-menu">
        <i className="bi bi-box-seam"></i>
        <span>Inventory</span>
      </div>

      <div className="ferp-desktop-menu">
        <i className="bi bi-person-workspace"></i>
        <span>Team</span>
      </div>

      <div className="ferp-desktop-menu">
        <i className="bi bi-file-earmark-bar-graph"></i>
        <span>Reports</span>
      </div>
    </aside>
  );
}

function DesktopTopbar({ title }) {
  return (
    <div className="ferp-desktop-topbar">
      <strong>{title}</strong>

      <div>
        <div className="ferp-desktop-search">
          <i className="bi bi-search"></i>
          <span>Search</span>
        </div>

        <i className="bi bi-bell"></i>

        <div className="ferp-desktop-avatar">AM</div>
      </div>
    </div>
  );
}

function DesktopDashboard({ finalDashboard }) {
  return (
    <div className="ferp-desktop-screen">
      <DesktopTopbar title="Dashboard" />

      <div className="ferp-desktop-content">
        <div className="ferp-desktop-welcome">
          <div>
            <span>Good morning, Alex</span>
            <h3>Here&apos;s what&apos;s happening today.</h3>
          </div>

          <button type="button">
            <i className="bi bi-plus-lg"></i>
            New Order
          </button>
        </div>

        <div className="ferp-desktop-stats">
          <div>
            <span>Orders Today</span>
            <strong>{finalDashboard ? "35" : "34"}</strong>
            <small>+8.2%</small>
          </div>

          <div>
            <span>In Production</span>
            <strong>{finalDashboard ? "15" : "14"}</strong>
            <small>Active jobs</small>
          </div>

          <div>
            <span>Customers</span>
            <strong>{finalDashboard ? "257" : "256"}</strong>
            <small>Active customers</small>
          </div>

          <div>
            <span>Today&apos;s Sales</span>
            <strong>{finalDashboard ? "€1,570" : "€1,250"}</strong>
            <small>+12.4%</small>
          </div>
        </div>

        <div className="ferp-desktop-dashboard-grid">
          <div className="ferp-desktop-panel">
            <div className="ferp-desktop-panel-heading">
              <strong>Recent Orders</strong>
              <span>View all</span>
            </div>

            {finalDashboard && (
              <div className="ferp-desktop-order ferp-new-row">
                <div>
                  <strong>#SH-1048</strong>
                  <span>Sarah Martins</span>
                </div>

                <span>Evening Dress</span>
                <strong>€320</strong>
                <small className="ferp-blue-status">In Production</small>
              </div>
            )}

            <div className="ferp-desktop-order">
              <div>
                <strong>#SH-1047</strong>
                <span>Emma Wilson</span>
              </div>

              <span>Wedding Dress</span>
              <strong>€540</strong>
              <small className="ferp-green-status">Completed</small>
            </div>

            <div className="ferp-desktop-order">
              <div>
                <strong>#SH-1046</strong>
                <span>Sofia Costa</span>
              </div>

              <span>Two Piece</span>
              <strong>€280</strong>
              <small className="ferp-orange-status">Sewing</small>
            </div>

            <div className="ferp-desktop-order">
              <div>
                <strong>#SH-1045</strong>
                <span>Maria Silva</span>
              </div>

              <span>Evening Gown</span>
              <strong>€410</strong>
              <small className="ferp-purple-status">Fitting</small>
            </div>
          </div>

          <div className="ferp-desktop-panel ferp-desktop-production">
            <div className="ferp-desktop-panel-heading">
              <strong>Production</strong>
              <span>Today</span>
            </div>

            <div>
              <span>Cutting</span>
              <strong>{finalDashboard ? "7" : "6"}</strong>
            </div>

            <div>
              <span>Sewing</span>
              <strong>5</strong>
            </div>

            <div>
              <span>Fitting</span>
              <strong>3</strong>
            </div>

            <div>
              <span>Ready</span>
              <strong>8</strong>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function DesktopCustomer({ saved }) {
  return (
    <div className="ferp-desktop-screen">
      <DesktopTopbar title="Customers" />

      <div className="ferp-desktop-content">
        <div className="ferp-desktop-title">
          <div>
            <span>Customers</span>
            <h3>Add New Customer</h3>
          </div>

          <small>CU-0284</small>
        </div>

        <div className="ferp-desktop-form">
          <div className="ferp-desktop-form-grid">
            <label>
              <span>Full Name</span>
              <div className="ferp-desktop-input">Sarah Martins</div>
            </label>

            <label>
              <span>Phone Number</span>
              <div className="ferp-desktop-input">
                +351 912 345 678
              </div>
            </label>

            <label>
              <span>Email Address</span>
              <div className="ferp-desktop-input">
                sarah@email.com
              </div>
            </label>

            <label>
              <span>Customer Type</span>
              <div className="ferp-desktop-input">Individual</div>
            </label>
          </div>

          <div className="ferp-desktop-actions">
            <button type="button" className="secondary">
              Cancel
            </button>

            <button type="button" className="primary">
              Save Customer
            </button>
          </div>
        </div>

        {saved && (
          <div className="ferp-desktop-toast">
            <i className="bi bi-check-circle-fill"></i>

            <div>
              <strong>Customer created</strong>
              <span>Sarah Martins · CU-0284</span>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

function DesktopMeasurements({ saved }) {
  return (
    <div className="ferp-desktop-screen">
      <DesktopTopbar title="Measurements" />

      <div className="ferp-desktop-content">
        <div className="ferp-desktop-customer">
          <div>SM</div>

          <span>
            <strong>Sarah Martins</strong>
            <small>CU-0284</small>
          </span>
        </div>

        <div className="ferp-desktop-title">
          <div>
            <span>Customer Measurements</span>
            <h3>New Measurement Profile</h3>
          </div>
        </div>

        <div className="ferp-desktop-form">
          <div className="ferp-desktop-measurements">
            <label>
              <span>Bust</span>
              <div>92 cm</div>
            </label>

            <label>
              <span>Waist</span>
              <div>76 cm</div>
            </label>

            <label>
              <span>Hip</span>
              <div>101 cm</div>
            </label>

            <label>
              <span>Shoulder</span>
              <div>40 cm</div>
            </label>

            <label>
              <span>Sleeve</span>
              <div>59 cm</div>
            </label>

            <label>
              <span>Dress Length</span>
              <div>142 cm</div>
            </label>
          </div>

          <div className="ferp-desktop-actions">
            <button type="button" className="primary">
              Save Measurements
            </button>
          </div>
        </div>

        {saved && (
          <div className="ferp-desktop-toast">
            <i className="bi bi-check-circle-fill"></i>

            <div>
              <strong>Measurements saved</strong>
              <span>Sarah Martins</span>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

function DesktopOrder({ created }) {
  return (
    <div className="ferp-desktop-screen">
      <DesktopTopbar title="Orders" />

      <div className="ferp-desktop-content">
        <div className="ferp-desktop-title">
          <div>
            <span>Orders</span>
            <h3>Create New Order</h3>
          </div>

          <small>#SH-1048</small>
        </div>

        <div className="ferp-desktop-form">
          <div className="ferp-desktop-form-grid">
            <label>
              <span>Customer</span>
              <div className="ferp-desktop-input">Sarah Martins</div>
            </label>

            <label>
              <span>Garment</span>
              <div className="ferp-desktop-input">Evening Dress</div>
            </label>

            <label>
              <span>Fabric</span>
              <div className="ferp-desktop-input">
                Customer Fabric
              </div>
            </label>

            <label>
              <span>Delivery</span>
              <div className="ferp-desktop-input">28 Aug 2026</div>
            </label>
          </div>

          <div className="ferp-desktop-money">
            <div>
              <span>Price</span>
              <strong>€320.00</strong>
            </div>

            <div>
              <span>Deposit</span>
              <strong>€150.00</strong>
            </div>

            <div>
              <span>Balance</span>
              <strong>€170.00</strong>
            </div>
          </div>

          <div className="ferp-desktop-actions">
            <button type="button" className="primary">
              Create Order
            </button>
          </div>
        </div>

        {created && (
          <div className="ferp-desktop-toast">
            <i className="bi bi-check-circle-fill"></i>

            <div>
              <strong>Order created</strong>
              <span>#SH-1048 · €320.00</span>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

function DesktopPayment() {
  return (
    <div className="ferp-desktop-screen">
      <DesktopTopbar title="Payments" />

      <div className="ferp-desktop-content">
        <div className="ferp-desktop-payment-grid">
          <div className="ferp-desktop-payment-card">
            <span>PAYMENT</span>

            <h3>Record Customer Payment</h3>

            <div className="ferp-desktop-customer">
              <div>SM</div>

              <span>
                <strong>Sarah Martins</strong>
                <small>#SH-1048</small>
              </span>
            </div>

            <div className="ferp-desktop-payment-amount">
              <span>Deposit Amount</span>
              <strong>€150.00</strong>
            </div>

            <div className="ferp-desktop-payment-method">
              <span>Payment Method</span>

              <div>
                <i className="bi bi-credit-card"></i>
                Card Payment
              </div>
            </div>

            <button type="button">Confirm Payment</button>
          </div>

          <div className="ferp-desktop-summary">
            <span>ORDER SUMMARY</span>

            <div>
              <span>Total</span>
              <strong>€320.00</strong>
            </div>

            <div>
              <span>Deposit</span>
              <strong>€150.00</strong>
            </div>

            <div>
              <span>Balance</span>
              <strong>€170.00</strong>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function DesktopReceipt() {
  return (
    <div className="ferp-desktop-screen">
      <DesktopTopbar title="Receipt" />

      <div className="ferp-desktop-receipt-area">
        <div className="ferp-desktop-receipt">
          <div className="ferp-receipt-logo">
            <i className="bi bi-scissors"></i>
            <strong>StyleHub</strong>
          </div>

          <span>ORDER RECEIPT</span>

          <div>
            <span>#SH-1048</span>
            <strong>Sarah Martins</strong>
          </div>

          <div>
            <span>Evening Dress</span>
            <strong>€320.00</strong>
          </div>

          <div>
            <span>Deposit Paid</span>
            <strong>€150.00</strong>
          </div>

          <div>
            <span>Balance</span>
            <strong>€170.00</strong>
          </div>

          <small>
            <i className="bi bi-check-circle-fill"></i>
            Payment recorded successfully
          </small>
        </div>

        <div className="ferp-desktop-receipt-buttons">
          <button type="button">
            <i className="bi bi-printer"></i>
            Print
          </button>

          <button type="button">
            <i className="bi bi-envelope"></i>
            Email
          </button>

          <button type="button">
            <i className="bi bi-whatsapp"></i>
            WhatsApp
          </button>
        </div>
      </div>
    </div>
  );
}

function ProductionBox({ title, done, active }) {
  return (
    <div
      className={`ferp-desktop-production-box ${
        done ? "done" : ""
      } ${active ? "active" : ""}`}
    >
      <div>
        {done ? (
          <i className="bi bi-check-lg"></i>
        ) : active ? (
          <i className="bi bi-arrow-right"></i>
        ) : (
          <i className="bi bi-circle"></i>
        )}
      </div>

      <strong>{title}</strong>

      <span>
        {done ? "Completed" : active ? "In Progress" : "Pending"}
      </span>
    </div>
  );
}

function DesktopProduction({ stage }) {
  const cutting = [
    "cutting",
    "sewing",
    "fitting",
    "completed",
    "notification",
  ].includes(stage);

  const sewing = [
    "sewing",
    "fitting",
    "completed",
    "notification",
  ].includes(stage);

  const fitting = [
    "fitting",
    "completed",
    "notification",
  ].includes(stage);

  const complete = ["completed", "notification"].includes(stage);

  return (
    <div className="ferp-desktop-screen">
      <DesktopTopbar title="Production" />

      <div className="ferp-desktop-content">
        <div className="ferp-desktop-production-order">
          <div>
            <span>#SH-1048</span>
            <h3>Sarah Martins</h3>
            <p>Evening Dress</p>
          </div>

          <small>In Production</small>
        </div>

        <div className="ferp-desktop-production-card">
          <div className="ferp-desktop-production-title">
            <div>
              <span>Production Workflow</span>
              <h3>Order Progress</h3>
            </div>

            <strong>
              {complete
                ? "100%"
                : fitting
                  ? "80%"
                  : sewing
                    ? "60%"
                    : cutting
                      ? "40%"
                      : "20%"}
            </strong>
          </div>

          <div className="ferp-desktop-progress">
            <div
              style={{
                width: complete
                  ? "100%"
                  : fitting
                    ? "80%"
                    : sewing
                      ? "60%"
                      : cutting
                        ? "40%"
                        : "20%",
              }}
            ></div>
          </div>

          <div className="ferp-desktop-production-steps">
            <ProductionBox title="Measurements" done />

            <ProductionBox
              title="Cutting"
              done={cutting}
              active={stage === "production"}
            />

            <ProductionBox
              title="Sewing"
              done={sewing}
              active={stage === "cutting"}
            />

            <ProductionBox
              title="Fitting"
              done={fitting}
              active={stage === "sewing"}
            />

            <ProductionBox
              title="Completed"
              done={complete}
              active={stage === "fitting"}
            />
          </div>

          {complete && (
            <div className="ferp-desktop-complete">
              <i className="bi bi-check-circle-fill"></i>
              Order completed and ready for collection.
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

function DesktopNotification() {
  return (
    <div className="ferp-desktop-screen">
      <DesktopTopbar title="Customer Update" />

      <div className="ferp-desktop-notification-area">
        <div className="ferp-desktop-notification">
          <div>
            <i className="bi bi-chat-dots"></i>
          </div>

          <span>CUSTOMER NOTIFICATION</span>

          <h3>Sarah Martins</h3>

          <p>
            Order #SH-1048 is complete and ready for collection.
          </p>

          <div className="ferp-desktop-message">
            <strong>StyleHub</strong>

            <p>
              Hi Sarah, your Evening Dress is ready for collection.
              Your remaining balance is €170.00.
            </p>
          </div>

          <button type="button">
            <i className="bi bi-whatsapp"></i>
            Send WhatsApp Update
          </button>
        </div>
      </div>
    </div>
  );
}

function DesktopCursor({ step }) {
  return (
    <div className={`ferp-desktop-cursor cursor-${step}`}>
      <i className="bi bi-cursor-fill"></i>
    </div>
  );
}

function DesktopFashionDemo({ step }) {
  let content = null;

  if (step === "dashboard") {
    content = <DesktopDashboard finalDashboard={false} />;
  }

  if (step === "customer") {
    content = <DesktopCustomer saved={false} />;
  }

  if (step === "customer-saved") {
    content = <DesktopCustomer saved />;
  }

  if (step === "measurements") {
    content = <DesktopMeasurements saved={false} />;
  }

  if (step === "measurements-saved") {
    content = <DesktopMeasurements saved />;
  }

  if (step === "order") {
    content = <DesktopOrder created={false} />;
  }

  if (step === "order-created") {
    content = <DesktopOrder created />;
  }

  if (step === "payment") {
    content = <DesktopPayment />;
  }

  if (step === "receipt") {
    content = <DesktopReceipt />;
  }

  if (
    step === "production" ||
    step === "cutting" ||
    step === "sewing" ||
    step === "fitting" ||
    step === "completed"
  ) {
    content = <DesktopProduction stage={step} />;
  }

  if (step === "notification") {
    content = <DesktopNotification />;
  }

  if (step === "final-dashboard") {
    content = <DesktopDashboard finalDashboard />;
  }

  return (
    <div className="ferp-desktop-demo">
      <DesktopSidebar step={step} />

      <div className="ferp-desktop-main">
        <div key={step} className="ferp-desktop-transition">
          {content}
        </div>
      </div>

      <DesktopCursor step={step} />
    </div>
  );
}

function MobileHeader({ title }) {
  return (
    <div className="ferp-mobile-header">
      <div>
        <i className="bi bi-scissors"></i>
        <strong>StyleHub</strong>
      </div>

      <span>{title}</span>

      <div className="ferp-mobile-user">
        <i className="bi bi-bell"></i>
        <small>AM</small>
      </div>
    </div>
  );
}

function MobileDashboard({ finalDashboard }) {
  return (
    <div className="ferp-mobile-screen">
      <MobileHeader title="Dashboard" />

      <div className="ferp-mobile-body">
        <h3>Dashboard</h3>

        <div className="ferp-mobile-stats">
          <div>
            <span>Orders</span>
            <strong>{finalDashboard ? "35" : "34"}</strong>
          </div>

          <div>
            <span>Production</span>
            <strong>{finalDashboard ? "15" : "14"}</strong>
          </div>

          <div>
            <span>Customers</span>
            <strong>{finalDashboard ? "257" : "256"}</strong>
          </div>

          <div>
            <span>Sales</span>
            <strong>{finalDashboard ? "€1,570" : "€1,250"}</strong>
          </div>
        </div>

        <div className="ferp-mobile-card">
          <div className="ferp-mobile-card-heading">
            <strong>Recent Orders</strong>
            <span>View all</span>
          </div>

          {finalDashboard && (
            <div className="ferp-mobile-order ferp-mobile-new-order">
              <div>
                <strong>#SH-1048</strong>
                <span>Sarah Martins</span>
              </div>

              <strong>€320</strong>
              <small>Production</small>
            </div>
          )}

          <div className="ferp-mobile-order">
            <div>
              <strong>#SH-1047</strong>
              <span>Emma Wilson</span>
            </div>

            <strong>€540</strong>
            <small>Completed</small>
          </div>

          <div className="ferp-mobile-order">
            <div>
              <strong>#SH-1046</strong>
              <span>Sofia Costa</span>
            </div>

            <strong>€280</strong>
            <small>Sewing</small>
          </div>
        </div>
      </div>

      <MobileNavigation active="dashboard" />
    </div>
  );
}

function MobileCustomer({ saved }) {
  return (
    <div className="ferp-mobile-screen">
      <MobileHeader title="Customer" />

      <div className="ferp-mobile-body">
        <div className="ferp-mobile-title">
          <span>NEW CUSTOMER</span>
          <h3>Add Customer</h3>
        </div>

        <div className="ferp-mobile-form">
          <label>
            <span>Full Name</span>
            <div>Sarah Martins</div>
          </label>

          <label>
            <span>Phone</span>
            <div>+351 912 345 678</div>
          </label>

          <label>
            <span>Email</span>
            <div>sarah@email.com</div>
          </label>

          <button type="button">Save Customer</button>
        </div>

        {saved && (
          <div className="ferp-mobile-success">
            <i className="bi bi-check-circle-fill"></i>

            <span>
              <strong>Customer created</strong>
              CU-0284
            </span>
          </div>
        )}
      </div>

      <MobileNavigation active="customers" />
    </div>
  );
}

function MobileMeasurements({ saved }) {
  return (
    <div className="ferp-mobile-screen">
      <MobileHeader title="Measurements" />

      <div className="ferp-mobile-body">
        <div className="ferp-mobile-customer">
          <div>SM</div>

          <span>
            <strong>Sarah Martins</strong>
            <small>CU-0284</small>
          </span>
        </div>

        <div className="ferp-mobile-title">
          <span>MEASUREMENTS</span>
          <h3>New Profile</h3>
        </div>

        <div className="ferp-mobile-measurements">
          <div>
            <span>Bust</span>
            <strong>92 cm</strong>
          </div>

          <div>
            <span>Waist</span>
            <strong>76 cm</strong>
          </div>

          <div>
            <span>Hip</span>
            <strong>101 cm</strong>
          </div>

          <div>
            <span>Shoulder</span>
            <strong>40 cm</strong>
          </div>

          <div>
            <span>Sleeve</span>
            <strong>59 cm</strong>
          </div>

          <div>
            <span>Length</span>
            <strong>142 cm</strong>
          </div>
        </div>

        <button className="ferp-mobile-primary" type="button">
          Save Measurements
        </button>

        {saved && (
          <div className="ferp-mobile-success">
            <i className="bi bi-check-circle-fill"></i>

            <span>
              <strong>Measurements saved</strong>
              Sarah Martins
            </span>
          </div>
        )}
      </div>

      <MobileNavigation active="measurements" />
    </div>
  );
}

function MobileOrder({ created }) {
  return (
    <div className="ferp-mobile-screen">
      <MobileHeader title="Order" />

      <div className="ferp-mobile-body">
        <div className="ferp-mobile-title">
          <span>NEW ORDER</span>
          <h3>#SH-1048</h3>
        </div>

        <div className="ferp-mobile-form">
          <label>
            <span>Customer</span>
            <div>Sarah Martins</div>
          </label>

          <label>
            <span>Garment</span>
            <div>Evening Dress</div>
          </label>

          <div className="ferp-mobile-order-money">
            <span>
              Price
              <strong>€320</strong>
            </span>

            <span>
              Deposit
              <strong>€150</strong>
            </span>

            <span>
              Balance
              <strong>€170</strong>
            </span>
          </div>

          <button type="button">Create Order</button>
        </div>

        {created && (
          <div className="ferp-mobile-success">
            <i className="bi bi-check-circle-fill"></i>

            <span>
              <strong>Order created</strong>
              #SH-1048
            </span>
          </div>
        )}
      </div>

      <MobileNavigation active="orders" />
    </div>
  );
}

function MobilePayment() {
  return (
    <div className="ferp-mobile-screen">
      <MobileHeader title="Payment" />

      <div className="ferp-mobile-body">
        <div className="ferp-mobile-title">
          <span>PAYMENT</span>
          <h3>Record Payment</h3>
        </div>

        <div className="ferp-mobile-payment-card">
          <div className="ferp-mobile-customer">
            <div>SM</div>

            <span>
              <strong>Sarah Martins</strong>
              <small>#SH-1048</small>
            </span>
          </div>

          <div className="ferp-mobile-payment-amount">
            <span>Deposit</span>
            <strong>€150.00</strong>
          </div>

          <div className="ferp-mobile-payment-method">
            <i className="bi bi-credit-card"></i>
            Card Payment
          </div>

          <button type="button">Confirm Payment</button>
        </div>
      </div>

      <MobileNavigation active="orders" />
    </div>
  );
}

function MobileReceipt() {
  return (
    <div className="ferp-mobile-screen">
      <MobileHeader title="Receipt" />

      <div className="ferp-mobile-body ferp-mobile-receipt-body">
        <div className="ferp-mobile-receipt">
          <div>
            <i className="bi bi-scissors"></i>
            <strong>StyleHub</strong>
          </div>

          <span>ORDER RECEIPT</span>

          <h3>#SH-1048</h3>
          <p>Sarah Martins</p>

          <div>
            <span>Evening Dress</span>
            <strong>€320</strong>
          </div>

          <div>
            <span>Deposit</span>
            <strong>€150</strong>
          </div>

          <div>
            <span>Balance</span>
            <strong>€170</strong>
          </div>

          <small>
            <i className="bi bi-check-circle-fill"></i>
            Payment recorded
          </small>
        </div>
      </div>

      <MobileNavigation active="orders" />
    </div>
  );
}

function MobileProductionStep({ title, done, active }) {
  return (
    <div
      className={`ferp-mobile-production-step ${
        done ? "done" : ""
      } ${active ? "active" : ""}`}
    >
      <div>
        {done ? (
          <i className="bi bi-check-lg"></i>
        ) : active ? (
          <i className="bi bi-arrow-right"></i>
        ) : (
          <i className="bi bi-circle"></i>
        )}
      </div>

      <span>
        <strong>{title}</strong>

        <small>
          {done ? "Completed" : active ? "In Progress" : "Pending"}
        </small>
      </span>
    </div>
  );
}

function MobileProduction({ stage }) {
  const cutting = [
    "cutting",
    "sewing",
    "fitting",
    "completed",
    "notification",
  ].includes(stage);

  const sewing = [
    "sewing",
    "fitting",
    "completed",
    "notification",
  ].includes(stage);

  const fitting = [
    "fitting",
    "completed",
    "notification",
  ].includes(stage);

  const complete = ["completed", "notification"].includes(stage);

  return (
    <div className="ferp-mobile-screen">
      <MobileHeader title="Production" />

      <div className="ferp-mobile-body">
        <div className="ferp-mobile-customer">
          <div>SM</div>

          <span>
            <strong>Sarah Martins</strong>
            <small>#SH-1048 · Evening Dress</small>
          </span>
        </div>

        <div className="ferp-mobile-title">
          <span>PRODUCTION</span>
          <h3>Order Progress</h3>
        </div>

        <div className="ferp-mobile-production-list">
          <MobileProductionStep title="Measurements" done />

          <MobileProductionStep
            title="Cutting"
            done={cutting}
            active={stage === "production"}
          />

          <MobileProductionStep
            title="Sewing"
            done={sewing}
            active={stage === "cutting"}
          />

          <MobileProductionStep
            title="Fitting"
            done={fitting}
            active={stage === "sewing"}
          />

          <MobileProductionStep
            title="Completed"
            done={complete}
            active={stage === "fitting"}
          />
        </div>

        {complete && (
          <div className="ferp-mobile-success">
            <i className="bi bi-check-circle-fill"></i>

            <span>
              <strong>Order completed</strong>
              Ready for collection
            </span>
          </div>
        )}
      </div>

      <MobileNavigation active="production" />
    </div>
  );
}

function MobileNotification() {
  return (
    <div className="ferp-mobile-screen">
      <MobileHeader title="Customer Update" />

      <div className="ferp-mobile-body">
        <div className="ferp-mobile-notification">
          <div>
            <i className="bi bi-chat-dots"></i>
          </div>

          <span>CUSTOMER UPDATE</span>

          <h3>Sarah Martins</h3>

          <p>Your Evening Dress is ready for collection.</p>

          <div className="ferp-mobile-message">
            Hi Sarah, your order #SH-1048 is ready. Balance due:
            €170.00.
          </div>

          <button type="button">
            <i className="bi bi-whatsapp"></i>
            Send WhatsApp
          </button>
        </div>
      </div>

      <MobileNavigation active="production" />
    </div>
  );
}

function MobileNavigation({ active }) {
  return (
    <div className="ferp-mobile-navigation">
      <span className={active === "dashboard" ? "active" : ""}>
        <i className="bi bi-grid"></i>
        Dashboard
      </span>

      <span className={active === "customers" ? "active" : ""}>
        <i className="bi bi-people"></i>
        Customers
      </span>

      <span className={active === "measurements" ? "active" : ""}>
        <i className="bi bi-rulers"></i>
        Measure
      </span>

      <span className={active === "orders" ? "active" : ""}>
        <i className="bi bi-bag"></i>
        Orders
      </span>

      <span className={active === "production" ? "active" : ""}>
        <i className="bi bi-scissors"></i>
        Production
      </span>
    </div>
  );
}

function MobileFashionDemo({ step }) {
  let content = null;

  if (step === "dashboard") {
    content = <MobileDashboard finalDashboard={false} />;
  }

  if (step === "customer") {
    content = <MobileCustomer saved={false} />;
  }

  if (step === "customer-saved") {
    content = <MobileCustomer saved />;
  }

  if (step === "measurements") {
    content = <MobileMeasurements saved={false} />;
  }

  if (step === "measurements-saved") {
    content = <MobileMeasurements saved />;
  }

  if (step === "order") {
    content = <MobileOrder created={false} />;
  }

  if (step === "order-created") {
    content = <MobileOrder created />;
  }

  if (step === "payment") {
    content = <MobilePayment />;
  }

  if (step === "receipt") {
    content = <MobileReceipt />;
  }

  if (
    step === "production" ||
    step === "cutting" ||
    step === "sewing" ||
    step === "fitting" ||
    step === "completed"
  ) {
    content = <MobileProduction stage={step} />;
  }

  if (step === "notification") {
    content = <MobileNotification />;
  }

  if (step === "final-dashboard") {
    content = <MobileDashboard finalDashboard />;
  }

  return (
    <div className="ferp-mobile-demo">
      <div key={step} className="ferp-mobile-transition">
        {content}
      </div>
    </div>
  );
}

function FashionERPPreview() {
  const [currentStep, setCurrentStep] = useState(0);

  const step = steps[currentStep];

  useEffect(() => {
    const timer = window.setTimeout(() => {
      setCurrentStep((current) => {
        if (current >= steps.length - 1) {
          return 0;
        }

        return current + 1;
      });
    }, STEP_TIME);

    return () => {
      window.clearTimeout(timer);
    };
  }, [currentStep]);

  return (
    <div className="fashion-erp-preview">
      <div className="ferp-desktop-only">
        <DesktopFashionDemo step={step} />
      </div>

      <div className="ferp-mobile-only">
        <MobileFashionDemo step={step} />
      </div>
    </div>
  );
}

export default FashionERPPreview;