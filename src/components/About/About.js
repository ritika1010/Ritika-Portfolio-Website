import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import TimelineComponent from "../Home/TimelineComponent";
import SimpleWordcloud from "./WordCloud"
import Techstack from "./Techstack";
import Aboutcard from "./AboutCard";
import Toolstack from "./Toolstack";
import EduCard from "../Home/EduCard";
import columbialogo from "../../Assets/Columbia_University_Thepharmadaily.png";
import pictlogo from "../../Assets/pict.jpeg";
import dbLogo from "../../Assets/DB logo.jpeg";
import airmedLogo from "../../Assets/airmed_solutions_cover.jpeg";



function About() {
  return (
    
    <Container fluid className="about-section">
      <Container>
        <h1 className="project-heading">Experience</h1>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <EduCard
              imgPath={columbialogo}
              title="Teaching Assistant"
              // description="Teaching Assistant for Databases | MLH Hackathon | Cloud Computing and Big Data, Advance Software Engineering, Programming Languages and Translators, Databases, Applied Machine Learning, NLP, Advance Databases, Data Visualization"
              link="https://www.columbia.edu/" // Add your link here
            />
          </Col>
          <Col md={4} className="project-card">
            <EduCard
              imgPath={dbLogo}
              title="Software Engineer - Fullstack Developer"
              // description="OOP, Databases, Data Structures and Algorithms, ML, Advance Algorithms, Computer Networks | Member of ACM | Smart India Hackathon Winner 2020 | President of Rotaract Club"
              link="https://www.db.com/index?language_id=1&kid=sl.redirect-en.shortcut" // Add your link here

            />
          </Col>
          <Col md={4} className="project-card">
            <EduCard
              imgPath={airmedLogo}
              title="Android Developer Intern"
              link="https://www.linkedin.com/company/airmed-solutions/" // Add your link here

              // description="OOP, Databases, Data Structures and Algorithms, ML, Advance Algorithms, Computer Networks | Member of ACM | Smart India Hackathon Winner 2020 | President of Rotaract Club"
            />
          </Col>
        </Row>
      </Container>
      <Container></Container>
       <Container>
        <h1 className="project-heading">Education</h1>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={6} className="project-card">
            <EduCard
              imgPath={columbialogo}
              title="Masters in Computer Science"
              link="https://www.columbia.edu/" // Add your link here

              description="MLH Hackathon | Cloud Computing and Big Data, Advance Software Engineering, Programming Languages and Translators, Databases, Applied Machine Learning, NLP, Advance Databases, Data Visualization"
            />
          </Col>
          <Col md={6} className="project-card">
            <EduCard
              imgPath={pictlogo}
              title="Bachelors in Computer Engineering"
              link="https://pict.edu/" // Add your link here
              description="OOP, Databases, Data Structures and Algorithms, ML, Advance Algorithms, Computer Networks | Member of ACM | Smart India Hackathon Winner 2020 | President of Rotaract Club"
            />
          </Col>
        </Row>
      </Container>
      <Container>
        
        <h1 className="project-heading">
          Professional Skillset 
        </h1>

        <Techstack />

        <h1 className="project-heading">
        </h1>
        <Toolstack />
        <Row style={{ justifyContent: "center", padding: "0px" }}>
      
     </Row>
      </Container>
    </Container>
  );
}

export default About;
