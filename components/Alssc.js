import styled, { keyframes } from 'styled-components';

export default function Alssc() {
    return (
        <Background>
            <Title>Abdul Ladha Science Student Centre</Title>
            <Subtitle>The ALSSC is a building for science students. If you are looking for a place to study… this is the building for you!</Subtitle>
            <SubSection>
                <Frame width="560" height="315" src="https://www.youtube.com/embed/t-kc4Bppv2I?si=8kjHKUHZ9ZZhmQMy" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></Frame>
                <Booking>
                    <BookingTitle>Have a meeting? Need a study space for you and your friends? <br/>Students can book with the link below ↓↓↓</BookingTitle>
                    <BookingButton>Room Booking</BookingButton>
                </Booking>  
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
    color: #fff;
    margin-bottom: 2rem;
`

const Subtitle = styled.div`
    color: white;
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
`;


const Booking = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    margin-left: 1rem;
`

const BookingTitle = styled.div`
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

const BookingButton = styled.button`
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