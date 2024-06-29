import React, { useEffect, useState } from 'react'
import axios from 'axios';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
import { Link, useNavigate, useParams } from 'react-router-dom';


function Edit() {

  const location=useNavigate()

  const [id,setId]=useState('')
  const [empname,setName]=useState('')
  const [age,setAge]=useState('')
  const [designation,setDesignation]=useState('')
  const [salary,setSalary]=useState('')

  const pathParams=useParams() //to fetch parameter from url
//  console.log(pathParams); //id:7
//  console.log(pathParams.id); //7

 //api call to fetch particular employee details
 const fetchData=async()=>{
  const result=await axios.get('http://localhost:8000/getEmployee/'+pathParams.id)
  console.log(result.data.employee);
  setId(result.data.employee.id)
  setName(result.data.employee.empname)
  setAge(result.data.employee.age)
  setDesignation(result.data.employee.designation)
  setSalary(result.data.employee.salary)
 }
 console.log(empname);
 console.log(age);
 console.log(designation);
 console.log(salary);
 console.log(id);



 const UpdateEmployee=async(e)=>{

    const body={id,empname,age,designation,salary}
    const result=await axios.post('http://localhost:8000/updateEmployee',body)
    console.log(result);
     alert(result.data.message)
    location('/')
 }



 useEffect(()=>{
  fetchData()
 },[])

   


  return (
    <div>
      <div>

        <div className='container mt-5'>
          <h1 className='text-center' style={{ textDecoration: 'underline' }}>Update Employee </h1>
          <br />     <p style={{ textAlign: "justify" }}>
            Happy employees are productive employees so Time Doctor facilitates their happiness by enabling a
            “work from anywhere world” with full transparency and accountability. Whether at home,
            in-office or on the road, they’ll work the way that works best for both you and them
          </p>

        </div>

        <div className="container">

          <FloatingLabel label="Id" className="mb-3">
            <Form.Control value={id}  onChange={(e) => setId(e.target.value)} type="text" placeholder="Id" />
          </FloatingLabel>

          <FloatingLabel label="Name" className="mb-3">
            <Form.Control value={empname} onChange={(e) => setName(e.target.value)} type="text" placeholder="Name" />
          </FloatingLabel>

          <FloatingLabel label="Age" className='mb-3'>
            <Form.Control value={age} onChange={(e) => setAge(e.target.value)} type="text" placeholder="Age" />
          </FloatingLabel>


          <FloatingLabel label="Designation" className="mb-3" >
            <Form.Control value={designation} onChange={(e) => setDesignation(e.target.value)} type="text" placeholder="Designation" />
          </FloatingLabel>

          <FloatingLabel label="Salary">
            <Form.Control value={salary} onChange={(e) => setSalary(e.target.value)} type="text" placeholder="Salary" />
          </FloatingLabel>


          <button onClick={(e) => UpdateEmployee(e)} className='btn btn-success m-3'>Update</button>

          <Link to={'/'}>
            <button style={{ float: 'right' }} className='btn btn-primary m-3'>Home</button>
          </Link>


        </div>

      </div>
    </div>
  )
}

export default Edit