import { Footer, AFooter, Left, Centro } from "./styleds"
import logo from "../../img/logo1.png"
const FooterComp=() =>{

    return (
        <Footer>
            <Centro>
                <a href="..."><img className='logo' src={logo} alt="Logo"/></a>
                <Left>    
                    <AFooter href="/">Home</AFooter>
                    <AFooter href="https://www.linkedin.com/in/diegooliveiraguimaraes/">Linkedin</AFooter>
                 
                </Left>
            </Centro>
        </Footer>
    )
}

export default FooterComp