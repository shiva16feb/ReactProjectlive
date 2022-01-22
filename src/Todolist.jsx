import React from 'react';
import './index.css';
import"../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Button from '@mui/material/Button';
import { useState } from 'react';
import Listcomp from './Listcomp';


const Todolist = () => {
    const [listItem,setlistItem] = useState("");
    const [item,setItem] = useState([]);

    const enterInput = (shiva) =>{
       setlistItem(shiva.target.value);
    };
    const itemSubmit = () =>{
      setItem((prevVal) =>{
          return[...prevVal,listItem]
      });
      setlistItem(" ");
    };

    return(<>
     <div className='main_div'>
        <div className='centr_div col-lg-4 col-md-6 col-sm-6 col-10'>
            <br/>
            <h1>ToDo List</h1>
            <br/>
            <input type="text" value={listItem}  placeholder='Enter items' onChange={enterInput}/>
            <Button className='btn_size' onClick={itemSubmit}><i class="fas fa-plus"></i> </Button>
            <ol className='mt-2'>
            {item.map((val,index) => {
                return <Listcomp key={index} text={val}/>
            })}

              
            </ol>

        </div>  
     </div>
    </>);
}
export default Todolist;