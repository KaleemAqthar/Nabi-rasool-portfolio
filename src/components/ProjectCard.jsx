function ProjectCard({
  title,
  category,
  image,
  description,
}) {
  return (
    <article className="project-card">
      <div className="project-image">
        <img
          src={image}
          alt={title}
          loading="lazy"
        />
        {category && <span className="project-category">{category}</span>}
      </div>

      <div className="project-content">
        <h3>{title}</h3>
        <p>{description}</p>
        <div className="project-link">
          <span>DETAILS</span>
          <i className="bi bi-arrow-right"></i>
        </div>
      </div>
    </article>
  );
}

export default ProjectCard;