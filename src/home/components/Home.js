import React from "react";
import { Link } from "react-router-dom";
import { Button, Container } from "../../shared/components";
import styled from "styled-components";

const Title = styled.h1`
  color: red;
`;

const ButtonsWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-evenly;
`;

const Home = () => {
  return (
    <Container>
      <h1 className="title is-1 has-text-centered">Take me to a place...</h1>
      <ButtonsWrapper>
        <Link to="/warm">
          <Button secondary>☀️ Warm</Button>
        </Link>
        <Link to="/cool">
          <Button>❄️ Cool</Button>
        </Link>
      </ButtonsWrapper>
    </Container>
  );
};
export default Home;
