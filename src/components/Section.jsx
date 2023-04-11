import React from 'react'
import './section.css'
import { Link, NavLink } from 'react-router-dom'

export default function Section() {
  return (
    <div className='section'>
        <div className="bgimage">
            <h4>For Admissions</h4>
            <NavLink to='/register'><button className='btn btn-success btn-lg mt-4'> Click here!</button></NavLink>
            
        </div>

    </div>
  )
}

