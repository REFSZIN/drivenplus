import "./styled.js";
import Logo from "../../assets/images/logo.png";
import { Link } from "react-router-dom";
import { Anime, LogoUp, InputUp, BtnUp, FormUp, SpanUp } from "./styled.js";
export default function Register(){

    return(
        <Anime>
            <LogoUp src={Logo} alt="Logo Driven"/>
            <FormUp>
                <InputUp type="name" name="" id="" placeholder="Nome"/>
                <InputUp type="text" name="" id="" placeholder="CPF"/>
                <InputUp type="email" name="" id="" placeholder="E-mail"/>
                <InputUp type="text" name="" id="" placeholder="Senha"/>
                <BtnUp disabled="disabled">CADASTRAR</BtnUp>
            </FormUp>
            <Link to="/"><SpanUp>Já possuí uma conta? Entre</SpanUp></Link>
        </Anime>
    );
};