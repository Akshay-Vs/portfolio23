import React from "react";
import Nav from "@components/Nav";
import Projects from "@/shared/components/Projects";

import "./Home.scss";
import Hero from "@/shared/components/Hero";
const Home = () => {
  return (
    <>
      <Nav />
      <main className="w-screen">
        <Hero />
        <Projects />
      </main>
    </>
  );
};

export default Home;
