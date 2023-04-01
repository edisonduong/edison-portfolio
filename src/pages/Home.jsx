import React, {useEffect} from "react";
import About from "./About";
import useMediaQuery from "@mui/material/useMediaQuery";
import Welcome from "./Welcome";
import Experience from "./Experience";
import Footer from "./Footer";

export default function Home() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const isDesktop = useMediaQuery("(min-width:900px)");

  return (
    <>
      <div className="color-background">
        <Welcome isDesktop={isDesktop} />
      </div>
      <About />
      <Experience isDesktop={isDesktop} />
      <Footer />
    </>
  );
}
