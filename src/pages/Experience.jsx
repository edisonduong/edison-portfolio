import React from "react";
import AnimateComponent from "../components/AnimateComponent";
import ExperienceItem from "../components/ExperienceItem";

export default function Experience(props) {
  return (
    <div className="section white-section">
      <h1 className="title">Experience</h1>
      <AnimateComponent
        animationStyle={"animated-on-visible-appear"}
      >
        <ExperienceItem isDesktop={props.isDesktop} />
      </AnimateComponent>
      <AnimateComponent
        animationStyle={"animated-on-visible-appear"}
      >
        <ExperienceItem isDesktop={props.isDesktop} />
      </AnimateComponent>
    </div>
  );
}
