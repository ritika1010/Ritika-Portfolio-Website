import React, { useState } from "react";
import { Container, Row, Col, Image, Card } from "react-bootstrap";
import additionalImage from "../../Assets/ProfilePic.jpeg";
import SimpleWordcloud from "./WordCloud";
import Projects from "../Projects/Projects";


function Home() {
  const [shuffleKey, setShuffleKey] = useState(0);

  const handleCardClick = () => {
    setShuffleKey((prevKey) => prevKey + 1);
  };

  return (
    <section>
      <Container fluid className="home-section" id="home">
        <Container className="home-content">
          <Row>
            <Col md={7} className="home-header">
                  <div className="name-container">
                    <h1 style={{ paddingBottom: 15 }} className="heading">
                      Ritika Deshpande
                    </h1>
                    <h1 className="heading-name">
                      <strong className="main-name">
                        Your Passionate Software Innovator
                      </strong>
                    </h1>
                    <Card style={{ cursor: "pointer", padding: "1px" , marginRight: "50px"}} onClick={handleCardClick} className="border-0" >
                      <Card.Body > 
                        <SimpleWordcloud key={shuffleKey} />
                      </Card.Body>
                    </Card>
                  </div>
            </Col>
            <Col md={5} className="additional-image">
              <Row>
                <Col>
                  <Image src={additionalImage} fluid style={{  height: "500px", width: "auto" }} />
                </Col>
              </Row>
            </Col>
          </Row>
          <Projects className="custom-projects"></Projects>
        </Container>
      </Container>
    </section>
  );
}

export default Home;
