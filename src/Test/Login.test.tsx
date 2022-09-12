import {render, screen} from '@testing-library/react';
import '@testing-library/jest-dom';
import Login from '../Login Page/Login'

const token = "";
const setToken = () => {};
const setLogin = () => {};
const setManager = () => {};

test('Renders Login page', ()=>{
    render(<Login token={token} setToken={setToken} setLogin = {setLogin} setManager = {setManager}/>)
    const headingElement = screen.getByText(/Admin Login/i);
    expect(headingElement).toBeInTheDocument();
    const formElement = screen.getByRole('textbox');
    expect(formElement).toBeInTheDocument(); // Again not sure why it is considered only one text box not 2
    const buttonElement = screen.getAllByRole("button")
    expect(buttonElement.length).toBe(2);
    const linkElement = screen.getByRole("link")
    expect(linkElement).toBeInTheDocument();
})

