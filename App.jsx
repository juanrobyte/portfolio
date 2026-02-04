import "./styles.css";
import { useState } from "react";
import {
  profile,
  highlights,
  experience,
  projects,
  skillGroups,
  education,
  courses,
  pdfCertificates,
  badges,
} from "./data/profile";
import { Section } from "./components/Section";
import yoImg from "./assets/Yo.jpg";
import {
  FiMail,
  FiPhone,
  FiGithub,
  FiLinkedin,
  FiMenu,
  FiX,
} from "react-icons/fi";
import { FaWhatsapp } from "react-icons/fa";
import CVModal from "./components/CVModal";

function ExternalLink({ href, children }) {
  return (
    <a className="link" href={href} target="_blank" rel="noreferrer">
      {children} <span className="muted">↗</span>
    </a>
  );
}

function IconButton({ href, icon, children, variant = "default" }) {
  const cls = variant === "primary" ? "btn btnPrimary btnIcon" : "btn btnIcon";
  return (
    <a className={cls} href={href} target="_blank" rel="noreferrer">
      <span className="iconWrap">{icon}</span>
      <span>{children}</span>
    </a>
  );
}

export default function App() {
  const [cvOpen, setCvOpen] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => setMenuOpen(false);
  const openCV = (e) => {
    if (e) e.preventDefault();
    closeMenu();
    setCvOpen(true);
  };

  return (
    <>
      <header className="nav">
        <div className="container">
          <div className="navInner">
            {menuOpen ? (
              <div className="mobileMenu" onClick={closeMenu}>
                <div
                  className="mobileMenuPanel"
                  onClick={(e) => e.stopPropagation()}
                >
                  <a className="btn" href="#experiencia" onClick={closeMenu}>
                    Experiencia
                  </a>
                  <a className="btn" href="#proyectos" onClick={closeMenu}>
                    Proyectos
                  </a>
                  <a className="btn" href="#habilidades" onClick={closeMenu}>
                    Habilidades
                  </a>
                  <a className="btn" href="#formacion" onClick={closeMenu}>
                    Formación
                  </a>
                  <a className="btn" href="#contacto" onClick={closeMenu}>
                    Contacto
                  </a>
                  <a
                    className="btn btnPrimary"
                    href={profile.cta.cv.href}
                    onClick={openCV}
                  >
                    CV
                  </a>
                </div>
              </div>
            ) : null}

            <div className="brand">
              <span className="brandBadge">Juanrobyte</span>
            </div>

            <button
              className="navToggle"
              type="button"
              aria-label={menuOpen ? "Cerrar menú" : "Abrir menú"}
              aria-expanded={menuOpen}
              onClick={() => setMenuOpen((v) => !v)}
            >
              {menuOpen ? <FiX size={20} /> : <FiMenu size={20} />}
            </button>

            <nav className="navLinks">
              <a className="btn" href="#experiencia">
                Experiencia
              </a>
              <a className="btn" href="#proyectos">
                Proyectos
              </a>
              <a className="btn" href="#habilidades">
                Habilidades
              </a>
              <a className="btn" href="#formacion">
                Formación
              </a>
              <a className="btn" href="#contacto">
                Contacto
              </a>
              <a
                className="btn btnPrimary"
                href={profile.cta.cv.href}
                onClick={(e) => {
                  e.preventDefault();
                  setCvOpen(true);
                }}
              >
                Curriculum
              </a>
            </nav>
          </div>
        </div>
      </header>

      <main>
        <section className="hero">
          <div className="container">
            <div
              className="row"
              style={{ justifyContent: "space-between", alignItems: "center" }}
            >
              <div style={{ maxWidth: 760 }}>
                <div className="kicker">{profile.location}</div>
                <h1 className="h1">{profile.headline}</h1>
                <p className="sub">{profile.summary}</p>

                {/* <div className="heroCtas">
                  <a className="btn btnPrimary" href={profile.cta.primary.href}>
                    {profile.cta.primary.label}
                  </a>
                  <a className="btn" href={profile.cta.secondary.href}>
                    {profile.cta.secondary.label}
                  </a>
                  <a
                    className="btn"
                    href={profile.cta.cv.href}
                    onClick={(e) => {
                      e.preventDefault();
                      setCvOpen(true);
                    }}
                  >
                    {profile.cta.cv.label}
                  </a>
                </div> */}
              </div>

              <div className="heroAvatarWrap">
                <img
                  src={yoImg}
                  alt="Foto de Juan Diego"
                  className="heroAvatar"
                  loading="eager"
                />
              </div>
            </div>

            <div className="sep" />

            <div className="grid grid3">
              {highlights.map((h) => (
                <div className="card" key={h.title}>
                  <h3 className="cardTitle">{h.title}</h3>
                  <p className="cardDesc">{h.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <Section
          id="experiencia"
          title="Experiencia"
          subtitle="Roles y aportes más relevantes"
        >
          <div className="grid grid1 expGrid">
            {experience.map((job) => {
              // Creamos un "slug" para asignar clase y poder posicionar por CSS
              const slug = (job.company || "")
                .toLowerCase()
                .replace(/\s+/g, "-")
                .replace(/\//g, "-")
                .replace(/[^\w-]/g, "");

              return (
                <div
                  className={`card expCard exp-${slug}`}
                  key={job.role + job.company}
                >
                  <div
                    className="row"
                    style={{ justifyContent: "space-between" }}
                  >
                    <div>
                      <div style={{ fontWeight: 900 }}>{job.role}</div>
                      <div className="muted">
                        {job.company} · {job.place}
                      </div>
                    </div>
                    <div className="tag">{job.period}</div>
                  </div>

                  <ul
                    style={{
                      margin: "12px 0 0",
                      paddingLeft: 18,
                      color: "rgba(229,231,235,.86)",
                      lineHeight: 1.55,
                    }}
                  >
                    {job.bullets.map((b) => (
                      <li key={b}>{b}</li>
                    ))}
                  </ul>

                  {job.link ? (
                    <div style={{ marginTop: 12 }}>
                      <a
                        className="link"
                        href={job.link.href}
                        target="_blank"
                        rel="noreferrer"
                      >
                        {job.link.label} <span className="muted">↗</span>
                      </a>
                    </div>
                  ) : null}
                </div>
              );
            })}
          </div>
        </Section>

        <Section
          id="proyectos"
          title="Proyectos destacados"
          subtitle="Producto real + dashboards + contribuciones freelance"
        >
          <div className="grid grid3">
            {projects.map((p) => (
              <div className="card" key={p.title}>
                <div
                  className="row"
                  style={{ justifyContent: "space-between" }}
                >
                  <h3 className="cardTitle" style={{ margin: 0 }}>
                    {p.title}
                  </h3>
                  <span className="tag">{p.tag}</span>
                </div>
                <p className="cardDesc" style={{ marginTop: 10 }}>
                  {p.desc}
                </p>

                <div className="tags">
                  {p.tech.map((t) => (
                    <span className="tag" key={t}>
                      {t}
                    </span>
                  ))}
                </div>

                {p.links?.length ? (
                  <div style={{ marginTop: 12 }} className="row">
                    {p.links.map((l) => (
                      <ExternalLink key={l.href} href={l.href}>
                        {l.label}
                      </ExternalLink>
                    ))}
                  </div>
                ) : (
                  <div style={{ marginTop: 12 }} className="muted small">
                    (Proyecto interno / sin enlace público)
                  </div>
                )}
              </div>
            ))}
          </div>
        </Section>

        <Section
          id="habilidades"
          title="Habilidades"
          subtitle="Separadas por área (programación, infra y soporte)"
        >
          <div className="grid grid1 skillsGrid">
            {skillGroups.map((g) => {
              const slug = g.title
                .toLowerCase()
                .replace(/\s+/g, "-")
                .replace(/\//g, "-")
                .replace(/[^\w-]/g, "");

              return (
                <div className={`card skillCard skill-${slug}`} key={g.title}>
                  <h3 className="cardTitle">{g.title}</h3>
                  <p className="cardDesc">{g.desc}</p>

                  <div className="tags">
                    {g.items.map((s) => (
                      <span className="tag" key={s}>
                        {s}
                      </span>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </Section>

        <Section
          id="formacion"
          title="Formación"
          subtitle="Estudios, cursos y aprendizaje continuo"
        >
          <div className="grid grid1">
            <div className="card">
              <h3 className="cardTitle">Estudios y plataformas</h3>
              <ul className="list">
                {education.map((e) => (
                  <li key={e.title} className="listItem">
                    <div className="listMain">{e.title}</div>
                    <div className="muted small">
                      {e.place} · {e.period}
                      {e.note ? ` · ${e.note}` : ""}
                    </div>
                  </li>
                ))}
              </ul>
            </div>

            <div className="card">
              <h3 className="cardTitle">Cursos y certificados</h3>
              <p className="cardDesc">
                Compilación de cursos (Platzi y afines) + certificados.
              </p>

              <div className="badgeGrid" style={{ marginTop: 12 }}>
                {courses.map((c, idx) => (
                  <a
                    key={c.href + idx}
                    className="badgeLink"
                    href={c.href}
                    target="_blank"
                    rel="noreferrer"
                  >
                    <div className="badgeLinkTitle">{c.label}</div>
                    <div className="badgeLinkMeta">
                      {c.provider} · Ver diploma{" "}
                      <span className="muted">↗</span>
                    </div>
                  </a>
                ))}
              </div>

              {pdfCertificates?.length ? (
                <>
                  <div className="muted" style={{ fontWeight: 800 }}>
                    PDFs
                  </div>
                  <div className="stack" style={{ marginTop: 10 }}>
                    {pdfCertificates.map((p) => (
                      <div className="stackRow" key={p.href}>
                        <span className="tag">PDF</span>
                        <ExternalLink href={p.href}>{p.label}</ExternalLink>
                      </div>
                    ))}
                  </div>
                </>
              ) : null}
            </div>

            <div className="card">
              <h3 className="cardTitle">Insignias</h3>
              <div className="badgeGrid">
                {badges.map((b) => (
                  <a
                    key={b.href}
                    className="badgeLink"
                    href={b.href}
                    target="_blank"
                    rel="noreferrer"
                  >
                    <div className="badgeLinkTitle">{b.title}</div>
                    <div className="badgeLinkMeta">
                      Ver en Credly <span className="muted">↗</span>
                    </div>
                  </a>
                ))}
              </div>
            </div>
          </div>
        </Section>

        <Section id="contacto" title="Contacto" subtitle="¿Hablamos?">
          <div className="grid grid1">
            <div className="card">
              <h3 className="cardTitle">Directo</h3>

              <div className="contactItem">
                <span className="contactIcon">
                  <FiMail />
                </span>
                <a
                  className="link"
                  href={`mailto:${profile.contact.emailPrimary}`}
                >
                  {profile.contact.emailPrimary}{" "}
                  <span className="muted">↗</span>
                </a>
              </div>

              <div className="contactItem">
                <span className="contactIcon">
                  <FiMail />
                </span>
                <a
                  className="link"
                  href={`mailto:${profile.contact.emailSecondary}`}
                >
                  {profile.contact.emailSecondary}{" "}
                  <span className="muted">↗</span>
                </a>
              </div>

              <div className="contactItem">
                <span className="contactIcon">
                  <FiPhone />
                </span>
                <a
                  className="link"
                  href={`tel:${profile.contact.whatsapp.replace(/\s/g, "")}`}
                >
                  {profile.contact.whatsapp} <span className="muted">↗</span>
                </a>
              </div>

              <div style={{ marginTop: 14 }} className="row">
                <IconButton
                  variant="primary"
                  href={`https://wa.me/${profile.contact.whatsapp.replace(/\D/g, "")}?text=${encodeURIComponent(
                    "Hola Juan, vi tu portafolio y quiero hablar contigo.",
                  )}`}
                  icon={<FaWhatsapp />}
                >
                  WhatsApp
                </IconButton>

                <IconButton href={profile.contact.github} icon={<FiGithub />}>
                  GitHub
                </IconButton>

                <IconButton
                  href={profile.contact.linkedin}
                  icon={<FiLinkedin />}
                >
                  LinkedIn
                </IconButton>
              </div>
            </div>
          </div>
        </Section>

        <footer className="footer">
          <div className="container">
            <div className="small">
              © {new Date().getFullYear()} {profile.name}. Hecho con Vite +
              React.
            </div>
          </div>
        </footer>

        <a
          className="floatingWA"
          href={`https://wa.me/${profile.contact.whatsapp.replace(/\D/g, "")}?text=${encodeURIComponent(
            "Hola Juan, vi tu portafolio y quiero hablar contigo.",
          )}`}
          target="_blank"
          rel="noreferrer"
          aria-label="Escríbeme por WhatsApp"
        >
          <FaWhatsapp />
        </a>
      </main>
      <CVModal
        open={cvOpen}
        onClose={() => setCvOpen(false)}
        pdfUrl={profile.cta.cv.href}
      />
    </>
  );
}
