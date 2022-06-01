import styled from "styled-components"
import Header from "../components/Header/Header";
import Main from "../components/Main/Main";
import Footer from "../components/Footer/Footer";

export default function SingUp(){
    
    return(
        <Container>
            <Header/>
            <Main />
            <Footer/>
        </Container>
    )
}

export const Container = styled.aside`
    width: 100%;
    height: 100vh;
    display: flex;
    flex-direction: column;
    flex-wrap: nowrap;
    align-content: center;
    justify-content: center;
    align-items: center;
`;