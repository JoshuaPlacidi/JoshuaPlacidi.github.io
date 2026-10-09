import type { Metadata } from "next";
import { SiteHeader } from "../site-header";

export const metadata: Metadata = {
  title: "Research — Joshua Placidi",
  description: "Selected machine learning research by Joshua Placidi.",
};

const papers = [
  {
    title: "Pretraining EHR Foundation Models with Patient-Aware Sampling",
    authors: ["Joshua Placidi", "Yuxuan Liu", "Jinpei Han", "Marek Rei", "A. Aldo Faisal"],
    venue: "SD4H @ ICML",
    year: "2026",
    href: "https://arxiv.org/abs/2607.22114",
  },
  {
    title: "Autoregressive EHR Foundation Models with Multimodal Inputs",
    authors: [
      "Yuxuan Liu*",
      "Joshua Placidi*",
      "Jinpei Han*",
      "Alfred Balston",
      "Marek Rei",
      "A. Aldo Faisal",
    ],
    note: "*Equal contribution",
    venue: "SD4H @ ICML",
    year: "2026",
    href: "https://arxiv.org/abs/2607.22264",
  },
  {
    title: "Scene Text Recognition with Semantics",
    authors: ["Joshua Placidi", "Yishu Miao", "Zixu Wang", "Lucia Specia"],
    venue: "arXiv",
    year: "2022",
    href: "https://arxiv.org/abs/2210.10836",
  },
];

function Authors({ names }: { names: string[] }) {
  return names.map((name, index) => {
    const starred = name.endsWith("*");
    const label = starred ? name.slice(0, -1) : name;
    const separator = index === 0 ? "" : index === names.length - 1 ? ", and " : ", ";
    return (
      <span key={name}>
        {separator}
        {label === "Joshua Placidi" ? <strong>{label}</strong> : label}
        {starred ? <sup>*</sup> : null}
      </span>
    );
  });
}

export default function Research() {
  return (
    <>
      <SiteHeader current="research" />
      <main className="page shell">
        <div className="pageTitle">
          <h1>Selected papers</h1>
        </div>
        <div className="entryList">
          {papers.map((paper, index) => (
            <a
              className="entry"
              href={paper.href}
              target="_blank"
              rel="noreferrer"
              key={paper.title}
            >
              <span className="entryNumber">
                {String(papers.length - index).padStart(2, "0")}
              </span>
              <div className="entryMain">
                <h2>{paper.title}</h2>
                <p className="entryAuthors">
                  <Authors names={paper.authors} />
                  {"note" in paper ? (
                    <span className="authorNote">
                      <sup>*</sup>
                      {" "}
                      {paper.note.replace(/^\*/, "")}
                    </span>
                  ) : null}
                </p>
              </div>
              <p className="entryMeta">{paper.venue} · {paper.year}</p>
              <span className="entryArrow">↗</span>
            </a>
          ))}
        </div>
      </main>
    </>
  );
}
