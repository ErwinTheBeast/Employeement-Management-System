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
function Add({ employeesData, setEmployeesData }) {
    const [empid, setEmpId] = (0, react_1.useState)('');
    const [empname, setempname] = (0, react_1.useState)('');
    const [empmail, setempmail] = (0, react_1.useState)('');
    const [department, setdepartment] = (0, react_1.useState)('');
    const [manager, setmanager] = (0, react_1.useState)('');
    function addEmployee(e) {
        e.preventDefault();
        const newEmployee = { empid, empname, empmail, department, manager };
        employeesData.push(newEmployee);
        setEmployeesData(employeesData);
    }
    return (<div>

            <form className='small-container'>
                <h1>Add New Employee</h1>

                <label> Employee Id </label>
                <input type="text" id="id" onChange={e => setEmpId(e.target.value)} required/>

                <label> Full Name </label>
                <input type="text" id="name" onChange={e => setempname(e.target.value)} required/>

                <label> Email </label>
                <input type="text" id="mail" onChange={e => setempmail(e.target.value)} required/>

                <label> Department </label>
                <input type="text" id="department" onChange={e => setdepartment(e.target.value)} required/>

                <label> Manager </label>
                <input type="text" id="Manager" onChange={e => setmanager(e.target.value)} required/>

                <Link_1.default href="/dashboard">
                    <button onClick={(e) => addEmployee(e)}> Submit </button>
                </Link_1.default>
                <br />
                <Link_1.default href="/dashboard">
                    <button className="muted-button"> Cancel </button>
                </Link_1.default>
            </form>
        </div>);
}
exports.default = Add;
