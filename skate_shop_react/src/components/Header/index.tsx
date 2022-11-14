import { HeaderTop, ButtonHeader, Left, Centro } from "./styleds"
import logo from "../../img/logo1.png"
const Header=() =>{

    return (
        <HeaderTop>
            <Centro>
                <a href="..."><img className='logo' src={logo} alt="Logo"/></a>
                <Left>    
                    <ButtonHeader>Todos</ButtonHeader>
                    <ButtonHeader>Shape</ButtonHeader>
                    <ButtonHeader>Rolamentos</ButtonHeader>
                    <ButtonHeader>Ferramenta</ButtonHeader>
                    <ButtonHeader>Truck</ButtonHeader>
                    <ButtonHeader>Roda</ButtonHeader>
                </Left>
            </Centro>
        </HeaderTop>
    )
}

export default Header