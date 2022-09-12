/*import React,{useState, useEffect} from 'react';
import Search from './Search';
import Link from '../Routing/Link';
import api from '../API/api';

type employeeType = {
    id : number,
    empName : string,
    empMail: string,
    department: string,
    manager: string
}

function List({setSelectedEmployee, credentials}){

    const [searchTerm, setSearchTerm] = useState("");
    const [employeesData, setEmployeesData] = useState([]);

    useEffect(()=>{
        api.get("/employee",
        {
            headers: {"Authorization" : ""}
        }).then(
            (response)=>{
                console.log(response);
                setEmployeesData(response.data.data);
            }
        ).catch(
            (error)=>{
                console.log(error);
                alert("Data fetching failed. Login again.");
            } 
        );

    }, [])

    //filtering searched employees
    employeesData = employeesData.filter(
        (employee) => 
         employee.name
         .toLowerCase()
         .includes(searchTerm)
         || employee.email
         .toLowerCase()
         .includes(searchTerm)
         );

    
    let renderList
     = employeesData
    .map((employee, i) =>
        <tr key = {employee.id}>
                <td>{i+1}</td>
                <td>{employee.name}</td>
                <td>{employee.email}</td>
                <td>{employee.Manager}</td>
                <td>{employee.Dept}</td>
                <td>
                    <Link href = "/edit">
                        <button
                         className='muted-button' 
                         onClick ={()=>
                          setSelectedEmployee(employee)}
                          > Edit 
                        </button>       
                    </Link>
                </td>
                <td>
                    <button 
                        className='muted-button' 
                        onClick ={()=>
                            setEmployeesData(employeesData
                                .filter((emp)=> emp === employee?
                                 false : true))}
                    >
                        Delete
                    </button>
                </td>
        </tr>) 


    return (
        <div>
            <Search
             setSearchTerm = {setSearchTerm} 
             searchTerm = {searchTerm}
             /> 

            <table
             className="striped-table">
                <thead>
                    <tr>
                        <th>No.</th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Manager</th>
                        <th>Dept</th>
                        <th
                         colSpan={2} 
                         className='text-center'
                         >Actions
                        </th>
                    </tr>
                </thead>
                <tbody>
                    {employeesData.length>0 ?
                    (
                        renderList
                    ):(
                        <tr>
                            <th
                            colSpan={7} 
                            className='text-center'
                            > No Employees
                            </th>
                         </tr>
                    )
                    }
                </tbody>    
            </table>
        </div>
    );
}

export default List;*/

import React,{useEffect, useState} from 'react';
import Search from './Search';
import Link from '../Routing/Link';
import api from '../API/api';
import Login from '../Login Page/Login'

type employeeType = {
    empId: string,
    empName : string,
    empMail: string,
    department: string,
    manager: string,
}


function List({setSelectedEmployee, token, setToken, login, setLogin, setManager}){

    const [searchTerm, setSearchTerm] = useState("");
    const [employeesData, setEmployeesData] = useState <employeeType[]> ([]);


    useEffect(()=>{
        api.get("/allEmployee",{
            headers:
             {
                "Authorization"
                 : `Basic ${token}`
                }
        }).then(
            (response)=>{
                setEmployeesData(response.data.data);
            }
        ).catch(
            (error)=>{
                console.log(error);
                alert("Data fetching failed. Login again.");
            } 
        );

    })


    const handleDelete = (employee: employeeType) => {
        api.delete(`/deleteEmployee/${employee.empId}`,{
            headers :
             { 
                "Authorization"
                 : `Basic ${token}`
                }
            }).then(
            (response)=>{
                alert("Deleted employee successfully");
            }
        ).catch(
            (error)=>{
                alert("Error while deleting employee");
            }
        )
        
    }
    

    //filtering searched employees
    const employeesList =
     employeesData.filter((employee) =>
      employee.empName.includes(searchTerm))

    
    let renderList = employeesList.map((employee, i)=>
        <tr key = {employee.empMail}>
                <td>{i+1}</td>
                <td>{employee.empId}</td>
                <td>{employee.empName}</td>
                <td>{employee.empMail}</td>
                <td>{employee.department}</td>
                <td>{employee.manager}</td>
                <td className='text-right'>
                    <Link href = "/edit">
                        <button
                         className='muted-button'
                         onClick ={
                            () => setSelectedEmployee(employee)
                            }
                        > 
                            Edit
                        </button>       
                    </Link>
                </td>
                <td className='text-left'>
                    <button 
                        className='muted-button' 
                        onClick ={
                            () => handleDelete(employee)
                        }
                    >
                        Delete
                    </button>
                </td>
        </tr>) 


    return (
        <div>
            {login === true ? 
            (
            <>
                <Search
                 setSearchTerm = {setSearchTerm} 
                 searchTerm = {searchTerm}/> 

                <table className="striped-table">
                    <thead>
                        <tr>
                            <th>Serial No.</th>
                            <th>ID</th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Department</th>
                            <th>Manager</th>
                            <th colSpan={2} className='text-center'>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {employeesData.length>0 ?
                        (
                            renderList
                        ):(
                            <tr>
                                <th colSpan={7} className='text-center'> No Employees</th>
                            </tr>
                        )
                        }
                    </tbody>
                
                </table>
            </>

            ) : (
                <div>
                    <Link href = '/'>
                    <Login
                        token={token} 
                        setToken = {setToken}
                        setLogin = {setLogin}
                        setManager = {setManager}
                    /> 
                    </Link>
                </div>
            )}
        </div>
    );
}

export default List; 