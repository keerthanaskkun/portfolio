import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projImg1 from "../assets/img/project-img1.png";
import projImg2 from "../assets/img/project-img2.png";
import projImg3 from "../assets/img/project-img3.png";
import projImg4 from "../assets/img/project-img4.png";
import projImg5 from "../assets/img/project-img5.png";
import projImg6 from "../assets/img/project-img6.png";
import colorSharp2 from "../assets/img/color-sharp2.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Certificates = () => {

  const projects = [
    {
      title: "UiPath Academy",
      description: "Automation Explorer Training",
      imgUrl: projImg1,
    },
    {
      title: "UiPath Academy",
      description: "Automation Developer Associate Training",
      imgUrl: projImg2,
    },
    {
      title: "LinkedIn Learning",
      description: "Enhance Your Coaching Impact with Generative AI",
      imgUrl: projImg3,
    },
    {
      title: "Microsoft & LinkedIn Learning",
      description: "Microsoft Copilot for Productivity",
      imgUrl: projImg4,
    },
    {
      title: "Microsoft & LinkedIn Learning",
      description: "Build Your Generative AI Productivity Skills",
      imgUrl: projImg5,
    },
    {
      title: "Microsoft & LinkedIn Learning",
      description: "AI for Managers",
      imgUrl: projImg6,
    },
  ];

  return (
    <section className="project" id="certificates">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn": ""}>
                <h2>Certificates</h2>
                <p>Here are some of the certifications I've earned, reflecting my dedication to learning and growth. Each certificate represents a step forward in mastering new skills and staying updated with industry trends.</p>
                <Tab.Container id="certificates-tabs" defaultActiveKey="first">
                  <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                    
                  </Nav>
                  <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                    <Tab.Pane eventKey="first">
                      <Row>
                        {
                          projects.map((project, index) => {
                            return (
                              <ProjectCard
                                key={index}
                                {...project}
                                />
                            )
                          })
                        }
                      </Row>
                    </Tab.Pane>
                   
                    
                  </Tab.Content>
                </Tab.Container>
              </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2}></img>
    </section>
  )
}
