import React from 'react';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import WorkIcon from '@material-ui/icons/Work';
import SchoolIcon from '@material-ui/icons/School';
import columbialogo from "../../Assets/Columbia_University_Thepharmadaily.png";
import pictlogo from "../../Assets/pict.jpeg";
import EduCard from './EduCard';

const TimelineComponent = () => {
  return (
    <VerticalTimeline>
      {/* Education */}
      <VerticalTimelineElement
        className="vertical-timeline-element--education"
        date="Dec 2024"
        iconStyle={{ background: 'black', color: '#fff' }}
        icon={<SchoolIcon />}
        contentArrowStyle={{ borderRight: '7px solid  black' }}

      >
        <EduCard
              imgPath={columbialogo}
              title="Masters in Computer Science"
              description="Teaching Assistant for Databases | MLH Hackathon | Cloud Computing and Big Data, Advance Software Engineering, Programming Languages and Translators, Databases, Applied Machine Learning, NLP, Advance Databases, Data Visualization"
            />
        {/* <p>
          GPA: 3.9
          <br />
          Courses: Cloud Computing and Big Data, Advance Software Engineering, Programming Languages and Translators, Databases, Applied Machine Learning, NLP, Advance Databases, Data Visualization.
        </p> */}
      </VerticalTimelineElement>

      <VerticalTimelineElement
        className="vertical-timeline-element--work"
        date="July 2021 – Jun 2023"
        iconStyle={{ background: 'black', color: '#fff' }}
        icon={<WorkIcon />}
      >
        <h3 className="vertical-timeline-element-title">Software Engineer</h3>
        <h4 className="vertical-timeline-element-subtitle">Deutsche Bank Pvt. Ltd., Pune, India</h4>
        {/* <p>
          Integrated fault-tolerant APIs in Java, resolving defects promptly for 100% customer satisfaction. Authored technical documentation, improving collaboration and reducing development time.
          <br />
          Analyzed workflow within distributed systems, identifying opportunities for optimization, increasing system eﬀiciency, and implementing quality assurance measures and enhancing security protocols.
        </p> */}
      </VerticalTimelineElement>
      
      <VerticalTimelineElement
        className="vertical-timeline-element--education"
        date="Aug 2021"
        iconStyle={{ background: 'black', color: '#fff' }}
        icon={<SchoolIcon />}
      >
        <h3 className="vertical-timeline-element-title">Bachelors in Computer Engineering</h3>
        <h4 className="vertical-timeline-element-subtitle">University of Pune, Pune, India</h4>
        {/* <p>
          GPA: 3.9
          <br />
          Courses: OOP, Databases, Data Structures and Algorithms, ML, Advance Algorithms, Computer Networks.
          <br />
          Activities: Member of ACM, Smart India Hackathon Winner 2020, President of Rotaract Club.
        </p> */}
      </VerticalTimelineElement>

      
      <VerticalTimelineElement
        className="vertical-timeline-element--work"
        date="May 2020 – July 2020"
        iconStyle={{ background: 'black', color: '#fff' }}
        icon={<WorkIcon />}
      >
        <h3 className="vertical-timeline-element-title">Android Developer Intern</h3>
        <h4 className="vertical-timeline-element-subtitle">AirMed Solutions, Pune, India</h4>
        {/* <p>
          Collaborated closely with development team for capturing vital data and storing in HL7 format in database.
          <br />
          Created responsive and intuitive UI components, help enhance overall user experience by 80% for ongoing healthcare product in Android studio.
        </p> */}
      </VerticalTimelineElement>

      {/* End */}
    </VerticalTimeline>
  );
};

export default TimelineComponent;
