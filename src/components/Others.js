import { Container, Row, Col, Tab, Nav } from "react-bootstrap";

import projImg1 from "../assets/img/project-img1.png";
import projImg2 from "../assets/img/project-img2.png";
import projImg3 from "../assets/img/project-img3.png";
import colorSharp2 from "../assets/img/color-sharp2.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Others = () => {

  const projects = [
    {
      title: "Business Startup",
      description: "Design & Development",
      imgUrl: projImg1,
    },
    {
      title: "Business Startup",
      description: "Design & Development",
      imgUrl: projImg2,
    },
    {
      title: "Business Startup",
      description: "Design & Development",
      imgUrl: projImg3,
    },
    {
      title: "Business Startup",
      description: "Design & Development",
      imgUrl: projImg1,
    },
    {
      title: "Business Startup",
      description: "Design & Development",
      imgUrl: projImg2,
    },
    {
      title: "Business Startup",
      description: "Design & Development",
      imgUrl: projImg3,
    },
  ];

  return (
    <section className="project" id="others">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn": ""}>
                <h2>Others</h2>
                <p>This section highlights key milestones in my journey, including notable achievements, impactful projects, and valuable experiences. From winning competitions to developing innovative solutions, each accomplishment reflects my commitment to learning, growth, and delivering results.</p>
                <Tab.Container id="projects-tabs" defaultActiveKey="first">
                  <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                    <Nav.Item>
                      <Nav.Link eventKey="first">Projects/Publications</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="second">Experiences</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="third">Achievements</Nav.Link>
                    </Nav.Item>
                   
                  </Nav>
                  <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                    
                    <Tab.Pane eventKey="section">
                      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque quam, quod neque provident velit, rem explicabo excepturi id illo molestiae blanditiis, eligendi dicta officiis asperiores delectus quasi inventore debitis quo.</p>
                    </Tab.Pane>
                    <Tab.Pane eventKey="first">

                    <Tab.Container id="projects-tabs" defaultActiveKey="first">
                  <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                    <Nav.Item>
                      <Nav.Link eventKey="fourth">Project 1</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="fifth">Project 2</Nav.Link>
                    </Nav.Item>
                    </Nav>
                  <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                    
                    <Tab.Pane eventKey="section">
                      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque quam, quod neque provident velit, rem explicabo excepturi id illo molestiae blanditiis, eligendi dicta officiis asperiores delectus quasi inventore debitis quo.</p>
                    </Tab.Pane>
                    <Tab.Pane eventKey="fourth">
                    <p>Project 1  <a href="https://github.com/keerthanaskkun/ecommerce-frontend" target="_blank">[Link]</a> </p>
                        <p> Name : E-Commerce Website  </p>
                        <p> Tech Stack : React.js,JavaScript,HTML,CSS,Webpack,Babel,ESLint</p>
                        <p> Description : Built a fully functional e-commerce frontend with a responsive and user-friendly design using React.js, JavaScript, HTML, and CSS. Configured Webpack for bundling, used Babel for compiling, and ensured code quality with ESLint, including state management and routing. </p>
                       


                    </Tab.Pane>

                    <Tab.Pane eventKey="fifth">
                    <p>Project 2  <a href="https://drive.google.com/drive/folders/1ezlmXPBwrYD3h-vG1Sw5hH3dxC5G3IBS?usp=sharing" target="_blank">[Link]</a> </p>
                        <p> Name : GenAi based Email response bot   </p>
                        <p> Tools Used : Mail(Gmail/Outlook), UiPath, ChatGPT</p>
                        <p> Description : Automated email handling using UiPath and Generative AI, improving efficiency by reducing response time by 70–80% with 90% accuracy through seamless integration with Gmail/Outlook for content analysis, automated replies, and response logging.</p>
                        


                    </Tab.Pane>


                    

                    </Tab.Content>
                    </Tab.Container>
                    </Tab.Pane>
                    

                    
                    <Tab.Pane eventKey="second">
                     
                     
                    <Tab.Container id="projects-tabs" defaultActiveKey="first">
                  <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                    <Nav.Item>
                      <Nav.Link eventKey="6th">Implant Training 1</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="7th">Implant Training 2</Nav.Link>
                    </Nav.Item>
                    </Nav>
                  <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                    
                    <Tab.Pane eventKey="section">
                      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque quam, quod neque provident velit, rem explicabo excepturi id illo molestiae blanditiis, eligendi dicta officiis asperiores delectus quasi inventore debitis quo.</p>
                    </Tab.Pane>
                    <Tab.Pane eventKey="6th">
                    
                        <p> Company Name : Unique MEP  </p>
                        <p> Tools Used : Excel,CAD</p>
                        <p> Description :  Gained hands-on experience in Excel and CAD during the implant training at Unique MEP, improving design accuracy and data handling efficiency by 20–30% through effective use of Excel for data organization and CAD for technical design.</p>
                       


                    </Tab.Pane>

                    <Tab.Pane eventKey="7th">
                    
                        <p> Company Name : National Small Industry Corporations </p>
                        <p> Tools Used  : PLC,SCADA</p>
                        <p> Description : Gained hands-on experience in PLC and SCADA during the implant training at National Small Industry Corporation, improving system automation efficiency by 20–30% through effective programming of PLCs and real-time monitoring using SCADA. </p>
                       


                    </Tab.Pane>


                    

                    </Tab.Content>
                    </Tab.Container>

                    </Tab.Pane>


                    <Tab.Pane eventKey="third">
                      <p>Won 1st place at Hack-a-Bot 2024 conducted by UiPath for developing an automated email response bot using UiPath and Generative AI, reducing response time by 70–80% with 90% accuracy through content analysis, automated replies, and logging.</p>
                      <p> Tools Used: UiPath, OpenAI (Generative AI), Gmail/Outlook  </p>
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
