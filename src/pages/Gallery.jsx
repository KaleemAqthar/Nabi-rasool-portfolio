import { useState } from "react";
import gallery from "../data/gallery";
import GalleryCard from "../components/GalleryCard";
import SectionTitle from "../components/SectionTitle";

function Gallery() {
  const [activeFilter, setActiveFilter] = useState("All");

  const categories = [
    "All",
    "Political",
    "Community",
    "BJP",
    "Public",
  ];

  const filteredGallery =
    activeFilter === "All"
      ? gallery
      : gallery.filter(
          (item) => item.category === activeFilter
        );

  return (
    <main>

      <section className="page-hero">

        <div className="container">

          <span className="section-eyebrow">
            GALLERY
          </span>

          <h1>
            Moments from
            <br />
            <span>the journey.</span>
          </h1>

        </div>

      </section>


      <section className="section">

        <div className="container">

          <SectionTitle
            eyebrow="PHOTO ARCHIVE"
            title="Public life through photographs."
            description="A visual collection of programmes, meetings, community activities and events."
          />


          <div className="gallery-filters">

            {categories.map((category) => (
              <button
                key={category}
                className={
                  activeFilter === category
                    ? "active"
                    : ""
                }
                onClick={() => setActiveFilter(category)}
              >
                {category}
              </button>
            ))}

          </div>


          <div className="gallery-grid full">

            {filteredGallery.map((item) => (
              <GalleryCard
                key={item.id}
                {...item}
              />
            ))}

          </div>

        </div>

      </section>

    </main>
  );
}

export default Gallery;