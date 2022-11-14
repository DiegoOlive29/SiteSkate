import styled  from "styled-components";

export const HeaderTop = styled.div`  

    background-color: var(--black);
    width           : 100%;
    height          : 70px;
    border-bottom   : 2px solid var(--green);
    display         : flex;
    align-items     : center;
    flex-direction  : row;
    justify-content : space-around;
    

    .logo{
        margin-top  : 10px;
        width       : 60px;
        height      : 60px;
    }
    `

export const Centro = styled.div`
    max-width       : 1600px;
    width           : 100%;
    display         : flex;
    align-items     : center;
    flex-direction  : row;
    justify-content : space-around;


`
export const Left = styled.div`
    background-color: var(--black);
    
    width           : 90%;
    
    height          : 70px;
    border-bottom   : 1px solid var(--green);
    display         : flex;
    align-items     : center;
    flex-direction  : row;
    justify-content : flex-end;
    gap             : 20px;
`
export const ButtonHeader = styled.button`
    background-color: var(--black);
    color           : var(--white);
    font-weight     : bold;
    width           : 100px;
    height          : 35px;
    border-radius   : 10px;
    border          : 2px solid var(--green);
    
    :hover{
        background-color: var(--green);
        margin-top      : 10px;
        transition      : 1s;
    }

`



