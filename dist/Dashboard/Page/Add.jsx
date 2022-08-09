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
const sweetalert2_1 = __importDefault(require("sweetalert2"));
function Add({ employees, setEmployees, setIsAdding }) {
    const [firstName, setFirstName] = (0, react_1.useState)('');
    const [lastName, setLastName] = (0, react_1.useState)('');
    const [email, setEmail] = (0, react_1.useState)('');
    const [salary, setSalary] = (0, react_1.useState)('');
    const [date, setDate] = (0, react_1.useState)('');
    const handleAdd = e => {
        e.preventDefault();
        if (!firstName || !lastName || !email || !salary || !date) {
            return sweetalert2_1.default.fire({
                icon: 'error',
                title: 'Error!',
                text: 'All fields are required.',
                showConfirmButton: true
            });
        }
        const id = employees.length + 1;
        const newEmployee = {
            id,
            firstName,
            lastName,
            email,
            salary,
            date
        };
        employees.push(newEmployee);
        setEmployees(employees);
        setIsAdding(false);
        sweetalert2_1.default.fire({
            icon: 'success',
            title: 'Added!',
            text: `${firstName} ${lastName}'s data has been Added.`,
            showConfirmButton: false,
            timer: 1000
        });
    };
    return (<div className="small-container">
            <form onSubmit={handleAdd}>
                <h1>Add Employee</h1>
                <label>First Name</label>
                <input id="firstName" type="text" name="firstName" value={firstName} onChange={e => setFirstName(e.target.value)}/>
                <label htmlFor="lastName">Last Name</label>
                <input id="lastName" type="text" name="lastName" value={lastName} onChange={e => setLastName(e.target.value)}/>
                <label htmlFor="email">Email</label>
                <input id="email" type="email" name="email" value={email} onChange={e => setEmail(e.target.value)}/>
                <label htmlFor="salary">Salary ($)</label>
                <input id="salary" type="number" name="salary" value={salary} onChange={e => setSalary(e.target.value)}/>
                <label htmlFor="date">Date</label>
                <input id="date" type="date" name="date" value={date} onChange={e => setDate(e.target.value)}/>
                <div style={{ marginTop: '30px' }}>     
                    <input type="submit" value="Add"/>
                    <input style={{ marginLeft: '12px' }} className="button" type="button" value="Cancel" onClick={() => setIsAdding(false)}/>
                </div>
            </form>
        </div>);
}
exports.default = Add;
