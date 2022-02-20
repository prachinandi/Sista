import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { BackToTop, Highlight } from './Styled';
import { animateScroll as scroll } from 'react-scroll';

function Footer() {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => {
    if (window.pageYOffset > 300) {
      setIsVisible(true);
      console.log('it works');
    } else {
      setIsVisible(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', toggleVisibility);

    return () => {
      window.removeEventListener('scroll', toggleVisibility);
    };
  }, [isVisible]);
  const scrollToTop = () => {
    scroll.scrollToTop({ duration: 800 });
  };

  return (
    <FooterSet>
      <FooterContainer>
        <About>
          <Heading>
            <Specific>Abo</Specific>ut Us
          </Heading>
          <Paragraph>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Esse
            incidunt nesciunt repudiandae vero, tenetur pariatur, aliquam autem
            ea libero dolorum sint nobis accusantium at eaque repellendus
            impedit fugit velit numquam?
          </Paragraph>
        </About>
        <LinksContainer>
          <Heading>
            <Specific>Gene</Specific>ral
          </Heading>
          <SectionLink href="/projects">projects</SectionLink>
          <SectionLink href="/cohorts">cohorts</SectionLink>
          <SectionLink href="/projects">friends</SectionLink>
          <SectionLink href="/projects">know the team</SectionLink>
          <SectionLink href="/projects">collaborate with us</SectionLink>
        </LinksContainer>
        <ContactUs>
          <Heading>
            <Specific>Con</Specific>tact Us
          </Heading>
          <Text>
            <Highlight>Email us -</Highlight> query@sista.com
          </Text>
          <Text className="center">
            ------ <Highlight>or</Highlight> ------
          </Text>
          <Text>
            <Highlight>Connect with us -</Highlight>
          </Text>
          <IconContainer>
            <IconLink>
              <img
                src="https://img.icons8.com/ios-glyphs/30/000000/instagram-new.png"
                alt="instagram"
              />
            </IconLink>
            <IconLink>
              <img
                src="https://img.icons8.com/ios-glyphs/30/000000/linkedin.png"
                alt="linkedin"
              />
            </IconLink>
            <IconLink>
              <img
                src="https://img.icons8.com/ios-glyphs/30/000000/twitter--v1.png"
                alt="twitter"
              />
            </IconLink>
            <IconLink>
              <img
                src="https://img.icons8.com/ios-filled/30/000000/facebook-new.png"
                alt="facebook"
              />
            </IconLink>
          </IconContainer>
        </ContactUs>
      </FooterContainer>
      <CopyRight>@ 2022 Team Sista. All rights reserved.</CopyRight>
      <BackToTop
        onClick={scrollToTop}
        title="Go to top"
        className={isVisible ? '' : 'not-visible'}
      >
        <img
          src="https://img.icons8.com/material-outlined/24/000000/collapse-arrow.png"
          alt="arrow"
        />
      </BackToTop>
    </FooterSet>
  );
}

const FooterSet = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 100vw;
  background-color: #ffc4aa;
  padding: 20px 70px;
  margin-top: 50px;

  & .not-visible {
    display: none !important;
    opacity: 0;
  }
`;

const FooterContainer = styled.div`
  display: grid;
  padding: 20px 0;
  grid-template-columns: repeat(10, 1fr);
  justify-items: start;
  gap: 70px;
`;

const Heading = styled.h1`
  margin: 0;
  font-family: 'Montserrat', sans-serif;
  font-size: 20px;
  font-weight: 900;
  text-align: left;
`;

export const Specific = styled.span`
  border-bottom: 2px solid black;
`;

const Paragraph = styled.p`
  font-family: 'Open Sans', sans-serif;
  text-align: left;
  font-weight: 500;
  width: 80%;
  margin-top: 8px;
`;

const SectionLink = styled.a`
  font-family: 'Open Sans', sans-serif;
  text-align: left;
  text-decoration: none;
  color: black;
  text-transform: capitalize;
  margin-top: 8px;
  cursor: pointer;

  &:hover {
    color: #4d4b4b;
  }
`;

const Text = styled.h1`
  font-family: 'Montserrat', sans-serif;
  text-align: left;
  font-size: medium;
  margin: 0;
  font-weight: normal;
  padding-top: 8px;
`;

const IconContainer = styled.div`
  display: flex;
  padding-top: 8px;
  gap: 8px;
`;

const IconLink = styled.a`
  text-decoration: none;
  cursor: pointer;
`;

const About = styled.div`
  grid-column: 1/5;
`;

const LinksContainer = styled.div`
  grid-column: 5/8;
  display: flex;
  flex-direction: column;
`;

const ContactUs = styled.div`
  grid-column: 8/11;
  display: flex;
  flex-direction: column;

  & .center {
    text-align: center;
  }
`;

const CopyRight = styled.div`
  font-family: 'Montserrat', sans-serif;
  font-weight: 600;
  font-size: small;
  text-align: center;
`;

export default Footer;
