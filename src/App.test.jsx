import { render, screen } from '@testing-library/react';
import App from './App';

describe('header', () => {
  test('Should render the header', async () => {
    render(<App />);
    const alt = screen.getByAltText('Alchemy Logo');

    const profileName = await screen.findByText('Vonta');

    expect(alt).toBeInTheDocument();
    expect(profileName).toBeInTheDocument();
  });
});

