import styled from "styled-components";

const MainModalContainer = styled.div`
    position: fixed;    
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: 9999;
    width: 100vw;
    height: 100vh;
    background-color: rgba(0,0,0,.5);
    display: flex;
    justify-content: center;
    align-items: center;
    display: flex;
    flex-direction: column;
    div{
        text-align: center;
        border: 2px solid white;
        border-radius: 10px;
        padding: 20px 30px;
        background-color: #419E99;
    }
    h1{
        line-height: 80px;  
        font-size: 45px;
        color: white;
    }
    img{
        border-radius: 20px;
    }
    h3{
        line-height: 35px;  
        font-size: 25px;
        color: white;
    }
    .modal-wrapper{
        width: 100%;
        max-width: 900px;
        min-height: 300px;
        background-color: white;
        .tob-bar{
            background-color: white;
            padding: 5px;
            text-align: center;
            span{
                color: white;
                cursor: pointer;
            }
        }
    }
`;

export default MainModalContainer;