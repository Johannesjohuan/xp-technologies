import { useEffect, useState } from "react";
import "./Entersp.css";

const ROTATION_TIME = 12000;

const systems = [
  {
    id: "stylehub",
    name: "StyleHub",
  },
  {
    id: "spicegarden",
    name: "SpiceGarden",
  },
  {
    id: "greenmart",
    name: "GreenMart",
  },
];

function StyleHubDesktop() {
  return (
    <div className="esp-desktop-system esp-stylehub">
      <aside className="esp-sidebar">
        <div className="esp-brand">
          <i className="bi bi-person-standing-dress"></i>
          <strong>StyleHub</strong>
        </div>

        <div className="esp-nav active">
          <i className="bi bi-grid"></i>
          <span>Dashboard</span>
        </div>

        <div className="esp-nav">
          <i className="bi bi-bag"></i>
          <span>Orders</span>
        </div>

        <div className="esp-nav">
          <i className="bi bi-people"></i>
          <span>Customers</span>
        </div>

        <div className="esp-nav">
          <i className="bi bi-box"></i>
          <span>Products</span>
        </div>

        <div className="esp-nav">
          <i className="bi bi-box-seam"></i>
          <span>Inventory</span>
        </div>

        <div className="esp-nav">
          <i className="bi bi-scissors"></i>
          <span>Production</span>
        </div>

        <div className="esp-nav">
          <i className="bi bi-person-workspace"></i>
          <span>Tailors</span>
        </div>

        <div className="esp-nav">
          <i className="bi bi-rulers"></i>
          <span>Measurements</span>
        </div>

        <div className="esp-nav">
          <i className="bi bi-file-earmark-bar-graph"></i>
          <span>Reports</span>
        </div>

        <div className="esp-nav">
          <i className="bi bi-gear"></i>
          <span>Settings</span>
        </div>
      </aside>

      <div className="esp-content">
        <div className="esp-topbar">
          <h3>Dashboard</h3>

          <div className="esp-search">
            <i className="bi bi-search"></i>
            <span>Search...</span>
          </div>

          <div className="esp-profile">
            <i className="bi bi-bell"></i>

            <div className="esp-avatar">JS</div>
          </div>
        </div>

        <div className="esp-stat-grid">
          <div className="esp-stat-card">
            <span>Today&apos;s Orders</span>
            <strong>34</strong>
            <small>View all orders</small>
          </div>

          <div className="esp-stat-card">
            <span>Pending Orders</span>
            <strong>12</strong>
            <small>View all</small>
          </div>

          <div className="esp-stat-card">
            <span>Customers</span>
            <strong>256</strong>
            <small>View all</small>
          </div>

          <div className="esp-stat-card">
            <span>Today&apos;s Sales</span>
            <strong>€1,250,000</strong>
            <small>View report</small>
          </div>
        </div>

        <div className="esp-two-column">
          <div className="esp-panel">
            <div className="esp-panel-title">
              <strong>Recent Orders</strong>
              <span>View all</span>
            </div>

            <div className="esp-table-row">
              <span>ORD-1001</span>
              <span>Grace Boutique</span>
              <span>€230,000</span>
              <small className="esp-success">Completed</small>
            </div>

            <div className="esp-table-row">
              <span>ORD-1002</span>
              <span>Royal Collections</span>
              <span>€185,000</span>
              <small className="esp-warning">Processing</small>
            </div>

            <div className="esp-table-row">
              <span>ORD-1003</span>
              <span>Bella Fashion</span>
              <span>€320,000</span>
              <small className="esp-success">Completed</small>
            </div>

            <div className="esp-table-row">
              <span>ORD-1004</span>
              <span>Urban Stitches</span>
              <span>€150,000</span>
              <small className="esp-warning">Pending</small>
            </div>
          </div>

          <div className="esp-panel">
            <div className="esp-panel-title">
              <strong>Low Stock Items</strong>
              <span>View all</span>
            </div>

            <div className="esp-stock-row">
              <span>Lace Fabric</span>
              <strong>8 yds</strong>
            </div>

            <div className="esp-stock-row">
              <span>Ankara Print</span>
              <strong>12 yds</strong>
            </div>

            <div className="esp-stock-row">
              <span>Zipper (40cm)</span>
              <strong>15 pcs</strong>
            </div>

            <div className="esp-stock-row">
              <span>Thread (White)</span>
              <strong>6 pcs</strong>
            </div>
          </div>
        </div>

        <div className="esp-actions">
          <button type="button">
            <i className="bi bi-clipboard-plus"></i>
            <span>New Order</span>
          </button>

          <button type="button">
            <i className="bi bi-person-plus"></i>
            <span>Add Customer</span>
          </button>

          <button type="button">
            <i className="bi bi-box"></i>
            <span>Add Product</span>
          </button>

          <button type="button">
            <i className="bi bi-scissors"></i>
            <span>New Production</span>
          </button>

          <button type="button">
            <i className="bi bi-box-arrow-in-down"></i>
            <span>Stock Entry</span>
          </button>
        </div>
      </div>
    </div>
  );
}

