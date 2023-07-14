import { render, screen } from '@testing-library/react';
import Home from '../../pages/Home';
import App from '../../App';

test('renders learn react link', () => {
    render(<Home />);
    const linkElement = screen.getByText(/Traveling opens the door to creating memories/i);
    expect(linkElement).toBeInTheDocument();
});
