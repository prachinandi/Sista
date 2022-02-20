import React from "react";
import styled from "styled-components";
import cohortList from "../config/cohorts";
import { Heading, SubHeading } from "./Homepage";
import { Card, CardAbout, CardTitle } from "./Styled";
import cohortImg from "../assets/cohort.png";

function Cohorts() {
    return (
        <Cohort>
            <CohortHead>
                <CohortText>
                    <CohortHeading>Find your suitable Cohort</CohortHeading>
                    <SubHeading>
                        Find your suitable cohort according to your needs and
                        requirement, and get in contact our expert mentors.
                    </SubHeading>
                </CohortText>
                <CohortImage src={cohortImg} />
            </CohortHead>
            <CohortCardContainer>
                {cohortList.map((cohort) => {
                    return (
                        <Card href={cohort.link} target="_blank">
                            <CardTitle>{cohort.title}</CardTitle>
                            <CardAbout>{cohort.about}</CardAbout>
                            <SubHeading
                                style={{ fontSize: "20px", fontWeight: "600" }}
                            >
                                Expertise
                            </SubHeading>
                            <CardAbout>{cohort.expertise}</CardAbout>
                        </Card>
                    );
                })}
            </CohortCardContainer>
        </Cohort>
    );
}

const Cohort = styled.div`
    display: flex;
    flex-direction: column;
`;

const CohortHead = styled.div`
    display: grid;
    padding: 50px;
    background-color: #f3f3f3;
    grid-template-columns: repeat(2, 1fr);
    justify-items: center;
    align-items: center;
`;

const CohortText = styled.div`
    width: 60%;
    text-align: right;
    display: flex;
    flex-direction: column;
    gap: 25px;
`;

const CohortHeading = styled(Heading)`
    font-family: "Montserrat", sans-serif;
    font-weight: 900;
`;

const CohortImage = styled.img`
    height: 500px;
`;

const CohortCardContainer = styled.div`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: repeat(3, 1fr);
    justify-items: center;
    gap: 20px;
    padding: 20px 50px;
    text-align: center;
`;

export default Cohorts;
