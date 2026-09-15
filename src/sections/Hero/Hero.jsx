import "./Hero.css";
import DashboardDemo from "../../components/ui/dashboard-demo/DashboardDemo";

function Hero() {
  return (
    <section className="hero-section">
      <div className="container hero-container">
        <div className="row align-items-start g-5">

          {/* LEFT SIDE */}
          <div className="col-lg-6">
            <span className="hero-badge">CUSTOM ERP SOLUTIONS</span>

            <h1 className="hero-title">
              Software Built
              <br />
              Around Your
              <br />
              <span>Business.</span>
            </h1>

            <p className="hero-description">
              We build custom ERP systems and business software that streamline
              operations, automate processes, and give you complete visibility
              to grow with confidence.
            </p>

            <div className="hero-actions">
              <a className="hero-primary-btn" href="#contact">
                Book a Free Consultation
                <i className="bi bi-arrow-right"></i>
              </a>

              <a className="hero-secondary-btn" href="#solutions">
                Explore Solutions
                <i className="bi bi-play-fill"></i>
              </a>
            </div>

            <div className="hero-features">
              <div className="hero-feature">
                <i className="bi bi-code-slash"></i>
                <span>Custom ERP Solutions</span>
              </div>

              <div className="hero-feature">
                <i className="bi bi-gear"></i>
                <span>Business Automation</span>
              </div>

              <div className="hero-feature">
                <i className="bi bi-cloud"></i>
                <span>Cloud-Based Systems</span>
              </div>

              <div className="hero-feature">
                <i className="bi bi-shield-check"></i>
                <span>Reliable Support</span>
              </div>
            </div>
          </div>

          {/* RIGHT SIDE */}
          <div className="col-lg-6">
            <DashboardDemo />
          </div>

        </div>
      </div>
    </section>
  );
}

export default Hero;