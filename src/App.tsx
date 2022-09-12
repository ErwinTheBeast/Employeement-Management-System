import React,{useState} from 'react';
import Login from './Login Page/Login'
import SignUp from './Login Page/SignUp'
import Add from './Dashboard/Add';
import Edit from './Dashboard/Edit';
import Header from './Dashboard/Header'
import List from './Dashboard/List';
import {data} from './Data/data'
import Route from './Routing/Route';


const App = ()=>{

    const [employeesData, setEmployeesData] = useState(data);
    const [selectedEmployee, setSelectedEmployee ] = useState({})
    const [token, setToken] = useState();
    const [login, setLogin] = useState(false);
    const [manager, setManager] = useState("");
    
    //username and password from login page
    
    return(
        <div>
            <Route path= "/">
                <Login
                 token={token} 
                 setToken = {setToken}
                 setLogin = {setLogin}
                 setManager = {setManager}
                 /> 
            </Route>
            <Route path= "/signup">
                <SignUp /> 
            </Route>
            <Route path = "/dashboard">
                <div>
                    <Header
                     token = {token}
                     setToken = {setToken}
                     setLogin = {setLogin}
                     login = {login}
                     />
                    <List 
                        setSelectedEmployee = {setSelectedEmployee}
                        token = {token}
                        login = {login}
                        setLogin = {setLogin}
                        setToken = {setToken}
                        setManager = {setManager}
                    />
                </div>
            </Route>

            <Route path= "/add">
                <Add 
                    employeesData = {employeesData}
                    setEmployeesData = {setEmployeesData}
                    token = {token}
                    manager = {manager}
                />
            </Route>

            <Route path= "/edit">
                <Edit 
                    employeesData = {employeesData}
                    selectedEmployee = {selectedEmployee}
                    setEmployeesData = {setEmployeesData}
                    token = {token}
                    manager = {manager}
                /> 
            </Route>

        </div>
        
    );
}

export default App; 