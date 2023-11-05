import React, { useEffect, useState } from 'react';
import styled from "styled-components";
import {AnimatePresence} from "framer-motion"

import Headers from './components/header';
import AnimateItem from './components/animate'

import image1 from "./static/images/image-1.webp"
import image2 from "./static/images/image-2.webp"
import image3 from "./static/images/image-3.webp"
import image4 from "./static/images/image-4.webp"
import image5 from "./static/images/image-5.webp"
import image6 from "./static/images/image-6.webp"
import image7 from "./static/images/image-7.webp"
import image8 from "./static/images/image-8.webp"
import image9 from "./static/images/image-9.webp"
import image10 from "./static/images/image-10.jpeg"
import image11 from "./static/images/image-11.jpeg"

import plusicon from "./static/icons/plus.png"



const App = () => {
  //Image Data as State
  const [imageItems, setImageItems] = useState([
    { id: 1, uri: image1, isDragging: false, isSelected: false },
    { id: 2, uri: image2, isDragging: false, isSelected: false },
    { id: 3, uri: image3, isDragging: false, isSelected: false },
    { id: 4, uri: image4, isDragging: false, isSelected: false },
    { id: 5, uri: image5, isDragging: false, isSelected: false },
    { id: 6, uri: image6, isDragging: false, isSelected: false },
    { id: 7, uri: image7, isDragging: false, isSelected: false },
    { id: 8, uri: image8, isDragging: false, isSelected: false },
    { id: 9, uri: image9, isDragging: false, isSelected: false },
    { id: 10, uri: image10, isDragging: false, isSelected: false },
    { id: 11, uri: image11, isDragging: false, isSelected: false },
  ]);

  //Setting the current item that is being dragged
  const [draggedItem, setDraggedItem] = useState(null);
  const [count, setCount] = useState(0);

  //Handler Function for DragStart even, it sets the state for the item that is being dragged
  const handleDragStart = (item) => {
    console.log("set dragged state: click")
    setDraggedItem(item);
  };

  //Once dragging is finished, rearrange, sort the items and set draggedItem null
  const handleDragEnd = () => {
    console.log("drag end")
    if (draggedItem) {
      setImageItems((items) =>
        items.map((item) => ({ ...item, isDragging: false }))
      );
      setDraggedItem(null);
    }
  };

  //While dragging over different items, rearrange and sort continuously for animated view
  const handleDragOver = (e, item) => {
    if(e.cancelable && e.preventDefault()) e.preventDefault();
    console.log("drag over")
    if (draggedItem === item) return;

    const itemsCopy = [...imageItems];
    const draggedIndex = itemsCopy.findIndex((i) => i === draggedItem);
    const targetIndex = itemsCopy.findIndex((i) => i === item);

    // Reorder the items array to reflect the new order after the drag-and-drop
    itemsCopy.splice(draggedIndex, 1);
    itemsCopy.splice(targetIndex, 0, draggedItem);

    setImageItems(itemsCopy);
  };

  //Mark which of the items are selected currently with the help of isSelected field of state
  const selectItemsHandler = (uri) => {
    const itemsCopy = [...imageItems];
    itemsCopy.map((item, index) => {
      if(item.uri === uri) {
        if(itemsCopy[index].isSelected ? itemsCopy[index].isSelected = false :itemsCopy[index].isSelected = true);
      }
    }
    )
    setImageItems(itemsCopy);

  };

  //Delete all the items which are marked as isSelected
  const deleteItemsHandler = () => {
    const updatedItems = imageItems.filter((item) => !item.isSelected);
    setImageItems(updatedItems);

  };

  //Count the number of selected items
  useEffect(()=>{
    const selectedItemCount = imageItems.filter((item) => item.isSelected).length;
    setCount(selectedItemCount);
  }, [imageItems]);

  return (
    <StyledCard>
      <Headers deleteItemsHandler={deleteItemsHandler} count={count}/>
      <StyledGrid>
      {imageItems.map((item, index) => (
        <div
          key={item.id}
          draggable="true"
          onDragStart={() => handleDragStart(item)}
          onDragEnd={handleDragEnd}
          onDragOver={(e) => handleDragOver(e, item)}
          onTouchStart={() => handleDragStart(item)}
          onTouchMove={(e) => handleDragOver(e, item)}
          onTouchEnd={handleDragEnd}
          style={{
            opacity: item.isDragging ? 0.5 : 1,
            gridColumn: index === 0 ? '1 / span 2' : 'auto',
            gridRow: index === 0 ? '1 / span 2' : 'auto',
          }}
        >
          <AnimatePresence mode="sync"><AnimateItem key={item.id} data={item} selectItemsHandler={selectItemsHandler}/></AnimatePresence>
        </div>
        ))}
        <StyledAddIcon><img src={plusicon} height= '80pix' alt="" /><h3>Add Items</h3></StyledAddIcon>
      </StyledGrid>
    </StyledCard>
  );
};


export default App;

const StyledGrid = styled.div`
    display: grid;
    height: auto;
    width: 80vw;
    margin: 0 auto;
    padding: 0 auto;
    //justify-content: center;
    align-items: stretch;
    grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
    grid-template-rows: auto  ;
    grid-gap: 1rem;
    @media screen and (max-width: 1024px){
      grid-template-columns: 1fr 1fr 1fr;
      width: 90vw;
    }
    @media screen and (max-width: 768px){
      grid-template-columns: 1fr 1fr;
      width: 90vw;
    }
`;
const StyledCard = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    border-radius: 10px;
    margin: 5vh auto;
    padding: 2vw;
    height: auto;
    width: 80vw;
    background-color: white;
`;
const StyledAddIcon = styled.div`
    display: grid;
    margin: 0 auto;
    padding: 0 auto;
    justify-content: center;
    align-items: center;
    max-height: 70pix;
    grid-template-columns: 1fr;
    cursor: pointer;
    &:hover,
    &:focus {
    transition: transform .2s;
    transform: scale(1.05);
    }

`;
