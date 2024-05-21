import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";


function Projects() {
  return (
    <Container fluid className="project-section">
      <Container>
        <h1 className="project-heading">
          My Projects
        </h1>
        <p >
          
        </p>

        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">

            <ProjectCard
              // imgPath={githubimage}
              title="Trivia.ai: Transforming Passive Learning into Engaging Experiences"
              description="At Trivia.ai, we recognize the all-too-common challenge students face: passive listening in lectures and a lack of true understanding of concepts. To address this, we've developed a revolutionary knowledge assessment tool aimed at accelerating the learning process: trivia.ai.

              Our platform empowers users to move beyond passive consumption of lecture slides and transcripts by instantly generating personalized quizzes and flashcards based on their input. Whether it's transcripts, lecture slides, or research papers, trivia.ai transforms this content into dynamic quizzes, ensuring an interactive and engaging learning experience. Users can track their progress over time, organizing their quiz scores and insights into courses and topics, allowing for targeted and effective learning.
              
              Leveraging Google's PaLM2 LLM model, we've achieved an impressive 95% quiz accuracy rate."
              ghLink="https://github.com/SBUmlh"
              // demoLink=""
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              // imgPath={databasimage}
              title="Voice Prescription: Revolutionizing Healthcare with Smart Technology"
              description="During the 3-day intensive virtual coding competition, Smart India Hackathon, our team embarked on a mission to innovate healthcare solutions. The result? Voice Prescription—an application designed to streamline the prescription process and enhance patient care.

              Voice Prescription leverages state-of-the-art Speech-to-Text conversion and Text Extraction technologies to accurately transcribe prescriptions dictated by doctors and physicians. By eliminating the risks associated with mispronunciations and indecipherable handwriting, our application aims to minimize medication errors and enhance patient safety.
              
              But Voice Prescription isn't just about transcription—it's about empowerment. Our platform provides a comprehensive solution for healthcare professionals, allowing them to process prescriptions, generate smart recommendations, and seamlessly share PDFs with patients."
              ghLink="https://github.com/ritika1010/Voice-Presciption-SIH-2020"
              // demoLink=""
            />
          </Col>

          <Col md={4} className="project-card">

            <ProjectCard
              // imgPath={githubimage}
              title="GitGlance: Github Contribution Discovery App"
              description="Built upon a robust serverless cloud architecture using AWS Lambda, API Gateway, SQS, and Kinesis, GitGlance ensures efficient user interactions while seamlessly integrating AWS Personalize for tailored recommendations and DynamoDB for dynamic data storage. With scalable and secure storage powered by S3, GitGlance offers users a comprehensive insight into their GitHub activity, empowering them to track their progress and achieve their goals effortlessly."
              ghLink="https://github.com/ritika1010/GitGlance"
              // demoLink=""
            />
          </Col>
          </Row>


        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">

            <ProjectCard
              // imgPath={githubimage}
              title="Car Rental Management System"
              description="The Car Rental Management System is a comprehensive database management system designed to facilitate the rental process for both car owners and renters. This platform serves as a centralized hub where car owners can list their vehicles for rental, and renters can easily access and book them according to their preferences and requirements."
              ghLink="https://github.com/ritika1010/Car-Rental-System"
              // demoLink=""
            />
          </Col>

          

          <Col md={4} className="project-card">
            <ProjectCard
              // imgPath={mealimage}
              title="MealPlannerAI: Your Smart Meal Assistant"
              description="MealPlannerAI is your go-to app for effortless meal planning, recipe creation, and grocery list generation. Powered by AI, it tailors meal plans to your preferences, creates new recipes, and generates grocery lists based on your chosen dishes. Say goodbye to mealtime stress and hello to delicious meals with MealPlannerAI."
              ghLink="https://github.com/ritika1010/Meal-Planning-AI-FE"
              // demoLink=""              
            />
          </Col>   

          <Col md={4} className="project-card">
            <ProjectCard
              // imgPath={databasimage}
              title="DBCon: Tool to Convert Conventional Database to Graph Databases"
              description="DBCon id designed to simplify the conversion process from conventional databases to graph databases. Leveraging Python libraries, we ensured a remarkable 99% data consistency in extracting metadata and records from the source database, guaranteeing accuracy and reliability throughout the conversion process.  Smooth migration of data to Neo4j, prioritizing both data integrity and cost reduction. With DBCon, you can trust that your database conversion is in capable hands, delivering unparalleled results with precision and efficiency."
              // ghLink=""
              // demoLink=""
            />
          </Col>

        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
