import styled from "styled-components"
import UsersEditUpdate from "../components/UsersEditUpdate/UsersEditUpdate";

export default function UsersEdit(){
    
    return(
        <Container>
            <UsersEditUpdate />
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