import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Home2 from "./Home2";
import EduCard from "./EduCard";
import columbialogo from "../../Assets/Columbia_University_Thepharmadaily.png";
import pictlogo from "../../Assets/pict.jpeg";




function Home() {
  return (
    <section>
      <Container fluid className="home-section" id="home">
        <Container className="home-content">
          <Row>
            <Col md={7} className="home-header">
              <h1 style={{ paddingBottom: 15, fontFamily: "Orpheus Pro"}} className="heading">
              Ritika Deshpande{" "}
                
              </h1>

              <h1 className="heading-name" >
                <strong className="main-name"> Your Passionate Software Innovator</strong>
              </h1>


            </Col>

          </Row>
        </Container>
      </Container>
      {/* <Home2 /> */}

      <Container>
        <h1 className="project-heading">
Education        </h1>
        <p >
          
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={6} className="project-card">

            <EduCard
              imgPath={columbialogo}
              title="Masters in Computer Science"
              description="Teaching Assistant for Databases | MLH Hackathon
              | Cloud Computing and Big Data, Advance Software Engineering, Programming Languages and Translators, Databases, Applied Machine Learning, NLP, Advance Databases, Data Visualization"

            />
          </Col>

          <Col md={6} className="project-card">
            <EduCard
              imgPath={pictlogo}
              title="Bachelors in Computer Engineering"
              description="OOP, Databases, Data Structures and Algorithms, ML, Advance Algorithms, Computer Networks | Member of ACM | Smart India Hackathon Winner 2020 | President of Rotaract Club"
            />
          </Col>

          
        </Row>
      </Container>
    </section>
  );
}

export default Home;
