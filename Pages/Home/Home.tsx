import React from "react";
import Nav from "@components/Nav";
import Projects from "@/shared/components/Projects";

import "./Home.scss";
import Hero from "@/shared/components/Hero";
import About from "@/shared/components/About";
const Home = () => {
  return (
    <>
      <Nav />
      <main className="w-screen">
        <Hero />
        <About />
        <Projects />
      </main>
    </>
  );
};

export default Home;
