import styled from "styled-components"
import Link from "next/link"
import Navbar from "../../components/Navbar"

export default function Shop() {
    return (
        <>  
            <Navbar />
            <Background>
                <Title>Welcome to the SUS Clothing Store!</Title>
                <Home>Back Home</Home>
            </Background>
        </>
    )
}

const Background = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%
    height: 100%
`

const Title = styled.div`
    margin-top: 40rem;
`

const Home = styled.button`
`