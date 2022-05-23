import React from "react";
import styled from "styled-components"


const Screen = ({ input }) => {

    return(
        <InputScreenContainer>
        
            {input}
        
        </InputScreenContainer>
        
    );

};



//STYLES

const InputScreenContainer = styled.div`
    height: 75px;
    border-radius: 50px;
    margin-bottom: 20px;
    display: flex;
    justify-content: flex-end;
    align-items: center;
    font-weight: bold;
    font-size: 30px;
    background-color: #0a0a23;
    color: #B9B9B9;
    padding: 11px 30px 11px 11px;
    margin: 1px solid #B9B9B9;
    box-shadow: -1px 4px 1px 1px #B9B9B9;
    
`;

export default Screen;