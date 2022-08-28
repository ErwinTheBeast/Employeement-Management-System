"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const Link_1 = __importDefault(require("../Routing/Link"));
function Title() {
    return (<header>
            
            <div className='text-center '> <h1>Employee Management System</h1> </div>

            <Link_1.default href="/"> 
                <button className='ui button'>Log out</button>
            </Link_1.default>

            <Link_1.default href="/add"> 
                <button className='fluid ui button blue'> Add Employee </button>
            </Link_1.default>
            
        </header>);
}
exports.default = Title;
