import React from 'react';
import Link from '../Routing/Link';
import { Formik, Field, Form} from "formik";
import * as Yup from 'yup';
import api from '../API/api';

const AddSchema = Yup.object().shape({
    empId: Yup.string()
      .required('Required'),
    empName: Yup.string()
      .required('Required'),
    empMail: Yup.string()
    .email("Invalid email")
      .required('Required'),
    department: Yup.string()
      .required('Required'),
    manager: Yup.string()
      .required('Required'),
  });


  
const Add = ({employeesData, setEmployeesData, token, manager}) => {

    const onFormSubmit = (values) => {

        const newEmployee = {
            empId: values.empId,
            empName: values.empName,
            empMail: values.empMail,
            department: values.department,
            manager: values.manager,
        }

        api.post('/addEmployee', newEmployee, {
            headers:
            {
                "Authorization"
                 : `Basic ${token}`
            }}
            ).then(
            (response)=>{
                alert("Employee added successfully")
                window.history.pushState({}, "", "/dashboard")
                const navEvent = new PopStateEvent('popstate');
                window.dispatchEvent(navEvent);
            }
        ).catch(
            (error)=>{
                console.log(error);
                alert("Error while adding employee");
            }
        )

        /*api.get("/allEmployee",
        {
            headers: {"Authorization" : "Basic YWJjQDEyMy5jb206MTIzNDU2"}
        }).then(
            (response)=>{
                setEmployeesData(response.data.data);
            }
        ).catch(
            (error)=>{
                console.log(error);
                alert("Data fetching failed. Login again.");
            } 
        );*/
        
        /*employeesData.push(newEmployee); 
        setEmployeesData(employeesData);
        window.history.pushState({}, "", "/dashboard")
        const navEvent = new PopStateEvent('popstate');
        window.dispatchEvent(navEvent); */
    }
    
    return (
        <div style = {{margin : "100px"}}>
            <h1 className = "text-center">Add Employee</h1>
            <Formik 
             initialValues = {{
                empId: "",
                empName: "",
                empMail: "",
                department: "",
                manager: manager,
            }}
            validationSchema={AddSchema}
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

                {errors.empId &&
                 touched.empId ?
                 <div> {errors.empId} </div>
                  : null
                }

                <Field
                 name = "empName" 
                 type = "text" 
                 placeholder = "Name"
                />

                {errors.empName &&
                 touched.empName ?
                 <div> {errors.empName} </div>
                  : null
                }
                
                <Field
                 name = "empMail" 
                 type = "email" 
                 placeholder = "Email"
                />

                {errors.empMail &&
                 touched.empMail ?
                 <div> {errors.empMail} </div>
                  : null
                }
                
                <Field
                 name = "department" 
                 type = "text" 
                 placeholder = "Department"
                />

                {errors.department &&
                 touched.department ?
                 <div> {errors.department} </div>
                  : null
                }

                <Field
                 name = "manager" 
                 type = "text" 
                 placeholder = "Manager"
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

export default Add;