import type { Metadata } from "next";
import { SiteHeader } from "../site-header";

export const metadata: Metadata = {
  title: "Blog — Joshua Placidi",
  description: "Writing by Joshua Placidi on machine learning and artificial intelligence.",
};

const posts = [
  {
    title: "A Life Is Worth 10ˣ Tokens",
    description: "Scaling to human intelligence.",
    year: "2026",
    href: "https://joshuaplacidi.substack.com/p/a-life-is-worth-10x-tokens",
  },
  {
    title: "How to Read an Artificial Brain",
    description: "An introduction to attribution graphs (Anthropic 2025).",
    year: "2025",
    href: "https://joshuaplacidi.substack.com/p/attribution-graphs-how-to-read-an",
  },
];

export default function Blog() {
  return (
    <>
      <SiteHeader current="blog" />
      <main className="page shell">
        <div className="pageTitle">
          <h1>Writings</h1>
        </div>
        <div className="entryList">
          {posts.map((post, index) => (
            <a
              className="entry blogEntry"
              href={post.href}
              target="_blank"
              rel="noreferrer"
              key={post.title}
            >
              <span className="entryNumber">
                {String(posts.length - index).padStart(2, "0")}
              </span>
              <div className="entryMain">
                <h2>{post.title}</h2>
                <p>{post.description}</p>
              </div>
              <p className="entryMeta">{post.year}</p>
              <span className="entryArrow">↗</span>
            </a>
          ))}
        </div>
      </main>
    </>
  );
}
