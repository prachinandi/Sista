import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const image =
  'https://res.cloudinary.com/sambitsankalp/image/upload/v1645352922/stormhacks/CommunityHero_bybwaq.png';

const ImageContainer = styled.div`
  background-image: url(${image});
  width: 100%;
  height: 500px;
`;

const HeadingsContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Headings = styled.h1`
  font-family: 'Zilla Slab', -apple-system, BlinkMacSystemFont, 'Segoe UI',
    Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  font-style: normal;
  font-weight: bold;
  font-size: 3rem;
  margin: 0px;
  margin-top: 80px;
  text-align: center;
  color: #000000;
`;

const Button = styled.button`
  background-color: #f8b9d4;
  font-size: 20px;
  padding: 11px 30px;
  border: none;
  border-radius: 25px;
  margin-right: 20px;
  margin-bottom: 60px;
  cursor: pointer;
  :hover {
    cursor: pointer;
    background-color: #f59dc3;
  }
`;

const HorizontalLine = styled.div`
  width: 8%;
  height: 3px;
  margin-top: 5px;
  background-color: #000;
  opacity: 1;
`;

const Wrapper = styled.div`
  margin: 100px 0px;
  padding: 0px 40px;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  @media (max-width: 900px) {
    margin: 50px 0px;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
  .text {
    text-align: left;
    font-size: 35px;
    @media (max-width: 900px) {
      text-align: center;
    }
  }
`;

const Input = styled.input`
  font-size: 24px;
  border: none;
  color: #000000;
  width: 50%;
  margin-left: 40px;
  background: transparent;
  background-color: transparent;
  border-bottom: 2px solid #000000;
`;

const Heading2 = styled.h2`
  font-family: 'Zilla Slab', -apple-system, BlinkMacSystemFont, 'Segoe UI',
    Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  font-style: normal;
  font-weight: bold;
  text-align: center;
  color: #000000;
  @media all and (max-width: 769px) {
    font-size: 2rem;
  }
`;

const AuthDetails = () => (
  <>
    <ImageContainer />
    <HeadingsContainer>
      <Headings>Fill Out The Form</Headings>
      <HorizontalLine />
      <Wrapper>
        <Heading2 className="text">Tech Stacks :</Heading2>
        <Input type="text" placeholder="React, MongoDB ...." />
      </Wrapper>
      <Wrapper>
        <Heading2 className="text">LinkedIn Profile :</Heading2>
        <Input
          type="text"
          placeholder="https://www.linkedin.com/in/[username]/"
        />
      </Wrapper>
      <Wrapper>
        <Heading2 className="text">Github Profile :</Heading2>
        <Input type="text" placeholder="https://github.com/[username]/" />
      </Wrapper>
      <Wrapper>
        <Heading2 className="text">Portfolio Link :</Heading2>
        <Input type="text" placeholder="" />
      </Wrapper>
      <Wrapper>
        <Heading2 className="text">Previous Experiences :</Heading2>
        <Input type="text" placeholder="" />
      </Wrapper>
      <Wrapper>
        <Heading2 className="text">Any other relevant links :</Heading2>
        <Input type="text" placeholder="" />
      </Wrapper>
      <Link to="/suggestions">
        <Button>Submit</Button>
      </Link>
    </HeadingsContainer>
  </>
);

export default AuthDetails;
