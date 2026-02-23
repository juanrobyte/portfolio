import "./styles.css";
import { useEffect, useMemo, useState } from "react";
import { CONTENT } from "./i18n/content";
import { useLang } from "./i18n/i18n.jsx";
import { Section } from "./components/Section";
import yoImg from "./assets/Yo.jpg";
import { FiMail, FiPhone, FiGithub, FiLinkedin, FiMenu, FiX } from "react-icons/fi";
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
  const { lang, setLang } = useLang();
  const t = useMemo(() => CONTENT[lang] || CONTENT.es, [lang]);

  const profile = t.profile;
  const highlights = t.highlights;
  const experience = t.experience;
  const projects = t.projects;
  const skillGroups = t.skillGroups;
  const education = t.education;
  const courses = t.courses;
  const pdfCertificates = t.pdfCertificates;
  const badges = t.badges;

  const [cvOpen, setCvOpen] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  // SEO title
  useEffect(() => {
    document.title = t.seo?.title || "Portfolio";
  }, [t.seo?.title]);

  // Close mobile menu when resizing to desktop (>1024)
  useEffect(() => {
    const onResize = () => {
      if (window.innerWidth > 1024) setMenuOpen(false);
    };
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  const closeMenu = () => setMenuOpen(false);

  const openCV = (e) => {
    if (e) e.preventDefault();
    closeMenu();
    setCvOpen(true);
  };

  return (
    <>
      {/* Navbar */}
      <header className="nav">
        <div className="container">
          <div className="navInner">
            {/* Mobile menu overlay (shows when menuOpen=true) */}
            {menuOpen ? (
              <div className="mobileMenu" onClick={closeMenu}>
                <div
                  className="mobileMenuPanel"
                  onClick={(e) => e.stopPropagation()}
                >
                  <a className="btn" href="#experiencia" onClick={closeMenu}>
                    {t.ui.nav.experience}
                  </a>
                  <a className="btn" href="#proyectos" onClick={closeMenu}>
                    {t.ui.nav.projects}
                  </a>
                  <a className="btn" href="#habilidades" onClick={closeMenu}>
                    {t.ui.nav.skills}
                  </a>
                  <a className="btn" href="#formacion" onClick={closeMenu}>
                    {t.ui.nav.education}
                  </a>
                  <a className="btn" href="#contacto" onClick={closeMenu}>
                    {t.ui.nav.contact}
                  </a>

                  <div className="langPill" aria-label="Language">
                    <button
                      type="button"
                      className={`langBtn ${lang === "es" ? "active" : ""}`}
                      onClick={() => setLang("es")}
                    >
                      {t.ui.langToggle.es}
                    </button>
                    <button
                      type="button"
                      className={`langBtn ${lang === "en" ? "active" : ""}`}
                      onClick={() => setLang("en")}
                    >
                      {t.ui.langToggle.en}
                    </button>
                  </div>

                  <a
                    className="btn btnPrimary"
                    href={profile.cta.cv.href}
                    onClick={openCV}
                  >
                    {t.ui.nav.resume}
                  </a>
                </div>
              </div>
            ) : null}

            {/* Brand */}
            <div className="brand">
              <span className="brandBadge">Juanrobyte</span>
            </div>

            {/* Desktop nav (visible only >1024 by CSS) */}
            <nav className="navLinks">
              <a className="btn" href="#experiencia">
                {t.ui.nav.experience}
              </a>
              <a className="btn" href="#proyectos">
                {t.ui.nav.projects}
              </a>
              <a className="btn" href="#habilidades">
                {t.ui.nav.skills}
              </a>
              <a className="btn" href="#formacion">
                {t.ui.nav.education}
              </a>
              <a className="btn" href="#contacto">
                {t.ui.nav.contact}
              </a>

              <div className="langPill" aria-label="Language">
                <button
                  type="button"
                  className={`langBtn ${lang === "es" ? "active" : ""}`}
                  onClick={() => setLang("es")}
                >
                  {t.ui.langToggle.es}
                </button>
                <button
                  type="button"
                  className={`langBtn ${lang === "en" ? "active" : ""}`}
                  onClick={() => setLang("en")}
                >
                  {t.ui.langToggle.en}
                </button>
              </div>

              <a
                className="btn btnPrimary"
                href={profile.cta.cv.href}
                onClick={(e) => {
                  e.preventDefault();
                  setCvOpen(true);
                }}
              >
                {t.ui.nav.resume}
              </a>
            </nav>

            {/* Hamburger (visible only <=1024 by CSS) */}
            <button
              className="navToggle"
              type="button"
              aria-label={menuOpen ? "Cerrar menú" : "Abrir menú"}
              aria-expanded={menuOpen}
              onClick={() => setMenuOpen((v) => !v)}
            >
              {menuOpen ? <FiX size={20} /> : <FiMenu size={20} />}
            </button>
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
              </div>

              <div className="heroAvatarWrap">
                <img
                  src={yoImg}
                  alt={lang === "es" ? "Foto de Juan Diego" : "Juan Diego photo"}
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
          title={t.ui.sections.experience.title}
          subtitle={t.ui.sections.experience.subtitle}
        >
          <div className="grid grid1 expGrid">
            {experience.map((job) => {
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
          title={t.ui.sections.projects.title}
          subtitle={t.ui.sections.projects.subtitle}
        >
          <div className="grid grid3">
            {projects.map((p) => (
              <div className="card" key={p.title}>
                <div className="row" style={{ justifyContent: "space-between" }}>
                  <h3 className="cardTitle" style={{ margin: 0 }}>
                    {p.title}
                  </h3>
                  <span className="tag">{p.tag}</span>
                </div>

                <p className="cardDesc" style={{ marginTop: 10 }}>
                  {p.desc}
                </p>

                <div className="tags">
                  {p.tech.map((tt) => (
                    <span className="tag" key={tt}>
                      {tt}
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
                    {t.ui.sections.projects.internal}
                  </div>
                )}
              </div>
            ))}
          </div>
        </Section>

        <Section
          id="habilidades"
          title={t.ui.sections.skills.title}
          subtitle={t.ui.sections.skills.subtitle}
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
          title={t.ui.sections.education.title}
          subtitle={t.ui.sections.education.subtitle}
        >
          <div className="grid grid1">
            <div className="card">
              <h3 className="cardTitle">{t.ui.sections.education.studiesTitle}</h3>
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

            {courses?.length ? (
              <div className="card">
                <h3 className="cardTitle">{t.ui.sections.education.coursesTitle}</h3>
                <p className="cardDesc">{t.ui.sections.education.coursesDesc}</p>

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
                        {c.provider} · {t.ui.sections.education.viewDiploma}{" "}
                        <span className="muted">↗</span>
                      </div>
                    </a>
                  ))}
                </div>

                {pdfCertificates?.length ? (
                  <>
                    <div className="muted" style={{ fontWeight: 800 }}>
                      {t.ui.sections.education.pdfs}
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
            ) : null}

            {badges?.length ? (
              <div className="card">
                <h3 className="cardTitle">{t.ui.sections.education.badgesTitle}</h3>
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
                        {t.ui.sections.education.viewCredly}{" "}
                        <span className="muted">↗</span>
                      </div>
                    </a>
                  ))}
                </div>
              </div>
            ) : null}
          </div>
        </Section>

        <Section
          id="contacto"
          title={t.ui.sections.contact.title}
          subtitle={t.ui.sections.contact.subtitle}
        >
          <div className="grid grid1">
            <div className="card">
              <h3 className="cardTitle">{t.ui.sections.contact.direct}</h3>

              <div className="contactItem">
                <span className="contactIcon">
                  <FiMail />
                </span>
                <a className="link" href={`mailto:${profile.contact.emailPrimary}`}>
                  {profile.contact.emailPrimary} <span className="muted">↗</span>
                </a>
              </div>

              <div className="contactItem">
                <span className="contactIcon">
                  <FiMail />
                </span>
                <a className="link" href={`mailto:${profile.contact.emailSecondary}`}>
                  {profile.contact.emailSecondary} <span className="muted">↗</span>
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
                    t.ui.whatsappMsg,
                  )}`}
                  icon={<FaWhatsapp />}
                >
                  {t.ui.sections.contact.whatsapp}
                </IconButton>

                <IconButton href={profile.contact.github} icon={<FiGithub />}>
                  {t.ui.sections.contact.github}
                </IconButton>

                <IconButton href={profile.contact.linkedin} icon={<FiLinkedin />}>
                  {t.ui.sections.contact.linkedin}
                </IconButton>
              </div>
            </div>
          </div>
        </Section>

        <footer className="footer">
          <div className="container">
            <div className="small">
              © {new Date().getFullYear()} {profile.name}. {t.ui.footer}
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
          aria-label={t.ui.sections.contact.waAria}
        >
          <FaWhatsapp />
        </a>
      </main>

      <CVModal
        open={cvOpen}
        onClose={() => setCvOpen(false)}
        pdfUrl={profile.cta.cv.href}
        title={t.ui.cvModalTitle}
      />
    </>
  );
}