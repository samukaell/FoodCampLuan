import React from "react";
import { StyledFooter } from './styles'

const Footer = ({enabled})=>{
    return(
        <StyledFooter disadled={!enabled}>
           <button disadled={!enabled}>Selecione os 3 item para fechar o pedido.</button> 
        </StyledFooter>
    );
}

export { Footer };