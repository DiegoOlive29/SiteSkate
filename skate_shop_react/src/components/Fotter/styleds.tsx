import styled  from "styled-components";

export const Footer = styled.footer`  

    background-color: var(--green);
    width           : 100%;
    height          : 70px;
    display         : flex;
    align-items     : center;
    flex-direction  : row;
    justify-content : space-around;
    margin-top      : 20px;
    

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
    
    width           : 90%;
    
    height          : 70px;
    border-bottom   : 1px solid var(--green);
    display         : flex;
    align-items     : center;
    flex-direction  : row;
    justify-content : flex-end;
    gap             : 20px;
`
export const AFooter = styled.a`
    background-color: var(--green);
    color           : var(--white);
    font-weight     : bold;
    width           : 100px;
    height          : 35px;
    border-radius   : 10px;
    border          : 2px solid var(--black);
    text-align      : center;
    padding-top     : 5px;
    
    :hover{
        background-color: var(--black);
        transition      : 1s;
    }

`

