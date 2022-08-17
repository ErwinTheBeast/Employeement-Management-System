import React, { useState } from "react"; // useState hook
import { TextField } from "@mui/material";
import { useFormik } from "formik"; // useFormik hook
import * as Yup from "yup"; // Import everything from yup
import App from "./Dashboard/App";

const SignIn = () => {
  const [isSubmitSuccess, setIsSubmitSuccess] = useState(false); // Default value of isSubmitSuccess = false

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: Yup.object({
      email: Yup.string()
        .email("Invalid email address")
        .required("Email address is required"),
      password: Yup.string().min(6,"Minimum 6 characters required").max(60, "Maximum 60 characters allowed").required("Password is required"),
    }),

    onSubmit: (values) => {
      //console.log(values);
      setIsSubmitSuccess(true)
    },
  });

  return (
    <div className="container">
      <div className = " ">
        {isSubmitSuccess ? ( // if submit is success display App
          <App />
        ) : (
          <form onSubmit={formik.handleSubmit}>
            <h2>Login</h2>
            <TextField
              name="email"
              type="text"
              placeholder="Email"
              onChange={formik.handleChange} // handleChange allows for real time updation of form values as the user types
              value={formik.values.email}
            />

            <br></br>
            <h1> </h1>

            {formik.touched.email && formik.errors.email ? ( // if invalid email adress or email box clicked on but not entered before submit button, display error msg
              <div className="error_msg">{formik.errors.email}</div>
            ) : null}

            <TextField
              name="password"
              type="password"
              placeholder="Password"
              className="textField"
              onChange={formik.handleChange}
              value={formik.values.password}
            />
            {formik.touched.password && formik.errors.password ? ( // if invalid pwd or pwd box clicked on but not entered before submit button, display error msg
              <div className="error_msg">{formik.errors.password}</div>
            ) : null}
            
            <br></br>
            <h1> </h1>

            <button type="submit">Login</button> {/* submit button */}

            <h1> </h1>

            <h4> Administators Only</h4>
          </form>
        )}
      </div>
    </div>
  );
};

export default SignIn;
