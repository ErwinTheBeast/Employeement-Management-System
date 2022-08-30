import React,{useState} from 'react';
import Login from './Login Page/Login'
import Add from './Dashboard/Add';
import Edit from './Dashboard/Edit';
import Header from './Dashboard/Header'
import List from './Dashboard/List';
import {data} from './Data/data'
import Route from './Routing/Route';
import SignUp from './Login Page/SignUp'

const App = ()=>{

    const [employeesData, setEmployeesData] = useState(data);
    const [selectedEmployee, setSelectedEmployee ] = useState({})
    
    return(
        <div>
            <Route path= "/">
                <Login /> 
            </Route>
            
            <Route path= "/signup">
                <SignUp /> 
            </Route>
            
            <Route path = "/dashboard">
                <div>
                    <Header/>
                    <List 
                        employeesData = {employeesData}
                        setEmployeesData = {setEmployeesData}
                        setSelectedEmployee = {setSelectedEmployee}
                    />
                </div>
            </Route>

            <Route path= "/add">
                <Add 
                    employeesData = {employeesData}
                    setEmployeesData = {setEmployeesData}
                />
            </Route>

            <Route path= "/edit">
                <Edit 
                    employeesData = {employeesData}
                    selectedEmployee = {selectedEmployee}
                    setEmployeesData = {setEmployeesData}
                /> 
            </Route>

        </div>
        
    );
}

export default App; 
