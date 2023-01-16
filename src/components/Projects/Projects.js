import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import editor from "../../Assets/Projects/codeEditor.png";
import chatify from "../../Assets/Projects/chatify.png";
import bitsOfCode from "../../Assets/Projects/blog.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={chatify}
              title="E-commerce Site"
              description="An E-commerce site for businesses made with MERN stack. It has integration of payment services like Paypal. Products can be easily added by running a simple command and storing the information in JSON format."
              ghLink="https://github.com/Gurshaan7869/E-Commerce"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bitsOfCode}
              title="Dev-Connector"
              description="A social platform for developers to make connections and post different things. With good security practices like hashing the password, this site is pretty safe for personal information."
              ghLink="https://github.com/Gurshaan7869/Developer-Blog"
              demoLink="https://drive.google.com/file/d/15gCZ7XgudcDaKzV2q4tsgXycoYNVOE_w/view?usp=sharing"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={editor}
              title="WhatsApp Clone"
              description="A whatsapp clone created using MERN stack and Firebase. Firebase is specifically used to get realtime communication between the users as mongodb takes some time to update the data."
              ghLink="https://github.com/Gurshaan7869/WhatsApp-Clone"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bitsOfCode}
              title="Multiconnect"
              description="An automated python tool to connect computers on a network and assign some work to each computer. The computers first need to register to admin computer. Then the admin computer divides a heavy task into small fragments and assigns it to the computers on the network."
              demoLink="https://docs.google.com/document/d/1SKBUgYQ0oq95W9_tbG2osAJfokAsP6z3/edit?usp=sharing&ouid=102206497906939470568&rtpof=true&sd=true"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={editor}
              title="Superwars"
              description="A simple game with superheroes. Every superhero is assigned a random number called strength. The superheroes with most strength wins and next round starts. After all the rounds, the winner with most points win. "
              ghLink="https://gurshaan7869.github.io/project-11-superwars-css/"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
