import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import EduCard from "../Home/EduCard";
import Techstack from "./Techstack";
import Toolstack from "./Toolstack";
import experienceData from "./ExperienceData";
import educationData from "./EducationData";

function About() {
  return (
    <Container fluid className="about-section">

      <Container>
        <h1 className="project-heading">Professional Skillset</h1>
        <Techstack />
        <Toolstack />
      </Container>
    </Container>
  );
}

export default About;
