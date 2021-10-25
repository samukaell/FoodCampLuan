import styled from "styled-components";


const StyledHeader = styled.header`
    width: 100%;
    height: 92px;
    z-index: 100;

    padding: 18px;
    
    display: flex;
    position: fixed;
    
    max-width: 600px;
    flex-direction: column;

    justify-content: center;

    box-shadow: 0 0 5px rgba(0, 0, 0, 0.3);
    background-color: #cf2b2b;

    font-size: 18px;
    color: white;


    h1{
        font-family: "Righteous";
        font-size: 44px;
    
    }

    h2{
        font-size: 18px;
    }

`;

export { StyledHeader }