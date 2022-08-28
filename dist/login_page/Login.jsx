"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const react_2 = require("react");
const Link_1 = __importDefault(require("../Routing/Link"));
require("./Login.css");
function Login() {
    const [user, setUser] = (0, react_2.useState)('');
    const [password, setPassword] = (0, react_2.useState)('');
    const [uerrMsg, setUerrMsg] = (0, react_2.useState)('');
    const [perrMsg, setPerrMsg] = (0, react_2.useState)('');
    const [href, setHref] = (0, react_2.useState)('/');
    function Validate() {
        let isValid = true;
        var pattern = new RegExp(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/);
        if (!user) {
            isValid = false;
            setUerrMsg("Please enter your username.");
        }
        else if (!pattern.test(user)) {
            isValid = false;
            setUerrMsg("Please enter valid email address.");
        }
        else {
            isValid = true;
            setUerrMsg("");
        }
        if (!password) {
            isValid = false;
            setPerrMsg("Please enter your password.");
        }
        else if (password.length < 5) {
            isValid = false;
            setPerrMsg("Please add at least 6 charachter.");
        }
        else {
            isValid = true;
            setPerrMsg("");
        }
        isValid === true ? setHref("/dashboard") : setHref("/");
        return;
    }
    return (<div style={{ margin: "100px" }} className="ui middle aligned center aligned grid">
            <div className="six wide column">
                <h1 className="ui blue header">
                    Log-in to your account 
                </h1>
                <form className="ui mini form" onSubmit={(e) => e.preventDefault()}>
                <div className="ui stacked segment">
                    <div className="field">
                    <div className="ui left icon input">
                        <i className="user icon"></i>
                        
                        <input type="text" name="email" placeholder="E-mail address" autoComplete="off" value={user} onChange={(e) => { setUser(e.target.value); console.log(user); }} required/>
                    </div>
                    </div>

                    <div className="error-text" style={{ color: "red" }}>{uerrMsg}</div>

                    <div className="field">
                    <div className="ui left icon input">
                        <i className="lock icon"></i>
                        
                        <input type="password" name="password" placeholder="Password" autoComplete="off" value={password} onChange={(e) => { setPassword(e.target.value); Validate(); }} required/>
                    </div>
                    </div>
                    
                    <div className="error-text" style={{ color: "red" }}>{perrMsg}</div>

                    <Link_1.default href={href}>
                        <button className="ui fluid large blue submit button" onClick={event => { event.preventDefault(); console.log(href); }}>Login</button>
                    </Link_1.default>
                </div>

                <div className="ui error message"></div>

                </form>

                <div className="ui message">
                New to us? <a href="#">Sign Up</a>
                </div>
            </div>
            </div>);
}
exports.default = Login;
