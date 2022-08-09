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
const List_1 = __importDefault(require("./List"));
const Header_1 = __importDefault(require("./Header"));
const Edit_1 = __importDefault(require("./Edit"));
const Add_1 = __importDefault(require("./Add"));
const data_1 = require("../data");
function DashBoard() {
    const [employees, setEmployees] = (0, react_1.useState)(data_1.employeesData);
    const [isAdding, setIsAdding] = (0, react_1.useState)(false);
    const [isEditing, setIsEditing] = (0, react_1.useState)(false);
    const [selectedEmployee, setSelectedEmployee] = (0, react_1.useState)(null);
    const handleEdit = (id) => {
        const [employee] = employees.filter(employee => employee.id === id);
        setSelectedEmployee(employee);
        setIsEditing(true);
    };
    const handleDelete = (id) => {
        sweetalert2_1.default.fire({
            icon: 'warning',
            title: 'Are you sure?',
            showCancelButton: true,
            confirmButtonText: 'Yes',
            cancelButtonText: 'No',
        }).then(result => {
            if (result.value) {
                const [employee] = employees.filter(employee => employee.id === id);
                sweetalert2_1.default.fire({
                    icon: 'success',
                    title: 'Deleted!',
                    text: `${employee.firstName} ${employee.lastName}'s data has been deleted.`,
                    showConfirmButton: false,
                    timer: 1500,
                });
                setEmployees(employees.filter(employee => employee.id !== id));
            }
        });
    };
    return (<div className='container'>
        {!isAdding && !isEditing && (<>
                
                <Header_1.default setIsAdding={setIsAdding}/>
                <List_1.default employees={employees} handleEdit={handleEdit} handleDelete={handleDelete}/>
            </>)}
        
        {isAdding && (<Add_1.default employees={employees} setEmployees={setEmployees} setIsAdding={setIsAdding}/>)}
            
            {isEditing && (<Edit_1.default employees={employees} selectedEmployee={selectedEmployee} setEmployees={setEmployees} setIsEditing={setIsEditing}/>)}
    </div>);
}
exports.default = DashBoard;