function SpiceGardenDesktop() {
  return (
    <div className="esp-desktop-system esp-spicegarden">
      <aside className="esp-sidebar">
        <div className="esp-brand">
          <i className="bi bi-cup-hot"></i>
          <strong>SpiceGarden</strong>
        </div>

        <div className="esp-nav active">
          <i className="bi bi-grid"></i>
          <span>Dashboard</span>
        </div>

        <div className="esp-nav">
          <i className="bi bi-receipt"></i>
          <span>Orders</span>
        </div>

        <div className="esp-nav">
          <i className="bi bi-layout-three-columns"></i>
          <span>Tables</span>
        </div>

        <div className="esp-nav">
          <i className="bi bi-journal-text"></i>
          <span>Menu</span>
        </div>

        <div className="esp-nav">
          <i className="bi bi-fire"></i>
          <span>Kitchen</span>
        </div>

        <div className="esp-nav">
          <i className="bi bi-box-seam"></i>
          <span>Inventory</span>
        </div>

        <div className="esp-nav">
          <i className="bi bi-truck"></i>
          <span>Suppliers</span>
        </div>

        <div className="esp-nav">
          <i className="bi bi-people"></i>
          <span>Staff</span>
        </div>

        <div className="esp-nav">
          <i className="bi bi-file-earmark-bar-graph"></i>
          <span>Reports</span>
        </div>

        <div className="esp-nav">
          <i className="bi bi-gear"></i>
          <span>Settings</span>
        </div>
      </aside>

      <div className="esp-content">
        <div className="esp-topbar">
          <h3>Dashboard</h3>

          <div className="esp-search">
            <i className="bi bi-search"></i>
            <span>Search...</span>
          </div>

          <div className="esp-profile">
            <i className="bi bi-bell"></i>

            <div className="esp-avatar">MB</div>
          </div>
        </div>

        <div className="esp-stat-grid">
          <div className="esp-stat-card">
            <span>Today&apos;s Sales</span>
            <strong>€485,600</strong>
            <small>View details</small>
          </div>

          <div className="esp-stat-card">
            <span>Orders Today</span>
            <strong>126</strong>
            <small>View all orders</small>
          </div>

          <div className="esp-stat-card">
            <span>Active Tables</span>
            <strong>24 / 40</strong>
            <small>View all</small>
          </div>

          <div className="esp-stat-card">
            <span>Pending Orders</span>
            <strong>18</strong>
            <small>In Kitchen</small>
          </div>
        </div>

        <div className="esp-two-column">
          <div className="esp-panel">
            <div className="esp-panel-title">
              <strong>Order Summary</strong>
              <span>View all</span>
            </div>

            <div className="esp-table-row">
              <span>#R-00125</span>
              <span>Dine In - Table 5</span>
              <span>€18,500</span>
              <small className="esp-warning">Preparing</small>
            </div>

            <div className="esp-table-row">
              <span>#R-00126</span>
              <span>Take Away</span>
              <span>€12,000</span>
              <small className="esp-warning">Preparing</small>
            </div>

            <div className="esp-table-row">
              <span>#R-00127</span>
              <span>Dine In - Table 2</span>
              <span>€25,000</span>
              <small className="esp-success">Ready</small>
            </div>

            <div className="esp-table-row">
              <span>#R-00128</span>
              <span>Delivery</span>
              <span>€15,600</span>
              <small className="esp-danger">On the way</small>
            </div>
          </div>

          <div className="esp-panel">
            <div className="esp-panel-title">
              <strong>Kitchen Status</strong>
            </div>

            <div className="esp-kitchen-row">
              <span className="esp-dot red"></span>
              <span>New Orders</span>
              <strong>6</strong>
            </div>

            <div className="esp-kitchen-row">
              <span className="esp-dot orange"></span>
              <span>Preparing</span>
              <strong>8</strong>
            </div>

            <div className="esp-kitchen-row">
              <span className="esp-dot green"></span>
              <span>Ready</span>
              <strong>4</strong>
            </div>
          </div>
        </div>

        <div className="esp-actions">
          <button type="button">
            <i className="bi bi-receipt"></i>
            <span>New Order</span>
          </button>

          <button type="button">
            <i className="bi bi-calendar-plus"></i>
            <span>Reserve Table</span>
          </button>

          <button type="button">
            <i className="bi bi-journal-plus"></i>
            <span>Add Menu Item</span>
          </button>

          <button type="button">
            <i className="bi bi-box-arrow-in-down"></i>
            <span>Stock Entry</span>
          </button>

          <button type="button">
            <i className="bi bi-file-earmark-text"></i>
            <span>Daily Report</span>
          </button>
        </div>
      </div>
    </div>
  );
}

