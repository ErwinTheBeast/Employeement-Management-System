import React from 'react';
import {useState} from 'react';
import Link from '../Routing/Link';

const SignUp = () => {
    const [user, setUser] = useState('');
    const [password, setPassword] = useState('');
    const [usererrMsg, setUsererrMsg] = useState('');
    const [pwderrMsg, setPwderrMsg] = useState('');
    const [href, setHref] = useState('/')
    
    const Validate = (event) => {
        let isValiduser = false;
        let isValidpwd = false;
        
        //Verifying if its a valid email
        var pattern = new RegExp(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/); //  Regex expression for email

        if (!user) {
            isValiduser = false;
            setUsererrMsg("Username required");
        }
        else if(!pattern.test(user)) {
            isValiduser = false;
            setUsererrMsg("Please enter valid email address.");
        }
        else{
            isValiduser = true;
            setUsererrMsg("");
        }

        //Password should be longer than 6 characters    
        if (!password) {
            isValidpwd = false;
            setPwderrMsg("Password required");
        }
        else if(password.length < 6){
            isValidpwd = false;
            setPwderrMsg("Password length must be larger than 6");
        }
        else if(password.length > 59){
            isValidpwd = false;
            setPwderrMsg("Password length must be smaller than 60 characters");
        }
        else{
            isValidpwd = true;
            setPwderrMsg("");
        }
        
        (isValiduser === true && 
            isValidpwd === true) ? 
            (setHref("/"))
             : (setHref("/signup"))
    }
       

    return(
        <div style = {{margin : "100px"}}>
            <div>
                <h1 className='text-center'>
                    New User
                </h1>
                <form className = 'small-container'
                 onSubmit={(e)=>e.preventDefault()}
                 >
                <div>
                    <div>
                        {/* Username */}
                        <input 
                            type="text" 
                            name="email" 
                            placeholder="Email"
                            value = {user}
                            onChange = {
                                (e) => {setUser(e.target.value);  
                                    console.log(user);
                                }}
                        />
                    </div>

                    <div style={{color:"red"}}>{usererrMsg}</div>

                    <div>
                        {/* Password */}
                        <input 
                            type="password" 
                            name="password" 
                            placeholder="Password"    
                            value = {password}
                            onChange = {
                                (e) => {
                                    setPassword(e.target.value);
                                }}
                        />
                    </div>
                    
                    <div style={{color:"red"}}>{pwderrMsg}</div>

                    <Link href = {href}>
                        <button 
                         className= "submit" 
                         onClick={
                            e => {
                                e.preventDefault();
                                Validate(e);
                                console.log(href)}}
                                >
                         Save
                        </button>
                    </Link>
                    <br/>
                    <p/>
                </div>

                </form>
            </div>
            </div>
        );
}

export default SignUp; 