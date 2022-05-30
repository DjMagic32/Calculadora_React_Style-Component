import DukeenLogo from "./staticfiles/DUKLEEN_LOGO_OFICIAL.png";
import styled from "styled-components";
import Button  from "./components/Button.jsx";
import Screen from "./components/Screen.jsx";
import ButtonClear from "./components/ButtonClear.jsx";
import { useState } from "react";
import { evaluate } from "mathjs"

const Application = () => {

  let [entrada , setEntrada] = useState ('');

  let agregarEntrada = (value) => {
    setEntrada(entrada + value);
  };

  let calculateResult = () => {
    setEntrada(evaluate(entrada))
  }

  return (
    <Appl>
      <LogoContainer>
        <DukeenLogoImg 
          src={DukeenLogo}
          className='logo'
          alt='logo app' />

      </LogoContainer>
      
      <ContenedorCalculator>
      <Screen input={entrada}/>
        <RowCalculator>
            <Button clickhandler={agregarEntrada}>1</Button>
            <Button clickhandler={agregarEntrada}>2</Button>
            <Button clickhandler={agregarEntrada}>3</Button>
            <Button clickhandler={agregarEntrada}>+</Button>
        </RowCalculator>
        <RowCalculator>
            <Button clickhandler={agregarEntrada}>4</Button>
            <Button clickhandler={agregarEntrada}>5</Button>
            <Button clickhandler={agregarEntrada}>6</Button>
            <Button clickhandler={agregarEntrada}>-</Button>
        </RowCalculator>
        <RowCalculator>
            <Button clickhandler={agregarEntrada}>7</Button>
            <Button clickhandler={agregarEntrada}>8</Button>
            <Button clickhandler={agregarEntrada}>9</Button>
            <Button clickhandler={agregarEntrada}>*</Button>
        </RowCalculator>
        <RowCalculator>
            <Button clickhandler={calculateResult}>=</Button>
            <Button clickhandler={agregarEntrada}>0</Button>
            <Button clickhandler={agregarEntrada}>.</Button>
            <Button clickhandler={agregarEntrada}>/</Button>
        </RowCalculator>
        
            <ButtonClear clickClear={() => setEntrada('')}>Clear</ButtonClear>
      

      </ContenedorCalculator>
    </Appl>
  );
}

const Appl = styled.div`
     width: 100%;
     height: auto;
     padding: 10px;
     //background-color: #f3c314;
     margin: 0;
     display: flex;
     flex-direction: column;
     justify-content: center;
     align-items: center;

`; 

const LogoContainer = styled.div`
    width: 100%;
    height: auto;
    margin: 8px;
    display: flex;
    justify-content: center;
    align-content: center;

`;

const DukeenLogoImg = styled.img`
    height: 100px;
    width: 100px;
    border-radius: 500px;
`; 

const ContenedorCalculator = styled.div`
    width: 400px;
    height: auto;
    padding: 14px;
    background-color: #B3AA99;
    border-radius: 30px;
    border: 5px solid #4D4637;

`;

const RowCalculator = styled.div`
    margin: 4px;
    display: flex;
    align-items: center;
    justify-content: center;
`;


export default Application;