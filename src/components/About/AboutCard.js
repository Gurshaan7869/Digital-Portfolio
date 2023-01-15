import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am{" "}
            <span className="purple">Gurshaan Singh Gill </span>
            from <span className="purple"> Indore, India.</span>
            <br />I am a 4th year student pursuing B.Tech in Computer Science
            and Engineering at VIT Bhopal.
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing Competitive FPS Games
            </li>
            <li className="about-activity">
              <ImPointRight /> Technology Enthusiast
            </li>
            <li className="about-activity">
              <ImPointRight /> Vocalist
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "One person can change outcomes of thousands!"{" "}
          </p>
          <footer className="blockquote-footer">Gurshaan</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
