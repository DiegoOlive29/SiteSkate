import React, { createContext, useState } from "react";
import produto1 from "../../img/produtos/shape.jpg"
import produto2 from "../../img/produtos/redbones.png"
import produto3 from "../../img/produtos/trucks.png"
import produto4 from "../../img/produtos/rodasbones.png"
import produto5 from "../../img/produtos/chave.png"
import produto6 from "../../img/produtos/santacruzshape.jpg"
import produto7 from "../../img/produtos/santashapepreto.png"
import produto8 from "../../img/produtos/santacruzcoloridoshape.jpg"
import produto9 from "../../img/produtos/shapeElement.png"
import produto10 from "../../img/produtos/elementPlanet.png"
import produto11 from "../../img/produtos/chaveT56.png"
import produto12 from "../../img/produtos/chaveT.png"
import produto13 from "../../img/produtos/funLigth.png"
import produto14 from "../../img/produtos/strongertruck.png"
import produto15 from "../../img/produtos/owlsports.png"
import produto16 from "../../img/produtos/brackshaprolamento.png"
import produto17 from "../../img/produtos/rolamentoverde.png"
import produto18 from "../../img/produtos/blacksheep.png"
import produto19 from "../../img/produtos/blacksheepgold.png"
import produto20 from "../../img/produtos/rodaroxa.png"
import produto21 from "../../img/produtos/rodagold.png"


export interface MainContextData{
    product:InterfaceProduct[]

}
export interface InterfaceProduct{
    srcImg: string 
    category: string
    title: string
    textDescription: string
    price: string
}
interface MainContextProviderType{
    children :React.ReactNode;
}
export const MainFunctionContext = createContext({}as MainContextData);

