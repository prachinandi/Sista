import React from "react";
import styled from "styled-components";

const Register = () => {
  return (
    <Container>
      <SubContainer>
        <Heading>Sista</Heading>
        <UnderLine />
        <PopupContainer>
          <PopupContainerLeft>
            <SubHeading>Mentee</SubHeading>
            <ListItems>
              <li>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Illo,
                a!
              </li>
              <li>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Illo,
                a!
              </li>
              <li>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Illo,
                a!
              </li>
            </ListItems>
            <Button>Sign up as a Mentee</Button>
            <LinkText>
              Already registered? <a href="/SignIn"> Sign in here</a>
            </LinkText>
          </PopupContainerLeft>
          <Divider />
          <PopupContainerRight>
            <SubHeading>Mentor</SubHeading>
            <ListItems>
              <li>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Illo,
                a!
              </li>
              <li>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Illo,
                a!
              </li>
              <li>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Illo,
                a!
              </li>
            </ListItems>
            <Button>Sign up as a Mentor</Button>
            <LinkText>
              Already registered? <a href="/SignIn"> Sign in here</a>
            </LinkText>
          </PopupContainerRight>
        </PopupContainer>
      </SubContainer>
    </Container>
  );
};

const Container = styled.div`
  min-height: 91vh;
  max-width: 100vw;
  background: url("./Auth.png") no-repeat center center fixed;
  -webkit-background-size: cover;
  -moz-background-size: cover;
  -o-background-size: cover;
  background-size: cover;
  display: flex;
  justify-items: center;
`;

const ListItems = styled.ul`
  text-align: left;
  font-size: 18px;
  line-height: 25px;
`;

const SubContainer = styled.div`
  background: #ffeddf;
  text-align: center;
  max-width: 800px;
  margin: auto;
  padding: 40px;
  padding-top: 20px;
`;

const PopupContainer = styled.div`
  display: flex;
  box-sizing: border-box;
`;

const PopupContainerLeft = styled.div`
  display: flex;
  flex-direction: column;
`;
const PopupContainerRight = styled.div`
  display: flex;
  flex-direction: column;
`;

const Heading = styled.h1`
  font-style: normal;
  font-weight: bold;
  font-size: 50px;
  line-height: 60px;
`;
const SubHeading = styled.h2`
  font-style: normal;
  font-weight: bold;
  font-size: 40px;
  line-height: 50px;
`;

const UnderLine = styled.h5`
  width: 20%;
  height: 0;
  border: 3px solid #000000;
  margin: auto;
  margin-bottom: 20px;
`;

const Divider = styled.div`
  border: 2px solid #000000;
  margin: 0 40px;
`;

const Button = styled.button`
  width: 196px;
  height: 40px;
  background: #f8b9d4;
  border-radius: 25px;
  border: none;
  margin: 20px 0;
`;

const LinkText = styled.h5`
  text-align: left;
`;

export default Register;
