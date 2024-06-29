import axios from 'axios';
import React, { useState } from 'react'
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
import { Link, useNavigate } from 'react-router-dom';
import {v4 as uuid} from 'uuid'


function Add() {

  const location=useNavigate()

  const [id,setId]=useState('')
  const [empname,setName]=useState('')
  const [age,setAge]=useState('')
  const [designation,setDesignation]=useState('')
  const [salary,setSalary]=useState('')
  

  // console.log(Salary);

const AddEmployee=async(e)=>{

  // setId(uuid())

  console.log(empname);
  console.log(age);
  console.log(designation);
  console.log(salary);
  console.log(id);

  const body={id,empname,age,designation,salary}
  console.log(body);

  const result =await axios.post('http://localhost:8000/addEmployee',body)
  console.log(result);
  alert(result.data.message)
  location('/')
}

  return (
    <div>

      <div className='container mt-5'>
        <h1 className='text-center' style={{ textDecoration: 'underline' }}>Add Employee </h1>
        <br />     <p style={{ textAlign: "justify" }}>
        An employee management system or EMS is a tool that helps improve employee satisfaction and 
        productivity to help a company achieve their overall goals. These tools help monitor, assess 
        and control employees' working hours and efficiently utilise human resources.
        </p>

      </div>

      <div className="container">

      <FloatingLabel label="Id" className="mb-3">
          <Form.Control onChange={(e)=>setId(e.target.value)} type="text" placeholder="Id" />
        </FloatingLabel>

        <FloatingLabel label="Name" className="mb-3">
          <Form.Control onChange={(e)=>setName(e.target.value)} type="text" placeholder="Name" />
        </FloatingLabel>

        <FloatingLabel  label="Age" className='mb-3'>
          <Form.Control onChange={(e)=>setAge(e.target.value)} type="text" placeholder="Age" />
        </FloatingLabel>


        <FloatingLabel  label="Designation" className="mb-3" >
          <Form.Control onChange={(e)=>setDesignation(e.target.value)} type="text" placeholder="Designation" />
        </FloatingLabel>

        <FloatingLabel  label="Salary">
          <Form.Control onChange={(e)=>setSalary(e.target.value)} type="text" placeholder="Salary" />
        </FloatingLabel>


       <button onClick={(e)=>AddEmployee(e)} className='btn btn-success m-3'>Add</button>

       <Link to={'/'}>
       <button style={{float:'right'}} className='btn btn-primary m-3'>Home</button>
       </Link>
       

      </div>

    </div>
  )
}

export default Add





