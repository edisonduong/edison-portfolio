import React from "react";
import AnimateComponent from "../components/AnimateComponent";

export default function About() {
  return (
    <div className="gray-section section">
      <h1 className="title">ABOUT ME</h1>
      <AnimateComponent
        animationStyle={"animated-on-visible-appear"}
      >
        <div style={{ textAlign: "center" }}>
          <p>
            Hi there! I'm a Fullstack Engineer with extensive experience in
            React and Grails.
          </p>
          <p>
            On the front-end, I specialize in building interactive user
            interfaces and single-page applications using React. I am proficient
            in both functional and class components, and have experience with
            Redux, Context API, and React Router. I am also familiar with modern
            front-end tools and technologies such as Webpack, Babel, and Jest.
          </p>
          <p>
            On the back-end, I specialize in building RESTful APIs and web
            applications using Grails, a powerful framework based on Groovy
            language that runs on the Java Virtual Machine (JVM). I am
            experienced in all aspects of the Grails framework, including its
            ORM (GORM), database migrations, and security features. I am also
            proficient in writing SQL queries and interacting with databases
            such as MySQL and PostgreSQL.
          </p>
          <p>
            As a Fullstack Engineer, I pride myself on my ability to collaborate
            with designers, project managers, and other developers to create
            high-quality software solutions that meet business requirements. I
            am familiar with Agile methodologies such as Scrum and Kanban, and
            am comfortable working in both small and large teams.
          </p>
          <p>
            In addition to React and Grails, I have experience with other
            technologies such as Node.js, Express, MongoDB, and AWS services
            such as EC2 and S3.
          </p>
          <p>
            If you're looking for a Fullstack Engineer who can take on complex
            projects and deliver quality results, feel free to get in touch!
          </p>
        </div>
      </AnimateComponent>
    </div>
  );
}
