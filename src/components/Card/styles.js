import styled from "styled-components";

const StyledCard = styled.div`
        
    display: flex;
    position: relative;
    min-width: 172px;
    margin: 5px;
    border-radius: 9px;
    border:${ props => props.seleciona ? '5px solid #32b72f' : 'none' };
    box-shadow: 0 0 5px rgba(0, 0, 0, 0.2);
    flex-direction: column;
    justify-content: space-between;

    width: 172px;
    height: 216px;
    padding: 14px;

    background-color: white;

        
    img{
        width: 144px;
        height: 87px;
        object-fit: cover;
        object-position: center;
    }

    h4{
        font-weight: 700;
        font-size: 16px;
        color: #333;
    }

    p{
        color: #a6a6a6;
        font-size: 15px;
        font-weight: 300;
    }

    span{
        font-size: 16px;
    }

    svg{
        display:${ props => props.seleciona ? 'initial' : 'none' };
        color: #32b72f;
        position: absolute;
        right: 10px;
        bottom: 10px;
    
    }
`;

export { StyledCard };