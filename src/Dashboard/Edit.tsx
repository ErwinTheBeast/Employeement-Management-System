import React from 'react';
import Link from '../Routing/Link';
import { Formik, Field, Form} from "formik";
import * as Yup from 'yup';
import api from '../API/api';

const EditSchema = Yup.object().shape({
    empName: Yup.string()
      .required('Required'),
    empMail: Yup.string()
    .email("Invalid email")
      .required('Required'),
    manager: Yup.string()
      .required('Required'),
    department: Yup.string()
      .required('Required'),
  });

const Edit = ({employeesData, selectedEmployee, setEmployeesData, token, manager}) => {
    const onFormSubmit = (values) => {

        selectedEmployee.empId = values.empId;
        selectedEmployee.empName = values.empName;
        selectedEmployee.empName = values.empName;
        selectedEmployee.empMail = values.empMail;
        selectedEmployee.manager = manager;
        selectedEmployee.department = values.department;

        api.put('/updateEmployee', selectedEmployee,{
        headers:
            {
                "Authorization"
                 : `Basic ${token}`
                }
            }).then(
            (response)=>{
                alert("Employee edited successfully")
                window.history.pushState({}, "", "/dashboard")
                const navEvent = new PopStateEvent('popstate');
                window.dispatchEvent(navEvent);     
            }
        ).catch(
            (error)=>{
                alert("Error while editing employee");
            }
        )

        for(let i = 0; i < employeesData.length; i++){
            if(employeesData[i].id
                 === selectedEmployee.id)
                {
                employeesData
                 .splice(i, 1, selectedEmployee);
                break;
           }
        }
        /*setEmployeesData(employeesData);
        window.history.pushState({}, "", "/dashboard")
        const navEvent = new PopStateEvent('popstate');
        window.dispatchEvent(navEvent); */
    }
    
    return (
        <div style = {{margin : "100px"}}>
            <h1
             className = "text-center"
             >Edit Employee
             </h1>
            <Formik 
             initialValues = {{
                empId: selectedEmployee.empId,
                empName: selectedEmployee.empName,
                empMail: selectedEmployee.empMail,
                manager: manager,
                department: selectedEmployee.department,
            }}
            validationSchema={EditSchema}
            onSubmit={
                values => {
                    onFormSubmit(values)
            }}
            >
            
            {({ errors, touched }) => (
            <Form 
            className ='small-container'
            >
                <Field
                 name = "empId" 
                 type = "text" 
                 placeholder = "Id"
                />

                <Field
                 name = "empName" 
                 type = "text" 
                 placeholder = "Name"
                />
                
                <Field
                 name = "empMail" 
                 type = "email" 
                 placeholder = "Email"
                />

                
                <Field
                 name = "manager" 
                 type = "text" 
                 placeholder = "Manager"
                />

                <Field
                 name = "department" 
                 type = "text" 
                 placeholder = "Department"
                />

                <button
                 type="submit"
                 >Save</button>
                
                <p/>
                <Link href = "/dashboard">
                <button
                 className="muted-button"
                 type="submit"
                 >Cancel</button>
                </Link>
                
            </Form>
       )}
            </Formik>
        </div>
    )
}

export default Edit;