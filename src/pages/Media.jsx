import media from "../data/media";
import NewsCard from "../components/NewsCard";
import SectionTitle from "../components/SectionTitle";

function Media() {
  return (
    <main>

      <section className="page-hero">

        <div className="container">

          <span className="section-eyebrow">
            MEDIA
          </span>

          <h1>
            In the
            <br />
            <span>public record.</span>
          </h1>

        </div>

      </section>


      <section className="section">

        <div className="container">

          <SectionTitle
            eyebrow="NEWS & MEDIA"
            title="Coverage and public appearances."
            description="News articles, media coverage and documented public programmes."
          />

          <div className="news-grid">

            {media.map((item) => (
              <NewsCard
                key={item.title}
                {...item}
              />
            ))}

          </div>

        </div>

      </section>

    </main>
  );
}

export default Media;