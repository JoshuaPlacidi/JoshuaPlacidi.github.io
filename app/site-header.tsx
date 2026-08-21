import Link from "next/link";

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
        <Link href="/" aria-label="Joshua Placidi, home">
          <img
            className="profilePhoto"
            src="/me.jpg"
            alt="Portrait of Joshua Placidi"
            width="128"
            height="128"
          />
        </Link>
        <div>
          <Link className="profileName" href="/">
            Joshua Placidi
          </Link>
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
        <Link className={current === "home" ? "active" : ""} href="/">Home</Link>
        <Link className={current === "research" ? "active" : ""} href="/research">Research</Link>
        <Link className={current === "blog" ? "active" : ""} href="/blog">Blog</Link>
        <a href="/Joshua-Placidi-CV.pdf" target="_blank" rel="noreferrer">CV ↗</a>
      </nav>
    </header>
  );
}
