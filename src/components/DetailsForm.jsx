import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { addUser } from '../store/slice/UserSlice';
import { useNavigate } from 'react-router';
import { useForm } from 'react-hook-form';


export default function DetailsForm() {
    const{register, handleSubmit, formState:{errors} }= useForm();
    const dispatch = useDispatch();
    const navigate =useNavigate();
    const [obj,setObj]=useState({
        id:'',
        fname:'',
        lname:'',
        father:'',
        email:'',
        phone:'',
        address:'',
        gender:'',
        course:''
    });
    const onSubmit=(data,e)=>{
        e.preventDefault();
        // console.log(data);

        setObj({
        id:'',
        fname:'',
        lname:'',
        father:'',
        email:'',
        phone:'',
        address:'',
        gender:'',
        course:''})
        dispatch(addUser({
            id:obj.id,
            fname:obj.fname,
            lname:obj.lname,
            father:obj.father,
            email:obj.email,
            phone:obj.phone,
            address:obj.address,
            gender:obj.gender,
            course:obj.course,
        }))
        // console.log(obj)
        navigate('/details');
    }
  return (
    
    <div className='container'>
        <div className="row">
            <div className="col-12">
                <h3 className='mt-3 text-center'>Enter Details</h3>
                <form onSubmit={handleSubmit(onSubmit)} >
                    <div className="row">
                        <div className="col-6">
                            <div className="mt-3">
                            <label  className="form-label">First Name</label>
                            <input type="text"  {...register("fname", {required:true})} onChange={(e)=>setObj({...obj, fname :e.target.value})} value={obj.fname} className="form-control"/>
                            <span className='text-danger'>
                                {errors.fname?.type==='required' && 'First name is required'}
                            </span>
                            </div>
                        </div>
                        <div className="col-6">
                            <div className="mt-3">
                            <label  className="form-label">Last Name</label>
                            <input type="text" {...register("lname", {required:true})} onChange={(e)=>setObj({...obj, lname :e.target.value})} value={obj.lname} className="form-control" name="lname"/>
                            <span className='text-danger'>
                                {errors.lname?.type==='required' && 'Last name is required'}
                            </span>
                            </div>
                        </div>
                        <div className="col-6">
                            <div className="mt-3">
                            <label  className="form-label">Aadhaar No</label>
                            <input type="text" name="id" {...register("id", {required:true,minLength:12})}   onChange={(e)=>setObj({...obj, id :e.target.value})} value={obj.id} className="form-control" />
                            <span className='text-danger'>
                                {errors.id?.type==='required' && "This field can't be empty"}
                                {errors.id?.type==="minLength" && "Aadhaar number must be 12 digits"}
                            </span>
                            </div>
                        </div>
                        <div className="col-6">
                            <div className="mt-3">
                            <label  className="form-label">Father's Name</label>
                            <input type="text" {...register("father", {required:true})} onChange={(e)=>setObj({...obj, father :e.target.value})} value={obj.father} className="form-control" name="father"/>
                            <span className='text-danger'>
                                {errors.father?.type==='required' && "Father's name is required"}
                            </span>
                            </div>
                        </div>
                        <div className="col-6">
                            <div className="mt-3">
                            <label  className="form-label">Email Address</label>
                            <input type="text" {...register("email", {required:true,pattern:/[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/})} onChange={(e)=>setObj({...obj, email :e.target.value})} value={obj.email}  className="form-control" name="email"/>
                            <span className='text-danger'>
                                {errors.email?.type==='required' && "Email is required"}
                                {errors.email?.type==='pattern' && "Email is Invalid"}
                            </span>
                            </div>
                        </div>
                        <div className="col-6">
                            <div className="mt-3">
                            <label  className="form-label">Phone No</label>
                            <input type="number" {...register("phone", {required:true,minLength:10})} onChange={(e)=>setObj({...obj, phone :e.target.value})} value={obj.phone} className="form-control" name="phone"/>
                            <span className='text-danger'>
                                {errors.phone?.type==='required' && "Phone No is required"}
                                {errors.phone?.type==='minLength' && "Phone No must be 10 digits"}
                            </span>
                            </div>
                        </div>
                        <div className="col-6">
                            <div className="mt-3">
                            <label  className="form-label">Address</label>
                            <input type="text" {...register("address", {required:true})} onChange={(e)=>setObj({...obj, address :e.target.value})} value={obj.address} className="form-control" name="address"/>
                            <span className='text-danger'>
                                {errors.address?.type==='required' && "Address field is required"}
                            </span>
                            </div>
                        </div>
                        <div className="col-6">
                            <div className="mt-3">
                            <label  className="form-label">Gender</label>
                            <select  {...register("gender", {required:true})} onChange={(e)=>setObj({...obj, gender :e.target.value})} value={obj.gender} className='form-control'>
                                <option value="">Choose</option>
                                <option value="Male">Male</option>
                                <option value="Female">Female</option>
                            </select>
                            <span className='text-danger'>
                                {errors.gender?.type==='required' && "Choose Gender"}
                            </span>
                            </div>
                        </div>
                        <div className="col-6">
                            <div className="mt-3">
                            <label  className="form-label">Courses</label>
                            <select {...register("course", {required:true})} onChange={(e)=>setObj({...obj, course :e.target.value})} value={obj.course} className='form-control'>
                                <option value="">Choose your Course...</option>
                                <option value="Angular">Angular </option>
                                <option value="React">React</option>
                                <option value="Vue Js">Vue JS</option>
                                <option value="Mongo DB">Mongo DB</option>
                            </select>
                            <span className='text-danger'>
                                {errors.course?.type==='required' && "Select your Appropriate Course"}
                            </span>
                            </div>
                        </div>
                        <div className="col-6">
                            <div className="mt-5">
                            <label  className="form-label"></label>
                            <button type='submit' className='btn btn-success btn-lg '>Submit</button>
                            </div>
                        </div>
                        
                    </div>
                </form>
            </div>
        </div>
    </div>
  )
}
