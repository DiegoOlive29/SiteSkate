import { Product, ImgCamp, DivImg,TitleProduct, DescProduct,ButtonProduct,Category,ValueCamp} from "./styleds"
import { InterfaceProduct } from "../../context/MainContext"

interface ICard{
    list: InterfaceProduct

}
const CardItens=({list}:ICard) =>{

    return (
        <Product>

            <DivImg><Category>{list.category}</Category><ImgCamp src={list.srcImg} alt="" /></DivImg>
            <TitleProduct>{list.title}</TitleProduct>
            <DescProduct>{list.textDescription}</DescProduct>
            
            <ValueCamp>
            <ButtonProduct>Adicionar ao carrinho</ButtonProduct>
                 R$: {list.price}
            </ValueCamp>
        </Product>
    )
}

export default CardItens