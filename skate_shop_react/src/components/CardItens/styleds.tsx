import styled  from "styled-components";

export const Product = styled.main`  

    background-color: var(--black);
    width           : 350px;
    min-height          : 500px;
    display         : flex;
    align-items     : center;
    flex-direction  : column;
    justify-content : space-between;
    color           : var(--white);
    border          : solid 2px var(--green);
    
    
     
`

export const ImgCamp = styled.img`
    width           :200px;
    height          :200px;
    :hover{
        zoom        :10;
    }

`



export const TitleProduct = styled.h2`
padding-left    : 5px;

`

export const DescProduct = styled.span`
    padding-left    : 5px;
        `

export const ButtonProduct = styled.button`
    color           : var(--white);
    background-color: var(--green);
    width           : 100%;
    height          : 40px;
    border          : none;
    font-size       : 16px;
    font-weight     : bold;
    :hover{
    background-color: var(--greendetail);
    transition      : 1s;
    }
  

    `

export const ValueCamp = styled.div`
    width           :100%;
   
    display         : flex;
    flex-direction  : column;
    align-items     : center;
    justify-content : flex-start;
    background-color: var(--green);
    padding-bottom  : 10px;

`
export const Category = styled.div`
    color           : var(--white);
    background-color: var(--green);
    height          : 30px;
    width           : 100px;
    border-radius   : 0 10px 0 0;
    display         : flex;
    align-items     : center;
    justify-content : center;
    

`
export const DivImg = styled.div`
    width           : 100%;
    display         : flex;
    flex-direction  : row;
    align-items     : flex-end;
    justify-content : flex-start;
    background-color: var(--white);

    
`


    

   
