import { Link } from "react-router-dom";
import profile from "../data/profile";
import services from "../data/services";
import gallery from "../data/gallery";
import RoleCard from "../components/RoleCard";
import ServiceCard from "../components/ServiceCard";
import GalleryCard from "../components/GalleryCard";
import SectionTitle from "../components/SectionTitle";
import Button from "../components/Button";

function Home() {
  const featuredGallery = gallery.slice(0, 4);

  return (
    <main>

      {/* HERO */}

      <section className="hero">

        <div className="hero-map">
          <img
            src={profile.mapImage}
            alt="Dharmavaram map"
          />
        </div>

        <div className="hero-grid"></div>

        <div className="container hero-container">

          <div className="hero-content">

            <span className="hero-eyebrow">
              PUBLIC SERVICE • DHARMAVARAM
            </span>

            <h1>
              {profile.displayName}
            </h1>

            <p className="hero-tagline">
              {profile.tagline}
            </p>

            <p className="hero-description">
              {profile.description}
            </p>

            <div className="hero-buttons">

              <Button to="/about">
                Explore His Journey
              </Button>

              <Button
                to="/gallery"
                variant="outline"
              >
                View Gallery
              </Button>

            </div>

          </div>

          <div className="hero-person">

            <div className="hero-photo-glow"></div>

            <img
              src={profile.heroImage}
              alt={profile.name}
            />

            <div className="hero-photo-label">
              <span>DHARMAVARAM</span>
              <strong>PUBLIC SERVICE</strong>
            </div>

          </div>

        </div>

        <div className="hero-scroll">
          <span>SCROLL TO EXPLORE</span>
          <i className="bi bi-arrow-down"></i>
        </div>

      </section>


      {/* INTRO */}

      <section className="section intro-section">

        <div className="container intro-grid">

          <div>
            <SectionTitle
              eyebrow="A JOURNEY OF SERVICE"
              title="Connected with the people of Dharmavaram."
            />
          </div>

          <div className="intro-text">

            <p>
              {profile.about}
            </p>

            <Button to="/about" variant="text">
              More About Him
            </Button>

          </div>

        </div>

      </section>


      {/* ROLES */}

      <section className="section roles-section">

        <div className="container">

          <SectionTitle
            eyebrow="ROLES & RESPONSIBILITIES"
            title="Public life and professional experience."
            description="Key roles and areas of involvement."
          />

          <div className="roles-grid">

            <RoleCard
              number="01"
              icon="bi-people"
              title="BJP Leadership"
              description="Political and organisational participation."
            />

            <RoleCard
              number="02"
              icon="bi-person-badge"
              title="District Minority President"
              description="Sri Sathya Sai District."
            />

            <RoleCard
              number="03"
              icon="bi-geo-alt"
              title="24th Ward Incharge"
              description="Ward-level public engagement."
            />

            <RoleCard
              number="04"
              icon="bi-building"
              title="Contractor"
              description="Construction and contracting profession."
            />

          </div>

        </div>

      </section>


      {/* DHARMAVARAM */}

      <section className="dharmavaram-section">

        <div className="dharmavaram-map-bg">
          <img
            src={profile.mapImage}
            alt=""
          />
        </div>

        <div className="container dharmavaram-content">

          <span className="section-eyebrow">
            DHARMAVARAM
          </span>

          <h2>
            A place of work,
            <br />
            connection & service.
          </h2>

          <p>
            His public journey has remained closely connected
            with Dharmavaram and its people.
          </p>

          <Button to="/public-service">
            Explore Public Service
          </Button>

        </div>

      </section>


      {/* SERVICES */}

      <section className="section services-section">

        <div className="container">

          <div className="section-heading-row">

            <SectionTitle
              eyebrow="AREAS OF WORK"
              title="Public engagement in action."
            />

            <Button to="/public-service" variant="text">
              View All
            </Button>

          </div>

          <div className="services-grid">

            {services.slice(0, 6).map((service) => (
              <ServiceCard
                key={service.title}
                {...service}
              />
            ))}

          </div>

        </div>

      </section>


      {/* GALLERY */}

      <section className="section gallery-preview">

        <div className="container">

          <SectionTitle
            eyebrow="FROM THE ARCHIVES"
            title="Moments from the journey."
            description="Photographs from public programmes, community activities and professional work."
          />

          <div className="gallery-grid">

            {featuredGallery.map((item) => (
              <GalleryCard
                key={item.id}
                {...item}
              />
            ))}

          </div>

          <div className="center-button">

            <Button to="/gallery">
              Explore Full Gallery
            </Button>

          </div>

        </div>

      </section>


      {/* CTA */}

      <section className="cta-section">

        <div className="container cta-content">

          <span className="section-eyebrow">
            DHARMAVARAM • ANDHRA PRADESH
          </span>

          <h2>
            Explore the journey.
          </h2>

          <p>
            Discover his public activities, professional work
            and moments from his journey.
          </p>

          <Link to="/contact" className="cta-button">
            Connect
            <i className="bi bi-arrow-up-right"></i>
          </Link>

        </div>

      </section>

    </main>
  );
}

export default Home;