import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Registration from './routes/Registration';
import StudentsList from './routes/StudentsList';
import Home from './routes/Home';
// import EditUser from './components/EditUser';
import Edit from './routes/Edit';
export default function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='register' element={<Registration/>}/>
          <Route path='details' element={<StudentsList/>}/>
          <Route path='edit/:id' element={<Edit/>}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  )
}
