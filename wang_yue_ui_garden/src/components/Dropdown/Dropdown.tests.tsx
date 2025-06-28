import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import Dropdown from './Dropdown';

describe('Dropdown component', () => {
    const options = [
        { value: 'apple', label: 'Apple' },
        { value: 'banana', label: 'Banana' },
        { value: 'cherry', label: 'Cherry' },
    ];

    it('renders with options', () => {
        render(<Dropdown options={options} value="" onChange={() => {}} />);
        expect(screen.getByRole('combobox')).toBeInTheDocument();
        options.forEach(option => {
            expect(screen.getByText(option.label)).toBeInTheDocument();
        });
    });

    it('shows the selected value', () => {
        render(<Dropdown options={options} value="banana" onChange={() => {}} />);
        const select = screen.getByRole('combobox') as HTMLSelectElement;
        expect(select.value).toBe('banana');
    });

    it('calls onChange when a new option is selected', () => {
        const handleChange = jest.fn();
        render(<Dropdown options={options} value="" onChange={handleChange} />);
        fireEvent.change(screen.getByRole('combobox'), { target: { value: 'cherry' } });
        expect(handleChange).toHaveBeenCalledWith('cherry');
    });

    it('renders with a placeholder if provided', () => {
        render(
            <Dropdown
                options={options}
                value=""
                onChange={() => {}}
                placeholder="Select a fruit"
            />
        );
        expect(screen.getByText('Select a fruit')).toBeInTheDocument();
    });
});