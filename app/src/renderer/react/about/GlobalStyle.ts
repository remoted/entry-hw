import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
    @font-face {
        font-family: NanumGothic;
        src: url('../fonts/NanumGothic.woff');
    }
    
    * {
        font-family: NanumGothic, serif !important;
        user-select: none;
        cursor: default;
    }
    
    html,
    body {
        height: 100%;
        margin: 0;
        background-color: #ecf4ff;
    }
    
    .container {
        height: 100%;
        display: flex;
    }
    
    .container .container_inner {
        display: flex;
        flex-direction: column;
        width: 100%;
        height: 100%;
        text-align: center;
        align-self: center;
    }
    
    .container .container_inner>div {
        align-self: center;
    }
    
    .container .container_inner .logo_wrapper {
        background-image: url(../images/about/fill-1.png);
        background-repeat: repeat-x;
        width: 100%;
        height: 142px;
        display: flex;
        justify-content: center;
        align-items: center;
    }
    
    .container .container_inner .logo_wrapper .logo {
        width: 204px;
        height: 42px;
    }
    
    .container .container_inner .txtVersion {
        font-size: 16px;
        margin: 16px 0 10px;
    }
    
    .container .container_inner .btnVersionUpdate {
        display: none;
        cursor: pointer;
        padding-left: 14px;
        padding-right: 14px;
        height: 42px;
        line-height: 42px;
        background-color: #6e5ae6;
        border-radius: 3px;
        color: #ffffff;
    }
    
    .container .container_inner .txtAlreadyVersion {
        display: none;
        height: 42px;
        line-height: 42px;
        font-weight: bold;
        color: #3b3b3b;
    }
    
    a {
        text-decoration: initial;
        color: #6e5ae6;
        cursor: pointer !important;
    }
    
    img {
        width: 50px;
        height: 50px;
    }
`;

export default GlobalStyle;
