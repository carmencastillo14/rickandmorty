import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        box-sixing: border-box;
    }

    img{
        max-width: 100%;
    }

    li{
        list-style: none;
    }

    a{
        text-decoration: none;
    }
`;

export default GlobalStyle;