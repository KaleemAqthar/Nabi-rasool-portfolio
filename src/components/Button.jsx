import { Link } from "react-router-dom";

function Button({
  children,
  to,
  href,
  variant = "primary",
  className = "",
  onClick,
  ...props
}) {
  const classes = `custom-button ${variant} ${className}`.trim();

  if (to) {
    return (
      <Link to={to} className={classes} {...props}>
        <span>{children}</span>
        <i className="bi bi-arrow-up-right"></i>
      </Link>
    );
  }

  if (href) {
    return (
      <a href={href} className={classes} {...props}>
        <span>{children}</span>
        <i className="bi bi-arrow-up-right"></i>
      </a>
    );
  }

  return (
    <button className={classes} onClick={onClick} {...props}>
      <span>{children}</span>
      <i className="bi bi-arrow-up-right"></i>
    </button>
  );
}

export default Button;