import styled from "styled-components";

const RickandMortyCardContainer = styled.article`
    margin-botton: 10px;
    display: flex;
    align-item: center;
    text-align: center;
    flex-direction: column;
    margin-top: 20px;
    justify-content: center;
    min-heigth: fit-content;
    min-width: 250px;
    padding: 15px;
    border: solid 2px  #419E99;
    border-radius: 15px;
    h3{
        font-weight: bold;
        font-size: 20px;
        line-height: 48px;
    }
    img{
        border-radius: 20px;
        max-width: 300px;
    }
    span{
        font-weight: bold;
        border: 2px solid #419E99;
        margin-top: 20px;
        background-color: #419E99;
        padding: 5px 10px;
        border-radius: 5px;
        cursor: pointer;
        color: white;
        transition: all .4s;
        &:hover{
            box-shadow: none;
            font-weight: bold;
            border: 2px solid #419E99;
            background-color:#FFF;
            color: #419E99;
        }
    }
    
`;

export default RickandMortyCardContainer;