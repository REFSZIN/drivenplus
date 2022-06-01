import styled from "styled-components"
import Register from "../components/Register/"

export default function SingUp(){
    
    return(
        <Container>
            <Register />
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