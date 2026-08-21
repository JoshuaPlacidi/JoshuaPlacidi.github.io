type PageName = "home" | "research" | "blog";

const socialLinks = [
  { label: "LinkedIn", href: "https://www.linkedin.com/in/joshua-placidi/" },
  {
    label: "Google Scholar",
    href: "https://scholar.google.com/citations?user=4_GP4xAAAAAJ&hl=en",
  },
  { label: "GitHub", href: "https://github.com/JoshuaPlacidi" },
];

export function SiteHeader({ current }: { current: PageName }) {
  return (
    <header className="siteHeader shell">
      <div className="profile">
        <a href="/" aria-label="Joshua Placidi, home">
          <img
            className="profilePhoto"
            src="/me.jpg"
            alt="Portrait of Joshua Placidi"
            width="128"
            height="128"
          />
        </a>
        <div>
          <a className="profileName" href="/">
            Joshua Placidi
          </a>
          <div className="socialLinks">
            {socialLinks.map((link) => (
              <a href={link.href} target="_blank" rel="noreferrer" key={link.label}>
                {link.label}
              </a>
            ))}
          </div>
        </div>
      </div>

      <nav className="pageNav" aria-label="Primary navigation">
        <a className={current === "home" ? "active" : ""} href="/">Home</a>
        <a className={current === "research" ? "active" : ""} href="/research/">Research</a>
        <a className={current === "blog" ? "active" : ""} href="/blog/">Blog</a>
        <a href="/Joshua-Placidi-CV.pdf" target="_blank" rel="noreferrer">CV ↗</a>
      </nav>
    </header>
  );
}
