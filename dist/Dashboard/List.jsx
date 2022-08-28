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
const Search_1 = __importDefault(require("./Search"));
const Link_1 = __importDefault(require("../Routing/Link"));
function List({ employeesData, setEmployeesData, setSelectedEmployee }) {
    const [searchTerm, setSearchTerm] = (0, react_1.useState)("");
    employeesData = employeesData.filter((employee) => employee.empname.includes(searchTerm));
    let renderList = employeesData.map((employee, i) => <tr key={employee.empid}>
                <td>{i + 1}</td>
                <td>{employee.empname}</td>
                <td>{employee.empmail}</td>
                <td>{employee.department}</td>
                <td>{employee.manager}</td>
                <td className='text-right'>
                    <Link_1.default href="/edit">
                        <button className='muted-button' onClick={() => setSelectedEmployee(employee)}> Edit </button>       
                    </Link_1.default>
                </td>
                <td className='text-left'>
                    <button className='muted-button' onClick={() => setEmployeesData(employeesData.filter((emp) => emp === employee ? false : true))}>
                        Delete
                    </button>
                </td>
        </tr>);
    return (<div>
            <Search_1.default setSearchTerm={setSearchTerm} searchTerm={searchTerm}/> 

            <table className="striped-table">
                <thead>
                    <tr>
                        <th>No.</th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Department</th>
                        <th>Manager</th>
                        <th colSpan={2} className='text-center'>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {employeesData.length > 0 ?
            (renderList) : (<tr><th colSpan={7} className='text-center'> No Employees</th></tr>)}
                </tbody>
                
            </table>
        </div>);
}
exports.default = List;
