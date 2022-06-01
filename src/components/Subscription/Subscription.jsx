import {Anime, Title, Box, SpanPlan, ImgPlan } from "./styled.js";
import Group1 from "../../assets/images/Group 1.svg"
import Group2 from "../../assets/images/Group 2.svg"
import Group3 from "../../assets/images/Group 3.svg"
import { Link } from "react-router-dom";
export default function Subscription(){

    return(
        <Anime>        
            <Title>Escolha seu Plano</Title>
            <Link to="/subscriptions/:ID_DO_PLANO">
                <Box>
                    <ImgPlan src={Group1}/>
                    <SpanPlan>R$ 39,99</SpanPlan>
                </Box>
            </Link>
            <Link to="/subscriptions/:ID_DO_PLANO">
                <Box>
                    <ImgPlan src={Group2}/>
                    <SpanPlan>R$ 69,99</SpanPlan>
                </Box>
            </Link>
            <Link to="/subscriptions/:ID_DO_PLANO">
                <Box>
                    <ImgPlan src={Group3}/>
                    <SpanPlan>R$ 99,99</SpanPlan>
                </Box>
            </Link>
        </Anime>
    );
};