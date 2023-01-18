import styled  from "styled-components";

export const Cart = styled.div`  

    background      : var(--grey);
    width           : 300px;
    max-width       : 700px;
    min-height      : 100px;
    display         : flex;
    align-items     : flex-start;
    flex-direction  : row;
    flex-wrap       : wrap;
    justify-content : center;
    color           : var(--white);
    font-weight     : bold;
    margin-top      : 20px;
    border          : var(--green) 2px solid;;

    `


export const BottonSearch = styled.button`

    width           : 20%;
    height          : 40px;
    background-color: var(--green);
    color           : var(--white);
    font-weight     : bold;
    border          : var(--green) 2px solid;;
    :hover{
        background-color: var(--black);
        border          : var(--green) 2px solid;
        transition      : 1s;
    }

`
export const BarSearch = styled.div`

    width           : 80%;
    height          : 40px;
    border          : var(--green);
    background-color: var(--white);
    color           : var(--black);
    font-weight     : bold;
    border-bottom   : var(--green) 2px solid;
    margin-bottom   : 10px;

    :hover{
        border          : var(--green) 2px solid;
        transition      : 1s;
    }
   

`

export const TitleCamp = styled.div`
    width           : 100%;
    display         : flex;
    background-color: white;

    
`