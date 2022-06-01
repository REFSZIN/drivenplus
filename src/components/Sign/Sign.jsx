import Logo from "../../assets/images/logo.png";
import { Link} from "react-router-dom";
import { Anime, LogoSign, InputSign, BtnSign, FormSign, SpanSign } from "./styled.js";

export default function Sign(){

    return(
        <Anime>
            <LogoSign src={Logo} alt="Logo Driven"/>
            <FormSign>
                <InputSign type="email" name="" id="" placeholder="E-mail"/>
                <InputSign type="password" name="" id="" placeholder="Senha"/>
                <Link to="/subscriptions"><BtnSign disabled="">ENTRAR</BtnSign></Link>
            </FormSign>
            <Link to="/sign-up">
                <SpanSign>Não possuí uma conta? Cadastre-se</SpanSign>
            </Link>
        </Anime>
    );
};
