import React from 'react'
import Table from 'react-bootstrap/Table';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { store } from '../store/store';
import { deleteUser } from '../store/slice/UserSlice';
export default function UserDetails() {
  const dispatch =useDispatch();
  const users =  useSelector(store=>store.users);
  const removeUser=((id)=>{
    dispatch(deleteUser({id}));
  })
//   users.pop([0]);
  console.log(users);
  return (
    <div className='details'>
    <h4 className='mt-4 text-center'>Admissions</h4>
    <div className="d-flex justify-content-end">
        <Link to='/register' className='btn btn-warning me-3'>Add Students</Link>
    </div>
    <div className="table mt-4">
    <Table striped bordered hover>
      <thead>
        <tr>
          <th>S.No</th>
          <th>First Name</th>
          <th>Last Name</th>
          <th>Father's Name</th>
          <th>Email</th>
          <th>Phone</th>
          <th>Address</th>
          <th>Gender</th>
          <th>Course</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        
          {users.map((user,i)=>
          <tr key={i}>
            <td>{i+1}</td>
            <td>{user.fname}</td>
            <td>{user.lname}</td>
            <td>{user.father}</td>
            <td>{user.email}</td>
            <td>{user.phone}</td>
            <td>{user.address}</td>
            <td>{user.gender}</td>
            <td>{user.course}</td>
            <td className='d-flex justify-content-evenly'>
                <Link to={`/edit/${user.id}`}><button className='btn btn-primary btn-md'>Edit</button></Link>
                
                <button onClick= {()=> removeUser(user.id)} className='btn btn-danger btn-md'>Delete</button>
            </td>
          </tr>
            )}  
          
        
      </tbody>
    </Table>
    </div>
    
    </div>
  )
}
