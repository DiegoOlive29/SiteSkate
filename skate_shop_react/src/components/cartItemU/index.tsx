import { InterfaceProduct } from "../../context/MainContext"
import { CampMain,ImgCart, TitleCart, SpanCart} from "./styleds"

interface ICard{
    list: InterfaceProduct

}
const CartItensUnid=({list}:ICard) =>{
    return (

        <CampMain>

            <ImgCart src={list.srcImg} alt="" />
            <TitleCart>{list.title}</TitleCart>
            <SpanCart>{list.price}</SpanCart>

        </CampMain>
    )
}

export default CartItensUnid