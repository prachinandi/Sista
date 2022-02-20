import React, { useContext, useRef } from "react";
import styled from "styled-components";
import AuthContext from "../store/AuthContext";
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

const Login = () => {
  const profileCtx = useContext(AuthContext);

  const emailRef = useRef();
  const passwordRef = useRef();

  const submitHandler = (e) => {
    e.preventDefault();

    const enteredEmail = emailRef.current.value;
    const enteredPassword = passwordRef.current.value;

    let url =
      "https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyA9qngTQ2kQOuahg4Y6ZodqIBo-sTXXvDI";

    fetch(url, {
      method: "POST",
      body: JSON.stringify({
        email: enteredEmail,
        password: enteredPassword,
        returnSecureToken: true,
      }),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => {
        if (res.ok) {
          return res.json();
          //....
        } else {
          return res.json().then((data) => {
            let errorMessage = "Authentication failed";

            throw new Error(errorMessage);
          });
        }
      })
      .then((data) => {
        profileCtx.login(data.displayName, data.idToken);
        console.log(data);
      })
      .catch((err) => {
        alert(err.message);
      });
  };
  return (
    <Container>
      <SubContainer>
        <SubHeading style={{ textAlign: "left" }}>Welcome back</SubHeading>
        <UnderLine style={{ margin: 0 }} />
        <PopupContainer>
          <PopupContainerLeft>
            <AuthForm onSubmit={submitHandler}>
              <AuthInput ref={emailRef} placeholder="email" />
              <AuthInput ref={passwordRef} placeholder="Password" />
              <Button>Sign In -&gt;</Button>
              <LinkText>
                Didn't registered yet? &nbsp;&nbsp;
                <a
                  style={{ textDecoration: "inherit" }}
                  href="/register/signup"
                >
                  Sign up here
                </a>
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
export default Login;
