import {render, screen} from '@testing-library/react';
import '@testing-library/jest-dom';
import Edit from '../Dashboard/Edit'

const token = "";
const manager = "";
const selectedEmployee = {
    empId: 1,
    empName: 'Shubham',
    empMail: 'smd10@gmail.com',
    department: 'Development',
    manager: manager
};
const employeesData = {};
const setEmployeesdata = () => {};

test('Renders Edit employee form', ()=>{
    render(<Edit token={token} employeesData = {employeesData} setEmployeesData = {setEmployeesdata} selectedEmployee = {selectedEmployee} manager = {manager}/>);
    const headerElement = screen.getByText(/Edit Employee/i);
    expect(headerElement).toBeInTheDocument();
    const FormElements = screen.getAllByRole('textbox');
    expect(FormElements.length).toBe(5);
    const buttonElement = screen.getAllByRole('button');
    expect(buttonElement.length).toBe(2);
})