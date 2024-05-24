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
        <h1 className="project-heading">Experience</h1>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          {experienceData.map((experience, index) => (
            <Col md={4} className="project-card" key={index}>
              <EduCard
                imgPath={experience.imgPath}
                title={experience.title}
                link={experience.link}
              />
            </Col>
          ))}
        </Row>
      </Container>

      <Container>
        <h1 className="project-heading">Education</h1>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          {educationData.map((education, index) => (
            <Col md={6} className="project-card" key={index}>
              <EduCard
                imgPath={education.imgPath}
                title={education.title}
                link={education.link}
                description={education.description}
              />
            </Col>
          ))}
        </Row>
      </Container>

      <Container>
        <h1 className="project-heading">Professional Skillset</h1>
        <Techstack />
        <Toolstack />
      </Container>
    </Container>
  );
}

export default About;
