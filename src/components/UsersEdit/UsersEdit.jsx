import {ImgSetinha, DivInfo, Info, BtnInfo } from "./styled.js";
import Setinha from "../../assets/images/Setinha.svg"
import { Link } from "react-router-dom";

export default function UsersEdit(){

    return(
        <>
        <Link to="/home"><ImgSetinha src={Setinha}/></Link>
        <DivInfo>
            <Info>Fulano</Info>
        </DivInfo>
        <DivInfo>
            <Info>111.111.111-11</Info>
        </DivInfo>
        <DivInfo>
            <Info>fulano@email.com</Info>
        </DivInfo>
        <Link to="/users/:ID_DO_USUARIO/update"><BtnInfo>ATUALIZAR</BtnInfo></Link>
        </>
    );
};