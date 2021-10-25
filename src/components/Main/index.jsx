import React from "react";
import  { Container } from '../Container';
import { StyledMain } from './styles';
import { data } from '../../database/data'

const Main = ({setFoods}) =>{

    return(
        <StyledMain> 
            {data.map((item, index)=> <Container setPrato={setFoods[index]} title={item.title} cards={item.cards}/>)}
        </StyledMain>    
        
    );
};

export { Main };