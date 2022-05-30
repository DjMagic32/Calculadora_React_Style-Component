import React from "react";
import styled from "styled-components"



const ButtonClear =  (props) => {
    return(
        <ButtonClearContainer 
        onClick={props.clickClear}
        >
            {props.children}
        </ButtonClearContainer>
    )



};

//STYLES
const ButtonClearContainer = styled.div`
    height: 80px;
    font-size: 1.6em;
    display: flex;
    flex: 1;
    background-color: #F9F871;
    margin-top: 8px;
    justify-content: center;
    align-items: center;
    font-weight: bold;
    color: black;
    cursor: pointer;
    border: 2px solid black;
    border-radius: 50px;

    &:hover {
        background-color: #82A0AA;
    }
`;  

export default ButtonClear;