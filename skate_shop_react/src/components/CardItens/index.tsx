import { Product } from "./styleds"
import produto from "../../img/produtos/blacksheep.png"
const CardItens=() =>{

    return (
        <Product>

            <img src={produto} alt="" />
            <h2>Shape Hatched Red Blue 7.8 Element</h2>
            <span>Shape elemten Shape elemten Shape elemten Shape elemten Shape elemten Shape elemten Shape elemten Shape elemten Shape elemten Shape elemten Shape elemten </span>
            <button>Add Car</button>
            <div>Valor</div>
        </Product>
    )
}

export default CardItens