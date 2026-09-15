import { useState } from "react";
import "./Navbar.css";

import logo from "../../../assets/logos/xp-logo-white.png";

const solutions = [
  {
    title: "Enterprise ERP Systems",
    description: "Complete system to run and manage your business",
    href: "/solutions/enterprise-erp",
    icon: "bi-box-seam",
  },
  {
    title: "Business Process Automation",
    description: "Automate workflows and eliminate manual tasks",
    href: "/solutions/business-process-automation",
    icon: "bi-diagram-3",
  },
  {
    title: "Legacy System Modernisation",
    description: "Upgrade outdated systems to modern platforms",
    href: "/solutions/system-modernisation",
    icon: "bi-arrow-repeat",
  },
  {
    title: "Technical Support & Maintenance",
    description: "Keep your systems running smoothly and reliably",
    href: "/solutions/technical-support",
    icon: "bi-headset",
  },
  {
    title: "ERP Security & Infrastructure",
    description: "Protect your data, systems and business",
    href: "/solutions/security-infrastructure",
    icon: "bi-shield-check",
  },
];

function Navbar() {
  const [mobileSolutionsOpen, setMobileSolutionsOpen] = useState(false);

  const toggleMobileSolutions = () => {
    setMobileSolutionsOpen((current) => !current);
  };

  const closeMobileSolutions = () => {
    setMobileSolutionsOpen(false);
  };

  return (
    <nav className="navbar navbar-expand-lg custom-navbar">
      <div className="container navbar-inner">

        {/* LOGO */}
        <a className="navbar-brand brand-wrap" href="/">
          <img
            src={logo}
            alt="XP Technologies"
            className="company-logo"
          />

          <span className="company-name">
            TECHNOLOGIES
          </span>
        </a>

        {/* MOBILE MENU BUTTON */}
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#mainNavbar"
          aria-controls="mainNavbar"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div
          className="collapse navbar-collapse"
          id="mainNavbar"
        >
          <ul className="navbar-nav ms-auto align-items-lg-center">

            {/* SOLUTIONS */}
            <li
              className={`nav-item solutions-nav-item ${
                mobileSolutionsOpen ? "mobile-solutions-open" : ""
              }`}
            >
              <button
                type="button"
                className="nav-link solutions-trigger"
                onClick={toggleMobileSolutions}
                aria-expanded={mobileSolutionsOpen}
              >
                <span>Solutions</span>

                <i
                  className={`bi bi-chevron-down nav-chevron ${
                    mobileSolutionsOpen
                      ? "mobile-chevron-open"
                      : ""
                  }`}
                ></i>
              </button>

              <div className="solutions-dropdown">
                <div className="solutions-dropdown-list">

                  {solutions.map((solution) => (
                    <a
                      key={solution.title}
                      href={solution.href}
                      className="solution-dropdown-item"
                      onClick={closeMobileSolutions}
                    >
                      <span className="solution-dropdown-icon">
                        <i className={`bi ${solution.icon}`}></i>
                      </span>

                      <span className="solution-dropdown-content">
                        <strong>
                          {solution.title}
                        </strong>

                        <small>
                          {solution.description}
                        </small>
                      </span>

                      <i className="bi bi-arrow-right solution-item-arrow"></i>
                    </a>
                  ))}

                </div>

                <div className="solutions-dropdown-footer">
                  <a
                    href="/solutions"
                    className="view-all-solutions"
                    onClick={closeMobileSolutions}
                  >
                    <span>View all solutions</span>

                    <i className="bi bi-arrow-right"></i>
                  </a>
                </div>
              </div>
            </li>

           {/* INDUSTRIES */}
<li className="nav-item">
  <a className="nav-link" href="/Industries">
    <span>Industries</span>
  </a>
</li>

            {/* PORTFOLIO */}
            <li className="nav-item">
             <a className="nav-link" href="/portfolio">
  Portfolio
</a>
            </li>

            {/* ABOUT */}
            <li className="nav-item">
              <a className="nav-link" href="About">
                About Us
              </a>
            </li>

            {/* RESOURCES */}
            <li className="nav-item">
              <a className="nav-link" href="resources">
                <span>Resources</span>

              </a>
            </li>

            
            <li className="nav-item consultation-item">
              <a
                className="consultation-btn"
                href="/consultation"
              >
                <span>Book a Consultation</span>

                <i className="bi bi-arrow-right"></i>
              </a>
            </li>

          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;