function GreenMartDesktop() {
  return (
    <div className="esp-desktop-system esp-greenmart">
      <aside className="esp-sidebar">
        <div className="esp-brand">
          <i className="bi bi-cart3"></i>
          <strong>GreenMart</strong>
        </div>

        <div className="esp-nav active">
          <i className="bi bi-grid"></i>
          <span>Dashboard</span>
        </div>

        <div className="esp-nav">
          <i className="bi bi-receipt-cutoff"></i>
          <span>POS</span>
        </div>

        <div className="esp-nav">
          <i className="bi bi-box"></i>
          <span>Products</span>
        </div>

        <div className="esp-nav">
          <i className="bi bi-box-seam"></i>
          <span>Inventory</span>
        </div>

        <div className="esp-nav">
          <i className="bi bi-people"></i>
          <span>Suppliers</span>
        </div>

        <div className="esp-nav">
          <i className="bi bi-cart-plus"></i>
          <span>Purchases</span>
        </div>

        <div className="esp-nav">
          <i className="bi bi-cash"></i>
          <span>Sales</span>
        </div>

        <div className="esp-nav">
          <i className="bi bi-file-earmark-bar-graph"></i>
          <span>Reports</span>
        </div>

        <div className="esp-nav">
          <i className="bi bi-gear"></i>
          <span>Settings</span>
        </div>
      </aside>

      <div className="esp-content">
        <div className="esp-topbar">
          <h3>Dashboard</h3>

          <div className="esp-search">
            <i className="bi bi-search"></i>
            <span>Search...</span>
          </div>

          <div className="esp-profile">
            <i className="bi bi-bell"></i>

            <div className="esp-avatar">AU</div>
          </div>
        </div>

        <div className="esp-stat-grid">
          <div className="esp-stat-card">
            <span>Sales Today</span>
            <strong>€1,235,750</strong>
            <small>View details</small>
          </div>

          <div className="esp-stat-card">
            <span>Transactions</span>
            <strong>482</strong>
            <small>View all</small>
          </div>

          <div className="esp-stat-card">
            <span>Total Products</span>
            <strong>3,245</strong>
            <small>View all</small>
          </div>

          <div className="esp-stat-card">
            <span>Low Stock Items</span>
            <strong className="esp-low-stock">23</strong>
            <small>View items</small>
          </div>
        </div>

        <div className="esp-two-column">
          <div className="esp-panel">
            <div className="esp-panel-title">
              <strong>Recent Transactions</strong>
              <span>View all</span>
            </div>

            <div className="esp-table-row esp-greenmart-row">
              <span>TRX-9852</span>
              <span>€25,600</span>
              <small className="esp-success">Completed</small>
            </div>

            <div className="esp-table-row esp-greenmart-row">
              <span>TRX-9851</span>
              <span>€18,950</span>
              <small className="esp-success">Completed</small>
            </div>

            <div className="esp-table-row esp-greenmart-row">
              <span>TRX-9850</span>
              <span>€42,300</span>
              <small className="esp-success">Completed</small>
            </div>

            <div className="esp-table-row esp-greenmart-row">
              <span>TRX-9849</span>
              <span>€31,200</span>
              <small className="esp-success">Completed</small>
            </div>
          </div>

          <div className="esp-panel">
            <div className="esp-panel-title">
              <strong>Low Stock Items</strong>
              <span>View all</span>
            </div>

            <div className="esp-stock-row">
              <span>Indomie (70g)</span>
              <strong className="esp-danger">10 left</strong>
            </div>

            <div className="esp-stock-row">
              <span>Peak Milk (400g)</span>
              <strong className="esp-danger">8 left</strong>
            </div>

            <div className="esp-stock-row">
              <span>Coca Cola (50cl)</span>
              <strong className="esp-danger">6 left</strong>
            </div>

            <div className="esp-stock-row">
              <span>Sunlight Soap</span>
              <strong className="esp-danger">7 left</strong>
            </div>
          </div>
        </div>

        <div className="esp-actions">
          <button type="button">
            <i className="bi bi-cart-check"></i>
            <span>New Sale</span>
          </button>

          <button type="button">
            <i className="bi bi-box"></i>
            <span>Add Product</span>
          </button>

          <button type="button">
            <i className="bi bi-cart-plus"></i>
            <span>New Purchase</span>
          </button>

          <button type="button">
            <i className="bi bi-box-arrow-in-down"></i>
            <span>Stock Adjustment</span>
          </button>

          <button type="button">
            <i className="bi bi-file-earmark-text"></i>
            <span>Daily Report</span>
          </button>
        </div>
      </div>
    </div>
  );
}

