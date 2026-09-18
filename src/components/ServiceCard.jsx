function ServiceCard({
  icon,
  title,
  description,
}) {
  return (
    <article className="service-card">

      <div className="service-icon">
        <i className={`bi ${icon}`}></i>
      </div>

      <div>
        <h3>{title}</h3>

        <p>{description}</p>
      </div>

      <div className="service-arrow">
        <i className="bi bi-arrow-up-right"></i>
      </div>

    </article>
  );
}

export default ServiceCard;