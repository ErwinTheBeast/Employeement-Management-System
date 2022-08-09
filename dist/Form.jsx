"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importStar(require("react"));
const material_1 = require("@mui/material");
const formik_1 = require("formik");
const Yup = __importStar(require("yup"));
const App_1 = __importDefault(require("./Dashboard/App"));
const SignIn = () => {
    const [isSubmitSuccess, setIsSubmitSuccess] = (0, react_1.useState)(false);
    const formik = (0, formik_1.useFormik)({
        initialValues: {
            email: "",
            password: "",
        },
        validationSchema: Yup.object({
            email: Yup.string()
                .email("Invalid email address")
                .required("Email address is required"),
            password: Yup.string().min(6).max(60).required("Password is required"),
        }),
        onSubmit: (values) => {
            console.log(values);
            setIsSubmitSuccess(true);
        },
    });
    return (<div className="container">
      <div className=" ">
        {isSubmitSuccess ? (<App_1.default />) : (<form onSubmit={formik.handleSubmit}>
            <h2>Login</h2>
            <material_1.TextField name="email" type="text" placeholder="Email" onChange={formik.handleChange} value={formik.values.email}/>

            <br></br>
            <h1> </h1>

            {formik.touched.email && formik.errors.email ? (<div className="error_msg">{formik.errors.email}</div>) : null}

            <material_1.TextField name="password" type="password" placeholder="Password" className="textField" onChange={formik.handleChange} value={formik.values.password}/>
            {formik.touched.password && formik.errors.password ? (<div className="error_msg">{formik.errors.password}</div>) : null}
            
            <br></br>
            <h1> </h1>

            <button type="submit">Login</button>

            <h1> </h1>

            <h4> Administators Only</h4>
          </form>)}
      </div>
    </div>);
};
exports.default = SignIn;
