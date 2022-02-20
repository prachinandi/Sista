import React from "react";
import styled from "styled-components";
import cohortList from "../config/cohorts";
import projectList from "../config/projects";
import CohortCard from "./CohortCard";
import { Specific } from "./Footer";
import { Heading, SubHeading } from "./Homepage";
import { Card, CardAbout, CardTitle } from "./Styled";
import bgImg from "../assets/bg.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faFacebookF,
    faGithub,
    faInstagram,
    faLinkedinIn,
    faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import image from "../assets/profile.png";

const links = [
    {
        link: "https://www.linkedin.com/",
        icon: faLinkedinIn,
    },
    {
        link: "https://www.instagram.com/",
        icon: faInstagram,
    },
    {
        link: "https://www.instagram.com/",
        icon: faFacebookF,
    },
    {
        link: "https://www.instagram.com/",
        icon: faGithub,
    },
    {
        link: "https://www.instagram.com/",
        icon: faTwitter,
    },
];

function Profile() {
    return (
        <Container>
            <Background>
                <ProfileImg src={image} />
            </Background>
            <ProfilePage>
                <TextName>Prachi Nandi</TextName>
                <Description>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut
                    ut placerat nibh.
                </Description>
                <Titles>Socials</Titles>
                <HorizontalLine />
                <LinkContainer>
                    {links.map(({ link, icon }) => (
                        <a
                            key={link}
                            href={link}
                            target="_blank"
                            rel="noreferrer"
                        >
                            <FontAwesomeIcon className="icon" icon={icon} />
                        </a>
                    ))}
                </LinkContainer>
            </ProfilePage>
            <Heading>
                Co<Specific>hor</Specific>ts
            </Heading>
            <CardContainer>
                {cohortList.slice(0, 3).map((cohort) => {
                    return <CohortCard cohort={cohort} />;
                })}
            </CardContainer>
            <Heading>
                Pr<Specific>ojec</Specific>ts
            </Heading>
            <CardContainer>
                {projectList.slice(0, 3).map((project) => {
                    return (
                        <Card href={project.link} target="_blank">
                            <CardTitle>{project.title}</CardTitle>
                            <CardAbout>{project.about}</CardAbout>
                            <SubHeading
                                style={{ fontSize: "20px", fontWeight: "600" }}
                            >
                                Tech Stack
                            </SubHeading>
                            <CardAbout>{project.techStack}</CardAbout>
                        </Card>
                    );
                })}
            </CardContainer>
        </Container>
    );
}

const Container = styled.div`
    display: flex;
    flex-direction: column;
`;

const CardContainer = styled.div`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    justify-items: center;
    gap: 20px;
    padding: 20px 50px;
    text-align: center;
`;

const Background = styled.div`
    min-height: 20vh;
    max-width: 100vw;
    background: url(${bgImg}) no-repeat center center;
    -webkit-background-size: cover;
    -moz-background-size: cover;
    -o-background-size: cover;
    background-size: cover;
    display: flex;
    justify-content: center;
`;

const ProfilePage = styled.div`
    background-color: #ffeddf;
    width: 100vw;
    padding: 20px;
    display: flex;
    margin: 0;
    margin-bottom: 30px;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

const ProfileImg = styled.img`
    width: 250px;
    position: relative;
    bottom: -125px;
`;

const TextName = styled.h2`
    font-family: "Montserrat", -apple-system, BlinkMacSystemFont, "Segoe UI",
        Roboto, Oxygen, Ubuntu, Cantarell, "Montserrat", "Helvetica Neue",
        sans-serif;
    font-style: normal;
    font-weight: 600;
    font-size: 36px;
    margin: 0px;
    margin-top: 125px;
    color: #000000;
`;

const Description = styled.p`
    font-family: "Montserrat", -apple-system, BlinkMacSystemFont, "Segoe UI",
        Roboto, Oxygen, Ubuntu, Cantarell, "Montserrat", "Helvetica Neue",
        sans-serif;
    font-style: normal;
    font-size: 20px;
    text-align: center;
    margin-top: 5px;
    margin-bottom: 10px;
    padding: 0px 30px;
    color: #000000;
`;

const Titles = styled.p`
    font-family: "Montserrat", -apple-system, BlinkMacSystemFont, "Segoe UI",
        Roboto, Oxygen, Ubuntu, Cantarell, "Montserrat", "Helvetica Neue",
        sans-serif;
    font-style: normal;
    font-size: 26px;
    font-weight: 600;
    text-align: center;
    margin: 0px;
    padding: 0px 30px;
    color: #000000;
`;

const HorizontalLine = styled.div`
    width: 10%;
    height: 1px;
    margin-top: 3px;
    background-color: #000;
    opacity: 1;
`;

const LinkContainer = styled.div`
    display: flex;
    justify-content: flex-start;
    align-items: center;
    .icon {
        width: 25px;
        height: 25px;
        color: #000000;
        cursor: pointer;
        margin-right: 13px;
        margin-top: 10px;
        @media (max-width: 660px) {
            width: 15px;
            height: 15px;
            margin-right: 5px;
        }
    }
`;
export default Profile;
