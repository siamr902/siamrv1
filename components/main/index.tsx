import React from "react";
import Contact from "./Contact";
import Hero from "./Hero";
import Projects from "./Projects";
import Technologies from "./Technologies";

const Content = () => {
  return (
    <>
      <main className="mt-20 pb-14">
        <Hero />
        <Technologies />
        <section id="projects">
          <Projects />
        </section>
        <section id="contact">
          <Contact />
        </section>
      </main>
    </>
  );
};

export default Content;