function MobileHeader({ name }) {
  return (
    <div className="esp-mobile-header">
      <i className="bi bi-list"></i>

      <strong>{name}</strong>

      <div>
        <i className="bi bi-bell"></i>

        <span className="esp-mobile-avatar">A</span>
      </div>
    </div>
  );
}

function StyleHubMobile() {
  return (
    <div className="esp-mobile-system esp-stylehub">
      <MobileHeader name="StyleHub" />

      <div className="esp-mobile-body">
        <h3>Dashboard</h3>

        <div className="esp-mobile-stats">
          <div>
            <span>Today&apos;s Orders</span>
            <strong>34</strong>
          </div>

          <div>
            <span>Pending Orders</span>
            <strong>12</strong>
          </div>

          <div>
            <span>Customers</span>
            <strong>256</strong>
          </div>

          <div>
            <span>Today&apos;s Sales</span>
            <strong>€1,250,000</strong>
          </div>
        </div>

        <div className="esp-mobile-panel">
          <div className="esp-panel-title">
            <strong>Recent Orders</strong>
            <span>View all</span>
          </div>

          <div className="esp-mobile-row">
            <span>ORD-1001</span>
            <span>Grace Boutique</span>
            <strong>€230,000</strong>
            <small className="esp-success">Completed</small>
          </div>

          <div className="esp-mobile-row">
            <span>ORD-1002</span>
            <span>Royal Collections</span>
            <strong>€185,000</strong>
            <small className="esp-warning">Processing</small>
          </div>

          <div className="esp-mobile-row">
            <span>ORD-1003</span>
            <span>Bella Fashion</span>
            <strong>€320,000</strong>
            <small className="esp-success">Completed</small>
          </div>
        </div>
      </div>

      <div className="esp-mobile-nav">
        <span className="active">
          <i className="bi bi-house-door-fill"></i>
          Dashboard
        </span>

        <span>
          <i className="bi bi-bag"></i>
          Orders
        </span>

        <span>
          <i className="bi bi-box"></i>
          Products
        </span>

        <span>
          <i className="bi bi-box-seam"></i>
          Inventory
        </span>

        <span>
          <i className="bi bi-three-dots"></i>
          More
        </span>
      </div>
    </div>
  );
}

