import React from "react";
import Card from "react-bootstrap/Card";


function EduCards(props) {
  return (
    <Card className="edu-card-view">
      <Card.Body>
        <Card.Title>{props.title}</Card.Title>
        <Card.Text style={{ textAlign: "center" }}>
          {props.description}
        </Card.Text>
        <a href={props.link} target="_blank" rel="noopener noreferrer">
          <Card.Img
            style={{ alignItems: "justify", height: "200px", width: "220px" }}
            variant="top"
            src={props.imgPath}
            alt="card-img"
          />
        </a>
      </Card.Body>
    </Card>
  );
}


export default EduCards;
