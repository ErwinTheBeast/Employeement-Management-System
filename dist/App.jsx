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
const Login_1 = __importDefault(require("./login_page/Login"));
const Add_1 = __importDefault(require("./Dashboard/Add"));
const Edit_1 = __importDefault(require("./Dashboard/Edit"));
const Title_1 = __importDefault(require("./Dashboard/Title"));
const List_1 = __importDefault(require("./Dashboard/List"));
const Data_1 = require("./Data/Data");
const Route_1 = __importDefault(require("./Routing/Route"));
const App = () => {
    const [employeesData, setEmployeesData] = (0, react_1.useState)(Data_1.data);
    const [selectedEmployee, setSelectedEmployee] = (0, react_1.useState)({});
    return (<div>
            <Route_1.default path="/">
                <Login_1.default /> 
            </Route_1.default>

            <Route_1.default path="/dashboard">
                <div>
                    <Title_1.default />
                    <List_1.default employeesData={employeesData} setEmployeesData={setEmployeesData} setSelectedEmployee={setSelectedEmployee}/>
                </div>
            </Route_1.default>

            <Route_1.default path="/add">
                <Add_1.default employeesData={employeesData} setEmployeesData={setEmployeesData}/>
            </Route_1.default>

            <Route_1.default path="/edit">
                <Edit_1.default employeesData={employeesData} selectedEmployee={selectedEmployee} setEmployeesData={setEmployeesData}/> 
            </Route_1.default>

        </div>);
};
exports.default = App;
