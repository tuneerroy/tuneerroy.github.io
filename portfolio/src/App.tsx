import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import NavBar from './components/NavBar';
import { Image, Container, Row, Col } from 'react-bootstrap';
import { BsEnvelopeFill, BsGithub, BsLinkedin } from 'react-icons/bs';
// import Info from './json/info';

const App = () => {
  return (
    <div className="App">
      <header>
        <NavBar />
      </header>
      <main>
        <div id="home">
          <Container>
            <Row>
              <Col>
                <Image roundedCircle src="/images/profile.png" />
              </Col>
              <Col>
                <div className="vertical-align">
                  <h1>Hi, I'm Tuneer!</h1>
                  <div className="links">
                    <a href="mailto:tuneer.roy12@gmail.com">
                      <BsEnvelopeFill />
                    </a>
                    <a href="https://github.com/tuneerroy">
                      <BsGithub />
                    </a>
                    <a href="https://www.linkedin.com/in/tuneer-roy-a792a11a4">
                      <BsLinkedin />
                    </a>
                  </div>
                </div>
              </Col>
            </Row>
            <Row>
              <p>
                Welcome to my portfolio! I'm a sophomore at the University of
                Pennsylvania studying Computer Science.
              </p>
              <p>
                Currently, I work as a backend developer as part of Penn Labs
                where I write RESTful API for the Penn Mobile application, Penn's 
                official student app. I also work as a Teacher Assistant for the 
                Automata, Computability, and Complexity course at UPenn.
              </p>
            </Row>
            </Container>
        </div>
        <div className="projects">
          <p>Test</p>
          {<div></div> }
          {/* <div className="project">
            <h3>Project Name</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
            </p>
          </div> */}
        </div>
        <div className="skills">

        </div>
      </main>
    </div>
  );
}

export default App;
