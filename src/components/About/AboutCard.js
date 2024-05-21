import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Card from "react-bootstrap/Card";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
      <h1 className="project-heading">
          More About me ...
        </h1>
        <Row>
          
            <Col md={6} className="home-header">
            
            <p>
            Driven by a love of learning and crafting innovative solutions, I'm a full-stack software engineer with a strong foundation in problem-solving and a Master's degree from Columbia University (building on my CS degree from the University of Pune).
</p>

<p>
Beyond coding, I thrive in collaborative environments. During my undergraduate studies, I ignited a passion for knowledge sharing by teaching programming concepts to freshmen. This enthusiasm extended to the Rotaract Club, where I empowered underprivileged students by guiding them towards CS careers.
</p>

{/* <p>
My professional journey started with two years of work experience before pursuing my Masters. In that time, I honed my skills in identifying problems, analyzing their root causes, and devising creative solutions. I also took on responsibilities in coordinating with third-party vendors to ensure seamless software delivery.

</p> */}
              </Col>
              <Col md={6} className="home-header">
            
<p>
My professional experience (2+ years) combines technical expertise with leadership. I excel at identifying and solving problems while ensuring seamless software delivery through vendor coordination. Additionally, I enjoy fostering learning – onboarding interns and facilitating knowledge transfer among peers fuels my desire to collaborate and grow.
</p>

<p>
Committed to continuous learning, I stay ahead of the curve. This, coupled with my deep understanding of project management, software development processes, and programming languages, allows me to make a meaningful impact in the ever-evolving tech industry.
</p>
<p>
Ready to collaborate, innovate, and drive success!
</p>

            </Col>

          </Row>

        {/* <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
          Hi there!
<p>
I'm Ritika Deshpande, a dynamic full-stack software engineer fueled by a passion for problem-solving and crafting innovative solutions. My journey in technology began with a Bachelor's degree in Computer Science from the University of Pune, India, and it's currently continuing with a Masters at Columbia University.

</p>

<p>
During my undergraduate studies, I found joy in sharing knowledge, conducting introductory sessions on object-oriented programming and data structures. Teaching languages like C++ and Java to incoming freshmen to empower their journey was immensely rewarding. Additionally, as part of the Rotaract Club, I extended this knowledge to underprivileged students, offering guidance on career opportunities in Computer Science.
</p>
<p>
My professional journey started with two years of work experience before pursuing my Masters. In that time, I honed my skills in identifying problems, analyzing their root causes, and devising creative solutions. I also took on responsibilities in coordinating with third-party vendors to ensure seamless software delivery.

</p>
<p>
Moreover, I've always been keen on fostering learning environments. Assisting interns in onboarding and training them on necessary technologies was a natural extension of this passion. Facilitating doubt solving and knowledge transfer among peers has always been an integral part of my approach.

</p>

<p>
What sets me apart is my commitment to continuous learning. I stay updated with the latest methodologies and best practices, ensuring that my contributions remain relevant and effective in an ever-evolving industry. With a deep passion for project management and a solid understanding of software development processes, programming languages, and relevant technologies, I am eager to leverage my skills and insights to drive success in any endeavor.

</p>
<p>
I'm excited about the opportunity to collaborate, innovate, and make a meaningful impact in the world of technology.

</p>

</p>
        </blockquote> */}
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
