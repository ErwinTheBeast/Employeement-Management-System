import {render, screen} from '@testing-library/react';
import '@testing-library/jest-dom';
import SignUp from '../Login Page/SignUp';

test('Renders SignUp page', () => {
    render(<SignUp/>);
    const titleElement = screen.getByText(/Sign Up/i);
    expect(titleElement).toBeInTheDocument();
    const formElement = screen.getByRole("textbox");
    expect(formElement).toBeInTheDocument(); // I'm confused as to why it considers only one text box not two
    const buttonElement = screen.getAllByRole("button");
    expect(buttonElement.length).toBe(2);
})