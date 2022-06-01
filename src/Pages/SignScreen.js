import styled from "styled-components"
import Sign from "../components/Sign/Sign";

export default function SignScreen(){
    
    return(
        <Container>
            <Sign />
        </Container>
    )
}

export const Container = styled.aside`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    flex-wrap: nowrap;
    align-content: center;
    justify-content: center;
    align-items: center;
`;