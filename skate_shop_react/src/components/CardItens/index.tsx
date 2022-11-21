import { Product, ImgCamp, DivImg,TitleProduct, DescProduct,ButtonProduct,Category,ValueCamp} from "./styleds"
import produto from "../../img/produtos/blacksheep.png"
const CardItens=() =>{

    return (
        <Product>

            <DivImg><Category>Rolamentos</Category><ImgCamp src={produto} alt="" /></DivImg>
            <TitleProduct>Shape Hatched Red Blue 7.8 Element</TitleProduct>
            <DescProduct>Shape elemten Shape elemten Shape elemten Shape elemten Shape elemten Shape elemten Shape elemten Shape elemten Shape elemten Shape elemten Shape elemten </DescProduct>
            
            <ValueCamp>
            <ButtonProduct>Add Car</ButtonProduct>
                 Valor
            </ValueCamp>
        </Product>
    )
}

export default CardItens