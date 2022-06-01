import styled from "styled-components"
import SubscriptionsPlan from "../components/SubscriptionsPlan/SubscriptionsPlan";
export default function SubscriptionsPlans(){
    
    return(
        <Container>
            <SubscriptionsPlan />
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