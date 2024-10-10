import React from 'react';
import ReactDOM from 'react-dom/client';
import {Main} from './Components/Main';
import {BrowserRouter,  Route, Routes } from 'react-router-dom'
import Add_One_Task from './Components/Add_One_Task';
import Delete from './Components/Delete';
import Update from './Components/Update';
import Add_Many_Task from './Components/Add_Many_Task';
import Current from './Components/Current';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // <Main/>
  <BrowserRouter>
    <Routes>
      <Route path='/' element={<Main/>}>
      <Route path='/' element={<Current/>}/>
      <Route path='/delete' element={<Delete/>} />

        <Route path='/addone' element={<Add_One_Task/>} />
        <Route path='/addmany' element={<Add_Many_Task/>} />
        <Route path='/update' element={<Update/>} />

      </Route>
    </Routes>
  </BrowserRouter>
);

