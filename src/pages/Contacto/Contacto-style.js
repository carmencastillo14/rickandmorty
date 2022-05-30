import styled from 'styled-components';

const ContactoContenedor = styled.div`
    .hero-wrapper{
        text-align: center;
        color: white;
    }   
    form{
        margin-top: -17%;
        display:flex;
        justify-content: center;
        flex-direction:column;
        align-items:center;
        width:100%;
        span{
            margin-top: 5px;
            font-weight:bold;
            letter-spacing:1px;
            background-color:#419E99;
            padding: 5px 20px;
            border-radius:8px;
            cursor:pointer;            
            color:#FFF;
        }

    }
    input,textarea{
        font-weight:bold;
        letter-spacing:1px;
        background-color:#419E99;
        padding: 5px 20px;        
        border:solid 3px #FFF;
        border-radius:8px;        
        color:#fff;
        transition: all .4s; 

        ::placeholder{
            color:#fff;
        }
    }

`;

export default ContactoContenedor;