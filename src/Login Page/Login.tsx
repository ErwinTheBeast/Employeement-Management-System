import React from 'react';
import {Formik, Field, Form} from 'formik';
import * as Yup from 'yup';
import Link from '../Routing/Link';
import api from '../API/api'

const LoginSchema = Yup.object().shape({
  email: Yup.string()
    .required('Required'),
  password: Yup.string()
    .required('Required'),
});

const Login = ({token, setToken, setLogin, setManager}) => {

    const onFormSubmit = (values) => {
      token = window.btoa(values.email + ':' + values.password); // Initializing token
      setToken(token);
      setManager(values.email);
      api.post("/login",
      {
          username : values.email , password: values.password 
      }, 
      {
          headers: {
            "Authorization"
             : `Basic ${token}`
            }
      }).then(
          (response)=>{
              alert("Login successfull")
              setLogin(true)                                 // Set login state to true
              window.history.pushState({}, "", "/dashboard") // Routing to dashboard page
              const navEvent = new PopStateEvent('popstate');
              window.dispatchEvent(navEvent);     
          }
      ).catch(
          (error)=>{
            console.log(error);
            alert("Login failed. Try again")
          } 
      );
      /*window.history.pushState({}, "", "/dashboard")
      const navEvent = new PopStateEvent('popstate');
      window.dispatchEvent(navEvent);  */
    }                
    return (
        <div
         style = {{margin : "100px"}}>
                <h1
                 className="text-center"
                 > Admin Login </h1>
                <Formik
                    initialValues = {{
                      email: "",
                      password: "",
                  }}
                  validationSchema={LoginSchema}
                  onSubmit={
                    values =>
                     onFormSubmit(values)}
                >
                    {({ errors, touched }) => (
                      <Form>
                       <Field
                          id="email"
                          name="email"
                          type="email"
                          placeholder = "Email"
                        />

                        {errors.email &&
                        touched.email ?
                        <div> {errors.email} </div>
                          : null
                        }

                        <Field 
                          id="password" 
                          name= "password" 
                          type = "password"
                          placeholder = "Password"
                        />

                        {errors.password &&
                        touched.password ?
                        <div> {errors.password} </div>
                          : null
                        }

                        <button
                         type ="submit"
                         > Submit </button>
                      </Form>
                    )}
                </Formik>
            <Link href = '/signup'>
                <button
                 type="button" 
                 className="muted-button"
                 > New Here? Sign Up </button>
            </Link>
        </div> 
    );
}

export default Login;