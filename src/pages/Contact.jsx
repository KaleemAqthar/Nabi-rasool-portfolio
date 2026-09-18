import profile from "../data/profile";
import SectionTitle from "../components/SectionTitle";

function Contact() {
  return (
    <main>

      <section className="page-hero">

        <div className="container">

          <span className="section-eyebrow">
            CONTACT
          </span>

          <h1>
            Stay
            <br />
            <span>connected.</span>
          </h1>

        </div>

      </section>


      <section className="section contact-section">

        <div className="container contact-grid">

          <div>

            <SectionTitle
              eyebrow="GET IN TOUCH"
              title="Connect with us."
              description="For public programmes, community engagement and professional enquiries."
            />

            <div className="contact-details">

              {profile.phone && (
                <a href={`tel:${profile.phone}`}>
                  <span>
                    <i className="bi bi-telephone"></i>
                  </span>

                  <div>
                    <small>PHONE</small>
                    <strong>{profile.phone}</strong>
                  </div>
                </a>
              )}

              {profile.email && (
                <a href={`mailto:${profile.email}`}>
                  <span>
                    <i className="bi bi-envelope"></i>
                  </span>

                  <div>
                    <small>EMAIL</small>
                    <strong>{profile.email}</strong>
                  </div>
                </a>
              )}

              <div className="contact-detail-static">

                <span>
                  <i className="bi bi-geo-alt"></i>
                </span>

                <div>
                  <small>LOCATION</small>

                  <strong>
                    Dharmavaram,
                    <br />
                    Sri Sathya Sai District,
                    <br />
                    Andhra Pradesh
                  </strong>
                </div>

              </div>

            </div>

          </div>


          <div className="contact-card">

            <div className="contact-card-icon">
              <i className="bi bi-chat-dots"></i>
            </div>

            <h3>
              Public engagement
            </h3>

            <p>
              For enquiries and information regarding
              public programmes, activities and professional work.
            </p>

            <div className="contact-card-line"></div>

            <span>
              DHARMAVARAM • ANDHRA PRADESH
            </span>

          </div>

        </div>

      </section>

    </main>
  );
}

export default Contact;