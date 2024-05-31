import styled from 'styled-components';

const Hero = () => {
    return (
        <BackgroundContainer>
            <Logo src="/images/logos/white-logo-full.png" alt="Logo" />
            <Subtitle>Representing 9,900+ UBC Science undergrads<br/> and 50 Science clubs.⁣</Subtitle>
            <Subtitle2>~ est. 1961 ~</Subtitle2>
        </BackgroundContainer>
    );
};

const BackgroundContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  width: 100%;
  position: relative;
`;

const Subtitle = styled.div`
  color: white;
  font-size: 1.9rem;  
  text-align: center;
  z-index: 2;
`

const Subtitle2 = styled.div`
  color: white;
  font-size: 1.2rem;  
  fomt-weight: normal;
  text-align: center;
  z-index: 2;
  margin-top: 2rem;
`

const Logo = styled.img`
  width: 600px;
  height: auto;
  position: relative; /* Ensures the logo is above the filter */
  z-index: 2;
  margin-top: 10rem;
  margin-bottom: 3rem;
`;

export default Hero;