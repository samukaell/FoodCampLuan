import styled from "styled-components";

const StyledFooter = styled.footer`
    position: fixed;
    display: flex;
    z-index: 100;
    bottom: 0;
    justify-content: center;
    align-items: center;
    height: 92px;
    width: 100%;
    max-width: 600px;

    background-color: white;
     
    button{
        font-size: 24px;
        color: white;
        background-color:${props => props.disadled ? '#cbcbcb' : '#32b72f'} ;
        border-radius: 50px;
        text-align: center;
        width: 80%;
        height: 60px;
        border: none;
    }
`;

export { StyledFooter }