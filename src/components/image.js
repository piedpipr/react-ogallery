import styled from "styled-components";

import checkbox from "../static/icons/check.png"

export function SingleImage({item, index, selectItemsHandler}){
    return(
        <div>
        {item.isSelected ? 
        <StyledDiv>
        <StyledImgSelected src={item.uri} style={{ width: "100%", height: "100%", border: "1px solid #cacfa9", borderRadius: "4%"}}/>
        <StyledBoxSelected onClick={(index)=>(selectItemsHandler(item.uri))}><img src={checkbox} height="30px" width="30px" borderRadius="10%"/></StyledBoxSelected>
        </StyledDiv>
        : 
        <StyledDiv>
        <StyledImg src={item.uri} style={{ width: "100%", height: "100%", border: "1px solid #cacfa9", borderRadius: "4%"}}/>
        <StyledBox onClick={(index)=>(selectItemsHandler(item.uri))}><img src={checkbox} height="30px" width="30px" borderRadius="10%"/></StyledBox>
        </StyledDiv>
        }
        </div>
       
    );
}
const StyledDiv = styled.div`
    position: relative;
    display: inline-block;
`;
const StyledBox = styled.div`
&:hover,
    &:focus {
        visibility: visible;
    }
    position: absolute;
    filter: brightness(30%);
    z-index: 1; /* Set the z-index to place the button above the image */
    top: 10%; /* Adjust the button position as needed */
    left: 90%; /* Adjust the button position as needed */
    transform: translate(-50%, -50%); /* Center the button */
    padding: 10px 20px;
    border: none;
    cursor: pointer;
    visibility: hidden;
`;
const StyledBoxSelected = styled.div`
    position: absolute;
    z-index: 1; /* Set the z-index to place the button above the image */
    top: 10%; /* Adjust the button position as needed */
    left: 90%; /* Adjust the button position as needed */
    transform: translate(-50%, -50%); /* Center the button */
    padding: 10px 20px;
    border: none;
    cursor: pointer;
`;
const StyledImg = styled.img`
    cursor: pointer;
    &:hover,
    &:focus {
    /* From https://css.glass */
    //filter: brightness(80%);
    filter: grayscale(0) sepia(1) hue-rotate(180deg) brightness(80%);
    transition: transform .2s;
    transform: scale(1.05);
    }
    &:hover + ${StyledBox}, &:focus + ${StyledBox} {
    visibility: visible;
    }
`;
const StyledImgSelected = styled.img`
    cursor: pointer;
    filter: grayscale(0) sepia(1) hue-rotate(180deg) brightness(90%);
`;
