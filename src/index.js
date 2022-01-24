import React from 'react';
import  ReactDOM  from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import Todolist from './Todolist';

ReactDOM.render(<>
  <BrowserRouter>
 <Todolist/>
  </BrowserRouter>
  </>, document.getElementById("root"));