import React,{useState} from 'react';
import Link from '../Routing/Link';

function Edit({employeesData, selectedEmployee, setEmployeesData }){
    
    const id = selectedEmployee.id;
    const [name, setname] = useState(selectedEmployee.name);
    const [email, setemail] = useState(selectedEmployee.email);
    const [salary, setsalary] = useState(selectedEmployee.salary);
    const [date, setdate] = useState(selectedEmployee.date);


    const editEmployee = (event) => {
        
        event.preventDefault();
        const editedEmployee = {
            id, 
            name, 
            email, 
            salary, 
            date
        }

        for(let i = 0; i < employeesData.length; i++){
                if(employeesData[i].id === editedEmployee.id){
                    employeesData.splice(i, 1, editedEmployee);
                    break;
               }
        }

        //*update the database along with updating the state*//

        setEmployeesData(employeesData);
    }   


    return (
        <div>
            <form
             onSubmit = {(e) => editEmployee(e)} 
             className = 'small-container'
             >
                <h1>Edit Employee Information</h1>
                
            {/* Employee Id not allowed to be edited. */}

                <label > Name </label>
                <input
                 value ={name}
                 id="name"
                 type="text" 
                 onChange={e => setname(e.target.value)} 
                 />

                <label> Email </label>
                <input
                 value ={email} 
                 id="mail" 
                 type="text"
                 onChange={e => setemail(e.target.value)} 
                 />

                <label > Salary ($)</label>
                <input
                 value ={salary} 
                 id="salary" 
                 type="text"
                 onChange={e => setsalary(e.target.value)}
                 />

                <label > date </label>
                <input
                 value ={date} 
                 id="date" 
                 type="date"
                 onChange={e => setdate(e.target.value)} 
                 />

                <Link href = "/dashboard">
                    <button
                     onClick={(event)=> editEmployee(event)}
                     > 
                        Save Changes 
                    </button>
                </Link>
                <br/>
                <Link href = "/dashboard">
                    <button
                     className="muted-button"
                     > 
                        Cancel 
                    </button>
                </Link>
            </form>
        </div>
    );
}

export default Edit;