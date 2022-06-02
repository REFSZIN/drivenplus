import {ImgSetinha ,FormChange ,InputChange, BtnInfo} from "./styled.js";
import Setinha from "../../assets/images/Setinha.svg"
import { Link } from "react-router-dom";

export default function UsersEditUpdate(){

    return(
        <>
        <Link to="/users/:ID_DO_USUARIO"><ImgSetinha src={Setinha}/></Link>
        <FormChange>
            <InputChange placeholder="Fulano"></InputChange>
            <InputChange placeholder="111.111.111-11"></InputChange>
            <InputChange placeholder="fulano@email.com"></InputChange>
            <InputChange placeholder="Senha atual"></InputChange>
            <InputChange placeholder="Nova senha"></InputChange>
            <Link to="/users/:ID_DO_USUARIO"><BtnInfo>SALVAR</BtnInfo></Link>
        </FormChange>
        </>
    );
};