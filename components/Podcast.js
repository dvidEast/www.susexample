import styled, { keyframes } from 'styled-components';

export default function Podccast() {
    return (
        <Background>
            <Title>Ever Bored on the R4?</Title>
            <Subtitle>Checkout Suspisode! SUS' very own Podcast 🎧🎧🎧</Subtitle>
            <SubSection>
                {/* <Frame style="border-radius:12px" src="https://open.spotify.com/embed/show/6LvV59dTsORiXSn4z28Zon/video?utm_source=generator" width="624" height="351" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></Frame> */}
            </SubSection>
        </Background>   
    )
}

const Background = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
`

const Title = styled.div`
    font-size: 37px;
    font-weight: bold;
    color: #001961;
    margin-bottom: 2rem;
`

const Subtitle = styled.div`
    color: black;
    font-size: 20px;  
    margin-bottom: 3rem;
`

const SubSection = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
`

const Frame = styled.iframe`
    margin-bottom: 3rem;
    margin-right: 1rem;
`