// import SingleImage from "./components/image";
// import NavBar from "./components/navbar";
// import { useState, useRef } from "react";


// //Keep items in state
// //1st one as cover and others as list/map render
// //
// function App() {
//   const [imageItems, setImageItems] = useState([1,2,3,4])
//   const [draggedItem, setDraggedItem] = useState(null);

//   const dragStartImage = useRef("");
//   const dragStartImageIndex = useRef(0);
//   const dragEnterImageIndex = useRef(0);

//   const dragOver = (e) => {
//     console.log("drag over started")
//     e.preventDefault()
//     //Set dragged item
//     //setDraggedItem = dragStartImage.current;
//     //Clone the state object
//     const imageItemsNew =[...imageItems]
//     //Remove the dragged item
//     imageItemsNew.splice(dragStartImageIndex.current,1)
//     //Set the updated state after removing
//     setImageItems(imageItemsNew)
//   }
//   const dragEnd = () => {
//     console.log("swap satrted")
//     //Clone the state object
//     const imageItemsNew =[...imageItems]
//     //Swap the dragged images
//     const temp = imageItemsNew[dragEnterImageIndex.current]
//     imageItemsNew[dragEnterImageIndex.current] = draggedItem;
//     imageItemsNew[dragEnterImageIndex.current] = temp;
//     //Set the updated state or sort
//     setImageItems(imageItemsNew)
//   }

//   // const deleteImage

//   return (
//     <StyledDiv>
//       <NavBar />
//       <p>Hello</p>
//       {imageItems.map((imgItem, imgIndex) => (
//         <div
//         draggable='true'
//         onDragStart={() => {
//           dragStartImage.current = imgItem;
//           dragStartImageIndex.current = imgIndex;
//         }}
//         // onDragEnter={() => {
//         //   dragEnterImageIndex.current = imgIndex;
//         //   dragEnd()
//         // }}
//         onDragEnd={() => dragEnd()}
//         onDragOver={(e) => dragOver(e)}
//         key={imgIndex}
//         >
//           <StyledH1>{imgItem}</StyledH1>
//         </div>




//         // <SingleImage
//         // draggable="true"
//         // data={imgItem} 
//         // />
//       ))}
//     </StyledDiv>
//   );
// }
// const StyledH1 = styled.h1`
//     background-color: green;
//     cursor: move;
// `;
// const StyledDiv = styled.div`
//   background-color: royalblue;
//   text-align: center;
// `;

// export default App;

//========================================================================
//========================================================================

// import React, { useState } from 'react';

// const App = () => {
//   const [imageItems, setImageItems] = useState([
//     { id: 1, text: 'Card 1', iisDragging: false },
//     { id: 3, text: 'Card 3',sDragging: false },
//     { id: 2, text: 'Card 2',  isDragging: false },
//     { id: 4, text: 'Card 4', isDragging: false },
//   ]);

//   const [draggedItem, setDraggedItem] = useState(null);

//   const handleDragStart = (item) => {
//     console.log("set dragged state")
//     setDraggedItem(item);
//   };

//   const handleDragEnd = () => {
//     console.log("drag end")
//     if (draggedItem) {
//       setImageItems((items) =>
//         items.map((item) => ({ ...item, isDragging: false }))
//       );
//       setDraggedItem(null);
//     }
//   };

//   const handleDragOver = (e, item) => {
//     e.preventDefault();
//     console.log("drag over")
//     if (draggedItem === item) return;

//     const itemsCopy = [...imageItems];
//     const draggedIndex = itemsCopy.findIndex((i) => i === draggedItem);
//     const targetIndex = itemsCopy.findIndex((i) => i === item);

//     // Reorder the items array to reflect the new order after the drag-and-drop
//     itemsCopy.splice(draggedIndex, 1);
//     itemsCopy.splice(targetIndex, 0, draggedItem);

//     setImageItems(itemsCopy);
//   };

//   return (
//     <div>
//       {imageItems.map((item) => (
//         <div
//           //key={item.id}
//           draggable="true"
//           onDragStart={() => handleDragStart(item)}
//           onDragEnd={handleDragEnd}
//           onDragOver={(e) => handleDragOver(e, item)}
//           style={{
//             backgroundColor: "red",
//             padding: '10px',
//             border: '1px solid #000',
//             marginBottom: '5px',
//             opacity: item.isDragging ? 0.5 : 1,
//           }}
//         >
//           {item.text}
//         </div>
//         ))}
//     </div>
//   );
// };

// export default App;



//================================================================
//========================================================
//===================================

import React, { useEffect, useState } from 'react';
import {SingleImage} from './components/image';
import styled from "styled-components";
import {motion, AnimatePresence} from "framer-motion"
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
import trash from "./static/icons/trash.png"
import select from "./static/icons/select.png"
import ollyo from "./static/icons/ollyo.jpeg"





const App = () => {
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
  const [draggedItem, setDraggedItem] = useState(null);
  const [count, setCount] = useState(0);

  const handleDragStart = (item) => {
    console.log("set dragged state: click")
    setDraggedItem(item);
  };

  const handleDragEnd = () => {
    console.log("drag end")
    if (draggedItem) {
      setImageItems((items) =>
        items.map((item) => ({ ...item, isDragging: false }))
      );
      setDraggedItem(null);
    }
  };

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
  const deleteItemsHandler = () => {
    const updatedItems = imageItems.filter((item) => !item.isSelected);
    setImageItems(updatedItems);

  };

  useEffect(()=>{
    const selectedItemCount = imageItems.filter((item) => item.isSelected).length;
    setCount(selectedItemCount);
  }, [imageItems]);

  return (
    <StyledCard>
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
      <hr />
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
          //onDragOver={(e) => e.preventDefault}
          style={{
            //backgroundColor: "red",
            //padding: '50px',
            //margin: '50px',
            opacity: item.isDragging ? 0.5 : 1,
            gridColumn: index === 0 ? '1 / span 2' : 'auto',
            gridRow: index === 0 ? '1 / span 2' : 'auto',
          }}
        >
          {/* {item.text} */}
        <AnimatePresence mode="sync"><AnimateItem key={item.id} data={item} index={index} selectItemsHandler={selectItemsHandler}/></AnimatePresence>
         
         
        </div>
        ))}
      <StyledAddIcon><img src={plusicon} height= '80pix' /><h3>Add Items</h3></StyledAddIcon>
    </StyledGrid>
    </StyledCard>
  );
};


function AnimateItem({data, index, deleteItemsHandler, selectItemsHandler}){
  return(
    <motion.div layout>
      <SingleImage item={data} index={index} selectItemsHandler={selectItemsHandler}/>
    </motion.div>
  )
}
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
    }
    @media screen and (max-width: 768px){
      grid-template-columns: 1fr 1fr;
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

`;
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