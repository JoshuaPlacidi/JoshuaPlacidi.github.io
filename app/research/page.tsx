import type { Metadata } from "next";
import { SiteHeader } from "../site-header";

export const metadata: Metadata = {
  title: "Research — Joshua Placidi",
  description: "Selected machine learning research by Joshua Placidi.",
};

const papers: {
  title: string;
  authors: string[];
  venue: string;
  year: string;
  href?: string;
  note?: string;
  status?: string;
}[] = [
  {
    title: "Sequence Composition in EHR Foundation Model Pretraining",
    authors: ["Joshua Placidi", "Inigo Stibbe", "Alfred J. Balston", "Marek Rei", "A. Aldo Faisal"],
    venue: "Preprint (under review)",
    year: "2026",
    href: "https://arxiv.org/abs/2610.16878",
  },
  {
    title: "Block Diffusion for Longitudinal EHR: Accuracy, Efficiency, and Representation Trade-offs",
    authors: ["Ashvin Gupta", "Joshua Placidi", "Brendan Clifford Delaney", "Alessandra Russo"],
    venue: "WMHS Workshop @ NeurIPS",
    year: "2026",
    href: "https://arxiv.org/abs/2610.29533",
  },
  {
    title: "Constructing and Validating Memorisation Audits for EHR Foundation Models",
    authors: ["Inigo Stibbe", "Joshua Placidi", "Padmanabhan Ramnarayan", "A. Aldo Faisal"],
    venue: "InfPriv Workshop @ NeurIPS",
    year: "2026",
    status: "Camera-ready forthcoming",
  },
  {
    title: "Pretraining EHR Foundation Models with Patient-Aware Sampling",
    authors: ["Joshua Placidi", "Yuxuan Liu", "Jinpei Han", "Marek Rei", "A. Aldo Faisal"],
    venue: "SD4H Workshop @ ICML",
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
    venue: "SD4H Workshop @ ICML",
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
          <h1>Publications</h1>
        </div>
        <div className="entryList">
          {papers.map((paper, index) => {
            const Entry = paper.href ? "a" : "article";
            return (
              <Entry
                className="entry"
                {...(paper.href ? { href: paper.href, target: "_blank", rel: "noreferrer" } : {})}
                key={paper.title}
              >
                <span className="entryNumber">
                  {String(papers.length - index).padStart(2, "0")}
                </span>
                <div className="entryMain">
                  <h2>{paper.title}</h2>
                  <p className="entryAuthors">
                    <Authors names={paper.authors} />
                    {paper.note ? (
                      <span className="authorNote">
                        <sup>*</sup>
                        {" "}
                        {paper.note.replace(/^\*/, "")}
                      </span>
                    ) : null}
                  </p>
                </div>
                <p className="entryMeta">
                  {paper.venue} · {paper.year}
                  {paper.status ? <><br />{paper.status}</> : null}
                </p>
                {paper.href ? <span className="entryArrow">↗</span> : null}
              </Entry>
            );
          })}
        </div>
      </main>
    </>
  );
}
