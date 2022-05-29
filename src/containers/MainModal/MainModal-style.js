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
    .modal-wrapper{
        width: 100%;
        max-width: 900px;
        min-height: 300px;
        background-color: white;
        .tob-bar{
            padding: 5px;
            text-align: center;
            span{
                cursor: pointer;
            }
        }
    }
`;

export default MainModalContainer;