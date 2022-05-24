import styled from "styled-components";

const RickListContainer = styled.ul`
    color: #419E99;
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    flex-wrap: wrap;
    padding: 40px 0;
    @media screen and (max-width: 682px){
        justify-content: center;
        align-items: center;
    }
`;

export default RickListContainer;