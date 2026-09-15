import "./Footer.css";
import logo from "../../assets/logos/xp-logo-white.png";

import {
  ArrowUpRight,
  Mail,
  Phone,
} from "lucide-react";

const companyLinks = [
  { name: "About", href: "#about" },
  { name: "Industries", href: "#industries" },
  { name: "Our Process", href: "#process" },
  { name: "Contact", href: "#contact" },
];

const serviceLinks = [
  { name: "Custom Software", href: "#services" },
  { name: "ERP Development", href: "#services" },
  { name: "Legacy Modernization", href: "#services" },
  { name: "Technical Support", href: "#services" },
];

const resourceLinks = [
  { name: "Privacy Policy", href: "#" },
  { name: "Terms of Service", href: "#" },
  { name: "Cookies", href: "#" },
];

function FooterNavigation({ title, links }) {
  return (
    <div className="footer-column">
      <h3 className="footer-column-title">{title}</h3>

      <nav
        className="footer-navigation"
        aria-label={`${title} navigation`}
      >
        {links.map((link) => (
          <a
            key={link.name}
            href={link.href}
            className="footer-link"
          >
            <span>{link.name}</span>

            <ArrowUpRight
              className="footer-link-arrow"
              size={15}
              strokeWidth={1.8}
              aria-hidden="true"
            />
          </a>
        ))}
      </nav>
    </div>
  );
}

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="site-footer" id="contact">
      <div
        className="footer-background-glow footer-glow-left"
        aria-hidden="true"
      />

      <div
        className="footer-background-glow footer-glow-right"
        aria-hidden="true"
      />

      <div className="footer-container">
        <div className="footer-top">
          <div className="footer-brand">
            <a
              href="#top"
              className="footer-logo"
              aria-label="XP Technologies homepage"
            >
              <img
                src={logo}
                alt="XP Technologies"
                className="footer-logo-image"
              />

              <span className="footer-company-name">
                TECHNOLOGIES
              </span>
            </a>

            <p className="footer-description">
              Building innovative software solutions that help businesses
              streamline operations, improve efficiency, and accelerate growth.
            </p>
          </div>
        </div>

        <div className="footer-divider" />

        <div className="footer-main">
          <FooterNavigation
            title="Company"
            links={companyLinks}
          />

          <FooterNavigation
            title="Services"
            links={serviceLinks}
          />

          <FooterNavigation
            title="Resources"
            links={resourceLinks}
          />

          <div className="footer-column footer-contact-column">
            <h3 className="footer-column-title">Contact</h3>

            <div className="footer-contact-list">
              <a
                href="mailto:hello@xptechnologies.com"
                className="footer-contact-item"
              >
                <span className="footer-contact-icon">
                  <Mail
                    size={18}
                    strokeWidth={1.8}
                    aria-hidden="true"
                  />
                </span>

                <span>hello@xptechnologies.com</span>
              </a>

              <a
                href="tel:+2340000000000"
                className="footer-contact-item"
              >
                <span className="footer-contact-icon">
                  <Phone
                    size={18}
                    strokeWidth={1.8}
                    aria-hidden="true"
                  />
                </span>

                <span>+234 XXX XXX XXXX</span>
              </a>
            </div>
          </div>
        </div>

        <div className="footer-bottom-divider" />

        <div className="footer-bottom">
          <p>&copy; {currentYear} XP Technologies</p>

          <p className="footer-bottom-tagline">
            Building software that moves businesses forward.
          </p>

          <p>Made with precision.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;