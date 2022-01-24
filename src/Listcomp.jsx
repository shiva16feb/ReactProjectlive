import React, { useState } from "react";
import'./index.css';


const Listcomp = (props) =>{
        const [line, setLine] =useState(false);
       
        const deleteItem = () =>{
          setLine(true);
        };

    return(
        <>
        <div id="todo_style">
        <span id="trash" onClick={deleteItem}><i class="fas fa-trash-alt" ></i></span>
        <li style={{marginLeft:"20px", textDecoration:line ? "line-through" : "none"}}>{props.text}😄</li>
        </div>
        </>
    )
}
export default Listcomp;