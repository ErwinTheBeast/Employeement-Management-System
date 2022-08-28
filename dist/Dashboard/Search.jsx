"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const Search = ({ setSearchTerm, searchTerm }) => {
    return (<div>
            <div className="ui icon input right floated">
                <input placeholder="Search..." value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)}/>
                <i className="inverted circular search link icon"></i>
            </div>
        </div>);
};
exports.default = Search;
