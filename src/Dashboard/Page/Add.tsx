import React, {useState} from 'react'
import Swal from 'sweetalert2';

function Add({employees, setEmployees, setIsAdding}) {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [salary, setSalary] = useState('');
    const [date, setDate] = useState('');

    const handleAdd = e => { // handleAdd is defined as function passed with object e (event).
        e.preventDefault(); // Basically tells the system to not allow the event to move forward in its default state
        if (!firstName || !lastName || !email || !salary || !date) { // Incomplete addition form
            return Swal.fire({
                icon: 'error',
                title: 'Error!',
                text: 'All fields are required.',
                showConfirmButton: true
            });
        }

        const id = employees.length + 1;
        const newEmployee = { // Creating new employee and pushing new employee to employees (data list)
            id,
            firstName,
            lastName,
            email,
            salary,
            date
        }
        employees.push(newEmployee);
        setEmployees(employees);
        setIsAdding(false);     // After adding is done, go back to list screen

        Swal.fire({     // Success message
            icon: 'success',
            title: 'Added!',
            text: `${firstName} ${lastName}'s data has been Added.`, 
            showConfirmButton: false,
            timer: 1000
        });
    }


    return (
        <div className="small-container">
            <form onSubmit={handleAdd}>
                <h1>Add Employee</h1>
                <label>First Name</label>
                <input
                    id="firstName"
                    type="text"
                    name="firstName"
                    value={firstName}
                    onChange={e => setFirstName(e.target.value)} // We are changing this (value - firstName) in the target element (firstName textbox)
                />
                <label>Last Name</label>
                <input
                    id="lastName"
                    type="text"
                    name="lastName"
                    value={lastName}
                    onChange={e => setLastName(e.target.value)}
                />
                <label>Email</label>
                <input
                    id="email"
                    type="email"
                    name="email"
                    value={email}
                    onChange={e => setEmail(e.target.value)}
                />
                <label>Salary ($)</label>
                <input
                    id="salary"
                    type="number"
                    name="salary"
                    value={salary}
                    onChange={e => setSalary(e.target.value)}
                />
                <label>Date</label>
                <input
                    id="date"
                    type="date"
                    name="date"
                    value={date}
                    onChange={e => setDate(e.target.value)}
                />
                <div style={{ marginTop: '30px' }}>     {/* Cancel button & add button*/}
                    <input type="submit" value="Add" />
                    <input
                        style={{ marginLeft: '12px' }}
                        className="button"
                        type="button"
                        value="Cancel"
                        onClick={() => setIsAdding(false)}  // If we cancwl the addition we need to go back to list page
                    />
                </div>
            </form>
        </div>
    );
}

export default Add
