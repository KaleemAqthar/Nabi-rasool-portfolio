import journey from "../data/journey";
import Timeline from "../components/Timeline";
import SectionTitle from "../components/SectionTitle";

function PoliticalJourney() {
  return (
    <main>

      <section className="page-hero">

        <div className="container">

          <span className="section-eyebrow">
            POLITICAL JOURNEY
          </span>

          <h1>
            From participation
            <br />
            <span>to leadership.</span>
          </h1>

        </div>

      </section>


      <section className="section journey-intro">

        <div className="container narrow">

          <SectionTitle
            eyebrow="THE JOURNEY"
            title="A timeline of public involvement."
            description="Key stages of his political and community journey."
            align="center"
          />

        </div>

      </section>


      <section className="section timeline-section">

        <div className="container">

          <Timeline items={journey} />

        </div>

      </section>


      <section className="section political-gallery">

        <div className="container">

          <SectionTitle
            eyebrow="PUBLIC PROGRAMMES"
            title="Participation and public engagement."
          />

          <div className="image-strip">
            <img
              src="/images/journey/journey-01.jpg"
              alt="Community Programme"
              loading="lazy"
            />
            <img
              src="/images/journey/journey-02.jpg"
              alt="BJP Political Event"
              loading="lazy"
            />
            <img
              src="/images/about/about-person.jpg"
              alt="Dharmavaram Public Service"
              loading="lazy"
            />
          </div>

        </div>

      </section>

    </main>
  );
}

export default PoliticalJourney;