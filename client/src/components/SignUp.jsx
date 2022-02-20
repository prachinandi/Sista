import React, { useContext, useRef } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import AuthContext from '../store/AuthContext';
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
} from './Register';

const SignUp = () => {
  const profileCtx = useContext(AuthContext);

  const emailRef = useRef();
  const passwordRef = useRef();
  const userNameRef = useRef();

  const submitHandler = (e) => {
    e.preventDefault();

    const enteredEmail = emailRef.current.value;
    const enteredPassword = passwordRef.current.value;
    const enteredUserName = userNameRef.current.value;

    let token;

    let url =
      'https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyA9qngTQ2kQOuahg4Y6ZodqIBo-sTXXvDI';

    fetch(url, {
      method: 'POST',
      body: JSON.stringify({
        email: enteredEmail,
        password: enteredPassword,
        returnSecureToken: true,
      }),
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then((res) => {
        if (res.ok) {
          return res.json();
          //....
        } else {
          return res.json().then((data) => {
            let errorMessage = 'Authentication failed';

            throw new Error(errorMessage);
          });
        }
      })
      .then((data) => {
        token = data.idToken;
        fetch(
          'https://identitytoolkit.googleapis.com/v1/accounts:update?key=AIzaSyA9qngTQ2kQOuahg4Y6ZodqIBo-sTXXvDI',
          {
            method: 'POST',
            body: JSON.stringify({
              idToken: data.idToken,
              displayName: enteredUserName,
              photoUrl: '',
              returnSecureToken: false,
            }),
            headers: {
              'Content-Type': 'application/json',
            },
          }
        )
          .then((res) => res.json())
          .then((data) => {
            profileCtx.login(token, data.displayName);
          });
      })
      .catch((err) => {
        alert(err.message);
      });
  };
  return (
    <Container>
      <SubContainer>
        <SubHeading style={{ textAlign: 'left' }}>Welcome to,Sista</SubHeading>
        <UnderLine style={{ margin: 0 }} />
        <PopupContainer>
          <PopupContainerLeft>
            <AuthForm onSubmit={submitHandler}>
              <AuthInput ref={userNameRef} placeholder="userName" />
              <AuthInput ref={emailRef} placeholder="email" />
              <AuthInput ref={passwordRef} placeholder="Password" />
              <Link to="/register/signup/details">
                <Button>Proceed Next -&gt;</Button>
              </Link>
              <LinkText>
                Already registered?&nbsp;&nbsp;{' '}
                <a
                  style={{ textDecoration: 'inherit' }}
                  href="/register/signin"
                >
                  Sign in here
                </a>
              </LinkText>
            </AuthForm>
          </PopupContainerLeft>
          <Divider />
          <PopupContainerRight>
            <SubHeading style={{ textAlign: 'left' }}>Your Roles</SubHeading>
            <ListItems>
              <li style={{ margin: '5px 0' }}>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Illo,
                a!
              </li>
              <li style={{ margin: '5px 0' }}>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Illo,
                a!
              </li>
              <li style={{ margin: '5px 0' }}>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Illo,
                a!
              </li>
              <li style={{ margin: '5px 0' }}>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Illo,
                a!
              </li>
              <li style={{ margin: '5px 0' }}>
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
