import styled from "styled-components"
import ShopNavbar from "../../components/shop-components/ShopNavbar"
import Footer from "../../components/Footer"

export default function Shop() {
    return (
        <>  
            <ShopNavbar />
            <Background>
                <Title>Welcome to the SUS Clothing Store!</Title>
                <Home>Back Home</Home>
            </Background>
            <Footer />
        </>
    )
}

const Background = styled.div`
`

const Title = styled.div`
    margin-top: 40rem;
`

const Home = styled.button`
`