import React from 'react'

function Header({ setIsAdding }) {
  return (
        <header>
            <h1> Empoloyee Management System</h1>
            <div>
                <button onClick ={() => setIsAdding(true)} className='button'>Add Employee</button> {/* on clicking we are passing function which sets setIsAdding as true*/ }
            </div>
        </header>
  )
}

export default Header