function Timeline({ items = [] }) {
  return (
    <div className="timeline">
      {items.map((item, index) => (
        <div
          key={item.year || index}
          className={`timeline-item ${index % 2 === 0 ? "left" : "right"}`}
        >
          <div className="timeline-dot">{item.year}</div>
          <div className="timeline-content">
            <span className="timeline-year">STAGE {item.year}</span>
            <h3>{item.title}</h3>
            <p>{item.description}</p>
            {item.image && (
              <div className="timeline-image">
                <img src={item.image} alt={item.title} loading="lazy" />
              </div>
            )}
          </div>
        </div>
      ))}
    </div>
  );
}

export default Timeline;