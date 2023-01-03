import React from "react";
import Contact from "./contact/Contact";
import Hero from "./hero/Hero";
import Projects from "./projects/Projects";
import Skills from "./skills/Skills";

const Content = () => {
  return (
    <>
      <main className="mt-20 pb-14">
        <section id="hero">
          <Hero />
        </section>
        <section id="skills">
          <Skills />
        </section>
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
