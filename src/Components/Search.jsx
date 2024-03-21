import { useState } from "react";
import {
  Row,
  Col,
  InputGroup,
  Form,
  Image,
  Button,
  Container,
} from "react-bootstrap";
import styled from "styled-components";
import fondo from "../assets/pattern-bg-desktop.png";
import arrow from "../assets/icon-arrow.svg";

const Arrow = styled.img`
  background-color: transparent;
`;

const ImgContainer = styled.div`
  position: absolute;
`;

const Title = styled.h1`
  position: relative;
  text-align: center;
  z-index: 10000;
  color: white;
  margin-bottom: 20px;
`;

const Search = ({ setIPAddress, getLocation }) => {
  const [ip, setIp] = useState("");

  const handleClick = () => {
    setIPAddress(ip);
    getLocation(ip);
  };

  return (
    <Container fluid className="p-0 w-100 h-100">
      <ImgContainer className="w-100 h-100">
        <Image fluid src={fondo} alt="" className="w-100 h-100" />
      </ImgContainer>

      <Row className="flex-column justify-content-center pt-2 align-content-center w-100 h-100">
        <Col lg={8} xl={6} xs={11}>
          <Title>IP Address Tracker</Title>
          <InputGroup size="lg">
            <Form.Control
              aria-label="Large"
              aria-describedby="inputGroup-sizing-sm"
              placeholder="Search for any IP address or domain"
              onChange={(e) => setIp(e.target.value)}
            />
            <Button variant="dark" onClick={() => handleClick()}>
              <Arrow src={arrow} />
            </Button>
          </InputGroup>
        </Col>
      </Row>
    </Container>
  );
};

export default Search;
