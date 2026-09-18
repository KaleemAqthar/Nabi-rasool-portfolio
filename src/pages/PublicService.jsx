import profile from "../data/profile";
import services from "../data/services";
import ServiceCard from "../components/ServiceCard";
import SectionTitle from "../components/SectionTitle";

function PublicService() {
  return (
    <main>

      <section className="page-hero">

        <div className="container">

          <span className="section-eyebrow">
            PUBLIC SERVICE
          </span>

          <h1>
            Work that begins
            <br />
            <span>with people.</span>
          </h1>

        </div>

      </section>


      <section className="section">

        <div className="container">

          <SectionTitle
            eyebrow="AREAS OF ENGAGEMENT"
            title="Public and professional work."
            description="A collection of areas representing his public involvement and professional experience."
          />

          <div className="services-grid large">

            {services.map((service) => (
              <ServiceCard
                key={service.title}
                {...service}
              />
            ))}

          </div>

        </div>

      </section>


      <section className="service-feature">

        <div className="container service-feature-grid">

          <div className="service-feature-image">

            <img
              src={profile.aboutImage || profile.heroImage}
              alt="Public service in Dharmavaram"
              loading="lazy"
            />

          </div>

          <div className="service-feature-content">

            <span className="section-eyebrow">
              DHARMAVARAM
            </span>

            <h2>
              Staying connected
              with the community.
            </h2>

            <p>
              Public programmes and community engagement
              form an important part of his journey.
            </p>

          </div>

        </div>

      </section>

    </main>
  );
}

export default PublicService;