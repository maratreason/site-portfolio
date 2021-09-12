import {createGlobalStyle} from "styled-components";

export default createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        outline: 0;
        box-sizing: border-box;
    }

    #root {
        margin: 0;
    }

    html {
    }

    body {
        color: #5C5C5C;
        font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    }

    ul {
        list-style: none;
    }

    input, button {
        outline: none;
    }

    a {
        text-decoration: none;
    }
`;
