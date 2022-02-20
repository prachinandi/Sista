import React from 'react';
import styled from 'styled-components';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faFacebookF,
  faGithub,
  faInstagram,
  faLinkedinIn,
  faTwitter,
} from '@fortawesome/free-brands-svg-icons';
import { Link } from 'react-router-dom';

const image =
  'https://res.cloudinary.com/sambitsankalp/image/upload/v1645337230/stormhacks/Background_kjasm3.png';

const ImageContainer = styled.div`
  background-image: url(${image});
  width: 400px;
  height: 512px;
  background-repeat: no-repeat;
  display: flex;
  margin: 25px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const TextName = styled.h2`
  font-family: 'Montserrat', -apple-system, BlinkMacSystemFont, 'Segoe UI',
    Roboto, Oxygen, Ubuntu, Cantarell, 'Montserrat', 'Helvetica Neue',
    sans-serif;
  font-style: normal;
  font-weight: 600;
  font-size: 36px;
  margin: 0px;
  margin-top: 150px;
  color: #000000;
`;

const Description = styled.p`
  font-family: 'Montserrat', -apple-system, BlinkMacSystemFont, 'Segoe UI',
    Roboto, Oxygen, Ubuntu, Cantarell, 'Montserrat', 'Helvetica Neue',
    sans-serif;
  font-style: normal;
  font-size: 20px;
  text-align: center;
  margin-top: 5px;
  padding: 0px 30px;
  color: #000000;
`;

const Titles = styled.p`
  font-family: 'Montserrat', -apple-system, BlinkMacSystemFont, 'Segoe UI',
    Roboto, Oxygen, Ubuntu, Cantarell, 'Montserrat', 'Helvetica Neue',
    sans-serif;
  font-style: normal;
  font-size: 26px;
  font-weight: 600;
  text-align: center;
  margin: 0px;
  margin-top: 10px;
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

const links = [
  {
    link: 'https://www.linkedin.com/',
    icon: faLinkedinIn,
  },
  {
    link: 'https://www.instagram.com/',
    icon: faInstagram,
  },
  {
    link: 'https://www.instagram.com/',
    icon: faFacebookF,
  },
  {
    link: 'https://www.instagram.com/',
    icon: faGithub,
  },
  {
    link: 'https://www.instagram.com/',
    icon: faTwitter,
  },
];

const ProfileCard = () => (
  <Link style={{ textDecoration: 'none' }} to="/profile">
    <ImageContainer>
      <TextName>Prachi Nandi</TextName>
      <Description>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut ut placerat
        nibh.
      </Description>
      <Titles>Expertise</Titles>
      <HorizontalLine />
      <Description>Web Developer(MERN)</Description>
      <Titles>Socials</Titles>
      <HorizontalLine />
      <LinkContainer>
        {links.map(({ link, icon }) => (
          <a key={link} href={link} target="_blank" rel="noreferrer">
            <FontAwesomeIcon className="icon" icon={icon} />
          </a>
        ))}
      </LinkContainer>
    </ImageContainer>
  </Link>
);

export default ProfileCard;