function SpiceGardenMobile() {
  return (
    <div className="esp-mobile-system esp-spicegarden">
      <MobileHeader name="SpiceGarden" />

      <div className="esp-mobile-body">
        <h3>Dashboard</h3>

        <div className="esp-mobile-stats">
          <div>
            <span>Today&apos;s Sales</span>
            <strong>€485,600</strong>
          </div>

          <div>
            <span>Orders Today</span>
            <strong>126</strong>
          </div>

          <div>
            <span>Active Tables</span>
            <strong>24 / 40</strong>
          </div>

          <div>
            <span>Pending Orders</span>
            <strong>18</strong>
          </div>
        </div>

        <div className="esp-mobile-panel">
          <div className="esp-panel-title">
            <strong>Order Summary</strong>
            <span>View all</span>
          </div>

          <div className="esp-mobile-row">
            <span>#R-00125</span>
            <span>Table 5</span>
            <strong>€18,500</strong>
            <small className="esp-warning">Preparing</small>
          </div>

          <div className="esp-mobile-row">
            <span>#R-00126</span>
            <span>Take Away</span>
            <strong>€12,000</strong>
            <small className="esp-warning">Preparing</small>
          </div>

          <div className="esp-mobile-row">
            <span>#R-00127</span>
            <span>Table 2</span>
            <strong>€25,000</strong>
            <small className="esp-success">Ready</small>
          </div>
        </div>
      </div>

      <div className="esp-mobile-nav">
        <span className="active">
          <i className="bi bi-house-door-fill"></i>
          Dashboard
        </span>

        <span>
          <i className="bi bi-receipt"></i>
          Orders
        </span>

        <span>
          <i className="bi bi-journal-text"></i>
          Menu
        </span>

        <span>
          <i className="bi bi-fire"></i>
          Kitchen
        </span>

        <span>
          <i className="bi bi-three-dots"></i>
          More
        </span>
      </div>
    </div>
  );
}

function GreenMartMobile() {
  return (
    <div className="esp-mobile-system esp-greenmart">
      <MobileHeader name="GreenMart" />

      <div className="esp-mobile-body">
        <h3>Dashboard</h3>

        <div className="esp-mobile-stats">
          <div>
            <span>Sales Today</span>
            <strong>€1,235,750</strong>
          </div>

          <div>
            <span>Transactions</span>
            <strong>482</strong>
          </div>

          <div>
            <span>Total Products</span>
            <strong>3,245</strong>
          </div>

          <div>
            <span>Low Stock Items</span>
            <strong className="esp-low-stock">23</strong>
          </div>
        </div>

        <div className="esp-mobile-panel">
          <div className="esp-panel-title">
            <strong>Recent Transactions</strong>
            <span>View all</span>
          </div>

          <div className="esp-mobile-row esp-greenmart-mobile-row">
            <span>TRX-9852</span>
            <strong>€25,600</strong>
            <small className="esp-success">Completed</small>
          </div>

          <div className="esp-mobile-row esp-greenmart-mobile-row">
            <span>TRX-9851</span>
            <strong>€18,950</strong>
            <small className="esp-success">Completed</small>
          </div>

          <div className="esp-mobile-row esp-greenmart-mobile-row">
            <span>TRX-9850</span>
            <strong>€42,300</strong>
            <small className="esp-success">Completed</small>
          </div>
        </div>
      </div>

      <div className="esp-mobile-nav">
        <span className="active">
          <i className="bi bi-house-door-fill"></i>
          Dashboard
        </span>

        <span>
          <i className="bi bi-receipt-cutoff"></i>
          POS
        </span>

        <span>
          <i className="bi bi-box"></i>
          Products
        </span>

        <span>
          <i className="bi bi-box-seam"></i>
          Inventory
        </span>

        <span>
          <i className="bi bi-three-dots"></i>
          More
        </span>
      </div>
    </div>
  );
}

function Entersp() {
  const [currentSystem, setCurrentSystem] = useState(0);

  useEffect(() => {
    const timer = window.setInterval(() => {
      setCurrentSystem((current) => {
        return (current + 1) % systems.length;
      });
    }, ROTATION_TIME);

    return () => {
      window.clearInterval(timer);
    };
  }, []);

  const current = systems[currentSystem];

  return (
    <div
      className={`enterprise-systems-preview ${current.id}`}
      aria-label={`${current.name} business management system preview`}
    >
      <div className="esp-desktop-view">
        {current.id === "stylehub" && <StyleHubDesktop />}
        {current.id === "spicegarden" && <SpiceGardenDesktop />}
        {current.id === "greenmart" && <GreenMartDesktop />}
      </div>

      <div className="esp-mobile-view">
        {current.id === "stylehub" && <StyleHubMobile />}
        {current.id === "spicegarden" && <SpiceGardenMobile />}
        {current.id === "greenmart" && <GreenMartMobile />}
      </div>

      <div
        className="esp-indicators"
        aria-label="System preview selector"
      >
        {systems.map((system, index) => (
          <button
            type="button"
            key={system.id}
            className={
              currentSystem === index
                ? `active ${system.id}`
                : system.id
            }
            onClick={() => setCurrentSystem(index)}
            aria-label={`Show ${system.name} preview`}
            aria-pressed={currentSystem === index}
          />
        ))}
      </div>
    </div>
  );
}

export default Entersp;