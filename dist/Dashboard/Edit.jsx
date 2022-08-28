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
const Link_1 = __importDefault(require("../Routing/Link"));
function Edit({ employeesData, selectedEmployee, setEmployeesData }) {
    const [empid, setEmpId] = (0, react_1.useState)(selectedEmployee.empid);
    const [empname, setempname] = (0, react_1.useState)(selectedEmployee.empname);
    const [empmail, setempmail] = (0, react_1.useState)(selectedEmployee.empmail);
    const [department, setdepartment] = (0, react_1.useState)(selectedEmployee.department);
    const [manager, setmanager] = (0, react_1.useState)(selectedEmployee.manager);
    function onFormSubmit(event) {
        event.preventDefault();
        const editedEmployee = { empid, empname, empmail, department, manager };
        for (let i = 0; i < employeesData.length; i++) {
            if (employeesData[i].empid === editedEmployee.empid) {
                employeesData.splice(i, 1, editedEmployee);
                break;
            }
        }
        setEmployeesData(employeesData);
    }
    return (<div>
            <form onSubmit={(e) => onFormSubmit(e)} className='small-container'>
                <h1>Edit Employee Information</h1>
                
            
                <label> Employee Id  </label>
                <input value={`${empid} `} id="id" onChange={e => setEmpId(e.target.value)} disabled type="text"/>

                <label> Full Name </label>
                <input value={empname} id="name" onChange={e => setempname(e.target.value)} required type="text"/>

                <label> Email </label>
                <input value={empmail} id="mail" onChange={e => setempmail(e.target.value)} required type="text"/>

                <label> Department </label>
                <input value={department} id="department" onChange={e => setdepartment(e.target.value)} required type="text"/>

                <label> Manager </label>
                <input value={manager} id="Manager" onChange={e => setmanager(e.target.value)} required type="text"/>

                <Link_1.default href="/dashboard">
                    <button onClick={(event) => onFormSubmit(event)}> Submit </button>
                </Link_1.default>
                <br />
                <Link_1.default href="/dashboard">
                    <button className="muted-button"> Cancel </button>
                </Link_1.default>
            </form>
        </div>);
}
exports.default = Edit;
