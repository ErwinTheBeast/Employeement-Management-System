"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
function List({ employees, handleEdit, handleDelete }) {
    const formatter = new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD',
        minimumFractionDigits: undefined
    });
    return (<div className=" ">
        <table className='striped table'>
        <thead>
                    <tr>
                        <th>No.</th>
                        <th>First Name</th>
                        <th>Last Name</th>
                        <th>Email</th>
                        <th>Salary</th>
                        <th>Date</th>
                        <th colSpan={2}>
                            Actions
                        </th>
                    </tr>
                </thead>
                <tbody>
                    {employees.length > 0 ? (employees.map((employee, i) => (<tr key={employee.id}>
                                <td>{i + 1}</td> 
                                <td>{employee.firstName}</td>
                                <td>{employee.lastName}</td>
                                <td>{employee.email}</td>
                                <td>{formatter.format(employee.salary)}</td> 
                                <td>{employee.date} </td>

                                <td className="text-right">
                                    <button onClick={() => handleEdit(employee.id)} className="button muted-button">
                                        Edit
                                    </button>
                                </td>

                                <td className="text-left"> 
                                    <button onClick={() => handleDelete(employee.id)} className="button muted-button">
                                        Delete
                                    </button>
                                </td>
                            </tr>))) : (<tr>
                            <td colSpan={7}>No Employees</td>
                        </tr>)}
                </tbody>
    </table>
    </div>);
}
exports.default = List;
