import React from "react";
import AnimateComponent from "../components/AnimateComponent";
import ItemCard from "../components/ItemCard";

export default function Experience(props) {
  return (
    <div className="section white-section">
      <h1 className="title">Experience</h1>
      <AnimateComponent
        animationStyle={"animated-on-visible-appear"}
      >
      <ItemCard title={"Infinite Campus - Full Stack Software Engineer"} description={"Software Engineer"} isDesktop={props.isDesktop} />
      </AnimateComponent>
      <AnimateComponent
        animationStyle={"animated-on-visible-appear"}
      >
      <ItemCard title={"Alina Health - Service Technician II"} description={"desciption"} isDesktop={props.isDesktop} />
      </AnimateComponent>
    </div>
  );
}
