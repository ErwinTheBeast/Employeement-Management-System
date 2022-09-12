import React from 'react';
import {Formik, Field, Form} from 'formik';
import * as Yup from 'yup';
import Link from '../Routing/Link';
import api from '../API/api';

const LoginSchema = Yup.object().shape({
  email: Yup.string()
    .email("Invalid email")
    .required('Required'),
  password: Yup.string()
    .min(6, 'Password should have a minimum of 6 characters')
    .max(60, 'Password should have a maximum of 60 characters')
    .required('Required'),
});
const SignUp = () => {

    const onFormSubmit = (values) => {
      api.post("/newUser", {
        username : values.email,
        password: values.password
       }).then(
        (response) => {
            alert("User created");
            window.history.pushState({}, "", "/");
            const navEvent = new PopStateEvent('popstate');
            window.dispatchEvent(navEvent);     
        }
    ).catch(
        (Error)=>{
          console.log(Error);
           alert("Sign Up failed");
        }
    )
      window.history.pushState({}, "", "/")
      const navEvent = new PopStateEvent('popstate');
      window.dispatchEvent(navEvent);  
    }  

    return (
        <div
         style = {{margin : "100px"}}>
                <h1
                 className="text-center"
                 > Sign Up </h1>
                <Formik
                    initialValues = {{
                      email: "",
                      password: "",
                  }}
                  validationSchema = {LoginSchema}
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
                         type = "submit"
                         > Save </button>
                      </Form>
                    )}
                </Formik>
            <Link href = '/'>
                <button
                 type="button" 
                 className="muted-button"
                 > Already a member? Go to Login </button>
            </Link>
        </div> 
    );
}

export default SignUp;