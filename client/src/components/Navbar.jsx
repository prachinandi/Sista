import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { Button } from './Styled';

function Navbar() {
  return (
    <Container>
      <Heading href="/">Sista</Heading>
      <SectionConatiner>
        <SectionLink href="/projects">projects</SectionLink>
        <SectionLink href="/cohorts">cohorts</SectionLink>
        <SectionLink href="/projects">friends</SectionLink>
        <Link style={{ textDecoration: 'none' }} to="/register">
          <Button>sign up</Button>
        </Link>
      </SectionConatiner>
    </Container>
  );
}

const Container = styled.div`
  background-color: white;
  padding: 10px 70px;
  display: flex;
  justify-content: space-between;
  align-items: baseline;
`;

const Heading = styled.a`
  text-decoration: none;
  padding: 10px;
  margin: 0;
  font-family: 'Sansita', sans-serif;
  font-size: 35px;
  font-weight: bolder;
  color: black;
  text-align: left;
  cursor: pointer;
`;

const SectionConatiner = styled.div`
  display: flex;
  padding: 10px;
  align-items: center;
  gap: 25px;
`;

const SectionLink = styled.a`
  text-decoration: none;
  display: flex;
  color: black;
  text-transform: capitalize;
  font-size: 20px;
  /* font-family: "Open Sans", sans-serif; */
  font-weight: 500;
  cursor: pointer;

  &:hover {
    color: gray;
  }
`;

export default Navbar;
