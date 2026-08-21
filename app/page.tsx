import type { Metadata } from "next";
import { SiteHeader } from "./site-header";

export const metadata: Metadata = {
  title: "Joshua Placidi",
  description: "Machine learning researcher and builder based in London.",
};

export default function Home() {
  return (
    <>
      <SiteHeader current="home" />
      <main className="page shell">
        <section className="intro">
          <div className="introContent">
            <h1>Machine learning researcher building (artificially) intelligent systems to solve hard problems efficiently.</h1>
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
      </main>
    </>
  );
}
