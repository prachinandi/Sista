import React from 'react';
import styled from 'styled-components';
import ProfileCard from '../Community/ProfileCards';

const image = 'https://res.cloudinary.com/sambitsankalp/image/upload/v1645340497/stormhacks/Community_Hero_lu4sun.png';

const ImageContainer = styled.div`
  background-image: url(${image});
  width: 100%;
  height: 605px;
`;

const Button = styled.button`
  background-color: #f8b9d4;
  font-size: 20px;
  padding: 11px 30px;
  border: none;
  border-radius: 25px;
  margin-right: 20px;
  cursor: pointer;
  :hover {
    cursor: pointer;
    background-color: #f59dc3;
  }
`;

const HeroButton = styled(Button)`
  margin-top: 420px;
  margin-right: 260px;
  margin-left: 560px;
`;

const HeadingsContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Headings = styled.h1`
  font-family: 'Zilla Slab', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell,
    'Open Sans', 'Helvetica Neue', sans-serif;
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

const LogoContainer = styled.div`
  margin: 10px auto;
  width: 80%;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  @media (max-width: 500px) {
    width: 90%;
  }
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

const Img = styled.img`
  margin: 10px 30px;
  height: auto;
  display: flex;
  cursor: pointer;
  justify-content: center;
  align-items: center;
`;

const Content = styled.p`
  width: 80%;
  font-family: 'Helvetica';
  margin: 0px auto;
  margin-top: 20px;
  font-weight: 300;
  font-size: 25px;
`;

const ButtonContainer = styled.div`
  width: 80%;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  margin: 50px auto;
`;

const logos = [
  {
    link: 'https://reactjs.org/',
    logo: 'https://res.cloudinary.com/sambitsankalp/image/upload/v1645342467/stormhacks/react_hdevp4.png',
  },
  {
    link: 'https://www.mongodb.com/',
    logo: 'https://res.cloudinary.com/sambitsankalp/image/upload/v1645342467/stormhacks/mongo_jtgxgr.png',
  },
  {
    link: 'https://expressjs.com/',
    logo: 'https://res.cloudinary.com/sambitsankalp/image/upload/v1645342467/stormhacks/express_fdzp9l.png',
  },
  {
    link: 'https://nodejs.org/en/',
    logo: 'https://res.cloudinary.com/sambitsankalp/image/upload/v1645342467/stormhacks/nodejs_bexbwn.png',
  },
];

const Community = () => (
  <>
    <ImageContainer>
      <HeroButton>Join Us</HeroButton>
    </ImageContainer>
    <HeadingsContainer>
      <Headings>Our Expertise</Headings>
      <HorizontalLine />
    </HeadingsContainer>
    <LogoContainer>
      {logos.map(({ link, logo }) => (
        <a key={link} href={link} target='_blank' rel='noreferrer'>
          <Img src={logo} alt='logo' />
        </a>
      ))}
    </LogoContainer>
    <HeadingsContainer>
      <Headings>Our Mentors</Headings>
      <HorizontalLine />
    </HeadingsContainer>
    <MentorContainer>
      <ProfileCard />
      <ProfileCard />
      <ProfileCard />
      <ProfileCard />
      <ProfileCard />
    </MentorContainer>
    <HeadingsContainer>
      <Headings>About Us</Headings>
      <HorizontalLine />
    </HeadingsContainer>
    <Content>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam interdum felis sed nunc tristique malesuada.
      Aliquam in pharetra dui. Vivamus efficitur ligula nulla, a gravida purus facilisis ac. Curabitur convallis sapien
      at ipsum rutrum cursus. Nulla ut tellus et lacus pellentesque tristique eget vitae eros. Orci varius natoque
      penatibus et magnis dis parturient montes, nascetur ridiculus mus.
    </Content>
    <Content>
      Sed imperdiet finibus urna quis rutrum. Nunc pellentesque, mauris at dignissim tristique, nisi felis consectetur
      est, et pretium risus mi eget metus. Vestibulum mattis metus nec lacus malesuada, id ullamcorper turpis tempus.
      Aliquam in semper est. Nulla tempor massa in orci eleifend, vel laoreet dolor mattis. Nunc vitae tellus ac lacus
      hendrerit semper molestie ac mauris. Vestibulum libero nisl, facilisis eu sagittis at, mollis nec lectus. Proin id
      ullamcorper massa.
    </Content>
    <ButtonContainer>
      <Button>Join Us</Button>
      <Button>Find Next Cohort → </Button>
    </ButtonContainer>
  </>
);

export default Community;