export const MainFunctionProviders=({children}: MainContextProviderType) =>{
    const [product, setProduct] = useState([
        {srcImg:produto1,
        category:"Shape",
        title:"SHAPE HATCHED RED BLUE 7.8 ELEMENT",
        textDescription:"Shape element, com logo personalizado na parte de baixo, tamanho unico e furagem padrão.",
        price:"350.00"
    },
    {srcImg:produto2,
        category:"Rolamentos",
        title:"Rolamentos Red Bones Reds Original",
        textDescription:"Rolamentos RedBones, possui 7 esferas dentro e vontem 8 unidades dentro da caixa, com proteção para evitar que algum objeto indejavel entre neles.",
        price:"100.00"
    },
    {srcImg:produto3,
        category:"Truck",
        title:"TRUCK PROFISSIONAL FUN LIGHT 139MM BLACK",
        textDescription:"Truck Profissional Fun Light 139mm Black  foi desenvolvido para quem precisa de um truck de qualidade com um preço acessível. Seu formato facilita o encaixe das manobras nas traves e corrimãos. Testado e aprovado por atletas e praticantes de alta performance.",
        price:"133.95"
    },
    {srcImg:produto4,
        category:"Rodas",
        title:"RODA NEXT LL SKATE 53MM DUREZA 100A",
        textDescription:"A roda Next 53mm 100a fabricada pela renomada marca Moska Skate, a roda foi desenvolvido por um processo de produção fundido que é superior ao injetado. Ela tem um preço mais em conta e mesmo assim não perde a qualidade e a perfomace. ",
        price:"69.99"
    },
    {srcImg:produto5,
        category:"Ferramentas",
        title:"Chave T Skate E Longboard Multifuncional P/ Manutenção",
        textDescription:"Chave T para skate e longboard. Manutenção e regulagem. Chave Multi Uso Perfeita para Skatistas. Portáteis, leves e fáceis de carregar é uma ferramenta Multifuncional",
        price:"35.00"
    },
    {srcImg:produto6,
        category:"Shape",
        title:"Shape Santa Cruz Fibra Powerlyte - 8.5",
        textDescription:"A linha Powerlyte da Santa Cruz Skateboards, possui uma fórmula especial mantendo os altos padrões de fabricação exigidos pelo mercado norte-americano, sendo a única do mundo autorizada pela Santa Cruz Skateboards a ser produzida fora da fábrica matriz.",
        price:"219.95"
    },
    {srcImg:produto7,
    category:"Shape",
    title:"SHAPE PARA SKATE SANTA CRUZ 8.0",
    textDescription:"Shape Santa Cruz é uma das maiores marcas do skate mundial, desde os anos 70 procura desenvolver os melhores equipamentos para os praticantes do esporte, ou seja, têm mais de 40 anos de experiência na produção de shapes.",
    price:"259.95"
    },
    {srcImg:produto8,
    category:"Shape",
    title:"Shape Santa Cruz Fibra Powerlyte - 8.25",
    textDescription:"A linha Powerlyte da Santa Cruz Skateboards, possui uma fórmula especial mantendo os altos padrões de fabricação exigidos pelo mercado norte-americano, sendo a única do mundo autorizada pela Santa Cruz Skateboards a ser produzida fora da fábrica matriz.",
    price:"239.95"
    },
    {srcImg:produto9,
    category:"Shape",
    title:"SHAPE ELEMENT MAPLE LUCAS XAPARRAL - 8.180",
    textDescription:"O Shape de skate element possui a maior aderência entre as lâminas, proporcionando resistência, leveza e melhor espessura por isso, são a melhor opção para quem quer mais desempenho e durabilidade. Shape com ótimo acabamento e pop de alta qualidade.",
    price:"329.99"
    },
    {srcImg:produto10,
    category:"Shape",
    title:"SHAPE ELEMENT MAPLE POTA COVET DECK - 8.180",
    textDescription:"O Shape de skate element possui a maior aderência entre as lâminas, proporcionando resistência, leveza e melhor espessura por isso, são a melhor opção para quem quer mais desempenho e durabilidade.",
    price:"349.99"
    },
    {srcImg:produto11,
    category:"Ferramenta",
    title:"Chave Para Skate Y Cossinete Preta Refaz A Rosca Eixo Aço",
    textDescription:"A Chave para Skate Y é uma ferramenta versátil e prática que possibilita fazer reparos e manutenções diversas em skates, como fazer apertos e desapertos em parafusos e até mesmo refazer a rosca do seu truck.",
    price:"37.91"
    },
    {srcImg:produto12,
    category:"Ferramenta",
    title:"Kit Chave Para Skate E Longboard",
    textDescription:"O Shape de skate element possui a maior aderência entre as lâminas, proporcionando resistência, leveza e melhor espessura por isso, são a melhor opção para quem quer mais desempenho e durabilidade.",
    price:"51.45"
    },
    {srcImg:produto13,
    category:"Truck",
    title:"TRUCK PROFISSIONAL FUN LIGHT 139MM VERMELHO",
    textDescription:"Truck Profissional Fun Light 139mm Vermelho foi desenvolvido para quem precisa de um truck de qualidade com um preço acessível. Seu formato facilita o encaixe das manobras nas traves e corrimãos. ",
    price:"133.95"
    },
    {srcImg:produto14,
    category:"Truck",
    title:"TRUCK STRONGER LOGO CENTRAL VAZADO (PAR)",
    textDescription:"DOURADO/PRETO 129MM / 139MM / 149MM",
    price:"189.95"
    },
    {srcImg:produto15,
    category:"Truck",
    title:"Truck de skate owl Sports 129 MM Original",
    textDescription:"O Truck de Skate 129mm Original OWL Sports encaixa perfeitamente em qualquer shape de street. Os Trucks Street costumam ser menores que outros modelos, pois precisam seguir medidas que garantem o equilíbrio perfeito de todos os acessórios. ",
    price:"74.99"
    },
    {srcImg:produto16,
    category:"Rolamentos",
    title:"Rolamentos importados Black Sheep Red",
    textDescription:"Kit com 8 rolamentos Black Sheep Red de alta qualidade com acabamento exclusivo , Lubrificado e vedado. Indicado para todas as modalidades.",
    price:"49.99"
    },
    {srcImg:produto17,
    category:"Rolamento",
    title:"Tomshin Rolamentos de skate de 8 unidades",
    textDescription:"Rolamento para alta velocidade, contem 8 unidade, todas com camada de proteção.",
    price:"63.50"
    },
    {srcImg:produto18,
    category:"Rolamento",
    title:"Kit com 8 rolamentos de skate Black sheep Abec 11",
    textDescription:"De origem paulistana, a BlackSheep é uma marca filiada à Brutus Distribuidora, empresa totalmente ligada ao skate brasileiro. ",
    price:"48.99"
    },
    {srcImg:produto19,
    category:"Rolamentos",
    title:"ROLAMENTO IMPORTADO BLACK SHEEP GOLD",
    textDescription:"Faz da linha de um rolamento de precisão, que são os rolamentos de melhor qualidade do mercado. Fora sua estética com a cor dourada, é um rolamento de alta precisão muito superior aos rolamentos ABEC encontrados no mercado.",
    price:"58.90"
    },
    {srcImg:produto20,
    category:"Rodas",
    title:"Roda Hondar Falcon 70mm 86A",
    textDescription:"Roda Falcom foi desenvolvida para diversos tipos de asfalto. Com 70mm de diâmetro e dureza de 86A.",
    price:"247.89"
    },
    {srcImg:produto21,
    category:"Rodas",
    title:"Roda Skate Your Face Rust 53mm Preta",
    textDescription:"Desde 1993 no mercado, a Your Face conquistou a maioridade com muita atitude e investimento no skate, que a fez se tornar hoje uma das principais marcas de confecção e acessórios do país.",
    price:"74.99"
    }

    ] )

    return(
        <MainFunctionContext.Provider   value={{product}}>
            {children}
        </MainFunctionContext.Provider  >
    )

}

