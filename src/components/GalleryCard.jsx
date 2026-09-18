function GalleryCard({ image, title, category }) {
  return (
    <article className="gallery-card">

      <img
        src={image}
        alt={title}
        loading="lazy"
      />

      <div className="gallery-overlay">

        <div>
          <span>{category}</span>
          <h3>{title}</h3>
        </div>

        <div className="gallery-view">
          <i className="bi bi-arrow-up-right"></i>
        </div>

      </div>

    </article>
  );
}

export default GalleryCard;