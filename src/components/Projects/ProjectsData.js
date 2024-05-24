// projectData.js

import ecommercelogo from "../../Assets/ecommerce.jpeg";
import mlhlogo from "../../Assets/mlh logo.png";
import sihlogo from "../../Assets/sih logo.png";
import GitglanceLogo from "../../Assets/Gitglance logo.png";
import carLogo from "../../Assets/Car logo.png";
import mealplanailogo from "../../Assets/mealPlannerai.png";
import DBCon from "../../Assets/dbcon.png";

const projectData = [
  {
    imgPath: ecommercelogo,
    title: "E-commerce Insights: Analyzing Customer Satisfaction and Product Dynamics",
    description: "Our E-commerce Insights project delved into understanding customer satisfaction and product dynamics through advanced analytics techniques. Leveraging XGBoost and Word2Vec embeddings, we attained a notable 68% accuracy and 0.85 AUC-ROC in predicting customer satisfaction ratings. Furthermore, we conducted multi-class classification to dissect the intricate relationship between business variables and customer satisfaction, mitigating class imbalances for a comprehensive analysis. Additionally, through rigorous demographic and purchase behavior analysis, we successfully delineated three distinct customer clusters with an impressive 98% accuracy, offering invaluable insights for tailored marketing strategies and product development initiatives."
  },
  {
    imgPath: mlhlogo,
    title: "Trivia.ai: Transforming Passive Learning into Engaging Experiences",
    description: "At Trivia.ai, we recognize the all-too-common challenge students face: passive listening in lectures and a lack of true understanding of concepts. To address this, we've developed a revolutionary knowledge assessment tool aimed at accelerating the learning process: trivia.ai. Our platform empowers users to move beyond passive consumption of lecture slides and transcripts by instantly generating personalized quizzes and flashcards based on their input. Whether it's transcripts, lecture slides, or research papers, trivia.ai transforms this content into dynamic quizzes, ensuring an interactive and engaging learning experience. Users can track their progress over time, organizing their quiz scores and insights into courses and topics, allowing for targeted and effective learning.",
    ghLink: "https://github.com/SBUmlh"
  },
  {
    imgPath: sihlogo,
    title: "Voice Prescription: Revolutionizing Healthcare with Smart Technology",
    description: "During the 3-day intensive virtual coding competition, Smart India Hackathon, our team embarked on a mission to innovate healthcare solutions. The result? Voice Prescription—an application designed to streamline the prescription process and enhance patient care. Voice Prescription leverages state-of-the-art Speech-to-Text conversion and Text Extraction technologies to accurately transcribe prescriptions dictated by doctors and physicians. By eliminating the risks associated with mispronunciations and indecipherable handwriting, our application aims to minimize medication errors and enhance patient safety. But Voice Prescription isn't just about transcription—it's about empowerment. Our platform provides a comprehensive solution for healthcare professionals, allowing them to process prescriptions, generate smart recommendations, and seamlessly share PDFs with patients.",
    ghLink: "https://github.com/ritika1010/Voice-Presciption-SIH-2020"
  },
  {
    imgPath: GitglanceLogo,
    title: "GitGlance: Github Contribution Discovery App",
    description: "Built upon a robust serverless cloud architecture using AWS Lambda, API Gateway, SQS, and Kinesis, GitGlance ensures efficient user interactions while seamlessly integrating AWS Personalize for tailored recommendations and DynamoDB for dynamic data storage. With scalable and secure storage powered by S3, GitGlance offers users a comprehensive insight into their GitHub activity, empowering them to track their progress and achieve their goals effortlessly.",
    ghLink: "https://github.com/ritika1010/GitGlance"
  },
  {
    imgPath: carLogo,
    title: "Car Rental Management System",
    description: "The Car Rental Management System is a comprehensive database management system designed to facilitate the rental process for both car owners and renters. This platform serves as a centralized hub where car owners can list their vehicles for rental, and renters can easily access and book them according to their preferences and requirements.",
    ghLink: "https://github.com/ritika1010/Car-Rental-System"
  },
  {
    imgPath: mealplanailogo,
    title: "MealPlannerAI: Your Smart Meal Assistant",
    description: "MealPlannerAI is your go-to app for effortless meal planning, recipe creation, and grocery list generation. Powered by AI, it tailors meal plans to your preferences, creates new recipes, and generates grocery lists based on your chosen dishes. Say goodbye to mealtime stress and hello to delicious meals with MealPlannerAI.",
    ghLink: "https://github.com/ritika1010/Meal-Planning-AI-FE"
  },
  {
    imgPath: DBCon,
    title: "DBCon: Tool to Convert Conventional Database to Graph Databases",
    description: "DBCon id designed to simplify the conversion process from conventional databases to graph databases. Leveraging Python libraries, we ensured a remarkable 99% data consistency in extracting metadata and records from the source database, guaranteeing accuracy and reliability throughout the conversion process.  Smooth migration of data to Neo4j, prioritizing both data integrity and cost reduction. With DBCon, you can trust that your database conversion is in capable hands, delivering unparalleled results with precision and efficiency."
  },
  // Add more projects as needed
];

export default projectData;
