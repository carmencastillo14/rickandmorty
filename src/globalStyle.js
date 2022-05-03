import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        box-sixing: border-box;
        bacground-color: #419E99;
    }

    img{
        max-width: 100%;
    }

    ul{
        list-style:none;
    }

    li{
        list-style: none;
    }


    a{
        text-decoration: none;
    }
`;

export default GlobalStyle;