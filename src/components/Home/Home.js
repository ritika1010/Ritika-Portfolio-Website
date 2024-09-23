import React, { useState } from "react";
import { Container, Row, Col, Image, Card } from "react-bootstrap";
import { FaEnvelope, FaPhone, FaLinkedinIn, FaGithub, FaMapMarked, FaUserFriends } from "react-icons/fa";
import additionalImage from "../../Assets/profile.jpeg";


function Home() {
  const [shuffleKey, setShuffleKey] = useState(0);

  const handleCardClick = () => {
    setShuffleKey((prevKey) => prevKey + 1);
  };

  return (
    <section>
      <Container fluid className="home-section" id="home">
        <Container className="home-content">
          <Row className="align-items-center">
            <Col md={6} sm={12} className="home-header">
              <div className="name-container">
                <h1 style={{ paddingBottom: 15 }} className="heading">
                  
                  Ritika Deshpande
                </h1>
                <h1 className="heading-name">
                  <strong className="main-name">
                  Solving Problems, One Line at a Time...
                  </strong>
                </h1>

                <p>
                  I'm a code enthusiast passionate about turning tech troubles into user-friendly solutions! With a solid background in software development, machine learning, and cloud computing, I love crafting innovative applications that streamline processes and spark joy. From finance to data analytics, I find the sweet spot where technology meets creativity. Actively seeking Full-time Software Engineering opportunities for 2025—let’s debug the world together, one line of code at a time!
                </p>

                <div className="contact-info" style={{ marginTop: "20px" }}>
                  <p>
                    <FaMapMarked/>: 
                    New York City
                  </p>
                  <p>
                    <FaEnvelope />
                    <a href="mailto:rgd2127@columbia.edu" style={{ marginLeft: "5px" }}>rgd2127@columbia.edu</a>
                  </p>
                  <p>
                    <FaPhone />
                    <a href="tel:+16463694576" style={{ marginLeft: "5px" }}>(646) 369-4576</a>
                  </p>
                  <p>
                    <FaLinkedinIn />
                    <a href="https://linkedin.com/in/ritikadeshpande/" target="_blank" rel="noopener noreferrer" style={{ marginLeft: "5px" }}>linkedin.com/in/ritikadeshpande/</a>
                  </p>
                  <p>
                    <FaGithub />
                    <a href="https://github.com/ritika1010" target="_blank" rel="noopener noreferrer" style={{ marginLeft: "5px" }}>github.com/ritika1010</a>
                  </p>
                  <p>
                    <FaUserFriends />: Rewriting The Code <a href="https://rewritingthecode.org/" target="_blank" rel="noopener noreferrer" style={{ marginLeft: "5px" }}>RTC</a>, AnitaB <a href="https://anitaB.org" target="_blank" rel="noopener noreferrer" style={{ marginLeft: "5px" }}>AnitaB.org</a>
                  </p>
                </div>

                <Card
                  style={{ cursor: "pointer", padding: "1px", marginTop: "20px" }}
                  onClick={handleCardClick}
                  className="border-0"
                >
                  {/* <Card.Body>
                    <SimpleWordcloud key={shuffleKey} />
                  </Card.Body> */}
                </Card>
              </div>
            </Col>
            <Col md={6} sm={12} className="text-center">
              <Image
                src={additionalImage}
                fluid
                style={{
                  maxHeight: "73%",
                  maxWidth: "73%",
                  objectFit: "contain",
                }}
              />
            </Col>
          </Row>
        </Container>
      </Container>
    </section>
  );
}

export default Home;
