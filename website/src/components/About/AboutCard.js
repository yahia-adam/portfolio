import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">YAHIA ABDCHAFEE Adam </span>
            from <span className="purple"> Paris, France.</span>
            <br />
            I am currently employed as a fullStack developer at By The Way.
            <br />
            I have completed my first year at Epitech and my second year at ESGI.
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Attending tech events, like VivaTech.
            </li>
            <li className="about-activity">
              <ImPointRight /> Participating in online competitions, such as Kaggle.
            </li>
            <li className="about-activity">
              <ImPointRight /> Writing tech blogs.
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Strive to build things that make a difference!"{" "}
          </p>
          <footer className="blockquote-footer">Soumyajit</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
