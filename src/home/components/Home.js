import React from "react";
import { Link } from "react-router-dom";
import { Button, Container, Title } from "../../shared/components";
import styled from "styled-components";

const _Title = styled(Title)`
  text-align: center;
  margin: 0 0 24px;
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
      <_Title>Take me to a place...</_Title>
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
