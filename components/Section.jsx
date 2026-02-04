export function Section({ id, title, subtitle, children }) {
  return (
    <section id={id} className="section">
      <div className="container">
        <div className="sectionPanel">
          <div className="sectionHead">
            <h2 className="h2">{title}</h2>
            {subtitle ? <div className="muted">{subtitle}</div> : null}
          </div>

          <div className="sectionBody">{children}</div>
        </div>
      </div>
    </section>
  );
}
