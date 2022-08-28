import React,{useState} from 'react';
import Search from './Search';
import Link from '../Routing/Link';

function List({employeesData,setEmployeesData, setSelectedEmployee}){

    const [searchTerm, setSearchTerm] = useState("");
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

    
    let renderList = employeesData.map((employee, i)=>
        <tr key = {employee.id}>
                <td>{i+1}</td>
                <td>{employee.name}</td>
                <td>{employee.email}</td>
                <td>{employee.salary}</td>
                <td>{employee.date}</td>
                <td className='text-right'>
                    <Link href = "/edit">
                        <button className='muted-button' onClick ={()=> setSelectedEmployee(employee)}> Edit </button>       
                    </Link>
                </td>
                <td className='text-left'>
                    <button 
                        className='muted-button' 
                        onClick ={()=>setEmployeesData(employeesData.filter((emp)=> emp === employee? false : true))}
                    >
                        Delete
                    </button>
                </td>
        </tr>) 


    return (
        <div>
            <Search  setSearchTerm = {setSearchTerm} searchTerm = {searchTerm}/> 

            <table className="striped-table">
                <thead>
                    <tr>
                        <th>No.</th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Salary</th>
                        <th>Date</th>
                        <th colSpan={2} className='text-center'>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {employeesData.length>0 ?
                    (
                        renderList
                    ):(
                        <tr><th colSpan={7} className='text-center'> No Employees</th></tr>
                    )
                    }
                </tbody>
                
            </table>
        </div>
    );
}

export default List;