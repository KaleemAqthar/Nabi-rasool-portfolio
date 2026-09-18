import { Link } from "react-router-dom";
import profile from "../data/profile";
import RoleCard from "../components/RoleCard";
import SectionTitle from "../components/SectionTitle";
import Button from "../components/Button";

function About() {
  const values = [
    {
      num: "01",
      title: "Community First",
      desc: "Prioritising the needs and concerns of the residents of Dharmavaram at every level of public engagement."
    },
    {
      num: "02",
      title: "Integrity & Trust",
      desc: "Maintaining transparency and dedication across both professional contracting and political service."
    },
    {
      num: "03",
      title: "Ward Leadership",
      desc: "Direct involvement at the grassroots level as 24th Ward Incharge to ensure local voices are heard."
    },
    {
      num: "04",
      title: "Regional Progress",
      desc: "Driving local development and public representation across Sri Sathya Sai District."
    }
  ];

  return (
    <main>
      {/* PAGE HERO */}
      <section className="page-hero">
        <div className="container">
          <span className="section-eyebrow">ABOUT NABIRASOOL</span>
          <h1>
            Service built on
            <br />
            <span>dedication & trust.</span>
          </h1>
        </div>
      </section>

      {/* BIOGRAPHY SECTION */}
      <section className="section about-section">
        <div className="container about-grid">
          <div className="about-image">
            <img
              src={profile.aboutImage || profile.heroImage}
              alt={profile.displayName}
              loading="lazy"
            />
          </div>

          <div className="about-content">
            <SectionTitle
              eyebrow="BIOGRAPHY"
              title="A career of contracting & public service."
            />

            <p>
              {profile.about}
            </p>

            <p>
              Rooted in Dharmavaram, Sri Sathya Sai District, his journey blends practical industry experience in civil contracting with an unyielding commitment to political organisation and community welfare under the Bharatiya Janata Party.
            </p>

            <p>
              As the Sri Sathya Sai District Minority President and 24th Ward Incharge, he actively represents public interests, participates in key community initiatives, and works towards local development.
            </p>

            <div style={{ marginTop: "30px" }}>
              <Button to="/political-journey">
                View Political Journey
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* CORE VALUES / PRINCIPLES */}
      <section className="section about-values">
        <div className="container">
          <SectionTitle
            eyebrow="GUIDING PRINCIPLES"
            title="Pillars of public engagement."
            description="The core values driving everyday service and organizational leadership."
          />

          <div className="values-grid">
            {values.map((v) => (
              <div className="value-item" key={v.num}>
                <span>{v.num}</span>
                <h3>{v.title}</h3>
                <p>{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ROLES SUMMARY */}
      <section className="section roles-section">
        <div className="container">
          <SectionTitle
            eyebrow="RESPONSIBILITIES"
            title="Roles & positions held."
            description="Active roles in political organization and local governance."
          />

          <div className="roles-grid">
            <RoleCard
              number="01"
              icon="bi-people"
              title="District Minority President"
              description="Sri Sathya Sai District Minority Wing leadership."
            />
            <RoleCard
              number="02"
              icon="bi-geo-alt"
              title="24th Ward Incharge"
              description="Grassroots ward-level public organization and care."
            />
            <RoleCard
              number="03"
              icon="bi-flag"
              title="BJP Leadership"
              description="Active member and organizer for Bharatiya Janata Party."
            />
            <RoleCard
              number="04"
              icon="bi-building"
              title="Professional Contractor"
              description="Construction contracting services and local infrastructure."
            />
          </div>
        </div>
      </section>

      {/* CTA SECTION */}
      <section className="cta-section">
        <div className="container cta-content">
          <span className="section-eyebrow">DHARMAVARAM • ANDHRA PRADESH</span>
          <h2>Get in touch.</h2>
          <p>
            Have a question regarding public activities, ward concerns, or professional work?
          </p>
          <Link to="/contact" className="cta-button">
            Contact Directly
            <i className="bi bi-arrow-up-right"></i>
          </Link>
        </div>
      </section>
    </main>
  );
}

export default About;