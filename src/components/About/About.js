import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Techstack from "./Techstack";
import Aboutcard from "./AboutCard";
import Toolstack from "./Toolstack";

function About() {
  return (
    
    <Container fluid className="about-section">
       
      <Container>
      
        
        <h1 className="project-heading">
          Professional Skillset 
        </h1>

        <Techstack />

        <h1 className="project-heading">
        </h1>
        <Toolstack />
        <Row style={{ justifyContent: "center", padding: "0px" }}>
         <Aboutcard />
      
     </Row>
      </Container>
    </Container>
  );
}

export default About;
