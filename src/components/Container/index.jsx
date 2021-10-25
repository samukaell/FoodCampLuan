import React, { useState } from "react";
import { StaledContainer } from "./styles"
import { Card } from "../Card";

const Container = (props) =>{


    const handleCiclk = (card) =>{
        props.setPrato(card)
    };

    return(
        <StaledContainer>
            <h3>{props.title}</h3>
            <div>{props.cards.map(card => <Card 
                image={card.image} 
                altText={card.altText} 
                title={card.title} 
                description={card.description}
                price={card.price}
                onClick = {() => handleCiclk(card)}
                setPrato = {props.setPrato}
                />)}
            </div>
        </StaledContainer>
    );
}

export { Container };