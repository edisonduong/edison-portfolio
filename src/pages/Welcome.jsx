import React from 'react'
import AnimateComponent from '../components/AnimateComponent';
import PageWrapper from '../components/PageWrapper';
import avatar from "../images/profile_pic_1mb.jpg";

export default function Welcome(props) {
  return (
    <PageWrapper>
      <div
        className={
          props.isDesktop
            ? "welcome home-welcome-desktop"
            : "welcome home-welcome-mobile"
        }
        style={{ minHeight: "100vh" }}
      >
      <AnimateComponent animationStyle="animated-on-visible-slide-in-from-left">
        <h1>
          Hello, I'm Edison Duong
          <br />
          Fullstack Software Engineer
        </h1>
      </AnimateComponent>
        <img src={avatar} alt="avatar" />
      </div>
    </PageWrapper>
  )
}
