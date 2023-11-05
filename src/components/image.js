import { useState } from "react";
import styled from "styled-components";
import {motion, AnimatePresence} from "framer-motion"
import { Modal, ModalContent } from "./modal";
import checkbox from "../static/icons/check.png"
import maximize from "../static/icons/maximize.png"

export function SingleImage({item, selectItemsHandler}){
    const [isOpen, setIsopen] = useState(false);
    const showModal = () => setIsopen((prev) => !prev);

    return(
        // Render each mapped images one by one
        <div>
        {/* Checks if the current image item is selected then show selected image styles */}
        {item.isSelected ? 
        <StyledDiv>
        <StyledImgSelected src={item.uri} style={{ width: "100%", height: "100%", border: "1px solid #cacfa9", borderRadius: "4%"}}/>
        <StyledBoxSelected onClick={()=>(selectItemsHandler(item.uri))}><img src={checkbox} alt="" height="30px" width="30px" borderRadius="10%"/></StyledBoxSelected>
        {/* Keeping the modal hidden on selected image */}
        {/* <StyledHiddenDiv>
        <StyledModalTrigger><Modal img= {maximize} onOpen={showModal} /></StyledModalTrigger>
        </StyledHiddenDiv> */}

        {/* {isOpen && (
            <motion.div>
            <ModalContent onClose={() => setIsopen(false)}>
            <img src={item.uri} alt="" />
            </ModalContent>
            </motion.div>  
        )} */}

        </StyledDiv>
        : 
        // Checks if the current image item is not selected then show selected image styles with modal
        <StyledDiv>
        <StyledImgContainer>
        <StyledImg src={item.uri} style={{ width: "100%", height: "100%", border: "1px solid #cacfa9", borderRadius: "4%"}}/>
        <StyledHiddenDiv>
        <StyledBox onClick={()=>(selectItemsHandler(item.uri))}><img src={checkbox} alt="" height="30px" width="30px" borderRadius="10%"/></StyledBox>
        <StyledModalTrigger><Modal img= {maximize} onOpen={showModal} /></StyledModalTrigger>
        </StyledHiddenDiv>
        </StyledImgContainer>
        {/* Modal with framer amimation enabled */}
        <AnimatePresence>
        {isOpen && (
            <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            style={{ zIndex: 1, position: "relative" }}
            >
            <ModalContent onClose={() => setIsopen(false)}>
            <img src={item.uri} width="60%" height="100%" alt="" />
            </ModalContent>
            </motion.div>
        )}
        </AnimatePresence>
        
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
    //visibility: hidden;
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

const StyledModalTrigger = styled.div`
    &:hover,
    &:focus {
        visibility: visible;
    }
    position: absolute;
    //filter: brightness(30%);
    z-index: 1; /* Set the z-index to place the button above the image */
    top: 50%; /* Adjust the button position as needed */
    left: 50%; /* Adjust the button position as needed */
    transform: translate(-50%, -50%); /* Center the button */
    padding: 10px 20px;
    border: none;
    cursor: pointer;
`;
const StyledHiddenDiv = styled.div`
    &:hover,
    &:focus {
        visibility: visible;
    }
    visibility: hidden;
`;
const StyledImg = styled.img`
    cursor: pointer;
    &:hover + ${StyledHiddenDiv}, &:focus + ${StyledHiddenDiv}{
        visibility: visible;
    }
`;
const StyledImgSelected = styled.img`
    cursor: pointer;
    filter: grayscale(0) sepia(1) hue-rotate(180deg) brightness(90%);
`;
const StyledImgContainer = styled.div`
    &:hover ${StyledImg}, &:focus ${StyledImg}{
        filter: grayscale(0) sepia(1) hue-rotate(180deg) brightness(80%);
        transition: transform .2s;
        transform: scale(1.05);
    }
`;