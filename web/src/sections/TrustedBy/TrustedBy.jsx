import "./TrustedBy.css";

import vodi from "../../assets/clients/vodi-group.png";
import stylewright from "../../assets/clients/stylewright.png";

const companies = [
  {
    logo: vodi,
    name: "VODI GROUP",
    subtitle: ""
  },
  {
    logo: stylewright,
    name: "STYLEWRIGHT",
    subtitle: "FASHION HOUSE"
  }
];

function TrustedBy() {
  return (
    <section className="trusted">

      <div className="trusted-card">

        <div className="trusted-heading">

          <span></span>

          <p>TRUSTED BY INNOVATIVE BUSINESSES</p>

          <span></span>

        </div>

        <div className="trusted-slider">

          <div className="trusted-track">

            {[...companies, ...companies, ...companies].map(
              (company, index) => (

                <div
                  className="trusted-company"
                  key={index}
                >

                  <img
                    src={company.logo}
                    alt={company.name}
                    className="trusted-logo"
                  />

                  <div className="trusted-info">

                    <h3>{company.name}</h3>

                    {company.subtitle && (
                      <p>{company.subtitle}</p>
                    )}

                  </div>

                </div>

              )
            )}

          </div>

        </div>

      </div>

    </section>
  );
}

export default TrustedBy;