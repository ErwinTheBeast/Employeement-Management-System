import React from 'react'

function List({employees, handleEdit, handleDelete}) { // Passing the props

    const formatter = new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD',
        minimumFractionDigits: undefined
    });

  return (
    <div className = " ">
        <table className = 'striped table'>
        <thead>
                    <tr>
                        <th>No.</th>
                        <th>First Name</th>
                        <th>Last Name</th>
                        <th>Email</th>
                        <th>Salary</th>
                        <th>Date</th>
                        <th colSpan={2}>
                            Actions
                        </th>
                    </tr>
                </thead>
                <tbody>
                    {employees.length > 0 ? (
                        employees.map((employee, i) => (
                            <tr key={employee.id}>
                                <td>{i + 1}</td> {/* Since id number starts from 0 */}
                                <td>{employee.firstName}</td>
                                <td>{employee.lastName}</td>
                                <td>{employee.email}</td>
                                <td>{formatter.format(employee.salary)}</td> {/* for formating the number into proper currency/money value */}
                                <td>{employee.date} </td>

                                <td className="text-right">
                                    <button
                                        onClick={() => handleEdit(employee.id)} // handleEdit tells (onClick event) to make setIsEdit to true which will then re-render the page accordingly (handleEdit takes employee.id as argument)
                                        className="button muted-button"
                                    >
                                        Edit
                                    </button>
                                </td>

                                <td className="text-left"> 
                                    <button
                                        onClick={() => handleDelete(employee.id)} // Similar process for delete
                                        className="button muted-button"
                                    >
                                        Delete
                                    </button>
                                </td>
                            </tr>
                        ))
                    ) : (
                        <tr>
                            <td colSpan={7}>No Employees</td>
                        </tr>
                    )}
                </tbody>
</table>
    </div> 
  )
}

export default List