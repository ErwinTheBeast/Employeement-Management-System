import React, {useState } from 'react'
import Swal from 'sweetalert2';
import List from './List';
import Header from './Header';
import Edit from './Edit'; 
import Add from './Add';

import {employeesData } from '../data';
function DashBoard() {

    const [employees, setEmployees] = useState(employeesData); // We should be able to see the addition/updation being done to the employeelist everytime we get back to the list page
    const [isAdding, setIsAdding] = useState(false); // So that when useState = true, only then pop-up for Adding or Editing will appear
    const [isEditing, setIsEditing] = useState(false);
    const [selectedEmployee, setSelectedEmployee] = useState(null); // will contain data of the particular employee that we select (say for updation/deletion), by default null

    const handleEdit = (id) => {
        const [employee] = employees.filter(employee => employee.id === id); 
        setSelectedEmployee(employee);
        setIsEditing(true); // go to/show Editing scree/form 
    }
    
    const handleDelete = (id) => {
        Swal.fire({         // Warning prompt
            icon: 'warning',
            title: 'Are you sure?',
            showCancelButton: true,
            confirmButtonText: 'Yes',
            cancelButtonText: 'No',
        }).then(result => {
            if (result.value) { 
                const [employee] = employees.filter(employee => employee.id === id);  // filter/find employee by id

                Swal.fire({     // Deletion success prompt
                    icon: 'success',
                    title: 'Deleted!',
                    text: `${employee.firstName} ${employee.lastName}'s data has been deleted.`,
                    showConfirmButton: false,
                    timer: 1500,
                });

                setEmployees(employees.filter(employee => employee.id !== id));
            }
        });
    }

  return (
    <div className = 'container'>
        {!isAdding && !isEditing && (  /* When we aren't doing any editing or adding but simply viewing */
            <>
                {/* Passing props*/}
                <Header
                    setIsAdding={setIsAdding}
                />
                <List 
                    employees={employees}
                    handleEdit={handleEdit} // We are creating buttons for each list item, to allow for edit and delete, the handle functions are responsive to the click and then pass the responsibility of editing & deleting to parent function 
                    handleDelete={handleDelete}
                />
            </>
        )}
        {/* Add */}
        {isAdding && ( // When we want to add, different screen gets set up
                <Add
                    employees={employees}
                    setEmployees={setEmployees}
                    setIsAdding={setIsAdding}
                />
            )}
            {/* Edit */}
            {isEditing && ( // When we want to add, different screen gets set up
                <Edit
                    employees={employees}
                    selectedEmployee={selectedEmployee}
                    setEmployees={setEmployees}
                    setIsEditing={setIsEditing}
                />
            )}
    </div>
  )
}

export default DashBoard

