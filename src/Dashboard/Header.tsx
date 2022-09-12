import React from 'react';
import api from '../API/api';
import Link from '../Routing/Link'

const Header = ({token, setToken, setLogin, login}) => {

    const handleLogout = () =>{
        api.post('/logout', {
            headers: {
                "Authorization"
                 : `Basic ${token}`
                }
        }).then(
            (response) => {
                alert("Logged out successfully");
                setLogin(false);
                setToken = ("");
                window.history.pushState({}, "","/")
                const navEvent = new PopStateEvent('popstate');
                window.dispatchEvent(navEvent);
            }
        ).catch(
            (error)=>{
                alert("Could not log out");
            }
        )

    } 

    return (
        <header>
            {login === true? (
            <>
                <div className='text-center'> <h1>Employee Management System</h1> </div>

                <Link href = "/"> 
                    <button
                     className='button'
                     onClick={() => handleLogout()}
                    > Log out
                    </button>
                </Link>

                <Link href = "/add"> 
                    <button className='button'> Add Employee </button>
                </Link>
            </>
            ):(
                <>
                </>
            )}
            
        </header>   
    );
}


export default Header;