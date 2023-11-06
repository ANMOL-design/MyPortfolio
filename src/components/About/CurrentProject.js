import React from "react";
import { Col, Row } from "react-bootstrap";
import { CgCPlusPlus } from "react-icons/cg";
import {
  DiJavascript1,
  DiReact,
  DiNodejs,
  DiMongodb,
  DiCss3,
  DiGit,
  DiHtml5,
  DiBootstrap,
  DiPython,
  DiAndroid,
  DiApple,
  DiGoogleAnalytics,
  DiSass,
} from "react-icons/di";

function CurrentProjects() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <a
          href="https://www.inconn.com/"
          target={"_blank"}
          className="tech-icon-anchor"
          style={{ color: "white" }}
        >
          INCONN
        </a>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <a
          href="https://meirim.org/"
          target={"_blank"}
          className="tech-icon-anchor"
          style={{ color: "white" }}
        >
          Merium
        </a>
      </Col>
    
      
      <Col xs={4} md={2} className="tech-icons">
        <a
          href="https://www.incasa.ae/?page=main"
          target={"_blank"}
          className="tech-icon-anchor"
          style={{ color: "white" }}
        >
          INCASA
        </a>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <a
          href="https://www.veducation.world/"
          target={"_blank"}
          className="tech-icon-anchor"
          style={{ color: "white" }}
        >
          Veducation
        </a>
      </Col>

      <Col xs={4} md={2} className="tech-icons">
        <a
          href="https://github.com/anmol-heliverse"
          target={"_blank"}
          className="tech-icon-anchor"
          style={{ color: "white" }}
        >
          InstaSleb
        </a>
      </Col>
      
      <Col xs={4} md={2} className="tech-icons">
        <a
          href="https://github.com/anmol-heliverse"
          target={"_blank"}
          className="tech-icon-anchor"
          style={{ color: "white" }}
        >
          Green
        </a>
      </Col>
      
      <Col xs={4} md={2} className="tech-icons">
        <a
          href="https://master.d39i0hioto2h34.amplifyapp.com/"
          target={"_blank"}
          className="tech-icon-anchor"
          style={{ color: "white" }}
        >
          Nordsens
        </a>
      </Col>
    </Row>
  );
}

export default CurrentProjects;
