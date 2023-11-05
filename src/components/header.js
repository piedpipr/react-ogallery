import React from "react";
import styled from "styled-components"

import trash from ".././static/icons/trash.png"
import select from ".././static/icons/select.png"
import ollyo from ".././static/icons/ollyo.jpeg"

export default function Headers({count, deleteItemsHandler}){
    return(
        <StyledDiv>
        <div style={{display: 'flex', flexDirection: 'row', alignContent: 'center'}}>
            <img src={ollyo} height="60px" width="60px"/>
            <h2 >OllyoGallery</h2>
        </div>
        <div></div>
        <div style={{display: 'flex', flexDirection: 'row', alignContent: 'center'}}>
            <img style={{ alignSelf: 'flex-center',justifySelf: 'flex-end' }} src={select} height="40px" width="40px"/>
            <h3 style={{ color: '#515557',alignSelf: 'flex-center',justifySelf: 'flex-end' }}>{count}{' '}Selected </h3>
        </div>
        <div onClick={deleteItemsHandler} style={{display: 'flex', flexDirection: 'row', alignContent: 'center'}}>
            <img style={{ color: '#399171',alignSelf: 'flex-center', justifySelf: 'flex-end'}} src={trash} height="45px" width="45px"/>
            <h3 style={{ color: '#a65d65', alignSelf: 'flex-center', justifySelf: 'flex-end'}} height="60px" background="red">Delete</h3>
        </div>
      </StyledDiv>
    );
}

const StyledDiv = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    @media screen and (max-width: 1024px){
      grid-template-columns: 1fr 1fr;
    }
    @media screen and (max-width: 768px){
      grid-template-columns: 1fr;
    }
`;