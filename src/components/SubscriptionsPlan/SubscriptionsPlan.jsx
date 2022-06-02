import {BoxBtn, ImgClose, Modal,Box,InfoModal,BtnModal1, BtnModal2, ImgSetinha, HeaderPlan, BoxTitle ,Anime, LogoPlan, NamePlan, BoxInfo, ImgTodo, SpanTitle,BoxSpan, SpanInfo, ImgCash, InputCard1, InputCard2, BtnPlan, FormPlan } from "./styled.js";
import Todo from "../../assets/images/To-do.svg"
import Cash from "../../assets/images/Cash.svg"
import Group1 from "../../assets/images/Group 1.svg"
import Setinha from "../../assets/images/Setinha.svg"
import Exit from "../../assets/images/Exit.svg"
import { Link } from "react-router-dom";

export default function SubscriptionsPlan(){

    return(<>
        <HeaderPlan>
            <Link to="/subscriptions"><ImgSetinha src={Setinha}/></Link>
        </HeaderPlan>
        <Anime>
            <LogoPlan src={Group1} alt="Plano" srcset="" />
            <NamePlan>Driven taltal</NamePlan>
            <BoxInfo>
                <BoxTitle>
                    <ImgTodo src={Todo} alt="To-do"/>
                    <SpanTitle>Benefícios:</SpanTitle>
                </BoxTitle>
                <BoxSpan>
                    <SpanInfo>1. Brindes exclusivos</SpanInfo>
                    <SpanInfo>2. Materiais bônus de web</SpanInfo>
                </BoxSpan>
            </BoxInfo>
            <BoxInfo>
                <BoxTitle>
                    <ImgCash src={Cash} alt="Cash"/>
                    <SpanTitle>Preço:</SpanTitle>
                </BoxTitle>
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
        <Modal>
            <ImgClose src={Exit}/>
            <Box>
                <InfoModal>Tem certeza que deseja<br/> assinar o plano<br/> Driven Plus (R$ 39,99)?</InfoModal>
                <BoxBtn>
                    <BtnModal1>Não</BtnModal1>
                    <Link to="/home"><BtnModal2>SIM</BtnModal2></Link>
                </BoxBtn>
            </Box>
        </Modal>
        </>
    );
};