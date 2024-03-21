import { Row, Col } from "react-bootstrap";
import styled from "styled-components";

const Label = styled.label`
  color: hsl(0, 0%, 59%);
  margin-bottom: 5px;
  font-size: 0.9rem;
`;

const P = styled.p`
  color: hsl(0, 0%, 17%);
  font-weight: bold;
  font-size: 1.4rem;
`;

const Div = styled.div`
  height: 150px;
  background-color: white;
  position: relative;
  top: 10vh;
  z-index: 1000;
  width: 75%;
  border-radius: 15px;

  @media (max-width: 1200px) {
    height: 100%;
  }
`;

const Info = ({ IPAddress, ISP, location, timezone }) => {
  return (
    <Div>
      <Row className="align-items-center h-100">
        <Col
          xl={3}
          className="text-center border-end border-2 border-dark-subtle align-items-center h-50 d-flex flex-column justify-content-center"
        >
          <Label htmlFor="info">IP ADDRESS</Label>
          <P>{IPAddress}</P>
        </Col>
        <Col
          xl={3}
          className="text-center border-end border-2 border-dark-subtle align-items-center h-50 d-flex flex-column justify-content-center"
        >
          <Label htmlFor="info">LOCATION</Label>
          <P>{location}</P>
        </Col>
        <Col
          xl={3}
          className="text-center border-end border-2 border-dark-subtle align-items-center h-50 d-flex flex-column justify-content-center"
        >
          <Label htmlFor="info">TIME ZONE</Label>
          <P>{timezone}</P>
        </Col>
        <Col
          xl={3}
          className="text-center align-items-center h-50 d-flex flex-column justify-content-center"
        >
          <Label htmlFor="info">ISP</Label>
          <P>{ISP}</P>
        </Col>
      </Row>
    </Div>
  );
};

export default Info;
