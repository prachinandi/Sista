import styled from "styled-components";

export const Button = styled.button`
    padding: 5px 15px;
    background-color: #f8b9d4;
    border: none;
    display: flex;
    color: black;
    text-transform: capitalize;
    font-size: 20px;
    font-weight: 500;
    cursor: pointer;
    border-radius: 5px;

    &:hover {
        background-color: #f897c1;
    }
`;

export const Highlight = styled.span`
    font-weight: bolder;
`;

export const Card = styled.a`
    padding: 20px 40px;
    display: flex;
    flex-direction: column;
    width: fit-content;
    color: black;
    background-color: #ffeddf;
    text-decoration: none;
    cursor: pointer;
    align-items: center;
    border-radius: 30px;
    gap: 10px;
`;

export const CardTitle = styled.h1`
    font-size: 35px;
    margin: 0;
`;

export const CardAbout = styled.h2`
    width: 80%;
    font-size: 20px;
    font-family: "Open Sans", sans-serif;
    font-weight: 600;
    margin: 0;
    margin-bottom: 10px;
`;

export const BackToTop = styled.button`
    display: flex;
    flex-direction: column;
    align-items: center;
    position: fixed;
    bottom: 20px;
    right: 20px;
    padding: 10px;
    background-color: white;
    border: none;
    border-radius: 5px;
    -webkit-box-shadow: 0px 4px 12px 3px rgba(0, 0, 0, 0.1);
    -moz-box-shadow: 0px 4px 12px 3px rgba(0, 0, 0, 0.1);
    box-shadow: 0px 4px 12px 3px rgba(0, 0, 0, 0.1);
    cursor: pointer;
    z-index: 9999;

    &:hover {
        background-color: #ffeddf;
    }

    & > span {
        display: flex;
    }
`;
