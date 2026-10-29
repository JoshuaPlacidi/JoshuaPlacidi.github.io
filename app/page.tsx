import type { Metadata } from "next";
import { SiteHeader } from "./site-header";

export const metadata: Metadata = {
  title: "Joshua Placidi",
  description: "Machine learning researcher and builder based in London.",
};

const updates: { when: string; date: string; text: string; href?: string }[] = [
  {
    when: "October 2026",
    date: "2026-10-25",
    text: "🧬 Hackathon: Autonomous AI Research for Protein Binding Prediction",
    href: "https://joshuaplacidi.com/auto-research-protein-binding/",
  },
  {
    when: "October 2026",
    date: "2026-10",
    text: "🇦🇺 Two Papers Accepted: WMHS and InfPriv Workshops @ NeurIPS 2026",
    href: "/research",
  },
  {
    when: "July 2026",
    date: "2026-07",
    text: "🇰🇷 Two Papers Accepted: SD4H Workshop @ ICML 2026",
    href: "https://lnkd.in/p/eqGGqVHN",
  },
  {
    when: "May 2026",
    date: "2026-05",
    text: "🎙️ Talk: Nightingale AI",
    href: "https://www.linkedin.com/posts/brainandbehaviour_nightingaleai-activity-7458372639477256193-CLl7",
  },
  {
    when: "March 2026",
    date: "2026-03",
    text: "✍️ New Blog: A Life is Worth 10^x tokens",
    href: "https://joshuaplacidi.substack.com/p/a-life-is-worth-10x-tokens",
  },
  {
    when: "June 2025",
    date: "2025-06",
    text: "✍️ New Blog: How to Read an Artificial Brain",
    href: "https://joshuaplacidi.substack.com/p/attribution-graphs-how-to-read-an",
  },
  {
    when: "April 2025",
    date: "2025-04",
    text: "🎓 Started PhD at Imperial College London",
    href: "https://lnkd.in/p/ecp7xvzP",
  },
];

export default function Home() {
  return (
    <>
      <SiteHeader current="home" />
      <main className="page shell">
        <section className="intro">
          <div className="introContent">
            <div className="introCopy">
              <p>
                I am a PhD researcher in the Brain and Behaviour Lab at Imperial
                College London, supervised by Aldo Faisal and Marek Rei. My
                research explores how self-supervised learning can be applied
                to and scaled across medical data using generative foundation
                models.
              </p>
              <p>
                Previously, I was a Senior Machine Learning Engineer at Better
                Origin, a biotechnology startup building robotic insect farms
                that turn food waste into protein. I hold an MSc in Artificial
                Intelligence from the University of Edinburgh and a BSc in
                Computer Science from Swansea University, with additional
                experience across academic research and industry.
              </p>
            </div>
          </div>
        </section>
        <section className="updates" aria-labelledby="updates-heading">
          <h2 id="updates-heading">Recent</h2>
          <ul className="updateList">
            {updates.map((update) => {
              const body = (
                <>
                  <time dateTime={update.date}>{update.when}</time>
                  <span>{update.text}</span>
                </>
              );
              if (!update.href) {
                return (
                  <li className="update" key={update.text}>
                    {body}
                  </li>
                );
              }
              const external = update.href.startsWith("http");
              return (
                <li key={update.text}>
                  <a
                    className="update"
                    href={update.href}
                    {...(external ? { target: "_blank", rel: "noreferrer" } : {})}
                  >
                    {body}
                  </a>
                </li>
              );
            })}
          </ul>
        </section>
      </main>
    </>
  );
}
