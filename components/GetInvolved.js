import React, { useState } from 'react';
import styled, { keyframes } from 'styled-components';

export default function GetInvolved() {
  const [openDropdown, setOpenDropdown] = useState(null);

  const toggleDropdown = (section) => {
    setOpenDropdown(openDropdown === section ? null : section);
  };

  return (
    <Background>
      <Content>
        <Titles>
            <Title>Get Involved</Title>
            <Subtitle>
                <PositionLink 
                    href="https://docs.google.com/document/d/1ca6Tsa4BK0e6NhS5Yq7xsYRVf0EBEm-49FTIC740XNg/edit">Click here </PositionLink>
                to learn about all the <span style={{textDecoration: "underline"}}>year-round</span> portfolios, committees, and positions!</Subtitle>
        </Titles>

        <DropdownMenu>
          <DropItem>
            <DropItemHead onClick={() => toggleDropdown('summerHiring')}>
                <Arrow open={openDropdown === 'summerHiring'} />
                Summer Hiring 2024
            </DropItemHead>
            <DropContent open={openDropdown === 'summerHiring'}>
              Hiring is ongoing and applications are due May 23rd, 2024 at 11:59 PM. Click here for a list of available positions as well as its corresponding CareerOnline links. Head to our Facebook event and Instagram post for further information and all the positions available.
              <br />
              <br />
              Assistant to Vice-presidents, Committee chairs, and General Committee positions are hired in the summer, in mid to late May. Positions are posted on CareersOnline, so keep your eyes peeled around May! We also usually have a Facebook event and Instagram post that has all positions available, so look out for an event that is typically named “SUS Executive Hiring 20XX [Summer]”. No prior experience is needed, but a cover letter and resume are.
            </DropContent>
          </DropItem>

          <DropItem>
            <DropItemHead onClick={() => toggleDropdown('fallHiring')}>
              <Arrow open={openDropdown === 'fallHiring'} />
              Fall Hiring 2024
            </DropItemHead>
            <DropContent open={openDropdown === 'fallHiring'}>
              General committee positions are hired in the fall, in early September. To apply, look for our Facebook event typically named “SUS Fall Hiring 20XX” around early September. Again, a cover letter and resume are submitted.  No prior experience is needed!
            </DropContent>
          </DropItem>
        </DropdownMenu>

        <MoreInfo>
            <MoreInfoTitle>To learn more about our <span>one-time-experience</span> positions </MoreInfoTitle>
            <MoreInfoButton>Room Booking</MoreInfoButton>
        </MoreInfo>  
      </Content>
      <Graphic src="/images/join-sus.webp" />
    </Background>
  );
}

const Background = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 5rem;
  width: 100%;
  height: 100%;
  color: white;
`;

const Graphic = styled.img`
  width: 560px;
  height: 315px;
  object-fit: cover;
  position: relative;
  z-index: 2;
  border: none;
  border-radius: 0;
  transition: opacity 1s ease-in-out;
  box-shadow: 0 0 60px rgba(0, 25, 97, 0.5); /* Subtle border glow */
  margin-left: 2rem;
`;

const Content = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  margin-right: 2rem;
`;

const Titles = styled.div`
`

const Title = styled.div`
  font-size: 37px;
  color: #001961;
  text-align: center;
  margin-bottom: 1rem;
`;

const Subtitle = styled.div`
    font-size: 20px;
    color: #000;
    text-align: left;
    margin-bottom: 1rem;
`

const PositionLink = styled.a`
    text-decoration: none;
    color: #046fe2;
`

const DropdownMenu = styled.div`
  width: 100%;
`;

const DropItem = styled.div`
  margin: 10px 0;
`;

const DropItemHead = styled.div`
    font-size: 20px;
    cursor: pointer;
    display: flex;
    align-items: center;
    color: black;
    padding: 10px;
    border-bottom: 1px solid black;
`;

const DropContent = styled.div`
  max-height: ${(props) => (props.open ? '500px' : '0')};
  overflow: hidden;
  transition: max-height 0.5s ease-in-out, padding 0.5s ease-in-out;
  padding: ${(props) => (props.open ? '10px 20px' : '0 20px')};
  font-size: 15px;
  background-color: none;
  color: #000;
  border-radius: 5px;
`;

const Arrow = styled.div`
  width: 0;
  height: 0;
  border-left: 8px solid transparent;
  border-right: 8px solid transparent;
  border-top: ${(props) => (props.open ? '0' : '8px solid black')};
  border-bottom: ${(props) => (props.open ? '8px solid black' : '0')};
  margin-right: 10px;
  transition: transform 0.3s;
  transform: ${(props) => (props.open ? 'rotate(180deg)' : 'rotate(0deg)')};
`;

const MoreInfo = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    margin-left: 1rem;
`

const MoreInfoTitle = styled.div`
    color: white;
    font-size: 20px;  
    margin-bottom: 1rem;
    line-height: 2;
    text-align: center;
`

const pulse = keyframes`
    0% {
        transform: scale(1);
    }
    50% {
        transform: scale(1.05);
    }
    100% {
        transform: scale(1);
    }
`

const MoreInfoButton = styled.button`
    border: none;
    border-radius: 7px;
    background-color: #046bd2;
    color: white;
    padding: 15px 50px;
    &:hover {
        background-color: #0357a9;
        animation: ${pulse} 1.2s ease-in-out infinite;
    }
`