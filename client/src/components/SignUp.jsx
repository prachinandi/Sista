import React from "react";
import styled from "styled-components";
import {
  Button,
  Container,
  Divider,
  LinkText,
  ListItems,
  PopupContainer,
  PopupContainerLeft,
  PopupContainerRight,
  SubContainer,
  SubHeading,
  UnderLine,
} from "./Register";
const SignUp = () => {
  return (
    <Container>
      <SubContainer>
        <SubHeading style={{ textAlign: "left" }}>Welcome to,Sista</SubHeading>
        <UnderLine style={{ margin: 0 }} />
        <PopupContainer>
          <PopupContainerLeft>
            <AuthForm>
              <AuthInput placeholder="userName" />
              <AuthInput placeholder="email" />
              <AuthInput placeholder="Password" />
              <Button>Proceed Now -&gt;</Button>
              <LinkText>
                Already registered? <a href="/register/login">Sign in here</a>
              </LinkText>
            </AuthForm>
          </PopupContainerLeft>
          <Divider />
          <PopupContainerRight>
            <SubHeading style={{ textAlign: "left" }}>Mentee Roles</SubHeading>
            <ListItems>
              <li style={{ margin: "5px 0" }}>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Illo,
                a!
              </li>
              <li style={{ margin: "5px 0" }}>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Illo,
                a!
              </li>
              <li style={{ margin: "5px 0" }}>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Illo,
                a!
              </li>
              <li style={{ margin: "5px 0" }}>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Illo,
                a!
              </li>
              <li style={{ margin: "5px 0" }}>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Illo,
                a!
              </li>
            </ListItems>
          </PopupContainerRight>
        </PopupContainer>
      </SubContainer>
    </Container>
  );
};
export const AuthForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 20px;
  margin: 20px 0;
`;
export const AuthInput = styled.input`
  background: #ffffff;
  border: 2px solid #000000;
  box-sizing: border-box;
  padding: 20px;
  border-radius: 20px;
  height: 45px;
  width: 320px;
`;
export default SignUp;
