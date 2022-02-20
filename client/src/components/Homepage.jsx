import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { Specific } from "./Footer";
import homeImg from "../assets/home.png";
import explore from "../assets/explore1.png";
import cohortImg from "../assets/explore2.png";
import chatImg from "../assets/explore3.png";

function Homepage() {
    return (
        <HomeContainer>
            <HomeHead>
                <Heading>&lt;&gt;Women&lt;/&gt;</Heading>
                <SubHeading
                    style={{ marginBottom: "40px", textAlign: "center" }}
                >
                    are the Technologies of the World.
                </SubHeading>
                {/* <BackgroundImage src={homeImg} /> */}
            </HomeHead>

            <QuoteContainer style={{ marginBottom: "30px" }}>
                <Quote>“Lead the world, you have ever dreamed off.”</Quote>
            </QuoteContainer>

            <ExploreUs>
                <Heading>
                    Exp<Specific>lor</Specific>e Us
                </Heading>

                <ExploreContainer className="text-first">
                    <ExploreText>
                        <Quote>Collaborate on various projects</Quote>
                        <SubHeading>
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit. Ut ut placerat nibh. Fusce in lorem euismod,
                            interdum neque at, scelerisque erat.
                        </SubHeading>
                        <Button to="/projects">Find Projects &#x2192;</Button>
                    </ExploreText>
                    <ExploreImage src={explore} />
                </ExploreContainer>

                <ExploreContainer className="image-first">
                    <ExploreImage src={cohortImg} />
                    <ExploreText>
                        <Quote>Find your suitable cohort</Quote>
                        <SubHeading style={{ textAlign: "left" }}>
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit. Ut ut placerat nibh. Fusce in lorem euismod,
                            interdum neque at, scelerisque erat.
                        </SubHeading>
                        <Button to="/cohorts">Find Cohorts &#x2192;</Button>
                    </ExploreText>
                </ExploreContainer>

                <ExploreContainer className="text-first">
                    <ExploreText>
                        <Quote>Find your Tech Connections</Quote>
                        <SubHeading>
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit. Ut ut placerat nibh. Fusce in lorem euismod,
                            interdum neque at, scelerisque erat.
                        </SubHeading>
                        <Button to="/projects">Find Friends &#x2192;</Button>
                    </ExploreText>
                    <ExploreImage src={chatImg} />
                </ExploreContainer>
            </ExploreUs>
        </HomeContainer>
    );
}

const HomeContainer = styled.div`
    max-width: 100vw;
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
`;

const HomeHead = styled.div`
    min-height: 80vh;
    max-width: 100vw;
    background: url(${homeImg}) no-repeat center center;
    -webkit-background-size: cover;
    -moz-background-size: cover;
    -o-background-size: cover;
    background-size: cover;
    display: flex;
    justify-items: center;
    flex-direction: column;
`;

const QuoteContainer = styled.div`
    background-color: #faf7f7;
    position: relative;
    text-align: center;
    top: -50px;
    margin: 0 50px;
    border-radius: 10px;
    padding: 20px;
    box-shadow: 2px 3px #b8b8b8;
`;

const Quote = styled.h1`
    margin: 0;
    font-family: Verdana, Geneva, Tahoma, sans-serif;
    font-size: xx-large;
    font-weight: 700;
`;

export const Heading = styled.h1`
    font-size: 50px;
    margin: 0;
    font-family: Georgia, "Times New Roman", Times, serif;
    text-align: center;
`;

export const SubHeading = styled.h1`
    margin: 0;
    font-family: Verdana, Geneva, Tahoma, sans-serif;
    font-size: x-large;
    font-weight: 500;
    text-align: right;
`;

const ExploreUs = styled.div`
    display: flex;
    flex-direction: column;
    padding: 20px 70px;

    & .text-first {
        border-radius: 0 200px 0 200px;
    }

    & .image-first {
        border-radius: 200px 0 200px 0;
    }

    & .text-first > div {
        padding-left: 130px;
        align-items: flex-end;
        text-align: right;
    }

    & .image-first > div {
        padding-right: 130px;
        align-items: flex-start;
        text-align: left;
    }
`;

const ExploreContainer = styled.div`
    margin: 20px 50px;
    padding: 20px 70px;
    background-color: #ffeddf;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    align-items: center;
    justify-items: center;
`;

const ExploreText = styled.div`
    display: flex;
    flex-direction: column;
    gap: 20px;
`;

const ExploreImage = styled.img`
    display: flex;
    height: 400px;
`;

const Button = styled(Link)`
    text-decoration: none;
    cursor: pointer;
    display: flex;
    padding: 10px 20px;
    width: fit-content;
    margin: 0;
    color: black;
    background-color: pink;
    font-family: Verdana, Geneva, Tahoma, sans-serif;
    font-size: x-large;
    font-weight: 500;
    border-radius: 25px;
    &:hover {
        background-color: #f897c1;
    }
`;

export default Homepage;
