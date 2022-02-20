import React from 'react';
import { SubHeading } from './Homepage';
import { Card, CardAbout, CardTitle } from './Styled';

const CohortCard = ({ cohort }) => {
  return (
    <Card href="/cohorts/team-asphalt" target="_blank">
      <CardTitle>{cohort.title}</CardTitle>
      <CardAbout>{cohort.about}</CardAbout>
      <SubHeading style={{ fontSize: '20px', fontWeight: '600' }}>
        Expertise
      </SubHeading>
      <CardAbout>{cohort.expertise}</CardAbout>
    </Card>
  );
};

export default CohortCard;
