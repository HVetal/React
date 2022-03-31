import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';

import { ProfilePresent } from '../profilePres';
import { Profile } from '../index';
import { handleClick } from "../index";

describe('Profile component', () => {
    test('it renders', () => {
      render(<ProfilePresent />);
   
   
      expect(screen.getByText('Show Name')).toBeInTheDocument();
    });
})
// describe('Profile tests', () => {
    // it('calls onSubmit when btn clicked', () => {

    //      render(<ProfilePresent name="name" />);
    //     const text = screen.getByText("");
    //     expect(text).toBeDefined();
    // });

    // it('calls handleClick when btn clicked', () => {
    //     const PhandleClick = jest.fn();
    //     render(<Profile handleClick={handleClick} />);


    //     const btn = screen.findByType('button').props.handleClick();
    //     fireEvent(btn, new MouseEvent("click", {
    //         bubbles: true,
    //         cancelable: true,
    //     }));

    //     expect(PhandleClick).toHaveBeenCalledTimes(1);
    //     expect(PhandleClick).toHaveBeenCalledWith("");
    // });
    
// });