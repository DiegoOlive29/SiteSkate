import { InterfaceProduct, MainFunctionContext } from "../../context/MainContext"
import { BarSearch, BottonSearch, Cart, TitleCamp } from "./styleds"
import  { useContext, } from "react";
import CartItensUnid from "../cartItemU";

const CartItens=() =>{
    const {cartItens} = useContext(MainFunctionContext)

    return (
        <Cart>

            <TitleCamp>
                <BarSearch/>
                <BottonSearch>Comprar</BottonSearch>
            </TitleCamp>
            {cartItens.length === 0?
                ('Carrinho esta vazio!')
            :
                (cartItens?.map((item:InterfaceProduct)=>
                        {
                            return(
                            <CartItensUnid key={item.title} list={item}/>
                            )
                        }
                    )
                )
            }

        </Cart>
    )
}

export default CartItens