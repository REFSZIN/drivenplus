import { Link } from "react-router-dom";
import Group1 from "../../assets/images/Group 1.svg"
import User from "../../assets/images/User.svg"
import {Anime, ImgGroup, ImgUser} from "./styled.js";

export default function Header(){

    return(
    <Anime>
        <Link to="/">
            <ImgGroup src={Group1}/>
        </Link>
        <Link to="/users/:ID_DO_USUARIO">
            <ImgUser src={User}/>
        </Link>
    </Anime>
    );
};