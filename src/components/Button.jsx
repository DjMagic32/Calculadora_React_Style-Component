import { hover } from "@testing-library/user-event/dist/hover";
import React from "react";
import styled from "styled-components";

const Button = (props) => {
    const isOperator = (value) =>{
        
        return isNaN(value) && (value != '.') && (value != '=') 

    }

    return(
    <ButtonDiv 
        theme={isOperator(props.children) ? theme:''}>
        {props.children}
    </ButtonDiv>
    ); 
};


//STYLES
const ButtonDiv =  styled.div`
    height: auto;
    flex: 1 1;
    display: flex;
    justify-content: center;
    align-items: center;
    font-weight: bold;
    font-size: 38px;
    border: 2px solid white;
    color: white;
    border-radius: 15px;
    margin: 4px;
    cursor: pointer;
    user-select: none;
    background-color: ${props => props.theme.main};
    &:hover {
        background-color: ${props => props.theme.hover}; // <Thing> when hovered
    }
`;


ButtonDiv.defaultProps = {
    theme: {
        main: "#1b1b32",
        hover: "#5a4272" 
    }
};

// Define what props.theme will look like
const theme = {
    main: "#00471b",
    hover: "#ff6600" 

  };

export default Button;