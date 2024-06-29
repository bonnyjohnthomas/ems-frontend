import React, { useEffect, useState } from 'react'
import '../Components/Admin.css'
import Table from 'react-bootstrap/Table';
import axios from'axios'
import {Link} from 'react-router-dom'


function Admin() {

  const[allEmployees,setAllEmployees]=useState([])

  const fetchData=async()=>{
        const result = await axios.get('http://localhost:8000/allEmployee')
        console.log(result.data.employee);
        setAllEmployees(result.data.employee)
  }
  console.log(allEmployees);

  useEffect(()=>{
    fetchData()
  },[])

  const deleteEmployee=async(id)=>{
    const result = await axios.delete("http://localhost:8000/deleteEmployee/"+id)
    console.log(result);
    alert(result.data.message)
    fetchData()
  }


  return (
    <>
          <div className='container mt-5'>
            <h1 className='text-center'style={{textDecoration:'underline'}}>Employee Management System</h1>
       <br />     <p style={{textAlign:"justify"}}>
       An employee management system or EMS is a tool that helps improve employee satisfaction and 
       productivity to help a company achieve their overall goals. These tools help monitor,
        assess and control employees' working hours and efficiently utilise human resources.
            </p>

            <Link to={'/add'}>
             <a className='btn btn-success'>Add  <i class="fa-sharp fa-solid fa-user-plus"></i>  </a>
            </Link>
            

          </div>

 <div className="container">

   <Table striped bordered hover>
      <thead>
        <tr>
          <th>No.</th>
          <th>Full Name</th>
          <th>Age</th>
          <th>Designation</th>
          <th>Salary</th>
          <th style={{width:'200px'}}>Actions</th>
        </tr>
      </thead>
      
      <tbody >

        { allEmployees.map((item)=>(

             <tr>
                  <td>{item.id}</td>
                  <td>{item.empname}</td>
                  <td>{item.age}</td>
                  <td>{item.designation}</td>
                  <td>{item.salary}</td>
                  <td style={{width:'200px'}}>
                    <Link to={'edit/'+item.id}>
                    <button className='btn btn-primary me-3'><i className='fa-solid  fa-pen'></i></button>
                    </Link>
                  
                   <button onClick={()=>deleteEmployee(item.id)} className='btn btn-danger'><i className='fa-solid  fa-trash'></i></button>
                  </td>
             </tr>

        ))
          }
        
      </tbody>

    </Table>

  </div>

    </>
    
  )
}

export default Admin