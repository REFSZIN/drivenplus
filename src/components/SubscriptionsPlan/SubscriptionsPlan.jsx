import {Anime, LogoPlan, NamePlan, BoxInfo, ImgTodo, SpanTitle,BoxSpan, SpanInfo, ImgCash, InputCard1, InputCard2, BtnPlan, FormPlan } from "./styled.js";
import Todo from "../../assets/images/To-do.svg"
import Cash from "../../assets/images/Cash.svg"
import Group1 from "../../assets/images/Group 1.svg"

export default function SubscriptionsPlan(){

    return(
        <Anime>
        <LogoPlan src={Group1} alt="Plano" srcset="" />
        <NamePlan>Driven taltal</NamePlan>
        <BoxInfo>
            <ImgTodo src={Todo} alt="To-do"/>
            <SpanTitle>Benefícios:</SpanTitle>
            <BoxSpan>
                <SpanInfo>1. Brindes exclusivos</SpanInfo>
                <SpanInfo>2. Materiais bônus de web</SpanInfo>
            </BoxSpan>
        </BoxInfo>
        <BoxInfo>
            <ImgCash src={Cash} alt="Cash"/>
            <SpanTitle>Preço:</SpanTitle>
            <BoxSpan>
                <SpanInfo>R$ 39,99 cobrados mensalmente</SpanInfo>
            </BoxSpan>
        </BoxInfo>
        <FormPlan>
            <InputCard1 type="text" name="" id="" placeholder="Nome impresso no cartão"/>
            <InputCard1 type="text" name="" id="" placeholder="Digitos do cartão"/>
            <InputCard2 type="text" name="" id="" placeholder="Código de segurança"/>
            <InputCard2 type="text" name="" id="" placeholder="Validade"/>
            <BtnPlan>ASSINAR</BtnPlan>
        </FormPlan>
        </Anime>
    );
};