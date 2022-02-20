import React from 'react';
import styled from 'styled-components';
import cohortList from '../../config/cohorts';
import CohortCard from '../CohortCard';
import ProfileCard from '../Community/ProfileCards';

const image =
  'https://res.cloudinary.com/sambitsankalp/image/upload/v1645365015/stormhacks/Community_Hero_1_hutupd.png';

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

const HorizontalLine = styled.div`
  width: 8%;
  height: 3px;
  margin-top: 5px;
  background-color: #000;
  opacity: 1;
`;

const CohortCardContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  justify-items: center;
  gap: 20px;
  padding: 20px 50px;
  text-align: center;
`;

const MentorContainer = styled.div`
  margin: 10px auto;
  width: 95%;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  @media (max-width: 500px) {
    width: 90%;
  }
`;

const SuggestionPage = () => (
  <>
    <ImageContainer />
    <HeadingsContainer>
      <Headings>Suggested Cohorts</Headings>
      <HorizontalLine />
    </HeadingsContainer>
    <CohortCardContainer>
      {cohortList.slice(0, 3).map((cohort) => {
        return <CohortCard cohort={cohort} />;
      })}
    </CohortCardContainer>
    <HeadingsContainer>
      <Headings>Suggested Friends</Headings>
      <HorizontalLine />
    </HeadingsContainer>
    <MentorContainer>
      <ProfileCard />
      <ProfileCard />
      <ProfileCard />
    </MentorContainer>
  </>
);

export default SuggestionPage;
