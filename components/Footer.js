import styled from "styled-components";
import {
    faSpotify,
    faYoutube,
    faFacebook,
    faInstagram
} from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default function Footer() {
    return (
      <FooterContainer>
        <SocialMediaIcons>
            <a
                href='https://www.instagram.com/susubc'
                target='_blank'
                rel='noreferrer'
            >
                <FontAwesomeIcon icon={faInstagram} />
            </a>
            <a
                href='https://open.spotify.com/show/6LvV59dTsORiXSn4z28Zon?si=0f45da7172b94df9'
                target='_blank'
                rel='noreferrer'
            >
                <FontAwesomeIcon icon={faSpotify} />
            </a>
            <a
                href='https://www.youtube.com/c/susubc'
                target='_blank'
                rel='noreferrer'
            >
                <FontAwesomeIcon icon={faYoutube} />
            </a>
            <a
                href='https://www.facebook.com/susubc'
                target='_blank'
                rel='noreferrer'
            >
                <FontAwesomeIcon icon={faFacebook} />
            </a>
        </SocialMediaIcons>
        <Links>
          <a href='mailto:vpexternal@sus.ubc.ca' target='_blank' rel='noreferrer'>
            Email Us
          </a>
        </Links>
        <div>Copyright &copy; 2024 UBC Science Undergraduate Society</div>
      </FooterContainer>
    );
  }

  const FooterContainer = styled.footer`
  background-size: cover;
  color: #ffffff;
  text-align: center;
  padding: 64px 0;
  width: 100%;
`;

const SocialMediaIcons = styled.div`
  font-size: 32px;
  margin-bottom: 32px;

  a {
    color: white;
    width: 30px;
    height: 100%;
    margin: 0 32px;
    transition: color 200ms;
    font-size: 1.5em; // Adjust the icon size here
  }
`;

const Links = styled.div`
  display: flex;
  gap: 1em;
  justify-content: center;
  margin-bottom: 32px;

  a {
    color: white;
    transition: color 200ms;
    text-decoration: underline;
  }
`;