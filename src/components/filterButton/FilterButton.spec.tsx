import { render, screen, fireEvent } from "@testing-library/react";
import FilterButton from "../filterButton/index";
import { faCheck } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

describe('filterButton', ()=> {

    test('should render button with placeholder text', () => {
        const placeholder = 'Test Placeholder';
        const backgroundColor = "#1c1c1e"
        const icon = <FontAwesomeIcon icon={faCheck} />;

        render(<FilterButton placeholder={placeholder} backgroundColor={backgroundColor} border="1em" color={backgroundColor} icon={icon} />);
    
        expect(screen.getByText(placeholder)).toBeInTheDocument();
    });

    test('should toggle background color, border color, and text color when clicked', () => {
        const placeholder = 'Test Placeholder';
        const backgroundColor = "#1c1c1e"
        const icon = <FontAwesomeIcon icon={faCheck} />;
      
        render(<FilterButton placeholder={placeholder} backgroundColor={backgroundColor} border="1em" color={backgroundColor} icon={icon} />);
        const button = screen.getByRole('button');
      
        expect(button).toHaveStyle('background-color: transparent');
        expect(button).toHaveStyle('border: 1.5px solid #DBDBDB');
        expect(button).toHaveStyle('color: #848484');
      
        fireEvent.click(button);
      
        expect(button).toHaveStyle('background-color: #F7F7F8');
        expect(button).toHaveStyle('border: 1.5px solid #4DA6B3');
        expect(button).toHaveStyle('color: #4DA6B3');
    });

    test('should call onClick function when button is clicked', () => {
        const placeholder = 'Test Placeholder';
        const backgroundColor = "#1c1c1e"
        const icon = <FontAwesomeIcon icon={faCheck} />;
        const onClick = jest.fn();
    
        render(<FilterButton placeholder={placeholder} backgroundColor={backgroundColor} border="1em" color={backgroundColor} icon={icon} onClick={onClick} />);
        const button = screen.getByRole('button');
        fireEvent.click(button);
    
        expect(onClick).toHaveBeenCalledTimes(1);
    });
})