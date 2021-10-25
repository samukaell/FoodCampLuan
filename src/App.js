import { useState } from 'react';
import { Main } from '../src/components/Main'
import { Footer } from './components/Footer';
import { Header } from './components/Header';

const App = ()=>{

  const [comida,setComida] = useState();
  const [bebida,setBebida] = useState();
  const [sobremesa,setSobremesa] = useState();


  return (
    <>
      <Header/>
      <Main setFoods = {[setComida, setBebida, setSobremesa]} />
      <Footer enabled={comida && bebida && sobremesa} />
    </>
  );
};

export default App;
