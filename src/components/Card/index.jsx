import React, { useState } from "react";
import { StyledCard } from './styles';
import { BsCheckCircleFill } from 'react-icons/bs';

const Card = (props) => {

    const [seleciona,setSeleciona] = useState(false);
    

    const handleCiclk = () =>{

        if(seleciona){
            props.setPrato(undefined);
            
        }
        else{
            props.onClick();
        }

        setSeleciona(!seleciona);
    };


    return(
        <StyledCard seleciona={seleciona}
            onClick={handleCiclk}>
            <img src={props.image} alt={props.altText} />
            <h4>{props.title}</h4>
            <p>{props.description}</p>
            <span>{props.price}</span>
            <BsCheckCircleFill></BsCheckCircleFill>
        </StyledCard>
    );
}

export { Card };