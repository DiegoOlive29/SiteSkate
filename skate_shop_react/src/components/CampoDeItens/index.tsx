import  { useContext, } from "react";
import CardItens from "../CardItens"
import { MainProduct } from "./styleds"
import { MainFunctionContext } from "../../context/MainContext"
import { InterfaceProduct } from "../../context/MainContext"

const CampoDeItens=() =>{
    const {product} = useContext(MainFunctionContext)
    console.log(product)
    return (
        <MainProduct>
            {product === undefined?
                ('')
            :
                (product?.map((item:InterfaceProduct)=>
                        {
                            return(
                            <CardItens key={item.title} list={item}/>
                            )
                        }
                    )
                )
            }
    
        

        </MainProduct>
    )
}

export default CampoDeItens