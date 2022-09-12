import {render, screen} from '@testing-library/react';
import '@testing-library/jest-dom';
import Header from '../Dashboard/Header';
import List from '../Dashboard/List';

const setSelectedEmployee = () => {}
const token = "";
const login = true;
const setToken = () => {};
const setLogin = () => {};
const setManager = () => {};

test('Renders Dashboard Header', ()=>{
    render(<Header token={token} setToken = {setToken} login = {login} setLogin = {setLogin}/>)
    const headingElement = screen.getByText(/Employee Management System/i);
    expect(headingElement).toBeInTheDocument();
    const buttonElement = screen.getAllByRole('button');
    expect(buttonElement.length).toBe(2);
})

test('Renders DashBoard List', () => {
    render(<List setSelectedEmployee={setSelectedEmployee} token={token} setToken = {setToken} login = {login} setLogin = {setLogin} setManager = {setManager}/>)
    const listElement = screen.getByRole('table');
    expect(listElement).toBeInTheDocument();
    const SearchBoxElement = screen.getByRole('textbox')
    expect(SearchBoxElement).toBeInTheDocument();
})