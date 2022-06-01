import styled from "styled-components"
import UsersEdit from "../components/UsersEdit/UsersEdit";

export default function Users(){
    
    return(
        <Container>
            <UsersEdit />
        </Container>
    )
}

export const Container = styled.section`
    width: 100%;
    height: 100vh;
    display: flex;
    flex-direction: column;
    flex-wrap: nowrap;
    align-content: center;
    justify-content: center;
    align-items: center;
`;