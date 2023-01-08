import React from "react";
import Blog from "./blog/Blog";
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
        <section id="articles">
          <Blog />
        </section>
        <section id="contact">
          <Contact />
        </section>
      </main>
    </>
  );
};

export default Content;
