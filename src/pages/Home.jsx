import React from "react";
import About from "./About";
import useMediaQuery from "@mui/material/useMediaQuery";
import Welcome from "./Welcome";
import Experience from "./Experience";
import Footer from "./Footer";
import Skills from "./Skills";

export default function Home() {
  const isDesktop = useMediaQuery("(min-width:900px)");

  return (
    <>
      <section id={"home"}>
        <div className="color-background">
          <Welcome isDesktop={isDesktop} />
        </div>
      </section>
      <section id={"about"}>
        <About />
      </section>
      <section id={"experience"}>
        <Experience isDesktop={isDesktop} />
      </section>
      <section id={"skills"}>
        <Skills isDesktop={isDesktop} />
      </section>
      <Footer />
    </>
  );
}
