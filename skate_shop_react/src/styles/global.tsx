import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`

    :root{
    --black: #000;
    --green:#055e25;
    --greendetail:#0b8337;
    --white:#fff;
    --red:rgb(255,0,0);
    --grey: #333;  


    }
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }
    button {
        cursor: pointer;
    }
    li,ul {
        list-style: none;
    }
    a{
        text-decoration: none;
    }
    img{
        max-width: 100%;
    }
    body{
        background-color:var(--black);
    }
`