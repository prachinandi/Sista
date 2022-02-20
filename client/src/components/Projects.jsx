import React from "react";
import styled from "styled-components";
import projectList from "../config/projects";
import { Heading, SubHeading } from "./Homepage";
import { Card, CardAbout, CardTitle } from "./Styled";
import projectImg from "../assets/project.png";

function Projects() {
    return (
        <Project>
            <ProjectHead>
                <ProjectText>
                    <ProjectHeading>
                        Collaborate on various projects
                    </ProjectHeading>
                    <SubHeading>
                        Search your tech stacks find your suitable project and
                        collaborate with developers.
                    </SubHeading>
                </ProjectText>
                <ProjectImage src={projectImg} />
            </ProjectHead>
            <ProjectCardContainer>
                {projectList.map((project) => {
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
            </ProjectCardContainer>
        </Project>
    );
}

const Project = styled.div`
    display: flex;
    flex-direction: column;
`;

const ProjectHead = styled.div`
    display: grid;
    padding: 50px;
    background-color: #f3f3f3;
    grid-template-columns: repeat(2, 1fr);
    justify-items: center;
    align-items: center;
`;

const ProjectText = styled.div`
    width: 60%;
    text-align: right;
    display: flex;
    flex-direction: column;
    gap: 25px;
`;

const ProjectHeading = styled(Heading)`
    font-family: "Montserrat", sans-serif;
    font-weight: 900;
    text-align: right;
`;

const ProjectImage = styled.img`
    height: 500px;
`;

const ProjectCardContainer = styled.div`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: repeat(3, 1fr);
    justify-items: center;
    gap: 20px;
    padding: 20px 50px;
    text-align: center;
`;

export default Projects;
