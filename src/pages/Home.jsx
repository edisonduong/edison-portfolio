import React from "react";
import PageWrapper from "../components/PageWrapper";
import avatar from "../images/avatar.png";

export default function Home() {
  return (
    <PageWrapper>
      <div className="align-text-image">
        <span>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam non suscipit velit, condimentum tempor ipsum. Nunc suscipit, orci vitae volutpat viverra, libero erat bibendum erat, ac luctus libero orci ac massa. Vestibulum posuere commodo odio, quis molestie leo pharetra pulvinar. Nunc sit amet nisl pellentesque, fringilla odio sit amet, commodo nisi. Aenean vel ex gravida, ornare nunc ac, elementum nunc. Aenean nec odio eget felis egestas hendrerit non nec enim. Praesent nec turpis dui. Vestibulum placerat, velit eget facilisis efficitur, magna magna vehicula leo, id semper sem lectus quis lorem. Cras vestibulum hendrerit lacus, ut eleifend sem tempor vel. Vestibulum vel nibh erat.
        </span>
        <img src={avatar} alt="avatar" height="300px" />
      </div>
    </PageWrapper>
  );
}
