import React from "react";
import ReactCardFlip from "react-card-flip";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { CgWebsite } from "react-icons/cg";
import { BsGithub } from "react-icons/bs";

class ProjectCard extends React.Component {
  constructor() {
    super();
    this.state = {
      isFlipped: false
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e) {
    e.preventDefault();
    this.setState(prevState => ({ isFlipped: !prevState.isFlipped }));
  }

  render() {
    return (
      <ReactCardFlip isFlipped={this.state.isFlipped} flipDirection="vertical">
        <div className="project-card-front" onClick={this.handleClick}>
          <Card className="project-card-view">
        <Card.Img  variant="top" src={this.props.imgPath} alt="card-img" style={{  display: "block", margin: "auto", height: "200px", width: "250px" }}/>
            <Card.Body>
              <Card.Title>{this.props.title}</Card.Title>
              <Button variant="primary">More Info</Button>
            </Card.Body>
          </Card>
        </div>

        <div className="project-card-back" onClick={this.handleClick}>
          <Card className="project-card-view">
            <Card.Body>
              <Card.Text style={{ textAlign: "justify" }}>
                {this.props.description}
              </Card.Text>
              {this.props.ghLink && (
                <Button variant="primary" href={this.props.ghLink} target="_blank">
                  <BsGithub /> &nbsp;
                  {this.props.isBlog ? "Blog" : "GitHub"}
                </Button>
              )}
              {!this.props.isBlog && this.props.demoLink && (
                <Button
                  variant="primary"
                  href={this.props.demoLink}
                  target="_blank"
                  style={{ marginLeft: "10px" }}
                >
                  <CgWebsite /> &nbsp;
                  {"Demo"}
                </Button>
              )}
            </Card.Body>
          </Card>
        </div>
      </ReactCardFlip>
    );
  }
}

export default ProjectCard;
