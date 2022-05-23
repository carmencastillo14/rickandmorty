import styled from "styled-components";
import { keyframes } from "styled-components";

const CharacterItemContainer = styled.li`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    list-style-type: none;
    padding: 10px;

    .textBoxTitle{
        position: relative;
        top: 49px;
        left:-27px;
        display: flex;
        flex-direction: column;
        justify-content: center;     
        width: 185px;
        height: 35px;
        text-align:left;       
        overflow: hidden;
        white-space: nowrap;
        text-overflow: ellipsis;           
        
        strong{
            padding:5px 5px 5px 10px;    
            
            overflow: hidden;
            white-space: nowrap;
            text-overflow: ellipsis;
            
            font-size: 18px;    
            font-weight: bolder;   
            letter-spacing: 1px;
            text-transform: uppercase;
            color: white;
            
            
            &:hover{            
                position: relative;

                text-transform: capitalize;
                background-color:transparent;
            }
        }
        
    }

    div.card{  
        background-image: url(${fichaPersonajes});
        background-repeat: no-repeat;
        background-clip: border-box;
        background-size: 300px 250px;
        text-align: center;
        display: flex;
        justify-content:space-around;
        align-items:flex-start;    
        width: 250px;
        height: 176px;
        padding-top: 48px;
        padding-left: 20px;
        padding-bottom: 25px;
        padding-right: 30px;
       
        div.verticalText{
            display: flex;
            flex-direction: column;
            writing-mode: vertical-lr;
            text-orientation: upright;
            font-family: AlienScript-Regular;
            text-transform: uppercase;
            color:#efefef;
            font-weight: bold;
            font-size:0.8rem;
            background: #00B1B8;
            border: 1px solid #EFEFEF;
            box-sizing: border-box;
            height: 150px;
            max-width: 22px;
            overflow: hidden;
            line-height: 22px;
            margin-top: 10px;
            p{
                height:100%;
                width:100%;
                margin: 0;
                padding: 0;
                line-height: 22px;
                &:hover{
                    font-family:Narcotix;
                }
            }
        }

        div.imageBox{
            max-width: 120px;
            height: fit-content;
            
            div.image{         
                -webkit-clip-path: polygon(10% 0, 90% 0, 100% 10%, 100% 90%, 90% 100%, 10% 100%, 0 90%, 0 10%);
                clip-path: polygon(10% 0, 90% 0, 100% 10%, 100% 90%, 90% 100%, 10% 100%, 0 90%, 0 10%);
                width: 100px;
                height: 120px;
                margin-top: 10px;
                background-color: #00B1B8;
                border: solid 5px #00B1B8;
                img{
                    -webkit-clip-path: polygon(10% 0, 90% 0, 100% 10%, 100% 90%, 90% 100%, 10% 100%, 0 90%, 0 10%);
                    clip-path: polygon(10% 0, 90% 0, 100% 10%, 100% 90%, 90% 100%, 10% 100%, 0 90%, 0 10%);
                    width: 100px;
                    height: 120px;
                    overflow:hidden;
                }
            }
            div.falseButtons{
                position:relative;
                display: flex;
                justify-content: space-around;
                align-items: center;
                width: 100%;
                height: 35px;
                padding-top: 5px;
                svg{
                    path{
                        stroke-dasharray: 1;
                        stroke-dashoffset: 1;
                        animation: ${fb1} 16s linear infinite alternate;
                    }
                }
                div:nth-child(2){
                    position:absolute;
                    left: 30px;
                    top: 8px;
                    background-color:#A6F1FE;
                    border-radius:50%;
                    animation: ${fb2} 3s linear 2s infinite alternate;
                }
                div:nth-child(3){
                    position:absolute;
                    left: 10px;
                    width: 10px;
                    height: 10px;
                    background-color:#A6F1FE;
                    border-radius:50%;
                    animation: ${fb3} 1.5s linear 1s infinite alternate;
                }
                div:nth-child(4){
                    position:absolute;
                    right:5px;
                    width: 5px;
                    height: 5px;
                    border: solid 3px #A6F1FE;
                    border-radius:50%;
                    background-color:transparent;
                    animation: ${fb4} 1.5s linear 4s infinite alternate;
                }
                div:nth-child(5){
                    position:absolute;
                    bottom: 5px;
                    right: 40px;                       
                    width: 5px;
                    height: 5px;   
                    border-bottom: solid 2px rgba(166,241,254,0.5);  
                    border-left: solid 2px #A6F1FE;
                    border-radius:50%;
                    animation: ${fb5} 3s linear infinite;
                }
                
            }
        }
        
        div.wrapItemText{
            display:flex;
            flex-direction: column;
            justify-content: space-around;
            align-items: center;
            max-width:100px;
            height:100%;    

            .textBoxBody{
                display: flex;
                flex-direction: column;
                justify-content: center;
                align-items: center;
                max-width: 100px;
                max-height: 100%;
                margin-top: 10px;
                overflow-x: hidden;
                text-overflow: ellipsis;
                background: #00686B;
                border: 1px solid #EFEFEF;
                box-sizing: border-box;

                //barra desplazamiento 
                ::-webkit-scrollbar {
                    width: 13px;    
                }
                ::-webkit-scrollbar-thumb  {
                    background-color: #00B1B8;
                    border-radius: 6px;    
                    border: 0.2rem solid rgba(0, 0, 0, 0);  
                    background-clip: padding-box; 
                  }
                ::-webkit-scrollbar-button {
                    display:none;
                }
                ::-webkit-scrollbar-track-piece {
                    border-radius: 2px;
                    background-color: #00B1B8;
                    background-clip: content-box;
                    border-radius: 6px;
                    border: solid 6px transparent;
                }
                ::-webkit-scrollbar-track-piece:decrement {
                    background: #EFEFEF;
                    background-clip: content-box;
                    border: solid 6px transparent;
                }


                p{
                    max-width: 90%; 
                    height: 100px;  
                    margin: auto;
                    padding: 5px 0;
                    font-family: Alien;
                    font-size: 15px;    
                    font-weight: regular;
                    text-align: center;   
                    letter-spacing: 1px;
                    color: white;
                    transition: font-variation-settings 0.3s ease;
                    overflow-wrap: break-word;
                    &:hover{
                        font-family:Narcotix;
                    }
                }    
                
            }            
            div.buttonSeeMore{
                display: flex;
                justify-content: center;
                align-items: center;
                width: fit-content;
                margin: auto;
                padding: 3px 20px;
                background-color: #0A94CF;
                border: 1px solid #EFEFEF;
                border-radius: 15px;
                align-self: stretch;
                cursor:pointer;
                transition: all .4s;
                &:hover{
                    background-color:#AAD5E8;
                    span, a{    
                        color: #0A94CF;
                        text-shadow:0 0 3px #efefef;
                    }
                }
                span,a{
                    text-align: center;
                    font-family: PatrickHandSC-Regular; 
                    color: white;
                    font-weight: 600;
                    letter-spacing: 1px;
                    line-height: 1rem;
                    padding-bottom: 3px;                    
                }        
            }
        }
    }
    
    
`;

export default CharacterItemContainer;