import styled from "styled-components";

const StaledContainer = styled.div`
    height: 276px;
    width: 100%;

    display: flex;
    flex-direction: column;
    top: 0;
    padding: 20px;

    h3{
        font-size: 32px;
        font-family: "Righteous";
        margin-bottom: 10px;
    }
    
    > div{
        display: flex;
        min-height: 232px;
        align-items: center;
        overflow-x: scroll;
        overflow-y: hidden;
    }
`;

export { StaledContainer };