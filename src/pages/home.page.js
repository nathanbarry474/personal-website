import React from "react";
import styled from "styled-components";
import { Container, Row, Col, Jumbotron, Carousel } from "react-bootstrap";
import me1 from "../assets/mecutout.png";

const Jumbo = styled(Jumbotron)`
  height: 80vh;
  margin-top: -7vh;
  background: radial-gradient(#ffffff, #f0f0f0);
  overflow: hidden;
`;

const Wave = styled.div`
  margin-top: -320px;
  margin-bottom: -100px;
  position: relative;
  z-index: 0;
`;

const P = styled.p`
  font-size: 1.5rem;
`;

const H2 = styled.h2`
  font-size: 4rem;
  margin-bottom: 3rem;
`;

const Dots = styled.p`
    font-size: 9rem;
    text-align: center;
    margin-bottom: 8rem;
`;


export const Home = () => {
  return (
    <React.Fragment>
      <Jumbo>
        <Container>
          <Row>
            <Col>
              <h1 style={{ fontSize: "6rem", marginTop: "10vh" }}>
                Who Am I?
              </h1>
              <P>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.{" "}
              </P>
              <P>What's up?</P>
            </Col>
            <Col>
              <img src={me1} height="60%" />
            </Col>
          </Row>
          <Row>
              
          </Row>
        </Container>
      </Jumbo>


      <Wave>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
          <path
            fill="#ffffff"
            fill-opacity="1"
            d="M0,64L60,58.7C120,53,240,43,360,53.3C480,64,600,96,720,133.3C840,171,960,213,1080,208C1200,203,1320,149,1380,122.7L1440,96L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"
          ></path>
        </svg>
      </Wave>


      <Container style={{ zIndex: 1, position: "relative" }}>
        <Row>
          <H2>My Journey</H2>
        </Row>
        <Row>
          <P>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Tortor
            aliquam nulla facilisi cras fermentum odio eu feugiat. Vel facilisis
            volutpat est velit egestas. A cras semper auctor neque vitae tempus
            quam. Diam in arcu cursus euismod quis viverra nibh cras pulvinar.
            Porta lorem mollis aliquam ut porttitor. Etiam sit amet nisl purus
            in mollis nunc sed id. Egestas purus viverra accumsan in nisl nisi
            scelerisque. Diam sit amet nisl suscipit adipiscing bibendum est.
            Eros in cursus turpis massa tincidunt dui ut ornare lectus. Pulvinar
            elementum integer enim neque volutpat ac tincidunt. Viverra mauris
            in aliquam sem fringilla ut morbi tincidunt. Pulvinar pellentesque
            habitant morbi tristique senectus et netus.
          </P>
        </Row>
      </Container>


      <Dots>. . .</Dots>


      <Container>
        <Row>
          <H2>Programming Experience</H2>
        </Row>
        <Row>
          <P>
            Diam sit amet nisl suscipit adipiscing bibendum est. Eros in cursus
            turpis massa tincidunt dui ut ornare lectus. Pulvinar elementum
            integer enim neque volutpat ac tincidunt. Viverra mauris in aliquam
            sem fringilla ut morbi tincidunt. Pulvinar pellentesque habitant
            morbi tristique senectus et netus.
          </P>
        </Row>
        <Row>
          <h3>Courses</h3>
        </Row>
        <Row>
          <Col>Deeplearning.ai Deep Learning Specialization</Col>
          <Col>React blah blah</Col>
          <Col>Flask Blah blah</Col>
        </Row>
        <Row>
          <h3>Recent Projects</h3>
        </Row>
        <Row>
          <Col>Github project 1</Col>
          <Col>Github project 2</Col>
          <Col>Github project 3</Col>
        </Row>
      </Container>


      <Dots>. . .</Dots>


      <Container>
        <Row>
          <H2>Business Experience</H2>
        </Row>
        <Row>
          <P>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Tortor
            aliquam nulla facilisi cras fermentum odio eu feugiat. Vel facilisis
            volutpat est velit egestas. A cras semper auctor neque vitae tempus
            quam. Diam in arcu cursus euismod quis viverra nibh cras pulvinar.
            Porta lorem mollis aliquam ut porttitor. Etiam sit amet nisl purus
            in mollis nunc sed id. Egestas purus viverra accumsan in nisl nisi
            scelerisque. Diam sit amet nisl suscipit adipiscing bibendum est.
            Eros in cursus turpis massa tincidunt dui ut ornare lectus. Pulvinar
            elementum integer enim neque volutpat ac tincidunt. Viverra mauris
            in aliquam sem fringilla ut morbi tincidunt. Pulvinar pellentesque
            habitant morbi tristique senectus et netus.
          </P>
        </Row>
        <Row>
          <Col>Image Here</Col>
          <Col>
            <P>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Tortor
              aliquam nulla facilisi cras fermentum odio eu feugiat. Vel
              facilisis volutpat est velit egestas. A cras semper auctor neque
              vitae tempus quam. Diam in arcu cursus euismod quis viverra nibh
              cras pulvinar. Porta lorem mollis aliquam ut porttitor. Etiam sit
              amet nisl purus in mollis nunc sed id. Egestas purus viverra
              accumsan in nisl nisi scelerisque. Diam sit amet nisl suscipit
              adipiscing bibendum est. Eros in cursus turpis massa tincidunt dui
              ut ornare lectus. Pulvinar elementum integer enim neque volutpat
              ac tincidunt. Viverra mauris in aliquam sem fringilla ut morbi
              tincidunt. Pulvinar pellentesque habitant morbi tristique senectus
              et netus.
            </P>
          </Col>
        </Row>
        <Row>
          <Col>
            <P>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Tortor
              aliquam nulla facilisi cras fermentum odio eu feugiat. Vel
              facilisis volutpat est velit egestas. A cras semper auctor neque
              vitae tempus quam. Diam in arcu cursus euismod quis viverra nibh
              cras pulvinar. Porta lorem mollis aliquam ut porttitor. Etiam sit
              amet nisl purus in mollis nunc sed id. Egestas purus viverra
              accumsan in nisl nisi scelerisque. Diam sit amet nisl suscipit
              adipiscing bibendum est. Eros in cursus turpis massa tincidunt dui
              ut ornare lectus. Pulvinar elementum integer enim neque volutpat
              ac tincidunt. Viverra mauris in aliquam sem fringilla ut morbi
              tincidunt. Pulvinar pellentesque habitant morbi tristique senectus
              et netus.
            </P>
          </Col>
          <Col>Image Here</Col>
        </Row>
        </Container>


          <Dots>. . .</Dots>


        <Container>
        <Row>
          <H2>Running Journey</H2>
        </Row>
        <Row>
          <P>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Tortor
            aliquam nulla facilisi cras fermentum odio eu feugiat. Vel facilisis
            volutpat est velit egestas. A cras semper auctor neque vitae tempus
            quam. Diam in arcu cursus euismod quis viverra nibh cras pulvinar.
            Porta lorem mollis aliquam ut porttitor. Etiam sit amet nisl purus
            in mollis nunc sed id. Egestas purus viverra accumsan in nisl nisi
            scelerisque. Diam sit amet nisl suscipit adipiscing bibendum est.
            Eros in cursus turpis massa tincidunt dui ut ornare lectus. Pulvinar
            elementum integer enim neque volutpat ac tincidunt. Viverra mauris
            in aliquam sem fringilla ut morbi tincidunt. Pulvinar pellentesque
            habitant morbi tristique senectus et netus.
          </P>
        </Row>
        <Row>
          <Col>Image Here</Col>
          <Col>
            <P>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Tortor
              aliquam nulla facilisi cras fermentum odio eu feugiat. Vel
              facilisis volutpat est velit egestas. A cras semper auctor neque
              vitae tempus quam. Diam in arcu cursus euismod quis viverra nibh
              cras pulvinar. Porta lorem mollis aliquam ut porttitor. Etiam sit
              amet nisl purus in mollis nunc sed id. Egestas purus viverra
              accumsan in nisl nisi
            </P>
          </Col>
        </Row>
        <Row>
          <Col>
            <P>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Tortor
              aliquam nulla facilisi cras fermentum odio eu feugiat. Vel
              facilisis volutpat est velit egestas. A cras semper auctor neque
              vitae tempus quam. Diam in arcu cursus euismod quis viverra nibh
              cras pulvinar. Porta lorem mollis aliquam ut porttitor. Etiam sit
              amet nisl purus
            </P>
          </Col>
          <Col>Image Here</Col>
        </Row>
      </Container>


      <Carousel>
        <Container>
          <H2>Hotdog History</H2>
        </Container>
        <Carousel.Item>
          <Carousel.Caption>
            <h3>Fact 1</h3>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <Carousel.Caption>
            <h3>Fact 2</h3>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <Carousel.Caption>
            <h3>Fact 3</h3>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>


      <Jumbotron>
        <Container>
          <Row>
            <Col>
              <Row>
                <h2>Book List</h2>
              </Row>
              <Row>
                <P>Blah blah blah</P>
              </Row>
            </Col>
            <Col>
              <P>Image right here</P>
            </Col>
          </Row>
        </Container>
      </Jumbotron>


      <Container>
        <Row>
          <H2>Contact Me</H2>
        </Row>
        <Row>
          <Col>
            <P>Enter Form Here</P>
          </Col>
          <Col>
            <P>Photo of me</P>
          </Col>
        </Row>
      </Container>
    </React.Fragment>
  );
};
