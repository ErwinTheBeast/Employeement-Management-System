"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
function Header({ setIsAdding }) {
    return (<header>
            <h1> Empoloyee Management System</h1>
            <div>
                <button onClick={() => setIsAdding(true)} className='button'>Add Employee</button> 
            </div>
        </header>);
}
exports.default = Header;
