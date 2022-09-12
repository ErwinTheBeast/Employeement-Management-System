import {render, screen} from '@testing-library/react';
import '@testing-library/jest-dom';
import Add from '../Dashboard/Add'

const token = "";
const employeesData = {};
const setEmployeesdata = () => {};
const manager = "";

test('Renders Add employee form', ()=>{
    render(<Add token={token} employeesData = {employeesData} setEmployeesData = {setEmployeesdata} manager = {manager}/>);
    const headerElement = screen.getByText(/Add Employee/i);
    expect(headerElement).toBeInTheDocument();
    const FormElements = screen.getAllByRole('textbox');
    expect(FormElements.length).toBe(5);
    const buttonElement = screen.getAllByRole('button');
    expect(buttonElement.length).toBe(2);
})