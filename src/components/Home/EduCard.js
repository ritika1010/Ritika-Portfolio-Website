import React from "react";
import Card from "react-bootstrap/Card";


function EduCards(props) {
  return (
    <Card className="edu-card-view">
      <Card.Img style={{ alignItems: "justify", height: "200px", width: "200px" }}variant="top" src={props.imgPath} alt="card-img" />
      <Card.Body>
        <Card.Title>{props.title}</Card.Title>
        <Card.Text style={{ textAlign: "center" }}>
          {props.description}
        </Card.Text>
       
    
      </Card.Body>
    </Card>
  );
}
export default EduCards;
