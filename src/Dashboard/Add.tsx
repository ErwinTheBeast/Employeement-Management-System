import React, {useState} from 'react';
import Link from '../Routing/Link';

function Add({employeesData, setEmployeesData}){

    const [name, setname] = useState('');
    const [email, setemail] = useState('');
    const [salary, setsalary] = useState('');
    const [date, setdate] = useState('');


    const addEmployee = (e) => {
        e.preventDefault()
        const newEmployee = { 
            id : employeesData.length + 1, 
            name, 
            email, 
            salary, 
            date
        }
        if(newEmployee.name !== '' &&
         newEmployee.email !== '' && 
         newEmployee.salary !== '' && 
         newEmployee.date !== '')
        {
            employeesData.push(newEmployee);
            /*update the database along with updating the state, causing component to rerender*/
            setEmployeesData(employeesData);
        }
    }


    return (
        <div>

            <form className = 'small-container'>
                <h1>Add New Employee</h1>   

                <label > Name </label>
                <input
                  type="text"
                  id="name"
                  value = {name}
                  onChange={e => setname(e.target.value)}
                  required
                  />

                <label > Email </label>
                <input
                 type="email" 
                 id="email" 
                 value={email}
                 onChange={e => setemail(e.target.value)}
                 />

                <label > Salary ($)</label>
                <input
                 type="text" 
                 id="salary" 
                 value={salary}
                 onChange={e => setsalary(e.target.value)}
                 />

                <label> Date </label>
                <input
                 type="date" 
                 id="date" 
                 value={date}
                 onChange={e => setdate(e.target.value)}
                 />

                <Link
                 href = "/dashboard"
                 >
                    <button
                     onClick={(e)=> addEmployee(e)}
                     > 
                     Add 
                    </button>
                </Link>
                <br/>
            </form>
        </div>
    );
}

export default Add;