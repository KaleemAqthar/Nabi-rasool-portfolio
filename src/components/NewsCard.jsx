function NewsCard({
  image,
  title,
  date,
  description,
  source,
}) {
  return (
    <article className="news-card">

      <div className="news-image">

        <img
          src={image}
          alt={title}
          loading="lazy"
        />

      </div>

      <div className="news-content">

        <div className="news-meta">
          <span>{source}</span>
          <span>{date}</span>
        </div>

        <h3>{title}</h3>

        <p>{description}</p>

      </div>

    </article>
  );
}

export default NewsCard;