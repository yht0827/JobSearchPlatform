import { createGlobalStyle } from "styled-components";
import "moment/locale/ko";
import reset from "styled-reset";

const globalStyles = createGlobalStyle`
@import url('https://fonts.googleapis.com/css?family=Rajdhani:700');
@import url('https://fonts.googleapis.com/css?family=Jua&display=swap');

    ${reset};
    
    a{
        text-decoration:none;
        color:inherit;
    }
    *{
        box-sizing:border-box;
    }
    body{
        margin:0;
        font-family:-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
        padding-top:20px;
        min-height: 800px;
    }
`;

export default globalStyles;
