import React from 'react'
import AnimateComponent from "../components/AnimateComponent";
import ItemCard from "../components/ItemCard";

export default function Skills(props) {
  return (
    <div className="section white-section">
      <h1 className="title">Skills</h1>
      <AnimateComponent
        animationStyle={"animated-on-visible-appear"}
      >
      <ItemCard title={"React JS"} isDesktop={props.isDesktop} />
      </AnimateComponent>
      <AnimateComponent
        animationStyle={"animated-on-visible-appear"}
      >
        <ItemCard title={"Grails"} isDesktop={props.isDesktop} />
      </AnimateComponent>
    </div>
  )
}
