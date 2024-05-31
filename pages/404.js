import styled from "styled-components";
import Link from 'next/link';

const Error404Page = () => {
    return (
        <Background>
            <Title>Naurrrrr</Title>
            <Title2>The page you're looking for is nowhere to be found.</Title2>
            <Link href="/" passHref>
                <StyledButton>Back to Home</StyledButton>
            </Link>
        </Background>
    )
}

export default Error404Page;

const Title = styled.div`
    color: black;
`

const Title2 = styled.div`
    color: black;
`

const Background = styled.div`
    height: 100vh;
    background-size: cover;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: center;
`

const StyledButton = styled.div`
    display: inline-block;
    width: 210px;
    padding: 10px 20px;
    background-color: #0070f3;
    color: white;
    text-align: center;
    border-radius: 5px;
    text-decoration: none;
    margin-top: 20px;
    cursor: pointer;

    &:hover {
        background-color: #005bb5;
    }
`
