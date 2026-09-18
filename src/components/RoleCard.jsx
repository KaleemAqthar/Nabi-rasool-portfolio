function RoleCard({
  number,
  icon,
  title,
  description,
}) {
  return (
    <article className="role-card">
      <div className="role-card-top">
        <span className="role-number">{number}</span>
        <div className="role-icon">
          <i className={`bi ${icon}`}></i>
        </div>
      </div>
      <h3>{title}</h3>
      <p>{description}</p>
    </article>
  );
}

export default RoleCard;